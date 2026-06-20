"use client"
import { useState, useEffect, useRef, useCallback } from "react"

type ElType =
  | "frame" | "text" | "heading" | "rect" | "circle" | "line"
  | "image" | "video" | "avatar" | "icon" | "freehand"
  | "button" | "input" | "textarea" | "select" | "checkbox" | "radio" | "toggle" | "slider"
  | "navbar" | "card" | "divider" | "sidebar" | "modal" | "badge" | "tabs" | "table"

interface WireEl { id: string; type: ElType; x: number; y: number; w: number; h: number; text: string; checked?: boolean; toggled?: boolean; src?: string; path?: string; strokeW?: number }
interface WirePage { id: string; name: string; elements: WireEl[] }
interface WireMeta { id: string; name: string; createdAt: string; updatedAt: string }
type Handle = "nw"|"n"|"ne"|"e"|"se"|"s"|"sw"|"w"

const FRAME_PRESETS = [
  { label:"Desktop 1440", w:1440, h:900 },
  { label:"Laptop 1280", w:1280, h:800 },
  { label:"Tablet", w:768, h:1024 },
  { label:"Mobile 390", w:390, h:844 },
  { label:"Custom", w:400, h:300 },
]

const EL_DEFS: Record<ElType, { w:number; h:number; text:string; label:string; cat:string }> = {
  frame:    { w:800, h:600, text:"Desktop",          label:"Frame",     cat:"Basic" },
  text:     { w:200, h:32,  text:"Text content",     label:"Text",      cat:"Basic" },
  heading:  { w:280, h:52,  text:"Page Heading",     label:"Heading",   cat:"Basic" },
  rect:     { w:200, h:120, text:"",                 label:"Rectangle", cat:"Basic" },
  circle:   { w:100, h:100, text:"",                 label:"Circle",    cat:"Basic" },
  line:     { w:200, h:2,   text:"",                 label:"Line",      cat:"Basic" },
  image:    { w:240, h:160, text:"Image",            label:"Image",     cat:"Media" },
  video:    { w:320, h:180, text:"Video",            label:"Video",     cat:"Media" },
  avatar:   { w:56,  h:56,  text:"AB",               label:"Avatar",    cat:"Media" },
  icon:     { w:40,  h:40,  text:"☆",               label:"Icon",      cat:"Media" },
  freehand: { w:1,   h:1,   text:"",                label:"Freehand",  cat:"_" },
  button:   { w:120, h:40,  text:"Button",           label:"Button",    cat:"Form" },
  input:    { w:240, h:44,  text:"Placeholder…",     label:"Input",     cat:"Form" },
  textarea: { w:240, h:100, text:"Enter text…",      label:"Textarea",  cat:"Form" },
  select:   { w:200, h:44,  text:"Choose option",    label:"Select",    cat:"Form" },
  checkbox: { w:180, h:28,  text:"Checkbox label",   label:"Checkbox",  cat:"Form" },
  radio:    { w:180, h:28,  text:"Radio option",     label:"Radio",     cat:"Form" },
  toggle:   { w:100, h:32,  text:"Toggle",           label:"Toggle",    cat:"Form" },
  slider:   { w:240, h:36,  text:"",                 label:"Slider",    cat:"Form" },
  navbar:   { w:680, h:64,  text:"Logo",             label:"Navbar",    cat:"Layout" },
  card:     { w:280, h:200, text:"Card Title",       label:"Card",      cat:"Layout" },
  divider:  { w:400, h:16,  text:"",                 label:"Divider",   cat:"Layout" },
  sidebar:  { w:200, h:360, text:"Sidebar",          label:"Sidebar",   cat:"Layout" },
  modal:    { w:400, h:280, text:"Modal Title",      label:"Modal",     cat:"Layout" },
  badge:    { w:72,  h:26,  text:"Badge",            label:"Badge",     cat:"Layout" },
  tabs:     { w:400, h:44,  text:"Tab 1,Tab 2,Tab 3",label:"Tabs",      cat:"Layout" },
  table:    { w:480, h:200, text:"Col A,Col B,Col C",label:"Table",     cat:"Data" },
}

const IDX_KEY = "lsk-wire-index"
const dataKey = (id:string) => `lsk-wire-${id}`
const uid = () => Math.random().toString(36).slice(2,9)
const ts = () => new Date().toISOString()

function listWires():WireMeta[] { try { return JSON.parse(localStorage.getItem(IDX_KEY)||"[]") } catch { return [] } }
function loadWire(id:string):WirePage[] { try { const r=localStorage.getItem(dataKey(id)); return r?JSON.parse(r).pages:[] } catch { return [] } }
function persistWire(meta:WireMeta,pages:WirePage[]):WireMeta {
  const m={...meta,updatedAt:ts()}
  localStorage.setItem(dataKey(meta.id),JSON.stringify({pages}))
  const idx=listWires().filter(x=>x.id!==meta.id); idx.unshift(m)
  localStorage.setItem(IDX_KEY,JSON.stringify(idx)); return m
}
function eraseWire(id:string) { localStorage.removeItem(dataKey(id)); localStorage.setItem(IDX_KEY,JSON.stringify(listWires().filter(m=>m.id!==id))) }
function timeAgo(iso:string) { const d=Date.now()-new Date(iso).getTime(); if(d<60000)return"just now"; if(d<3600000)return`${Math.floor(d/60000)}m ago`; if(d<86400000)return`${Math.floor(d/3600000)}h ago`; return`${Math.floor(d/86400000)}d ago` }

function exportWire(p:WireMeta){ const pages=loadWire(p.id); const data={type:"bloxer-wireframe",version:1,meta:p,pages}; const blob=new Blob([JSON.stringify(data)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${p.name}.bloxer.json`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000) }
function importWire(onDone:()=>void){ const input=document.createElement("input"); input.type="file"; input.accept=".json,application/json"; input.onchange=()=>{ const file=input.files?.[0]; if(!file) return; const reader=new FileReader(); reader.onload=()=>{ try{ const data=JSON.parse(reader.result as string); if(data.type!=="bloxer-wireframe"){alert("Not a Bloxer wireframe file");return}; const newId=uid(); const newMeta:WireMeta={...data.meta,id:newId,name:data.meta?.name||file.name.replace(".bloxer.json",""),updatedAt:ts()}; persistWire(newMeta,data.pages||[]); onDone() }catch{ alert("Invalid file") } }; reader.readAsText(file) }; input.click() }

// ── Canvas element visuals ─────────────────────────────────────────────────────
function ElVisual({ el, editing, onCommit }:{ el:WireEl; editing:boolean; onCommit:(t:string)=>void }) {
  const { type, w, h, text } = el
  if (type==="frame") return (
    <div style={{width:"100%",height:"100%",position:"relative"}}>
      <div style={{position:"absolute",top:-22,left:0,fontSize:11,fontWeight:700,color:"#6366f1",whiteSpace:"nowrap",letterSpacing:"0.03em"}}>{text||"Frame"}</div>
      <div style={{width:"100%",height:"100%",border:"2px solid #c7d2fe",background:"#fafafe"}}/>
    </div>
  )
  if (type==="text") return <div style={{fontSize:13,color:"#374151",lineHeight:1.5,wordBreak:"break-word"}}>{editing?<textarea autoFocus defaultValue={text} onBlur={e=>onCommit(e.target.value)} onKeyDown={e=>e.key==="Escape"&&onCommit(text)} style={{position:"absolute",inset:0,resize:"none",border:"none",outline:"none",background:"transparent",fontSize:13,fontFamily:"inherit",padding:0}}/>:text}</div>
  if (type==="heading") return <div style={{fontSize:22,fontWeight:700,color:"#111827",lineHeight:1.2}}>{editing?<textarea autoFocus defaultValue={text} onBlur={e=>onCommit(e.target.value)} onKeyDown={e=>e.key==="Escape"&&onCommit(text)} style={{position:"absolute",inset:0,resize:"none",border:"none",outline:"none",background:"transparent",fontSize:22,fontWeight:700,fontFamily:"inherit",padding:0}}/>:text}</div>
  if (type==="line") return <div style={{width:"100%",height:2,background:"#94a3b8",borderRadius:1}}/>
  if (type==="rect") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:4}}/>
  if (type==="circle") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:"50%"}}/>
  if (type==="image") {
    if (el.src) return <div style={{width:"100%",height:"100%",borderRadius:4,overflow:"hidden",position:"relative"}}><img src={el.src} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} draggable={false}/>{text&&<span style={{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",fontSize:10,color:"white",background:"rgba(0,0,0,.45)",padding:"1px 6px",borderRadius:4,whiteSpace:"nowrap"}}>{text}</span>}</div>
    return <div style={{width:"100%",height:"100%",border:"1.5px dashed #94a3b8",borderRadius:4,background:"#f1f5f9",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6}}><svg style={{width:28,height:28,color:"#94a3b8"}} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span style={{fontSize:10,color:"#94a3b8",textAlign:"center",lineHeight:1.4}}>{text||"Image"}<br/>Double-click to upload</span></div>
  }
  if (type==="video") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:4,background:"#0f172a",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:0,height:0,borderTop:"16px solid transparent",borderBottom:"16px solid transparent",borderLeft:"28px solid rgba(255,255,255,.7)",marginLeft:6}}/></div>
  if (type==="avatar") return <div style={{width:"100%",height:"100%",borderRadius:"50%",background:"#e2e8f0",border:"1.5px solid #94a3b8",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:Math.min(w,h)*.3,fontWeight:700,color:"#475569"}}>{text.slice(0,2)}</span></div>
  if (type==="icon") return <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:Math.min(w,h)*.6,color:"#64748b"}}>{text}</div>
  if (type==="button") return <div style={{width:"100%",height:"100%",border:"1.5px solid #334155",borderRadius:8,background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:13,fontWeight:600,color:"#334155"}}>{text}</span></div>
  if (type==="input") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:8,background:"white",display:"flex",alignItems:"center",paddingLeft:12,position:"relative"}}><div style={{position:"absolute",left:12,top:4,fontSize:9,color:"#94a3b8",fontWeight:600}}>LABEL</div><span style={{fontSize:13,color:"#9ca3af"}}>{text}</span></div>
  if (type==="textarea") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:8,background:"white",padding:"8px 12px"}}><div style={{fontSize:9,color:"#94a3b8",fontWeight:600,marginBottom:4}}>LABEL</div><span style={{fontSize:13,color:"#9ca3af"}}>{text}</span></div>
  if (type==="select") return <div style={{width:"100%",height:"100%",border:"1.5px solid #94a3b8",borderRadius:8,background:"white",display:"flex",alignItems:"center",paddingLeft:12,paddingRight:8,justifyContent:"space-between"}}><span style={{fontSize:13,color:"#9ca3af"}}>{text}</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
  if (type==="checkbox") return <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:18,height:18,border:"1.5px solid #64748b",borderRadius:4,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:el.checked?"#334155":"white"}}>{el.checked&&<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div><span style={{fontSize:13,color:"#374151"}}>{text}</span></div>
  if (type==="radio") return <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:18,height:18,border:"1.5px solid #64748b",borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>{el.checked&&<div style={{width:8,height:8,borderRadius:"50%",background:"#334155"}}/>}</div><span style={{fontSize:13,color:"#374151"}}>{text}</span></div>
  if (type==="toggle") return <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:44,height:24,borderRadius:12,background:el.toggled?"#334155":"#e2e8f0",position:"relative",flexShrink:0}}><div style={{position:"absolute",top:3,left:el.toggled?23:3,width:18,height:18,borderRadius:"50%",background:"white",boxShadow:"0 1px 3px rgba(0,0,0,.2)",transition:"left .15s"}}/></div><span style={{fontSize:13,color:"#374151"}}>{text}</span></div>
  if (type==="slider") return <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center"}}><div style={{flex:1,position:"relative",height:4,background:"#e2e8f0",borderRadius:2}}><div style={{position:"absolute",left:0,width:"40%",height:"100%",background:"#334155",borderRadius:2}}/><div style={{position:"absolute",left:"40%",top:"50%",transform:"translate(-50%,-50%)",width:16,height:16,borderRadius:"50%",background:"white",border:"2px solid #334155"}}/></div></div>
  if (type==="badge") return <div style={{width:"100%",height:"100%",borderRadius:999,border:"1.5px solid #64748b",display:"flex",alignItems:"center",justifyContent:"center",background:"#f1f5f9"}}><span style={{fontSize:11,fontWeight:600,color:"#334155"}}>{text}</span></div>
  if (type==="divider") return <div style={{width:"100%",position:"absolute",top:"50%",height:1,background:"#cbd5e1"}}/>
  if (type==="navbar") return <div style={{width:"100%",height:"100%",border:"1px solid #e2e8f0",borderRadius:6,background:"white",display:"flex",alignItems:"center",paddingInline:20,gap:32}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:6,background:"#e2e8f0"}}/><span style={{fontSize:14,fontWeight:700,color:"#111827"}}>{text}</span></div>{["Home","About","Services","Contact"].map(l=><span key={l} style={{fontSize:13,color:"#6b7280"}}>{l}</span>)}<div style={{flex:1}}/><div style={{width:80,height:30,borderRadius:6,border:"1.5px solid #334155",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:12,fontWeight:600,color:"#334155"}}>Sign In</span></div></div>
  if (type==="card") return <div style={{width:"100%",height:"100%",border:"1px solid #e2e8f0",borderRadius:12,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"}}><div style={{height:"45%",background:"#f1f5f9",borderBottom:"1px solid #e2e8f0"}}/><div style={{flex:1,padding:"12px 14px"}}><div style={{fontSize:14,fontWeight:700,color:"#111827",marginBottom:6}}>{text}</div>{[1,2].map(i=><div key={i} style={{height:8,background:"#e2e8f0",borderRadius:4,marginBottom:6,width:i===2?"60%":"100%"}}/>)}</div></div>
  if (type==="sidebar") return <div style={{width:"100%",height:"100%",border:"1px solid #e2e8f0",borderRadius:8,background:"#f8fafc",padding:12,display:"flex",flexDirection:"column",gap:4}}><div style={{fontSize:10,fontWeight:700,color:"#9ca3af",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>{text}</div>{["Dashboard","Projects","Analytics","Settings","Help"].map(l=><div key={l} style={{height:32,borderRadius:6,background:l==="Projects"?"#e2e8f0":"transparent",display:"flex",alignItems:"center",paddingLeft:10,fontSize:13,color:"#374151"}}>{l}</div>)}</div>
  if (type==="modal") return <div style={{width:"100%",height:"100%",border:"1px solid #e2e8f0",borderRadius:12,background:"white",boxShadow:"0 20px 60px rgba(0,0,0,.15)",display:"flex",flexDirection:"column"}}><div style={{padding:"16px 20px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:15,fontWeight:700,color:"#111827"}}>{text}</span><div style={{width:20,height:20,borderRadius:"50%",background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#6b7280"}}>×</div></div><div style={{flex:1,padding:"16px 20px"}}>{[1,2,3].map(i=><div key={i} style={{height:8,background:"#f1f5f9",borderRadius:4,marginBottom:8,width:i===3?"50%":"100%"}}/>)}</div><div style={{padding:"12px 20px",borderTop:"1px solid #f1f5f9",display:"flex",gap:8,justifyContent:"flex-end"}}><div style={{width:72,height:32,borderRadius:6,border:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"#6b7280"}}>Cancel</div><div style={{width:72,height:32,borderRadius:6,background:"#334155",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"white",fontWeight:600}}>Confirm</div></div></div>
  if (type==="tabs") { const ts2=text.split(",").map(t=>t.trim()).filter(Boolean); return <div style={{width:"100%",height:"100%",display:"flex",alignItems:"flex-end",borderBottom:"2px solid #e2e8f0"}}>{ts2.map((t,i)=><div key={t} style={{padding:"8px 18px",fontSize:13,fontWeight:i===0?700:400,color:i===0?"#111827":"#6b7280",borderBottom:i===0?"2px solid #334155":"2px solid transparent",marginBottom:-2}}>{t}</div>)}</div> }
  if (type==="table") { const cols=text.split(",").map(t=>t.trim()).filter(Boolean); return <div style={{width:"100%",height:"100%",border:"1px solid #e2e8f0",borderRadius:8,overflow:"hidden"}}><div style={{display:"flex",background:"#f8fafc",borderBottom:"1px solid #e2e8f0"}}>{cols.map(c=><div key={c} style={{flex:1,padding:"8px 12px",fontSize:11,fontWeight:700,color:"#374151",borderRight:"1px solid #e2e8f0"}}>{c}</div>)}</div>{[1,2,3].map(r=><div key={r} style={{display:"flex",borderBottom:"1px solid #f1f5f9"}}>{cols.map((_,i)=><div key={i} style={{flex:1,padding:"8px 12px",borderRight:"1px solid #f1f5f9"}}><div style={{height:8,background:"#f1f5f9",borderRadius:4,width:"70%"}}/></div>)}</div>)}</div> }
  if (type==="freehand") return <svg width={w} height={h} style={{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none"}}><path d={el.path||""} fill="none" stroke="#1e293b" strokeWidth={el.strokeW||2} strokeLinecap="round" strokeLinejoin="round"/></svg>
  return <div style={{width:"100%",height:"100%",border:"1.5px dashed #94a3b8",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#94a3b8"}}>{type}</div>
}

// ── Library icon previews ──────────────────────────────────────────────────────
function LibIcon({ type }:{ type:ElType }) {
  const s:Record<string,React.ReactNode> = {
    frame:    <div style={{width:28,height:20,border:"2px solid #c7d2fe",background:"#fafafe"}}/>,
    text:     <div style={{fontSize:11,fontWeight:600,color:"#374151"}}>Aa</div>,
    heading:  <div style={{fontSize:14,fontWeight:800,color:"#111827"}}>H1</div>,
    rect:     <div style={{width:22,height:15,border:"1.5px solid #64748b",borderRadius:2}}/>,
    circle:   <div style={{width:17,height:17,border:"1.5px solid #64748b",borderRadius:"50%"}}/>,
    line:     <div style={{width:24,height:2,background:"#64748b",borderRadius:1}}/>,
    image:    <div style={{width:22,height:15,border:"1.5px solid #64748b",background:"#f1f5f9",borderRadius:2,position:"relative",overflow:"hidden"}}><svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} viewBox="0 0 22 15"><line x1="0" y1="0" x2="22" y2="15" stroke="#cbd5e1" strokeWidth="1"/><line x1="22" y1="0" x2="0" y2="15" stroke="#cbd5e1" strokeWidth="1"/></svg></div>,
    avatar:   <div style={{width:20,height:20,borderRadius:"50%",background:"#e2e8f0",border:"1.5px solid #94a3b8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:"#64748b"}}>AB</div>,
    button:   <div style={{width:38,height:16,border:"1.5px solid #334155",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:600,color:"#334155"}}>Btn</div>,
    input:    <div style={{width:38,height:15,border:"1.5px solid #94a3b8",borderRadius:3,background:"white",paddingLeft:3,display:"flex",alignItems:"center"}}><div style={{width:20,height:1.5,background:"#d1d5db",borderRadius:1}}/></div>,
    checkbox: <div style={{width:14,height:14,border:"1.5px solid #64748b",borderRadius:3}}/>,
    radio:    <div style={{width:14,height:14,border:"1.5px solid #64748b",borderRadius:"50%"}}/>,
    toggle:   <div style={{width:30,height:15,borderRadius:8,background:"#e2e8f0",position:"relative"}}><div style={{position:"absolute",top:2,left:2,width:11,height:11,borderRadius:"50%",background:"white",boxShadow:"0 1px 2px rgba(0,0,0,.2)"}}/></div>,
    navbar:   <div style={{width:38,height:13,border:"1px solid #e2e8f0",borderRadius:2,background:"white",display:"flex",alignItems:"center",paddingLeft:3,gap:3}}><div style={{width:7,height:7,borderRadius:1,background:"#e2e8f0"}}/><div style={{width:16,height:1.5,background:"#e2e8f0",borderRadius:1}}/></div>,
    card:     <div style={{width:30,height:22,border:"1px solid #e2e8f0",borderRadius:4,background:"white",overflow:"hidden"}}><div style={{height:10,background:"#f1f5f9"}}/><div style={{padding:"3px 4px"}}><div style={{height:2,background:"#e2e8f0",borderRadius:1}}/></div></div>,
    divider:  <div style={{width:38,height:1.5,background:"#cbd5e1",borderRadius:1}}/>,
    modal:    <div style={{width:30,height:22,border:"1px solid #e2e8f0",borderRadius:4,background:"white",overflow:"hidden"}}><div style={{height:7,borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",paddingLeft:4}}><div style={{width:14,height:2,background:"#334155",borderRadius:1}}/></div></div>,
    badge:    <div style={{width:30,height:13,border:"1.5px solid #64748b",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:600,color:"#334155",background:"#f1f5f9"}}>tag</div>,
    tabs:     <div style={{width:38,height:13,borderBottom:"1.5px solid #e2e8f0",display:"flex",alignItems:"flex-end",gap:1}}>{[1,2,3].map(i=><div key={i} style={{width:10,height:9,borderBottom:i===1?"1.5px solid #334155":"none",marginBottom:-1.5,fontSize:5,color:i===1?"#334155":"#9ca3af",display:"flex",alignItems:"center",justifyContent:"center"}}>T{i}</div>)}</div>,
    table:    <div style={{width:38,height:22,border:"1px solid #e2e8f0",borderRadius:2,overflow:"hidden"}}><div style={{height:7,background:"#f8fafc",borderBottom:"1px solid #e2e8f0"}}/>{[1,2].map(i=><div key={i} style={{height:6,borderBottom:"1px solid #f1f5f9"}}/>)}</div>,
    sidebar:  <div style={{width:16,height:22,border:"1px solid #e2e8f0",borderRadius:2,background:"#f8fafc",padding:2,display:"flex",flexDirection:"column",gap:1}}>{[1,2,3].map(i=><div key={i} style={{height:4,background:i===1?"#e2e8f0":"transparent",borderRadius:1}}/>)}</div>,
  }
  return <div style={{width:38,height:28,display:"flex",alignItems:"center",justifyContent:"center"}}>{s[type]??<div style={{width:18,height:18,border:"1.5px solid #94a3b8",borderRadius:3}}/>}</div>
}

function ptsToPath(pts:{x:number;y:number}[]):string{
  if(pts.length<2)return""
  let d=`M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for(let i=1;i<pts.length-1;i++){const mx=((pts[i].x+pts[i+1].x)/2).toFixed(1),my=((pts[i].y+pts[i+1].y)/2).toFixed(1);d+=` Q${pts[i].x.toFixed(1)},${pts[i].y.toFixed(1)} ${mx},${my}`}
  d+=` L${pts[pts.length-1].x.toFixed(1)},${pts[pts.length-1].y.toFixed(1)}`
  return d
}

// ── Canvas export ──────────────────────────────────────────────────────────────
function rr(ctx:CanvasRenderingContext2D,x:number,y:number,w:number,h:number,r:number){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}

function drawOnCanvas(ctx:CanvasRenderingContext2D,el:WireEl,imgCache?:Map<string,HTMLImageElement>) {
  const {type,w,h,text}=el
  ctx.strokeStyle="#94a3b8"; ctx.lineWidth=1.5; ctx.fillStyle="white"
  switch(type) {
    case"frame": ctx.strokeStyle="#c7d2fe"; ctx.lineWidth=2; rr(ctx,0,0,w,h,0); ctx.fillStyle="#fafafe"; ctx.fill(); ctx.stroke(); ctx.font="bold 11px system-ui"; ctx.fillStyle="#6366f1"; ctx.fillText(text||"Frame",0,-8); break
    case"rect": rr(ctx,0,0,w,h,4); ctx.stroke(); break
    case"circle": ctx.beginPath(); ctx.ellipse(w/2,h/2,w/2,h/2,0,0,Math.PI*2); ctx.stroke(); break
    case"line": ctx.beginPath(); ctx.moveTo(0,h/2); ctx.lineTo(w,h/2); ctx.stroke(); break
    case"image": {
      const cached=imgCache?.get(el.id)
      if(cached){ ctx.save(); rr(ctx,0,0,w,h,4); ctx.clip(); ctx.drawImage(cached,0,0,w,h); ctx.restore(); rr(ctx,0,0,w,h,4); ctx.stroke() }
      else{ rr(ctx,0,0,w,h,4); ctx.fillStyle="#f1f5f9"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(w,h); ctx.moveTo(w,0); ctx.lineTo(0,h); ctx.strokeStyle="#cbd5e1"; ctx.stroke(); ctx.font="11px system-ui"; ctx.fillStyle="#64748b"; ctx.textAlign="center"; ctx.fillText(text||"Image",w/2,h/2+4) }
      break
    }
    case"video": rr(ctx,0,0,w,h,4); ctx.fillStyle="#0f172a"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(w/2-12,h/2-14); ctx.lineTo(w/2+14,h/2); ctx.lineTo(w/2-12,h/2+14); ctx.closePath(); ctx.fillStyle="rgba(255,255,255,.7)"; ctx.fill(); break
    case"avatar": ctx.beginPath(); ctx.arc(w/2,h/2,Math.min(w,h)/2-1,0,Math.PI*2); ctx.fillStyle="#e2e8f0"; ctx.fill(); ctx.stroke(); ctx.font=`bold ${Math.min(w,h)*.28}px system-ui`; ctx.fillStyle="#475569"; ctx.textAlign="center"; ctx.fillText(text.slice(0,2),w/2,h/2+Math.min(w,h)*.1); break
    case"text": ctx.font="13px system-ui"; ctx.fillStyle="#374151"; ctx.textAlign="left"; ctx.fillText(text||"",0,16); break
    case"heading": ctx.font="bold 22px system-ui"; ctx.fillStyle="#111827"; ctx.textAlign="left"; ctx.fillText(text||"",0,28); break
    case"button": rr(ctx,0,0,w,h,8); ctx.strokeStyle="#334155"; ctx.stroke(); ctx.font="bold 13px system-ui"; ctx.fillStyle="#334155"; ctx.textAlign="center"; ctx.fillText(text||"",w/2,h/2+5); break
    case"input": case"textarea": case"select": rr(ctx,0,0,w,h,8); ctx.stroke(); ctx.font="13px system-ui"; ctx.fillStyle="#9ca3af"; ctx.textAlign="left"; ctx.fillText(text||"",12,h/2+5); break
    case"checkbox": ctx.strokeRect(0,0,16,16); ctx.font="13px system-ui"; ctx.fillStyle="#374151"; ctx.textAlign="left"; ctx.fillText(text||"",26,12); break
    case"radio": ctx.beginPath(); ctx.arc(8,8,8,0,Math.PI*2); ctx.stroke(); ctx.font="13px system-ui"; ctx.fillStyle="#374151"; ctx.textAlign="left"; ctx.fillText(text||"",24,12); break
    case"toggle": rr(ctx,0,4,44,16,8); ctx.stroke(); ctx.beginPath(); ctx.arc(12,12,7,0,Math.PI*2); ctx.fillStyle="white"; ctx.fill(); ctx.stroke(); ctx.font="13px system-ui"; ctx.fillStyle="#374151"; ctx.textAlign="left"; ctx.fillText(text||"",54,16); break
    case"divider": ctx.beginPath(); ctx.moveTo(0,h/2); ctx.lineTo(w,h/2); ctx.stroke(); break
    case"navbar": rr(ctx,0,0,w,h,6); ctx.fill(); ctx.stroke(); ctx.font="bold 14px system-ui"; ctx.fillStyle="#334155"; ctx.textAlign="left"; ctx.fillText(text||"Logo",16,h/2+5); break
    case"badge": rr(ctx,0,0,w,h,h/2); ctx.fillStyle="#f1f5f9"; ctx.fill(); ctx.stroke(); ctx.font="bold 11px system-ui"; ctx.fillStyle="#334155"; ctx.textAlign="center"; ctx.fillText(text||"",w/2,h/2+4); break
    case"card": rr(ctx,0,0,w,h,12); ctx.fill(); ctx.stroke(); ctx.fillStyle="#f1f5f9"; ctx.fillRect(2,2,w-4,h*.44); ctx.font="bold 13px system-ui"; ctx.fillStyle="#111827"; ctx.textAlign="left"; ctx.fillText(text||"",14,h*.55+14); break
    case"freehand": if(el.path){const p=new Path2D(el.path);ctx.strokeStyle="#1e293b";ctx.lineWidth=el.strokeW||2;ctx.lineCap="round";ctx.lineJoin="round";ctx.stroke(p)} break
    default: rr(ctx,0,0,w,h,4); ctx.stroke()
  }
}

async function exportPNG(els:WireEl[], name:string) {
  if(!els.length){alert("Nothing to export");return}
  const pad=48
  const frames=els.filter(e=>e.type==="frame")
  const others=els.filter(e=>e.type!=="frame")
  const sorted=[...frames,...others]
  const minX=Math.min(...sorted.map(e=>e.x))-pad
  const minY=Math.min(...sorted.map(e=>e.y))-pad
  const W=Math.max(...sorted.map(e=>e.x+e.w))-minX+pad
  const H=Math.max(...sorted.map(e=>e.y+e.h))-minY+pad
  const imgCache=new Map<string,HTMLImageElement>()
  await Promise.all(sorted.filter(e=>e.src).map(e=>new Promise<void>(resolve=>{
    const img=new Image(); img.onload=()=>{imgCache.set(e.id,img);resolve()}; img.onerror=()=>resolve(); img.src=e.src!
  })))
  const canvas=document.createElement("canvas")
  canvas.width=W*2; canvas.height=H*2
  const ctx=canvas.getContext("2d")!
  ctx.scale(2,2)
  ctx.fillStyle="#f8fafc"; ctx.fillRect(0,0,W,H)
  for(const el of sorted){ctx.save();ctx.translate(el.x-minX,el.y-minY);drawOnCanvas(ctx,el,imgCache);ctx.restore()}
  canvas.toBlob(blob=>{
    if(!blob)return
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${name}.png`; a.click()
    setTimeout(()=>URL.revokeObjectURL(a.href),1000)
  })
}

const HANDLES:Handle[]=["nw","n","ne","e","se","s","sw","w"]
const HCURSOR:Record<Handle,string>={nw:"nw-resize",n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize"}
function hPos(h:Handle,w:number,hh:number){const cx=w/2,cy=hh/2;const m:Record<Handle,[number,number]>={nw:[0,0],n:[0,cx],ne:[0,w],e:[cy,w],se:[hh,w],s:[hh,cx],sw:[hh,0],w:[cy,0]};const[top,left]=m[h];return{top:top-4,left:left-4}}

// ── Main component ─────────────────────────────────────────────────────────────
export default function WireframePage() {
  const [view, setView] = useState<"dash"|"editor">("dash")
  const [projects, setProjects] = useState<WireMeta[]>([])
  const [meta, setMeta] = useState<WireMeta|null>(null)
  const [pages, setPages] = useState<WirePage[]>([])
  const [pageId, setPageId] = useState("")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [editingId, setEditingId] = useState<string|null>(null)
  const [clipboard, setClipboard] = useState<WireEl[]>([])
  const [contextMenu, setContextMenu] = useState<{x:number;y:number;elIds:string[]}|null>(null)
  const [snapGrid, setSnapGrid] = useState(false)
  const [selBox, setSelBox] = useState<{x:number;y:number;w:number;h:number}|null>(null)
  const [ghost, setGhost] = useState<{type:ElType;x:number;y:number}|null>(null)
  const [pan, setPan] = useState({x:60,y:60})
  const [zoom, setZoom] = useState(1)
  const [saveStatus, setSaveStatus] = useState<"saved"|"unsaved">("saved")
  const [showNew, setShowNew] = useState(false)
  const [newName, setNewName] = useState("")
  const [editingName, setEditingName] = useState(false)
  const [editNameVal, setEditNameVal] = useState("")
  const [undoStack, setUndoStack] = useState<WireEl[][]>([])
  const [redoStack, setRedoStack] = useState<WireEl[][]>([])
  const [showFrameMenu, setShowFrameMenu] = useState(false)
  const [tool, setTool] = useState<"select"|"pencil">("select")
  const [liveStroke, setLiveStroke] = useState<{x:number;y:number}[]>([])
  const [fromSitemapId, setFromSitemapId] = useState<string|null>(null)

  const canvasRef = useRef<HTMLDivElement>(null)
  const saveTimer = useRef<ReturnType<typeof setTimeout>|null>(null)
  const isPanning = useRef(false)
  const panStart = useRef({mx:0,my:0,px:0,py:0})
  const dragging = useRef<{ids:string[];startPos:Map<string,{x:number;y:number}>;startMX:number;startMY:number}|null>(null)
  const resizing = useRef<{id:string;handle:Handle;ox:number;oy:number;ow:number;oh:number;startMX:number;startMY:number}|null>(null)
  const libDrag = useRef<ElType|null>(null)
  const selRectRef = useRef<{startCX:number;startCY:number;startMX:number;startMY:number;active:boolean}|null>(null)
  const activePointers = useRef<Map<number,{x:number;y:number;type:string}>>(new Map())
  const pinchRef = useRef<{dist:number;zoom:number;pan:{x:number;y:number};mid:{x:number;y:number}}|null>(null)
  const drawRef = useRef<{id:string;pts:{x:number;y:number}[];strokeW:number}|null>(null)
  const panRef = useRef(pan); useEffect(()=>{panRef.current=pan},[pan])
  const zoomRef = useRef(zoom); useEffect(()=>{zoomRef.current=zoom},[zoom])
  const snapRef = useRef(snapGrid); useEffect(()=>{snapRef.current=snapGrid},[snapGrid])
  const selectedIdsRef = useRef(selectedIds); useEffect(()=>{selectedIdsRef.current=selectedIds},[selectedIds])
  const clipboardRef = useRef(clipboard); useEffect(()=>{clipboardRef.current=clipboard},[clipboard])
  const elementsRef = useRef<WireEl[]>([])
  const toolRef = useRef(tool); useEffect(()=>{toolRef.current=tool},[tool])

  const currentPage = pages.find(p=>p.id===pageId)
  const elements = currentPage?.elements||[]
  elementsRef.current = elements

  const snp = useCallback((v:number)=>snapRef.current?Math.round(v/8)*8:v,[])

  useEffect(()=>{ if(view==="dash") setProjects(listWires()) },[view])
  useEffect(()=>{ const p=new URLSearchParams(window.location.search); const id=p.get("id"); if(id) openProject(id); const s=p.get("fromSitemap"); if(s) setFromSitemapId(s) },[])

  const scheduleSave = useCallback((m:WireMeta,ps:WirePage[])=>{
    setSaveStatus("unsaved")
    if(saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current=setTimeout(()=>{ setMeta(persistWire(m,ps)); setSaveStatus("saved") },1000)
  },[])

  function openProject(id:string) {
    const m=listWires().find(x=>x.id===id); if(!m) return
    const ps=loadWire(id)
    setMeta(m); setPages(ps); setPageId(ps[0]?.id??""); setSelectedIds([]); setSaveStatus("saved")
    setView("editor"); window.history.replaceState(null,"",`?id=${id}`)
  }
  function createProject() {
    if(!newName.trim()) return
    const m:WireMeta={id:uid(),name:newName.trim(),createdAt:ts(),updatedAt:ts()}
    const page:WirePage={id:uid(),name:"Page 1",elements:[]}
    persistWire(m,[page]); setShowNew(false); setNewName(""); openProject(m.id)
  }
  function renameMeta(name:string) {
    if(!meta||!name.trim()) return
    const m={...meta,name:name.trim()}
    setMeta(m); setPages(ps=>{ scheduleSave(m,ps); return ps })
  }

  function mutateEls(fn:(els:WireEl[])=>WireEl[], pushU=true) {
    setPages(prev=>{
      const next=prev.map(p=>{
        if(p.id!==pageId) return p
        if(pushU){ setUndoStack(u=>[...u.slice(-49),p.elements]); setRedoStack([]) }
        return{...p,elements:fn(p.elements)}
      })
      if(meta) scheduleSave(meta,next)
      return next
    })
  }
  function addEl(type:ElType,x:number,y:number,overrides?:Partial<WireEl>) {
    const def=EL_DEFS[type]
    const el:WireEl={id:uid(),type,x:snp(x-def.w/2),y:snp(y-def.h/2),w:def.w,h:def.h,text:def.text,...overrides}
    mutateEls(els=>{
      if(type==="frame") return[el,...els]
      return[...els,el]
    })
    setSelectedIds([el.id])
  }
  function updateEl(id:string,patch:Partial<WireEl>,pu=false){ mutateEls(els=>els.map(e=>e.id===id?{...e,...patch}:e),pu) }
  function deleteEls(ids:string[]){ mutateEls(els=>els.filter(e=>!ids.includes(e.id))); setSelectedIds([]) }
  function bringToFront(ids:string[]){ mutateEls(els=>[...els.filter(e=>!ids.includes(e.id)),...els.filter(e=>ids.includes(e.id))],true) }
  function sendToBack(ids:string[]){ mutateEls(els=>[...els.filter(e=>ids.includes(e.id)),...els.filter(e=>!ids.includes(e.id))],true) }
  function bringForward(ids:string[]){ mutateEls(els=>{ const a=[...els]; const si=ids.map(id=>a.findIndex(e=>e.id===id)).sort((a,b)=>b-a); for(const i of si) if(i<a.length-1)[a[i],a[i+1]]=[a[i+1],a[i]]; return a },true) }
  function sendBackward(ids:string[]){ mutateEls(els=>{ const a=[...els]; const si=ids.map(id=>a.findIndex(e=>e.id===id)).sort((a,b)=>a-b); for(const i of si) if(i>0)[a[i],a[i-1]]=[a[i-1],a[i]]; return a },true) }
  function doUndo(){ setUndoStack(u=>{ if(!u.length) return u; const prev=u[u.length-1]; setRedoStack(r=>[elementsRef.current,...r]); mutateEls(()=>prev,false); return u.slice(0,-1) }) }
  function doRedo(){ setRedoStack(r=>{ if(!r.length) return r; const next=r[0]; setUndoStack(u=>[...u,elementsRef.current]); mutateEls(()=>next,false); return r.slice(1) }) }
  function addPage(){ const p:WirePage={id:uid(),name:`Page ${pages.length+1}`,elements:[]}; const next=[...pages,p]; setPages(next); setPageId(p.id); if(meta) scheduleSave(meta,next) }
  function deletePage(id:string){ if(pages.length<=1) return; const next=pages.filter(p=>p.id!==id); setPages(next); if(pageId===id) setPageId(next[0].id); if(meta) scheduleSave(meta,next) }

  function uploadImageForEl(id:string) {
    const input=document.createElement("input"); input.type="file"; input.accept="image/*"
    input.onchange=()=>{
      const file=input.files?.[0]; if(!file) return
      const reader=new FileReader()
      reader.onload=()=>{
        const img=new Image()
        img.onload=()=>{
          const MAX=1400; const scale=Math.min(1,MAX/Math.max(img.width,img.height))
          const c=document.createElement("canvas"); c.width=Math.round(img.width*scale); c.height=Math.round(img.height*scale)
          c.getContext("2d")!.drawImage(img,0,0,c.width,c.height)
          updateEl(id,{src:c.toDataURL("image/jpeg",.85)},true)
        }
        img.src=reader.result as string
      }
      reader.readAsDataURL(file)
    }
    input.click()
  }

  function finalizePath(id:string,pts:{x:number;y:number}[],strokeW:number){
    if(pts.length<2) return
    const pad=strokeW*2
    const minX=Math.min(...pts.map(p=>p.x))-pad, minY=Math.min(...pts.map(p=>p.y))-pad
    const maxX=Math.max(...pts.map(p=>p.x))+pad, maxY=Math.max(...pts.map(p=>p.y))+pad
    const rel=pts.map(p=>({x:p.x-minX,y:p.y-minY}))
    const el:WireEl={id,type:"freehand",x:minX,y:minY,w:maxX-minX,h:maxY-minY,text:"",path:ptsToPath(rel),strokeW}
    mutateEls(els=>[...els,el]); setSelectedIds([id])
  }

  // Global pointer events (mouse + touch + Apple Pencil)
  useEffect(()=>{
    const onDown=(e:PointerEvent)=>{
      activePointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
      const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")
      if(touches.length===2){
        pinchRef.current={dist:Math.hypot(touches[1].x-touches[0].x,touches[1].y-touches[0].y),zoom:zoomRef.current,pan:{...panRef.current},mid:{x:(touches[0].x+touches[1].x)/2,y:(touches[0].y+touches[1].y)/2}}
        isPanning.current=false; dragging.current=null
      }
    }
    const onMove=(e:PointerEvent)=>{
      activePointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType})
      const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")

      // Two-finger pinch zoom
      if(touches.length===2&&pinchRef.current){
        const pr=pinchRef.current
        const dist=Math.hypot(touches[1].x-touches[0].x,touches[1].y-touches[0].y)
        const nz=Math.min(4,Math.max(0.1,pr.zoom*(dist/pr.dist)))
        const mid={x:(touches[0].x+touches[1].x)/2,y:(touches[0].y+touches[1].y)/2}
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){
          const cx=pr.mid.x-rect.left, cy=pr.mid.y-rect.top
          const dx=mid.x-pr.mid.x, dy=mid.y-pr.mid.y
          setPan({x:cx-(cx-pr.pan.x)*(nz/pr.zoom)+dx,y:cy-(cy-pr.pan.y)*(nz/pr.zoom)+dy})
        }
        setZoom(nz); return
      }

      // Apple Pencil drawing
      if(drawRef.current&&e.pointerType==="pen"){
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect){
          const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
          const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
          drawRef.current.pts.push({x:cx,y:cy})
          setLiveStroke([...drawRef.current.pts])
        }
        return
      }

      if(libDrag.current) setGhost({type:libDrag.current,x:e.clientX,y:e.clientY})
      if(dragging.current){
        const dxRaw=(e.clientX-dragging.current.startMX)/zoomRef.current
        const dyRaw=(e.clientY-dragging.current.startMY)/zoomRef.current
        setPages(prev=>prev.map(p=>{
          if(p.id!==pageId) return p
          return{...p,elements:p.elements.map(el=>{
            const sp=dragging.current!.startPos.get(el.id); if(!sp) return el
            return{...el,x:snp(sp.x+dxRaw),y:snp(sp.y+dyRaw)}
          })}
        }))
      }
      if(resizing.current){
        const{id,handle,ox,oy,ow,oh,startMX,startMY}=resizing.current
        const dx=(e.clientX-startMX)/zoomRef.current, dy=(e.clientY-startMY)/zoomRef.current
        const MIN=20; let nx=ox,ny=oy,nw=ow,nh=oh
        if(handle.includes("e")) nw=Math.max(MIN,snp(ow+dx))
        if(handle.includes("w")){ nw=Math.max(MIN,snp(ow-dx)); if(nw>MIN) nx=snp(ox+dx) }
        if(handle.includes("s")) nh=Math.max(MIN,snp(oh+dy))
        if(handle.includes("n")){ nh=Math.max(MIN,snp(oh-dy)); if(nh>MIN) ny=snp(oy+dy) }
        setPages(prev=>prev.map(p=>p.id!==pageId?p:{...p,elements:p.elements.map(el=>el.id!==id?el:{...el,x:nx,y:ny,w:nw,h:nh})}))
      }
      if(isPanning.current) setPan({x:panStart.current.px+e.clientX-panStart.current.mx,y:panStart.current.py+e.clientY-panStart.current.my})
      if(selRectRef.current){
        const sr=selRectRef.current
        if(!sr.active&&Math.hypot(e.clientX-sr.startMX,e.clientY-sr.startMY)>5) sr.active=true
        if(sr.active){
          const rect=canvasRef.current?.getBoundingClientRect()
          if(rect){
            const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
            const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
            setSelBox({x:Math.min(cx,sr.startCX),y:Math.min(cy,sr.startCY),w:Math.abs(cx-sr.startCX),h:Math.abs(cy-sr.startCY)})
          }
        }
      }
    }
    const onUp=(e:PointerEvent)=>{
      activePointers.current.delete(e.pointerId)
      if(activePointers.current.size<2) pinchRef.current=null

      if(drawRef.current&&e.pointerType==="pen"){
        finalizePath(drawRef.current.id,drawRef.current.pts,drawRef.current.strokeW)
        drawRef.current=null; setLiveStroke([]); return
      }
      if(libDrag.current){
        const rect=canvasRef.current?.getBoundingClientRect()
        if(rect&&e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
          const cx=(e.clientX-rect.left-panRef.current.x)/zoomRef.current
          const cy=(e.clientY-rect.top-panRef.current.y)/zoomRef.current
          addEl(libDrag.current,cx,cy)
        }
        libDrag.current=null; setGhost(null)
      }
      if(selRectRef.current?.active){
        setSelBox(prev=>{
          if(prev){
            const ids=elementsRef.current.filter(e=>e.x<prev.x+prev.w&&e.x+e.w>prev.x&&e.y<prev.y+prev.h&&e.y+e.h>prev.y).map(e=>e.id)
            setSelectedIds(ids)
          }
          return null
        })
      }
      selRectRef.current=null; dragging.current=null; resizing.current=null; isPanning.current=false
    }
    window.addEventListener("pointerdown",onDown)
    window.addEventListener("pointermove",onMove)
    window.addEventListener("pointerup",onUp)
    return()=>{ window.removeEventListener("pointerdown",onDown); window.removeEventListener("pointermove",onMove); window.removeEventListener("pointerup",onUp) }
  },[pageId,meta])

  // Keyboard
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      const tag=(e.target as HTMLElement).tagName
      if(tag==="INPUT"||tag==="TEXTAREA") return
      const mod=e.metaKey||e.ctrlKey
      if(mod&&e.key==="z"&&!e.shiftKey){ e.preventDefault(); doUndo(); return }
      if(mod&&(e.key==="y"||(e.key==="z"&&e.shiftKey))){ e.preventDefault(); doRedo(); return }
      if(mod&&e.key==="a"){ e.preventDefault(); setSelectedIds(elementsRef.current.map(x=>x.id)); return }
      if(mod&&e.key==="c"){ e.preventDefault(); setClipboard(elementsRef.current.filter(x=>selectedIdsRef.current.includes(x.id))); return }
      if(mod&&e.key==="x"){ e.preventDefault(); const sel=elementsRef.current.filter(x=>selectedIdsRef.current.includes(x.id)); setClipboard(sel); deleteEls(selectedIdsRef.current); return }
      if(mod&&e.key==="v"){ e.preventDefault(); if(!clipboardRef.current.length) return; const ns=clipboardRef.current.map(x=>({...x,id:uid(),x:x.x+20,y:x.y+20})); mutateEls(els=>[...els,...ns]); setSelectedIds(ns.map(x=>x.id)); return }
      if(mod&&e.key==="d"){ e.preventDefault(); const sel=elementsRef.current.filter(x=>selectedIdsRef.current.includes(x.id)); const ns=sel.map(x=>({...x,id:uid(),x:x.x+20,y:x.y+20})); mutateEls(els=>[...els,...ns]); setSelectedIds(ns.map(x=>x.id)); return }
      if((e.key==="Delete"||e.key==="Backspace")&&selectedIdsRef.current.length){ e.preventDefault(); deleteEls(selectedIdsRef.current); return }
      if(e.key==="Escape"){ setSelectedIds([]); setEditingId(null); setContextMenu(null); setShowFrameMenu(false); setTool("select"); return }
      if(!mod&&e.key==="s"){ setTool("select"); return }
      if(!mod&&e.key==="p"){ setTool("pencil"); return }
      if(selectedIdsRef.current.length&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){
        e.preventDefault()
        const d=e.shiftKey?10:1
        const dx=e.key==="ArrowLeft"?-d:e.key==="ArrowRight"?d:0
        const dy=e.key==="ArrowUp"?-d:e.key==="ArrowDown"?d:0
        mutateEls(els=>els.map(el=>selectedIdsRef.current.includes(el.id)?{...el,x:el.x+dx,y:el.y+dy}:el),false)
      }
    }
    window.addEventListener("keydown",onKey)
    return()=>window.removeEventListener("keydown",onKey)
  },[pageId,meta])

  function onWheel(e:React.WheelEvent){ e.preventDefault(); const f=e.deltaY>0?.92:1.08; const nz=Math.min(4,Math.max(0.1,zoom*f)); const rect=canvasRef.current?.getBoundingClientRect(); if(rect){const mx=e.clientX-rect.left,my=e.clientY-rect.top; setPan(p=>({x:mx-(mx-p.x)*(nz/zoom),y:my-(my-p.y)*(nz/zoom)}))}; setZoom(nz) }

  const libCats=["Basic","Media","Form","Layout","Data"] as const
  const libItems=libCats.map(cat=>({cat,types:(Object.entries(EL_DEFS) as [ElType,typeof EL_DEFS[ElType]][]).filter(([,d])=>d.cat===cat).map(([t])=>t)}))

  // ── Dashboard ────────────────────────────────────────────────────────────────
  if(view==="dash") return(
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#e0e7ff,#c7d2fe)"}}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="5" rx="1.5" stroke="#4338ca" strokeWidth="1.4"/><rect x="1" y="8" width="6" height="7" rx="1.5" stroke="#4338ca" strokeWidth="1.4"/><rect x="9" y="8" width="6" height="7" rx="1.5" stroke="#4338ca" strokeWidth="1.4"/></svg>
          </div>
          <h1 className="text-base font-bold text-gray-900">Wireframe Builder</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>importWire(()=>setProjects(listWires()))} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 9V2M3.5 6l3 3 3-3M1 11h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Import
          </button>
          <button onClick={()=>setShowNew(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M2 6.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            New Wireframe
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        {projects.length===0?(
          <div className="text-center py-28">
            <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-5"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="13" rx="3" stroke="#4338ca" strokeWidth="2"/><rect x="2" y="20" width="16" height="18" rx="3" stroke="#4338ca" strokeWidth="2"/><rect x="22" y="20" width="16" height="18" rx="3" stroke="#4338ca" strokeWidth="2"/></svg></div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No wireframes yet</h2>
            <p className="text-gray-500 mb-6 text-sm">Design layouts before you build</p>
            <button onClick={()=>setShowNew(true)} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors">Create Wireframe</button>
          </div>
        ):(
          <div className="grid grid-cols-3 gap-4">
            {projects.map(p=>(
              <div key={p.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-indigo-200 transition-all group cursor-pointer relative" onClick={()=>openProject(p.id)}>
                <div className="h-32 flex items-center justify-center" style={{background:"linear-gradient(135deg,#eef2ff,#e0e7ff)"}}>
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none"><rect x="4" y="4" width="112" height="16" rx="3" fill="white" stroke="#c7d2fe" strokeWidth="1.2"/><rect x="4" y="26" width="52" height="50" rx="3" fill="white" stroke="#c7d2fe" strokeWidth="1.2"/><rect x="62" y="26" width="54" height="23" rx="3" fill="white" stroke="#c7d2fe" strokeWidth="1.2"/><rect x="62" y="53" width="54" height="23" rx="3" fill="white" stroke="#c7d2fe" strokeWidth="1.2"/></svg>
                </div>
                <div className="p-4"><h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors text-sm">{p.name}</h3><p className="text-xs text-gray-400 mt-0.5">Updated {timeAgo(p.updatedAt)}</p></div>
                <button className="absolute top-2 right-10 w-7 h-7 rounded-lg bg-white/90 flex items-center justify-center text-gray-300 hover:text-indigo-500 transition-colors" title="Export" onClick={e=>{e.stopPropagation();exportWire(p)}}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v6M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors" onClick={e=>{e.stopPropagation();if(confirm("Delete?")){ eraseWire(p.id); setProjects(listWires()) }}}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
              </div>
            ))}
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all cursor-pointer flex flex-col items-center justify-center h-48" onClick={()=>setShowNew(true)}>
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#4338ca" strokeWidth="2" strokeLinecap="round"/></svg></div>
              <p className="text-sm font-semibold text-gray-500">New Wireframe</p>
            </div>
          </div>
        )}
      </div>
      {showNew&&(
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={()=>setShowNew(false)}>
          <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl" onClick={e=>e.stopPropagation()}>
            <h2 className="font-bold text-gray-900 mb-4">New Wireframe</h2>
            <input autoFocus value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&createProject()} placeholder="Project name…" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 mb-4"/>
            <div className="flex gap-2 justify-end">
              <button onClick={()=>setShowNew(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900">Cancel</button>
              <button onClick={createProject} disabled={!newName.trim()} className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 disabled:opacity-40 transition-colors">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // ── Editor ───────────────────────────────────────────────────────────────────
  const sel1 = selectedIds.length===1 ? elements.find(e=>e.id===selectedIds[0]) : null

  return(
    <div className="h-screen flex flex-col" style={{userSelect:"none"}}>
      {/* Ghost */}
      {ghost&&<div style={{position:"fixed",left:ghost.x-EL_DEFS[ghost.type].w/2,top:ghost.y-EL_DEFS[ghost.type].h/2,width:EL_DEFS[ghost.type].w,height:EL_DEFS[ghost.type].h,pointerEvents:"none",zIndex:9999,opacity:.6,border:"2px dashed #6366f1",borderRadius:6,background:"#eef2ff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#4338ca",fontWeight:600}}>{EL_DEFS[ghost.type].label}</div>}

      {/* Context menu */}
      {contextMenu&&(
        <div className="fixed z-50 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 min-w-40" style={{left:contextMenu.x,top:contextMenu.y}} onClick={()=>setContextMenu(null)}>
          {[
            {label:"Copy",action:()=>setClipboard(elements.filter(e=>contextMenu.elIds.includes(e.id)))},
            {label:"Cut",action:()=>{setClipboard(elements.filter(e=>contextMenu.elIds.includes(e.id)));deleteEls(contextMenu.elIds)}},
            {label:"Paste",disabled:!clipboard.length,action:()=>{const ns=clipboard.map(x=>({...x,id:uid(),x:x.x+20,y:x.y+20}));mutateEls(els=>[...els,...ns]);setSelectedIds(ns.map(x=>x.id))}},
            {label:"Duplicate",action:()=>{const sel=elements.filter(e=>contextMenu.elIds.includes(e.id));const ns=sel.map(x=>({...x,id:uid(),x:x.x+20,y:x.y+20}));mutateEls(els=>[...els,...ns]);setSelectedIds(ns.map(x=>x.id))}},
            null,
            {label:"Bring to Front",action:()=>bringToFront(contextMenu.elIds)},
            {label:"Bring Forward",action:()=>bringForward(contextMenu.elIds)},
            {label:"Send Backward",action:()=>sendBackward(contextMenu.elIds)},
            {label:"Send to Back",action:()=>sendToBack(contextMenu.elIds)},
            null,
            {label:"Delete",action:()=>deleteEls(contextMenu.elIds),danger:true},
          ].map((item,i)=>item===null?<div key={i} className="h-px bg-gray-100 my-1"/>:<button key={item.label} onClick={item.action} disabled={(item as {disabled?:boolean}).disabled} className={`w-full text-left px-4 py-1.5 text-sm hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed ${(item as {danger?:boolean}).danger?"text-red-600":"text-gray-700"}`}>{item.label}</button>)}
        </div>
      )}

      {/* Top bar */}
      <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 flex-shrink-0 z-20">
        <a href="/" className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0" title="Home" style={{background:"linear-gradient(135deg,#e0e7ff,#c7d2fe)"}}><svg width="14" height="14" viewBox="0 0 40 40" fill="none"><rect x="5" y="3" width="30" height="11" rx="3" fill="#4338ca"/><rect x="5" y="17" width="13" height="20" rx="3" fill="#4338ca"/><rect x="22" y="17" width="13" height="20" rx="3" fill="#4338ca"/></svg></a>
        <div className="w-px h-5 bg-gray-200"/>
        {fromSitemapId?(
          <button onClick={()=>window.location.href=`/sitemap-view?id=${fromSitemapId}`} className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Sitemap
          </button>
        ):(
          <button onClick={()=>{setView("dash");window.history.replaceState(null,"","/wireframe")}} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Wireframes
          </button>
        )}
        <div className="w-px h-5 bg-gray-200"/>
        {editingName?(
          <input autoFocus value={editNameVal} onChange={e=>setEditNameVal(e.target.value)} onBlur={()=>{renameMeta(editNameVal);setEditingName(false)}} onKeyDown={e=>{if(e.key==="Enter"||e.key==="Escape"){renameMeta(editNameVal);setEditingName(false)}}} className="font-semibold text-gray-900 text-sm border border-indigo-300 rounded-lg px-2 py-0.5 outline-none focus:ring-2 focus:ring-indigo-100"/>
        ):(
          <button onClick={()=>{setEditNameVal(meta?.name??"");setEditingName(true)}} className="font-semibold text-gray-900 text-sm hover:text-indigo-600 transition-colors" title="Click to rename">{meta?.name}</button>
        )}
        <span className="text-xs text-gray-400">{saveStatus==="saved"?"✓ Saved":"Saving…"}</span>
        <div className="flex-1"/>
        {/* Tool: Select / Pencil */}
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5 gap-0.5">
          <button onClick={()=>setTool("select")} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${tool==="select"?"bg-white shadow text-gray-900":"text-gray-500 hover:text-gray-900"}`} title="Select tool (S)">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l3 8 2-3 3 2L2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            Select
          </button>
          <button onClick={()=>setTool("pencil")} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${tool==="pencil"?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-900"}`} title="Apple Pencil / Pen (P)">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8.5 1.5l2 2-7 7-2.5.5.5-2.5 7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
            Pencil
          </button>
        </div>
        <div className="w-px h-5 bg-gray-200"/>
        {/* Snap toggle */}
        <button onClick={()=>setSnapGrid(s=>!s)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${snapGrid?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:bg-gray-100"}`} title="Snap to 8px grid">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="2" cy="2" r="1" fill="currentColor"/><circle cx="6.5" cy="2" r="1" fill="currentColor"/><circle cx="11" cy="2" r="1" fill="currentColor"/><circle cx="2" cy="6.5" r="1" fill="currentColor"/><circle cx="6.5" cy="6.5" r="1" fill="currentColor"/><circle cx="11" cy="6.5" r="1" fill="currentColor"/><circle cx="2" cy="11" r="1" fill="currentColor"/><circle cx="6.5" cy="11" r="1" fill="currentColor"/><circle cx="11" cy="11" r="1" fill="currentColor"/></svg>
          Snap
        </button>
        {/* Frame preset */}
        <div className="relative">
          <button onClick={()=>setShowFrameMenu(f=>!f)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>
            Frame
          </button>
          {showFrameMenu&&(
            <div className="absolute right-0 top-8 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50 min-w-40">
              {FRAME_PRESETS.map(f=>(
                <button key={f.label} onClick={()=>{const rect=canvasRef.current?.getBoundingClientRect();if(rect){const cx=(rect.width/2-pan.x)/zoom,cy=(rect.height/2-pan.y)/zoom;addEl("frame",cx+f.w/2,cy+f.h/2,{text:f.label,w:f.w,h:f.h})};setShowFrameMenu(false)}} className="w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between">
                  <span>{f.label}</span><span className="text-xs text-gray-400">{f.w}×{f.h}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-px h-5 bg-gray-200"/>
        <button onClick={doUndo} disabled={!undoStack.length} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition-colors" title="Undo ⌘Z">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7a5 5 0 105-5H5L3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 0v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={doRedo} disabled={!redoStack.length} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition-colors" title="Redo ⌘⇧Z">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M12.5 7a5 5 0 10-5-5H10l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.5 0v4H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="w-px h-5 bg-gray-200"/>
        <button onClick={()=>exportPNG(elements,currentPage?.name??"wireframe")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3 6l3.5 3.5L10 6M1 11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Export PNG
        </button>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-1 text-xs text-gray-600">
          <button onClick={()=>setZoom(z=>Math.max(0.1,z-.1))} className="hover:text-gray-900 w-4 text-center">−</button>
          <span className="w-9 text-center">{Math.round(zoom*100)}%</span>
          <button onClick={()=>setZoom(z=>Math.min(4,z+.1))} className="hover:text-gray-900 w-4 text-center">+</button>
        </div>
        <button onClick={()=>{setZoom(1);setPan({x:60,y:60})}} className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Reset</button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Library sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
          <div className="px-3 pt-3 pb-1"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Components</p><p className="text-xs text-gray-400 mt-0.5">Drag or click to add</p></div>
          {libItems.map(({cat,types})=>(
            <div key={cat} className="mb-1">
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">{cat}</div>
              {types.map(type=>(
                <div key={type} className="mx-2 mb-0.5 flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-grab hover:bg-indigo-50 transition-colors active:cursor-grabbing"
                  onPointerDown={e=>{e.preventDefault();libDrag.current=type;setGhost({type,x:e.clientX,y:e.clientY})}}
                  onClick={()=>{const rect=canvasRef.current?.getBoundingClientRect();if(rect){const cx=(rect.width/2-pan.x)/zoom,cy=(rect.height/2-pan.y)/zoom;addEl(type,cx,cy)}}}>
                  <LibIcon type={type}/>
                  <span className="text-xs font-medium text-gray-700">{EL_DEFS[type].label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div ref={canvasRef} className="flex-1 overflow-hidden relative"
            style={{background:"radial-gradient(circle, #e2e8f0 1px, transparent 1px)",backgroundSize:"20px 20px",backgroundColor:"#f8fafc",cursor:tool==="pencil"?"crosshair":ghost?"crosshair":"default",touchAction:"none"}}
            onPointerDown={e=>{
              if(e.button!==0&&e.button!==2&&e.pointerType==="mouse") return
              if(e.button===2) return
              // Palm rejection: large touch contact = palm
              if(e.pointerType==="touch"&&(e.width>50||e.height>50)) return
              setContextMenu(null); setShowFrameMenu(false)
              if((e.target as HTMLElement).closest("[data-el]")) return
              setEditingId(null)

              // Apple Pencil in draw mode
              if(e.pointerType==="pen"&&toolRef.current==="pencil"){
                const rect=canvasRef.current!.getBoundingClientRect()
                const cx=(e.clientX-rect.left-pan.x)/zoom, cy=(e.clientY-rect.top-pan.y)/zoom
                const sw=Math.max(1.5,Math.min(6,(e.pressure||0.5)*6))
                drawRef.current={id:uid(),pts:[{x:cx,y:cy}],strokeW:+sw.toFixed(1)}
                return
              }

              // Single touch: pan
              if(e.pointerType==="touch"){
                const touches=[...activePointers.current.values()].filter(p=>p.type==="touch")
                if(touches.length<2){ setSelectedIds([]); isPanning.current=true; panStart.current={mx:e.clientX,my:e.clientY,px:pan.x,py:pan.y} }
                return
              }

              // Mouse
              if(e.shiftKey){
                const rect=canvasRef.current!.getBoundingClientRect()
                const cx=(e.clientX-rect.left-pan.x)/zoom, cy=(e.clientY-rect.top-pan.y)/zoom
                selRectRef.current={startCX:cx,startCY:cy,startMX:e.clientX,startMY:e.clientY,active:false}
              } else {
                setSelectedIds([])
                isPanning.current=true
                panStart.current={mx:e.clientX,my:e.clientY,px:pan.x,py:pan.y}
              }
            }}
            onContextMenu={e=>{e.preventDefault();if(!(e.target as HTMLElement).closest("[data-el]")){setContextMenu({x:e.clientX,y:e.clientY,elIds:[]})}}}
            onWheel={onWheel}
            onClick={()=>setContextMenu(null)}
          >
            <div style={{position:"absolute",transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:"0 0",width:0,height:0}}>
              {[...elements.filter(e=>e.type==="frame"),...elements.filter(e=>e.type!=="frame")].map(el=>{
                const isSel=selectedIds.includes(el.id)
                const isEditing=editingId===el.id
                return(
                  <div key={el.id} data-el="1"
                    style={{position:"absolute",left:el.x,top:el.y,width:el.w,height:el.h,cursor:"move",outline:isSel?"2px solid #6366f1":"none",outlineOffset:2,boxShadow:isSel?"0 0 0 4px rgba(99,102,241,.12)":"none"}}
                    onPointerDown={e=>{
                      e.stopPropagation(); if(e.button!==0&&e.pointerType==="mouse") return
                      if(e.pointerType==="touch"&&(e.width>50||e.height>50)) return
                      if(isEditing) return
                      // Pencil in draw mode passes through to canvas
                      if(e.pointerType==="pen"&&toolRef.current==="pencil"){ e.currentTarget.releasePointerCapture(e.pointerId); return }
                      let ids:string[]
                      if(e.shiftKey){ ids=selectedIds.includes(el.id)?selectedIds.filter(x=>x!==el.id):[...selectedIds,el.id]; setSelectedIds(ids) }
                      else{ ids=selectedIds.includes(el.id)?selectedIds:[el.id]; if(!selectedIds.includes(el.id)) setSelectedIds(ids) }
                      if(!e.shiftKey){
                        const sp=new Map(elements.filter(x=>ids.includes(x.id)).map(x=>[x.id,{x:x.x,y:x.y}]))
                        dragging.current={ids,startPos:sp,startMX:e.clientX,startMY:e.clientY}
                      }
                    }}
                    onDoubleClick={e=>{e.stopPropagation();if(el.type==="image"){uploadImageForEl(el.id);return};if(["text","heading","button","input","select","textarea","badge","tabs","table","navbar","avatar","icon"].includes(el.type)) setEditingId(el.id)}}
                    onContextMenu={e=>{e.preventDefault();e.stopPropagation();if(!selectedIds.includes(el.id)) setSelectedIds([el.id]);setContextMenu({x:e.clientX,y:e.clientY,elIds:selectedIds.includes(el.id)?selectedIds:[el.id]})}}
                  >
                    <ElVisual el={el} editing={isEditing} onCommit={t=>{updateEl(el.id,{text:t},true);setEditingId(null)}}/>
                    {isSel&&HANDLES.map(h=>{const{top,left}=hPos(h,el.w,el.h);return(
                      <div key={h} data-el="1" style={{position:"absolute",top,left,width:8,height:8,background:"white",border:"1.5px solid #6366f1",borderRadius:2,cursor:HCURSOR[h],zIndex:10}}
                        onPointerDown={e=>{e.stopPropagation();resizing.current={id:el.id,handle:h,ox:el.x,oy:el.y,ow:el.w,oh:el.h,startMX:e.clientX,startMY:e.clientY}}}/>
                    )})}
                  </div>
                )
              })}
            </div>

            {/* Selection rectangle */}
            {selBox&&<div style={{position:"absolute",left:selBox.x*zoom+pan.x,top:selBox.y*zoom+pan.y,width:selBox.w*zoom,height:selBox.h*zoom,border:"1.5px solid #6366f1",background:"rgba(99,102,241,.06)",pointerEvents:"none",zIndex:50}}/>}

            {/* Live Apple Pencil stroke */}
            {liveStroke.length>1&&<svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:100}}><g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}><path d={ptsToPath(liveStroke)} fill="none" stroke="#1e293b" strokeWidth={(drawRef.current?.strokeW||2)/zoom} strokeLinecap="round" strokeLinejoin="round"/></g></svg>}

            {elements.length===0&&<div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="text-center"><p className="text-gray-400 text-sm">Drag components from the left panel</p><p className="text-gray-300 text-xs mt-1">or click to add at center</p></div></div>}
          </div>

          {/* Page tabs */}
          <div className="h-9 bg-white border-t border-gray-200 flex items-center px-2 gap-1 flex-shrink-0 overflow-x-auto">
            {pages.map(p=>(
              <div key={p.id} className="flex items-center group">
                <button className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${p.id===pageId?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-100"}`}
                  onClick={()=>{setPageId(p.id);setSelectedIds([])}}
                  onDoubleClick={()=>{const name=prompt("Page name:",p.name);if(name?.trim()){const next=pages.map(x=>x.id===p.id?{...x,name:name.trim()}:x);setPages(next);if(meta) scheduleSave(meta,next)}}}
                >{p.name}</button>
                {pages.length>1&&<button onClick={()=>deletePage(p.id)} className="ml-0.5 w-5 h-5 rounded flex items-center justify-center text-gray-300 hover:text-gray-500 transition-all"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>}
              </div>
            ))}
            <button onClick={addPage} className="ml-1 w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M2 6.5h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></button>
          </div>
        </div>

        {/* Right panel */}
        {(sel1||selectedIds.length>1)&&(
          <div className="w-52 bg-white border-l border-gray-200 flex-shrink-0 overflow-y-auto" style={{fontSize:13}}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div><h3 className="font-semibold text-gray-900">{sel1?EL_DEFS[sel1.type].label:`${selectedIds.length} selected`}</h3>{sel1&&<p className="text-xs text-gray-400">{sel1.w.toFixed(0)} × {sel1.h.toFixed(0)}</p>}</div>
                <button onClick={()=>setSelectedIds([])} className="text-gray-400 hover:text-gray-700"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></button>
              </div>
              {sel1&&<>
                <div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Position</label><div className="grid grid-cols-2 gap-2"><div><label className="text-xs text-gray-400 block mb-0.5">X</label><input type="number" value={Math.round(sel1.x)} onChange={e=>updateEl(sel1.id,{x:+e.target.value},true)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-indigo-400"/></div><div><label className="text-xs text-gray-400 block mb-0.5">Y</label><input type="number" value={Math.round(sel1.y)} onChange={e=>updateEl(sel1.id,{y:+e.target.value},true)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-indigo-400"/></div></div></div>
                <div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Size</label><div className="grid grid-cols-2 gap-2"><div><label className="text-xs text-gray-400 block mb-0.5">W</label><input type="number" value={Math.round(sel1.w)} onChange={e=>updateEl(sel1.id,{w:Math.max(20,+e.target.value)},true)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-indigo-400"/></div><div><label className="text-xs text-gray-400 block mb-0.5">H</label><input type="number" value={Math.round(sel1.h)} onChange={e=>updateEl(sel1.id,{h:Math.max(20,+e.target.value)},true)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-indigo-400"/></div></div></div>
                {["text","heading","button","input","textarea","select","checkbox","radio","toggle","avatar","badge","tabs","table","image","navbar","card","modal","sidebar","icon","frame"].includes(sel1.type)&&<div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Content</label><textarea value={sel1.text} onChange={e=>updateEl(sel1.id,{text:e.target.value},true)} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-400 resize-none"/></div>}
                {sel1.type==="image"&&<div className="mb-3"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 block">Photo</label><div className="flex flex-col gap-1.5"><button onClick={()=>uploadImageForEl(sel1.id)} className="w-full text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg py-1.5 font-semibold transition-colors">{sel1.src?"Replace Photo":"Upload Photo"}</button>{sel1.src&&<button onClick={()=>updateEl(sel1.id,{src:undefined},true)} className="w-full text-xs text-red-600 bg-red-50 hover:bg-red-100 rounded-lg py-1.5 font-semibold transition-colors">Remove Photo</button>}</div></div>}
                {(sel1.type==="checkbox"||sel1.type==="radio")&&<div className="mb-3 flex items-center justify-between"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Checked</label><button onClick={()=>updateEl(sel1.id,{checked:!sel1.checked},true)} className={`w-10 h-6 rounded-full transition-colors ${sel1.checked?"bg-indigo-600":"bg-gray-200"}`}><div className={`w-4 h-4 rounded-full bg-white shadow mx-1 transition-transform ${sel1.checked?"translate-x-4":"translate-x-0"}`}/></button></div>}
                {sel1.type==="toggle"&&<div className="mb-3 flex items-center justify-between"><label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">On</label><button onClick={()=>updateEl(sel1.id,{toggled:!sel1.toggled},true)} className={`w-10 h-6 rounded-full transition-colors ${sel1.toggled?"bg-indigo-600":"bg-gray-200"}`}><div className={`w-4 h-4 rounded-full bg-white shadow mx-1 transition-transform ${sel1.toggled?"translate-x-4":"translate-x-0"}`}/></button></div>}
              </>}
              <div className="border-t border-gray-100 pt-3 mb-3">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Layer order</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[{l:"Front",a:()=>bringToFront(selectedIds)},{l:"Forward",a:()=>bringForward(selectedIds)},{l:"Backward",a:()=>sendBackward(selectedIds)},{l:"Back",a:()=>sendToBack(selectedIds)}].map(b=><button key={b.l} onClick={b.a} className="text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg py-1.5 font-medium transition-colors">{b.l}</button>)}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
                {selectedIds.length>1&&<button onClick={()=>{const sel=elements.filter(e=>selectedIds.includes(e.id));const ns=sel.map(x=>({...x,id:uid(),x:x.x+20,y:x.y+20}));mutateEls(els=>[...els,...ns]);setSelectedIds(ns.map(x=>x.id))}} className="w-full text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg py-2 font-semibold transition-colors">Duplicate All</button>}
                <button onClick={()=>deleteEls(selectedIds)} className="w-full text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg py-2 font-semibold transition-colors">Delete {selectedIds.length>1?`(${selectedIds.length})`:""}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
