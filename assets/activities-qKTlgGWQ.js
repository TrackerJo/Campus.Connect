import{r as t,j as e,c as f,i as A}from"./index-CgOOottF.js";import{u as N,a as p,j,b,d as C}from"./db-B2-RqaCO.js";import"./constants-cstwFp1G.js";function w({dialogRef:r,close:d,activityJoinCode:s}){const[o,n]=t.useState(""),[c,u]=t.useState(!1),[l,i]=t.useState(!1),[h,x]=t.useState(""),[m,v]=t.useState("male");async function y(a){console.log("Joining activity"),localStorage.setItem("needsPhoneNumber","false"),localStorage.setItem("needsGender","false");const g=await j(a);if(u(localStorage.getItem("needsPhoneNumber")=="true"),i(localStorage.getItem("needsGender")=="true"),!(localStorage.getItem("needsPhoneNumber")=="true"||localStorage.getItem("needsGender")=="true")){if(!g){alert("Invalid activity code");return}window.location.href=`/Activity/?activityId=${g.id}`}}return t.useEffect(()=>{s!=""&&(n(s),y(s))},[s]),e.jsx("dialog",{ref:r,className:"JoinActivityDialog",children:e.jsxs("div",{className:"dialogContents",children:[!l||!c?e.jsxs(e.Fragment,{children:[" ",e.jsx("h2",{children:"Join Activity"}),e.jsx("label",{htmlFor:"",children:"Activity Code"}),e.jsx("input",{type:"text",value:o,onChange:a=>{n(a.target.value)}}),e.jsx("button",{className:"ActionBtn",onClick:async()=>{await y(o)},children:"Join"})," "]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Activity requires some more information"}),c?e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"",children:"Phone Number"}),e.jsx("input",{type:"text",value:h,onChange:a=>{x(a.target.value)}}),e.jsx("br",{})]}):e.jsx(e.Fragment,{}),l?e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"",children:"Gender"}),e.jsxs("select",{name:"",id:"",value:m,onChange:a=>{v(a.target.value)},children:[e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]})]}):e.jsx(e.Fragment,{}),e.jsx("button",{className:"ActionBtn",onClick:async()=>{console.log("Joining activity"),c&&(await N(h),localStorage.setItem("needsPhoneNumber","false")),l&&(await p(m),localStorage.setItem("needsGender","false"));const a=await j(o);if(!a){alert("Invalid activity code");return}window.location.href=`/Activity/?activityId=${a.id}`},children:"Join"})]}),e.jsx("button",{className:"ActionBtn",onClick:()=>{d()},children:"Close"})]})})}function S({dialogRef:r,close:d}){const[s,o]=t.useState(""),[n,c]=t.useState("activity"),[u,l]=t.useState(!1);return e.jsx("dialog",{ref:r,className:"CreateActivityDialog",children:e.jsxs("div",{className:"dialogContents",children:[e.jsx("h2",{children:"Join Activity"}),e.jsx("label",{htmlFor:"",children:"Activity Name"}),e.jsx("input",{type:"text",value:s,onChange:i=>{o(i.target.value)}}),e.jsx("br",{}),e.jsx("label",{htmlFor:"",children:"Activity Type"}),e.jsxs("select",{value:n,onChange:i=>{c(i.target.value)},children:[e.jsx("option",{value:"activity",children:"Basic"}),e.jsx("option",{value:"theater",children:"Theater"})]}),u?e.jsx("div",{className:"loader"}):e.jsx("button",{className:"ActionBtn",onClick:async()=>{l(!0);const i=await b(s,n);if(i===null){alert("Failed to create activity");return}window.location.href=`/Campus.Connect/Activity/?activityId=${i.id}`},children:"Create"}),e.jsx("button",{className:"ActionBtn",onClick:()=>{d()},children:"Close"})]})})}f(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(I,{})}));function I(){const[r,d]=t.useState([]),[s,o]=t.useState("student"),n=t.useRef(null),c=t.useRef(null),[u,l]=t.useState("");return t.useEffect(()=>{A(()=>{});async function i(){const v=await C();d(v),console.log(v)}i();const h=localStorage.getItem("accountType");h&&o(h);const m=new URLSearchParams(window.location.search).get("activityJoinCode");m&&(l(m),n.current.showModal())},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"title",children:e.jsx("h1",{children:"Activities"})}),e.jsxs("div",{className:"center",children:[e.jsx("div",{className:"activities",children:r.map(i=>e.jsx("div",{className:"activity",onClick:()=>{window.location.href=`/Activity/?activityId=${i.id}`},children:e.jsx("h1",{children:i.name})},i.id))}),e.jsx("br",{}),s=="teacher"&&e.jsx("button",{className:"ActionBtn",onClick:()=>{c.current.showModal()},children:"Create Activity"}),e.jsx("button",{className:"ActionBtn",onClick:()=>{n.current.showModal()},children:"Join Activity"}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href="/"},children:"Back"})]}),e.jsx(w,{dialogRef:n,activityJoinCode:u,close:()=>{n.current.close()}}),e.jsx(S,{dialogRef:c,close:()=>{c.current.close()}})]})}