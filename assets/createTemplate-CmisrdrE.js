import{r as m,j as t,c as q,i as J}from"./index-DWR5KKwA.js";import{a as S,C as A,E as T,b as y,F as U,A as G,c as E,D as g,d as P,e as O}from"./constants-CXJ8D7Nk.js";import{C as M,S as F}from"./Show_Group_Tile-4W8VKjGs.js";import{E as D}from"./Ensemble_Section_Tile-CEUEr9tW.js";import{T as V}from"./trash-BnpXJPEK.js";import{F as H}from"./Full_Cast_Tile-BCr8st2L.js";import{k as z,i as K,l as Q}from"./db-CZpO0_9_.js";function W({scene:e,setScene:l,isCreate:b,removeScene:N,isAssign:u,characters:k,showGroups:w,hasEnsemble:B}){const[I,v]=m.useState(!1),[n,p]=m.useState(!1),[h,C]=m.useState(0);return m.useEffect(()=>{C(Math.floor(Math.random()*1e5))},[]),t.jsxs("div",{className:"SceneTile",id:"scene-tile-"+e.sceneId,children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"SceneNameDiv",children:[t.jsx("label",{htmlFor:"Scene",children:"Scene Name: "}),t.jsx("input",{type:"text",name:"",id:"",value:e.name,onChange:s=>{l(S.fromBlank(s.target.value,e.characters,e.sceneId,e.lastUpdated))}})]}),t.jsx("div",{children:t.jsx("img",{src:V,alt:"",className:"TrashIcon",onClick:()=>{N()}})})]}),t.jsx("br",{}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"Characters",children:"Characters: "}),t.jsx("div",{className:"scene-characters",id:"characters-"+h,children:e.characters.map((s,a)=>{if(s instanceof A)return t.jsx(M,{character:s,isCreate:b,actors:[],characters:k,isAssign:u,setCharacter:o=>{l(S.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.sceneId,e.lastUpdated))},removeCharacter:()=>{l(S.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.sceneId,e.lastUpdated))}},a);if(s instanceof T)return t.jsx(D,{isGroupChatCreate:!1,onAddEnsemble:()=>{},ensembleSection:s,isCustom:!1,isCreate:b,isAssign:u,actors:[],setEnsembleSection:o=>{l(S.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.sceneId,e.lastUpdated))},removeEnsembleSection:()=>{v(!1),l(S.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.sceneId,e.lastUpdated))}},a);if(s instanceof y)return t.jsx(F,{showGroup:s,isCreate:b,isAssign:u,characters:k,actors:[],hasEnsemble:B,showGroups:w,setShowGroup:o=>{l(S.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.sceneId,e.lastUpdated))},removeShowGroup:()=>{l(S.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.sceneId,e.lastUpdated))}},a);if(s instanceof U)return t.jsx(H,{canDelete:!0,onDelete:()=>{p(!1),l(S.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.sceneId,e.lastUpdated))}},a)})}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(S.fromBlank(e.name,[...e.characters,A.fromBlank("Character 1",null,s,0)],e.sceneId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("scene-tile-"+e.sceneId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Character"}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(S.fromBlank(e.name,[...e.characters,y.fromBlank("Show Group 1",[],s,0)],e.sceneId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("scene-tile-"+e.sceneId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Show Group"}),t.jsx("br",{}),B&&t.jsx("button",{className:"ActionBtn "+(I||n?"disabled":""),disabled:I||n,onClick:()=>{I||(v(!0),setTimeout(()=>{const s=document.getElementById("characters-"+h);s.scrollTop=s.scrollHeight,document.getElementById("scene-tile-"+e.sceneId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100),l(S.fromBlank(e.name,[...e.characters,T.fromBlank(!0,!1,!1,!1,[],0)],e.sceneId,e.lastUpdated)))},children:"Add Ensemble"}),B&&t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{n||(p(!0),setTimeout(()=>{const s=document.getElementById("characters-"+h);s.scrollTop=s.scrollHeight,document.getElementById("scene-tile-"+e.sceneId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100),l(S.fromBlank(e.name,[...e.characters,new U],e.sceneId,e.lastUpdated)))},children:"Add Full Cast"})]})]})}function X({act:e,setAct:l,isCreate:b,removeAct:N,isAssign:u,characters:k,showGroups:w,hasEnsemble:B}){const[I,v]=m.useState(0);return m.useEffect(()=>{v(Math.floor(Math.random()*1e5))},[]),t.jsxs("div",{className:"ActTile",id:"act-tile-"+e.actId,children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"ActNameDiv",children:[t.jsx("label",{htmlFor:"Act",children:"Act Name: "}),t.jsx("input",{type:"text",name:"",id:"",value:e.name,onChange:n=>{l(G.fromBlank(n.target.value,e.scenes,e.actId,e.lastUpdated))}})]}),t.jsx("div",{children:t.jsx("img",{src:V,alt:"",className:"TrashIcon",onClick:()=>{N()}})})]}),t.jsx("br",{}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"Scene",children:"Scenes: "}),t.jsx("div",{id:"scenes-"+I,className:"scenes",children:e.scenes.map((n,p)=>t.jsx(W,{hasEnsemble:B,scene:n,isCreate:b,characters:k,showGroups:w,isAssign:u,setScene:h=>{l(G.fromBlank(e.name,e.scenes.map((C,s)=>s===p?h:C),e.actId,e.lastUpdated))},removeScene:()=>{l(G.fromBlank(e.name,e.scenes.filter((h,C)=>C!==p),e.actId,e.lastUpdated))}},p))}),e.scenes.length==0&&t.jsx("br",{}),t.jsx("button",{className:"ActionBtn",onClick:()=>{const n=Math.floor(Math.random()*1e5);l(G.fromBlank(e.name,[...e.scenes,S.fromBlank("Scene "+(e.scenes.length+1),[],n,0)],e.actId,e.lastUpdated)),setTimeout(()=>{const p=document.getElementById("scenes-"+I);p.scrollTop=p.scrollHeight,document.getElementById("scene-tile-"+n).scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),document.getElementById("act-tile-"+e.actId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Scene"})]})]})}function Y({song:e,setSong:l,isCreate:b,removeSong:N,isAssign:u,characters:k,showGroups:w,hasEnsemble:B}){const[I,v]=m.useState(!1),[n,p]=m.useState(!1),[h,C]=m.useState(0);return m.useEffect(()=>{C(Math.floor(Math.random()*1e5))},[]),t.jsxs("div",{className:"SongTile",id:"song-tile-"+e.songId,children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"SongNameDiv",children:[t.jsx("label",{htmlFor:"Scene",children:"Song Name: "}),t.jsx("input",{type:"text",name:"",id:"",value:e.name,onChange:s=>{l(E.fromBlank(s.target.value,e.characters,e.songId,e.lastUpdated))}})]}),t.jsx("div",{children:t.jsx("img",{src:V,alt:"",className:"TrashIcon",onClick:()=>{N()}})})]}),t.jsx("br",{}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"Characters",children:"Characters: "}),t.jsx("div",{className:"song-characters",id:"characters-"+h,children:e.characters.map((s,a)=>{if(s instanceof A)return t.jsx(M,{character:s,isCreate:b,actors:[],characters:k,isAssign:u,setCharacter:o=>{l(E.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.songId,e.lastUpdated))},removeCharacter:()=>{l(E.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.songId,e.lastUpdated))}},a);if(s instanceof T)return t.jsx(D,{isGroupChatCreate:!1,onAddEnsemble:()=>{},ensembleSection:s,isAssign:u,actors:[],isCustom:!1,isCreate:b,setEnsembleSection:o=>{l(E.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.songId,e.lastUpdated))},removeEnsembleSection:()=>{v(!1),l(E.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.songId,e.lastUpdated))}},a);if(s instanceof y)return t.jsx(F,{showGroup:s,hasEnsemble:B,actors:[],characters:k,isCreate:b,isAssign:u,showGroups:w,setShowGroup:o=>{l(E.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.songId,e.lastUpdated))},removeShowGroup:()=>{l(E.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.songId,e.lastUpdated))}},a);if(s instanceof U)return t.jsx(H,{canDelete:!0,onDelete:()=>{p(!1),l(E.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.songId,e.lastUpdated))}},a)})}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(E.fromBlank(e.name,[...e.characters,A.fromBlank("Character 1",null,s,0)],e.songId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("song-tile-"+e.songId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Character"}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(E.fromBlank(e.name,[...e.characters,y.fromBlank("Show Group 1",[],s,0)],e.songId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("song-tile-"+e.songId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Show Group"}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{p(!0),l(E.fromBlank(e.name,[...e.characters,new U],e.songId,e.lastUpdated)),setTimeout(()=>{const s=document.getElementById("characters"+h);s.scrollTop=s.scrollHeight,document.getElementById("song-tile-"+e.songId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Full Cast"}),t.jsx("br",{}),B&&t.jsx("button",{className:"ActionBtn "+(I||n?"disabled":""),disabled:I||n,onClick:()=>{I||(v(!0),setTimeout(()=>{const s=document.getElementById("characters-"+h);s.scrollTop=s.scrollHeight,document.getElementById("song-tile-"+e.songId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100),l(E.fromBlank(e.name,[...e.characters,T.fromBlank(!0,!1,!1,!1,[],0)],e.songId,e.lastUpdated)))},children:"Add Ensemble"})]})]})}function Z({dance:e,setDance:l,isCreate:b,removeDance:N,isAssign:u,characters:k,showGroups:w,hasEnsemble:B}){const[I,v]=m.useState(!1),[n,p]=m.useState(!1),[h,C]=m.useState(0);return m.useEffect(()=>{C(Math.floor(Math.random()*1e5))},[]),t.jsxs("div",{className:"DanceTile",id:"dance-tile-"+e.danceId,children:[t.jsxs("div",{className:"header",children:[t.jsxs("div",{className:"DanceNameDiv",children:[t.jsx("label",{htmlFor:"Scene",children:"Song Name: "}),t.jsx("input",{type:"text",name:"",id:"",value:e.name,onChange:s=>{l(g.fromBlank(s.target.value,e.characters,e.danceId,e.lastUpdated))}})]}),t.jsx("div",{children:t.jsx("img",{src:V,alt:"",className:"TrashIcon",onClick:()=>{N()}})})]}),t.jsx("br",{}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"Characters",children:"Characters: "}),t.jsx("div",{className:"characters",id:"characters-"+h,children:e.characters.map((s,a)=>{if(s instanceof A)return t.jsx(M,{character:s,actors:[],isCreate:b,characters:k,isAssign:u,setCharacter:o=>{l(g.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.danceId,e.lastUpdated))},removeCharacter:()=>{l(g.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.danceId,e.lastUpdated))}},a);if(s instanceof T)return t.jsx(D,{isGroupChatCreate:!1,onAddEnsemble:()=>{},isAssign:!1,ensembleSection:s,isCustom:!1,isCreate:b,actors:[],setEnsembleSection:o=>{l(g.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.danceId,e.lastUpdated))},removeEnsembleSection:()=>{v(!1),l(g.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.danceId,e.lastUpdated))}},a);if(s instanceof y)return t.jsx(F,{showGroup:s,hasEnsemble:B,characters:k,actors:[],isCreate:b,isAssign:u,showGroups:w,setShowGroup:o=>{l(g.fromBlank(e.name,e.characters.map((r,f)=>f===a?o:r),e.danceId,e.lastUpdated))},removeShowGroup:()=>{l(g.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.danceId,e.lastUpdated))}},a);if(s instanceof U)return t.jsx(H,{canDelete:!0,onDelete:()=>{l(g.fromBlank(e.name,e.characters.filter((o,r)=>r!==a),e.danceId,e.lastUpdated)),p(!1)}},a)})}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(g.fromBlank(e.name,[...e.characters,A.fromBlank("Character 1",null,s,0)],e.danceId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("dance-tile-"+e.danceId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Character"}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{const s=Math.floor(Math.random()*1e5);l(g.fromBlank(e.name,[...e.characters,y.fromBlank("Show Group 1",[],s,0)],e.danceId,e.lastUpdated)),setTimeout(()=>{const a=document.getElementById("characters-"+h);a.scrollTop=a.scrollHeight,document.getElementById("dance-tile-"+e.danceId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Show Group"}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn "+(n?"disabled":""),disabled:n,onClick:()=>{p(!0),l(g.fromBlank(e.name,[...e.characters,new U],e.danceId,e.lastUpdated)),setTimeout(()=>{const s=document.getElementById("characters-"+h);s.scrollTop=s.scrollHeight,document.getElementById("dance-tile-"+e.danceId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Full Cast"}),t.jsx("br",{}),B&&t.jsx("button",{className:"ActionBtn "+(I||n?"disabled":""),disabled:I||n,onClick:()=>{I||(v(!0),setTimeout(()=>{const s=document.getElementById("characters-"+h);s.scrollTop=s.scrollHeight,document.getElementById("dance-tile-"+e.danceId).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100),l(g.fromBlank(e.name,[...e.characters,T.fromBlank(!0,!1,!1,!1,[],0)],e.danceId,e.lastUpdated)))},children:"Add Ensemble"})]})]})}q(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(_,{})}));function _(){const[e,l]=m.useState(""),[b,N]=m.useState([]),[u,k]=m.useState([]),[w,B]=m.useState([]),[I,v]=m.useState([]),[n,p]=m.useState([]),[h,C]=m.useState(""),[s,a]=m.useState(!1),[o,r]=m.useState(!1),[f,$]=m.useState(!1),[L,R]=m.useState("");return m.useEffect(()=>{J(()=>{});const c=new URLSearchParams(window.location.search),d=c.get("activityId");if(d&&l(d),c.get("isEditing")){$(!0);const i=P.fromMap(JSON.parse(localStorage.getItem("show")));C(i.name),a(i.hasEnsemble),k(i.characters),B(i.showGroups),N(i.layout),v(i.songs),p(i.dances),R(i.id)}},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"title",children:t.jsx("h1",{children:"Create Show Template"})}),t.jsxs("div",{className:"center",children:[t.jsxs("div",{className:"form-question",children:[t.jsx("label",{htmlFor:"name",children:"Show Name: "}),t.jsx("input",{type:"text",id:"name",value:h,onChange:c=>C(c.target.value)})]}),t.jsxs("div",{className:"form-question",children:[t.jsx("label",{htmlFor:"ensemble",children:"Has Ensemble: "}),t.jsxs("label",{className:"custom-checkbox",children:[t.jsx("input",{type:"checkbox",id:"ensemble",checked:s,onChange:c=>a(c.target.checked)}),t.jsx("span",{className:"checkmark"})]})]}),t.jsx("h2",{children:"Create Characters"}),t.jsx("div",{className:"characters",id:"create-characters",children:u.map((c,d)=>t.jsx(M,{actors:[],character:c,characters:[],isAssign:!1,setCharacter:j=>{k(i=>{const x=[...i];return x[d]=j,x})},removeCharacter:()=>{k(u.filter((j,i)=>i!==d))},isCreate:!0},d))}),t.jsx("button",{className:"ActionBtn",onClick:()=>{const c=Date.now();k([...u,A.fromBlank("",null,c,0)]),setTimeout(()=>{const d=document.getElementById("create-characters");d.scrollTop=d.scrollHeight,document.getElementById("character-tile-"+c).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Character"}),t.jsx("h2",{children:"Create Show Groups"}),t.jsx("div",{className:"showGroups",id:"create-showGroups",children:w.map((c,d)=>t.jsx(F,{showGroup:c,showGroups:[],actors:[],hasEnsemble:s,characters:u,isAssign:!1,setShowGroup:j=>{B(i=>{const x=[...i];return x[d]=j,x})},removeShowGroup:()=>{B(w.filter((j,i)=>i!==d))},isCreate:!0},d))}),t.jsx("button",{className:"ActionBtn",onClick:()=>{const c=Math.floor(Math.random()*1e5);B([...w,y.fromBlank("",[],c,0)]),setTimeout(()=>{const d=document.getElementById("create-showGroups");d.scrollTop=d.scrollHeight,document.getElementById("show-group-tile-"+c).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Show Group"}),t.jsx("h2",{children:"Create Layout"}),t.jsxs("div",{className:"layout",children:[b.map((c,d)=>t.jsx(X,{hasEnsemble:s,act:c,characters:u,showGroups:w,isAssign:!1,setAct:j=>{N(i=>{const x=[...i];return x[d]=j,x})},isCreate:!1,removeAct:()=>{N(b.filter((j,i)=>i!==d))}},d)),t.jsx("button",{className:"ActionBtn",onClick:()=>{const c=Date.now();N([...b,G.fromBlank("Act "+(b.length+1),[],c,0)]),setTimeout(()=>{document.getElementById("act-tile-"+c).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Act"})]}),t.jsx("h2",{children:"Create Songs"}),t.jsxs("div",{className:"songs",children:[I.map((c,d)=>t.jsx(Y,{song:c,hasEnsemble:s,characters:u,showGroups:w,isAssign:!1,setSong:j=>{v(i=>{const x=[...i];return x[d]=j,x})},removeSong:()=>{v(I.filter((j,i)=>i!==d))},isCreate:!1},d)),t.jsx("button",{className:"ActionBtn",onClick:()=>{const c=Date.now();v([...I,E.fromBlank("Song "+(I.length+1),[],c,0)]),setTimeout(()=>{document.getElementById("song-tile-"+c).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Song"})]}),t.jsx("h2",{children:"Create Dances"}),t.jsxs("div",{className:"dances",children:[n.map((c,d)=>t.jsx(Z,{dance:c,hasEnsemble:s,characters:u,showGroups:w,isAssign:!1,setDance:j=>{p(i=>{const x=[...i];return x[d]=j,x})},removeDance:()=>{p(n.filter((j,i)=>i!==d))},isCreate:!1},d)),t.jsx("button",{className:"ActionBtn",onClick:()=>{const c=Date.now();p([...n,g.fromBlank("Dance "+(n.length+1),[],c,0)]),setTimeout(()=>{document.getElementById("dance-tile-"+c).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},100)},children:"Add Dance"})]}),o?t.jsx("div",{className:"loader"}):t.jsx("button",{className:"ActionBtn",onClick:async()=>{r(!0);const c=P.fromBlank(h,L,e,b,u,s?O.fromBlank([],Date.now()):null,w,I,n,!1,s,null,[],"open",Date.now());console.log(c.toMap());let d=L;f?(await Q(c),localStorage.removeItem("show")):(await z(c),d=await K(c)),window.location.href=`/Activity/Shows/Show/?activityId=${e}&showId=${d}`,r(!1)},children:f?"Save Show Template":"Create Show Template"}),t.jsx("button",{className:"ActionBtn",onClick:()=>{const d=new URLSearchParams(window.location.search).get("showId");if(f){window.location.href=`/Activity/Shows/Show/?activityId=${e}&showId=${d}`;return}window.location.href=`/Activity/Shows/Add/?activityId=${e}`},children:"Back"})]})]})}