import{_ as Wt,P as Xt,Q as st,U as Kt,V as F,W as Jt,X as Yt,Y as Qt,Z as be,$ as Ae,a0 as ut,a1 as ke,a2 as f,a3 as h,a4 as E,y as Q,m as $,a5 as G,a6 as _,g as Dt,k as z,a7 as S,a8 as R,a9 as U,u as W,o as Z,aa as X,t as It,ab as yt,S as St,T as Re,ac as L,ad as Ee,ae as at,C as V,e as rt,F as Zt,E as ct,I as Ce,z as x,af as xt,ag as Lt,M as wt,B as te,ah as O,ai as Ue,x as et,aj as K,v as Me,L as ee}from"./index-Dsk55XF8.js";/**
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
 */const Ne="type.googleapis.com/google.protobuf.Int64Value",Oe="type.googleapis.com/google.protobuf.UInt64Value";function ne(t,e){const n={};for(const o in t)t.hasOwnProperty(o)&&(n[o]=e(t[o]));return n}function _t(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>_t(e));if(typeof t=="function"||typeof t=="object")return ne(t,e=>_t(e));throw new Error("Data cannot be encoded in JSON: "+t)}function it(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ne:case Oe:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>it(e)):typeof t=="function"||typeof t=="object"?ne(t,e=>it(e)):t}/**
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
 */const bt="functions";/**
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
 */const Ft={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Qt{constructor(e,n,o){super(`${bt}/${e}`,n||""),this.details=o}}function Pe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function xe(t,e){let n=Pe(t),o=n,s;try{const a=e&&e.error;if(a){const r=a.status;if(typeof r=="string"){if(!Ft[r])return new q("internal","internal");n=Ft[r],o=r}const i=a.message;typeof i=="string"&&(o=i),s=a.details,s!==void 0&&(s=it(s))}}catch{}return n==="ok"?null:new q(n,o,s)}/**
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
 */class Le{constructor(e,n,o){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||o.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),o=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:o,appCheckToken:s}}}/**
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
 */const vt="us-central1";function Fe(t){let e=null;return{promise:new Promise((n,o)=>{e=setTimeout(()=>{o(new q("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Be{constructor(e,n,o,s,a=vt,r){this.app=e,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new Le(n,o,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(a);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=vt}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function $e(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Ge(t,e,n){return o=>He(t,e,o,{})}async function je(t,e,n,o){n["Content-Type"]="application/json";let s;try{s=await o(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function He(t,e,n,o){const s=t._url(e);return Ve(t,s,n,o)}async function Ve(t,e,n,o){n=_t(n);const s={data:n},a={},r=await t.contextProvider.getContext(o.limitedUseAppCheckTokens);r.authToken&&(a.Authorization="Bearer "+r.authToken),r.messagingToken&&(a["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=r.appCheckToken);const i=o.timeout||7e4,u=Fe(i),c=await Promise.race([je(e,s,a,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new q("cancelled","Firebase Functions instance was deleted.");const d=xe(c.status,c.json);if(d)throw d;if(!c.json)throw new q("internal","Response is not valid JSON object.");let l=c.json.data;if(typeof l>"u"&&(l=c.json.result),typeof l>"u")throw new q("internal","Response is missing data field.");return{data:it(l)}}const Bt="@firebase/functions",$t="0.11.8";/**
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
 */const qe="auth-internal",ze="app-check-internal",We="messaging-internal";function Xe(t,e){const n=(o,{instanceIdentifier:s})=>{const a=o.getProvider("app").getImmediate(),r=o.getProvider(qe),i=o.getProvider(We),u=o.getProvider(ze);return new Be(a,r,i,u,s,t)};Wt(new Xt(bt,n,"PUBLIC").setMultipleInstances(!0)),st(Bt,$t,e),st(Bt,$t,"esm2017")}/**
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
 */function oe(t=Yt(),e=vt){const o=Kt(F(t),bt).getImmediate({identifier:e}),s=Jt("functions");return s&&Ke(o,...s),o}function Ke(t,e,n){$e(F(t),e,n)}function lt(t,e,n){return Ge(F(t),e)}Xe(fetch.bind(self));/**
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
 */const se="firebasestorage.googleapis.com",ae="storageBucket",Je=2*60*1e3,Ye=10*60*1e3;/**
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
 */class T extends Qt{constructor(e,n,o=0){super(pt(e),`Firebase Storage: ${n} (${pt(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function pt(t){return"storage/"+t}function At(){const t="An unknown error occurred, please check the error payload for server response.";return new T(v.UNKNOWN,t)}function Qe(t){return new T(v.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ze(t){return new T(v.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T(v.UNAUTHENTICATED,t)}function en(){return new T(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nn(t){return new T(v.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function on(){return new T(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sn(){return new T(v.CANCELED,"User canceled the upload/download.")}function an(t){return new T(v.INVALID_URL,"Invalid URL '"+t+"'.")}function rn(t){return new T(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cn(){return new T(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ae+"' property when initializing the app?")}function ln(){return new T(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function un(){return new T(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dn(t){return new T(v.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tt(t){return new T(v.INVALID_ARGUMENT,t)}function re(){return new T(v.APP_DELETED,"The Firebase app was deleted.")}function hn(t){return new T(v.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Y(t,e){return new T(v.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function J(t){throw new T(v.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let o;try{o=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(o.path==="")return o;throw rn(e)}static makeFromUrl(e,n){let o=null;const s="([A-Za-z0-9.\\-_]+)";function a(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const r="(/(.*))?$",i=new RegExp("^gs://"+s+r,"i"),u={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const d="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${l}/${d}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},m=n===se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",D=new RegExp(`^https?://${m}/${s}/${y}`,"i"),C=[{regex:i,indices:u,postModify:a},{regex:g,indices:I,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<C.length;A++){const tt=C[A],ht=tt.regex.exec(e);if(ht){const Se=ht[tt.indices.bucket];let ft=ht[tt.indices.path];ft||(ft=""),o=new k(Se,ft),tt.postModify(o);break}}if(o==null)throw an(e);return o}}class fn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function pn(t,e,n){let o=1,s=null,a=null,r=!1,i=0;function u(){return i===2}let c=!1;function d(...y){c||(c=!0,e.apply(null,y))}function l(y){s=setTimeout(()=>{s=null,t(g,u())},y)}function p(){a&&clearTimeout(a)}function g(y,...D){if(c){p();return}if(y){p(),d.call(null,y,...D);return}if(u()||r){p(),d.call(null,y,...D);return}o<64&&(o*=2);let C;i===1?(i=2,C=0):C=(o+Math.random())*1e3,l(C)}let I=!1;function m(y){I||(I=!0,p(),!c&&(s!==null?(y||(i=2),clearTimeout(s),l(0)):y||(i=1)))}return l(0),a=setTimeout(()=>{r=!0,m(!0)},n),m}function gn(t){t(!1)}/**
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
 */function mn(t){return t!==void 0}function In(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){return typeof t=="string"||t instanceof String}function Gt(t){return Rt()&&t instanceof Blob}function Rt(){return typeof Blob<"u"}function jt(t,e,n,o){if(o<e)throw Tt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(o>n)throw Tt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function dt(t,e,n){let o=e;return n==null&&(o=`https://${e}`),`${n}://${o}/v0${t}`}function ce(t){const e=encodeURIComponent;let n="?";for(const o in t)if(t.hasOwnProperty(o)){const s=e(o)+"="+e(t[o]);n=n+s+"&"}return n=n.slice(0,-1),n}var B;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(B||(B={}));/**
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
 */function yn(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||s||a}/**
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
 */class wn{constructor(e,n,o,s,a,r,i,u,c,d,l,p=!0){this.url_=e,this.method_=n,this.headers_=o,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=r,this.callback_=i,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=l,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(o,s)=>{if(s){o(!1,new nt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const r=i=>{const u=i.loaded,c=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&a.addUploadProgressListener(r),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(r),this.pendingConnection_=null;const i=a.getErrorCode()===B.NO_ERROR,u=a.getStatus();if(!i||yn(u,this.additionalRetryCodes_)&&this.retry){const d=a.getErrorCode()===B.ABORT;o(!1,new nt(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;o(!0,new nt(c,a))})},n=(o,s)=>{const a=this.resolve_,r=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(i,i.getResponse());mn(u)?a(u):a()}catch(u){r(u)}else if(i!==null){const u=At();u.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,u)):r(u)}else if(s.canceled){const u=this.appDelete_?re():sn();r(u)}else{const u=on();r(u)}};this.canceled_?n(!1,new nt(!1,null,!0)):this.backoffId_=pn(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,n,o){this.wasSuccessCode=e,this.connection=n,this.canceled=!!o}}function _n(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vn(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tn(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Dn(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Sn(t,e,n,o,s,a,r=!0){const i=ce(t.urlParams),u=t.url+i,c=Object.assign({},t.headers);return Tn(c,e),_n(c,n),vn(c,a),Dn(c,o),new wn(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r)}/**
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
 */function bn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function An(...t){const e=bn();if(e!==void 0){const n=new e;for(let o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}else{if(Rt())return new Blob(t);throw new T(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kn(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Rn(t){if(typeof atob>"u")throw dn("base-64");return atob(t)}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gt{constructor(e,n){this.data=e,this.contentType=n||null}}function En(t,e){switch(t){case N.RAW:return new gt(ie(e));case N.BASE64:case N.BASE64URL:return new gt(le(t,e));case N.DATA_URL:return new gt(Un(e),Mn(e))}throw At()}function ie(t){const e=[];for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);if(o<=127)e.push(o);else if(o<=2047)e.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=o,r=t.charCodeAt(++n);o=65536|(a&1023)<<10|r&1023,e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?e.push(239,191,189):e.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(e)}function Cn(t){let e;try{e=decodeURIComponent(t)}catch{throw Y(N.DATA_URL,"Malformed data URL.")}return ie(e)}function le(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Rn(e)}catch(s){throw s.message.includes("polyfill")?s:Y(t,"Invalid character found")}const o=new Uint8Array(n.length);for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return o}class ue{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Y(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=n[1]||null;o!=null&&(this.base64=Nn(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=e.substring(e.indexOf(",")+1)}}function Un(t){const e=new ue(t);return e.base64?le(N.BASE64,e.rest):Cn(e.rest)}function Mn(t){return new ue(t).contentType}function Nn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class P{constructor(e,n){let o=0,s="";Gt(e)?(this.data_=e,o=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),o=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),o=e.length),this.size_=o,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Gt(this.data_)){const o=this.data_,s=kn(o,e,n);return s===null?null:new P(s)}else{const o=new Uint8Array(this.data_.buffer,e,n-e);return new P(o,!0)}}static getBlob(...e){if(Rt()){const n=e.map(o=>o instanceof P?o.data_:o);return new P(An.apply(null,n))}else{const n=e.map(r=>kt(r)?En(N.RAW,r).data:r.data_);let o=0;n.forEach(r=>{o+=r.byteLength});const s=new Uint8Array(o);let a=0;return n.forEach(r=>{for(let i=0;i<r.length;i++)s[a++]=r[i]}),new P(s,!0)}}uploadData(){return this.data_}}/**
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
 */function de(t){let e;try{e=JSON.parse(t)}catch{return null}return In(e)?e:null}/**
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
 */function On(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Pn(t,e){const n=e.split("/").filter(o=>o.length>0).join("/");return t.length===0?n:t+"/"+n}function he(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function xn(t,e){return e}class b{constructor(e,n,o,s){this.server=e,this.local=n||e,this.writable=!!o,this.xform=s||xn}}let ot=null;function Ln(t){return!kt(t)||t.length<2?t:he(t)}function fe(){if(ot)return ot;const t=[];t.push(new b("bucket")),t.push(new b("generation")),t.push(new b("metageneration")),t.push(new b("name","fullPath",!0));function e(a,r){return Ln(r)}const n=new b("name");n.xform=e,t.push(n);function o(a,r){return r!==void 0?Number(r):r}const s=new b("size");return s.xform=o,t.push(s),t.push(new b("timeCreated")),t.push(new b("updated")),t.push(new b("md5Hash",null,!0)),t.push(new b("cacheControl",null,!0)),t.push(new b("contentDisposition",null,!0)),t.push(new b("contentEncoding",null,!0)),t.push(new b("contentLanguage",null,!0)),t.push(new b("contentType",null,!0)),t.push(new b("metadata","customMetadata",!0)),ot=t,ot}function Fn(t,e){function n(){const o=t.bucket,s=t.fullPath,a=new k(o,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Bn(t,e,n){const o={};o.type="file";const s=n.length;for(let a=0;a<s;a++){const r=n[a];o[r.local]=r.xform(o,e[r.server])}return Fn(o,t),o}function pe(t,e,n){const o=de(e);return o===null?null:Bn(t,o,n)}function $n(t,e,n,o){const s=de(e);if(s===null||!kt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const r=encodeURIComponent;return a.split(",").map(c=>{const d=t.bucket,l=t.fullPath,p="/b/"+r(d)+"/o/"+r(l),g=dt(p,n,o),I=ce({alt:"media",token:c});return g+I})[0]}function Gn(t,e){const n={},o=e.length;for(let s=0;s<o;s++){const a=e[s];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Et{constructor(e,n,o,s){this.url=e,this.method=n,this.handler=o,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ge(t){if(!t)throw At()}function jn(t,e){function n(o,s){const a=pe(t,s,e);return ge(a!==null),a}return n}function Hn(t,e){function n(o,s){const a=pe(t,s,e);return ge(a!==null),$n(a,s,t.host,t._protocol)}return n}function me(t){function e(n,o){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=en():s=tn():n.getStatus()===402?s=Ze(t.bucket):n.getStatus()===403?s=nn(t.path):s=o,s.status=n.getStatus(),s.serverResponse=o.serverResponse,s}return e}function Ie(t){const e=me(t);function n(o,s){let a=e(o,s);return o.getStatus()===404&&(a=Qe(t.path)),a.serverResponse=s.serverResponse,a}return n}function Vn(t,e,n){const o=e.fullServerUrl(),s=dt(o,t.host,t._protocol),a="GET",r=t.maxOperationRetryTime,i=new Et(s,a,Hn(t,n),r);return i.errorHandler=Ie(e),i}function qn(t,e){const n=e.fullServerUrl(),o=dt(n,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function r(u,c){}const i=new Et(o,s,r,a);return i.successCodes=[200,204],i.errorHandler=Ie(e),i}function zn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wn(t,e,n){const o=Object.assign({},n);return o.fullPath=t.path,o.size=e.size(),o.contentType||(o.contentType=zn(null,e)),o}function Xn(t,e,n,o,s){const a=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function i(){let C="";for(let A=0;A<2;A++)C=C+Math.random().toString().slice(2);return C}const u=i();r["Content-Type"]="multipart/related; boundary="+u;const c=Wn(e,o,s),d=Gn(c,n),l="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",g=P.getBlob(l,o,p);if(g===null)throw ln();const I={name:c.fullPath},m=dt(a,t.host,t._protocol),y="POST",D=t.maxUploadRetryTime,M=new Et(m,y,jn(t,n),D);return M.urlParams=I,M.headers=r,M.body=g.uploadData(),M.errorHandler=me(e),M}class Kn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,o,s){if(this.sent_)throw J("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw J("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw J("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw J("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw J("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jn extends Kn{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new Jn}/**
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
 */class j{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new j(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return he(this._location.path)}get storage(){return this._service}get parent(){const e=On(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new j(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hn(e)}}function Yn(t,e,n){t._throwIfRoot("uploadBytes");const o=Xn(t.storage,t._location,fe(),new P(e,!0),n);return t.storage.makeRequestWithTokens(o,Ct).then(s=>({metadata:s,ref:t}))}function Qn(t){t._throwIfRoot("getDownloadURL");const e=Vn(t.storage,t._location,fe());return t.storage.makeRequestWithTokens(e,Ct).then(n=>{if(n===null)throw un();return n})}function Zn(t){t._throwIfRoot("deleteObject");const e=qn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function to(t,e){const n=Pn(t._location.path,e),o=new k(t._location.bucket,n);return new j(t.storage,o)}/**
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
 */function eo(t){return/^[A-Za-z]+:\/\//.test(t)}function no(t,e){return new j(t,e)}function ye(t,e){if(t instanceof Ut){const n=t;if(n._bucket==null)throw cn();const o=new j(n,n._bucket);return e!=null?ye(o,e):o}else return e!==void 0?to(t,e):t}function oo(t,e){if(e&&eo(e)){if(t instanceof Ut)return no(t,e);throw Tt("To use ref(service, url), the first argument must be a Storage instance.")}else return ye(t,e)}function Ht(t,e){const n=e==null?void 0:e[ae];return n==null?null:k.makeFromBucketSpec(n,t)}function so(t,e,n,o={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=o;s&&(t._overrideAuthToken=typeof s=="string"?s:be(s,t.app.options.projectId))}class Ut{constructor(e,n,o,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=o,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Ye,this._requests=new Set,s!=null?this._bucket=k.makeFromBucketSpec(s,this._host):this._bucket=Ht(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=Ht(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new j(this,e)}_makeRequest(e,n,o,s,a=!0){if(this._deleted)return new fn(re());{const r=Sn(e,this._appId,o,s,n,this._firebaseVersion,a);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[o,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,o,s).getPromise()}}const Vt="@firebase/storage",qt="0.13.2";/**
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
 */const we="storage";function ao(t,e,n){return t=F(t),Yn(t,e,n)}function _e(t){return t=F(t),Qn(t)}function ro(t){return t=F(t),Zn(t)}function Mt(t,e){return t=F(t),oo(t,e)}function co(t=Yt(),e){t=F(t);const o=Kt(t,we).getImmediate({identifier:e}),s=Jt("storage");return s&&io(o,...s),o}function io(t,e,n,o={}){so(t,e,n,o)}function lo(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ut(n,o,s,e,Ae)}function uo(){Wt(new Xt(we,lo,"PUBLIC").setMultipleInstances(!0)),st(Vt,qt,""),st(Vt,qt,"esm2017")}uo();const Nt=co(ut);async function Io(t,e,n,o){console.log("uploading file"),console.log(`${t}/${e}/${n}`);const s=Mt(Nt,`${t}/${e}/${n}`),a=await ao(s,o);return await _e(a.ref)}async function yo(t,e,n){const o=Mt(Nt,`${t}/${e}/${n}`);await ro(o)}async function ho(t){const e=localStorage.getItem("schoolId"),n=Mt(Nt,`${e}/${t}.json`);try{const o=await _e(n);return(await(await fetch(o)).json()).FCMToken}catch{return null}}const zt=oe(ut);async function H(t,e,n,o){const s=[],a=[];await Promise.all(e.map(async r=>{const i=await ho(r.userId);console.log("FCM Token: ",i),console.log("Email: ",r.email),i?a.push(i):s.push(r.email)})),s.length>0&&lt(zt,"sendEmail")({emails:s,activityId:n.activityId,activityName:o,groupName:n.name,groupId:n.id,message:t.message,senderName:t.senderName}),a.length>0&&lt(zt,"sendNotifications")({targetIds:a,title:`${o} - ${n.name}`,body:`${t.senderName}: ${t.message}`,thread:n.id,data:{type:"activity-chat",activityName:o,activityId:n.activityId,message:t.message,senderName:t.senderName,gcId:n.id,groupName:n.name}})}const ve=oe(ut),w=ke(ut),Ot=f(w,"schools"),fo=async t=>{const e=h(Ot,t);return(await E(e)).data()},wo=async()=>{const t=await S(Ot),e=[];return t.forEach(n=>{e.push(n.data())}),e},_o=async(t,e,n)=>{const o=h(Ot,t);console.log("School ID: "+t),console.log("User ID: "+e),console.log("Account Type: "+n);const s=h(f(o,n+"s"),e);return(await E(s)).exists()},Te=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const n=h(w,"schools",e);if(t=="student"){const o=R(f(n,"activities"),U("studentUids","array-contains",W())),s=[];return(await S(o)).forEach(r=>{s.push($.fromMap(r.data()))}),s}else{const o=R(f(n,"activities"),U("teacherUids","array-contains",W())),s=[];return(await S(o)).forEach(r=>{console.log(r.data()),s.push($.fromMap(r.data()))}),s}};async function po(t){const e=localStorage.getItem("schoolId");if(!e)return null;const n=h(w,"schools",e),o=h(f(n,"activities"),t),s=await E(o);return s.exists()?s.data().type=="theater"?Q.fromMap(s.data()):$.fromMap(s.data()):null}async function vo(t){const e=localStorage.getItem("schoolId");if(!e)return"";const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"shows"),a=await G(s,t.toMap());return t.id=a.id,await _(a,{id:a.id}),a.id}async function To(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"shows"),t.id);await _(s,t.toMap())}async function Do(t){const e=f(w,"showTemplates"),n=await G(e,t.toMap());return t.id=n.id,await _(n,{id:n.id}),n.id}async function So(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=h(w,"schools",n),s=h(f(o,"activities"),t),a=h(f(s,"shows"),e),r=await E(a);return r.exists()?(console.log(r.data()),Dt.fromMap(r.data())):null}async function bo(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const n=h(w,"schools",e),o=h(f(n,"activities"),t),s=await E(o);if(!s.exists())return[];const a=[];return s.data().students.forEach(r=>{a.push(z.fromMap(r))}),a}async function Ao(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e);await X(r,n.toMap())}async function ko(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"events");console.log("Adding event"),console.log(t.toMap());const a=await G(s,t.toMap());t.id=a.id,await _(a,{id:a.id})}async function Ro(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=h(w,"schools",n),a=h(f(s,"activities"),t),r=f(a,"events");if(o=="student"){const i=await S(R(r,U("showId","==",e),U("targetUids","array-contains",W()))),u=[];return i.forEach(c=>{c.data().deleted||u.push(Z.fromMap(c.data()))}),u}else{const i=await S(R(r,U("showId","==",e))),u=[];return i.forEach(c=>{c.data().deleted||u.push(Z.fromMap(c.data()))}),u}}async function Eo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await _(s,{deleted:!0}),await lt(ve,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function De(t){const e=localStorage.getItem("schoolId");if(!e)return[];const n=h(w,"schools",e),o=h(f(n,"activities"),t),s=f(o,"shows"),a=await S(s),r=[];return a.forEach(i=>{r.push(Dt.fromMap(i.data()))}),r}async function Co(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e);await _(r,{conflictForm:n.toMap()}),await lt(ve,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:o,deadline:n.deadline.toISOString()})}async function Uo(){const t=W(),e=localStorage.getItem("schoolId");if(!e)return null;const n=h(w,"schools",e),o=h(n,"students",t),s=await E(o);return s.exists()?z.fromMap(s.data()):null}async function Mo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e),i=h(r,"conflictResponses",n.actor.userId);n.id=n.actor.userId,await X(i,n.toMap())}async function No(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=h(w,"schools",n),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e),i=f(r,"conflictResponses");if(o=="student"){console.log("Getting conflict responses for student"),console.log(W());const d=await S(R(i,U("submitterId","==",W()))),l=[];return d.forEach(p=>{l.push(It.fromMap(p.data()))}),l}const u=await S(i),c=[];return u.forEach(d=>{c.push(It.fromMap(d.data()))}),c}async function Oo(){const t=f(w,"showTemplates"),e=await S(t),n=[];return e.forEach(o=>{n.push(Dt.fromMap(o.data()))}),n}async function Po(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+n+" AT: "+o),!e||!n||!o)return null;const s=h(w,"schools",e),a=R(f(s,"activities"),U("joinCode","==",t)),r=await S(a);if(r.empty)return null;const i=r.docs[0],u=h(f(s,o=="student"?"students":"teachers"),n),c=await E(u);if(console.log(c.data()),!c.exists())return null;if(i.data().studentUids.includes(n)||i.data().teacherUids.includes(n))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),i.data().type=="theater"){if((c.data().gender==null||c.data().gender=="")&&o=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),c.data().phoneNumber==""&&o=="student"&&localStorage.setItem("needsPhoneNumber","true"),(c.data().phoneNumber==""||c.data().gender==null||c.data().gender=="")&&o=="student")return null;if(o=="student")return await _(i.ref,{studentUids:[...i.data().studentUids,n],students:[...i.data().students,z.fromMap(c.data()).toMap()]}),Q.fromMap(i.data());{console.log("Joining as teacher"),console.log(c.data());const d=at.fromBlank(c.data().fullname,c.data().email,c.data().phoneNumber,c.data().uid,c.data().FCMToken);return console.log(d.toMap()),await _(i.ref,{teacherUids:[...i.data().teacherUids,n],teachers:[...i.data().teachers,d.toMap()]}),Q.fromMap(i.data())}}else if(o=="student"){const d=z.fromBlank(c.data().fullname,c.data().gender,c.data().email,c.data().phoneNumber,c.data().uid,c.data().FCMToken);return await _(i.ref,{studentUids:[...i.data().studentUids,n],students:[...i.data().students,d.toMap()]}),$.fromMap(i.data())}else{const d=at.fromBlank(c.data().fullname,c.data().email,c.data().phoneNumber,c.data().uid,c.data().FCMToken);return await _(i.ref,{teacherUids:[...i.data().teacherUids,n],teachers:[...i.data().teachers,d.toMap()]}),$.fromMap(i.data())}}async function xo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=h(w,"schools",e),a=h(f(s,o=="student"?"students":"teachers"),n);await _(a,{gender:t})}async function Lo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=h(w,"schools",e),a=h(f(s,o=="student"?"students":"teachers"),n);await _(a,{phoneNumber:t})}async function Fo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await _(s,t.toMap())}async function Bo(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return[];const o=h(w,"schools",t),s=[];let a;n=="student"?a=await S(R(f(o,"activities"),U("studentUids","array-contains",e))):a=await S(R(f(o,"activities"),U("teacherUids","array-contains",e))),console.log(a);for(const r of a.docs){let i;n=="student"?i=await S(R(f(r.ref,"events"),U("targetUids","array-contains",e))):i=await S(f(r.ref,"events"));for(const u of i.docs){const c=u.data();console.log(c),c.type=="activity-theater-event"?s.push(Z.fromMap(c)):s.push(Ce.fromMap(c))}}return s}async function $o(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return null;const s=h(w,"schools",n),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e),i=f(r,"conflictResponses"),u=await E(h(i,o));return u.exists()?It.fromMap(u.data()):null}async function Go(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=h(f(o,"activities"),t);await _(s,{rehearsalLocations:e.map(a=>a.toMap())})}async function jo(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return[];const s=localStorage.getItem("accountType"),a=h(w,"schools",n),r=h(f(a,"activities"),t);if(s=="teacher")yt(f(r,"groupChats"),async i=>{const u=[];for(const c of i.docs){const d=x.fromMap(c.data());if((d.generalTarget=="direct"||d.generalTarget=="custom")&&!d.members.find(I=>I.userId==o))continue;if(d.generalTarget=="direct"){const I=d.members.find(m=>m.userId!=o);d.name=(I==null?void 0:I.name)||"Unknown"}const l=f(c.ref,"messages"),p=R(l,Lt("timeSent","desc"),xt(1)),g=await S(p);g.empty||(d.lastMessage=wt.fromMap(g.docs[0].data())),u.push(d)}u.sort((c,d)=>c.lastMessage?d.lastMessage?d.lastMessage.timeSent.getTime()-c.lastMessage.timeSent.getTime():-1:1),e(u)});else{const i=h(f(a,"students"),o),u=await E(i);if(!u.exists())return;const c=St.fromMap(u.data());console.log(c),yt(f(r,"groupChats"),async d=>{const l=[];for(const p of d.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(D=>D.userId==o)))continue;if(g.generalTarget=="direct"){const D=g.members.find(M=>M.userId!=o);g.name=(D==null?void 0:D.name)||"Unknown"}const I=f(p.ref,"messages"),m=R(I,Lt("timeSent","desc"),xt(1)),y=await S(m);y.empty||(g.lastMessage=wt.fromMap(y.docs[0].data())),l.push(g)}l.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(l)})}}async function Ho(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return[];const s=h(w,"schools",o),a=h(f(s,"activities"),t);console.log("Getting messages for "+e);const r=h(f(a,"groupChats"),e),i=f(r,"messages");yt(i,u=>{const c=[];u.forEach(d=>{c.push(wt.fromMap(d.data()))}),c.sort((d,l)=>d.timeSent.getTime()-l.timeSent.getTime()),n(c)})}async function Pt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return null;const o=h(w,"schools",t),s=h(f(o,n=="student"?"students":"teachers"),e),a=await E(s);return a.exists()?n=="student"?St.fromMap(a.data()):Re.fromMap(a.data()):null}async function Vo(t,e,n,o,s){if(n.message=="")return;const a=localStorage.getItem("schoolId"),r=localStorage.getItem("userId");if(!a||!r)return;const i=h(w,"schools",a),u=h(f(i,"activities"),t),c=h(f(u,"groupChats"),e),d=await E(c);if(!d.exists()){if(s==null)return;const I=await Pt();if(!I)return;const m=x.fromBlank("",s.userId,[te.fromBlank(I.fullname,I.email,I.phoneNumber,I.FCMToken,I.uid),s],"direct",t,Date.now());await X(c,m.toMap());const y=f(c,"messages"),D=await G(y,n.toMap());n.messageId=D.id,await _(D,{messageId:D.id}),H(n,[O.fromBlank(s.userId,s.email)],m,o);return}const l=x.fromMap(d.data()),p=f(c,"messages"),g=await G(p,n.toMap());if(n.messageId=g.id,await _(g,{messageId:g.id}),l.generalTarget!="direct"&&l.generalTarget!="custom"&&l.generalTarget!="group"){const I=await po(t);if(!I)return;if(l.generalTarget=="everyone"){let m=I.students.map(y=>O.fromBlank(y.userId,y.email));m=m.concat(I.teachers.map(y=>O.fromBlank(y.userId,y.email))),m=m.concat(I.parents.map(y=>O.fromBlank(y.userId,y.email))),m=m.filter(y=>y.userId!=n.senderUid),H(n,m,l,I.name)}else if(l.generalTarget=="students"){let m=I.students.map(y=>O.fromBlank(y.userId,y.email));m=m.filter(y=>y.userId!=n.senderUid),H(n,m,l,I.name)}else if(l.generalTarget=="parents"){let m=I.parents.map(y=>O.fromBlank(y.userId,y.email));m=m.filter(y=>y.userId!=n.senderUid),H(n,m,l,I.name)}return}if(l.generalTarget=="direct"){const I=l.members.find(m=>m.userId!=r);if(!I)return;H(n,[O.fromBlank(I.userId,I.email)],l,o);return}if(l.generalTarget=="custom"){const I=l.members.filter(m=>m.userId!=r).map(m=>O.fromBlank(m.userId,m.email));H(n,I,l,o);return}}async function mt(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"groupChats"),a=await Pt();if(!a)return;const r=te.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(r);const i=await G(s,t.toMap());t.id=i.id,await _(i,{id:i.id})}async function qo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e);_(r,{resources:L(n.toMap())})}async function zo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e);_(r,{resources:Ue(n.toMap())})}async function Wo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(w,"schools",o),a=h(f(s,"activities"),t),r=h(f(a,"shows"),e),i=f(r,"conflictResponses"),u=h(i,n.id);await Ee(u)}async function Xo(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=f(o,t+"s");await X(h(s,e.uid),e.toMap());let a;e instanceof St?a=z.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=at.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await _(o,{[t+"Uids"]:L(e.uid),[t+"s"]:L(a.toMap())})}function go(t){const e=new Date,n=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${n.slice(-2)}`}async function Ko(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=h(w,"schools",n),s=await E(o);if(!s.exists())return null;const a=s.data(),r=f(o,"activities"),i=go(t),u=[et.fromMap({name:"Rehearsal",color:K("#FF0000")}),et.fromMap({name:"Performance",color:K("#00FF00")})],c=[et.fromMap({name:"Practice",color:K("#FF0000")}),et.fromMap({name:"Game",color:K("#00FF00")})],d=[Me.fromMap({name:"Auditorium",color:K("#0000FF")})],l=ee.fromMap(a.location),p=[l],g=await Pt();if(!g)return null;const I=at.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let m;e=="theater"?m=Q.fromBlank(t,"",i,[],[],[],[I],p,u,l,d,"type",Date.now()):m=$.fromBlank(t,"",i,[],[],[],[I],p,c,l,"type",Date.now(),"activity");const y=await G(r,m.toMap());m.id=y.id,await _(y,{id:y.id});const D=x.fromMap({name:"Everyone",members:[],id:"",activityId:m.id,lastUpdated:Date.now(),generalTarget:"everyone"});await mt(D);const M=x.fromMap({name:"Parents",members:[],id:"",activityId:m.id,lastUpdated:Date.now(),generalTarget:"parents"});await mt(M);const C=x.fromMap({name:"Students",members:[],id:"",activityId:m.id,lastUpdated:Date.now(),generalTarget:"students"});return await mt(C),m}async function Jo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return null;const s=h(w,"schools",o),a=h(f(s,"activities"),n),r=f(a,"groupChats"),i=x.fromBlank("",e.userId,[t,e],"direct",n,Date.now());return await X(h(r,e.userId),i.toMap()),i.name=e.name,i}async function Yo(){const t=await fo(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(n=>{e.push(ee.fromMap(n))}),e}async function Qo(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=h(f(o,"activities"),t);await _(s,{locations:L(e.toMap())})}async function Zo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e);await _(n,{savedLocations:L(t.toMap())})}async function ts(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=h(f(o,"activities"),t);await _(s,{eventTypes:L(e.toMap())})}async function es(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=h(f(o,"activities"),t),a=h(f(s,"shows"),e);await _(a,{isCreatingSchedule:!0})}async function ns(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(w,"schools",n),s=f(o,"students");await X(h(s,t.uid),t.toMap());const a=z.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await _(o,{studentUids:L(t.uid),students:L(a.toMap())});const r=a.userId;if(!n||!r)return null;const i=h(f(o,"activities"),e),u=await E(i);return u.exists()?u.data().type=="theater"?(await _(u.ref,{studentUids:[...u.data().studentUids,r],students:[...u.data().students,a.toMap()]}),Q.fromMap(u.data())):(await _(u.ref,{studentUids:[...u.data().studentUids,r],students:[...u.data().students,a.toMap()]}),$.fromMap(u.data())):null}async function os(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=R(f(o,"events"),U("showId","==",t.id)),a=await S(s);for(const r of a.docs){const i=Z.fromMap(r.data());for(let c=0;c<i.characters.length;c++){const d=i.characters[c];d instanceof V?i.characters[c]=t.characters.find(l=>l.name==d.name):d instanceof rt&&(i.characters[c]=t.showGroups.find(l=>l.name==d.name))}const u=[];for(const c of i.characters){if(c instanceof Zt){for(const d of t.ensemble.actors)u.push(d);for(const d of t.characters)u.find(l=>l.userId==d.actor.userId)==null&&u.push(d.actor);break}if(c instanceof V){if(u.find(d=>d.userId==c.actor.userId)!=null)continue;u.push(c.actor)}if(c instanceof ct){if(c.includeAll)for(const d of t.ensemble.actors)u.find(l=>l.userId==d.userId)==null&&u.push(d);else if(c.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(u.find(l=>l.userId==d.userId)!=null)continue;u.push(d)}}else if(c.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(u.find(l=>l.userId==d.userId)!=null)continue;u.push(d)}}else if(c.includeCustom)for(const d of c.customActors)u.find(l=>l.userId==d.userId)==null&&u.push(d)}if(c instanceof rt)for(const d of c.characters){if(d instanceof V){if(u.find(l=>l.userId==d.actor.userId)!=null)continue;u.push(d.actor)}if(d instanceof ct){if(d.includeAll)for(const l of t.ensemble.actors)u.find(p=>p.userId==l.userId)==null&&u.push(l);else if(d.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(u.find(p=>p.userId==l.userId)!=null)continue;u.push(l)}}else if(d.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(u.find(p=>p.userId==l.userId)!=null)continue;u.push(l)}}else if(d.includeCustom)for(const l of d.customActors)u.find(p=>p.userId==l.userId)==null&&u.push(l)}}}i.targets=u,i.lastUpdated=Date.now(),await _(r.ref,i.toMap())}}async function ss(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(w,"schools",e),o=h(f(n,"activities"),t.activityId),s=R(f(o,"events"),U("showId","==",t.id)),a=await S(s);for(const r of a.docs){const i=Z.fromMap(r.data()),u=[];for(let d=0;d<i.characters.length;d++){const l=i.characters[d];if(l instanceof V){const p=t.characters.find(g=>g.characterId==l.characterId);p&&u.push(p)}else if(l instanceof rt){const p=t.showGroups.find(g=>g.showGroupId==l.showGroupId);p&&u.push(p)}i.characters=u}const c=[];for(const d of u){if(d instanceof Zt){for(const l of t.ensemble.actors)c.push(l);for(const l of t.characters)c.find(p=>p.userId==l.actor.userId)==null&&c.push(l.actor);break}if(d instanceof V){if(c.find(l=>l.userId==d.actor.userId)!=null)continue;c.push(d.actor)}if(d instanceof ct){if(d.includeAll)for(const l of t.ensemble.actors)c.find(p=>p.userId==l.userId)==null&&c.push(l);else if(d.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(c.find(p=>p.userId==l.userId)!=null)continue;c.push(l)}}else if(d.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(c.find(p=>p.userId==l.userId)!=null)continue;c.push(l)}}else if(d.includeCustom)for(const l of d.customActors)c.find(p=>p.userId==l.userId)==null&&c.push(l)}if(d instanceof rt)for(const l of d.characters){if(l instanceof V){if(c.find(p=>p.userId==l.actor.userId)!=null)continue;c.push(l.actor)}if(l instanceof ct){if(l.includeAll)for(const p of t.ensemble.actors)c.find(g=>g.userId==p.userId)==null&&c.push(p);else if(l.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(c.find(g=>g.userId==p.userId)!=null)continue;c.push(p)}}else if(l.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(c.find(g=>g.userId==p.userId)!=null)continue;c.push(p)}}else if(l.includeCustom)for(const p of l.customActors)c.find(g=>g.userId==p.userId)==null&&c.push(p)}}}i.targets=c,i.lastUpdated=Date.now(),await _(r.ref,i.toMap())}}async function as(){if(!localStorage.getItem("schoolId"))return[];const e=await Te(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await De(o.id);for(const a of s)console.log("Getting resources for "+a.name),n.push(...a.resources)}return n}async function rs(){if(!localStorage.getItem("schoolId"))return[];const e=await Te(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await De(o.id);for(const a of s)a.activityName=o.name,n.push(a)}return n}export{Co as A,Wo as B,Uo as C,Mo as D,Bo as E,$o as F,Go as G,Qo as H,Zo as I,ts as J,Yo as K,mt as L,Vo as M,Ho as N,jo as O,Jo as P,Io as Q,qo as R,yo as S,zo as T,ns as U,as as V,rs as W,_o as a,wo as b,Xo as c,xo as d,Ko as e,Te as f,Pt as g,po as h,De as i,Po as j,Oo as k,vo as l,Do as m,To as n,ss as o,So as p,bo as q,os as r,es as s,Ao as t,Lo as u,No as v,Ro as w,Eo as x,Fo as y,ko as z};
