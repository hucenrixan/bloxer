"use client"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"

type NodeType = "home"|"page"|"section"|"external"|"auth"

interface SiteNode { id:string; label:string; type:NodeType; url:string; parentId:string|null; order:number }
interface SitemapMeta { id:string; name:string; createdAt:string; updatedAt:string }
interface SiteStroke { id:string; pts:{x:number;y:number}[]; color:string; width:number }

const NW=156, NH=58, HGAP=44, VGAP=88
const TYPE_CONF:Record<NodeType,{bg:string;border:string;text:string;accent:string;label:string}>={
  home:    {bg:"#dbeafe",border:"#3b82f6",text:"#1d4ed8",accent:"#3b82f6",label:"Home"},
  page:    {bg:"#ffffff",border:"#cbd5e1",text:"#334155",accent:"#64748b",label:"Page"},
  section: {bg:"#f5f3ff",border:"#a78bfa",text:"#5b21b6",accent:"#8b5cf6",label:"Section"},
  external:{bg:"#fffbeb",border:"#fbbf24",text:"#92400e",accent:"#f59e0b",label:"External"},
  auth:    {bg:"#fdf2f8",border:"#f472b6",text:"#9d174d",accent:"#ec4899",label:"Auth"},
}

const IDX_KEY="lsk-sitemap-index"
const dataKey=(id:string)=>`lsk-sitemap-${id}`
const uid=()=>Math.random().toString(36).slice(2,9)
const ts=()=>new Date().toISOString()

function listMaps():SitemapMeta[]{ try{return JSON.parse(localStorage.getItem(IDX_KEY)||"[]")}catch{return[]} }
function loadSiteData(id:string):{nodes:SiteNode[];strokes:SiteStroke[]}{ try{const r=localStorage.getItem(dataKey(id));return r?JSON.parse(r):{nodes:[],strokes:[]}}catch{return{nodes:[],strokes:[]}} }
function persistMap(meta:SitemapMeta,nodes:SiteNode[],strokes:SiteStroke[]=[]):SitemapMeta{ const m={...meta,updatedAt:ts()}; localStorage.setItem(dataKey(meta.id),JSON.stringify({nodes,strokes})); const idx=listMaps().filter(x=>x.id!==meta.id); idx.unshift(m); localStorage.setItem(IDX_KEY,JSON.stringify(idx)); return m }

function ptsToPath(pts:{x:number;y:number}[]):string{
  if(pts.length<2)return""
  let d=`M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for(let i=1;i<pts.length-1;i++){const mx=((pts[i].x+pts[i+1].x)/2).toFixed(1),my=((pts[i].y+pts[i+1].y)/2).toFixed(1);d+=` Q${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)} ${mx},${my}`}
  d+=` L${pts[pts.length-1].x.toFixed(1)},${pts[pts.length-1].y.toFixed(1)}`
  return d
}
function eraseMap(id:string){ localStorage.removeItem(dataKey(id)); localStorage.setItem(IDX_KEY,JSON.stringify(listMaps().filter(m=>m.id!==id))) }
function timeAgo(iso:string){ const d=Date.now()-new Date(iso).getTime(); if(d<60000)return"just now"; if(d<3600000)return`${Math.floor(d/60000)}m ago`; if(d<86400000)return`${Math.floor(d/3600000)}h ago`; return`${Math.floor(d/86400000)}d ago` }

// ── Layout ─────────────────────────────────────────────────────────────────────
function buildChildMap(nodes:SiteNode[],collapsed:Set<string>){ const map=new Map<string|null,SiteNode[]>(); for(const n of nodes){ if(!map.has(n.parentId))map.set(n.parentId,[]); map.get(n.parentId)!.push(n) }; for(const l of map.values()) l.sort((a,b)=>a.order-b.order); if(collapsed.size){for(const id of collapsed){const ch=map.get(id);if(ch)for(const c of ch) map.delete(c.id)};}; return map }

function subtreeW(id:string,cm:Map<string|null,SiteNode[]>):number{ const ch=cm.get(id)||[]; if(!ch.length) return NW+HGAP; return ch.reduce((s,c)=>s+subtreeW(c.id,cm),0) }
function subtreeH(id:string,cm:Map<string|null,SiteNode[]>):number{ const ch=cm.get(id)||[]; if(!ch.length) return NH+VGAP; return ch.reduce((s,c)=>Math.max(s,subtreeH(c.id,cm)),0)+NH+VGAP }

function computeLayout(nodes:SiteNode[],collapsed:Set<string>,horizontal:boolean):Map<string,{x:number;y:number}>{
  const pos=new Map<string,{x:number;y:number}>()
  const cm=buildChildMap(nodes,collapsed)
  function place(id:string,left:number,depth:number){
    if(horizontal){
      const sh=subtreeH(id,cm)
      pos.set(id,{x:depth*(NW+VGAP)+24,y:left+sh/2-NH/2})
      let cy=left
      for(const c of cm.get(id)||[]){ const ch=subtreeH(c.id,cm); place(c.id,cy,depth+1); cy+=ch }
    } else {
      const sw=subtreeW(id,cm)
      pos.set(id,{x:left+sw/2-NW/2,y:depth*(NH+VGAP)+24})
      let cx=left
      for(const c of cm.get(id)||[]){ place(c.id,cx,depth+1); cx+=subtreeW(c.id,cm) }
    }
  }
  const roots=cm.get(null)||[]; let offset=24
  for(const r of roots){
    if(horizontal){ place(r.id,offset,0); offset+=subtreeH(r.id,cm)+HGAP }
    else { place(r.id,offset,0); offset+=subtreeW(r.id,cm)+HGAP }
  }
  return pos
}

// ── SVG Export ─────────────────────────────────────────────────────────────────
function exportSVG(nodes:SiteNode[],positions:Map<string,{x:number;y:number}>,name:string,collapsed:Set<string>){
  const visibleIds=new Set(positions.keys())
  const pad=48
  const pts=[...positions.values()]
  if(!pts.length){ alert("Nothing to export"); return }
  const minX=Math.min(...pts.map(p=>p.x))-pad, minY=Math.min(...pts.map(p=>p.y))-pad
  const W=Math.max(...pts.map(p=>p.x))+NW-minX+pad, H=Math.max(...pts.map(p=>p.y))+NH-minY+pad
  let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#f8faff"/>`
  for(const n of nodes){
    if(!n.parentId||!visibleIds.has(n.id)||!visibleIds.has(n.parentId)) continue
    const f=positions.get(n.parentId)!,t=positions.get(n.id)!
    const x1=f.x-minX+NW/2,y1=f.y-minY+NH,x2=t.x-minX+NW/2,y2=t.y-minY,mid=(y1+y2)/2
    svg+=`<path d="M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}" fill="none" stroke="#c4b5fd" stroke-width="1.5"/>`
  }
  for(const n of nodes){
    if(!visibleIds.has(n.id)) continue
    const pos=positions.get(n.id)!,c=TYPE_CONF[n.type]
    const x=pos.x-minX,y=pos.y-minY
    const hasChildren=nodes.some(ch=>ch.parentId===n.id),isCollapsed=collapsed.has(n.id)
    svg+=`<rect x="${x}" y="${y}" width="${NW}" height="${NH}" rx="10" fill="${c.bg}" stroke="${c.border}" stroke-width="2"/>`
    svg+=`<text x="${x+NW/2}" y="${y+NH/2-7}" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="700" fill="${c.accent}">${c.label.toUpperCase()}</text>`
    svg+=`<text x="${x+NW/2}" y="${y+NH/2+9}" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="600" fill="${c.text}">${n.label}</text>`
    if(n.url) svg+=`<text x="${x+NW/2}" y="${y+NH-7}" text-anchor="middle" font-family="system-ui" font-size="10" fill="${c.accent}" opacity="0.65">${n.url}</text>`
    if(hasChildren&&isCollapsed) svg+=`<circle cx="${x+NW/2}" cy="${y+NH+12}" r="9" fill="#7c3aed"/><text x="${x+NW/2}" y="${y+NH+17}" text-anchor="middle" font-family="system-ui" font-size="10" fill="white">+</text>`
  }
  svg+=`</svg>`
  const blob=new Blob([svg],{type:"image/svg+xml"})
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${name}.svg`; a.click()
  setTimeout(()=>URL.revokeObjectURL(a.href),1000)
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function SitemapPage(){
  const [view,setView]=useState<"dash"|"editor">("dash")
  const [projects,setProjects]=useState<SitemapMeta[]>([])
  const [meta,setMeta]=useState<SitemapMeta|null>(null)
  const [nodes,setNodes]=useState<SiteNode[]>([])
  const [selectedId,setSelectedId]=useState<string|null>(null)
  const [editingId,setEditingId]=useState<string|null>(null)
  const [editLabel,setEditLabel]=useState("")
  const [collapsed,setCollapsed]=useState<Set<string>>(new Set())
  const [horizontal,setHorizontal]=useState(false)
  const [saveStatus,setSaveStatus]=useState<"saved"|"unsaved">("saved")
  const [showNew,setShowNew]=useState(false)
  const [newName,setNewName]=useState("")
  const [editingName,setEditingName]=useState(false)
  const [editNameVal,setEditNameVal]=useState("")
  const [pan,setPan]=useState({x:120,y:80})
  const [zoom,setZoom]=useState(1)
  const [strokes,setStrokes]=useState<SiteStroke[]>([])
  const [liveStroke,setLiveStroke]=useState<{x:number;y:number}[]>([])
  const [drawMode,setDrawMode]=useState(false)
  const [drawColor,setDrawColor]=useState("#7c3aed")

  // Drag reparent
  const [dragNode,setDragNode]=useState<string|null>(null)
  const [dropTarget,setDropTarget]=useState<string|null>(null)
  const dragStart=useRef<{mx:number;my:number}|null>(null)
  const isDraggingNode=useRef(false)
  const canvasRef=useRef<HTMLDivElement>(null)
  const isPanning=useRef(false)
  const panStart=useRef({mx:0,my:0,px:0,py:0})
  const saveTimer=useRef<ReturnType<typeof setTimeout>|null>(null)
  const activePointers=useRef<Map<number,{x:number;y:number;type:string}>>(new Map())
  const pinchRef=useRef<{dist:number;zoom:number;pan:{x:number;y:number};mid:{x:number;y:number}}|null>(null)
  const drawRef=useRef<{id:string;pts:{x:number;y:number}[];color:string;width:number}|null>(null)
  const drawModeRef=useRef(drawMode); useEffect(()=>{drawModeRef.current=drawMode},[drawMode])
  const drawColorRef=useRef(drawColor); useEffect(()=>{drawColorRef.current=drawColor},[drawColor])
  const strokesRef=useRef(strokes); useEffect(()=>{strokesRef.current=strokes},[strokes])
  const panRef=useRef(pan); useEffect(()=>{panRef.current=pan},[pan])
  const zoomRef=useRef(zoom); useEffect(()=>{zoomRef.current=zoom},[zoom])
  const nodesRef=useRef(nodes); useEffect(()=>{nodesRef.current=nodes},[nodes])
  const positionsRef=useRef<Map<string,{x:number;y:number}>>(new Map())

  const positions=useMemo(()=>computeLayout(nodes,collapsed,horizontal),[nodes,collapsed,horizontal])
  positionsRef.current=positions
  const selectedNode=nodes.find(n=>n.id===selectedId)??null

  useEffect(()=>{ if(view==="dash") setProjects(listMaps()) },[view])
  useEffect(()=>{ const id=new URLSearchParams(window.location.search).get("id"); if(id) openProject(id) },[])

  const scheduleSave=useCallback((m:SitemapMeta,ns:SiteNode[],ss:SiteStroke[])=>{ setSaveStatus("unsaved"); if(saveTimer.current)clearTimeout(saveTimer.current); saveTimer.current=setTimeout(()=>{setMeta(persistMap(m,ns,ss));setSaveStatus("saved")},1000) },[])

  function openProject(id:string){ const m=listMaps().find(x=>x.id===id); if(!m) return; const d=loadSiteData(id); setMeta(m);setNodes(d.nodes);setStrokes(d.strokes||[]);setSelectedId(null);setSaveStatus("saved");setView("editor");window.history.replaceState(null,"",`?id=${id}`) }
  function createProject(){ if(!newName.trim()) return; const m:SitemapMeta={id:uid(),name:newName.trim(),createdAt:ts(),updatedAt:ts()}; const home:SiteNode={id:uid(),label:"Home",type:"home",url:"/",parentId:null,order:0}; persistMap(m,[home],[]); setShowNew(false); setNewName(""); openProject(m.id) }
  function renameMeta(name:string){ if(!meta||!name.trim()) return; const m={...meta,name:name.trim()}; setMeta(m); scheduleSave(m,nodes,strokesRef.current) }

  function mutate(ns:SiteNode[]){ setNodes(ns); if(meta) scheduleSave(meta,ns,strokesRef.current) }
  function mutateStrokes(ss:SiteStroke[]){ setStrokes(ss); if(meta) scheduleSave(meta,nodesRef.current,ss) }
  function addChild(parentId:string){ const order=nodes.filter(n=>n.parentId===parentId).length; const node:SiteNode={id:uid(),label:"New Page",type:"page",url:"",parentId,order}; mutate([...nodes,node]); setSelectedId(node.id); setTimeout(()=>{setEditingId(node.id);setEditLabel("New Page")},60) }
  function addRoot(){ const order=nodes.filter(n=>n.parentId===null).length; const node:SiteNode={id:uid(),label:"New Page",type:"page",url:"",parentId:null,order}; mutate([...nodes,node]); setSelectedId(node.id); setTimeout(()=>{setEditingId(node.id);setEditLabel("New Page")},60) }
  function deleteNode(id:string){ function desc(pid:string):string[]{ return[pid,...nodes.filter(n=>n.parentId===pid).flatMap(c=>desc(c.id))] }; const del=new Set(desc(id)); mutate(nodes.filter(n=>!del.has(n.id))); if(selectedId&&del.has(selectedId)) setSelectedId(null) }
  function updateNode(id:string,patch:Partial<SiteNode>){ mutate(nodes.map(n=>n.id===id?{...n,...patch}:n)) }
  function commitEdit(){ if(editingId&&editLabel.trim()) updateNode(editingId,{label:editLabel.trim()}); setEditingId(null) }
  function toggleCollapse(id:string){ setCollapsed(prev=>{ const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n }) }

  // Reparent
  function getAllDescendants(id:string):Set<string>{ const s=new Set<string>(); function walk(pid:string){ for(const n of nodes.filter(n=>n.parentId===pid)){ s.add(n.id); walk(n.id) } }; walk(id); return s }
  function reparent(nodeId:string,newParentId:string|null){ if(nodeId===newParentId) return; if(newParentId&&getAllDescendants(nodeId).has(newParentId)) return; const order=nodes.filter(n=>n.parentId===newParentId).length; mutate(nodes.map(n=>n.id===nodeId?{...n,parentId:newParentId,order}:n)) }

  // Global pointer events (mouse + touch + Apple Pencil)
  useEffect(()=>{
    const onDown=(e:PointerEvent)=>{
      activePointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
      const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")
      if(touches.length===2){
        pinchRef.current={dist:Math.hypot(touches[1].x-touches[0].x,touches[1].y-touches[0].y),zoom:zoomRef.current,pan:{...panRef.current},mid:{x:(touches[0].x+touches[1].x)/2,y:(touches[0].y+touches[1].y)/2}}
        isPanning.current=false
      }
    }
    const onMove=(e:PointerEvent)=>{
      activePointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
      const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")

      // Pinch zoom
      if(touches.length===2&&pinchRef.current){
        const pr=pinchRef.current
        const dist=Math.hypot(touches[1].x-touches[0].x,touches[1].y-touches[0].y)
        const nz=Math.min(4,Math.max(0.15,pr.zoom*(dist/pr.dist)))
        const mid={x:(touches[0].x+touches[1].x)/2,y:(touches[0].y+touches[1].y)/2}
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){const cx=pr.mid.x-rect.left,cy=pr.mid.y-rect.top,dx=mid.x-pr.mid.x,dy=mid.y-pr.mid.y; setPan({x:cx-(cx-pr.pan.x)*(nz/pr.zoom)+dx,y:cy-(cy-pr.pan.y)*(nz/pr.zoom)+dy})}
        setZoom(nz); return
      }

      // Freehand drawing
      if(drawRef.current){
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){
          const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
          const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
          drawRef.current.pts.push({x:cx,y:cy})
          setLiveStroke([...drawRef.current.pts])
        }
        return
      }

      if(dragStart.current&&!isDraggingNode.current){
        if(Math.hypot(e.clientX-dragStart.current.mx,e.clientY-dragStart.current.my)>6) isDraggingNode.current=true
      }
      if(isDraggingNode.current&&dragNode){
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){
          const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
          const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
          let hit:string|null=null
          for(const[id,pos] of positionsRef.current.entries()){
            if(id!==dragNode&&cx>=pos.x&&cx<=pos.x+NW&&cy>=pos.y&&cy<=pos.y+NH){ hit=id; break }
          }
          setDropTarget(hit)
        }
      }
      if(isPanning.current) setPan({x:panStart.current.px+e.clientX-panStart.current.mx,y:panStart.current.py+e.clientY-panStart.current.my})
    }
    const onUp=(e:PointerEvent)=>{
      activePointers.current.delete(e.pointerId)
      if(activePointers.current.size<2) pinchRef.current=null

      // Finalize stroke
      if(drawRef.current){
        const dr=drawRef.current
        if(dr.pts.length>=2){
          const s:SiteStroke={id:dr.id,pts:dr.pts,color:dr.color,width:dr.width}
          mutateStrokes([...strokesRef.current,s])
        }
        drawRef.current=null; setLiveStroke([]); return
      }

      if(isDraggingNode.current&&dragNode){
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){
          const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
          const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
          let hit:string|null=null
          for(const[id,pos] of positionsRef.current.entries()){
            if(id!==dragNode&&cx>=pos.x&&cx<=pos.x+NW&&cy>=pos.y&&cy<=pos.y+NH){ hit=id; break }
          }
          if(hit) reparent(dragNode,hit)
        }
      }
      setDragNode(null); setDropTarget(null); isDraggingNode.current=false; dragStart.current=null; isPanning.current=false
    }
    window.addEventListener("pointerdown",onDown)
    window.addEventListener("pointermove",onMove)
    window.addEventListener("pointerup",onUp)
    return()=>{ window.removeEventListener("pointerdown",onDown); window.removeEventListener("pointermove",onMove); window.removeEventListener("pointerup",onUp) }
  },[dragNode,nodes,meta])

  function onWheel(e:React.WheelEvent){ e.preventDefault(); const f=e.deltaY>0?.92:1.08; const nz=Math.min(4,Math.max(0.15,zoom*f)); const rect=canvasRef.current?.getBoundingClientRect(); if(rect){const mx=e.clientX-rect.left,my=e.clientY-rect.top; setPan(p=>({x:mx-(mx-p.x)*(nz/zoom),y:my-(my-p.y)*(nz/zoom)}))}; setZoom(nz) }

  useEffect(()=>{ const onKey=(e:KeyboardEvent)=>{ if(!selectedId) return; const tag=(e.target as HTMLElement).tagName; if(tag==="INPUT"||tag==="TEXTAREA") return; if(e.key==="Delete"||e.key==="Backspace"){ e.preventDefault(); deleteNode(selectedId) }; if(e.key==="Escape") setSelectedId(null) }; window.addEventListener("keydown",onKey); return()=>window.removeEventListener("keydown",onKey) },[selectedId,nodes])

  // ── Dashboard ──────────────────────────────────────────────────────────────
  if(view==="dash") return(
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5" y="1" width="6" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><rect x="1" y="11" width="5" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><rect x="10" y="11" width="5" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><path d="M8 5v4M8 9H3.5v2M8 9h4.5v2" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round"/></svg></div>
          <h1 className="text-base font-bold text-gray-900">Sitemap Builder</h1>
        </div>
        <button onClick={()=>setShowNew(true)} className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M2 6.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>New Sitemap</button>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        {projects.length===0?(
          <div className="text-center py-28">
            <div className="w-20 h-20 bg-violet-50 rounded-3xl flex items-center justify-center mx-auto mb-5"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="13" y="3" width="14" height="10" rx="2.5" stroke="#7c3aed" strokeWidth="2"/><rect x="3" y="27" width="12" height="10" rx="2.5" stroke="#7c3aed" strokeWidth="2"/><rect x="25" y="27" width="12" height="10" rx="2.5" stroke="#7c3aed" strokeWidth="2"/><path d="M20 13v8M20 21H9M20 21h11M9 21v6M31 21v6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No sitemaps yet</h2>
            <p className="text-gray-500 mb-6 text-sm">Plan your site structure visually</p>
            <button onClick={()=>setShowNew(true)} className="bg-violet-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors">Create Sitemap</button>
          </div>
        ):(
          <div className="grid grid-cols-3 gap-4">
            {projects.map(p=>(
              <div key={p.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-violet-200 transition-all group cursor-pointer relative" onClick={()=>openProject(p.id)}>
                <div className="h-32 flex items-center justify-center" style={{background:"linear-gradient(135deg,#f5f3ff,#ede9fe)"}}>
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none"><rect x="42" y="4" width="36" height="16" rx="3" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.2"/><rect x="4" y="56" width="34" height="16" rx="3" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.2"/><rect x="43" y="56" width="34" height="16" rx="3" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.2"/><rect x="82" y="56" width="34" height="16" rx="3" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.2"/><path d="M60 20v20M60 40H21M60 40h39M21 40v16M99 40v16" stroke="#a78bfa" strokeWidth="1.2"/></svg>
                </div>
                <div className="p-4"><h3 className="font-semibold text-gray-900 group-hover:text-violet-700 transition-colors text-sm">{p.name}</h3><p className="text-xs text-gray-400 mt-0.5">Updated {timeAgo(p.updatedAt)}</p></div>
                <button className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors" onClick={e=>{e.stopPropagation();if(confirm("Delete?")){ eraseMap(p.id); setProjects(listMaps()) }}}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></button>
              </div>
            ))}
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all cursor-pointer flex flex-col items-center justify-center h-48" onClick={()=>setShowNew(true)}>
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></div>
              <p className="text-sm font-semibold text-gray-500">New Sitemap</p>
            </div>
          </div>
        )}
      </div>
      {showNew&&(
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={()=>setShowNew(false)}>
          <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl" onClick={e=>e.stopPropagation()}>
            <h2 className="font-bold text-gray-900 mb-4">New Sitemap</h2>
            <input autoFocus value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&createProject()} placeholder="Project name…" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 mb-4"/>
            <div className="flex gap-2 justify-end">
              <button onClick={()=>setShowNew(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900">Cancel</button>
              <button onClick={createProject} disabled={!newName.trim()} className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-violet-700 disabled:opacity-40 transition-colors">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // ── Editor ─────────────────────────────────────────────────────────────────
  return(
    <div className="h-screen flex flex-col" style={{userSelect:"none"}}>
      <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 flex-shrink-0 z-20">
        <button onClick={()=>{setView("dash");window.history.replaceState(null,"","/sitemap-view")}} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Sitemaps</button>
        <div className="w-px h-5 bg-gray-200"/>
        {editingName?(
          <input autoFocus value={editNameVal} onChange={e=>setEditNameVal(e.target.value)} onBlur={()=>{renameMeta(editNameVal);setEditingName(false)}} onKeyDown={e=>{if(e.key==="Enter"||e.key==="Escape"){renameMeta(editNameVal);setEditingName(false)}}} className="font-semibold text-gray-900 text-sm border border-violet-300 rounded-lg px-2 py-0.5 outline-none focus:ring-2 focus:ring-violet-100"/>
        ):(
          <button onClick={()=>{setEditNameVal(meta?.name??"");setEditingName(true)}} className="font-semibold text-gray-900 text-sm hover:text-violet-600 transition-colors" title="Click to rename">{meta?.name}</button>
        )}
        <span className="text-xs text-gray-400">{saveStatus==="saved"?"✓ Saved":"Saving…"}</span>
        <div className="flex-1"/>
        {/* Type legend */}
        <div className="hidden md:flex items-center gap-3 mr-2">
          {(Object.entries(TYPE_CONF) as [NodeType,typeof TYPE_CONF[NodeType]][]).map(([t,c])=>(
            <div key={t} className="flex items-center gap-1"><div style={{width:10,height:10,borderRadius:3,background:c.bg,border:`1.5px solid ${c.border}`}}/><span className="text-xs text-gray-400">{c.label}</span></div>
          ))}
        </div>
        {/* Draw mode */}
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5 gap-0.5">
          <button onClick={()=>setDrawMode(false)} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${!drawMode?"bg-white shadow text-gray-900":"text-gray-500 hover:text-gray-900"}`} title="Select / Pan">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l3 8 2-3 3 2L2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            Select
          </button>
          <button onClick={()=>setDrawMode(true)} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${drawMode?"bg-white shadow text-violet-700":"text-gray-500 hover:text-gray-900"}`} title="Draw annotations">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8.5 1.5l2 2-7 7-2.5.5.5-2.5 7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            Draw
          </button>
        </div>
        {drawMode&&<>
          <input type="color" value={drawColor} onChange={e=>setDrawColor(e.target.value)} title="Stroke color" style={{width:28,height:28,padding:2,borderRadius:8,border:"1.5px solid #e2e8f0",cursor:"pointer",background:"white"}}/>
          {strokes.length>0&&<button onClick={()=>mutateStrokes([])} className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors font-medium">Clear</button>}
        </>}
        <div className="w-px h-5 bg-gray-200"/>
        {/* Layout toggle */}
        <button onClick={()=>setHorizontal(h=>!h)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${horizontal?"bg-violet-100 text-violet-700":"text-gray-500 hover:bg-gray-100"}`} title="Toggle horizontal layout">
          {horizontal?(
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8.5 4l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ):(
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M4 8.5l2.5 2.5L9 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
          {horizontal?"Horizontal":"Vertical"}
        </button>
        <button onClick={addRoot} className="flex items-center gap-1.5 bg-violet-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1.5v8M1.5 5.5h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>Add Page</button>
        <button onClick={()=>exportSVG(nodes,positions,meta?.name??"sitemap",collapsed)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3 6l3.5 3.5L10 6M1 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Export SVG</button>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-1 text-xs text-gray-600">
          <button onClick={()=>setZoom(z=>Math.max(0.15,z-.1))} className="hover:text-gray-900 w-4 text-center">−</button>
          <span className="w-9 text-center">{Math.round(zoom*100)}%</span>
          <button onClick={()=>setZoom(z=>Math.min(4,z+.1))} className="hover:text-gray-900 w-4 text-center">+</button>
        </div>
        <button onClick={()=>{setZoom(1);setPan({x:120,y:80})}} className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Reset</button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div ref={canvasRef} className="flex-1 overflow-hidden relative"
          style={{background:"radial-gradient(circle, #c7d2fe 1px, transparent 1px)",backgroundSize:"24px 24px",backgroundColor:"#f8faff",touchAction:"none",cursor:drawMode?"crosshair":"grab"}}
          onPointerDown={e=>{
            if(e.pointerType==="touch"&&(e.width>50||e.height>50)) return
            const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")
            if(touches.length>=2) return
            // Draw mode: finger or pencil draws a stroke
            if(drawModeRef.current&&!((e.target as HTMLElement).closest("[data-node]"))){
              const rect=canvasRef.current!.getBoundingClientRect()
              const cx=(e.clientX-rect.left-pan.x)/zoom, cy=(e.clientY-rect.top-pan.y)/zoom
              const w=e.pointerType==="pen"?Math.max(1.5,Math.min(6,(e.pressure||0.5)*6)):3
              drawRef.current={id:uid(),pts:[{x:cx,y:cy}],color:drawColorRef.current,width:+w.toFixed(1)}
              return
            }
            if((e.target as HTMLElement).closest("[data-node]")) return
            setSelectedId(null);commitEdit()
            if(touches.length<2){ isPanning.current=true; panStart.current={mx:e.clientX,my:e.clientY,px:pan.x,py:pan.y} }
          }}
          onWheel={onWheel}
        >
          <div style={{position:"absolute",transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:"0 0",width:0,height:0}}>
            {/* Edges */}
            <svg style={{position:"absolute",overflow:"visible",pointerEvents:"none",top:0,left:0,width:1,height:1}}>
              {nodes.map(n=>{
                if(!n.parentId) return null
                const f=positions.get(n.parentId),t=positions.get(n.id)
                if(!f||!t) return null
                const hi=selectedId===n.id||selectedId===n.parentId
                if(horizontal){
                  const x1=f.x+NW,y1=f.y+NH/2,x2=t.x,y2=t.y+NH/2,mid=(x1+x2)/2
                  return<path key={n.id} d={`M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`} fill="none" stroke={hi?"#7c3aed":"#c4b5fd"} strokeWidth={hi?2.5:1.5}/>
                }
                const x1=f.x+NW/2,y1=f.y+NH,x2=t.x+NW/2,y2=t.y,mid=(y1+y2)/2
                return<path key={n.id} d={`M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}`} fill="none" stroke={hi?"#7c3aed":"#c4b5fd"} strokeWidth={hi?2.5:1.5}/>
              })}
            </svg>

            {/* Nodes */}
            {nodes.map(n=>{
              const pos=positions.get(n.id); if(!pos) return null
              const c=TYPE_CONF[n.type]
              const sel=selectedId===n.id
              const isDrop=dropTarget===n.id
              const editing=editingId===n.id
              const hasChildren=nodes.some(ch=>ch.parentId===n.id)
              const isCollapsed=collapsed.has(n.id)
              const isDragging=dragNode===n.id
              return(
                <div key={n.id} data-node="1"
                  style={{position:"absolute",left:pos.x,top:pos.y,width:NW,height:NH,background:c.bg,border:`2px solid ${isDrop?"#7c3aed":sel?"#7c3aed":c.border}`,borderRadius:10,cursor:dragNode?"grabbing":"grab",opacity:isDragging?.5:1,boxShadow:isDrop?"0 0 0 4px rgba(124,58,237,.3),0 4px 12px rgba(0,0,0,.1)":sel?"0 0 0 3.5px #ede9fe,0 4px 12px rgba(124,58,237,.15)":"0 1px 4px rgba(0,0,0,.08)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"6px 12px",transition:"opacity .15s"}}
                  onClick={e=>{e.stopPropagation();setSelectedId(n.id);setEditingId(null)}}
                  onDoubleClick={e=>{e.stopPropagation();setEditingId(n.id);setEditLabel(n.label)}}
                  onPointerDown={e=>{
                    e.stopPropagation()
                    if(e.button!==0&&e.pointerType==="mouse") return
                    if(e.pointerType==="touch"&&(e.width>50||e.height>50)) return
                    setSelectedId(n.id)
                    dragStart.current={mx:e.clientX,my:e.clientY}
                    setDragNode(n.id)
                    isDraggingNode.current=false
                  }}
                >
                  <div style={{fontSize:9,fontWeight:700,color:c.accent,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:3}}>{c.label}</div>
                  {editing?(
                    <input autoFocus data-node="1" value={editLabel} onChange={e=>setEditLabel(e.target.value)} onBlur={commitEdit} onKeyDown={e=>{if(e.key==="Enter"||e.key==="Escape")commitEdit()}} style={{width:NW-24,fontSize:13,fontWeight:600,color:c.text,textAlign:"center",background:"transparent",border:"none",outline:"none"}}/>
                  ):(
                    <div style={{fontSize:13,fontWeight:600,color:c.text,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%",paddingInline:4}}>{n.label}</div>
                  )}
                  {n.url&&<div style={{fontSize:10,color:c.accent,opacity:.65,marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%",textAlign:"center"}}>{n.url}</div>}

                  {/* Collapse toggle */}
                  {hasChildren&&(
                    <button data-node="1" onClick={e=>{e.stopPropagation();toggleCollapse(n.id)}} title={isCollapsed?"Expand":"Collapse"}
                      style={{position:"absolute",bottom:-16,left:"50%",transform:"translateX(-50%)",width:20,height:20,borderRadius:"50%",background:isCollapsed?"#7c3aed":"#e2e8f0",border:"2px solid white",color:isCollapsed?"white":"#64748b",fontSize:10,lineHeight:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:5}}>
                      {isCollapsed?"+":"−"}
                    </button>
                  )}

                  {/* Add child (only on select) */}
                  {sel&&!hasChildren&&(
                    <button data-node="1" onClick={e=>{e.stopPropagation();addChild(n.id)}} title="Add child page"
                      style={{position:"absolute",bottom:-18,left:"50%",transform:"translateX(-50%)",width:22,height:22,borderRadius:"50%",background:"#7c3aed",border:"2.5px solid white",color:"white",fontSize:16,lineHeight:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(124,58,237,.4)"}}>+</button>
                  )}
                  {sel&&<button data-node="1" onClick={e=>{e.stopPropagation();deleteNode(n.id)}} style={{position:"absolute",top:-9,right:-9,width:18,height:18,borderRadius:"50%",background:"#ef4444",border:"2px solid white",color:"white",fontSize:13,lineHeight:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>}
                </div>
              )
            })}

            {/* Saved annotation strokes */}
            <svg style={{position:"absolute",overflow:"visible",pointerEvents:"none",top:0,left:0,width:1,height:1}}>
              {strokes.map(s=><path key={s.id} d={ptsToPath(s.pts)} fill="none" stroke={s.color} strokeWidth={s.width} strokeLinecap="round" strokeLinejoin="round"/>)}
            </svg>
          </div>

          {/* Live stroke overlay (screen space) */}
          {liveStroke.length>1&&<svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:100}}><g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}><path d={ptsToPath(liveStroke)} fill="none" stroke={drawColor} strokeWidth={(drawRef.current?.width||3)/zoom} strokeLinecap="round" strokeLinejoin="round"/></g></svg>}

          {/* Draw mode cursor hint */}
          {drawMode&&<div className="absolute top-3 left-1/2 -translate-x-1/2 bg-violet-700 text-white text-xs px-3 py-1 rounded-full pointer-events-none shadow">Draw mode — finger or pencil to annotate</div>}

          {dragNode&&dropTarget&&<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-violet-800 text-white text-xs px-4 py-2 rounded-full shadow-lg pointer-events-none">Drop to reparent</div>}
          {dragNode&&!dropTarget&&isDraggingNode.current&&<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-4 py-2 rounded-full shadow-lg pointer-events-none">Drop on a node to reparent</div>}
          {nodes.length===0&&<div className="absolute inset-0 flex items-center justify-center pointer-events-none"><p className="text-gray-400 text-sm">Click <strong className="text-gray-600">Add Page</strong> to start</p></div>}
        </div>

        {selectedNode&&(
          <div className="w-56 bg-white border-l border-gray-200 flex-shrink-0 overflow-y-auto" style={{fontSize:13}}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Properties</h3>
                <button onClick={()=>setSelectedId(null)} className="text-gray-400 hover:text-gray-700"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></button>
              </div>
              <div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Label</label><input value={selectedNode.label} onChange={e=>updateNode(selectedNode.id,{label:e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50"/></div>
              <div className="mb-4"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">URL</label><input value={selectedNode.url} onChange={e=>updateNode(selectedNode.id,{url:e.target.value})} placeholder="/page" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50"/></div>
              <div className="mb-4">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Type</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(Object.entries(TYPE_CONF) as [NodeType,typeof TYPE_CONF[NodeType]][]).map(([t,c])=>(
                    <button key={t} onClick={()=>updateNode(selectedNode.id,{type:t})} style={{background:selectedNode.type===t?c.bg:undefined,border:`1.5px solid ${selectedNode.type===t?c.border:"#e5e7eb"}`,borderRadius:8,padding:"5px 8px",fontSize:11,fontWeight:selectedNode.type===t?700:400,color:selectedNode.type===t?c.text:"#6b7280",cursor:"pointer"}}>{c.label}</button>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
                <button onClick={()=>addChild(selectedNode.id)} className="w-full text-sm text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-lg py-2 font-semibold transition-colors">+ Add Child Page</button>
                {nodes.some(n=>n.parentId===selectedNode.id)&&<button onClick={()=>toggleCollapse(selectedNode.id)} className="w-full text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg py-2 font-semibold transition-colors">{collapsed.has(selectedNode.id)?"Expand Subtree":"Collapse Subtree"}</button>}
                {selectedNode.parentId&&<button onClick={()=>reparent(selectedNode.id,null)} className="w-full text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg py-2 font-semibold transition-colors">Make Root Page</button>}
                <button onClick={()=>deleteNode(selectedNode.id)} className="w-full text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg py-2 font-semibold transition-colors">Delete Node</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
