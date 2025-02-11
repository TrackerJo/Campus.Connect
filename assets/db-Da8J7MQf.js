import{_ as Jt,P as Yt,Q as at,U as Qt,V as B,W as Zt,X as te,Y as ee,Z as Ae,$ as ke,a0 as dt,a1 as Re,a2 as f,a3 as h,a4 as k,y as tt,m as G,a5 as L,a6 as v,g as bt,k as W,a7 as _,a8 as b,a9 as A,u as X,o as j,aa as K,t as wt,ab as vt,S as At,T as Ee,ac as F,ad as Me,ae as ct,C as V,e as rt,F as oe,E as it,L as lt,I as ht,x as Q,z as x,af as Bt,ag as $t,M as _t,B as ne,ah as O,ai as Ue,aj as J,v as Ce}from"./index-TIL8WiPk.js";/**
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
 */const Ne="type.googleapis.com/google.protobuf.Int64Value",Oe="type.googleapis.com/google.protobuf.UInt64Value";function se(t,e){const o={};for(const n in t)t.hasOwnProperty(n)&&(o[n]=e(t[n]));return o}function Tt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Tt(e));if(typeof t=="function"||typeof t=="object")return se(t,e=>Tt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ut(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ne:case Oe:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ut(e)):typeof t=="function"||typeof t=="object"?se(t,e=>ut(e)):t}/**
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
 */const kt="functions";/**
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
 */const Gt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends ee{constructor(e,o,n){super(`${kt}/${e}`,o||""),this.details=n}}function Pe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function xe(t,e){let o=Pe(t),n=o,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Gt[c])return new z("internal","internal");o=Gt[c],n=c}const i=a.message;typeof i=="string"&&(n=i),s=a.details,s!==void 0&&(s=ut(s))}}catch{}return o==="ok"?null:new z(o,n,s)}/**
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
 */class Le{constructor(e,o,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||o.get().then(s=>this.messaging=s,()=>{}),this.appCheck||n.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const o=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(e){const o=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:o,messagingToken:n,appCheckToken:s}}}/**
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
 */const Dt="us-central1";function Fe(t){let e=null;return{promise:new Promise((o,n)=>{e=setTimeout(()=>{n(new z("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Be{constructor(e,o,n,s,a=Dt,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Le(o,n,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(a);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=Dt}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function $e(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function Ge(t,e,o){return n=>He(t,e,n,{})}async function je(t,e,o,n){o["Content-Type"]="application/json";let s;try{s=await n(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function He(t,e,o,n){const s=t._url(e);return qe(t,s,o,n)}async function qe(t,e,o,n){o=Tt(o);const s={data:o},a={},c=await t.contextProvider.getContext(n.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const i=n.timeout||7e4,l=Fe(i),r=await Promise.race([je(e,s,a,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!r)throw new z("cancelled","Firebase Functions instance was deleted.");const u=xe(r.status,r.json);if(u)throw u;if(!r.json)throw new z("internal","Response is not valid JSON object.");let d=r.json.data;if(typeof d>"u"&&(d=r.json.result),typeof d>"u")throw new z("internal","Response is missing data field.");return{data:ut(d)}}const jt="@firebase/functions",Ht="0.11.8";/**
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
 */const Ve="auth-internal",ze="app-check-internal",We="messaging-internal";function Xe(t,e){const o=(n,{instanceIdentifier:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider(Ve),i=n.getProvider(We),l=n.getProvider(ze);return new Be(a,c,i,l,s,t)};Jt(new Yt(kt,o,"PUBLIC").setMultipleInstances(!0)),at(jt,Ht,e),at(jt,Ht,"esm2017")}/**
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
 */function ae(t=te(),e=Dt){const n=Qt(B(t),kt).getImmediate({identifier:e}),s=Zt("functions");return s&&Ke(n,...s),n}function Ke(t,e,o){$e(B(t),e,o)}function et(t,e,o){return Ge(B(t),e)}Xe(fetch.bind(self));/**
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
 */const ce="firebasestorage.googleapis.com",re="storageBucket",Je=2*60*1e3,Ye=10*60*1e3;/**
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
 */class D extends ee{constructor(e,o,n=0){super(mt(e),`Firebase Storage: ${o} (${mt(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function mt(t){return"storage/"+t}function Rt(){const t="An unknown error occurred, please check the error payload for server response.";return new D(T.UNKNOWN,t)}function Qe(t){return new D(T.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ze(t){return new D(T.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function to(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(T.UNAUTHENTICATED,t)}function eo(){return new D(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function oo(t){return new D(T.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function no(){return new D(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function so(){return new D(T.CANCELED,"User canceled the upload/download.")}function ao(t){return new D(T.INVALID_URL,"Invalid URL '"+t+"'.")}function co(t){return new D(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ro(){return new D(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function io(){return new D(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lo(){return new D(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uo(t){return new D(T.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function St(t){return new D(T.INVALID_ARGUMENT,t)}function ie(){return new D(T.APP_DELETED,"The Firebase app was deleted.")}function ho(t){return new D(T.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Z(t,e){return new D(T.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Y(t){throw new D(T.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class M{constructor(e,o){this.bucket=e,this.path_=o}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,o){let n;try{n=M.makeFromUrl(e,o)}catch{return new M(e,"")}if(n.path==="")return n;throw co(e)}static makeFromUrl(e,o){let n=null;const s="([A-Za-z0-9.\\-_]+)";function a(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const c="(/(.*))?$",i=new RegExp("^gs://"+s+c,"i"),l={bucket:1,path:3};function r(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",d=o.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${s}/o${p}`,"i"),g={bucket:1,path:3},y=o===ce?"(?:storage.googleapis.com|storage.cloud.google.com)":o,w="([^?#]*)",S=new RegExp(`^https?://${y}/${s}/${w}`,"i"),U=[{regex:i,indices:l,postModify:a},{regex:m,indices:g,postModify:r},{regex:S,indices:{bucket:1,path:2},postModify:r}];for(let E=0;E<U.length;E++){const ot=U[E],pt=ot.regex.exec(e);if(pt){const be=pt[ot.indices.bucket];let gt=pt[ot.indices.path];gt||(gt=""),n=new M(be,gt),ot.postModify(n);break}}if(n==null)throw ao(e);return n}}class fo{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function po(t,e,o){let n=1,s=null,a=null,c=!1,i=0;function l(){return i===2}let r=!1;function u(...w){r||(r=!0,e.apply(null,w))}function d(w){s=setTimeout(()=>{s=null,t(m,l())},w)}function p(){a&&clearTimeout(a)}function m(w,...S){if(r){p();return}if(w){p(),u.call(null,w,...S);return}if(l()||c){p(),u.call(null,w,...S);return}n<64&&(n*=2);let U;i===1?(i=2,U=0):U=(n+Math.random())*1e3,d(U)}let g=!1;function y(w){g||(g=!0,p(),!r&&(s!==null?(w||(i=2),clearTimeout(s),d(0)):w||(i=1)))}return d(0),a=setTimeout(()=>{c=!0,y(!0)},o),y}function go(t){t(!1)}/**
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
 */function mo(t){return t!==void 0}function Io(t){return typeof t=="object"&&!Array.isArray(t)}function Et(t){return typeof t=="string"||t instanceof String}function qt(t){return Mt()&&t instanceof Blob}function Mt(){return typeof Blob<"u"}function Vt(t,e,o,n){if(n<e)throw St(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>o)throw St(`Invalid value for '${t}'. Expected ${o} or less.`)}/**
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
 */function ft(t,e,o){let n=e;return o==null&&(n=`https://${e}`),`${o}://${n}/v0${t}`}function le(t){const e=encodeURIComponent;let o="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);o=o+s+"&"}return o=o.slice(0,-1),o}var $;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($||($={}));/**
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
 */function yo(t,e){const o=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return o||s||a}/**
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
 */class wo{constructor(e,o,n,s,a,c,i,l,r,u,d,p=!0){this.url_=e,this.method_=o,this.headers_=n,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=i,this.errorCallback_=l,this.timeout_=r,this.progressCallback_=u,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new nt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=i=>{const l=i.loaded,r=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,r)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const i=a.getErrorCode()===$.NO_ERROR,l=a.getStatus();if(!i||yo(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===$.ABORT;n(!1,new nt(!1,null,u));return}const r=this.successCodes_.indexOf(l)!==-1;n(!0,new nt(r,a))})},o=(n,s)=>{const a=this.resolve_,c=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(i,i.getResponse());mo(l)?a(l):a()}catch(l){c(l)}else if(i!==null){const l=Rt();l.serverResponse=i.getErrorText(),this.errorCallback_?c(this.errorCallback_(i,l)):c(l)}else if(s.canceled){const l=this.appDelete_?ie():so();c(l)}else{const l=no();c(l)}};this.canceled_?o(!1,new nt(!1,null,!0)):this.backoffId_=po(e,o,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&go(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,o,n){this.wasSuccessCode=e,this.connection=o,this.canceled=!!n}}function vo(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _o(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function To(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Do(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function So(t,e,o,n,s,a,c=!0){const i=le(t.urlParams),l=t.url+i,r=Object.assign({},t.headers);return To(r,e),vo(r,o),_o(r,a),Do(r,n),new wo(l,t.method,r,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function bo(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ao(...t){const e=bo();if(e!==void 0){const o=new e;for(let n=0;n<t.length;n++)o.append(t[n]);return o.getBlob()}else{if(Mt())return new Blob(t);throw new D(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ko(t,e,o){return t.webkitSlice?t.webkitSlice(e,o):t.mozSlice?t.mozSlice(e,o):t.slice?t.slice(e,o):null}/**
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
 */function Ro(t){if(typeof atob>"u")throw uo("base-64");return atob(t)}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class It{constructor(e,o){this.data=e,this.contentType=o||null}}function Eo(t,e){switch(t){case N.RAW:return new It(ue(e));case N.BASE64:case N.BASE64URL:return new It(de(t,e));case N.DATA_URL:return new It(Uo(e),Co(e))}throw Rt()}function ue(t){const e=[];for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(o<t.length-1&&(t.charCodeAt(o+1)&64512)===56320))e.push(239,191,189);else{const a=n,c=t.charCodeAt(++o);n=65536|(a&1023)<<10|c&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Mo(t){let e;try{e=decodeURIComponent(t)}catch{throw Z(N.DATA_URL,"Malformed data URL.")}return ue(e)}function de(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Z(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Z(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let o;try{o=Ro(e)}catch(s){throw s.message.includes("polyfill")?s:Z(t,"Invalid character found")}const n=new Uint8Array(o.length);for(let s=0;s<o.length;s++)n[s]=o.charCodeAt(s);return n}class he{constructor(e){this.base64=!1,this.contentType=null;const o=e.match(/^data:([^,]+)?,/);if(o===null)throw Z(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=o[1]||null;n!=null&&(this.base64=No(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Uo(t){const e=new he(t);return e.base64?de(N.BASE64,e.rest):Mo(e.rest)}function Co(t){return new he(t).contentType}function No(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class P{constructor(e,o){let n=0,s="";qt(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(o?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(o?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,o){if(qt(this.data_)){const n=this.data_,s=ko(n,e,o);return s===null?null:new P(s)}else{const n=new Uint8Array(this.data_.buffer,e,o-e);return new P(n,!0)}}static getBlob(...e){if(Mt()){const o=e.map(n=>n instanceof P?n.data_:n);return new P(Ao.apply(null,o))}else{const o=e.map(c=>Et(c)?Eo(N.RAW,c).data:c.data_);let n=0;o.forEach(c=>{n+=c.byteLength});const s=new Uint8Array(n);let a=0;return o.forEach(c=>{for(let i=0;i<c.length;i++)s[a++]=c[i]}),new P(s,!0)}}uploadData(){return this.data_}}/**
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
 */function fe(t){let e;try{e=JSON.parse(t)}catch{return null}return Io(e)?e:null}/**
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
 */function Oo(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Po(t,e){const o=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?o:t+"/"+o}function pe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function xo(t,e){return e}class R{constructor(e,o,n,s){this.server=e,this.local=o||e,this.writable=!!n,this.xform=s||xo}}let st=null;function Lo(t){return!Et(t)||t.length<2?t:pe(t)}function ge(){if(st)return st;const t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(a,c){return Lo(c)}const o=new R("name");o.xform=e,t.push(o);function n(a,c){return c!==void 0?Number(c):c}const s=new R("size");return s.xform=n,t.push(s),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),st=t,st}function Fo(t,e){function o(){const n=t.bucket,s=t.fullPath,a=new M(n,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:o})}function Bo(t,e,o){const n={};n.type="file";const s=o.length;for(let a=0;a<s;a++){const c=o[a];n[c.local]=c.xform(n,e[c.server])}return Fo(n,t),n}function me(t,e,o){const n=fe(e);return n===null?null:Bo(t,n,o)}function $o(t,e,o,n){const s=fe(e);if(s===null||!Et(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(r=>{const u=t.bucket,d=t.fullPath,p="/b/"+c(u)+"/o/"+c(d),m=ft(p,o,n),g=le({alt:"media",token:r});return m+g})[0]}function Go(t,e){const o={},n=e.length;for(let s=0;s<n;s++){const a=e[s];a.writable&&(o[a.server]=t[a.local])}return JSON.stringify(o)}class Ut{constructor(e,o,n,s){this.url=e,this.method=o,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ie(t){if(!t)throw Rt()}function jo(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),a}return o}function Ho(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),$o(a,s,t.host,t._protocol)}return o}function ye(t){function e(o,n){let s;return o.getStatus()===401?o.getErrorText().includes("Firebase App Check token is invalid")?s=eo():s=to():o.getStatus()===402?s=Ze(t.bucket):o.getStatus()===403?s=oo(t.path):s=n,s.status=o.getStatus(),s.serverResponse=n.serverResponse,s}return e}function we(t){const e=ye(t);function o(n,s){let a=e(n,s);return n.getStatus()===404&&(a=Qe(t.path)),a.serverResponse=s.serverResponse,a}return o}function qo(t,e,o){const n=e.fullServerUrl(),s=ft(n,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,i=new Ut(s,a,Ho(t,o),c);return i.errorHandler=we(e),i}function Vo(t,e){const o=e.fullServerUrl(),n=ft(o,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(l,r){}const i=new Ut(n,s,c,a);return i.successCodes=[200,204],i.errorHandler=we(e),i}function zo(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wo(t,e,o){const n=Object.assign({},o);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=zo(null,e)),n}function Xo(t,e,o,n,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function i(){let U="";for(let E=0;E<2;E++)U=U+Math.random().toString().slice(2);return U}const l=i();c["Content-Type"]="multipart/related; boundary="+l;const r=Wo(e,n,s),u=Go(r,o),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+r.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=P.getBlob(d,n,p);if(m===null)throw io();const g={name:r.fullPath},y=ft(a,t.host,t._protocol),w="POST",S=t.maxUploadRetryTime,C=new Ut(y,w,jo(t,o),S);return C.urlParams=g,C.headers=c,C.body=m.uploadData(),C.errorHandler=ye(e),C}class Ko{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,o,n,s){if(this.sent_)throw Y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(o,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Y("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jo extends Ko{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new Jo}/**
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
 */class H{constructor(e,o){this._service=e,o instanceof M?this._location=o:this._location=M.makeFromUrl(o,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,o){return new H(e,o)}get root(){const e=new M(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=Oo(this._location.path);if(e===null)return null;const o=new M(this._location.bucket,e);return new H(this._service,o)}_throwIfRoot(e){if(this._location.path==="")throw ho(e)}}function Yo(t,e,o){t._throwIfRoot("uploadBytes");const n=Xo(t.storage,t._location,ge(),new P(e,!0),o);return t.storage.makeRequestWithTokens(n,Ct).then(s=>({metadata:s,ref:t}))}function Qo(t){t._throwIfRoot("getDownloadURL");const e=qo(t.storage,t._location,ge());return t.storage.makeRequestWithTokens(e,Ct).then(o=>{if(o===null)throw lo();return o})}function Zo(t){t._throwIfRoot("deleteObject");const e=Vo(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function tn(t,e){const o=Po(t._location.path,e),n=new M(t._location.bucket,o);return new H(t.storage,n)}/**
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
 */function en(t){return/^[A-Za-z]+:\/\//.test(t)}function on(t,e){return new H(t,e)}function ve(t,e){if(t instanceof Nt){const o=t;if(o._bucket==null)throw ro();const n=new H(o,o._bucket);return e!=null?ve(n,e):n}else return e!==void 0?tn(t,e):t}function nn(t,e){if(e&&en(e)){if(t instanceof Nt)return on(t,e);throw St("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(t,e)}function zt(t,e){const o=e==null?void 0:e[re];return o==null?null:M.makeFromBucketSpec(o,t)}function sn(t,e,o,n={}){t.host=`${e}:${o}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:Ae(s,t.app.options.projectId))}class Nt{constructor(e,o,n,s,a){this.app=e,this._authProvider=o,this._appCheckProvider=n,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Ye,this._requests=new Set,s!=null?this._bucket=M.makeFromBucketSpec(s,this._host):this._bucket=zt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=M.makeFromBucketSpec(this._url,e):this._bucket=zt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const o=await e.getToken();if(o!==null)return o.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,o,n,s,a=!0){if(this._deleted)return new fo(ie());{const c=So(e,this._appId,n,s,o,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,o){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,o,n,s).getPromise()}}const Wt="@firebase/storage",Xt="0.13.2";/**
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
 */const _e="storage";function an(t,e,o){return t=B(t),Yo(t,e,o)}function Te(t){return t=B(t),Qo(t)}function cn(t){return t=B(t),Zo(t)}function Ot(t,e){return t=B(t),nn(t,e)}function rn(t=te(),e){t=B(t);const n=Qt(t,_e).getImmediate({identifier:e}),s=Zt("storage");return s&&ln(n,...s),n}function ln(t,e,o,n={}){sn(t,e,o,n)}function un(t,{instanceIdentifier:e}){const o=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Nt(o,n,s,e,ke)}function dn(){Jt(new Yt(_e,un,"PUBLIC").setMultipleInstances(!0)),at(Wt,Xt,""),at(Wt,Xt,"esm2017")}dn();const Pt=rn(dt);async function In(t,e,o,n){console.log("uploading file"),console.log(`${t}/${e}/${o}`);const s=Ot(Pt,`${t}/${e}/${o}`),a=await an(s,n);return await Te(a.ref)}async function yn(t,e,o){const n=Ot(Pt,`${t}/${e}/${o}`);await cn(n)}async function hn(t){const e=localStorage.getItem("schoolId"),o=Ot(Pt,`${e}/${t}.json`);try{const n=await Te(o);return(await(await fetch(n)).json()).FCMToken}catch{return null}}const Kt=ae(dt);async function q(t,e,o,n){const s=[],a=[];await Promise.all(e.map(async c=>{const i=await hn(c.userId);console.log("FCM Token: ",i),console.log("Email: ",c.email),i?a.push(i):s.push(c.email)})),s.length>0&&et(Kt,"sendEmail")({emails:s,activityId:o.activityId,activityName:n,groupName:o.name,groupId:o.id,message:t.message,senderName:t.senderName}),a.length>0&&et(Kt,"sendNotifications")({targetIds:a,title:`${n} - ${o.name}`,body:`${t.senderName}: ${t.message}`,thread:o.id,data:{type:"activity-chat",activityName:n,activityId:o.activityId,message:t.message,senderName:t.senderName,gcId:o.id,groupName:o.name}})}const xt=ae(dt),I=Re(dt),Lt=f(I,"schools"),fn=async t=>{const e=h(Lt,t);return(await k(e)).data()},wn=async()=>{const t=await _(Lt),e=[];return t.forEach(o=>{e.push(o.data())}),e},vn=async(t,e,o)=>{const n=h(Lt,t);console.log("School ID: "+t),console.log("User ID: "+e),console.log("Account Type: "+o);const s=h(f(n,o+"s"),e);return(await k(s)).exists()},De=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=h(I,"schools",e);if(t=="student"){const n=b(f(o,"activities"),A("studentUids","array-contains",X())),s=[];return(await _(n)).forEach(c=>{s.push(G.fromMap(c.data()))}),s}else{const n=b(f(o,"activities"),A("teacherUids","array-contains",X())),s=[];return(await _(n)).forEach(c=>{console.log(c.data()),s.push(G.fromMap(c.data()))}),s}};async function pn(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=await k(n);return s.exists()?s.data().type=="theater"?tt.fromMap(s.data()):G.fromMap(s.data()):null}async function _n(t){const e=localStorage.getItem("schoolId");if(!e)return"";const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"shows"),a=await L(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function Tn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"shows"),t.id);await v(s,t.toMap())}async function Dn(t){const e=f(I,"showTemplates"),o=await L(e,t.toMap());return t.id=o.id,await v(o,{id:o.id}),o.id}async function Sn(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(I,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e),c=await k(a);return c.exists()?(console.log(c.data()),bt.fromMap(c.data())):null}async function bn(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=await k(n);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(W.fromMap(c))}),a}async function An(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await K(c,o.toMap())}async function kn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events");console.log("Adding event"),console.log(t.toMap());const a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Rn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events"),a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function En(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=f(a,"events");if(n=="student"){const i=await _(b(c,A("showId","==",e),A("targetUids","array-contains",X()))),l=[];return i.forEach(r=>{r.data().deleted||l.push(j.fromMap(r.data()))}),l}else{const i=await _(b(c,A("showId","==",e))),l=[];return i.forEach(r=>{r.data().deleted||l.push(j.fromMap(r.data()))}),l}}async function Mn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,{deleted:!0}),await et(xt,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Un(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,{deleted:!0}),await et(xt,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Se(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=f(n,"shows"),a=await _(s),c=[];return a.forEach(i=>{c.push(bt.fromMap(i.data()))}),c}async function Cn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await v(c,{conflictForm:o.toMap()}),await et(xt,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:n,deadline:o.deadline.toISOString()})}async function Nn(){const t=X(),e=localStorage.getItem("schoolId");if(!e)return null;const o=h(I,"schools",e),n=h(o,"students",t),s=await k(n);return s.exists()?W.fromMap(s.data()):null}async function On(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=h(c,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await K(i,o.toMap())}async function Pn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(X());const u=await _(b(i,A("submitterId","==",X()))),d=[];return u.forEach(p=>{d.push(wt.fromMap(p.data()))}),d}const l=await _(i),r=[];return l.forEach(u=>{r.push(wt.fromMap(u.data()))}),r}async function xn(){const t=f(I,"showTemplates"),e=await _(t),o=[];return e.forEach(n=>{o.push(bt.fromMap(n.data()))}),o}async function Ln(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+n),!e||!o||!n)return null;const s=h(I,"schools",e),a=b(f(s,"activities"),A("joinCode","==",t)),c=await _(a);if(c.empty)return null;const i=c.docs[0],l=h(f(s,n=="student"?"students":"teachers"),o),r=await k(l);if(console.log(r.data()),!r.exists())return null;if(i.data().studentUids.includes(o)||i.data().teacherUids.includes(o))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),i.data().type=="theater"){if((r.data().gender==null||r.data().gender=="")&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),r.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(r.data().phoneNumber==""||r.data().gender==null||r.data().gender=="")&&n=="student")return null;if(n=="student")return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,W.fromMap(r.data()).toMap()]}),tt.fromMap(i.data());{console.log("Joining as teacher"),console.log(r.data());const u=ct.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return console.log(u.toMap()),await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,u.toMap()]}),tt.fromMap(i.data())}}else if(n=="student"){const u=W.fromBlank(r.data().fullname,r.data().gender,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,u.toMap()]}),G.fromMap(i.data())}else{const u=ct.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,u.toMap()]}),G.fromMap(i.data())}}async function Fn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(I,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await v(a,{gender:t})}async function Bn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(I,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await v(a,{phoneNumber:t})}async function $n(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,t.toMap())}async function Gn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,t.toMap())}async function jn(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const n=h(I,"schools",t),s=[];let a;o=="student"?a=await _(b(f(n,"activities"),A("studentUids","array-contains",e))):a=await _(b(f(n,"activities"),A("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const i=[];o=="student"?(console.log("Getting events for student"),i.push(await _(b(f(c.ref,"events"),A("targetUids","array-contains",e)))),i.push(await _(b(f(c.ref,"events"),A("generalTarget","==","students"))))):(console.log("Getting events for teacher"),i.push(await _(f(c.ref,"events"))));for(const l of i)for(const r of l.docs){const u=r.data();console.log(u),u.type=="activity-theater-event"?s.push(j.fromMap(u)):s.push(ht.fromMap(u))}}return s}async function Hn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o)return[];const s=h(I,"schools",e),a=h(f(s,"activities"),t),c=[],i=[];n=="student"?(console.log("Getting events for student"),c.push(await _(b(f(a,"events"),A("targetUids","array-contains",o)))),c.push(await _(b(f(a,"events"),A("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await _(f(a,"events"))));for(const l of c)for(const r of l.docs){const u=r.data();u.deleted||(console.log(u),u.id=r.id,console.log(u),i.push(ht.fromMap(u)))}return i}async function qn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return null;const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses"),l=await k(h(i,n));return l.exists()?wt.fromMap(l.data()):null}async function Vn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap())})}async function zn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return[];const s=localStorage.getItem("accountType"),a=h(I,"schools",o),c=h(f(a,"activities"),t);if(s=="teacher")vt(f(c,"groupChats"),async i=>{const l=[];for(const r of i.docs){const u=x.fromMap(r.data());if((u.generalTarget=="direct"||u.generalTarget=="custom")&&!u.members.find(g=>g.userId==n))continue;if(u.generalTarget=="direct"){const g=u.members.find(y=>y.userId!=n);u.name=(g==null?void 0:g.name)||"Unknown"}const d=f(r.ref,"messages"),p=b(d,$t("timeSent","desc"),Bt(1)),m=await _(p);m.empty||(u.lastMessage=_t.fromMap(m.docs[0].data())),l.push(u)}l.sort((r,u)=>r.lastMessage?u.lastMessage?u.lastMessage.timeSent.getTime()-r.lastMessage.timeSent.getTime():-1:1),e(l)});else{const i=h(f(a,"students"),n),l=await k(i);if(!l.exists())return;const r=At.fromMap(l.data());console.log(r),vt(f(c,"groupChats"),async u=>{const d=[];for(const p of u.docs){const m=x.fromMap(p.data());if(!(m.generalTarget=="everyone"||m.generalTarget=="students")&&(m.generalTarget=="parents"||!m.members.find(S=>S.userId==n)))continue;if(m.generalTarget=="direct"){const S=m.members.find(C=>C.userId!=n);m.name=(S==null?void 0:S.name)||"Unknown"}const g=f(p.ref,"messages"),y=b(g,$t("timeSent","desc"),Bt(1)),w=await _(y);w.empty||(m.lastMessage=_t.fromMap(w.docs[0].data())),d.push(m)}d.sort((p,m)=>p.lastMessage?m.lastMessage?m.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(d)})}}async function Wn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return[];const s=h(I,"schools",n),a=h(f(s,"activities"),t);console.log("Getting messages for "+e);const c=h(f(a,"groupChats"),e),i=f(c,"messages");vt(i,l=>{const r=[];l.forEach(u=>{r.push(_t.fromMap(u.data()))}),r.sort((u,d)=>u.timeSent.getTime()-d.timeSent.getTime()),o(r)})}async function Ft(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const n=h(I,"schools",t),s=h(f(n,o=="student"?"students":"teachers"),e),a=await k(s);return a.exists()?o=="student"?At.fromMap(a.data()):Ee.fromMap(a.data()):null}async function Xn(t){const e=h(f(I,"parents"),t),o=await k(e);return o.exists()?o.data():null}async function Kn(t,e,o,n,s){if(o.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const i=h(I,"schools",a),l=h(f(i,"activities"),t),r=h(f(l,"groupChats"),e),u=await k(r);if(!u.exists()){if(s==null)return;const g=await Ft();if(!g)return;const y=x.fromBlank("",s.userId,[ne.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid),s],"direct",t,Date.now());await K(r,y.toMap());const w=f(r,"messages"),S=await L(w,o.toMap());o.messageId=S.id,await v(S,{messageId:S.id}),q(o,[O.fromBlank(s.userId,s.email)],y,n);return}const d=x.fromMap(u.data()),p=f(r,"messages"),m=await L(p,o.toMap());if(o.messageId=m.id,await v(m,{messageId:m.id}),d.generalTarget!="direct"&&d.generalTarget!="custom"&&d.generalTarget!="group"){const g=await pn(t);if(!g)return;if(d.generalTarget=="everyone"){let y=g.students.map(w=>O.fromBlank(w.userId,w.email));y=y.concat(g.teachers.map(w=>O.fromBlank(w.userId,w.email))),y=y.concat(g.parents.map(w=>O.fromBlank(w.userId,w.email))),y=y.filter(w=>w.userId!=o.senderUid),q(o,y,d,g.name)}else if(d.generalTarget=="students"){let y=g.students.map(w=>O.fromBlank(w.userId,w.email));y=y.filter(w=>w.userId!=o.senderUid),q(o,y,d,g.name)}else if(d.generalTarget=="parents"){let y=g.parents.map(w=>O.fromBlank(w.userId,w.email));y=y.filter(w=>w.userId!=o.senderUid),q(o,y,d,g.name)}return}if(d.generalTarget=="direct"){const g=d.members.find(y=>y.userId!=c);if(!g)return;q(o,[O.fromBlank(g.userId,g.email)],d,n);return}if(d.generalTarget=="custom"){const g=d.members.filter(y=>y.userId!=c).map(y=>O.fromBlank(y.userId,y.email));q(o,g,d,n);return}}async function yt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"groupChats"),a=await Ft();if(!a)return;const c=ne.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const i=await L(s,t.toMap());t.id=i.id,await v(i,{id:i.id})}async function Jn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:F(o.toMap())})}async function Yn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:Ue(o.toMap())})}async function Qn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses"),l=h(i,o.id);await Me(l)}async function Zn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=f(n,t+"s");await K(h(s,e.uid),e.toMap());let a;e instanceof At?a=W.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=ct.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(n,{[t+"Uids"]:F(e.uid),[t+"s"]:F(a.toMap())})}function gn(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function ts(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(I,"schools",o),s=await k(n);if(!s.exists())return null;const a=s.data(),c=f(n,"activities"),i=gn(t),l=[Q.fromMap({name:"Rehearsal",color:J("#FF0000")}),Q.fromMap({name:"Performance",color:J("#00FF00")})],r=[Q.fromMap({name:"Practice",color:J("#FF0000")}),Q.fromMap({name:"Game",color:J("#00FF00")})],u=[Ce.fromMap({name:"Auditorium",color:J("#0000FF")})],d=lt.fromMap(a.location),p=[d],m=await Ft();if(!m)return null;const g=ct.fromBlank(m.fullname,m.email,m.phoneNumber,m.FCMToken,m.uid);let y;e=="theater"?y=tt.fromBlank(t,"",i,[],[],[],[g],p,l,d,u,"type",Date.now()):y=G.fromBlank(t,"",i,[],[],[],[g],p,r,d,"type",Date.now(),"activity");const w=await L(c,y.toMap());y.id=w.id,await v(w,{id:w.id});const S=x.fromMap({name:"Everyone",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"everyone"});await yt(S);const C=x.fromMap({name:"Parents",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"parents"});await yt(C);const U=x.fromMap({name:"Students",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"students"});return await yt(U),y}async function es(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return null;const s=h(I,"schools",n),a=h(f(s,"activities"),o),c=f(a,"groupChats"),i=x.fromBlank("",e.userId,[t,e],"direct",o,Date.now());return await K(h(c,e.userId),i.toMap()),i.name=e.name,i}async function os(){const t=await fn(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(o=>{e.push(lt.fromMap(o))}),e}async function ns(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await v(s,{locations:F(e.toMap())})}async function ss(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e);await v(o,{savedLocations:F(t.toMap())})}async function as(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await v(s,{eventTypes:F(e.toMap())})}async function cs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e);await v(a,{isCreatingSchedule:!0})}async function rs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=f(n,"students");await K(h(s,t.uid),t.toMap());const a=W.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(n,{studentUids:F(t.uid),students:F(a.toMap())});const c=a.userId;if(!o||!c)return null;const i=h(f(n,"activities"),e),l=await k(i);return l.exists()?l.data().type=="theater"?(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()]}),tt.fromMap(l.data())):(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()]}),G.fromMap(l.data())):null}async function is(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=b(f(n,"events"),A("showId","==",t.id)),a=await _(s);for(const c of a.docs){const i=j.fromMap(c.data());for(let r=0;r<i.characters.length;r++){const u=i.characters[r];u instanceof V?i.characters[r]=t.characters.find(d=>d.name==u.name):u instanceof rt&&(i.characters[r]=t.showGroups.find(d=>d.name==u.name))}const l=[];for(const r of i.characters){if(r instanceof oe){for(const u of t.ensemble.actors)l.push(u);for(const u of t.characters)l.find(d=>d.userId==u.actor.userId)==null&&l.push(u.actor);break}if(r instanceof V){if(l.find(u=>u.userId==r.actor.userId)!=null)continue;l.push(r.actor)}if(r instanceof it){if(r.includeAll)for(const u of t.ensemble.actors)l.find(d=>d.userId==u.userId)==null&&l.push(u);else if(r.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(l.find(d=>d.userId==u.userId)!=null)continue;l.push(u)}}else if(r.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(l.find(d=>d.userId==u.userId)!=null)continue;l.push(u)}}else if(r.includeCustom)for(const u of r.customActors)l.find(d=>d.userId==u.userId)==null&&l.push(u)}if(r instanceof rt)for(const u of r.characters){if(u instanceof V){if(l.find(d=>d.userId==u.actor.userId)!=null)continue;l.push(u.actor)}if(u instanceof it){if(u.includeAll)for(const d of t.ensemble.actors)l.find(p=>p.userId==d.userId)==null&&l.push(d);else if(u.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(l.find(p=>p.userId==d.userId)!=null)continue;l.push(d)}}else if(u.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(l.find(p=>p.userId==d.userId)!=null)continue;l.push(d)}}else if(u.includeCustom)for(const d of u.customActors)l.find(p=>p.userId==d.userId)==null&&l.push(d)}}}i.targets=l,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function ls(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=b(f(n,"events"),A("showId","==",t.id)),a=await _(s);for(const c of a.docs){const i=j.fromMap(c.data()),l=[];for(let u=0;u<i.characters.length;u++){const d=i.characters[u];if(d instanceof V){const p=t.characters.find(m=>m.characterId==d.characterId);p&&l.push(p)}else if(d instanceof rt){const p=t.showGroups.find(m=>m.showGroupId==d.showGroupId);p&&l.push(p)}i.characters=l}const r=[];for(const u of l){if(u instanceof oe){for(const d of t.ensemble.actors)r.push(d);for(const d of t.characters)r.find(p=>p.userId==d.actor.userId)==null&&r.push(d.actor);break}if(u instanceof V){if(r.find(d=>d.userId==u.actor.userId)!=null)continue;r.push(u.actor)}if(u instanceof it){if(u.includeAll)for(const d of t.ensemble.actors)r.find(p=>p.userId==d.userId)==null&&r.push(d);else if(u.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(r.find(p=>p.userId==d.userId)!=null)continue;r.push(d)}}else if(u.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(r.find(p=>p.userId==d.userId)!=null)continue;r.push(d)}}else if(u.includeCustom)for(const d of u.customActors)r.find(p=>p.userId==d.userId)==null&&r.push(d)}if(u instanceof rt)for(const d of u.characters){if(d instanceof V){if(r.find(p=>p.userId==d.actor.userId)!=null)continue;r.push(d.actor)}if(d instanceof it){if(d.includeAll)for(const p of t.ensemble.actors)r.find(m=>m.userId==p.userId)==null&&r.push(p);else if(d.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(r.find(m=>m.userId==p.userId)!=null)continue;r.push(p)}}else if(d.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(r.find(m=>m.userId==p.userId)!=null)continue;r.push(p)}}else if(d.includeCustom)for(const p of d.customActors)r.find(m=>m.userId==p.userId)==null&&r.push(p)}}}i.targets=r,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function us(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)console.log("Getting resources for "+a.name),o.push(...a.resources)}return o}async function ds(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)a.activityName=n.name,o.push(a)}return o}async function hs(t){const e=localStorage.getItem("userId"),o=h(f(I,"parents"),t),n=await k(o);if(!n.exists())return null;const s=n.data(),a=s.requestedChildren,c=s.children,i=a.find(l=>l.uid==e);if(!i)return null;a.splice(a.indexOf(i),1),c.push(i),await v(o,{requestedChildren:a,children:c,lastUpdated:Date.now()})}async function fs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=await k(a);if(!c.exists())return;const i=c.data(),l=i.locations;for(let p=0;p<l.length;p++)lt.fromMap(l[p]).name==o.name&&(l[p]=e.toMap());let r=lt.fromMap(i.defaultLocation);r.name==o.name&&(r=e),await v(a,{locations:l,defaultLocation:r.toMap(),lastUpdated:Date.now()});const u=b(f(a,"events"),A("location","==",o.toMap())),d=await _(u);for(const p of d.docs){const m=p.data();if(m.type=="activity-theater-event"){const g=j.fromMap(m);g.location=e,g.lastUpdated=Date.now(),await v(p.ref,g.toMap())}else{const g=ht.fromMap(m);g.location=e,g.lastUpdated=Date.now(),await v(p.ref,g.toMap())}}}async function ps(t,e,o,n){const s=localStorage.getItem("schoolId");if(!s)return;const a=h(I,"schools",s),c=h(f(a,"activities"),t),i=await k(c);if(!i.exists())return;const r=i.data().eventTypes;for(let p=0;p<r.length;p++)Q.fromMap(r[p]).name==o.name&&(r[p]=e.toMap());await v(c,{eventTypes:r,lastUpdated:Date.now()});const u=b(f(c,"events"),A(n?"activityEventType":"eventType","==",o.toMap())),d=await _(u);for(const p of d.docs){const m=p.data();if(m.type=="activity-theater-event"){const g=j.fromMap(m);g.activityEventType=e,g.lastUpdated=Date.now(),await v(p.ref,g.toMap())}else{const g=ht.fromMap(m);g.eventType=e,g.lastUpdated=Date.now(),await v(p.ref,g.toMap())}}}export{Gn as $,Cn as A,Qn as B,Nn as C,On as D,jn as E,qn as F,Vn as G,ns as H,ss as I,as as J,fs as K,ps as L,os as M,yt as N,Kn as O,Wn as P,zn as Q,es as R,In as S,Jn as T,yn as U,Yn as V,rs as W,us as X,ds as Y,Un as Z,Hn as _,vn as a,Rn as a0,hs as a1,Xn as a2,wn as b,Zn as c,Fn as d,ts as e,De as f,Ft as g,pn as h,Se as i,Ln as j,xn as k,_n as l,Dn as m,Tn as n,ls as o,Sn as p,bn as q,is as r,cs as s,An as t,Bn as u,Pn as v,En as w,Mn as x,$n as y,kn as z};
