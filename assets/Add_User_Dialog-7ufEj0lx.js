import{r as l,j as e}from"./index-DHlFav2G.js";function U({members:c,dialogRef:i,addUser:d,close:o,addedMembers:u}){const[h,r]=l.useState([]),[m,n]=l.useState("");function x(s){r(c.filter(t=>{const a=t.name,j=t.userId;if(a==null)return!1;const g=u.map(p=>p.userId);return a.toLowerCase().includes(s.toLowerCase())&&!g.includes(j)}))}return e.jsx("dialog",{ref:i,children:e.jsxs("div",{className:"AddUserDialog",children:[e.jsx("h2",{children:"Find User"}),e.jsx("input",{type:"text",className:"UserSearchInput",value:m,onChange:s=>{if(n(s.target.value),s.target.value==""){r([]);return}x(s.target.value)}}),e.jsx("h3",{children:"Results"}),e.jsx("div",{className:"UserResults",children:h.map((s,t)=>e.jsxs("div",{className:"UserResult",onClick:()=>{n(""),r([])},children:[e.jsx("label",{htmlFor:"",children:s.name}),e.jsx("button",{className:"ActionBtn",onClick:()=>{console.log("Added user"),d(s)},children:"Add"})]},t))}),e.jsx("button",{className:"ActionBtn",onClick:()=>{o()},children:"Close"})]})})}export{U as A};