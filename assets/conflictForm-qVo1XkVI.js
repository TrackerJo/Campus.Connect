import{j as e,r as c,c as $}from"./index-CKNi8vpN.js";import{B as b,w as v,F as g,k as C,r as G,G as K,H as q,I as z,J as Q,K as V}from"./db-DROJG-1T.js";import{T as X}from"./trash-BnpXJPEK.js";function Y({conflict:s,canDelete:r,onDelete:h,setConflict:m}){return e.jsx("div",{className:"ConflictDateTile",id:"conflict-date-tile-"+s.date.date.toISOString(),children:e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"ConflictDateNameDiv",children:[e.jsx("label",{htmlFor:"Character",children:"Date: "}),e.jsx("input",{type:"date",value:s.date.date.toISOString().slice(0,10),onChange:n=>{const o=new Date(n.target.value);o.setHours(0,0,0,0),m(b.fromBlank(v.fromBlank(o,s.date.from,s.date.to),s.moreInfo))}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("label",{htmlFor:"Actor",children:"From: "}),e.jsx("input",{type:"time",value:s.date.from.toTimeString().slice(0,5),onChange:n=>{console.log(n.target.value);const o=new Date,d=n.target.value.split(":");o.setHours(parseInt(d[0]),parseInt(d[1]),0,0),m(b.fromBlank(v.fromBlank(s.date.date,o,s.date.to),s.moreInfo))}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("label",{htmlFor:"Actor",children:"To: "}),e.jsx("input",{type:"time",value:s.date.to.toTimeString().slice(0,5),onChange:n=>{console.log(n.target.value);const o=new Date,d=n.target.value.split(":");o.setHours(parseInt(d[0]),parseInt(d[1]),0,0),console.log({date:o}),m(b.fromBlank(v.fromBlank(s.date.date,s.date.from,o),s.moreInfo))}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("label",{htmlFor:"Character",children:"More Info: "}),e.jsx("input",{type:"text",value:s.moreInfo,onChange:n=>{m(b.fromBlank(v.fromBlank(s.date.date,s.date.from,s.date.to),n.target.value))}})]}),r&&e.jsx("div",{children:e.jsx("img",{src:X,alt:"",className:"TrashIcon",onClick:()=>{h()}})})]})})}function Z({minTime:s,maxTime:r,setConflict:h,dialogRef:m,close:n,date:o}){const[d,p]=c.useState(g.fromBlank(o,s,r,!0));return c.useEffect(()=>{p(g.fromBlank(o,s,r,!0))},[s,r,o]),e.jsxs("dialog",{ref:m,children:[e.jsx("h2",{children:"Add Conflict"}),e.jsxs("div",{className:"conflict-times",children:[e.jsx("label",{htmlFor:"",children:"From: "}),e.jsx("input",{type:"time",value:d.from.toTimeString().slice(0,5),onChange:f=>{const x=new Date,u=f.target.value.split(":");x.setHours(parseInt(u[0]),parseInt(u[1]),0,0),p(g.fromBlank(o,x,d.to,!0))}}),e.jsx("br",{}),e.jsx("label",{htmlFor:"",children:"To: "}),e.jsx("input",{type:"time",value:d.to.toTimeString().slice(0,5),onChange:f=>{const x=new Date,u=f.target.value.split(":");x.setHours(parseInt(u[0]),parseInt(u[1]),0,0),p(g.fromBlank(o,d.from,x,!0))}}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{h(d)},children:"Add Conflict"}),e.jsx("button",{className:"ActionBtn",onClick:()=>{n()},children:"Close"})]})]})}function _({conflict:s,conflictResponseDate:r,setConflict:h}){const m=c.useRef(null);return e.jsxs("div",{className:"ConflictDateFormTile",id:"conflict-date-form-tile-"+s.date.date.toISOString(),children:[e.jsx("div",{className:"header",children:e.jsxs("div",{className:"ConflictDateFormNameDiv",children:[e.jsxs("label",{htmlFor:"Character",children:["Date: ",s.date.date.toDateString()]}),e.jsx("br",{}),e.jsxs("label",{htmlFor:"Actor",children:["From: ",s.date.from.toLocaleTimeString()," "]}),e.jsx("br",{}),e.jsxs("label",{htmlFor:"Actor",children:["To: ",s.date.to.toLocaleTimeString()]}),e.jsx("br",{}),s.moreInfo!=""&&e.jsxs("label",{htmlFor:"Character",children:["More Info: ",s.moreInfo]})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Can attend rehersal: "}),e.jsx("input",{type:"checkbox",checked:r==null?void 0:r.canAttend,onChange:n=>{h(g.fromBlank(s.date.date,null,null,n.target.checked))}})]}),(r==null?void 0:r.from)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Conflict:"}),e.jsx("br",{}),e.jsxs("label",{htmlFor:"",children:["From: ",r.from.toLocaleTimeString()]}),e.jsx("br",{}),e.jsxs("label",{htmlFor:"",children:["To: ",r.to.toLocaleTimeString()]})]}),e.jsx("br",{})]}),(r==null?void 0:r.canAttend)&&e.jsx("button",{className:"ActionBtn",onClick:()=>{var n;(n=m.current)==null||n.showModal()},children:r!=null&&r.from?"Edit Conflict":"Add Conflict"}),e.jsx(Z,{minTime:s.date.from,maxTime:s.date.to,setConflict:n=>{var o;h(g.fromBlank(s.date.date,n.from,n.to,!0)),(o=m.current)==null||o.close()},date:s.date.date,dialogRef:m,close:()=>{var n;(n=m.current)==null||n.close()}})]})}$(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(R,{})}));function R(){var M;const[s,r]=c.useState(""),[h,m]=c.useState(""),[n,o]=c.useState(),[d,p]=c.useState(null),[f,x]=c.useState(null),[u,L]=c.useState(null),[N,O]=c.useState(null),[D,F]=c.useState([]),[I,A]=c.useState([]),[J,y]=c.useState("setDates"),[B,w]=c.useState(!1),[T,W]=c.useState("student"),[k,E]=c.useState([]),[H,P]=c.useState(!0);return c.useEffect(()=>{const a=new URLSearchParams(window.location.search),t=a.get("activityId");t&&r(t);const l=a.get("showId");l&&m(l);const i=localStorage.getItem("show-"+l);i&&(o(C.fromMap(JSON.parse(i))),console.log(C.fromMap(JSON.parse(i))),G(t,l).then(S=>{E(S),console.log(S)}));const j=localStorage.getItem("accountType");if(j&&(W(j),j=="student"&&i&&C.fromMap(JSON.parse(i)).conflictForm)){const S=[];C.fromMap(JSON.parse(i)).conflictForm.dates.map(U=>{S.push(g.fromBlank(U.date.date,null,null,!1))}),A(S)}},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"title",children:e.jsx("h1",{children:"Conflict Form"})}),e.jsxs("div",{className:"center",children:[!(n!=null&&n.conflictForm)&&T=="teacher"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Create Conflict Form"}),e.jsx("br",{}),J=="setDates"?e.jsxs(e.Fragment,{children:[" ",e.jsx("label",{children:"Start Date"}),e.jsx("input",{type:"date",onChange:a=>{console.log(new Date(a.target.value));const t=new Date(a.target.value);t.setDate(t.getDate()+1),t.setHours(0,0,0,0),p(t)}}),e.jsx("br",{}),e.jsx("label",{children:"End Date"}),e.jsx("input",{type:"date",onChange:a=>{const t=new Date(a.target.value);t.setDate(t.getDate()+1),t.setHours(0,0,0,0),x(t)}}),e.jsx("br",{}),e.jsx("label",{children:"Default Rehersal Start Time"}),e.jsx("input",{type:"time",onChange:a=>{console.log(a.target.value);const t=new Date,l=a.target.value.split(":");t.setHours(parseInt(l[0]),parseInt(l[1]),0,0),L(t),console.log({date:t})}}),e.jsx("br",{}),e.jsx("label",{children:"Default Rehersal End Time"}),e.jsx("input",{type:"time",onChange:a=>{console.log(a.target.value);const t=new Date,l=a.target.value.split(":");t.setHours(parseInt(l[0]),parseInt(l[1]),0,0),O(t),console.log({date:t})}}),e.jsx("br",{}),e.jsx("label",{children:"Exclude Weekends"}),e.jsx("input",{type:"checkbox",checked:H,onChange:a=>{P(a.target.checked)}}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{if(d&&f&&u&&N){const a=[],t=new Date(d);for(console.log("Start Date"),console.log(t);t<=f;)if(console.log(t),a.push(b.fromBlank(v.fromBlank(new Date(t),u,N),"")),t.setDate(t.getDate()+1),H)for(;t.getDay()==0||t.getDay()==6;)t.setDate(t.getDate()+1);F(a),y("editDates"),console.log(a)}},children:"Next"})," "]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"conflicts",children:D.map((a,t)=>e.jsx(Y,{conflict:a,canDelete:!0,onDelete:()=>{const l=[...D];l.splice(t,1),F(l)},setConflict:l=>{const i=[...D];i[t]=l,F(i)}},a.date.date.toISOString()))}),e.jsx("br",{}),B?e.jsx("div",{className:"loader"}):e.jsx("button",{className:"ActionBtn",onClick:async()=>{w(!0);const a=C.fromMap(n.toMap());a.conflictForm=K.fromBlank(D,Date.now()),o(a),console.log(a),await q(s,h,a.conflictForm),w(!1)},children:"Save Conflict Form"}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{y("setDates"),F([])},children:"Back"})]})]}):T=="teacher"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Conflict Form Responses"}),e.jsx("div",{className:"conflicts",children:k.map(a=>e.jsxs("div",{className:"conflict-response",children:[a.actor.name,e.jsx("br",{}),e.jsx("div",{className:"conflict-response-dates",children:a.dates.map(t=>t.canAttend?e.jsxs("div",{className:"conflict-response-date",children:[t.date.toDateString(),e.jsx("br",{}),t.from.toLocaleTimeString()," - ",t.to.toLocaleTimeString()]}):e.jsxs("div",{className:"conflict-response-date",children:[t.date.toDateString(),e.jsx("br",{}),"Can't Attend"]}))})]}))})]}):k.length==0?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Conflict Form"}),e.jsx("br",{}),e.jsx("p",{children:"Select can attend even if you can't make the full rehersal, just add a conflict"}),e.jsx("div",{className:"conflicts",children:(M=n==null?void 0:n.conflictForm)==null?void 0:M.dates.map((a,t)=>(console.log(a),e.jsx(_,{conflict:a,conflictResponseDate:I[t],setConflict:l=>{const i=[...I];console.log(i),i[t]=l,A(i)}})))}),e.jsx("br",{}),B?e.jsx("div",{className:"loader"}):e.jsx("button",{className:"ActionBtn",onClick:async()=>{w(!0);const a=I.filter(j=>j.canAttend&&j.from||!j.canAttend),t=await z(),l=Q.fromBlank(a,"",t,s,h,Date.now());console.log(l),await V(s,h,l);const i=[...k];i.push(l),E(i),w(!1)},children:"Submit Conflict Form"})]}):e.jsx(e.Fragment,{children:e.jsx("h2",{children:"Already Submitted Conflict Form"})}),e.jsx("br",{}),e.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href=`/Campus.Connect/Activity/Shows/Show/?activityId=${s}&showId=${h}`},children:"Close"})]})]})}