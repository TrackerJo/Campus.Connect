import{x as it,y as r,z as c,B as D,s as O,g as N,H as E,I as p,d as q,f as X,J as I,K as S,N as M,l as G,O as x,p as B,T as rt,P as $,S as lt,Q as H,U as ut,V as dt,k as A,v as ht,t as k,W as z,X as Q,M as J,Y as ft,Z as P,r as R,q as gt,L as mt}from"./constants-DO68HKUH.js";import{f as pt,C as yt,h as W,_ as It,g as Y,d as vt,e as wt,F as St,m as ot,o as Dt,p as b}from"./index-DtLv0Sd5.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="type.googleapis.com/google.protobuf.Int64Value",Mt="type.googleapis.com/google.protobuf.UInt64Value";function st(t,e){const o={};for(const s in t)t.hasOwnProperty(s)&&(o[s]=e(t[s]));return o}function j(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>j(e));if(typeof t=="function"||typeof t=="object")return st(t,e=>j(e));throw new Error("Data cannot be encoded in JSON: "+t)}function _(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Tt:case Mt:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>_(e)):typeof t=="function"||typeof t=="object"?st(t,e=>_(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends St{constructor(e,o,s){super(`${K}/${e}`,o||""),this.details=s}}function Ct(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function At(t,e){let o=Ct(t),s=o,n;try{const a=e&&e.error;if(a){const i=a.status;if(typeof i=="string"){if(!Z[i])return new U("internal","internal");o=Z[i],s=i}const l=a.message;typeof l=="string"&&(s=l),n=a.details,n!==void 0&&(n=_(n))}}catch{}return o==="ok"?null:new U(o,s,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,o,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||e.get().then(n=>this.auth=n,()=>{}),this.messaging||o.get().then(n=>this.messaging=n,()=>{}),this.appCheck||s.get().then(n=>this.appCheck=n,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const o=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(e){const o=await this.getAuthToken(),s=await this.getMessagingToken(),n=await this.getAppCheckToken(e);return{authToken:o,messagingToken:s,appCheckToken:n}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="us-central1";function kt(t){let e=null;return{promise:new Promise((o,s)=>{e=setTimeout(()=>{s(new U("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Ut{constructor(e,o,s,n,a=V,i){this.app=e,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new Et(o,s,n),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(a);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=V}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function Nt(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function bt(t,e,o){return s=>Rt(t,e,s,{})}async function Ft(t,e,o,s){o["Content-Type"]="application/json";let n;try{n=await s(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await n.json()}catch{}return{status:n.status,json:a}}function Rt(t,e,o,s){const n=t._url(e);return Pt(t,n,o,s)}async function Pt(t,e,o,s){o=j(o);const n={data:o},a={},i=await t.contextProvider.getContext(s.limitedUseAppCheckTokens);i.authToken&&(a.Authorization="Bearer "+i.authToken),i.messagingToken&&(a["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=i.appCheckToken);const l=s.timeout||7e4,d=kt(l),u=await Promise.race([Ft(e,n,a,t.fetchImpl),d.promise,t.cancelAllRequests]);if(d.cancel(),!u)throw new U("cancelled","Firebase Functions instance was deleted.");const g=At(u.status,u.json);if(g)throw g;if(!u.json)throw new U("internal","Response is not valid JSON object.");let m=u.json.data;if(typeof m>"u"&&(m=u.json.result),typeof m>"u")throw new U("internal","Response is missing data field.");return{data:_(m)}}const tt="@firebase/functions",et="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="auth-internal",_t="app-check-internal",xt="messaging-internal";function Lt(t,e){const o=(s,{instanceIdentifier:n})=>{const a=s.getProvider("app").getImmediate(),i=s.getProvider(Ot),l=s.getProvider(xt),d=s.getProvider(_t);return new Ut(a,i,l,d,n,t)};pt(new yt(K,o,"PUBLIC").setMultipleInstances(!0)),W(tt,et,e),W(tt,et,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t=wt(),e=V){const s=It(Y(t),K).getImmediate({identifier:e}),n=vt("functions");return n&&Bt(s,...n),s}function Bt(t,e,o){Nt(Y(t),e,o)}function nt(t,e,o){return bt(Y(t),e)}Lt(fetch.bind(self));const at=Gt(ot),h=it(ot),$t=r(h,"schools"),qt=async()=>{const t=await I($t),e=[];return t.forEach(o=>{e.push(o.data())}),e},Xt=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=c(h,"schools",e);if(t=="student"){const s=S(r(o,"activities"),M("studentUids","array-contains",b())),n=[];return(await I(s)).forEach(i=>{n.push(N.fromMap(i.data()))}),n}else{const s=S(r(o,"activities"),M("teacherUids","array-contains",b())),n=[];return(await I(s)).forEach(i=>{console.log(i.data()),n.push(N.fromMap(i.data()))}),n}};async function Yt(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=c(h,"schools",e),s=c(r(o,"activities"),t),n=await D(s);return n.exists()?n.data().type=="theater"?O.fromMap(n.data()):N.fromMap(n.data()):null}async function Kt(t,e){const o=localStorage.getItem("schoolId");if(!o)return"";const s=c(h,"schools",o),n=c(r(s,"activities"),e),a=r(n,"shows"),i=await E(a,t.toMap());return t.id=i.id,await p(i,{id:i.id}),i.id}async function zt(t){await Dt("cmurphy@gmail.com","123456");const e=r(h,"showTemplates"),o=await E(e,t.toMap());t.id=o.id,await p(o,{id:o.id})}async function Qt(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const s=c(h,"schools",o),n=c(r(s,"activities"),t),a=c(r(n,"shows"),e),i=await D(a);return i.exists()?(console.log(i.data()),q.fromMap(i.data())):null}async function Wt(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=c(h,"schools",e),s=c(r(o,"activities"),t),n=await D(s);if(!n.exists())return[];const a=[];return n.data().students.forEach(i=>{a.push(X.fromMap(i))}),a}async function Zt(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e);await x(i,o.toMap())}async function te(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=c(h,"schools",e),s=c(r(o,"activities"),t.activityId),n=r(s,"events"),a=await E(n,t.toMap());t.id=a.id,await p(a,{id:a.id})}async function ee(t,e){const o=localStorage.getItem("schoolId"),s=localStorage.getItem("accountType");if(!o)return[];const n=c(h,"schools",o),a=c(r(n,"activities"),t),i=r(a,"events");if(s=="student"){const l=await I(S(i,M("showId","==",e),M("targetUids","array-contains",b()))),d=[];return l.forEach(u=>{u.data().deleted||d.push(G.fromMap(u.data()))}),d}else{const l=await I(S(i,M("showId","==",e))),d=[];return l.forEach(u=>{u.data().deleted||d.push(G.fromMap(u.data()))}),d}}async function oe(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=c(h,"schools",e),s=c(r(o,"activities"),t.activityId),n=c(r(s,"events"),t.id);await p(n,{deleted:!0}),await nt(at,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function se(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=c(h,"schools",e),s=c(r(o,"activities"),t),n=r(s,"shows"),a=await I(n),i=[];return a.forEach(l=>{i.push(q.fromMap(l.data()))}),i}async function ne(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e);await p(i,{conflictForm:o.toMap()}),await nt(at,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:s,deadline:o.deadline.toISOString()})}async function ae(){const t=await b(),e=localStorage.getItem("schoolId");if(!e)return null;const o=c(h,"schools",e),s=r(o,"students"),n=c(s,t),a=await D(n);return a.exists()?X.fromMap(a.data()):null}async function ce(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e),l=c(i,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await x(l,o.toMap())}async function ie(t,e){const o=localStorage.getItem("schoolId"),s=localStorage.getItem("accountType");if(localStorage.getItem("userId"),!o)return[];const n=c(h,"schools",o),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e),l=r(i,"conflictResponses");if(s=="student"){console.log("Getting conflict responses for student"),console.log(b());const g=await I(S(l,M("submitterId","==",b()))),m=[];return g.forEach(y=>{m.push(B.fromMap(y.data()))}),m}const d=await I(l),u=[];return d.forEach(g=>{u.push(B.fromMap(g.data()))}),u}async function re(){const t=r(h,"showTemplates"),e=await I(t),o=[];return e.forEach(s=>{o.push(q.fromMap(s.data()))}),o}async function le(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),s=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+s),!e||!o||!s)return null;const n=c(h,"schools",e),a=S(r(n,"activities"),M("joinCode","==",t)),i=await I(a);if(i.empty)return null;const l=i.docs[0],d=c(r(n,s=="student"?"students":"teachers"),o),u=await D(d);if(console.log(u.data()),!u.exists())return null;if(l.data().type=="theater"){if(u.data().gender==null&&s=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),u.data().phoneNumber==""&&s=="student"&&localStorage.setItem("needsPhoneNumber","true"),(u.data().phoneNumber==""||u.data().gender==null)&&s=="student")return null;if(s=="student")return await p(l.ref,{studentUids:[...l.data().studentUids,o],students:[...l.data().students,X.fromMap(u.data()).toMap()]}),O.fromMap(l.data());{console.log("Joining as teacher"),console.log(u.data());const g=A.fromBlank(u.data().fullname,u.data().uid,u.data().FCMToken);return console.log(g.toMap()),await p(l.ref,{teacherUids:[...l.data().teacherUids,o],teachers:[...l.data().teachers,g.toMap()]}),O.fromMap(l.data())}}else if(s=="student"){const g=A.fromBlank(u.data().fullname,u.data().uid,u.data().FCMToken);return await p(l.ref,{studentUids:[...l.data().studentUids,o],students:[...l.data().students,g.toMap()]}),N.fromMap(l.data())}else{const g=A.fromBlank(u.data().fullname,u.data().uid,u.data().FCMToken);return await p(l.ref,{teacherUids:[...l.data().teacherUids,o],teachers:[...l.data().teachers,g.toMap()]}),N.fromMap(l.data())}}async function ue(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),s=localStorage.getItem("accountType");if(!e||!o||!s)return;const n=c(h,"schools",e),a=c(r(n,s=="student"?"students":"teachers"),o);await p(a,{gender:t})}async function de(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),s=localStorage.getItem("accountType");if(!e||!o||!s)return;const n=c(h,"schools",e),a=c(r(n,s=="student"?"students":"teachers"),o);await p(a,{phoneNumber:t})}async function he(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=c(h,"schools",e),s=c(r(o,"activities"),t.activityId),n=c(r(s,"events"),t.id);await p(n,t.toMap())}async function fe(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const s=c(h,"schools",t),n=[];let a;o=="student"?a=await I(S(r(s,"activities"),M("studentUids","array-contains",e))):a=await I(S(r(s,"activities"),M("teacherUids","array-contains",e))),console.log(a);for(const i of a.docs){let l;o=="student"?l=await I(S(r(i.ref,"events"),M("targetUids","array-contains",e))):l=await I(r(i.ref,"events"));for(const d of l.docs){const u=d.data();console.log(u),u.type=="activity-theater-event"?n.push(G.fromMap(u)):n.push(ht.fromMap(u))}}return n}async function ge(t,e){const o=localStorage.getItem("schoolId"),s=localStorage.getItem("userId");if(!o||!s)return null;const n=c(h,"schools",o),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e),l=r(i,"conflictResponses"),d=await D(c(l,s));return d.exists()?B.fromMap(d.data()):null}async function me(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const s=c(h,"schools",o),n=c(r(s,"activities"),t);await p(n,{rehearsalLocations:e.map(a=>a.toMap())})}async function pe(t,e){const o=localStorage.getItem("schoolId"),s=localStorage.getItem("userId");if(!o||!s)return[];const n=localStorage.getItem("accountType"),a=c(h,"schools",o),i=c(r(a,"activities"),t);if(n=="teacher"){const l=c(r(a,"teachers"),s),d=await D(l);if(!d.exists())return;const u=rt.fromMap(d.data());$(r(i,"groupChats"),async g=>{const m=[];for(const y of g.docs){const f=k.fromMap(y.data());if((f.generalTarget=="direct"||f.generalTarget=="custom")&&(A.fromBlank(u.fullname,u.uid,u.FCMToken),!f.members.find(v=>v.memberUid==s)))continue;if(f.generalTarget=="direct"){const v=f.members.find(F=>F.memberUid!=s);f.name=(v==null?void 0:v.memberName)||"Unknown"}const T=r(y.ref,"messages"),w=S(T,Q("timeSent","desc"),z(1)),C=await I(w);C.empty||(f.lastMessage=J.fromMap(C.docs[0].data())),m.push(f)}m.sort((y,f)=>y.lastMessage?f.lastMessage?f.lastMessage.timeSent.getTime()-y.lastMessage.timeSent.getTime():-1:1),e(m)})}else{const l=c(r(a,"students"),s),d=await D(l);if(!d.exists())return;const u=lt.fromMap(d.data());console.log(u),$(r(i,"groupChats"),async g=>{const m=[];A.fromBlank(u.fullname,u.uid,u.FCMToken);for(const y of g.docs){const f=k.fromMap(y.data());if(!(f.generalTarget=="everyone"||f.generalTarget=="students")&&(f.generalTarget=="parents"||!f.members.find(v=>v.memberUid==s)))continue;if(f.generalTarget=="direct"){const v=f.members.find(F=>F.memberUid!=s);f.name=(v==null?void 0:v.memberName)||"Unknown"}const T=r(y.ref,"messages"),w=S(T,Q("timeSent","desc"),z(1)),C=await I(w);C.empty||(f.lastMessage=J.fromMap(C.docs[0].data())),m.push(f)}m.sort((y,f)=>y.lastMessage?f.lastMessage?f.lastMessage.timeSent.getTime()-y.lastMessage.timeSent.getTime():-1:1),e(m)})}}async function ye(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return[];const n=c(h,"schools",s),a=c(r(n,"activities"),t);console.log("Getting messages for "+e);const i=c(r(a,"groupChats"),e),l=r(i,"messages");$(l,d=>{const u=[];d.forEach(g=>{u.push(J.fromMap(g.data()))}),u.sort((g,m)=>g.timeSent.getTime()-m.timeSent.getTime()),o(u)})}async function Ht(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const s=c(h,"schools",t),n=c(r(s,o=="student"?"students":"teachers"),e),a=await D(n);return a.exists()?a.data():null}async function Ie(t,e,o,s){const n=localStorage.getItem("schoolId"),a=localStorage.getItem("userId");if(!n||!a)return;const i=c(h,"schools",n),l=c(r(i,"activities"),t),d=c(r(l,"groupChats"),e);if(!(await D(d)).exists()){if(s==null)return;const y=k.fromBlank("",s.memberUid,[A.fromBlank(o.senderName,o.senderUid,o.senderFCMToken),s],"direct",t,Date.now());await x(d,y.toMap());const f=r(d,"messages"),T=await E(f,o.toMap());o.messageId=T.id,await p(T,{messageId:T.id});return}const g=r(d,"messages"),m=await E(g,o.toMap());o.messageId=m.id,await p(m,{messageId:m.id})}async function L(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=c(h,"schools",e),s=c(r(o,"activities"),t.activityId),n=r(s,"groupChats"),a=await E(n,t.toMap());t.id=a.id,await p(a,{id:a.id})}async function ve(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e);p(i,{resources:H(o.toMap())})}async function we(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e);p(i,{resources:ft(o.toMap())})}async function Se(t,e,o){const s=localStorage.getItem("schoolId");if(!s)return;const n=c(h,"schools",s),a=c(r(n,"activities"),t),i=c(r(a,"shows"),e),l=r(i,"conflictResponses"),d=c(l,o.id);await ut(d)}async function De(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const s=c(h,"schools",o),n=r(s,t+"s");await x(c(n,e.uid),e.toMap());const a=dt.fromBlank(e.fullname,e.FCMToken,e.uid);await p(s,{[t+"Uids"]:H(e.uid),[t+"s"]:H(a.toMap())})}function Jt(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function Te(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const s=c(h,"schools",o),n=await D(s);if(!n.exists())return null;const a=n.data(),i=r(s,"activities"),l=Jt(t),d=[P.fromMap({name:"Rehearsal",color:R("#FF0000")}),P.fromMap({name:"Performance",color:R("#00FF00")})],u=[P.fromMap({name:"Practice",color:R("#FF0000")}),P.fromMap({name:"Game",color:R("#00FF00")})],g=[gt.fromMap({name:"Auditorium",color:R("#0000FF")})],m=mt.fromMap(a.location),y=[m],f=await Ht();if(!f)return null;const T=A.fromBlank(f.fullname,f.uid,f.FCMToken);let w;e=="theater"?w=O.fromBlank(t,"",l,[],[],[],[T],y,d,m,g,"type",Date.now()):w=N.fromBlank(t,"",l,[],[],[],[T],y,u,m,"type",Date.now(),"activity");const C=await E(i,w.toMap());w.id=C.id,await p(C,{id:C.id});const v=k.fromMap({name:"Everyone",members:[],id:"",activityId:w.id,lastUpdated:Date.now(),generalTarget:"everyone"});await L(v);const F=k.fromMap({name:"Parents",members:[],id:"",activityId:w.id,lastUpdated:Date.now(),generalTarget:"parents"});await L(F);const ct=k.fromMap({name:"Students",members:[],id:"",activityId:w.id,lastUpdated:Date.now(),generalTarget:"students"});return await L(ct),w}export{me as A,L as B,Ie as C,ye as D,pe as E,Ht as F,ve as G,we as H,ue as a,Te as b,De as c,Xt as d,Yt as e,se as f,qt as g,re as h,Kt as i,le as j,zt as k,Qt as l,Wt as m,ie as n,ee as o,oe as p,he as q,te as r,Zt as s,ne as t,de as u,Se as v,ae as w,ce as x,fe as y,ge as z};