import{c as p,j as e,r as s,i as f}from"./index-DUWJYJoQ.js";import{D as c}from"./Dashboard_Tile-Ee_aF8QT.js";import{l as C}from"./db-DbyQmLQG.js";import"./constants-dc7CZI3_.js";p(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(y,{})}));function y(){const[o,h]=s.useState(""),[i,m]=s.useState(""),[t,S]=s.useState(),[w,u]=s.useState("student");return s.useEffect(()=>{f(()=>{});const r=new URLSearchParams(window.location.search),n=r.get("activityId");n&&h(n);const a=r.get("showId");a&&m(a),C(n,a).then(d=>{S(d),console.log(d)});const l=localStorage.getItem("accountType");l&&u(l)},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"title",children:e.jsx("h1",{children:t==null?void 0:t.name})}),e.jsxs("div",{className:"center",children:[e.jsxs("div",{className:"tiles",children:[w=="teacher"?e.jsxs(e.Fragment,{children:[" ",e.jsx(c,{title:"Assign Roles",description:"Assign roles to characters",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/Assign/?activityId=${o}&showId=${i}`}}),(t==null?void 0:t.canCreateSchedule)&&e.jsx(c,{title:"Create/Edit Schedule",description:"Create/Edit the rehersal schedule",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/CreateSchedule/?activityId=${o}&showId=${i}`}}),e.jsx(c,{title:"Conflict Form",description:"Create/View the conflict form",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/ConflictForm/?activityId=${o}&showId=${i}`}})," "]}):e.jsxs(e.Fragment,{children:[(t==null?void 0:t.conflictForm)&&e.jsx(c,{title:"Conflict Form",description:"Complete/View the conflict form",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/ConflictForm/?activityId=${o}&showId=${i}`}})," ",e.jsx(c,{title:"Schedule",description:"View Schedule",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/Schedule/?activityId=${o}&showId=${i}`}})]}),e.jsx(c,{title:"Resources",description:"View all resources",onClick:()=>{localStorage.setItem("show-"+i,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/Resources/?activityId=${o}&showId=${i}`}})]}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href=`/Campus.Connect/Activity/Shows/?activityId=${o}`},children:"Back"})]})]})}