import{c as d,j as t,r as n,i as m}from"./index-DUWJYJoQ.js";import{v as c,l as o,w as s}from"./constants-DQ2WKrIa.js";d(document.getElementById("root")).render(t.jsx(n.StrictMode,{children:t.jsx(h,{})}));function h(){const[e,i]=n.useState(null),[g,l]=n.useState("student");return n.useEffect(()=>{m(()=>{});const a=JSON.parse(localStorage.getItem("event"));a&&(a.type==="activity"?i(c.fromMap(a)):a.type==="activity-theater-event"?i(o.fromMap(a)):i(s.fromMap(a)));const r=localStorage.getItem("accountType");r&&l(r)},[]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"title",children:[t.jsx("h1",{children:e==null?void 0:e.name}),t.jsx("h3",{children:e==null?void 0:e.date.date.toDateString()}),t.jsxs("h3",{children:[e==null?void 0:e.date.from.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," - ",e==null?void 0:e.date.to.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),t.jsxs("h3",{children:["Location: ",e instanceof o?e==null?void 0:e.rehearsalLocation.name:e==null?void 0:e.location.name]}),t.jsx("p",{children:e==null?void 0:e.info}),t.jsx("h4",{children:"Attendees:"}),t.jsx("div",{className:"event-attendees",children:e instanceof s?t.jsx("p",{children:"Everyone"}):e instanceof c?(e==null?void 0:e.generalTarget)!="custom"?t.jsx("p",{children:e==null?void 0:e.generalTarget}):e==null?void 0:e.targets.map(a=>t.jsx("div",{className:"attendee",children:t.jsx("h1",{children:a.memberName})})):e==null?void 0:e.targets.map(a=>t.jsx("div",{className:"attendee",children:t.jsx("h1",{children:a.memberName})}))}),t.jsx("br",{}),t.jsx("button",{className:"ActionBtn",onClick:()=>{window.open("/Campus.Connect/Calendar/Event/Print/","_blank")},children:"Print"}),t.jsx("button",{className:"ActionBtn",onClick:()=>{const a=localStorage.getItem("back");a?(window.location.href=a,localStorage.removeItem("back")):window.location.href="/Campus.Connect/Calendar/"},children:"Back"})]})})}