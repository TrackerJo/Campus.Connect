import{L as vc,f as Ec,C as Ic,h as Co,F as wc,g as bt,e as Ac,_ as Rc,d as Pc,q as Yt,k as Vc,S as Cc,s as ga,t as Sc,u as Mc}from"./index-DUWJYJoQ.js";var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,_a;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,A){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],v=E.g[2];var A=E.g[3],g=p+(A^_&(v^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(y[v++]=E.charCodeAt(A++),v==this.blockSize){i(this,y),v=0;break}}else for(;A<p;)if(y[v++]=E[A++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var A=E[v]|0;y&&A==p||(_[v]=A,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return k(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=T,v=0;v<E.length;v+=8){var A=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var T=h(0),w=h(1),V=h(16777216);r=a.prototype,r.m=function(){if(S(this))return-k(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(S(this))return"-"+k(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var v=nt(_,p).g;_=N(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,P(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function S(E){return E.h==-1}r.l=function(E){return E=N(this,E),S(E)?-1:P(E)?0:1};function k(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new a(_,~E.h).add(w)}r.abs=function(){return S(this)?k(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=p;v++){var A=y+(this.i(v)&65535)+(E.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function N(E,p){return E.add(k(p))}r.j=function(E){if(P(this)||P(E))return T;if(S(this))return S(E)?k(this).j(k(E)):k(k(this).j(E));if(S(E))return k(this.j(k(E)));if(0>this.l(V)&&0>E.l(V))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var A=this.i(y)>>>16,g=this.i(y)&65535,Lt=E.i(v)>>>16,je=E.i(v)&65535;_[2*y+2*v]+=g*je,G(_,2*y+2*v),_[2*y+2*v+1]+=A*je,G(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Lt,G(_,2*y+2*v+1),_[2*y+2*v+2]+=A*Lt,G(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function G(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Q(E,p){this.g=E,this.h=p}function nt(E,p){if(P(p))throw Error("division by zero");if(P(E))return new Q(T,T);if(S(E))return p=nt(k(E),p),new Q(k(p.g),k(p.h));if(S(p))return p=nt(E,k(p)),new Q(k(p.g),p.h);if(30<E.g.length){if(S(E)||S(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(E);)_=xt(_),y=xt(y);var v=st(_,1),A=st(y,1);for(y=st(y,2),_=st(_,2);!P(y);){var g=A.add(y);0>=g.l(E)&&(v=v.add(_),A=g),y=st(y,1),_=st(_,1)}return p=N(E,v.j(p)),new Q(v,p)}for(v=T;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(p);S(g)||0<g.l(E);)_-=y,A=f(_),g=A.j(p);P(A)&&(A=w),v=v.add(A),E=N(E,g)}return new Q(v,E)}r.A=function(E){return nt(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function xt(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function st(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,v=[],A=0;A<y;A++)v[A]=0<p?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,_a=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,he=a}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ya,an,Ta,Zn,gs,va,Ea,Ia;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hn=="object"&&Hn];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],u=u(d),u!=d&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var R=l++;return{value:u(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function f(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,l){return s.call.apply(s.bind,arguments)}function T(s,u,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function w(s,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,w.apply(null,arguments)}function V(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function P(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,R){for(var b=Array(arguments.length-2),z=2;z<arguments.length;z++)b[z-2]=arguments[z];return u.prototype[I].apply(d,b)}}function S(s){const u=s.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=s[d];return l}return[]}function k(s,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,R=d.length||0;s.length=I+R;for(let b=0;b<R;b++)s[I+b]=d[b]}else s.push(d)}}class N{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var xt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function st(s,u,l){for(const d in s)u.call(l,s[d],d,s)}function E(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function p(s){const u={};for(const l in s)u[l]=s[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function v(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=jr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Lt{constructor(){this.h=this.g=null}add(u,l){const d=je.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var je=new N(()=>new Ou,s=>s.reset());class Ou{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,Ge=!1,jr=new Lt,Vi=()=>{const s=c.Promise.resolve(void 0);Ke=()=>{s.then(Bu)}};var Bu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var u=je;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Ge=!1};function Qt(){this.s=this.s,this.C=this.C}Qt.prototype.s=!1,Qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var qu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function $e(s,u){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(xt){t:{try{nt(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ju[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&$e.aa.h.call(this)}}P($e,ht);var ju={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Ku=0;function Gu(s,u,l,d,I){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++Ku,this.da=this.fa=!1}function kn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function bn(s){this.src=s,this.g={},this.h=0}bn.prototype.add=function(s,u,l,d,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Gr(s,u,d,I);return-1<b?(u=s[b],l||(u.fa=!1)):(u=new Gu(u,this.src,R,!!d,I),u.fa=l,s.push(u)),u};function Kr(s,u){var l=u.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(kn(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Gr(s,u,l,d){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),zr={};function Ci(s,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ci(s,u[R],l,d,I);return null}return l=ki(l),s&&s[Mn]?s.K(u,l,f(d)?!!d.capture:!!d,I):$u(s,u,l,!1,d,I)}function $u(s,u,l,d,I,R){if(!u)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,z=Wr(s);if(z||(s[$r]=z=new bn(s)),l=z.add(u,l,d,b,R),l.proxy)return l;if(d=zu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)qu||(I=b),I===void 0&&(I=!1),s.addEventListener(u.toString(),d,I);else if(s.attachEvent)s.attachEvent(Mi(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function zu(){function s(l){return u.call(s.src,s.listener,l)}const u=Qu;return s}function Si(s,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Si(s,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=ki(l),s&&s[Mn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],l=Gr(R,l,d,I),-1<l&&(kn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=Wr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Gr(u,l,d,I)),(l=-1<s?u[s]:null)&&Qr(l))}function Qr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Mn])Kr(u.i,s);else{var l=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(l,d,s.capture):u.detachEvent?u.detachEvent(Mi(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Wr(u))?(Kr(l,s),l.h==0&&(l.src=null,u[$r]=null)):kn(s)}}}function Mi(s){return s in zr?zr[s]:zr[s]="on"+s}function Qu(s,u){if(s.da)s=!0;else{u=new $e(u,this);var l=s.listener,d=s.ha||s.src;s.fa&&Qr(s),s=l.call(d,u)}return s}function Wr(s){return s=s[$r],s instanceof bn?s:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(s){return typeof s=="function"?s:(s[Hr]||(s[Hr]=function(u){return s.handleEvent(u)}),s[Hr])}function dt(){Qt.call(this),this.i=new bn(this),this.M=this,this.F=null}P(dt,Qt),dt.prototype[Mn]=!0,dt.prototype.removeEventListener=function(s,u,l,d){Si(this,s,u,l,d)};function Tt(s,u){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new ht(u,s);else if(u instanceof ht)u.target=u.target||s;else{var I=u;u=new ht(d,s),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var b=u.g=l[R];I=Dn(b,d,!0,u)&&I}if(b=u.g=s,I=Dn(b,d,!0,u)&&I,I=Dn(b,d,!1,u)&&I,l)for(R=0;R<l.length;R++)b=u.g=l[R],I=Dn(b,d,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],d=0;d<l.length;d++)kn(l[d]);delete s.g[u],s.h--}}this.F=null},dt.prototype.K=function(s,u,l,d){return this.i.add(String(s),u,!1,l,d)},dt.prototype.L=function(s,u,l,d){return this.i.add(String(s),u,!0,l,d)};function Dn(s,u,l,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==l){var z=b.listener,it=b.ha||b.src;b.fa&&Kr(s.i,b),I=z.call(it,d)!==!1&&I}}return I&&!d.defaultPrevented}function bi(s,u,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function Di(s){s.g=bi(()=>{s.g=null,s.i&&(s.i=!1,Di(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Wu extends Qt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(s){Qt.call(this),this.h=s,this.g={}}P(ze,Qt);var Ni=[];function Fi(s){st(s.g,function(u,l){this.g.hasOwnProperty(l)&&Qr(u)},s),s.g={}}ze.prototype.N=function(){ze.aa.N.call(this),Fi(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=c.JSON.stringify,Hu=c.JSON.parse,Xu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Yr(){}Yr.prototype.h=null;function xi(s){return s.h||(s.h=s.i())}function Li(){}var Qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jr(){ht.call(this,"d")}P(Jr,ht);function Zr(){ht.call(this,"c")}P(Zr,ht);var oe={},Ui=null;function Nn(){return Ui=Ui||new dt}oe.La="serverreachability";function Oi(s){ht.call(this,oe.La,s)}P(Oi,ht);function We(s){const u=Nn();Tt(u,new Oi(u))}oe.STAT_EVENT="statevent";function Bi(s,u){ht.call(this,oe.STAT_EVENT,s),this.stat=u}P(Bi,ht);function vt(s){const u=Nn();Tt(u,new Bi(u,s))}oe.Ma="timingevent";function qi(s,u){ht.call(this,oe.Ma,s),this.size=u}P(qi,ht);function He(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function Yu(s,u,l,d,I,R){s.info(function(){if(s.g)if(R)for(var b="",z=R.split("&"),it=0;it<z.length;it++){var j=z[it].split("=");if(1<j.length){var ft=j[0];j=j[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+j+"&"):b+(ft+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+b})}function Ju(s,u,l,d,I,R,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+b})}function ye(s,u,l,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+tc(s,l)+(d?" "+d:"")})}function Zu(s,u){s.info(function(){return"TIMEOUT: "+u})}Xe.prototype.info=function(){};function tc(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Xr(l)}catch{return u}}var Fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ts;function xn(){}P(xn,Yr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},ts=new xn;function Wt(s,u,l,d){this.j=s,this.i=u,this.l=l,this.R=d||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var Gi={},es={};function ns(s,u,l){s.L=1,s.v=Bn(Ut(u)),s.m=l,s.P=!0,$i(s,null)}function $i(s,u){s.F=Date.now(),Ln(s),s.A=Ut(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),io(l.i,"t",d),s.C=0,l=s.j.J,s.h=new Ki,s.g=Ao(s.j,l?u:null,!s.m),0<s.O&&(s.M=new Wu(w(s.Y,s,s.g),s.O)),u=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ni[0]=I.toString()),I=Ni);for(var R=0;R<I.length;R++){var b=Ci(l,I[R],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),We(),Yu(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Ot(s)==3?u.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Ot(this.g);var u=this.g.Ba();const Ee=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||fo(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Ee?We(3):We(2)),rs(this);var l=this.g.Z();this.X=l;e:if(zi(this)){var d=fo(this.g);s="";var I=d.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),Ye(this);var b="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Ju(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var z,it=this.g;if((z=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(z)){var j=z;break e}}j=null}if(l=j)ye(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,l);else{this.o=!1,this.s=3,vt(12),ae(this),Ye(this);break t}}if(this.P){l=!0;let Vt;for(;!this.J&&this.C<b.length;)if(Vt=ec(this,b),Vt==es){mt==4&&(this.s=4,vt(14),l=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Gi){this.s=4,vt(15),ye(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ye(this.i,this.l,Vt,null),ss(this,Vt);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)ye(this.i,this.l,b,"[Invalid Chunked Response]"),ae(this),Ye(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ls(ft),ft.M=!0,vt(11))}}else ye(this.i,this.l,b,null),ss(this,b);mt==4&&ae(this),this.o&&!this.J&&(mt==4?vo(this.j,this):(this.o=!1,Ln(this)))}else yc(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ae(this),Ye(this)}}}catch{}finally{}};function zi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ec(s,u){var l=s.C,d=u.indexOf(`
`,l);return d==-1?es:(l=Number(u.substring(l,d)),isNaN(l)?Gi:(d+=1,d+l>u.length?es:(u=u.slice(d,d+l),s.C=d+l,u)))}Wt.prototype.cancel=function(){this.J=!0,ae(this)};function Ln(s){s.S=Date.now()+s.I,Qi(s,s.I)}function Qi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=He(w(s.ba,s),u)}function rs(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Zu(this.i,this.A),this.L!=2&&(We(),vt(17)),ae(this),this.s=2,Ye(this)):Qi(this,this.S-s)};function Ye(s){s.j.G==0||s.J||vo(s.j,s)}function ae(s){rs(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Fi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function ss(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||is(l.h,s))){if(!s.K&&is(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)zn(l),Gn(l);else break t;cs(l),vt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=He(w(l.Za,l),6e3));if(1>=Xi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ce(l,11)}else if((s.K||l.g==s)&&zn(l),!G(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let j=I[u];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=j[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Ee=j[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(d=1.5*Ee,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Vt=s.g;if(Vt){const Wn=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var R=d.h;R.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(os(R,R.h),R.h=null))}if(d.D){const hs=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;hs&&(d.ya=hs,W(d.I,d.D,hs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=s;if(d.qa=wo(d,d.J?d.ia:null,d.W),b.K){Yi(d.h,b);var z=b,it=d.L;it&&(z.I=it),z.B&&(rs(z),Ln(z)),d.g=b}else yo(d);0<l.i.length&&$n(l)}else j[0]!="stop"&&j[0]!="close"||ce(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ce(l,7):us(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}We(4)}catch{}}var nc=class{constructor(s,u){this.g=s,this.map=u}};function Wi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Xi(s){return s.h?1:s.g?s.g.size:0}function is(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function os(s,u){s.g?s.g.add(u):s.h=u}function Yi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Wi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ji(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return S(s.i)}function rc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,d=0;d<l;d++)u.push(s[d]);return u}u=[],l=0;for(d in s)u[l++]=s[d];return u}function sc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const d in s)u[l++]=d;return u}}}function Zi(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=sc(s),d=rc(s),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],s)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ic(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var R=s[l].substring(0,d);I=s[l].substring(d+1)}else R=s[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ue(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ue){this.h=s.h,Un(this,s.j),this.o=s.o,this.g=s.g,On(this,s.s),this.l=s.l;var u=s.i,l=new tn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),eo(this,l),this.m=s.m}else s&&(u=String(s).match(to))?(this.h=!1,Un(this,u[1]||"",!0),this.o=Je(u[2]||""),this.g=Je(u[3]||"",!0),On(this,u[4]),this.l=Je(u[5]||"",!0),eo(this,u[6]||"",!0),this.m=Je(u[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}ue.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Ze(u,no,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Ze(u,no,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ze(l,l.charAt(0)=="/"?uc:ac,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ze(l,lc)),s.join("")};function Ut(s){return new ue(s)}function Un(s,u,l){s.j=l?Je(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function On(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function eo(s,u,l){u instanceof tn?(s.i=u,hc(s.i,s.h)):(l||(u=Ze(u,cc)),s.i=new tn(u,s.h))}function W(s,u,l){s.i.set(u,l)}function Bn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Je(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ze(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,oc),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function oc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var no=/[#\/\?@]/g,ac=/[#\?:]/g,uc=/[#\?]/g,cc=/[#\?@]/g,lc=/#/g;function tn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Ht(s){s.g||(s.g=new Map,s.h=0,s.i&&ic(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}r=tn.prototype,r.add=function(s,u){Ht(this),this.i=null,s=Te(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function ro(s,u){Ht(s),u=Te(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function so(s,u){return Ht(s),u=Te(s,u),s.g.has(u)}r.forEach=function(s,u){Ht(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(u,I,d,this)},this)},this)},r.na=function(){Ht(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=s[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},r.V=function(s){Ht(this);let u=[];if(typeof s=="string")so(this,s)&&(u=u.concat(this.g.get(Te(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},r.set=function(s,u){return Ht(this),this.i=null,s=Te(this,s),so(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function io(s,u,l){ro(s,u),0<l.length&&(s.i=null,s.g.set(Te(s,u),S(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=R;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),s.push(I)}}return this.i=s.join("&")};function Te(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function hc(s,u){u&&!s.j&&(Ht(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(ro(this,d),io(this,I,l))},s)),s.j=u}function dc(s,u){const l=new Xe;if(c.Image){const d=new Image;d.onload=V(Xt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=V(Xt,l,"TestLoadImage: error",!1,u,d),d.onabort=V(Xt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=V(Xt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function fc(s,u){const l=new Xe,d=new AbortController,I=setTimeout(()=>{d.abort(),Xt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Xt(l,"TestPingServer: ok",!0,u):Xt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Xt(l,"TestPingServer: error",!1,u)})}function Xt(s,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function mc(){this.g=new Xu}function pc(s,u,l){const d=l||"";try{Zi(s,function(I,R){let b=I;f(I)&&(b=Xr(I)),u.push(d+R+"="+encodeURIComponent(b))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function qn(s){this.l=s.Ub||null,this.j=s.eb||!1}P(qn,Yr),qn.prototype.g=function(){return new jn(this.l,this.j)},qn.prototype.i=function(s){return function(){return s}}({});function jn(s,u){dt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(jn,dt),r=jn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,nn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function oo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?en(this):nn(this),this.readyState==3&&oo(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,en(this))},r.Qa=function(s){this.g&&(this.response=s,en(this))},r.ga=function(){this.g&&en(this)};function en(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nn(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function nn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ao(s){let u="";return st(s,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function as(s,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=ao(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,u,l))}function Y(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Y,dt);var gc=/^https?$/i,_c=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ts.g(),this.v=this.o?xi(this.o):xi(ts),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){uo(this,R);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(_c,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ho(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){uo(this,R)}};function uo(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,co(s),Kn(s)}function co(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),Kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?lo(this):this.bb())},r.bb=function(){lo(this)};function lo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)bi(s.Ea,0,s);else if(Tt(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=b===0){var I=String(s.D).match(to)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!gc.test(I?I.toLowerCase():"")}l=d}if(l)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<Ot(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",co(s)}}finally{Kn(s)}}}}function Kn(s,u){if(s.g){ho(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||Tt(s,"ready");try{l.onreadystatechange=d}catch{}}}function ho(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Hu(u)}};function fo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function yc(s){const u={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(G(s[d]))continue;var l=v(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}E(u,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function mo(s){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,s),this.cb=rn("retryDelaySeedMs",1e4,s),this.Wa=rn("forwardChannelMaxRetries",2,s),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(s&&s.concurrentRequestLimit),this.Da=new mc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=mo.prototype,r.la=8,r.G=1,r.connect=function(s,u,l,d){vt(0),this.W=s,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=wo(this,null,this.W),$n(this)};function us(s){if(po(s),s.G==3){var u=s.U++,l=Ut(s.I);if(W(l,"SID",s.K),W(l,"RID",u),W(l,"TYPE","terminate"),sn(s,l),u=new Wt(s,s.j,u),u.L=2,u.v=Bn(Ut(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ao(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ln(u)}Io(s)}function Gn(s){s.g&&(ls(s),s.g.cancel(),s.g=null)}function po(s){Gn(s),s.u&&(c.clearTimeout(s.u),s.u=null),zn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function $n(s){if(!Hi(s.h)&&!s.s){s.s=!0;var u=s.Ga;Ke||Vi(),Ge||(Ke(),Ge=!0),jr.add(u,s),s.B=0}}function Tc(s,u){return Xi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=He(w(s.Ga,s,u),Eo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Wt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=_o(this,I,u),l=Ut(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),sn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(ao(R)))+"&"+u:this.m&&as(l,this.m,R)),os(this.h,I),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",u),W(l,"SID","null"),I.T=!0,ns(I,l,null)):ns(I,l,u),this.G=2}}else this.G==3&&(s?go(this,s):this.i.length==0||Hi(this.h)||go(this))};function go(s,u){var l;u?l=u.l:l=s.U++;const d=Ut(s.I);W(d,"SID",s.K),W(d,"RID",l),W(d,"AID",s.T),sn(s,d),s.m&&s.o&&as(d,s.m,s.o),l=new Wt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=_o(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),os(s.h,l),ns(l,d,u)}function sn(s,u){s.H&&st(s.H,function(l,d){W(u,d,l)}),s.l&&Zi({},function(l,d){W(u,d,l)})}function _o(s,u,l){l=Math.min(s.i.length,l);var d=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=I[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let z=!0;for(let it=0;it<l;it++){let j=I[it].g;const ft=I[it].map;if(j-=R,0>j)R=Math.max(0,I[it].g-100),z=!1;else try{pc(ft,b,"req"+j+"_")}catch{d&&d(ft)}}if(z){d=b.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,d}function yo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Ke||Vi(),Ge||(Ke(),Ge=!0),jr.add(u,s),s.v=0}}function cs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=He(w(s.Fa,s),Eo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,To(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=He(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Gn(this),To(this))};function ls(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function To(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Ut(s.qa);W(u,"RID","rpc"),W(u,"SID",s.K),W(u,"AID",s.T),W(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(u,"TO",s.ja),W(u,"TYPE","xmlhttp"),sn(s,u),s.m&&s.o&&as(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Bn(Ut(u)),l.m=null,l.P=!0,$i(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Gn(this),cs(this),vt(19))};function zn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function vo(s,u){var l=null;if(s.g==u){zn(s),ls(s),s.g=null;var d=2}else if(is(s.h,u))l=u.D,Yi(s.h,u),d=1;else return;if(s.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;d=Nn(),Tt(d,new qi(d,l)),$n(s)}else yo(s);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&Tc(s,u)||d==2&&cs(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),I){case 1:ce(s,5);break;case 4:ce(s,10);break;case 3:ce(s,6);break;default:ce(s,2)}}}function Eo(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function ce(s,u){if(s.j.info("Error code "+u),u==2){var l=w(s.fb,s),d=s.Xa;const I=!d;d=new ue(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Un(d,"https"),Bn(d),I?dc(d.toString(),l):fc(d.toString(),l)}else vt(2);s.G=0,s.l&&s.l.sa(u),Io(s),po(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Io(s){if(s.G=0,s.ka=[],s.l){const u=Ji(s.h);(u.length!=0||s.i.length!=0)&&(k(s.ka,u),k(s.ka,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.ra()}}function wo(s,u,l){var d=l instanceof ue?Ut(l):new ue(l);if(d.g!="")u&&(d.g=u+"."+d.g),On(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new ue(null);d&&Un(R,d),u&&(R.g=u),I&&On(R,I),l&&(R.l=l),d=R}return l=s.D,u=s.ya,l&&u&&W(d,l,u),W(d,"VER",s.la),sn(s,d),d}function Ao(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new Y(new qn({eb:l})):new Y(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}r=Ro.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qn(){}Qn.prototype.g=function(s,u){return new wt(s,u)};function wt(s,u){dt.call(this),this.g=new mo(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!G(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new ve(this)}P(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){us(this.g)},wt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Xr(s),s=l);u.i.push(new nc(u.Ya++,s)),u.G==3&&$n(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,us(this.g),delete this.g,wt.aa.N.call(this)};function Po(s){Jr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}P(Po,Jr);function Vo(){Zr.call(this),this.status=1}P(Vo,Zr);function ve(s){this.g=s}P(ve,Ro),ve.prototype.ua=function(){Tt(this.g,"a")},ve.prototype.ta=function(s){Tt(this.g,new Po(s))},ve.prototype.sa=function(s){Tt(this.g,new Vo)},ve.prototype.ra=function(){Tt(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Ia=function(){return new Qn},Ea=function(){return Nn()},va=oe,gs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,Zn=Fn,ji.COMPLETE="complete",Ta=ji,Li.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,an=Li,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ya=Y}).apply(typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{});const Mo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Le="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new vc("@firebase/firestore");function on(){return de.logLevel}function F(r,...t){if(de.logLevel<=Yt.DEBUG){const e=t.map(Ks);de.debug(`Firestore (${Le}): ${r}`,...e)}}function qt(r,...t){if(de.logLevel<=Yt.ERROR){const e=t.map(Ks);de.error(`Firestore (${Le}): ${r}`,...e)}}function Pe(r,...t){if(de.logLevel<=Yt.WARN){const e=t.map(Ks);de.warn(`Firestore (${Le}): ${r}`,...e)}}function Ks(r){if(typeof r=="string")return r;try{/**
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
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Le}) INTERNAL ASSERTION FAILED: `+r;throw qt(t),new Error(t)}function $(r,t){r||L()}function O(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends wc{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class bc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Dc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string"),new wa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new gt(t)}}class Nc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Nc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){$(this.o===void 0);const n=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new xc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Aa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Uc(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function Ve(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pn{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return pn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends pn{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Oc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends pn{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Oc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(H.fromString(t))}static fromName(t){return new x(H.fromString(t).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new H(t.slice()))}}function Bc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new te(i,x.empty(),t)}function qc(r){return new te(r.readTime,r.key,-1)}class te{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new te(U.min(),x.empty(),-1)}static max(){return new te(U.max(),x.empty(),-1)}}function jc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
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
 */async function wn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Kc)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new M((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof M?e:M.resolve(e)}catch(e){return M.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):M.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):M.reject(e)}static resolve(t){return new M((e,n)=>{e(t)})}static reject(t){return new M((e,n)=>{n(t)})}static waitFor(t){return new M((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=M.resolve(!1);for(const n of t)e=e.next(i=>i?M.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new M((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new M((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function $c(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function An(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Gs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Gs.oe=-1;function Ir(r){return r==null}function sr(r){return r===0&&1/r==-1/0}function zc(r){return typeof r=="number"&&Number.isInteger(r)&&!sr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(t){return new bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new At([])}unionWith(t){let e=new ut(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pa("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Qc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(r){if($(!!r),typeof r=="string"){let t=0;const e=Qc.exec(r);if($(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fe(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */function $s(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function zs(r){const t=r.mapValue.fields.__previous_value__;return $s(t)?zs(t):t}function gn(r){const t=ee(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,n,i,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class _n{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Yn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function me(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$s(r)?4:Xc(r)?9007199254740991:Hc(r)?10:11:L()}function Dt(r,t){if(r===t)return!0;const e=me(r);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return gn(r).isEqual(gn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ee(i.timestampValue),c=ee(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return fe(i.bytesValue).isEqual(fe(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=J(i.doubleValue),c=J(o.doubleValue);return a===c?sr(a)===sr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Ve(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ko(a)!==ko(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Dt(a[h],c[h])))return!1;return!0}(r,t);default:return L()}}function yn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Ce(r,t){if(r===t)return 0;const e=me(r),n=me(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=J(o.integerValue||o.doubleValue),h=J(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Do(r.timestampValue,t.timestampValue);case 4:return Do(gn(r),gn(t));case 5:return K(r.stringValue,t.stringValue);case 6:return function(o,a){const c=fe(o),h=fe(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=K(c[f],h[f]);if(m!==0)return m}return K(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=K(J(o.latitude),J(a.latitude));return c!==0?c:K(J(o.longitude),J(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return No(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const T=o.fields||{},w=a.fields||{},V=(c=T.value)===null||c===void 0?void 0:c.arrayValue,P=(h=w.value)===null||h===void 0?void 0:h.arrayValue,S=K(((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return S!==0?S:No(V,P)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Yn.mapValue&&a===Yn.mapValue)return 0;if(o===Yn.mapValue)return 1;if(a===Yn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const w=K(h[T],m[T]);if(w!==0)return w;const V=Ce(c[h[T]],f[m[T]]);if(V!==0)return V}return K(h.length,m.length)}(r.mapValue,t.mapValue);default:throw L()}}function Do(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=ee(r),n=ee(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function No(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ce(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function Se(r){return _s(r)}function _s(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ee(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return fe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=_s(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${_s(e.fields[a])}`;return i+"}"}(r.mapValue):L()}function Fo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ys(r){return!!r&&"integerValue"in r}function Qs(r){return!!r&&"arrayValue"in r}function xo(r){return!!r&&"nullValue"in r}function Lo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tr(r){return!!r&&"mapValue"in r}function Hc(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return pe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=hn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Xc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=at.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=hn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];tr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){pe(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Et(hn(this.value))}}function Va(r){const t=[];return pe(r.fields,(e,n)=>{const i=new at([e]);if(tr(n)){const o=Va(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,U.min(),U.min(),U.min(),Et.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,U.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,U.min(),U.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,U.min(),U.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ir{constructor(t,e){this.position=t,this.inclusive=e}}function Uo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(a.referenceValue),e.key):n=Ce(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Oo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ca{}class tt extends Ca{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Zc(t,e,n):e==="array-contains"?new nl(t,n):e==="in"?new rl(t,n):e==="not-in"?new sl(t,n):e==="array-contains-any"?new il(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new tl(t,n):new el(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ce(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Ca{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return Sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sa(r){return r.op==="and"}function Ma(r){return Jc(r)&&Sa(r)}function Jc(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function Ts(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Se(r.value);if(Ma(r))return r.filters.map(t=>Ts(t)).join(",");{const t=r.filters.map(e=>Ts(e)).join(",");return`${r.op}(${t})`}}function ka(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(r,t):r instanceof Ct?function(n,i){return i instanceof Ct&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&ka(a,i.filters[c]),!0):!1}(r,t):void L()}function ba(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Se(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(ba).join(" ,")+"}"}(r):"Filter"}class Zc extends tt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class tl extends tt{constructor(t,e){super(t,"in",e),this.keys=Da("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class el extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Da("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Da(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class nl extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&yn(e.arrayValue,this.value)}}class rl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yn(this.value.arrayValue,e)}}class sl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yn(this.value.arrayValue,e)}}class il extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>yn(this.value.arrayValue,n))}}/**
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
 */class ol{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Bo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new ol(r,t,e,n,i,o,a)}function Ws(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ts(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Se(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Se(n)).join(",")),t.ue=e}return t.ue}function Hs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Yc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ka(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Oo(r.startAt,t.startAt)&&Oo(r.endAt,t.endAt)}function vs(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function al(r,t,e,n,i,o,a,c){return new Ue(r,t,e,n,i,o,a,c)}function wr(r){return new Ue(r)}function qo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Na(r){return r.collectionGroup!==null}function dn(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ut(at.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Tn(o,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new Tn(at.keyField(),n))}return t.ce}function Mt(r){const t=O(r);return t.le||(t.le=ul(t,dn(r))),t.le}function ul(r,t){if(r.limitType==="F")return Bo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Tn(i.field,o)});const e=r.endAt?new ir(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ir(r.startAt.position,r.startAt.inclusive):null;return Bo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Es(r,t){const e=r.filters.concat([t]);return new Ue(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function or(r,t,e){return new Ue(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ar(r,t){return Hs(Mt(r),Mt(t))&&r.limitType===t.limitType}function Fa(r){return`${Ws(Mt(r))}|lt:${r.limitType}`}function Ie(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ba(i)).join(", ")}]`),Ir(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Se(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Se(i)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function Rr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of dn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,h){const f=Uo(a,c,h);return a.inclusive?f<=0:f<0}(n.startAt,dn(n),i)||n.endAt&&!function(a,c,h){const f=Uo(a,c,h);return a.inclusive?f>=0:f>0}(n.endAt,dn(n),i))}(r,t)}function cl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xa(r){return(t,e)=>{let n=!1;for(const i of dn(r)){const o=ll(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function ll(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ce(h,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ra(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new X(x.comparator);function jt(){return hl}const La=new X(x.comparator);function un(...r){let t=La;for(const e of r)t=t.insert(e.key,e);return t}function Ua(r){let t=La;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function le(){return fn()}function Oa(){return fn()}function fn(){return new Oe(r=>r.toString(),(r,t)=>r.isEqual(t))}const dl=new X(x.comparator),fl=new ut(x.comparator);function B(...r){let t=fl;for(const e of r)t=t.add(e);return t}const ml=new ut(K);function pl(){return ml}/**
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
 */function Xs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function Ba(r){return{integerValue:""+r}}function gl(r,t){return zc(t)?Ba(t):Xs(r,t)}/**
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
 */class Pr{constructor(){this._=void 0}}function _l(r,t,e){return r instanceof ar?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$s(o)&&(o=zs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):r instanceof Me?ja(r,t):r instanceof ke?Ka(r,t):function(i,o){const a=qa(i,o),c=jo(a)+jo(i.Pe);return ys(a)&&ys(i.Pe)?Ba(c):Xs(i.serializer,c)}(r,t)}function yl(r,t,e){return r instanceof Me?ja(r,t):r instanceof ke?Ka(r,t):e}function qa(r,t){return r instanceof ur?function(n){return ys(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class ar extends Pr{}class Me extends Pr{constructor(t){super(),this.elements=t}}function ja(r,t){const e=Ga(t);for(const n of r.elements)e.some(i=>Dt(i,n))||e.push(n);return{arrayValue:{values:e}}}class ke extends Pr{constructor(t){super(),this.elements=t}}function Ka(r,t){let e=Ga(t);for(const n of r.elements)e=e.filter(i=>!Dt(i,n));return{arrayValue:{values:e}}}class ur extends Pr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function jo(r){return J(r.integerValue||r.doubleValue)}function Ga(r){return Qs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e){this.field=t,this.transform=e}}function Tl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Me&&i instanceof Me||n instanceof ke&&i instanceof ke?Ve(n.elements,i.elements,Dt):n instanceof ur&&i instanceof ur?Dt(n.Pe,i.Pe):n instanceof ar&&i instanceof ar}(r.transform,t.transform)}class vl{constructor(t,e){this.version=t,this.transformResults=e}}class Rt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Vr{}function za(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ys(r.key,Rt.none()):new Rn(r.key,r.data,Rt.none());{const e=r.data,n=Et.empty();let i=new ut(at.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new ie(r.key,n,new At(i.toArray()),Rt.none())}}function El(r,t,e){r instanceof Rn?function(i,o,a){const c=i.value.clone(),h=Go(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ie?function(i,o,a){if(!er(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Go(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Qa(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(r,t,e,n){return r instanceof Rn?function(o,a,c,h){if(!er(o.precondition,a))return c;const f=o.value.clone(),m=$o(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ie?function(o,a,c,h){if(!er(o.precondition,a))return c;const f=$o(o.fieldTransforms,h,a),m=a.data;return m.setAll(Qa(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,a,c){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function Il(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=qa(n.transform,i||null);o!=null&&(e===null&&(e=Et.empty()),e.set(n.field,o))}return e||null}function Ko(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ve(n,i,(o,a)=>Tl(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Rn extends Vr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ie extends Vr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Go(r,t,e){const n=new Map;$(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,yl(a,c,e[i]))}return n}function $o(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,_l(o,a,t))}return n}class Ys extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wl extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&El(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Oa();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=za(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,(e,n)=>Ko(e,n))&&Ve(this.baseMutations,t.baseMutations,(e,n)=>Ko(e,n))}}class Js{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){$(t.mutations.length===n.length);let i=function(){return dl}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Js(t,e,n,i)}}/**
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
 */class Rl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Pl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,q;function Vl(r){switch(r){default:return L();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Wa(r){if(r===void 0)return qt("GRPC error has no .code"),C.UNKNOWN;switch(r){case Z.OK:return C.OK;case Z.CANCELLED:return C.CANCELLED;case Z.UNKNOWN:return C.UNKNOWN;case Z.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Z.INTERNAL:return C.INTERNAL;case Z.UNAVAILABLE:return C.UNAVAILABLE;case Z.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Z.NOT_FOUND:return C.NOT_FOUND;case Z.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Z.ABORTED:return C.ABORTED;case Z.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Z.DATA_LOSS:return C.DATA_LOSS;default:return L()}}(q=Z||(Z={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cl(){return new TextEncoder}/**
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
 */const Sl=new he([4294967295,4294967295],0);function zo(r){const t=Cl().encode(r),e=new _a;return e.update(t),new Uint8Array(e.digest())}function Qo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,n],0),new he([i,o],0)]}class Zs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new cn(`Invalid padding: ${e}`);if(n<0)throw new cn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new cn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(he.fromNumber(n)));return i.compare(Sl)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=zo(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Zs(o,i,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=zo(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Cr(U.min(),i,new X(K),jt(),B())}}class Pn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Pn(n,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Ha{constructor(t,e){this.targetId=t,this.me=e}}class Xa{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.fe=0,this.ge=Xo(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),n=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new Pn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Xo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ml{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=Ho(),this.Qe=new X(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(vs(o))if(n===0){const a=new x(o.path);this.Ue(e,a,_t.newNoDocument(a,U.min()))}else $(n===1);else{const a=this.Ye(e);if(a!==n){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=fe(n).toUint8Array()}catch(h){if(h instanceof Pa)return Pe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Zs(a,i,o)}catch(h){return Pe(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&vs(c.target)){const h=new x(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Cr(t,e,this.Qe,this.ke,n);return this.ke=jt(),this.qe=Ho(),this.Qe=new X(K),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Wo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Wo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ho(){return new X(x.comparator)}function Xo(){return new X(x.comparator)}const kl={asc:"ASCENDING",desc:"DESCENDING"},bl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dl={and:"AND",or:"OR"};class Nl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Is(r,t){return r.useProto3Json||Ir(t)?t:{value:t}}function cr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ya(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Fl(r,t){return cr(r,t.toTimestamp())}function kt(r){return $(!!r),U.fromTimestamp(function(e){const n=ee(e);return new et(n.seconds,n.nanos)}(r))}function ti(r,t){return ws(r,t).canonicalString()}function ws(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ja(r){const t=H.fromString(r);return $(ru(t)),t}function As(r,t){return ti(r.databaseId,t.path)}function ds(r,t){const e=Ja(t);if(e.get(1)!==r.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(tu(e))}function Za(r,t){return ti(r.databaseId,t)}function xl(r){const t=Ja(r);return t.length===4?H.emptyPath():tu(t)}function Rs(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tu(r){return $(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Yo(r,t,e){return{name:As(r,t),fields:e.value.mapValue.fields}}function Ll(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?($(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):($(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?C.UNKNOWN:Wa(f.code);return new D(m,f.message||"")}(a);e=new Xa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ds(r,n.document.name),o=kt(n.document.updateTime),a=n.document.createTime?kt(n.document.createTime):U.min(),c=new Et({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(i,o,a,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new nr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ds(r,n.document),o=n.readTime?kt(n.readTime):U.min(),a=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new nr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ds(r,n.document),o=n.removedTargetIds||[];e=new nr([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Pl(i,o),c=n.targetId;e=new Ha(c,a)}}return e}function Ul(r,t){let e;if(t instanceof Rn)e={update:Yo(r,t.key,t.value)};else if(t instanceof Ys)e={delete:As(r,t.key)};else if(t instanceof ie)e={update:Yo(r,t.key,t.data),updateMask:Ql(t.fieldMask)};else{if(!(t instanceof wl))return L();e={verify:As(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Me)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ke)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Fl(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Ol(r,t){return r&&r.length>0?($(t!==void 0),r.map(e=>function(i,o){let a=i.updateTime?kt(i.updateTime):kt(o);return a.isEqual(U.min())&&(a=kt(o)),new vl(a,i.transformResults||[])}(e,t))):[]}function Bl(r,t){return{documents:[Za(r,t.path)]}}function ql(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Za(r,i);const o=function(f){if(f.length!==0)return nu(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(w){return{field:we(w.field),direction:Gl(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Is(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function jl(r){let t=xl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){$(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const w=eu(T);return w instanceof Ct&&Ma(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(w=>function(P){return new Tn(Ae(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,Ir(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(T){const w=!!T.before,V=T.values||[];return new ir(V,w)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const w=!T.before,V=T.values||[];return new ir(V,w)}(e.endAt)),al(t,i,a,o,c,"F",h,f)}function Kl(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function eu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ae(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ae(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ae(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ae(e.unaryFilter.field);return tt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(Ae(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>eu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function Gl(r){return kl[r]}function $l(r){return bl[r]}function zl(r){return Dl[r]}function we(r){return{fieldPath:r.canonicalString()}}function Ae(r){return at.fromServerFormat(r.fieldPath)}function nu(r){return r instanceof tt?function(e){if(e.op==="=="){if(Lo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(xo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(xo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:$l(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(i=>nu(i));return n.length===1?n[0]:{compositeFilter:{op:zl(e.op),filters:n}}}(r):L()}function Ql(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ru(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,n,i,o=U.min(),a=U.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t){this.ct=t}}function Hl(r){const t=jl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?or(t,t.limit,"L"):t}/**
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
 */class Xl{constructor(){this.un=new Yl}addToCollectionParentIndex(t,e){return this.un.add(e),M.resolve()}getCollectionParents(t,e){return M.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return M.resolve()}deleteFieldIndex(t,e){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,e){return M.resolve()}getDocumentsMatchingTarget(t,e){return M.resolve(null)}getIndexType(t,e){return M.resolve(0)}getFieldIndexes(t,e){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,e){return M.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return M.resolve(te.min())}updateCollectionGroup(t,e,n){return M.resolve()}updateIndexEntries(t,e){return M.resolve()}}class Yl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ut(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ut(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new be(0)}static kn(){return new be(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.changes=new Oe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?M.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&mn(n.mutation,i,At.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const i=le();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=le();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=jt();const a=fn(),c=function(){return fn()}();return e.forEach((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof ie)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),mn(m.mutation,f,m.mutation.getFieldMask(),et.now())):a.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var T;return c.set(f,new Zl(m,(T=a.get(f))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const n=fn();let i=new X((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||At.empty();m=c.applyToLocalView(f,m),n.set(h,m);const T=(i.get(c.batchId)||B()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,T=Oa();m.forEach(w=>{if(!o.has(w)){const V=za(e.get(w),n.get(w));V!==null&&T.set(w,V),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return M.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Na(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):M.resolve(le());let c=-1,h=o;return a.next(f=>M.forEach(f,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?M.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,B())).next(m=>({batchId:c,changes:Ua(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=un();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next(c=>M.forEach(c,h=>{const f=function(T,w){return new Ue(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(m=>{m.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let c=un();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,f,At.empty(),et.now()),Rr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class eh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return M.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(e)),M.resolve()}getNamedQuery(t,e){return M.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Hl(i.bundledQuery),readTime:kt(i.readTime)}}(e)),M.resolve()}}/**
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
 */class nh{constructor(){this.overlays=new X(x.comparator),this.Ir=new Map}getOverlay(t,e){return M.resolve(this.overlays.get(e))}getOverlays(t,e){const n=le();return M.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),M.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),M.resolve()}getOverlaysForCollection(t,e,n){const i=le(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return M.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=le(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return M.resolve(c)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Rl(e,n));let o=this.Ir.get(e);o===void 0&&(o=B(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
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
 */class rh{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(rt.Er)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Al(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,e){return M.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],a=>{const c=this.Dr(a.wr);o.push(c)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ut(K);return e.forEach(i=>{const o=new rt(i,0),a=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{n=n.add(c.wr)})}),M.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const a=new rt(new x(o),0);let c=new ut(K);return this.br.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.wr)),!0)},a),M.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){$(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return M.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new rt(e,0),i=this.br.firstAfterOrEqual(n);return M.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.Mr=t,this.docs=function(){return new X(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return M.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=jt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),M.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=jt();const a=e.path,c=new x(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||jc(qc(m),n)<=0||(i.has(m.key)||Rr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}Or(t,e){return M.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new oh(this)}getSize(t){return M.resolve(this.size)}}class oh extends Jl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),M.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.persistence=t,this.Nr=new Oe(e=>Ws(e),Hs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ei,this.targetCount=0,this.kr=be.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),M.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new be(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,M.resolve()}updateTargetData(t,e){return this.Kn(e),M.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),M.waitFor(o).next(()=>i)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return M.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),M.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),M.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),M.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return M.resolve(n)}containsKey(t,e){return M.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Gs(0),this.Kr=!1,this.Kr=!0,this.$r=new rh,this.referenceDelegate=t(this),this.Ur=new ah(this),this.indexManager=new Xl,this.remoteDocumentCache=function(i){return new ih(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Wl(e),this.Gr=new eh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new sh(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){F("MemoryPersistence","Starting transaction:",t);const i=new ch(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return M.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class ch extends Gc{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Jr=new ei,this.Yr=null}static Zr(t){return new ni(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),M.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),M.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),M.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,n=>{const i=x.fromPath(n);return this.ei(t,i).next(o=>{o||e.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return M.or([()=>M.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class hh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sc()?8:$c(Mc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new lh;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(on()<=Yt.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(on()<=Yt.DEBUG&&F("QueryEngine","Query:",Ie(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(on()<=Yt.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):M.resolve())}Yi(t,e){if(qo(e))return M.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=or(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=B(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,or(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,n,i){return qo(e)||i.isEqual(U.min())?M.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,i)?M.resolve(null):(on()<=Yt.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ie(e)),this.rs(t,a,e,Bc(i,-1)).next(c=>c))})}ts(t,e){let n=new ut(xa(t));return e.forEach((i,o)=>{Rr(t,o)&&(n=n.add(o))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return on()<=Yt.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.Ji.getDocumentsMatchingQuery(t,e,te.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class dh{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new X(K),this._s=new Oe(o=>Ws(o),Hs),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new th(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function fh(r,t,e,n){return new dh(r,t,e,n)}async function su(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=B();for(const f of i){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function mh(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const T=f.batch,w=T.keys();let V=M.resolve();return w.forEach(P=>{V=V.next(()=>m.getEntry(h,P)).next(S=>{const k=f.docVersions.get(P);$(k!==null),S.version.compareTo(k)<0&&(T.applyToRemoteDocument(S,f),S.isValidDocument()&&(S.setReadTime(f.commitVersion),m.addEntry(S)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=B();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function iu(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ph(r,t){const e=O(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((m,T)=>{const w=i.get(T);if(!w)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,T)));let V=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?V=V.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,n)),i=i.insert(T,V),function(S,k,N){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(w,V,m)&&c.push(e.Ur.updateTargetData(o,V))});let h=jt(),f=B();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(gh(o,a,t.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!n.isEqual(U.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return M.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function gh(r,t,e){let n=B(),i=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=jt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function _h(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function yh(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(o=>o?(i=o,M.resolve(i)):e.Ur.allocateTargetId(n).next(a=>(i=new Jt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Ps(r,t,e){const n=O(r),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!An(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function Jo(r,t,e){const n=O(r);let i=U.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const T=O(h),w=T._s.get(m);return w!==void 0?M.resolve(T.os.get(w)):T.Ur.getTargetData(f,m)}(n,a,Mt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?i:U.min(),e?o:B())).next(c=>(Th(n,cl(t),c),{documents:c,Ts:o})))}function Th(r,t,e){let n=r.us.get(t)||U.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Zo{constructor(){this.activeTargetIds=pl()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vh{constructor(){this.so=new Zo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Eh{_o(t){}shutdown(){}}/**
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
 */let Jn=null;function fs(){return Jn===null?Jn=function(){return 268435456+Math.round(2147483648*Math.random())}():Jn++,"0x"+Jn.toString(16)}/**
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
 */const Ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Ah extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,a){const c=fs(),h=this.xo(e,n.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(m=>(F("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw Pe("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",i),m})}Lo(e,n,i,o,a,c){return this.Mo(e,n,i,o,a)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Le}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const i=Ih[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=fs();return new Promise((a,c)=>{const h=new ya;h.setWithCredentials(!0),h.listenOnce(Ta.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zn.NO_ERROR:const m=h.getResponseJson();F(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Zn.TIMEOUT:F(pt,`RPC '${t}' ${o} timed out`),c(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const T=h.getStatus();if(F(pt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const V=w==null?void 0:w.error;if(V&&V.status&&V.message){const P=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(N)>=0?N:C.UNKNOWN}(V.status);c(new D(P,V.message))}else c(new D(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new D(C.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{F(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);F(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}Bo(t,e,n){const i=fs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ia(),c=Ea(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");F(pt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const T=a.createWebChannel(m,h);let w=!1,V=!1;const P=new wh({Io:k=>{V?F(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(w||(F(pt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),F(pt,`RPC '${t}' stream ${i} sending:`,k),T.send(k))},To:()=>T.close()}),S=(k,N,G)=>{k.listen(N,Q=>{try{G(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return S(T,an.EventType.OPEN,()=>{V||(F(pt,`RPC '${t}' stream ${i} transport opened.`),P.yo())}),S(T,an.EventType.CLOSE,()=>{V||(V=!0,F(pt,`RPC '${t}' stream ${i} transport closed`),P.So())}),S(T,an.EventType.ERROR,k=>{V||(V=!0,Pe(pt,`RPC '${t}' stream ${i} transport errored:`,k),P.So(new D(C.UNAVAILABLE,"The operation could not be completed")))}),S(T,an.EventType.MESSAGE,k=>{var N;if(!V){const G=k.data[0];$(!!G);const Q=G,nt=Q.error||((N=Q[0])===null||N===void 0?void 0:N.error);if(nt){F(pt,`RPC '${t}' stream ${i} received error:`,nt);const xt=nt.status;let st=function(_){const y=Z[_];if(y!==void 0)return Wa(y)}(xt),E=nt.message;st===void 0&&(st=C.INTERNAL,E="Unknown error status: "+xt+" with message "+nt.message),V=!0,P.So(new D(st,E)),T.close()}else F(pt,`RPC '${t}' stream ${i} received:`,G),P.bo(G)}}),S(c,va.STAT_EVENT,k=>{k.stat===gs.PROXY?F(pt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===gs.NOPROXY&&F(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ms(){return typeof document<"u"?document:null}/**
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
 */function Sr(r){return new Nl(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class au{constructor(t,e,n,i,o,a,c,h){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ou(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rh extends au{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ll(this.serializer,t),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?kt(a.readTime):U.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Rs(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=vs(h)?{documents:Bl(o,h)}:{query:ql(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ya(o,a.resumeToken);const f=Is(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=cr(o,a.snapshotVersion.toTimestamp());const f=Is(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Kl(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Rs(this.serializer),e.removeTarget=t,this.a_(e)}}class Ph extends au{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return $(!!t.streamToken),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){$(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Ol(t.writeResults,t.commitTime),n=kt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Rs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ul(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ws(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,ws(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ch{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qt(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{ge(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=O(h);f.L_.add(4),await Vn(f),f.q_.set("Unknown"),f.L_.delete(4),await Mr(f)}(this))})}),this.q_=new Ch(n,i)}}async function Mr(r){if(ge(r))for(const t of r.B_)await t(!0)}async function Vn(r){for(const t of r.B_)await t(!1)}function uu(r,t){const e=O(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ai(e)?oi(e):Be(e).r_()&&ii(e,t))}function si(r,t){const e=O(r),n=Be(e);e.N_.delete(t),n.r_()&&cu(e,t),e.N_.size===0&&(n.r_()?n.o_():ge(e)&&e.q_.set("Unknown"))}function ii(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Be(r).A_(t)}function cu(r,t){r.Q_.xe(t),Be(r).R_(t)}function oi(r){r.Q_=new Ml({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Be(r).start(),r.q_.v_()}function ai(r){return ge(r)&&!Be(r).n_()&&r.N_.size>0}function ge(r){return O(r).L_.size===0}function lu(r){r.Q_=void 0}async function Mh(r){r.q_.set("Online")}async function kh(r){r.N_.forEach((t,e)=>{ii(r,t)})}async function bh(r,t){lu(r),ai(r)?(r.q_.M_(t),oi(r)):r.q_.set("Unknown")}async function Dh(r,t,e){if(r.q_.set("Online"),t instanceof Xa&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(r,t)}catch(n){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await lr(r,n)}else if(t instanceof nr?r.Q_.Ke(t):t instanceof Ha?r.Q_.He(t):r.Q_.We(t),!e.isEqual(U.min()))try{const n=await iu(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),cu(o,h);const T=new Jt(m.target,h,f,m.sequenceNumber);ii(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){F("RemoteStore","Failed to raise snapshot:",n),await lr(r,n)}}async function lr(r,t,e){if(!An(t))throw t;r.L_.add(1),await Vn(r),r.q_.set("Offline"),e||(e=()=>iu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await Mr(r)})}function hu(r,t){return t().catch(e=>lr(r,e,t))}async function kr(r){const t=O(r),e=ne(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Nh(t);)try{const i=await _h(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,Fh(t,i)}catch(i){await lr(t,i)}du(t)&&fu(t)}function Nh(r){return ge(r)&&r.O_.length<10}function Fh(r,t){r.O_.push(t);const e=ne(r);e.r_()&&e.V_&&e.m_(t.mutations)}function du(r){return ge(r)&&!ne(r).n_()&&r.O_.length>0}function fu(r){ne(r).start()}async function xh(r){ne(r).p_()}async function Lh(r){const t=ne(r);for(const e of r.O_)t.m_(e.mutations)}async function Uh(r,t,e){const n=r.O_.shift(),i=Js.from(n,t,e);await hu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await kr(r)}async function Oh(r,t){t&&ne(r).V_&&await async function(n,i){if(function(a){return Vl(a)&&a!==C.ABORTED}(i.code)){const o=n.O_.shift();ne(n).s_(),await hu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await kr(n)}}(r,t),du(r)&&fu(r)}async function ea(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const n=ge(e);e.L_.add(3),await Vn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Mr(e)}async function Bh(r,t){const e=O(r);t?(e.L_.delete(2),await Mr(e)):t||(e.L_.add(2),await Vn(e),e.q_.set("Unknown"))}function Be(r){return r.K_||(r.K_=function(e,n,i){const o=O(e);return o.w_(),new Rh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Mh.bind(null,r),Ro:kh.bind(null,r),mo:bh.bind(null,r),d_:Dh.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),ai(r)?oi(r):r.q_.set("Unknown")):(await r.K_.stop(),lu(r))})),r.K_}function ne(r){return r.U_||(r.U_=function(e,n,i){const o=O(e);return o.w_(),new Ph(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xh.bind(null,r),mo:Oh.bind(null,r),f_:Lh.bind(null,r),g_:Uh.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await kr(r)):(await r.U_.stop(),r.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new ui(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(r,t){if(qt("AsyncQueue",`${t}: ${r}`),An(r))return new D(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=un(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new Re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Re;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.W_=new X(x.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class De{constructor(t,e,n,i,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new De(t,e,Re.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class jh{constructor(){this.queries=ra(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=O(e),o=i.queries;i.queries=ra(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(n)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function ra(){return new Oe(r=>Fa(r),Ar)}async function li(r,t){const e=O(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new qh,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ci(a,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&di(e)}async function hi(r,t){const e=O(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Kh(r,t){const e=O(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(i)&&(n=!0);a.z_=i}}n&&di(e)}function Gh(r,t,e){const n=O(r),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function di(r){r.Y_.forEach(t=>{t.next()})}var Vs,sa;(sa=Vs||(Vs={})).ea="default",sa.Cache="cache";class fi{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new De(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Vs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class $h{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=xa(t),this.Ra=new Re(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new na,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,T)=>{const w=i.get(m),V=Rr(this.query,T)?T:null,P=!!w&&this.mutatedKeys.has(w.key),S=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let k=!1;w&&V?w.data.isEqual(V.data)?P!==S&&(n.track({type:3,doc:V}),k=!0):this.ga(w,V)||(n.track({type:2,doc:V}),k=!0,(h&&this.Aa(V,h)>0||f&&this.Aa(V,f)<0)&&(c=!0)):!w&&V?(n.track({type:0,doc:V}),k=!0):w&&!V&&(n.track({type:1,doc:w}),k=!0,(h||f)&&(c=!0)),k&&(V?(a=a.add(V),o=S?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ra:a,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,T)=>function(V,P){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return S(V)-S(P)}(m.type,T.type)||this.Aa(m.doc,T.doc)),this.pa(n),i=i!=null&&i;const c=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new De(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new na,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new pu(n))}),this.da.forEach(n=>{t.has(n)||e.push(new mu(n))}),e}ba(t){this.Ta=t.Ts,this.da=B();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return De.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qh{constructor(t){this.key=t,this.va=!1}}class Wh{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Oe(c=>Fa(c),Ar),this.Ma=new Map,this.xa=new Set,this.Oa=new X(x.comparator),this.Na=new Map,this.La=new ei,this.Ba={},this.ka=new Map,this.qa=be.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hh(r,t,e=!0){const n=Eu(r);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await gu(n,t,e,!0),i}async function Xh(r,t){const e=Eu(r);await gu(e,t,!0,!1)}async function gu(r,t,e,n){const i=await yh(r.localStore,Mt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Yh(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&uu(r.remoteStore,i),c}async function Yh(r,t,e,n,i){r.Ka=(T,w,V)=>async function(S,k,N,G){let Q=k.view.ma(N);Q.ns&&(Q=await Jo(S.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,Q)));const nt=G&&G.targetChanges.get(k.targetId),xt=G&&G.targetMismatches.get(k.targetId)!=null,st=k.view.applyChanges(Q,S.isPrimaryClient,nt,xt);return oa(S,k.targetId,st.wa),st.snapshot}(r,T,w,V);const o=await Jo(r.localStore,t,!0),a=new $h(t,o.Ts),c=a.ma(o.documents),h=Pn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=a.applyChanges(c,r.isPrimaryClient,h);oa(r,e,f.wa);const m=new zh(t,e,a);return r.Fa.set(t,m),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function Jh(r,t,e){const n=O(r),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(a=>!Ar(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ps(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&si(n.remoteStore,i.targetId),Cs(n,i.targetId)}).catch(wn)):(Cs(n,i.targetId),await Ps(n.localStore,i.targetId,!0))}async function Zh(r,t){const e=O(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),si(e.remoteStore,n.targetId))}async function td(r,t,e){const n=ad(r);try{const i=await function(a,c){const h=O(a),f=et.now(),m=c.reduce((V,P)=>V.add(P.key),B());let T,w;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let P=jt(),S=B();return h.cs.getEntries(V,m).next(k=>{P=k,P.forEach((N,G)=>{G.isValidDocument()||(S=S.add(N))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,P)).next(k=>{T=k;const N=[];for(const G of c){const Q=Il(G,T.get(G.key).overlayedDocument);Q!=null&&N.push(new ie(G.key,Q,Va(Q.value.mapValue),Rt.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,N,c)}).next(k=>{w=k;const N=k.applyToLocalDocumentSet(T,S);return h.documentOverlayCache.saveOverlays(V,k.batchId,N)})}).then(()=>({batchId:w.batchId,changes:Ua(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new X(K)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f}(n,i.batchId,e),await Cn(n,i.changes),await kr(n.remoteStore)}catch(i){const o=ci(i,"Failed to persist write");e.reject(o)}}async function _u(r,t){const e=O(r);try{const n=await ph(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?$(a.va):i.removedDocuments.size>0&&($(a.va),a.va=!1))}),await Cn(e,n,t)}catch(n){await wn(n)}}function ia(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=O(a);h.onlineState=c;let f=!1;h.queries.forEach((m,T)=>{for(const w of T.j_)w.Z_(c)&&(f=!0)}),f&&di(h)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ed(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let a=new X(x.comparator);a=a.insert(o,_t.newNoDocument(o,U.min()));const c=B().add(o),h=new Cr(U.min(),new Map,new X(K),a,c);await _u(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),mi(n)}else await Ps(n.localStore,t,!1).then(()=>Cs(n,t,e)).catch(wn)}async function nd(r,t){const e=O(r),n=t.batch.batchId;try{const i=await mh(e.localStore,t);Tu(e,n,null),yu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Cn(e,i)}catch(i){await wn(i)}}async function rd(r,t,e){const n=O(r);try{const i=await function(a,c){const h=O(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(T=>($(T!==null),m=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);Tu(n,t,e),yu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Cn(n,i)}catch(i){await wn(i)}}function yu(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function Tu(r,t,e){const n=O(r);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function Cs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||vu(r,n)})}function vu(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(si(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),mi(r))}function oa(r,t,e){for(const n of e)n instanceof mu?(r.La.addReference(n.key,t),sd(r,n)):n instanceof pu?(F("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||vu(r,n.key)):L()}function sd(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(F("SyncEngine","New document in limbo: "+e),r.xa.add(n),mi(r))}function mi(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new x(H.fromString(t)),n=r.qa.next();r.Na.set(n,new Qh(e)),r.Oa=r.Oa.insert(e,n),uu(r.remoteStore,new Jt(Mt(wr(e.path)),n,"TargetPurposeLimboResolution",Gs.oe))}}async function Cn(r,t,e){const n=O(r),i=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((c,h)=>{a.push(n.Ka(h,t,e).then(f=>{var m;if((f||e)&&n.isPrimaryClient){const T=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=ri.Wi(h.targetId,f);o.push(T)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(h,f){const m=O(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>M.forEach(f,w=>M.forEach(w.$i,V=>m.persistence.referenceDelegate.addReference(T,w.targetId,V)).next(()=>M.forEach(w.Ui,V=>m.persistence.referenceDelegate.removeReference(T,w.targetId,V)))))}catch(T){if(!An(T))throw T;F("LocalStore","Failed to update sequence numbers: "+T)}for(const T of f){const w=T.targetId;if(!T.fromCache){const V=m.os.get(w),P=V.snapshotVersion,S=V.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(w,S)}}}(n.localStore,o))}async function id(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const n=await su(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new D(C.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Cn(e,n.hs)}}function od(r,t){const e=O(r),n=e.Na.get(t);if(n&&n.va)return B().add(n.key);{let i=B();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function Eu(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=od.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ed.bind(null,t),t.Ca.d_=Kh.bind(null,t.eventManager),t.Ca.$a=Gh.bind(null,t.eventManager),t}function ad(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rd.bind(null,t),t}class hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return fh(this.persistence,new hh,t.initialUser,this.serializer)}Ga(t){return new uh(ni.Zr,this.serializer)}Wa(t){return new vh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hr.provider={build:()=>new hr};class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ia(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=id.bind(null,this.syncEngine),await Bh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jh}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),n=function(o){return new Ah(o)}(t.databaseInfo);return function(o,a,c,h){return new Vh(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new Sh(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ia(this.syncEngine,e,0),function(){return ta.D()?new ta:new Eh}())}createSyncEngine(t,e){return function(i,o,a,c,h,f,m){const T=new Wh(i,o,a,c,h,f);return m&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=O(i);F("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Vn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ss.provider={build:()=>new Ss};/**
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
 */class pi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Aa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ci(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ps(r,t){r.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await su(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function aa(r,t){r.asyncQueue.verifyOperationInProgress();const e=await cd(r);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ea(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ea(t.remoteStore,i)),r._onlineComponents=t}async function cd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ps(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Pe("Error using user provided cache. Falling back to memory cache: "+e),await ps(r,new hr)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ps(r,new hr);return r._offlineComponents}async function Iu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await aa(r,r._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await aa(r,new Ss))),r._onlineComponents}function ld(r){return Iu(r).then(t=>t.syncEngine)}async function dr(r){const t=await Iu(r),e=t.eventManager;return e.onListen=Hh.bind(null,t.syncEngine),e.onUnlisten=Jh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zh.bind(null,t.syncEngine),e}function hd(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new pi({next:w=>{m.Za(),a.enqueueAndForget(()=>hi(o,T));const V=w.docs.has(c);!V&&w.fromCache?f.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&w.fromCache&&h&&h.source==="server"?f.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new fi(wr(c.path),m,{includeMetadataChanges:!0,_a:!0});return li(o,T)}(await dr(r),r.asyncQueue,t,e,n)),n.promise}function dd(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new pi({next:w=>{m.Za(),a.enqueueAndForget(()=>hi(o,T)),w.fromCache&&h.source==="server"?f.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),T=new fi(c,m,{includeMetadataChanges:!0,_a:!0});return li(o,T)}(await dr(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Au(r,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function fd(r,t,e,n){if(t===!0&&n===!0)throw new D(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ca(r){if(!x.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function la(r){if(x.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function br(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function It(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=br(r);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class ha{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Dr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ha({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ha(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kc;switch(n.type){case"firstParty":return new Fc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ua.get(e);n&&(F("ComponentProvider","Removing Datastore"),ua.delete(e),n.terminate())}(this),Promise.resolve()}}function md(r,t,e,n={}){var i;const o=(r=It(r,Dr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=gt.MOCK_USER;else{c=Vc(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}r._authCredentials=new bc(new wa(c,h))}}/**
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
 */class $t{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new $t(this.firestore,t,this._query)}}class yt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Zt extends $t{constructor(t,e,n){super(t,e,wr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new x(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function bd(r,t,...e){if(r=bt(r),Au("collection","path",t),r instanceof Dr){const n=H.fromString(t,...e);return la(n),new Zt(r,null,n)}{if(!(r instanceof yt||r instanceof Zt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return la(n),new Zt(r.firestore,null,n)}}function pd(r,t,...e){if(r=bt(r),arguments.length===1&&(t=Aa.newId()),Au("doc","path",t),r instanceof Dr){const n=H.fromString(t,...e);return ca(n),new yt(r,null,new x(n))}{if(!(r instanceof yt||r instanceof Zt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return ca(n),new yt(r.firestore,r instanceof Zt?r.converter:null,new x(n))}}/**
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
 */class da{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ou(this,"async_queue_retry"),this.Vu=()=>{const n=ms();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Bt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!An(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw qt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=ui.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function fa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class Kt extends Dr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new da,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new da(t),this._firestoreClient=void 0,await t}}}function Dd(r,t){const e=typeof r=="object"?r:Ac(),n=typeof r=="string"?r:"(default)",i=Rc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Pc("firestore");o&&md(i,...o)}return i}function Nr(r){if(r._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gd(r),r._firestoreClient}function gd(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,m){return new Wc(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,wu(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ud(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(lt.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Fr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */const _d=/^__.*__$/;class yd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}class Ru{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ie(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class xr{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new xr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return fr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Pu(this.Cu)&&_d.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Td{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Sr(t)}Qu(t,e,n,i=!1){return new xr({Cu:t,methodName:e,qu:n,path:at.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lr(r){const t=r._freezeSettings(),e=Sr(r._databaseId);return new Td(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vu(r,t,e,n,i,o={}){const a=r.Qu(o.merge||o.mergeFields?2:0,t,e,i);Ti("Data must be an object, but it was:",a,n);const c=Su(n,a);let h,f;if(o.merge)h=new At(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const w=Ms(t,T,e);if(!a.contains(w))throw new D(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ku(m,w)||m.push(w)}h=new At(m),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new yd(new Et(c),h,f)}class Ur extends Sn{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ur}}function Cu(r,t,e){return new xr({Cu:3,qu:t.settings.qu,methodName:r._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class _i extends Sn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cu(this,t,!0),n=this.Ku.map(o=>_e(o,e)),i=new Me(n);return new $a(t.path,i)}isEqual(t){return t instanceof _i&&ga(this.Ku,t.Ku)}}class yi extends Sn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cu(this,t,!0),n=this.Ku.map(o=>_e(o,e)),i=new ke(n);return new $a(t.path,i)}isEqual(t){return t instanceof yi&&ga(this.Ku,t.Ku)}}function vd(r,t,e,n){const i=r.Qu(1,t,e);Ti("Data must be an object, but it was:",i,n);const o=[],a=Et.empty();pe(n,(h,f)=>{const m=vi(t,h,e);f=bt(f);const T=i.Nu(m);if(f instanceof Ur)o.push(m);else{const w=_e(f,T);w!=null&&(o.push(m),a.set(m,w))}});const c=new At(o);return new Ru(a,c,i.fieldTransforms)}function Ed(r,t,e,n,i,o){const a=r.Qu(1,t,e),c=[Ms(t,n,e)],h=[i];if(o.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Ms(t,o[w])),h.push(o[w+1]);const f=[],m=Et.empty();for(let w=c.length-1;w>=0;--w)if(!ku(f,c[w])){const V=c[w];let P=h[w];P=bt(P);const S=a.Nu(V);if(P instanceof Ur)f.push(V);else{const k=_e(P,S);k!=null&&(f.push(V),m.set(V,k))}}const T=new At(f);return new Ru(m,T,a.fieldTransforms)}function Id(r,t,e,n=!1){return _e(e,r.Qu(n?4:3,t))}function _e(r,t){if(Mu(r=bt(r)))return Ti("Unsupported field value:",t,r),Su(r,t);if(r instanceof Sn)return function(n,i){if(!Pu(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const c of n){let h=_e(c,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=bt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gl(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:cr(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cr(i.serializer,o)}}if(n instanceof zt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ne)return{bytesValue:Ya(i.serializer,n._byteString)};if(n instanceof yt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ti(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof gi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Xs(c.serializer,h)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${br(n)}`)}(r,t)}function Su(r,t){const e={};return Ra(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(r,(n,i)=>{const o=_e(i,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Mu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof zt||r instanceof Ne||r instanceof yt||r instanceof Sn||r instanceof gi)}function Ti(r,t,e){if(!Mu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=br(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Ms(r,t,e){if((t=bt(t))instanceof Fr)return t._internalPath;if(typeof t=="string")return vi(r,t);throw fr("Field path arguments must be of type string or ",r,!1,void 0,e)}const wd=new RegExp("[~\\*/\\[\\]]");function vi(r,t,e){if(t.search(wd)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Fr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function fr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new D(C.INVALID_ARGUMENT,c+r+h)}function ku(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class bu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Or("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ad extends bu{data(){return super.data()}}function Or(r,t){return typeof t=="string"?vi(r,t):t instanceof Fr?t._internalPath:t._delegate._internalPath}/**
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
 */function Du(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ei{}class Ii extends Ei{}function Nd(r,t,...e){let n=[];t instanceof Ei&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof wi).length,c=o.filter(h=>h instanceof Br).length;if(a>1||a>0&&c>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Br extends Ii{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Br(t,e,n)}_apply(t){const e=this._parse(t);return Nu(t._query,e),new $t(t.firestore,t.converter,Es(t._query,e))}_parse(t){const e=Lr(t.firestore);return function(o,a,c,h,f,m,T){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){pa(T,m);const V=[];for(const P of T)V.push(ma(h,o,P));w={arrayValue:{values:V}}}else w=ma(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||pa(T,m),w=Id(c,a,T,m==="in"||m==="not-in");return tt.create(f,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Fd(r,t,e){const n=t,i=Or("where",r);return Br._create(i,n,e)}class wi extends Ei{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)Nu(a,h),a=Es(a,h)}(t._query,e),new $t(t.firestore,t.converter,Es(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ai extends Ii{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ai(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tn(o,a)}(t._query,this._field,this._direction);return new $t(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ue(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function xd(r,t="asc"){const e=t,n=Or("orderBy",r);return Ai._create(n,e)}class Ri extends Ii{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ri(t,e,n)}_apply(t){return new $t(t.firestore,t.converter,or(t._query,this._limit,this._limitType))}}function Ld(r){return Ri._create("limit",r,"F")}function ma(r,t,e){if(typeof(e=bt(e))=="string"){if(e==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Na(t)&&e.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!x.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Fo(r,new x(n))}if(e instanceof yt)return Fo(r,e._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${br(e)}.`)}function pa(r,t){if(!Array.isArray(r)||r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nu(r,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Rd{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return pe(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>J(a.doubleValue));return new gi(o)}convertGeoPoint(t){return new zt(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gn(t));default:return null}}convertTimestamp(t){const e=ee(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);$(ru(n));const i=new _n(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class ln{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xu extends bu{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Or("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class rr extends xu{data(t={}){return super.data(t)}}class Lu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ln(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new rr(this._firestore,this._userDataWriter,n.key,n,new ln(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ln(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ln(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Pd(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
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
 */function Ud(r){r=It(r,yt);const t=It(r.firestore,Kt);return hd(Nr(t),r._key).then(e=>Uu(t,r,e))}class Pi extends Rd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Od(r){r=It(r,$t);const t=It(r.firestore,Kt),e=Nr(t),n=new Pi(t);return Du(r._query),dd(e,r._query).then(i=>new Lu(t,n,r,i))}function Bd(r,t,e){r=It(r,yt);const n=It(r.firestore,Kt),i=Fu(r.converter,t);return qr(n,[Vu(Lr(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Rt.none())])}function qd(r,t,e,...n){r=It(r,yt);const i=It(r.firestore,Kt),o=Lr(i);let a;return a=typeof(t=bt(t))=="string"||t instanceof Fr?Ed(o,"updateDoc",r._key,t,e,n):vd(o,"updateDoc",r._key,t),qr(i,[a.toMutation(r._key,Rt.exists(!0))])}function jd(r){return qr(It(r.firestore,Kt),[new Ys(r._key,Rt.none())])}function Kd(r,t){const e=It(r.firestore,Kt),n=pd(r),i=Fu(r.converter,t);return qr(e,[Vu(Lr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Rt.exists(!1))]).then(()=>n)}function Gd(r,...t){var e,n,i;r=bt(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||fa(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(fa(t[a])){const T=t[a];t[a]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[a+1]=(n=T.error)===null||n===void 0?void 0:n.bind(T),t[a+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,f,m;if(r instanceof yt)f=It(r.firestore,Kt),m=wr(r._key.path),h={next:T=>{t[a]&&t[a](Uu(f,r,T))},error:t[a+1],complete:t[a+2]};else{const T=It(r,$t);f=It(T.firestore,Kt),m=T._query;const w=new Pi(f);h={next:V=>{t[a]&&t[a](new Lu(f,w,T,V))},error:t[a+1],complete:t[a+2]},Du(r._query)}return function(w,V,P,S){const k=new pi(S),N=new fi(V,k,P);return w.asyncQueue.enqueueAndForget(async()=>li(await dr(w),N)),()=>{k.Za(),w.asyncQueue.enqueueAndForget(async()=>hi(await dr(w),N))}}(Nr(f),m,c,h)}function qr(r,t){return function(n,i){const o=new Bt;return n.asyncQueue.enqueueAndForget(async()=>td(await ld(n),i,o)),o.promise}(Nr(r),t)}function Uu(r,t,e){const n=e.docs.get(t._key),i=new Pi(r);return new xu(r,i,t._key,n,new ln(e.hasPendingWrites,e.fromCache),t.converter)}function $d(...r){return new _i("arrayUnion",r)}function zd(...r){return new yi("arrayRemove",r)}(function(t,e=!0){(function(i){Le=i})(Cc),Ec(new Ic("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new Kt(new Dc(n.getProvider("auth-internal")),new Lc(n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(f.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Co(Mo,"4.7.3",t),Co(Mo,"4.7.3","esm2017")})();class ks{constructor(){this.name="",this.id="",this.type="activity",this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=ct.fromBlank("","",new zt(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V){const P=new ks;return P.name=t,P.id=e,P.type=V,P.joinCode=n,P.students=i,P.parents=o,P.groups=a,P.teachers=c,P.locations=h,P.eventTypes=f,P.defaultLocation=m,P.showBy=T,P.lastUpdated=w,P}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),locations:this.locations.map(t=>t.toMap()),teacherUids:this.teachers.map(t=>t.memberUid),studentUids:this.students.map(t=>t.memberUid),parentUids:this.parents.map(t=>t.memberUid),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new ks;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const S of n)i.push(Pt.fromMap(S));e.students=i;const o=t.parents,a=[];for(const S of o)a.push(Pt.fromMap(S));e.parents=a;const c=t.groups,h=[];for(const S of c)h.push(xe.fromMap(S));e.groups=h;const f=t.locations,m=[];for(const S of f)m.push(ct.fromMap(S));e.locations=m;const T=t.teachers,w=[];for(const S of T)w.push(Pt.fromMap(S));e.teachers=w,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const V=t.eventTypes,P=[];for(const S of V)P.push(Gt.fromMap(S));return e.eventTypes=P,e.defaultLocation=ct.fromMap(t.defaultLocation),e}}class bs{constructor(){this.type="theater",this.name="",this.id="",this.rehearsalLocations=[],this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=ct.fromBlank("","",new zt(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V){const P=new bs;return P.name=t,P.id=e,P.rehearsalLocations=T,P.joinCode=n,P.students=i,P.parents=o,P.groups=a,P.teachers=c,P.locations=h,P.eventTypes=f,P.defaultLocation=m,P.showBy=w,P.lastUpdated=V,P}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),teacherUids:this.teachers.map(t=>t.memberUid),studentUids:this.students.map(t=>t.userId),parentUids:this.parents.map(t=>t.memberUid),locations:this.locations.map(t=>t.toMap()),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),rehearsalLocations:this.rehearsalLocations.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new bs;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,i=[];for(const N of n)i.push(Nt.fromMap(N));e.students=i;const o=t.parents,a=[];for(const N of o)a.push(Pt.fromMap(N));e.parents=a;const c=t.groups,h=[];for(const N of c)h.push(xe.fromMap(N));e.groups=h;const f=t.locations,m=[];for(const N of f)m.push(ct.fromMap(N));e.locations=m;const T=t.rehearsalLocations,w=[];for(const N of T)w.push(Fe.fromMap(N));e.rehearsalLocations=w;const V=t.teachers,P=[];for(const N of V)P.push(Pt.fromMap(N));e.teachers=P,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const S=t.eventTypes,k=[];for(const N of S)k.push(Gt.fromMap(N));return e.eventTypes=k,e.defaultLocation=ct.fromMap(t.defaultLocation),e}}class Fe{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new Fe;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new Fe;return e.name=t.name,e.color=t.color,e}}class ct{constructor(){this.name="",this.address="",this.location=new zt(0,0)}static fromBlank(t,e,n){const i=new ct;return i.name=t,i.address=e,i.location=n,i}toMap(){return{name:this.name,address:this.address,location:this.location}}static fromMap(t){const e=new ct;return e.name=t.name,e.address=t.address,e.location=t.location,e}}class xe{constructor(){this.groupName="",this.groupMembers=[],this.groupColor=0}static fromBlank(t,e,n){const i=new xe;return i.groupName=t,i.groupMembers=e,i.groupColor=n,i}toMap(){return{groupName:this.groupName,groupMembers:this.groupMembers.map(t=>t.toMap()),groupColor:this.groupColor}}static fromMap(t){const e=new xe;e.groupName=t.groupName;const n=t.groupMembers,i=[];for(const o of n)i.push(Pt.fromMap(o));return e.groupMembers=i,e.groupColor=t.groupColor,e}}class Pt{constructor(){this.memberName="",this.memberUid="",this.memberFCMToken=""}static fromBlank(t,e,n){const i=new Pt;return i.memberName=t,i.memberUid=e,i.memberFCMToken=n,i}toMap(){return{memberName:this.memberName,memberUid:this.memberUid,memberFCMToken:this.memberFCMToken}}static fromMap(t){const e=new Pt;return e.memberName=t.memberName,e.memberUid=t.memberUid,e.memberFCMToken=t.memberFCMToken,e}}class Gt{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new Gt;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new Gt;return e.name=t.name,e.color=t.color,e}}class St{constructor(){this.date=new Date,this.from=new Date,this.to=new Date}static fromBlank(t,e,n){const i=new St;return i.date=t,i.from=e,i.to=n,i}toMap(){return{date:this.date,from:this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}),to:this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0})}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,c]=n;o=parseInt(o,10),a=parseInt(a,10),c.toUpperCase()==="PM"&&o<12?o+=12:c.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}else return new Date(t)}throw new Error("Invalid time format")}static fromMap(t){const e=new St;return t.date instanceof Date?e.date=t.date:typeof t.date=="string"?e.date=new Date(t.date):(console.log(typeof t.date),console.log(t.date),e.date=t.date.toDate()),console.log(t.date),console.log(t.from),console.log(t.to),e.from=this._parseTime(t.from),e.to=this._parseTime(t.to),e}}class Ds{constructor(){this.name="",this.info="",this.location=ct.fromBlank("","",new zt(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,i,o,a){const c=new Ds;c.name=t,c.info=e,c.location=n,c.date=i,c.type=o,c.lastUpdated=a;const h=i.date.toISOString().split("T")[0];return c.dateFilter=h,c}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),dateFilter:this.dateFilter,type:this.type,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ds;return e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e}}class Ns{constructor(){this.activityId="",this.groupNames=[],this.targets=[],this.generalTarget="",this.eventType=new Gt,this.groupTargets=[],this.hasSchoolEvent=!1,this.schoolEventId="",this.conflicts=[],this.activityName="",this.name="",this.info="",this.location=ct.fromBlank("","",new zt(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V,P,S,k){const N=new Ns;N.name=t,N.info=e,N.location=n,N.date=i,N.type=o,N.lastUpdated=a;const G=i.date.toISOString().split("T")[0];return N.dateFilter=G,N.activityId=c,N.groupNames=h,N.targets=f,N.generalTarget=m,N.eventType=T,N.groupTargets=w,N.hasSchoolEvent=V,N.schoolEventId=P,N.conflicts=S,N.activityName=k,N}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),targets:this.targets.map(t=>t.toMap()),generalTarget:this.generalTarget,eventType:this.eventType.toMap(),activityName:this.activityName,groupTargets:this.groupTargets.map(t=>t.toMap()),type:"activity",groupNames:this.groupNames,dateFilter:this.dateFilter,hasSchoolEvent:this.hasSchoolEvent,schoolEventId:this.schoolEventId,activityId:this.activityId,lastUpdated:this.lastUpdated,targetUids:this.targets.map(t=>t.memberUid),conflicts:this.conflicts.map(t=>t.toMap())}}static fromMap(t){const e=new Ns;e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date);const n=t.targets,i=[];for(const f of n)i.push(Pt.fromMap(f));e.targets=i,e.generalTarget=t.generalTarget,e.eventType=Gt.fromMap(t.eventType),e.activityName=t.activityName;const o=t.groupTargets,a=[];for(const f of o)a.push(xe.fromMap(f));e.groupTargets=a,e.groupNames=t.groupNames,e.dateFilter=t.dateFilter,e.hasSchoolEvent=t.hasSchoolEvent,e.schoolEventId=t.schoolEventId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated;const c=t.conflicts,h=[];for(const f of c)h.push(mr.fromMap(f));return e.conflicts=h,e}}class mr{constructor(){this.userId="",this.type="",this.start=null,this.end=null,this.reason="",this.status="",this.userName=""}static fromBlank(t,e,n,i,o,a,c){const h=new mr;return h.userId=t,h.type=e,h.start=n,h.end=i,h.reason=o,h.status=a,h.userName=c,h}toMap(){return{userId:this.userId,type:this.type,start:this.start!=null?this.start.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",end:this.end!=null?this.end.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",reason:this.reason,status:this.status,userName:this.userName}}static _parseTime(t){if(typeof t=="string")return new Date(`1970-01-01T${t}`);throw new Error("Invalid time format")}static fromMap(t){const e=new mr;return e.userId=t.userId,e.type=t.type,e.start=t.start!=""?this._parseTime(t.start):null,e.end=t.end!=""?this._parseTime(t.end):null,e.reason=t.reason,e.status=t.status,e.userName=t.userName,e}}class Fs{constructor(){this.name="",this.id="",this.members=[],this.generalTarget="",this.activityId="",this.lastUpdated=0}static fromBlank(t,e,n,i,o,a){const c=new Fs;return c.name=t,c.id=e,c.members=n,c.generalTarget=i,c.activityId=o,c.lastUpdated=a,c}toMap(){return{name:this.name,id:this.id,members:this.members.map(t=>t.toMap()),generalTarget:this.generalTarget,activityId:this.activityId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Fs;e.name=t.name,e.id=t.id;const n=t.members,i=[];for(const o of n)i.push(Pt.fromMap(o));return e.members=i,e.generalTarget=t.generalTarget,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}class xs{constructor(){this.message="",this.senderUid="",this.senderName="",this.senderFCMToken="",this.gcId="",this.activityId="",this.messageId="",this.timeSent=new Date,this.readBy=[]}static fromBlank(t,e,n,i,o,a,c,h,f){const m=new xs;return m.message=t,m.senderUid=e,m.senderName=n,m.senderFCMToken=i,m.gcId=o,m.activityId=a,m.messageId=c,m.timeSent=h,m.readBy=f,m}toMap(){return{message:this.message,senderUid:this.senderUid,senderName:this.senderName,senderFCMToken:this.senderFCMToken,gcId:this.gcId,activityId:this.activityId,messageId:this.messageId,timeSent:this.timeSent,readBy:this.readBy,lastUpdated:this.timeSent.getTime()}}static fromMap(t){const e=new xs;return e.message=t.message,e.senderUid=t.senderUid,e.senderName=t.senderName,e.senderFCMToken=t.senderFCMToken,e.gcId=t.gcId,e.activityId=t.activityId,e.messageId=t.messageId,e.timeSent=t.timeSent.toDate(),e.readBy=t.readBy,e}}class Ls{constructor(){this.name="",this.info="",this.location=ct.fromBlank("","",new zt(0,0)),this.date=St.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id="",this.activityId="",this.showId="",this.characters=[],this.targets=[],this.theaterEventType="",this.showName="",this.activityName="",this.activityEventType=new Gt,this.rehearsalLocation=new Fe}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V,P,S){const k=new Ls;k.name=t,k.info=e,k.location=n,k.date=i,k.type=o,k.lastUpdated=a;const N=i.date.toISOString().split("T")[0];return k.dateFilter=N,k.activityId=c,k.showId=f,k.characters=T,k.targets=w,k.theaterEventType=V,k.rehearsalLocation=S,k.activityName=h,k.showName=m,k.activityEventType=P,k}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),type:this.type,lastUpdated:this.lastUpdated,dateFilter:this.dateFilter,activityId:this.activityId,activityName:this.activityName,showId:this.showId,showName:this.showName,characters:this.characters.map(t=>t.toMap()),targets:this.targets.map(t=>t.toMap()),targetUids:this.targets.map(t=>t.memberUid),id:this.id,theaterEventType:this.theaterEventType,activityEventType:this.activityEventType.toMap(),rehearsalLocation:this.rehearsalLocation.toMap()}}static fromMap(t){const e=new Ls;e.name=t.name,e.info=t.info,e.location=ct.fromMap(t.location),e.date=St.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e.activityId=t.activityId,e.showId=t.showId,e.theaterEventType=t.theaterEventType;const n=t.characters,i=[];for(const c of n)c.type==="Character"?i.push(Ft.fromMap(c)):c.type==="ShowGroup"?i.push(se.fromMap(c)):c.type==="EnsembleSection"&&i.push(re.fromMap(c)),c.type==="FullCast"&&i.push(new qe);e.characters=i;const o=t.targets,a=[];for(const c of o)a.push(Pt.fromMap(c));return e.targets=a,e.id=t.id,e.activityName=t.activityName,e.showName=t.showName,e.activityEventType=Gt.fromMap(t.activityEventType),e.rehearsalLocation=Fe.fromMap(t.rehearsalLocation),e}}class Us{constructor(){this.name="",this.id="",this.layout=[],this.characters=[],this.ensemble=new vn,this.showGroups=[],this.lastUpdated=0,this.songs=[],this.dances=[],this.canCreateSchedule=!1,this.hasEnsemble=!1,this.conflictForm=new En,this.formStatus="open",this.resources=[]}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V,P){const S=new Us;return S.name=t,S.id=e,S.layout=n,S.characters=i,S.ensemble=o,S.showGroups=a,S.lastUpdated=P,S.songs=c,S.dances=h,S.canCreateSchedule=f,S.hasEnsemble=m,S.conflictForm=T,S.resources=w,S.formStatus=V,S}toMap(){return{name:this.name,id:this.id,layout:this.layout.map(t=>t.toMap()),characters:this.characters.map(t=>t.toMap()),ensemble:this.ensemble?this.ensemble.toMap():"null",showGroups:this.showGroups.map(t=>t.toMap()),songs:this.songs.map(t=>t.toMap()),dances:this.dances.map(t=>t.toMap()),canCreateSchedule:this.canCreateSchedule,hasEnsemble:this.hasEnsemble,conflictForm:this.conflictForm?this.conflictForm.toMap():"null",resources:this.resources.map(t=>t.toMap()),formStatus:this.formStatus,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Us;e.name=t.name,e.id=t.id;const n=t.layout,i=[];for(const S of n)i.push(pr.fromMap(S));e.layout=i;const o=t.characters,a=[];for(const S of o)a.push(Ft.fromMap(S));e.characters=a,e.ensemble=t.ensemble!="null"&&t.ensemble?vn.fromMap(t.ensemble):null;const c=t.showGroups,h=[];for(const S of c)h.push(se.fromMap(S));e.showGroups=h;const f=t.songs,m=[];for(const S of f)m.push(yr.fromMap(S));e.songs=m;const T=t.dances,w=[];for(const S of T)w.push(_r.fromMap(S));e.dances=w,e.canCreateSchedule=t.canCreateSchedule,e.lastUpdated=t.lastUpdated,e.conflictForm=t.conflictForm!="null"&&t.conflictForm?En.fromMap(t.conflictForm):null,e.hasEnsemble=t.hasEnsemble;const V=t.resources,P=[];for(const S of V)P.push(Er.fromMap(S));return e.resources=P,e.formStatus=t.formStatus,e}}class pr{constructor(){this.name="",this.scenes=[],this.lastUpdated=0,this.actId=0}static fromBlank(t,e,n,i){const o=new pr;return o.name=t,o.scenes=e,o.lastUpdated=i,o.actId=n,o}toMap(){return{name:this.name,scenes:this.scenes.map(t=>t.toMap()),actId:this.actId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new pr;e.name=t.name;const n=t.scenes,i=[];for(const o of n)i.push(gr.fromMap(o));return e.scenes=i,e.actId=t.actId,e.lastUpdated=t.lastUpdated,e}}class gr{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.sceneId=0}static fromBlank(t,e,n,i){const o=new gr;return o.name=t,o.characters=e,o.lastUpdated=i,o.sceneId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),sceneId:this.sceneId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new gr;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(Ft.fromMap(o)):o.type==="ShowGroup"?i.push(se.fromMap(o)):o.type==="EnsembleSection"&&i.push(re.fromMap(o)),o.type==="FullCast"&&i.push(new qe);return e.characters=i,e.sceneId=t.sceneId,e.lastUpdated=t.lastUpdated,e}}class _r{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.danceId=0}static fromBlank(t,e,n,i){const o=new _r;return o.name=t,o.characters=e,o.lastUpdated=i,o.danceId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),danceId:this.danceId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new _r;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(Ft.fromMap(o)):o.type==="ShowGroup"?i.push(se.fromMap(o)):o.type==="EnsembleSection"&&i.push(re.fromMap(o)),o.type==="FullCast"&&i.push(new qe);return e.characters=i,e.lastUpdated=t.lastUpdated,e.danceId=t.danceId,e}}class yr{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.songId=0}static fromBlank(t,e,n,i){const o=new yr;return o.name=t,o.characters=e,o.lastUpdated=i,o.songId=n,o}toMap(){for(const t of this.characters)console.log(t),console.log(t instanceof Ft);return{name:this.name,characters:this.characters.map(t=>t.toMap()),songId:this.songId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new yr;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(Ft.fromMap(o)):o.type==="ShowGroup"?i.push(se.fromMap(o)):o.type==="EnsembleSection"&&i.push(re.fromMap(o)),o.type==="FullCast"&&i.push(new qe);return e.characters=i,e.lastUpdated=t.lastUpdated,e.songId=t.songId,e}}class Nt{constructor(){this.name="",this.gender="male",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,i,o,a){const c=new Nt;return c.name=t,c.gender=e,c.email=n,c.phone=i,c.FCMToken=o,c.userId=a,c}toMap(){return{fullname:this.name,gender:this.gender,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new Nt;return e.name=t.fullname,e.gender=t.gender,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class Ft{constructor(){this.name="",this.actor=new Nt,this.lastUpdated=0,this.characterId=0,this.type="Character"}static fromBlank(t,e,n,i){const o=new Ft;return o.name=t,o.actor=e,o.lastUpdated=i,o.characterId=n,o}toMap(){return{name:this.name,actor:this.actor?this.actor.toMap():"null",characterId:this.characterId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new Ft;return e.name=t.name,e.actor=t.actor!="null"&&!Vd(t.actor)?Nt.fromMap(t.actor):null,e.lastUpdated=t.lastUpdated,e.characterId=t.characterId,e}}function Vd(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}class vn{constructor(){this.actors=[],this.lastUpdated=0}static fromBlank(t,e){const n=new vn;return n.actors=t,n.lastUpdated=e,n}toMap(){return{actors:this.actors.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new vn,n=t.actors,i=[];for(const o of n)i.push(Nt.fromMap(o));return e.actors=i,e.lastUpdated=t.lastUpdated,e}}class qe{constructor(){this.type="FullCast"}toMap(){return{type:this.type}}static fromMap(t){return new qe}}class re{constructor(){this.includeAll=!1,this.includeMale=!1,this.includeFemale=!1,this.includeCustom=!1,this.customActors=[],this.lastUpdated=0,this.type="EnsembleSection"}static fromBlank(t,e,n,i,o,a){const c=new re;return c.includeAll=t,c.includeMale=e,c.includeFemale=n,c.includeCustom=i,c.customActors=o,c.lastUpdated=a,c}toMap(){return{includeAll:this.includeAll,includeMale:this.includeMale,includeFemale:this.includeFemale,includeCustom:this.includeCustom,customActors:this.customActors.map(t=>t.toMap())??[],type:this.type,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new re;e.includeAll=t.includeAll,e.includeMale=t.includeMale,e.includeFemale=t.includeFemale,e.includeCustom=t.includeCustom;const n=t.customActors,i=[];for(const o of n)i.push(Nt.fromMap(o));return e.customActors=i,e.lastUpdated=t.lastUpdated,e}}class se{constructor(){this.name="",this.characters=[],this.showGroupId=0,this.lastUpdated=0,this.type="ShowGroup"}static fromBlank(t,e,n,i){const o=new se;return o.name=t,o.characters=e,o.lastUpdated=i,o.showGroupId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),showGroupId:this.showGroupId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new se;e.name=t.name;const n=t.characters,i=[];for(const o of n)o.type==="Character"?i.push(Ft.fromMap(o)):i.push(re.fromMap(o));return e.characters=i,e.showGroupId=t.showGroupId,e.lastUpdated=t.lastUpdated,e}}class Tr{constructor(){this.date=new St,this.moreInfo=""}static fromBlank(t,e){const n=new Tr;return n.date=t,n.moreInfo=e,n}toMap(){return{date:this.date.toMap(),moreInfo:this.moreInfo}}static fromMap(t){const e=new Tr;return e.date=St.fromMap(t.date),e.moreInfo=t.moreInfo,e}}class En{constructor(){this.dates=[],this.lastUpdated=0,this.deadline=new Date}static fromBlank(t,e,n){const i=new En;return i.dates=t,i.deadline=e,i.lastUpdated=n,i}toMap(){return{dates:this.dates.map(t=>t.toMap()),deadline:this.deadline,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new En,n=t.dates,i=[];for(const o of n)i.push(Tr.fromMap(o));return typeof t.deadline=="string"||t.deadline instanceof Date?e.deadline=new Date(t.deadline):e.deadline=t.deadline.toDate(),e.dates=i,e.lastUpdated=t.lastUpdated,e}}class vr{constructor(){this.date=new Date,this.from=null,this.to=null,this.canAttend=!1,this.note=""}static fromBlank(t,e,n,i,o){const a=new vr;return a.date=t,a.from=e,a.to=n,a.canAttend=i,a.note=o,a}toMap(){return{date:this.date.toISOString(),from:this.from!=null?this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",to:this.to!=null?this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",canAttend:this.canAttend,note:this.note}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[i,o,a,c]=n;o=parseInt(o,10),a=parseInt(a,10),c.toUpperCase()==="PM"&&o<12?o+=12:c.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}}throw new Error("Invalid time format")}static fromMap(t){const e=new vr;return e.date=new Date(t.date),e.from=t.from!=""?this._parseTime(t.from):null,e.to=t.to!=""?this._parseTime(t.to):null,e.canAttend=t.canAttend,e.note=t.note,e}}class Os{constructor(){this.dates=[],this.id="",this.actor=new Nt,this.lastUpdated=0,this.activityId="",this.showId=""}static fromBlank(t,e,n,i,o,a){const c=new Os;return c.dates=t,c.id=e,c.actor=n,c.lastUpdated=a,c.activityId=i,c.showId=o,c}toMap(){return{dates:this.dates.map(t=>t.toMap()),id:this.id,actor:this.actor.toMap(),lastUpdated:this.lastUpdated,submitterId:this.actor.userId,activityId:this.activityId,showId:this.showId}}static fromMap(t){const e=new Os,n=t.dates,i=[];for(const o of n)i.push(vr.fromMap(o));return e.dates=i,e.id=t.id,e.actor=Nt.fromMap(t.actor),e.showId=t.showId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}class In{constructor(){this.name="",this.url=""}static fromBlank(t,e){const n=new In;return n.name=t,n.url=e,n}toMap(){return{name:this.name,url:this.url}}static fromMap(t){const e=new In;return e.name=t.name,e.url=t.url,e}}class Er{constructor(){this.name="",this.description="",this.type="link",this.link="",this.file=new In}static fromBlank(t,e,n,i,o){const a=new Er;return a.name=t,a.description=e,a.type=n,a.link=i,a.file=o,a}toMap(){return{name:this.name,description:this.description,type:this.type,link:this.link,file:this.file!=null?this.file.toMap():"null"}}static fromMap(t){const e=new Er;return e.name=t.name,e.description=t.description,e.type=t.type,e.link=t.link,e.file=t.file!="null"&&t.file?In.fromMap(t.file):void 0,e}}class Bs{constructor(){this.uid="",this.schoolId="",this.rideShareStatus="",this.distanceToSchool=0,this.FCMToken="",this.accountType="",this.phoneNumber="",this.driverStatus="",this.searchKey="",this.fullname="",this.email="",this.distanceToSchoolMembers={},this.homeLocation=new ct}static fromBlank(t,e,n,i,o,a,c,h,f,m,T,w,V){const P=new Bs;return P.uid=t,P.schoolId=e,P.rideShareStatus=n,P.distanceToSchool=i,P.FCMToken=o,P.accountType=a,P.phoneNumber=c,P.driverStatus=h,P.searchKey=f,P.fullname=m,P.email=T,P.distanceToSchoolMembers=w,P.homeLocation=V,P}toMap(){return{uid:this.uid,schoolId:this.schoolId,rideShareStatus:this.rideShareStatus,distanceToSchool:this.distanceToSchool,FCMToken:this.FCMToken,accountType:this.accountType,phoneNumber:this.phoneNumber,driverStatus:this.driverStatus,searchKey:this.searchKey,fullname:this.fullname,email:this.email,distanceToSchoolMembers:this.distanceToSchoolMembers,homeLocation:this.homeLocation.toMap()}}static fromMap(t){const e=new Bs;return e.uid=t.uid,e.schoolId=t.schoolId,e.rideShareStatus=t.rideShareStatus,e.distanceToSchool=t.distanceToSchool,e.FCMToken=t.FCMToken,e.accountType=t.accountType,e.phoneNumber=t.phoneNumber,e.driverStatus=t.driverStatus,e.searchKey=t.searchKey,e.fullname=t.fullname,e.email=t.email,e.distanceToSchoolMembers=t.distanceToSchoolMembers,e.homeLocation=ct.fromMap(t.homeLocation),e}}class qs{constructor(){this.uid="",this.schoolId="",this.FCMToken="",this.accountType="",this.searchKey="",this.fullname="",this.email=""}static fromBlank(t,e,n,i,o,a,c){const h=new qs;return h.uid=t,h.schoolId=e,h.FCMToken=n,h.accountType=i,h.searchKey=o,h.fullname=a,h.email=c,h}toMap(){return{uid:this.uid,schoolId:this.schoolId,FCMToken:this.FCMToken,accountType:this.accountType,searchKey:this.searchKey,fullname:this.fullname,email:this.email}}static fromMap(t){const e=new qs;return e.uid=t.uid,e.schoolId=t.schoolId,e.FCMToken=t.FCMToken,e.accountType=t.accountType,e.searchKey=t.searchKey,e.fullname=t.fullname,e.email=t.email,e}}class js{constructor(){this.name="",this.fcmToken="",this.uid=""}static fromBlank(t,e,n){const i=new js;return i.name=t,i.fcmToken=e,i.uid=n,i}toMap(){return{name:this.name,fcmToken:this.fcmToken,uid:this.uid}}static fromMap(t){const e=new js;return e.name=t.name,e.fcmToken=t.fcmToken,e.uid=t.uid,e}}function Qd(r){let t;if(r>16777215){let e=(r>>24&255).toString(16).padStart(2,"0").toUpperCase(),n=(r>>16&255).toString(16).padStart(2,"0").toUpperCase(),i=(r>>8&255).toString(16).padStart(2,"0").toUpperCase(),o=(r&255).toString(16).padStart(2,"0").toUpperCase();t=`#${e}${n}${i}${o}`}else t=r.toString(16).toUpperCase().padStart(6,"0"),t=`#${t}`;return t}function Wd(r,t){const e=Math.round(Math.min(Math.max(t??1,0),1)*255);return r+e.toString(16).toUpperCase()}function Hd(r){return r.startsWith("#")&&(r=r.slice(1)),parseInt(r,16)}export{pr as A,Ud as B,Ft as C,_r as D,re as E,qe as F,zt as G,Kd as H,qd as I,Od as J,Nd as K,ct as L,xs as M,Fd as N,Bd as O,Gd as P,$d as Q,Er as R,Bs as S,qs as T,jd as U,js as V,Ld as W,xd as X,zd as Y,Gt as Z,gr as a,se as b,yr as c,Us as d,vn as e,Nt as f,ks as g,Wd as h,Qd as i,St as j,Pt as k,Ls as l,Tr as m,vr as n,En as o,Os as p,Fe as q,Hd as r,bs as s,Fs as t,In as u,Ns as v,Ds as w,Dd as x,bd as y,pd as z};