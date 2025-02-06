import{_ as Xt,P as Kt,Q as at,U as Jt,V as B,W as Yt,X as Qt,Y as Zt,Z as Ae,$ as ke,a0 as ut,a1 as Re,a2 as f,a3 as h,a4 as C,y as Q,m as G,a5 as L,a6 as v,g as Dt,k as z,a7 as _,a8 as b,a9 as k,u as W,o as Z,aa as X,t as It,ab as yt,S as St,T as Ee,ac as F,ad as Ce,ae as ct,C as V,e as rt,F as te,E as it,I as ee,z as x,af as Lt,ag as Ft,M as wt,B as oe,ah as O,ai as Ue,x as ot,aj as K,v as Me,L as ne}from"./index-DdbGL9Ax.js";/**
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
 */const Ne="type.googleapis.com/google.protobuf.Int64Value",Oe="type.googleapis.com/google.protobuf.UInt64Value";function se(t,e){const o={};for(const n in t)t.hasOwnProperty(n)&&(o[n]=e(t[n]));return o}function vt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>vt(e));if(typeof t=="function"||typeof t=="object")return se(t,e=>vt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function lt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ne:case Oe:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>lt(e)):typeof t=="function"||typeof t=="object"?se(t,e=>lt(e)):t}/**
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
 */const Bt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Zt{constructor(e,o,n){super(`${bt}/${e}`,o||""),this.details=n}}function Pe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function xe(t,e){let o=Pe(t),n=o,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Bt[c])return new q("internal","internal");o=Bt[c],n=c}const i=a.message;typeof i=="string"&&(n=i),s=a.details,s!==void 0&&(s=lt(s))}}catch{}return o==="ok"?null:new q(o,n,s)}/**
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
 */const _t="us-central1";function Fe(t){let e=null;return{promise:new Promise((o,n)=>{e=setTimeout(()=>{n(new q("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Be{constructor(e,o,n,s,a=_t,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Le(o,n,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(a);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=_t}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function $e(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function Ge(t,e,o){return n=>He(t,e,n,{})}async function je(t,e,o,n){o["Content-Type"]="application/json";let s;try{s=await n(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function He(t,e,o,n){const s=t._url(e);return Ve(t,s,o,n)}async function Ve(t,e,o,n){o=vt(o);const s={data:o},a={},c=await t.contextProvider.getContext(n.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const i=n.timeout||7e4,d=Fe(i),r=await Promise.race([je(e,s,a,t.fetchImpl),d.promise,t.cancelAllRequests]);if(d.cancel(),!r)throw new q("cancelled","Firebase Functions instance was deleted.");const u=xe(r.status,r.json);if(u)throw u;if(!r.json)throw new q("internal","Response is not valid JSON object.");let l=r.json.data;if(typeof l>"u"&&(l=r.json.result),typeof l>"u")throw new q("internal","Response is missing data field.");return{data:lt(l)}}const $t="@firebase/functions",Gt="0.11.8";/**
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
 */const qe="auth-internal",ze="app-check-internal",We="messaging-internal";function Xe(t,e){const o=(n,{instanceIdentifier:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider(qe),i=n.getProvider(We),d=n.getProvider(ze);return new Be(a,c,i,d,s,t)};Xt(new Kt(bt,o,"PUBLIC").setMultipleInstances(!0)),at($t,Gt,e),at($t,Gt,"esm2017")}/**
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
 */function ae(t=Qt(),e=_t){const n=Jt(B(t),bt).getImmediate({identifier:e}),s=Yt("functions");return s&&Ke(n,...s),n}function Ke(t,e,o){$e(B(t),e,o)}function tt(t,e,o){return Ge(B(t),e)}Xe(fetch.bind(self));/**
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
 */class D extends Zt{constructor(e,o,n=0){super(pt(e),`Firebase Storage: ${o} (${pt(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function pt(t){return"storage/"+t}function At(){const t="An unknown error occurred, please check the error payload for server response.";return new D(T.UNKNOWN,t)}function Qe(t){return new D(T.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ze(t){return new D(T.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function to(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(T.UNAUTHENTICATED,t)}function eo(){return new D(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function oo(t){return new D(T.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function no(){return new D(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function so(){return new D(T.CANCELED,"User canceled the upload/download.")}function ao(t){return new D(T.INVALID_URL,"Invalid URL '"+t+"'.")}function co(t){return new D(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ro(){return new D(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function io(){return new D(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lo(){return new D(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uo(t){return new D(T.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tt(t){return new D(T.INVALID_ARGUMENT,t)}function ie(){return new D(T.APP_DELETED,"The Firebase app was deleted.")}function ho(t){return new D(T.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Y(t,e){return new D(T.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function J(t){throw new D(T.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class E{constructor(e,o){this.bucket=e,this.path_=o}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,o){let n;try{n=E.makeFromUrl(e,o)}catch{return new E(e,"")}if(n.path==="")return n;throw co(e)}static makeFromUrl(e,o){let n=null;const s="([A-Za-z0-9.\\-_]+)";function a(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const c="(/(.*))?$",i=new RegExp("^gs://"+s+c,"i"),d={bucket:1,path:3};function r(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",l=o.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${l}/${u}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},I=o===ce?"(?:storage.googleapis.com|storage.cloud.google.com)":o,w="([^?#]*)",S=new RegExp(`^https?://${I}/${s}/${w}`,"i"),U=[{regex:i,indices:d,postModify:a},{regex:g,indices:y,postModify:r},{regex:S,indices:{bucket:1,path:2},postModify:r}];for(let R=0;R<U.length;R++){const et=U[R],ht=et.regex.exec(e);if(ht){const be=ht[et.indices.bucket];let ft=ht[et.indices.path];ft||(ft=""),n=new E(be,ft),et.postModify(n);break}}if(n==null)throw ao(e);return n}}class fo{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function po(t,e,o){let n=1,s=null,a=null,c=!1,i=0;function d(){return i===2}let r=!1;function u(...w){r||(r=!0,e.apply(null,w))}function l(w){s=setTimeout(()=>{s=null,t(g,d())},w)}function p(){a&&clearTimeout(a)}function g(w,...S){if(r){p();return}if(w){p(),u.call(null,w,...S);return}if(d()||c){p(),u.call(null,w,...S);return}n<64&&(n*=2);let U;i===1?(i=2,U=0):U=(n+Math.random())*1e3,l(U)}let y=!1;function I(w){y||(y=!0,p(),!r&&(s!==null?(w||(i=2),clearTimeout(s),l(0)):w||(i=1)))}return l(0),a=setTimeout(()=>{c=!0,I(!0)},o),I}function go(t){t(!1)}/**
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
 */function mo(t){return t!==void 0}function Io(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){return typeof t=="string"||t instanceof String}function jt(t){return Rt()&&t instanceof Blob}function Rt(){return typeof Blob<"u"}function Ht(t,e,o,n){if(n<e)throw Tt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>o)throw Tt(`Invalid value for '${t}'. Expected ${o} or less.`)}/**
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
 */function dt(t,e,o){let n=e;return o==null&&(n=`https://${e}`),`${o}://${n}/v0${t}`}function le(t){const e=encodeURIComponent;let o="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);o=o+s+"&"}return o=o.slice(0,-1),o}var $;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($||($={}));/**
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
 */class wo{constructor(e,o,n,s,a,c,i,d,r,u,l,p=!0){this.url_=e,this.method_=o,this.headers_=n,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=i,this.errorCallback_=d,this.timeout_=r,this.progressCallback_=u,this.connectionFactory_=l,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new nt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=i=>{const d=i.loaded,r=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,r)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const i=a.getErrorCode()===$.NO_ERROR,d=a.getStatus();if(!i||yo(d,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===$.ABORT;n(!1,new nt(!1,null,u));return}const r=this.successCodes_.indexOf(d)!==-1;n(!0,new nt(r,a))})},o=(n,s)=>{const a=this.resolve_,c=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(i,i.getResponse());mo(d)?a(d):a()}catch(d){c(d)}else if(i!==null){const d=At();d.serverResponse=i.getErrorText(),this.errorCallback_?c(this.errorCallback_(i,d)):c(d)}else if(s.canceled){const d=this.appDelete_?ie():so();c(d)}else{const d=no();c(d)}};this.canceled_?o(!1,new nt(!1,null,!0)):this.backoffId_=po(e,o,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&go(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,o,n){this.wasSuccessCode=e,this.connection=o,this.canceled=!!n}}function vo(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _o(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function To(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Do(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function So(t,e,o,n,s,a,c=!0){const i=le(t.urlParams),d=t.url+i,r=Object.assign({},t.headers);return To(r,e),vo(r,o),_o(r,a),Do(r,n),new wo(d,t.method,r,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function bo(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ao(...t){const e=bo();if(e!==void 0){const o=new e;for(let n=0;n<t.length;n++)o.append(t[n]);return o.getBlob()}else{if(Rt())return new Blob(t);throw new D(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ko(t,e,o){return t.webkitSlice?t.webkitSlice(e,o):t.mozSlice?t.mozSlice(e,o):t.slice?t.slice(e,o):null}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gt{constructor(e,o){this.data=e,this.contentType=o||null}}function Eo(t,e){switch(t){case N.RAW:return new gt(ue(e));case N.BASE64:case N.BASE64URL:return new gt(de(t,e));case N.DATA_URL:return new gt(Uo(e),Mo(e))}throw At()}function ue(t){const e=[];for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(o<t.length-1&&(t.charCodeAt(o+1)&64512)===56320))e.push(239,191,189);else{const a=n,c=t.charCodeAt(++o);n=65536|(a&1023)<<10|c&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Co(t){let e;try{e=decodeURIComponent(t)}catch{throw Y(N.DATA_URL,"Malformed data URL.")}return ue(e)}function de(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let o;try{o=Ro(e)}catch(s){throw s.message.includes("polyfill")?s:Y(t,"Invalid character found")}const n=new Uint8Array(o.length);for(let s=0;s<o.length;s++)n[s]=o.charCodeAt(s);return n}class he{constructor(e){this.base64=!1,this.contentType=null;const o=e.match(/^data:([^,]+)?,/);if(o===null)throw Y(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=o[1]||null;n!=null&&(this.base64=No(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Uo(t){const e=new he(t);return e.base64?de(N.BASE64,e.rest):Co(e.rest)}function Mo(t){return new he(t).contentType}function No(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class P{constructor(e,o){let n=0,s="";jt(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(o?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(o?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,o){if(jt(this.data_)){const n=this.data_,s=ko(n,e,o);return s===null?null:new P(s)}else{const n=new Uint8Array(this.data_.buffer,e,o-e);return new P(n,!0)}}static getBlob(...e){if(Rt()){const o=e.map(n=>n instanceof P?n.data_:n);return new P(Ao.apply(null,o))}else{const o=e.map(c=>kt(c)?Eo(N.RAW,c).data:c.data_);let n=0;o.forEach(c=>{n+=c.byteLength});const s=new Uint8Array(n);let a=0;return o.forEach(c=>{for(let i=0;i<c.length;i++)s[a++]=c[i]}),new P(s,!0)}}uploadData(){return this.data_}}/**
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
 */function xo(t,e){return e}class A{constructor(e,o,n,s){this.server=e,this.local=o||e,this.writable=!!n,this.xform=s||xo}}let st=null;function Lo(t){return!kt(t)||t.length<2?t:pe(t)}function ge(){if(st)return st;const t=[];t.push(new A("bucket")),t.push(new A("generation")),t.push(new A("metageneration")),t.push(new A("name","fullPath",!0));function e(a,c){return Lo(c)}const o=new A("name");o.xform=e,t.push(o);function n(a,c){return c!==void 0?Number(c):c}const s=new A("size");return s.xform=n,t.push(s),t.push(new A("timeCreated")),t.push(new A("updated")),t.push(new A("md5Hash",null,!0)),t.push(new A("cacheControl",null,!0)),t.push(new A("contentDisposition",null,!0)),t.push(new A("contentEncoding",null,!0)),t.push(new A("contentLanguage",null,!0)),t.push(new A("contentType",null,!0)),t.push(new A("metadata","customMetadata",!0)),st=t,st}function Fo(t,e){function o(){const n=t.bucket,s=t.fullPath,a=new E(n,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:o})}function Bo(t,e,o){const n={};n.type="file";const s=o.length;for(let a=0;a<s;a++){const c=o[a];n[c.local]=c.xform(n,e[c.server])}return Fo(n,t),n}function me(t,e,o){const n=fe(e);return n===null?null:Bo(t,n,o)}function $o(t,e,o,n){const s=fe(e);if(s===null||!kt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(r=>{const u=t.bucket,l=t.fullPath,p="/b/"+c(u)+"/o/"+c(l),g=dt(p,o,n),y=le({alt:"media",token:r});return g+y})[0]}function Go(t,e){const o={},n=e.length;for(let s=0;s<n;s++){const a=e[s];a.writable&&(o[a.server]=t[a.local])}return JSON.stringify(o)}class Et{constructor(e,o,n,s){this.url=e,this.method=o,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ie(t){if(!t)throw At()}function jo(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),a}return o}function Ho(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),$o(a,s,t.host,t._protocol)}return o}function ye(t){function e(o,n){let s;return o.getStatus()===401?o.getErrorText().includes("Firebase App Check token is invalid")?s=eo():s=to():o.getStatus()===402?s=Ze(t.bucket):o.getStatus()===403?s=oo(t.path):s=n,s.status=o.getStatus(),s.serverResponse=n.serverResponse,s}return e}function we(t){const e=ye(t);function o(n,s){let a=e(n,s);return n.getStatus()===404&&(a=Qe(t.path)),a.serverResponse=s.serverResponse,a}return o}function Vo(t,e,o){const n=e.fullServerUrl(),s=dt(n,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,i=new Et(s,a,Ho(t,o),c);return i.errorHandler=we(e),i}function qo(t,e){const o=e.fullServerUrl(),n=dt(o,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(d,r){}const i=new Et(n,s,c,a);return i.successCodes=[200,204],i.errorHandler=we(e),i}function zo(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wo(t,e,o){const n=Object.assign({},o);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=zo(null,e)),n}function Xo(t,e,o,n,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function i(){let U="";for(let R=0;R<2;R++)U=U+Math.random().toString().slice(2);return U}const d=i();c["Content-Type"]="multipart/related; boundary="+d;const r=Wo(e,n,s),u=Go(r,o),l="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+d+`\r
Content-Type: `+r.contentType+`\r
\r
`,p=`\r
--`+d+"--",g=P.getBlob(l,n,p);if(g===null)throw io();const y={name:r.fullPath},I=dt(a,t.host,t._protocol),w="POST",S=t.maxUploadRetryTime,M=new Et(I,w,jo(t,o),S);return M.urlParams=y,M.headers=c,M.body=g.uploadData(),M.errorHandler=ye(e),M}class Ko{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,o,n,s){if(this.sent_)throw J("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(o,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw J("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw J("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw J("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw J("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jo extends Ko{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new Jo}/**
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
 */class j{constructor(e,o){this._service=e,o instanceof E?this._location=o:this._location=E.makeFromUrl(o,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,o){return new j(e,o)}get root(){const e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=Oo(this._location.path);if(e===null)return null;const o=new E(this._location.bucket,e);return new j(this._service,o)}_throwIfRoot(e){if(this._location.path==="")throw ho(e)}}function Yo(t,e,o){t._throwIfRoot("uploadBytes");const n=Xo(t.storage,t._location,ge(),new P(e,!0),o);return t.storage.makeRequestWithTokens(n,Ct).then(s=>({metadata:s,ref:t}))}function Qo(t){t._throwIfRoot("getDownloadURL");const e=Vo(t.storage,t._location,ge());return t.storage.makeRequestWithTokens(e,Ct).then(o=>{if(o===null)throw lo();return o})}function Zo(t){t._throwIfRoot("deleteObject");const e=qo(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function tn(t,e){const o=Po(t._location.path,e),n=new E(t._location.bucket,o);return new j(t.storage,n)}/**
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
 */function en(t){return/^[A-Za-z]+:\/\//.test(t)}function on(t,e){return new j(t,e)}function ve(t,e){if(t instanceof Ut){const o=t;if(o._bucket==null)throw ro();const n=new j(o,o._bucket);return e!=null?ve(n,e):n}else return e!==void 0?tn(t,e):t}function nn(t,e){if(e&&en(e)){if(t instanceof Ut)return on(t,e);throw Tt("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(t,e)}function Vt(t,e){const o=e==null?void 0:e[re];return o==null?null:E.makeFromBucketSpec(o,t)}function sn(t,e,o,n={}){t.host=`${e}:${o}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:Ae(s,t.app.options.projectId))}class Ut{constructor(e,o,n,s,a){this.app=e,this._authProvider=o,this._appCheckProvider=n,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Ye,this._requests=new Set,s!=null?this._bucket=E.makeFromBucketSpec(s,this._host):this._bucket=Vt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=Vt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const o=await e.getToken();if(o!==null)return o.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new j(this,e)}_makeRequest(e,o,n,s,a=!0){if(this._deleted)return new fo(ie());{const c=So(e,this._appId,n,s,o,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,o){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,o,n,s).getPromise()}}const qt="@firebase/storage",zt="0.13.2";/**
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
 */const _e="storage";function an(t,e,o){return t=B(t),Yo(t,e,o)}function Te(t){return t=B(t),Qo(t)}function cn(t){return t=B(t),Zo(t)}function Mt(t,e){return t=B(t),nn(t,e)}function rn(t=Qt(),e){t=B(t);const n=Jt(t,_e).getImmediate({identifier:e}),s=Yt("storage");return s&&ln(n,...s),n}function ln(t,e,o,n={}){sn(t,e,o,n)}function un(t,{instanceIdentifier:e}){const o=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ut(o,n,s,e,ke)}function dn(){Xt(new Kt(_e,un,"PUBLIC").setMultipleInstances(!0)),at(qt,zt,""),at(qt,zt,"esm2017")}dn();const Nt=rn(ut);async function In(t,e,o,n){console.log("uploading file"),console.log(`${t}/${e}/${o}`);const s=Mt(Nt,`${t}/${e}/${o}`),a=await an(s,n);return await Te(a.ref)}async function yn(t,e,o){const n=Mt(Nt,`${t}/${e}/${o}`);await cn(n)}async function hn(t){const e=localStorage.getItem("schoolId"),o=Mt(Nt,`${e}/${t}.json`);try{const n=await Te(o);return(await(await fetch(n)).json()).FCMToken}catch{return null}}const Wt=ae(ut);async function H(t,e,o,n){const s=[],a=[];await Promise.all(e.map(async c=>{const i=await hn(c.userId);console.log("FCM Token: ",i),console.log("Email: ",c.email),i?a.push(i):s.push(c.email)})),s.length>0&&tt(Wt,"sendEmail")({emails:s,activityId:o.activityId,activityName:n,groupName:o.name,groupId:o.id,message:t.message,senderName:t.senderName}),a.length>0&&tt(Wt,"sendNotifications")({targetIds:a,title:`${n} - ${o.name}`,body:`${t.senderName}: ${t.message}`,thread:o.id,data:{type:"activity-chat",activityName:n,activityId:o.activityId,message:t.message,senderName:t.senderName,gcId:o.id,groupName:o.name}})}const Ot=ae(ut),m=Re(ut),Pt=f(m,"schools"),fn=async t=>{const e=h(Pt,t);return(await C(e)).data()},wn=async()=>{const t=await _(Pt),e=[];return t.forEach(o=>{e.push(o.data())}),e},vn=async(t,e,o)=>{const n=h(Pt,t);console.log("School ID: "+t),console.log("User ID: "+e),console.log("Account Type: "+o);const s=h(f(n,o+"s"),e);return(await C(s)).exists()},De=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=h(m,"schools",e);if(t=="student"){const n=b(f(o,"activities"),k("studentUids","array-contains",W())),s=[];return(await _(n)).forEach(c=>{s.push(G.fromMap(c.data()))}),s}else{const n=b(f(o,"activities"),k("teacherUids","array-contains",W())),s=[];return(await _(n)).forEach(c=>{console.log(c.data()),s.push(G.fromMap(c.data()))}),s}};async function pn(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=h(m,"schools",e),n=h(f(o,"activities"),t),s=await C(n);return s.exists()?s.data().type=="theater"?Q.fromMap(s.data()):G.fromMap(s.data()):null}async function _n(t){const e=localStorage.getItem("schoolId");if(!e)return"";const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"shows"),a=await L(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function Tn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"shows"),t.id);await v(s,t.toMap())}async function Dn(t){const e=f(m,"showTemplates"),o=await L(e,t.toMap());return t.id=o.id,await v(o,{id:o.id}),o.id}async function Sn(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(m,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e),c=await C(a);return c.exists()?(console.log(c.data()),Dt.fromMap(c.data())):null}async function bn(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=h(m,"schools",e),n=h(f(o,"activities"),t),s=await C(n);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(z.fromMap(c))}),a}async function An(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await X(c,o.toMap())}async function kn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events");console.log("Adding event"),console.log(t.toMap());const a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Rn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events"),a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function En(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=f(a,"events");if(n=="student"){const i=await _(b(c,k("showId","==",e),k("targetUids","array-contains",W()))),d=[];return i.forEach(r=>{r.data().deleted||d.push(Z.fromMap(r.data()))}),d}else{const i=await _(b(c,k("showId","==",e))),d=[];return i.forEach(r=>{r.data().deleted||d.push(Z.fromMap(r.data()))}),d}}async function Cn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,{deleted:!0}),await tt(Ot,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Un(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,{deleted:!0}),await tt(Ot,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Se(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=h(m,"schools",e),n=h(f(o,"activities"),t),s=f(n,"shows"),a=await _(s),c=[];return a.forEach(i=>{c.push(Dt.fromMap(i.data()))}),c}async function Mn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await v(c,{conflictForm:o.toMap()}),await tt(Ot,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:n,deadline:o.deadline.toISOString()})}async function Nn(){const t=W(),e=localStorage.getItem("schoolId");if(!e)return null;const o=h(m,"schools",e),n=h(o,"students",t),s=await C(n);return s.exists()?z.fromMap(s.data()):null}async function On(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=h(c,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await X(i,o.toMap())}async function Pn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(W());const u=await _(b(i,k("submitterId","==",W()))),l=[];return u.forEach(p=>{l.push(It.fromMap(p.data()))}),l}const d=await _(i),r=[];return d.forEach(u=>{r.push(It.fromMap(u.data()))}),r}async function xn(){const t=f(m,"showTemplates"),e=await _(t),o=[];return e.forEach(n=>{o.push(Dt.fromMap(n.data()))}),o}async function Ln(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+n),!e||!o||!n)return null;const s=h(m,"schools",e),a=b(f(s,"activities"),k("joinCode","==",t)),c=await _(a);if(c.empty)return null;const i=c.docs[0],d=h(f(s,n=="student"?"students":"teachers"),o),r=await C(d);if(console.log(r.data()),!r.exists())return null;if(i.data().studentUids.includes(o)||i.data().teacherUids.includes(o))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),i.data().type=="theater"){if((r.data().gender==null||r.data().gender=="")&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),r.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(r.data().phoneNumber==""||r.data().gender==null||r.data().gender=="")&&n=="student")return null;if(n=="student")return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,z.fromMap(r.data()).toMap()]}),Q.fromMap(i.data());{console.log("Joining as teacher"),console.log(r.data());const u=ct.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return console.log(u.toMap()),await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,u.toMap()]}),Q.fromMap(i.data())}}else if(n=="student"){const u=z.fromBlank(r.data().fullname,r.data().gender,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{studentUids:[...i.data().studentUids,o],students:[...i.data().students,u.toMap()]}),G.fromMap(i.data())}else{const u=ct.fromBlank(r.data().fullname,r.data().email,r.data().phoneNumber,r.data().uid,r.data().FCMToken);return await v(i.ref,{teacherUids:[...i.data().teacherUids,o],teachers:[...i.data().teachers,u.toMap()]}),G.fromMap(i.data())}}async function Fn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(m,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await v(a,{gender:t})}async function Bn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(m,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await v(a,{phoneNumber:t})}async function $n(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,t.toMap())}async function Gn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await v(s,t.toMap())}async function jn(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const n=h(m,"schools",t),s=[];let a;o=="student"?a=await _(b(f(n,"activities"),k("studentUids","array-contains",e))):a=await _(b(f(n,"activities"),k("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const i=[];o=="student"?(console.log("Getting events for student"),i.push(await _(b(f(c.ref,"events"),k("targetUids","array-contains",e)))),i.push(await _(b(f(c.ref,"events"),k("generalTarget","==","students"))))):(console.log("Getting events for teacher"),i.push(await _(f(c.ref,"events"))));for(const d of i)for(const r of d.docs){const u=r.data();console.log(u),u.type=="activity-theater-event"?s.push(Z.fromMap(u)):s.push(ee.fromMap(u))}}return s}async function Hn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o)return[];const s=h(m,"schools",e),a=h(f(s,"activities"),t),c=[],i=[];n=="student"?(console.log("Getting events for student"),c.push(await _(b(f(a,"events"),k("targetUids","array-contains",o)))),c.push(await _(b(f(a,"events"),k("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await _(f(a,"events"))));for(const d of c)for(const r of d.docs){const u=r.data();console.log(u),u.id=r.id,console.log(u),i.push(ee.fromMap(u))}return i}async function Vn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return null;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses"),d=await C(h(i,n));return d.exists()?It.fromMap(d.data()):null}async function qn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=h(f(n,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap())})}async function zn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return[];const s=localStorage.getItem("accountType"),a=h(m,"schools",o),c=h(f(a,"activities"),t);if(s=="teacher")yt(f(c,"groupChats"),async i=>{const d=[];for(const r of i.docs){const u=x.fromMap(r.data());if((u.generalTarget=="direct"||u.generalTarget=="custom")&&!u.members.find(y=>y.userId==n))continue;if(u.generalTarget=="direct"){const y=u.members.find(I=>I.userId!=n);u.name=(y==null?void 0:y.name)||"Unknown"}const l=f(r.ref,"messages"),p=b(l,Ft("timeSent","desc"),Lt(1)),g=await _(p);g.empty||(u.lastMessage=wt.fromMap(g.docs[0].data())),d.push(u)}d.sort((r,u)=>r.lastMessage?u.lastMessage?u.lastMessage.timeSent.getTime()-r.lastMessage.timeSent.getTime():-1:1),e(d)});else{const i=h(f(a,"students"),n),d=await C(i);if(!d.exists())return;const r=St.fromMap(d.data());console.log(r),yt(f(c,"groupChats"),async u=>{const l=[];for(const p of u.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(S=>S.userId==n)))continue;if(g.generalTarget=="direct"){const S=g.members.find(M=>M.userId!=n);g.name=(S==null?void 0:S.name)||"Unknown"}const y=f(p.ref,"messages"),I=b(y,Ft("timeSent","desc"),Lt(1)),w=await _(I);w.empty||(g.lastMessage=wt.fromMap(w.docs[0].data())),l.push(g)}l.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(l)})}}async function Wn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return[];const s=h(m,"schools",n),a=h(f(s,"activities"),t);console.log("Getting messages for "+e);const c=h(f(a,"groupChats"),e),i=f(c,"messages");yt(i,d=>{const r=[];d.forEach(u=>{r.push(wt.fromMap(u.data()))}),r.sort((u,l)=>u.timeSent.getTime()-l.timeSent.getTime()),o(r)})}async function xt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const n=h(m,"schools",t),s=h(f(n,o=="student"?"students":"teachers"),e),a=await C(s);return a.exists()?o=="student"?St.fromMap(a.data()):Ee.fromMap(a.data()):null}async function Xn(t,e,o,n,s){if(o.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const i=h(m,"schools",a),d=h(f(i,"activities"),t),r=h(f(d,"groupChats"),e),u=await C(r);if(!u.exists()){if(s==null)return;const y=await xt();if(!y)return;const I=x.fromBlank("",s.userId,[oe.fromBlank(y.fullname,y.email,y.phoneNumber,y.FCMToken,y.uid),s],"direct",t,Date.now());await X(r,I.toMap());const w=f(r,"messages"),S=await L(w,o.toMap());o.messageId=S.id,await v(S,{messageId:S.id}),H(o,[O.fromBlank(s.userId,s.email)],I,n);return}const l=x.fromMap(u.data()),p=f(r,"messages"),g=await L(p,o.toMap());if(o.messageId=g.id,await v(g,{messageId:g.id}),l.generalTarget!="direct"&&l.generalTarget!="custom"&&l.generalTarget!="group"){const y=await pn(t);if(!y)return;if(l.generalTarget=="everyone"){let I=y.students.map(w=>O.fromBlank(w.userId,w.email));I=I.concat(y.teachers.map(w=>O.fromBlank(w.userId,w.email))),I=I.concat(y.parents.map(w=>O.fromBlank(w.userId,w.email))),I=I.filter(w=>w.userId!=o.senderUid),H(o,I,l,y.name)}else if(l.generalTarget=="students"){let I=y.students.map(w=>O.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),H(o,I,l,y.name)}else if(l.generalTarget=="parents"){let I=y.parents.map(w=>O.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),H(o,I,l,y.name)}return}if(l.generalTarget=="direct"){const y=l.members.find(I=>I.userId!=c);if(!y)return;H(o,[O.fromBlank(y.userId,y.email)],l,n);return}if(l.generalTarget=="custom"){const y=l.members.filter(I=>I.userId!=c).map(I=>O.fromBlank(I.userId,I.email));H(o,y,l,n);return}}async function mt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"groupChats"),a=await xt();if(!a)return;const c=oe.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const i=await L(s,t.toMap());t.id=i.id,await v(i,{id:i.id})}async function Kn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:F(o.toMap())})}async function Jn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:Ue(o.toMap())})}async function Yn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),i=f(c,"conflictResponses"),d=h(i,o.id);await Ce(d)}async function Qn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=f(n,t+"s");await X(h(s,e.uid),e.toMap());let a;e instanceof St?a=z.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=ct.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(n,{[t+"Uids"]:F(e.uid),[t+"s"]:F(a.toMap())})}function gn(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function Zn(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(m,"schools",o),s=await C(n);if(!s.exists())return null;const a=s.data(),c=f(n,"activities"),i=gn(t),d=[ot.fromMap({name:"Rehearsal",color:K("#FF0000")}),ot.fromMap({name:"Performance",color:K("#00FF00")})],r=[ot.fromMap({name:"Practice",color:K("#FF0000")}),ot.fromMap({name:"Game",color:K("#00FF00")})],u=[Me.fromMap({name:"Auditorium",color:K("#0000FF")})],l=ne.fromMap(a.location),p=[l],g=await xt();if(!g)return null;const y=ct.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let I;e=="theater"?I=Q.fromBlank(t,"",i,[],[],[],[y],p,d,l,u,"type",Date.now()):I=G.fromBlank(t,"",i,[],[],[],[y],p,r,l,"type",Date.now(),"activity");const w=await L(c,I.toMap());I.id=w.id,await v(w,{id:w.id});const S=x.fromMap({name:"Everyone",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"everyone"});await mt(S);const M=x.fromMap({name:"Parents",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"parents"});await mt(M);const U=x.fromMap({name:"Students",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"students"});return await mt(U),I}async function ts(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return null;const s=h(m,"schools",n),a=h(f(s,"activities"),o),c=f(a,"groupChats"),i=x.fromBlank("",e.userId,[t,e],"direct",o,Date.now());return await X(h(c,e.userId),i.toMap()),i.name=e.name,i}async function es(){const t=await fn(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(o=>{e.push(ne.fromMap(o))}),e}async function os(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=h(f(n,"activities"),t);await v(s,{locations:F(e.toMap())})}async function ns(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e);await v(o,{savedLocations:F(t.toMap())})}async function ss(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=h(f(n,"activities"),t);await v(s,{eventTypes:F(e.toMap())})}async function as(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e);await v(a,{isCreatingSchedule:!0})}async function cs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(m,"schools",o),s=f(n,"students");await X(h(s,t.uid),t.toMap());const a=z.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(n,{studentUids:F(t.uid),students:F(a.toMap())});const c=a.userId;if(!o||!c)return null;const i=h(f(n,"activities"),e),d=await C(i);return d.exists()?d.data().type=="theater"?(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()]}),Q.fromMap(d.data())):(await v(d.ref,{studentUids:[...d.data().studentUids,c],students:[...d.data().students,a.toMap()]}),G.fromMap(d.data())):null}async function rs(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=b(f(n,"events"),k("showId","==",t.id)),a=await _(s);for(const c of a.docs){const i=Z.fromMap(c.data());for(let r=0;r<i.characters.length;r++){const u=i.characters[r];u instanceof V?i.characters[r]=t.characters.find(l=>l.name==u.name):u instanceof rt&&(i.characters[r]=t.showGroups.find(l=>l.name==u.name))}const d=[];for(const r of i.characters){if(r instanceof te){for(const u of t.ensemble.actors)d.push(u);for(const u of t.characters)d.find(l=>l.userId==u.actor.userId)==null&&d.push(u.actor);break}if(r instanceof V){if(d.find(u=>u.userId==r.actor.userId)!=null)continue;d.push(r.actor)}if(r instanceof it){if(r.includeAll)for(const u of t.ensemble.actors)d.find(l=>l.userId==u.userId)==null&&d.push(u);else if(r.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(d.find(l=>l.userId==u.userId)!=null)continue;d.push(u)}}else if(r.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(d.find(l=>l.userId==u.userId)!=null)continue;d.push(u)}}else if(r.includeCustom)for(const u of r.customActors)d.find(l=>l.userId==u.userId)==null&&d.push(u)}if(r instanceof rt)for(const u of r.characters){if(u instanceof V){if(d.find(l=>l.userId==u.actor.userId)!=null)continue;d.push(u.actor)}if(u instanceof it){if(u.includeAll)for(const l of t.ensemble.actors)d.find(p=>p.userId==l.userId)==null&&d.push(l);else if(u.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(d.find(p=>p.userId==l.userId)!=null)continue;d.push(l)}}else if(u.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(d.find(p=>p.userId==l.userId)!=null)continue;d.push(l)}}else if(u.includeCustom)for(const l of u.customActors)d.find(p=>p.userId==l.userId)==null&&d.push(l)}}}i.targets=d,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function is(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(m,"schools",e),n=h(f(o,"activities"),t.activityId),s=b(f(n,"events"),k("showId","==",t.id)),a=await _(s);for(const c of a.docs){const i=Z.fromMap(c.data()),d=[];for(let u=0;u<i.characters.length;u++){const l=i.characters[u];if(l instanceof V){const p=t.characters.find(g=>g.characterId==l.characterId);p&&d.push(p)}else if(l instanceof rt){const p=t.showGroups.find(g=>g.showGroupId==l.showGroupId);p&&d.push(p)}i.characters=d}const r=[];for(const u of d){if(u instanceof te){for(const l of t.ensemble.actors)r.push(l);for(const l of t.characters)r.find(p=>p.userId==l.actor.userId)==null&&r.push(l.actor);break}if(u instanceof V){if(r.find(l=>l.userId==u.actor.userId)!=null)continue;r.push(u.actor)}if(u instanceof it){if(u.includeAll)for(const l of t.ensemble.actors)r.find(p=>p.userId==l.userId)==null&&r.push(l);else if(u.includeMale){for(const l of t.ensemble.actors)if(l.gender=="male"){if(r.find(p=>p.userId==l.userId)!=null)continue;r.push(l)}}else if(u.includeFemale){for(const l of t.ensemble.actors)if(l.gender=="female"){if(r.find(p=>p.userId==l.userId)!=null)continue;r.push(l)}}else if(u.includeCustom)for(const l of u.customActors)r.find(p=>p.userId==l.userId)==null&&r.push(l)}if(u instanceof rt)for(const l of u.characters){if(l instanceof V){if(r.find(p=>p.userId==l.actor.userId)!=null)continue;r.push(l.actor)}if(l instanceof it){if(l.includeAll)for(const p of t.ensemble.actors)r.find(g=>g.userId==p.userId)==null&&r.push(p);else if(l.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(l.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(r.find(g=>g.userId==p.userId)!=null)continue;r.push(p)}}else if(l.includeCustom)for(const p of l.customActors)r.find(g=>g.userId==p.userId)==null&&r.push(p)}}}i.targets=r,i.lastUpdated=Date.now(),await v(c.ref,i.toMap())}}async function ls(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)console.log("Getting resources for "+a.name),o.push(...a.resources)}return o}async function us(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)a.activityName=n.name,o.push(a)}return o}export{Mn as A,Yn as B,Nn as C,On as D,jn as E,Vn as F,qn as G,os as H,ns as I,ss as J,es as K,mt as L,Xn as M,Wn as N,zn as O,ts as P,In as Q,Kn as R,yn as S,Jn as T,cs as U,ls as V,us as W,Un as X,Hn as Y,Gn as Z,Rn as _,vn as a,wn as b,Qn as c,Fn as d,Zn as e,De as f,xt as g,pn as h,Se as i,Ln as j,xn as k,_n as l,Dn as m,Tn as n,is as o,Sn as p,bn as q,rs as r,as as s,An as t,Bn as u,Pn as v,En as w,Cn as x,$n as y,kn as z};
