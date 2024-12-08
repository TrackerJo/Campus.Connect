import{L as vc,h as Ec,C as Ic,k as Co,F as wc,d as Dt,f as Ac,_ as Rc,e as Pc,q as Xt,m as Vc,S as Cc,s as ga,t as Sc,u as Mc}from"./index-BrfWEQze.js";var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,_a;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,A){for(var g=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)g[xt-2]=arguments[xt];return m.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],v=E.g[2];var A=E.g[3],g=m+(A^_&(v^A))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+y[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+y[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+y[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+y[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+y[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+y[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+y[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+y[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^A&(_^v))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+y[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+y[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+y[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+y[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+y[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+y[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+y[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+y[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^A)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+y[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+y[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+y[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+y[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+y[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+y[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+y[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+y[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~A))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+y[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+y[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+y[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+y[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+y[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+y[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+y[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+y[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,v=this.h,A=0;A<m;){if(v==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(y[v++]=E.charCodeAt(A++),v==this.blockSize){i(this,y),v=0;break}}else for(;A<m;)if(y[v++]=E[A++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var A=E[v]|0;y&&A==m||(_[v]=A,y=!1)}this.g=_}var c={};function l(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return C(d(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return C(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=T,v=0;v<E.length;v+=8){var A=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+A),m);8>A?(A=d(Math.pow(m,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var T=l(0),w=l(1),P=l(16777216);r=a.prototype,r.m=function(){if(M(this))return-C(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(M(this))return"-"+C(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,y="";;){var v=nt(_,m).g;_=b(_,v.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,V(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function M(E){return E.h==-1}r.l=function(E){return E=b(this,E),M(E)?-1:V(E)?0:1};function C(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new a(_,~E.h).add(w)}r.abs=function(){return M(this)?C(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=m;v++){var A=y+(this.i(v)&65535)+(E.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function b(E,m){return E.add(C(m))}r.j=function(E){if(V(this)||V(E))return T;if(M(this))return M(E)?C(this).j(C(E)):C(C(this).j(E));if(M(E))return C(this.j(C(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var A=this.i(y)>>>16,g=this.i(y)&65535,xt=E.i(v)>>>16,qe=E.i(v)&65535;_[2*y+2*v]+=g*qe,G(_,2*y+2*v),_[2*y+2*v+1]+=A*qe,G(_,2*y+2*v+1),_[2*y+2*v+1]+=g*xt,G(_,2*y+2*v+1),_[2*y+2*v+2]+=A*xt,G(_,2*y+2*v+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function nt(E,m){if(V(m))throw Error("division by zero");if(V(E))return new Q(T,T);if(M(E))return m=nt(C(E),m),new Q(C(m.g),C(m.h));if(M(m))return m=nt(E,C(m)),new Q(C(m.g),m.h);if(30<E.g.length){if(M(E)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=m;0>=y.l(E);)_=Ft(_),y=Ft(y);var v=st(_,1),A=st(y,1);for(y=st(y,2),_=st(_,2);!V(y);){var g=A.add(y);0>=g.l(E)&&(v=v.add(_),A=g),y=st(y,1),_=st(_,1)}return m=b(E,v.j(m)),new Q(v,m)}for(v=T;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(m);M(g)||0<g.l(E);)_-=y,A=d(_),g=A.j(m);V(A)&&(A=w),v=v.add(A),E=b(E,g)}return new Q(v,E)}r.A=function(E){return nt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function Ft(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function st(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,v=[],A=0;A<y;A++)v[A]=0<m?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,_a=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,he=a}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ya,on,Ta,Zn,_s,va,Ea,Ia;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,h){return s==Array.prototype||s==Object.prototype||(s[u]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hn=="object"&&Hn];for(var u=0;u<s.length;++u){var h=s[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var h=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in h))break t;h=h[I]}s=s[s.length-1],f=h[s],u=u(f),u!=f&&u!=null&&t(h,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var h=0,f=!1,I={next:function(){if(!f&&h<s.length){var R=h++;return{value:u(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,h){return s.call.apply(s.bind,arguments)}function T(s,u,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function w(s,u,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,w.apply(null,arguments)}function P(s,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function V(s,u){function h(){}h.prototype=u.prototype,s.aa=u.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var D=Array(arguments.length-2),z=2;z<arguments.length;z++)D[z-2]=arguments[z];return u.prototype[I].apply(f,D)}}function M(s){const u=s.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=s[f];return h}return[]}function C(s,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let D=0;D<R;D++)s[I+D]=f[D]}else s.push(f)}}class b{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var Ft=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function st(s,u,h){for(const f in s)u.call(h,s[f],f,s)}function E(s,u){for(const h in s)u.call(void 0,s[h],h,s)}function m(s){const u={};for(const h in s)u[h]=s[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)s[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function v(s){var u=1;s=s.split(":");const h=[];for(;0<u&&s.length;)h.push(s.shift()),u--;return s.length&&h.push(s.join(":")),h}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Kr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class xt{constructor(){this.h=this.g=null}add(u,h){const f=qe.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qe=new b(()=>new Ou,s=>s.reset());class Ou{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Ke=!1,Kr=new xt,Vi=()=>{const s=c.Promise.resolve(void 0);je=()=>{s.then(Bu)}};var Bu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){A(h)}var u=qe;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Ke=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var qu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return s}();function Ge(s,u){if(lt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Ft){t:{try{nt(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else h=="mouseover"?u=s.fromElement:h=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ju[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ge.aa.h.call(this)}}V(Ge,lt);var ju={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Ku=0;function Gu(s,u,h,f,I){this.listener=s,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=I,this.key=++Ku,this.da=this.fa=!1}function kn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Dn(s){this.src=s,this.g={},this.h=0}Dn.prototype.add=function(s,u,h,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var D=$r(s,u,f,I);return-1<D?(u=s[D],h||(u.fa=!1)):(u=new Gu(u,this.src,R,!!f,I),u.fa=h,s.push(u)),u};function Gr(s,u){var h=u.type;if(h in s.g){var f=s.g[h],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(kn(u),s.g[h].length==0&&(delete s.g[h],s.h--))}}function $r(s,u,h,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return I}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),Qr={};function Ci(s,u,h,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ci(s,u[R],h,f,I);return null}return h=ki(h),s&&s[Mn]?s.K(u,h,d(f)?!!f.capture:!!f,I):$u(s,u,h,!1,f,I)}function $u(s,u,h,f,I,R){if(!u)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,z=Hr(s);if(z||(s[zr]=z=new Dn(s)),h=z.add(u,h,f,D,R),h.proxy)return h;if(f=zu(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)qu||(I=D),I===void 0&&(I=!1),s.addEventListener(u.toString(),f,I);else if(s.attachEvent)s.attachEvent(Mi(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function zu(){function s(h){return u.call(s.src,s.listener,h)}const u=Qu;return s}function Si(s,u,h,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Si(s,u[R],h,f,I);else f=d(f)?!!f.capture:!!f,h=ki(h),s&&s[Mn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],h=$r(R,h,f,I),-1<h&&(kn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=Hr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=$r(u,h,f,I)),(h=-1<s?u[s]:null)&&Wr(h))}function Wr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Mn])Gr(u.i,s);else{var h=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(h,f,s.capture):u.detachEvent?u.detachEvent(Mi(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Hr(u))?(Gr(h,s),h.h==0&&(h.src=null,u[zr]=null)):kn(s)}}}function Mi(s){return s in Qr?Qr[s]:Qr[s]="on"+s}function Qu(s,u){if(s.da)s=!0;else{u=new Ge(u,this);var h=s.listener,f=s.ha||s.src;s.fa&&Wr(s),s=h.call(f,u)}return s}function Hr(s){return s=s[zr],s instanceof Dn?s:null}var Xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(s){return typeof s=="function"?s:(s[Xr]||(s[Xr]=function(u){return s.handleEvent(u)}),s[Xr])}function dt(){zt.call(this),this.i=new Dn(this),this.M=this,this.F=null}V(dt,zt),dt.prototype[Mn]=!0,dt.prototype.removeEventListener=function(s,u,h,f){Si(this,s,u,h,f)};function vt(s,u){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new lt(u,s);else if(u instanceof lt)u.target=u.target||s;else{var I=u;u=new lt(f,s),y(u,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var D=u.g=h[R];I=Nn(D,f,!0,u)&&I}if(D=u.g=s,I=Nn(D,f,!0,u)&&I,I=Nn(D,f,!1,u)&&I,h)for(R=0;R<h.length;R++)D=u.g=h[R],I=Nn(D,f,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var h=s.g[u],f=0;f<h.length;f++)kn(h[f]);delete s.g[u],s.h--}}this.F=null},dt.prototype.K=function(s,u,h,f){return this.i.add(String(s),u,!1,h,f)},dt.prototype.L=function(s,u,h,f){return this.i.add(String(s),u,!0,h,f)};function Nn(s,u,h,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==h){var z=D.listener,it=D.ha||D.src;D.fa&&Gr(s.i,D),I=z.call(it,f)!==!1&&I}}return I&&!f.defaultPrevented}function Di(s,u,h){if(typeof s=="function")h&&(s=w(s,h));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function Ni(s){s.g=Di(()=>{s.g=null,s.i&&(s.i=!1,Ni(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Wu extends zt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ni(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(s){zt.call(this),this.h=s,this.g={}}V($e,zt);var bi=[];function Fi(s){st(s.g,function(u,h){this.g.hasOwnProperty(h)&&Wr(u)},s),s.g={}}$e.prototype.N=function(){$e.aa.N.call(this),Fi(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yr=c.JSON.stringify,Hu=c.JSON.parse,Xu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Jr(){}Jr.prototype.h=null;function xi(s){return s.h||(s.h=s.i())}function Li(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zr(){lt.call(this,"d")}V(Zr,lt);function ts(){lt.call(this,"c")}V(ts,lt);var ie={},Ui=null;function bn(){return Ui=Ui||new dt}ie.La="serverreachability";function Oi(s){lt.call(this,ie.La,s)}V(Oi,lt);function Qe(s){const u=bn();vt(u,new Oi(u))}ie.STAT_EVENT="statevent";function Bi(s,u){lt.call(this,ie.STAT_EVENT,s),this.stat=u}V(Bi,lt);function Et(s){const u=bn();vt(u,new Bi(u,s))}ie.Ma="timingevent";function qi(s,u){lt.call(this,ie.Ma,s),this.size=u}V(qi,lt);function We(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function He(){this.g=!0}He.prototype.xa=function(){this.g=!1};function Yu(s,u,h,f,I,R){s.info(function(){if(s.g)if(R)for(var D="",z=R.split("&"),it=0;it<z.length;it++){var j=z[it].split("=");if(1<j.length){var ft=j[0];j=j[1];var pt=ft.split("_");D=2<=pt.length&&pt[1]=="type"?D+(ft+"="+j+"&"):D+(ft+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+h+`
`+D})}function Ju(s,u,h,f,I,R,D){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+h+`
`+R+" "+D})}function _e(s,u,h,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+tc(s,h)+(f?" "+f:"")})}function Zu(s,u){s.info(function(){return"TIMEOUT: "+u})}He.prototype.info=function(){};function tc(s,u){if(!s.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Yr(h)}catch{return u}}var Fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},es;function xn(){}V(xn,Jr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},es=new xn;function Qt(s,u,h,f){this.j=s,this.i=u,this.l=h,this.R=f||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var Gi={},ns={};function rs(s,u,h){s.L=1,s.v=Bn(Lt(u)),s.m=h,s.P=!0,$i(s,null)}function $i(s,u){s.F=Date.now(),Ln(s),s.A=Lt(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),io(h.i,"t",f),s.C=0,h=s.j.J,s.h=new Ki,s.g=Ao(s.j,h?u:null,!s.m),0<s.O&&(s.M=new Wu(w(s.Y,s,s.g),s.O)),u=s.U,h=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(bi[0]=I.toString()),I=bi);for(var R=0;R<I.length;R++){var D=Ci(h,I[R],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Qe(),Yu(s.i,s.u,s.A,s.l,s.R,s.m)}Qt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Ut(s)==3?u.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ut(this.g);var u=this.g.Ba();const ve=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||fo(this.g)))){this.J||pt!=4||u==7||(u==8||0>=ve?Qe(3):Qe(2)),ss(this);var h=this.g.Z();this.X=h;e:if(zi(this)){var f=fo(this.g);s="";var I=f.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Xe(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Ju(this.i,this.u,this.A,this.l,this.R,pt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var z,it=this.g;if((z=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(z)){var j=z;break e}}j=null}if(h=j)_e(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,h);else{this.o=!1,this.s=3,Et(12),oe(this),Xe(this);break t}}if(this.P){h=!0;let Vt;for(;!this.J&&this.C<D.length;)if(Vt=ec(this,D),Vt==ns){pt==4&&(this.s=4,Et(14),h=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Gi){this.s=4,Et(15),_e(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else _e(this.i,this.l,Vt,null),is(this,Vt);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||D.length!=0||this.h.h||(this.s=1,Et(16),h=!1),this.o=this.o&&h,!h)_e(this.i,this.l,D,"[Invalid Chunked Response]"),oe(this),Xe(this);else if(0<D.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ls(ft),ft.M=!0,Et(11))}}else _e(this.i,this.l,D,null),is(this,D);pt==4&&oe(this),this.o&&!this.J&&(pt==4?vo(this.j,this):(this.o=!1,Ln(this)))}else yc(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),oe(this),Xe(this)}}}catch{}finally{}};function zi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ec(s,u){var h=s.C,f=u.indexOf(`
`,h);return f==-1?ns:(h=Number(u.substring(h,f)),isNaN(h)?Gi:(f+=1,f+h>u.length?ns:(u=u.slice(f,f+h),s.C=f+h,u)))}Qt.prototype.cancel=function(){this.J=!0,oe(this)};function Ln(s){s.S=Date.now()+s.I,Qi(s,s.I)}function Qi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=We(w(s.ba,s),u)}function ss(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Zu(this.i,this.A),this.L!=2&&(Qe(),Et(17)),oe(this),this.s=2,Xe(this)):Qi(this,this.S-s)};function Xe(s){s.j.G==0||s.J||vo(s.j,s)}function oe(s){ss(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Fi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function is(s,u){try{var h=s.j;if(h.G!=0&&(h.g==s||os(h.h,s))){if(!s.K&&os(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)zn(h),Gn(h);else break t;hs(h),Et(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=We(w(h.Za,h),6e3));if(1>=Xi(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else ue(h,11)}else if((s.K||h.g==s)&&zn(h),!G(u))for(I=h.Da.g.parse(u),u=0;u<I.length;u++){let j=I[u];if(h.T=j[0],j=j[1],h.G==2)if(j[0]=="c"){h.K=j[1],h.ia=j[2];const ft=j[3];ft!=null&&(h.la=ft,h.j.info("VER="+h.la));const pt=j[4];pt!=null&&(h.Aa=pt,h.j.info("SVER="+h.Aa));const ve=j[5];ve!=null&&typeof ve=="number"&&0<ve&&(f=1.5*ve,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Vt=s.g;if(Vt){const Wn=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var R=f.h;R.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(as(R,R.h),R.h=null))}if(f.D){const ds=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(f.ya=ds,W(f.I,f.D,ds))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=s;if(f.qa=wo(f,f.J?f.ia:null,f.W),D.K){Yi(f.h,D);var z=D,it=f.L;it&&(z.I=it),z.B&&(ss(z),Ln(z)),f.g=D}else yo(f);0<h.i.length&&$n(h)}else j[0]!="stop"&&j[0]!="close"||ue(h,7);else h.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ue(h,7):cs(h):j[0]!="noop"&&h.l&&h.l.ta(j),h.v=0)}}Qe(4)}catch{}}var nc=class{constructor(s,u){this.g=s,this.map=u}};function Wi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Xi(s){return s.h?1:s.g?s.g.size:0}function os(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function as(s,u){s.g?s.g.add(u):s.h=u}function Yi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Wi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ji(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const h of s.g.values())u=u.concat(h.D);return u}return M(s.i)}function rc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(l(s)){for(var u=[],h=s.length,f=0;f<h;f++)u.push(s[f]);return u}u=[],h=0;for(f in s)u[h++]=s[f];return u}function sc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(l(s)||typeof s=="string"){var u=[];s=s.length;for(var h=0;h<s;h++)u.push(h);return u}u=[],h=0;for(const f in s)u[h++]=f;return u}}}function Zi(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(l(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var h=sc(s),f=rc(s),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],h&&h[R],s)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ic(s,u){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),I=null;if(0<=f){var R=s[h].substring(0,f);I=s[h].substring(f+1)}else R=s[h];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ae(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ae){this.h=s.h,Un(this,s.j),this.o=s.o,this.g=s.g,On(this,s.s),this.l=s.l;var u=s.i,h=new Ze;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),eo(this,h),this.m=s.m}else s&&(u=String(s).match(to))?(this.h=!1,Un(this,u[1]||"",!0),this.o=Ye(u[2]||""),this.g=Ye(u[3]||"",!0),On(this,u[4]),this.l=Ye(u[5]||"",!0),eo(this,u[6]||"",!0),this.m=Ye(u[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}ae.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Je(u,no,!0),":");var h=this.g;return(h||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Je(u,no,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(Je(h,h.charAt(0)=="/"?uc:ac,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",Je(h,hc)),s.join("")};function Lt(s){return new ae(s)}function Un(s,u,h){s.j=h?Ye(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function On(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function eo(s,u,h){u instanceof Ze?(s.i=u,lc(s.i,s.h)):(h||(u=Je(u,cc)),s.i=new Ze(u,s.h))}function W(s,u,h){s.i.set(u,h)}function Bn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ye(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Je(s,u,h){return typeof s=="string"?(s=encodeURI(s).replace(u,oc),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function oc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var no=/[#\/\?@]/g,ac=/[#\?:]/g,uc=/[#\?]/g,cc=/[#\?@]/g,hc=/#/g;function Ze(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&ic(s.i,function(u,h){s.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}r=Ze.prototype,r.add=function(s,u){Wt(this),this.i=null,s=ye(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(u),this.h+=1,this};function ro(s,u){Wt(s),u=ye(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function so(s,u){return Wt(s),u=ye(s,u),s.g.has(u)}r.forEach=function(s,u){Wt(this),this.g.forEach(function(h,f){h.forEach(function(I){s.call(u,I,f,this)},this)},this)},r.na=function(){Wt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const I=s[f];for(let R=0;R<I.length;R++)h.push(u[f])}return h},r.V=function(s){Wt(this);let u=[];if(typeof s=="string")so(this,s)&&(u=u.concat(this.g.get(ye(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)u=u.concat(s[h])}return u},r.set=function(s,u){return Wt(this),this.i=null,s=ye(this,s),so(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function io(s,u,h){ro(s,u),0<h.length&&(s.i=null,s.g.set(ye(s,u),M(h)),s.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var I=R;D[f]!==""&&(I+="="+encodeURIComponent(String(D[f]))),s.push(I)}}return this.i=s.join("&")};function ye(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function lc(s,u){u&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(ro(this,f),io(this,I,h))},s)),s.j=u}function dc(s,u){const h=new He;if(c.Image){const f=new Image;f.onload=P(Ht,h,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Ht,h,"TestLoadImage: error",!1,u,f),f.onabort=P(Ht,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Ht,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function fc(s,u){const h=new He,f=new AbortController,I=setTimeout(()=>{f.abort(),Ht(h,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Ht(h,"TestPingServer: ok",!0,u):Ht(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Ht(h,"TestPingServer: error",!1,u)})}function Ht(s,u,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function pc(){this.g=new Xu}function mc(s,u,h){const f=h||"";try{Zi(s,function(I,R){let D=I;d(I)&&(D=Yr(I)),u.push(f+R+"="+encodeURIComponent(D))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function qn(s){this.l=s.Ub||null,this.j=s.eb||!1}V(qn,Jr),qn.prototype.g=function(){return new jn(this.l,this.j)},qn.prototype.i=function(s){return function(){return s}}({});function jn(s,u){dt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(jn,dt),r=jn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,en(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function oo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?tn(this):en(this),this.readyState==3&&oo(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,tn(this))},r.Qa=function(s){this.g&&(this.response=s,tn(this))},r.ga=function(){this.g&&tn(this)};function tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,en(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=u.next();return s.join(`\r
`)};function en(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ao(s){let u="";return st(s,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function us(s,u,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=ao(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):W(s,u,h))}function Y(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Y,dt);var gc=/^https?$/i,_c=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():es.g(),this.v=this.o?xi(this.o):xi(es),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){uo(this,R);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(_c,u,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of h)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){uo(this,R)}};function uo(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,co(s),Kn(s)}function co(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},r.bb=function(){ho(this)};function ho(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)Di(s.Ea,0,s);else if(vt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const D=s.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var f;if(f=D===0){var I=String(s.D).match(to)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!gc.test(I?I.toLowerCase():"")}h=f}if(h)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var R=2<Ut(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",co(s)}}finally{Kn(s)}}}}function Kn(s,u){if(s.g){lo(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||vt(s,"ready");try{h.onreadystatechange=f}catch{}}}function lo(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Hu(u)}};function fo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function yc(s){const u={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(G(s[f]))continue;var h=v(s[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[I]||[];u[I]=R,R.push(h)}E(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(s,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||u}function po(s){this.Aa=0,this.i=[],this.j=new He,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,s),this.cb=nn("retryDelaySeedMs",1e4,s),this.Wa=nn("forwardChannelMaxRetries",2,s),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(s&&s.concurrentRequestLimit),this.Da=new pc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=po.prototype,r.la=8,r.G=1,r.connect=function(s,u,h,f){Et(0),this.W=s,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=wo(this,null,this.W),$n(this)};function cs(s){if(mo(s),s.G==3){var u=s.U++,h=Lt(s.I);if(W(h,"SID",s.K),W(h,"RID",u),W(h,"TYPE","terminate"),rn(s,h),u=new Qt(s,s.j,u),u.L=2,u.v=Bn(Lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ao(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ln(u)}Io(s)}function Gn(s){s.g&&(ls(s),s.g.cancel(),s.g=null)}function mo(s){Gn(s),s.u&&(c.clearTimeout(s.u),s.u=null),zn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function $n(s){if(!Hi(s.h)&&!s.s){s.s=!0;var u=s.Ga;je||Vi(),Ke||(je(),Ke=!0),Kr.add(u,s),s.B=0}}function Tc(s,u){return Xi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=We(w(s.Ga,s,u),Eo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Qt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=_o(this,I,u),h=Lt(this.I),W(h,"RID",s),W(h,"CVER",22),this.D&&W(h,"X-HTTP-Session-Id",this.D),rn(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(ao(R)))+"&"+u:this.m&&us(h,this.m,R)),as(this.h,I),this.Ua&&W(h,"TYPE","init"),this.P?(W(h,"$req",u),W(h,"SID","null"),I.T=!0,rs(I,h,null)):rs(I,h,u),this.G=2}}else this.G==3&&(s?go(this,s):this.i.length==0||Hi(this.h)||go(this))};function go(s,u){var h;u?h=u.l:h=s.U++;const f=Lt(s.I);W(f,"SID",s.K),W(f,"RID",h),W(f,"AID",s.T),rn(s,f),s.m&&s.o&&us(f,s.m,s.o),h=new Qt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),u&&(s.i=u.D.concat(s.i)),u=_o(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),as(s.h,h),rs(h,f,u)}function rn(s,u){s.H&&st(s.H,function(h,f){W(u,f,h)}),s.l&&Zi({},function(h,f){W(u,f,h)})}function _o(s,u,h){h=Math.min(s.i.length,h);var f=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const D=["count="+h];R==-1?0<h?(R=I[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let z=!0;for(let it=0;it<h;it++){let j=I[it].g;const ft=I[it].map;if(j-=R,0>j)R=Math.max(0,I[it].g-100),z=!1;else try{mc(ft,D,"req"+j+"_")}catch{f&&f(ft)}}if(z){f=D.join("&");break t}}}return s=s.i.splice(0,h),u.D=s,f}function yo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;je||Vi(),Ke||(je(),Ke=!0),Kr.add(u,s),s.v=0}}function hs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=We(w(s.Fa,s),Eo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,To(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=We(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Gn(this),To(this))};function ls(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function To(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Lt(s.qa);W(u,"RID","rpc"),W(u,"SID",s.K),W(u,"AID",s.T),W(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(u,"TO",s.ja),W(u,"TYPE","xmlhttp"),rn(s,u),s.m&&s.o&&us(u,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Bn(Lt(u)),h.m=null,h.P=!0,$i(h,s)}r.Za=function(){this.C!=null&&(this.C=null,Gn(this),hs(this),Et(19))};function zn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function vo(s,u){var h=null;if(s.g==u){zn(s),ls(s),s.g=null;var f=2}else if(os(s.h,u))h=u.D,Yi(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;f=bn(),vt(f,new qi(f,h)),$n(s)}else yo(s);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Tc(s,u)||f==2&&hs(s)))switch(h&&0<h.length&&(u=s.h,u.i=u.i.concat(h)),I){case 1:ue(s,5);break;case 4:ue(s,10);break;case 3:ue(s,6);break;default:ue(s,2)}}}function Eo(s,u){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*u}function ue(s,u){if(s.j.info("Error code "+u),u==2){var h=w(s.fb,s),f=s.Xa;const I=!f;f=new ae(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Un(f,"https"),Bn(f),I?dc(f.toString(),h):fc(f.toString(),h)}else Et(2);s.G=0,s.l&&s.l.sa(u),Io(s),mo(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Io(s){if(s.G=0,s.ka=[],s.l){const u=Ji(s.h);(u.length!=0||s.i.length!=0)&&(C(s.ka,u),C(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function wo(s,u,h){var f=h instanceof ae?Lt(h):new ae(h);if(f.g!="")u&&(f.g=u+"."+f.g),On(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new ae(null);f&&Un(R,f),u&&(R.g=u),I&&On(R,I),h&&(R.l=h),f=R}return h=s.D,u=s.ya,h&&u&&W(f,h,u),W(f,"VER",s.la),rn(s,f),f}function Ao(s,u,h){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new Y(new qn({eb:h})):new Y(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}r=Ro.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qn(){}Qn.prototype.g=function(s,u){return new At(s,u)};function At(s,u){dt.call(this),this.g=new po(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!G(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Te(this)}V(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){cs(this.g)},At.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Yr(s),s=h);u.i.push(new nc(u.Ya++,s)),u.G==3&&$n(u)},At.prototype.N=function(){this.g.l=null,delete this.j,cs(this.g),delete this.g,At.aa.N.call(this)};function Po(s){Zr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const h in u){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}V(Po,Zr);function Vo(){ts.call(this),this.status=1}V(Vo,ts);function Te(s){this.g=s}V(Te,Ro),Te.prototype.ua=function(){vt(this.g,"a")},Te.prototype.ta=function(s){vt(this.g,new Po(s))},Te.prototype.sa=function(s){vt(this.g,new Vo)},Te.prototype.ra=function(){vt(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ia=function(){return new Qn},Ea=function(){return bn()},va=ie,_s={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,Zn=Fn,ji.COMPLETE="complete",Ta=ji,Li.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",dt.prototype.listen=dt.prototype.K,on=Li,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ya=Y}).apply(typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{});const Mo="@firebase/firestore";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let xe="10.14.0";/**
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
 */const le=new vc("@firebase/firestore");function sn(){return le.logLevel}function F(r,...t){if(le.logLevel<=Xt.DEBUG){const e=t.map(Ks);le.debug(`Firestore (${xe}): ${r}`,...e)}}function Bt(r,...t){if(le.logLevel<=Xt.ERROR){const e=t.map(Ks);le.error(`Firestore (${xe}): ${r}`,...e)}}function Re(r,...t){if(le.logLevel<=Xt.WARN){const e=t.map(Ks);le.warn(`Firestore (${xe}): ${r}`,...e)}}function Ks(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function L(r="Unexpected state"){const t=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: `+r;throw Bt(t),new Error(t)}function $(r,t){r||L()}function O(r,t){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends wc{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Dc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let n=this.i;const i=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string"),new wa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new gt(t)}}class bc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new bc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){$(this.o===void 0);const n=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new xc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uc(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Aa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Uc(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function Pe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */class et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new et(0,0))}static max(){return new U(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pn{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return pn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends pn{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Oc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends pn{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Oc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(H.fromString(t))}static fromName(t){return new x(H.fromString(t).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new H(t.slice()))}}function Bc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Zt(i,x.empty(),t)}function qc(r){return new Zt(r.readTime,r.key,-1)}class Zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Zt(U.min(),x.empty(),-1)}static max(){return new Zt(U.max(),x.empty(),-1)}}function jc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
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
 */const Kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function wn(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Kc)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,n)=>{e(t)})}static reject(t){return new k((e,n)=>{n(t)})}static waitFor(t){return new k((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},l=>n(l))}),a=!0,o===i&&e()})}static or(t){let e=k.resolve(!1);for(const n of t)e=e.next(i=>i?k.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new k((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let l=0;l<o;l++){const d=l;e(t[d]).next(p=>{a[d]=p,++c,c===o&&n(a)},p=>i(p))}})}static doWhile(t,e){return new k((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function $c(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function An(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Gs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Gs.oe=-1;function wr(r){return r==null}function sr(r){return r===0&&1/r==-1/0}function zc(r){return typeof r=="number"&&Number.isInteger(r)&&!sr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function ko(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function pe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ra(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ot(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(t){return new Do(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Do{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ut(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pa("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Qc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if($(!!r),typeof r=="string"){let t=0;const e=Qc.exec(r);if($(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function de(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
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
 */function $s(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function zs(r){const t=r.mapValue.fields.__previous_value__;return $s(t)?zs(t):t}function mn(r){const t=te(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Wc{constructor(t,e,n,i,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class gn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Yn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$s(r)?4:Xc(r)?9007199254740991:Hc(r)?10:11:L()}function Nt(r,t){if(r===t)return!0;const e=fe(r);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return mn(r).isEqual(mn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=te(i.timestampValue),c=te(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return de(i.bytesValue).isEqual(de(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=J(i.doubleValue),c=J(o.doubleValue);return a===c?sr(a)===sr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Pe(r.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ko(a)!==ko(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Nt(a[l],c[l])))return!1;return!0}(r,t);default:return L()}}function _n(r,t){return(r.values||[]).find(e=>Nt(e,t))!==void 0}function Ve(r,t){if(r===t)return 0;const e=fe(r),n=fe(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=J(o.integerValue||o.doubleValue),l=J(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,t);case 3:return No(r.timestampValue,t.timestampValue);case 4:return No(mn(r),mn(t));case 5:return K(r.stringValue,t.stringValue);case 6:return function(o,a){const c=de(o),l=de(a);return c.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=K(c[d],l[d]);if(p!==0)return p}return K(c.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=K(J(o.latitude),J(a.latitude));return c!==0?c:K(J(o.longitude),J(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return bo(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,l,d,p;const T=o.fields||{},w=a.fields||{},P=(c=T.value)===null||c===void 0?void 0:c.arrayValue,V=(l=w.value)===null||l===void 0?void 0:l.arrayValue,M=K(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=V==null?void 0:V.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:bo(P,V)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Yn.mapValue&&a===Yn.mapValue)return 0;if(o===Yn.mapValue)return 1;if(a===Yn.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let T=0;T<l.length&&T<p.length;++T){const w=K(l[T],p[T]);if(w!==0)return w;const P=Ve(c[l[T]],d[p[T]]);if(P!==0)return P}return K(l.length,p.length)}(r.mapValue,t.mapValue);default:throw L()}}function No(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=te(r),n=te(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function bo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ve(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function Ce(r){return ys(r)}function ys(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return de(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ys(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ys(e.fields[a])}`;return i+"}"}(r.mapValue):L()}function Fo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ts(r){return!!r&&"integerValue"in r}function Qs(r){return!!r&&"arrayValue"in r}function xo(r){return!!r&&"nullValue"in r}function Lo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tr(r){return!!r&&"mapValue"in r}function Hc(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return pe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=hn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Xc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=at.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=hn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];tr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){pe(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new It(hn(this.value))}}function Va(r){const t=[];return pe(r.fields,(e,n)=>{const i=new at([e]);if(tr(n)){const o=Va(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Rt(t)}/**
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
 */class _t{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,U.min(),U.min(),U.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,U.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,U.min(),U.min(),It.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,U.min(),U.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ir{constructor(t,e){this.position=t,this.inclusive=e}}function Uo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(a.referenceValue),e.key):n=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Oo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Nt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ca{}class tt extends Ca{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Zc(t,e,n):e==="array-contains"?new nh(t,n):e==="in"?new rh(t,n):e==="not-in"?new sh(t,n):e==="array-contains-any"?new ih(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new th(t,n):new eh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Ca{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return Sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sa(r){return r.op==="and"}function Ma(r){return Jc(r)&&Sa(r)}function Jc(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function vs(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(Ma(r))return r.filters.map(t=>vs(t)).join(",");{const t=r.filters.map(e=>vs(e)).join(",");return`${r.op}(${t})`}}function ka(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&Nt(n.value,i.value)}(r,t):r instanceof Ct?function(n,i){return i instanceof Ct&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&ka(a,i.filters[c]),!0):!1}(r,t):void L()}function Da(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(Da).join(" ,")+"}"}(r):"Filter"}class Zc extends tt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class th extends tt{constructor(t,e){super(t,"in",e),this.keys=Na("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class eh extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Na("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Na(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class nh extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&_n(e.arrayValue,this.value)}}class rh extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class sh extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_n(this.value.arrayValue,e)}}class ih extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>_n(this.value.arrayValue,n))}}/**
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
 */class oh{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Bo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new oh(r,t,e,n,i,o,a)}function Ws(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>vs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ce(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ce(n)).join(",")),t.ue=e}return t.ue}function Hs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Yc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ka(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Oo(r.startAt,t.startAt)&&Oo(r.endAt,t.endAt)}function Es(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Le{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ah(r,t,e,n,i,o,a,c){return new Le(r,t,e,n,i,o,a,c)}function Ar(r){return new Le(r)}function qo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ba(r){return r.collectionGroup!==null}function ln(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ut(at.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new yn(o,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new yn(at.keyField(),n))}return t.ce}function Mt(r){const t=O(r);return t.le||(t.le=uh(t,ln(r))),t.le}function uh(r,t){if(r.limitType==="F")return Bo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new yn(i.field,o)});const e=r.endAt?new ir(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ir(r.startAt.position,r.startAt.inclusive):null;return Bo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Is(r,t){const e=r.filters.concat([t]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function or(r,t,e){return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Rr(r,t){return Hs(Mt(r),Mt(t))&&r.limitType===t.limitType}function Fa(r){return`${Ws(Mt(r))}|lt:${r.limitType}`}function Ee(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Da(i)).join(", ")}]`),wr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ce(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ce(i)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function Pr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of ln(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,l){const d=Uo(a,c,l);return a.inclusive?d<=0:d<0}(n.startAt,ln(n),i)||n.endAt&&!function(a,c,l){const d=Uo(a,c,l);return a.inclusive?d>=0:d>0}(n.endAt,ln(n),i))}(r,t)}function ch(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xa(r){return(t,e)=>{let n=!1;for(const i of ln(r)){const o=hh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function hh(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const l=a.data.field(o),d=c.data.field(o);return l!==null&&d!==null?Ve(l,d):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
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
 */class Ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ra(this.inner)}size(){return this.innerSize}}/**
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
 */const lh=new X(x.comparator);function qt(){return lh}const La=new X(x.comparator);function an(...r){let t=La;for(const e of r)t=t.insert(e.key,e);return t}function Ua(r){let t=La;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ce(){return dn()}function Oa(){return dn()}function dn(){return new Ue(r=>r.toString(),(r,t)=>r.isEqual(t))}const dh=new X(x.comparator),fh=new ut(x.comparator);function B(...r){let t=fh;for(const e of r)t=t.add(e);return t}const ph=new ut(K);function mh(){return ph}/**
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
 */function Xs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function Ba(r){return{integerValue:""+r}}function gh(r,t){return zc(t)?Ba(t):Xs(r,t)}/**
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
 */class Vr{constructor(){this._=void 0}}function _h(r,t,e){return r instanceof ar?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$s(o)&&(o=zs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):r instanceof Se?ja(r,t):r instanceof Me?Ka(r,t):function(i,o){const a=qa(i,o),c=jo(a)+jo(i.Pe);return Ts(a)&&Ts(i.Pe)?Ba(c):Xs(i.serializer,c)}(r,t)}function yh(r,t,e){return r instanceof Se?ja(r,t):r instanceof Me?Ka(r,t):e}function qa(r,t){return r instanceof ur?function(n){return Ts(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class ar extends Vr{}class Se extends Vr{constructor(t){super(),this.elements=t}}function ja(r,t){const e=Ga(t);for(const n of r.elements)e.some(i=>Nt(i,n))||e.push(n);return{arrayValue:{values:e}}}class Me extends Vr{constructor(t){super(),this.elements=t}}function Ka(r,t){let e=Ga(t);for(const n of r.elements)e=e.filter(i=>!Nt(i,n));return{arrayValue:{values:e}}}class ur extends Vr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function jo(r){return J(r.integerValue||r.doubleValue)}function Ga(r){return Qs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class $a{constructor(t,e){this.field=t,this.transform=e}}function Th(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Se&&i instanceof Se||n instanceof Me&&i instanceof Me?Pe(n.elements,i.elements,Nt):n instanceof ur&&i instanceof ur?Nt(n.Pe,i.Pe):n instanceof ar&&i instanceof ar}(r.transform,t.transform)}class vh{constructor(t,e){this.version=t,this.transformResults=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Cr{}function za(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ys(r.key,Pt.none()):new Rn(r.key,r.data,Pt.none());{const e=r.data,n=It.empty();let i=new ut(at.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new se(r.key,n,new Rt(i.toArray()),Pt.none())}}function Eh(r,t,e){r instanceof Rn?function(i,o,a){const c=i.value.clone(),l=Go(i.fieldTransforms,o,a.transformResults);c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof se?function(i,o,a){if(!er(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Go(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(Qa(i)),l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fn(r,t,e,n){return r instanceof Rn?function(o,a,c,l){if(!er(o.precondition,a))return c;const d=o.value.clone(),p=$o(o.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(o,a,c,l){if(!er(o.precondition,a))return c;const d=$o(o.fieldTransforms,l,a),p=a.data;return p.setAll(Qa(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,a,c){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function Ih(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=qa(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function Ko(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Pe(n,i,(o,a)=>Th(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Rn extends Cr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class se extends Cr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Go(r,t,e){const n=new Map;$(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,yh(a,c,e[i]))}return n}function $o(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,_h(o,a,t))}return n}class Ys extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wh extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ah{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Eh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Oa();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const l=za(a,c);l!==null&&n.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,n)=>Ko(e,n))&&Pe(this.baseMutations,t.baseMutations,(e,n)=>Ko(e,n))}}class Js{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){$(t.mutations.length===n.length);let i=function(){return dh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Js(t,e,n,i)}}/**
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
 */class Rh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ph{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Z,q;function Vh(r){switch(r){default:return L();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Wa(r){if(r===void 0)return Bt("GRPC error has no .code"),S.UNKNOWN;switch(r){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return L()}}(q=Z||(Z={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ch(){return new TextEncoder}/**
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
 */const Sh=new he([4294967295,4294967295],0);function zo(r){const t=Ch().encode(r),e=new _a;return e.update(t),new Uint8Array(e.digest())}function Qo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,n],0),new he([i,o],0)]}class Zs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(n<0)throw new un(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(he.fromNumber(n)));return i.compare(Sh)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=zo(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Zs(o,i,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=zo(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Sr(U.min(),i,new X(K),qt(),B())}}class Pn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Pn(n,e,B(),B(),B())}}/**
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
 */class nr{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Ha{constructor(t,e){this.targetId=t,this.me=e}}class Xa{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.fe=0,this.ge=Xo(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),n=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new Pn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Xo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Mh{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Ho(),this.Qe=new X(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Es(o))if(n===0){const a=new x(o.path);this.Ue(e,a,_t.newNoDocument(a,U.min()))}else $(n===1);else{const a=this.Ye(e);if(a!==n){const c=this.Ze(t),l=c?this.Xe(c,t,a):1;if(l!==0){this.je(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=de(n).toUint8Array()}catch(l){if(l instanceof Pa)return Re("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zs(a,i,o)}catch(l){return Re(l instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Es(c.target)){const l=new x(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,_t.newNoDocument(l,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Sr(t,e,this.Qe,this.ke,n);return this.ke=qt(),this.qe=Ho(),this.Qe=new X(K),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Wo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Wo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ho(){return new X(x.comparator)}function Xo(){return new X(x.comparator)}const kh={asc:"ASCENDING",desc:"DESCENDING"},Dh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nh={and:"AND",or:"OR"};class bh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ws(r,t){return r.useProto3Json||wr(t)?t:{value:t}}function cr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ya(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Fh(r,t){return cr(r,t.toTimestamp())}function kt(r){return $(!!r),U.fromTimestamp(function(e){const n=te(e);return new et(n.seconds,n.nanos)}(r))}function ti(r,t){return As(r,t).canonicalString()}function As(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ja(r){const t=H.fromString(r);return $(ru(t)),t}function Rs(r,t){return ti(r.databaseId,t.path)}function fs(r,t){const e=Ja(t);if(e.get(1)!==r.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(tu(e))}function Za(r,t){return ti(r.databaseId,t)}function xh(r){const t=Ja(r);return t.length===4?H.emptyPath():tu(t)}function Ps(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tu(r){return $(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Yo(r,t,e){return{name:Rs(r,t),fields:e.value.mapValue.fields}}function Lh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?($(p===void 0||typeof p=="string"),ht.fromBase64String(p||"")):($(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ht.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Wa(d.code);return new N(p,d.message||"")}(a);e=new Xa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=fs(r,n.document.name),o=kt(n.document.updateTime),a=n.document.createTime?kt(n.document.createTime):U.min(),c=new It({mapValue:{fields:n.document.fields}}),l=_t.newFoundDocument(i,o,a,c),d=n.targetIds||[],p=n.removedTargetIds||[];e=new nr(d,p,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=fs(r,n.document),o=n.readTime?kt(n.readTime):U.min(),a=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new nr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=fs(r,n.document),o=n.removedTargetIds||[];e=new nr([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Ph(i,o),c=n.targetId;e=new Ha(c,a)}}return e}function Uh(r,t){let e;if(t instanceof Rn)e={update:Yo(r,t.key,t.value)};else if(t instanceof Ys)e={delete:Rs(r,t.key)};else if(t instanceof se)e={update:Yo(r,t.key,t.data),updateMask:Qh(t.fieldMask)};else{if(!(t instanceof wh))return L();e={verify:Rs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Se)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Me)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Fh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Oh(r,t){return r&&r.length>0?($(t!==void 0),r.map(e=>function(i,o){let a=i.updateTime?kt(i.updateTime):kt(o);return a.isEqual(U.min())&&(a=kt(o)),new vh(a,i.transformResults||[])}(e,t))):[]}function Bh(r,t){return{documents:[Za(r,t.path)]}}function qh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Za(r,i);const o=function(d){if(d.length!==0)return nu(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:Ie(w.field),direction:Gh(w.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ws(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function jh(r){let t=xh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){$(n===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(T){const w=eu(T);return w instanceof Ct&&Ma(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(w=>function(V){return new yn(we(V.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,wr(w)?null:w}(e.limit));let l=null;e.startAt&&(l=function(T){const w=!!T.before,P=T.values||[];return new ir(P,w)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const w=!T.before,P=T.values||[];return new ir(P,w)}(e.endAt)),ah(t,i,a,o,c,"F",l,d)}function Kh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function eu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=we(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return tt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(we(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>eu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function Gh(r){return kh[r]}function $h(r){return Dh[r]}function zh(r){return Nh[r]}function Ie(r){return{fieldPath:r.canonicalString()}}function we(r){return at.fromServerFormat(r.fieldPath)}function nu(r){return r instanceof tt?function(e){if(e.op==="=="){if(Lo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(xo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(xo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:$h(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(i=>nu(i));return n.length===1?n[0]:{compositeFilter:{op:zh(e.op),filters:n}}}(r):L()}function Qh(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ru(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Yt{constructor(t,e,n,i,o=U.min(),a=U.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Wh{constructor(t){this.ct=t}}function Hh(r){const t=jh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?or(t,t.limit,"L"):t}/**
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
 */class Xh{constructor(){this.un=new Yh}addToCollectionParentIndex(t,e){return this.un.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(Zt.min())}updateCollectionGroup(t,e,n){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class Yh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ut(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ut(H.comparator)).toArray()}}/**
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
 */class ke{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ke(0)}static kn(){return new ke(-1)}}/**
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
 */class Jh{constructor(){this.changes=new Ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?k.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Zh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class tl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&fn(n.mutation,i,Rt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const i=ce();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=an();return o.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ce();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=qt();const a=dn(),c=function(){return dn()}();return e.forEach((l,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof se)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),fn(p.mutation,d,p.mutation.getFieldMask(),et.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var T;return c.set(d,new Zh(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const n=dn();let i=new X((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let p=n.get(l)||Rt.empty();p=c.applyToLocalView(d,p),n.set(l,p);const T=(i.get(c.batchId)||B()).add(l);i=i.insert(c.batchId,T)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,T=Oa();p.forEach(w=>{if(!o.has(w)){const P=za(e.get(w),n.get(w));P!==null&&T.set(w,P),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return k.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ba(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):k.resolve(ce());let c=-1,l=o;return a.next(d=>k.forEach(d,(p,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(p)?k.resolve():this.remoteDocumentCache.getEntry(t,p).next(w=>{l=l.insert(p,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,l,d,B())).next(p=>({batchId:c,changes:Ua(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=an();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=an();return this.indexManager.getCollectionParents(t,o).next(c=>k.forEach(c,l=>{const d=function(T,w){return new Le(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(p=>{p.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))});let c=an();return a.forEach((l,d)=>{const p=o.get(l);p!==void 0&&fn(p.mutation,d,Rt.empty(),et.now()),Pr(e,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class el{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return k.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Hh(i.bundledQuery),readTime:kt(i.readTime)}}(e)),k.resolve()}}/**
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
 */class nl{constructor(){this.overlays=new X(x.comparator),this.Ir=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ce();return k.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),k.resolve()}getOverlaysForCollection(t,e,n){const i=ce(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>n&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=ce(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=ce(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return k.resolve(c)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Rh(e,n));let o=this.Ir.get(e);o===void 0&&(o=B(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
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
 */class rl{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}}/**
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
 */class ei{constructor(){this.Tr=new ut(rt.Er),this.dr=new ut(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new rt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new x(new H([])),n=new rt(e,t),i=new rt(e,t+1),o=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new H([])),n=new rt(e,t),i=new rt(e,t+1);let o=B();return this.dr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new rt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
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
 */class sl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(rt.Er)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ah(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],a=>{const c=this.Dr(a.wr);o.push(c)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ut(K);return e.forEach(i=>{const o=new rt(i,0),a=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{n=n.add(c.wr)})}),k.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const a=new rt(new x(o),0);let c=new ut(K);return this.br.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){$(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return k.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new rt(e,0),i=this.br.firstAfterOrEqual(n);return k.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class il{constructor(t){this.Mr=t,this.docs=function(){return new X(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return k.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=qt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),k.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=qt();const a=e.path,c=new x(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||jc(qc(p),n)<=0||(i.has(p.key)||Pr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}Or(t,e){return k.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new ol(this)}getSize(t){return k.resolve(this.size)}}class ol extends Jh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),k.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class al{constructor(t){this.persistence=t,this.Nr=new Ue(e=>Ws(e),Hs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ei,this.targetCount=0,this.kr=ke.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),k.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.Kn(e),k.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return k.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),k.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return k.resolve(n)}containsKey(t,e){return k.resolve(this.Br.containsKey(e))}}/**
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
 */class ul{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Gs(0),this.Kr=!1,this.Kr=!0,this.$r=new rl,this.referenceDelegate=t(this),this.Ur=new al(this),this.indexManager=new Xh,this.remoteDocumentCache=function(i){return new il(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Wh(e),this.Gr=new el(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new sl(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){F("MemoryPersistence","Starting transaction:",t);const i=new cl(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return k.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class cl extends Gc{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Jr=new ei,this.Yr=null}static Zr(t){return new ni(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),k.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),k.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,n=>{const i=x.fromPath(n);return this.ei(t,i).next(o=>{o||e.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return k.or([()=>k.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ri{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ri(t,e.fromCache,n,i)}}/**
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
 */class hl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ll{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sc()?8:$c(Mc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new hl;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(sn()<=Xt.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(sn()<=Xt.DEBUG&&F("QueryEngine","Query:",Ee(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(sn()<=Xt.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):k.resolve())}Yi(t,e){if(qo(e))return k.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=or(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=B(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.ts(e,c);return this.ns(e,d,a,l.readTime)?this.Yi(t,or(e,null,"F")):this.rs(t,d,e,l)}))})))}Zi(t,e,n,i){return qo(e)||i.isEqual(U.min())?k.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,i)?k.resolve(null):(sn()<=Xt.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.rs(t,a,e,Bc(i,-1)).next(c=>c))})}ts(t,e){let n=new ut(xa(t));return e.forEach((i,o)=>{Pr(t,o)&&(n=n.add(o))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return sn()<=Xt.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class dl{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new X(K),this._s=new Ue(o=>Ws(o),Hs),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function fl(r,t,e,n){return new dl(r,t,e,n)}async function su(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let l=B();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return e.localDocuments.getDocuments(n,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function pl(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const T=d.batch,w=T.keys();let P=k.resolve();return w.forEach(V=>{P=P.next(()=>p.getEntry(l,V)).next(M=>{const C=d.docVersions.get(V);$(C!==null),M.version.compareTo(C)<0&&(T.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=B();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function iu(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ml(r,t){const e=O(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((p,T)=>{const w=i.get(T);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,T)));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(ht.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,n)),i=i.insert(T,P),function(M,C,b){return M.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(w,P,p)&&c.push(e.Ur.updateTargetData(o,P))});let l=qt(),d=B();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(gl(o,a,t.documentUpdates).next(p=>{l=p.Ps,d=p.Is})),!n.isEqual(U.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return k.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(e.os=i,o))}function gl(r,t,e){let n=B(),i=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=qt();return e.forEach((c,l)=>{const d=o.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function _l(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function yl(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(o=>o?(i=o,k.resolve(i)):e.Ur.allocateTargetId(n).next(a=>(i=new Yt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Vs(r,t,e){const n=O(r),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!An(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function Jo(r,t,e){const n=O(r);let i=U.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const T=O(l),w=T._s.get(p);return w!==void 0?k.resolve(T.os.get(w)):T.Ur.getTargetData(d,p)}(n,a,Mt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{o=l})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?i:U.min(),e?o:B())).next(c=>(Tl(n,ch(t),c),{documents:c,Ts:o})))}function Tl(r,t,e){let n=r.us.get(t)||U.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Zo{constructor(){this.activeTargetIds=mh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vl{constructor(){this.so=new Zo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class El{_o(t){}shutdown(){}}/**
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
 */class ta{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jn=null;function ps(){return Jn===null?Jn=function(){return 268435456+Math.round(2147483648*Math.random())}():Jn++,"0x"+Jn.toString(16)}/**
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
 */const Il={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wl{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const mt="WebChannelConnection";class Al extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,a){const c=ps(),l=this.xo(e,n.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${c}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,l,d,i).then(p=>(F("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Re("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}Lo(e,n,i,o,a,c){return this.Mo(e,n,i,o,a)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const i=Il[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=ps();return new Promise((a,c)=>{const l=new ya;l.setWithCredentials(!0),l.listenOnce(Ta.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zn.NO_ERROR:const p=l.getResponseJson();F(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Zn.TIMEOUT:F(mt,`RPC '${t}' ${o} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const T=l.getStatus();if(F(mt,`RPC '${t}' ${o} failed with status:`,T,"response text:",l.getResponseText()),T>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const V=function(C){const b=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(b)>=0?b:S.UNKNOWN}(P.status);c(new N(V,P.message))}else c(new N(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{F(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);F(mt,`RPC '${t}' ${o} sending request:`,i),l.send(e,"POST",d,n,15)})}Bo(t,e,n){const i=ps(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ia(),c=Ea(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const p=o.join("");F(mt,`Creating RPC '${t}' stream ${i}: ${p}`,l);const T=a.createWebChannel(p,l);let w=!1,P=!1;const V=new wl({Io:C=>{P?F(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(w||(F(mt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),F(mt,`RPC '${t}' stream ${i} sending:`,C),T.send(C))},To:()=>T.close()}),M=(C,b,G)=>{C.listen(b,Q=>{try{G(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return M(T,on.EventType.OPEN,()=>{P||(F(mt,`RPC '${t}' stream ${i} transport opened.`),V.yo())}),M(T,on.EventType.CLOSE,()=>{P||(P=!0,F(mt,`RPC '${t}' stream ${i} transport closed`),V.So())}),M(T,on.EventType.ERROR,C=>{P||(P=!0,Re(mt,`RPC '${t}' stream ${i} transport errored:`,C),V.So(new N(S.UNAVAILABLE,"The operation could not be completed")))}),M(T,on.EventType.MESSAGE,C=>{var b;if(!P){const G=C.data[0];$(!!G);const Q=G,nt=Q.error||((b=Q[0])===null||b===void 0?void 0:b.error);if(nt){F(mt,`RPC '${t}' stream ${i} received error:`,nt);const Ft=nt.status;let st=function(_){const y=Z[_];if(y!==void 0)return Wa(y)}(Ft),E=nt.message;st===void 0&&(st=S.INTERNAL,E="Unknown error status: "+Ft+" with message "+nt.message),P=!0,V.So(new N(st,E)),T.close()}else F(mt,`RPC '${t}' stream ${i} received:`,G),V.bo(G)}}),M(c,va.STAT_EVENT,C=>{C.stat===_s.PROXY?F(mt,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===_s.NOPROXY&&F(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function ms(){return typeof document<"u"?document:null}/**
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
 */function Mr(r){return new bh(r,!0)}/**
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
 */class ou{constructor(t,e,n=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class au{constructor(t,e,n,i,o,a,c,l){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ou(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rl extends au{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Lh(this.serializer,t),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?kt(a.readTime):U.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Ps(this.serializer),e.addTarget=function(o,a){let c;const l=a.target;if(c=Es(l)?{documents:Bh(o,l)}:{query:qh(o,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ya(o,a.resumeToken);const d=ws(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=cr(o,a.snapshotVersion.toTimestamp());const d=ws(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=Kh(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Ps(this.serializer),e.removeTarget=t,this.a_(e)}}class Pl extends au{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return $(!!t.streamToken),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){$(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Oh(t.writeResults,t.commitTime),n=kt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Ps(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Uh(this.serializer,n))};this.a_(e)}}/**
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
 */class Vl extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,As(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,As(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bt(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Sl{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{me(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=O(l);d.L_.add(4),await Vn(d),d.q_.set("Unknown"),d.L_.delete(4),await kr(d)}(this))})}),this.q_=new Cl(n,i)}}async function kr(r){if(me(r))for(const t of r.B_)await t(!0)}async function Vn(r){for(const t of r.B_)await t(!1)}function uu(r,t){const e=O(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ai(e)?oi(e):Oe(e).r_()&&ii(e,t))}function si(r,t){const e=O(r),n=Oe(e);e.N_.delete(t),n.r_()&&cu(e,t),e.N_.size===0&&(n.r_()?n.o_():me(e)&&e.q_.set("Unknown"))}function ii(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Oe(r).A_(t)}function cu(r,t){r.Q_.xe(t),Oe(r).R_(t)}function oi(r){r.Q_=new Mh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Oe(r).start(),r.q_.v_()}function ai(r){return me(r)&&!Oe(r).n_()&&r.N_.size>0}function me(r){return O(r).L_.size===0}function hu(r){r.Q_=void 0}async function Ml(r){r.q_.set("Online")}async function kl(r){r.N_.forEach((t,e)=>{ii(r,t)})}async function Dl(r,t){hu(r),ai(r)?(r.q_.M_(t),oi(r)):r.q_.set("Unknown")}async function Nl(r,t,e){if(r.q_.set("Online"),t instanceof Xa&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(r,t)}catch(n){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await hr(r,n)}else if(t instanceof nr?r.Q_.Ke(t):t instanceof Ha?r.Q_.He(t):r.Q_.We(t),!e.isEqual(U.min()))try{const n=await iu(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=o.N_.get(l);if(!p)return;o.N_.set(l,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),cu(o,l);const T=new Yt(p.target,l,d,p.sequenceNumber);ii(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){F("RemoteStore","Failed to raise snapshot:",n),await hr(r,n)}}async function hr(r,t,e){if(!An(t))throw t;r.L_.add(1),await Vn(r),r.q_.set("Offline"),e||(e=()=>iu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await kr(r)})}function lu(r,t){return t().catch(e=>hr(r,e,t))}async function Dr(r){const t=O(r),e=ee(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;bl(t);)try{const i=await _l(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,Fl(t,i)}catch(i){await hr(t,i)}du(t)&&fu(t)}function bl(r){return me(r)&&r.O_.length<10}function Fl(r,t){r.O_.push(t);const e=ee(r);e.r_()&&e.V_&&e.m_(t.mutations)}function du(r){return me(r)&&!ee(r).n_()&&r.O_.length>0}function fu(r){ee(r).start()}async function xl(r){ee(r).p_()}async function Ll(r){const t=ee(r);for(const e of r.O_)t.m_(e.mutations)}async function Ul(r,t,e){const n=r.O_.shift(),i=Js.from(n,t,e);await lu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Dr(r)}async function Ol(r,t){t&&ee(r).V_&&await async function(n,i){if(function(a){return Vh(a)&&a!==S.ABORTED}(i.code)){const o=n.O_.shift();ee(n).s_(),await lu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Dr(n)}}(r,t),du(r)&&fu(r)}async function ea(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const n=me(e);e.L_.add(3),await Vn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await kr(e)}async function Bl(r,t){const e=O(r);t?(e.L_.delete(2),await kr(e)):t||(e.L_.add(2),await Vn(e),e.q_.set("Unknown"))}function Oe(r){return r.K_||(r.K_=function(e,n,i){const o=O(e);return o.w_(),new Rl(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Ml.bind(null,r),Ro:kl.bind(null,r),mo:Dl.bind(null,r),d_:Nl.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),ai(r)?oi(r):r.q_.set("Unknown")):(await r.K_.stop(),hu(r))})),r.K_}function ee(r){return r.U_||(r.U_=function(e,n,i){const o=O(e);return o.w_(),new Pl(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xl.bind(null,r),mo:Ol.bind(null,r),f_:Ll.bind(null,r),g_:Ul.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Dr(r)):(await r.U_.stop(),r.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class ui{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new ui(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(r,t){if(Bt("AsyncQueue",`${t}: ${r}`),An(r))return new N(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ae{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=an(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new Ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ae;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class na{constructor(){this.W_=new X(x.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class De{constructor(t,e,n,i,o,a,c,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new De(t,e,Ae.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class ql{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class jl{constructor(){this.queries=ra(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=O(e),o=i.queries;i.queries=ra(),o.forEach((a,c)=>{for(const l of c.j_)l.onError(n)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function ra(){return new Ue(r=>Fa(r),Rr)}async function hi(r,t){const e=O(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new ql,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ci(a,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&di(e)}async function li(r,t){const e=O(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Kl(r,t){const e=O(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(i)&&(n=!0);a.z_=i}}n&&di(e)}function Gl(r,t,e){const n=O(r),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function di(r){r.Y_.forEach(t=>{t.next()})}var Cs,sa;(sa=Cs||(Cs={})).ea="default",sa.Cache="cache";class fi{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new De(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Cs.Cache}}/**
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
 */class pu{constructor(t){this.key=t}}class mu{constructor(t){this.key=t}}class $l{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=xa(t),this.Ra=new Ae(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new na,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,T)=>{const w=i.get(p),P=Pr(this.query,T)?T:null,V=!!w&&this.mutatedKeys.has(w.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;w&&P?w.data.isEqual(P.data)?V!==M&&(n.track({type:3,doc:P}),C=!0):this.ga(w,P)||(n.track({type:2,doc:P}),C=!0,(l&&this.Aa(P,l)>0||d&&this.Aa(P,d)<0)&&(c=!0)):!w&&P?(n.track({type:0,doc:P}),C=!0):w&&!P&&(n.track({type:1,doc:w}),C=!0,(l||d)&&(c=!0)),C&&(P?(a=a.add(P),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Ra:a,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,T)=>function(P,V){const M=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(P)-M(V)}(p.type,T.type)||this.Aa(p.doc,T.doc)),this.pa(n),i=i!=null&&i;const c=e&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new De(this.query,t.Ra,o,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new na,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new mu(n))}),this.da.forEach(n=>{t.has(n)||e.push(new pu(n))}),e}ba(t){this.Ta=t.Ts,this.da=B();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return De.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ql{constructor(t){this.key=t,this.va=!1}}class Wl{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ue(c=>Fa(c),Rr),this.Ma=new Map,this.xa=new Set,this.Oa=new X(x.comparator),this.Na=new Map,this.La=new ei,this.Ba={},this.ka=new Map,this.qa=ke.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hl(r,t,e=!0){const n=Eu(r);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await gu(n,t,e,!0),i}async function Xl(r,t){const e=Eu(r);await gu(e,t,!0,!1)}async function gu(r,t,e,n){const i=await yl(r.localStore,Mt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Yl(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&uu(r.remoteStore,i),c}async function Yl(r,t,e,n,i){r.Ka=(T,w,P)=>async function(M,C,b,G){let Q=C.view.ma(b);Q.ns&&(Q=await Jo(M.localStore,C.query,!1).then(({documents:E})=>C.view.ma(E,Q)));const nt=G&&G.targetChanges.get(C.targetId),Ft=G&&G.targetMismatches.get(C.targetId)!=null,st=C.view.applyChanges(Q,M.isPrimaryClient,nt,Ft);return oa(M,C.targetId,st.wa),st.snapshot}(r,T,w,P);const o=await Jo(r.localStore,t,!0),a=new $l(t,o.Ts),c=a.ma(o.documents),l=Pn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,l);oa(r,e,d.wa);const p=new zl(t,e,a);return r.Fa.set(t,p),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function Jl(r,t,e){const n=O(r),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(a=>!Rr(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Vs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&si(n.remoteStore,i.targetId),Ss(n,i.targetId)}).catch(wn)):(Ss(n,i.targetId),await Vs(n.localStore,i.targetId,!0))}async function Zl(r,t){const e=O(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),si(e.remoteStore,n.targetId))}async function td(r,t,e){const n=ad(r);try{const i=await function(a,c){const l=O(a),d=et.now(),p=c.reduce((P,V)=>P.add(V.key),B());let T,w;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let V=qt(),M=B();return l.cs.getEntries(P,p).next(C=>{V=C,V.forEach((b,G)=>{G.isValidDocument()||(M=M.add(b))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,V)).next(C=>{T=C;const b=[];for(const G of c){const Q=Ih(G,T.get(G.key).overlayedDocument);Q!=null&&b.push(new se(G.key,Q,Va(Q.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,b,c)}).next(C=>{w=C;const b=C.applyToLocalDocumentSet(T,M);return l.documentOverlayCache.saveOverlays(P,C.batchId,b)})}).then(()=>({batchId:w.batchId,changes:Ua(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new X(K)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(n,i.batchId,e),await Cn(n,i.changes),await Dr(n.remoteStore)}catch(i){const o=ci(i,"Failed to persist write");e.reject(o)}}async function _u(r,t){const e=O(r);try{const n=await ml(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?$(a.va):i.removedDocuments.size>0&&($(a.va),a.va=!1))}),await Cn(e,n,t)}catch(n){await wn(n)}}function ia(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=O(a);l.onlineState=c;let d=!1;l.queries.forEach((p,T)=>{for(const w of T.j_)w.Z_(c)&&(d=!0)}),d&&di(l)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ed(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let a=new X(x.comparator);a=a.insert(o,_t.newNoDocument(o,U.min()));const c=B().add(o),l=new Sr(U.min(),new Map,new X(K),a,c);await _u(n,l),n.Oa=n.Oa.remove(o),n.Na.delete(t),pi(n)}else await Vs(n.localStore,t,!1).then(()=>Ss(n,t,e)).catch(wn)}async function nd(r,t){const e=O(r),n=t.batch.batchId;try{const i=await pl(e.localStore,t);Tu(e,n,null),yu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Cn(e,i)}catch(i){await wn(i)}}async function rd(r,t,e){const n=O(r);try{const i=await function(a,c){const l=O(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(T=>($(T!==null),p=T.keys(),l.mutationQueue.removeMutationBatch(d,T))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(n.localStore,t);Tu(n,t,e),yu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Cn(n,i)}catch(i){await wn(i)}}function yu(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function Tu(r,t,e){const n=O(r);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function Ss(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||vu(r,n)})}function vu(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(si(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),pi(r))}function oa(r,t,e){for(const n of e)n instanceof pu?(r.La.addReference(n.key,t),sd(r,n)):n instanceof mu?(F("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||vu(r,n.key)):L()}function sd(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(F("SyncEngine","New document in limbo: "+e),r.xa.add(n),pi(r))}function pi(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new x(H.fromString(t)),n=r.qa.next();r.Na.set(n,new Ql(e)),r.Oa=r.Oa.insert(e,n),uu(r.remoteStore,new Yt(Mt(Ar(e.path)),n,"TargetPurposeLimboResolution",Gs.oe))}}async function Cn(r,t,e){const n=O(r),i=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{a.push(n.Ka(l,t,e).then(d=>{var p;if((d||e)&&n.isPrimaryClient){const T=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(l.targetId,T?"current":"not-current")}if(d){i.push(d);const T=ri.Wi(l.targetId,d);o.push(T)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(l,d){const p=O(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>k.forEach(d,w=>k.forEach(w.$i,P=>p.persistence.referenceDelegate.addReference(T,w.targetId,P)).next(()=>k.forEach(w.Ui,P=>p.persistence.referenceDelegate.removeReference(T,w.targetId,P)))))}catch(T){if(!An(T))throw T;F("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const w=T.targetId;if(!T.fromCache){const P=p.os.get(w),V=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(V);p.os=p.os.insert(w,M)}}}(n.localStore,o))}async function id(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const n=await su(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(l=>{l.reject(new N(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Cn(e,n.hs)}}function od(r,t){const e=O(r),n=e.Na.get(t);if(n&&n.va)return B().add(n.key);{let i=B();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function Eu(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=od.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ed.bind(null,t),t.Ca.d_=Kl.bind(null,t.eventManager),t.Ca.$a=Gl.bind(null,t.eventManager),t}function ad(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rd.bind(null,t),t}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return fl(this.persistence,new ll,t.initialUser,this.serializer)}Ga(t){return new ul(ni.Zr,this.serializer)}Wa(t){return new vl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class Ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ia(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=id.bind(null,this.syncEngine),await Bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jl}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),n=function(o){return new Al(o)}(t.databaseInfo);return function(o,a,c,l){return new Vl(o,a,c,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new Sl(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ia(this.syncEngine,e,0),function(){return ta.D()?new ta:new El}())}createSyncEngine(t,e){return function(i,o,a,c,l,d,p){const T=new Wl(i,o,a,c,l,d);return p&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=O(i);F("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Vn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ms.provider={build:()=>new Ms};/**
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
 */class mi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class ud{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Aa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ci(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function gs(r,t){r.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await su(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function aa(r,t){r.asyncQueue.verifyOperationInProgress();const e=await cd(r);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ea(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ea(t.remoteStore,i)),r._onlineComponents=t}async function cd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await gs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await gs(r,new lr)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await gs(r,new lr);return r._offlineComponents}async function Iu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await aa(r,r._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await aa(r,new Ms))),r._onlineComponents}function hd(r){return Iu(r).then(t=>t.syncEngine)}async function dr(r){const t=await Iu(r),e=t.eventManager;return e.onListen=Hl.bind(null,t.syncEngine),e.onUnlisten=Jl.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xl.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zl.bind(null,t.syncEngine),e}function ld(r,t,e={}){const n=new Ot;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){const p=new mi({next:w=>{p.Za(),a.enqueueAndForget(()=>li(o,T));const P=w.docs.has(c);!P&&w.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&l&&l.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new fi(Ar(c.path),p,{includeMetadataChanges:!0,_a:!0});return hi(o,T)}(await dr(r),r.asyncQueue,t,e,n)),n.promise}function dd(r,t,e={}){const n=new Ot;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){const p=new mi({next:w=>{p.Za(),a.enqueueAndForget(()=>li(o,T)),w.fromCache&&l.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new fi(c,p,{includeMetadataChanges:!0,_a:!0});return hi(o,T)}(await dr(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function wu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ua=new Map;/**
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
 */function Au(r,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function fd(r,t,e,n){if(t===!0&&n===!0)throw new N(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ca(r){if(!x.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ha(r){if(x.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Nr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function wt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Nr(r);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class la{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class br{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new la({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new la(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kc;switch(n.type){case"firstParty":return new Fc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ua.get(e);n&&(F("ComponentProvider","Removing Datastore"),ua.delete(e),n.terminate())}(this),Promise.resolve()}}function pd(r,t,e,n={}){var i;const o=(r=wt(r,br))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=gt.MOCK_USER;else{c=Vc(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(d)}r._authCredentials=new Dc(new wa(c,l))}}/**
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
 */class Gt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gt(this.firestore,t,this._query)}}class yt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Jt extends Gt{constructor(t,e,n){super(t,e,Ar(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new x(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function Dd(r,t,...e){if(r=Dt(r),Au("collection","path",t),r instanceof br){const n=H.fromString(t,...e);return ha(n),new Jt(r,null,n)}{if(!(r instanceof yt||r instanceof Jt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return ha(n),new Jt(r.firestore,null,n)}}function md(r,t,...e){if(r=Dt(r),arguments.length===1&&(t=Aa.newId()),Au("doc","path",t),r instanceof br){const n=H.fromString(t,...e);return ca(n),new yt(r,null,new x(n))}{if(!(r instanceof yt||r instanceof Jt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return ca(n),new yt(r.firestore,r instanceof Jt?r.converter:null,new x(n))}}/**
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
 */class da{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ou(this,"async_queue_retry"),this.Vu=()=>{const n=ms();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!An(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Bt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=ui.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function fa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class jt extends br{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new da,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new da(t),this._firestoreClient=void 0,await t}}}function Nd(r,t){const e=typeof r=="object"?r:Ac(),n=typeof r=="string"?r:"(default)",i=Rc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Pc("firestore");o&&pd(i,...o)}return i}function Fr(r){if(r._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gd(r),r._firestoreClient}function gd(r){var t,e,n;const i=r._freezeSettings(),o=function(c,l,d,p){return new Wc(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,wu(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ud(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(ht.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class xr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Sn{constructor(t){this._methodName=t}}/**
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
 */class $t{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */class gi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const _d=/^__.*__$/;class yd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}class Ru{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Lr{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Lr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return fr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Pu(this.Cu)&&_d.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Td{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Mr(t)}Qu(t,e,n,i=!1){return new Lr({Cu:t,methodName:e,qu:n,path:at.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ur(r){const t=r._freezeSettings(),e=Mr(r._databaseId);return new Td(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vu(r,t,e,n,i,o={}){const a=r.Qu(o.merge||o.mergeFields?2:0,t,e,i);Ti("Data must be an object, but it was:",a,n);const c=Su(n,a);let l,d;if(o.merge)l=new Rt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const w=ks(t,T,e);if(!a.contains(w))throw new N(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ku(p,w)||p.push(w)}l=new Rt(p),d=a.fieldTransforms.filter(T=>l.covers(T.field))}else l=null,d=a.fieldTransforms;return new yd(new It(c),l,d)}class Or extends Sn{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Or}}function Cu(r,t,e){return new Lr({Cu:3,qu:t.settings.qu,methodName:r._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class _i extends Sn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cu(this,t,!0),n=this.Ku.map(o=>ge(o,e)),i=new Se(n);return new $a(t.path,i)}isEqual(t){return t instanceof _i&&ga(this.Ku,t.Ku)}}class yi extends Sn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cu(this,t,!0),n=this.Ku.map(o=>ge(o,e)),i=new Me(n);return new $a(t.path,i)}isEqual(t){return t instanceof yi&&ga(this.Ku,t.Ku)}}function vd(r,t,e,n){const i=r.Qu(1,t,e);Ti("Data must be an object, but it was:",i,n);const o=[],a=It.empty();pe(n,(l,d)=>{const p=vi(t,l,e);d=Dt(d);const T=i.Nu(p);if(d instanceof Or)o.push(p);else{const w=ge(d,T);w!=null&&(o.push(p),a.set(p,w))}});const c=new Rt(o);return new Ru(a,c,i.fieldTransforms)}function Ed(r,t,e,n,i,o){const a=r.Qu(1,t,e),c=[ks(t,n,e)],l=[i];if(o.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(ks(t,o[w])),l.push(o[w+1]);const d=[],p=It.empty();for(let w=c.length-1;w>=0;--w)if(!ku(d,c[w])){const P=c[w];let V=l[w];V=Dt(V);const M=a.Nu(P);if(V instanceof Or)d.push(P);else{const C=ge(V,M);C!=null&&(d.push(P),p.set(P,C))}}const T=new Rt(d);return new Ru(p,T,a.fieldTransforms)}function Id(r,t,e,n=!1){return ge(e,r.Qu(n?4:3,t))}function ge(r,t){if(Mu(r=Dt(r)))return Ti("Unsupported field value:",t,r),Su(r,t);if(r instanceof Sn)return function(n,i){if(!Pu(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const c of n){let l=ge(c,i.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:cr(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cr(i.serializer,o)}}if(n instanceof $t)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ne)return{bytesValue:Ya(i.serializer,n._byteString)};if(n instanceof yt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ti(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof gi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Xs(c.serializer,l)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Nr(n)}`)}(r,t)}function Su(r,t){const e={};return Ra(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(r,(n,i)=>{const o=ge(i,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Mu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof $t||r instanceof Ne||r instanceof yt||r instanceof Sn||r instanceof gi)}function Ti(r,t,e){if(!Mu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Nr(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function ks(r,t,e){if((t=Dt(t))instanceof xr)return t._internalPath;if(typeof t=="string")return vi(r,t);throw fr("Field path arguments must be of type string or ",r,!1,void 0,e)}const wd=new RegExp("[~\\*/\\[\\]]");function vi(r,t,e){if(t.search(wd)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new xr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function fr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new N(S.INVALID_ARGUMENT,c+r+l)}function ku(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Du{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Br("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ad extends Du{data(){return super.data()}}function Br(r,t){return typeof t=="string"?vi(r,t):t instanceof xr?t._internalPath:t._delegate._internalPath}/**
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
 */function Nu(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ei{}class Ii extends Ei{}function bd(r,t,...e){let n=[];t instanceof Ei&&n.push(t),n=n.concat(e),function(o){const a=o.filter(l=>l instanceof wi).length,c=o.filter(l=>l instanceof qr).length;if(a>1||a>0&&c>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class qr extends Ii{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new qr(t,e,n)}_apply(t){const e=this._parse(t);return bu(t._query,e),new Gt(t.firestore,t.converter,Is(t._query,e))}_parse(t){const e=Ur(t.firestore);return function(o,a,c,l,d,p,T){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ma(T,p);const P=[];for(const V of T)P.push(pa(l,o,V));w={arrayValue:{values:P}}}else w=pa(l,o,T)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ma(T,p),w=Id(c,a,T,p==="in"||p==="not-in");return tt.create(d,p,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Fd(r,t,e){const n=t,i=Br("where",r);return qr._create(i,n,e)}class wi extends Ei{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const l of c)bu(a,l),a=Is(a,l)}(t._query,e),new Gt(t.firestore,t.converter,Is(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ai extends Ii{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ai(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yn(o,a)}(t._query,this._field,this._direction);return new Gt(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Le(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function xd(r,t="asc"){const e=t,n=Br("orderBy",r);return Ai._create(n,e)}class Ri extends Ii{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ri(t,e,n)}_apply(t){return new Gt(t.firestore,t.converter,or(t._query,this._limit,this._limitType))}}function Ld(r){return Ri._create("limit",r,"F")}function pa(r,t,e){if(typeof(e=Dt(e))=="string"){if(e==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ba(t)&&e.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!x.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Fo(r,new x(n))}if(e instanceof yt)return Fo(r,e._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nr(e)}.`)}function ma(r,t){if(!Array.isArray(r)||r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bu(r,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Rd{convertValue(t,e="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(de(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return pe(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>J(a.doubleValue));return new gi(o)}convertGeoPoint(t){return new $t(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mn(t));default:return null}}convertTimestamp(t){const e=te(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);$(ru(n));const i=new gn(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Fu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class cn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xu extends Du{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Br("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class rr extends xu{data(t={}){return super.data(t)}}class Lu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new rr(this._firestore,this._userDataWriter,n.key,n,new cn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const l=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Pd(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
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
 */function Ud(r){r=wt(r,yt);const t=wt(r.firestore,jt);return ld(Fr(t),r._key).then(e=>Uu(t,r,e))}class Pi extends Rd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Od(r){r=wt(r,Gt);const t=wt(r.firestore,jt),e=Fr(t),n=new Pi(t);return Nu(r._query),dd(e,r._query).then(i=>new Lu(t,n,r,i))}function Bd(r,t,e){r=wt(r,yt);const n=wt(r.firestore,jt),i=Fu(r.converter,t);return jr(n,[Vu(Ur(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Pt.none())])}function qd(r,t,e,...n){r=wt(r,yt);const i=wt(r.firestore,jt),o=Ur(i);let a;return a=typeof(t=Dt(t))=="string"||t instanceof xr?Ed(o,"updateDoc",r._key,t,e,n):vd(o,"updateDoc",r._key,t),jr(i,[a.toMutation(r._key,Pt.exists(!0))])}function jd(r){return jr(wt(r.firestore,jt),[new Ys(r._key,Pt.none())])}function Kd(r,t){const e=wt(r.firestore,jt),n=md(r),i=Fu(r.converter,t);return jr(e,[Vu(Ur(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Pt.exists(!1))]).then(()=>n)}function Gd(r,...t){var e,n,i;r=Dt(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||fa(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(fa(t[a])){const T=t[a];t[a]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[a+1]=(n=T.error)===null||n===void 0?void 0:n.bind(T),t[a+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let l,d,p;if(r instanceof yt)d=wt(r.firestore,jt),p=Ar(r._key.path),l={next:T=>{t[a]&&t[a](Uu(d,r,T))},error:t[a+1],complete:t[a+2]};else{const T=wt(r,Gt);d=wt(T.firestore,jt),p=T._query;const w=new Pi(d);l={next:P=>{t[a]&&t[a](new Lu(d,w,T,P))},error:t[a+1],complete:t[a+2]},Nu(r._query)}return function(w,P,V,M){const C=new mi(M),b=new fi(P,C,V);return w.asyncQueue.enqueueAndForget(async()=>hi(await dr(w),b)),()=>{C.Za(),w.asyncQueue.enqueueAndForget(async()=>li(await dr(w),b))}}(Fr(d),p,c,l)}function jr(r,t){return function(n,i){const o=new Ot;return n.asyncQueue.enqueueAndForget(async()=>td(await hd(n),i,o)),o.promise}(Fr(r),t)}function Uu(r,t,e){const n=e.docs.get(t._key),i=new Pi(r);return new xu(r,i,t._key,n,new cn(e.hasPendingWrites,e.fromCache),t.converter)}function $d(...r){return new _i("arrayUnion",r)}function zd(...r){return new yi("arrayRemove",r)}(function(t,e=!0){(function(i){xe=i})(Cc),Ec(new Ic("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new jt(new Nc(n.getProvider("auth-internal")),new Lc(n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Co(Mo,"4.7.3",t),Co(Mo,"4.7.3","esm2017")})();class Ds{constructor(){this.name="",this.id="",this.type="activity",this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=ct.fromBlank("","",new $t(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P){const V=new Ds;return V.name=t,V.id=e,V.type=P,V.joinCode=n,V.students=i,V.parents=o,V.groups=a,V.teachers=c,V.locations=l,V.eventTypes=d,V.defaultLocation=p,V.showBy=T,V.lastUpdated=w,V}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),locations:this.locations.map(t=>t.toMap()),teacherUids:this.teachers.map(t=>t.userId),studentUids:this.students.map(t=>t.userId),parentUids:this.parents.map(t=>t.userId),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ds;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const M of n)i.push(Tt.fromMap(M));e.students=i;const o=t.parents,a=[];for(const M of o)a.push(Tt.fromMap(M));e.parents=a;const c=t.groups,l=[];for(const M of c)l.push(Fe.fromMap(M));e.groups=l;const d=t.locations,p=[];for(const M of d)p.push(ct.fromMap(M));e.locations=p;const T=t.teachers,w=[];for(const M of T)w.push(Tn.fromMap(M));e.teachers=w,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const P=t.eventTypes,V=[];for(const M of P)V.push(Kt.fromMap(M));return e.eventTypes=V,e.defaultLocation=ct.fromMap(t.defaultLocation),e}}class Ns{constructor(){this.type="theater",this.name="",this.id="",this.rehearsalLocations=[],this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=ct.fromBlank("","",new $t(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P){const V=new Ns;return V.name=t,V.id=e,V.rehearsalLocations=T,V.joinCode=n,V.students=i,V.parents=o,V.groups=a,V.teachers=c,V.locations=l,V.eventTypes=d,V.defaultLocation=p,V.showBy=w,V.lastUpdated=P,V}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),teacherUids:this.teachers.map(t=>t.userId),studentUids:this.students.map(t=>t.userId),parentUids:this.parents.map(t=>t.userId),locations:this.locations.map(t=>t.toMap()),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),rehearsalLocations:this.rehearsalLocations.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ns;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const b of n)i.push(Tt.fromMap(b));e.students=i;const o=t.parents,a=[];for(const b of o)a.push(Tt.fromMap(b));e.parents=a;const c=t.groups,l=[];for(const b of c)l.push(Fe.fromMap(b));e.groups=l;const d=t.locations,p=[];for(const b of d)p.push(ct.fromMap(b));e.locations=p;const T=t.rehearsalLocations,w=[];for(const b of T)w.push(be.fromMap(b));e.rehearsalLocations=w;const P=t.teachers,V=[];for(const b of P)V.push(Tn.fromMap(b));e.teachers=V,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const M=t.eventTypes,C=[];for(const b of M)C.push(Kt.fromMap(b));return e.eventTypes=C,e.defaultLocation=ct.fromMap(t.defaultLocation),e}}class be{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new be;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new be;return e.name=t.name,e.color=t.color,e}}class ct{constructor(){this.name="",this.address="",this.location=new $t(0,0)}static fromBlank(t,e,n){const i=new ct;return i.name=t,i.address=e,i.location=n,i}toMap(){return{name:this.name,address:this.address,location:this.location}}static fromMap(t){const e=new ct;return e.name=t.name,e.address=t.address,e.location=t.location,e}}class Fe{constructor(){this.groupName="",this.groupMembers=[],this.groupColor=0}static fromBlank(t,e,n){const i=new Fe;return i.groupName=t,i.groupMembers=e,i.groupColor=n,i}toMap(){return{groupName:this.groupName,groupMembers:this.groupMembers.map(t=>t.toMap()),groupColor:this.groupColor}}static fromMap(t){const e=new Fe;e.groupName=t.groupName;const n=t.groupMembers,i=[];for(const o of n)i.push(Tt.fromMap(o));return e.groupMembers=i,e.groupColor=t.groupColor,e}}class Kt{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new Kt;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new Kt;return e.name=t.name,e.color=t.color,e}}class St{constructor(){this.date=new Date,this.from=new Date,this.to=new Date}static fromBlank(t,e,n){const i=new St;return i.date=t,i.from=e,i.to=n,i}toMap(){return{date:this.date,from:this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}),to:this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0})}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,c]=n;o=parseInt(o,10),a=parseInt(a,10),c.toUpperCase()==="PM"&&o<12?o+=12:c.toUpperCase()==="AM"&&o===12&&(o=0);const l=new Date;return l.setHours(o,a,0,0),l}else return new Date(t)}throw new Error("Invalid time format")}static fromMap(t){const e=new St;return t.date instanceof Date?e.date=t.date:typeof t.date=="string"?e.date=new Date(t.date):(console.log(typeof t.date),console.log(t.date),e.date=t.date.toDate()),console.log(t.date),console.log(t.from),console.log(t.to),e.from=this._parseTime(t.from),e.to=this._parseTime(t.to),e}}class bs{constructor(){this.name="",this.info="",this.location=ct.fromBlank("","",new $t(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,i,o,a){const c=new bs;c.name=t,c.info=e,c.location=n,c.date=i,c.type=o,c.lastUpdated=a;const l=i.date.toISOString().split("T")[0];return c.dateFilter=l,c}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),dateFilter:this.dateFilter,type:this.type,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new bs;return e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e}}class Fs{constructor(){this.activityId="",this.groupNames=[],this.targets=[],this.generalTarget="",this.eventType=new Kt,this.groupTargets=[],this.hasSchoolEvent=!1,this.schoolEventId="",this.conflicts=[],this.activityName="",this.name="",this.info="",this.location=ct.fromBlank("","",new $t(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P,V,M,C){const b=new Fs;b.name=t,b.info=e,b.location=n,b.date=i,b.type=o,b.lastUpdated=a;const G=i.date.toISOString().split("T")[0];return b.dateFilter=G,b.activityId=c,b.groupNames=l,b.targets=d,b.generalTarget=p,b.eventType=T,b.groupTargets=w,b.hasSchoolEvent=P,b.schoolEventId=V,b.conflicts=M,b.activityName=C,b}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),targets:this.targets.map(t=>t.toMap()),generalTarget:this.generalTarget,eventType:this.eventType.toMap(),activityName:this.activityName,groupTargets:this.groupTargets.map(t=>t.toMap()),type:"activity",groupNames:this.groupNames,dateFilter:this.dateFilter,hasSchoolEvent:this.hasSchoolEvent,schoolEventId:this.schoolEventId,activityId:this.activityId,lastUpdated:this.lastUpdated,targetUids:this.targets.map(t=>t.userId),conflicts:this.conflicts.map(t=>t.toMap())}}static fromMap(t){const e=new Fs;e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date);const n=t.targets,i=[];for(const d of n)i.push(Tt.fromMap(d));e.targets=i,e.generalTarget=t.generalTarget,e.eventType=Kt.fromMap(t.eventType),e.activityName=t.activityName;const o=t.groupTargets,a=[];for(const d of o)a.push(Fe.fromMap(d));e.groupTargets=a,e.groupNames=t.groupNames,e.dateFilter=t.dateFilter,e.hasSchoolEvent=t.hasSchoolEvent,e.schoolEventId=t.schoolEventId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated;const c=t.conflicts,l=[];for(const d of c)l.push(pr.fromMap(d));return e.conflicts=l,e}}class pr{constructor(){this.userId="",this.type="",this.start=null,this.end=null,this.reason="",this.status="",this.userName=""}static fromBlank(t,e,n,i,o,a,c){const l=new pr;return l.userId=t,l.type=e,l.start=n,l.end=i,l.reason=o,l.status=a,l.userName=c,l}toMap(){return{userId:this.userId,type:this.type,start:this.start!=null?this.start.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",end:this.end!=null?this.end.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",reason:this.reason,status:this.status,userName:this.userName}}static _parseTime(t){if(typeof t=="string")return new Date(`1970-01-01T${t}`);throw new Error("Invalid time format")}static fromMap(t){const e=new pr;return e.userId=t.userId,e.type=t.type,e.start=t.start!=""?this._parseTime(t.start):null,e.end=t.end!=""?this._parseTime(t.end):null,e.reason=t.reason,e.status=t.status,e.userName=t.userName,e}}class xs{constructor(){this.name="",this.id="",this.members=[],this.generalTarget="",this.activityId="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a){const c=new xs;return c.name=t,c.id=e,c.members=n,c.generalTarget=i,c.activityId=o,c.lastUpdated=a,c}toMap(){return{name:this.name,id:this.id,members:this.members.map(t=>t.toMap()),generalTarget:this.generalTarget,activityId:this.activityId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new xs;e.name=t.name,e.id=t.id;const n=t.members,i=[];for(const o of n)i.push(Tr.fromMap(o));return e.members=i,e.generalTarget=t.generalTarget,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}class Ls{constructor(){this.message="",this.senderUid="",this.senderName="",this.senderFCMToken="",this.gcId="",this.activityId="",this.messageId="",this.timeSent=new Date,this.readBy=[]}static fromBlank(t,e,n,i,o,a,c,l,d){const p=new Ls;return p.message=t,p.senderUid=e,p.senderName=n,p.senderFCMToken=i,p.gcId=o,p.activityId=a,p.messageId=c,p.timeSent=l,p.readBy=d,p}toMap(){return{message:this.message,senderUid:this.senderUid,senderName:this.senderName,senderFCMToken:this.senderFCMToken,gcId:this.gcId,activityId:this.activityId,messageId:this.messageId,timeSent:this.timeSent,readBy:this.readBy,lastUpdated:this.timeSent.getTime()}}static fromMap(t){const e=new Ls;return e.message=t.message,e.senderUid=t.senderUid,e.senderName=t.senderName,e.senderFCMToken=t.senderFCMToken,e.gcId=t.gcId,e.activityId=t.activityId,e.messageId=t.messageId,e.timeSent=t.timeSent.toDate(),e.readBy=t.readBy,e}}class Us{constructor(){this.name="",this.info="",this.location=ct.fromBlank("","",new $t(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id="",this.activityId="",this.showId="",this.characters=[],this.targets=[],this.theaterEventType="",this.showName="",this.activityName="",this.activityEventType=new Kt,this.rehearsalLocation=new be}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P,V,M){const C=new Us;C.name=t,C.info=e,C.location=n,C.date=i,C.type=o,C.lastUpdated=a;const b=i.date.toISOString().split("T")[0];return C.dateFilter=b,C.activityId=c,C.showId=d,C.characters=T,C.targets=w,C.theaterEventType=P,C.rehearsalLocation=M,C.activityName=l,C.showName=p,C.activityEventType=V,C}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),type:this.type,lastUpdated:this.lastUpdated,dateFilter:this.dateFilter,activityId:this.activityId,activityName:this.activityName,showId:this.showId,showName:this.showName,characters:this.characters.map(t=>t.toMap()),targets:this.targets.map(t=>t.toMap()),targetUids:this.targets.map(t=>t.userId),id:this.id,theaterEventType:this.theaterEventType,activityEventType:this.activityEventType.toMap(),rehearsalLocation:this.rehearsalLocation.toMap()}}static fromMap(t){const e=new Us;e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e.activityId=t.activityId,e.showId=t.showId,e.theaterEventType=t.theaterEventType;const n=t.characters,i=[];for(const c of n)c.type==="Character"?i.push(bt.fromMap(c)):c.type==="ShowGroup"?i.push(re.fromMap(c)):c.type==="EnsembleSection"&&i.push(ne.fromMap(c)),c.type==="FullCast"&&i.push(new Be);e.characters=i;const o=t.targets,a=[];for(const c of o)a.push(Tt.fromMap(c));return e.targets=a,e.id=t.id,e.activityName=t.activityName,e.showName=t.showName,e.activityEventType=Kt.fromMap(t.activityEventType),e.rehearsalLocation=be.fromMap(t.rehearsalLocation),e}}class Os{constructor(){this.name="",this.id="",this.activityId="",this.layout=[],this.characters=[],this.ensemble=new vn,this.showGroups=[],this.lastUpdated=0,this.songs=[],this.dances=[],this.canCreateSchedule=!1,this.hasEnsemble=!1,this.conflictForm=new En,this.formStatus="open",this.resources=[]}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P,V,M){const C=new Os;return C.name=t,C.id=e,C.activityId=n,C.layout=i,C.characters=o,C.ensemble=a,C.showGroups=c,C.lastUpdated=M,C.songs=l,C.dances=d,C.canCreateSchedule=p,C.hasEnsemble=T,C.conflictForm=w,C.resources=P,C.formStatus=V,C}toMap(){return{name:this.name,id:this.id,activityId:this.activityId,layout:this.layout.map(t=>t.toMap()),characters:this.characters.map(t=>t.toMap()),ensemble:this.ensemble?this.ensemble.toMap():"null",showGroups:this.showGroups.map(t=>t.toMap()),songs:this.songs.map(t=>t.toMap()),dances:this.dances.map(t=>t.toMap()),canCreateSchedule:this.canCreateSchedule,hasEnsemble:this.hasEnsemble,conflictForm:this.conflictForm?this.conflictForm.toMap():"null",resources:this.resources.map(t=>t.toMap()),formStatus:this.formStatus,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Os;e.name=t.name,e.id=t.id,e.activityId=t.activityId;const n=t.layout,i=[];for(const M of n)i.push(mr.fromMap(M));e.layout=i;const o=t.characters,a=[];for(const M of o)a.push(bt.fromMap(M));e.characters=a,e.ensemble=t.ensemble!="null"&&t.ensemble?vn.fromMap(t.ensemble):null;const c=t.showGroups,l=[];for(const M of c)l.push(re.fromMap(M));e.showGroups=l;const d=t.songs,p=[];for(const M of d)p.push(yr.fromMap(M));e.songs=p;const T=t.dances,w=[];for(const M of T)w.push(_r.fromMap(M));e.dances=w,e.canCreateSchedule=t.canCreateSchedule,e.lastUpdated=t.lastUpdated,e.conflictForm=t.conflictForm!="null"&&t.conflictForm?En.fromMap(t.conflictForm):null,e.hasEnsemble=t.hasEnsemble;const P=t.resources,V=[];for(const M of P)V.push(Ir.fromMap(M));return e.resources=V,e.formStatus=t.formStatus,e}}class mr{constructor(){this.name="",this.scenes=[],this.lastUpdated=0,this.actId=0}static fromBlank(t,e,n,i){const o=new mr;return o.name=t,o.scenes=e,o.lastUpdated=i,o.actId=n,o}toMap(){return{name:this.name,scenes:this.scenes.map(t=>t.toMap()),actId:this.actId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new mr;e.name=t.name;const n=t.scenes,i=[];for(const o of n)i.push(gr.fromMap(o));return e.scenes=i,e.actId=t.actId,e.lastUpdated=t.lastUpdated,e}}class gr{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.sceneId=0}static fromBlank(t,e,n,i){const o=new gr;return o.name=t,o.characters=e,o.lastUpdated=i,o.sceneId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),sceneId:this.sceneId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new gr;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(bt.fromMap(o)):o.type==="ShowGroup"?i.push(re.fromMap(o)):o.type==="EnsembleSection"&&i.push(ne.fromMap(o)),o.type==="FullCast"&&i.push(new Be);return e.characters=i,e.sceneId=t.sceneId,e.lastUpdated=t.lastUpdated,e}}class _r{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.danceId=0}static fromBlank(t,e,n,i){const o=new _r;return o.name=t,o.characters=e,o.lastUpdated=i,o.danceId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),danceId:this.danceId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new _r;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(bt.fromMap(o)):o.type==="ShowGroup"?i.push(re.fromMap(o)):o.type==="EnsembleSection"&&i.push(ne.fromMap(o)),o.type==="FullCast"&&i.push(new Be);return e.characters=i,e.lastUpdated=t.lastUpdated,e.danceId=t.danceId,e}}class yr{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.songId=0}static fromBlank(t,e,n,i){const o=new yr;return o.name=t,o.characters=e,o.lastUpdated=i,o.songId=n,o}toMap(){for(const t of this.characters)console.log(t),console.log(t instanceof bt);return{name:this.name,characters:this.characters.map(t=>t.toMap()),songId:this.songId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new yr;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(bt.fromMap(o)):o.type==="ShowGroup"?i.push(re.fromMap(o)):o.type==="EnsembleSection"&&i.push(ne.fromMap(o)),o.type==="FullCast"&&i.push(new Be);return e.characters=i,e.lastUpdated=t.lastUpdated,e.songId=t.songId,e}}class Tr{constructor(){this.name="",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,i,o){const a=new Tr;return a.name=t,a.email=e,a.phone=n,a.FCMToken=i,a.userId=o,a}toMap(){return{fullname:this.name,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new Tr;return e.name=t.fullname,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class Tt{constructor(){this.name="",this.gender="male",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,i,o,a){const c=new Tt;return c.name=t,c.gender=e,c.email=n,c.phone=i,c.FCMToken=o,c.userId=a,c}toMap(){return{fullname:this.name,gender:this.gender,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new Tt;return e.name=t.fullname,e.gender=t.gender,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class Tn{constructor(){this.name="",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,i,o){const a=new Tn;return a.name=t,a.email=e,a.phone=n,a.FCMToken=i,a.userId=o,a}toMap(){return{fullname:this.name,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new Tn;return e.name=t.fullname,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class bt{constructor(){this.name="",this.actor=new Tt,this.lastUpdated=0,this.characterId=0,this.type="Character"}static fromBlank(t,e,n,i){const o=new bt;return o.name=t,o.actor=e,o.lastUpdated=i,o.characterId=n,o}toMap(){return{name:this.name,actor:this.actor?this.actor.toMap():"null",characterId:this.characterId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new bt;return e.name=t.name,e.actor=t.actor!="null"&&!Vd(t.actor)?Tt.fromMap(t.actor):null,e.lastUpdated=t.lastUpdated,e.characterId=t.characterId,e}}function Vd(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}class vn{constructor(){this.actors=[],this.lastUpdated=0}static fromBlank(t,e){const n=new vn;return n.actors=t,n.lastUpdated=e,n}toMap(){return{actors:this.actors.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new vn,n=t.actors,i=[];for(const o of n)i.push(Tt.fromMap(o));return e.actors=i,e.lastUpdated=t.lastUpdated,e}}class Be{constructor(){this.type="FullCast"}toMap(){return{type:this.type}}static fromMap(t){return new Be}}class ne{constructor(){this.includeAll=!1,this.includeMale=!1,this.includeFemale=!1,this.includeCustom=!1,this.customActors=[],this.lastUpdated=0,this.type="EnsembleSection"}static fromBlank(t,e,n,i,o,a){const c=new ne;return c.includeAll=t,c.includeMale=e,c.includeFemale=n,c.includeCustom=i,c.customActors=o,c.lastUpdated=a,c}toMap(){return{includeAll:this.includeAll,includeMale:this.includeMale,includeFemale:this.includeFemale,includeCustom:this.includeCustom,customActors:this.customActors.map(t=>t.toMap())??[],type:this.type,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new ne;e.includeAll=t.includeAll,e.includeMale=t.includeMale,e.includeFemale=t.includeFemale,e.includeCustom=t.includeCustom;const n=t.customActors,i=[];for(const o of n)i.push(Tt.fromMap(o));return e.customActors=i,e.lastUpdated=t.lastUpdated,e}}class re{constructor(){this.name="",this.characters=[],this.showGroupId=0,this.lastUpdated=0,this.type="ShowGroup"}static fromBlank(t,e,n,i){const o=new re;return o.name=t,o.characters=e,o.lastUpdated=i,o.showGroupId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),showGroupId:this.showGroupId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new re;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(bt.fromMap(o)):i.push(ne.fromMap(o));return e.characters=i,e.showGroupId=t.showGroupId,e.lastUpdated=t.lastUpdated,e}}class vr{constructor(){this.date=new St,this.moreInfo=""}static fromBlank(t,e){const n=new vr;return n.date=t,n.moreInfo=e,n}toMap(){return{date:this.date.toMap(),moreInfo:this.moreInfo}}static fromMap(t){const e=new vr;return e.date=St.fromMap(t.date),e.moreInfo=t.moreInfo,e}}class En{constructor(){this.dates=[],this.lastUpdated=0,this.deadline=new Date}static fromBlank(t,e,n){const i=new En;return i.dates=t,i.deadline=e,i.lastUpdated=n,i}toMap(){return{dates:this.dates.map(t=>t.toMap()),deadline:this.deadline,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new En,n=t.dates,i=[];for(const o of n)i.push(vr.fromMap(o));return typeof t.deadline=="string"||t.deadline instanceof Date?e.deadline=new Date(t.deadline):e.deadline=t.deadline.toDate(),e.dates=i,e.lastUpdated=t.lastUpdated,e}}class Er{constructor(){this.date=new Date,this.from=null,this.to=null,this.canAttend=!1,this.note=""}static fromBlank(t,e,n,i,o){const a=new Er;return a.date=t,a.from=e,a.to=n,a.canAttend=i,a.note=o,a}toMap(){return{date:this.date.toISOString(),from:this.from!=null?this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",to:this.to!=null?this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",canAttend:this.canAttend,note:this.note}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,c]=n;o=parseInt(o,10),a=parseInt(a,10),c.toUpperCase()==="PM"&&o<12?o+=12:c.toUpperCase()==="AM"&&o===12&&(o=0);const l=new Date;return l.setHours(o,a,0,0),l}}throw new Error("Invalid time format")}static fromMap(t){const e=new Er;return e.date=new Date(t.date),e.from=t.from!=""?this._parseTime(t.from):null,e.to=t.to!=""?this._parseTime(t.to):null,e.canAttend=t.canAttend,e.note=t.note,e}}class Bs{constructor(){this.dates=[],this.id="",this.actor=new Tt,this.lastUpdated=0,this.activityId="",this.showId=""}static fromBlank(t,e,n,i,o,a){const c=new Bs;return c.dates=t,c.id=e,c.actor=n,c.lastUpdated=a,c.activityId=i,c.showId=o,c}toMap(){return{dates:this.dates.map(t=>t.toMap()),id:this.id,actor:this.actor.toMap(),lastUpdated:this.lastUpdated,submitterId:this.actor.userId,activityId:this.activityId,showId:this.showId}}static fromMap(t){const e=new Bs,n=t.dates,i=[];for(const o of n)i.push(Er.fromMap(o));return e.dates=i,e.id=t.id,e.actor=Tt.fromMap(t.actor),e.showId=t.showId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}class In{constructor(){this.name="",this.url=""}static fromBlank(t,e){const n=new In;return n.name=t,n.url=e,n}toMap(){return{name:this.name,url:this.url}}static fromMap(t){const e=new In;return e.name=t.name,e.url=t.url,e}}class Ir{constructor(){this.name="",this.description="",this.type="link",this.link="",this.file=new In}static fromBlank(t,e,n,i,o){const a=new Ir;return a.name=t,a.description=e,a.type=n,a.link=i,a.file=o,a}toMap(){return{name:this.name,description:this.description,type:this.type,link:this.link,file:this.file!=null?this.file.toMap():"null"}}static fromMap(t){const e=new Ir;return e.name=t.name,e.description=t.description,e.type=t.type,e.link=t.link,e.file=t.file!="null"&&t.file?In.fromMap(t.file):void 0,e}}class qs{constructor(){this.uid="",this.schoolId="",this.rideShareStatus="",this.distanceToSchool=0,this.FCMToken="",this.accountType="",this.phoneNumber="",this.driverStatus="",this.searchKey="",this.fullname="",this.email="",this.gender="male",this.distanceToSchoolMembers={},this.homeLocation=new ct}static fromBlank(t,e,n,i,o,a,c,l,d,p,T,w,P,V){const M=new qs;return M.uid=t,M.schoolId=e,M.rideShareStatus=n,M.distanceToSchool=i,M.FCMToken=o,M.accountType=a,M.phoneNumber=c,M.driverStatus=d,M.searchKey=p,M.fullname=T,M.email=w,M.distanceToSchoolMembers=P,M.homeLocation=V,M.gender=l,M}toMap(){return{uid:this.uid,schoolId:this.schoolId,rideShareStatus:this.rideShareStatus,distanceToSchool:this.distanceToSchool,FCMToken:this.FCMToken,accountType:this.accountType,phoneNumber:this.phoneNumber,driverStatus:this.driverStatus,searchKey:this.searchKey,fullname:this.fullname,email:this.email,distanceToSchoolMembers:this.distanceToSchoolMembers,homeLocation:this.homeLocation.toMap(),gender:this.gender}}static fromMap(t){const e=new qs;return e.uid=t.uid,e.schoolId=t.schoolId,e.rideShareStatus=t.rideShareStatus,e.distanceToSchool=t.distanceToSchool,e.FCMToken=t.FCMToken,e.accountType=t.accountType,e.phoneNumber=t.phoneNumber,e.driverStatus=t.driverStatus,e.searchKey=t.searchKey,e.fullname=t.fullname,e.email=t.email,e.distanceToSchoolMembers=t.distanceToSchoolMembers,e.homeLocation=ct.fromMap(t.homeLocation),e.gender=t.gender??"",e}}class js{constructor(){this.uid="",this.schoolId="",this.FCMToken="",this.accountType="",this.searchKey="",this.fullname="",this.email="",this.phoneNumber=""}static fromBlank(t,e,n,i,o,a,c,l){const d=new js;return d.uid=t,d.schoolId=e,d.FCMToken=i,d.accountType=o,d.searchKey=a,d.fullname=c,d.email=l,d.phoneNumber=n,d}toMap(){return{uid:this.uid,schoolId:this.schoolId,FCMToken:this.FCMToken,accountType:this.accountType,searchKey:this.searchKey,fullname:this.fullname,email:this.email,phoneNumber:this.phoneNumber}}static fromMap(t){const e=new js;return e.uid=t.uid,e.schoolId=t.schoolId,e.FCMToken=t.FCMToken,e.accountType=t.accountType,e.searchKey=t.searchKey,e.fullname=t.fullname,e.email=t.email,e.phoneNumber=t.phoneNumber,e}}function Qd(r){let t;if(r>16777215){let e=(r>>24&255).toString(16).padStart(2,"0").toUpperCase(),n=(r>>16&255).toString(16).padStart(2,"0").toUpperCase(),i=(r>>8&255).toString(16).padStart(2,"0").toUpperCase(),o=(r&255).toString(16).padStart(2,"0").toUpperCase();t=`#${e}${n}${i}${o}`}else t=r.toString(16).toUpperCase().padStart(6,"0"),t=`#${t}`;return t}function Wd(r,t){const e=Math.round(Math.min(Math.max(t??1,0),1)*255);return r+e.toString(16).toUpperCase()}function Hd(r){return r.startsWith("#")&&(r=r.slice(1)),parseInt(r,16)}export{mr as A,Kd as B,bt as C,_r as D,ne as E,Be as F,$t as G,qd as H,Od as I,bd as J,Fd as K,ct as L,Ls as M,Bd as N,Gd as O,$d as P,jd as Q,Ir as R,qs as S,js as T,Tn as U,Ld as V,xd as W,Tr as X,zd as Y,Kt as Z,gr as a,re as b,yr as c,Os as d,vn as e,Tt as f,Ds as g,Wd as h,Qd as i,St as j,Us as k,vr as l,Er as m,En as n,Bs as o,be as p,Hd as q,Ns as r,xs as s,In as t,Fs as u,bs as v,Nd as w,Dd as x,md as y,Ud as z};
