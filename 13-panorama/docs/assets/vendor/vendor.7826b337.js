import{s as tt,u as Q,c as L,r as je,n as nt,d as ze,i as Y,h as Be,p as ce,a as rt,w as st}from"../@vue/@vue.513fea8a.js";(function(t,n){var r=n.documentElement,s=t.devicePixelRatio||1;function a(){n.body?n.body.style.fontSize=12*s+"px":n.addEventListener("DOMContentLoaded",a)}a();function d(){var u=r.clientWidth/10;r.style.fontSize=u+"px"}if(d(),t.addEventListener("resize",d),t.addEventListener("pageshow",function(u){u.persisted&&d()}),s>=2){var m=n.createElement("body"),c=n.createElement("div");c.style.border=".5px solid transparent",m.appendChild(c),r.appendChild(m),c.offsetHeight===1&&r.classList.add("hairlines"),r.removeChild(m)}})(window,document);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const B=typeof window<"u";function ot(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ae(e,t){const n={};for(const r in t){const s=t[r];n[r]=N(s)?s.map(e):e(s)}return n}const F=()=>{},N=Array.isArray,it=/\/$/,ct=e=>e.replace(it,"");function le(e,t,n="/"){let r,s={},a="",d="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=t.slice(c+1,m>-1?m:t.length),s=e(a)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=ft(r??t,n),{fullPath:r+(a&&"?")+a+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function we(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&q(t.matched[r],n.matched[s])&&qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return N(e)?Se(e,t):N(t)?Se(t,e):e===t}function Se(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,a,d;for(a=0;a<r.length;a++)if(d=r[a],d!==".")if(d==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var W;(function(e){e.back="back",e.forward="forward",e.unknown=""})(W||(W={}));function ht(e){if(!e)if(B){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ct(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const fe=new Map;function vt(e,t){fe.set(e,t)}function yt(e){const t=fe.get(e);return fe.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let m=s.includes(e.slice(a))?e.slice(a).length:1,c=s.slice(m);return c[0]!=="/"&&(c="/"+c),we(c,"")}return we(n,e)+r+s}function Et(e,t,n,r){let s=[],a=[],d=null;const m=({state:f})=>{const g=Ge(e,location),R=n.value,k=t.value;let b=0;if(f){if(n.value=g,t.value=f,d&&d===R){d=null;return}b=k?f.position-k.position:0}else r(g);s.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?W.forward:W.back:W.unknown})})};function c(){d=n.value}function u(f){s.push(f);const g=()=>{const R=s.indexOf(f);R>-1&&s.splice(R,1)};return a.push(g),g}function o(){const{history:f}=window;f.state&&f.replaceState(S({},f.state,{scroll:ee()}),"")}function l(){for(const f of a)f();a=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o),{pauseListeners:c,listen:u,destroy:l}}function be(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ge(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,u,o){const l=e.indexOf("#"),f=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+c:Rt()+e+c;try{t[o?"replaceState":"pushState"](u,"",f),s.value=u}catch(g){console.error(g),n[o?"replace":"assign"](f)}}function d(c,u){const o=S({},t.state,be(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});a(c,o,!0),r.value=c}function m(c,u){const o=S({},s.value,t.state,{forward:c,scroll:ee()});a(o.current,o,!0);const l=S({},be(r.value,c,null),{position:o.position+1},u);a(c,l,!1),r.value=c}return{location:r,state:s,push:m,replace:d}}function wt(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(a,d=!0){d||n.pauseListeners(),history.go(a)}const s=S({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ln(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wt(e)}function St(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ue=Symbol("");var ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ke||(ke={}));function G(e,t){return S(new Error,{type:e,[Ue]:!0},t)}function I(e,t){return e instanceof Error&&Ue in e&&(t==null||!!(e.type&t))}const Ae="[^/]+?",Ct={sensitive:!1,strict:!1,start:!0,end:!0},bt=/[.+*?^${}()[\]/\\]/g;function kt(e,t){const n=S({},Ct,t),r=[];let s=n.start?"^":"";const a=[];for(const u of e){const o=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let l=0;l<u.length;l++){const f=u[l];let g=40+(n.sensitive?.25:0);if(f.type===0)l||(s+="/"),s+=f.value.replace(bt,"\\$&"),g+=40;else if(f.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=f;a.push({name:R,repeatable:k,optional:b});const w=E||Ae;if(w!==Ae){g+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${w}): `+M.message)}}let _=k?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;l||(_=b&&u.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),s+=_,g+=20,b&&(g+=-8),k&&(g+=-20),w===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function m(u){const o=u.match(d),l={};if(!o)return null;for(let f=1;f<o.length;f++){const g=o[f]||"",R=a[f-1];l[R.name]=g&&R.repeatable?g.split("/"):g}return l}function c(u){let o="",l=!1;for(const f of e){(!l||!o.endsWith("/"))&&(o+="/"),l=!1;for(const g of f)if(g.type===0)o+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in u?u[R]:"";if(N(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const w=N(E)?E.join("/"):E;if(!w)if(b)f.length<2&&(o.endsWith("/")?o=o.slice(0,-1):l=!0);else throw new Error(`Missing required param "${R}"`);o+=w}}return o||"/"}return{re:d,score:r,keys:a,parse:m,stringify:c}}function At(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ot(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=At(r[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-r.length)===1){if(Oe(r))return 1;if(Oe(s))return-1}return s.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _t={type:0,value:""},xt=/[a-zA-Z0-9_]/;function Mt(e){if(!e)return[[]];if(e==="/")return[[_t]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let a;function d(){a&&s.push(a),a=[]}let m=0,c,u="",o="";function l(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:o,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&l(),d()):c===":"?(l(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:xt.test(c)?f():(l(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+c:n=3:o+=c;break;case 3:l(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),l(),d(),s}function Lt(e,t,n){const r=kt(Mt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Nt(e,t){const n=[],r=new Map;t=Me({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function a(o,l,f){const g=!f,R=Ht(o);R.aliasOf=f&&f.record;const k=Me(t,o),b=[R];if("alias"in o){const _=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of _)b.push(S({},R,{components:f?f.record.components:R.components,path:M,aliasOf:f?f.record:R}))}let E,w;for(const _ of b){const{path:M}=_;if(l&&M[0]!=="/"){const j=l.record.path,H=j[j.length-1]==="/"?"":"/";_.path=l.record.path+(M&&H+M)}if(E=Lt(_,l,k),f?f.alias.push(E):(w=w||E,w!==E&&w.alias.push(E),g&&o.name&&!xe(E)&&d(o.name)),R.children){const j=R.children;for(let H=0;H<j.length;H++)a(j[H],E,f&&f.children[H])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return w?()=>{d(w)}:F}function d(o){if(Ke(o)){const l=r.get(o);l&&(r.delete(o),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(o);l>-1&&(n.splice(l,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function m(){return n}function c(o){let l=0;for(;l<n.length&&Ot(o,n[l])>=0&&(o.record.path!==n[l].record.path||!Ve(o,n[l]));)l++;n.splice(l,0,o),o.record.name&&!xe(o)&&r.set(o.record.name,o)}function u(o,l){let f,g={},R,k;if("name"in o&&o.name){if(f=r.get(o.name),!f)throw G(1,{location:o});k=f.record.name,g=S(_e(l.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),o.params&&_e(o.params,f.keys.map(w=>w.name))),R=f.stringify(g)}else if("path"in o)R=o.path,f=n.find(w=>w.re.test(R)),f&&(g=f.parse(R),k=f.record.name);else{if(f=l.name?r.get(l.name):n.find(w=>w.re.test(l.path)),!f)throw G(1,{location:o,currentLocation:l});k=f.record.name,g=S({},l.params,o.params),R=f.stringify(g)}const b=[];let E=f;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:$t(b)}}return e.forEach(o=>a(o)),{addRoute:a,resolve:u,removeRoute:d,getRoutes:m,getRecordMatcher:s}}function _e(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ht(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:It(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function It(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function xe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $t(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ve(e,t){return t.children.some(n=>n===e||Ve(e,n))}const De=/#/g,Tt=/&/g,jt=/\//g,zt=/=/g,Bt=/\?/g,Qe=/\+/g,qt=/%5B/g,Gt=/%5D/g,Fe=/%5E/g,Kt=/%60/g,We=/%7B/g,Ut=/%7C/g,Ye=/%7D/g,Vt=/%20/g;function pe(e){return encodeURI(""+e).replace(Ut,"|").replace(qt,"[").replace(Gt,"]")}function Dt(e){return pe(e).replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function he(e){return pe(e).replace(Qe,"%2B").replace(Vt,"+").replace(De,"%23").replace(Tt,"%26").replace(Kt,"`").replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function Qt(e){return he(e).replace(zt,"%3D")}function Ft(e){return pe(e).replace(De,"%23").replace(Bt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(jt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Qe," "),d=a.indexOf("="),m=J(d<0?a:a.slice(0,d)),c=d<0?null:J(a.slice(d+1));if(m in t){let u=t[m];N(u)||(u=t[m]=[u]),u.push(c)}else t[m]=c}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(a=>a&&he(a)):[r&&he(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zt=Symbol(""),Ne=Symbol(""),me=Symbol(""),Xe=Symbol(""),de=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function T(e,t,n,r,s){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,m)=>{const c=l=>{l===!1?m(G(4,{from:n,to:t})):l instanceof Error?m(l):St(l)?m(G(2,{from:t,to:l})):(a&&r.enterCallbacks[s]===a&&typeof l=="function"&&a.push(l),d())},u=e.call(r&&r.instances[s],t,n,c);let o=Promise.resolve(u);e.length<3&&(o=o.then(c)),o.catch(l=>m(l))})}function ue(e,t,n,r){const s=[];for(const a of e)for(const d in a.components){let m=a.components[d];if(!(t!=="beforeRouteEnter"&&!a.instances[d]))if(Jt(m)){const u=(m.__vccOpts||m)[t];u&&s.push(T(u,n,r,a,d))}else{let c=m();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const o=ot(u)?u.default:u;a.components[d]=o;const f=(o.__vccOpts||o)[t];return f&&T(f,n,r,a,d)()}))}}return s}function Jt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Y(me),n=Y(Xe),r=L(()=>t.resolve(Q(e.to))),s=L(()=>{const{matched:c}=r.value,{length:u}=c,o=c[u-1],l=n.matched;if(!o||!l.length)return-1;const f=l.findIndex(q.bind(null,o));if(f>-1)return f;const g=Ie(c[u-2]);return u>1&&Ie(o)===g&&l[l.length-1].path!==g?l.findIndex(q.bind(null,c[u-2])):f}),a=L(()=>s.value>-1&&rn(n.params,r.value.params)),d=L(()=>s.value>-1&&s.value===n.matched.length-1&&qe(n.params,r.value.params));function m(c={}){return nn(c)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F):Promise.resolve()}return{route:r,href:L(()=>r.value.href),isActive:a,isExactActive:d,navigate:m}}const en=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=je(He(e)),{options:r}=Y(me),s=L(()=>({[$e(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$e(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),tn=en;function nn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!N(s)||s.length!==r.length||r.some((a,d)=>a!==s[d]))return!1}return!0}function Ie(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $e=(e,t,n)=>e??t??n,sn=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(de),s=L(()=>e.route||r.value),a=Y(Ne,0),d=L(()=>{let u=Q(a);const{matched:o}=s.value;let l;for(;(l=o[u])&&!l.components;)u++;return u}),m=L(()=>s.value.matched[d.value]);ce(Ne,L(()=>d.value+1)),ce(Zt,m),ce(de,s);const c=rt();return st(()=>[c.value,m.value,e.name],([u,o,l],[f,g,R])=>{o&&(o.instances[l]=u,g&&g!==o&&u&&u===f&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),u&&o&&(!g||!q(o,g)||!f)&&(o.enterCallbacks[l]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,o=e.name,l=m.value,f=l&&l.components[o];if(!f)return Te(n.default,{Component:f,route:u});const g=l.props[o],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,b=Be(f,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[o]=null)},ref:c}));return Te(n.default,{Component:b,route:u})||b}}});function Te(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const on=sn;function un(e){const t=Nt(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Le,s=e.history,a=D(),d=D(),m=D(),c=tt($);let u=$;B&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ae.bind(null,i=>""+i),l=ae.bind(null,Wt),f=ae.bind(null,J);function g(i,p){let h,v;return Ke(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function R(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function E(i,p){if(p=S({},p||c.value),typeof i=="string"){const y=le(n,i,p.path),O=t.resolve({path:y.path},p),V=s.createHref(y.fullPath);return S(y,O,{params:f(O.params),hash:J(y.hash),redirectedFrom:void 0,href:V})}let h;if("path"in i)h=S({},i,{path:le(n,i.path,p.path).path});else{const y=S({},i.params);for(const O in y)y[O]==null&&delete y[O];h=S({},i,{params:l(i.params)}),p.params=l(p.params)}const v=t.resolve(h,p),C=i.hash||"";v.params=o(f(v.params));const A=at(r,S({},i,{hash:Dt(C),path:v.path})),P=s.createHref(A);return S({fullPath:A,hash:C,query:r===Le?Xt(i.query):i.query||{}},v,{redirectedFrom:void 0,href:P})}function w(i){return typeof i=="string"?le(n,i,c.value.path):S({},i)}function _(i,p){if(u!==i)return G(8,{from:p,to:i})}function M(i){return K(i)}function j(i){return M(S(w(i),{replace:!0}))}function H(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function K(i,p){const h=u=E(i),v=c.value,C=i.state,A=i.force,P=i.replace===!0,y=H(h);if(y)return K(S(w(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:P}),p||h);const O=h;O.redirectedFrom=p;let V;return!A&&lt(r,v,h)&&(V=G(16,{to:O,from:v}),Ee(v,v,!0,!1)),(V?Promise.resolve(V):ge(O,v)).catch(x=>I(x)?I(x,2)?x:re(x):ne(x,O,v)).then(x=>{if(x){if(I(x,2))return K(S({replace:P},w(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||O)}else x=ye(O,v,!0,P,C);return ve(O,v,x),x})}function Ze(i,p){const h=_(i,p);return h?Promise.reject(h):Promise.resolve()}function ge(i,p){let h;const[v,C,A]=cn(i,p);h=ue(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push(T(O,i,p))});const P=Ze.bind(null,i,p);return h.push(P),z(h).then(()=>{h=[];for(const y of a.list())h.push(T(y,i,p));return h.push(P),z(h)}).then(()=>{h=ue(C,"beforeRouteUpdate",i,p);for(const y of C)y.updateGuards.forEach(O=>{h.push(T(O,i,p))});return h.push(P),z(h)}).then(()=>{h=[];for(const y of i.matched)if(y.beforeEnter&&!p.matched.includes(y))if(N(y.beforeEnter))for(const O of y.beforeEnter)h.push(T(O,i,p));else h.push(T(y.beforeEnter,i,p));return h.push(P),z(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=ue(A,"beforeRouteEnter",i,p),h.push(P),z(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,i,p));return h.push(P),z(h)}).catch(y=>I(y,8)?y:Promise.reject(y))}function ve(i,p,h){for(const v of m.list())v(i,p,h)}function ye(i,p,h,v,C){const A=_(i,p);if(A)return A;const P=p===$,y=B?history.state:{};h&&(v||P?s.replace(i.fullPath,S({scroll:P&&y&&y.scroll},C)):s.push(i.fullPath,C)),c.value=i,Ee(i,p,h,P),re()}let U;function Je(){U||(U=s.listen((i,p,h)=>{if(!Pe.listening)return;const v=E(i),C=H(v);if(C){K(S(C,{replace:!0}),v).catch(F);return}u=v;const A=c.value;B&&vt(Ce(A.fullPath,h.delta),ee()),ge(v,A).catch(P=>I(P,12)?P:I(P,2)?(K(P.to,v).then(y=>{I(y,20)&&!h.delta&&h.type===X.pop&&s.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&s.go(-h.delta,!1),ne(P,v,A))).then(P=>{P=P||ye(v,A,!1),P&&(h.delta&&!I(P,8)?s.go(-h.delta,!1):h.type===X.pop&&I(P,20)&&s.go(-1,!1)),ve(v,A,P)}).catch(F)}))}let te=D(),Re=D(),Z;function ne(i,p,h){re(i);const v=Re.list();return v.length?v.forEach(C=>C(i,p,h)):console.error(i),Promise.reject(i)}function et(){return Z&&c.value!==$?Promise.resolve():new Promise((i,p)=>{te.add([i,p])})}function re(i){return Z||(Z=!i,Je(),te.list().forEach(([p,h])=>i?h(i):p()),te.reset()),i}function Ee(i,p,h,v){const{scrollBehavior:C}=e;if(!B||!C)return Promise.resolve();const A=!h&&yt(Ce(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return nt().then(()=>C(i,p,A)).then(P=>P&&gt(P)).catch(P=>ne(P,i,p))}const se=i=>s.go(i);let oe;const ie=new Set,Pe={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:j,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:d.add,afterEach:m.add,onError:Re.add,isReady:et,install(i){const p=this;i.component("RouterLink",tn),i.component("RouterView",on),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),B&&!oe&&c.value===$&&(oe=!0,M(s.location).catch(C=>{}));const h={};for(const C in $)h[C]=L(()=>c.value[C]);i.provide(me,p),i.provide(Xe,je(h)),i.provide(de,c);const v=i.unmount;ie.add(i),i.unmount=function(){ie.delete(i),ie.size<1&&(u=$,U&&U(),U=null,c.value=$,oe=!1,Z=!1),v()}}};return Pe}function z(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function cn(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const m=t.matched[d];m&&(e.matched.find(u=>q(u,m))?r.push(m):n.push(m));const c=e.matched[d];c&&(t.matched.find(u=>q(u,c))||s.push(c))}return[n,r,s]}export{ln as a,un as c};
