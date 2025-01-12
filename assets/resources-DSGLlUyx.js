import{H as C,_ as ye,I as ke,J as Ae,K as Ie,N as Ee,O as G,P as Ne,Q as xe,R as Oe,U as Ue,r as y,j as l,V as Y,W as Se,c as ve,i as Ce,g as P}from"./index-AQifkHdA.js";import{Q as De,R as Pe}from"./db-UdxIw7Od.js";import{R as Le}from"./Resource_Tile-DXYd_9Bu.js";/**
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
 */const se="firebasestorage.googleapis.com",re="storageBucket",Be=2*60*1e3,je=10*60*1e3;/**
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
 */class p extends Oe{constructor(t,n,s=0){super($(t),`Firebase Storage: ${n} (${$(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return $(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function $(e){return"storage/"+e}function V(){const e="An unknown error occurred, please check the error payload for server response.";return new p(f.UNKNOWN,e)}function Fe(e){return new p(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Me(e){return new p(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $e(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p(f.UNAUTHENTICATED,e)}function He(){return new p(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qe(e){return new p(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ve(){return new p(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function We(){return new p(f.CANCELED,"User canceled the upload/download.")}function ze(e){return new p(f.INVALID_URL,"Invalid URL '"+e+"'.")}function Ke(e){return new p(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Xe(){return new p(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function Je(){return new p(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ge(){return new p(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ye(e){return new p(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function q(e){return new p(f.INVALID_ARGUMENT,e)}function oe(){return new p(f.APP_DELETED,"The Firebase app was deleted.")}function Ze(e){return new p(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function v(e,t){return new p(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new p(f.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class k{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=k.makeFromUrl(t,n)}catch{return new k(t,"")}if(s.path==="")return s;throw Ke(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${r}/o${_}`,"i"),w={bucket:1,path:3},g=n===se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",N=new RegExp(`^https?://${g}/${r}/${R}`,"i"),A=[{regex:a,indices:c,postModify:o},{regex:m,indices:w,postModify:h},{regex:N,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<A.length;b++){const D=A[b],F=D.regex.exec(t);if(F){const Te=F[D.indices.bucket];let M=F[D.indices.path];M||(M=""),s=new k(Te,M),D.postModify(s);break}}if(s==null)throw ze(t);return s}}class Qe{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function et(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return a===2}let h=!1;function u(...R){h||(h=!0,t.apply(null,R))}function d(R){r=setTimeout(()=>{r=null,e(m,c())},R)}function _(){o&&clearTimeout(o)}function m(R,...N){if(h){_();return}if(R){_(),u.call(null,R,...N);return}if(c()||i){_(),u.call(null,R,...N);return}s<64&&(s*=2);let A;a===1?(a=2,A=0):A=(s+Math.random())*1e3,d(A)}let w=!1;function g(R){w||(w=!0,_(),!h&&(r!==null?(R||(a=2),clearTimeout(r),d(0)):R||(a=1)))}return d(0),o=setTimeout(()=>{i=!0,g(!0)},n),g}function tt(e){e(!1)}/**
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
 */function nt(e){return e!==void 0}function st(e){return typeof e=="object"&&!Array.isArray(e)}function W(e){return typeof e=="string"||e instanceof String}function Z(e){return z()&&e instanceof Blob}function z(){return typeof Blob<"u"}function Q(e,t,n,s){if(s<t)throw q(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw q(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function j(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ie(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var O;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(O||(O={}));/**
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
 */function rt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class ot{constructor(t,n,s,r,o,i,a,c,h,u,d,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=u,this.connectionFactory_=d,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===O.NO_ERROR,c=o.getStatus();if(!a||rt(c,this.additionalRetryCodes_)&&this.retry){const u=o.getErrorCode()===O.ABORT;s(!1,new L(!1,null,u));return}const h=this.successCodes_.indexOf(c)!==-1;s(!0,new L(h,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());nt(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=V();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(r.canceled){const c=this.appDelete_?oe():We();i(c)}else{const c=Ve();i(c)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=et(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&tt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function it(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function at(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ct(e,t){t&&(e["X-Firebase-GMPID"]=t)}function lt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ut(e,t,n,s,r,o,i=!0){const a=ie(e.urlParams),c=e.url+a,h=Object.assign({},e.headers);return ct(h,t),it(h,n),at(h,o),lt(h,s),new ot(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function ht(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dt(...e){const t=ht();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(z())return new Blob(e);throw new p(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ft(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function pt(e){if(typeof atob>"u")throw Ye("base-64");return atob(e)}/**
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
 */const I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H{constructor(t,n){this.data=t,this.contentType=n||null}}function _t(e,t){switch(e){case I.RAW:return new H(ae(t));case I.BASE64:case I.BASE64URL:return new H(ce(e,t));case I.DATA_URL:return new H(mt(t),Rt(t))}throw V()}function ae(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function gt(e){let t;try{t=decodeURIComponent(e)}catch{throw v(I.DATA_URL,"Malformed data URL.")}return ae(t)}function ce(e,t){switch(e){case I.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw v(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case I.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw v(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pt(t)}catch(r){throw r.message.includes("polyfill")?r:v(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class le{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw v(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=wt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function mt(e){const t=new le(e);return t.base64?ce(I.BASE64,t.rest):gt(t.rest)}function Rt(e){return new le(e).contentType}function wt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class x{constructor(t,n){let s=0,r="";Z(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Z(this.data_)){const s=this.data_,r=ft(s,t,n);return r===null?null:new x(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new x(s,!0)}}static getBlob(...t){if(z()){const n=t.map(s=>s instanceof x?s.data_:s);return new x(dt.apply(null,n))}else{const n=t.map(i=>W(i)?_t(I.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new x(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ue(e){let t;try{t=JSON.parse(e)}catch{return null}return st(t)?t:null}/**
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
 */function bt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Tt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function he(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function yt(e,t){return t}class T{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||yt}}let B=null;function kt(e){return!W(e)||e.length<2?e:he(e)}function de(){if(B)return B;const e=[];e.push(new T("bucket")),e.push(new T("generation")),e.push(new T("metageneration")),e.push(new T("name","fullPath",!0));function t(o,i){return kt(i)}const n=new T("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new T("size");return r.xform=s,e.push(r),e.push(new T("timeCreated")),e.push(new T("updated")),e.push(new T("md5Hash",null,!0)),e.push(new T("cacheControl",null,!0)),e.push(new T("contentDisposition",null,!0)),e.push(new T("contentEncoding",null,!0)),e.push(new T("contentLanguage",null,!0)),e.push(new T("contentType",null,!0)),e.push(new T("metadata","customMetadata",!0)),B=e,B}function At(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new k(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function It(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return At(s,e),s}function fe(e,t,n){const s=ue(t);return s===null?null:It(e,s,n)}function Et(e,t,n,s){const r=ue(t);if(r===null||!W(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(h=>{const u=e.bucket,d=e.fullPath,_="/b/"+i(u)+"/o/"+i(d),m=j(_,n,s),w=ie({alt:"media",token:h});return m+w})[0]}function Nt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class K{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pe(e){if(!e)throw V()}function xt(e,t){function n(s,r){const o=fe(e,r,t);return pe(o!==null),o}return n}function Ot(e,t){function n(s,r){const o=fe(e,r,t);return pe(o!==null),Et(o,r,e.host,e._protocol)}return n}function _e(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=He():r=$e():n.getStatus()===402?r=Me(e.bucket):n.getStatus()===403?r=qe(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ge(e){const t=_e(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Fe(e.path)),o.serverResponse=r.serverResponse,o}return n}function Ut(e,t,n){const s=t.fullServerUrl(),r=j(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new K(r,o,Ot(e,n),i);return a.errorHandler=ge(t),a}function St(e,t){const n=t.fullServerUrl(),s=j(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(c,h){}const a=new K(s,r,i,o);return a.successCodes=[200,204],a.errorHandler=ge(t),a}function vt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Ct(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=vt(null,t)),s}function Dt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const h=Ct(t,s,r),u=Nt(h,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+c+"--",m=x.getBlob(d,s,_);if(m===null)throw Je();const w={name:h.fullPath},g=j(o,e.host,e._protocol),R="POST",N=e.maxUploadRetryTime,E=new K(g,R,xt(e,n),N);return E.urlParams=w,E.headers=i,E.body=m.uploadData(),E.errorHandler=_e(t),E}class Pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=O.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=O.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Lt extends Pt{initXhr(){this.xhr_.responseType="text"}}function X(){return new Lt}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return he(this._location.path)}get storage(){return this._service}get parent(){const t=bt(this._location.path);if(t===null)return null;const n=new k(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ze(t)}}function Bt(e,t,n){e._throwIfRoot("uploadBytes");const s=Dt(e.storage,e._location,de(),new x(t,!0),n);return e.storage.makeRequestWithTokens(s,X).then(r=>({metadata:r,ref:e}))}function jt(e){e._throwIfRoot("getDownloadURL");const t=Ut(e.storage,e._location,de());return e.storage.makeRequestWithTokens(t,X).then(n=>{if(n===null)throw Ge();return n})}function Ft(e){e._throwIfRoot("deleteObject");const t=St(e.storage,e._location);return e.storage.makeRequestWithTokens(t,X)}function Mt(e,t){const n=Tt(e._location.path,t),s=new k(e._location.bucket,n);return new U(e.storage,s)}/**
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
 */function $t(e){return/^[A-Za-z]+:\/\//.test(e)}function Ht(e,t){return new U(e,t)}function me(e,t){if(e instanceof J){const n=e;if(n._bucket==null)throw Xe();const s=new U(n,n._bucket);return t!=null?me(s,t):s}else return t!==void 0?Mt(e,t):e}function qt(e,t){if(t&&$t(t)){if(e instanceof J)return Ht(e,t);throw q("To use ref(service, url), the first argument must be a Storage instance.")}else return me(e,t)}function ee(e,t){const n=t==null?void 0:t[re];return n==null?null:k.makeFromBucketSpec(n,e)}function Vt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Ne(r,e.app.options.projectId))}class J{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Be,this._maxUploadRetryTime=je,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=ee(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=ee(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Q("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Q("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Qe(oe());{const i=ut(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const te="@firebase/storage",ne="0.13.2";/**
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
 */const Re="storage";function Wt(e,t,n){return e=C(e),Bt(e,t,n)}function zt(e){return e=C(e),jt(e)}function Kt(e){return e=C(e),Ft(e)}function we(e,t){return e=C(e),qt(e,t)}function Xt(e=Ae(),t){e=C(e);const s=ye(e,Re).getImmediate({identifier:t}),r=ke("storage");return r&&Jt(s,...r),s}function Jt(e,t,n,s={}){Vt(e,t,n,s)}function Gt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new J(n,s,r,t,xe)}function Yt(){Ie(new Ee(Re,Gt,"PUBLIC").setMultipleInstances(!0)),G(te,ne,""),G(te,ne,"esm2017")}Yt();const be=Xt(Ue);async function Zt(e,t,n,s){console.log("uploading file"),console.log(`${e}/${t}/${n}`);const r=we(be,`${e}/${t}/${n}`),o=await Wt(r,s);return await zt(o.ref)}async function Qt(e,t,n){const s=we(be,`${e}/${t}/${n}`);await Kt(s)}function en({addResource:e,dialogRef:t,close:n,activityId:s}){const[r,o]=y.useState("unset"),[i,a]=y.useState(""),[c,h]=y.useState(""),[u,d]=y.useState(!1),[_,m]=y.useState(""),w=y.useRef(null);return l.jsx("dialog",{ref:t,children:l.jsxs("div",{className:"AddResourceDiv",children:[l.jsx("h2",{children:"Add Resource"}),r=="unset"?l.jsxs("div",{className:"ResourceTypeSelect",children:[l.jsx("h3",{children:"Resource Type"}),l.jsx("button",{className:"ActionBtn",onClick:()=>{o("link")},children:"Link"}),l.jsx("button",{className:"ActionBtn",onClick:()=>{o("image")},children:"Image"}),l.jsx("button",{className:"ActionBtn",onClick:()=>{o("video")},children:"Video"})]}):l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Resource Name"}),l.jsx("input",{type:"text",className:"ResourceNameInput",value:i,onChange:g=>{a(g.target.value)}}),l.jsx("h3",{children:"Resource Description"}),l.jsx("input",{type:"text",className:"ResourceDescriptionInput",value:c,onChange:g=>{h(g.target.value)}}),r=="link"?l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Link"}),l.jsx("input",{type:"text",className:"ResourceLinkInput",value:_,onChange:g=>{m(g.target.value)}})]}):l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Resource File"}),l.jsx("input",{type:"file",className:"ResourceFileInput",ref:w})]}),l.jsx("br",{}),u?l.jsx("div",{className:"loader"}):l.jsx("button",{className:"ActionBtn",onClick:async()=>{if(d(!0),r=="link"){const g=Y.fromBlank(i,c,r,_);await e(g)}else{const g=w.current.files[0];if(g==null)return;const R=g.name.split(".")[0]+Date.now()+"."+g.name.split(".")[1],N=localStorage.getItem("schoolId"),E=await Zt(N,s,R,g),A=Se.fromBlank(R,E),b=Y.fromBlank(i,c,r,"",A);await e(b)}o("unset"),a(""),h(""),m(""),d(!1)},children:"Add Resource"})]}),l.jsx("br",{}),l.jsx("button",{className:"ActionBtn",onClick:()=>{o("unset"),a(""),h(""),m(""),n()},children:"Close"})]})})}ve(document.getElementById("root")).render(l.jsx(y.StrictMode,{children:l.jsx(tn,{})}));function tn(){const[e,t]=y.useState(""),[n,s]=y.useState(""),[r,o]=y.useState(),[i,a]=y.useState("student"),c=y.useRef(null);y.useEffect(()=>{Ce(()=>{});const u=new URLSearchParams(window.location.search),d=u.get("activityId");d&&t(d);const _=u.get("showId");_&&s(_);const m=localStorage.getItem("show-"+_);m&&(o(P.fromMap(JSON.parse(m))),console.log(P.fromMap(JSON.parse(m))));const w=localStorage.getItem("accountType");w&&a(w)},[]);const h=u=>async()=>{if(u.type!="link"){const d=localStorage.getItem("schoolId");await Qt(d,e,u.file.name)}r==null||r.resources.splice(r.resources.indexOf(u),1),localStorage.setItem("show-"+n,JSON.stringify(r)),o(P.fromMap(JSON.parse(localStorage.getItem("show-"+n)))),await Pe(e,n,u)};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"title",children:l.jsx("h1",{children:"Resources"})}),l.jsxs("div",{className:"center",children:[l.jsx("div",{className:"resources",children:r==null?void 0:r.resources.map((u,d)=>l.jsx(Le,{resource:u,canRemove:i==="teacher",removeResource:h(u)},d))}),i==="teacher"&&l.jsx("button",{className:"ActionBtn",onClick:()=>{var u;(u=c.current)==null||u.showModal()},children:"Add Resource"}),l.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href=`/Activity/Shows/Show/?activityId=${e}&showId=${n}`},children:"Back"})]}),l.jsx(en,{dialogRef:c,activityId:e,close:()=>{var u;(u=c.current)==null||u.close()},addResource:async u=>{var d;await De(e,n,u),r==null||r.resources.push(u),localStorage.setItem("show-"+n,JSON.stringify(r)),o(P.fromMap(JSON.parse(localStorage.getItem("show-"+n)))),(d=c.current)==null||d.close()}})]})}
