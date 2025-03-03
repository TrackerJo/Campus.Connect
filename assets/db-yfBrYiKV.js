import{_ as Kt,P as Jt,Q as at,U as Qt,V as $,W as Yt,X as Zt,Y as te,Z as Ae,$ as Ue,a0 as dt,a1 as ke,a2 as f,a3 as h,a4 as b,y as Z,m as H,a5 as B,a6 as w,g as St,k as W,a7 as _,a8 as S,a9 as U,t as X,o as O,aa as K,s as yt,ab as wt,S as bt,T as Re,ac as F,ad as Ee,ae as ct,C as V,e as it,F as ee,E as rt,L as lt,I as et,v as oe,x as Q,z as L,af as Bt,ag as Ft,M as vt,B as ne,ah as P,ai as Me}from"./index-DTIk8SwV.js";/**
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
 */const Ce="type.googleapis.com/google.protobuf.Int64Value",Ne="type.googleapis.com/google.protobuf.UInt64Value";function se(t,e){const o={};for(const n in t)t.hasOwnProperty(n)&&(o[n]=e(t[n]));return o}function _t(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>_t(e));if(typeof t=="function"||typeof t=="object")return se(t,e=>_t(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ut(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ce:case Ne:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ut(e)):typeof t=="function"||typeof t=="object"?se(t,e=>ut(e)):t}/**
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
 */const At="functions";/**
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
 */const $t={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends te{constructor(e,o,n){super(`${At}/${e}`,o||""),this.details=n}}function Oe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Pe(t,e){let o=Oe(t),n=o,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!$t[c])return new z("internal","internal");o=$t[c],n=c}const r=a.message;typeof r=="string"&&(n=r),s=a.details,s!==void 0&&(s=ut(s))}}catch{}return o==="ok"?null:new z(o,n,s)}/**
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
 */class xe{constructor(e,o,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||o.get().then(s=>this.messaging=s,()=>{}),this.appCheck||n.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const o=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(e){const o=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:o,messagingToken:n,appCheckToken:s}}}/**
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
 */const Dt="us-central1";function Le(t){let e=null;return{promise:new Promise((o,n)=>{e=setTimeout(()=>{n(new z("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Be{constructor(e,o,n,s,a=Dt,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new xe(o,n,s),this.cancelAllRequests=new Promise(r=>{this.deleteService=()=>Promise.resolve(r())});try{const r=new URL(a);this.customDomain=r.origin+(r.pathname==="/"?"":r.pathname),this.region=Dt}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function Fe(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function $e(t,e,o){return n=>He(t,e,n,{})}async function Ge(t,e,o,n){o["Content-Type"]="application/json";let s;try{s=await n(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function He(t,e,o,n){const s=t._url(e);return je(t,s,o,n)}async function je(t,e,o,n){o=_t(o);const s={data:o},a={},c=await t.contextProvider.getContext(n.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const r=n.timeout||7e4,l=Le(r),i=await Promise.race([Ge(e,s,a,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!i)throw new z("cancelled","Firebase Functions instance was deleted.");const u=Pe(i.status,i.json);if(u)throw u;if(!i.json)throw new z("internal","Response is not valid JSON object.");let d=i.json.data;if(typeof d>"u"&&(d=i.json.result),typeof d>"u")throw new z("internal","Response is missing data field.");return{data:ut(d)}}const Gt="@firebase/functions",Ht="0.11.8";/**
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
 */const qe="auth-internal",Ve="app-check-internal",ze="messaging-internal";function We(t,e){const o=(n,{instanceIdentifier:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider(qe),r=n.getProvider(ze),l=n.getProvider(Ve);return new Be(a,c,r,l,s,t)};Kt(new Jt(At,o,"PUBLIC").setMultipleInstances(!0)),at(Gt,Ht,e),at(Gt,Ht,"esm2017")}/**
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
 */function ae(t=Zt(),e=Dt){const n=Qt($(t),At).getImmediate({identifier:e}),s=Yt("functions");return s&&Xe(n,...s),n}function Xe(t,e,o){Fe($(t),e,o)}function tt(t,e,o){return $e($(t),e)}We(fetch.bind(self));/**
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
 */const ce="firebasestorage.googleapis.com",ie="storageBucket",Ke=2*60*1e3,Je=10*60*1e3;/**
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
 */class T extends te{constructor(e,o,n=0){super(gt(e),`Firebase Storage: ${o} (${gt(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D||(D={}));function gt(t){return"storage/"+t}function Ut(){const t="An unknown error occurred, please check the error payload for server response.";return new T(D.UNKNOWN,t)}function Qe(t){return new T(D.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ye(t){return new T(D.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ze(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T(D.UNAUTHENTICATED,t)}function to(){return new T(D.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eo(t){return new T(D.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oo(){return new T(D.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function no(){return new T(D.CANCELED,"User canceled the upload/download.")}function so(t){return new T(D.INVALID_URL,"Invalid URL '"+t+"'.")}function ao(t){return new T(D.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function co(){return new T(D.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ie+"' property when initializing the app?")}function io(){return new T(D.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ro(){return new T(D.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lo(t){return new T(D.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tt(t){return new T(D.INVALID_ARGUMENT,t)}function re(){return new T(D.APP_DELETED,"The Firebase app was deleted.")}function uo(t){return new T(D.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Y(t,e){return new T(D.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function J(t){throw new T(D.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class E{constructor(e,o){this.bucket=e,this.path_=o}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,o){let n;try{n=E.makeFromUrl(e,o)}catch{return new E(e,"")}if(n.path==="")return n;throw ao(e)}static makeFromUrl(e,o){let n=null;const s="([A-Za-z0-9.\\-_]+)";function a(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const c="(/(.*))?$",r=new RegExp("^gs://"+s+c,"i"),l={bucket:1,path:3};function i(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",d=o.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${u}/b/${s}/o${p}`,"i"),m={bucket:1,path:3},y=o===ce?"(?:storage.googleapis.com|storage.cloud.google.com)":o,v="([^?#]*)",A=new RegExp(`^https?://${y}/${s}/${v}`,"i"),M=[{regex:r,indices:l,postModify:a},{regex:g,indices:m,postModify:i},{regex:A,indices:{bucket:1,path:2},postModify:i}];for(let R=0;R<M.length;R++){const ot=M[R],ft=ot.regex.exec(e);if(ft){const be=ft[ot.indices.bucket];let pt=ft[ot.indices.path];pt||(pt=""),n=new E(be,pt),ot.postModify(n);break}}if(n==null)throw so(e);return n}}class ho{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fo(t,e,o){let n=1,s=null,a=null,c=!1,r=0;function l(){return r===2}let i=!1;function u(...v){i||(i=!0,e.apply(null,v))}function d(v){s=setTimeout(()=>{s=null,t(g,l())},v)}function p(){a&&clearTimeout(a)}function g(v,...A){if(i){p();return}if(v){p(),u.call(null,v,...A);return}if(l()||c){p(),u.call(null,v,...A);return}n<64&&(n*=2);let M;r===1?(r=2,M=0):M=(n+Math.random())*1e3,d(M)}let m=!1;function y(v){m||(m=!0,p(),!i&&(s!==null?(v||(r=2),clearTimeout(s),d(0)):v||(r=1)))}return d(0),a=setTimeout(()=>{c=!0,y(!0)},o),y}function po(t){t(!1)}/**
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
 */function go(t){return t!==void 0}function mo(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){return typeof t=="string"||t instanceof String}function jt(t){return Rt()&&t instanceof Blob}function Rt(){return typeof Blob<"u"}function qt(t,e,o,n){if(n<e)throw Tt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>o)throw Tt(`Invalid value for '${t}'. Expected ${o} or less.`)}/**
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
 */function ht(t,e,o){let n=e;return o==null&&(n=`https://${e}`),`${o}://${n}/v0${t}`}function le(t){const e=encodeURIComponent;let o="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);o=o+s+"&"}return o=o.slice(0,-1),o}var G;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(G||(G={}));/**
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
 */function Io(t,e){const o=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return o||s||a}/**
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
 */class yo{constructor(e,o,n,s,a,c,r,l,i,u,d,p=!0){this.url_=e,this.method_=o,this.headers_=n,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=r,this.errorCallback_=l,this.timeout_=i,this.progressCallback_=u,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new nt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=r=>{const l=r.loaded,i=r.lengthComputable?r.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,i)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const r=a.getErrorCode()===G.NO_ERROR,l=a.getStatus();if(!r||Io(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===G.ABORT;n(!1,new nt(!1,null,u));return}const i=this.successCodes_.indexOf(l)!==-1;n(!0,new nt(i,a))})},o=(n,s)=>{const a=this.resolve_,c=this.reject_,r=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(r,r.getResponse());go(l)?a(l):a()}catch(l){c(l)}else if(r!==null){const l=Ut();l.serverResponse=r.getErrorText(),this.errorCallback_?c(this.errorCallback_(r,l)):c(l)}else if(s.canceled){const l=this.appDelete_?re():no();c(l)}else{const l=oo();c(l)}};this.canceled_?o(!1,new nt(!1,null,!0)):this.backoffId_=fo(e,o,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&po(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,o,n){this.wasSuccessCode=e,this.connection=o,this.canceled=!!n}}function wo(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vo(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _o(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Do(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function To(t,e,o,n,s,a,c=!0){const r=le(t.urlParams),l=t.url+r,i=Object.assign({},t.headers);return _o(i,e),wo(i,o),vo(i,a),Do(i,n),new yo(l,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function So(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bo(...t){const e=So();if(e!==void 0){const o=new e;for(let n=0;n<t.length;n++)o.append(t[n]);return o.getBlob()}else{if(Rt())return new Blob(t);throw new T(D.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ao(t,e,o){return t.webkitSlice?t.webkitSlice(e,o):t.mozSlice?t.mozSlice(e,o):t.slice?t.slice(e,o):null}/**
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
 */function Uo(t){if(typeof atob>"u")throw lo("base-64");return atob(t)}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mt{constructor(e,o){this.data=e,this.contentType=o||null}}function ko(t,e){switch(t){case N.RAW:return new mt(ue(e));case N.BASE64:case N.BASE64URL:return new mt(de(t,e));case N.DATA_URL:return new mt(Eo(e),Mo(e))}throw Ut()}function ue(t){const e=[];for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(o<t.length-1&&(t.charCodeAt(o+1)&64512)===56320))e.push(239,191,189);else{const a=n,c=t.charCodeAt(++o);n=65536|(a&1023)<<10|c&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Ro(t){let e;try{e=decodeURIComponent(t)}catch{throw Y(N.DATA_URL,"Malformed data URL.")}return ue(e)}function de(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Y(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let o;try{o=Uo(e)}catch(s){throw s.message.includes("polyfill")?s:Y(t,"Invalid character found")}const n=new Uint8Array(o.length);for(let s=0;s<o.length;s++)n[s]=o.charCodeAt(s);return n}class he{constructor(e){this.base64=!1,this.contentType=null;const o=e.match(/^data:([^,]+)?,/);if(o===null)throw Y(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=o[1]||null;n!=null&&(this.base64=Co(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Eo(t){const e=new he(t);return e.base64?de(N.BASE64,e.rest):Ro(e.rest)}function Mo(t){return new he(t).contentType}function Co(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class x{constructor(e,o){let n=0,s="";jt(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(o?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(o?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,o){if(jt(this.data_)){const n=this.data_,s=Ao(n,e,o);return s===null?null:new x(s)}else{const n=new Uint8Array(this.data_.buffer,e,o-e);return new x(n,!0)}}static getBlob(...e){if(Rt()){const o=e.map(n=>n instanceof x?n.data_:n);return new x(bo.apply(null,o))}else{const o=e.map(c=>kt(c)?ko(N.RAW,c).data:c.data_);let n=0;o.forEach(c=>{n+=c.byteLength});const s=new Uint8Array(n);let a=0;return o.forEach(c=>{for(let r=0;r<c.length;r++)s[a++]=c[r]}),new x(s,!0)}}uploadData(){return this.data_}}/**
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
 */function fe(t){let e;try{e=JSON.parse(t)}catch{return null}return mo(e)?e:null}/**
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
 */function No(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Oo(t,e){const o=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?o:t+"/"+o}function pe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Po(t,e){return e}class k{constructor(e,o,n,s){this.server=e,this.local=o||e,this.writable=!!n,this.xform=s||Po}}let st=null;function xo(t){return!kt(t)||t.length<2?t:pe(t)}function ge(){if(st)return st;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(a,c){return xo(c)}const o=new k("name");o.xform=e,t.push(o);function n(a,c){return c!==void 0?Number(c):c}const s=new k("size");return s.xform=n,t.push(s),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),st=t,st}function Lo(t,e){function o(){const n=t.bucket,s=t.fullPath,a=new E(n,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:o})}function Bo(t,e,o){const n={};n.type="file";const s=o.length;for(let a=0;a<s;a++){const c=o[a];n[c.local]=c.xform(n,e[c.server])}return Lo(n,t),n}function me(t,e,o){const n=fe(e);return n===null?null:Bo(t,n,o)}function Fo(t,e,o,n){const s=fe(e);if(s===null||!kt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(i=>{const u=t.bucket,d=t.fullPath,p="/b/"+c(u)+"/o/"+c(d),g=ht(p,o,n),m=le({alt:"media",token:i});return g+m})[0]}function $o(t,e){const o={},n=e.length;for(let s=0;s<n;s++){const a=e[s];a.writable&&(o[a.server]=t[a.local])}return JSON.stringify(o)}class Et{constructor(e,o,n,s){this.url=e,this.method=o,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ie(t){if(!t)throw Ut()}function Go(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),a}return o}function Ho(t,e){function o(n,s){const a=me(t,s,e);return Ie(a!==null),Fo(a,s,t.host,t._protocol)}return o}function ye(t){function e(o,n){let s;return o.getStatus()===401?o.getErrorText().includes("Firebase App Check token is invalid")?s=to():s=Ze():o.getStatus()===402?s=Ye(t.bucket):o.getStatus()===403?s=eo(t.path):s=n,s.status=o.getStatus(),s.serverResponse=n.serverResponse,s}return e}function we(t){const e=ye(t);function o(n,s){let a=e(n,s);return n.getStatus()===404&&(a=Qe(t.path)),a.serverResponse=s.serverResponse,a}return o}function jo(t,e,o){const n=e.fullServerUrl(),s=ht(n,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,r=new Et(s,a,Ho(t,o),c);return r.errorHandler=we(e),r}function qo(t,e){const o=e.fullServerUrl(),n=ht(o,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(l,i){}const r=new Et(n,s,c,a);return r.successCodes=[200,204],r.errorHandler=we(e),r}function Vo(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zo(t,e,o){const n=Object.assign({},o);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=Vo(null,e)),n}function Wo(t,e,o,n,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function r(){let M="";for(let R=0;R<2;R++)M=M+Math.random().toString().slice(2);return M}const l=r();c["Content-Type"]="multipart/related; boundary="+l;const i=zo(e,n,s),u=$o(i,o),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+i.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=x.getBlob(d,n,p);if(g===null)throw io();const m={name:i.fullPath},y=ht(a,t.host,t._protocol),v="POST",A=t.maxUploadRetryTime,C=new Et(y,v,Go(t,o),A);return C.urlParams=m,C.headers=c,C.body=g.uploadData(),C.errorHandler=ye(e),C}class Xo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=G.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=G.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=G.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,o,n,s){if(this.sent_)throw J("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(o,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw J("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw J("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw J("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw J("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ko extends Xo{initXhr(){this.xhr_.responseType="text"}}function Mt(){return new Ko}/**
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
 */class j{constructor(e,o){this._service=e,o instanceof E?this._location=o:this._location=E.makeFromUrl(o,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,o){return new j(e,o)}get root(){const e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=No(this._location.path);if(e===null)return null;const o=new E(this._location.bucket,e);return new j(this._service,o)}_throwIfRoot(e){if(this._location.path==="")throw uo(e)}}function Jo(t,e,o){t._throwIfRoot("uploadBytes");const n=Wo(t.storage,t._location,ge(),new x(e,!0),o);return t.storage.makeRequestWithTokens(n,Mt).then(s=>({metadata:s,ref:t}))}function Qo(t){t._throwIfRoot("getDownloadURL");const e=jo(t.storage,t._location,ge());return t.storage.makeRequestWithTokens(e,Mt).then(o=>{if(o===null)throw ro();return o})}function Yo(t){t._throwIfRoot("deleteObject");const e=qo(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Mt)}function Zo(t,e){const o=Oo(t._location.path,e),n=new E(t._location.bucket,o);return new j(t.storage,n)}/**
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
 */function tn(t){return/^[A-Za-z]+:\/\//.test(t)}function en(t,e){return new j(t,e)}function ve(t,e){if(t instanceof Ct){const o=t;if(o._bucket==null)throw co();const n=new j(o,o._bucket);return e!=null?ve(n,e):n}else return e!==void 0?Zo(t,e):t}function on(t,e){if(e&&tn(e)){if(t instanceof Ct)return en(t,e);throw Tt("To use ref(service, url), the first argument must be a Storage instance.")}else return ve(t,e)}function Vt(t,e){const o=e==null?void 0:e[ie];return o==null?null:E.makeFromBucketSpec(o,t)}function nn(t,e,o,n={}){t.host=`${e}:${o}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:Ae(s,t.app.options.projectId))}class Ct{constructor(e,o,n,s,a){this.app=e,this._authProvider=o,this._appCheckProvider=n,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ke,this._maxUploadRetryTime=Je,this._requests=new Set,s!=null?this._bucket=E.makeFromBucketSpec(s,this._host):this._bucket=Vt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=Vt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const o=await e.getToken();if(o!==null)return o.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new j(this,e)}_makeRequest(e,o,n,s,a=!0){if(this._deleted)return new ho(re());{const c=To(e,this._appId,n,s,o,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,o){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,o,n,s).getPromise()}}const zt="@firebase/storage",Wt="0.13.2";/**
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
 */const _e="storage";function sn(t,e,o){return t=$(t),Jo(t,e,o)}function De(t){return t=$(t),Qo(t)}function an(t){return t=$(t),Yo(t)}function Nt(t,e){return t=$(t),on(t,e)}function cn(t=Zt(),e){t=$(t);const n=Qt(t,_e).getImmediate({identifier:e}),s=Yt("storage");return s&&rn(n,...s),n}function rn(t,e,o,n={}){nn(t,e,o,n)}function ln(t,{instanceIdentifier:e}){const o=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(o,n,s,e,Ue)}function un(){Kt(new Jt(_e,ln,"PUBLIC").setMultipleInstances(!0)),at(zt,Wt,""),at(zt,Wt,"esm2017")}un();const Ot=cn(dt);async function mn(t,e,o,n){console.log("uploading file"),console.log(`${t}/${e}/${o}`);const s=Nt(Ot,`${t}/${e}/${o}`),a=await sn(s,n);return await De(a.ref)}async function In(t,e,o){const n=Nt(Ot,`${t}/${e}/${o}`);await an(n)}async function dn(t){const e=localStorage.getItem("schoolId"),o=Nt(Ot,`${e}/${t}.json`);try{const n=await De(o);return(await(await fetch(n)).json()).FCMToken}catch{return null}}const Xt=ae(dt);async function q(t,e,o,n){const s=[],a=[];await Promise.all(e.map(async c=>{const r=await dn(c.userId);console.log("FCM Token: ",r),console.log("Email: ",c.email),r?a.push(r):s.push(c.email)})),s.length>0&&tt(Xt,"sendEmail")({emails:s,activityId:o.activityId,activityName:n,groupName:o.name,groupId:o.id,message:t.message,senderName:t.senderName}),a.length>0&&tt(Xt,"sendNotifications")({targetIds:a,title:`${n} - ${o.name}`,body:`${t.senderName}: ${t.message}`,thread:o.id,data:{type:"activity-chat",activityName:n,activityId:o.activityId,message:t.message,senderName:t.senderName,gcId:o.id,groupName:o.name}})}const Pt=ae(dt),I=ke(dt),xt=f(I,"schools"),hn=async t=>{const e=h(xt,t);return(await b(e)).data()},yn=async()=>{const t=await _(xt),e=[];return t.forEach(o=>{e.push(o.data())}),e},wn=async(t,e,o)=>{const n=h(xt,t);console.log("School ID: "+t),console.log("User ID: "+e),console.log("Account Type: "+o);const s=h(f(n,o+"s"),e);return(await b(s)).exists()},Te=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=h(I,"schools",e);if(t=="student"){const n=S(f(o,"activities"),U("studentUids","array-contains",X())),s=[];return(await _(n)).forEach(c=>{s.push(H.fromMap(c.data()))}),s}else{const n=S(f(o,"activities"),U("teacherUids","array-contains",X())),s=[];return(await _(n)).forEach(c=>{console.log(c.data()),s.push(H.fromMap(c.data()))}),s}};async function fn(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=await b(n);return s.exists()?s.data().type=="theater"?Z.fromMap(s.data()):H.fromMap(s.data()):null}async function vn(t){const e=localStorage.getItem("schoolId");if(!e)return"";const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"shows"),a=await B(s,t.toMap());return t.id=a.id,await w(a,{id:a.id}),a.id}async function _n(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"shows"),t.id);t.lastUpdated=Date.now(),await w(s,t.toMap())}async function Dn(t){const e=f(I,"showTemplates"),o=await B(e,t.toMap());return t.id=o.id,await w(o,{id:o.id}),o.id}async function Tn(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(I,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e),c=await b(a);return c.exists()?(console.log(c.data()),St.fromMap(c.data())):null}async function Sn(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=await b(n);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(W.fromMap(c))}),a}async function bn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await K(c,o.toMap())}async function An(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events");console.log("Adding event"),console.log(t.toMap());const a=await B(s,t.toMap());t.id=a.id,await w(a,{id:a.id})}async function Un(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"events"),a=await B(s,t.toMap());t.id=a.id,await w(a,{id:a.id})}async function kn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=f(a,"events");if(n=="student"){const r=await _(S(c,U("showId","==",e),U("targetUids","array-contains",X()))),l=[];return r.forEach(i=>{i.data().deleted||l.push(O.fromMap(i.data()))}),l}else{const r=await _(S(c,U("showId","==",e))),l=[];return r.forEach(i=>{i.data().deleted||l.push(O.fromMap(i.data()))}),l}}async function Rn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await w(s,{deleted:!0,lastUpdated:Date.now()}),await tt(Pt,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function En(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);await w(s,{deleted:!0,lastUpdated:Date.now()}),await tt(Pt,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function Se(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=h(I,"schools",e),n=h(f(o,"activities"),t),s=f(n,"shows"),a=await _(s),c=[];return a.forEach(r=>{c.push(St.fromMap(r.data()))}),c}async function Mn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await w(c,{conflictForm:o.toMap(),lastUpdated:Date.now()}),await tt(Pt,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:n,deadline:o.deadline.toISOString()})}async function Cn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);await w(c,{conflictForm:o.toMap(),lastUpdated:Date.now()})}async function Nn(){const t=X(),e=localStorage.getItem("schoolId");if(!e)return null;const o=h(I,"schools",e),n=h(o,"students",t),s=await b(n);return s.exists()?W.fromMap(s.data()):null}async function On(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=h(c,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await K(r,o.toMap())}async function Pn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(X());const u=await _(S(r,U("submitterId","==",X()))),d=[];return u.forEach(p=>{d.push(yt.fromMap(p.data()))}),d}const l=await _(r),i=[];return l.forEach(u=>{i.push(yt.fromMap(u.data()))}),i}async function xn(){const t=f(I,"showTemplates"),e=await _(t),o=[];return e.forEach(n=>{o.push(St.fromMap(n.data()))}),o}async function Ln(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+n),!e||!o||!n)return null;const s=h(I,"schools",e),a=S(f(s,"activities"),U("joinCode","==",t)),c=await _(a);if(c.empty)return null;const r=c.docs[0],l=h(f(s,n=="student"?"students":"teachers"),o),i=await b(l);if(console.log(i.data()),!i.exists())return null;if(r.data().studentUids.includes(o)||r.data().teacherUids.includes(o))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),r.data().type=="theater"){if((i.data().gender==null||i.data().gender=="")&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),i.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(i.data().phoneNumber==""||i.data().gender==null||i.data().gender=="")&&n=="student")return null;if(n=="student")return await w(r.ref,{studentUids:[...r.data().studentUids,o],students:[...r.data().students,W.fromMap(i.data()).toMap()],lastUpdated:Date.now()}),Z.fromMap(r.data());{console.log("Joining as teacher"),console.log(i.data());const u=ct.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return console.log(u.toMap()),await w(r.ref,{teacherUids:[...r.data().teacherUids,o],teachers:[...r.data().teachers,u.toMap()],lastUpdated:Date.now()}),Z.fromMap(r.data())}}else if(n=="student"){const u=W.fromBlank(i.data().fullname,i.data().gender,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await w(r.ref,{studentUids:[...r.data().studentUids,o],students:[...r.data().students,u.toMap()],lastUpdated:Date.now()}),H.fromMap(r.data())}else{const u=ct.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await w(r.ref,{teacherUids:[...r.data().teacherUids,o],teachers:[...r.data().teachers,u.toMap()],lastUpdated:Date.now()}),H.fromMap(r.data())}}async function Bn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(I,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await w(a,{gender:t,lastUpdated:Date.now()})}async function Fn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=h(I,"schools",e),a=h(f(s,n=="student"?"students":"teachers"),o);await w(a,{phoneNumber:t,lastUpdated:Date.now()})}async function $n(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);t.lastUpdated=Date.now(),await w(s,t.toMap())}async function Gn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=h(f(n,"events"),t.id);t.lastUpdated=Date.now(),await w(s,t.toMap())}async function Hn(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const n=h(I,"schools",t),s=[];let a;o=="student"?a=await _(S(f(n,"activities"),U("studentUids","array-contains",e))):a=await _(S(f(n,"activities"),U("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const r=[];o=="student"?(console.log("Getting events for student"),r.push(await _(S(f(c.ref,"events"),U("targetUids","array-contains",e)))),r.push(await _(S(f(c.ref,"events"),U("generalTarget","==","students"))))):(console.log("Getting events for teacher"),r.push(await _(f(c.ref,"events"))));for(const l of r)for(const i of l.docs){const u=i.data();console.log(u),u.type=="activity-theater-event"?s.push(O.fromMap(u)):s.push(et.fromMap(u))}}return s}async function jn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o)return[];const s=h(I,"schools",e),a=h(f(s,"activities"),t),c=[],r=[];n=="student"?(console.log("Getting events for student"),c.push(await _(S(f(a,"events"),U("targetUids","array-contains",o)))),c.push(await _(S(f(a,"events"),U("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await _(f(a,"events"))));for(const l of c)for(const i of l.docs){const u=i.data();u.deleted||(console.log(u),u.id=i.id,console.log(u),r.push(et.fromMap(u)))}return r}async function qn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return null;const s=h(I,"schools",o),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses"),l=await b(h(r,n));return l.exists()?yt.fromMap(l.data()):null}async function Vn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await w(s,{rehearsalLocations:e.map(a=>a.toMap()),lastUpdated:Date.now()})}async function zn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return[];const s=localStorage.getItem("accountType"),a=h(I,"schools",o),c=h(f(a,"activities"),t);if(s=="teacher")wt(f(c,"groupChats"),async r=>{const l=[];for(const i of r.docs){const u=L.fromMap(i.data());if((u.generalTarget=="direct"||u.generalTarget=="custom")&&!u.members.find(m=>m.userId==n))continue;if(u.generalTarget=="direct"){const m=u.members.find(y=>y.userId!=n);u.name=(m==null?void 0:m.name)||"Unknown"}const d=f(i.ref,"messages"),p=S(d,Ft("timeSent","desc"),Bt(1)),g=await _(p);g.empty||(u.lastMessage=vt.fromMap(g.docs[0].data())),l.push(u)}l.sort((i,u)=>i.lastMessage?u.lastMessage?u.lastMessage.timeSent.getTime()-i.lastMessage.timeSent.getTime():-1:1),e(l)});else{const r=h(f(a,"students"),n),l=await b(r);if(!l.exists())return;const i=bt.fromMap(l.data());console.log(i),wt(f(c,"groupChats"),async u=>{const d=[];for(const p of u.docs){const g=L.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(A=>A.userId==n)))continue;if(g.generalTarget=="direct"){const A=g.members.find(C=>C.userId!=n);g.name=(A==null?void 0:A.name)||"Unknown"}const m=f(p.ref,"messages"),y=S(m,Ft("timeSent","desc"),Bt(1)),v=await _(y);v.empty||(g.lastMessage=vt.fromMap(v.docs[0].data())),d.push(g)}d.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(d)})}}async function Wn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return[];const s=h(I,"schools",n),a=h(f(s,"activities"),t);console.log("Getting messages for "+e);const c=h(f(a,"groupChats"),e),r=f(c,"messages");wt(r,l=>{const i=[];l.forEach(u=>{i.push(vt.fromMap(u.data()))}),i.sort((u,d)=>u.timeSent.getTime()-d.timeSent.getTime()),o(i)})}async function Lt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const n=h(I,"schools",t),s=h(f(n,o=="student"?"students":"teachers"),e),a=await b(s);return a.exists()?o=="student"?bt.fromMap(a.data()):Re.fromMap(a.data()):null}async function Xn(t){const e=h(f(I,"parents"),t),o=await b(e);return o.exists()?o.data():null}async function Kn(t,e,o,n,s){if(o.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const r=h(I,"schools",a),l=h(f(r,"activities"),t),i=h(f(l,"groupChats"),e),u=await b(i);if(!u.exists()){if(s==null)return;const m=await Lt();if(!m)return;const y=L.fromBlank("",s.userId,[ne.fromBlank(m.fullname,m.email,m.phoneNumber,m.FCMToken,m.uid),s],"direct",t,Date.now());await K(i,y.toMap());const v=f(i,"messages"),A=await B(v,o.toMap());o.messageId=A.id,await w(A,{messageId:A.id,lastUpdated:Date.now()}),q(o,[P.fromBlank(s.userId,s.email)],y,n);return}const d=L.fromMap(u.data()),p=f(i,"messages"),g=await B(p,o.toMap());if(o.messageId=g.id,await w(g,{messageId:g.id,lastUpdated:Date.now()}),d.generalTarget!="direct"&&d.generalTarget!="custom"&&d.generalTarget!="group"){const m=await fn(t);if(!m)return;if(d.generalTarget=="everyone"){let y=m.students.map(v=>P.fromBlank(v.userId,v.email));y=y.concat(m.teachers.map(v=>P.fromBlank(v.userId,v.email))),y=y.concat(m.parents.map(v=>P.fromBlank(v.userId,v.email))),y=y.filter(v=>v.userId!=o.senderUid),q(o,y,d,m.name)}else if(d.generalTarget=="students"){let y=m.students.map(v=>P.fromBlank(v.userId,v.email));y=y.filter(v=>v.userId!=o.senderUid),q(o,y,d,m.name)}else if(d.generalTarget=="parents"){let y=m.parents.map(v=>P.fromBlank(v.userId,v.email));y=y.filter(v=>v.userId!=o.senderUid),q(o,y,d,m.name)}return}if(d.generalTarget=="direct"){const m=d.members.find(y=>y.userId!=c);if(!m)return;q(o,[P.fromBlank(m.userId,m.email)],d,n);return}if(d.generalTarget=="custom"){const m=d.members.filter(y=>y.userId!=c).map(y=>P.fromBlank(y.userId,y.email));q(o,m,d,n);return}}async function It(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=f(n,"groupChats"),a=await Lt();if(!a)return;const c=ne.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const r=await B(s,t.toMap());t.id=r.id,await w(r,{id:r.id})}async function Jn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);w(c,{resources:F(o.toMap()),lastUpdated:Date.now()})}async function Qn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e);w(c,{resources:Me(o.toMap()),lastUpdated:Date.now()})}async function Yn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=h(f(a,"shows"),e),r=f(c,"conflictResponses"),l=h(r,o.id);await Ee(l)}async function Zn(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=f(n,t+"s");await K(h(s,e.uid),e.toMap());let a;e instanceof bt?a=W.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=ct.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await w(n,{[t+"Uids"]:F(e.uid),[t+"s"]:F(a.toMap()),lastUpdated:Date.now()})}function pn(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function ts(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=h(I,"schools",o),s=await b(n);if(!s.exists())return null;const a=s.data(),c=f(n,"activities"),r=pn(t);console.log(r);const l=[Q.fromMap({name:"Rehearsal",color:{red:255,green:0,blue:0,alpha:255}}),Q.fromMap({name:"Performance",color:{red:0,green:255,blue:0,alpha:255}})],i=[Q.fromMap({name:"Practice",color:{red:255,green:0,blue:0,alpha:255}}),Q.fromMap({name:"Game",color:{red:0,green:255,blue:0,alpha:255}})],u=[oe.fromMap({name:"Auditorium",color:{red:0,green:0,blue:255,alpha:255}})],d=lt.fromMap(a.location),p=[d],g=await Lt();if(!g)return null;const m=ct.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let y;e=="theater"?y=Z.fromBlank(t,"",r,[],[],[],[m],p,l,d,u,"type",Date.now()):y=H.fromBlank(t,"",r,[],[],[],[m],p,i,d,"type",Date.now(),"activity"),console.log(y.toMap());const v=await B(c,y.toMap());y.id=v.id,await w(v,{id:v.id});const A=L.fromMap({name:"Everyone",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"everyone"});await It(A);const C=L.fromMap({name:"Parents",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"parents"});await It(C);const M=L.fromMap({name:"Students",members:[],id:"",activityId:y.id,lastUpdated:Date.now(),generalTarget:"students"});return await It(M),y}async function es(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return null;const s=h(I,"schools",n),a=h(f(s,"activities"),o),c=f(a,"groupChats"),r=L.fromBlank("",e.userId,[t,e],"direct",o,Date.now());return await K(h(c,e.userId),r.toMap()),r.name=e.name,r}async function os(){const t=await hn(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(o=>{e.push(lt.fromMap(o))}),e}async function ns(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await w(s,{locations:F(e.toMap()),lastUpdated:Date.now()})}async function ss(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e);await w(o,{savedLocations:F(t.toMap()),lastUpdated:Date.now()})}async function as(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t);await w(s,{eventTypes:F(e.toMap()),lastUpdated:Date.now()})}async function cs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t),a=h(f(s,"shows"),e);await w(a,{isCreatingSchedule:!0,lastUpdated:Date.now()})}async function is(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=f(n,"students");await K(h(s,t.uid),t.toMap());const a=W.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await w(n,{studentUids:F(t.uid),students:F(a.toMap()),lastUpdated:Date.now()});const c=a.userId;if(!o||!c)return null;const r=h(f(n,"activities"),e),l=await b(r);return l.exists()?l.data().type=="theater"?(await w(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()],lastUpdated:Date.now()}),Z.fromMap(l.data())):(await w(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()],lastUpdated:Date.now()}),H.fromMap(l.data())):null}async function rs(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=S(f(n,"events"),U("showId","==",t.id)),a=await _(s);for(const c of a.docs){const r=O.fromMap(c.data());for(let i=0;i<r.characters.length;i++){const u=r.characters[i];u instanceof V?r.characters[i]=t.characters.find(d=>d.name==u.name):u instanceof it&&(r.characters[i]=t.showGroups.find(d=>d.name==u.name))}const l=[];for(const i of r.characters){if(i instanceof ee){for(const u of t.ensemble.actors)l.push(u);for(const u of t.characters)l.find(d=>d.userId==u.actor.userId)==null&&l.push(u.actor);break}if(i instanceof V){if(l.find(u=>u.userId==i.actor.userId)!=null)continue;l.push(i.actor)}if(i instanceof rt){if(i.includeAll)for(const u of t.ensemble.actors)l.find(d=>d.userId==u.userId)==null&&l.push(u);else if(i.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(l.find(d=>d.userId==u.userId)!=null)continue;l.push(u)}}else if(i.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(l.find(d=>d.userId==u.userId)!=null)continue;l.push(u)}}else if(i.includeCustom)for(const u of i.customActors)l.find(d=>d.userId==u.userId)==null&&l.push(u)}if(i instanceof it)for(const u of i.characters){if(u instanceof V){if(l.find(d=>d.userId==u.actor.userId)!=null)continue;l.push(u.actor)}if(u instanceof rt){if(u.includeAll)for(const d of t.ensemble.actors)l.find(p=>p.userId==d.userId)==null&&l.push(d);else if(u.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(l.find(p=>p.userId==d.userId)!=null)continue;l.push(d)}}else if(u.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(l.find(p=>p.userId==d.userId)!=null)continue;l.push(d)}}else if(u.includeCustom)for(const d of u.customActors)l.find(p=>p.userId==d.userId)==null&&l.push(d)}}}r.targets=l,r.lastUpdated=Date.now(),await w(c.ref,r.toMap())}}async function ls(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=h(I,"schools",e),n=h(f(o,"activities"),t.activityId),s=S(f(n,"events"),U("showId","==",t.id)),a=await _(s);for(const c of a.docs){const r=O.fromMap(c.data()),l=[];for(let u=0;u<r.characters.length;u++){const d=r.characters[u];if(d instanceof V){const p=t.characters.find(g=>g.characterId==d.characterId);p&&l.push(p)}else if(d instanceof it){const p=t.showGroups.find(g=>g.showGroupId==d.showGroupId);p&&l.push(p)}r.characters=l}const i=[];for(const u of l){if(u instanceof ee){for(const d of t.ensemble.actors)i.push(d);for(const d of t.characters)i.find(p=>p.userId==d.actor.userId)==null&&i.push(d.actor);break}if(u instanceof V){if(i.find(d=>d.userId==u.actor.userId)!=null)continue;i.push(u.actor)}if(u instanceof rt){if(u.includeAll)for(const d of t.ensemble.actors)i.find(p=>p.userId==d.userId)==null&&i.push(d);else if(u.includeMale){for(const d of t.ensemble.actors)if(d.gender=="male"){if(i.find(p=>p.userId==d.userId)!=null)continue;i.push(d)}}else if(u.includeFemale){for(const d of t.ensemble.actors)if(d.gender=="female"){if(i.find(p=>p.userId==d.userId)!=null)continue;i.push(d)}}else if(u.includeCustom)for(const d of u.customActors)i.find(p=>p.userId==d.userId)==null&&i.push(d)}if(u instanceof it)for(const d of u.characters){if(d instanceof V){if(i.find(p=>p.userId==d.actor.userId)!=null)continue;i.push(d.actor)}if(d instanceof rt){if(d.includeAll)for(const p of t.ensemble.actors)i.find(g=>g.userId==p.userId)==null&&i.push(p);else if(d.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(d.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(d.includeCustom)for(const p of d.customActors)i.find(g=>g.userId==p.userId)==null&&i.push(p)}}}r.targets=i,r.lastUpdated=Date.now(),await w(c.ref,r.toMap())}}async function us(){if(!localStorage.getItem("schoolId"))return[];const e=await Te(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)console.log("Getting resources for "+a.name),o.push(...a.resources)}return o}async function ds(){if(!localStorage.getItem("schoolId"))return[];const e=await Te(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await Se(n.id);for(const a of s)a.activityName=n.name,o.push(a)}return o}async function hs(t){const e=localStorage.getItem("userId"),o=h(f(I,"parents"),t),n=await b(o);if(!n.exists())return null;const s=n.data(),a=s.requestedChildren,c=s.children,r=a.find(l=>l.uid==e);if(!r)return null;a.splice(a.indexOf(r),1),c.push(r),await w(o,{requestedChildren:a,children:c,lastUpdated:Date.now()})}async function fs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=await b(a);if(!c.exists())return;const r=c.data(),l=r.locations;for(let p=0;p<l.length;p++)lt.fromMap(l[p]).name==o.name&&(l[p]=e.toMap());let i=lt.fromMap(r.defaultLocation);i.name==o.name&&(i=e),await w(a,{locations:l,defaultLocation:i.toMap(),lastUpdated:Date.now()});const u=S(f(a,"events"),U("location","==",o.toMap())),d=await _(u);for(const p of d.docs){const g=p.data();if(g.type=="activity-theater-event"){const m=O.fromMap(g);m.location=e,m.lastUpdated=Date.now(),await w(p.ref,m.toMap())}else{const m=et.fromMap(g);m.location=e,m.lastUpdated=Date.now(),await w(p.ref,m.toMap())}}}async function ps(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=h(I,"schools",n),a=h(f(s,"activities"),t),c=await b(a);if(!c.exists())return;const r=c.data();if(r.type!="theater")return;const l=r.rehearsalLocations;for(let d=0;d<l.length;d++)oe.fromMap(l[d]).name==o.name&&(l[d]=e.toMap());await w(a,{rehearsalLocations:l,lastUpdated:Date.now()});const i=S(f(a,"events"),U("rehearsalLocation","==",o.toMap())),u=await _(i);for(const d of u.docs){const p=d.data();if(p.type=="activity-theater-event"){const g=O.fromMap(p);g.rehearsalLocation=e,g.lastUpdated=Date.now(),await w(d.ref,g.toMap())}}}async function gs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=h(I,"schools",o),s=h(f(n,"activities"),t),a=await b(s);if(!a.exists())return;a.data(),await w(s,{name:e,lastUpdated:Date.now()});const c=f(s,"events"),r=await _(c);for(const l of r.docs){const i=l.data();if(i.type=="activity-theater-event"){const u=O.fromMap(i);u.activityName=e,u.lastUpdated=Date.now(),await w(l.ref,u.toMap())}else{const u=et.fromMap(i);u.activityName=e,u.lastUpdated=Date.now(),await w(l.ref,u.toMap())}}}async function ms(t,e,o,n){const s=localStorage.getItem("schoolId");if(!s)return;const a=h(I,"schools",s),c=h(f(a,"activities"),t),r=await b(c);if(!r.exists())return;const i=r.data().eventTypes;for(let p=0;p<i.length;p++)Q.fromMap(i[p]).name==o.name&&(i[p]=e.toMap());await w(c,{eventTypes:i,lastUpdated:Date.now()});const u=S(f(c,"events"),U(n?"activityEventType":"eventType","==",o.toMap())),d=await _(u);for(const p of d.docs){const g=p.data();if(g.type=="activity-theater-event"){const m=O.fromMap(g);m.activityEventType=e,m.lastUpdated=Date.now(),await w(p.ref,m.toMap())}else{const m=et.fromMap(g);m.eventType=e,m.lastUpdated=Date.now(),await w(p.ref,m.toMap())}}}export{ds as $,Yn as A,Nn as B,On as C,Cn as D,Mn as E,Hn as F,qn as G,Vn as H,ns as I,ss as J,as as K,fs as L,ms as M,ps as N,gs as O,os as P,It as Q,Kn as R,Wn as S,zn as T,es as U,mn as V,Jn as W,In as X,Qn as Y,is as Z,us as _,wn as a,En as a0,jn as a1,Gn as a2,Un as a3,hs as a4,Xn as a5,yn as b,Zn as c,Bn as d,ts as e,Te as f,Lt as g,fn as h,Se as i,Ln as j,xn as k,vn as l,Dn as m,_n as n,ls as o,Tn as p,Sn as q,rs as r,cs as s,bn as t,Fn as u,Pn as v,kn as w,Rn as x,$n as y,An as z};
