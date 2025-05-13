import{N as Ge,P as h,Q as f,U as M,u as st,j as V,V as F,W as v,g as xt,i as Q,X as D,Y as _,Z as S,l as B,_ as q,o as Ut,$ as Rt,S as Ft,T as je,a0 as O,a1 as He,a2 as gt,c as W,e as mt,F as ae,d as yt,L as It,y as Z,q as ce,s as ot,t as Ve,v as x,a3 as ie,H as K,J as wt,O as at,K as re,a as le,a4 as Kt,a5 as Jt,M as Ct,w as ue,a6 as P,a7 as qe,a8 as Mt,a9 as ze}from"./constants-CZ2ZrUdU.js";import{_ as de,C as fe,f as vt,h as he,k as j,m as pe,n as ge,F as me,o as Xe,S as We,p as Tt,g as Y}from"./index-U3pxML4x.js";/**
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
 */const Ke="type.googleapis.com/google.protobuf.Int64Value",Je="type.googleapis.com/google.protobuf.UInt64Value";function ye(t,e){const o={};for(const n in t)t.hasOwnProperty(n)&&(o[n]=e(t[n]));return o}function Nt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Nt(e));if(typeof t=="function"||typeof t=="object")return ye(t,e=>Nt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Dt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ke:case Je:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Dt(e)):typeof t=="function"||typeof t=="object"?ye(t,e=>Dt(e)):t}/**
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
 */const Bt="functions";/**
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
 */const Qt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends me{constructor(e,o,n){super(`${Bt}/${e}`,o||""),this.details=n}}function Qe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ye(t,e){let o=Qe(t),n=o,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Qt[c])return new J("internal","internal");o=Qt[c],n=c}const i=a.message;typeof i=="string"&&(n=i),s=a.details,s!==void 0&&(s=Dt(s))}}catch{}return o==="ok"?null:new J(o,n,s)}/**
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
 */class Ze{constructor(e,o,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||o.get().then(s=>this.messaging=s,()=>{}),this.appCheck||n.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const o=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(e){const o=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:o,messagingToken:n,appCheckToken:s}}}/**
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
 */const Ot="us-central1";function to(t){let e=null;return{promise:new Promise((o,n)=>{e=setTimeout(()=>{n(new J("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class eo{constructor(e,o,n,s,a=Ot,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Ze(o,n,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(a);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=Ot}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function oo(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function no(t,e,o){return n=>ao(t,e,n,{})}async function so(t,e,o,n){o["Content-Type"]="application/json";let s;try{s=await n(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function ao(t,e,o,n){const s=t._url(e);return co(t,s,o,n)}async function co(t,e,o,n){o=Nt(o);const s={data:o},a={},c=await t.contextProvider.getContext(n.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const i=n.timeout||7e4,d=to(i),r=await Promise.race([so(e,s,a,t.fetchImpl),d.promise,t.cancelAllRequests]);if(d.cancel(),!r)throw new J("cancelled","Firebase Functions instance was deleted.");const l=Ye(r.status,r.json);if(l)throw l;if(!r.json)throw new J("internal","Response is not valid JSON object.");let u=r.json.data;if(typeof u>"u"&&(u=r.json.result),typeof u>"u")throw new J("internal","Response is missing data field.");return{data:Dt(u)}}const Yt="@firebase/functions",Zt="0.11.8";/**
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
 */const io="auth-internal",ro="app-check-internal",lo="messaging-internal";function uo(t,e){const o=(n,{instanceIdentifier:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider(io),i=n.getProvider(lo),d=n.getProvider(ro);return new eo(a,c,i,d,s,t)};de(new fe(Bt,o,"PUBLIC").setMultipleInstances(!0)),vt(Yt,Zt,e),vt(Yt,Zt,"esm2017")}/**
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
 */function Ie(t=ge(),e=Ot){const n=he(j(t),Bt).getImmediate({identifier:e}),s=pe("functions");return s&&fo(n,...s),n}function fo(t,e,o){oo(j(t),e,o)}function N(t,e,o){return no(j(t),e)}uo(fetch.bind(self));/**
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
 */const we="firebasestorage.googleapis.com",ve="storageBucket",ho=2*60*1e3,po=10*60*1e3;/**
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
 */class k extends me{constructor(e,o,n=0){super(Et(e),`Firebase Storage: ${o} (${Et(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Et(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var b;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(b||(b={}));function Et(t){return"storage/"+t}function $t(){const t="An unknown error occurred, please check the error payload for server response.";return new k(b.UNKNOWN,t)}function go(t){return new k(b.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function mo(t){return new k(b.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yo(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new k(b.UNAUTHENTICATED,t)}function Io(){return new k(b.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wo(t){return new k(b.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vo(){return new k(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Do(){return new k(b.CANCELED,"User canceled the upload/download.")}function To(t){return new k(b.INVALID_URL,"Invalid URL '"+t+"'.")}function _o(t){return new k(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function So(){return new k(b.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ve+"' property when initializing the app?")}function bo(){return new k(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ko(){return new k(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Mo(t){return new k(b.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pt(t){return new k(b.INVALID_ARGUMENT,t)}function De(){return new k(b.APP_DELETED,"The Firebase app was deleted.")}function Eo(t){return new k(b.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nt(t,e){return new k(b.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function et(t){throw new k(b.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class C{constructor(e,o){this.bucket=e,this.path_=o}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,o){let n;try{n=C.makeFromUrl(e,o)}catch{return new C(e,"")}if(n.path==="")return n;throw _o(e)}static makeFromUrl(e,o){let n=null;const s="([A-Za-z0-9.\\-_]+)";function a(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const c="(/(.*))?$",i=new RegExp("^gs://"+s+c,"i"),d={bucket:1,path:3};function r(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",u=o.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${l}/b/${s}/o${p}`,"i"),m={bucket:1,path:3},I=o===we?"(?:storage.googleapis.com|storage.cloud.google.com)":o,w="([^?#]*)",T=new RegExp(`^https?://${I}/${s}/${w}`,"i"),U=[{regex:i,indices:d,postModify:a},{regex:g,indices:m,postModify:r},{regex:T,indices:{bucket:1,path:2},postModify:r}];for(let R=0;R<U.length;R++){const ut=U[R],bt=ut.regex.exec(e);if(bt){const $e=bt[ut.indices.bucket];let kt=bt[ut.indices.path];kt||(kt=""),n=new C($e,kt),ut.postModify(n);break}}if(n==null)throw To(e);return n}}class Ao{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Uo(t,e,o){let n=1,s=null,a=null,c=!1,i=0;function d(){return i===2}let r=!1;function l(...w){r||(r=!0,e.apply(null,w))}function u(w){s=setTimeout(()=>{s=null,t(g,d())},w)}function p(){a&&clearTimeout(a)}function g(w,...T){if(r){p();return}if(w){p(),l.call(null,w,...T);return}if(d()||c){p(),l.call(null,w,...T);return}n<64&&(n*=2);let U;i===1?(i=2,U=0):U=(n+Math.random())*1e3,u(U)}let m=!1;function I(w){m||(m=!0,p(),!r&&(s!==null?(w||(i=2),clearTimeout(s),u(0)):w||(i=1)))}return u(0),a=setTimeout(()=>{c=!0,I(!0)},o),I}function Ro(t){t(!1)}/**
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
 */function Co(t){return t!==void 0}function No(t){return typeof t=="object"&&!Array.isArray(t)}function Gt(t){return typeof t=="string"||t instanceof String}function te(t){return jt()&&t instanceof Blob}function jt(){return typeof Blob<"u"}function ee(t,e,o,n){if(n<e)throw Pt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>o)throw Pt(`Invalid value for '${t}'. Expected ${o} or less.`)}/**
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
 */function _t(t,e,o){let n=e;return o==null&&(n=`https://${e}`),`${o}://${n}/v0${t}`}function Te(t){const e=encodeURIComponent;let o="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);o=o+s+"&"}return o=o.slice(0,-1),o}var H;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(H||(H={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Oo(t,e){const o=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return o||s||a}/**
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
 */class Po{constructor(e,o,n,s,a,c,i,d,r,l,u,p=!0){this.url_=e,this.method_=o,this.headers_=n,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=i,this.errorCallback_=d,this.timeout_=r,this.progressCallback_=l,this.connectionFactory_=u,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new dt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=i=>{const d=i.loaded,r=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,r)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const i=a.getErrorCode()===H.NO_ERROR,d=a.getStatus();if(!i||Oo(d,this.additionalRetryCodes_)&&this.retry){const l=a.getErrorCode()===H.ABORT;n(!1,new dt(!1,null,l));return}const r=this.successCodes_.indexOf(d)!==-1;n(!0,new dt(r,a))})},o=(n,s)=>{const a=this.resolve_,c=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(i,i.getResponse());Co(d)?a(d):a()}catch(d){c(d)}else if(i!==null){const d=$t();d.serverResponse=i.getErrorText(),this.errorCallback_?c(this.errorCallback_(i,d)):c(d)}else if(s.canceled){const d=this.appDelete_?De():Do();c(d)}else{const d=vo();c(d)}};this.canceled_?o(!1,new dt(!1,null,!0)):this.backoffId_=Uo(e,o,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ro(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dt{constructor(e,o,n){this.wasSuccessCode=e,this.connection=o,this.canceled=!!n}}function Lo(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xo(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fo(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Bo(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $o(t,e,o,n,s,a,c=!0){const i=Te(t.urlParams),d=t.url+i,r=Object.assign({},t.headers);return Fo(r,e),Lo(r,o),xo(r,a),Bo(r,n),new Po(d,t.method,r,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function Go(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jo(...t){const e=Go();if(e!==void 0){const o=new e;for(let n=0;n<t.length;n++)o.append(t[n]);return o.getBlob()}else{if(jt())return new Blob(t);throw new k(b.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ho(t,e,o){return t.webkitSlice?t.webkitSlice(e,o):t.mozSlice?t.mozSlice(e,o):t.slice?t.slice(e,o):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Vo(t){if(typeof atob>"u")throw Mo("base-64");return atob(t)}/**
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
 */const L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class At{constructor(e,o){this.data=e,this.contentType=o||null}}function qo(t,e){switch(t){case L.RAW:return new At(_e(e));case L.BASE64:case L.BASE64URL:return new At(Se(t,e));case L.DATA_URL:return new At(Xo(e),Wo(e))}throw $t()}function _e(t){const e=[];for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(o<t.length-1&&(t.charCodeAt(o+1)&64512)===56320))e.push(239,191,189);else{const a=n,c=t.charCodeAt(++o);n=65536|(a&1023)<<10|c&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function zo(t){let e;try{e=decodeURIComponent(t)}catch{throw nt(L.DATA_URL,"Malformed data URL.")}return _e(e)}function Se(t,e){switch(t){case L.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw nt(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case L.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw nt(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let o;try{o=Vo(e)}catch(s){throw s.message.includes("polyfill")?s:nt(t,"Invalid character found")}const n=new Uint8Array(o.length);for(let s=0;s<o.length;s++)n[s]=o.charCodeAt(s);return n}class be{constructor(e){this.base64=!1,this.contentType=null;const o=e.match(/^data:([^,]+)?,/);if(o===null)throw nt(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=o[1]||null;n!=null&&(this.base64=Ko(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Xo(t){const e=new be(t);return e.base64?Se(L.BASE64,e.rest):zo(e.rest)}function Wo(t){return new be(t).contentType}function Ko(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class G{constructor(e,o){let n=0,s="";te(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(o?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(o?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,o){if(te(this.data_)){const n=this.data_,s=Ho(n,e,o);return s===null?null:new G(s)}else{const n=new Uint8Array(this.data_.buffer,e,o-e);return new G(n,!0)}}static getBlob(...e){if(jt()){const o=e.map(n=>n instanceof G?n.data_:n);return new G(jo.apply(null,o))}else{const o=e.map(c=>Gt(c)?qo(L.RAW,c).data:c.data_);let n=0;o.forEach(c=>{n+=c.byteLength});const s=new Uint8Array(n);let a=0;return o.forEach(c=>{for(let i=0;i<c.length;i++)s[a++]=c[i]}),new G(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ke(t){let e;try{e=JSON.parse(t)}catch{return null}return No(e)?e:null}/**
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
 */function Jo(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qo(t,e){const o=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?o:t+"/"+o}function Me(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Yo(t,e){return e}class E{constructor(e,o,n,s){this.server=e,this.local=o||e,this.writable=!!n,this.xform=s||Yo}}let ft=null;function Zo(t){return!Gt(t)||t.length<2?t:Me(t)}function Ee(){if(ft)return ft;const t=[];t.push(new E("bucket")),t.push(new E("generation")),t.push(new E("metageneration")),t.push(new E("name","fullPath",!0));function e(a,c){return Zo(c)}const o=new E("name");o.xform=e,t.push(o);function n(a,c){return c!==void 0?Number(c):c}const s=new E("size");return s.xform=n,t.push(s),t.push(new E("timeCreated")),t.push(new E("updated")),t.push(new E("md5Hash",null,!0)),t.push(new E("cacheControl",null,!0)),t.push(new E("contentDisposition",null,!0)),t.push(new E("contentEncoding",null,!0)),t.push(new E("contentLanguage",null,!0)),t.push(new E("contentType",null,!0)),t.push(new E("metadata","customMetadata",!0)),ft=t,ft}function tn(t,e){function o(){const n=t.bucket,s=t.fullPath,a=new C(n,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:o})}function en(t,e,o){const n={};n.type="file";const s=o.length;for(let a=0;a<s;a++){const c=o[a];n[c.local]=c.xform(n,e[c.server])}return tn(n,t),n}function Ae(t,e,o){const n=ke(e);return n===null?null:en(t,n,o)}function on(t,e,o,n){const s=ke(e);if(s===null||!Gt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(r=>{const l=t.bucket,u=t.fullPath,p="/b/"+c(l)+"/o/"+c(u),g=_t(p,o,n),m=Te({alt:"media",token:r});return g+m})[0]}function nn(t,e){const o={},n=e.length;for(let s=0;s<n;s++){const a=e[s];a.writable&&(o[a.server]=t[a.local])}return JSON.stringify(o)}class Ht{constructor(e,o,n,s){this.url=e,this.method=o,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ue(t){if(!t)throw $t()}function sn(t,e){function o(n,s){const a=Ae(t,s,e);return Ue(a!==null),a}return o}function an(t,e){function o(n,s){const a=Ae(t,s,e);return Ue(a!==null),on(a,s,t.host,t._protocol)}return o}function Re(t){function e(o,n){let s;return o.getStatus()===401?o.getErrorText().includes("Firebase App Check token is invalid")?s=Io():s=yo():o.getStatus()===402?s=mo(t.bucket):o.getStatus()===403?s=wo(t.path):s=n,s.status=o.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Ce(t){const e=Re(t);function o(n,s){let a=e(n,s);return n.getStatus()===404&&(a=go(t.path)),a.serverResponse=s.serverResponse,a}return o}function cn(t,e,o){const n=e.fullServerUrl(),s=_t(n,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,i=new Ht(s,a,an(t,o),c);return i.errorHandler=Ce(e),i}function rn(t,e){const o=e.fullServerUrl(),n=_t(o,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(d,r){}const i=new Ht(n,s,c,a);return i.successCodes=[200,204],i.errorHandler=Ce(e),i}function ln(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function un(t,e,o){const n=Object.assign({},o);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=ln(null,e)),n}function dn(t,e,o,n,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function i(){let U="";for(let R=0;R<2;R++)U=U+Math.random().toString().slice(2);return U}const d=i();c["Content-Type"]="multipart/related; boundary="+d;const r=un(e,n,s),l=nn(r,o),u="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+d+`\r
Content-Type: `+r.contentType+`\r
\r
`,p=`\r
--`+d+"--",g=G.getBlob(u,n,p);if(g===null)throw bo();const m={name:r.fullPath},I=_t(a,t.host,t._protocol),w="POST",T=t.maxUploadRetryTime,A=new Ht(I,w,sn(t,o),T);return A.urlParams=m,A.headers=c,A.body=g.uploadData(),A.errorHandler=Re(e),A}class fn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=H.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=H.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,o,n,s){if(this.sent_)throw et("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(o,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw et("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw et("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw et("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw et("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hn extends fn{initXhr(){this.xhr_.responseType="text"}}function Vt(){return new hn}/**
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
 */class z{constructor(e,o){this._service=e,o instanceof C?this._location=o:this._location=C.makeFromUrl(o,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,o){return new z(e,o)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Me(this._location.path)}get storage(){return this._service}get parent(){const e=Jo(this._location.path);if(e===null)return null;const o=new C(this._location.bucket,e);return new z(this._service,o)}_throwIfRoot(e){if(this._location.path==="")throw Eo(e)}}function pn(t,e,o){t._throwIfRoot("uploadBytes");const n=dn(t.storage,t._location,Ee(),new G(e,!0),o);return t.storage.makeRequestWithTokens(n,Vt).then(s=>({metadata:s,ref:t}))}function gn(t){t._throwIfRoot("getDownloadURL");const e=cn(t.storage,t._location,Ee());return t.storage.makeRequestWithTokens(e,Vt).then(o=>{if(o===null)throw ko();return o})}function mn(t){t._throwIfRoot("deleteObject");const e=rn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Vt)}function yn(t,e){const o=Qo(t._location.path,e),n=new C(t._location.bucket,o);return new z(t.storage,n)}/**
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
 */function In(t){return/^[A-Za-z]+:\/\//.test(t)}function wn(t,e){return new z(t,e)}function Ne(t,e){if(t instanceof qt){const o=t;if(o._bucket==null)throw So();const n=new z(o,o._bucket);return e!=null?Ne(n,e):n}else return e!==void 0?yn(t,e):t}function vn(t,e){if(e&&In(e)){if(t instanceof qt)return wn(t,e);throw Pt("To use ref(service, url), the first argument must be a Storage instance.")}else return Ne(t,e)}function oe(t,e){const o=e==null?void 0:e[ve];return o==null?null:C.makeFromBucketSpec(o,t)}function Dn(t,e,o,n={}){t.host=`${e}:${o}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:Xe(s,t.app.options.projectId))}class qt{constructor(e,o,n,s,a){this.app=e,this._authProvider=o,this._appCheckProvider=n,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=we,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ho,this._maxUploadRetryTime=po,this._requests=new Set,s!=null?this._bucket=C.makeFromBucketSpec(s,this._host):this._bucket=oe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=oe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ee("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ee("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const o=await e.getToken();if(o!==null)return o.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new z(this,e)}_makeRequest(e,o,n,s,a=!0){if(this._deleted)return new Ao(De());{const c=$o(e,this._appId,n,s,o,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,o){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,o,n,s).getPromise()}}const ne="@firebase/storage",se="0.13.2";/**
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
 */const Oe="storage";function Tn(t,e,o){return t=j(t),pn(t,e,o)}function Pe(t){return t=j(t),gn(t)}function _n(t){return t=j(t),mn(t)}function zt(t,e){return t=j(t),vn(t,e)}function Sn(t=ge(),e){t=j(t);const n=he(t,Oe).getImmediate({identifier:e}),s=pe("storage");return s&&bn(n,...s),n}function bn(t,e,o,n={}){Dn(t,e,o,n)}function kn(t,{instanceIdentifier:e}){const o=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new qt(o,n,s,e,We)}function Mn(){de(new fe(Oe,kn,"PUBLIC").setMultipleInstances(!0)),vt(ne,se,""),vt(ne,se,"esm2017")}Mn();const Xt=Sn(Tt);async function Bn(t,e,o,n){console.log("uploading file"),console.log(`${t}/${e}/${o}`);const s=zt(Xt,`${t}/${e}/${o}`),a=await Tn(s,n);return await Pe(a.ref)}async function $n(t,e,o){const n=zt(Xt,`${t}/${e}/${o}`);await _n(n)}async function Le(t){localStorage.getItem("schoolId");const e=zt(Xt,`FCMIDs/${t}.json`);try{const o=await Pe(e);return(await(await fetch(o)).json()).FCMToken}catch{return null}}const Lt=Ie(Tt);async function X(t,e,o,n){const s=[],a=[];await Promise.all(e.map(async c=>{const i=await Le(c.userId);console.log("FCM Token: ",i),console.log("Email: ",c.email),i?a.push(i):s.push(c.email)})),s.length>0&&N(Lt,"sendEmail")({emails:s,activityId:o.activityId,activityName:n,groupName:o.name,groupId:o.id,message:t.message,senderName:t.senderName}),a.length>0&&N(Lt,"sendNotifications")({targetIds:a,title:`${n} - ${o.name}`,body:`${t.senderName}: ${t.message}`,thread:o.id,data:{type:"activity-chat",activityName:n,activityId:o.activityId,message:t.message,senderName:t.senderName,gcId:o.id,groupName:o.name}})}async function En({title:t,body:e,targetIds:o,thread:n,data:s}){const a=[],c=[];await Promise.all(o.map(async i=>{console.log("Target: ",i);const d=await Le(i.userId);console.log("FCM Token: ",d),console.log("Email: ",i.email),d?c.push(d):a.push(i.email)})),console.log("Emails: ",a),console.log("FCM Tokens: ",c),N(Lt,"sendNotifications")({targetIds:c,title:t,body:e,thread:n,data:s})}function ht(t){return t*(Math.PI/180)}function An(t){return t*.621371}async function Gn(t){const e=`https://maps.googleapis.com/maps/api/geocode/json?address=${t}&key=AIzaSyA2saT3TcMaenLp4Im3VhI7zT79mXlN9PI`;try{const o=await fetch(e,{method:"POST"});if(o.ok){const n=await o.json(),s={lat:n.results[0].geometry.location.lat,lon:n.results[0].geometry.location.lng};return console.log(s),s}else return console.error(`Request failed with status: ${o.status}`),{lat:0,lon:0}}catch(o){return console.error(`Request failed: ${o}`),{lat:0,lon:0}}}function Un(t,e,o,n){const a=ht(o-t),c=ht(n-e),i=Math.sin(a/2)*Math.sin(a/2)+Math.cos(ht(t))*Math.cos(ht(o))*Math.sin(c/2)*Math.sin(c/2),r=6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));return An(r)}const $=Ie(Tt),y=Ge(Tt),xe=h(y,"schools"),St=h(y,"companies");h(y,"employers");const Rn=h(y,"opportunityNotifications"),tt=h(y,"opportunities"),Cn=async t=>{const e=f(xe,t);return(await M(e)).data()},jn=async()=>{const t=await D(xe),e=[];return t.forEach(o=>{e.push(o.data())}),e},Hn=async()=>{const t=await D(St),e=[];return t.forEach(o=>{const n=o.data();n.id=o.id,e.push(le.fromMap(n))}),e},Fe=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=f(y,"schools",e);if(t=="student"){const n=_(h(o,"activities"),S("studentUids","array-contains",Y())),s=[];return(await D(n)).forEach(c=>{s.push(V.fromMap(c.data()))}),s}else{const n=_(h(o,"activities"),S("teacherUids","array-contains",Y())),s=[];return(await D(n)).forEach(c=>{console.log(c.data()),s.push(V.fromMap(c.data()))}),s}};async function Nn(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=f(y,"schools",e),n=f(h(o,"activities"),t),s=await M(n);return s.exists()?s.data().type=="theater"?st.fromMap(s.data()):V.fromMap(s.data()):null}async function Vn(t){const e=localStorage.getItem("schoolId");if(!e)return"";const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=h(n,"shows"),a=await F(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function qn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=f(h(n,"shows"),t.id);t.lastUpdated=Date.now(),await v(s,t.toMap())}async function zn(t){const e=h(y,"showTemplates"),o=await F(e,t.toMap());return t.id=o.id,await v(o,{id:o.id}),o.id}async function Xn(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=f(y,"schools",o),s=f(h(n,"activities"),t),a=f(h(s,"shows"),e),c=await M(a);return c.exists()?(console.log(c.data()),xt.fromMap(c.data())):null}async function Wn(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=f(y,"schools",e),n=f(h(o,"activities"),t),s=await M(n);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(Q.fromMap(c))}),a}async function Kn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await q(c,o.toMap())}async function ct(t){console.log("ADDING EVENT");const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=h(n,"events");console.log("Adding event"),console.log(t.toMap());const a=await F(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function it(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=h(n,"events"),a=await F(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Jn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=h(a,"events");if(n=="student"){const i=await D(_(c,S("showId","==",e),S("targetUids","array-contains",Y()))),d=[];return i.forEach(r=>{r.data().deleted||d.push(B.fromMap(r.data()))}),d}else{const i=await D(_(c,S("showId","==",e))),d=[];return i.forEach(r=>{r.data().deleted||d.push(B.fromMap(r.data()))}),d}}async function rt(t){console.log("DELETING EVENT");const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=f(h(n,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await N($,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function lt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=f(h(n,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await N($,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Be(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=f(y,"schools",e),n=f(h(o,"activities"),t),s=h(n,"shows"),a=await D(s),c=[];return a.forEach(i=>{c.push(xt.fromMap(i.data()))}),c}async function Qn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await v(c,{conflictForm:o.toMap(),lastUpdated:Date.now()}),await N($,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:n,deadline:o.deadline.toISOString()})}async function Yn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await v(c,{conflictForm:o.toMap(),lastUpdated:Date.now()})}async function Zn(){const t=Y(),e=localStorage.getItem("schoolId");if(!e)return null;const o=f(y,"schools",e),n=f(o,"students",t),s=await M(n);return s.exists()?Q.fromMap(s.data()):null}async function ts(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=f(c,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await q(i,o.toMap())}async function es(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(Y());const l=await D(_(i,S("submitterId","==",Y()))),u=[];return l.forEach(p=>{u.push(Ut.fromMap(p.data()))}),u}const d=await D(i),r=[];return d.forEach(l=>{r.push(Ut.fromMap(l.data()))}),r}async function os(){const t=h(y,"showTemplates"),e=await D(t),o=[];return e.forEach(n=>{o.push(xt.fromMap(n.data()))}),o}async function ns(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+n),!e||!o||!n)return null;const s=f(y,"schools",e),a=_(h(s,"activities"),S("joinCode","==",t)),c=await D(a);if(c.empty)return null;const i=c.docs[0],d=f(h(s,n=="student"?"students":"teachers"),o),r=await M(d);if(console.log(r.data()),!r.exists())return null;if(i.data().studentUids.includes(o)||i.data().teacherUids.includes(o))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),i.data().type=="theater"){if((r.data().gender==null||r.data().gender=="")&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),r.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(r.data().phoneNumber==""||r.data().gender==null||r.data().gender=="")&&n=="student")return null;if(n=="student")return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,Q.fromMap(r.data()).toMap()],lastUpdated:Date.now()}),st.fromMap(i.data());{console.log("Joining as teacher"),console.log(r.data());const l=gt.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return console.log(l.toMap()),await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,l.toMap()],lastUpdated:Date.now()}),st.fromMap(i.data())}}else if(n=="student"){const l=Q.fromBlank(r.data().fullname,r.data().gender,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,l.toMap()],lastUpdated:Date.now()}),V.fromMap(i.data())}else{const l=gt.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,l.toMap()],lastUpdated:Date.now()}),V.fromMap(i.data())}}async function ss(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=f(y,"schools",e),a=f(h(s,n=="student"?"students":"teachers"),o);await v(a,{gender:t,lastUpdated:Date.now()})}async function as(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=f(y,"schools",e),a=f(h(s,n=="student"?"students":"teachers"),o);await v(a,{phoneNumber:t,lastUpdated:Date.now()})}async function On(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId);f(h(n,"events"),t.id),t.lastUpdated=Date.now(),await rt(t),await ct(t)}async function cs(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId);f(h(n,"events"),t.id),t.lastUpdated=Date.now(),await lt(t),await it(t)}async function is(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const n=f(y,"schools",t),s=[];let a;o=="student"?a=await D(_(h(n,"activities"),S("studentUids","array-contains",e))):a=await D(_(h(n,"activities"),S("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const i=[];if(c.data().deleted!=!0){o=="student"?(console.log("Getting events for student"),i.push(await D(_(h(c.ref,"events"),S("targetUids","array-contains",e)))),i.push(await D(_(h(c.ref,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),i.push(await D(h(c.ref,"events"))));for(const d of i)for(const r of d.docs){const l=r.data();l.deleted||(console.log(l),l.type=="activity-theater-event"?s.push(B.fromMap(l)):s.push(Z.fromMap(l)))}}}return s}async function rs(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o)return[];const s=f(y,"schools",e),a=f(h(s,"activities"),t),c=[],i=[];n=="student"?(console.log("Getting events for student"),c.push(await D(_(h(a,"events"),S("targetUids","array-contains",o)))),c.push(await D(_(h(a,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await D(h(a,"events"))));for(const d of c)for(const r of d.docs){const l=r.data();l.deleted||(console.log(l),l.id=r.id,console.log(l),i.push(Z.fromMap(l)))}return i}async function ls(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return null;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses"),d=await M(f(i,n));return d.exists()?Ut.fromMap(d.data()):null}async function us(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap()),lastUpdated:Date.now()})}async function ds(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return[];const s=localStorage.getItem("accountType"),a=f(y,"schools",o),c=f(h(a,"activities"),t);if(s=="teacher")Rt(h(c,"groupChats"),async i=>{const d=[];for(const r of i.docs){const l=x.fromMap(r.data());if((l.generalTarget=="direct"||l.generalTarget=="custom")&&!l.members.find(m=>m.userId==n))continue;if(l.generalTarget=="direct"){const m=l.members.find(I=>I.userId!=n);l.name=(m==null?void 0:m.name)||"Unknown"}const u=h(r.ref,"messages"),p=_(u,Jt("timeSent","desc"),Kt(1)),g=await D(p);g.empty||(l.lastMessage=Ct.fromMap(g.docs[0].data())),d.push(l)}d.sort((r,l)=>r.lastMessage?l.lastMessage?l.lastMessage.timeSent.getTime()-r.lastMessage.timeSent.getTime():-1:1),e(d)});else{const i=f(h(a,"students"),n),d=await M(i);if(!d.exists())return;const r=Ft.fromMap(d.data());console.log(r),Rt(h(c,"groupChats"),async l=>{const u=[];for(const p of l.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(T=>T.userId==n)))continue;if(g.generalTarget=="direct"){const T=g.members.find(A=>A.userId!=n);g.name=(T==null?void 0:T.name)||"Unknown"}const m=h(p.ref,"messages"),I=_(m,Jt("timeSent","desc"),Kt(1)),w=await D(I);w.empty||(g.lastMessage=Ct.fromMap(w.docs[0].data())),u.push(g)}u.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(u)})}}async function fs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return[];const s=f(y,"schools",n),a=f(h(s,"activities"),t);console.log("Getting messages for "+e);const c=f(h(a,"groupChats"),e),i=h(c,"messages");Rt(i,d=>{const r=[];d.forEach(l=>{r.push(Ct.fromMap(l.data()))}),r.sort((l,u)=>l.timeSent.getTime()-u.timeSent.getTime()),o(r)})}async function Wt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const n=f(y,"schools",t),s=f(h(n,o=="student"?"students":"teachers"),e),a=await M(s);return a.exists()?o=="student"?Ft.fromMap(a.data()):je.fromMap(a.data()):null}async function hs(t){const e=f(h(y,"parents"),t),o=await M(e);return o.exists()?o.data():null}async function ps(t,e,o,n,s){if(o.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const i=f(y,"schools",a),d=f(h(i,"activities"),t),r=f(h(d,"groupChats"),e),l=await M(r);if(!l.exists()){if(s==null)return;const m=await Wt();if(!m)return;const I=x.fromBlank("",s.userId,[ue.fromBlank(m.fullname,m.email,m.phoneNumber,m.FCMToken,m.uid),s],"direct",t,Date.now());await q(r,I.toMap());const w=h(r,"messages"),T=await F(w,o.toMap());o.messageId=T.id,await v(T,{messageId:T.id,lastUpdated:Date.now()}),X(o,[P.fromBlank(s.userId,s.email)],I,n);return}const u=x.fromMap(l.data()),p=h(r,"messages"),g=await F(p,o.toMap());if(o.messageId=g.id,await v(g,{messageId:g.id,lastUpdated:Date.now()}),u.generalTarget!="direct"&&u.generalTarget!="custom"&&u.generalTarget!="group"){const m=await Nn(t);if(!m)return;if(u.generalTarget=="everyone"){let I=m.students.map(w=>P.fromBlank(w.userId,w.email));I=I.concat(m.teachers.map(w=>P.fromBlank(w.userId,w.email))),I=I.concat(m.parents.map(w=>P.fromBlank(w.userId,w.email))),I=I.filter(w=>w.userId!=o.senderUid),X(o,I,u,m.name)}else if(u.generalTarget=="students"){let I=m.students.map(w=>P.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),X(o,I,u,m.name)}else if(u.generalTarget=="parents"){let I=m.parents.map(w=>P.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),X(o,I,u,m.name)}return}if(u.generalTarget=="direct"){const m=u.members.find(I=>I.userId!=c);if(!m)return;X(o,[P.fromBlank(m.userId,m.email)],u,n);return}if(u.generalTarget=="custom"){const m=u.members.filter(I=>I.userId!=c).map(I=>P.fromBlank(I.userId,I.email));X(o,m,u,n);return}}async function pt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=h(n,"groupChats"),a=await Wt();if(!a)return;const c=ue.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const i=await F(s,t.toMap());t.id=i.id,await v(i,{id:i.id})}async function gs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);v(c,{resources:O(o.toMap()),lastUpdated:Date.now()})}async function ms(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);v(c,{resources:qe(o.toMap()),lastUpdated:Date.now()})}async function ys(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses"),d=f(i,o.id);await He(d)}async function Is(t,e){if(t=="employer"){await q(f(y,"employers",e.uid),e.toMap());const c=localStorage.getItem("companyId");if(!c)return;const i=f(y,"companies",c);await v(i,{employerUids:O(e.uid),employers:O(e.toMap()),lastUpdated:Date.now()});return}const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=h(n,t+"s");await q(f(s,e.uid),e.toMap());let a;e instanceof Ft?a=Q.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=gt.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(n,{[t+"Uids"]:O(e.uid),[t+"s"]:O(a.toMap()),lastUpdated:Date.now()})}function Pn(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function ws(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=f(y,"schools",o),s=await M(n);if(!s.exists())return null;const a=s.data(),c=h(n,"activities"),i=Pn(t);console.log(i);const d=[ot.fromMap({name:"Rehearsal",color:{red:255,green:0,blue:0,alpha:255}}),ot.fromMap({name:"Performance",color:{red:0,green:255,blue:0,alpha:255}})],r=[ot.fromMap({name:"Practice",color:{red:255,green:0,blue:0,alpha:255}}),ot.fromMap({name:"Game",color:{red:0,green:255,blue:0,alpha:255}})],l=[ce.fromMap({name:"Auditorium",color:{red:0,green:0,blue:255,alpha:255}})],u=It.fromMap(a.location),p=[u],g=await Wt();if(!g)return null;const m=gt.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let I;e=="theater"?I=st.fromBlank(t,"",i,[],[],[],[m],p,d,u,l,"type",Date.now()):I=V.fromBlank(t,"",i,[],[],[],[m],p,r,u,"type",Date.now(),"activity"),console.log(I.toMap());const w=await F(c,I.toMap());I.id=w.id,await v(w,{id:w.id});const T=x.fromMap({name:"Everyone",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"everyone"});await pt(T);const A=x.fromMap({name:"Parents",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"parents"});await pt(A);const U=x.fromMap({name:"Students",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"students"});return await pt(U),I}async function vs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return null;const s=f(y,"schools",n),a=f(h(s,"activities"),o),c=h(a,"groupChats"),i=x.fromBlank("",e.userId,[t,e],"direct",o,Date.now());return await q(f(c,e.userId),i.toMap()),i.name=e.name,i}async function Ds(){const t=await Cn(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(o=>{e.push(It.fromMap(o))}),e}async function Ts(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t);await v(s,{locations:O(e.toMap()),lastUpdated:Date.now()})}async function _s(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e);await v(o,{savedLocations:O(t.toMap()),lastUpdated:Date.now()})}async function Ss(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t);await v(s,{eventTypes:O(e.toMap()),lastUpdated:Date.now()})}async function bs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t),a=f(h(s,"shows"),e);await v(a,{isCreatingSchedule:!0,lastUpdated:Date.now()})}async function ks(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=h(n,"students");await q(f(s,t.uid),t.toMap());const a=Q.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(n,{studentUids:O(t.uid),students:O(a.toMap()),lastUpdated:Date.now()});const c=a.userId;if(!o||!c)return null;const i=f(h(n,"activities"),e),d=await M(i);return d.exists()?d.data().type=="theater"?(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()],lastUpdated:Date.now()}),st.fromMap(d.data())):(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()],lastUpdated:Date.now()}),V.fromMap(d.data())):null}async function Ms(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=_(h(n,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){const i=B.fromMap(c.data());if(c.data().deleted==!0)continue;for(let r=0;r<i.characters.length;r++){const l=i.characters[r];l instanceof W?i.characters[r]=t.characters.find(u=>u.name==l.name):l instanceof mt&&(i.characters[r]=t.showGroups.find(u=>u.name==l.name))}if(i.theaterEventType=="scene"){const r=i.scene;let l;if(t.layout.forEach(u=>{if(u.scenes.find(p=>p.sceneId==r.sceneId)){l=u.scenes.find(p=>p.sceneId==r.sceneId);return}}),l)i.scene=l;else continue}if(i.theaterEventType=="song"){const r=i.song;let l;if(t.songs.forEach(u=>{if(u.songId==r.songId){l=u;return}}),l)i.song=l;else continue}if(i.theaterEventType=="dance"){const r=i.dance;let l;if(t.dances.forEach(u=>{if(u.danceId==r.danceId){l=u;return}}),l)i.dance=l;else continue}const d=[];for(const r of i.characters){if(r instanceof ae){for(const l of t.ensemble.actors)d.push(l);for(const l of t.characters)d.find(u=>u.userId==l.actor.userId)==null&&d.push(l.actor);break}if(r instanceof W){if(d.find(l=>l.userId==r.actor.userId)!=null)continue;d.push(r.actor)}if(r instanceof yt){if(r.includeAll)for(const l of t.ensemble.actors)d.find(u=>u.userId==l.userId)==null&&d.push(l);else if(r.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(d.find(u=>u.userId==l.userId)!=null)continue;d.push(l)}}else if(r.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(d.find(u=>u.userId==l.userId)!=null)continue;d.push(l)}}else if(r.includeCustom)for(const l of r.customActors)d.find(u=>u.userId==l.userId)==null&&d.push(l)}if(r instanceof mt)for(const l of r.characters){if(l instanceof W){if(d.find(u=>u.userId==l.actor.userId)!=null)continue;d.push(l.actor)}if(l instanceof yt){if(l.includeAll)for(const u of t.ensemble.actors)d.find(p=>p.userId==u.userId)==null&&d.push(u);else if(l.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(d.find(p=>p.userId==u.userId)!=null)continue;d.push(u)}}else if(l.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(d.find(p=>p.userId==u.userId)!=null)continue;d.push(u)}}else if(l.includeCustom)for(const u of l.customActors)d.find(p=>p.userId==u.userId)==null&&d.push(u)}}}i.targets=d,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function Es(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=f(y,"schools",e),n=f(h(o,"activities"),t.activityId),s=_(h(n,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){if(c.data().deleted==!0)continue;const i=B.fromMap(c.data());let d=[];if(i.theaterEventType=="custom")for(let l=0;l<i.characters.length;l++){const u=i.characters[l];if(u instanceof W){const p=t.characters.find(g=>g.characterId==u.characterId);p&&d.push(p)}else if(u instanceof mt){const p=t.showGroups.find(g=>g.showGroupId==u.showGroupId);p&&d.push(p)}else d.push(u);i.characters=d}else if(i.theaterEventType=="scene"){console.log("Editing scene");const l=i.scene;let u;if(t.layout.forEach(p=>{if(p.scenes.find(g=>g.sceneId==l.sceneId)){u=p.scenes.find(g=>g.sceneId==l.sceneId);return}}),u)i.scene=u,d=[...u.characters],i.characters=d;else continue}else if(i.theaterEventType=="song"){const l=i.song;let u;if(t.songs.forEach(p=>{if(p.songId==l.songId){u=p;return}}),u)i.song=u,d=[...u.characters],i.characters=d;else continue}else if(i.theaterEventType=="dance"){const l=i.dance;let u;if(t.dances.forEach(p=>{if(p.danceId==l.danceId){u=p;return}}),u)i.dance=u,d=[...u.characters],i.characters=d;else continue}const r=[];for(const l of d){if(l instanceof ae){for(const u of t.ensemble.actors)r.push(u);for(const u of t.characters)r.find(p=>p.userId==u.actor.userId)==null&&r.push(u.actor);break}if(l instanceof W){if(r.find(u=>u.userId==l.actor.userId)!=null)continue;r.push(l.actor)}if(l instanceof yt){if(l.includeAll)for(const u of t.ensemble.actors)r.find(p=>p.userId==u.userId)==null&&r.push(u);else if(l.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(r.find(p=>p.userId==u.userId)!=null)continue;r.push(u)}}else if(l.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(r.find(p=>p.userId==u.userId)!=null)continue;r.push(u)}}else if(l.includeCustom)for(const u of l.customActors)r.find(p=>p.userId==u.userId)==null&&r.push(u)}if(l instanceof mt)for(const u of l.characters){if(u instanceof W){if(r.find(p=>p.userId==u.actor.userId)!=null)continue;r.push(u.actor)}if(u instanceof yt){if(u.includeAll)for(const p of t.ensemble.actors)r.find(g=>g.userId==p.userId)==null&&r.push(p);else if(u.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(u.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(u.includeCustom)for(const p of u.customActors)r.find(g=>g.userId==p.userId)==null&&r.push(p)}}}i.targets=r,i.lastUpdated=Date.now(),await On(i)}}async function As(){if(!localStorage.getItem("schoolId"))return[];const e=await Fe(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Be(n.id);for(const a of s){console.log("Getting resources for "+a.name);const c=[];for(let i=0;i<a.resources.length;i++){const d=a.resources[i];d.activityId=n.id,d.showId=a.id,c.push(d)}o.push(...c)}}return o}async function Us(){if(!localStorage.getItem("schoolId"))return[];const e=await Fe(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Be(n.id);for(const a of s)a.activityName=n.name,o.push(a)}return o}async function Rs(t){const e=localStorage.getItem("userId"),o=f(h(y,"parents"),t),n=await M(o);if(!n.exists())return null;const s=n.data(),a=s.requestedChildren,c=s.children,i=a.find(d=>d.uid==e);if(!i)return null;a.splice(a.indexOf(i),1),c.push(i),await v(o,{requestedChildren:a,children:c,lastUpdated:Date.now()})}async function Cs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=await M(a);if(!c.exists())return;const i=c.data(),d=i.locations;for(let p=0;p<d.length;p++)It.fromMap(d[p]).name==o.name&&(d[p]=e.toMap());let r=It.fromMap(i.defaultLocation);r.name==o.name&&(r=e),await v(a,{locations:d,defaultLocation:r.toMap(),lastUpdated:Date.now()});const l=_(h(a,"events"),S("location","==",o.toMap()));(await D(l)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await rt(m),m.location=e,m.lastUpdated=Date.now(),await ct(m)}else{const m=Z.fromMap(g);m.id=p.id,await lt(m),m.location=e,m.lastUpdated=Date.now(),await it(m)}})}async function Ns(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=await M(a);if(!c.exists())return;const i=c.data();if(i.type!="theater")return;const d=i.rehearsalLocations;for(let u=0;u<d.length;u++)ce.fromMap(d[u]).name==o.name&&(d[u]=e.toMap());await v(a,{rehearsalLocations:d,lastUpdated:Date.now()});const r=_(h(a,"events"),S("rehearsalLocation","==",o.toMap()));(await D(r)).docs.forEach(async u=>{if(u.data().deleted==!0)return;const p=u.data();if(p.type=="activity-theater-event"){const g=B.fromMap(p);g.id=u.id,await rt(g),g.rehearsalLocation=e,g.lastUpdated=Date.now(),await ct(g)}})}async function Os(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t),a=await M(s);if(!a.exists())return;a.data(),await v(s,{name:e,lastUpdated:Date.now()});const c=h(s,"events");(await D(c)).docs.forEach(async d=>{if(d.data().deleted==!0)return;const r=d.data();if(r.type=="activity-theater-event"){const l=B.fromMap(r);l.id=d.id,await rt(l),l.activityName=e,l.lastUpdated=Date.now(),await ct(l)}else{const l=Z.fromMap(r);l.id=d.id,await lt(l),l.activityName=e,l.lastUpdated=Date.now(),await it(l)}})}async function Ps(t,e,o,n){const s=localStorage.getItem("schoolId");if(!s)return;const a=f(y,"schools",s),c=f(h(a,"activities"),t),i=await M(c);if(!i.exists())return;const r=i.data().eventTypes;for(let p=0;p<r.length;p++)ot.fromMap(r[p]).name==o.name&&(r[p]=e.toMap());await v(c,{eventTypes:r,lastUpdated:Date.now()});const l=_(h(c,"events"),S(n?"activityEventType":"eventType","==",o.toMap()));(await D(l)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await rt(m),m.activityEventType=e,m.lastUpdated=Date.now(),await ct(m)}else{const m=Z.fromMap(g);m.id=p.id,await lt(m),m.eventType=e,m.lastUpdated=Date.now(),await it(m)}})}async function Ls(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=f(y,"schools",n);console.log("Editing group"),console.log(e),console.log(t);const a=f(h(s,"activities"),t),c=await M(a);if(!c.exists())return;const d=c.data().groups;for(let g=0;g<d.length;g++)Ve.fromMap(d[g]).groupName==o.groupName&&(d[g]=e.toMap());await v(a,{groups:d,lastUpdated:Date.now()});const r=_(h(a,"events"),S("groupNames","array-contains",o.groupName));(await D(r)).docs.forEach(async g=>{if(g.data().deleted==!0)return;const m=g.data();if(m.type!="activity-theater-event"){const I=Z.fromMap(m);I.id=g.id,console.log("deleting event"),await lt(I),I.groupNames=I.groupNames.map(T=>T==o.groupName?e.groupName:T),I.groupTargets=I.groupTargets.map(T=>T.groupName==o.groupName?e:T);const w=[];for(const T of I.groupTargets)for(const A of T.groupMembers)w.find(U=>U.userId==A.userId)==null&&w.push(A);I.targets=w,I.lastUpdated=Date.now(),console.log("adding event"),await it(I)}});const u=_(h(a,"groupChats"),S("name","==",o.groupName),S("generalTarget","==","group")),p=await D(u);for(const g of p.docs){const m=x.fromMap(g.data());m.name=e.groupName,m.members=e.groupMembers.map(I=>I.toGroupChatMember()),m.lastUpdated=Date.now(),await v(g.ref,m.toMap())}}async function xs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=f(y,"schools",o),s=f(h(n,"activities"),t);await v(s,{groups:O(e.toMap()),lastUpdated:Date.now()});const a=x.fromBlank(e.groupName,"",e.groupMembers.map(c=>c.toGroupChatMember()),"group",t,Date.now());return await pt(a),e}async function Fs(){const t=localStorage.getItem("companyId");if(!t)return[];const e=_(tt,S("companyId","==",t)),o=await D(e),n=[];return o.forEach(s=>{const a=s.data();if(a.deleted)return;a.id=s.id;const c=ie(a.type);c==K.Job?n.push(wt.fromMap(a)):c==K.OneTimeVolunteer?n.push(at.fromMap(a)):c==K.RecurringVolunteer&&n.push(re.fromMap(a))}),n}async function Bs(){const t=await D(tt),e=[];return t.forEach(o=>{const n=o.data();if(n.deleted)return;n.id=o.id;const s=ie(n.type);s==K.Job?e.push(wt.fromMap(n)):s==K.OneTimeVolunteer?e.push(at.fromMap(n)):s==K.RecurringVolunteer&&e.push(re.fromMap(n))}),e}async function $s(t,e){if(!e&&t instanceof at){await N($,"deleteCloudTask")({taskId:t.taskId});const n=await N($,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=n.data}const o=f(tt,t.id);await v(o,t.toMap())}async function Gs(){const t=localStorage.getItem("companyId");if(!t)return null;const e=f(St,t),o=await M(e);if(!o.exists())return null;const n=le.fromMap(o.data());return n.id=o.id,n}async function js(t){await N($,"deleteCloudTask")({taskId:t})}async function Hs(t){const e=await F(tt,t.toMap());if(t.id=e.id,t instanceof at){console.log("Creating task"),console.log(t.eventDate.getDateStart()),console.log(new Date().getTime()),console.log(new Date().getTime()-t.eventDate.getDateStart().getTime());const s=await N($,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=s.data,v(e,{taskId:t.taskId,lastUpdated:Date.now()})}const o=[],n=await Ln();for(const s of n){if(console.log("Preference: ",s),s.notifications==Mt.none||s.notifications==Mt.job&&t instanceof wt||s.notifications==Mt.volunteer&&t instanceof wt)continue;if(s.homeLocation.location.latitude==0&&s.homeLocation.location.longitude==0){o.push(P.fromBlank(s.userId,""));continue}Un(t.location.location.latitude,t.location.location.longitude,s.homeLocation.location.latitude,s.homeLocation.location.longitude)>10||o.push(P.fromBlank(s.userId,""))}return o.length>0&&(console.log("Sending notification"),console.log(o),En({title:"New Opportunity Available",body:"A new opportunity has been posted near you!",targetIds:o,thread:"newOpportunity",data:{opportunityId:t.id,type:"opportunity"}})),t}async function Vs(t){t instanceof at&&(console.log(t.taskId),await N($,"deleteCloudTask")({taskId:t.taskId}));const e=f(tt,t.id);await v(e,{deleted:!0,lastUpdated:Date.now()}),await N($,"startDeleteOpportunity")({opportunityId:t.id})}async function qs(t){const e=await F(St,t.toMap());return t.id=e.id,t}async function zs(t){console.log(t.toMap()),t.id=localStorage.getItem("companyId"),console.log(localStorage.getItem("companyId"));const e=f(St,t.id);await v(e,t.toMap())}async function Xs(t,e){const o=_(tt,S("companyId","==",t));(await D(o)).forEach(async s=>{const a=s.data();a.deleted||(a.companyName=e,a.lastUpdated=Date.now(),await v(s.ref,a))})}async function Ln(){const t=f(Rn,"preferences"),o=(await M(t)).data();if(!o)return[];const n=o.preferences;console.log(typeof n);const s=[];for(const a of Object.keys(n)){const c=ze.fromMap(n[a]);s.push(c)}return s}export{$n as $,ct as A,ys as B,Zn as C,ts as D,Yn as E,Qn as F,Wt as G,is as H,ls as I,us as J,Ts as K,_s as L,Ss as M,Cs as N,Ps as O,Ns as P,Os as Q,Ls as R,xs as S,Ds as T,pt as U,ps as V,fs as W,ds as X,vs as Y,Bn as Z,gs as _,Pn as a,ms as a0,ks as a1,As as a2,Us as a3,lt as a4,it as a5,rs as a6,cs as a7,Rs as a8,hs as a9,$s as aa,Un as ab,Bs as ac,Gs as ad,Fs as ae,Vs as af,js as ag,Hs as ah,zs as ai,Xs as aj,Gn as ak,qs as b,Is as c,Hn as d,ss as e,ws as f,jn as g,Fe as h,Nn as i,ns as j,Be as k,os as l,Vn as m,zn as n,qn as o,Es as p,Xn as q,Wn as r,bs as s,Ms as t,as as u,Kn as v,es as w,Jn as x,rt as y,On as z};
