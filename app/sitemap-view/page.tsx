"use client"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"

type NodeType = "home"|"page"|"section"|"external"|"auth"

interface SiteNode { id:string; label:string; type:NodeType; url:string; parentId:string|null; order:number; notes?:string; img?:string; wireframeId?:string }
interface SitemapMeta { id:string; name:string; createdAt:string; updatedAt:string }
interface SiteStroke { id:string; pts:{x:number;y:number}[]; color:string; width:number }
interface SiteEdge { id:string; from:string; to:string }

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
function loadSiteData(id:string):{nodes:SiteNode[];strokes:SiteStroke[];edges:SiteEdge[]}{ try{const r=localStorage.getItem(dataKey(id));const d=r?JSON.parse(r):{};return{nodes:d.nodes||[],strokes:d.strokes||[],edges:d.edges||[]}}catch{return{nodes:[],strokes:[],edges:[]}} }
function persistMap(meta:SitemapMeta,nodes:SiteNode[],strokes:SiteStroke[]=[],edges:SiteEdge[]=[]):SitemapMeta{ const m={...meta,updatedAt:ts()}; localStorage.setItem(dataKey(meta.id),JSON.stringify({nodes,strokes,edges})); const idx=listMaps().filter(x=>x.id!==meta.id); idx.unshift(m); localStorage.setItem(IDX_KEY,JSON.stringify(idx)); return m }

function ptsToPath(pts:{x:number;y:number}[]):string{
  if(pts.length<2)return""
  let d=`M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for(let i=1;i<pts.length-1;i++){const mx=((pts[i].x+pts[i+1].x)/2).toFixed(1),my=((pts[i].y+pts[i+1].y)/2).toFixed(1);d+=` Q${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)} ${mx},${my}`}
  d+=` L${pts[pts.length-1].x.toFixed(1)},${pts[pts.length-1].y.toFixed(1)}`
  return d
}
function eraseMap(id:string){ localStorage.removeItem(dataKey(id)); localStorage.setItem(IDX_KEY,JSON.stringify(listMaps().filter(m=>m.id!==id))) }
function timeAgo(iso:string){ const d=Date.now()-new Date(iso).getTime(); if(d<60000)return"just now"; if(d<3600000)return`${Math.floor(d/60000)}m ago`; if(d<86400000)return`${Math.floor(d/3600000)}h ago`; return`${Math.floor(d/86400000)}d ago` }

function exportSitemap(p:SitemapMeta){ const d=loadSiteData(p.id); const data={type:"bloxer-sitemap",version:1,meta:p,...d}; const blob=new Blob([JSON.stringify(data)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${p.name}.bloxer.json`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000) }
function importSitemap(onDone:()=>void){ const input=document.createElement("input"); input.type="file"; input.accept=".json,application/json"; input.onchange=()=>{ const file=input.files?.[0]; if(!file) return; const reader=new FileReader(); reader.onload=()=>{ try{ const data=JSON.parse(reader.result as string); if(data.type!=="bloxer-sitemap"){alert("Not a Bloxer sitemap file");return}; const newId=uid(); const newMeta:SitemapMeta={...data.meta,id:newId,name:data.meta?.name||file.name.replace(".bloxer.json",""),updatedAt:ts()}; persistMap(newMeta,data.nodes||[],data.strokes||[],data.edges||[]); onDone() }catch{ alert("Invalid file") } }; reader.readAsText(file) }; input.click() }

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
  const [wireframes,setWireframes]=useState<{id:string;name:string}[]>([])
  const [edges,setEdges]=useState<SiteEdge[]>([])
  const [connectMode,setConnectMode]=useState(false)
  const [connectFrom,setConnectFrom]=useState<string|null>(null)
  const [selectedEdgeId,setSelectedEdgeId]=useState<string|null>(null)

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
  const edgesRef=useRef(edges); useEffect(()=>{edgesRef.current=edges},[edges])
  const connectModeRef=useRef(connectMode); useEffect(()=>{connectModeRef.current=connectMode},[connectMode])
  const connectFromRef=useRef(connectFrom); useEffect(()=>{connectFromRef.current=connectFrom},[connectFrom])
  const positionsRef=useRef<Map<string,{x:number;y:number}>>(new Map())

  const positions=useMemo(()=>computeLayout(nodes,collapsed,horizontal),[nodes,collapsed,horizontal])
  positionsRef.current=positions
  const selectedNode=nodes.find(n=>n.id===selectedId)??null

  useEffect(()=>{ if(view==="dash") setProjects(listMaps()); try{setWireframes(JSON.parse(localStorage.getItem("lsk-wire-index")||"[]"))}catch{} },[view])
  useEffect(()=>{ const id=new URLSearchParams(window.location.search).get("id"); if(id) openProject(id) },[])

  const scheduleSave=useCallback((m:SitemapMeta,ns:SiteNode[],ss:SiteStroke[],es:SiteEdge[]=[])=>{ setSaveStatus("unsaved"); if(saveTimer.current)clearTimeout(saveTimer.current); saveTimer.current=setTimeout(()=>{setMeta(persistMap(m,ns,ss,es));setSaveStatus("saved")},1000) },[])

  function openProject(id:string){ const m=listMaps().find(x=>x.id===id); if(!m) return; const d=loadSiteData(id); setMeta(m);setNodes(d.nodes);setStrokes(d.strokes||[]);setEdges(d.edges||[]);setSelectedId(null);setSelectedEdgeId(null);setSaveStatus("saved");setView("editor");window.history.replaceState(null,"",`?id=${id}`) }
  function createProject(){ if(!newName.trim()) return; const m:SitemapMeta={id:uid(),name:newName.trim(),createdAt:ts(),updatedAt:ts()}; const home:SiteNode={id:uid(),label:"Home",type:"home",url:"/",parentId:null,order:0}; persistMap(m,[home],[]); setShowNew(false); setNewName(""); openProject(m.id) }
  function renameMeta(name:string){ if(!meta||!name.trim()) return; const m={...meta,name:name.trim()}; setMeta(m); scheduleSave(m,nodes,strokesRef.current) }

  function mutate(ns:SiteNode[]){ setNodes(ns); if(meta) scheduleSave(meta,ns,strokesRef.current,edgesRef.current) }
  function mutateStrokes(ss:SiteStroke[]){ setStrokes(ss); if(meta) scheduleSave(meta,nodesRef.current,ss,edgesRef.current) }
  function mutateEdges(es:SiteEdge[]){ setEdges(es); if(meta) scheduleSave(meta,nodesRef.current,strokesRef.current,es) }
  function addChild(parentId:string){ const order=nodes.filter(n=>n.parentId===parentId).length; const node:SiteNode={id:uid(),label:"New Page",type:"page",url:"",parentId,order}; mutate([...nodes,node]); setSelectedId(node.id); setTimeout(()=>{setEditingId(node.id);setEditLabel("New Page")},60) }
  function addRoot(){ const order=nodes.filter(n=>n.parentId===null).length; const node:SiteNode={id:uid(),label:"New Page",type:"page",url:"",parentId:null,order}; mutate([...nodes,node]); setSelectedId(node.id); setTimeout(()=>{setEditingId(node.id);setEditLabel("New Page")},60) }
  function deleteNode(id:string){ function desc(pid:string):string[]{ return[pid,...nodes.filter(n=>n.parentId===pid).flatMap(c=>desc(c.id))] }; const del=new Set(desc(id)); const newNodes=nodes.filter(n=>!del.has(n.id)); const newEdges=edgesRef.current.filter(e=>!del.has(e.from)&&!del.has(e.to)); setNodes(newNodes); setEdges(newEdges); if(meta) scheduleSave(meta,newNodes,strokesRef.current,newEdges); if(selectedId&&del.has(selectedId)) setSelectedId(null) }
  function updateNode(id:string,patch:Partial<SiteNode>){ mutate(nodes.map(n=>n.id===id?{...n,...patch}:n)) }
  function commitEdit(){ if(editingId&&editLabel.trim()) updateNode(editingId,{label:editLabel.trim()}); setEditingId(null) }

  function uploadNodeImage(id:string){
    const input=document.createElement("input"); input.type="file"; input.accept="image/*"
    input.onchange=()=>{
      const file=input.files?.[0]; if(!file) return
      const reader=new FileReader()
      reader.onload=()=>{
        const img=new Image()
        img.onload=()=>{
          const MAX=900; const scale=Math.min(1,MAX/Math.max(img.width,img.height))
          const c=document.createElement("canvas"); c.width=Math.round(img.width*scale); c.height=Math.round(img.height*scale)
          c.getContext("2d")!.drawImage(img,0,0,c.width,c.height)
          updateNode(id,{img:c.toDataURL("image/jpeg",.82)})
        }
        img.src=reader.result as string
      }
      reader.readAsDataURL(file)
    }
    input.click()
  }
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

  useEffect(()=>{ const onKey=(e:KeyboardEvent)=>{ const tag=(e.target as HTMLElement).tagName; if(tag==="INPUT"||tag==="TEXTAREA") return; if(e.key==="Escape"){ setSelectedId(null); setConnectMode(false); setConnectFrom(null); return }; if(e.key==="Delete"||e.key==="Backspace"){ if(selectedEdgeId){ e.preventDefault(); const ne=edgesRef.current.filter(ed=>ed.id!==selectedEdgeId); setEdges(ne); if(meta) scheduleSave(meta,nodesRef.current,strokesRef.current,ne); setSelectedEdgeId(null); return }; if(selectedId){ e.preventDefault(); deleteNode(selectedId) } } }; window.addEventListener("keydown",onKey); return()=>window.removeEventListener("keydown",onKey) },[selectedId,selectedEdgeId,nodes,meta])

  // ── Dashboard ──────────────────────────────────────────────────────────────
  if(view==="dash") return(
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5" y="1" width="6" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><rect x="1" y="11" width="5" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><rect x="10" y="11" width="5" height="4" rx="1" stroke="#7c3aed" strokeWidth="1.4"/><path d="M8 5v4M8 9H3.5v2M8 9h4.5v2" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round"/></svg></div>
          <h1 className="text-base font-bold text-gray-900">Sitemap Builder</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>importSitemap(()=>setProjects(listMaps()))} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 9V2M3.5 6l3 3 3-3M1 11h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Import
          </button>
          <button onClick={()=>setShowNew(true)} className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M2 6.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>New Sitemap</button>
        </div>
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
                <button className="absolute top-2 right-10 w-7 h-7 rounded-lg bg-white/90 flex items-center justify-center text-gray-300 hover:text-violet-500 transition-colors" title="Export" onClick={e=>{e.stopPropagation();exportSitemap(p)}}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v6M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
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
        {/* Mode toggle */}
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5 gap-0.5">
          <button onClick={()=>{setDrawMode(false);setConnectMode(false);setConnectFrom(null)}} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${!drawMode&&!connectMode?"bg-white shadow text-gray-900":"text-gray-500 hover:text-gray-900"}`} title="Select / Pan">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l3 8 2-3 3 2L2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            Select
          </button>
          <button onClick={()=>{setConnectMode(m=>!m);setConnectFrom(null);setDrawMode(false)}} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${connectMode?"bg-white shadow text-orange-600":"text-gray-500 hover:text-gray-900"}`} title="Connect nodes">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="2.5" cy="2.5" r="1.8" stroke="currentColor" strokeWidth="1.3"/><circle cx="9.5" cy="9.5" r="1.8" stroke="currentColor" strokeWidth="1.3"/><path d="M4 4l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" markerEnd="url(#)"/></svg>
            Connect
          </button>
          <button onClick={()=>{setDrawMode(d=>!d);setConnectMode(false);setConnectFrom(null)}} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${drawMode?"bg-white shadow text-violet-700":"text-gray-500 hover:text-gray-900"}`} title="Draw annotations">
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
          style={{background:"radial-gradient(circle, #c7d2fe 1px, transparent 1px)",backgroundSize:"24px 24px",backgroundColor:"#f8faff",touchAction:"none",cursor:drawMode?"crosshair":connectMode?"cell":"grab"}}
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
            if(connectModeRef.current){ setConnectFrom(null); return }
            setSelectedId(null); setSelectedEdgeId(null); commitEdit()
            if(touches.length<2){ isPanning.current=true; panStart.current={mx:e.clientX,my:e.clientY,px:pan.x,py:pan.y} }
          }}
          onWheel={onWheel}
        >
          <div style={{position:"absolute",transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:"0 0",width:0,height:0}}>
            {/* Edges */}
            <svg style={{position:"absolute",overflow:"visible",pointerEvents:"none",top:0,left:0,width:1,height:1}}>
              {/* Tree edges */}
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
              {/* Detail card connector line — only when node selected */}
              {nodes.map(n=>{
                if(!n.notes&&!n.img) return null
                if(selectedId!==n.id) return null
                const pos=positions.get(n.id); if(!pos) return null
                const x1=pos.x+NW, y=pos.y+NH/2, x2=pos.x+NW+14
                return<g key={`conn-${n.id}`}>
                  <line x1={x1} y1={y} x2={x2} y2={y} stroke="#7c3aed" strokeWidth={1.5} strokeDasharray="3,3"/>
                  <circle cx={x2} cy={y} r={3} fill="#7c3aed"/>
                </g>
              })}
            </svg>

            {/* Custom edges — dashed orange lines with arrowheads */}
            <svg style={{position:"absolute",overflow:"visible",pointerEvents:"none",top:0,left:0,width:1,height:1}}>
              <defs>
                <marker id="site-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,7 L7,3.5 z" fill="#f59e0b"/></marker>
                <marker id="site-arrow-sel" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,7 L7,3.5 z" fill="#dc2626"/></marker>
              </defs>
              {edges.map(edge=>{
                const fp=positions.get(edge.from),tp=positions.get(edge.to)
                if(!fp||!tp) return null
                const isSel=selectedEdgeId===edge.id
                const sx=fp.x+NW/2,sy=fp.y+NH/2,tx=tp.x+NW/2,ty=tp.y+NH/2
                const dx=tx-sx,dy=ty-sy,len=Math.hypot(dx,dy)||1
                const ex=tx-dx/len*28,ey=ty-dy/len*28
                const cpx=(sx+ex)/2-dy*0.25,cpy=(sy+ey)/2+dx*0.25
                return<path key={`ce-${edge.id}`} d={`M${sx},${sy} Q${cpx},${cpy} ${ex},${ey}`} fill="none" stroke={isSel?"#dc2626":"#f59e0b"} strokeWidth={isSel?2.5:1.8} strokeDasharray="5,3" markerEnd={`url(#site-arrow${isSel?"-sel":""})`}/>
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
                  style={{position:"absolute",left:pos.x,top:pos.y,width:NW,height:NH,background:c.bg,border:`2px solid ${connectFrom===n.id?"#f59e0b":isDrop?"#7c3aed":sel?"#7c3aed":c.border}`,borderRadius:10,cursor:connectMode?"pointer":dragNode?"grabbing":"grab",opacity:isDragging?.5:1,boxShadow:connectFrom===n.id?"0 0 0 3.5px #fef3c7,0 4px 12px rgba(245,158,11,.25)":isDrop?"0 0 0 4px rgba(124,58,237,.3),0 4px 12px rgba(0,0,0,.1)":sel?"0 0 0 3.5px #ede9fe,0 4px 12px rgba(124,58,237,.15)":"0 1px 4px rgba(0,0,0,.08)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"6px 12px",transition:"opacity .15s"}}
                  onClick={e=>{e.stopPropagation();if(connectModeRef.current){if(!connectFromRef.current){setConnectFrom(n.id)}else if(connectFromRef.current!==n.id){mutateEdges([...edgesRef.current,{id:uid(),from:connectFromRef.current,to:n.id}]);setConnectFrom(null)}return};setSelectedId(n.id);setEditingId(null);setSelectedEdgeId(null)}}
                  onDoubleClick={e=>{e.stopPropagation();setEditingId(n.id);setEditLabel(n.label)}}
                  onPointerDown={e=>{
                    e.stopPropagation()
                    if(connectModeRef.current) return
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
                  {/* Wireframe link badge */}
                  {n.wireframeId&&<button data-node="1" title="Open wireframe" onClick={e=>{e.stopPropagation();window.location.href=`/wireframe?id=${n.wireframeId}&fromSitemap=${meta?.id}`}}
                    style={{position:"absolute",top:-8,left:-8,width:18,height:18,borderRadius:5,background:"#4f46e5",border:"2px solid white",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 4px rgba(79,70,229,.4)"}}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x=".5" y=".5" width="8" height="3" rx="1" stroke="white" strokeWidth=".9"/><rect x=".5" y="5" width="3.5" height="3.5" rx="1" stroke="white" strokeWidth=".9"/><rect x="5" y="5" width="3.5" height="3.5" rx="1" stroke="white" strokeWidth=".9"/></svg>
                  </button>}
                  {/* Attachment indicators */}
                  {(n.img||n.notes)&&<div style={{position:"absolute",bottom:4,right:6,display:"flex",gap:3,alignItems:"center"}}>
                    {n.img&&<svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{opacity:.5}}><rect x=".5" y=".5" width="10" height="10" rx="2" stroke={c.accent} strokeWidth="1"/><circle cx="3.5" cy="3.5" r="1" fill={c.accent}/><path d="M1 8l2.5-2.5 2 2L7 6l3 3" stroke={c.accent} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    {n.notes&&<svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{opacity:.5}}><rect x=".5" y=".5" width="10" height="10" rx="2" stroke={c.accent} strokeWidth="1"/><path d="M3 4h5M3 6h4M3 8h3" stroke={c.accent} strokeWidth="1" strokeLinecap="round"/></svg>}
                  </div>}
                  {sel&&<button data-node="1" onClick={e=>{e.stopPropagation();deleteNode(n.id)}} style={{position:"absolute",top:-9,right:-9,width:18,height:18,borderRadius:"50%",background:"#ef4444",border:"2px solid white",color:"white",fontSize:13,lineHeight:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>}
                </div>
              )
            })}

            {/* Edge midpoint handles — click to select/delete */}
            {edges.map(edge=>{
              const fp=positions.get(edge.from),tp=positions.get(edge.to)
              if(!fp||!tp) return null
              const isSel=selectedEdgeId===edge.id
              const mx=(fp.x+NW/2+tp.x+NW/2)/2,my=(fp.y+NH/2+tp.y+NH/2)/2
              return(
                <div key={`eh-${edge.id}`} data-node="1"
                  style={{position:"absolute",left:mx-10,top:my-10,width:20,height:20,borderRadius:"50%",background:isSel?"#dc2626":"#f59e0b",border:"2.5px solid white",boxShadow:"0 2px 8px rgba(0,0,0,.25)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9}}
                  onClick={e=>{e.stopPropagation();if(isSel){const ne=edgesRef.current.filter(ed=>ed.id!==edge.id);setEdges(ne);if(meta)scheduleSave(meta,nodesRef.current,strokesRef.current,ne);setSelectedEdgeId(null)}else{setSelectedEdgeId(edge.id);setSelectedId(null)}}}
                  onPointerDown={e=>e.stopPropagation()}
                >
                  {isSel&&<span style={{color:"white",fontSize:14,lineHeight:1,fontWeight:900,marginTop:-1}}>×</span>}
                </div>
              )
            })}

            {/* Node detail cards — only shown when node is selected, floats right */}
            {nodes.map(n=>{
              const pos=positions.get(n.id); if(!pos) return null
              if(!n.notes&&!n.img) return null
              if(selectedId!==n.id) return null
              const c=TYPE_CONF[n.type]
              return(
                <div key={`detail-${n.id}`} data-node="1"
                  style={{position:"absolute",left:pos.x+NW+14,top:pos.y,width:188,background:"white",border:`1.5px solid #7c3aed`,borderRadius:10,overflow:"hidden",boxShadow:"0 4px 20px rgba(124,58,237,.18)",zIndex:10}}
                  onClick={e=>e.stopPropagation()}
                  onPointerDown={e=>e.stopPropagation()}
                >
                  <div style={{height:3,background:c.border}}/>
                  {n.img&&<img src={n.img} style={{width:"100%",display:"block",maxHeight:140,objectFit:"cover"}}/>}
                  {n.notes&&<div style={{padding:"7px 10px",fontSize:11,color:"#475569",lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"}}>{n.notes}</div>}
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
          {connectMode&&<div className="absolute top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full pointer-events-none shadow">{connectFrom?"Tap destination node — Esc to cancel":"Connect mode — tap source node first"}</div>}

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
              <div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">URL</label><input value={selectedNode.url} onChange={e=>updateNode(selectedNode.id,{url:e.target.value})} placeholder="/page" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50"/></div>
              <div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Notes</label><textarea value={selectedNode.notes||""} onChange={e=>updateNode(selectedNode.id,{notes:e.target.value})} placeholder="Add notes, description…" rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50 resize-none"/></div>
              <div className="mb-4">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Screenshot</label>
                {selectedNode.img?(
                  <div className="rounded-lg overflow-hidden border border-gray-200 mb-1.5">
                    <img src={selectedNode.img} style={{width:"100%",display:"block",maxHeight:100,objectFit:"cover"}}/>
                  </div>
                ):null}
                <div className="flex gap-1.5">
                  <button onClick={()=>uploadNodeImage(selectedNode.id)} className="flex-1 text-xs text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-lg py-1.5 font-semibold transition-colors">{selectedNode.img?"Replace":"Upload"}</button>
                  {selectedNode.img&&<button onClick={()=>updateNode(selectedNode.id,{img:undefined})} className="text-xs text-red-500 bg-red-50 hover:bg-red-100 rounded-lg px-2.5 py-1.5 font-semibold transition-colors">✕</button>}
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Wireframe</label>
                {wireframes.length>0&&<select value={selectedNode.wireframeId||""} onChange={e=>updateNode(selectedNode.id,{wireframeId:e.target.value||undefined})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-50 mb-1.5">
                  <option value="">No wireframe linked</option>
                  {wireframes.map(w=><option key={w.id} value={w.id}>{w.name}</option>)}
                </select>}
                {wireframes.length===0&&<p className="text-xs text-gray-400 mb-1.5">No wireframes yet</p>}
                <div className="flex gap-1.5">
                  {selectedNode.wireframeId&&<button onClick={()=>window.location.href=`/wireframe?id=${selectedNode.wireframeId}&fromSitemap=${meta?.id}`} className="flex-1 text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg py-1.5 font-semibold transition-colors">Open →</button>}
                  {selectedNode.wireframeId&&<button onClick={()=>updateNode(selectedNode.id,{wireframeId:undefined})} className="text-xs text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg px-2.5 py-1.5 font-semibold transition-colors">✕</button>}
                  {!selectedNode.wireframeId&&<button onClick={()=>{
                    const newId=uid(); const pageId=uid(); const newMeta={id:newId,name:selectedNode.label,createdAt:ts(),updatedAt:ts()}
                    localStorage.setItem(`lsk-wire-${newId}`,JSON.stringify({pages:[{id:pageId,name:"Page 1",elements:[]}]}))
                    const idx=JSON.parse(localStorage.getItem("lsk-wire-index")||"[]"); idx.unshift(newMeta); localStorage.setItem("lsk-wire-index",JSON.stringify(idx))
                    setWireframes(idx); updateNode(selectedNode.id,{wireframeId:newId})
                    window.location.href=`/wireframe?id=${newId}&fromSitemap=${meta?.id}`
                  }} className="flex-1 text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg py-1.5 font-semibold transition-colors">+ Create Wireframe</button>}
                </div>
              </div>
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
