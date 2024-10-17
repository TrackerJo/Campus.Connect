import{L as uu,_ as lu,C as hu,d as go,F as du,g as $t,e as fu,f as pu,h as mu,k as te,m as gu,S as _u,n as yu,o as Tu,p as vu,q as Eu,s as Me}from"./index-Drzf2ig_.js";var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var me,sa;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,A){for(var g=Array(arguments.length-2),qt=2;qt<arguments.length;qt++)g[qt-2]=arguments[qt];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=m+(A^_&(T^A))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^A)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~A))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<m;)if(y[T++]=v.charCodeAt(A++),T==this.blockSize){i(this,y),T=0;break}}else for(;A<m;)if(y[T++]=v[A++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;y&&A==m||(_[T]=A,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return k(f(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return k(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=w,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var w=h(0),E=h(1),R=h(16777216);s=a.prototype,s.m=function(){if(M(this))return-k(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},s.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(M(this))return"-"+k(this).toString(v);for(var m=f(Math.pow(v,6)),_=this,y="";;){var T=it(_,m).g;_=O(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,C(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},s.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function M(v){return v.h==-1}s.l=function(v){return v=O(this,v),M(v)?-1:C(v)?0:1};function k(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(E)}s.abs=function(){return M(this)?k(this):this},s.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=m;T++){var A=y+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(v,m){return v.add(k(m))}s.j=function(v){if(C(this)||C(v))return w;if(M(this))return M(v)?k(this).j(k(v)):k(k(this).j(v));if(M(v))return k(this.j(k(v)));if(0>this.l(R)&&0>v.l(R))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,qt=v.i(T)>>>16,He=v.i(T)&65535;_[2*y+2*T]+=g*He,$(_,2*y+2*T),_[2*y+2*T+1]+=A*He,$(_,2*y+2*T+1),_[2*y+2*T+1]+=g*qt,$(_,2*y+2*T+1),_[2*y+2*T+2]+=A*qt,$(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function $(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function it(v,m){if(C(m))throw Error("division by zero");if(C(v))return new H(w,w);if(M(v))return m=it(k(v),m),new H(k(m.g),k(m.h));if(M(m))return m=it(v,k(m)),new H(k(m.g),m.h);if(30<v.g.length){if(M(v)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,y=m;0>=y.l(v);)_=Bt(_),y=Bt(y);var T=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!C(y);){var g=A.add(y);0>=g.l(v)&&(T=T.add(_),A=g),y=at(y,1),_=at(_,1)}return m=O(v,T.j(m)),new H(T,m)}for(T=w;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(m);M(g)||0<g.l(v);)_-=y,A=f(_),g=A.j(m);C(A)&&(A=E),T=T.add(A),v=O(v,g)}return new H(T,v)}s.A=function(v){return it(this,v).h},s.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},s.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},s.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Bt(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function at(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,T=[],A=0;A<y;A++)T[A]=0<m?v.i(A+_)>>>m|v.i(A+_+1)<<32-m:v.i(A+_);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sa=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,me=a}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});var rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,pn,ia,cs,Tr,oa,aa,ca;(function(){var s,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,l){return r==Array.prototype||r==Object.prototype||(r[c]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof rs=="object"&&rs];for(var c=0;c<r.length;++c){var l=r[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(r,c){if(c)t:{var l=n;r=r.split(".");for(var d=0;d<r.length-1;d++){var I=r[d];if(!(I in l))break t;l=l[I]}r=r[r.length-1],d=l[r],c=c(d),c!=d&&c!=null&&t(l,r,{configurable:!0,writable:!0,value:c})}}function o(r,c){r instanceof String&&(r+="");var l=0,d=!1,I={next:function(){if(!d&&l<r.length){var P=l++;return{value:c(P,r[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(r){return r||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function f(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function p(r,c,l){return r.call.apply(r.bind,arguments)}function w(r,c,l){if(!r)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),r.apply(c,I)}}return function(){return r.apply(c,arguments)}}function E(r,c,l){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,E.apply(null,arguments)}function R(r,c){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),r.apply(this,d)}}function C(r,c){function l(){}l.prototype=c.prototype,r.aa=c.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(d,I,P){for(var D=Array(arguments.length-2),W=2;W<arguments.length;W++)D[W-2]=arguments[W];return c.prototype[I].apply(d,D)}}function M(r){const c=r.length;if(0<c){const l=Array(c);for(let d=0;d<c;d++)l[d]=r[d];return l}return[]}function k(r,c){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=r.length||0,P=d.length||0;r.length=I+P;for(let D=0;D<P;D++)r[I+D]=d[D]}else r.push(d)}}class O{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function $(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function it(r){return it[" "](r),r}it[" "]=function(){};var Bt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function at(r,c,l){for(const d in r)c.call(l,r[d],d,r)}function v(r,c){for(const l in r)c.call(void 0,r[l],l,r)}function m(r){const c={};for(const l in r)c[l]=r[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,c){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)r[l]=d[l];for(let P=0;P<_.length;P++)l=_[P],Object.prototype.hasOwnProperty.call(d,l)&&(r[l]=d[l])}}function T(r){var c=1;r=r.split(":");const l=[];for(;0<c&&r.length;)l.push(r.shift()),c--;return r.length&&l.push(r.join(":")),l}function A(r){u.setTimeout(()=>{throw r},0)}function g(){var r=Ks;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class qt{constructor(){this.h=this.g=null}add(c,l){const d=He.get();d.set(c,l),this.h?this.h.next=d:this.g=d,this.h=d}}var He=new O(()=>new Sc,r=>r.reset());class Sc{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Ye=!1,Ks=new qt,mi=()=>{const r=u.Promise.resolve(void 0);Xe=()=>{r.then(Cc)}};var Cc=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(l){A(l)}var c=He;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}Ye=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Dc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return r}();function Je(r,c){if(ft.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,d=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(Bt){t:{try{it(c.nodeName);var I=!0;break t}catch{}I=!1}I||(c=null)}}else l=="mouseover"?c=r.fromElement:l=="mouseout"&&(c=r.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Mc[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Je.aa.h.call(this)}}C(Je,ft);var Mc={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),kc=0;function bc(r,c,l,d,I){this.listener=r,this.proxy=null,this.src=c,this.type=l,this.capture=!!d,this.ha=I,this.key=++kc,this.da=this.fa=!1}function Bn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function qn(r){this.src=r,this.g={},this.h=0}qn.prototype.add=function(r,c,l,d,I){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var D=Qs(r,c,d,I);return-1<D?(c=r[D],l||(c.fa=!1)):(c=new bc(c,this.src,P,!!d,I),c.fa=l,r.push(c)),c};function $s(r,c){var l=c.type;if(l in r.g){var d=r.g[l],I=Array.prototype.indexOf.call(d,c,void 0),P;(P=0<=I)&&Array.prototype.splice.call(d,I,1),P&&(Bn(c),r.g[l].length==0&&(delete r.g[l],r.h--))}}function Qs(r,c,l,d){for(var I=0;I<r.length;++I){var P=r[I];if(!P.da&&P.listener==c&&P.capture==!!l&&P.ha==d)return I}return-1}var Ws="closure_lm_"+(1e6*Math.random()|0),Hs={};function gi(r,c,l,d,I){if(Array.isArray(c)){for(var P=0;P<c.length;P++)gi(r,c[P],l,d,I);return null}return l=Ti(l),r&&r[Un]?r.K(c,l,f(d)?!!d.capture:!!d,I):Nc(r,c,l,!1,d,I)}function Nc(r,c,l,d,I,P){if(!c)throw Error("Invalid event type");var D=f(I)?!!I.capture:!!I,W=Ys(r);if(W||(r[Ws]=W=new qn(r)),l=W.add(c,l,d,D,P),l.proxy)return l;if(d=xc(),l.proxy=d,d.src=r,d.listener=l,r.addEventListener)Dc||(I=D),I===void 0&&(I=!1),r.addEventListener(c.toString(),d,I);else if(r.attachEvent)r.attachEvent(yi(c.toString()),d);else if(r.addListener&&r.removeListener)r.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function xc(){function r(l){return c.call(r.src,r.listener,l)}const c=Fc;return r}function _i(r,c,l,d,I){if(Array.isArray(c))for(var P=0;P<c.length;P++)_i(r,c[P],l,d,I);else d=f(d)?!!d.capture:!!d,l=Ti(l),r&&r[Un]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],l=Qs(P,l,d,I),-1<l&&(Bn(P[l]),Array.prototype.splice.call(P,l,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=Ys(r))&&(c=r.g[c.toString()],r=-1,c&&(r=Qs(c,l,d,I)),(l=-1<r?c[r]:null)&&Xs(l))}function Xs(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[Un])$s(c.i,r);else{var l=r.type,d=r.proxy;c.removeEventListener?c.removeEventListener(l,d,r.capture):c.detachEvent?c.detachEvent(yi(l),d):c.addListener&&c.removeListener&&c.removeListener(d),(l=Ys(c))?($s(l,r),l.h==0&&(l.src=null,c[Ws]=null)):Bn(r)}}}function yi(r){return r in Hs?Hs[r]:Hs[r]="on"+r}function Fc(r,c){if(r.da)r=!0;else{c=new Je(c,this);var l=r.listener,d=r.ha||r.src;r.fa&&Xs(r),r=l.call(d,c)}return r}function Ys(r){return r=r[Ws],r instanceof qn?r:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ti(r){return typeof r=="function"?r:(r[Js]||(r[Js]=function(c){return r.handleEvent(c)}),r[Js])}function pt(){Xt.call(this),this.i=new qn(this),this.M=this,this.F=null}C(pt,Xt),pt.prototype[Un]=!0,pt.prototype.removeEventListener=function(r,c,l,d){_i(this,r,c,l,d)};function vt(r,c){var l,d=r.F;if(d)for(l=[];d;d=d.F)l.push(d);if(r=r.M,d=c.type||c,typeof c=="string")c=new ft(c,r);else if(c instanceof ft)c.target=c.target||r;else{var I=c;c=new ft(d,r),y(c,I)}if(I=!0,l)for(var P=l.length-1;0<=P;P--){var D=c.g=l[P];I=jn(D,d,!0,c)&&I}if(D=c.g=r,I=jn(D,d,!0,c)&&I,I=jn(D,d,!1,c)&&I,l)for(P=0;P<l.length;P++)D=c.g=l[P],I=jn(D,d,!1,c)&&I}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var l=r.g[c],d=0;d<l.length;d++)Bn(l[d]);delete r.g[c],r.h--}}this.F=null},pt.prototype.K=function(r,c,l,d){return this.i.add(String(r),c,!1,l,d)},pt.prototype.L=function(r,c,l,d){return this.i.add(String(r),c,!0,l,d)};function jn(r,c,l,d){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,P=0;P<c.length;++P){var D=c[P];if(D&&!D.da&&D.capture==l){var W=D.listener,ct=D.ha||D.src;D.fa&&$s(r.i,D),I=W.call(ct,d)!==!1&&I}}return I&&!d.defaultPrevented}function vi(r,c,l){if(typeof r=="function")l&&(r=E(r,l));else if(r&&typeof r.handleEvent=="function")r=E(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(r,c||0)}function Ei(r){r.g=vi(()=>{r.g=null,r.i&&(r.i=!1,Ei(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Oc extends Xt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(r){Xt.call(this),this.h=r,this.g={}}C(Ze,Xt);var Ii=[];function wi(r){at(r.g,function(c,l){this.g.hasOwnProperty(l)&&Xs(c)},r),r.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),wi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zs=u.JSON.stringify,Lc=u.JSON.parse,Uc=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function tr(){}tr.prototype.h=null;function Ai(r){return r.h||(r.h=r.i())}function Ri(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){ft.call(this,"d")}C(er,ft);function nr(){ft.call(this,"c")}C(nr,ft);var le={},Pi=null;function Gn(){return Pi=Pi||new pt}le.La="serverreachability";function Vi(r){ft.call(this,le.La,r)}C(Vi,ft);function en(r){const c=Gn();vt(c,new Vi(c))}le.STAT_EVENT="statevent";function Si(r,c){ft.call(this,le.STAT_EVENT,r),this.stat=c}C(Si,ft);function Et(r){const c=Gn();vt(c,new Si(c,r))}le.Ma="timingevent";function Ci(r,c){ft.call(this,le.Ma,r),this.size=c}C(Ci,ft);function nn(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},c)}function sn(){this.g=!0}sn.prototype.xa=function(){this.g=!1};function Bc(r,c,l,d,I,P){r.info(function(){if(r.g)if(P)for(var D="",W=P.split("&"),ct=0;ct<W.length;ct++){var z=W[ct].split("=");if(1<z.length){var mt=z[0];z=z[1];var gt=mt.split("_");D=2<=gt.length&&gt[1]=="type"?D+(mt+"="+z+"&"):D+(mt+"=redacted&")}}else D=null;else D=P;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+c+`
`+l+`
`+D})}function qc(r,c,l,d,I,P,D){r.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+c+`
`+l+`
`+P+" "+D})}function we(r,c,l,d){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Gc(r,l)+(d?" "+d:"")})}function jc(r,c){r.info(function(){return"TIMEOUT: "+c})}sn.prototype.info=function(){};function Gc(r,c){if(!r.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var d=l[r];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var P=I[0];if(P!="noop"&&P!="stop"&&P!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Zs(l)}catch{return c}}var zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sr;function Kn(){}C(Kn,tr),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},sr=new Kn;function Yt(r,c,l,d){this.j=r,this.i=c,this.l=l,this.R=d||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mi}function Mi(){this.i=null,this.g="",this.h=!1}var ki={},rr={};function ir(r,c,l){r.L=1,r.v=Hn(jt(c)),r.m=l,r.P=!0,bi(r,null)}function bi(r,c){r.F=Date.now(),$n(r),r.A=jt(r.v);var l=r.A,d=r.R;Array.isArray(d)||(d=[String(d)]),Qi(l.i,"t",d),r.C=0,l=r.j.J,r.h=new Mi,r.g=ho(r.j,l?c:null,!r.m),0<r.O&&(r.M=new Oc(E(r.Y,r,r.g),r.O)),c=r.U,l=r.g,d=r.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ii[0]=I.toString()),I=Ii);for(var P=0;P<I.length;P++){var D=gi(l,I[P],d||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),en(),Bc(r.i,r.u,r.A,r.l,r.R,r.m)}Yt.prototype.ca=function(r){r=r.target;const c=this.M;c&&Gt(r)==3?c.j():this.Y(r)},Yt.prototype.Y=function(r){try{if(r==this.g)t:{const gt=Gt(this.g);var c=this.g.Ba();const Pe=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||to(this.g)))){this.J||gt!=4||c==7||(c==8||0>=Pe?en(3):en(2)),or(this);var l=this.g.Z();this.X=l;e:if(Ni(this)){var d=to(this.g);r="";var I=d.length,P=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),rn(this);var D="";break e}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,r+=this.h.i.decode(d[c],{stream:!(P&&c==I-1)});d.length=0,this.h.g+=r,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,qc(this.i,this.u,this.A,this.l,this.R,gt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(W)){var z=W;break e}}z=null}if(l=z)we(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ar(this,l);else{this.o=!1,this.s=3,Et(12),he(this),rn(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<D.length;)if(Dt=zc(this,D),Dt==rr){gt==4&&(this.s=4,Et(14),l=!1),we(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==ki){this.s=4,Et(15),we(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else we(this.i,this.l,Dt,null),ar(this,Dt);if(Ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||D.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)we(this.i,this.l,D,"[Invalid Chunked Response]"),he(this),rn(this);else if(0<D.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),fr(mt),mt.M=!0,Et(11))}}else we(this.i,this.l,D,null),ar(this,D);gt==4&&he(this),this.o&&!this.J&&(gt==4?ao(this.j,this):(this.o=!1,$n(this)))}else au(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),he(this),rn(this)}}}catch{}finally{}};function Ni(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function zc(r,c){var l=r.C,d=c.indexOf(`
`,l);return d==-1?rr:(l=Number(c.substring(l,d)),isNaN(l)?ki:(d+=1,d+l>c.length?rr:(c=c.slice(d,d+l),r.C=d+l,c)))}Yt.prototype.cancel=function(){this.J=!0,he(this)};function $n(r){r.S=Date.now()+r.I,xi(r,r.I)}function xi(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=nn(E(r.ba,r),c)}function or(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Yt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(jc(this.i,this.A),this.L!=2&&(en(),Et(17)),he(this),this.s=2,rn(this)):xi(this,this.S-r)};function rn(r){r.j.G==0||r.J||ao(r.j,r)}function he(r){or(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,wi(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function ar(r,c){try{var l=r.j;if(l.G!=0&&(l.g==r||cr(l.h,r))){if(!r.K&&cr(l.h,r)&&l.G==3){try{var d=l.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)es(l),Zn(l);else break t;dr(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=nn(E(l.Za,l),6e3));if(1>=Li(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else fe(l,11)}else if((r.K||l.g==r)&&es(l),!$(c))for(I=l.Da.g.parse(c),c=0;c<I.length;c++){let z=I[c];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const mt=z[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const gt=z[4];gt!=null&&(l.Aa=gt,l.j.info("SVER="+l.Aa));const Pe=z[5];Pe!=null&&typeof Pe=="number"&&0<Pe&&(d=1.5*Pe,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Dt=r.g;if(Dt){const ss=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ss){var P=d.h;P.g||ss.indexOf("spdy")==-1&&ss.indexOf("quic")==-1&&ss.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ur(P,P.h),P.h=null))}if(d.D){const pr=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;pr&&(d.ya=pr,X(d.I,d.D,pr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var D=r;if(d.qa=lo(d,d.J?d.ia:null,d.W),D.K){Ui(d.h,D);var W=D,ct=d.L;ct&&(W.I=ct),W.B&&(or(W),$n(W)),d.g=D}else io(d);0<l.i.length&&ts(l)}else z[0]!="stop"&&z[0]!="close"||fe(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?fe(l,7):hr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}en(4)}catch{}}var Kc=class{constructor(r,c){this.g=r,this.map=c}};function Fi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Li(r){return r.h?1:r.g?r.g.size:0}function cr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function ur(r,c){r.g?r.g.add(c):r.h=c}function Ui(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Fi.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Bi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const l of r.g.values())c=c.concat(l.D);return c}return M(r.i)}function $c(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var c=[],l=r.length,d=0;d<l;d++)c.push(r[d]);return c}c=[],l=0;for(d in r)c[l++]=r[d];return c}function Qc(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var c=[];r=r.length;for(var l=0;l<r;l++)c.push(l);return c}c=[],l=0;for(const d in r)c[l++]=d;return c}}}function qi(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var l=Qc(r),d=$c(r),I=d.length,P=0;P<I;P++)c.call(void 0,d[P],l&&l[P],r)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wc(r,c){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var d=r[l].indexOf("="),I=null;if(0<=d){var P=r[l].substring(0,d);I=r[l].substring(d+1)}else P=r[l];c(P,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function de(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof de){this.h=r.h,Qn(this,r.j),this.o=r.o,this.g=r.g,Wn(this,r.s),this.l=r.l;var c=r.i,l=new cn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Gi(this,l),this.m=r.m}else r&&(c=String(r).match(ji))?(this.h=!1,Qn(this,c[1]||"",!0),this.o=on(c[2]||""),this.g=on(c[3]||"",!0),Wn(this,c[4]),this.l=on(c[5]||"",!0),Gi(this,c[6]||"",!0),this.m=on(c[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}de.prototype.toString=function(){var r=[],c=this.j;c&&r.push(an(c,zi,!0),":");var l=this.g;return(l||c=="file")&&(r.push("//"),(c=this.o)&&r.push(an(c,zi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(an(l,l.charAt(0)=="/"?Yc:Xc,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",an(l,Zc)),r.join("")};function jt(r){return new de(r)}function Qn(r,c,l){r.j=l?on(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function Wn(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Gi(r,c,l){c instanceof cn?(r.i=c,tu(r.i,r.h)):(l||(c=an(c,Jc)),r.i=new cn(c,r.h))}function X(r,c,l){r.i.set(c,l)}function Hn(r){return X(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function on(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function an(r,c,l){return typeof r=="string"?(r=encodeURI(r).replace(c,Hc),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Hc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var zi=/[#\/\?@]/g,Xc=/[#\?:]/g,Yc=/[#\?]/g,Jc=/[#\?@]/g,Zc=/#/g;function cn(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function Jt(r){r.g||(r.g=new Map,r.h=0,r.i&&Wc(r.i,function(c,l){r.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}s=cn.prototype,s.add=function(r,c){Jt(this),this.i=null,r=Ae(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(c),this.h+=1,this};function Ki(r,c){Jt(r),c=Ae(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function $i(r,c){return Jt(r),c=Ae(r,c),r.g.has(c)}s.forEach=function(r,c){Jt(this),this.g.forEach(function(l,d){l.forEach(function(I){r.call(c,I,d,this)},this)},this)},s.na=function(){Jt(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let d=0;d<c.length;d++){const I=r[d];for(let P=0;P<I.length;P++)l.push(c[d])}return l},s.V=function(r){Jt(this);let c=[];if(typeof r=="string")$i(this,r)&&(c=c.concat(this.g.get(Ae(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)c=c.concat(r[l])}return c},s.set=function(r,c){return Jt(this),this.i=null,r=Ae(this,r),$i(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},s.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function Qi(r,c,l){Ki(r,c),0<l.length&&(r.i=null,r.g.set(Ae(r,c),M(l)),r.h+=l.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var d=c[l];const P=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var I=P;D[d]!==""&&(I+="="+encodeURIComponent(String(D[d]))),r.push(I)}}return this.i=r.join("&")};function Ae(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function tu(r,c){c&&!r.j&&(Jt(r),r.i=null,r.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Ki(this,d),Qi(this,I,l))},r)),r.j=c}function eu(r,c){const l=new sn;if(u.Image){const d=new Image;d.onload=R(Zt,l,"TestLoadImage: loaded",!0,c,d),d.onerror=R(Zt,l,"TestLoadImage: error",!1,c,d),d.onabort=R(Zt,l,"TestLoadImage: abort",!1,c,d),d.ontimeout=R(Zt,l,"TestLoadImage: timeout",!1,c,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=r}else c(!1)}function nu(r,c){const l=new sn,d=new AbortController,I=setTimeout(()=>{d.abort(),Zt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:d.signal}).then(P=>{clearTimeout(I),P.ok?Zt(l,"TestPingServer: ok",!0,c):Zt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),Zt(l,"TestPingServer: error",!1,c)})}function Zt(r,c,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function su(){this.g=new Uc}function ru(r,c,l){const d=l||"";try{qi(r,function(I,P){let D=I;f(I)&&(D=Zs(I)),c.push(d+P+"="+encodeURIComponent(D))})}catch(I){throw c.push(d+"type="+encodeURIComponent("_badmap")),I}}function Xn(r){this.l=r.Ub||null,this.j=r.eb||!1}C(Xn,tr),Xn.prototype.g=function(){return new Yn(this.l,this.j)},Xn.prototype.i=function(r){return function(){return r}}({});function Yn(r,c){pt.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Yn,pt),s=Yn.prototype,s.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,ln(this)},s.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},s.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}s.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?un(this):ln(this),this.readyState==3&&Wi(this)}},s.Ra=function(r){this.g&&(this.response=this.responseText=r,un(this))},s.Qa=function(r){this.g&&(this.response=r,un(this))},s.ga=function(){this.g&&un(this)};function un(r){r.readyState=4,r.l=null,r.j=null,r.v=null,ln(r)}s.setRequestHeader=function(r,c){this.u.append(r,c)},s.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=c.next();return r.join(`\r
`)};function ln(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Hi(r){let c="";return at(r,function(l,d){c+=d,c+=":",c+=l,c+=`\r
`}),c}function lr(r,c,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Hi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):X(r,c,l))}function tt(r){pt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(tt,pt);var iu=/^https?$/i,ou=["POST","PUT"];s=tt.prototype,s.Ha=function(r){this.J=r},s.ea=function(r,c,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sr.g(),this.v=this.o?Ai(this.o):Ai(sr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){Xi(this,P);return}if(r=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())l.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(P=>P.toLowerCase()=="content-type"),I=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ou,c,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,D]of l)this.g.setRequestHeader(P,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zi(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){Xi(this,P)}};function Xi(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,Yi(r),Jn(r)}function Yi(r){r.A||(r.A=!0,vt(r,"complete"),vt(r,"error"))}s.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,vt(this,"complete"),vt(this,"abort"),Jn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),tt.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Ji(this):this.bb())},s.bb=function(){Ji(this)};function Ji(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Gt(r)!=4||r.Z()!=2)){if(r.u&&Gt(r)==4)vi(r.Ea,0,r);else if(vt(r,"readystatechange"),Gt(r)==4){r.h=!1;try{const D=r.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var d;if(d=D===0){var I=String(r.D).match(ji)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!iu.test(I?I.toLowerCase():"")}l=d}if(l)vt(r,"complete"),vt(r,"success");else{r.m=6;try{var P=2<Gt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",Yi(r)}}finally{Jn(r)}}}}function Jn(r,c){if(r.g){Zi(r);const l=r.g,d=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||vt(r,"ready");try{l.onreadystatechange=d}catch{}}}function Zi(r){r.I&&(u.clearTimeout(r.I),r.I=null)}s.isActive=function(){return!!this.g};function Gt(r){return r.g?r.g.readyState:0}s.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Lc(c)}};function to(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function au(r){const c={};r=(r.g&&2<=Gt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<r.length;d++){if($(r[d]))continue;var l=T(r[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const P=c[I]||[];c[I]=P,P.push(l)}v(c,function(d){return d.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(r,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||c}function eo(r){this.Aa=0,this.i=[],this.j=new sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,r),this.cb=hn("retryDelaySeedMs",1e4,r),this.Wa=hn("forwardChannelMaxRetries",2,r),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(r&&r.concurrentRequestLimit),this.Da=new su,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=eo.prototype,s.la=8,s.G=1,s.connect=function(r,c,l,d){Et(0),this.W=r,this.H=c||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=lo(this,null,this.W),ts(this)};function hr(r){if(no(r),r.G==3){var c=r.U++,l=jt(r.I);if(X(l,"SID",r.K),X(l,"RID",c),X(l,"TYPE","terminate"),dn(r,l),c=new Yt(r,r.j,c),c.L=2,c.v=Hn(jt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=ho(c.j,null),c.g.ea(c.v)),c.F=Date.now(),$n(c)}uo(r)}function Zn(r){r.g&&(fr(r),r.g.cancel(),r.g=null)}function no(r){Zn(r),r.u&&(u.clearTimeout(r.u),r.u=null),es(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function ts(r){if(!Oi(r.h)&&!r.s){r.s=!0;var c=r.Ga;Xe||mi(),Ye||(Xe(),Ye=!0),Ks.add(c,r),r.B=0}}function cu(r,c){return Li(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=nn(E(r.Ga,r,c),co(r,r.B)),r.B++,!0)}s.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const I=new Yt(this,this.j,r);let P=this.o;if(this.S&&(P?(P=m(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(I.H=P,P=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=ro(this,I,c),l=jt(this.I),X(l,"RID",r),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),dn(this,l),P&&(this.O?c="headers="+encodeURIComponent(String(Hi(P)))+"&"+c:this.m&&lr(l,this.m,P)),ur(this.h,I),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",c),X(l,"SID","null"),I.T=!0,ir(I,l,null)):ir(I,l,c),this.G=2}}else this.G==3&&(r?so(this,r):this.i.length==0||Oi(this.h)||so(this))};function so(r,c){var l;c?l=c.l:l=r.U++;const d=jt(r.I);X(d,"SID",r.K),X(d,"RID",l),X(d,"AID",r.T),dn(r,d),r.m&&r.o&&lr(d,r.m,r.o),l=new Yt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),c&&(r.i=c.D.concat(r.i)),c=ro(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),ur(r.h,l),ir(l,d,c)}function dn(r,c){r.H&&at(r.H,function(l,d){X(c,d,l)}),r.l&&qi({},function(l,d){X(c,d,l)})}function ro(r,c,l){l=Math.min(r.i.length,l);var d=r.l?E(r.l.Na,r.l,r):null;t:{var I=r.i;let P=-1;for(;;){const D=["count="+l];P==-1?0<l?(P=I[0].g,D.push("ofs="+P)):P=0:D.push("ofs="+P);let W=!0;for(let ct=0;ct<l;ct++){let z=I[ct].g;const mt=I[ct].map;if(z-=P,0>z)P=Math.max(0,I[ct].g-100),W=!1;else try{ru(mt,D,"req"+z+"_")}catch{d&&d(mt)}}if(W){d=D.join("&");break t}}}return r=r.i.splice(0,l),c.D=r,d}function io(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;Xe||mi(),Ye||(Xe(),Ye=!0),Ks.add(c,r),r.v=0}}function dr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=nn(E(r.Fa,r),co(r,r.v)),r.v++,!0)}s.Fa=function(){if(this.u=null,oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=nn(E(this.ab,this),r)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Zn(this),oo(this))};function fr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function oo(r){r.g=new Yt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=jt(r.qa);X(c,"RID","rpc"),X(c,"SID",r.K),X(c,"AID",r.T),X(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&X(c,"TO",r.ja),X(c,"TYPE","xmlhttp"),dn(r,c),r.m&&r.o&&lr(c,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=Hn(jt(c)),l.m=null,l.P=!0,bi(l,r)}s.Za=function(){this.C!=null&&(this.C=null,Zn(this),dr(this),Et(19))};function es(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function ao(r,c){var l=null;if(r.g==c){es(r),fr(r),r.g=null;var d=2}else if(cr(r.h,c))l=c.D,Ui(r.h,c),d=1;else return;if(r.G!=0){if(c.o)if(d==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var I=r.B;d=Gn(),vt(d,new Ci(d,l)),ts(r)}else io(r);else if(I=c.s,I==3||I==0&&0<c.X||!(d==1&&cu(r,c)||d==2&&dr(r)))switch(l&&0<l.length&&(c=r.h,c.i=c.i.concat(l)),I){case 1:fe(r,5);break;case 4:fe(r,10);break;case 3:fe(r,6);break;default:fe(r,2)}}}function co(r,c){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*c}function fe(r,c){if(r.j.info("Error code "+c),c==2){var l=E(r.fb,r),d=r.Xa;const I=!d;d=new de(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Qn(d,"https"),Hn(d),I?eu(d.toString(),l):nu(d.toString(),l)}else Et(2);r.G=0,r.l&&r.l.sa(c),uo(r),no(r)}s.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function uo(r){if(r.G=0,r.ka=[],r.l){const c=Bi(r.h);(c.length!=0||r.i.length!=0)&&(k(r.ka,c),k(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function lo(r,c,l){var d=l instanceof de?jt(l):new de(l);if(d.g!="")c&&(d.g=c+"."+d.g),Wn(d,d.s);else{var I=u.location;d=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var P=new de(null);d&&Qn(P,d),c&&(P.g=c),I&&Wn(P,I),l&&(P.l=l),d=P}return l=r.D,c=r.ya,l&&c&&X(d,l,c),X(d,"VER",r.la),dn(r,d),d}function ho(r,c,l){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new tt(new Xn({eb:l})):new tt(r.pa),c.Ha(r.J),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function fo(){}s=fo.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function ns(){}ns.prototype.g=function(r,c){return new Rt(r,c)};function Rt(r,c){pt.call(this),this.g=new eo(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!$(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!$(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Re(this)}C(Rt,pt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){hr(this.g)},Rt.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=Zs(r),r=l);c.i.push(new Kc(c.Ya++,r)),c.G==3&&ts(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,hr(this.g),delete this.g,Rt.aa.N.call(this)};function po(r){er.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const l in c){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}C(po,er);function mo(){nr.call(this),this.status=1}C(mo,nr);function Re(r){this.g=r}C(Re,fo),Re.prototype.ua=function(){vt(this.g,"a")},Re.prototype.ta=function(r){vt(this.g,new po(r))},Re.prototype.sa=function(r){vt(this.g,new mo)},Re.prototype.ra=function(){vt(this.g,"b")},ns.prototype.createWebChannel=ns.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ca=function(){return new ns},aa=function(){return Gn()},oa=le,Tr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,cs=zn,Di.COMPLETE="complete",ia=Di,Ri.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,pn=Ri,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,ra=tt}).apply(typeof rs<"u"?rs:typeof self<"u"?self:typeof window<"u"?window:{});const yo="@firebase/firestore";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Ge="10.14.0";/**
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
 */const ge=new uu("@firebase/firestore");function fn(){return ge.logLevel}function N(s,...t){if(ge.logLevel<=te.DEBUG){const e=t.map(xr);ge.debug(`Firestore (${Ge}): ${s}`,...e)}}function Qt(s,...t){if(ge.logLevel<=te.ERROR){const e=t.map(xr);ge.error(`Firestore (${Ge}): ${s}`,...e)}}function ke(s,...t){if(ge.logLevel<=te.WARN){const e=t.map(xr);ge.warn(`Firestore (${Ge}): ${s}`,...e)}}function xr(s){if(typeof s=="string")return s;try{/**
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
*/return function(e){return JSON.stringify(e)}(s)}catch{return s}}/**
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
 */function L(s="Unexpected state"){const t=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: `+s;throw Qt(t),new Error(t)}function Q(s,t){s||L()}function B(s,t){return s}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends du{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Iu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class wu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Au{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string"),new ua(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new yt(t)}}class Ru{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Ru(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Su{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Q(this.o===void 0);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Vu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cu(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<s;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class la{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Cu(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(s,t){return s<t?-1:s>t?1:0}function be(s,t,e){return s.length===t.length&&s.every((n,i)=>e(n,t[i]))}/**
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
 */class rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new rt(0,0))}static max(){return new U(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class In{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return In.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof In?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends In{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Du=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends In{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return Du.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new b(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new b(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(o(),i++)}if(o(),a)throw new b(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function Mu(s,t){const e=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new rt(e+1,0):new rt(e,n));return new se(i,x.empty(),t)}function ku(s){return new se(s.readTime,s.key,-1)}class se{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new se(U.min(),x.empty(),-1)}static max(){return new se(U.max(),x.empty(),-1)}}function bu(s,t){let e=s.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(s.documentKey,t.documentKey),e!==0?e:K(s.largestBatchId,t.largestBatchId))}/**
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
 */const Nu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Mn(s){if(s.code!==V.FAILED_PRECONDITION||s.message!==Nu)throw s;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,n)=>{e(t)})}static reject(t){return new S((e,n)=>{n(t)})}static waitFor(t){return new S((e,n)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next(i=>i?S.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new S((n,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++u,u===o&&n(a)},p=>i(p))}})}static doWhile(t,e){return new S((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Fu(s){const t=s.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function kn(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Fr.oe=-1;function Ds(s){return s==null}function fs(s){return s===0&&1/s==-1/0}function Ou(s){return typeof s=="number"&&Number.isInteger(s)&&!fs(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */function To(s){let t=0;for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t++;return t}function Ee(s,t){for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t(e,s[e])}function ha(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new is(this.root,t,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new is(this.root,t,this.comparator,!0)}}class is{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ut(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vo(this.data.getIterator())}getIteratorFrom(t){return new vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ht(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class da extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new da("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Lu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function re(s){if(Q(!!s),typeof s=="string"){let t=0;const e=Lu.exec(s);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:et(s.seconds),nanos:et(s.nanos)}}function et(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function _e(s){return typeof s=="string"?dt.fromBase64String(s):dt.fromUint8Array(s)}/**
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
 */function Or(s){var t,e;return((e=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Lr(s){const t=s.mapValue.fields.__previous_value__;return Or(t)?Lr(t):t}function wn(s){const t=re(s.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
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
 */class Uu{constructor(t,e,n,i,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class An{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ye(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Or(s)?4:qu(s)?9007199254740991:Bu(s)?10:11:L()}function Ft(s,t){if(s===t)return!0;const e=ye(s);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return wn(s).isEqual(wn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=re(i.timestampValue),u=re(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(s,t);case 5:return s.stringValue===t.stringValue;case 6:return function(i,o){return _e(i.bytesValue).isEqual(_e(o.bytesValue))}(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(s,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=et(i.doubleValue),u=et(o.doubleValue);return a===u?fs(a)===fs(u):isNaN(a)&&isNaN(u)}return!1}(s,t);case 9:return be(s.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(To(a)!==To(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ft(a[h],u[h])))return!1;return!0}(s,t);default:return L()}}function Rn(s,t){return(s.values||[]).find(e=>Ft(e,t))!==void 0}function Ne(s,t){if(s===t)return 0;const e=ye(s),n=ye(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(s.booleanValue,t.booleanValue);case 2:return function(o,a){const u=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(s,t);case 3:return Eo(s.timestampValue,t.timestampValue);case 4:return Eo(wn(s),wn(t));case 5:return K(s.stringValue,t.stringValue);case 6:return function(o,a){const u=_e(o),h=_e(a);return u.compareTo(h)}(s.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const p=K(u[f],h[f]);if(p!==0)return p}return K(u.length,h.length)}(s.referenceValue,t.referenceValue);case 8:return function(o,a){const u=K(et(o.latitude),et(a.latitude));return u!==0?u:K(et(o.longitude),et(a.longitude))}(s.geoPointValue,t.geoPointValue);case 9:return Io(s.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,p;const w=o.fields||{},E=a.fields||{},R=(u=w.value)===null||u===void 0?void 0:u.arrayValue,C=(h=E.value)===null||h===void 0?void 0:h.arrayValue,M=K(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:Io(R,C)}(s.mapValue,t.mapValue);case 11:return function(o,a){if(o===os.mapValue&&a===os.mapValue)return 0;if(o===os.mapValue)return 1;if(a===os.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let w=0;w<h.length&&w<p.length;++w){const E=K(h[w],p[w]);if(E!==0)return E;const R=Ne(u[h[w]],f[p[w]]);if(R!==0)return R}return K(h.length,p.length)}(s.mapValue,t.mapValue);default:throw L()}}function Eo(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return K(s,t);const e=re(s),n=re(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function Io(s,t){const e=s.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ne(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function xe(s){return vr(s)}function vr(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(e){const n=re(e);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(e){return _e(e).toBase64()}(s.bytesValue):"referenceValue"in s?function(e){return x.fromName(e).toString()}(s.referenceValue):"geoPointValue"in s?function(e){return`geo(${e.latitude},${e.longitude})`}(s.geoPointValue):"arrayValue"in s?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=vr(o);return n+"]"}(s.arrayValue):"mapValue"in s?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${vr(e.fields[a])}`;return i+"}"}(s.mapValue):L()}function wo(s,t){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${t.path.canonicalString()}`}}function Er(s){return!!s&&"integerValue"in s}function Ur(s){return!!s&&"arrayValue"in s}function Ao(s){return!!s&&"nullValue"in s}function Ro(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function us(s){return!!s&&"mapValue"in s}function Bu(s){var t,e;return((e=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function yn(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const t={mapValue:{fields:{}}};return Ee(s.mapValue.fields,(e,n)=>t.mapValue.fields[e]=yn(n)),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(s.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yn(s.arrayValue.values[e]);return t}return Object.assign({},s)}function qu(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yn(e)}setAll(t){let e=lt.emptyPath(),n={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=u.popLast()}a?n[u.lastSegment()]=yn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];us(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ee(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new wt(yn(this.value))}}function fa(s){const t=[];return Ee(s.fields,(e,n)=>{const i=new lt([e]);if(us(n)){const o=fa(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Pt(t)}/**
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
 */class Tt{constructor(t,e,n,i,o,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Tt(t,0,U.min(),U.min(),U.min(),wt.empty(),0)}static newFoundDocument(t,e,n,i){return new Tt(t,1,e,U.min(),n,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,U.min(),U.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,U.min(),U.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(t,e){this.position=t,this.inclusive=e}}function Po(s,t,e){let n=0;for(let i=0;i<s.position.length;i++){const o=t[i],a=s.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(a.referenceValue),e.key):n=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vo(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let e=0;e<s.position.length;e++)if(!Ft(s.position[e],t.position[e]))return!1;return!0}/**
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
 */class ms{constructor(t,e="asc"){this.field=t,this.dir=e}}function ju(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
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
 */class pa{}class st extends pa{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new zu(t,e,n):e==="array-contains"?new Qu(t,n):e==="in"?new Wu(t,n):e==="not-in"?new Hu(t,n):e==="array-contains-any"?new Xu(t,n):new st(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ku(t,n):new $u(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends pa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return ma(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ma(s){return s.op==="and"}function ga(s){return Gu(s)&&ma(s)}function Gu(s){for(const t of s.filters)if(t instanceof kt)return!1;return!0}function Ir(s){if(s instanceof st)return s.field.canonicalString()+s.op.toString()+xe(s.value);if(ga(s))return s.filters.map(t=>Ir(t)).join(",");{const t=s.filters.map(e=>Ir(e)).join(",");return`${s.op}(${t})`}}function _a(s,t){return s instanceof st?function(n,i){return i instanceof st&&n.op===i.op&&n.field.isEqual(i.field)&&Ft(n.value,i.value)}(s,t):s instanceof kt?function(n,i){return i instanceof kt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,u)=>o&&_a(a,i.filters[u]),!0):!1}(s,t):void L()}function ya(s){return s instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(s):s instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(ya).join(" ,")+"}"}(s):"Filter"}class zu extends st{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ku extends st{constructor(t,e){super(t,"in",e),this.keys=Ta("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $u extends st{constructor(t,e){super(t,"not-in",e),this.keys=Ta("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ta(s,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class Qu extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ur(e)&&Rn(e.arrayValue,this.value)}}class Wu extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class Hu extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Rn(this.value.arrayValue,e)}}class Xu extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ur(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Rn(this.value.arrayValue,n))}}/**
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
 */class Yu{constructor(t,e=null,n=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function So(s,t=null,e=[],n=[],i=null,o=null,a=null){return new Yu(s,t,e,n,i,o,a)}function Br(s){const t=B(s);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ir(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Ds(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>xe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>xe(n)).join(",")),t.ue=e}return t.ue}function qr(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<s.orderBy.length;e++)if(!ju(s.orderBy[e],t.orderBy[e]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let e=0;e<s.filters.length;e++)if(!_a(s.filters[e],t.filters[e]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!Vo(s.startAt,t.startAt)&&Vo(s.endAt,t.endAt)}function wr(s){return x.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class bn{constructor(t,e=null,n=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ju(s,t,e,n,i,o,a,u){return new bn(s,t,e,n,i,o,a,u)}function jr(s){return new bn(s)}function Co(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function va(s){return s.collectionGroup!==null}function Tn(s){const t=B(s);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ms(o,n))}),e.has(lt.keyField().canonicalString())||t.ce.push(new ms(lt.keyField(),n))}return t.ce}function bt(s){const t=B(s);return t.le||(t.le=Zu(t,Tn(s))),t.le}function Zu(s,t){if(s.limitType==="F")return So(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ms(i.field,o)});const e=s.endAt?new ps(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new ps(s.startAt.position,s.startAt.inclusive):null;return So(s.path,s.collectionGroup,t,s.filters,s.limit,e,n)}}function Ar(s,t){const e=s.filters.concat([t]);return new bn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),e,s.limit,s.limitType,s.startAt,s.endAt)}function Rr(s,t,e){return new bn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,e,s.startAt,s.endAt)}function Ms(s,t){return qr(bt(s),bt(t))&&s.limitType===t.limitType}function Ea(s){return`${Br(bt(s))}|lt:${s.limitType}`}function Ve(s){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ya(i)).join(", ")}]`),Ds(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>xe(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>xe(i)).join(",")),`Target(${n})`}(bt(s))}; limitType=${s.limitType})`}function ks(s,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(s,t)&&function(n,i){for(const o of Tn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(s,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(s,t)&&function(n,i){return!(n.startAt&&!function(a,u,h){const f=Po(a,u,h);return a.inclusive?f<=0:f<0}(n.startAt,Tn(n),i)||n.endAt&&!function(a,u,h){const f=Po(a,u,h);return a.inclusive?f>=0:f>0}(n.endAt,Tn(n),i))}(s,t)}function tl(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Ia(s){return(t,e)=>{let n=!1;for(const i of Tn(s)){const o=el(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function el(s,t,e){const n=s.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Ne(h,f):L()}(s.field,t,e);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
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
 */class ze{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return ha(this.inner)}size(){return this.innerSize}}/**
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
 */const nl=new J(x.comparator);function Wt(){return nl}const wa=new J(x.comparator);function mn(...s){let t=wa;for(const e of s)t=t.insert(e.key,e);return t}function Aa(s){let t=wa;return s.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function pe(){return vn()}function Ra(){return vn()}function vn(){return new ze(s=>s.toString(),(s,t)=>s.isEqual(t))}const sl=new J(x.comparator),rl=new ht(x.comparator);function j(...s){let t=rl;for(const e of s)t=t.add(e);return t}const il=new ht(K);function ol(){return il}/**
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
 */function Gr(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(t)?"-0":t}}function Pa(s){return{integerValue:""+s}}function al(s,t){return Ou(t)?Pa(t):Gr(s,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class bs{constructor(){this._=void 0}}function cl(s,t,e){return s instanceof gs?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Or(o)&&(o=Lr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):s instanceof Pn?Sa(s,t):s instanceof Vn?Ca(s,t):function(i,o){const a=Va(i,o),u=Do(a)+Do(i.Pe);return Er(a)&&Er(i.Pe)?Pa(u):Gr(i.serializer,u)}(s,t)}function ul(s,t,e){return s instanceof Pn?Sa(s,t):s instanceof Vn?Ca(s,t):e}function Va(s,t){return s instanceof _s?function(n){return Er(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class gs extends bs{}class Pn extends bs{constructor(t){super(),this.elements=t}}function Sa(s,t){const e=Da(t);for(const n of s.elements)e.some(i=>Ft(i,n))||e.push(n);return{arrayValue:{values:e}}}class Vn extends bs{constructor(t){super(),this.elements=t}}function Ca(s,t){let e=Da(t);for(const n of s.elements)e=e.filter(i=>!Ft(i,n));return{arrayValue:{values:e}}}class _s extends bs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Do(s){return et(s.integerValue||s.doubleValue)}function Da(s){return Ur(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function ll(s,t){return s.field.isEqual(t.field)&&function(n,i){return n instanceof Pn&&i instanceof Pn||n instanceof Vn&&i instanceof Vn?be(n.elements,i.elements,Ft):n instanceof _s&&i instanceof _s?Ft(n.Pe,i.Pe):n instanceof gs&&i instanceof gs}(s.transform,t.transform)}class hl{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ls(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Ns{}function Ma(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new ba(s.key,Mt.none()):new Nn(s.key,s.data,Mt.none());{const e=s.data,n=wt.empty();let i=new ht(lt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new ce(s.key,n,new Pt(i.toArray()),Mt.none())}}function dl(s,t,e){s instanceof Nn?function(i,o,a){const u=i.value.clone(),h=ko(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(s,t,e):s instanceof ce?function(i,o,a){if(!ls(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ko(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ka(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(s,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(s,t,e,n){return s instanceof Nn?function(o,a,u,h){if(!ls(o.precondition,a))return u;const f=o.value.clone(),p=bo(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(s,t,e,n):s instanceof ce?function(o,a,u,h){if(!ls(o.precondition,a))return u;const f=bo(o.fieldTransforms,h,a),p=a.data;return p.setAll(ka(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(s,t,e,n):function(o,a,u){return ls(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(s,t,e)}function fl(s,t){let e=null;for(const n of s.fieldTransforms){const i=t.data.field(n.field),o=Va(n.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(n.field,o))}return e||null}function Mo(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&be(n,i,(o,a)=>ll(o,a))}(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Nn extends Ns{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends Ns{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ka(s){const t=new Map;return s.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=s.data.field(e);t.set(e,n)}}),t}function ko(s,t,e){const n=new Map;Q(s.length===e.length);for(let i=0;i<e.length;i++){const o=s[i],a=o.transform,u=t.data.field(o.field);n.set(o.field,ul(a,u,e[i]))}return n}function bo(s,t,e){const n=new Map;for(const i of s){const o=i.transform,a=e.data.field(i.field);n.set(i.field,cl(o,a,t))}return n}class ba extends Ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pl extends Ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ml{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&dl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=En(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ra();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=Ma(a,u);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(e,n)=>Mo(e,n))&&be(this.baseMutations,t.baseMutations,(e,n)=>Mo(e,n))}}class zr{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Q(t.mutations.length===n.length);let i=function(){return sl}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new zr(t,e,n,i)}}/**
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
 */class gl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class _l{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,G;function yl(s){switch(s){default:return L();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Na(s){if(s===void 0)return Qt("GRPC error has no .code"),V.UNKNOWN;switch(s){case nt.OK:return V.OK;case nt.CANCELLED:return V.CANCELLED;case nt.UNKNOWN:return V.UNKNOWN;case nt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case nt.INTERNAL:return V.INTERNAL;case nt.UNAVAILABLE:return V.UNAVAILABLE;case nt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case nt.NOT_FOUND:return V.NOT_FOUND;case nt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case nt.ABORTED:return V.ABORTED;case nt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case nt.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(G=nt||(nt={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Tl(){return new TextEncoder}/**
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
 */const vl=new me([4294967295,4294967295],0);function No(s){const t=Tl().encode(s),e=new sa;return e.update(t),new Uint8Array(e.digest())}function xo(s){const t=new DataView(s.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new me([e,n],0),new me([i,o],0)]}class Kr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new gn(`Invalid padding: ${e}`);if(n<0)throw new gn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new gn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=me.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(me.fromNumber(n)));return i.compare(vl)===1&&(i=new me([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=No(t),[n,i]=xo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Kr(o,i,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=No(t),[n,i]=xo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xs{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,xn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new xs(U.min(),i,new J(K),Wt(),j())}}class xn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new xn(n,e,j(),j(),j())}}/**
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
 */class hs{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class xa{constructor(t,e){this.targetId=t,this.me=e}}class Fa{constructor(t,e,n=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Fo{constructor(){this.fe=0,this.ge=Lo(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=j(),e=j(),n=j();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new xn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Lo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class El{constructor(t){this.Le=t,this.Be=new Map,this.ke=Wt(),this.qe=Oo(),this.Qe=new J(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(wr(o))if(n===0){const a=new x(o.path);this.Ue(e,a,Tt.newNoDocument(a,U.min()))}else Q(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=_e(n).toUint8Array()}catch(h){if(h instanceof da)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Kr(a,i,o)}catch(h){return ke(h instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&wr(u.target)){const h=new x(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Tt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=j();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new xs(t,e,this.Qe,this.ke,n);return this.ke=Wt(),this.qe=Oo(),this.Qe=new J(K),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Fo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Fo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Oo(){return new J(x.comparator)}function Lo(){return new J(x.comparator)}const Il={asc:"ASCENDING",desc:"DESCENDING"},wl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Al={and:"AND",or:"OR"};class Rl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pr(s,t){return s.useProto3Json||Ds(t)?t:{value:t}}function ys(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oa(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function Pl(s,t){return ys(s,t.toTimestamp())}function Nt(s){return Q(!!s),U.fromTimestamp(function(e){const n=re(e);return new rt(n.seconds,n.nanos)}(s))}function $r(s,t){return Vr(s,t).canonicalString()}function Vr(s,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(s).child("documents");return t===void 0?e:e.child(t)}function La(s){const t=Y.fromString(s);return Q(Ga(t)),t}function Sr(s,t){return $r(s.databaseId,t.path)}function mr(s,t){const e=La(t);if(e.get(1)!==s.databaseId.projectId)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+s.databaseId.projectId);if(e.get(3)!==s.databaseId.database)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+s.databaseId.database);return new x(Ba(e))}function Ua(s,t){return $r(s.databaseId,t)}function Vl(s){const t=La(s);return t.length===4?Y.emptyPath():Ba(t)}function Cr(s){return new Y(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Ba(s){return Q(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function Uo(s,t,e){return{name:Sr(s,t),fields:e.value.mapValue.fields}}function Sl(s,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Q(p===void 0||typeof p=="string"),dt.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),dt.fromUint8Array(p||new Uint8Array))}(s,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const p=f.code===void 0?V.UNKNOWN:Na(f.code);return new b(p,f.message||"")}(a);e=new Fa(n,i,o,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=mr(s,n.document.name),o=Nt(n.document.updateTime),a=n.document.createTime?Nt(n.document.createTime):U.min(),u=new wt({mapValue:{fields:n.document.fields}}),h=Tt.newFoundDocument(i,o,a,u),f=n.targetIds||[],p=n.removedTargetIds||[];e=new hs(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=mr(s,n.document),o=n.readTime?Nt(n.readTime):U.min(),a=Tt.newNoDocument(i,o),u=n.removedTargetIds||[];e=new hs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=mr(s,n.document),o=n.removedTargetIds||[];e=new hs([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new _l(i,o),u=n.targetId;e=new xa(u,a)}}return e}function Cl(s,t){let e;if(t instanceof Nn)e={update:Uo(s,t.key,t.value)};else if(t instanceof ba)e={delete:Sr(s,t.key)};else if(t instanceof ce)e={update:Uo(s,t.key,t.data),updateMask:Ll(t.fieldMask)};else{if(!(t instanceof pl))return L();e={verify:Sr(s,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const u=a.transform;if(u instanceof gs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof _s)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Pl(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(s,t.precondition)),e}function Dl(s,t){return s&&s.length>0?(Q(t!==void 0),s.map(e=>function(i,o){let a=i.updateTime?Nt(i.updateTime):Nt(o);return a.isEqual(U.min())&&(a=Nt(o)),new hl(a,i.transformResults||[])}(e,t))):[]}function Ml(s,t){return{documents:[Ua(s,t.path)]}}function kl(s,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ua(s,i);const o=function(f){if(f.length!==0)return ja(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(E){return{field:Se(E.field),direction:xl(E.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Pr(s,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function bl(s){let t=Vl(s.parent);const e=s.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){Q(n===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(w){const E=qa(w);return E instanceof kt&&ga(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(E=>function(C){return new ms(Ce(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(E))}(e.orderBy));let u=null;e.limit&&(u=function(w){let E;return E=typeof w=="object"?w.value:w,Ds(E)?null:E}(e.limit));let h=null;e.startAt&&(h=function(w){const E=!!w.before,R=w.values||[];return new ps(R,E)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const E=!w.before,R=w.values||[];return new ps(R,E)}(e.endAt)),Ju(t,i,a,o,u,"F",h,f)}function Nl(s,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qa(s){return s.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ce(e.unaryFilter.field);return st.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ce(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ce(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(s):s.fieldFilter!==void 0?function(e){return st.create(Ce(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(n=>qa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(s):L()}function xl(s){return Il[s]}function Fl(s){return wl[s]}function Ol(s){return Al[s]}function Se(s){return{fieldPath:s.canonicalString()}}function Ce(s){return lt.fromServerFormat(s.fieldPath)}function ja(s){return s instanceof st?function(e){if(e.op==="=="){if(Ro(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(Ao(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ro(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(Ao(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Fl(e.op),value:e.value}}}(s):s instanceof kt?function(e){const n=e.getFilters().map(i=>ja(i));return n.length===1?n[0]:{compositeFilter:{op:Ol(e.op),filters:n}}}(s):L()}function Ll(s){const t=[];return s.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ga(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ee{constructor(t,e,n,i,o=U.min(),a=U.min(),u=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ul{constructor(t){this.ct=t}}function Bl(s){const t=bl({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Rr(t,t.limit,"L"):t}/**
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
 */class ql{constructor(){this.un=new jl}addToCollectionParentIndex(t,e){return this.un.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(se.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class jl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ht(Y.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ht(Y.comparator)).toArray()}}/**
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
 */class Fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fe(0)}static kn(){return new Fe(-1)}}/**
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
 */class Gl{constructor(){this.changes=new ze(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class zl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Kl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&En(n.mutation,i,Pt.empty(),rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const i=pe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=mn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=pe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,i){let o=Wt();const a=vn(),u=function(){return vn()}();return e.forEach((h,f)=>{const p=n.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof ce)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),En(p.mutation,f,p.mutation.getFieldMask(),rt.now())):a.set(f.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var w;return u.set(f,new zl(p,(w=a.get(f))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(t,e){const n=vn();let i=new J((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=n.get(h)||Pt.empty();p=u.applyToLocalView(f,p),n.set(h,p);const w=(i.get(u.batchId)||j()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,p=h.value,w=Ra();p.forEach(E=>{if(!o.has(E)){const R=Ma(e.get(E),n.get(E));R!==null&&w.set(E,R),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return S.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):va(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):S.resolve(pe());let u=-1,h=o;return a.next(f=>S.forEach(f,(p,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(E=>{h=h.insert(p,E)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(p=>({batchId:u,changes:Aa(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=mn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next(u=>S.forEach(u,h=>{const f=function(w,E){return new bn(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(p=>{p.forEach((w,E)=>{a=a.insert(w,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Tt.newInvalidDocument(p)))});let u=mn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&En(p.mutation,f,Pt.empty(),rt.now()),ks(e,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class $l{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return S.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Bl(i.bundledQuery),readTime:Nt(i.readTime)}}(e)),S.resolve()}}/**
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
 */class Ql{constructor(){this.overlays=new J(x.comparator),this.Ir=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=pe();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const i=pe(),o=e.length+1,a=new x(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new J((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let p=o.get(f.largestBatchId);p===null&&(p=pe(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const u=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>u.set(f,p)),!(u.size()>=i)););return S.resolve(u)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new gl(e,n));let o=this.Ir.get(e);o===void 0&&(o=j(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Wl{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class Qr{constructor(){this.Tr=new ht(ot.Er),this.dr=new ht(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new ot(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new x(new Y([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new Y([])),n=new ot(e,t),i=new ot(e,t+1);let o=j();return this.dr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ot(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
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
 */class Hl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(ot.Er)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ml(o,e,n,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new ot(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],a=>{const u=this.Dr(a.wr);o.push(u)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ht(K);return e.forEach(i=>{const o=new ot(i,0),a=new ot(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{n=n.add(u.wr)})}),S.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const a=new ot(new x(o),0);let u=new ht(K);return this.br.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.wr)),!0)},a),S.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return S.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new ot(e,0),i=this.br.firstAfterOrEqual(n);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Xl{constructor(t){this.Mr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let n=Wt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))}),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Wt();const a=e.path,u=new x(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||bu(ku(p),n)<=0||(i.has(p.key)||ks(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}Or(t,e){return S.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Yl(this)}getSize(t){return S.resolve(this.size)}}class Yl extends Gl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),S.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Jl{constructor(t){this.persistence=t,this.Nr=new ze(e=>Br(e),qr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qr,this.targetCount=0,this.kr=Fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),S.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Kn(e),S.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this.Br.containsKey(e))}}/**
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
 */class Zl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Fr(0),this.Kr=!1,this.Kr=!0,this.$r=new Wl,this.referenceDelegate=t(this),this.Ur=new Jl(this),this.indexManager=new ql,this.remoteDocumentCache=function(i){return new Xl(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Ul(e),this.Gr=new $l(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ql,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Hl(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new th(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return S.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class th extends xu{constructor(t){super(),this.currentSequenceNumber=t}}class Wr{constructor(t){this.persistence=t,this.Jr=new Qr,this.Yr=null}static Zr(t){return new Wr(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),S.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,n=>{const i=x.fromPath(n);return this.ei(t,i).next(o=>{o||e.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return S.or([()=>S.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Hr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hr(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class nh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yu()?8:Fu(Tu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new eh;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(fn()<=te.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(fn()<=te.DEBUG&&N("QueryEngine","Query:",Ve(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(fn()<=te.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):S.resolve())}Yi(t,e){if(Co(e))return S.resolve(null);let n=bt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Rr(e,null,"F"),n=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=j(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.ts(e,u);return this.ns(e,f,a,h.readTime)?this.Yi(t,Rr(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,n,i){return Co(e)||i.isEqual(U.min())?S.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,i)?S.resolve(null):(fn()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ve(e)),this.rs(t,a,e,Mu(i,-1)).next(u=>u))})}ts(t,e){let n=new ht(Ia(t));return e.forEach((i,o)=>{ks(t,o)&&(n=n.add(o))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return fn()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ve(e)),this.Ji.getDocumentsMatchingQuery(t,e,se.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class sh{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new J(K),this._s=new ze(o=>Br(o),qr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function rh(s,t,e,n){return new sh(s,t,e,n)}async function za(s,t){const e=B(s);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],u=[];let h=j();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:u}))})})}function ih(s,t){const e=B(s);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,p){const w=f.batch,E=w.keys();let R=S.resolve();return E.forEach(C=>{R=R.next(()=>p.getEntry(h,C)).next(M=>{const k=f.docVersions.get(C);Q(k!==null),M.version.compareTo(k)<0&&(w.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),p.addEntry(M)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,w))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let h=j();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ka(s){const t=B(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function oh(s,t){const e=B(s),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((p,w)=>{const E=i.get(w);if(!E)return;u.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,w)));let R=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(dt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,n)),i=i.insert(w,R),function(M,k,O){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(E,R,p)&&u.push(e.Ur.updateTargetData(o,R))});let h=Wt(),f=j();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(ah(o,a,t.documentUpdates).next(p=>{h=p.Ps,f=p.Is})),!n.isEqual(U.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));u.push(p)}return S.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function ah(s,t,e){let n=j(),i=j();return e.forEach(o=>n=n.add(o)),t.getEntries(s,n).next(o=>{let a=Wt();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function ch(s,t){const e=B(s);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function uh(s,t){const e=B(s);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(o=>o?(i=o,S.resolve(i)):e.Ur.allocateTargetId(n).next(a=>(i=new ee(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Dr(s,t,e){const n=B(s),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!kn(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function Bo(s,t,e){const n=B(s);let i=U.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const w=B(h),E=w._s.get(p);return E!==void 0?S.resolve(w.os.get(E)):w.Ur.getTargetData(f,p)}(n,a,bt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?i:U.min(),e?o:j())).next(u=>(lh(n,tl(t),u),{documents:u,Ts:o})))}function lh(s,t,e){let n=s.us.get(t)||U.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),s.us.set(t,n)}class qo{constructor(){this.activeTargetIds=ol()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hh{constructor(){this.so=new qo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new qo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dh{_o(t){}shutdown(){}}/**
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
 */class jo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let as=null;function gr(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
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
 */const fh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ph{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const _t="WebChannelConnection";class mh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,a){const u=gr(),h=this.xo(e,n.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(p=>(N("RestConnection",`Received RPC '${e}' ${u}: `,p),p),p=>{throw ke("RestConnection",`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(e,n,i,o,a,u){return this.Mo(e,n,i,o,a)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const i=fh[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=gr();return new Promise((a,u)=>{const h=new ra;h.setWithCredentials(!0),h.listenOnce(ia.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case cs.NO_ERROR:const p=h.getResponseJson();N(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case cs.TIMEOUT:N(_t,`RPC '${t}' ${o} timed out`),u(new b(V.DEADLINE_EXCEEDED,"Request time out"));break;case cs.HTTP_ERROR:const w=h.getStatus();if(N(_t,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const C=function(k){const O=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(R.status);u(new b(C,R.message))}else u(new b(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new b(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{N(_t,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);N(_t,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}Bo(t,e,n){const i=gr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ca(),u=aa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");N(_t,`Creating RPC '${t}' stream ${i}: ${p}`,h);const w=a.createWebChannel(p,h);let E=!1,R=!1;const C=new ph({Io:k=>{R?N(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(E||(N(_t,`Opening RPC '${t}' stream ${i} transport.`),w.open(),E=!0),N(_t,`RPC '${t}' stream ${i} sending:`,k),w.send(k))},To:()=>w.close()}),M=(k,O,$)=>{k.listen(O,H=>{try{$(H)}catch(it){setTimeout(()=>{throw it},0)}})};return M(w,pn.EventType.OPEN,()=>{R||(N(_t,`RPC '${t}' stream ${i} transport opened.`),C.yo())}),M(w,pn.EventType.CLOSE,()=>{R||(R=!0,N(_t,`RPC '${t}' stream ${i} transport closed`),C.So())}),M(w,pn.EventType.ERROR,k=>{R||(R=!0,ke(_t,`RPC '${t}' stream ${i} transport errored:`,k),C.So(new b(V.UNAVAILABLE,"The operation could not be completed")))}),M(w,pn.EventType.MESSAGE,k=>{var O;if(!R){const $=k.data[0];Q(!!$);const H=$,it=H.error||((O=H[0])===null||O===void 0?void 0:O.error);if(it){N(_t,`RPC '${t}' stream ${i} received error:`,it);const Bt=it.status;let at=function(_){const y=nt[_];if(y!==void 0)return Na(y)}(Bt),v=it.message;at===void 0&&(at=V.INTERNAL,v="Unknown error status: "+Bt+" with message "+it.message),R=!0,C.So(new b(at,v)),w.close()}else N(_t,`RPC '${t}' stream ${i} received:`,$),C.bo($)}}),M(u,oa.STAT_EVENT,k=>{k.stat===Tr.PROXY?N(_t,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Tr.NOPROXY&&N(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function _r(){return typeof document<"u"?document:null}/**
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
 */function Fs(s){return new Rl(s,!0)}/**
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
 */class $a{constructor(t,e,n=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Qa{constructor(t,e,n,i,o,a,u,h){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $a(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new b(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gh extends Qa{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Sl(this.serializer,t),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Nt(a.readTime):U.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Cr(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=wr(h)?{documents:Ml(o,h)}:{query:kl(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Oa(o,a.resumeToken);const f=Pr(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=ys(o,a.snapshotVersion.toTimestamp());const f=Pr(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const n=Nl(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Cr(this.serializer),e.removeTarget=t,this.a_(e)}}class _h extends Qa{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Q(!!t.streamToken),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Dl(t.writeResults,t.commitTime),n=Nt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Cr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Cl(this.serializer,n))};this.a_(e)}}/**
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
 */class yh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Vr(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(V.UNKNOWN,o.toString())})}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Vr(e,n),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new b(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Th{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qt(e),this.D_=!1):N("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class vh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{Ie(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=B(h);f.L_.add(4),await Fn(f),f.q_.set("Unknown"),f.L_.delete(4),await Os(f)}(this))})}),this.q_=new Th(n,i)}}async function Os(s){if(Ie(s))for(const t of s.B_)await t(!0)}async function Fn(s){for(const t of s.B_)await t(!1)}function Wa(s,t){const e=B(s);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Zr(e)?Jr(e):Ke(e).r_()&&Yr(e,t))}function Xr(s,t){const e=B(s),n=Ke(e);e.N_.delete(t),n.r_()&&Ha(e,t),e.N_.size===0&&(n.r_()?n.o_():Ie(e)&&e.q_.set("Unknown"))}function Yr(s,t){if(s.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=s.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(s).A_(t)}function Ha(s,t){s.Q_.xe(t),Ke(s).R_(t)}function Jr(s){s.Q_=new El({getRemoteKeysForTarget:t=>s.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>s.N_.get(t)||null,tt:()=>s.datastore.serializer.databaseId}),Ke(s).start(),s.q_.v_()}function Zr(s){return Ie(s)&&!Ke(s).n_()&&s.N_.size>0}function Ie(s){return B(s).L_.size===0}function Xa(s){s.Q_=void 0}async function Eh(s){s.q_.set("Online")}async function Ih(s){s.N_.forEach((t,e)=>{Yr(s,t)})}async function wh(s,t){Xa(s),Zr(s)?(s.q_.M_(t),Jr(s)):s.q_.set("Unknown")}async function Ah(s,t,e){if(s.q_.set("Online"),t instanceof Fa&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(s,t)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ts(s,n)}else if(t instanceof hs?s.Q_.Ke(t):t instanceof xa?s.Q_.He(t):s.Q_.We(t),!e.isEqual(U.min()))try{const n=await Ka(s.localStore);e.compareTo(n)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(f);p&&o.N_.set(f,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),Ha(o,h);const w=new ee(p.target,h,f,p.sequenceNumber);Yr(o,w)}),o.remoteSyncer.applyRemoteEvent(u)}(s,e)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await Ts(s,n)}}async function Ts(s,t,e){if(!kn(t))throw t;s.L_.add(1),await Fn(s),s.q_.set("Offline"),e||(e=()=>Ka(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),s.L_.delete(1),await Os(s)})}function Ya(s,t){return t().catch(e=>Ts(s,e,t))}async function Ls(s){const t=B(s),e=ie(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Rh(t);)try{const i=await ch(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,Ph(t,i)}catch(i){await Ts(t,i)}Ja(t)&&Za(t)}function Rh(s){return Ie(s)&&s.O_.length<10}function Ph(s,t){s.O_.push(t);const e=ie(s);e.r_()&&e.V_&&e.m_(t.mutations)}function Ja(s){return Ie(s)&&!ie(s).n_()&&s.O_.length>0}function Za(s){ie(s).start()}async function Vh(s){ie(s).p_()}async function Sh(s){const t=ie(s);for(const e of s.O_)t.m_(e.mutations)}async function Ch(s,t,e){const n=s.O_.shift(),i=zr.from(n,t,e);await Ya(s,()=>s.remoteSyncer.applySuccessfulWrite(i)),await Ls(s)}async function Dh(s,t){t&&ie(s).V_&&await async function(n,i){if(function(a){return yl(a)&&a!==V.ABORTED}(i.code)){const o=n.O_.shift();ie(n).s_(),await Ya(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ls(n)}}(s,t),Ja(s)&&Za(s)}async function Go(s,t){const e=B(s);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=Ie(e);e.L_.add(3),await Fn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Os(e)}async function Mh(s,t){const e=B(s);t?(e.L_.delete(2),await Os(e)):t||(e.L_.add(2),await Fn(e),e.q_.set("Unknown"))}function Ke(s){return s.K_||(s.K_=function(e,n,i){const o=B(e);return o.w_(),new gh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(s.datastore,s.asyncQueue,{Eo:Eh.bind(null,s),Ro:Ih.bind(null,s),mo:wh.bind(null,s),d_:Ah.bind(null,s)}),s.B_.push(async t=>{t?(s.K_.s_(),Zr(s)?Jr(s):s.q_.set("Unknown")):(await s.K_.stop(),Xa(s))})),s.K_}function ie(s){return s.U_||(s.U_=function(e,n,i){const o=B(e);return o.w_(),new _h(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(s.datastore,s.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Vh.bind(null,s),mo:Dh.bind(null,s),f_:Sh.bind(null,s),g_:Ch.bind(null,s)}),s.B_.push(async t=>{t?(s.U_.s_(),await Ls(s)):(await s.U_.stop(),s.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${s.O_.length} pending writes`),s.O_=[]))})),s.U_}/**
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
 */class ti{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,u=new ti(t,e,a,i,o);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ei(s,t){if(Qt("AsyncQueue",`${t}: ${s}`),kn(s))return new b(V.UNAVAILABLE,`${t}: ${s}`);throw s}/**
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
 */class De{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=mn(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new De(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new De;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class zo{constructor(){this.W_=new J(x.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Oe{constructor(t,e,n,i,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Oe(t,e,De.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class kh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class bh{constructor(){this.queries=Ko(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=B(e),o=i.queries;i.queries=Ko(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(n)})})(this,new b(V.ABORTED,"Firestore shutting down"))}}function Ko(){return new ze(s=>Ea(s),Ms)}async function tc(s,t){const e=B(s);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new kh,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=ei(a,`Initialization of query '${Ve(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ni(e)}async function ec(s,t){const e=B(s),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Nh(s,t){const e=B(s);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(n=!0);a.z_=i}}n&&ni(e)}function xh(s,t,e){const n=B(s),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function ni(s){s.Y_.forEach(t=>{t.next()})}var Mr,$o;($o=Mr||(Mr={})).ea="default",$o.Cache="cache";class nc{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Oe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Mr.Cache}}/**
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
 */class sc{constructor(t){this.key=t}}class rc{constructor(t){this.key=t}}class Fh{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=Ia(t),this.Ra=new De(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new zo,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,w)=>{const E=i.get(p),R=ks(this.query,w)?w:null,C=!!E&&this.mutatedKeys.has(E.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;E&&R?E.data.isEqual(R.data)?C!==M&&(n.track({type:3,doc:R}),k=!0):this.ga(E,R)||(n.track({type:2,doc:R}),k=!0,(h&&this.Aa(R,h)>0||f&&this.Aa(R,f)<0)&&(u=!0)):!E&&R?(n.track({type:0,doc:R}),k=!0):E&&!R&&(n.track({type:1,doc:E}),k=!0,(h||f)&&(u=!0)),k&&(R?(a=a.add(R),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Ra:a,fa:n,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,w)=>function(R,C){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(R)-M(C)}(p.type,w.type)||this.Aa(p.doc,w.doc)),this.pa(n),i=i!=null&&i;const u=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Oe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=j(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new rc(n))}),this.da.forEach(n=>{t.has(n)||e.push(new sc(n))}),e}ba(t){this.Ta=t.Ts,this.da=j();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Oe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Oh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lh{constructor(t){this.key=t,this.va=!1}}class Uh{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ze(u=>Ea(u),Ms),this.Ma=new Map,this.xa=new Set,this.Oa=new J(x.comparator),this.Na=new Map,this.La=new Qr,this.Ba={},this.ka=new Map,this.qa=Fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bh(s,t,e=!0){const n=lc(s);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await ic(n,t,e,!0),i}async function qh(s,t){const e=lc(s);await ic(e,t,!0,!1)}async function ic(s,t,e,n){const i=await uh(s.localStore,bt(t)),o=i.targetId,a=s.sharedClientState.addLocalQueryTarget(o,e);let u;return n&&(u=await jh(s,t,o,a==="current",i.resumeToken)),s.isPrimaryClient&&e&&Wa(s.remoteStore,i),u}async function jh(s,t,e,n,i){s.Ka=(w,E,R)=>async function(M,k,O,$){let H=k.view.ma(O);H.ns&&(H=await Bo(M.localStore,k.query,!1).then(({documents:v})=>k.view.ma(v,H)));const it=$&&$.targetChanges.get(k.targetId),Bt=$&&$.targetMismatches.get(k.targetId)!=null,at=k.view.applyChanges(H,M.isPrimaryClient,it,Bt);return Wo(M,k.targetId,at.wa),at.snapshot}(s,w,E,R);const o=await Bo(s.localStore,t,!0),a=new Fh(t,o.Ts),u=a.ma(o.documents),h=xn.createSynthesizedTargetChangeForCurrentChange(e,n&&s.onlineState!=="Offline",i),f=a.applyChanges(u,s.isPrimaryClient,h);Wo(s,e,f.wa);const p=new Oh(t,e,a);return s.Fa.set(t,p),s.Ma.has(e)?s.Ma.get(e).push(t):s.Ma.set(e,[t]),f.snapshot}async function Gh(s,t,e){const n=B(s),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(a=>!Ms(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Dr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Xr(n.remoteStore,i.targetId),kr(n,i.targetId)}).catch(Mn)):(kr(n,i.targetId),await Dr(n.localStore,i.targetId,!0))}async function zh(s,t){const e=B(s),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Xr(e.remoteStore,n.targetId))}async function Kh(s,t,e){const n=Jh(s);try{const i=await function(a,u){const h=B(a),f=rt.now(),p=u.reduce((R,C)=>R.add(C.key),j());let w,E;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Wt(),M=j();return h.cs.getEntries(R,p).next(k=>{C=k,C.forEach((O,$)=>{$.isValidDocument()||(M=M.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,C)).next(k=>{w=k;const O=[];for(const $ of u){const H=fl($,w.get($.key).overlayedDocument);H!=null&&O.push(new ce($.key,H,fa(H.value.mapValue),Mt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,f,O,u)}).next(k=>{E=k;const O=k.applyToLocalDocumentSet(w,M);return h.documentOverlayCache.saveOverlays(R,k.batchId,O)})}).then(()=>({batchId:E.batchId,changes:Aa(w)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new J(K)),f=f.insert(u,h),a.Ba[a.currentUser.toKey()]=f}(n,i.batchId,e),await On(n,i.changes),await Ls(n.remoteStore)}catch(i){const o=ei(i,"Failed to persist write");e.reject(o)}}async function oc(s,t){const e=B(s);try{const n=await oh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Q(a.va):i.removedDocuments.size>0&&(Q(a.va),a.va=!1))}),await On(e,n,t)}catch(n){await Mn(n)}}function Qo(s,t,e){const n=B(s);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=B(a);h.onlineState=u;let f=!1;h.queries.forEach((p,w)=>{for(const E of w.j_)E.Z_(u)&&(f=!0)}),f&&ni(h)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function $h(s,t,e){const n=B(s);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let a=new J(x.comparator);a=a.insert(o,Tt.newNoDocument(o,U.min()));const u=j().add(o),h=new xs(U.min(),new Map,new J(K),a,u);await oc(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),si(n)}else await Dr(n.localStore,t,!1).then(()=>kr(n,t,e)).catch(Mn)}async function Qh(s,t){const e=B(s),n=t.batch.batchId;try{const i=await ih(e.localStore,t);cc(e,n,null),ac(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await On(e,i)}catch(i){await Mn(i)}}async function Wh(s,t,e){const n=B(s);try{const i=await function(a,u){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,u).next(w=>(Q(w!==null),p=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(n.localStore,t);cc(n,t,e),ac(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await On(n,i)}catch(i){await Mn(i)}}function ac(s,t){(s.ka.get(t)||[]).forEach(e=>{e.resolve()}),s.ka.delete(t)}function cc(s,t,e){const n=B(s);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function kr(s,t,e=null){s.sharedClientState.removeLocalQueryTarget(t);for(const n of s.Ma.get(t))s.Fa.delete(n),e&&s.Ca.$a(n,e);s.Ma.delete(t),s.isPrimaryClient&&s.La.gr(t).forEach(n=>{s.La.containsKey(n)||uc(s,n)})}function uc(s,t){s.xa.delete(t.path.canonicalString());const e=s.Oa.get(t);e!==null&&(Xr(s.remoteStore,e),s.Oa=s.Oa.remove(t),s.Na.delete(e),si(s))}function Wo(s,t,e){for(const n of e)n instanceof sc?(s.La.addReference(n.key,t),Hh(s,n)):n instanceof rc?(N("SyncEngine","Document no longer in limbo: "+n.key),s.La.removeReference(n.key,t),s.La.containsKey(n.key)||uc(s,n.key)):L()}function Hh(s,t){const e=t.key,n=e.path.canonicalString();s.Oa.get(e)||s.xa.has(n)||(N("SyncEngine","New document in limbo: "+e),s.xa.add(n),si(s))}function si(s){for(;s.xa.size>0&&s.Oa.size<s.maxConcurrentLimboResolutions;){const t=s.xa.values().next().value;s.xa.delete(t);const e=new x(Y.fromString(t)),n=s.qa.next();s.Na.set(n,new Lh(e)),s.Oa=s.Oa.insert(e,n),Wa(s.remoteStore,new ee(bt(jr(e.path)),n,"TargetPurposeLimboResolution",Fr.oe))}}async function On(s,t,e){const n=B(s),i=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,h)=>{a.push(n.Ka(h,t,e).then(f=>{var p;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Hr.Wi(h.targetId,f);o.push(w)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(h,f){const p=B(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>S.forEach(f,E=>S.forEach(E.$i,R=>p.persistence.referenceDelegate.addReference(w,E.targetId,R)).next(()=>S.forEach(E.Ui,R=>p.persistence.referenceDelegate.removeReference(w,E.targetId,R)))))}catch(w){if(!kn(w))throw w;N("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const E=w.targetId;if(!w.fromCache){const R=p.os.get(E),C=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(E,M)}}}(n.localStore,o))}async function Xh(s,t){const e=B(s);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const n=await za(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new b(V.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await On(e,n.hs)}}function Yh(s,t){const e=B(s),n=e.Na.get(t);if(n&&n.va)return j().add(n.key);{let i=j();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function lc(s){const t=B(s);return t.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$h.bind(null,t),t.Ca.d_=Nh.bind(null,t.eventManager),t.Ca.$a=xh.bind(null,t.eventManager),t}function Jh(s){const t=B(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wh.bind(null,t),t}class vs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return rh(this.persistence,new nh,t.initialUser,this.serializer)}Ga(t){return new Zl(Wr.Zr,this.serializer)}Wa(t){return new hh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vs.provider={build:()=>new vs};class br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Qo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xh.bind(null,this.syncEngine),await Mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bh}()}createDatastore(t){const e=Fs(t.databaseInfo.databaseId),n=function(o){return new mh(o)}(t.databaseInfo);return function(o,a,u,h){return new yh(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,u){return new vh(n,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Qo(this.syncEngine,e,0),function(){return jo.D()?new jo:new dh}())}createSyncEngine(t,e){return function(i,o,a,u,h,f,p){const w=new Uh(i,o,a,u,h,f);return p&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Fn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}br.provider={build:()=>new br};/**
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
 *//**
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
 */class hc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Zh{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ei(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function yr(s,t){s.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=s.configuration;await t.initialize(e);let n=e.initialUser;s.setCredentialChangeListener(async i=>{n.isEqual(i)||(await za(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=t}async function Ho(s,t){s.asyncQueue.verifyOperationInProgress();const e=await td(s);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,s.configuration),s.setCredentialChangeListener(n=>Go(t.remoteStore,n)),s.setAppCheckTokenChangeListener((n,i)=>Go(t.remoteStore,i)),s._onlineComponents=t}async function td(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await yr(s,s._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await yr(s,new vs)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await yr(s,new vs);return s._offlineComponents}async function dc(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Ho(s,s._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Ho(s,new br))),s._onlineComponents}function ed(s){return dc(s).then(t=>t.syncEngine)}async function fc(s){const t=await dc(s),e=t.eventManager;return e.onListen=Bh.bind(null,t.syncEngine),e.onUnlisten=Gh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=qh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=zh.bind(null,t.syncEngine),e}function nd(s,t,e={}){const n=new zt;return s.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const p=new hc({next:E=>{p.Za(),a.enqueueAndForget(()=>ec(o,w));const R=E.docs.has(u);!R&&E.fromCache?f.reject(new b(V.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&h&&h.source==="server"?f.reject(new b(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(E)},error:E=>f.reject(E)}),w=new nc(jr(u.path),p,{includeMetadataChanges:!0,_a:!0});return tc(o,w)}(await fc(s),s.asyncQueue,t,e,n)),n.promise}function sd(s,t,e={}){const n=new zt;return s.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const p=new hc({next:E=>{p.Za(),a.enqueueAndForget(()=>ec(o,w)),E.fromCache&&h.source==="server"?f.reject(new b(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(E)},error:E=>f.reject(E)}),w=new nc(u,p,{includeMetadataChanges:!0,_a:!0});return tc(o,w)}(await fc(s),s.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function pc(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
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
 */const Xo=new Map;/**
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
 */function mc(s,t,e){if(!e)throw new b(V.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function rd(s,t,e,n){if(t===!0&&n===!0)throw new b(V.INVALID_ARGUMENT,`${s} and ${e} cannot be used together.`)}function Yo(s){if(!x.isDocumentKey(s))throw new b(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Jo(s){if(x.isDocumentKey(s))throw new b(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Us(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":L()}function Ot(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new b(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Us(s);throw new b(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return s}/**
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
 */class Zo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pc((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Iu;switch(n.type){case"firstParty":return new Pu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xo.get(e);n&&(N("ComponentProvider","Removing Datastore"),Xo.delete(e),n.terminate())}(this),Promise.resolve()}}function id(s,t,e,n={}){var i;const o=(s=Ot(s,Bs))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),s._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=yt.MOCK_USER;else{u=gu(n.mockUserToken,(i=s._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new yt(f)}s._authCredentials=new wu(new ua(u,h))}}/**
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
 */class $e{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new $e(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class ne extends $e{constructor(t,e,n){super(t,e,jr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new x(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function q(s,t,...e){if(s=$t(s),mc("collection","path",t),s instanceof Bs){const n=Y.fromString(t,...e);return Jo(n),new ne(s,null,n)}{if(!(s instanceof It||s instanceof ne))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Y.fromString(t,...e));return Jo(n),new ne(s.firestore,null,n)}}function F(s,t,...e){if(s=$t(s),arguments.length===1&&(t=la.newId()),mc("doc","path",t),s instanceof Bs){const n=Y.fromString(t,...e);return Yo(n),new It(s,null,new x(n))}{if(!(s instanceof It||s instanceof ne))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Y.fromString(t,...e));return Yo(n),new It(s.firestore,s instanceof ne?s.converter:null,new x(n))}}/**
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
 */class ta{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $a(this,"async_queue_retry"),this.Vu=()=>{const n=_r();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=_r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=_r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!kn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw Qt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=ti.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Qe extends Bs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ta,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ta(t),this._firestoreClient=void 0,await t}}}function od(s,t){const e=typeof s=="object"?s:fu(),n=typeof s=="string"?s:"(default)",i=pu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=mu("firestore");o&&id(i,...o)}return i}function ri(s){if(s._terminated)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||ad(s),s._firestoreClient}function ad(s){var t,e,n;const i=s._freezeSettings(),o=function(u,h,f,p){return new Uu(u,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,pc(p.experimentalLongPollingOptions),p.useFetchStreams)}(s._databaseId,((t=s._app)===null||t===void 0?void 0:t.options.appId)||"",s._persistenceKey,i);s._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),s._firestoreClient=new Zh(s._authCredentials,s._appCheckCredentials,s._queue,o,s._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(s._componentsProvider))}/**
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
 */class Le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Le(dt.fromBase64String(t))}catch(e){throw new b(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Le(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class qs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ii{constructor(t){this._methodName=t}}/**
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
 */class ue{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class oi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const cd=/^__.*__$/;class ud{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nn(t,this.data,e,this.fieldTransforms)}}class gc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _c(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ai{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ai(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Es(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(_c(this.Cu)&&cd.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class ld{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Fs(t)}Qu(t,e,n,i=!1){return new ai({Cu:t,methodName:e,qu:n,path:lt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function js(s){const t=s._freezeSettings(),e=Fs(s._databaseId);return new ld(s._databaseId,!!t.ignoreUndefinedProperties,e)}function yc(s,t,e,n,i,o={}){const a=s.Qu(o.merge||o.mergeFields?2:0,t,e,i);ci("Data must be an object, but it was:",a,n);const u=Tc(n,a);let h,f;if(o.merge)h=new Pt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const w of o.mergeFields){const E=Nr(t,w,e);if(!a.contains(E))throw new b(V.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Ec(p,E)||p.push(E)}h=new Pt(p),f=a.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=a.fieldTransforms;return new ud(new wt(u),h,f)}class Gs extends ii{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gs}}function hd(s,t,e,n){const i=s.Qu(1,t,e);ci("Data must be an object, but it was:",i,n);const o=[],a=wt.empty();Ee(n,(h,f)=>{const p=ui(t,h,e);f=$t(f);const w=i.Nu(p);if(f instanceof Gs)o.push(p);else{const E=Ln(f,w);E!=null&&(o.push(p),a.set(p,E))}});const u=new Pt(o);return new gc(a,u,i.fieldTransforms)}function dd(s,t,e,n,i,o){const a=s.Qu(1,t,e),u=[Nr(t,n,e)],h=[i];if(o.length%2!=0)throw new b(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)u.push(Nr(t,o[E])),h.push(o[E+1]);const f=[],p=wt.empty();for(let E=u.length-1;E>=0;--E)if(!Ec(f,u[E])){const R=u[E];let C=h[E];C=$t(C);const M=a.Nu(R);if(C instanceof Gs)f.push(R);else{const k=Ln(C,M);k!=null&&(f.push(R),p.set(R,k))}}const w=new Pt(f);return new gc(p,w,a.fieldTransforms)}function fd(s,t,e,n=!1){return Ln(e,s.Qu(n?4:3,t))}function Ln(s,t){if(vc(s=$t(s)))return ci("Unsupported field value:",t,s),Tc(s,t);if(s instanceof ii)return function(n,i){if(!_c(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const u of n){let h=Ln(u,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(s,t)}return function(n,i){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return al(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=rt.fromDate(n);return{timestampValue:ys(i.serializer,o)}}if(n instanceof rt){const o=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ys(i.serializer,o)}}if(n instanceof ue)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Le)return{bytesValue:Oa(i.serializer,n._byteString)};if(n instanceof It){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$r(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof oi)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return Gr(u.serializer,h)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Us(n)}`)}(s,t)}function Tc(s,t){const e={};return ha(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(s,(n,i)=>{const o=Ln(i,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function vc(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof rt||s instanceof ue||s instanceof Le||s instanceof It||s instanceof ii||s instanceof oi)}function ci(s,t,e){if(!vc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Us(e);throw n==="an object"?t.Bu(s+" a custom object"):t.Bu(s+" "+n)}}function Nr(s,t,e){if((t=$t(t))instanceof qs)return t._internalPath;if(typeof t=="string")return ui(s,t);throw Es("Field path arguments must be of type string or ",s,!1,void 0,e)}const pd=new RegExp("[~\\*/\\[\\]]");function ui(s,t,e){if(t.search(pd)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,e);try{return new qs(...t.split("."))._internalPath}catch{throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,e)}}function Es(s,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new b(V.INVALID_ARGUMENT,u+s+h)}function Ec(s,t){return s.some(e=>e.isEqual(t))}/**
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
 */class Ic{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new md(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(li("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class md extends Ic{data(){return super.data()}}function li(s,t){return typeof t=="string"?ui(s,t):t instanceof qs?t._internalPath:t._delegate._internalPath}/**
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
 */function gd(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new b(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hi{}class _d extends hi{}function Kt(s,t,...e){let n=[];t instanceof hi&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof di).length,u=o.filter(h=>h instanceof zs).length;if(a>1||a>0&&u>0)throw new b(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)s=i._apply(s);return s}class zs extends _d{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new zs(t,e,n)}_apply(t){const e=this._parse(t);return wc(t._query,e),new $e(t.firestore,t.converter,Ar(t._query,e))}_parse(t){const e=js(t.firestore);return function(o,a,u,h,f,p,w){let E;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new b(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){na(w,p);const R=[];for(const C of w)R.push(ea(h,o,C));E={arrayValue:{values:R}}}else E=ea(h,o,w)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||na(w,p),E=fd(u,a,w,p==="in"||p==="not-in");return st.create(f,p,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function xt(s,t,e){const n=t,i=li("where",s);return zs._create(i,n,e)}class di extends hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new di(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const h of u)wc(a,h),a=Ar(a,h)}(t._query,e),new $e(t.firestore,t.converter,Ar(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ea(s,t,e){if(typeof(e=$t(e))=="string"){if(e==="")throw new b(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!va(t)&&e.indexOf("/")!==-1)throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!x.isDocumentKey(n))throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return wo(s,new x(n))}if(e instanceof It)return wo(s,e._key);throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Us(e)}.`)}function na(s,t){if(!Array.isArray(s)||s.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wc(s,t){const e=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(s.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class yd{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ee(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>et(a.doubleValue));return new oi(o)}convertGeoPoint(t){return new ue(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Lr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const e=re(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);Q(Ga(n));const i=new An(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Ac(s,t,e){let n;return n=s?s.toFirestore(t):t,n}/**
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
 */class _n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Rc extends Ic{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ds extends Rc{data(t={}){return super.data(t)}}class Td{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new _n(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ds(this._firestore,this._userDataWriter,n.key,n,new _n(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new ds(i._firestore,i._userDataWriter,u.doc.key,u.doc,new _n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ds(i._firestore,i._userDataWriter,u.doc.key,u.doc,new _n(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:vd(u.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function vd(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
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
 */function We(s){s=Ot(s,It);const t=Ot(s.firestore,Qe);return nd(ri(t),s._key).then(e=>Ed(t,s,e))}class Pc extends yd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function At(s){s=Ot(s,$e);const t=Ot(s.firestore,Qe),e=ri(t),n=new Pc(t);return gd(s._query),sd(e,s._query).then(i=>new Td(t,n,s,i))}function Vc(s,t,e){s=Ot(s,It);const n=Ot(s.firestore,Qe),i=Ac(s.converter,t);return pi(n,[yc(js(n),"setDoc",s._key,i,s.converter!==null,e).toMutation(s._key,Mt.none())])}function Lt(s,t,e,...n){s=Ot(s,It);const i=Ot(s.firestore,Qe),o=js(i);let a;return a=typeof(t=$t(t))=="string"||t instanceof qs?dd(o,"updateDoc",s._key,t,e,n):hd(o,"updateDoc",s._key,t),pi(i,[a.toMutation(s._key,Mt.exists(!0))])}function fi(s,t){const e=Ot(s.firestore,Qe),n=F(s),i=Ac(s.converter,t);return pi(e,[yc(js(s.firestore),"addDoc",n._key,i,s.converter!==null,{}).toMutation(n._key,Mt.exists(!1))]).then(()=>n)}function pi(s,t){return function(n,i){const o=new zt;return n.asyncQueue.enqueueAndForget(async()=>Kh(await ed(n),i,o)),o.promise}(ri(s),t)}function Ed(s,t,e){const n=e.docs.get(t._key),i=new Pc(s);return new Rc(s,i,t._key,n,new _n(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ge=i})(_u),lu(new hu("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new Qe(new Au(n.getProvider("auth-internal")),new Su(n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),go(yo,"4.7.3",t),go(yo,"4.7.3","esm2017")})();class Te{constructor(){this.name="",this.id="",this.type="activity",this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=Vt.fromEmpty("","",new ue(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,u,h,f,p,w,E,R){const C=new Te;return C.name=t,C.id=e,C.type=R,C.joinCode=n,C.students=i,C.parents=o,C.groups=a,C.teachers=u,C.locations=h,C.eventTypes=f,C.defaultLocation=p,C.showBy=w,C.lastUpdated=E,C}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),locations:this.locations.map(t=>t.toMap()),teachersUids:this.teachers.map(t=>t.memberUid),studentsUids:this.students.map(t=>t.memberUid),parentsUids:this.parents.map(t=>t.memberUid),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Te;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const M of n)i.push(Ct.fromMap(M));e.students=i;const o=t.parents,a=[];for(const M of o)a.push(Ct.fromMap(M));e.parents=a;const u=t.groups,h=[];for(const M of u)h.push(Ue.fromMap(M));e.groups=h;const f=t.locations,p=[];for(const M of f)p.push(Vt.fromMap(M));e.locations=p;const w=t.teachers,E=[];for(const M of w)E.push(Ct.fromMap(M));e.teachers=E,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const R=t.eventTypes,C=[];for(const M of R)C.push(ve.fromMap(M));return e.eventTypes=C,e.defaultLocation=Vt.fromMap(t.defaultLocation),e}}class Sn{constructor(){this.type="theater",this.name="",this.id="",this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=Vt.fromEmpty("","",new ue(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,u,h,f,p,w,E){const R=new Sn;return R.name=t,R.id=e,R.joinCode=n,R.students=i,R.parents=o,R.groups=a,R.teachers=u,R.locations=h,R.eventTypes=f,R.defaultLocation=p,R.showBy=w,R.lastUpdated=E,R}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),teachersUids:this.teachers.map(t=>t.memberUid),studentsUids:this.students.map(t=>t.userId),parentsUids:this.parents.map(t=>t.memberUid),locations:this.locations.map(t=>t.toMap()),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Sn;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const M of n)i.push(St.fromMap(M));e.students=i;const o=t.parents,a=[];for(const M of o)a.push(Ct.fromMap(M));e.parents=a;const u=t.groups,h=[];for(const M of u)h.push(Ue.fromMap(M));e.groups=h;const f=t.locations,p=[];for(const M of f)p.push(Vt.fromMap(M));e.locations=p;const w=t.teachers,E=[];for(const M of w)E.push(Ct.fromMap(M));e.teachers=E,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const R=t.eventTypes,C=[];for(const M of R)C.push(ve.fromMap(M));return e.eventTypes=C,e.defaultLocation=Vt.fromMap(t.defaultLocation),e}}class Vt{constructor(){this.name="",this.address="",this.location=new ue(0,0)}static fromEmpty(t,e,n){const i=new Vt;return i.name=t,i.address=e,i.location=n,i}toMap(){return{name:this.name,address:this.address,location:this.location}}static fromMap(t){const e=new Vt;return e.name=t.name,e.address=t.address,e.location=t.location,e}}class Ue{constructor(){this.groupName="",this.groupMembers=[],this.groupColor=0}static fromBlank(t,e,n){const i=new Ue;return i.groupName=t,i.groupMembers=e,i.groupColor=n,i}toMap(){return{groupName:this.groupName,groupMembers:this.groupMembers.map(t=>t.toMap()),groupColor:this.groupColor}}static fromMap(t){const e=new Ue;e.groupName=t.groupName;const n=t.groupMembers,i=[];for(const o of n)i.push(Ct.fromMap(o));return e.groupMembers=i,e.groupColor=t.groupColor,e}}class Ct{constructor(){this.memberName="",this.memberUid="",this.memberFCMToken=""}static fromBlank(t,e,n){const i=new Ct;return i.memberName=t,i.memberUid=e,i.memberFCMToken=n,i}toMap(){return{memberName:this.memberName,memberUid:this.memberUid,memberFCMToken:this.memberFCMToken}}static fromMap(t){const e=new Ct;return e.memberName=t.memberName,e.memberUid=t.memberUid,e.memberFCMToken=t.memberFCMToken,e}}class ve{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new ve;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new ve;return e.name=t.name,e.color=t.color,e}}class Ht{constructor(){this.date=new Date,this.from=new Date,this.to=new Date}static fromBlank(t,e,n){const i=new Ht;return i.date=t,i.from=e,i.to=n,i}toMap(){return{date:this.date,from:this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}),to:this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0})}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,u]=n;o=parseInt(o,10),a=parseInt(a,10),u.toUpperCase()==="PM"&&o<12?o+=12:u.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}}throw new Error("Invalid time format")}static fromMap(t){const e=new Ht;return t.date instanceof Date?e.date=t.date:typeof t.date=="string"?e.date=new Date(t.date):(console.log(typeof t.date),console.log(t.date),e.date=t.date.toDate()),e.from=this._parseTime(t.from),e.to=this._parseTime(t.to),e}}class Is{constructor(){this.activityId="",this.groupNames=[],this.targets=[],this.generalTarget="",this.eventType=new ve,this.groupTargets=[],this.hasSchoolEvent=!1,this.schoolEventId="",this.conflicts=[],this.activityName="",this.name="",this.info="",this.location=Vt.fromEmpty("","",new ue(0,0)),this.date=Ht.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,i,o,a,u,h,f,p,w,E,R,C,M,k){const O=new Is;O.name=t,O.info=e,O.location=n,O.date=i,O.type=o,O.lastUpdated=a;const $=i.date.toISOString().split("T")[0];return O.dateFilter=$,O.activityId=u,O.groupNames=h,O.targets=f,O.generalTarget=p,O.eventType=w,O.groupTargets=E,O.hasSchoolEvent=R,O.schoolEventId=C,O.conflicts=M,O.activityName=k,O}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),targets:this.targets.map(t=>t.toMap()),generalTarget:this.generalTarget,eventType:this.eventType.toMap(),activityName:this.activityName,groupTargets:this.groupTargets.map(t=>t.toMap()),type:"activity",groupNames:this.groupNames,dateFilter:this.dateFilter,hasSchoolEvent:this.hasSchoolEvent,schoolEventId:this.schoolEventId,activityId:this.activityId,lastUpdated:this.lastUpdated,targetUids:this.targets.map(t=>t.memberUid),conflicts:this.conflicts.map(t=>t.toMap())}}static fromMap(t){const e=new Is;e.name=t.name,e.info=t.info,e.location=Vt.fromMap(t.location),e.date=Ht.fromMap(t.date);const n=t.targets,i=[];for(const f of n)i.push(Ct.fromMap(f));e.targets=i,e.generalTarget=t.generalTarget,e.eventType=ve.fromMap(t.eventType),e.activityName=t.activityName;const o=t.groupTargets,a=[];for(const f of o)a.push(Ue.fromMap(f));e.groupTargets=a,e.groupNames=t.groupNames,e.dateFilter=t.dateFilter,e.hasSchoolEvent=t.hasSchoolEvent,e.schoolEventId=t.schoolEventId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated;const u=t.conflicts,h=[];for(const f of u)h.push(ws.fromMap(f));return e.conflicts=h,e}}class ws{constructor(){this.userId="",this.type="",this.start=null,this.end=null,this.reason="",this.status="",this.userName=""}static fromBlank(t,e,n,i,o,a,u){const h=new ws;return h.userId=t,h.type=e,h.start=n,h.end=i,h.reason=o,h.status=a,h.userName=u,h}toMap(){return{userId:this.userId,type:this.type,start:this.start!=null?this.start.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",end:this.end!=null?this.end.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",reason:this.reason,status:this.status,userName:this.userName}}static _parseTime(t){if(typeof t=="string")return new Date(`1970-01-01T${t}`);throw new Error("Invalid time format")}static fromMap(t){const e=new ws;return e.userId=t.userId,e.type=t.type,e.start=t.start!=""?this._parseTime(t.start):null,e.end=t.end!=""?this._parseTime(t.end):null,e.reason=t.reason,e.status=t.status,e.userName=t.userName,e}}class Be{constructor(){this.name="",this.info="",this.location=Vt.fromEmpty("","",new ue(0,0)),this.date=Ht.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id="",this.activityId="",this.showId="",this.characters=[],this.targets=[],this.theaterEventType=""}static fromBlank(t,e,n,i,o,a,u,h,f,p,w){const E=new Be;E.name=t,E.info=e,E.location=n,E.date=i,E.type=o,E.lastUpdated=a;const R=i.date.toISOString().split("T")[0];return E.dateFilter=R,E.activityId=u,E.showId=h,E.characters=f,E.targets=p,E.theaterEventType=w,E}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),type:this.type,lastUpdated:this.lastUpdated,dateFilter:this.dateFilter,activityId:this.activityId,showId:this.showId,characters:this.characters.map(t=>t.toMap()),targets:this.targets.map(t=>t.toMap()),targetUids:this.targets.map(t=>t.memberUid),id:this.id,theaterEventType:this.theaterEventType}}static fromMap(t){const e=new Be;e.name=t.name,e.info=t.info,e.location=Vt.fromMap(t.location),e.date=Ht.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e.activityId=t.activityId,e.showId=t.showId,e.theaterEventType=t.theaterEventType;const n=t.characters,i=[];for(const u of n)Object.prototype.hasOwnProperty.call(u,"characterId")?i.push(Ut.fromMap(u)):Object.prototype.hasOwnProperty.call(u,"includeAll")?i.push(oe.fromMap(u)):i.push(ae.fromMap(u));e.characters=i;const o=t.targets,a=[];for(const u of o)a.push(Ct.fromMap(u));return e.targets=a,e.id=t.id,e}}class qe{constructor(){this.name="",this.id="",this.layout=[],this.characters=[],this.ensemble=new Cn,this.showGroups=[],this.lastUpdated=0,this.songs=[],this.dances=[],this.canCreateSchedule=!1,this.hasEnsemble=!1,this.conflictForm=new Dn}static fromBlank(t,e,n,i,o,a,u,h,f,p,w,E){const R=new qe;return R.name=t,R.id=e,R.layout=n,R.characters=i,R.ensemble=o,R.showGroups=a,R.lastUpdated=E,R.songs=u,R.dances=h,R.canCreateSchedule=f,R.hasEnsemble=p,R.conflictForm=w,R}toMap(){return{name:this.name,id:this.id,layout:this.layout.map(t=>t.toMap()),characters:this.characters.map(t=>t.toMap()),ensemble:this.ensemble?this.ensemble.toMap():"null",showGroups:this.showGroups.map(t=>t.toMap()),songs:this.songs.map(t=>t.toMap()),dances:this.dances.map(t=>t.toMap()),canCreateSchedule:this.canCreateSchedule,hasEnsemble:this.hasEnsemble,conflictForm:this.conflictForm?this.conflictForm.toMap():"null",lastUpdated:this.lastUpdated}}static fromMap(t){const e=new qe;e.name=t.name,e.id=t.id;const n=t.layout,i=[];for(const R of n)i.push(As.fromMap(R));e.layout=i;const o=t.characters,a=[];for(const R of o)a.push(Ut.fromMap(R));e.characters=a,e.ensemble=t.ensemble!="null"&&t.ensemble?Cn.fromMap(t.ensemble):null;const u=t.showGroups,h=[];for(const R of u)h.push(ae.fromMap(R));e.showGroups=h;const f=t.songs,p=[];for(const R of f)p.push(Vs.fromMap(R));e.songs=p;const w=t.dances,E=[];for(const R of w)E.push(Ps.fromMap(R));return e.dances=E,e.canCreateSchedule=t.canCreateSchedule,e.lastUpdated=t.lastUpdated,e.conflictForm=t.conflictForm!="null"&&t.conflictForm?Dn.fromMap(t.conflictForm):null,e.hasEnsemble=t.hasEnsemble,e}}class As{constructor(){this.name="",this.scenes=[],this.lastUpdated=0,this.actId=0}static fromBlank(t,e,n,i){const o=new As;return o.name=t,o.scenes=e,o.lastUpdated=i,o.actId=n,o}toMap(){return{name:this.name,scenes:this.scenes.map(t=>t.toMap()),actId:this.actId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new As;e.name=t.name;const n=t.scenes,i=[];for(const o of n)i.push(Rs.fromMap(o));return e.scenes=i,e.actId=t.actId,e.lastUpdated=t.lastUpdated,e}}class Rs{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.sceneId=0}static fromBlank(t,e,n,i){const o=new Rs;return o.name=t,o.characters=e,o.lastUpdated=i,o.sceneId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),sceneId:this.sceneId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Rs;e.name=t.name;const n=t.characters,i=[];for(const o of n)Object.prototype.hasOwnProperty.call(o,"actor")?i.push(Ut.fromMap(o)):Object.prototype.hasOwnProperty.call(o,"characters")?i.push(ae.fromMap(o)):i.push(oe.fromMap(o));return e.characters=i,e.sceneId=t.sceneId,e.lastUpdated=t.lastUpdated,e}}class Ps{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.danceId=0}static fromBlank(t,e,n,i){const o=new Ps;return o.name=t,o.characters=e,o.lastUpdated=i,o.danceId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),danceId:this.danceId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ps;e.name=t.name;const n=t.characters,i=[];for(const o of n)Object.prototype.hasOwnProperty.call(o,"actor")?i.push(Ut.fromMap(o)):Object.prototype.hasOwnProperty.call(o,"characters")?i.push(ae.fromMap(o)):i.push(oe.fromMap(o));return e.characters=i,e.lastUpdated=t.lastUpdated,e.danceId=t.danceId,e}}class Vs{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.songId=0}static fromBlank(t,e,n,i){const o=new Vs;return o.name=t,o.characters=e,o.lastUpdated=i,o.songId=n,o}toMap(){for(const t of this.characters)console.log(t),console.log(t instanceof Ut);return{name:this.name,characters:this.characters.map(t=>t.toMap()),songId:this.songId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Vs;e.name=t.name;const n=t.characters,i=[];for(const o of n)Object.prototype.hasOwnProperty.call(o,"actor")?i.push(Ut.fromMap(o)):Object.prototype.hasOwnProperty.call(o,"characters")?i.push(ae.fromMap(o)):i.push(oe.fromMap(o));return e.characters=i,e.lastUpdated=t.lastUpdated,e.songId=t.songId,e}}class St{constructor(){this.name="",this.gender="male",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,i,o,a){const u=new St;return u.name=t,u.gender=e,u.email=n,u.phone=i,u.FCMToken=o,u.userId=a,u}toMap(){return{fullname:this.name,gender:this.gender,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new St;return e.name=t.fullname,e.gender=t.gender,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class Ut{constructor(){this.name="",this.actor=new St,this.lastUpdated=0,this.characterId=0}static fromBlank(t,e,n,i){const o=new Ut;return o.name=t,o.actor=e,o.lastUpdated=i,o.characterId=n,o}toMap(){return{name:this.name,actor:this.actor?this.actor.toMap():"null",characterId:this.characterId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ut;return e.name=t.name,e.actor=t.actor!="null"&&!Id(t.actor)?St.fromMap(t.actor):null,e.lastUpdated=t.lastUpdated,e.characterId=t.characterId,e}}function Id(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}class Cn{constructor(){this.actors=[],this.lastUpdated=0}static fromBlank(t,e){const n=new Cn;return n.actors=t,n.lastUpdated=e,n}toMap(){return{actors:this.actors.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Cn,n=t.actors,i=[];for(const o of n)i.push(St.fromMap(o));return e.actors=i,e.lastUpdated=t.lastUpdated,e}}class oe{constructor(){this.includeAll=!1,this.includeMale=!1,this.includeFemale=!1,this.includeCustom=!1,this.customActors=[],this.lastUpdated=0}static fromBlank(t,e,n,i,o,a){const u=new oe;return u.includeAll=t,u.includeMale=e,u.includeFemale=n,u.includeCustom=i,u.customActors=o,u.lastUpdated=a,u}toMap(){return{includeAll:this.includeAll,includeMale:this.includeMale,includeFemale:this.includeFemale,includeCustom:this.includeCustom,customActors:this.customActors.map(t=>t.toMap())??[],lastUpdated:this.lastUpdated}}static fromMap(t){const e=new oe;e.includeAll=t.includeAll,e.includeMale=t.includeMale,e.includeFemale=t.includeFemale,e.includeCustom=t.includeCustom;const n=t.customActors,i=[];for(const o of n)i.push(St.fromMap(o));return e.customActors=i,e.lastUpdated=t.lastUpdated,e}}class ae{constructor(){this.name="",this.characters=[],this.showGroupId=0,this.lastUpdated=0}static fromBlank(t,e,n,i){const o=new ae;return o.name=t,o.characters=e,o.lastUpdated=i,o.showGroupId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),showGroupId:this.showGroupId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new ae;e.name=t.name;const n=t.characters,i=[];for(const o of n)Object.prototype.hasOwnProperty.call(o,"actor")?i.push(Ut.fromMap(o)):i.push(oe.fromMap(o));return e.characters=i,e.showGroupId=t.showGroupId,e.lastUpdated=t.lastUpdated,e}}class Ss{constructor(){this.date=new Ht,this.moreInfo=""}static fromBlank(t,e){const n=new Ss;return n.date=t,n.moreInfo=e,n}toMap(){return{date:this.date.toMap(),moreInfo:this.moreInfo}}static fromMap(t){const e=new Ss;return e.date=Ht.fromMap(t.date),e.moreInfo=t.moreInfo,e}}class Dn{constructor(){this.dates=[],this.lastUpdated=0}static fromBlank(t,e){const n=new Dn;return n.dates=t,n.lastUpdated=e,n}toMap(){return{dates:this.dates.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Dn,n=t.dates,i=[];for(const o of n)i.push(Ss.fromMap(o));return e.dates=i,e.lastUpdated=t.lastUpdated,e}}class Cs{constructor(){this.date=new Date,this.from=null,this.to=null,this.canAttend=!1}static fromBlank(t,e,n,i){const o=new Cs;return o.date=t,o.from=e,o.to=n,o.canAttend=i,o}toMap(){return{date:this.date.toISOString(),from:this.from!=null?this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",to:this.to!=null?this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",canAttend:this.canAttend}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,u]=n;o=parseInt(o,10),a=parseInt(a,10),u.toUpperCase()==="PM"&&o<12?o+=12:u.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}}throw new Error("Invalid time format")}static fromMap(t){const e=new Cs;return e.date=new Date(t.date),e.from=t.from!=""?this._parseTime(t.from):null,e.to=t.to!=""?this._parseTime(t.to):null,e.canAttend=t.canAttend,e}}class je{constructor(){this.dates=[],this.id="",this.actor=new St,this.lastUpdated=0,this.activityId="",this.showId=""}static fromBlank(t,e,n,i,o,a){const u=new je;return u.dates=t,u.id=e,u.actor=n,u.lastUpdated=a,u.activityId=i,u.showId=o,u}toMap(){return{dates:this.dates.map(t=>t.toMap()),id:this.id,actor:this.actor.toMap(),lastUpdated:this.lastUpdated,submitterId:this.actor.userId,activityId:this.activityId,showId:this.showId}}static fromMap(t){const e=new je,n=t.dates,i=[];for(const o of n)i.push(Cs.fromMap(o));return e.dates=i,e.id=t.id,e.actor=St.fromMap(t.actor),e.showId=t.showId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}const Z=od(vu),wd=q(Z,"schools"),Sd=async()=>{const s=await At(wd),t=[];return s.forEach(e=>{t.push(e.data())}),t},Cd=async()=>{const s=localStorage.getItem("accountType"),t=localStorage.getItem("schoolId");if(!t)return[];const e=F(Z,"schools",t);if(s=="student"){const n=Kt(q(e,"activities"),xt("studentUids","array-contains",Me())),i=[];return(await At(n)).forEach(a=>{i.push(Te.fromMap(a.data()))}),i}else{const n=Kt(q(e,"activities"),xt("teacherUids","array-contains",Me())),i=[];return(await At(n)).forEach(a=>{i.push(Te.fromMap(a.data()))}),i}};async function Dd(s){const t=localStorage.getItem("schoolId");if(!t)return null;const e=F(Z,"schools",t),n=F(q(e,"activities"),s),i=await We(n);return i.exists()?i.data().type=="theater"?Sn.fromMap(i.data()):Te.fromMap(i.data()):null}async function Md(s,t){const e=localStorage.getItem("schoolId");if(!e)return"";const n=F(Z,"schools",e),i=F(q(n,"activities"),t),o=q(i,"shows"),a=await fi(o,s.toMap());return s.id=a.id,await Lt(a,{id:a.id}),a.id}async function kd(s){await Eu("cmurphy@gmail.com","123456");const t=q(Z,"showTemplates"),e=await fi(t,s.toMap());s.id=e.id,await Lt(e,{id:e.id})}async function bd(s,t){const e=localStorage.getItem("schoolId");if(!e)return null;const n=F(Z,"schools",e),i=F(q(n,"activities"),s),o=F(q(i,"shows"),t),a=await We(o);return a.exists()?(console.log(a.data()),qe.fromMap(a.data())):null}async function Nd(s){const t=localStorage.getItem("schoolId");if(!t)return[];console.log("Getting actors for activity "+t);const e=F(Z,"schools",t),n=F(q(e,"activities"),s),i=await We(n);if(!i.exists())return[];const o=[];return i.data().students.forEach(a=>{o.push(St.fromMap(a))}),o}async function xd(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const i=F(Z,"schools",n),o=F(q(i,"activities"),s),a=F(q(o,"shows"),t);await Vc(a,e.toMap())}async function Fd(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=F(Z,"schools",t),n=F(q(e,"activities"),s.activityId),i=q(n,"events"),o=await fi(i,s.toMap());s.id=o.id,await Lt(o,{id:o.id})}async function Od(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!e)return[];const i=F(Z,"schools",e),o=F(q(i,"activities"),s),a=q(o,"events");if(n=="student"){const u=await At(Kt(a,xt("showId","==",t),xt("targetUids","array-contains",Me()))),h=[];return u.forEach(f=>{f.data().deleted||h.push(Be.fromMap(f.data()))}),h}else{const u=await At(Kt(a,xt("showId","==",t))),h=[];return u.forEach(f=>{f.data().deleted||h.push(Be.fromMap(f.data()))}),h}}async function Ld(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=F(Z,"schools",t),n=F(q(e,"activities"),s.activityId),i=F(q(n,"events"),s.id);await Lt(i,{deleted:!0})}async function Ud(s){const t=localStorage.getItem("schoolId");if(!t)return[];const e=F(Z,"schools",t),n=F(q(e,"activities"),s),i=q(n,"shows"),o=await At(i),a=[];return o.forEach(u=>{a.push(qe.fromMap(u.data()))}),a}async function Bd(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const i=F(Z,"schools",n),o=F(q(i,"activities"),s),a=F(q(o,"shows"),t);await Lt(a,{conflictForm:e.toMap()})}async function qd(){const s=await Me(),t=localStorage.getItem("schoolId");if(!t)return null;const e=F(Z,"schools",t),n=F(q(e,"students"),s),i=await We(n);return i.exists()?St.fromMap(i.data()):null}async function jd(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const i=F(Z,"schools",n),o=F(q(i,"activities"),s),a=F(q(o,"shows"),t),u=F(a,"conflictResponses",e.actor.userId);e.id=e.actor.userId,await Vc(u,e.toMap())}async function Gd(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(localStorage.getItem("userId"),!e)return[];const i=F(Z,"schools",e),o=F(q(i,"activities"),s),a=F(q(o,"shows"),t),u=q(a,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(Me());const p=await At(Kt(u,xt("submitterId","==",Me()))),w=[];return p.forEach(E=>{w.push(je.fromMap(E.data()))}),w}const h=await At(u),f=[];return h.forEach(p=>{f.push(je.fromMap(p.data()))}),f}async function zd(){const s=q(Z,"showTemplates"),t=await At(s),e=[];return t.forEach(n=>{e.push(qe.fromMap(n.data()))}),e}async function Kd(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId");if(!t||!e)return null;const n=F(Z,"schools",t),i=Kt(q(n,"activities"),xt("joinCode","==",s)),o=await At(i);if(o.empty)return null;const a=o.docs[0],u=F(q(n,"students"),e),h=await We(u);return h.exists()?a.data().type=="theater"?(h.data().gender==null&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),h.data().phoneNumber==""&&localStorage.setItem("needsPhoneNumber","true"),h.data().phoneNumber==""||h.data().gender==null?null:(await Lt(a.ref,{studentUids:[...a.data().studentUids,e],students:[...a.data().students,St.fromMap(h.data()).toMap()]}),Sn.fromMap(a.data()))):(await Lt(a.ref,{studentUids:[...a.data().studentUids,e],students:[...a.data().students,Ct.fromMap(h.data()).toMap()]}),Te.fromMap(a.data())):null}async function $d(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId");if(!t||!e)return;const n=F(Z,"schools",t),i=F(q(n,"students"),e);await Lt(i,{gender:s})}async function Qd(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId");if(!t||!e)return;const n=F(Z,"schools",t),i=F(q(n,"students"),e);await Lt(i,{phoneNumber:s})}async function Wd(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=F(Z,"schools",t),n=F(q(e,"activities"),s.activityId),i=F(q(n,"events"),s.id);await Lt(i,s.toMap())}async function Hd(){const s=localStorage.getItem("schoolId"),t=localStorage.getItem("userId"),e=localStorage.getItem("accountType");if(!s||!t)return[];const n=F(Z,"schools",s),i=[];let o;e=="student"?o=await At(Kt(q(n,"activities"),xt("studentUids","array-contains",t))):o=await At(Kt(q(n,"activities"),xt("teacherUids","array-contains",t))),console.log(o);for(const a of o.docs){let u;e=="student"?u=await At(Kt(q(a.ref,"events"),xt("targetUids","array-contains",t))):u=await At(q(a.ref,"events"));for(const h of u.docs){const f=h.data();console.log(f),f.type=="activity-theater-event"?i.push(Be.fromMap(f)):i.push(Is.fromMap(f))}}return i}async function Xd(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!e||!n)return null;const i=F(Z,"schools",e),o=F(q(i,"activities"),s),a=F(q(o,"shows"),t),u=q(a,"conflictResponses"),h=await We(F(u,n));return h.exists()?je.fromMap(h.data()):null}export{As as A,Ss as B,Ut as C,Ps as D,oe as E,Cs as F,Dn as G,Bd as H,qd as I,je as J,jd as K,Hd as L,Xd as M,Rs as S,Be as T,$d as a,Cd as b,Dd as c,Ud as d,zd as e,Md as f,Sd as g,ae as h,Vs as i,Kd as j,qe as k,Cn as l,kd as m,bd as n,Nd as o,St as p,Te as q,Gd as r,xd as s,Od as t,Qd as u,Ld as v,Ht as w,Ct as x,Wd as y,Fd as z};
