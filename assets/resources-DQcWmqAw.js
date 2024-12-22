import{d as C,_ as ye,e as ke,f as Ae,h as xe,C as Ee,k as J,m as Ie,S as Ne,F as Oe,n as Ue,r as y,j as a,c as Se,i as ve}from"./index-DsZHpGFm.js";import{R as Y,t as Ce,d as P}from"./constants-BwLTggyG.js";import{N as De,O as Pe}from"./db-D2uaWAAf.js";/**
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
 */const se="firebasestorage.googleapis.com",oe="storageBucket",Le=2*60*1e3,Be=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function $(e){return"storage/"+e}function V(){const e="An unknown error occurred, please check the error payload for server response.";return new p(f.UNKNOWN,e)}function je(e){return new p(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Fe(e){return new p(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Me(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p(f.UNAUTHENTICATED,e)}function $e(){return new p(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function He(e){return new p(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function qe(){return new p(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ve(){return new p(f.CANCELED,"User canceled the upload/download.")}function ze(e){return new p(f.INVALID_URL,"Invalid URL '"+e+"'.")}function We(e){return new p(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Xe(){return new p(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oe+"' property when initializing the app?")}function Ke(){return new p(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ge(){return new p(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Je(e){return new p(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function q(e){return new p(f.INVALID_ARGUMENT,e)}function re(){return new p(f.APP_DELETED,"The Firebase app was deleted.")}function Ye(e){return new p(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function v(e,t){return new p(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new p(f.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class k{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=k.makeFromUrl(t,n)}catch{return new k(t,"")}if(s.path==="")return s;throw We(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+o+i,"i"),l={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${u}/b/${o}/o${_}`,"i"),w={bucket:1,path:3},m=n===se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",I=new RegExp(`^https?://${m}/${o}/${R}`,"i"),A=[{regex:c,indices:l,postModify:r},{regex:g,indices:w,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<A.length;b++){const D=A[b],F=D.regex.exec(t);if(F){const Te=F[D.indices.bucket];let M=F[D.indices.path];M||(M=""),s=new k(Te,M),D.postModify(s);break}}if(s==null)throw ze(t);return s}}class Ze{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Qe(e,t,n){let s=1,o=null,r=null,i=!1,c=0;function l(){return c===2}let h=!1;function u(...R){h||(h=!0,t.apply(null,R))}function d(R){o=setTimeout(()=>{o=null,e(g,l())},R)}function _(){r&&clearTimeout(r)}function g(R,...I){if(h){_();return}if(R){_(),u.call(null,R,...I);return}if(l()||i){_(),u.call(null,R,...I);return}s<64&&(s*=2);let A;c===1?(c=2,A=0):A=(s+Math.random())*1e3,d(A)}let w=!1;function m(R){w||(w=!0,_(),!h&&(o!==null?(R||(c=2),clearTimeout(o),d(0)):R||(c=1)))}return d(0),r=setTimeout(()=>{i=!0,m(!0)},n),m}function et(e){e(!1)}/**
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
 */function tt(e){return e!==void 0}function nt(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function Z(e){return W()&&e instanceof Blob}function W(){return typeof Blob<"u"}function Q(e,t,n,s){if(s<t)throw q(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw q(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function j(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ie(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const o=t(s)+"="+t(e[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var O;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(O||(O={}));/**
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
 */function st(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||o||r}/**
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
 */class ot{constructor(t,n,s,o,r,i,c,l,h,u,d,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=u,this.connectionFactory_=d,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new L(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const c=r.getErrorCode()===O.NO_ERROR,l=r.getStatus();if(!c||st(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===O.ABORT;s(!1,new L(!1,null,u));return}const h=this.successCodes_.indexOf(l)!==-1;s(!0,new L(h,r))})},n=(s,o)=>{const r=this.resolve_,i=this.reject_,c=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());tt(l)?r(l):r()}catch(l){i(l)}else if(c!==null){const l=V();l.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,l)):i(l)}else if(o.canceled){const l=this.appDelete_?re():Ve();i(l)}else{const l=qe();i(l)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=Qe(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&et(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function rt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function it(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function at(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ct(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function lt(e,t,n,s,o,r,i=!0){const c=ie(e.urlParams),l=e.url+c,h=Object.assign({},e.headers);return at(h,t),rt(h,n),it(h,r),ct(h,s),new ot(l,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function ut(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ht(...e){const t=ut();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(W())return new Blob(e);throw new p(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function ft(e){if(typeof atob>"u")throw Je("base-64");return atob(e)}/**
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
 */const x={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H{constructor(t,n){this.data=t,this.contentType=n||null}}function pt(e,t){switch(e){case x.RAW:return new H(ae(t));case x.BASE64:case x.BASE64URL:return new H(ce(e,t));case x.DATA_URL:return new H(mt(t),gt(t))}throw V()}function ae(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,i=e.charCodeAt(++n);s=65536|(r&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function _t(e){let t;try{t=decodeURIComponent(e)}catch{throw v(x.DATA_URL,"Malformed data URL.")}return ae(t)}function ce(e,t){switch(e){case x.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw v(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case x.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw v(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ft(t)}catch(o){throw o.message.includes("polyfill")?o:v(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class le{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw v(x.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Rt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function mt(e){const t=new le(e);return t.base64?ce(x.BASE64,t.rest):_t(t.rest)}function gt(e){return new le(e).contentType}function Rt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class N{constructor(t,n){let s=0,o="";Z(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(Z(this.data_)){const s=this.data_,o=dt(s,t,n);return o===null?null:new N(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new N(s,!0)}}static getBlob(...t){if(W()){const n=t.map(s=>s instanceof N?s.data_:s);return new N(ht.apply(null,n))}else{const n=t.map(i=>z(i)?pt(x.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)o[r++]=i[c]}),new N(o,!0)}}uploadData(){return this.data_}}/**
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
 */function ue(e){let t;try{t=JSON.parse(e)}catch{return null}return nt(t)?t:null}/**
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
 */function wt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function bt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function he(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Tt(e,t){return t}class T{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||Tt}}let B=null;function yt(e){return!z(e)||e.length<2?e:he(e)}function de(){if(B)return B;const e=[];e.push(new T("bucket")),e.push(new T("generation")),e.push(new T("metageneration")),e.push(new T("name","fullPath",!0));function t(r,i){return yt(i)}const n=new T("name");n.xform=t,e.push(n);function s(r,i){return i!==void 0?Number(i):i}const o=new T("size");return o.xform=s,e.push(o),e.push(new T("timeCreated")),e.push(new T("updated")),e.push(new T("md5Hash",null,!0)),e.push(new T("cacheControl",null,!0)),e.push(new T("contentDisposition",null,!0)),e.push(new T("contentEncoding",null,!0)),e.push(new T("contentLanguage",null,!0)),e.push(new T("contentType",null,!0)),e.push(new T("metadata","customMetadata",!0)),B=e,B}function kt(e,t){function n(){const s=e.bucket,o=e.fullPath,r=new k(s,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function At(e,t,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const i=n[r];s[i.local]=i.xform(s,t[i.server])}return kt(s,e),s}function fe(e,t,n){const s=ue(t);return s===null?null:At(e,s,n)}function xt(e,t,n,s){const o=ue(t);if(o===null||!z(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(h=>{const u=e.bucket,d=e.fullPath,_="/b/"+i(u)+"/o/"+i(d),g=j(_,n,s),w=ie({alt:"media",token:h});return g+w})[0]}function Et(e,t){const n={},s=t.length;for(let o=0;o<s;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class X{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pe(e){if(!e)throw V()}function It(e,t){function n(s,o){const r=fe(e,o,t);return pe(r!==null),r}return n}function Nt(e,t){function n(s,o){const r=fe(e,o,t);return pe(r!==null),xt(r,o,e.host,e._protocol)}return n}function _e(e){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=$e():o=Me():n.getStatus()===402?o=Fe(e.bucket):n.getStatus()===403?o=He(e.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function me(e){const t=_e(e);function n(s,o){let r=t(s,o);return s.getStatus()===404&&(r=je(e.path)),r.serverResponse=o.serverResponse,r}return n}function Ot(e,t,n){const s=t.fullServerUrl(),o=j(s,e.host,e._protocol),r="GET",i=e.maxOperationRetryTime,c=new X(o,r,Nt(e,n),i);return c.errorHandler=me(t),c}function Ut(e,t){const n=t.fullServerUrl(),s=j(n,e.host,e._protocol),o="DELETE",r=e.maxOperationRetryTime;function i(l,h){}const c=new X(s,o,i,r);return c.successCodes=[200,204],c.errorHandler=me(t),c}function St(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function vt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=St(null,t)),s}function Ct(e,t,n,s,o){const r=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const l=c();i["Content-Type"]="multipart/related; boundary="+l;const h=vt(t,s,o),u=Et(h,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+l+"--",g=N.getBlob(d,s,_);if(g===null)throw Ke();const w={name:h.fullPath},m=j(r,e.host,e._protocol),R="POST",I=e.maxUploadRetryTime,E=new X(m,R,It(e,n),I);return E.urlParams=w,E.headers=i,E.body=g.uploadData(),E.errorHandler=_e(t),E}class Dt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=O.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=O.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Pt extends Dt{initXhr(){this.xhr_.responseType="text"}}function K(){return new Pt}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return he(this._location.path)}get storage(){return this._service}get parent(){const t=wt(this._location.path);if(t===null)return null;const n=new k(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ye(t)}}function Lt(e,t,n){e._throwIfRoot("uploadBytes");const s=Ct(e.storage,e._location,de(),new N(t,!0),n);return e.storage.makeRequestWithTokens(s,K).then(o=>({metadata:o,ref:e}))}function Bt(e){e._throwIfRoot("getDownloadURL");const t=Ot(e.storage,e._location,de());return e.storage.makeRequestWithTokens(t,K).then(n=>{if(n===null)throw Ge();return n})}function jt(e){e._throwIfRoot("deleteObject");const t=Ut(e.storage,e._location);return e.storage.makeRequestWithTokens(t,K)}function Ft(e,t){const n=bt(e._location.path,t),s=new k(e._location.bucket,n);return new U(e.storage,s)}/**
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
 */function Mt(e){return/^[A-Za-z]+:\/\//.test(e)}function $t(e,t){return new U(e,t)}function ge(e,t){if(e instanceof G){const n=e;if(n._bucket==null)throw Xe();const s=new U(n,n._bucket);return t!=null?ge(s,t):s}else return t!==void 0?Ft(e,t):e}function Ht(e,t){if(t&&Mt(t)){if(e instanceof G)return $t(e,t);throw q("To use ref(service, url), the first argument must be a Storage instance.")}else return ge(e,t)}function ee(e,t){const n=t==null?void 0:t[oe];return n==null?null:k.makeFromBucketSpec(n,e)}function qt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Ie(o,e.app.options.projectId))}class G{constructor(t,n,s,o,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Le,this._maxUploadRetryTime=Be,this._requests=new Set,o!=null?this._bucket=k.makeFromBucketSpec(o,this._host):this._bucket=ee(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=ee(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Q("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Q("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,s,o,r=!0){if(this._deleted)return new Ze(re());{const i=lt(t,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const te="@firebase/storage",ne="0.13.2";/**
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
 */const Re="storage";function Vt(e,t,n){return e=C(e),Lt(e,t,n)}function zt(e){return e=C(e),Bt(e)}function Wt(e){return e=C(e),jt(e)}function we(e,t){return e=C(e),Ht(e,t)}function Xt(e=Ae(),t){e=C(e);const s=ye(e,Re).getImmediate({identifier:t}),o=ke("storage");return o&&Kt(s,...o),s}function Kt(e,t,n,s={}){qt(e,t,n,s)}function Gt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new G(n,s,o,t,Ne)}function Jt(){xe(new Ee(Re,Gt,"PUBLIC").setMultipleInstances(!0)),J(te,ne,""),J(te,ne,"esm2017")}Jt();const be=Xt(Ue);async function Yt(e,t,n,s){console.log("uploading file"),console.log(`${e}/${t}/${n}`);const o=we(be,`${e}/${t}/${n}`),r=await Vt(o,s);return await zt(r.ref)}async function Zt(e,t,n){const s=we(be,`${e}/${t}/${n}`);await Wt(s)}function Qt({addResource:e,dialogRef:t,close:n,activityId:s}){const[o,r]=y.useState("unset"),[i,c]=y.useState(""),[l,h]=y.useState(""),[u,d]=y.useState(!1),[_,g]=y.useState(""),w=y.useRef(null);return a.jsx("dialog",{ref:t,children:a.jsxs("div",{className:"AddResourceDiv",children:[a.jsx("h2",{children:"Add Resource"}),o=="unset"?a.jsxs("div",{className:"ResourceTypeSelect",children:[a.jsx("h3",{children:"Resource Type"}),a.jsx("button",{className:"ActionBtn",onClick:()=>{r("link")},children:"Link"}),a.jsx("button",{className:"ActionBtn",onClick:()=>{r("image")},children:"Image"}),a.jsx("button",{className:"ActionBtn",onClick:()=>{r("video")},children:"Video"})]}):a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Resource Name"}),a.jsx("input",{type:"text",className:"ResourceNameInput",value:i,onChange:m=>{c(m.target.value)}}),a.jsx("h3",{children:"Resource Description"}),a.jsx("input",{type:"text",className:"ResourceDescriptionInput",value:l,onChange:m=>{h(m.target.value)}}),o=="link"?a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Link"}),a.jsx("input",{type:"text",className:"ResourceLinkInput",value:_,onChange:m=>{g(m.target.value)}})]}):a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Resource File"}),a.jsx("input",{type:"file",className:"ResourceFileInput",ref:w})]}),a.jsx("br",{}),u?a.jsx("div",{className:"loader"}):a.jsx("button",{className:"ActionBtn",onClick:async()=>{if(d(!0),o=="link"){const m=Y.fromBlank(i,l,o,_);await e(m)}else{const m=w.current.files[0];if(m==null)return;const R=m.name.split(".")[0]+Date.now()+"."+m.name.split(".")[1],I=localStorage.getItem("schoolId"),E=await Yt(I,s,R,m),A=Ce.fromBlank(R,E),b=Y.fromBlank(i,l,o,"",A);await e(b)}r("unset"),c(""),h(""),g(""),d(!1)},children:"Add Resource"})]}),a.jsx("br",{}),a.jsx("button",{className:"ActionBtn",onClick:()=>{r("unset"),c(""),h(""),g(""),n()},children:"Close"})]})})}function en({resource:e,canRemove:t,removeResource:n}){return a.jsxs("div",{className:"resource-tile",children:[a.jsx("h3",{children:e.name}),a.jsx("p",{children:e.description}),a.jsxs("div",{children:[e.type=="link"?a.jsx("button",{className:"ActionBtn",onClick:()=>{window.open(e.link,"_blank")},children:"Open Link"}):a.jsx("button",{className:"ActionBtn",onClick:()=>{const s=new XMLHttpRequest;s.responseType="blob",s.onload=o=>{const r=s.response,i=document.createElement("a");i.href=URL.createObjectURL(r),i.download=e.file.name,i.click(),URL.revokeObjectURL(i.href)},s.open("GET",e.file.url),s.send()},children:"Download File"}),t&&a.jsx("button",{onClick:()=>n(),className:"ActionBtn",children:"Remove"})]})]})}Se(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(tn,{})}));function tn(){const[e,t]=y.useState(""),[n,s]=y.useState(""),[o,r]=y.useState(),[i,c]=y.useState("student"),l=y.useRef(null);y.useEffect(()=>{ve(()=>{});const u=new URLSearchParams(window.location.search),d=u.get("activityId");d&&t(d);const _=u.get("showId");_&&s(_);const g=localStorage.getItem("show-"+_);g&&(r(P.fromMap(JSON.parse(g))),console.log(P.fromMap(JSON.parse(g))));const w=localStorage.getItem("accountType");w&&c(w)},[]);const h=u=>async()=>{if(u.type!="link"){const d=localStorage.getItem("schoolId");await Zt(d,e,u.file.name)}o==null||o.resources.splice(o.resources.indexOf(u),1),localStorage.setItem("show-"+n,JSON.stringify(o)),r(P.fromMap(JSON.parse(localStorage.getItem("show-"+n)))),await Pe(e,n,u)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"title",children:a.jsx("h1",{children:"Resources"})}),a.jsxs("div",{className:"center",children:[a.jsx("div",{className:"resources",children:o==null?void 0:o.resources.map((u,d)=>a.jsx(en,{resource:u,canRemove:i==="teacher",removeResource:h(u)},d))}),i==="teacher"&&a.jsx("button",{className:"ActionBtn",onClick:()=>{var u;(u=l.current)==null||u.showModal()},children:"Add Resource"}),a.jsx("button",{className:"ActionBtn",onClick:()=>{window.location.href=`/Activity/Shows/Show/?activityId=${e}&showId=${n}`},children:"Back"})]}),a.jsx(Qt,{dialogRef:l,activityId:e,close:()=>{var u;(u=l.current)==null||u.close()},addResource:async u=>{var d;await De(e,n,u),o==null||o.resources.push(u),localStorage.setItem("show-"+n,JSON.stringify(o)),r(P.fromMap(JSON.parse(localStorage.getItem("show-"+n)))),(d=l.current)==null||d.close()}})]})}
