import{N as Be,P as h,Q as f,U,u as st,j,V as L,W as v,g as Nt,i as Q,X as D,Y as _,Z as S,l as B,_ as q,o as Ut,$ as kt,S as Ot,T as Fe,a0 as N,a1 as $e,a2 as pt,c as z,e as gt,F as ne,d as mt,L as yt,y as Z,q as oe,s as nt,t as Ge,v as x,a3 as se,H as J,J as ae,O as at,K as ce,a as ie,a4 as qt,a5 as Wt,M as At,w as re,a6 as $,a7 as He}from"./constants-Cyoi8QJQ.js";import{_ as le,C as ue,f as It,h as de,k as H,m as fe,n as he,F as pe,o as Ve,S as je,p as vt,g as Y}from"./index-U3pxML4x.js";/**
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
 */const qe="type.googleapis.com/google.protobuf.Int64Value",We="type.googleapis.com/google.protobuf.UInt64Value";function ge(t,e){const n={};for(const o in t)t.hasOwnProperty(o)&&(n[o]=e(t[o]));return n}function Mt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Mt(e));if(typeof t=="function"||typeof t=="object")return ge(t,e=>Mt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function wt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case qe:case We:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>wt(e)):typeof t=="function"||typeof t=="object"?ge(t,e=>wt(e)):t}/**
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
 */const Pt="functions";/**
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
 */const Xt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends pe{constructor(e,n,o){super(`${Pt}/${e}`,n||""),this.details=o}}function Xe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ze(t,e){let n=Xe(t),o=n,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Xt[c])return new K("internal","internal");n=Xt[c],o=c}const i=a.message;typeof i=="string"&&(o=i),s=a.details,s!==void 0&&(s=wt(s))}}catch{}return n==="ok"?null:new K(n,o,s)}/**
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
 */class Je{constructor(e,n,o){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||o.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),o=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:o,appCheckToken:s}}}/**
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
 */const Rt="us-central1";function Ke(t){let e=null;return{promise:new Promise((n,o)=>{e=setTimeout(()=>{o(new K("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Qe{constructor(e,n,o,s,a=Rt,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Je(n,o,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(a);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=Rt}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Ye(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Ze(t,e,n){return o=>en(t,e,o,{})}async function tn(t,e,n,o){n["Content-Type"]="application/json";let s;try{s=await o(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function en(t,e,n,o){const s=t._url(e);return nn(t,s,n,o)}async function nn(t,e,n,o){n=Mt(n);const s={data:n},a={},c=await t.contextProvider.getContext(o.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const i=o.timeout||7e4,d=Ke(i),r=await Promise.race([tn(e,s,a,t.fetchImpl),d.promise,t.cancelAllRequests]);if(d.cancel(),!r)throw new K("cancelled","Firebase Functions instance was deleted.");const l=ze(r.status,r.json);if(l)throw l;if(!r.json)throw new K("internal","Response is not valid JSON object.");let u=r.json.data;if(typeof u>"u"&&(u=r.json.result),typeof u>"u")throw new K("internal","Response is missing data field.");return{data:wt(u)}}const zt="@firebase/functions",Jt="0.11.8";/**
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
 */const on="auth-internal",sn="app-check-internal",an="messaging-internal";function cn(t,e){const n=(o,{instanceIdentifier:s})=>{const a=o.getProvider("app").getImmediate(),c=o.getProvider(on),i=o.getProvider(an),d=o.getProvider(sn);return new Qe(a,c,i,d,s,t)};le(new ue(Pt,n,"PUBLIC").setMultipleInstances(!0)),It(zt,Jt,e),It(zt,Jt,"esm2017")}/**
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
 */function me(t=he(),e=Rt){const o=de(H(t),Pt).getImmediate({identifier:e}),s=fe("functions");return s&&rn(o,...s),o}function rn(t,e,n){Ye(H(t),e,n)}function O(t,e,n){return Ze(H(t),e)}cn(fetch.bind(self));/**
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
 */const ye="firebasestorage.googleapis.com",Ie="storageBucket",ln=2*60*1e3,un=10*60*1e3;/**
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
 */class E extends pe{constructor(e,n,o=0){super(bt(e),`Firebase Storage: ${n} (${bt(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,E.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var b;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(b||(b={}));function bt(t){return"storage/"+t}function xt(){const t="An unknown error occurred, please check the error payload for server response.";return new E(b.UNKNOWN,t)}function dn(t){return new E(b.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fn(t){return new E(b.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new E(b.UNAUTHENTICATED,t)}function pn(){return new E(b.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gn(t){return new E(b.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mn(){return new E(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yn(){return new E(b.CANCELED,"User canceled the upload/download.")}function In(t){return new E(b.INVALID_URL,"Invalid URL '"+t+"'.")}function wn(t){return new E(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vn(){return new E(b.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ie+"' property when initializing the app?")}function Dn(){return new E(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Tn(){return new E(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _n(t){return new E(b.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ct(t){return new E(b.INVALID_ARGUMENT,t)}function we(){return new E(b.APP_DELETED,"The Firebase app was deleted.")}function Sn(t){return new E(b.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ot(t,e){return new E(b.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function et(t){throw new E(b.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class C{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let o;try{o=C.makeFromUrl(e,n)}catch{return new C(e,"")}if(o.path==="")return o;throw wn(e)}static makeFromUrl(e,n){let o=null;const s="([A-Za-z0-9.\\-_]+)";function a(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const c="(/(.*))?$",i=new RegExp("^gs://"+s+c,"i"),d={bucket:1,path:3};function r(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${l}/b/${s}/o${p}`,"i"),m={bucket:1,path:3},I=n===ye?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",T=new RegExp(`^https?://${I}/${s}/${w}`,"i"),M=[{regex:i,indices:d,postModify:a},{regex:g,indices:m,postModify:r},{regex:T,indices:{bucket:1,path:2},postModify:r}];for(let R=0;R<M.length;R++){const ut=M[R],_t=ut.regex.exec(e);if(_t){const Le=_t[ut.indices.bucket];let St=_t[ut.indices.path];St||(St=""),o=new C(Le,St),ut.postModify(o);break}}if(o==null)throw In(e);return o}}class bn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function En(t,e,n){let o=1,s=null,a=null,c=!1,i=0;function d(){return i===2}let r=!1;function l(...w){r||(r=!0,e.apply(null,w))}function u(w){s=setTimeout(()=>{s=null,t(g,d())},w)}function p(){a&&clearTimeout(a)}function g(w,...T){if(r){p();return}if(w){p(),l.call(null,w,...T);return}if(d()||c){p(),l.call(null,w,...T);return}o<64&&(o*=2);let M;i===1?(i=2,M=0):M=(o+Math.random())*1e3,u(M)}let m=!1;function I(w){m||(m=!0,p(),!r&&(s!==null?(w||(i=2),clearTimeout(s),u(0)):w||(i=1)))}return u(0),a=setTimeout(()=>{c=!0,I(!0)},n),I}function Un(t){t(!1)}/**
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
 */function kn(t){return t!==void 0}function An(t){return typeof t=="object"&&!Array.isArray(t)}function Lt(t){return typeof t=="string"||t instanceof String}function Kt(t){return Bt()&&t instanceof Blob}function Bt(){return typeof Blob<"u"}function Qt(t,e,n,o){if(o<e)throw Ct(`Invalid value for '${t}'. Expected ${e} or greater.`);if(o>n)throw Ct(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Dt(t,e,n){let o=e;return n==null&&(o=`https://${e}`),`${n}://${o}/v0${t}`}function ve(t){const e=encodeURIComponent;let n="?";for(const o in t)if(t.hasOwnProperty(o)){const s=e(o)+"="+e(t[o]);n=n+s+"&"}return n=n.slice(0,-1),n}var V;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(V||(V={}));/**
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
 */function Mn(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||s||a}/**
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
 */class Rn{constructor(e,n,o,s,a,c,i,d,r,l,u,p=!0){this.url_=e,this.method_=n,this.headers_=o,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=i,this.errorCallback_=d,this.timeout_=r,this.progressCallback_=l,this.connectionFactory_=u,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(o,s)=>{if(s){o(!1,new dt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=i=>{const d=i.loaded,r=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,r)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const i=a.getErrorCode()===V.NO_ERROR,d=a.getStatus();if(!i||Mn(d,this.additionalRetryCodes_)&&this.retry){const l=a.getErrorCode()===V.ABORT;o(!1,new dt(!1,null,l));return}const r=this.successCodes_.indexOf(d)!==-1;o(!0,new dt(r,a))})},n=(o,s)=>{const a=this.resolve_,c=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(i,i.getResponse());kn(d)?a(d):a()}catch(d){c(d)}else if(i!==null){const d=xt();d.serverResponse=i.getErrorText(),this.errorCallback_?c(this.errorCallback_(i,d)):c(d)}else if(s.canceled){const d=this.appDelete_?we():yn();c(d)}else{const d=mn();c(d)}};this.canceled_?n(!1,new dt(!1,null,!0)):this.backoffId_=En(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Un(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dt{constructor(e,n,o){this.wasSuccessCode=e,this.connection=n,this.canceled=!!o}}function Cn(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nn(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function On(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Pn(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xn(t,e,n,o,s,a,c=!0){const i=ve(t.urlParams),d=t.url+i,r=Object.assign({},t.headers);return On(r,e),Cn(r,n),Nn(r,a),Pn(r,o),new Rn(d,t.method,r,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function Ln(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Bn(...t){const e=Ln();if(e!==void 0){const n=new e;for(let o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}else{if(Bt())return new Blob(t);throw new E(b.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Fn(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function $n(t){if(typeof atob>"u")throw _n("base-64");return atob(t)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Et{constructor(e,n){this.data=e,this.contentType=n||null}}function Gn(t,e){switch(t){case P.RAW:return new Et(De(e));case P.BASE64:case P.BASE64URL:return new Et(Te(t,e));case P.DATA_URL:return new Et(Vn(e),jn(e))}throw xt()}function De(t){const e=[];for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);if(o<=127)e.push(o);else if(o<=2047)e.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=o,c=t.charCodeAt(++n);o=65536|(a&1023)<<10|c&1023,e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?e.push(239,191,189):e.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(e)}function Hn(t){let e;try{e=decodeURIComponent(t)}catch{throw ot(P.DATA_URL,"Malformed data URL.")}return De(e)}function Te(t,e){switch(t){case P.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw ot(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw ot(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$n(e)}catch(s){throw s.message.includes("polyfill")?s:ot(t,"Invalid character found")}const o=new Uint8Array(n.length);for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return o}class _e{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ot(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=n[1]||null;o!=null&&(this.base64=qn(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=e.substring(e.indexOf(",")+1)}}function Vn(t){const e=new _e(t);return e.base64?Te(P.BASE64,e.rest):Hn(e.rest)}function jn(t){return new _e(t).contentType}function qn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class G{constructor(e,n){let o=0,s="";Kt(e)?(this.data_=e,o=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),o=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),o=e.length),this.size_=o,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kt(this.data_)){const o=this.data_,s=Fn(o,e,n);return s===null?null:new G(s)}else{const o=new Uint8Array(this.data_.buffer,e,n-e);return new G(o,!0)}}static getBlob(...e){if(Bt()){const n=e.map(o=>o instanceof G?o.data_:o);return new G(Bn.apply(null,n))}else{const n=e.map(c=>Lt(c)?Gn(P.RAW,c).data:c.data_);let o=0;n.forEach(c=>{o+=c.byteLength});const s=new Uint8Array(o);let a=0;return n.forEach(c=>{for(let i=0;i<c.length;i++)s[a++]=c[i]}),new G(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Se(t){let e;try{e=JSON.parse(t)}catch{return null}return An(e)?e:null}/**
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
 */function Wn(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Xn(t,e){const n=e.split("/").filter(o=>o.length>0).join("/");return t.length===0?n:t+"/"+n}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function zn(t,e){return e}class k{constructor(e,n,o,s){this.server=e,this.local=n||e,this.writable=!!o,this.xform=s||zn}}let ft=null;function Jn(t){return!Lt(t)||t.length<2?t:be(t)}function Ee(){if(ft)return ft;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(a,c){return Jn(c)}const n=new k("name");n.xform=e,t.push(n);function o(a,c){return c!==void 0?Number(c):c}const s=new k("size");return s.xform=o,t.push(s),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),ft=t,ft}function Kn(t,e){function n(){const o=t.bucket,s=t.fullPath,a=new C(o,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Qn(t,e,n){const o={};o.type="file";const s=n.length;for(let a=0;a<s;a++){const c=n[a];o[c.local]=c.xform(o,e[c.server])}return Kn(o,t),o}function Ue(t,e,n){const o=Se(e);return o===null?null:Qn(t,o,n)}function Yn(t,e,n,o){const s=Se(e);if(s===null||!Lt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(r=>{const l=t.bucket,u=t.fullPath,p="/b/"+c(l)+"/o/"+c(u),g=Dt(p,n,o),m=ve({alt:"media",token:r});return g+m})[0]}function Zn(t,e){const n={},o=e.length;for(let s=0;s<o;s++){const a=e[s];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Ft{constructor(e,n,o,s){this.url=e,this.method=n,this.handler=o,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ke(t){if(!t)throw xt()}function to(t,e){function n(o,s){const a=Ue(t,s,e);return ke(a!==null),a}return n}function eo(t,e){function n(o,s){const a=Ue(t,s,e);return ke(a!==null),Yn(a,s,t.host,t._protocol)}return n}function Ae(t){function e(n,o){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=pn():s=hn():n.getStatus()===402?s=fn(t.bucket):n.getStatus()===403?s=gn(t.path):s=o,s.status=n.getStatus(),s.serverResponse=o.serverResponse,s}return e}function Me(t){const e=Ae(t);function n(o,s){let a=e(o,s);return o.getStatus()===404&&(a=dn(t.path)),a.serverResponse=s.serverResponse,a}return n}function no(t,e,n){const o=e.fullServerUrl(),s=Dt(o,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,i=new Ft(s,a,eo(t,n),c);return i.errorHandler=Me(e),i}function oo(t,e){const n=e.fullServerUrl(),o=Dt(n,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(d,r){}const i=new Ft(o,s,c,a);return i.successCodes=[200,204],i.errorHandler=Me(e),i}function so(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ao(t,e,n){const o=Object.assign({},n);return o.fullPath=t.path,o.size=e.size(),o.contentType||(o.contentType=so(null,e)),o}function co(t,e,n,o,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function i(){let M="";for(let R=0;R<2;R++)M=M+Math.random().toString().slice(2);return M}const d=i();c["Content-Type"]="multipart/related; boundary="+d;const r=ao(e,o,s),l=Zn(r,n),u="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+d+`\r
Content-Type: `+r.contentType+`\r
\r
`,p=`\r
--`+d+"--",g=G.getBlob(u,o,p);if(g===null)throw Dn();const m={name:r.fullPath},I=Dt(a,t.host,t._protocol),w="POST",T=t.maxUploadRetryTime,A=new Ft(I,w,to(t,n),T);return A.urlParams=m,A.headers=c,A.body=g.uploadData(),A.errorHandler=Ae(e),A}class io{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=V.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=V.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=V.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,o,s){if(this.sent_)throw et("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw et("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw et("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw et("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw et("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ro extends io{initXhr(){this.xhr_.responseType="text"}}function $t(){return new ro}/**
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
 */class W{constructor(e,n){this._service=e,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new W(e,n)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Wn(this._location.path);if(e===null)return null;const n=new C(this._location.bucket,e);return new W(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Sn(e)}}function lo(t,e,n){t._throwIfRoot("uploadBytes");const o=co(t.storage,t._location,Ee(),new G(e,!0),n);return t.storage.makeRequestWithTokens(o,$t).then(s=>({metadata:s,ref:t}))}function uo(t){t._throwIfRoot("getDownloadURL");const e=no(t.storage,t._location,Ee());return t.storage.makeRequestWithTokens(e,$t).then(n=>{if(n===null)throw Tn();return n})}function fo(t){t._throwIfRoot("deleteObject");const e=oo(t.storage,t._location);return t.storage.makeRequestWithTokens(e,$t)}function ho(t,e){const n=Xn(t._location.path,e),o=new C(t._location.bucket,n);return new W(t.storage,o)}/**
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
 */function po(t){return/^[A-Za-z]+:\/\//.test(t)}function go(t,e){return new W(t,e)}function Re(t,e){if(t instanceof Gt){const n=t;if(n._bucket==null)throw vn();const o=new W(n,n._bucket);return e!=null?Re(o,e):o}else return e!==void 0?ho(t,e):t}function mo(t,e){if(e&&po(e)){if(t instanceof Gt)return go(t,e);throw Ct("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(t,e)}function Yt(t,e){const n=e==null?void 0:e[Ie];return n==null?null:C.makeFromBucketSpec(n,t)}function yo(t,e,n,o={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=o;s&&(t._overrideAuthToken=typeof s=="string"?s:Ve(s,t.app.options.projectId))}class Gt{constructor(e,n,o,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=o,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ye,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ln,this._maxUploadRetryTime=un,this._requests=new Set,s!=null?this._bucket=C.makeFromBucketSpec(s,this._host):this._bucket=Yt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=Yt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new W(this,e)}_makeRequest(e,n,o,s,a=!0){if(this._deleted)return new bn(we());{const c=xn(e,this._appId,o,s,n,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,n){const[o,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,o,s).getPromise()}}const Zt="@firebase/storage",te="0.13.2";/**
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
 */const Ce="storage";function Io(t,e,n){return t=H(t),lo(t,e,n)}function Ne(t){return t=H(t),uo(t)}function wo(t){return t=H(t),fo(t)}function Ht(t,e){return t=H(t),mo(t,e)}function vo(t=he(),e){t=H(t);const o=de(t,Ce).getImmediate({identifier:e}),s=fe("storage");return s&&Do(o,...s),o}function Do(t,e,n,o={}){yo(t,e,n,o)}function To(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gt(n,o,s,e,je)}function _o(){le(new ue(Ce,To,"PUBLIC").setMultipleInstances(!0)),It(Zt,te,""),It(Zt,te,"esm2017")}_o();const Vt=vo(vt);async function Ro(t,e,n,o){console.log("uploading file"),console.log(`${t}/${e}/${n}`);const s=Ht(Vt,`${t}/${e}/${n}`),a=await Io(s,o);return await Ne(a.ref)}async function Co(t,e,n){const o=Ht(Vt,`${t}/${e}/${n}`);await wo(o)}async function So(t){const e=localStorage.getItem("schoolId"),n=Ht(Vt,`${e}/${t}.json`);try{const o=await Ne(n);return(await(await fetch(o)).json()).FCMToken}catch{return null}}const ee=me(vt);async function X(t,e,n,o){const s=[],a=[];await Promise.all(e.map(async c=>{const i=await So(c.userId);console.log("FCM Token: ",i),console.log("Email: ",c.email),i?a.push(i):s.push(c.email)})),s.length>0&&O(ee,"sendEmail")({emails:s,activityId:n.activityId,activityName:o,groupName:n.name,groupId:n.id,message:t.message,senderName:t.senderName}),a.length>0&&O(ee,"sendNotifications")({targetIds:a,title:`${o} - ${n.name}`,body:`${t.senderName}: ${t.message}`,thread:n.id,data:{type:"activity-chat",activityName:o,activityId:n.activityId,message:t.message,senderName:t.senderName,gcId:n.id,groupName:n.name}})}const F=me(vt),y=Be(vt),Oe=h(y,"schools"),Tt=h(y,"companies");h(y,"employers");h(y,"opportunityNotifications");const tt=h(y,"opportunities"),bo=async t=>{const e=f(Oe,t);return(await U(e)).data()},No=async()=>{const t=await D(Oe),e=[];return t.forEach(n=>{e.push(n.data())}),e},Oo=async()=>{const t=await D(Tt),e=[];return t.forEach(n=>{const o=n.data();o.id=n.id,e.push(ie.fromMap(o))}),e},Pe=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const n=f(y,"schools",e);if(t=="student"){const o=_(h(n,"activities"),S("studentUids","array-contains",Y())),s=[];return(await D(o)).forEach(c=>{s.push(j.fromMap(c.data()))}),s}else{const o=_(h(n,"activities"),S("teacherUids","array-contains",Y())),s=[];return(await D(o)).forEach(c=>{console.log(c.data()),s.push(j.fromMap(c.data()))}),s}};async function Eo(t){const e=localStorage.getItem("schoolId");if(!e)return null;const n=f(y,"schools",e),o=f(h(n,"activities"),t),s=await U(o);return s.exists()?s.data().type=="theater"?st.fromMap(s.data()):j.fromMap(s.data()):null}async function Po(t){const e=localStorage.getItem("schoolId");if(!e)return"";const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=h(o,"shows"),a=await L(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function xo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=f(h(o,"shows"),t.id);t.lastUpdated=Date.now(),await v(s,t.toMap())}async function Lo(t){const e=h(y,"showTemplates"),n=await L(e,t.toMap());return t.id=n.id,await v(n,{id:n.id}),n.id}async function Bo(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=f(y,"schools",n),s=f(h(o,"activities"),t),a=f(h(s,"shows"),e),c=await U(a);return c.exists()?(console.log(c.data()),Nt.fromMap(c.data())):null}async function Fo(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const n=f(y,"schools",e),o=f(h(n,"activities"),t),s=await U(o);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(Q.fromMap(c))}),a}async function $o(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await q(c,n.toMap())}async function ct(t){console.log("ADDING EVENT");const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=h(o,"events");console.log("Adding event"),console.log(t.toMap());const a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function it(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=h(o,"events"),a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Go(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=h(a,"events");if(o=="student"){const i=await D(_(c,S("showId","==",e),S("targetUids","array-contains",Y()))),d=[];return i.forEach(r=>{r.data().deleted||d.push(B.fromMap(r.data()))}),d}else{const i=await D(_(c,S("showId","==",e))),d=[];return i.forEach(r=>{r.data().deleted||d.push(B.fromMap(r.data()))}),d}}async function rt(t){console.log("DELETING EVENT");const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=f(h(o,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function lt(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=f(h(o,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function xe(t){const e=localStorage.getItem("schoolId");if(!e)return[];const n=f(y,"schools",e),o=f(h(n,"activities"),t),s=h(o,"shows"),a=await D(s),c=[];return a.forEach(i=>{c.push(Nt.fromMap(i.data()))}),c}async function Ho(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await v(c,{conflictForm:n.toMap(),lastUpdated:Date.now()}),await O(F,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:o,deadline:n.deadline.toISOString()})}async function Vo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);await v(c,{conflictForm:n.toMap(),lastUpdated:Date.now()})}async function jo(){const t=Y(),e=localStorage.getItem("schoolId");if(!e)return null;const n=f(y,"schools",e),o=f(n,"students",t),s=await U(o);return s.exists()?Q.fromMap(s.data()):null}async function qo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=f(c,"conflictResponses",n.actor.userId);n.id=n.actor.userId,await q(i,n.toMap())}async function Wo(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses");if(o=="student"){console.log("Getting conflict responses for student"),console.log(Y());const l=await D(_(i,S("submitterId","==",Y()))),u=[];return l.forEach(p=>{u.push(Ut.fromMap(p.data()))}),u}const d=await D(i),r=[];return d.forEach(l=>{r.push(Ut.fromMap(l.data()))}),r}async function Xo(){const t=h(y,"showTemplates"),e=await D(t),n=[];return e.forEach(o=>{n.push(Nt.fromMap(o.data()))}),n}async function zo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+n+" AT: "+o),!e||!n||!o)return null;const s=f(y,"schools",e),a=_(h(s,"activities"),S("joinCode","==",t)),c=await D(a);if(c.empty)return null;const i=c.docs[0],d=f(h(s,o=="student"?"students":"teachers"),n),r=await U(d);if(console.log(r.data()),!r.exists())return null;if(i.data().studentUids.includes(n)||i.data().teacherUids.includes(n))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),i.data().type=="theater"){if((r.data().gender==null||r.data().gender=="")&&o=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),r.data().phoneNumber==""&&o=="student"&&localStorage.setItem("needsPhoneNumber","true"),(r.data().phoneNumber==""||r.data().gender==null||r.data().gender=="")&&o=="student")return null;if(o=="student")return await v(i.ref,{studentUids:[...i.data().studentUids,n],students:[...i.data().students,Q.fromMap(r.data()).toMap()],lastUpdated:Date.now()}),st.fromMap(i.data());{console.log("Joining as teacher"),console.log(r.data());const l=pt.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return console.log(l.toMap()),await v(i.ref,{teacherUids:[...i.data().teacherUids,n],teachers:[...i.data().teachers,l.toMap()],lastUpdated:Date.now()}),st.fromMap(i.data())}}else if(o=="student"){const l=Q.fromBlank(r.data().fullname,r.data().gender,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{studentUids:[...i.data().studentUids,n],students:[...i.data().students,l.toMap()],lastUpdated:Date.now()}),j.fromMap(i.data())}else{const l=pt.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{teacherUids:[...i.data().teacherUids,n],teachers:[...i.data().teachers,l.toMap()],lastUpdated:Date.now()}),j.fromMap(i.data())}}async function Jo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=f(y,"schools",e),a=f(h(s,o=="student"?"students":"teachers"),n);await v(a,{gender:t,lastUpdated:Date.now()})}async function Ko(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=f(y,"schools",e),a=f(h(s,o=="student"?"students":"teachers"),n);await v(a,{phoneNumber:t,lastUpdated:Date.now()})}async function Uo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId);f(h(o,"events"),t.id),t.lastUpdated=Date.now(),await rt(t),await ct(t)}async function Qo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId);f(h(o,"events"),t.id),t.lastUpdated=Date.now(),await lt(t),await it(t)}async function Yo(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return[];const o=f(y,"schools",t),s=[];let a;n=="student"?a=await D(_(h(o,"activities"),S("studentUids","array-contains",e))):a=await D(_(h(o,"activities"),S("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const i=[];if(c.data().deleted!=!0){n=="student"?(console.log("Getting events for student"),i.push(await D(_(h(c.ref,"events"),S("targetUids","array-contains",e)))),i.push(await D(_(h(c.ref,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),i.push(await D(h(c.ref,"events"))));for(const d of i)for(const r of d.docs){const l=r.data();l.deleted||(console.log(l),l.type=="activity-theater-event"?s.push(B.fromMap(l)):s.push(Z.fromMap(l)))}}}return s}async function Zo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n)return[];const s=f(y,"schools",e),a=f(h(s,"activities"),t),c=[],i=[];o=="student"?(console.log("Getting events for student"),c.push(await D(_(h(a,"events"),S("targetUids","array-contains",n)))),c.push(await D(_(h(a,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await D(h(a,"events"))));for(const d of c)for(const r of d.docs){const l=r.data();l.deleted||(console.log(l),l.id=r.id,console.log(l),i.push(Z.fromMap(l)))}return i}async function ts(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return null;const s=f(y,"schools",n),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses"),d=await U(f(i,o));return d.exists()?Ut.fromMap(d.data()):null}async function es(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap()),lastUpdated:Date.now()})}async function ns(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return[];const s=localStorage.getItem("accountType"),a=f(y,"schools",n),c=f(h(a,"activities"),t);if(s=="teacher")kt(h(c,"groupChats"),async i=>{const d=[];for(const r of i.docs){const l=x.fromMap(r.data());if((l.generalTarget=="direct"||l.generalTarget=="custom")&&!l.members.find(m=>m.userId==o))continue;if(l.generalTarget=="direct"){const m=l.members.find(I=>I.userId!=o);l.name=(m==null?void 0:m.name)||"Unknown"}const u=h(r.ref,"messages"),p=_(u,Wt("timeSent","desc"),qt(1)),g=await D(p);g.empty||(l.lastMessage=At.fromMap(g.docs[0].data())),d.push(l)}d.sort((r,l)=>r.lastMessage?l.lastMessage?l.lastMessage.timeSent.getTime()-r.lastMessage.timeSent.getTime():-1:1),e(d)});else{const i=f(h(a,"students"),o),d=await U(i);if(!d.exists())return;const r=Ot.fromMap(d.data());console.log(r),kt(h(c,"groupChats"),async l=>{const u=[];for(const p of l.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(T=>T.userId==o)))continue;if(g.generalTarget=="direct"){const T=g.members.find(A=>A.userId!=o);g.name=(T==null?void 0:T.name)||"Unknown"}const m=h(p.ref,"messages"),I=_(m,Wt("timeSent","desc"),qt(1)),w=await D(I);w.empty||(g.lastMessage=At.fromMap(w.docs[0].data())),u.push(g)}u.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(u)})}}async function os(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return[];const s=f(y,"schools",o),a=f(h(s,"activities"),t);console.log("Getting messages for "+e);const c=f(h(a,"groupChats"),e),i=h(c,"messages");kt(i,d=>{const r=[];d.forEach(l=>{r.push(At.fromMap(l.data()))}),r.sort((l,u)=>l.timeSent.getTime()-u.timeSent.getTime()),n(r)})}async function jt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return null;const o=f(y,"schools",t),s=f(h(o,n=="student"?"students":"teachers"),e),a=await U(s);return a.exists()?n=="student"?Ot.fromMap(a.data()):Fe.fromMap(a.data()):null}async function ss(t){const e=f(h(y,"parents"),t),n=await U(e);return n.exists()?n.data():null}async function as(t,e,n,o,s){if(n.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const i=f(y,"schools",a),d=f(h(i,"activities"),t),r=f(h(d,"groupChats"),e),l=await U(r);if(!l.exists()){if(s==null)return;const m=await jt();if(!m)return;const I=x.fromBlank("",s.userId,[re.fromBlank(m.fullname,m.email,m.phoneNumber,m.FCMToken,m.uid),s],"direct",t,Date.now());await q(r,I.toMap());const w=h(r,"messages"),T=await L(w,n.toMap());n.messageId=T.id,await v(T,{messageId:T.id,lastUpdated:Date.now()}),X(n,[$.fromBlank(s.userId,s.email)],I,o);return}const u=x.fromMap(l.data()),p=h(r,"messages"),g=await L(p,n.toMap());if(n.messageId=g.id,await v(g,{messageId:g.id,lastUpdated:Date.now()}),u.generalTarget!="direct"&&u.generalTarget!="custom"&&u.generalTarget!="group"){const m=await Eo(t);if(!m)return;if(u.generalTarget=="everyone"){let I=m.students.map(w=>$.fromBlank(w.userId,w.email));I=I.concat(m.teachers.map(w=>$.fromBlank(w.userId,w.email))),I=I.concat(m.parents.map(w=>$.fromBlank(w.userId,w.email))),I=I.filter(w=>w.userId!=n.senderUid),X(n,I,u,m.name)}else if(u.generalTarget=="students"){let I=m.students.map(w=>$.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=n.senderUid),X(n,I,u,m.name)}else if(u.generalTarget=="parents"){let I=m.parents.map(w=>$.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=n.senderUid),X(n,I,u,m.name)}return}if(u.generalTarget=="direct"){const m=u.members.find(I=>I.userId!=c);if(!m)return;X(n,[$.fromBlank(m.userId,m.email)],u,o);return}if(u.generalTarget=="custom"){const m=u.members.filter(I=>I.userId!=c).map(I=>$.fromBlank(I.userId,I.email));X(n,m,u,o);return}}async function ht(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=h(o,"groupChats"),a=await jt();if(!a)return;const c=re.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const i=await L(s,t.toMap());t.id=i.id,await v(i,{id:i.id})}async function cs(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);v(c,{resources:N(n.toMap()),lastUpdated:Date.now()})}async function is(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e);v(c,{resources:He(n.toMap()),lastUpdated:Date.now()})}async function rs(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=f(h(a,"shows"),e),i=h(c,"conflictResponses"),d=f(i,n.id);await $e(d)}async function ls(t,e){if(t=="employer"){await q(f(y,"employers",e.uid),e.toMap());const c=localStorage.getItem("companyId");if(!c)return;const i=f(y,"companies",c);await v(i,{employerUids:N(e.uid),employers:N(e.toMap()),lastUpdated:Date.now()});return}const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=h(o,t+"s");await q(f(s,e.uid),e.toMap());let a;e instanceof Ot?a=Q.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=pt.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(o,{[t+"Uids"]:N(e.uid),[t+"s"]:N(a.toMap()),lastUpdated:Date.now()})}function ko(t){const e=new Date,n=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${n.slice(-2)}`}async function us(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=f(y,"schools",n),s=await U(o);if(!s.exists())return null;const a=s.data(),c=h(o,"activities"),i=ko(t);console.log(i);const d=[nt.fromMap({name:"Rehearsal",color:{red:255,green:0,blue:0,alpha:255}}),nt.fromMap({name:"Performance",color:{red:0,green:255,blue:0,alpha:255}})],r=[nt.fromMap({name:"Practice",color:{red:255,green:0,blue:0,alpha:255}}),nt.fromMap({name:"Game",color:{red:0,green:255,blue:0,alpha:255}})],l=[oe.fromMap({name:"Auditorium",color:{red:0,green:0,blue:255,alpha:255}})],u=yt.fromMap(a.location),p=[u],g=await jt();if(!g)return null;const m=pt.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let I;e=="theater"?I=st.fromBlank(t,"",i,[],[],[],[m],p,d,u,l,"type",Date.now()):I=j.fromBlank(t,"",i,[],[],[],[m],p,r,u,"type",Date.now(),"activity"),console.log(I.toMap());const w=await L(c,I.toMap());I.id=w.id,await v(w,{id:w.id});const T=x.fromMap({name:"Everyone",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"everyone"});await ht(T);const A=x.fromMap({name:"Parents",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"parents"});await ht(A);const M=x.fromMap({name:"Students",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"students"});return await ht(M),I}async function ds(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return null;const s=f(y,"schools",o),a=f(h(s,"activities"),n),c=h(a,"groupChats"),i=x.fromBlank("",e.userId,[t,e],"direct",n,Date.now());return await q(f(c,e.userId),i.toMap()),i.name=e.name,i}async function fs(){const t=await bo(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(n=>{e.push(yt.fromMap(n))}),e}async function hs(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t);await v(s,{locations:N(e.toMap()),lastUpdated:Date.now()})}async function ps(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e);await v(n,{savedLocations:N(t.toMap()),lastUpdated:Date.now()})}async function gs(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t);await v(s,{eventTypes:N(e.toMap()),lastUpdated:Date.now()})}async function ms(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t),a=f(h(s,"shows"),e);await v(a,{isCreatingSchedule:!0,lastUpdated:Date.now()})}async function ys(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=h(o,"students");await q(f(s,t.uid),t.toMap());const a=Q.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(o,{studentUids:N(t.uid),students:N(a.toMap()),lastUpdated:Date.now()});const c=a.userId;if(!n||!c)return null;const i=f(h(o,"activities"),e),d=await U(i);return d.exists()?d.data().type=="theater"?(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()],lastUpdated:Date.now()}),st.fromMap(d.data())):(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()],lastUpdated:Date.now()}),j.fromMap(d.data())):null}async function Is(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=_(h(o,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){const i=B.fromMap(c.data());if(c.data().deleted==!0)continue;for(let r=0;r<i.characters.length;r++){const l=i.characters[r];l instanceof z?i.characters[r]=t.characters.find(u=>u.name==l.name):l instanceof gt&&(i.characters[r]=t.showGroups.find(u=>u.name==l.name))}if(i.theaterEventType=="scene"){const r=i.scene;let l;if(t.layout.forEach(u=>{if(u.scenes.find(p=>p.sceneId==r.sceneId)){l=u.scenes.find(p=>p.sceneId==r.sceneId);return}}),l)i.scene=l;else continue}if(i.theaterEventType=="song"){const r=i.song;let l;if(t.songs.forEach(u=>{if(u.songId==r.songId){l=u;return}}),l)i.song=l;else continue}if(i.theaterEventType=="dance"){const r=i.dance;let l;if(t.dances.forEach(u=>{if(u.danceId==r.danceId){l=u;return}}),l)i.dance=l;else continue}const d=[];for(const r of i.characters){if(r instanceof ne){for(const l of t.ensemble.actors)d.push(l);for(const l of t.characters)d.find(u=>u.userId==l.actor.userId)==null&&d.push(l.actor);break}if(r instanceof z){if(d.find(l=>l.userId==r.actor.userId)!=null)continue;d.push(r.actor)}if(r instanceof mt){if(r.includeAll)for(const l of t.ensemble.actors)d.find(u=>u.userId==l.userId)==null&&d.push(l);else if(r.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(d.find(u=>u.userId==l.userId)!=null)continue;d.push(l)}}else if(r.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(d.find(u=>u.userId==l.userId)!=null)continue;d.push(l)}}else if(r.includeCustom)for(const l of r.customActors)d.find(u=>u.userId==l.userId)==null&&d.push(l)}if(r instanceof gt)for(const l of r.characters){if(l instanceof z){if(d.find(u=>u.userId==l.actor.userId)!=null)continue;d.push(l.actor)}if(l instanceof mt){if(l.includeAll)for(const u of t.ensemble.actors)d.find(p=>p.userId==u.userId)==null&&d.push(u);else if(l.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(d.find(p=>p.userId==u.userId)!=null)continue;d.push(u)}}else if(l.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(d.find(p=>p.userId==u.userId)!=null)continue;d.push(u)}}else if(l.includeCustom)for(const u of l.customActors)d.find(p=>p.userId==u.userId)==null&&d.push(u)}}}i.targets=d,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function ws(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=f(y,"schools",e),o=f(h(n,"activities"),t.activityId),s=_(h(o,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){if(c.data().deleted==!0)continue;const i=B.fromMap(c.data());let d=[];if(i.theaterEventType=="custom")for(let l=0;l<i.characters.length;l++){const u=i.characters[l];if(u instanceof z){const p=t.characters.find(g=>g.characterId==u.characterId);p&&d.push(p)}else if(u instanceof gt){const p=t.showGroups.find(g=>g.showGroupId==u.showGroupId);p&&d.push(p)}else d.push(u);i.characters=d}else if(i.theaterEventType=="scene"){console.log("Editing scene");const l=i.scene;let u;if(t.layout.forEach(p=>{if(p.scenes.find(g=>g.sceneId==l.sceneId)){u=p.scenes.find(g=>g.sceneId==l.sceneId);return}}),u)i.scene=u,d=[...u.characters],i.characters=d;else continue}else if(i.theaterEventType=="song"){const l=i.song;let u;if(t.songs.forEach(p=>{if(p.songId==l.songId){u=p;return}}),u)i.song=u,d=[...u.characters],i.characters=d;else continue}else if(i.theaterEventType=="dance"){const l=i.dance;let u;if(t.dances.forEach(p=>{if(p.danceId==l.danceId){u=p;return}}),u)i.dance=u,d=[...u.characters],i.characters=d;else continue}const r=[];for(const l of d){if(l instanceof ne){for(const u of t.ensemble.actors)r.push(u);for(const u of t.characters)r.find(p=>p.userId==u.actor.userId)==null&&r.push(u.actor);break}if(l instanceof z){if(r.find(u=>u.userId==l.actor.userId)!=null)continue;r.push(l.actor)}if(l instanceof mt){if(l.includeAll)for(const u of t.ensemble.actors)r.find(p=>p.userId==u.userId)==null&&r.push(u);else if(l.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(r.find(p=>p.userId==u.userId)!=null)continue;r.push(u)}}else if(l.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(r.find(p=>p.userId==u.userId)!=null)continue;r.push(u)}}else if(l.includeCustom)for(const u of l.customActors)r.find(p=>p.userId==u.userId)==null&&r.push(u)}if(l instanceof gt)for(const u of l.characters){if(u instanceof z){if(r.find(p=>p.userId==u.actor.userId)!=null)continue;r.push(u.actor)}if(u instanceof mt){if(u.includeAll)for(const p of t.ensemble.actors)r.find(g=>g.userId==p.userId)==null&&r.push(p);else if(u.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(u.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(u.includeCustom)for(const p of u.customActors)r.find(g=>g.userId==p.userId)==null&&r.push(p)}}}i.targets=r,i.lastUpdated=Date.now(),await Uo(i)}}async function vs(){if(!localStorage.getItem("schoolId"))return[];const e=await Pe(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await xe(o.id);for(const a of s){console.log("Getting resources for "+a.name);const c=[];for(let i=0;i<a.resources.length;i++){const d=a.resources[i];d.activityId=o.id,d.showId=a.id,c.push(d)}n.push(...c)}}return n}async function Ds(){if(!localStorage.getItem("schoolId"))return[];const e=await Pe(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await xe(o.id);for(const a of s)a.activityName=o.name,n.push(a)}return n}async function Ts(t){const e=localStorage.getItem("userId"),n=f(h(y,"parents"),t),o=await U(n);if(!o.exists())return null;const s=o.data(),a=s.requestedChildren,c=s.children,i=a.find(d=>d.uid==e);if(!i)return null;a.splice(a.indexOf(i),1),c.push(i),await v(n,{requestedChildren:a,children:c,lastUpdated:Date.now()})}async function _s(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const i=c.data(),d=i.locations;for(let p=0;p<d.length;p++)yt.fromMap(d[p]).name==n.name&&(d[p]=e.toMap());let r=yt.fromMap(i.defaultLocation);r.name==n.name&&(r=e),await v(a,{locations:d,defaultLocation:r.toMap(),lastUpdated:Date.now()});const l=_(h(a,"events"),S("location","==",n.toMap()));(await D(l)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await rt(m),m.location=e,m.lastUpdated=Date.now(),await ct(m)}else{const m=Z.fromMap(g);m.id=p.id,await lt(m),m.location=e,m.lastUpdated=Date.now(),await it(m)}})}async function Ss(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o),a=f(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const i=c.data();if(i.type!="theater")return;const d=i.rehearsalLocations;for(let u=0;u<d.length;u++)oe.fromMap(d[u]).name==n.name&&(d[u]=e.toMap());await v(a,{rehearsalLocations:d,lastUpdated:Date.now()});const r=_(h(a,"events"),S("rehearsalLocation","==",n.toMap()));(await D(r)).docs.forEach(async u=>{if(u.data().deleted==!0)return;const p=u.data();if(p.type=="activity-theater-event"){const g=B.fromMap(p);g.id=u.id,await rt(g),g.rehearsalLocation=e,g.lastUpdated=Date.now(),await ct(g)}})}async function bs(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t),a=await U(s);if(!a.exists())return;a.data(),await v(s,{name:e,lastUpdated:Date.now()});const c=h(s,"events");(await D(c)).docs.forEach(async d=>{if(d.data().deleted==!0)return;const r=d.data();if(r.type=="activity-theater-event"){const l=B.fromMap(r);l.id=d.id,await rt(l),l.activityName=e,l.lastUpdated=Date.now(),await ct(l)}else{const l=Z.fromMap(r);l.id=d.id,await lt(l),l.activityName=e,l.lastUpdated=Date.now(),await it(l)}})}async function Es(t,e,n,o){const s=localStorage.getItem("schoolId");if(!s)return;const a=f(y,"schools",s),c=f(h(a,"activities"),t),i=await U(c);if(!i.exists())return;const r=i.data().eventTypes;for(let p=0;p<r.length;p++)nt.fromMap(r[p]).name==n.name&&(r[p]=e.toMap());await v(c,{eventTypes:r,lastUpdated:Date.now()});const l=_(h(c,"events"),S(o?"activityEventType":"eventType","==",n.toMap()));(await D(l)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await rt(m),m.activityEventType=e,m.lastUpdated=Date.now(),await ct(m)}else{const m=Z.fromMap(g);m.id=p.id,await lt(m),m.eventType=e,m.lastUpdated=Date.now(),await it(m)}})}async function Us(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=f(y,"schools",o);console.log("Editing group"),console.log(e),console.log(t);const a=f(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const d=c.data().groups;for(let g=0;g<d.length;g++)Ge.fromMap(d[g]).groupName==n.groupName&&(d[g]=e.toMap());await v(a,{groups:d,lastUpdated:Date.now()});const r=_(h(a,"events"),S("groupNames","array-contains",n.groupName));(await D(r)).docs.forEach(async g=>{if(g.data().deleted==!0)return;const m=g.data();if(m.type!="activity-theater-event"){const I=Z.fromMap(m);I.id=g.id,console.log("deleting event"),await lt(I),I.groupNames=I.groupNames.map(T=>T==n.groupName?e.groupName:T),I.groupTargets=I.groupTargets.map(T=>T.groupName==n.groupName?e:T);const w=[];for(const T of I.groupTargets)for(const A of T.groupMembers)w.find(M=>M.userId==A.userId)==null&&w.push(A);I.targets=w,I.lastUpdated=Date.now(),console.log("adding event"),await it(I)}});const u=_(h(a,"groupChats"),S("name","==",n.groupName),S("generalTarget","==","group")),p=await D(u);for(const g of p.docs){const m=x.fromMap(g.data());m.name=e.groupName,m.members=e.groupMembers.map(I=>I.toGroupChatMember()),m.lastUpdated=Date.now(),await v(g.ref,m.toMap())}}async function ks(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=f(y,"schools",n),s=f(h(o,"activities"),t);await v(s,{groups:N(e.toMap()),lastUpdated:Date.now()});const a=x.fromBlank(e.groupName,"",e.groupMembers.map(c=>c.toGroupChatMember()),"group",t,Date.now());return await ht(a),e}async function As(){const t=localStorage.getItem("companyId");if(!t)return[];const e=_(tt,S("companyId","==",t)),n=await D(e),o=[];return n.forEach(s=>{const a=s.data();if(a.deleted)return;a.id=s.id;const c=se(a.type);c==J.Job?o.push(ae.fromMap(a)):c==J.OneTimeVolunteer?o.push(at.fromMap(a)):c==J.RecurringVolunteer&&o.push(ce.fromMap(a))}),o}async function Ms(){const t=await D(tt),e=[];return t.forEach(n=>{const o=n.data();if(o.deleted)return;o.id=n.id;const s=se(o.type);s==J.Job?e.push(ae.fromMap(o)):s==J.OneTimeVolunteer?e.push(at.fromMap(o)):s==J.RecurringVolunteer&&e.push(ce.fromMap(o))}),e}async function Rs(t,e){if(!e&&t instanceof at){await O(F,"deleteCloudTask")({taskId:t.taskId});const o=await O(F,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=o.data}const n=f(tt,t.id);await v(n,t.toMap())}async function Cs(){const t=localStorage.getItem("companyId");if(!t)return null;const e=f(Tt,t),n=await U(e);if(!n.exists())return null;const o=ie.fromMap(n.data());return o.id=n.id,o}async function Ns(t){await O(F,"deleteCloudTask")({taskId:t})}async function Os(t){if(t instanceof at){const n=await O(F,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=n.data}const e=await L(tt,t.toMap());return t.id=e.id,t}async function Ps(t){t instanceof at&&(console.log(t.taskId),await O(F,"deleteCloudTask")({taskId:t.taskId}));const e=f(tt,t.id);await v(e,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteOpportunity")({opportunityId:t.id})}async function xs(t){const e=await L(Tt,t.toMap());return t.id=e.id,t}async function Ls(t){console.log(t.toMap()),t.id=localStorage.getItem("companyId"),console.log(localStorage.getItem("companyId"));const e=f(Tt,t.id);await v(e,t.toMap())}async function Bs(t,e){const n=_(tt,S("companyId","==",t));(await D(n)).forEach(async s=>{const a=s.data();a.deleted||(a.companyName=e,a.lastUpdated=Date.now(),await v(s.ref,a))})}export{Co as $,ct as A,rs as B,jo as C,qo as D,Vo as E,Ho as F,jt as G,Yo as H,ts as I,es as J,hs as K,ps as L,gs as M,_s as N,Es as O,Ss as P,bs as Q,Us as R,ks as S,fs as T,ht as U,as as V,os as W,ns as X,ds as Y,Ro as Z,cs as _,ko as a,is as a0,ys as a1,vs as a2,Ds as a3,lt as a4,it as a5,Zo as a6,Qo as a7,Ts as a8,ss as a9,Rs as aa,Ms as ab,Cs as ac,As as ad,Ps as ae,Ns as af,Os as ag,Ls as ah,Bs as ai,xs as b,ls as c,Oo as d,Jo as e,us as f,No as g,Pe as h,Eo as i,zo as j,xe as k,Xo as l,Po as m,Lo as n,xo as o,ws as p,Bo as q,Fo as r,ms as s,Is as t,Ko as u,$o as v,Wo as w,Go as x,rt as y,Uo as z};
