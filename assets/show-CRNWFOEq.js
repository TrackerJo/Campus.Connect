import{c as w,j as e,r as c}from"./index-BvKDzgix.js";import{D as s}from"./Dashboard_Tile-CwyD9v1H.js";import{o as p}from"./db-CcV56dnt.js";w(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(C,{})}));function C(){const[i,h]=c.useState(""),[o,m]=c.useState(""),[t,S]=c.useState(),[f,u]=c.useState("student");return c.useEffect(()=>{const r=new URLSearchParams(window.location.search),n=r.get("activityId");n&&h(n);const a=r.get("showId");a&&m(a),p(n,a).then(d=>{S(d),console.log(d)});const l=localStorage.getItem("accountType");l&&u(l)},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"title",children:e.jsx("h1",{children:t==null?void 0:t.name})}),e.jsxs("div",{className:"center",children:[e.jsxs("div",{className:"tiles",children:[f=="teacher"?e.jsxs(e.Fragment,{children:[" ",e.jsx(s,{title:"Assign Roles",description:"Assign roles to characters",onClick:()=>{localStorage.setItem("show-"+o,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/Assign/?activityId=${i}&showId=${o}`}}),(t==null?void 0:t.canCreateSchedule)&&e.jsx(s,{title:"Create/Edit Schedule",description:"Create/Edit the rehersal schedule",onClick:()=>{localStorage.setItem("show-"+o,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/CreateSchedule/?activityId=${i}&showId=${o}`}}),e.jsx(s,{title:"Conflict Form",description:"Create/View the conflict form",onClick:()=>{localStorage.setItem("show-"+o,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/ConflictForm/?activityId=${i}&showId=${o}`}})," "]}):e.jsxs(e.Fragment,{children:[(t==null?void 0:t.conflictForm)&&e.jsx(s,{title:"Conflict Form",description:"Complete/View the conflict form",onClick:()=>{localStorage.setItem("show-"+o,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/ConflictForm/?activityId=${i}&showId=${o}`}})," "]}),e.jsx(s,{title:"Resources",description:"View all resources",onClick:()=>{localStorage.setItem("show-"+o,JSON.stringify(t==null?void 0:t.toMap())),window.location.href=`/Campus.Connect/Activity/Shows/Show/Resources/?activityId=${i}&showId=${o}`}})]}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href=`/Campus.Connect/Activity/Shows/?activityId=${i}`},children:"Back"})]})]})}