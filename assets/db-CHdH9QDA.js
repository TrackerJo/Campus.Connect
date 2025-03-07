import{K as Be,N as h,P as d,Q as U,u as st,j as V,U as L,V as v,g as Nt,i as Q,W as D,X as T,Y as S,l as B,Z as q,o as Ut,_ as At,S as Ot,T as Fe,$ as N,a0 as $e,a1 as ft,c as z,e as ht,F as oe,d as pt,L as gt,y as Z,q as ne,s as ot,t as Ge,v as x,a2 as se,H as J,J as ae,O as at,I as ce,a as ie,a3 as qt,a4 as Wt,M as Mt,w as re,a5 as $,a6 as He}from"./constants-CiIGZTLG.js";import{_ as le,C as ue,f as mt,h as de,k as H,m as fe,n as he,F as pe,o as je,S as Ve,p as It,g as Y}from"./index-CBYUpoa4.js";/**
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
 */const qe="type.googleapis.com/google.protobuf.Int64Value",We="type.googleapis.com/google.protobuf.UInt64Value";function ge(t,e){const o={};for(const n in t)t.hasOwnProperty(n)&&(o[n]=e(t[n]));return o}function Rt(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Rt(e));if(typeof t=="function"||typeof t=="object")return ge(t,e=>Rt(e));throw new Error("Data cannot be encoded in JSON: "+t)}function yt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case qe:case We:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>yt(e)):typeof t=="function"||typeof t=="object"?ge(t,e=>yt(e)):t}/**
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
 */const Xt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends pe{constructor(e,o,n){super(`${Pt}/${e}`,o||""),this.details=n}}function Xe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ze(t,e){let o=Xe(t),n=o,s;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!Xt[c])return new K("internal","internal");o=Xt[c],n=c}const r=a.message;typeof r=="string"&&(n=r),s=a.details,s!==void 0&&(s=yt(s))}}catch{}return o==="ok"?null:new K(o,n,s)}/**
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
 */class Je{constructor(e,o,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||o.get().then(s=>this.messaging=s,()=>{}),this.appCheck||n.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const o=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(e){const o=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:o,messagingToken:n,appCheckToken:s}}}/**
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
 */const Et="us-central1";function Ke(t){let e=null;return{promise:new Promise((o,n)=>{e=setTimeout(()=>{n(new K("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Qe{constructor(e,o,n,s,a=Et,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new Je(o,n,s),this.cancelAllRequests=new Promise(r=>{this.deleteService=()=>Promise.resolve(r())});try{const r=new URL(a);this.customDomain=r.origin+(r.pathname==="/"?"":r.pathname),this.region=Et}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${o}.cloudfunctions.net/${e}`}}function Ye(t,e,o){t.emulatorOrigin=`http://${e}:${o}`}function Ze(t,e,o){return n=>eo(t,e,n,{})}async function to(t,e,o,n){o["Content-Type"]="application/json";let s;try{s=await n(t,{method:"POST",body:JSON.stringify(e),headers:o})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}function eo(t,e,o,n){const s=t._url(e);return oo(t,s,o,n)}async function oo(t,e,o,n){o=Rt(o);const s={data:o},a={},c=await t.contextProvider.getContext(n.limitedUseAppCheckTokens);c.authToken&&(a.Authorization="Bearer "+c.authToken),c.messagingToken&&(a["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=c.appCheckToken);const r=n.timeout||7e4,l=Ke(r),i=await Promise.race([to(e,s,a,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!i)throw new K("cancelled","Firebase Functions instance was deleted.");const u=ze(i.status,i.json);if(u)throw u;if(!i.json)throw new K("internal","Response is not valid JSON object.");let f=i.json.data;if(typeof f>"u"&&(f=i.json.result),typeof f>"u")throw new K("internal","Response is missing data field.");return{data:yt(f)}}const zt="@firebase/functions",Jt="0.11.8";/**
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
 */const no="auth-internal",so="app-check-internal",ao="messaging-internal";function co(t,e){const o=(n,{instanceIdentifier:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider(no),r=n.getProvider(ao),l=n.getProvider(so);return new Qe(a,c,r,l,s,t)};le(new ue(Pt,o,"PUBLIC").setMultipleInstances(!0)),mt(zt,Jt,e),mt(zt,Jt,"esm2017")}/**
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
 */function me(t=he(),e=Et){const n=de(H(t),Pt).getImmediate({identifier:e}),s=fe("functions");return s&&io(n,...s),n}function io(t,e,o){Ye(H(t),e,o)}function O(t,e,o){return Ze(H(t),e)}co(fetch.bind(self));/**
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
 */const ye="firebasestorage.googleapis.com",Ie="storageBucket",ro=2*60*1e3,lo=10*60*1e3;/**
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
 */class k extends pe{constructor(e,o,n=0){super(bt(e),`Firebase Storage: ${o} (${bt(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var b;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(b||(b={}));function bt(t){return"storage/"+t}function xt(){const t="An unknown error occurred, please check the error payload for server response.";return new k(b.UNKNOWN,t)}function uo(t){return new k(b.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fo(t){return new k(b.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ho(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new k(b.UNAUTHENTICATED,t)}function po(){return new k(b.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function go(t){return new k(b.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mo(){return new k(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yo(){return new k(b.CANCELED,"User canceled the upload/download.")}function Io(t){return new k(b.INVALID_URL,"Invalid URL '"+t+"'.")}function wo(t){return new k(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vo(){return new k(b.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ie+"' property when initializing the app?")}function Do(){return new k(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _o(){return new k(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function To(t){return new k(b.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ct(t){return new k(b.INVALID_ARGUMENT,t)}function we(){return new k(b.APP_DELETED,"The Firebase app was deleted.")}function So(t){return new k(b.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nt(t,e){return new k(b.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function et(t){throw new k(b.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class C{constructor(e,o){this.bucket=e,this.path_=o}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,o){let n;try{n=C.makeFromUrl(e,o)}catch{return new C(e,"")}if(n.path==="")return n;throw wo(e)}static makeFromUrl(e,o){let n=null;const s="([A-Za-z0-9.\\-_]+)";function a(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const c="(/(.*))?$",r=new RegExp("^gs://"+s+c,"i"),l={bucket:1,path:3};function i(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",f=o.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${u}/b/${s}/o${p}`,"i"),m={bucket:1,path:3},I=o===ye?"(?:storage.googleapis.com|storage.cloud.google.com)":o,w="([^?#]*)",_=new RegExp(`^https?://${I}/${s}/${w}`,"i"),R=[{regex:r,indices:l,postModify:a},{regex:g,indices:m,postModify:i},{regex:_,indices:{bucket:1,path:2},postModify:i}];for(let E=0;E<R.length;E++){const rt=R[E],Tt=rt.regex.exec(e);if(Tt){const Le=Tt[rt.indices.bucket];let St=Tt[rt.indices.path];St||(St=""),n=new C(Le,St),rt.postModify(n);break}}if(n==null)throw Io(e);return n}}class bo{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ko(t,e,o){let n=1,s=null,a=null,c=!1,r=0;function l(){return r===2}let i=!1;function u(...w){i||(i=!0,e.apply(null,w))}function f(w){s=setTimeout(()=>{s=null,t(g,l())},w)}function p(){a&&clearTimeout(a)}function g(w,..._){if(i){p();return}if(w){p(),u.call(null,w,..._);return}if(l()||c){p(),u.call(null,w,..._);return}n<64&&(n*=2);let R;r===1?(r=2,R=0):R=(n+Math.random())*1e3,f(R)}let m=!1;function I(w){m||(m=!0,p(),!i&&(s!==null?(w||(r=2),clearTimeout(s),f(0)):w||(r=1)))}return f(0),a=setTimeout(()=>{c=!0,I(!0)},o),I}function Uo(t){t(!1)}/**
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
 */function Ao(t){return t!==void 0}function Mo(t){return typeof t=="object"&&!Array.isArray(t)}function Lt(t){return typeof t=="string"||t instanceof String}function Kt(t){return Bt()&&t instanceof Blob}function Bt(){return typeof Blob<"u"}function Qt(t,e,o,n){if(n<e)throw Ct(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>o)throw Ct(`Invalid value for '${t}'. Expected ${o} or less.`)}/**
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
 */function wt(t,e,o){let n=e;return o==null&&(n=`https://${e}`),`${o}://${n}/v0${t}`}function ve(t){const e=encodeURIComponent;let o="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);o=o+s+"&"}return o=o.slice(0,-1),o}var j;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(j||(j={}));/**
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
 */function Ro(t,e){const o=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return o||s||a}/**
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
 */class Eo{constructor(e,o,n,s,a,c,r,l,i,u,f,p=!0){this.url_=e,this.method_=o,this.headers_=n,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=r,this.errorCallback_=l,this.timeout_=i,this.progressCallback_=u,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new lt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=r=>{const l=r.loaded,i=r.lengthComputable?r.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,i)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const r=a.getErrorCode()===j.NO_ERROR,l=a.getStatus();if(!r||Ro(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===j.ABORT;n(!1,new lt(!1,null,u));return}const i=this.successCodes_.indexOf(l)!==-1;n(!0,new lt(i,a))})},o=(n,s)=>{const a=this.resolve_,c=this.reject_,r=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(r,r.getResponse());Ao(l)?a(l):a()}catch(l){c(l)}else if(r!==null){const l=xt();l.serverResponse=r.getErrorText(),this.errorCallback_?c(this.errorCallback_(r,l)):c(l)}else if(s.canceled){const l=this.appDelete_?we():yo();c(l)}else{const l=mo();c(l)}};this.canceled_?o(!1,new lt(!1,null,!0)):this.backoffId_=ko(e,o,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Uo(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lt{constructor(e,o,n){this.wasSuccessCode=e,this.connection=o,this.canceled=!!n}}function Co(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function No(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Oo(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Po(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xo(t,e,o,n,s,a,c=!0){const r=ve(t.urlParams),l=t.url+r,i=Object.assign({},t.headers);return Oo(i,e),Co(i,o),No(i,a),Po(i,n),new Eo(l,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,c)}/**
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
 */function Lo(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Bo(...t){const e=Lo();if(e!==void 0){const o=new e;for(let n=0;n<t.length;n++)o.append(t[n]);return o.getBlob()}else{if(Bt())return new Blob(t);throw new k(b.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Fo(t,e,o){return t.webkitSlice?t.webkitSlice(e,o):t.mozSlice?t.mozSlice(e,o):t.slice?t.slice(e,o):null}/**
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
 */function $o(t){if(typeof atob>"u")throw To("base-64");return atob(t)}/**
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
 */const P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kt{constructor(e,o){this.data=e,this.contentType=o||null}}function Go(t,e){switch(t){case P.RAW:return new kt(De(e));case P.BASE64:case P.BASE64URL:return new kt(_e(t,e));case P.DATA_URL:return new kt(jo(e),Vo(e))}throw xt()}function De(t){const e=[];for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(o<t.length-1&&(t.charCodeAt(o+1)&64512)===56320))e.push(239,191,189);else{const a=n,c=t.charCodeAt(++o);n=65536|(a&1023)<<10|c&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Ho(t){let e;try{e=decodeURIComponent(t)}catch{throw nt(P.DATA_URL,"Malformed data URL.")}return De(e)}function _e(t,e){switch(t){case P.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw nt(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw nt(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let o;try{o=$o(e)}catch(s){throw s.message.includes("polyfill")?s:nt(t,"Invalid character found")}const n=new Uint8Array(o.length);for(let s=0;s<o.length;s++)n[s]=o.charCodeAt(s);return n}class Te{constructor(e){this.base64=!1,this.contentType=null;const o=e.match(/^data:([^,]+)?,/);if(o===null)throw nt(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=o[1]||null;n!=null&&(this.base64=qo(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function jo(t){const e=new Te(t);return e.base64?_e(P.BASE64,e.rest):Ho(e.rest)}function Vo(t){return new Te(t).contentType}function qo(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class G{constructor(e,o){let n=0,s="";Kt(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(o?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(o?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,o){if(Kt(this.data_)){const n=this.data_,s=Fo(n,e,o);return s===null?null:new G(s)}else{const n=new Uint8Array(this.data_.buffer,e,o-e);return new G(n,!0)}}static getBlob(...e){if(Bt()){const o=e.map(n=>n instanceof G?n.data_:n);return new G(Bo.apply(null,o))}else{const o=e.map(c=>Lt(c)?Go(P.RAW,c).data:c.data_);let n=0;o.forEach(c=>{n+=c.byteLength});const s=new Uint8Array(n);let a=0;return o.forEach(c=>{for(let r=0;r<c.length;r++)s[a++]=c[r]}),new G(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Se(t){let e;try{e=JSON.parse(t)}catch{return null}return Mo(e)?e:null}/**
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
 */function Wo(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Xo(t,e){const o=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?o:t+"/"+o}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function zo(t,e){return e}class A{constructor(e,o,n,s){this.server=e,this.local=o||e,this.writable=!!n,this.xform=s||zo}}let ut=null;function Jo(t){return!Lt(t)||t.length<2?t:be(t)}function ke(){if(ut)return ut;const t=[];t.push(new A("bucket")),t.push(new A("generation")),t.push(new A("metageneration")),t.push(new A("name","fullPath",!0));function e(a,c){return Jo(c)}const o=new A("name");o.xform=e,t.push(o);function n(a,c){return c!==void 0?Number(c):c}const s=new A("size");return s.xform=n,t.push(s),t.push(new A("timeCreated")),t.push(new A("updated")),t.push(new A("md5Hash",null,!0)),t.push(new A("cacheControl",null,!0)),t.push(new A("contentDisposition",null,!0)),t.push(new A("contentEncoding",null,!0)),t.push(new A("contentLanguage",null,!0)),t.push(new A("contentType",null,!0)),t.push(new A("metadata","customMetadata",!0)),ut=t,ut}function Ko(t,e){function o(){const n=t.bucket,s=t.fullPath,a=new C(n,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:o})}function Qo(t,e,o){const n={};n.type="file";const s=o.length;for(let a=0;a<s;a++){const c=o[a];n[c.local]=c.xform(n,e[c.server])}return Ko(n,t),n}function Ue(t,e,o){const n=Se(e);return n===null?null:Qo(t,n,o)}function Yo(t,e,o,n){const s=Se(e);if(s===null||!Lt(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(i=>{const u=t.bucket,f=t.fullPath,p="/b/"+c(u)+"/o/"+c(f),g=wt(p,o,n),m=ve({alt:"media",token:i});return g+m})[0]}function Zo(t,e){const o={},n=e.length;for(let s=0;s<n;s++){const a=e[s];a.writable&&(o[a.server]=t[a.local])}return JSON.stringify(o)}class Ft{constructor(e,o,n,s){this.url=e,this.method=o,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ae(t){if(!t)throw xt()}function tn(t,e){function o(n,s){const a=Ue(t,s,e);return Ae(a!==null),a}return o}function en(t,e){function o(n,s){const a=Ue(t,s,e);return Ae(a!==null),Yo(a,s,t.host,t._protocol)}return o}function Me(t){function e(o,n){let s;return o.getStatus()===401?o.getErrorText().includes("Firebase App Check token is invalid")?s=po():s=ho():o.getStatus()===402?s=fo(t.bucket):o.getStatus()===403?s=go(t.path):s=n,s.status=o.getStatus(),s.serverResponse=n.serverResponse,s}return e}function Re(t){const e=Me(t);function o(n,s){let a=e(n,s);return n.getStatus()===404&&(a=uo(t.path)),a.serverResponse=s.serverResponse,a}return o}function on(t,e,o){const n=e.fullServerUrl(),s=wt(n,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,r=new Ft(s,a,en(t,o),c);return r.errorHandler=Re(e),r}function nn(t,e){const o=e.fullServerUrl(),n=wt(o,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function c(l,i){}const r=new Ft(n,s,c,a);return r.successCodes=[200,204],r.errorHandler=Re(e),r}function sn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function an(t,e,o){const n=Object.assign({},o);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=sn(null,e)),n}function cn(t,e,o,n,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function r(){let R="";for(let E=0;E<2;E++)R=R+Math.random().toString().slice(2);return R}const l=r();c["Content-Type"]="multipart/related; boundary="+l;const i=an(e,n,s),u=Zo(i,o),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+i.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=G.getBlob(f,n,p);if(g===null)throw Do();const m={name:i.fullPath},I=wt(a,t.host,t._protocol),w="POST",_=t.maxUploadRetryTime,M=new Ft(I,w,tn(t,o),_);return M.urlParams=m,M.headers=c,M.body=g.uploadData(),M.errorHandler=Me(e),M}class rn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=j.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=j.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=j.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,o,n,s){if(this.sent_)throw et("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(o,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw et("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw et("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw et("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw et("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ln extends rn{initXhr(){this.xhr_.responseType="text"}}function $t(){return new ln}/**
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
 */class W{constructor(e,o){this._service=e,o instanceof C?this._location=o:this._location=C.makeFromUrl(o,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,o){return new W(e,o)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Wo(this._location.path);if(e===null)return null;const o=new C(this._location.bucket,e);return new W(this._service,o)}_throwIfRoot(e){if(this._location.path==="")throw So(e)}}function un(t,e,o){t._throwIfRoot("uploadBytes");const n=cn(t.storage,t._location,ke(),new G(e,!0),o);return t.storage.makeRequestWithTokens(n,$t).then(s=>({metadata:s,ref:t}))}function dn(t){t._throwIfRoot("getDownloadURL");const e=on(t.storage,t._location,ke());return t.storage.makeRequestWithTokens(e,$t).then(o=>{if(o===null)throw _o();return o})}function fn(t){t._throwIfRoot("deleteObject");const e=nn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,$t)}function hn(t,e){const o=Xo(t._location.path,e),n=new C(t._location.bucket,o);return new W(t.storage,n)}/**
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
 */function pn(t){return/^[A-Za-z]+:\/\//.test(t)}function gn(t,e){return new W(t,e)}function Ee(t,e){if(t instanceof Gt){const o=t;if(o._bucket==null)throw vo();const n=new W(o,o._bucket);return e!=null?Ee(n,e):n}else return e!==void 0?hn(t,e):t}function mn(t,e){if(e&&pn(e)){if(t instanceof Gt)return gn(t,e);throw Ct("To use ref(service, url), the first argument must be a Storage instance.")}else return Ee(t,e)}function Yt(t,e){const o=e==null?void 0:e[Ie];return o==null?null:C.makeFromBucketSpec(o,t)}function yn(t,e,o,n={}){t.host=`${e}:${o}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:je(s,t.app.options.projectId))}class Gt{constructor(e,o,n,s,a){this.app=e,this._authProvider=o,this._appCheckProvider=n,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=ye,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ro,this._maxUploadRetryTime=lo,this._requests=new Set,s!=null?this._bucket=C.makeFromBucketSpec(s,this._host):this._bucket=Yt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=Yt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const o=await e.getToken();if(o!==null)return o.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new W(this,e)}_makeRequest(e,o,n,s,a=!0){if(this._deleted)return new bo(we());{const c=xo(e,this._appId,n,s,o,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,o){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,o,n,s).getPromise()}}const Zt="@firebase/storage",te="0.13.2";/**
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
 */const Ce="storage";function In(t,e,o){return t=H(t),un(t,e,o)}function Ne(t){return t=H(t),dn(t)}function wn(t){return t=H(t),fn(t)}function Ht(t,e){return t=H(t),mn(t,e)}function vn(t=he(),e){t=H(t);const n=de(t,Ce).getImmediate({identifier:e}),s=fe("storage");return s&&Dn(n,...s),n}function Dn(t,e,o,n={}){yn(t,e,o,n)}function _n(t,{instanceIdentifier:e}){const o=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gt(o,n,s,e,Ve)}function Tn(){le(new ue(Ce,_n,"PUBLIC").setMultipleInstances(!0)),mt(Zt,te,""),mt(Zt,te,"esm2017")}Tn();const jt=vn(It);async function Rn(t,e,o,n){console.log("uploading file"),console.log(`${t}/${e}/${o}`);const s=Ht(jt,`${t}/${e}/${o}`),a=await In(s,n);return await Ne(a.ref)}async function En(t,e,o){const n=Ht(jt,`${t}/${e}/${o}`);await wn(n)}async function Sn(t){const e=localStorage.getItem("schoolId"),o=Ht(jt,`${e}/${t}.json`);try{const n=await Ne(o);return(await(await fetch(n)).json()).FCMToken}catch{return null}}const ee=me(It);async function X(t,e,o,n){const s=[],a=[];await Promise.all(e.map(async c=>{const r=await Sn(c.userId);console.log("FCM Token: ",r),console.log("Email: ",c.email),r?a.push(r):s.push(c.email)})),s.length>0&&O(ee,"sendEmail")({emails:s,activityId:o.activityId,activityName:n,groupName:o.name,groupId:o.id,message:t.message,senderName:t.senderName}),a.length>0&&O(ee,"sendNotifications")({targetIds:a,title:`${n} - ${o.name}`,body:`${t.senderName}: ${t.message}`,thread:o.id,data:{type:"activity-chat",activityName:n,activityId:o.activityId,message:t.message,senderName:t.senderName,gcId:o.id,groupName:o.name}})}const F=me(It),y=Be(It),Oe=h(y,"schools"),vt=h(y,"companies");h(y,"employers");const tt=h(y,"opportunities"),bn=async t=>{const e=d(Oe,t);return(await U(e)).data()},Cn=async()=>{const t=await D(Oe),e=[];return t.forEach(o=>{e.push(o.data())}),e},Nn=async()=>{const t=await D(vt),e=[];return t.forEach(o=>{const n=o.data();n.id=o.id,e.push(ie.fromMap(n))}),e},Pe=async()=>{const t=localStorage.getItem("accountType"),e=localStorage.getItem("schoolId");if(!e)return[];const o=d(y,"schools",e);if(t=="student"){const n=T(h(o,"activities"),S("studentUids","array-contains",Y())),s=[];return(await D(n)).forEach(c=>{s.push(V.fromMap(c.data()))}),s}else{const n=T(h(o,"activities"),S("teacherUids","array-contains",Y())),s=[];return(await D(n)).forEach(c=>{console.log(c.data()),s.push(V.fromMap(c.data()))}),s}};async function kn(t){const e=localStorage.getItem("schoolId");if(!e)return null;const o=d(y,"schools",e),n=d(h(o,"activities"),t),s=await U(n);return s.exists()?s.data().type=="theater"?st.fromMap(s.data()):V.fromMap(s.data()):null}async function On(t){const e=localStorage.getItem("schoolId");if(!e)return"";const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=h(n,"shows"),a=await L(s,t.toMap());return t.id=a.id,await v(a,{id:a.id}),a.id}async function Pn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=d(h(n,"shows"),t.id);t.lastUpdated=Date.now(),await v(s,t.toMap())}async function xn(t){const e=h(y,"showTemplates"),o=await L(e,t.toMap());return t.id=o.id,await v(o,{id:o.id}),o.id}async function Ln(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=d(y,"schools",o),s=d(h(n,"activities"),t),a=d(h(s,"shows"),e),c=await U(a);return c.exists()?(console.log(c.data()),Nt.fromMap(c.data())):null}async function Bn(t){const e=localStorage.getItem("schoolId");if(!e)return[];console.log("Getting actors for activity "+e);const o=d(y,"schools",e),n=d(h(o,"activities"),t),s=await U(n);if(!s.exists())return[];const a=[];return s.data().students.forEach(c=>{a.push(Q.fromMap(c))}),a}async function Fn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e);await q(c,o.toMap())}async function Dt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=h(n,"events");console.log("Adding event"),console.log(t.toMap());const a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function ct(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=h(n,"events"),a=await L(s,t.toMap());t.id=a.id,await v(a,{id:a.id})}async function $n(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=d(y,"schools",o),a=d(h(s,"activities"),t),c=h(a,"events");if(n=="student"){const r=await D(T(c,S("showId","==",e),S("targetUids","array-contains",Y()))),l=[];return r.forEach(i=>{i.data().deleted||l.push(B.fromMap(i.data()))}),l}else{const r=await D(T(c,S("showId","==",e))),l=[];return r.forEach(i=>{i.data().deleted||l.push(B.fromMap(i.data()))}),l}}async function _t(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=d(h(n,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function it(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=d(h(n,"events"),t.id);await v(s,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteActivityEvent")({activityId:t.activityId,eventId:t.id,schoolId:e})}async function xe(t){const e=localStorage.getItem("schoolId");if(!e)return[];const o=d(y,"schools",e),n=d(h(o,"activities"),t),s=h(n,"shows"),a=await D(s),c=[];return a.forEach(r=>{c.push(Nt.fromMap(r.data()))}),c}async function Gn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e);await v(c,{conflictForm:o.toMap(),lastUpdated:Date.now()}),await O(F,"addConflictFormDeadline")({activityId:t,showId:e,schoolId:n,deadline:o.deadline.toISOString()})}async function Hn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e);await v(c,{conflictForm:o.toMap(),lastUpdated:Date.now()})}async function jn(){const t=Y(),e=localStorage.getItem("schoolId");if(!e)return null;const o=d(y,"schools",e),n=d(o,"students",t),s=await U(n);return s.exists()?Q.fromMap(s.data()):null}async function Vn(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e),r=d(c,"conflictResponses",o.actor.userId);o.id=o.actor.userId,await q(r,o.toMap())}async function qn(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!o)return[];const s=d(y,"schools",o),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e),r=h(c,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(Y());const u=await D(T(r,S("submitterId","==",Y()))),f=[];return u.forEach(p=>{f.push(Ut.fromMap(p.data()))}),f}const l=await D(r),i=[];return l.forEach(u=>{i.push(Ut.fromMap(u.data()))}),i}async function Wn(){const t=h(y,"showTemplates"),e=await D(t),o=[];return e.forEach(n=>{o.push(Nt.fromMap(n.data()))}),o}async function Xn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+e+" UID: "+o+" AT: "+n),!e||!o||!n)return null;const s=d(y,"schools",e),a=T(h(s,"activities"),S("joinCode","==",t)),c=await D(a);if(c.empty)return null;const r=c.docs[0],l=d(h(s,n=="student"?"students":"teachers"),o),i=await U(l);if(console.log(i.data()),!i.exists())return null;if(r.data().studentUids.includes(o)||r.data().teacherUids.includes(o))return localStorage.setItem("alreadyJoined","true"),null;if(localStorage.setItem("alreadyJoined","false"),r.data().type=="theater"){if((i.data().gender==null||i.data().gender=="")&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),i.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(i.data().phoneNumber==""||i.data().gender==null||i.data().gender=="")&&n=="student")return null;if(n=="student")return await v(r.ref,{studentUids:[...r.data().studentUids,o],students:[...r.data().students,Q.fromMap(i.data()).toMap()],lastUpdated:Date.now()}),st.fromMap(r.data());{console.log("Joining as teacher"),console.log(i.data());const u=ft.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return console.log(u.toMap()),await v(r.ref,{teacherUids:[...r.data().teacherUids,o],teachers:[...r.data().teachers,u.toMap()],lastUpdated:Date.now()}),st.fromMap(r.data())}}else if(n=="student"){const u=Q.fromBlank(i.data().fullname,i.data().gender,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await v(r.ref,{studentUids:[...r.data().studentUids,o],students:[...r.data().students,u.toMap()],lastUpdated:Date.now()}),V.fromMap(r.data())}else{const u=ft.fromBlank(i.data().fullname,i.data().email,i.data().phoneNumber,i.data().uid,i.data().FCMToken);return await v(r.ref,{teacherUids:[...r.data().teacherUids,o],teachers:[...r.data().teachers,u.toMap()],lastUpdated:Date.now()}),V.fromMap(r.data())}}async function zn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=d(y,"schools",e),a=d(h(s,n=="student"?"students":"teachers"),o);await v(a,{gender:t,lastUpdated:Date.now()})}async function Jn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o||!n)return;const s=d(y,"schools",e),a=d(h(s,n=="student"?"students":"teachers"),o);await v(a,{phoneNumber:t,lastUpdated:Date.now()})}async function Kn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=d(h(n,"events"),t.id);t.lastUpdated=Date.now(),await v(s,t.toMap())}async function Qn(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId);d(h(n,"events"),t.id),t.lastUpdated=Date.now(),await it(t),await ct(t)}async function Yn(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return[];const n=d(y,"schools",t),s=[];let a;o=="student"?a=await D(T(h(n,"activities"),S("studentUids","array-contains",e))):a=await D(T(h(n,"activities"),S("teacherUids","array-contains",e))),console.log(a);for(const c of a.docs){const r=[];if(c.data().deleted!=!0){o=="student"?(console.log("Getting events for student"),r.push(await D(T(h(c.ref,"events"),S("targetUids","array-contains",e)))),r.push(await D(T(h(c.ref,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),r.push(await D(h(c.ref,"events"))));for(const l of r)for(const i of l.docs){const u=i.data();u.deleted||(console.log(u),u.type=="activity-theater-event"?s.push(B.fromMap(u)):s.push(Z.fromMap(u)))}}}return s}async function Zn(t){const e=localStorage.getItem("schoolId"),o=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!e||!o)return[];const s=d(y,"schools",e),a=d(h(s,"activities"),t),c=[],r=[];n=="student"?(console.log("Getting events for student"),c.push(await D(T(h(a,"events"),S("targetUids","array-contains",o)))),c.push(await D(T(h(a,"events"),S("generalTarget","==","students"))))):(console.log("Getting events for teacher"),c.push(await D(h(a,"events"))));for(const l of c)for(const i of l.docs){const u=i.data();u.deleted||(console.log(u),u.id=i.id,console.log(u),r.push(Z.fromMap(u)))}return r}async function ts(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return null;const s=d(y,"schools",o),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e),r=h(c,"conflictResponses"),l=await U(d(r,n));return l.exists()?Ut.fromMap(l.data()):null}async function es(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t);await v(s,{rehearsalLocations:e.map(a=>a.toMap()),lastUpdated:Date.now()})}async function os(t,e){const o=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!o||!n)return[];const s=localStorage.getItem("accountType"),a=d(y,"schools",o),c=d(h(a,"activities"),t);if(s=="teacher")At(h(c,"groupChats"),async r=>{const l=[];for(const i of r.docs){const u=x.fromMap(i.data());if((u.generalTarget=="direct"||u.generalTarget=="custom")&&!u.members.find(m=>m.userId==n))continue;if(u.generalTarget=="direct"){const m=u.members.find(I=>I.userId!=n);u.name=(m==null?void 0:m.name)||"Unknown"}const f=h(i.ref,"messages"),p=T(f,Wt("timeSent","desc"),qt(1)),g=await D(p);g.empty||(u.lastMessage=Mt.fromMap(g.docs[0].data())),l.push(u)}l.sort((i,u)=>i.lastMessage?u.lastMessage?u.lastMessage.timeSent.getTime()-i.lastMessage.timeSent.getTime():-1:1),e(l)});else{const r=d(h(a,"students"),n),l=await U(r);if(!l.exists())return;const i=Ot.fromMap(l.data());console.log(i),At(h(c,"groupChats"),async u=>{const f=[];for(const p of u.docs){const g=x.fromMap(p.data());if(!(g.generalTarget=="everyone"||g.generalTarget=="students")&&(g.generalTarget=="parents"||!g.members.find(_=>_.userId==n)))continue;if(g.generalTarget=="direct"){const _=g.members.find(M=>M.userId!=n);g.name=(_==null?void 0:_.name)||"Unknown"}const m=h(p.ref,"messages"),I=T(m,Wt("timeSent","desc"),qt(1)),w=await D(I);w.empty||(g.lastMessage=Mt.fromMap(w.docs[0].data())),f.push(g)}f.sort((p,g)=>p.lastMessage?g.lastMessage?g.lastMessage.timeSent.getTime()-p.lastMessage.timeSent.getTime():-1:1),e(f)})}}async function ns(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return[];const s=d(y,"schools",n),a=d(h(s,"activities"),t);console.log("Getting messages for "+e);const c=d(h(a,"groupChats"),e),r=h(c,"messages");At(r,l=>{const i=[];l.forEach(u=>{i.push(Mt.fromMap(u.data()))}),i.sort((u,f)=>u.timeSent.getTime()-f.timeSent.getTime()),o(i)})}async function Vt(){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),o=localStorage.getItem("accountType");if(!t||!e)return null;const n=d(y,"schools",t),s=d(h(n,o=="student"?"students":"teachers"),e),a=await U(s);return a.exists()?o=="student"?Ot.fromMap(a.data()):Fe.fromMap(a.data()):null}async function ss(t){const e=d(h(y,"parents"),t),o=await U(e);return o.exists()?o.data():null}async function as(t,e,o,n,s){if(o.message=="")return;const a=localStorage.getItem("schoolId"),c=localStorage.getItem("userId");if(!a||!c)return;const r=d(y,"schools",a),l=d(h(r,"activities"),t),i=d(h(l,"groupChats"),e),u=await U(i);if(!u.exists()){if(s==null)return;const m=await Vt();if(!m)return;const I=x.fromBlank("",s.userId,[re.fromBlank(m.fullname,m.email,m.phoneNumber,m.FCMToken,m.uid),s],"direct",t,Date.now());await q(i,I.toMap());const w=h(i,"messages"),_=await L(w,o.toMap());o.messageId=_.id,await v(_,{messageId:_.id,lastUpdated:Date.now()}),X(o,[$.fromBlank(s.userId,s.email)],I,n);return}const f=x.fromMap(u.data()),p=h(i,"messages"),g=await L(p,o.toMap());if(o.messageId=g.id,await v(g,{messageId:g.id,lastUpdated:Date.now()}),f.generalTarget!="direct"&&f.generalTarget!="custom"&&f.generalTarget!="group"){const m=await kn(t);if(!m)return;if(f.generalTarget=="everyone"){let I=m.students.map(w=>$.fromBlank(w.userId,w.email));I=I.concat(m.teachers.map(w=>$.fromBlank(w.userId,w.email))),I=I.concat(m.parents.map(w=>$.fromBlank(w.userId,w.email))),I=I.filter(w=>w.userId!=o.senderUid),X(o,I,f,m.name)}else if(f.generalTarget=="students"){let I=m.students.map(w=>$.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),X(o,I,f,m.name)}else if(f.generalTarget=="parents"){let I=m.parents.map(w=>$.fromBlank(w.userId,w.email));I=I.filter(w=>w.userId!=o.senderUid),X(o,I,f,m.name)}return}if(f.generalTarget=="direct"){const m=f.members.find(I=>I.userId!=c);if(!m)return;X(o,[$.fromBlank(m.userId,m.email)],f,n);return}if(f.generalTarget=="custom"){const m=f.members.filter(I=>I.userId!=c).map(I=>$.fromBlank(I.userId,I.email));X(o,m,f,n);return}}async function dt(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=h(n,"groupChats"),a=await Vt();if(!a)return;const c=re.fromBlank(a.fullname,a.email,a.phoneNumber,a.FCMToken,a.uid);t.members.push(c);const r=await L(s,t.toMap());t.id=r.id,await v(r,{id:r.id})}async function cs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e);v(c,{resources:N(o.toMap()),lastUpdated:Date.now()})}async function is(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e);v(c,{resources:He(o.toMap()),lastUpdated:Date.now()})}async function rs(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=d(h(a,"shows"),e),r=h(c,"conflictResponses"),l=d(r,o.id);await $e(l)}async function ls(t,e){if(t=="employer"){await q(d(y,"employers",e.uid),e.toMap());const c=localStorage.getItem("companyId");if(!c)return;const r=d(y,"companies",c);await v(r,{employerUids:N(e.uid),employers:N(e.toMap()),lastUpdated:Date.now()});return}const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=h(n,t+"s");await q(d(s,e.uid),e.toMap());let a;e instanceof Ot?a=Q.fromBlank(e.fullname,e.gender,e.email,e.phoneNumber,e.FCMToken,e.uid):a=ft.fromBlank(e.fullname,e.email,e.phoneNumber,e.FCMToken,e.uid),await v(n,{[t+"Uids"]:N(e.uid),[t+"s"]:N(a.toMap()),lastUpdated:Date.now()})}function Un(t){const e=new Date,o=e.getTime().toString();return`${t.charCodeAt(0)}${e.getDate()}${o.slice(-2)}`}async function us(t,e){const o=localStorage.getItem("schoolId");if(!o)return null;const n=d(y,"schools",o),s=await U(n);if(!s.exists())return null;const a=s.data(),c=h(n,"activities"),r=Un(t);console.log(r);const l=[ot.fromMap({name:"Rehearsal",color:{red:255,green:0,blue:0,alpha:255}}),ot.fromMap({name:"Performance",color:{red:0,green:255,blue:0,alpha:255}})],i=[ot.fromMap({name:"Practice",color:{red:255,green:0,blue:0,alpha:255}}),ot.fromMap({name:"Game",color:{red:0,green:255,blue:0,alpha:255}})],u=[ne.fromMap({name:"Auditorium",color:{red:0,green:0,blue:255,alpha:255}})],f=gt.fromMap(a.location),p=[f],g=await Vt();if(!g)return null;const m=ft.fromBlank(g.fullname,g.email,g.phoneNumber,g.FCMToken,g.uid);let I;e=="theater"?I=st.fromBlank(t,"",r,[],[],[],[m],p,l,f,u,"type",Date.now()):I=V.fromBlank(t,"",r,[],[],[],[m],p,i,f,"type",Date.now(),"activity"),console.log(I.toMap());const w=await L(c,I.toMap());I.id=w.id,await v(w,{id:w.id});const _=x.fromMap({name:"Everyone",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"everyone"});await dt(_);const M=x.fromMap({name:"Parents",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"parents"});await dt(M);const R=x.fromMap({name:"Students",members:[],id:"",activityId:I.id,lastUpdated:Date.now(),generalTarget:"students"});return await dt(R),I}async function ds(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return null;const s=d(y,"schools",n),a=d(h(s,"activities"),o),c=h(a,"groupChats"),r=x.fromBlank("",e.userId,[t,e],"direct",o,Date.now());return await q(d(c,e.userId),r.toMap()),r.name=e.name,r}async function fs(){const t=await bn(localStorage.getItem("schoolId")||"");if(!t)return[];const e=[];return t.savedLocations.forEach(o=>{e.push(gt.fromMap(o))}),e}async function hs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t);await v(s,{locations:N(e.toMap()),lastUpdated:Date.now()})}async function ps(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e);await v(o,{savedLocations:N(t.toMap()),lastUpdated:Date.now()})}async function gs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t);await v(s,{eventTypes:N(e.toMap()),lastUpdated:Date.now()})}async function ms(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t),a=d(h(s,"shows"),e);await v(a,{isCreatingSchedule:!0,lastUpdated:Date.now()})}async function ys(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=h(n,"students");await q(d(s,t.uid),t.toMap());const a=Q.fromBlank(t.fullname,t.gender,t.email,t.phoneNumber,t.FCMToken,t.uid);await v(n,{studentUids:N(t.uid),students:N(a.toMap()),lastUpdated:Date.now()});const c=a.userId;if(!o||!c)return null;const r=d(h(n,"activities"),e),l=await U(r);return l.exists()?l.data().type=="theater"?(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()],lastUpdated:Date.now()}),st.fromMap(l.data())):(await v(l.ref,{studentUids:[...l.data().studentUids,c],students:[...l.data().students,a.toMap()],lastUpdated:Date.now()}),V.fromMap(l.data())):null}async function Is(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=T(h(n,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){const r=B.fromMap(c.data());for(let i=0;i<r.characters.length;i++){const u=r.characters[i];u instanceof z?r.characters[i]=t.characters.find(f=>f.name==u.name):u instanceof ht&&(r.characters[i]=t.showGroups.find(f=>f.name==u.name))}const l=[];for(const i of r.characters){if(i instanceof oe){for(const u of t.ensemble.actors)l.push(u);for(const u of t.characters)l.find(f=>f.userId==u.actor.userId)==null&&l.push(u.actor);break}if(i instanceof z){if(l.find(u=>u.userId==i.actor.userId)!=null)continue;l.push(i.actor)}if(i instanceof pt){if(i.includeAll)for(const u of t.ensemble.actors)l.find(f=>f.userId==u.userId)==null&&l.push(u);else if(i.includeMale){for(const u of t.ensemble.actors)if(u.gender=="male"){if(l.find(f=>f.userId==u.userId)!=null)continue;l.push(u)}}else if(i.includeFemale){for(const u of t.ensemble.actors)if(u.gender=="female"){if(l.find(f=>f.userId==u.userId)!=null)continue;l.push(u)}}else if(i.includeCustom)for(const u of i.customActors)l.find(f=>f.userId==u.userId)==null&&l.push(u)}if(i instanceof ht)for(const u of i.characters){if(u instanceof z){if(l.find(f=>f.userId==u.actor.userId)!=null)continue;l.push(u.actor)}if(u instanceof pt){if(u.includeAll)for(const f of t.ensemble.actors)l.find(p=>p.userId==f.userId)==null&&l.push(f);else if(u.includeMale){for(const f of t.ensemble.actors)if(f.gender=="male"){if(l.find(p=>p.userId==f.userId)!=null)continue;l.push(f)}}else if(u.includeFemale){for(const f of t.ensemble.actors)if(f.gender=="female"){if(l.find(p=>p.userId==f.userId)!=null)continue;l.push(f)}}else if(u.includeCustom)for(const f of u.customActors)l.find(p=>p.userId==f.userId)==null&&l.push(f)}}}r.targets=l,r.lastUpdated=Date.now(),await v(c.ref,r.toMap())}}async function ws(t){const e=localStorage.getItem("schoolId");if(!e)return;const o=d(y,"schools",e),n=d(h(o,"activities"),t.activityId),s=T(h(n,"events"),S("showId","==",t.id)),a=await D(s);for(const c of a.docs){const r=B.fromMap(c.data()),l=[];for(let u=0;u<r.characters.length;u++){const f=r.characters[u];if(f instanceof z){const p=t.characters.find(g=>g.characterId==f.characterId);p&&l.push(p)}else if(f instanceof ht){const p=t.showGroups.find(g=>g.showGroupId==f.showGroupId);p&&l.push(p)}r.characters=l}const i=[];for(const u of l){if(u instanceof oe){for(const f of t.ensemble.actors)i.push(f);for(const f of t.characters)i.find(p=>p.userId==f.actor.userId)==null&&i.push(f.actor);break}if(u instanceof z){if(i.find(f=>f.userId==u.actor.userId)!=null)continue;i.push(u.actor)}if(u instanceof pt){if(u.includeAll)for(const f of t.ensemble.actors)i.find(p=>p.userId==f.userId)==null&&i.push(f);else if(u.includeMale){for(const f of t.ensemble.actors)if(f.gender=="male"){if(i.find(p=>p.userId==f.userId)!=null)continue;i.push(f)}}else if(u.includeFemale){for(const f of t.ensemble.actors)if(f.gender=="female"){if(i.find(p=>p.userId==f.userId)!=null)continue;i.push(f)}}else if(u.includeCustom)for(const f of u.customActors)i.find(p=>p.userId==f.userId)==null&&i.push(f)}if(u instanceof ht)for(const f of u.characters){if(f instanceof z){if(i.find(p=>p.userId==f.actor.userId)!=null)continue;i.push(f.actor)}if(f instanceof pt){if(f.includeAll)for(const p of t.ensemble.actors)i.find(g=>g.userId==p.userId)==null&&i.push(p);else if(f.includeMale){for(const p of t.ensemble.actors)if(p.gender=="male"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(f.includeFemale){for(const p of t.ensemble.actors)if(p.gender=="female"){if(i.find(g=>g.userId==p.userId)!=null)continue;i.push(p)}}else if(f.includeCustom)for(const p of f.customActors)i.find(g=>g.userId==p.userId)==null&&i.push(p)}}}r.targets=i,r.lastUpdated=Date.now(),await v(c.ref,r.toMap())}}async function vs(){if(!localStorage.getItem("schoolId"))return[];const e=await Pe(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await xe(n.id);for(const a of s)console.log("Getting resources for "+a.name),o.push(...a.resources)}return o}async function Ds(){if(!localStorage.getItem("schoolId"))return[];const e=await Pe(),o=[];for(const n of e)if(console.log("Getting resources for "+n.name),n.type=="theater"){const s=await xe(n.id);for(const a of s)a.activityName=n.name,o.push(a)}return o}async function _s(t){const e=localStorage.getItem("userId"),o=d(h(y,"parents"),t),n=await U(o);if(!n.exists())return null;const s=n.data(),a=s.requestedChildren,c=s.children,r=a.find(l=>l.uid==e);if(!r)return null;a.splice(a.indexOf(r),1),c.push(r),await v(o,{requestedChildren:a,children:c,lastUpdated:Date.now()})}async function Ts(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const r=c.data(),l=r.locations;for(let p=0;p<l.length;p++)gt.fromMap(l[p]).name==o.name&&(l[p]=e.toMap());let i=gt.fromMap(r.defaultLocation);i.name==o.name&&(i=e),await v(a,{locations:l,defaultLocation:i.toMap(),lastUpdated:Date.now()});const u=T(h(a,"events"),S("location","==",o.toMap()));(await D(u)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await _t(m),m.location=e,m.lastUpdated=Date.now(),await Dt(m)}else{const m=Z.fromMap(g);m.id=p.id,await it(m),m.location=e,m.lastUpdated=Date.now(),await ct(m)}})}async function Ss(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n),a=d(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const r=c.data();if(r.type!="theater")return;const l=r.rehearsalLocations;for(let f=0;f<l.length;f++)ne.fromMap(l[f]).name==o.name&&(l[f]=e.toMap());await v(a,{rehearsalLocations:l,lastUpdated:Date.now()});const i=T(h(a,"events"),S("rehearsalLocation","==",o.toMap()));(await D(i)).docs.forEach(async f=>{if(f.data().deleted==!0)return;const p=f.data();if(p.type=="activity-theater-event"){const g=B.fromMap(p);g.id=f.id,await _t(g),g.rehearsalLocation=e,g.lastUpdated=Date.now(),await Dt(g)}})}async function bs(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t),a=await U(s);if(!a.exists())return;a.data(),await v(s,{name:e,lastUpdated:Date.now()});const c=h(s,"events");(await D(c)).docs.forEach(async l=>{if(l.data().deleted==!0)return;const i=l.data();if(i.type=="activity-theater-event"){const u=B.fromMap(i);u.id=l.id,await _t(u),u.activityName=e,u.lastUpdated=Date.now(),await Dt(u)}else{const u=Z.fromMap(i);u.id=l.id,await it(u),u.activityName=e,u.lastUpdated=Date.now(),await ct(u)}})}async function ks(t,e,o,n){const s=localStorage.getItem("schoolId");if(!s)return;const a=d(y,"schools",s),c=d(h(a,"activities"),t),r=await U(c);if(!r.exists())return;const i=r.data().eventTypes;for(let p=0;p<i.length;p++)ot.fromMap(i[p]).name==o.name&&(i[p]=e.toMap());await v(c,{eventTypes:i,lastUpdated:Date.now()});const u=T(h(c,"events"),S(n?"activityEventType":"eventType","==",o.toMap()));(await D(u)).docs.forEach(async p=>{if(p.data().deleted==!0)return;const g=p.data();if(g.type=="activity-theater-event"){const m=B.fromMap(g);m.id=p.id,await _t(m),m.activityEventType=e,m.lastUpdated=Date.now(),await Dt(m)}else{const m=Z.fromMap(g);m.id=p.id,await it(m),m.eventType=e,m.lastUpdated=Date.now(),await ct(m)}})}async function Us(t,e,o){const n=localStorage.getItem("schoolId");if(!n)return;const s=d(y,"schools",n);console.log("Editing group"),console.log(e),console.log(t);const a=d(h(s,"activities"),t),c=await U(a);if(!c.exists())return;const l=c.data().groups;for(let g=0;g<l.length;g++)Ge.fromMap(l[g]).groupName==o.groupName&&(l[g]=e.toMap());await v(a,{groups:l,lastUpdated:Date.now()});const i=T(h(a,"events"),S("groupNames","array-contains",o.groupName));(await D(i)).docs.forEach(async g=>{if(g.data().deleted==!0)return;const m=g.data();if(m.type!="activity-theater-event"){const I=Z.fromMap(m);I.id=g.id,console.log("deleting event"),await it(I),I.groupNames=I.groupNames.map(_=>_==o.groupName?e.groupName:_),I.groupTargets=I.groupTargets.map(_=>_.groupName==o.groupName?e:_);const w=[];for(const _ of I.groupTargets)for(const M of _.groupMembers)w.find(R=>R.userId==M.userId)==null&&w.push(M);I.targets=w,I.lastUpdated=Date.now(),console.log("adding event"),await ct(I)}});const f=T(h(a,"groupChats"),S("name","==",o.groupName),S("generalTarget","==","group")),p=await D(f);for(const g of p.docs){const m=x.fromMap(g.data());m.name=e.groupName,m.members=e.groupMembers.map(I=>I.toGroupChatMember()),m.lastUpdated=Date.now(),await v(g.ref,m.toMap())}}async function As(t,e){const o=localStorage.getItem("schoolId");if(!o)return;const n=d(y,"schools",o),s=d(h(n,"activities"),t);await v(s,{groups:N(e.toMap()),lastUpdated:Date.now()});const a=x.fromBlank(e.groupName,"",e.groupMembers.map(c=>c.toGroupChatMember()),"group",t,Date.now());return await dt(a),e}async function Ms(){const t=localStorage.getItem("companyId");if(!t)return[];const e=T(tt,S("companyId","==",t)),o=await D(e),n=[];return o.forEach(s=>{const a=s.data();if(a.deleted)return;a.id=s.id;const c=se(a.type);c==J.Job?n.push(ae.fromMap(a)):c==J.OneTimeVolunteer?n.push(at.fromMap(a)):c==J.RecurringVolunteer&&n.push(ce.fromMap(a))}),n}async function Rs(){const t=await D(tt),e=[];return t.forEach(o=>{const n=o.data();if(n.deleted)return;n.id=o.id;const s=se(n.type);s==J.Job?e.push(ae.fromMap(n)):s==J.OneTimeVolunteer?e.push(at.fromMap(n)):s==J.RecurringVolunteer&&e.push(ce.fromMap(n))}),e}async function Es(t,e){if(!e&&t instanceof at){await O(F,"deleteCloudTask")({taskId:t.taskId});const n=await O(F,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=n.data}const o=d(tt,t.id);await v(o,t.toMap())}async function Cs(){const t=localStorage.getItem("companyId");if(!t)return null;const e=d(vt,t),o=await U(e);return o.exists()?ie.fromMap(o.data()):null}async function Ns(t){await O(F,"deleteCloudTask")({taskId:t})}async function Os(t){if(t instanceof at){const o=await O(F,"startRemoveVolunteerOpportunity")({opportunityId:t.id,date:t.eventDate.getDateStart().getTime()});t.taskId=o.data}const e=await L(tt,t.toMap());return t.id=e.id,t}async function Ps(t){t instanceof at&&(console.log(t.taskId),await O(F,"deleteCloudTask")({taskId:t.taskId}));const e=d(tt,t.id);await v(e,{deleted:!0,lastUpdated:Date.now()}),await O(F,"startDeleteOpportunity")({opportunityId:t.id})}async function xs(t){const e=await L(vt,t.toMap());return t.id=e.id,t}async function Ls(t){const e=d(vt,t.id);await v(e,t.toMap())}async function Bs(t,e){const o=T(tt,S("companyId","==",t));(await D(o)).forEach(async s=>{const a=s.data();a.deleted||(a.companyName=e,await v(s.ref,a))})}export{En as $,Dt as A,rs as B,jn as C,Vn as D,Hn as E,Gn as F,Vt as G,Yn as H,ts as I,es as J,hs as K,ps as L,gs as M,Ts as N,ks as O,Ss as P,bs as Q,Us as R,As as S,fs as T,dt as U,as as V,ns as W,os as X,ds as Y,Rn as Z,cs as _,Un as a,is as a0,ys as a1,vs as a2,Ds as a3,it as a4,ct as a5,Zn as a6,Qn as a7,_s as a8,ss as a9,Es as aa,Rs as ab,Cs as ac,Ms as ad,Ps as ae,Ns as af,Os as ag,Ls as ah,Bs as ai,xs as b,ls as c,Nn as d,zn as e,us as f,Cn as g,Pe as h,kn as i,Xn as j,xe as k,Wn as l,On as m,xn as n,Pn as o,ws as p,Ln as q,Bn as r,ms as s,Is as t,Jn as u,Fn as v,qn as w,$n as x,_t as y,Kn as z};
