import{L as Hu,h as ba,C as xa,k as Es,F as Fa,g as Dt,f as Ua,_ as La,e as Oa,o as ne,m as Xu,S as Yu,p as Ba,q as Ju,s as Zu,n as qa,t as tl,u as Fe}from"./index-BvKDzgix.js";var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,ja;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,v,A){for(var g=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)g[Gt-2]=arguments[Gt];return p.prototype[v].apply(T,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,p,_){_||(_=0);var T=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)T[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)T[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],v=I.g[2];var A=I.g[3],g=p+(A^_&(v^A))+T[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+T[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+T[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+T[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+T[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+T[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+T[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+T[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+T[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+T[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+T[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+T[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+T[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+T[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+T[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+T[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+T[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+T[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+T[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+T[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+T[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+T[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+T[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+T[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+T[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+T[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+T[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+T[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+T[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+T[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+T[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+T[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+T[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+T[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+T[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+T[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+T[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+T[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+T[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+T[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+T[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+T[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+T[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+T[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+T[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+T[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+T[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+T[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+T[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+T[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+T[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+T[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+T[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+T[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+T[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+T[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+T[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+T[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+T[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+T[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+T[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+T[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+T[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,T=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)r(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<p;)if(T[v++]=I.charCodeAt(A++),v==this.blockSize){r(this,T),v=0;break}}else for(;A<p;)if(T[v++]=I[A++],v==this.blockSize){r(this,T),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var T=0;32>T;T+=8)I[_++]=this.g[p]>>>T&255;return I};function o(I,p){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],T=!0,v=I.length-1;0<=v;v--){var A=I[v]|0;T&&A==p||(_[v]=A,T=!1)}this.g=_}var u={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return k(d(-I));for(var p=[],_=1,T=0;I>=_;T++)p[T]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return k(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),T=y,v=0;v<I.length;v+=8){var A=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+A),p);8>A?(A=d(Math.pow(p,A)),T=T.j(A).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var y=h(0),E=h(1),S=h(16777216);s=a.prototype,s.m=function(){if(V(this))return-k(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*p,p*=4294967296}return I},s.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(V(this))return"-"+k(this).toString(I);for(var p=d(Math.pow(I,6)),_=this,T="";;){var v=ot(_,p).g;_=x(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=v,P(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},s.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function V(I){return I.h==-1}s.l=function(I){return I=x(this,I),V(I)?-1:P(I)?0:1};function k(I){for(var p=I.g.length,_=[],T=0;T<p;T++)_[T]=~I.g[T];return new a(_,~I.h).add(E)}s.abs=function(){return V(this)?k(this):this},s.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],T=0,v=0;v<=p;v++){var A=T+(this.i(v)&65535)+(I.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);T=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function x(I,p){return I.add(k(p))}s.j=function(I){if(P(this)||P(I))return y;if(V(this))return V(I)?k(this).j(k(I)):k(k(this).j(I));if(V(I))return k(this.j(k(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<I.g.length;v++){var A=this.i(T)>>>16,g=this.i(T)&65535,Gt=I.i(v)>>>16,rn=I.i(v)&65535;_[2*T+2*v]+=g*rn,Q(_,2*T+2*v),_[2*T+2*v+1]+=A*rn,Q(_,2*T+2*v+1),_[2*T+2*v+1]+=g*Gt,Q(_,2*T+2*v+1),_[2*T+2*v+2]+=A*Gt,Q(_,2*T+2*v+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function Q(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function X(I,p){this.g=I,this.h=p}function ot(I,p){if(P(p))throw Error("division by zero");if(P(I))return new X(y,y);if(V(I))return p=ot(k(I),p),new X(k(p.g),k(p.h));if(V(p))return p=ot(I,k(p)),new X(k(p.g),p.h);if(30<I.g.length){if(V(I)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var _=E,T=p;0>=T.l(I);)_=jt(_),T=jt(T);var v=ct(_,1),A=ct(T,1);for(T=ct(T,2),_=ct(_,2);!P(T);){var g=A.add(T);0>=g.l(I)&&(v=v.add(_),A=g),T=ct(T,1),_=ct(_,1)}return p=x(I,v.j(p)),new X(v,p)}for(v=y;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(_),g=A.j(p);V(g)||0<g.l(I);)_-=T,A=d(_),g=A.j(p);P(A)&&(A=E),v=v.add(A),I=x(I,g)}return new X(v,I)}s.A=function(I){return ot(this,I).h},s.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},s.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},s.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function jt(I){for(var p=I.g.length+1,_=[],T=0;T<p;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ct(I,p){var _=p>>5;p%=32;for(var T=I.g.length-_,v=[],A=0;A<T;A++)v[A]=0<p?I.i(A+_)>>>p|I.i(A+_+1)<<32-p:I.i(A+_);return new a(v,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ja=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Te=a}).apply(typeof Ko<"u"?Ko:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ga,wn,Ka,_s,Or,$a,za,Qa;(function(){var s,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function r(i,c){if(c)t:{var l=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break t;l=l[w]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,w={next:function(){if(!f&&l<i.length){var R=l++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}r("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,l){return i.call.apply(i.bind,arguments)}function y(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function E(i,c,l){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,E.apply(null,arguments)}function S(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var D=Array(arguments.length-2),H=2;H<arguments.length;H++)D[H-2]=arguments[H];return c.prototype[w].apply(f,D)}}function V(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function k(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let D=0;D<R;D++)i[w+D]=f[D]}else i.push(f)}}class x{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Q(i){return/^[\s\xa0]*$/.test(i)}function X(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function ot(i){return ot[" "](i),i}ot[" "]=function(){};var jt=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ct(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function I(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function p(i){const c={};for(const l in i)c[l]=i[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function v(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function A(i){u.setTimeout(()=>{throw i},0)}function g(){var i=hr;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Gt{constructor(){this.h=this.g=null}add(c,l){const f=rn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var rn=new x(()=>new mu,i=>i.reset());class mu{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let on,an=!1,hr=new Gt,Gi=()=>{const i=u.Promise.resolve(void 0);on=()=>{i.then(pu)}};var pu=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var c=rn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}an=!1};function Jt(){this.s=this.s,this.C=this.C}Jt.prototype.s=!1,Jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var gu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function cn(i,c){if(mt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(jt){t:{try{ot(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:_u[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&cn.aa.h.call(this)}}P(cn,mt);var _u={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),yu=0;function Tu(i,c,l,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++yu,this.da=this.fa=!1}function Hn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Xn(i){this.src=i,this.g={},this.h=0}Xn.prototype.add=function(i,c,l,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=fr(i,c,f,w);return-1<D?(c=i[D],l||(c.fa=!1)):(c=new Tu(c,this.src,R,!!f,w),c.fa=l,i.push(c)),c};function dr(i,c){var l=c.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Hn(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function fr(i,c,l,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return w}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),pr={};function Ki(i,c,l,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Ki(i,c[R],l,f,w);return null}return l=Qi(l),i&&i[Wn]?i.K(c,l,d(f)?!!f.capture:!!f,w):vu(i,c,l,!1,f,w)}function vu(i,c,l,f,w,R){if(!c)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,H=_r(i);if(H||(i[mr]=H=new Xn(i)),l=H.add(c,l,f,D,R),l.proxy)return l;if(f=Iu(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)gu||(w=D),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(zi(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Iu(){function i(l){return c.call(i.src,i.listener,l)}const c=Eu;return i}function $i(i,c,l,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)$i(i,c[R],l,f,w);else f=d(f)?!!f.capture:!!f,l=Qi(l),i&&i[Wn]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],l=fr(R,l,f,w),-1<l&&(Hn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=_r(i))&&(c=i.g[c.toString()],i=-1,c&&(i=fr(c,l,f,w)),(l=-1<i?c[i]:null)&&gr(l))}function gr(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Wn])dr(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(zi(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=_r(c))?(dr(l,i),l.h==0&&(l.src=null,c[mr]=null)):Hn(i)}}}function zi(i){return i in pr?pr[i]:pr[i]="on"+i}function Eu(i,c){if(i.da)i=!0;else{c=new cn(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&gr(i),i=l.call(f,c)}return i}function _r(i){return i=i[mr],i instanceof Xn?i:null}var yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(i){return typeof i=="function"?i:(i[yr]||(i[yr]=function(c){return i.handleEvent(c)}),i[yr])}function pt(){Jt.call(this),this.i=new Xn(this),this.M=this,this.F=null}P(pt,Jt),pt.prototype[Wn]=!0,pt.prototype.removeEventListener=function(i,c,l,f){$i(this,i,c,l,f)};function wt(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new mt(c,i);else if(c instanceof mt)c.target=c.target||i;else{var w=c;c=new mt(f,i),T(c,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var D=c.g=l[R];w=Yn(D,f,!0,c)&&w}if(D=c.g=i,w=Yn(D,f,!0,c)&&w,w=Yn(D,f,!1,c)&&w,l)for(R=0;R<l.length;R++)D=c.g=l[R],w=Yn(D,f,!1,c)&&w}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Hn(l[f]);delete i.g[c],i.h--}}this.F=null},pt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},pt.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Yn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==l){var H=D.listener,ut=D.ha||D.src;D.fa&&dr(i.i,D),w=H.call(ut,f)!==!1&&w}}return w&&!f.defaultPrevented}function Wi(i,c,l){if(typeof i=="function")l&&(i=E(i,l));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Hi(i){i.g=Wi(()=>{i.g=null,i.i&&(i.i=!1,Hi(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class wu extends Jt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Hi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(i){Jt.call(this),this.h=i,this.g={}}P(un,Jt);var Xi=[];function Yi(i){ct(i.g,function(c,l){this.g.hasOwnProperty(l)&&gr(c)},i),i.g={}}un.prototype.N=function(){un.aa.N.call(this),Yi(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=u.JSON.stringify,Au=u.JSON.parse,Ru=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function vr(){}vr.prototype.h=null;function Ji(i){return i.h||(i.h=i.i())}function Zi(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){mt.call(this,"d")}P(Ir,mt);function Er(){mt.call(this,"c")}P(Er,mt);var me={},to=null;function Jn(){return to=to||new pt}me.La="serverreachability";function eo(i){mt.call(this,me.La,i)}P(eo,mt);function hn(i){const c=Jn();wt(c,new eo(c))}me.STAT_EVENT="statevent";function no(i,c){mt.call(this,me.STAT_EVENT,i),this.stat=c}P(no,mt);function At(i){const c=Jn();wt(c,new no(c,i))}me.Ma="timingevent";function so(i,c){mt.call(this,me.Ma,i),this.size=c}P(so,mt);function dn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function fn(){this.g=!0}fn.prototype.xa=function(){this.g=!1};function Su(i,c,l,f,w,R){i.info(function(){if(i.g)if(R)for(var D="",H=R.split("&"),ut=0;ut<H.length;ut++){var $=H[ut].split("=");if(1<$.length){var gt=$[0];$=$[1];var _t=gt.split("_");D=2<=_t.length&&_t[1]=="type"?D+(gt+"="+$+"&"):D+(gt+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+D})}function Pu(i,c,l,f,w,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+R+" "+D})}function Pe(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Vu(i,l)+(f?" "+f:"")})}function Cu(i,c){i.info(function(){return"TIMEOUT: "+c})}fn.prototype.info=function(){};function Vu(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return Tr(l)}catch{return c}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wr;function ts(){}P(ts,vr),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},wr=new ts;function Zt(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new io}function io(){this.i=null,this.g="",this.h=!1}var oo={},Ar={};function Rr(i,c,l){i.L=1,i.v=rs(Kt(c)),i.m=l,i.P=!0,ao(i,null)}function ao(i,c){i.F=Date.now(),es(i),i.A=Kt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Eo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new io,i.g=Bo(i.j,l?c:null,!i.m),0<i.O&&(i.M=new wu(E(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Xi[0]=w.toString()),w=Xi);for(var R=0;R<w.length;R++){var D=Ki(l,w[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),hn(),Su(i.i,i.u,i.A,i.l,i.R,i.m)}Zt.prototype.ca=function(i){i=i.target;const c=this.M;c&&$t(i)==3?c.j():this.Y(i)},Zt.prototype.Y=function(i){try{if(i==this.g)t:{const _t=$t(this.g);var c=this.g.Ba();const Me=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||_t!=4||c==7||(c==8||0>=Me?hn(3):hn(2)),Sr(this);var l=this.g.Z();this.X=l;e:if(co(this)){var f=Vo(this.g);i="";var w=f.length,R=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pe(this),mn(this);var D="";break e}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,Pu(this.i,this.u,this.A,this.l,this.R,_t,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ut=this.g;if((H=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(H)){var $=H;break e}}$=null}if(l=$)Pe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,l);else{this.o=!1,this.s=3,At(12),pe(this),mn(this);break t}}if(this.P){l=!0;let bt;for(;!this.J&&this.C<D.length;)if(bt=Mu(this,D),bt==Ar){_t==4&&(this.s=4,At(14),l=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==oo){this.s=4,At(15),Pe(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Pe(this.i,this.l,bt,null),Pr(this,bt);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||D.length!=0||this.h.h||(this.s=1,At(16),l=!1),this.o=this.o&&l,!l)Pe(this.i,this.l,D,"[Invalid Chunked Response]"),pe(this),mn(this);else if(0<D.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Nr(gt),gt.M=!0,At(11))}}else Pe(this.i,this.l,D,null),Pr(this,D);_t==4&&pe(this),this.o&&!this.J&&(_t==4?Fo(this.j,this):(this.o=!1,es(this)))}else Qu(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),pe(this),mn(this)}}}catch{}finally{}};function co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Mu(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Ar:(l=Number(c.substring(l,f)),isNaN(l)?oo:(f+=1,f+l>c.length?Ar:(c=c.slice(f,f+l),i.C=f+l,c)))}Zt.prototype.cancel=function(){this.J=!0,pe(this)};function es(i){i.S=Date.now()+i.I,uo(i,i.I)}function uo(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=dn(E(i.ba,i),c)}function Sr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Zt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Cu(this.i,this.A),this.L!=2&&(hn(),At(17)),pe(this),this.s=2,mn(this)):uo(this,this.S-i)};function mn(i){i.j.G==0||i.J||Fo(i.j,i)}function pe(i){Sr(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Yi(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Pr(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Cr(l.h,i))){if(!i.K&&Cr(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)ls(l),cs(l);else break t;kr(l),At(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=dn(E(l.Za,l),6e3));if(1>=fo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else _e(l,11)}else if((i.K||l.g==i)&&ls(l),!Q(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let $=w[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const gt=$[3];gt!=null&&(l.la=gt,l.j.info("VER="+l.la));const _t=$[4];_t!=null&&(l.Aa=_t,l.j.info("SVER="+l.Aa));const Me=$[5];Me!=null&&typeof Me=="number"&&0<Me&&(f=1.5*Me,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const bt=i.g;if(bt){const ds=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var R=f.h;R.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Vr(R,R.h),R.h=null))}if(f.D){const br=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;br&&(f.ya=br,Y(f.I,f.D,br))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=Oo(f,f.J?f.ia:null,f.W),D.K){mo(f.h,D);var H=D,ut=f.L;ut&&(H.I=ut),H.B&&(Sr(H),es(H)),f.g=D}else bo(f);0<l.i.length&&us(l)}else $[0]!="stop"&&$[0]!="close"||_e(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?_e(l,7):Dr(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}hn(4)}catch{}}var Du=class{constructor(i,c){this.g=i,this.map=c}};function lo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ho(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fo(i){return i.h?1:i.g?i.g.size:0}function Cr(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Vr(i,c){i.g?i.g.add(c):i.h=c}function mo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}lo.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function po(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return V(i.i)}function ku(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function Nu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function go(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=Nu(i),f=ku(i),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],l&&l[R],i)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bu(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),w=null;if(0<=f){var R=i[l].substring(0,f);w=i[l].substring(f+1)}else R=i[l];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ge(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ge){this.h=i.h,ns(this,i.j),this.o=i.o,this.g=i.g,ss(this,i.s),this.l=i.l;var c=i.i,l=new _n;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),yo(this,l),this.m=i.m}else i&&(c=String(i).match(_o))?(this.h=!1,ns(this,c[1]||"",!0),this.o=pn(c[2]||""),this.g=pn(c[3]||"",!0),ss(this,c[4]),this.l=pn(c[5]||"",!0),yo(this,c[6]||"",!0),this.m=pn(c[7]||"")):(this.h=!1,this.i=new _n(null,this.h))}ge.prototype.toString=function(){var i=[],c=this.j;c&&i.push(gn(c,To,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(gn(c,To,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(gn(l,l.charAt(0)=="/"?Uu:Fu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",gn(l,Ou)),i.join("")};function Kt(i){return new ge(i)}function ns(i,c,l){i.j=l?pn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function ss(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function yo(i,c,l){c instanceof _n?(i.i=c,Bu(i.i,i.h)):(l||(c=gn(c,Lu)),i.i=new _n(c,i.h))}function Y(i,c,l){i.i.set(c,l)}function rs(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function pn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function gn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,xu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function xu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var To=/[#\/\?@]/g,Fu=/[#\?:]/g,Uu=/[#\?]/g,Lu=/[#\?@]/g,Ou=/#/g;function _n(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function te(i){i.g||(i.g=new Map,i.h=0,i.i&&bu(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}s=_n.prototype,s.add=function(i,c){te(this),this.i=null,i=Ce(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function vo(i,c){te(i),c=Ce(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Io(i,c){return te(i),c=Ce(i,c),i.g.has(c)}s.forEach=function(i,c){te(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(c,w,f,this)},this)},this)},s.na=function(){te(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const w=i[f];for(let R=0;R<w.length;R++)l.push(c[f])}return l},s.V=function(i){te(this);let c=[];if(typeof i=="string")Io(this,i)&&(c=c.concat(this.g.get(Ce(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},s.set=function(i,c){return te(this),this.i=null,i=Ce(this,i),Io(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},s.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Eo(i,c,l){vo(i,c),0<l.length&&(i.i=null,i.g.set(Ce(i,c),V(l)),i.h+=l.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=R;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),i.push(w)}}return this.i=i.join("&")};function Ce(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Bu(i,c){c&&!i.j&&(te(i),i.i=null,i.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(vo(this,f),Eo(this,w,l))},i)),i.j=c}function qu(i,c){const l=new fn;if(u.Image){const f=new Image;f.onload=S(ee,l,"TestLoadImage: loaded",!0,c,f),f.onerror=S(ee,l,"TestLoadImage: error",!1,c,f),f.onabort=S(ee,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(ee,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function ju(i,c){const l=new fn,f=new AbortController,w=setTimeout(()=>{f.abort(),ee(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ee(l,"TestPingServer: ok",!0,c):ee(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ee(l,"TestPingServer: error",!1,c)})}function ee(i,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Gu(){this.g=new Ru}function Ku(i,c,l){const f=l||"";try{go(i,function(w,R){let D=w;d(w)&&(D=Tr(w)),c.push(f+R+"="+encodeURIComponent(D))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function is(i){this.l=i.Ub||null,this.j=i.eb||!1}P(is,vr),is.prototype.g=function(){return new os(this.l,this.j)},is.prototype.i=function(i){return function(){return i}}({});function os(i,c){pt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(os,pt),s=os.prototype,s.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Tn(this)},s.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},s.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}s.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?yn(this):Tn(this),this.readyState==3&&wo(this)}},s.Ra=function(i){this.g&&(this.response=this.responseText=i,yn(this))},s.Qa=function(i){this.g&&(this.response=i,yn(this))},s.ga=function(){this.g&&yn(this)};function yn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Tn(i)}s.setRequestHeader=function(i,c){this.u.append(i,c)},s.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Tn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ao(i){let c="";return ct(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Mr(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Ao(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Y(i,c,l))}function tt(i){pt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(tt,pt);var $u=/^https?$/i,zu=["POST","PUT"];s=tt.prototype,s.Ha=function(i){this.J=i},s.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?Ji(this.o):Ji(wr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Ro(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(zu,c,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Co(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Ro(this,R)}};function Ro(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,So(i),as(i)}function So(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}s.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,wt(this,"complete"),wt(this,"abort"),as(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),tt.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},s.bb=function(){Po(this)};function Po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||$t(i)!=4||i.Z()!=2)){if(i.u&&$t(i)==4)Wi(i.Ea,0,i);else if(wt(i,"readystatechange"),$t(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=D===0){var w=String(i.D).match(_o)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!$u.test(w?w.toLowerCase():"")}l=f}if(l)wt(i,"complete"),wt(i,"success");else{i.m=6;try{var R=2<$t(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",So(i)}}finally{as(i)}}}}function as(i,c){if(i.g){Co(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||wt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Co(i){i.I&&(u.clearTimeout(i.I),i.I=null)}s.isActive=function(){return!!this.g};function $t(i){return i.g?i.g.readyState:0}s.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Au(c)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Qu(i){const c={};i=(i.g&&2<=$t(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(Q(i[f]))continue;var l=v(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[w]||[];c[w]=R,R.push(l)}I(c,function(f){return f.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Mo(i){this.Aa=0,this.i=[],this.j=new fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vn("baseRetryDelayMs",5e3,i),this.cb=vn("retryDelaySeedMs",1e4,i),this.Wa=vn("forwardChannelMaxRetries",2,i),this.wa=vn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new lo(i&&i.concurrentRequestLimit),this.Da=new Gu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Mo.prototype,s.la=8,s.G=1,s.connect=function(i,c,l,f){At(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Oo(this,null,this.W),us(this)};function Dr(i){if(Do(i),i.G==3){var c=i.U++,l=Kt(i.I);if(Y(l,"SID",i.K),Y(l,"RID",c),Y(l,"TYPE","terminate"),In(i,l),c=new Zt(i,i.j,c),c.L=2,c.v=rs(Kt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Bo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),es(c)}Lo(i)}function cs(i){i.g&&(Nr(i),i.g.cancel(),i.g=null)}function Do(i){cs(i),i.u&&(u.clearTimeout(i.u),i.u=null),ls(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function us(i){if(!ho(i.h)&&!i.s){i.s=!0;var c=i.Ga;on||Gi(),an||(on(),an=!0),hr.add(c,i),i.B=0}}function Wu(i,c){return fo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=dn(E(i.Ga,i,c),Uo(i,i.B)),i.B++,!0)}s.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new Zt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=No(this,w,c),l=Kt(this.I),Y(l,"RID",i),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),In(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(Ao(R)))+"&"+c:this.m&&Mr(l,this.m,R)),Vr(this.h,w),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",c),Y(l,"SID","null"),w.T=!0,Rr(w,l,null)):Rr(w,l,c),this.G=2}}else this.G==3&&(i?ko(this,i):this.i.length==0||ho(this.h)||ko(this))};function ko(i,c){var l;c?l=c.l:l=i.U++;const f=Kt(i.I);Y(f,"SID",i.K),Y(f,"RID",l),Y(f,"AID",i.T),In(i,f),i.m&&i.o&&Mr(f,i.m,i.o),l=new Zt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=No(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Vr(i.h,l),Rr(l,f,c)}function In(i,c){i.H&&ct(i.H,function(l,f){Y(c,f,l)}),i.l&&go({},function(l,f){Y(c,f,l)})}function No(i,c,l){l=Math.min(i.i.length,l);var f=i.l?E(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let H=!0;for(let ut=0;ut<l;ut++){let $=w[ut].g;const gt=w[ut].map;if($-=R,0>$)R=Math.max(0,w[ut].g-100),H=!1;else try{Ku(gt,D,"req"+$+"_")}catch{f&&f(gt)}}if(H){f=D.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function bo(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;on||Gi(),an||(on(),an=!0),hr.add(c,i),i.v=0}}function kr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=dn(E(i.Fa,i),Uo(i,i.v)),i.v++,!0)}s.Fa=function(){if(this.u=null,xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=dn(E(this.ab,this),i)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),cs(this),xo(this))};function Nr(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function xo(i){i.g=new Zt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Kt(i.qa);Y(c,"RID","rpc"),Y(c,"SID",i.K),Y(c,"AID",i.T),Y(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(c,"TO",i.ja),Y(c,"TYPE","xmlhttp"),In(i,c),i.m&&i.o&&Mr(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=rs(Kt(c)),l.m=null,l.P=!0,ao(l,i)}s.Za=function(){this.C!=null&&(this.C=null,cs(this),kr(this),At(19))};function ls(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Fo(i,c){var l=null;if(i.g==c){ls(i),Nr(i),i.g=null;var f=2}else if(Cr(i.h,c))l=c.D,mo(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Jn(),wt(f,new so(f,l)),us(i)}else bo(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Wu(i,c)||f==2&&kr(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),w){case 1:_e(i,5);break;case 4:_e(i,10);break;case 3:_e(i,6);break;default:_e(i,2)}}}function Uo(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function _e(i,c){if(i.j.info("Error code "+c),c==2){var l=E(i.fb,i),f=i.Xa;const w=!f;f=new ge(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ns(f,"https"),rs(f),w?qu(f.toString(),l):ju(f.toString(),l)}else At(2);i.G=0,i.l&&i.l.sa(c),Lo(i),Do(i)}s.fb=function(i){i?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Lo(i){if(i.G=0,i.ka=[],i.l){const c=po(i.h);(c.length!=0||i.i.length!=0)&&(k(i.ka,c),k(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function Oo(i,c,l){var f=l instanceof ge?Kt(l):new ge(l);if(f.g!="")c&&(f.g=c+"."+f.g),ss(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new ge(null);f&&ns(R,f),c&&(R.g=c),w&&ss(R,w),l&&(R.l=l),f=R}return l=i.D,c=i.ya,l&&c&&Y(f,l,c),Y(f,"VER",i.la),In(i,f),f}function Bo(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new tt(new is({eb:l})):new tt(i.pa),c.Ha(i.J),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}s=qo.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function hs(){}hs.prototype.g=function(i,c){return new Ct(i,c)};function Ct(i,c){pt.call(this),this.g=new Mo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!Q(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Q(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ve(this)}P(Ct,pt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Dr(this.g)},Ct.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Tr(i),i=l);c.i.push(new Du(c.Ya++,i)),c.G==3&&us(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Dr(this.g),delete this.g,Ct.aa.N.call(this)};function jo(i){Ir.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(jo,Ir);function Go(){Er.call(this),this.status=1}P(Go,Er);function Ve(i){this.g=i}P(Ve,qo),Ve.prototype.ua=function(){wt(this.g,"a")},Ve.prototype.ta=function(i){wt(this.g,new jo(i))},Ve.prototype.sa=function(i){wt(this.g,new Go)},Ve.prototype.ra=function(){wt(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Qa=function(){return new hs},za=function(){return Jn()},$a=me,Or={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,_s=Zn,ro.COMPLETE="complete",Ka=ro,Zi.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",pt.prototype.listen=pt.prototype.K,wn=Zi,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Ga=tt}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});const $o="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Hu("@firebase/firestore");function En(){return ve.logLevel}function U(s,...t){if(ve.logLevel<=ne.DEBUG){const e=t.map(ri);ve.debug(`Firestore (${Ze}): ${s}`,...e)}}function Qt(s,...t){if(ve.logLevel<=ne.ERROR){const e=t.map(ri);ve.error(`Firestore (${Ze}): ${s}`,...e)}}function Ue(s,...t){if(ve.logLevel<=ne.WARN){const e=t.map(ri);ve.warn(`Firestore (${Ze}): ${s}`,...e)}}function ri(s){if(typeof s=="string")return s;try{/**
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
 */function O(s="Unexpected state"){const t=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: `+s;throw Qt(t),new Error(t)}function W(s,t){s||O()}function q(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Fa{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class nl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class sl{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let n=this.i;const r=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Wa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new Tt(t)}}class rl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class il{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new rl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ol{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class al{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){W(this.o===void 0);const n=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const r=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new ol(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cl(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<s;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=cl(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<e&&(n+=t.charAt(r[o]%t.length))}return n}}function z(s,t){return s<t?-1:s>t?1:0}function Le(s,t,e){return s.length===t.length&&s.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new it(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new it(0,0))}static max(){return new B(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Dn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const o=t.get(r),a=e.get(r);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends Dn{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new J(e)}static emptyPath(){return new J([])}}const ul=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Dn{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return ul.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const o=()=>{if(n.length===0)throw new b(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;r<t.length;){const u=t[r];if(u==="\\"){if(r+1===t.length)throw new b(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new b(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,r+=2}else u==="`"?(a=!a,r++):u!=="."||a?(n+=u,r++):(o(),r++)}if(o(),a)throw new b(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(J.fromString(t))}static fromName(t){return new L(J.fromString(t).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new J(t.slice()))}}function ll(s,t){const e=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=B.fromTimestamp(n===1e9?new it(e+1,0):new it(e,n));return new ie(r,L.empty(),t)}function hl(s){return new ie(s.readTime,s.key,-1)}class ie{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ie(B.min(),L.empty(),-1)}static max(){return new ie(B.max(),L.empty(),-1)}}function dl(s,t){let e=s.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(s.documentKey,t.documentKey),e!==0?e:z(s.largestBatchId,t.largestBatchId))}/**
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
 */const fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ml{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(s){if(s.code!==C.FAILED_PRECONDITION||s.message!==fl)throw s;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new M((n,r)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,r)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof M?e:M.resolve(e)}catch(e){return M.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):M.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):M.reject(e)}static resolve(t){return new M((e,n)=>{e(t)})}static reject(t){return new M((e,n)=>{n(t)})}static waitFor(t){return new M((e,n)=>{let r=0,o=0,a=!1;t.forEach(u=>{++r,u.next(()=>{++o,a&&o===r&&e()},h=>n(h))}),a=!0,o===r&&e()})}static or(t){let e=M.resolve(!1);for(const n of t)e=e.next(r=>r?M.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,o)=>{n.push(e.call(this,r,o))}),this.waitFor(n)}static mapArray(t,e){return new M((n,r)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&n(a)},m=>r(m))}})}static doWhile(t,e){return new M((n,r)=>{const o=()=>{t()===!0?e().next(()=>{o()},r):n()};o()})}}function pl(s){const t=s.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class ii{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ii.oe=-1;function Ks(s){return s==null}function ws(s){return s===0&&1/s==-1/0}function gl(s){return typeof s=="number"&&Number.isInteger(s)&&!ws(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(s){let t=0;for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t++;return t}function Ae(s,t){for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t(e,s[e])}function Xa(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ms(this.root,t,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ms(this.root,t,this.comparator,!0)}}class ms{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&r&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,r,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=r??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,o){return new lt(t??this.key,e??this.value,n??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const o=n(t,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(t,e,n),null):o===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return lt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,o=n.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new dt(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Le(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Ya extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ya("Invalid base64 string: "+o):o}}(t);return new ft(e)}static fromUint8Array(t){const e=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const _l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(s){if(W(!!s),typeof s=="string"){let t=0;const e=_l.exec(s);if(W(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:et(s.seconds),nanos:et(s.nanos)}}function et(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ie(s){return typeof s=="string"?ft.fromBase64String(s):ft.fromUint8Array(s)}/**
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
 */function oi(s){var t,e;return((e=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ai(s){const t=s.mapValue.fields.__previous_value__;return oi(t)?ai(t):t}function kn(s){const t=oe(s.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,n,r,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ps={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ee(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?oi(s)?4:vl(s)?9007199254740991:Tl(s)?10:11:O()}function Bt(s,t){if(s===t)return!0;const e=Ee(s);if(e!==Ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return kn(s).isEqual(kn(t));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=oe(r.timestampValue),u=oe(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(s,t);case 5:return s.stringValue===t.stringValue;case 6:return function(r,o){return Ie(r.bytesValue).isEqual(Ie(o.bytesValue))}(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return function(r,o){return et(r.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(s,t);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return et(r.integerValue)===et(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=et(r.doubleValue),u=et(o.doubleValue);return a===u?ws(a)===ws(u):isNaN(a)&&isNaN(u)}return!1}(s,t);case 9:return Le(s.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},u=o.mapValue.fields||{};if(zo(a)!==zo(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Bt(a[h],u[h])))return!1;return!0}(s,t);default:return O()}}function bn(s,t){return(s.values||[]).find(e=>Bt(e,t))!==void 0}function Oe(s,t){if(s===t)return 0;const e=Ee(s),n=Ee(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(s.booleanValue,t.booleanValue);case 2:return function(o,a){const u=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(s,t);case 3:return Wo(s.timestampValue,t.timestampValue);case 4:return Wo(kn(s),kn(t));case 5:return z(s.stringValue,t.stringValue);case 6:return function(o,a){const u=Ie(o),h=Ie(a);return u.compareTo(h)}(s.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=z(u[d],h[d]);if(m!==0)return m}return z(u.length,h.length)}(s.referenceValue,t.referenceValue);case 8:return function(o,a){const u=z(et(o.latitude),et(a.latitude));return u!==0?u:z(et(o.longitude),et(a.longitude))}(s.geoPointValue,t.geoPointValue);case 9:return Ho(s.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const y=o.fields||{},E=a.fields||{},S=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=(h=E.value)===null||h===void 0?void 0:h.arrayValue,V=z(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:Ho(S,P)}(s.mapValue,t.mapValue);case 11:return function(o,a){if(o===ps.mapValue&&a===ps.mapValue)return 0;if(o===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const E=z(h[y],m[y]);if(E!==0)return E;const S=Oe(u[h[y]],d[m[y]]);if(S!==0)return S}return z(h.length,m.length)}(s.mapValue,t.mapValue);default:throw O()}}function Wo(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return z(s,t);const e=oe(s),n=oe(t),r=z(e.seconds,n.seconds);return r!==0?r:z(e.nanos,n.nanos)}function Ho(s,t){const e=s.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const o=Oe(e[r],n[r]);if(o)return o}return z(e.length,n.length)}function Be(s){return Br(s)}function Br(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(e){const n=oe(e);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(e){return Ie(e).toBase64()}(s.bytesValue):"referenceValue"in s?function(e){return L.fromName(e).toString()}(s.referenceValue):"geoPointValue"in s?function(e){return`geo(${e.latitude},${e.longitude})`}(s.geoPointValue):"arrayValue"in s?function(e){let n="[",r=!0;for(const o of e.values||[])r?r=!1:n+=",",n+=Br(o);return n+"]"}(s.arrayValue):"mapValue"in s?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",o=!0;for(const a of n)o?o=!1:r+=",",r+=`${a}:${Br(e.fields[a])}`;return r+"}"}(s.mapValue):O()}function Xo(s,t){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${t.path.canonicalString()}`}}function qr(s){return!!s&&"integerValue"in s}function ci(s){return!!s&&"arrayValue"in s}function Yo(s){return!!s&&"nullValue"in s}function Jo(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function ys(s){return!!s&&"mapValue"in s}function Tl(s){var t,e;return((e=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Pn(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const t={mapValue:{fields:{}}};return Ae(s.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Pn(n)),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(s.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Pn(s.arrayValue.values[e]);return t}return Object.assign({},s)}function vl(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ys(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pn(e)}setAll(t){let e=ht.emptyPath(),n={},r=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,n,r),n={},r=[],e=u.popLast()}a?n[u.lastSegment()]=Pn(a):r.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,r)}delete(t){const e=this.field(t.popLast());ys(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ys(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ae(e,(r,o)=>t[r]=o);for(const r of n)delete t[r]}clone(){return new St(Pn(this.value))}}function Ja(s){const t=[];return Ae(s.fields,(e,n)=>{const r=new ht([e]);if(ys(n)){const o=Ja(n.mapValue).fields;if(o.length===0)t.push(r);else for(const a of o)t.push(r.child(a))}else t.push(r)}),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,n,r,o,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new vt(t,0,B.min(),B.min(),B.min(),St.empty(),0)}static newFoundDocument(t,e,n,r){return new vt(t,1,e,B.min(),n,r,0)}static newNoDocument(t,e){return new vt(t,2,e,B.min(),B.min(),St.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,B.min(),B.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class As{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(s,t,e){let n=0;for(let r=0;r<s.position.length;r++){const o=t[r],a=s.position[r];if(o.field.isKeyField()?n=L.comparator(L.fromName(a.referenceValue),e.key):n=Oe(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ta(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let e=0;e<s.position.length;e++)if(!Bt(s.position[e],t.position[e]))return!1;return!0}/**
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
 */class xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Il(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
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
 */class Za{}class st extends Za{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new wl(t,e,n):e==="array-contains"?new Sl(t,n):e==="in"?new Pl(t,n):e==="not-in"?new Cl(t,n):e==="array-contains-any"?new Vl(t,n):new st(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Al(t,n):new Rl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Oe(e,this.value)):e!==null&&Ee(this.value)===Ee(e)&&this.matchesComparison(Oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Za{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new xt(t,e)}matches(t){return tc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tc(s){return s.op==="and"}function ec(s){return El(s)&&tc(s)}function El(s){for(const t of s.filters)if(t instanceof xt)return!1;return!0}function jr(s){if(s instanceof st)return s.field.canonicalString()+s.op.toString()+Be(s.value);if(ec(s))return s.filters.map(t=>jr(t)).join(",");{const t=s.filters.map(e=>jr(e)).join(",");return`${s.op}(${t})`}}function nc(s,t){return s instanceof st?function(n,r){return r instanceof st&&n.op===r.op&&n.field.isEqual(r.field)&&Bt(n.value,r.value)}(s,t):s instanceof xt?function(n,r){return r instanceof xt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((o,a,u)=>o&&nc(a,r.filters[u]),!0):!1}(s,t):void O()}function sc(s){return s instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`}(s):s instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(sc).join(" ,")+"}"}(s):"Filter"}class wl extends st{constructor(t,e,n){super(t,e,n),this.key=L.fromName(n.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Al extends st{constructor(t,e){super(t,"in",e),this.keys=rc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rl extends st{constructor(t,e){super(t,"not-in",e),this.keys=rc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function rc(s,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>L.fromName(n.referenceValue))}class Sl extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ci(e)&&bn(e.arrayValue,this.value)}}class Pl extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&bn(this.value.arrayValue,e)}}class Cl extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!bn(this.value.arrayValue,e)}}class Vl extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ci(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>bn(this.value.arrayValue,n))}}/**
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
 */class Ml{constructor(t,e=null,n=[],r=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ea(s,t=null,e=[],n=[],r=null,o=null,a=null){return new Ml(s,t,e,n,r,o,a)}function ui(s){const t=q(s);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Ks(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Be(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Be(n)).join(",")),t.ue=e}return t.ue}function li(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<s.orderBy.length;e++)if(!Il(s.orderBy[e],t.orderBy[e]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let e=0;e<s.filters.length;e++)if(!nc(s.filters[e],t.filters[e]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!ta(s.startAt,t.startAt)&&ta(s.endAt,t.endAt)}function Gr(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e=null,n=[],r=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dl(s,t,e,n,r,o,a,u){return new tn(s,t,e,n,r,o,a,u)}function $s(s){return new tn(s)}function na(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function ic(s){return s.collectionGroup!==null}function Cn(s){const t=q(s);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new dt(ht.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new xn(o,n))}),e.has(ht.keyField().canonicalString())||t.ce.push(new xn(ht.keyField(),n))}return t.ce}function Ft(s){const t=q(s);return t.le||(t.le=kl(t,Cn(s))),t.le}function kl(s,t){if(s.limitType==="F")return ea(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new xn(r.field,o)});const e=s.endAt?new As(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new As(s.startAt.position,s.startAt.inclusive):null;return ea(s.path,s.collectionGroup,t,s.filters,s.limit,e,n)}}function Kr(s,t){const e=s.filters.concat([t]);return new tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),e,s.limit,s.limitType,s.startAt,s.endAt)}function Rs(s,t,e){return new tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,e,s.startAt,s.endAt)}function zs(s,t){return li(Ft(s),Ft(t))&&s.limitType===t.limitType}function oc(s){return`${ui(Ft(s))}|lt:${s.limitType}`}function De(s){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>sc(r)).join(", ")}]`),Ks(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Be(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Be(r)).join(",")),`Target(${n})`}(Ft(s))}; limitType=${s.limitType})`}function Qs(s,t){return t.isFoundDocument()&&function(n,r){const o=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):L.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(s,t)&&function(n,r){for(const o of Cn(n))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(s,t)&&function(n,r){for(const o of n.filters)if(!o.matches(r))return!1;return!0}(s,t)&&function(n,r){return!(n.startAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d<=0:d<0}(n.startAt,Cn(n),r)||n.endAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d>=0:d>0}(n.endAt,Cn(n),r))}(s,t)}function Nl(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function ac(s){return(t,e)=>{let n=!1;for(const r of Cn(s)){const o=bl(r,t,e);if(o!==0)return o;n=n||r.field.isKeyField()}return 0}}function bl(s,t,e){const n=s.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Oe(h,d):O()}(s.field,t,e);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,o]of n)if(this.equalsFn(r,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return void(r[o]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(e,n)=>{for(const[r,o]of n)t(r,o)})}isEmpty(){return Xa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Z(L.comparator);function Wt(){return xl}const cc=new Z(L.comparator);function An(...s){let t=cc;for(const e of s)t=t.insert(e.key,e);return t}function uc(s){let t=cc;return s.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ye(){return Vn()}function lc(){return Vn()}function Vn(){return new en(s=>s.toString(),(s,t)=>s.isEqual(t))}const Fl=new Z(L.comparator),Ul=new dt(L.comparator);function j(...s){let t=Ul;for(const e of s)t=t.add(e);return t}const Ll=new dt(z);function Ol(){return Ll}/**
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
 */function hi(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(t)?"-0":t}}function hc(s){return{integerValue:""+s}}function Bl(s,t){return gl(t)?hc(t):hi(s,t)}/**
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
 */class Ws{constructor(){this._=void 0}}function ql(s,t,e){return s instanceof Ss?function(r,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&oi(o)&&(o=ai(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):s instanceof qe?fc(s,t):s instanceof je?mc(s,t):function(r,o){const a=dc(r,o),u=sa(a)+sa(r.Pe);return qr(a)&&qr(r.Pe)?hc(u):hi(r.serializer,u)}(s,t)}function jl(s,t,e){return s instanceof qe?fc(s,t):s instanceof je?mc(s,t):e}function dc(s,t){return s instanceof Ps?function(n){return qr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Ss extends Ws{}class qe extends Ws{constructor(t){super(),this.elements=t}}function fc(s,t){const e=pc(t);for(const n of s.elements)e.some(r=>Bt(r,n))||e.push(n);return{arrayValue:{values:e}}}class je extends Ws{constructor(t){super(),this.elements=t}}function mc(s,t){let e=pc(t);for(const n of s.elements)e=e.filter(r=>!Bt(r,n));return{arrayValue:{values:e}}}class Ps extends Ws{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function sa(s){return et(s.integerValue||s.doubleValue)}function pc(s){return ci(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e){this.field=t,this.transform=e}}function Gl(s,t){return s.field.isEqual(t.field)&&function(n,r){return n instanceof qe&&r instanceof qe||n instanceof je&&r instanceof je?Le(n.elements,r.elements,Bt):n instanceof Ps&&r instanceof Ps?Bt(n.Pe,r.Pe):n instanceof Ss&&r instanceof Ss}(s.transform,t.transform)}class Kl{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ts(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Hs{}function _c(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new di(s.key,Nt.none()):new Gn(s.key,s.data,Nt.none());{const e=s.data,n=St.empty();let r=new dt(ht.comparator);for(let o of t.fields)if(!r.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),r=r.add(o)}return new he(s.key,n,new Vt(r.toArray()),Nt.none())}}function $l(s,t,e){s instanceof Gn?function(r,o,a){const u=r.value.clone(),h=ia(r.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(s,t,e):s instanceof he?function(r,o,a){if(!Ts(r.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ia(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(yc(r)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(s,t,e):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Mn(s,t,e,n){return s instanceof Gn?function(o,a,u,h){if(!Ts(o.precondition,a))return u;const d=o.value.clone(),m=oa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(s,t,e,n):s instanceof he?function(o,a,u,h){if(!Ts(o.precondition,a))return u;const d=oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(yc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(s,t,e,n):function(o,a,u){return Ts(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(s,t,e)}function zl(s,t){let e=null;for(const n of s.fieldTransforms){const r=t.data.field(n.field),o=dc(n.transform,r||null);o!=null&&(e===null&&(e=St.empty()),e.set(n.field,o))}return e||null}function ra(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Le(n,r,(o,a)=>Gl(o,a))}(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Gn extends Hs{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class he extends Hs{constructor(t,e,n,r,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function yc(s){const t=new Map;return s.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=s.data.field(e);t.set(e,n)}}),t}function ia(s,t,e){const n=new Map;W(s.length===e.length);for(let r=0;r<e.length;r++){const o=s[r],a=o.transform,u=t.data.field(o.field);n.set(o.field,jl(a,u,e[r]))}return n}function oa(s,t,e){const n=new Map;for(const r of s){const o=r.transform,a=e.data.field(r.field);n.set(r.field,ql(o,a,t))}return n}class di extends Hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ql extends Hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(t.key)&&$l(o,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=lc();return this.mutations.forEach(r=>{const o=t.get(r.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(r.key)?null:u;const h=_c(a,u);h!==null&&n.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Le(this.mutations,t.mutations,(e,n)=>ra(e,n))&&Le(this.baseMutations,t.baseMutations,(e,n)=>ra(e,n))}}class fi{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){W(t.mutations.length===n.length);let r=function(){return Fl}();const o=t.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,n[a].version);return new fi(t,e,n,r)}}/**
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
 */class Hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Xl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,G;function Yl(s){switch(s){default:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Tc(s){if(s===void 0)return Qt("GRPC error has no .code"),C.UNKNOWN;switch(s){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(G=nt||(nt={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jl(){return new TextEncoder}/**
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
 */const Zl=new Te([4294967295,4294967295],0);function aa(s){const t=Jl().encode(s),e=new ja;return e.update(t),new Uint8Array(e.digest())}function ca(s){const t=new DataView(s.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Te([e,n],0),new Te([r,o],0)]}class mi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Rn(`Invalid padding: ${e}`);if(n<0)throw new Rn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Rn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Rn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Te.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(Te.fromNumber(n)));return r.compare(Zl)===1&&(r=new Te([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=aa(t),[n,r]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,r,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new mi(o,r,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=aa(t),[n,r]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,r,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e,n,r,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Kn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Xs(B.min(),r,new Z(z),Wt(),j())}}class Kn{constructor(t,e,n,r,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Kn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class vc{constructor(t,e){this.targetId=t,this.me=e}}class Ic{constructor(t,e,n=ft.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ua{constructor(){this.fe=0,this.ge=ha(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=j(),e=j(),n=j();return this.ge.forEach((r,o)=>{switch(o){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O()}}),new Kn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=ha()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class th{constructor(t){this.Le=t,this.Be=new Map,this.ke=Wt(),this.qe=la(),this.Qe=new Z(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const o=r.target;if(Gr(o))if(n===0){const a=new L(o.path);this.Ue(e,a,vt.newNoDocument(a,B.min()))}else W(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=e;let a,u;try{a=Ie(n).toUint8Array()}catch(h){if(h instanceof Ya)return Ue("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new mi(a,r,o)}catch(h){return Ue(h instanceof Rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Gr(u.target)){const h=new L(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,vt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=j();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const r=new Xs(t,e,this.Qe,this.ke,n);return this.ke=Wt(),this.qe=la(),this.Qe=new Z(z),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ua,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new dt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ua),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function la(){return new Z(L.comparator)}function ha(){return new Z(L.comparator)}const eh={asc:"ASCENDING",desc:"DESCENDING"},nh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sh={and:"AND",or:"OR"};class rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $r(s,t){return s.useProto3Json||Ks(t)?t:{value:t}}function Cs(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ec(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function ih(s,t){return Cs(s,t.toTimestamp())}function Ut(s){return W(!!s),B.fromTimestamp(function(e){const n=oe(e);return new it(n.seconds,n.nanos)}(s))}function pi(s,t){return zr(s,t).canonicalString()}function zr(s,t){const e=function(r){return new J(["projects",r.projectId,"databases",r.database])}(s).child("documents");return t===void 0?e:e.child(t)}function wc(s){const t=J.fromString(s);return W(Cc(t)),t}function Qr(s,t){return pi(s.databaseId,t.path)}function xr(s,t){const e=wc(t);if(e.get(1)!==s.databaseId.projectId)throw new b(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+s.databaseId.projectId);if(e.get(3)!==s.databaseId.database)throw new b(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+s.databaseId.database);return new L(Rc(e))}function Ac(s,t){return pi(s.databaseId,t)}function oh(s){const t=wc(s);return t.length===4?J.emptyPath():Rc(t)}function Wr(s){return new J(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Rc(s){return W(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function da(s,t,e){return{name:Qr(s,t),fields:e.value.mapValue.fields}}function ah(s,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(W(m===void 0||typeof m=="string"),ft.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ft.fromUint8Array(m||new Uint8Array))}(s,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?C.UNKNOWN:Tc(d.code);return new b(m,d.message||"")}(a);e=new Ic(n,r,o,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=xr(s,n.document.name),o=Ut(n.document.updateTime),a=n.document.createTime?Ut(n.document.createTime):B.min(),u=new St({mapValue:{fields:n.document.fields}}),h=vt.newFoundDocument(r,o,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new vs(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=xr(s,n.document),o=n.readTime?Ut(n.readTime):B.min(),a=vt.newNoDocument(r,o),u=n.removedTargetIds||[];e=new vs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=xr(s,n.document),o=n.removedTargetIds||[];e=new vs([],o,r,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:o}=n,a=new Xl(r,o),u=n.targetId;e=new vc(u,a)}}return e}function ch(s,t){let e;if(t instanceof Gn)e={update:da(s,t.key,t.value)};else if(t instanceof di)e={delete:Qr(s,t.key)};else if(t instanceof he)e={update:da(s,t.key,t.data),updateMask:_h(t.fieldMask)};else{if(!(t instanceof Ql))return O();e={verify:Qr(s,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const u=a.transform;if(u instanceof Ss)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof qe)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof je)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ps)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:ih(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(s,t.precondition)),e}function uh(s,t){return s&&s.length>0?(W(t!==void 0),s.map(e=>function(r,o){let a=r.updateTime?Ut(r.updateTime):Ut(o);return a.isEqual(B.min())&&(a=Ut(o)),new Kl(a,r.transformResults||[])}(e,t))):[]}function lh(s,t){return{documents:[Ac(s,t.path)]}}function hh(s,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ac(s,r);const o=function(d){if(d.length!==0)return Pc(xt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:ke(E.field),direction:mh(E.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=$r(s,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:r}}function dh(s){let t=oh(s.parent);const e=s.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){W(n===1);const m=e.from[0];m.allDescendants?r=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const E=Sc(y);return E instanceof xt&&ec(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(E=>function(P){return new xn(Ne(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(e.orderBy));let u=null;e.limit&&(u=function(y){let E;return E=typeof y=="object"?y.value:y,Ks(E)?null:E}(e.limit));let h=null;e.startAt&&(h=function(y){const E=!!y.before,S=y.values||[];return new As(S,E)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const E=!y.before,S=y.values||[];return new As(S,E)}(e.endAt)),Dl(t,r,a,o,u,"F",h,d)}function fh(s,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sc(s){return s.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ne(e.unaryFilter.field);return st.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ne(e.unaryFilter.field);return st.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ne(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(s):s.fieldFilter!==void 0?function(e){return st.create(Ne(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(n=>Sc(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(s):O()}function mh(s){return eh[s]}function ph(s){return nh[s]}function gh(s){return sh[s]}function ke(s){return{fieldPath:s.canonicalString()}}function Ne(s){return ht.fromServerFormat(s.fieldPath)}function Pc(s){return s instanceof st?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(e.field),op:ph(e.op),value:e.value}}}(s):s instanceof xt?function(e){const n=e.getFilters().map(r=>Pc(r));return n.length===1?n[0]:{compositeFilter:{op:gh(e.op),filters:n}}}(s):O()}function _h(s){const t=[];return s.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Cc(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e,n,r,o=B.min(),a=B.min(),u=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.ct=t}}function Th(s){const t=dh({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
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
 */class vh{constructor(){this.un=new Ih}addToCollectionParentIndex(t,e){return this.un.add(e),M.resolve()}getCollectionParents(t,e){return M.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return M.resolve()}deleteFieldIndex(t,e){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,e){return M.resolve()}getDocumentsMatchingTarget(t,e){return M.resolve(null)}getIndexType(t,e){return M.resolve(0)}getFieldIndexes(t,e){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,e){return M.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,e){return M.resolve(ie.min())}updateCollectionGroup(t,e,n){return M.resolve()}updateIndexEntries(t,e){return M.resolve()}}class Ih{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new dt(J.comparator),o=!r.has(n);return this.index[e]=r.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new dt(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ge(0)}static kn(){return new Ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.changes=new en(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?M.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Mn(n.mutation,r,Vt.empty(),it.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const r=ye();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(o=>{let a=An();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ye();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const r=[];return n.forEach(o=>{e.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(t,r).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,r){let o=Wt();const a=Vn(),u=function(){return Vn()}();return e.forEach((h,d)=>{const m=n.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof he)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Mn(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return u.set(d,new wh(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(t,e){const n=Vn();let r=new Z((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Vt.empty();m=u.applyToLocalView(d,m),n.set(h,m);const y=(r.get(u.batchId)||j()).add(h);r=r.insert(u.batchId,y)})}).next(()=>{const a=[],u=r.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,y=lc();m.forEach(E=>{if(!o.has(E)){const S=_c(e.get(E),n.get(E));S!==null&&y.set(E,S),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return M.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ic(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-o.size):M.resolve(ye());let u=-1,h=o;return a.next(d=>M.forEach(d,(m,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(m)?M.resolve():this.remoteDocumentCache.getEntry(t,m).next(E=>{h=h.insert(m,E)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,j())).next(m=>({batchId:u,changes:uc(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(n=>{let r=An();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const o=e.collectionGroup;let a=An();return this.indexManager.getCollectionParents(t,o).next(u=>M.forEach(u,h=>{const d=function(y,E){return new tn(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,r).next(m=>{m.forEach((y,E)=>{a=a.insert(y,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,r))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,vt.newInvalidDocument(m)))});let u=An();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Mn(m.mutation,d,Vt.empty(),it.now()),Qs(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Rh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return M.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Ut(r.createTime)}}(e)),M.resolve()}getNamedQuery(t,e){return M.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:Th(r.bundledQuery),readTime:Ut(r.readTime)}}(e)),M.resolve()}}/**
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
 */class Sh{constructor(){this.overlays=new Z(L.comparator),this.Ir=new Map}getOverlay(t,e){return M.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ye();return M.forEach(e,r=>this.getOverlay(t,r).next(o=>{o!==null&&n.set(r,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,o)=>{this.ht(t,e,o)}),M.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),M.resolve()}getOverlaysForCollection(t,e,n){const r=ye(),o=e.length+1,a=new L(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&r.set(h.getKey(),h)}return M.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let o=new Z((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=ye(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=r)););return M.resolve(u)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Hl(e,n));let o=this.Ir.get(e);o===void 0&&(o=j(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
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
 */class Ph{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.Tr=new dt(at.Er),this.dr=new dt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new at(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new L(new J([])),n=new at(e,t),r=new at(e,t+1),o=[];return this.dr.forEachInRange([n,r],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new L(new J([])),n=new at(e,t),r=new at(e,t+1);let o=j();return this.dr.forEachInRange([n,r],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return L.comparator(t.key,e.key)||z(t.wr,e.wr)}static Ar(t,e){return z(t.wr,e.wr)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new dt(at.Er)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wl(o,e,n,r);this.mutationQueue.push(a);for(const u of r)this.br=this.br.add(new at(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,e){return M.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),o=r<0?0:r;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),r=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,r],a=>{const u=this.Dr(a.wr);o.push(u)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new dt(z);return e.forEach(r=>{const o=new at(r,0),a=new at(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{n=n.add(u.wr)})}),M.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let o=n;L.isDocumentKey(o)||(o=o.child(""));const a=new at(new L(o),0);let u=new dt(z);return this.br.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===r&&(u=u.add(h.wr)),!0)},a),M.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const r=this.Dr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){W(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return M.forEach(e.mutations,r=>{const o=new at(r.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new at(e,0),r=this.br.firstAfterOrEqual(n);return M.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.Mr=t,this.docs=function(){return new Z(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),o=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return M.resolve(n?n.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let n=Wt();return e.forEach(r=>{const o=this.docs.get(r);n=n.insert(r,o?o.document.mutableCopy():vt.newInvalidDocument(r))}),M.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let o=Wt();const a=e.path,u=new L(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dl(hl(m),n)<=0||(r.has(m.key)||Qs(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(t,e,n,r){O()}Or(t,e){return M.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Mh(this)}getSize(t){return M.resolve(this.size)}}class Mh extends Eh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)}),M.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.persistence=t,this.Nr=new en(e=>ui(e),li),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gi,this.targetCount=0,this.kr=Ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,r)=>e(r)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),M.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,M.resolve()}updateTargetData(t,e){return this.Kn(e),M.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,e,n){let r=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),r++)}),M.waitFor(o).next(()=>r)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return M.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),M.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,o=[];return r&&e.forEach(a=>{o.push(r.markPotentiallyOrphaned(t,a))}),M.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),M.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return M.resolve(n)}containsKey(t,e){return M.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ii(0),this.Kr=!1,this.Kr=!0,this.$r=new Ph,this.referenceDelegate=t(this),this.Ur=new Dh(this),this.indexManager=new vh,this.remoteDocumentCache=function(r){return new Vh(r)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new yh(e),this.Gr=new Rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Ch(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){U("MemoryPersistence","Starting transaction:",t);const r=new Nh(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(o=>this.referenceDelegate.jr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Hr(t,e){return M.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Nh extends ml{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.Jr=new gi,this.Yr=null}static Zr(t){return new _i(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),M.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),M.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),M.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,n=>{const r=L.fromPath(n);return this.ei(t,r).next(o=>{o||e.removeEntry(r,B.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return M.or([()=>M.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=j(),r=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new yi(t,e.fromCache,n,r)}}/**
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
 */class bh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ju()?8:pl(Zu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,r,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new bh;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,n,r){return n.documentReadCount<this.ji?(En()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",De(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(En()<=ne.DEBUG&&U("QueryEngine","Query:",De(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(En()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",De(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):M.resolve())}Yi(t,e){if(na(e))return M.resolve(null);let n=Ft(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Rs(e,null,"F"),n=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=j(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,Rs(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,n,r){return na(e)||r.isEqual(B.min())?M.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,r)?M.resolve(null):(En()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),De(e)),this.rs(t,a,e,ll(r,-1)).next(u=>u))})}ts(t,e){let n=new dt(ac(t));return e.forEach((r,o)=>{Qs(t,o)&&(n=n.add(o))}),n}ns(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Xi(t,e,n){return En()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",De(e)),this.Ji.getDocumentsMatchingQuery(t,e,ie.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Fh{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Z(z),this._s=new en(o=>ui(o),li),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ah(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Uh(s,t,e,n){return new Fh(s,t,e,n)}async function Vc(s,t){const e=q(s);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(o=>(r=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],u=[];let h=j();for(const d of r){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Lh(s,t){const e=q(s);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const y=d.batch,E=y.keys();let S=M.resolve();return E.forEach(P=>{S=S.next(()=>m.getEntry(h,P)).next(V=>{const k=d.docVersions.get(P);W(k!==null),V.version.compareTo(k)<0&&(y.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let h=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function Mc(s){const t=q(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Oh(s,t){const e=q(s),n=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const u=[];t.targetChanges.forEach((m,y)=>{const E=r.get(y);if(!E)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,y)));let S=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),r=r.insert(y,S),function(V,k,x){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(E,S,m)&&u.push(e.Ur.updateTargetData(o,S))});let h=Wt(),d=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Bh(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!n.isEqual(B.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(y=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));u.push(m)}return M.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=r,o))}function Bh(s,t,e){let n=j(),r=j();return e.forEach(o=>n=n.add(o)),t.getEntries(s,n).next(o=>{let a=Wt();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(u)),h.isNoDocument()&&h.version.isEqual(B.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:r}})}function qh(s,t){const e=q(s);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function jh(s,t){const e=q(s);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Ur.getTargetData(n,t).next(o=>o?(r=o,M.resolve(r)):e.Ur.allocateTargetId(n).next(a=>(r=new se(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.os.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Hr(s,t,e){const n=q(s),r=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!jn(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(r.target)}function fa(s,t,e){const n=q(s);let r=B.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const y=q(h),E=y._s.get(m);return E!==void 0?M.resolve(y.os.get(E)):y.Ur.getTargetData(d,m)}(n,a,Ft(t)).next(u=>{if(u)return r=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?r:B.min(),e?o:j())).next(u=>(Gh(n,Nl(t),u),{documents:u,Ts:o})))}function Gh(s,t,e){let n=s.us.get(t)||B.min();e.forEach((r,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),s.us.set(t,n)}class ma{constructor(){this.activeTargetIds=Ol()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kh{constructor(){this.so=new ma,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ma,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class $h{_o(t){}shutdown(){}}/**
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
 */class pa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gs=null;function Fr(){return gs===null?gs=function(){return 268435456+Math.round(2147483648*Math.random())}():gs++,"0x"+gs.toString(16)}/**
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
 */const zh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class Wh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${r}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}get Fo(){return!1}Mo(e,n,r,o,a){const u=Fr(),h=this.xo(e,n.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${u}:`,h,r);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,r).then(m=>(U("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw Ue("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",r),m})}Lo(e,n,r,o,a,u){return this.Mo(e,n,r,o,a)}Oo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ze}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),r&&r.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const r=zh[e];return`${this.Do}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const o=Fr();return new Promise((a,u)=>{const h=new Ga;h.setWithCredentials(!0),h.listenOnce(Ka.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case _s.NO_ERROR:const m=h.getResponseJson();U(yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case _s.TIMEOUT:U(yt,`RPC '${t}' ${o} timed out`),u(new b(C.DEADLINE_EXCEEDED,"Request time out"));break;case _s.HTTP_ERROR:const y=h.getStatus();if(U(yt,`RPC '${t}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const P=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN}(S.status);u(new b(P,S.message))}else u(new b(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new b(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{U(yt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(r);U(yt,`RPC '${t}' ${o} sending request:`,r),h.send(e,"POST",d,n,15)})}Bo(t,e,n){const r=Fr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Qa(),u=za(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");U(yt,`Creating RPC '${t}' stream ${r}: ${m}`,h);const y=a.createWebChannel(m,h);let E=!1,S=!1;const P=new Qh({Io:k=>{S?U(yt,`Not sending because RPC '${t}' stream ${r} is closed:`,k):(E||(U(yt,`Opening RPC '${t}' stream ${r} transport.`),y.open(),E=!0),U(yt,`RPC '${t}' stream ${r} sending:`,k),y.send(k))},To:()=>y.close()}),V=(k,x,Q)=>{k.listen(x,X=>{try{Q(X)}catch(ot){setTimeout(()=>{throw ot},0)}})};return V(y,wn.EventType.OPEN,()=>{S||(U(yt,`RPC '${t}' stream ${r} transport opened.`),P.yo())}),V(y,wn.EventType.CLOSE,()=>{S||(S=!0,U(yt,`RPC '${t}' stream ${r} transport closed`),P.So())}),V(y,wn.EventType.ERROR,k=>{S||(S=!0,Ue(yt,`RPC '${t}' stream ${r} transport errored:`,k),P.So(new b(C.UNAVAILABLE,"The operation could not be completed")))}),V(y,wn.EventType.MESSAGE,k=>{var x;if(!S){const Q=k.data[0];W(!!Q);const X=Q,ot=X.error||((x=X[0])===null||x===void 0?void 0:x.error);if(ot){U(yt,`RPC '${t}' stream ${r} received error:`,ot);const jt=ot.status;let ct=function(_){const T=nt[_];if(T!==void 0)return Tc(T)}(jt),I=ot.message;ct===void 0&&(ct=C.INTERNAL,I="Unknown error status: "+jt+" with message "+ot.message),S=!0,P.So(new b(ct,I)),y.close()}else U(yt,`RPC '${t}' stream ${r} received:`,Q),P.bo(Q)}}),V(u,$a.STAT_EVENT,k=>{k.stat===Or.PROXY?U(yt,`RPC '${t}' stream ${r} detected buffering proxy`):k.stat===Or.NOPROXY&&U(yt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Ur(){return typeof document<"u"?document:null}/**
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
 */function Ys(s){return new rh(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n=1e3,r=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,r,o,a,u,h){this.ui=t,this.Ho=n,this.Jo=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Dc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Yo===e&&this.P_(n,r)},n=>{t(()=>{const r=new b(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(r)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{n(()=>this.I_(r))}),this.stream.onMessage(r=>{n(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hh extends kc{constructor(t,e,n,r,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=ah(this.serializer,t),n=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Ut(a.readTime):B.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Wr(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Gr(h)?{documents:lh(o,h)}:{query:hh(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ec(o,a.resumeToken);const d=$r(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Cs(o,a.snapshotVersion.toTimestamp());const d=$r(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=fh(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Wr(this.serializer),e.removeTarget=t,this.a_(e)}}class Xh extends kc{constructor(t,e,n,r,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=uh(t.writeResults,t.commitTime),n=Ut(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Wr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ch(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new b(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,zr(e,n),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(C.UNKNOWN,o.toString())})}Lo(t,e,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,zr(e,n),r,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new b(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Jh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qt(e),this.D_=!1):U("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e,n,r,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{Re(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=q(h);d.L_.add(4),await $n(d),d.q_.set("Unknown"),d.L_.delete(4),await Js(d)}(this))})}),this.q_=new Jh(n,r)}}async function Js(s){if(Re(s))for(const t of s.B_)await t(!0)}async function $n(s){for(const t of s.B_)await t(!1)}function Nc(s,t){const e=q(s);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ei(e)?Ii(e):nn(e).r_()&&vi(e,t))}function Ti(s,t){const e=q(s),n=nn(e);e.N_.delete(t),n.r_()&&bc(e,t),e.N_.size===0&&(n.r_()?n.o_():Re(e)&&e.q_.set("Unknown"))}function vi(s,t){if(s.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=s.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}nn(s).A_(t)}function bc(s,t){s.Q_.xe(t),nn(s).R_(t)}function Ii(s){s.Q_=new th({getRemoteKeysForTarget:t=>s.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>s.N_.get(t)||null,tt:()=>s.datastore.serializer.databaseId}),nn(s).start(),s.q_.v_()}function Ei(s){return Re(s)&&!nn(s).n_()&&s.N_.size>0}function Re(s){return q(s).L_.size===0}function xc(s){s.Q_=void 0}async function td(s){s.q_.set("Online")}async function ed(s){s.N_.forEach((t,e)=>{vi(s,t)})}async function nd(s,t){xc(s),Ei(s)?(s.q_.M_(t),Ii(s)):s.q_.set("Unknown")}async function sd(s,t,e){if(s.q_.set("Online"),t instanceof Ic&&t.state===2&&t.cause)try{await async function(r,o){const a=o.cause;for(const u of o.targetIds)r.N_.has(u)&&(await r.remoteSyncer.rejectListen(u,a),r.N_.delete(u),r.Q_.removeTarget(u))}(s,t)}catch(n){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Vs(s,n)}else if(t instanceof vs?s.Q_.Ke(t):t instanceof vc?s.Q_.He(t):s.Q_.We(t),!e.isEqual(B.min()))try{const n=await Mc(s.localStore);e.compareTo(n)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),bc(o,h);const y=new se(m.target,h,d,m.sequenceNumber);vi(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(s,e)}catch(n){U("RemoteStore","Failed to raise snapshot:",n),await Vs(s,n)}}async function Vs(s,t,e){if(!jn(t))throw t;s.L_.add(1),await $n(s),s.q_.set("Offline"),e||(e=()=>Mc(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),s.L_.delete(1),await Js(s)})}function Fc(s,t){return t().catch(e=>Vs(s,e,t))}async function Zs(s){const t=q(s),e=ae(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;rd(t);)try{const r=await qh(t.localStore,n);if(r===null){t.O_.length===0&&e.o_();break}n=r.batchId,id(t,r)}catch(r){await Vs(t,r)}Uc(t)&&Lc(t)}function rd(s){return Re(s)&&s.O_.length<10}function id(s,t){s.O_.push(t);const e=ae(s);e.r_()&&e.V_&&e.m_(t.mutations)}function Uc(s){return Re(s)&&!ae(s).n_()&&s.O_.length>0}function Lc(s){ae(s).start()}async function od(s){ae(s).p_()}async function ad(s){const t=ae(s);for(const e of s.O_)t.m_(e.mutations)}async function cd(s,t,e){const n=s.O_.shift(),r=fi.from(n,t,e);await Fc(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await Zs(s)}async function ud(s,t){t&&ae(s).V_&&await async function(n,r){if(function(a){return Yl(a)&&a!==C.ABORTED}(r.code)){const o=n.O_.shift();ae(n).s_(),await Fc(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Zs(n)}}(s,t),Uc(s)&&Lc(s)}async function ga(s,t){const e=q(s);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const n=Re(e);e.L_.add(3),await $n(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Js(e)}async function ld(s,t){const e=q(s);t?(e.L_.delete(2),await Js(e)):t||(e.L_.add(2),await $n(e),e.q_.set("Unknown"))}function nn(s){return s.K_||(s.K_=function(e,n,r){const o=q(e);return o.w_(),new Hh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(s.datastore,s.asyncQueue,{Eo:td.bind(null,s),Ro:ed.bind(null,s),mo:nd.bind(null,s),d_:sd.bind(null,s)}),s.B_.push(async t=>{t?(s.K_.s_(),Ei(s)?Ii(s):s.q_.set("Unknown")):(await s.K_.stop(),xc(s))})),s.K_}function ae(s){return s.U_||(s.U_=function(e,n,r){const o=q(e);return o.w_(),new Xh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(s.datastore,s.asyncQueue,{Eo:()=>Promise.resolve(),Ro:od.bind(null,s),mo:ud.bind(null,s),f_:ad.bind(null,s),g_:cd.bind(null,s)}),s.B_.push(async t=>{t?(s.U_.s_(),await Zs(s)):(await s.U_.stop(),s.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${s.O_.length} pending writes`),s.O_=[]))})),s.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,n,r,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,o){const a=Date.now()+n,u=new wi(t,e,a,r,o);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ai(s,t){if(Qt("AsyncQueue",`${t}: ${s}`),jn(s))return new b(C.UNAVAILABLE,`${t}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t?(e,n)=>t(e,n)||L.comparator(e.key,n.key):(e,n)=>L.comparator(e.key,n.key),this.keyedMap=An(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,o=n.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new be;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.W_=new Z(L.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ke{constructor(t,e,n,r,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,r,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ke(t,e,be.emptySet(e),a,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class dd{constructor(){this.queries=ya(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const r=q(e),o=r.queries;r.queries=ya(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(n)})})(this,new b(C.ABORTED,"Firestore shutting down"))}}function ya(){return new en(s=>oc(s),zs)}async function Ri(s,t){const e=q(s);let n=3;const r=t.query;let o=e.queries.get(r);o?!o.H_()&&t.J_()&&(n=2):(o=new hd,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(r,!0);break;case 1:o.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const u=Ai(a,`Initialization of query '${De(t.query)}' failed`);return void t.onError(u)}e.queries.set(r,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Pi(e)}async function Si(s,t){const e=q(s),n=t.query;let r=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?r=t.J_()?0:1:!o.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function fd(s,t){const e=q(s);let n=!1;for(const r of t){const o=r.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(r)&&(n=!0);a.z_=r}}n&&Pi(e)}function md(s,t,e){const n=q(s),r=n.queries.get(t);if(r)for(const o of r.j_)o.onError(e);n.queries.delete(t)}function Pi(s){s.Y_.forEach(t=>{t.next()})}var Xr,Ta;(Ta=Xr||(Xr={})).ea="default",Ta.Cache="cache";class Ci{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new Ke(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Xr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this.key=t}}class Bc{constructor(t){this.key=t}}class pd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=ac(t),this.Ra=new be(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new _a,r=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=r,u=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((m,y)=>{const E=r.get(m),S=Qs(this.query,y)?y:null,P=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;E&&S?E.data.isEqual(S.data)?P!==V&&(n.track({type:3,doc:S}),k=!0):this.ga(E,S)||(n.track({type:2,doc:S}),k=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!E&&S?(n.track({type:0,doc:S}),k=!0):E&&!S&&(n.track({type:1,doc:E}),k=!0,(h||d)&&(u=!0)),k&&(S?(a=a.add(S),o=V?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ra:a,fa:n,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,y)=>function(S,P){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return V(S)-V(P)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(n),r=r!=null&&r;const u=e&&!r?this.ya():[],h=this.da.size===0&&this.current&&!r?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Ke(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _a,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=j(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Bc(n))}),this.da.forEach(n=>{t.has(n)||e.push(new Oc(n))}),e}ba(t){this.Ta=t.Ts,this.da=j();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ke.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class gd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _d{constructor(t){this.key=t,this.va=!1}}class yd{constructor(t,e,n,r,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new en(u=>oc(u),zs),this.Ma=new Map,this.xa=new Set,this.Oa=new Z(L.comparator),this.Na=new Map,this.La=new gi,this.Ba={},this.ka=new Map,this.qa=Ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Td(s,t,e=!0){const n=zc(s);let r;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Da()):r=await qc(n,t,e,!0),r}async function vd(s,t){const e=zc(s);await qc(e,t,!0,!1)}async function qc(s,t,e,n){const r=await jh(s.localStore,Ft(t)),o=r.targetId,a=s.sharedClientState.addLocalQueryTarget(o,e);let u;return n&&(u=await Id(s,t,o,a==="current",r.resumeToken)),s.isPrimaryClient&&e&&Nc(s.remoteStore,r),u}async function Id(s,t,e,n,r){s.Ka=(y,E,S)=>async function(V,k,x,Q){let X=k.view.ma(x);X.ns&&(X=await fa(V.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,X)));const ot=Q&&Q.targetChanges.get(k.targetId),jt=Q&&Q.targetMismatches.get(k.targetId)!=null,ct=k.view.applyChanges(X,V.isPrimaryClient,ot,jt);return Ia(V,k.targetId,ct.wa),ct.snapshot}(s,y,E,S);const o=await fa(s.localStore,t,!0),a=new pd(t,o.Ts),u=a.ma(o.documents),h=Kn.createSynthesizedTargetChangeForCurrentChange(e,n&&s.onlineState!=="Offline",r),d=a.applyChanges(u,s.isPrimaryClient,h);Ia(s,e,d.wa);const m=new gd(t,e,a);return s.Fa.set(t,m),s.Ma.has(e)?s.Ma.get(e).push(t):s.Ma.set(e,[t]),d.snapshot}async function Ed(s,t,e){const n=q(s),r=n.Fa.get(t),o=n.Ma.get(r.targetId);if(o.length>1)return n.Ma.set(r.targetId,o.filter(a=>!zs(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&Ti(n.remoteStore,r.targetId),Yr(n,r.targetId)}).catch(qn)):(Yr(n,r.targetId),await Hr(n.localStore,r.targetId,!0))}async function wd(s,t){const e=q(s),n=e.Fa.get(t),r=e.Ma.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ti(e.remoteStore,n.targetId))}async function Ad(s,t,e){const n=Dd(s);try{const r=await function(a,u){const h=q(a),d=it.now(),m=u.reduce((S,P)=>S.add(P.key),j());let y,E;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Wt(),V=j();return h.cs.getEntries(S,m).next(k=>{P=k,P.forEach((x,Q)=>{Q.isValidDocument()||(V=V.add(x))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,P)).next(k=>{y=k;const x=[];for(const Q of u){const X=zl(Q,y.get(Q.key).overlayedDocument);X!=null&&x.push(new he(Q.key,X,Ja(X.value.mapValue),Nt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,x,u)}).next(k=>{E=k;const x=k.applyToLocalDocumentSet(y,V);return h.documentOverlayCache.saveOverlays(S,k.batchId,x)})}).then(()=>({batchId:E.batchId,changes:uc(y)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new Z(z)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(n,r.batchId,e),await zn(n,r.changes),await Zs(n.remoteStore)}catch(r){const o=Ai(r,"Failed to persist write");e.reject(o)}}async function jc(s,t){const e=q(s);try{const n=await Oh(e.localStore,t);t.targetChanges.forEach((r,o)=>{const a=e.Na.get(o);a&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?W(a.va):r.removedDocuments.size>0&&(W(a.va),a.va=!1))}),await zn(e,n,t)}catch(n){await qn(n)}}function va(s,t,e){const n=q(s);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&r.push(u.snapshot)}),function(a,u){const h=q(a);h.onlineState=u;let d=!1;h.queries.forEach((m,y)=>{for(const E of y.j_)E.Z_(u)&&(d=!0)}),d&&Pi(h)}(n.eventManager,t),r.length&&n.Ca.d_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Rd(s,t,e){const n=q(s);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Na.get(t),o=r&&r.key;if(o){let a=new Z(L.comparator);a=a.insert(o,vt.newNoDocument(o,B.min()));const u=j().add(o),h=new Xs(B.min(),new Map,new Z(z),a,u);await jc(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),Vi(n)}else await Hr(n.localStore,t,!1).then(()=>Yr(n,t,e)).catch(qn)}async function Sd(s,t){const e=q(s),n=t.batch.batchId;try{const r=await Lh(e.localStore,t);Kc(e,n,null),Gc(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await zn(e,r)}catch(r){await qn(r)}}async function Pd(s,t,e){const n=q(s);try{const r=await function(a,u){const h=q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(y=>(W(y!==null),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);Kc(n,t,e),Gc(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await zn(n,r)}catch(r){await qn(r)}}function Gc(s,t){(s.ka.get(t)||[]).forEach(e=>{e.resolve()}),s.ka.delete(t)}function Kc(s,t,e){const n=q(s);let r=n.Ba[n.currentUser.toKey()];if(r){const o=r.get(t);o&&(e?o.reject(e):o.resolve(),r=r.remove(t)),n.Ba[n.currentUser.toKey()]=r}}function Yr(s,t,e=null){s.sharedClientState.removeLocalQueryTarget(t);for(const n of s.Ma.get(t))s.Fa.delete(n),e&&s.Ca.$a(n,e);s.Ma.delete(t),s.isPrimaryClient&&s.La.gr(t).forEach(n=>{s.La.containsKey(n)||$c(s,n)})}function $c(s,t){s.xa.delete(t.path.canonicalString());const e=s.Oa.get(t);e!==null&&(Ti(s.remoteStore,e),s.Oa=s.Oa.remove(t),s.Na.delete(e),Vi(s))}function Ia(s,t,e){for(const n of e)n instanceof Oc?(s.La.addReference(n.key,t),Cd(s,n)):n instanceof Bc?(U("SyncEngine","Document no longer in limbo: "+n.key),s.La.removeReference(n.key,t),s.La.containsKey(n.key)||$c(s,n.key)):O()}function Cd(s,t){const e=t.key,n=e.path.canonicalString();s.Oa.get(e)||s.xa.has(n)||(U("SyncEngine","New document in limbo: "+e),s.xa.add(n),Vi(s))}function Vi(s){for(;s.xa.size>0&&s.Oa.size<s.maxConcurrentLimboResolutions;){const t=s.xa.values().next().value;s.xa.delete(t);const e=new L(J.fromString(t)),n=s.qa.next();s.Na.set(n,new _d(e)),s.Oa=s.Oa.insert(e,n),Nc(s.remoteStore,new se(Ft($s(e.path)),n,"TargetPurposeLimboResolution",ii.oe))}}async function zn(s,t,e){const n=q(s),r=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,h)=>{a.push(n.Ka(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const y=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){r.push(d);const y=yi.Wi(h.targetId,d);o.push(y)}}))}),await Promise.all(a),n.Ca.d_(r),await async function(h,d){const m=q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>M.forEach(d,E=>M.forEach(E.$i,S=>m.persistence.referenceDelegate.addReference(y,E.targetId,S)).next(()=>M.forEach(E.Ui,S=>m.persistence.referenceDelegate.removeReference(y,E.targetId,S)))))}catch(y){if(!jn(y))throw y;U("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const E=y.targetId;if(!y.fromCache){const S=m.os.get(E),P=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(E,V)}}}(n.localStore,o))}async function Vd(s,t){const e=q(s);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const n=await Vc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new b(C.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await zn(e,n.hs)}}function Md(s,t){const e=q(s),n=e.Na.get(t);if(n&&n.va)return j().add(n.key);{let r=j();const o=e.Ma.get(t);if(!o)return r;for(const a of o){const u=e.Fa.get(a);r=r.unionWith(u.view.Va)}return r}}function zc(s){const t=q(s);return t.remoteStore.remoteSyncer.applyRemoteEvent=jc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Md.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rd.bind(null,t),t.Ca.d_=fd.bind(null,t.eventManager),t.Ca.$a=md.bind(null,t.eventManager),t}function Dd(s){const t=q(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pd.bind(null,t),t}class Ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ys(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Uh(this.persistence,new xh,t.initialUser,this.serializer)}Ga(t){return new kh(_i.Zr,this.serializer)}Wa(t){return new Kh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ms.provider={build:()=>new Ms};class Jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>va(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vd.bind(null,this.syncEngine),await ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dd}()}createDatastore(t){const e=Ys(t.databaseInfo.databaseId),n=function(o){return new Wh(o)}(t.databaseInfo);return function(o,a,u,h){return new Yh(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,o,a,u){return new Zh(n,r,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>va(this.syncEngine,e,0),function(){return pa.D()?new pa:new $h}())}createSyncEngine(t,e){return function(r,o,a,u,h,d,m){const y=new yd(r,o,a,u,h,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const o=q(r);U("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await $n(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Jr.provider={build:()=>new Jr};/**
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
 */class Mi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,n,r,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Tt.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ai(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Lr(s,t){s.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=s.configuration;await t.initialize(e);let n=e.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Vc(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=t}async function Ea(s,t){s.asyncQueue.verifyOperationInProgress();const e=await Nd(s);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,s.configuration),s.setCredentialChangeListener(n=>ga(t.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>ga(t.remoteStore,r)),s._onlineComponents=t}async function Nd(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lr(s,s._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Ue("Error using user provided cache. Falling back to memory cache: "+e),await Lr(s,new Ms)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Lr(s,new Ms);return s._offlineComponents}async function Qc(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Ea(s,s._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Ea(s,new Jr))),s._onlineComponents}function bd(s){return Qc(s).then(t=>t.syncEngine)}async function Ds(s){const t=await Qc(s),e=t.eventManager;return e.onListen=Td.bind(null,t.syncEngine),e.onUnlisten=Ed.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wd.bind(null,t.syncEngine),e}function xd(s,t,e={}){const n=new zt;return s.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Mi({next:E=>{m.Za(),a.enqueueAndForget(()=>Si(o,y));const S=E.docs.has(u);!S&&E.fromCache?d.reject(new b(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&h&&h.source==="server"?d.reject(new b(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),y=new Ci($s(u.path),m,{includeMetadataChanges:!0,_a:!0});return Ri(o,y)}(await Ds(s),s.asyncQueue,t,e,n)),n.promise}function Fd(s,t,e={}){const n=new zt;return s.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Mi({next:E=>{m.Za(),a.enqueueAndForget(()=>Si(o,y)),E.fromCache&&h.source==="server"?d.reject(new b(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),y=new Ci(u,m,{includeMetadataChanges:!0,_a:!0});return Ri(o,y)}(await Ds(s),s.asyncQueue,t,e,n)),n.promise}/**
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
 */function Wc(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
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
 */const wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(s,t,e){if(!e)throw new b(C.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function Ud(s,t,e,n){if(t===!0&&n===!0)throw new b(C.INVALID_ARGUMENT,`${s} and ${e} cannot be used together.`)}function Aa(s){if(!L.isDocumentKey(s))throw new b(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Ra(s){if(L.isDocumentKey(s))throw new b(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function tr(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":O()}function Pt(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new b(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=tr(s);throw new b(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return s}/**
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
 */class Sa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ud("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wc((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class er{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new el;switch(n.type){case"firstParty":return new il(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wa.get(e);n&&(U("ComponentProvider","Removing Datastore"),wa.delete(e),n.terminate())}(this),Promise.resolve()}}function Ld(s,t,e,n={}){var r;const o=(s=Pt(s,er))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),s._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=Tt.MOCK_USER;else{u=Xu(n.mockUserToken,(r=s._app)===null||r===void 0?void 0:r.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new b(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}s._authCredentials=new nl(new Wa(u,h))}}/**
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
 */class Yt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yt(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class re extends Yt{constructor(t,e,n){super(t,e,$s(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new L(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function F(s,t,...e){if(s=Dt(s),Hc("collection","path",t),s instanceof er){const n=J.fromString(t,...e);return Ra(n),new re(s,null,n)}{if(!(s instanceof It||s instanceof re))throw new b(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(J.fromString(t,...e));return Ra(n),new re(s.firestore,null,n)}}function N(s,t,...e){if(s=Dt(s),arguments.length===1&&(t=Ha.newId()),Hc("doc","path",t),s instanceof er){const n=J.fromString(t,...e);return Aa(n),new It(s,null,new L(n))}{if(!(s instanceof It||s instanceof re))throw new b(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(J.fromString(t,...e));return Aa(n),new It(s.firestore,s instanceof re?s.converter:null,new L(n))}}/**
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
 */class Pa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Dc(this,"async_queue_retry"),this.Vu=()=>{const n=Ur();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ur();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!jn(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const r=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw Qt("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=wi.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ca(s){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const o of n)if(o in r&&typeof r[o]=="function")return!0;return!1}(s,["next","error","complete"])}class Ht extends er{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Pa,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pa(t),this._firestoreClient=void 0,await t}}}function Od(s,t){const e=typeof s=="object"?s:Ua(),n=typeof s=="string"?s:"(default)",r=La(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const o=Oa("firestore");o&&Ld(r,...o)}return r}function nr(s){if(s._terminated)throw new b(C.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Bd(s),s._firestoreClient}function Bd(s){var t,e,n;const r=s._freezeSettings(),o=function(u,h,d,m){return new yl(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Wc(m.experimentalLongPollingOptions),m.useFetchStreams)}(s._databaseId,((t=s._app)===null||t===void 0?void 0:t.options.appId)||"",s._persistenceKey,r);s._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),s._firestoreClient=new kd(s._authCredentials,s._appCheckCredentials,s._queue,o,s._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(s._componentsProvider))}/**
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
 */class $e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $e(ft.fromBase64String(t))}catch(e){throw new b(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new $e(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class sr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Qn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */class Di{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==r[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/^__.*__$/;class jd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new Gn(t,this.data,e,this.fieldTransforms)}}class Xc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Yc(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class rr{constructor(t,e,n,r,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new rr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ks(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Yc(this.Cu)&&qd.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Gd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ys(t)}Qu(t,e,n,r=!1){return new rr({Cu:t,methodName:e,qu:n,path:ht.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ir(s){const t=s._freezeSettings(),e=Ys(s._databaseId);return new Gd(s._databaseId,!!t.ignoreUndefinedProperties,e)}function Jc(s,t,e,n,r,o={}){const a=s.Qu(o.merge||o.mergeFields?2:0,t,e,r);bi("Data must be an object, but it was:",a,n);const u=tu(n,a);let h,d;if(o.merge)h=new Vt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const E=Zr(t,y,e);if(!a.contains(E))throw new b(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);nu(m,E)||m.push(E)}h=new Vt(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new jd(new St(u),h,d)}class or extends Qn{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof or}}function Zc(s,t,e){return new rr({Cu:3,qu:t.settings.qu,methodName:s._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ki extends Qn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Zc(this,t,!0),n=this.Ku.map(o=>Se(o,e)),r=new qe(n);return new gc(t.path,r)}isEqual(t){return t instanceof ki&&Ba(this.Ku,t.Ku)}}class Ni extends Qn{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Zc(this,t,!0),n=this.Ku.map(o=>Se(o,e)),r=new je(n);return new gc(t.path,r)}isEqual(t){return t instanceof Ni&&Ba(this.Ku,t.Ku)}}function Kd(s,t,e,n){const r=s.Qu(1,t,e);bi("Data must be an object, but it was:",r,n);const o=[],a=St.empty();Ae(n,(h,d)=>{const m=xi(t,h,e);d=Dt(d);const y=r.Nu(m);if(d instanceof or)o.push(m);else{const E=Se(d,y);E!=null&&(o.push(m),a.set(m,E))}});const u=new Vt(o);return new Xc(a,u,r.fieldTransforms)}function $d(s,t,e,n,r,o){const a=s.Qu(1,t,e),u=[Zr(t,n,e)],h=[r];if(o.length%2!=0)throw new b(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)u.push(Zr(t,o[E])),h.push(o[E+1]);const d=[],m=St.empty();for(let E=u.length-1;E>=0;--E)if(!nu(d,u[E])){const S=u[E];let P=h[E];P=Dt(P);const V=a.Nu(S);if(P instanceof or)d.push(S);else{const k=Se(P,V);k!=null&&(d.push(S),m.set(S,k))}}const y=new Vt(d);return new Xc(m,y,a.fieldTransforms)}function zd(s,t,e,n=!1){return Se(e,s.Qu(n?4:3,t))}function Se(s,t){if(eu(s=Dt(s)))return bi("Unsupported field value:",t,s),tu(s,t);if(s instanceof Qn)return function(n,r){if(!Yc(r.Cu))throw r.Bu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,r){const o=[];let a=0;for(const u of n){let h=Se(u,r.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(s,t)}return function(n,r){if((n=Dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bl(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=it.fromDate(n);return{timestampValue:Cs(r.serializer,o)}}if(n instanceof it){const o=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cs(r.serializer,o)}}if(n instanceof de)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $e)return{bytesValue:Ec(r.serializer,n._byteString)};if(n instanceof It){const o=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:pi(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Di)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return hi(u.serializer,h)})}}}}}}(n,r);throw r.Bu(`Unsupported field value: ${tr(n)}`)}(s,t)}function tu(s,t){const e={};return Xa(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(s,(n,r)=>{const o=Se(r,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function eu(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof it||s instanceof de||s instanceof $e||s instanceof It||s instanceof Qn||s instanceof Di)}function bi(s,t,e){if(!eu(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=tr(e);throw n==="an object"?t.Bu(s+" a custom object"):t.Bu(s+" "+n)}}function Zr(s,t,e){if((t=Dt(t))instanceof sr)return t._internalPath;if(typeof t=="string")return xi(s,t);throw ks("Field path arguments must be of type string or ",s,!1,void 0,e)}const Qd=new RegExp("[~\\*/\\[\\]]");function xi(s,t,e){if(t.search(Qd)>=0)throw ks(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,e);try{return new sr(...t.split("."))._internalPath}catch{throw ks(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,e)}}function ks(s,t,e,n,r){const o=n&&!n.isEmpty(),a=r!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${r}`),h+=")"),new b(C.INVALID_ARGUMENT,u+s+h)}function nu(s,t){return s.some(e=>e.isEqual(t))}/**
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
 */class su{constructor(t,e,n,r,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ar("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Wd extends su{data(){return super.data()}}function ar(s,t){return typeof t=="string"?xi(s,t):t instanceof sr?t._internalPath:t._delegate._internalPath}/**
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
 */function ru(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new b(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fi{}class Ui extends Fi{}function Lt(s,t,...e){let n=[];t instanceof Fi&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof Li).length,u=o.filter(h=>h instanceof cr).length;if(a>1||a>0&&u>0)throw new b(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)s=r._apply(s);return s}class cr extends Ui{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new cr(t,e,n)}_apply(t){const e=this._parse(t);return iu(t._query,e),new Yt(t.firestore,t.converter,Kr(t._query,e))}_parse(t){const e=ir(t.firestore);return function(o,a,u,h,d,m,y){let E;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new b(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ma(y,m);const S=[];for(const P of y)S.push(Va(h,o,P));E={arrayValue:{values:S}}}else E=Va(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ma(y,m),E=zd(u,a,y,m==="in"||m==="not-in");return st.create(d,m,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ot(s,t,e){const n=t,r=ar("where",s);return cr._create(r,n,e)}class Li extends Fi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Li(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,o){let a=r;const u=o.getFlattenedFilters();for(const h of u)iu(a,h),a=Kr(a,h)}(t._query,e),new Yt(t.firestore,t.converter,Kr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oi extends Ui{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Oi(t,e)}_apply(t){const e=function(r,o,a){if(r.startAt!==null)throw new b(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new b(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xn(o,a)}(t._query,this._field,this._direction);return new Yt(t.firestore,t.converter,function(r,o){const a=r.explicitOrderBy.concat([o]);return new tn(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Hd(s,t="asc"){const e=t,n=ar("orderBy",s);return Oi._create(n,e)}class Bi extends Ui{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Bi(t,e,n)}_apply(t){return new Yt(t.firestore,t.converter,Rs(t._query,this._limit,this._limitType))}}function Xd(s){return Bi._create("limit",s,"F")}function Va(s,t,e){if(typeof(e=Dt(e))=="string"){if(e==="")throw new b(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ic(t)&&e.indexOf("/")!==-1)throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(J.fromString(e));if(!L.isDocumentKey(n))throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Xo(s,new L(n))}if(e instanceof It)return Xo(s,e._key);throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tr(e)}.`)}function Ma(s,t){if(!Array.isArray(s)||s.length===0)throw new b(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function iu(s,t){const e=function(r,o){for(const a of r)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(s.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Yd{convertValue(t,e="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ae(t,(r,o)=>{n[r]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,r;const o=(r=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(a=>et(a.doubleValue));return new Di(o)}convertGeoPoint(t){return new de(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ai(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const e=oe(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);W(Cc(n));const r=new Nn(n.get(1),n.get(3)),o=new L(n.popFirst(5));return r.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function ou(s,t,e){let n;return n=s?s.toFirestore(t):t,n}/**
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
 */class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class au extends su{constructor(t,e,n,r,o,a){super(t,e,n,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ar("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Is extends au{data(t={}){return super.data(t)}}class cu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Sn(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Is(this._firestore,this._userDataWriter,n.key,n,new Sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(u=>{const h=new Is(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Sn(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Is(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Sn(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Jd(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Jd(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function fe(s){s=Pt(s,It);const t=Pt(s.firestore,Ht);return xd(nr(t),s._key).then(e=>lu(t,s,e))}class qi extends Yd{constructor(t){super(),this.firestore=t}convertBytes(t){return new $e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Rt(s){s=Pt(s,Yt);const t=Pt(s.firestore,Ht),e=nr(t),n=new qi(t);return ru(s._query),Fd(e,s._query).then(r=>new cu(t,n,s,r))}function ur(s,t,e){s=Pt(s,It);const n=Pt(s.firestore,Ht),r=ou(s.converter,t);return lr(n,[Jc(ir(n),"setDoc",s._key,r,s.converter!==null,e).toMutation(s._key,Nt.none())])}function rt(s,t,e,...n){s=Pt(s,It);const r=Pt(s.firestore,Ht),o=ir(r);let a;return a=typeof(t=Dt(t))=="string"||t instanceof sr?$d(o,"updateDoc",s._key,t,e,n):Kd(o,"updateDoc",s._key,t),lr(r,[a.toMutation(s._key,Nt.exists(!0))])}function Zd(s){return lr(Pt(s.firestore,Ht),[new di(s._key,Nt.none())])}function ze(s,t){const e=Pt(s.firestore,Ht),n=N(s),r=ou(s.converter,t);return lr(e,[Jc(ir(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,Nt.exists(!1))]).then(()=>n)}function uu(s,...t){var e,n,r;s=Dt(s);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ca(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ca(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(n=y.error)===null||n===void 0?void 0:n.bind(y),t[a+2]=(r=y.complete)===null||r===void 0?void 0:r.bind(y)}let h,d,m;if(s instanceof It)d=Pt(s.firestore,Ht),m=$s(s._key.path),h={next:y=>{t[a]&&t[a](lu(d,s,y))},error:t[a+1],complete:t[a+2]};else{const y=Pt(s,Yt);d=Pt(y.firestore,Ht),m=y._query;const E=new qi(d);h={next:S=>{t[a]&&t[a](new cu(d,E,y,S))},error:t[a+1],complete:t[a+2]},ru(s._query)}return function(E,S,P,V){const k=new Mi(V),x=new Ci(S,k,P);return E.asyncQueue.enqueueAndForget(async()=>Ri(await Ds(E),x)),()=>{k.Za(),E.asyncQueue.enqueueAndForget(async()=>Si(await Ds(E),x))}}(nr(d),m,u,h)}function lr(s,t){return function(n,r){const o=new zt;return n.asyncQueue.enqueueAndForget(async()=>Ad(await bd(n),r,o)),o.promise}(nr(s),t)}function lu(s,t,e){const n=e.docs.get(t._key),r=new qi(s);return new au(s,r,t._key,n,new Sn(e.hasPendingWrites,e.fromCache),t.converter)}function ti(...s){return new ki("arrayUnion",s)}function tf(...s){return new Ni("arrayRemove",s)}(function(t,e=!0){(function(r){Ze=r})(Yu),ba(new xa("firestore",(n,{instanceIdentifier:r,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new Ht(new sl(n.getProvider("auth-internal")),new al(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new b(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(d.options.projectId,m)}(a,r),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Es($o,"4.7.3",t),Es($o,"4.7.3","esm2017")})();class ce{constructor(){this.name="",this.id="",this.type="activity",this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=Mt.fromEmpty("","",new de(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,r,o,a,u,h,d,m,y,E,S){const P=new ce;return P.name=t,P.id=e,P.type=S,P.joinCode=n,P.students=r,P.parents=o,P.groups=a,P.teachers=u,P.locations=h,P.eventTypes=d,P.defaultLocation=m,P.showBy=y,P.lastUpdated=E,P}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),locations:this.locations.map(t=>t.toMap()),teachersUids:this.teachers.map(t=>t.memberUid),studentsUids:this.students.map(t=>t.memberUid),parentsUids:this.parents.map(t=>t.memberUid),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new ce;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,r=[];for(const V of n)r.push(Et.fromMap(V));e.students=r;const o=t.parents,a=[];for(const V of o)a.push(Et.fromMap(V));e.parents=a;const u=t.groups,h=[];for(const V of u)h.push(He.fromMap(V));e.groups=h;const d=t.locations,m=[];for(const V of d)m.push(Mt.fromMap(V));e.locations=m;const y=t.teachers,E=[];for(const V of y)E.push(Et.fromMap(V));e.teachers=E,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const S=t.eventTypes,P=[];for(const V of S)P.push(we.fromMap(V));return e.eventTypes=P,e.defaultLocation=Mt.fromMap(t.defaultLocation),e}}class Qe{constructor(){this.type="theater",this.name="",this.id="",this.rehearsalLocations=[],this.joinCode="",this.students=[],this.parents=[],this.groups=[],this.teachers=[],this.locations=[],this.eventTypes=[],this.defaultLocation=Mt.fromEmpty("","",new de(0,0)),this.showBy="",this.lastUpdated=0}static fromBlank(t,e,n,r,o,a,u,h,d,m,y,E,S){const P=new Qe;return P.name=t,P.id=e,P.rehearsalLocations=y,P.joinCode=n,P.students=r,P.parents=o,P.groups=a,P.teachers=u,P.locations=h,P.eventTypes=d,P.defaultLocation=m,P.showBy=E,P.lastUpdated=S,P}toMap(){return{name:this.name,id:this.id,type:this.type,students:this.students.map(t=>t.toMap()),parents:this.parents.map(t=>t.toMap()),groups:this.groups.map(t=>t.toMap()),joinCode:this.joinCode,teachers:this.teachers.map(t=>t.toMap()),teachersUids:this.teachers.map(t=>t.memberUid),studentsUids:this.students.map(t=>t.userId),parentsUids:this.parents.map(t=>t.memberUid),locations:this.locations.map(t=>t.toMap()),defaultLocation:this.defaultLocation.toMap(),showBy:this.showBy,eventTypes:this.eventTypes.map(t=>t.toMap()),rehearsalLocations:this.rehearsalLocations.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Qe;e.name=t.name,e.id=t.id,e.type=t.type,e.joinCode=t.joinCode;const n=t.students,r=[];for(const x of n)r.push(kt.fromMap(x));e.students=r;const o=t.parents,a=[];for(const x of o)a.push(Et.fromMap(x));e.parents=a;const u=t.groups,h=[];for(const x of u)h.push(He.fromMap(x));e.groups=h;const d=t.locations,m=[];for(const x of d)m.push(Mt.fromMap(x));e.locations=m;const y=t.rehearsalLocations,E=[];for(const x of y)E.push(We.fromMap(x));e.rehearsalLocations=E;const S=t.teachers,P=[];for(const x of S)P.push(Et.fromMap(x));e.teachers=P,e.showBy=t.showBy,e.lastUpdated=t.lastUpdated;const V=t.eventTypes,k=[];for(const x of V)k.push(we.fromMap(x));return e.eventTypes=k,e.defaultLocation=Mt.fromMap(t.defaultLocation),e}}class We{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new We;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new We;return e.name=t.name,e.color=t.color,e}}class Mt{constructor(){this.name="",this.address="",this.location=new de(0,0)}static fromEmpty(t,e,n){const r=new Mt;return r.name=t,r.address=e,r.location=n,r}toMap(){return{name:this.name,address:this.address,location:this.location}}static fromMap(t){const e=new Mt;return e.name=t.name,e.address=t.address,e.location=t.location,e}}class He{constructor(){this.groupName="",this.groupMembers=[],this.groupColor=0}static fromBlank(t,e,n){const r=new He;return r.groupName=t,r.groupMembers=e,r.groupColor=n,r}toMap(){return{groupName:this.groupName,groupMembers:this.groupMembers.map(t=>t.toMap()),groupColor:this.groupColor}}static fromMap(t){const e=new He;e.groupName=t.groupName;const n=t.groupMembers,r=[];for(const o of n)r.push(Et.fromMap(o));return e.groupMembers=r,e.groupColor=t.groupColor,e}}class Et{constructor(){this.memberName="",this.memberUid="",this.memberFCMToken=""}static fromBlank(t,e,n){const r=new Et;return r.memberName=t,r.memberUid=e,r.memberFCMToken=n,r}toMap(){return{memberName:this.memberName,memberUid:this.memberUid,memberFCMToken:this.memberFCMToken}}static fromMap(t){const e=new Et;return e.memberName=t.memberName,e.memberUid=t.memberUid,e.memberFCMToken=t.memberFCMToken,e}}class we{constructor(){this.name="",this.color=0}static fromBlank(t,e){const n=new we;return n.name=t,n.color=e,n}toMap(){return{name:this.name,color:this.color}}static fromMap(t){const e=new we;return e.name=t.name,e.color=t.color,e}}class Xt{constructor(){this.date=new Date,this.from=new Date,this.to=new Date}static fromBlank(t,e,n){const r=new Xt;return r.date=t,r.from=e,r.to=n,r}toMap(){return{date:this.date,from:this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}),to:this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0})}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[r,o,a,u]=n;o=parseInt(o,10),a=parseInt(a,10),u.toUpperCase()==="PM"&&o<12?o+=12:u.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}else return new Date(t)}throw new Error("Invalid time format")}static fromMap(t){const e=new Xt;return t.date instanceof Date?e.date=t.date:typeof t.date=="string"?e.date=new Date(t.date):(console.log(typeof t.date),console.log(t.date),e.date=t.date.toDate()),console.log(t.date),console.log(t.from),console.log(t.to),e.from=this._parseTime(t.from),e.to=this._parseTime(t.to),e}}class Ns{constructor(){this.activityId="",this.groupNames=[],this.targets=[],this.generalTarget="",this.eventType=new we,this.groupTargets=[],this.hasSchoolEvent=!1,this.schoolEventId="",this.conflicts=[],this.activityName="",this.name="",this.info="",this.location=Mt.fromEmpty("","",new de(0,0)),this.date=Xt.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id=null}static fromBlank(t,e,n,r,o,a,u,h,d,m,y,E,S,P,V,k){const x=new Ns;x.name=t,x.info=e,x.location=n,x.date=r,x.type=o,x.lastUpdated=a;const Q=r.date.toISOString().split("T")[0];return x.dateFilter=Q,x.activityId=u,x.groupNames=h,x.targets=d,x.generalTarget=m,x.eventType=y,x.groupTargets=E,x.hasSchoolEvent=S,x.schoolEventId=P,x.conflicts=V,x.activityName=k,x}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),targets:this.targets.map(t=>t.toMap()),generalTarget:this.generalTarget,eventType:this.eventType.toMap(),activityName:this.activityName,groupTargets:this.groupTargets.map(t=>t.toMap()),type:"activity",groupNames:this.groupNames,dateFilter:this.dateFilter,hasSchoolEvent:this.hasSchoolEvent,schoolEventId:this.schoolEventId,activityId:this.activityId,lastUpdated:this.lastUpdated,targetUids:this.targets.map(t=>t.memberUid),conflicts:this.conflicts.map(t=>t.toMap())}}static fromMap(t){const e=new Ns;e.name=t.name,e.info=t.info,e.location=Mt.fromMap(t.location),e.date=Xt.fromMap(t.date);const n=t.targets,r=[];for(const d of n)r.push(Et.fromMap(d));e.targets=r,e.generalTarget=t.generalTarget,e.eventType=we.fromMap(t.eventType),e.activityName=t.activityName;const o=t.groupTargets,a=[];for(const d of o)a.push(He.fromMap(d));e.groupTargets=a,e.groupNames=t.groupNames,e.dateFilter=t.dateFilter,e.hasSchoolEvent=t.hasSchoolEvent,e.schoolEventId=t.schoolEventId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated;const u=t.conflicts,h=[];for(const d of u)h.push(bs.fromMap(d));return e.conflicts=h,e}}class bs{constructor(){this.userId="",this.type="",this.start=null,this.end=null,this.reason="",this.status="",this.userName=""}static fromBlank(t,e,n,r,o,a,u){const h=new bs;return h.userId=t,h.type=e,h.start=n,h.end=r,h.reason=o,h.status=a,h.userName=u,h}toMap(){return{userId:this.userId,type:this.type,start:this.start!=null?this.start.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",end:this.end!=null?this.end.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",reason:this.reason,status:this.status,userName:this.userName}}static _parseTime(t){if(typeof t=="string")return new Date(`1970-01-01T${t}`);throw new Error("Invalid time format")}static fromMap(t){const e=new bs;return e.userId=t.userId,e.type=t.type,e.start=t.start!=""?this._parseTime(t.start):null,e.end=t.end!=""?this._parseTime(t.end):null,e.reason=t.reason,e.status=t.status,e.userName=t.userName,e}}class Fn{constructor(){this.name="",this.id="",this.members=[],this.generalTarget="",this.activityId=""}static fromBlank(t,e,n,r,o){const a=new Fn;return a.name=t,a.id=e,a.members=n,a.generalTarget=r,a.activityId=o,a}toMap(){return{name:this.name,id:this.id,members:this.members.map(t=>t.toMap()),generalTarget:this.generalTarget,activityId:this.activityId}}static fromMap(t){const e=new Fn;e.name=t.name,e.id=t.id;const n=t.members,r=[];for(const o of n)r.push(Et.fromMap(o));return e.members=r,e.generalTarget=t.generalTarget,e.activityId=t.activityId,e}}class Un{constructor(){this.message="",this.senderUid="",this.senderName="",this.senderFCMToken="",this.gcId="",this.activityId="",this.messageId="",this.timeSent=new Date,this.readBy=[]}static fromBlank(t,e,n,r,o,a,u,h,d){const m=new Un;return m.message=t,m.senderUid=e,m.senderName=n,m.senderFCMToken=r,m.gcId=o,m.activityId=a,m.messageId=u,m.timeSent=h,m.readBy=d,m}toMap(){return{message:this.message,senderUid:this.senderUid,senderName:this.senderName,senderFCMToken:this.senderFCMToken,gcId:this.gcId,activityId:this.activityId,messageId:this.messageId,timeSent:this.timeSent,readBy:this.readBy}}static fromMap(t){const e=new Un;return e.message=t.message,e.senderUid=t.senderUid,e.senderName=t.senderName,e.senderFCMToken=t.senderFCMToken,e.gcId=t.gcId,e.activityId=t.activityId,e.messageId=t.messageId,e.timeSent=t.timeSent.toDate(),e.readBy=t.readBy,e}}class Xe{constructor(){this.name="",this.info="",this.location=Mt.fromEmpty("","",new de(0,0)),this.date=Xt.fromBlank(new Date,new Date,new Date),this.type="",this.lastUpdated=0,this.dateFilter="",this.id="",this.activityId="",this.showId="",this.characters=[],this.targets=[],this.theaterEventType="",this.rehearsalLocation=new We}static fromBlank(t,e,n,r,o,a,u,h,d,m,y,E){const S=new Xe;S.name=t,S.info=e,S.location=n,S.date=r,S.type=o,S.lastUpdated=a;const P=r.date.toISOString().split("T")[0];return S.dateFilter=P,S.activityId=u,S.showId=h,S.characters=d,S.targets=m,S.theaterEventType=y,S.rehearsalLocation=E,S}toMap(){return{name:this.name,info:this.info,location:this.location.toMap(),date:this.date.toMap(),type:this.type,lastUpdated:this.lastUpdated,dateFilter:this.dateFilter,activityId:this.activityId,showId:this.showId,characters:this.characters.map(t=>t.toMap()),targets:this.targets.map(t=>t.toMap()),targetUids:this.targets.map(t=>t.memberUid),id:this.id,theaterEventType:this.theaterEventType,rehearsalLocation:this.rehearsalLocation.toMap()}}static fromMap(t){const e=new Xe;e.name=t.name,e.info=t.info,e.location=Mt.fromMap(t.location),e.date=Xt.fromMap(t.date),e.type=t.type,e.lastUpdated=t.lastUpdated,e.dateFilter=t.dateFilter,e.activityId=t.activityId,e.showId=t.showId,e.theaterEventType=t.theaterEventType;const n=t.characters,r=[];for(const u of n)u.type==="Character"?r.push(qt.fromMap(u)):u.type==="ShowGroup"?r.push(le.fromMap(u)):u.type==="EnsembleSection"&&r.push(ue.fromMap(u)),u.type==="FullCast"&&r.push(new sn);e.characters=r;const o=t.targets,a=[];for(const u of o)a.push(Et.fromMap(u));return e.targets=a,e.id=t.id,e.rehearsalLocation=We.fromMap(t.rehearsalLocation),e}}class Ye{constructor(){this.name="",this.id="",this.layout=[],this.characters=[],this.ensemble=new Ln,this.showGroups=[],this.lastUpdated=0,this.songs=[],this.dances=[],this.canCreateSchedule=!1,this.hasEnsemble=!1,this.conflictForm=new On,this.formStatus="open",this.resources=[]}static fromBlank(t,e,n,r,o,a,u,h,d,m,y,E,S,P){const V=new Ye;return V.name=t,V.id=e,V.layout=n,V.characters=r,V.ensemble=o,V.showGroups=a,V.lastUpdated=P,V.songs=u,V.dances=h,V.canCreateSchedule=d,V.hasEnsemble=m,V.conflictForm=y,V.resources=E,V.formStatus=S,V}toMap(){return{name:this.name,id:this.id,layout:this.layout.map(t=>t.toMap()),characters:this.characters.map(t=>t.toMap()),ensemble:this.ensemble?this.ensemble.toMap():"null",showGroups:this.showGroups.map(t=>t.toMap()),songs:this.songs.map(t=>t.toMap()),dances:this.dances.map(t=>t.toMap()),canCreateSchedule:this.canCreateSchedule,hasEnsemble:this.hasEnsemble,conflictForm:this.conflictForm?this.conflictForm.toMap():"null",resources:this.resources.map(t=>t.toMap()),formStatus:this.formStatus,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ye;e.name=t.name,e.id=t.id;const n=t.layout,r=[];for(const V of n)r.push(xs.fromMap(V));e.layout=r;const o=t.characters,a=[];for(const V of o)a.push(qt.fromMap(V));e.characters=a,e.ensemble=t.ensemble!="null"&&t.ensemble?Ln.fromMap(t.ensemble):null;const u=t.showGroups,h=[];for(const V of u)h.push(le.fromMap(V));e.showGroups=h;const d=t.songs,m=[];for(const V of d)m.push(Ls.fromMap(V));e.songs=m;const y=t.dances,E=[];for(const V of y)E.push(Us.fromMap(V));e.dances=E,e.canCreateSchedule=t.canCreateSchedule,e.lastUpdated=t.lastUpdated,e.conflictForm=t.conflictForm!="null"&&t.conflictForm?On.fromMap(t.conflictForm):null,e.hasEnsemble=t.hasEnsemble;const S=t.resources,P=[];for(const V of S)P.push(qs.fromMap(V));return e.resources=P,e.formStatus=t.formStatus,e}}class xs{constructor(){this.name="",this.scenes=[],this.lastUpdated=0,this.actId=0}static fromBlank(t,e,n,r){const o=new xs;return o.name=t,o.scenes=e,o.lastUpdated=r,o.actId=n,o}toMap(){return{name:this.name,scenes:this.scenes.map(t=>t.toMap()),actId:this.actId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new xs;e.name=t.name;const n=t.scenes,r=[];for(const o of n)r.push(Fs.fromMap(o));return e.scenes=r,e.actId=t.actId,e.lastUpdated=t.lastUpdated,e}}class Fs{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.sceneId=0}static fromBlank(t,e,n,r){const o=new Fs;return o.name=t,o.characters=e,o.lastUpdated=r,o.sceneId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),sceneId:this.sceneId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Fs;e.name=t.name;const n=t.characters,r=[];for(const o of n)o.type==="Character"?r.push(qt.fromMap(o)):o.type==="ShowGroup"?r.push(le.fromMap(o)):o.type==="EnsembleSection"&&r.push(ue.fromMap(o)),o.type==="FullCast"&&r.push(new sn);return e.characters=r,e.sceneId=t.sceneId,e.lastUpdated=t.lastUpdated,e}}class Us{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.danceId=0}static fromBlank(t,e,n,r){const o=new Us;return o.name=t,o.characters=e,o.lastUpdated=r,o.danceId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),danceId:this.danceId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Us;e.name=t.name;const n=t.characters,r=[];for(const o of n)o.type==="Character"?r.push(qt.fromMap(o)):o.type==="ShowGroup"?r.push(le.fromMap(o)):o.type==="EnsembleSection"&&r.push(ue.fromMap(o)),o.type==="FullCast"&&r.push(new sn);return e.characters=r,e.lastUpdated=t.lastUpdated,e.danceId=t.danceId,e}}class Ls{constructor(){this.name="",this.characters=[],this.lastUpdated=0,this.songId=0}static fromBlank(t,e,n,r){const o=new Ls;return o.name=t,o.characters=e,o.lastUpdated=r,o.songId=n,o}toMap(){for(const t of this.characters)console.log(t),console.log(t instanceof qt);return{name:this.name,characters:this.characters.map(t=>t.toMap()),songId:this.songId,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ls;e.name=t.name;const n=t.characters,r=[];for(const o of n)o.type==="Character"?r.push(qt.fromMap(o)):o.type==="ShowGroup"?r.push(le.fromMap(o)):o.type==="EnsembleSection"&&r.push(ue.fromMap(o)),o.type==="FullCast"&&r.push(new sn);return e.characters=r,e.lastUpdated=t.lastUpdated,e.songId=t.songId,e}}class kt{constructor(){this.name="",this.gender="male",this.email="",this.phone="",this.FCMToken="",this.userId=""}static fromBlank(t,e,n,r,o,a){const u=new kt;return u.name=t,u.gender=e,u.email=n,u.phone=r,u.FCMToken=o,u.userId=a,u}toMap(){return{fullname:this.name,gender:this.gender,email:this.email,phoneNumber:this.phone,FCMToken:this.FCMToken,uid:this.userId}}static fromMap(t){const e=new kt;return e.name=t.fullname,e.gender=t.gender,e.email=t.email,e.phone=t.phoneNumber,e.FCMToken=t.FCMToken,e.userId=t.uid,e}}class qt{constructor(){this.name="",this.actor=new kt,this.lastUpdated=0,this.characterId=0,this.type="Character"}static fromBlank(t,e,n,r){const o=new qt;return o.name=t,o.actor=e,o.lastUpdated=r,o.characterId=n,o}toMap(){return{name:this.name,actor:this.actor?this.actor.toMap():"null",characterId:this.characterId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new qt;return e.name=t.name,e.actor=t.actor!="null"&&!ef(t.actor)?kt.fromMap(t.actor):null,e.lastUpdated=t.lastUpdated,e.characterId=t.characterId,e}}function ef(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}class Ln{constructor(){this.actors=[],this.lastUpdated=0}static fromBlank(t,e){const n=new Ln;return n.actors=t,n.lastUpdated=e,n}toMap(){return{actors:this.actors.map(t=>t.toMap()),lastUpdated:this.lastUpdated}}static fromMap(t){const e=new Ln,n=t.actors,r=[];for(const o of n)r.push(kt.fromMap(o));return e.actors=r,e.lastUpdated=t.lastUpdated,e}}class sn{constructor(){this.type="FullCast"}toMap(){return{type:this.type}}static fromMap(t){return new sn}}class ue{constructor(){this.includeAll=!1,this.includeMale=!1,this.includeFemale=!1,this.includeCustom=!1,this.customActors=[],this.lastUpdated=0,this.type="EnsembleSection"}static fromBlank(t,e,n,r,o,a){const u=new ue;return u.includeAll=t,u.includeMale=e,u.includeFemale=n,u.includeCustom=r,u.customActors=o,u.lastUpdated=a,u}toMap(){return{includeAll:this.includeAll,includeMale:this.includeMale,includeFemale:this.includeFemale,includeCustom:this.includeCustom,customActors:this.customActors.map(t=>t.toMap())??[],type:this.type,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new ue;e.includeAll=t.includeAll,e.includeMale=t.includeMale,e.includeFemale=t.includeFemale,e.includeCustom=t.includeCustom;const n=t.customActors,r=[];for(const o of n)r.push(kt.fromMap(o));return e.customActors=r,e.lastUpdated=t.lastUpdated,e}}class le{constructor(){this.name="",this.characters=[],this.showGroupId=0,this.lastUpdated=0,this.type="ShowGroup"}static fromBlank(t,e,n,r){const o=new le;return o.name=t,o.characters=e,o.lastUpdated=r,o.showGroupId=n,o}toMap(){return{name:this.name,characters:this.characters.map(t=>t.toMap()),showGroupId:this.showGroupId,lastUpdated:this.lastUpdated,type:this.type}}static fromMap(t){const e=new le;e.name=t.name;const n=t.characters,r=[];for(const o of n)o.type==="Character"?r.push(qt.fromMap(o)):r.push(ue.fromMap(o));return e.characters=r,e.showGroupId=t.showGroupId,e.lastUpdated=t.lastUpdated,e}}class Os{constructor(){this.date=new Xt,this.moreInfo=""}static fromBlank(t,e){const n=new Os;return n.date=t,n.moreInfo=e,n}toMap(){return{date:this.date.toMap(),moreInfo:this.moreInfo}}static fromMap(t){const e=new Os;return e.date=Xt.fromMap(t.date),e.moreInfo=t.moreInfo,e}}class On{constructor(){this.dates=[],this.lastUpdated=0,this.deadline=new Date}static fromBlank(t,e,n){const r=new On;return r.dates=t,r.deadline=e,r.lastUpdated=n,r}toMap(){return{dates:this.dates.map(t=>t.toMap()),deadline:this.deadline,lastUpdated:this.lastUpdated}}static fromMap(t){const e=new On,n=t.dates,r=[];for(const o of n)r.push(Os.fromMap(o));return typeof t.deadline=="string"||t.deadline instanceof Date?e.deadline=new Date(t.deadline):e.deadline=t.deadline.toDate(),e.dates=r,e.lastUpdated=t.lastUpdated,e}}class Bs{constructor(){this.date=new Date,this.from=null,this.to=null,this.canAttend=!1,this.note=""}static fromBlank(t,e,n,r,o){const a=new Bs;return a.date=t,a.from=e,a.to=n,a.canAttend=r,a.note=o,a}toMap(){return{date:this.date.toISOString(),from:this.from!=null?this.from.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",to:this.to!=null?this.to.toLocaleTimeString([],{hour:"numeric",minute:"numeric",hour12:!0}):"",canAttend:this.canAttend,note:this.note}}static _parseTime(t){if(typeof t=="string"){const e=/(\d{1,2}):(\d{2})\s?(AM|PM)/i,n=t.match(e);if(n){let[r,o,a,u]=n;o=parseInt(o,10),a=parseInt(a,10),u.toUpperCase()==="PM"&&o<12?o+=12:u.toUpperCase()==="AM"&&o===12&&(o=0);const h=new Date;return h.setHours(o,a,0,0),h}}throw new Error("Invalid time format")}static fromMap(t){const e=new Bs;return e.date=new Date(t.date),e.from=t.from!=""?this._parseTime(t.from):null,e.to=t.to!=""?this._parseTime(t.to):null,e.canAttend=t.canAttend,e.note=t.note,e}}class Je{constructor(){this.dates=[],this.id="",this.actor=new kt,this.lastUpdated=0,this.activityId="",this.showId=""}static fromBlank(t,e,n,r,o,a){const u=new Je;return u.dates=t,u.id=e,u.actor=n,u.lastUpdated=a,u.activityId=r,u.showId=o,u}toMap(){return{dates:this.dates.map(t=>t.toMap()),id:this.id,actor:this.actor.toMap(),lastUpdated:this.lastUpdated,submitterId:this.actor.userId,activityId:this.activityId,showId:this.showId}}static fromMap(t){const e=new Je,n=t.dates,r=[];for(const o of n)r.push(Bs.fromMap(o));return e.dates=r,e.id=t.id,e.actor=kt.fromMap(t.actor),e.showId=t.showId,e.activityId=t.activityId,e.lastUpdated=t.lastUpdated,e}}class Bn{constructor(){this.name="",this.url=""}static fromBlank(t,e){const n=new Bn;return n.name=t,n.url=e,n}toMap(){return{name:this.name,url:this.url}}static fromMap(t){const e=new Bn;return e.name=t.name,e.url=t.url,e}}class qs{constructor(){this.name="",this.description="",this.type="link",this.link="",this.file=new Bn}static fromBlank(t,e,n,r,o){const a=new qs;return a.name=t,a.description=e,a.type=n,a.link=r,a.file=o,a}toMap(){return{name:this.name,description:this.description,type:this.type,link:this.link,file:this.file!=null?this.file.toMap():"null"}}static fromMap(t){const e=new qs;return e.name=t.name,e.description=t.description,e.type=t.type,e.link=t.link,e.file=t.file!="null"&&t.file?Bn.fromMap(t.file):void 0,e}}class ei{constructor(){this.uid="",this.schoolId="",this.FCMToken="",this.accountType="",this.searchKey="",this.fullname="",this.email=""}static fromBlank(t,e,n,r,o,a,u){const h=new ei;return h.uid=t,h.schoolId=e,h.FCMToken=n,h.accountType=r,h.searchKey=o,h.fullname=a,h.email=u,h}toMap(){return{uid:this.uid,schoolId:this.schoolId,FCMToken:this.FCMToken,accountType:this.accountType,searchKey:this.searchKey,fullname:this.fullname,email:this.email}}static fromMap(t){const e=new ei;return e.uid=t.uid,e.schoolId=t.schoolId,e.FCMToken=t.FCMToken,e.accountType=t.accountType,e.searchKey=t.searchKey,e.fullname=t.fullname,e.email=t.email,e}}class js{constructor(){this.name="",this.fcmToken="",this.uid=""}static fromBlank(t,e,n){const r=new js;return r.name=t,r.fcmToken=e,r.uid=n,r}toMap(){return{name:this.name,fcmToken:this.fcmToken,uid:this.uid}}static fromMap(t){const e=new js;return e.name=t.name,e.fcmToken=t.fcmToken,e.uid=t.uid,e}}function Sf(s){let t;if(s>16777215){let e=(s>>24&255).toString(16).padStart(2,"0").toUpperCase(),n=(s>>16&255).toString(16).padStart(2,"0").toUpperCase(),r=(s>>8&255).toString(16).padStart(2,"0").toUpperCase(),o=(s&255).toString(16).padStart(2,"0").toUpperCase();t=`#${e}${n}${r}${o}`}else t=s.toString(16).toUpperCase().padStart(6,"0"),t=`#${t}`;return t}function Pf(s,t){const e=Math.round(Math.min(Math.max(t??1,0),1)*255);return s+e.toString(16).toUpperCase()}function Cf(s){return s.startsWith("#")&&(s=s.slice(1)),parseInt(s,16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="type.googleapis.com/google.protobuf.Int64Value",sf="type.googleapis.com/google.protobuf.UInt64Value";function hu(s,t){const e={};for(const n in s)s.hasOwnProperty(n)&&(e[n]=t(s[n]));return e}function ni(s){if(s==null)return null;if(s instanceof Number&&(s=s.valueOf()),typeof s=="number"&&isFinite(s)||s===!0||s===!1||Object.prototype.toString.call(s)==="[object String]")return s;if(s instanceof Date)return s.toISOString();if(Array.isArray(s))return s.map(t=>ni(t));if(typeof s=="function"||typeof s=="object")return hu(s,t=>ni(t));throw new Error("Data cannot be encoded in JSON: "+s)}function Gs(s){if(s==null)return s;if(s["@type"])switch(s["@type"]){case nf:case sf:{const t=Number(s.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+s);return t}default:throw new Error("Data cannot be decoded from JSON: "+s)}return Array.isArray(s)?s.map(t=>Gs(t)):typeof s=="function"||typeof s=="object"?hu(s,t=>Gs(t)):s}/**
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
 */const ji="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xe extends Fa{constructor(t,e,n){super(`${ji}/${t}`,e||""),this.details=n}}function rf(s){if(s>=200&&s<300)return"ok";switch(s){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function of(s,t){let e=rf(s),n=e,r;try{const o=t&&t.error;if(o){const a=o.status;if(typeof a=="string"){if(!Da[a])return new xe("internal","internal");e=Da[a],n=a}const u=o.message;typeof u=="string"&&(n=u),r=o.details,r!==void 0&&(r=Gs(r))}}catch{}return e==="ok"?null:new xe(e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then(r=>this.auth=r,()=>{}),this.messaging||e.get().then(r=>this.messaging=r,()=>{}),this.appCheck||n.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const e=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(t){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken(t);return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="us-central1";function cf(s){let t=null;return{promise:new Promise((e,n)=>{t=setTimeout(()=>{n(new xe("deadline-exceeded","deadline-exceeded"))},s)}),cancel:()=>{t&&clearTimeout(t)}}}class uf{constructor(t,e,n,r,o=si,a){this.app=t,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new af(e,n,r),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(o);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=si}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${e}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function lf(s,t,e){s.emulatorOrigin=`http://${t}:${e}`}function hf(s,t,e){return n=>ff(s,t,n,{})}async function df(s,t,e,n){e["Content-Type"]="application/json";let r;try{r=await n(s,{method:"POST",body:JSON.stringify(t),headers:e})}catch{return{status:0,json:null}}let o=null;try{o=await r.json()}catch{}return{status:r.status,json:o}}function ff(s,t,e,n){const r=s._url(t);return mf(s,r,e,n)}async function mf(s,t,e,n){e=ni(e);const r={data:e},o={},a=await s.contextProvider.getContext(n.limitedUseAppCheckTokens);a.authToken&&(o.Authorization="Bearer "+a.authToken),a.messagingToken&&(o["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=a.appCheckToken);const u=n.timeout||7e4,h=cf(u),d=await Promise.race([df(t,r,o,s.fetchImpl),h.promise,s.cancelAllRequests]);if(h.cancel(),!d)throw new xe("cancelled","Firebase Functions instance was deleted.");const m=of(d.status,d.json);if(m)throw m;if(!d.json)throw new xe("internal","Response is not valid JSON object.");let y=d.json.data;if(typeof y>"u"&&(y=d.json.result),typeof y>"u")throw new xe("internal","Response is missing data field.");return{data:Gs(y)}}const ka="@firebase/functions",Na="0.11.8";/**
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
 */const pf="auth-internal",gf="app-check-internal",_f="messaging-internal";function yf(s,t){const e=(n,{instanceIdentifier:r})=>{const o=n.getProvider("app").getImmediate(),a=n.getProvider(pf),u=n.getProvider(_f),h=n.getProvider(gf);return new uf(o,a,u,h,r,s)};ba(new xa(ji,e,"PUBLIC").setMultipleInstances(!0)),Es(ka,Na,t),Es(ka,Na,"esm2017")}/**
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
 */function Tf(s=Ua(),t=si){const n=La(Dt(s),ji).getImmediate({identifier:t}),r=Oa("functions");return r&&vf(n,...r),n}function vf(s,t,e){lf(Dt(s),t,e)}function du(s,t,e){return hf(Dt(s),t)}yf(fetch.bind(self));const fu=Tf(qa),K=Od(qa),If=F(K,"schools"),Vf=async()=>{const s=await Rt(If),t=[];return s.forEach(e=>{t.push(e.data())}),t},Mf=async()=>{const s=localStorage.getItem("accountType"),t=localStorage.getItem("schoolId");if(!t)return[];const e=N(K,"schools",t);if(s=="student"){const n=Lt(F(e,"activities"),Ot("studentUids","array-contains",Fe())),r=[];return(await Rt(n)).forEach(a=>{r.push(ce.fromMap(a.data()))}),r}else{const n=Lt(F(e,"activities"),Ot("teacherUids","array-contains",Fe())),r=[];return(await Rt(n)).forEach(a=>{r.push(ce.fromMap(a.data()))}),r}};async function Df(s){const t=localStorage.getItem("schoolId");if(!t)return null;const e=N(K,"schools",t),n=N(F(e,"activities"),s),r=await fe(n);return r.exists()?r.data().type=="theater"?Qe.fromMap(r.data()):ce.fromMap(r.data()):null}async function kf(s,t){const e=localStorage.getItem("schoolId");if(!e)return"";const n=N(K,"schools",e),r=N(F(n,"activities"),t),o=F(r,"shows"),a=await ze(o,s.toMap());return s.id=a.id,await rt(a,{id:a.id}),a.id}async function Nf(s){await tl("cmurphy@gmail.com","123456");const t=F(K,"showTemplates"),e=await ze(t,s.toMap());s.id=e.id,await rt(e,{id:e.id})}async function bf(s,t){const e=localStorage.getItem("schoolId");if(!e)return null;const n=N(K,"schools",e),r=N(F(n,"activities"),s),o=N(F(r,"shows"),t),a=await fe(o);return a.exists()?(console.log(a.data()),Ye.fromMap(a.data())):null}async function xf(s){const t=localStorage.getItem("schoolId");if(!t)return[];console.log("Getting actors for activity "+t);const e=N(K,"schools",t),n=N(F(e,"activities"),s),r=await fe(n);if(!r.exists())return[];const o=[];return r.data().students.forEach(a=>{o.push(kt.fromMap(a))}),o}async function Ff(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t);await ur(a,e.toMap())}async function Uf(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=N(K,"schools",t),n=N(F(e,"activities"),s.activityId),r=F(n,"events"),o=await ze(r,s.toMap());s.id=o.id,await rt(o,{id:o.id})}async function Lf(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(!e)return[];const r=N(K,"schools",e),o=N(F(r,"activities"),s),a=F(o,"events");if(n=="student"){const u=await Rt(Lt(a,Ot("showId","==",t),Ot("targetUids","array-contains",Fe()))),h=[];return u.forEach(d=>{d.data().deleted||h.push(Xe.fromMap(d.data()))}),h}else{const u=await Rt(Lt(a,Ot("showId","==",t))),h=[];return u.forEach(d=>{d.data().deleted||h.push(Xe.fromMap(d.data()))}),h}}async function Of(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=N(K,"schools",t),n=N(F(e,"activities"),s.activityId),r=N(F(n,"events"),s.id);await rt(r,{deleted:!0}),await du(fu,"startDeleteActivityEvent")({activityId:s.activityId,eventId:s.id,schoolId:t})}async function Bf(s){const t=localStorage.getItem("schoolId");if(!t)return[];const e=N(K,"schools",t),n=N(F(e,"activities"),s),r=F(n,"shows"),o=await Rt(r),a=[];return o.forEach(u=>{a.push(Ye.fromMap(u.data()))}),a}async function qf(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t);await rt(a,{conflictForm:e.toMap()}),await du(fu,"addConflictFormDeadline")({activityId:s,showId:t,schoolId:n,deadline:e.deadline.toISOString()})}async function jf(){const s=await Fe(),t=localStorage.getItem("schoolId");if(!t)return null;const e=N(K,"schools",t),n=F(e,"students"),r=N(n,s),o=await fe(r);return o.exists()?kt.fromMap(o.data()):null}async function Gf(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t),u=N(a,"conflictResponses",e.actor.userId);e.id=e.actor.userId,await ur(u,e.toMap())}async function Kf(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("accountType");if(localStorage.getItem("userId"),!e)return[];const r=N(K,"schools",e),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t),u=F(a,"conflictResponses");if(n=="student"){console.log("Getting conflict responses for student"),console.log(Fe());const m=await Rt(Lt(u,Ot("submitterId","==",Fe()))),y=[];return m.forEach(E=>{y.push(Je.fromMap(E.data()))}),y}const h=await Rt(u),d=[];return h.forEach(m=>{d.push(Je.fromMap(m.data()))}),d}async function $f(){const s=F(K,"showTemplates"),t=await Rt(s),e=[];return t.forEach(n=>{e.push(Ye.fromMap(n.data()))}),e}async function zf(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(console.log("SC: "+t+" UID: "+e+" AT: "+n),!t||!e||!n)return null;const r=N(K,"schools",t),o=Lt(F(r,"activities"),Ot("joinCode","==",s)),a=await Rt(o);if(a.empty)return null;const u=a.docs[0],h=N(F(r,n=="student"?"students":"teachers"),e),d=await fe(h);if(console.log(d.data()),!d.exists())return null;if(u.data().type=="theater"){if(d.data().gender==null&&n=="student"&&(console.log("needsGender"),localStorage.setItem("needsGender","true")),d.data().phoneNumber==""&&n=="student"&&localStorage.setItem("needsPhoneNumber","true"),(d.data().phoneNumber==""||d.data().gender==null)&&n=="student")return null;if(n=="student")return await rt(u.ref,{studentUids:[...u.data().studentUids,e],students:[...u.data().students,kt.fromMap(d.data()).toMap()]}),Qe.fromMap(u.data());{console.log("Joining as teacher"),console.log(d.data());const m=Et.fromBlank(d.data().fullname,d.data().uid,d.data().FCMToken);return console.log(m.toMap()),await rt(u.ref,{teacherUids:[...u.data().teacherUids,e],teachers:[...u.data().teachers,m.toMap()]}),Qe.fromMap(u.data())}}else if(n=="student"){const m=Et.fromBlank(d.data().fullname,d.data().uid,d.data().FCMToken);return await rt(u.ref,{studentUids:[...u.data().studentUids,e],students:[...u.data().students,m.toMap()]}),ce.fromMap(u.data())}else{const m=Et.fromBlank(d.data().fullname,d.data().uid,d.data().FCMToken);return await rt(u.ref,{teacherUids:[...u.data().teacherUids,e],teachers:[...u.data().teachers,m.toMap()]}),ce.fromMap(u.data())}}async function Qf(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e||!n)return;const r=N(K,"schools",t),o=N(F(r,n=="student"?"students":"teachers"),e);await rt(o,{gender:s})}async function Wf(s){const t=localStorage.getItem("schoolId"),e=localStorage.getItem("userId"),n=localStorage.getItem("accountType");if(!t||!e||!n)return;const r=N(K,"schools",t),o=N(F(r,n=="student"?"students":"teachers"),e);await rt(o,{phoneNumber:s})}async function Hf(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=N(K,"schools",t),n=N(F(e,"activities"),s.activityId),r=N(F(n,"events"),s.id);await rt(r,s.toMap())}async function Xf(){const s=localStorage.getItem("schoolId"),t=localStorage.getItem("userId"),e=localStorage.getItem("accountType");if(!s||!t)return[];const n=N(K,"schools",s),r=[];let o;e=="student"?o=await Rt(Lt(F(n,"activities"),Ot("studentUids","array-contains",t))):o=await Rt(Lt(F(n,"activities"),Ot("teacherUids","array-contains",t))),console.log(o);for(const a of o.docs){let u;e=="student"?u=await Rt(Lt(F(a.ref,"events"),Ot("targetUids","array-contains",t))):u=await Rt(F(a.ref,"events"));for(const h of u.docs){const d=h.data();console.log(d),d.type=="activity-theater-event"?r.push(Xe.fromMap(d)):r.push(Ns.fromMap(d))}}return r}async function Yf(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!e||!n)return null;const r=N(K,"schools",e),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t),u=F(a,"conflictResponses"),h=await fe(N(u,n));return h.exists()?Je.fromMap(h.data()):null}async function Jf(s,t){const e=localStorage.getItem("schoolId");if(!e)return;const n=N(K,"schools",e),r=N(F(n,"activities"),s);await rt(r,{rehearsalLocations:t.map(o=>o.toMap())})}async function Zf(s,t){const e=localStorage.getItem("schoolId"),n=localStorage.getItem("userId");if(!e)return[];const r=localStorage.getItem("accountType"),o=N(K,"schools",e),a=N(F(o,"activities"),s);r=="teacher"&&uu(F(a,"groupChats"),async u=>{const h=[];for(const d of u.docs){const m=Fn.fromMap(d.data());if(m.generalTarget=="direct"){const P=m.members.find(V=>V.memberUid!=n);m.name=(P==null?void 0:P.memberName)||"Unknown"}const y=F(d.ref,"messages"),E=Lt(y,Hd("timeSent","desc"),Xd(1)),S=await Rt(E);S.empty||(m.lastMessage=Un.fromMap(S.docs[0].data())),h.push(m)}h.sort((d,m)=>d.lastMessage?m.lastMessage?m.lastMessage.timeSent.getTime()-d.lastMessage.timeSent.getTime():-1:1),t(h)})}async function tm(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return[];const r=N(K,"schools",n),o=N(F(r,"activities"),s);console.log("Getting messages for "+t);const a=N(F(o,"groupChats"),t),u=F(a,"messages");uu(u,h=>{const d=[];h.forEach(m=>{d.push(Un.fromMap(m.data()))}),d.sort((m,y)=>m.timeSent.getTime()-y.timeSent.getTime()),e(d)})}async function em(){const s=localStorage.getItem("schoolId"),t=localStorage.getItem("userId"),e=localStorage.getItem("accountType");if(!s||!t)return null;const n=N(K,"schools",s),r=N(F(n,e=="student"?"students":"teachers"),t),o=await fe(r);return o.exists()?o.data():null}async function nm(s,t,e,n){const r=localStorage.getItem("schoolId"),o=localStorage.getItem("userId");if(!r||!o)return;const a=N(K,"schools",r),u=N(F(a,"activities"),s),h=N(F(u,"groupChats"),t);if(!(await fe(h)).exists()){if(n==null)return;const E=Fn.fromBlank("",n.memberUid,[Et.fromBlank(e.senderName,e.senderUid,e.senderFCMToken),n],"direct",s);await ur(h,E.toMap());const S=F(h,"messages"),P=await ze(S,e.toMap());e.messageId=P.id,await rt(P,{messageId:P.id});return}const m=F(h,"messages"),y=await ze(m,e.toMap());e.messageId=y.id,await rt(y,{messageId:y.id})}async function sm(s){const t=localStorage.getItem("schoolId");if(!t)return;const e=N(K,"schools",t),n=N(F(e,"activities"),s.activityId),r=F(n,"groupChats"),o=await ze(r,s.toMap());s.id=o.id,await rt(o,{id:o.id})}async function rm(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t);rt(a,{resources:ti(e.toMap())})}async function im(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t);rt(a,{resources:tf(e.toMap())})}async function om(s,t,e){const n=localStorage.getItem("schoolId");if(!n)return;const r=N(K,"schools",n),o=N(F(r,"activities"),s),a=N(F(o,"shows"),t),u=F(a,"conflictResponses"),h=N(u,e.id);await Zd(h)}async function am(s,t){const e=localStorage.getItem("schoolId");if(!e)return;const n=N(K,"schools",e),r=F(n,s+"s");await ur(N(r,t.uid),t.toMap());const o=js.fromBlank(t.fullname,t.FCMToken,t.uid);await rt(n,{[s+"Uids"]:ti(t.uid),[s+"s"]:ti(o.toMap())})}export{Un as $,xs as A,Et as B,qt as C,Us as D,ue as E,sn as F,Xe as G,Hf as H,Uf as I,Os as J,Bs as K,On as L,qf as M,om as N,jf as O,Je as P,Gf as Q,Xf as R,Fs as S,ei as T,Yf as U,We as V,Cf as W,Qe as X,Jf as Y,Fn as Z,sm as _,Qf as a,nm as a0,tm as a1,Zf as a2,em as a3,qs as a4,Bn as a5,rm as a6,im as a7,Mf as b,am as c,Df as d,Bf as e,$f as f,Vf as g,kf as h,le as i,zf as j,Ls as k,Ye as l,Ln as m,Nf as n,bf as o,xf as p,kt as q,ce as r,Ff as s,Kf as t,Wf as u,Lf as v,Pf as w,Sf as x,Of as y,Xt as z};
