import{_ as Xt,P as Kt,Q as at,U as Jt,V as B,W as Yt,X as Qt,Y as Zt,Z as Ae,$ as ke,a0 as ut,a1 as Re,a2 as f,a3 as h,a4 as R,y as Q,m as G,a5 as L,a6 as v,g as Dt,k as z,a7 as _,a8 as b,a9 as k,u as W,o as Z,aa as X,t as It,ab as yt,S as St,T as Ee,ac as F,ad as Ce,ae as ct,C as q,e as rt,F as te,E as it,I as ee,z as x,af as Lt,ag as Ft,M as wt,B as ne,ah as O,ai as Ue,x as nt,aj as K,v as Me,L as oe}from"./index-CxI3RmU5.js";/**
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
 */const Ne="type.googleapis.com/google.protobuf.Int64Value",Oe="type.googleapis.com/google.protobuf.UInt64Value";function se(t,e){const n={};for(const o in t)t.hasOwnProperty(o)&&(n[o]=e(t[o]));return n}function vt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>vt(e));if(typeof t=="function"||typeof t=="object")return se(t,e=>vt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function lt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ne:case Oe:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>lt(e)):typeof t=="function"||typeof t=="object"?se(t,e=>lt(e)):t}/**
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
 */const Bt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Zt{constructor(e,n,o){super(`${bt}/${e}`,n||""),this.details=o}}function Pe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function xe(t,e){let n=Pe(t),o=n,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Bt[c])return new V("internal","internal");n=Bt[c],o=c}const r=a.message;typeof r=="string"&&(o=r),s=a.details,s!==void 0&&(s=lt(s))}}catch{}return n==="ok"?null:new V(n,o,s)}/**
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
 */const _t="us-central1";function Fe(t){let e=null;return{promise:new Promise((n,o)=>{e=setTimeout(()=>{o(new V("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Be{constructor(e,n,o,s,a=_t,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Le(n,o,s),this.cancelAllRequests=new Promise(r=>{this.deleteService=()=>Promise.resolve(r())});try{const r=new URL(a);this.customDomain=r.origin+(r.pathname==="/"?"":r.pathname),this.region=_t}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function $e(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Ge(t,e,n){return o=>He(t,e,o,{})}async function je(t,e,n,o){n["Content-Type"]="application/json";let s;try{s=await o(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function He(t,e,n,o){const s=t._url(e);return qe(t,s,n,o)}async function qe(t,e,n,o){n=vt(n);const s={data:n},a={},c=await t.contextProvider.getContext(o.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const r=o.timeout||7e4,l=Fe(r),i=await Promise.race([je(e,s,a,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!i)throw new V("cancelled","Firebase Functions instance was deleted.");const d=xe(i.status,i.json);if(d)throw d;if(!i.json)throw new V("internal","Response is not valid JSON object.");let u=i.json.data;if(typeof u>"u"&&(u=i.json.result),typeof u>"u")throw new V("internal","Response is missing data field.");return{data:lt(u)}}const $t="@firebase/functions",Gt="0.11.8";/**
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
 */const Ve="auth-internal",ze="app-check-internal",We="messaging-internal";function Xe(t,e){const n=(o,{instanceIdentifier:s})=>{const a=o.getProvider("app").getImmediate(),c=o.getProvider(Ve),r=o.getProvider(We),l=o.getProvider(ze);return new Be(a,c,r,l,s,t)};Xt(new Kt(bt,n,"PUBLIC").setMultipleInstances(!0)),at($t,Gt,e),at($t,Gt,"esm2017")}/**
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
 */function ae(t=Qt(),e=_t){const o=Jt(B(t),bt).getImmediate({identifier:e}),s=Yt("functions");return s&&Ke(o,...s),o}function Ke(t,e,n){$e(B(t),e,n)}function tt(t,e,n){return Ge(B(t),e)}Xe(fetch.bind(self));/**
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
 */class D extends Zt{constructor(e,n,o=0){super(pt(e),`Firebase Storage: ${n} (${pt(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function pt(t){return"storage/"+t}function At(){const t="An unknown error occurred, please check the error payload for server response.";return new D(T.UNKNOWN,t)}function Qe(t){return new D(T.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ze(t){return new D(T.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(T.UNAUTHENTICATED,t)}function en(){return new D(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nn(t){return new D(T.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function on(){return new D(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sn(){return new D(T.CANCELED,"User canceled the upload/download.")}function an(t){return new D(T.INVALID_URL,"Invalid URL '"+t+"'.")}function cn(t){return new D(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rn(){return new D(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function ln(){return new D(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function un(){return new D(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dn(t){return new D(T.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tt(t){return new D(T.INVALID_ARGUMENT,t)}function ie(){return new D(T.APP_DELETED,"The Firebase app was deleted.")}function hn(t){return new D(T.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Y(t,e){return new D(T.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function J(t){throw new D(T.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class C{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let o;try{o=C.makeFromUrl(e,n)}catch{return new C(e,"")}if(o.path==="")return o;throw cn(e)}static makeFromUrl(e,n){let o=null;const s="([A-Za-z0-9.\\-_]+)";function a(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const c="(/(.*))?$",r=new RegExp("^gs://"+s+c,"i"),l={bucket:1,path:3};function i(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${d}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},I=n===ce?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",S=new RegExp(`^https?://${I}/${s}/${w}`,"i"),U=[{regex:r,indices:l,postModify:a},{regex:g,indices:y,postModify:i},{regex:S,indices:{bucket:1,path:2},postModify:i}];for(let E=0;E<U.length;E++){const et=U[E],ht=et.regex.exec(e);if(ht){const be=ht[et.indices.bucket];let ft=ht[et.indices.path];ft||(ft=""),o=new C(be,ft),et.postModify(o);break}}if(o==null)throw an(e);return o}}class fn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function pn(t,e,n){let o=1,s=null,a=null,c=!1,r=0;function l(){return r===2}let i=!1;function d(...w){i||(i=!0,e.apply(null,w))}function u(w){s=setTimeout(()=>{s=null,t(g,l())},w)}function p(){a&&clearTimeout(a)}function g(w,...S){if(i){p();return}if(w){p(),d.call(null,w,...S);return}if(l()||c){p(),d.call(null,w,...S);return}o<64&&(o*=2);let U;r===1?(r=2,U=0):U=(o+Math.random())*1e3,u(U)}let y=!1;function I(w){y||(y=!0,p(),!i&&(s!==null?(w||(r=2),clearTimeout(s),u(0)):w||(r=1)))}return u(0),a=setTimeout(()=>{c=!0,I(!0)},n),I}function gn(t){t(!1)}/**
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
 */function mn(t){return t!==void 0}function In(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){return typeof t=="string"||t instanceof String}function jt(t){return Rt()&&t instanceof Blob}function Rt(){return typeof Blob<"u"}function Ht(t,e,n,o){if(o<e)throw Tt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(o>n)throw Tt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function dt(t,e,n){let o=e;return n==null&&(o=`https://${e}`),`${n}://${o}/v0${t}`}function le(t){const e=encodeURIComponent;let n="?";for(const o in t)if(t.hasOwnProperty(o)){const s=e(o)+"="+e(t[o]);n=n+s+"&"}return n=n.slice(0,-1),n}var $;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($||($={}));/**
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
 */class wn{constructor(e,n,o,s,a,c,r,l,i,d,u,p=!0){this.url_=e,this.method_=n,this.headers_=o,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=r,this.errorCallback_=l,this.timeout_=i,this.progressCallback_=d,this.connectionFactory_=u,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(o,s)=>{if(s){o(!1,new ot(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=r=>{const l=r.loaded,i=r.lengthComputable?r.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,i)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const r=a.getErrorCode()===$.NO_ERROR,l=a.getStatus();if(!r||yn(l,this.additionalRetryCodes_)&&this.retry){const d=a.getErrorCode()===$.ABORT;o(!1,new ot(!1,null,d));return}const i=this.successCodes_.indexOf(l)!==-1;o(!0,new ot(i,a))})},n=(o,s)=>{const a=this.resolve_,c=this.reject_,r=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(r,r.getResponse());mn(l)?a(l):a()}catch(l){c(l)}else if(r!==null){const l=At();l.serverResponse=r.getErrorText(),this.errorCallback_?c(this.errorCallback_(r,l)):c(l)}else if(s.canceled){const l=this.appDelete_?ie():sn();c(l)}else{const l=on();c(l)}};this.canceled_?n(!1,new ot(!1,null,!0)):this.backoffId_=pn(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ot{constructor(e,n,o){this.wasSuccessCode=e,this.connection=n,this.canceled=!!o}}function vn(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _n(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tn(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Dn(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Sn(t,e,n,o,s,a,c=!0){const r=le(t.urlParams),l=t.url+r,i=Object.assign({},t.headers);return Tn(i,e),vn(i,n),_n(i,a),Dn(i,o),new wn(l,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function bn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function An(...t){const e=bn();if(e!==void 0){const n=new e;for(let o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}else{if(Rt())return new Blob(t);throw new D(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kn(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gt{constructor(e,n){this.data=e,this.contentType=n||null}}function En(t,e){switch(t){case N.RAW:return new gt(ue(e));case N.BASE64:case N.BASE64URL:return new gt(de(t,e));case N.DATA_URL:return new gt(Un(e),Mn(e))}throw At()}function ue(t){const e=[];for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);if(o<=127)e.push(o);else if(o<=2047)e.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=o,c=t.charCodeAt(++n);o=65536|(a&1023)<<10|c&1023,e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?e.push(239,191,189):e.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(e)}function Cn(t){let e;try{e=decodeURIComponent(t)}catch{throw Y(N.DATA_URL,"Malformed data URL.")}return ue(e)}function de(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Rn(e)}catch(s){throw s.message.includes("polyfill")?s:Y(t,"Invalid character found")}const o=new Uint8Array(n.length);for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return o}class he{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Y(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=n[1]||null;o!=null&&(this.base64=Nn(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=e.substring(e.indexOf(",")+1)}}function Un(t){const e=new he(t);return e.base64?de(N.BASE64,e.rest):Cn(e.rest)}function Mn(t){return new he(t).contentType}function Nn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class P{constructor(e,n){let o=0,s="";jt(e)?(this.data_=e,o=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),o=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),o=e.length),this.size_=o,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(jt(this.data_)){const o=this.data_,s=kn(o,e,n);return s===null?null:new P(s)}else{const o=new Uint8Array(this.data_.buffer,e,n-e);return new P(o,!0)}}static getBlob(...e){if(Rt()){const n=e.map(o=>o instanceof P?o.data_:o);return new P(An.apply(null,n))}else{const n=e.map(c=>kt(c)?En(N.RAW,c).data:c.data_);let o=0;n.forEach(c=>{o+=c.byteLength});const s=new Uint8Array(o);let a=0;return n.forEach(c=>{for(let r=0;r<c.length;r++)s[a++]=c[r]}),new P(s,!0)}}uploadData(){return this.data_}}/**
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
 */function fe(t){let e;try{e=JSON.parse(t)}catch{return null}return In(e)?e:null}/**
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
 */function On(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Pn(t,e){const n=e.split("/").filter(o=>o.length>0).join("/");return t.length===0?n:t+"/"+n}function pe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function xn(t,e){return e}class A{constructor(e,n,o,s){this.server=e,this.local=n||e,this.writable=!!o,this.xform=s||xn}}let st=null;function Ln(t){return!kt(t)||t.length<2?t:pe(t)}function ge(){if(st)return st;const t=[];t.push(new A("bucket")),t.push(new A("generation")),t.push(new A("metageneration")),t.push(new A("name","fullPath",!0));function e(a,c){return Ln(c)}const n=new A("name");n.xform=e,t.push(n);function o(a,c){return c!==void 0?Number(c):c}const s=new A("size");return s.xform=o,t.push(s),t.push(new A("timeCreated")),t.push(new A("updated")),t.push(new A("md5Hash",null,!0)),t.push(new A("cacheControl",null,!0)),t.push(new A("contentDisposition",null,!0)),t.push(new A("contentEncoding",null,!0)),t.push(new A("contentLanguage",null,!0)),t.push(new A("contentType",null,!0)),t.push(new A("metadata","customMetadata",!0)),st=t,st}function Fn(t,e){function n(){const o=t.bucket,s=t.fullPath,a=new C(o,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Bn(t,e,n){const o={};o.type="file";const s=n.length;for(let a=0;a<s;a++){const c=n[a];o[c.local]=c.xform(o,e[c.server])}return Fn(o,t),o}function me(t,e,n){const o=fe(e);return o===null?null:Bn(t,o,n)}function $n(t,e,n,o){const s=fe(e);if(s===null||!kt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(i=>{const d=t.bucket,u=t.fullPath,p="/b/"+c(d)+"/o/"+c(u),g=dt(p,n,o),y=le({alt:"media",token:i});return g+y})[0]}function Gn(t,e){const n={},o=e.length;for(let s=0;s<o;s++){const a=e[s];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Et{constructor(e,n,o,s){this.url=e,this.method=n,this.handler=o,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ie(t){if(!t)throw At()}function jn(t,e){function n(o,s){const a=me(t,s,e);return Ie(a!==null),a}return n}function Hn(t,e){function n(o,s){const a=me(t,s,e);return Ie(a!==null),$n(a,s,t.host,t._protocol)}return n}function ye(t){function e(n,o){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=en():s=tn():n.getStatus()===402?s=Ze(t.bucket):n.getStatus()===403?s=nn(t.path):s=o,s.status=n.getStatus(),s.serverResponse=o.serverResponse,s}return e}function we(t){const e=ye(t);function n(o,s){let a=e(o,s);return o.getStatus()===404&&(a=Qe(t.path)),a.serverResponse=s.serverResponse,a}return n}function qn(t,e,n){const o=e.fullServerUrl(),s=dt(o,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,r=new Et(s,a,Hn(t,n),c);return r.errorHandler=we(e),r}function Vn(t,e){const n=e.fullServerUrl(),o=dt(n,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(l,i){}const r=new Et(o,s,c,a);return r.successCodes=[200,204],r.errorHandler=we(e),r}function zn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wn(t,e,n){const o=Object.assign({},n);return o.fullPath=t.path,o.size=e.size(),o.contentType||(o.contentType=zn(null,e)),o}function Xn(t,e,n,o,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function r(){let U="";for(let E=0;E<2;E++)U=U+Math.random().toString().slice(2);return U}const l=r();c["Content-Type"]="multipart/related; boundary="+l;const i=Wn(e,o,s),d=Gn(i,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+i.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=P.getBlob(u,o,p);if(g===null)throw ln();const y={name:i.fullPath},I=dt(a,t.host,t._protocol),w="POST",S=t.maxUploadRetryTime,M=new Et(I,w,jn(t,n),S);return M.urlParams=y,M.headers=c,M.body=g.uploadData(),M.errorHandler=ye(e),M}class Kn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,o,s){if(this.sent_)throw J("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw J("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw J("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw J("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw J("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jn extends Kn{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new Jn}/**
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
 */class j{constructor(e,n){this._service=e,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new j(e,n)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=On(this._location.path);if(e===null)return null;const n=new C(this._location.bucket,e);return new j(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hn(e)}}function Yn(t,e,n){t._throwIfRoot("uploadBytes");const o=Xn(t.storage,t._location,ge(),new P(e,!0),n);return t.storage.makeRequestWithTokens(o,Ct).then(s=>({metadata:s,ref:t}))}function Qn(t){t._throwIfRoot("getDownloadURL");const e=qn(t.storage,t._location,ge());return t.storage.makeRequestWithTokens(e,Ct).then(n=>{if(n===null)throw un();return n})}function Zn(t){t._throwIfRoot("deleteObject");const e=Vn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function to(t,e){const n=Pn(t._location.path,e),o=new C(t._location.bucket,n);return new j(t.storage,o)}/**
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
 */function eo(t){return/^[A-Za-z]+:\/\//.test(t)}function no(t,e){return new j(t,e)}function ve(t,e){if(t instanceof Ut){const n=t;if(n._bucket==null)throw rn();const o=new j(n,n._bucket);return e!=null?ve(o,e):o}else return e!==void 0?to(t,e):t}function oo(t,e){if(e&&eo(e)){if(t instanceof Ut)return no(t,e);throw Tt("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(t,e)}function qt(t,e){const n=e==null?void 0:e[re];return n==null?null:C.makeFromBucketSpec(n,t)}function so(t,e,n,o={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=o;s&&(t._overrideAuthToken=typeof s=="string"?s:Ae(s,t.app.options.projectId))}class Ut{constructor(e,n,o,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=o,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Ye,this._requests=new Set,s!=null?this._bucket=C.makeFromBucketSpec(s,this._host):this._bucket=qt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=qt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new j(this,e)}_makeRequest(e,n,o,s,a=!0){if(this._deleted)return new fn(ie());{const c=Sn(e,this._appId,o,s,n,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,n){const[o,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,o,s).getPromise()}}const Vt="@firebase/storage",zt="0.13.2";/**
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
 */const _e="storage";function ao(t,e,n){return t=B(t),Yn(t,e,n)}function Te(t){return t=B(t),Qn(t)}function co(t){return t=B(t),Zn(t)}function Mt(t,e){return t=B(t),oo(t,e)}function ro(t=Qt(),e){t=B(t);const o=Jt(t,_e).getImmediate({identifier:e}),s=Yt("storage");return s&&io(o,...s),o}function io(t,e,n,o={}){so(t,e,n,o)}function lo(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ut(n,o,s,e,ke)}function uo(){Xt(new Kt(_e,lo,"PUBLIC").setMultipleInstances(!0)),at(Vt,zt,""),at(Vt,zt,"esm2017")}uo();const Nt=ro(ut);async function Io(t,e,n,o){console.log("uploading file"),console.log(`${t}/${e}/${n}`);const s=Mt(Nt,`${t}/${e}/${n}`),a=await ao(s,o);return await Te(a.ref)}async function yo(t,e,n){const o=Mt(Nt,`${t}/${e}/${n}`);await co(o)}async function ho(t){const e=localStorage.getItem("schoolId"),n=Mt(Nt,`${e}/${t}.json`);try{const o=await Te(n);return(await(await fetch(o)).json()).FCMToken}catch{return null}}const Wt=ae(ut);async function H(t,e,n,o){const s=[],a=[];await Promise.all(e.map(async c=>{const r=await ho(c.userId);console.log("FCM Token: ",r),console.log("Email: ",c.email),r?a.push(r):s.push(c.email)})),s.length>0&&tt(Wt,"sendEmail")({emails:s,activityId:n.activityId,activityName:o,groupName:n.name,groupId:n.id,message:t.message,senderName:t.senderName}),a.length>0&&tt(Wt,"sendNotifications")({targetIds:a,title:`${o} - ${n.name}`,body:`${t.senderName}: ${t.message}`,thread:n.id,data:{type:"activity-chat",activityName:o,activityId:n.activityId,message:t.message,senderName:t.senderName,gcId:n.id,groupName:n.name}})}const Ot=ae(ut),m=Re(ut),Pt=f(m,"schools"),fo=async t=>{const e=h(Pt,t);return(await R(e)).data()},wo=async()=>{const t=await _(Pt),e=[];return t.forEach(n=>{e.push(n.data())}),e},vo=async(t,e,n)=>{const o=h(Pt,t);console.log("School ID: "+t),console.log("User ID: "+e),console.log("Account Type: "+n);const s=h(f(o,n+"s"),e);return(await R(s)).exists()},De=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const n=h(m,"schools",e);if(t=="student"){const o=b(f(n,"activities"),k("studentUids","array-contains",W())),s=[];return(await _(o)).forEach(c=>{s.push(G.fromMap(c.data()))}),s}else{const o=b(f(n,"activities"),k("teacherUids","array-contains",W())),s=[];return(await _(o)).forEach(c=>{console.log(c.data()),s.push(G.fromMap(c.data()))}),s}};async function po(t){const e=localStorage.getItem("schoolId");if(!e)return null;const n=h(m,"schools",e),o=h(f(n,"activities"),t),s=await R(o);return s.exists()?s.data().type=="theater"?Q.fromMap(s.data()):G.fromMap(s.data()):null}async function _o(t){const e=localStorage.getItem("schoolId");if(!e)return"";const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"shows"),a=await L(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function To(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"shows"),t.id);await v(s,t.toMap())}async function Do(t){const e=f(m,"showTemplates"),n=await L(e,t.toMap());return t.id=n.id,await v(n,{id:n.id}),n.id}async function So(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=h(m,"schools",n),s=h(f(o,"activities"),t),a=h(f(s,"shows"),e),c=await R(a);return c.exists()?(console.log(c.data()),Dt.fromMap(c.data())):null}async function bo(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const n=h(m,"schools",e),o=h(f(n,"activities"),t),s=await R(o);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(z.fromMap(c))}),a}async function Ao(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await X(c,n.toMap())}async function ko(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"events");console.log("Adding event"),console.log(t.toMap());const a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Ro(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"events"),a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function Eo(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=f(a,"events");if(o=="student"){const r=await _(b(c,k("showId","==",e),k("targetUids","array-contains",W()))),l=[];return r.forEach(i=>{i.data().deleted||l.push(Z.fromMap(i.data()))}),l}else{const r=await _(b(c,k("showId","==",e))),l=[];return r.forEach(i=>{i.data().deleted||l.push(Z.fromMap(i.data()))}),l}}async function Co(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await v(s,{deleted:!0}),await tt(Ot,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Uo(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await v(s,{deleted:!0}),await tt(Ot,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Se(t){const e=localStorage.getItem("schoolId");if(!e)return[];const n=h(m,"schools",e),o=h(f(n,"activities"),t),s=f(o,"shows"),a=await _(s),c=[];return a.forEach(r=>{c.push(Dt.fromMap(r.data()))}),c}async function Mo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await v(c,{conflictForm:n.toMap()}),await tt(Ot,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:o,deadline:n.deadline.toISOString()})}async function No(){const t=W(),e=localStorage.getItem("schoolId");if(!e)return null;const n=h(m,"schools",e),o=h(n,"students",t),s=await R(o);return s.exists()?z.fromMap(s.data()):null}async function Oo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=h(c,"conflictResponses",n.actor.userId);n.id=n.actor.userId,await X(r,n.toMap())}async function Po(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("accountType");if(!n)return[];const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses");if(o=="student"){console.log("Getting conflict responses for student"),console.log(W());const d=await _(b(r,k("submitterId","==",W()))),u=[];return d.forEach(p=>{u.push(It.fromMap(p.data()))}),u}const l=await _(r),i=[];return l.forEach(d=>{i.push(It.fromMap(d.data()))}),i}async function xo(){const t=f(m,"showTemplates"),e=await _(t),n=[];return e.forEach(o=>{n.push(Dt.fromMap(o.data()))}),n}async function Lo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+n+" AT: "+o),!e||!n||!o)return null;const s=h(m,"schools",e),a=b(f(s,"activities"),k("joinCode","==",t)),c=await _(a);if(c.empty)return null;const r=c.docs[0],l=h(f(s,o=="student"?"students":"teachers"),n),i=await R(l);if(console.log(i.data()),!i.exists())return null;if(r.data().studentUids.includes(n)||r.data().teacherUids.includes(n))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),r.data().type=="theater"){if((i.data().gender==null||i.data().gender=="")&&o=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),i.data().phoneNumber==""&&o=="student"&&localStorage.setItem("needsPhoneNumber","true"),(i.data().phoneNumber==""||i.data().gender==null||i.data().gender=="")&&o=="student")return null;if(o=="student")return await v(r.ref,{studentUids:[...r.data().studentUids,n],students:[...r.data().students,z.fromMap(i.data()).toMap()]}),Q.fromMap(r.data());{console.log("Joining as teacher"),console.log(i.data());const d=ct.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return console.log(d.toMap()),await v(r.ref,{teacherUids:[...r.data().teacherUids,n],teachers:[...r.data().teachers,d.toMap()]}),Q.fromMap(r.data())}}else if(o=="student"){const d=z.fromBlank(i.data().fullname,i.data().gender,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await v(r.ref,{studentUids:[...r.data().studentUids,n],students:[...r.data().students,d.toMap()]}),G.fromMap(r.data())}else{const d=ct.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await v(r.ref,{teacherUids:[...r.data().teacherUids,n],teachers:[...r.data().teachers,d.toMap()]}),G.fromMap(r.data())}}async function Fo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=h(m,"schools",e),a=h(f(s,o=="student"?"students":"teachers"),n);await v(a,{gender:t})}async function Bo(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n||!o)return;const s=h(m,"schools",e),a=h(f(s,o=="student"?"students":"teachers"),n);await v(a,{phoneNumber:t})}async function $o(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await v(s,t.toMap())}async function Go(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=h(f(o,"events"),t.id);await v(s,t.toMap())}async function jo(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return[];const o=h(m,"schools",t),s=[];let a;n=="student"?a=await _(b(f(o,"activities"),k("studentUids","array-contains",e))):a=await _(b(f(o,"activities"),k("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const r=[];n=="student"?(console.log("Getting events for student"),r.push(await _(b(f(c.ref,"events"),k("targetUids","array-contains",e)))),r.push(await _(b(f(c.ref,"events"),k("generalTarget","==","students"))))):(console.log("Getting events for teacher"),r.push(await _(f(c.ref,"events"))));for(const l of r)for(const i of l.docs){const d=i.data();console.log(d),d.type=="activity-theater-event"?s.push(Z.fromMap(d)):s.push(ee.fromMap(d))}}return s}async function Ho(t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!e||!n)return[];const s=h(m,"schools",e),a=h(f(s,"activities"),t),c=[],r=[];o=="student"?(console.log("Getting events for student"),c.push(await _(b(f(a,"events"),k("targetUids","array-contains",n)))),c.push(await _(b(f(a,"events"),k("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await _(f(a,"events"))));for(const l of c)for(const i of l.docs){const d=i.data();console.log(d),d.id=i.id,console.log(d),r.push(ee.fromMap(d))}return r}async function qo(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return null;const s=h(m,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses"),l=await R(h(r,o));return l.exists()?It.fromMap(l.data()):null}async function Vo(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=h(f(o,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap())})}async function zo(t,e){const n=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!n||!o)return[];const s=localStorage.getItem("accountType"),a=h(m,"schools",n),c=h(f(a,"activities"),t);if(s=="teacher")yt(f(c,"groupChats"),async r=>{const l=[];for(const i of r.docs){const d=x.fromMap(i.data());if((d.generalTarget=="direct"||d.generalTarget=="custom")&&!d.members.find(y=>y.userId==o))continue;if(d.generalTarget=="direct"){const y=d.members.find(I=>I.userId!=o);d.name=(y==null?void 0:y.name)||"Unknown"}const u=f(i.ref,"messages"),p=b(u,Ft("timeSent","desc"),Lt(1)),g=await _(p);g.empty||(d.lastMessage=wt.fromMap(g.docs[0].data())),l.push(d)}l.sort((i,d)=>i.lastMessage?d.lastMessage?d.lastMessage.timeSent.getTime()-i.lastMessage.timeSent.getTime():-1:1),e(l)});else{const r=h(f(a,"students"),o),l=await R(r);if(!l.exists())return;const i=St.fromMap(l.data());console.log(i),yt(f(c,"groupChats"),async d=>{const u=[];for(const p of d.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(S=>S.userId==o)))continue;if(g.generalTarget=="direct"){const S=g.members.find(M=>M.userId!=o);g.name=(S==null?void 0:S.name)||"Unknown"}const y=f(p.ref,"messages"),I=b(y,Ft("timeSent","desc"),Lt(1)),w=await _(I);w.empty||(g.lastMessage=wt.fromMap(w.docs[0].data())),u.push(g)}u.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(u)})}}async function Wo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return[];const s=h(m,"schools",o),a=h(f(s,"activities"),t);console.log("Getting messages for "+e);const c=h(f(a,"groupChats"),e),r=f(c,"messages");yt(r,l=>{const i=[];l.forEach(d=>{i.push(wt.fromMap(d.data()))}),i.sort((d,u)=>d.timeSent.getTime()-u.timeSent.getTime()),n(i)})}async function xt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e)return null;const o=h(m,"schools",t),s=h(f(o,n=="student"?"students":"teachers"),e),a=await R(s);return a.exists()?n=="student"?St.fromMap(a.data()):Ee.fromMap(a.data()):null}async function Xo(t){const e=h(f(m,"parents"),t),n=await R(e);return n.exists()?n.data():null}async function Ko(t,e,n,o,s){if(n.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const r=h(m,"schools",a),l=h(f(r,"activities"),t),i=h(f(l,"groupChats"),e),d=await R(i);if(!d.exists()){if(s==null)return;const y=await xt();if(!y)return;const I=x.fromBlank("",s.userId,[ne.fromBlank(y.fullname,y.email,y.phoneNumber,y.FCMToken,y.uid),s],"direct",t,Date.now());await X(i,I.toMap());const w=f(i,"messages"),S=await L(w,n.toMap());n.messageId=S.id,await v(S,{messageId:S.id}),H(n,[O.fromBlank(s.userId,s.email)],I,o);return}const u=x.fromMap(d.data()),p=f(i,"messages"),g=await L(p,n.toMap());if(n.messageId=g.id,await v(g,{messageId:g.id}),u.generalTarget!="direct"&&u.generalTarget!="custom"&&u.generalTarget!="group"){const y=await po(t);if(!y)return;if(u.generalTarget=="everyone"){let I=y.students.map(w=>O.fromBlank(w.userId,w.email));I=I.concat(y.teachers.map(w=>O.fromBlank(w.userId,w.email))),I=I.concat(y.parents.map(w=>O.fromBlank(w.userId,w.email))),I=I.filter(w=>w.userId!=n.senderUid),H(n,I,u,y.name)}else if(u.generalTarget=="students"){let I=y.students.map(w=>O.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=n.senderUid),H(n,I,u,y.name)}else if(u.generalTarget=="parents"){let I=y.parents.map(w=>O.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=n.senderUid),H(n,I,u,y.name)}return}if(u.generalTarget=="direct"){const y=u.members.find(I=>I.userId!=c);if(!y)return;H(n,[O.fromBlank(y.userId,y.email)],u,o);return}if(u.generalTarget=="custom"){const y=u.members.filter(I=>I.userId!=c).map(I=>O.fromBlank(I.userId,I.email));H(n,y,u,o);return}}async function mt(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=f(o,"groupChats"),a=await xt();if(!a)return;const c=ne.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const r=await L(s,t.toMap());t.id=r.id,await v(r,{id:r.id})}async function Jo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:F(n.toMap())})}async function Yo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);v(c,{resources:Ue(n.toMap())})}async function Qo(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return;const s=h(m,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses"),l=h(r,n.id);await Ce(l)}async function Zo(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=f(o,t+"s");await X(h(s,e.uid),e.toMap());let a;e instanceof St?a=z.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=ct.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(o,{[t+"Uids"]:F(e.uid),[t+"s"]:F(a.toMap())})}function go(t){const e=new Date,n=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${n.slice(-2)}`}async function ts(t,e){const n=localStorage.getItem("schoolId");if(!n)return null;const o=h(m,"schools",n),s=await R(o);if(!s.exists())return null;const a=s.data(),c=f(o,"activities"),r=go(t),l=[nt.fromMap({name:"Rehearsal",color:K("#FF0000")}),nt.fromMap({name:"Performance",color:K("#00FF00")})],i=[nt.fromMap({name:"Practice",color:K("#FF0000")}),nt.fromMap({name:"Game",color:K("#00FF00")})],d=[Me.fromMap({name:"Auditorium",color:K("#0000FF")})],u=oe.fromMap(a.location),p=[u],g=await xt();if(!g)return null;const y=ct.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let I;e=="theater"?I=Q.fromBlank(t,"",r,[],[],[],[y],p,l,u,d,"type",Date.now()):I=G.fromBlank(t,"",r,[],[],[],[y],p,i,u,"type",Date.now(),"activity");const w=await L(c,I.toMap());I.id=w.id,await v(w,{id:w.id});const S=x.fromMap({name:"Everyone",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"everyone"});await mt(S);const M=x.fromMap({name:"Parents",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"parents"});await mt(M);const U=x.fromMap({name:"Students",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"students"});return await mt(U),I}async function es(t,e,n){const o=localStorage.getItem("schoolId");if(!o)return null;const s=h(m,"schools",o),a=h(f(s,"activities"),n),c=f(a,"groupChats"),r=x.fromBlank("",e.userId,[t,e],"direct",n,Date.now());return await X(h(c,e.userId),r.toMap()),r.name=e.name,r}async function ns(){const t=await fo(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(n=>{e.push(oe.fromMap(n))}),e}async function os(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=h(f(o,"activities"),t);await v(s,{locations:F(e.toMap())})}async function ss(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e);await v(n,{savedLocations:F(t.toMap())})}async function as(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=h(f(o,"activities"),t);await v(s,{eventTypes:F(e.toMap())})}async function cs(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=h(f(o,"activities"),t),a=h(f(s,"shows"),e);await v(a,{isCreatingSchedule:!0})}async function rs(t,e){const n=localStorage.getItem("schoolId");if(!n)return;const o=h(m,"schools",n),s=f(o,"students");await X(h(s,t.uid),t.toMap());const a=z.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(o,{studentUids:F(t.uid),students:F(a.toMap())});const c=a.userId;if(!n||!c)return null;const r=h(f(o,"activities"),e),l=await R(r);return l.exists()?l.data().type=="theater"?(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()]}),Q.fromMap(l.data())):(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()]}),G.fromMap(l.data())):null}async function is(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=b(f(o,"events"),k("showId","==",t.id)),a=await _(s);for(const c of a.docs){const r=Z.fromMap(c.data());for(let i=0;i<r.characters.length;i++){const d=r.characters[i];d instanceof q?r.characters[i]=t.characters.find(u=>u.name==d.name):d instanceof rt&&(r.characters[i]=t.showGroups.find(u=>u.name==d.name))}const l=[];for(const i of r.characters){if(i instanceof te){for(const d of t.ensemble.actors)l.push(d);for(const d of t.characters)l.find(u=>u.userId==d.actor.userId)==null&&l.push(d.actor);break}if(i instanceof q){if(l.find(d=>d.userId==i.actor.userId)!=null)continue;l.push(i.actor)}if(i instanceof it){if(i.includeAll)for(const d of t.ensemble.actors)l.find(u=>u.userId==d.userId)==null&&l.push(d);else if(i.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(l.find(u=>u.userId==d.userId)!=null)continue;l.push(d)}}else if(i.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(l.find(u=>u.userId==d.userId)!=null)continue;l.push(d)}}else if(i.includeCustom)for(const d of i.customActors)l.find(u=>u.userId==d.userId)==null&&l.push(d)}if(i instanceof rt)for(const d of i.characters){if(d instanceof q){if(l.find(u=>u.userId==d.actor.userId)!=null)continue;l.push(d.actor)}if(d instanceof it){if(d.includeAll)for(const u of t.ensemble.actors)l.find(p=>p.userId==u.userId)==null&&l.push(u);else if(d.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(l.find(p=>p.userId==u.userId)!=null)continue;l.push(u)}}else if(d.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(l.find(p=>p.userId==u.userId)!=null)continue;l.push(u)}}else if(d.includeCustom)for(const u of d.customActors)l.find(p=>p.userId==u.userId)==null&&l.push(u)}}}r.targets=l,r.lastUpdated=Date.now(),await v(c.ref,r.toMap())}}async function ls(t){const e=localStorage.getItem("schoolId");if(!e)return;const n=h(m,"schools",e),o=h(f(n,"activities"),t.activityId),s=b(f(o,"events"),k("showId","==",t.id)),a=await _(s);for(const c of a.docs){const r=Z.fromMap(c.data()),l=[];for(let d=0;d<r.characters.length;d++){const u=r.characters[d];if(u instanceof q){const p=t.characters.find(g=>g.characterId==u.characterId);p&&l.push(p)}else if(u instanceof rt){const p=t.showGroups.find(g=>g.showGroupId==u.showGroupId);p&&l.push(p)}r.characters=l}const i=[];for(const d of l){if(d instanceof te){for(const u of t.ensemble.actors)i.push(u);for(const u of t.characters)i.find(p=>p.userId==u.actor.userId)==null&&i.push(u.actor);break}if(d instanceof q){if(i.find(u=>u.userId==d.actor.userId)!=null)continue;i.push(d.actor)}if(d instanceof it){if(d.includeAll)for(const u of t.ensemble.actors)i.find(p=>p.userId==u.userId)==null&&i.push(u);else if(d.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(i.find(p=>p.userId==u.userId)!=null)continue;i.push(u)}}else if(d.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(i.find(p=>p.userId==u.userId)!=null)continue;i.push(u)}}else if(d.includeCustom)for(const u of d.customActors)i.find(p=>p.userId==u.userId)==null&&i.push(u)}if(d instanceof rt)for(const u of d.characters){if(u instanceof q){if(i.find(p=>p.userId==u.actor.userId)!=null)continue;i.push(u.actor)}if(u instanceof it){if(u.includeAll)for(const p of t.ensemble.actors)i.find(g=>g.userId==p.userId)==null&&i.push(p);else if(u.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(u.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(u.includeCustom)for(const p of u.customActors)i.find(g=>g.userId==p.userId)==null&&i.push(p)}}}r.targets=i,r.lastUpdated=Date.now(),await v(c.ref,r.toMap())}}async function us(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await Se(o.id);for(const a of s)console.log("Getting resources for "+a.name),n.push(...a.resources)}return n}async function ds(){if(!localStorage.getItem("schoolId"))return[];const e=await De(),n=[];for(const o of e)if(console.log("Getting resources for "+o.name),o.type=="theater"){const s=await Se(o.id);for(const a of s)a.activityName=o.name,n.push(a)}return n}async function hs(t){const e=localStorage.getItem("userId"),n=h(f(m,"parents"),t),o=await R(n);if(!o.exists())return null;const s=o.data(),a=s.requestedChildren,c=s.children,r=a.find(l=>l.uid==e);if(!r)return null;a.splice(a.indexOf(r),1),c.push(r),await v(n,{requestedChildren:a,children:c,lastUpdated:Date.now()})}export{hs as $,Mo as A,Qo as B,No as C,Oo as D,jo as E,qo as F,Vo as G,os as H,ss as I,as as J,ns as K,mt as L,Ko as M,Wo as N,zo as O,es as P,Io as Q,Jo as R,yo as S,Yo as T,rs as U,us as V,ds as W,Uo as X,Ho as Y,Go as Z,Ro as _,vo as a,Xo as a0,wo as b,Zo as c,Fo as d,ts as e,De as f,xt as g,po as h,Se as i,Lo as j,xo as k,_o as l,Do as m,To as n,ls as o,So as p,bo as q,is as r,cs as s,Ao as t,Bo as u,Po as v,Eo as w,Co as x,$o as y,ko as z};
