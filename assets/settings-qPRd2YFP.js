import{r as t,j as e,c as g,i as p}from"./index-DtLv0Sd5.js";import{e as A,A as L}from"./db-BTzNni85.js";import{q as C,r as R,s as m,i as f}from"./constants-DO68HKUH.js";function v({addRehearsalLocation:l,close:u,dialogRef:a}){const[i,x]=t.useState(""),[d,c]=t.useState("#000000");return e.jsxs("dialog",{ref:a,children:[e.jsx("h2",{children:"Add Rehearsal Location"}),e.jsxs("div",{className:"location-info",children:[e.jsx("label",{htmlFor:"",children:"Name: "}),e.jsx("input",{type:"text",value:i,onChange:r=>{x(r.target.value)}}),e.jsx("br",{}),e.jsx("label",{htmlFor:"",children:"Color: "}),e.jsx("input",{type:"color",value:d,onChange:r=>{c(r.target.value)}}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{l(C.fromBlank(i,R(d)))},children:"Add Rehearsal Location"}),e.jsx("button",{className:"ActionBtn",onClick:()=>{u()},children:"Close"})]})]})}g(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(y,{})}));function y(){const[l,u]=t.useState(""),[a,i]=t.useState(null),[x,d]=t.useState("student"),c=t.useRef(null),[r,j]=t.useState([]);return t.useState([]),t.useEffect(()=>{p(()=>{});const s=new URLSearchParams(window.location.search).get("activityId");s&&u(s),A(s).then(h=>{h&&(i(h),h instanceof m&&j(h.rehearsalLocations))});const n=localStorage.getItem("accountType");n&&d(n)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title",children:[e.jsxs("h1",{children:["Activity: ",a==null?void 0:a.name]}),e.jsxs("h3",{children:["Join Code: ",a==null?void 0:a.joinCode]}),e.jsx("h2",{children:"Rehearsal Locations"}),e.jsx("div",{className:"rehearsal-locations",children:a instanceof m?r.map((o,s)=>(console.log(o),console.log(f(o.color)),e.jsxs("div",{className:"rehearsal-location",children:[e.jsx("label",{htmlFor:"",className:"rehearsal-location-name",children:o.name}),e.jsx("div",{className:"rehearsal-location-color",style:{backgroundColor:f(o.color)}})]}))):e.jsx(e.Fragment,{})}),e.jsx("button",{className:"ActionBtn",onClick:o=>{var s;(s=c.current)==null||s.showModal()},children:"Add Rehearsal Location"}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href="/Campus.Connect/Activity/?activityId="+l},children:"Back"})]}),e.jsx(v,{dialogRef:c,addRehearsalLocation:async o=>{var s;if(a instanceof m){const n=[...a.rehearsalLocations];n.push(o),a.rehearsalLocations=n,console.log(n),j(n),await L(l,n),(s=c.current)==null||s.close()}},close:()=>{var o;(o=c.current)==null||o.close()}})]})}