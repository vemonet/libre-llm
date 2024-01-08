import{createComponent as g,isServer as A,getRequestEvent as $,delegateEvents as K,ssrElement as k,escape as b,mergeProps as W,ssr as S,ssrHydrationKey as _,ssrAttribute as L}from"solid-js/web";import{children as B,createMemo as R,on as D,createRoot as V,Show as O,createSignal as T,onCleanup as I,lazy as z,createComponent as H,useContext as G,createContext as J,createEffect as Q,Suspense as X}from"solid-js";import{c as Y,d as Z,R as tt,g as et,e as nt,f as rt,h as U,b as ot}from"./routing-e295c89f.js";const j=t=>e=>{const{base:n}=e,r=B(()=>e.children),o=R(()=>Y(e.root?{component:e.root,children:r()}:r(),e.base||"")),u=Z(t,o,{base:n});return t.create&&t.create(u),g(tt.Provider,{value:u,get children(){return g(at,{routerState:u,get branches(){return o()}})}})};function at(t){const e=R(()=>et(t.branches,t.routerState.location.pathname));if(A){const a=$();a&&(a.routerMatches||(a.routerMatches=[])).push(e().map(({route:s,path:l,params:p})=>({path:s.originalPath,pattern:s.pattern,match:l,params:p,metadata:s.metadata})))}const n=nt(()=>{const a=e(),s={};for(let l=0;l<a.length;l++)Object.assign(s,a[l].params);return s}),r=[];let o;const u=R(D(e,(a,s,l)=>{let p=s&&a.length===s.length;const m=[];for(let h=0,w=a.length;h<w;h++){const v=s&&s[h],c=a[h];l&&v&&c.route.key===v.route.key?m[h]=l[h]:(p=!1,r[h]&&r[h](),V(i=>{r[h]=i,m[h]=rt(t.routerState,m[h-1]||t.routerState.base,st(()=>u()[h+1]),()=>e()[h],n)}))}return r.splice(a.length).forEach(h=>h()),l&&p?l:(o=m[0],m)}));return g(O,{get when(){return u()&&o},keyed:!0,children:a=>g(U.Provider,{value:a,get children(){return a.outlet()}})})}const st=t=>()=>g(O,{get when(){return t()},keyed:!0,children:e=>g(U.Provider,{value:e,get children(){return e.outlet()}})});function it([t,e],n,r){return[n?()=>n(t()):t,r?o=>e(r(o)):e]}function ct(t){if(t==="#")return null;try{return document.querySelector(t)}catch{return null}}function lt(t){let e=!1;const n=o=>typeof o=="string"?{value:o}:o,r=it(T(n(t.get()),{equals:(o,u)=>o.value===u.value}),void 0,o=>(!e&&t.set(o),o));return t.init&&I(t.init((o=t.get())=>{e=!0,r[1](n(o)),e=!1})),j({signal:r,create:t.create,utils:t.utils})}function ut(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function dt(t,e){const n=ct(`#${t}`);n?n.scrollIntoView():e&&window.scrollTo(0,0)}function ht(t){const e=new URL(t);return e.pathname+e.search}function ft(t){let e;const n={value:t.url||(e=$())&&ht(e.request.url)||""};return j({signal:[()=>n,r=>Object.assign(n,r)]})(t)}const pt=new Map;function mt(t=!0,e=!1,n="/_server"){return r=>{const o=r.base.path(),u=r.navigatorFactory(r.base);let a={};function s(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function l(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const i=c.composedPath().find(E=>E instanceof Node&&E.nodeName.toUpperCase()==="A");if(!i||e&&!i.getAttribute("link"))return;const f=s(i),d=f?i.href.baseVal:i.href;if((f?i.target.baseVal:i.target)||!d&&!i.hasAttribute("state"))return;const x=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||x&&x.includes("external"))return;const y=f?new URL(d,document.baseURI):new URL(d);if(!(y.origin!==window.location.origin||o&&y.pathname&&!y.pathname.toLowerCase().startsWith(o.toLowerCase())))return[i,y]}function p(c){const i=l(c);if(!i)return;const[f,d]=i,C=r.parsePath(d.pathname+d.search+d.hash),x=f.getAttribute("state");c.preventDefault(),u(C,{resolve:!1,replace:f.hasAttribute("replace"),scroll:!f.hasAttribute("noscroll"),state:x&&JSON.parse(x)})}function m(c){const i=l(c);if(!i)return;const[f,d]=i;a[d.pathname]||r.preloadRoute(d,f.getAttribute("preload")!=="false")}function h(c){const i=l(c);if(!i)return;const[f,d]=i;a[d.pathname]||(a[d.pathname]=setTimeout(()=>{r.preloadRoute(d,f.getAttribute("preload")!=="false"),delete a[d.pathname]},200))}function w(c){const i=l(c);if(!i)return;const[,f]=i;a[f.pathname]&&(clearTimeout(a[f.pathname]),delete a[f.pathname])}function v(c){let i=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.formAction:c.target.action;if(!i)return;if(!i.startsWith("action:")){const d=new URL(i);if(i=r.parsePath(d.pathname+d.search),!i.startsWith(n))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const f=pt.get(i);if(f){c.preventDefault();const d=new FormData(c.target);f.call(r,d)}}K(["click","submit"]),document.addEventListener("click",p),t&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",w),document.addEventListener("focusin",m),document.addEventListener("touchstart",m)),document.addEventListener("submit",v),I(()=>{document.removeEventListener("click",p),t&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",w),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",v)})}}function gt(t){return A?ft(t):lt({get:()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),set({value:e,replace:n,scroll:r,state:o}){n?window.history.replaceState(o,"",e):window.history.pushState(o,"",e),dt(window.location.hash.slice(1),r)},init:e=>ut(window,"popstate",()=>e()),create:mt(t.preload,t.explicitLinks,t.actionBase),utils:{go:e=>window.history.go(e)}})(t)}const bt=" ",vt={style:t=>k("style",t.attrs,()=>b(t.children),!0),link:t=>k("link",t.attrs,void 0,!0),script:t=>t.attrs.src?k("script",W(()=>t.attrs,{get id(){return t.key}}),()=>S(bt),!0):null};function xt(t){let{tag:e,attrs:{key:n,...r}={key:void 0},children:o}=t;return vt[e]({attrs:r,key:n,children:o})}function wt(t,e,n,r="default"){return z(async()=>{{const u=(await t.import())[r],s=(await e.inputs?.[t.src].assets()).filter(p=>p.tag==="style"||p.attrs.rel==="stylesheet");return{default:p=>[...s.map(m=>xt(m)),H(u,p)]}}})}const M=[{type:"page",$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import("../_...404_.js"),import:()=>import("../_...404_.js")},path:"/*404",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/[...404].tsx"},{type:"page",$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>import("../about.js"),import:()=>import("../about.js")},path:"/about",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/about.tsx"},{type:"page",$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("../index.js"),import:()=>import("../index.js")},path:"/",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/index.tsx"}],yt=Rt(M.filter(t=>t.type==="page")),kt=At(M.filter(t=>t.type==="api"));function It(t,e){const n=t.split("/").filter(Boolean);t:for(const r of kt){const o=r.matchSegments;if(n.length<o.length||!r.wildcard&&n.length>o.length)continue;for(let s=0;s<o.length;s++){const l=o[s];if(l&&n[s]!==l)continue t}const u=r[`$${e}`];if(u==="skip"||u===void 0)return;const a={};for(const{type:s,name:l,index:p}of r.params)s===":"?a[l]=n[p]:a[l]=n.slice(p).join("/");return{handler:u,params:a}}}function Rt(t){function e(n,r,o,u){const a=Object.values(n).find(s=>o.startsWith(s.id+"/"));return a?(e(a.children||(a.children=[]),r,o.slice(a.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"")}),n)}return t.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>e(n,r,r.path,r.path),[])}function At(t){return t.flatMap(e=>q(e.path).map(r=>({...e,path:r}))).map($t).sort((e,n)=>n.score-e.score)}function q(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const o=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=e[1]),r=r.slice(e[0].length);return q(r).reduce((u,a)=>[...u,...o.map(s=>s+a)],[])}function $t(t){const e=t.path.split("/").filter(Boolean),n=[],r=[];let o=0,u=!1;for(const[a,s]of e.entries())if(s[0]===":"){const l=s.slice(1);o+=3,n.push({type:":",name:l,index:a}),r.push(null)}else s[0]==="*"?(o-=1,n.push({type:"*",name:s.slice(1),index:a}),u=!0):(o+=4,s.match(/^\(.+\)$/)||r.push(s));return{...t,score:o,params:n,matchSegments:r,wildcard:u}}function St(){function t(n){return{...n,...n.$$route?n.$$route.require().route:void 0,metadata:{...n.$$route?n.$$route.require().route.metadata:{},filesystem:!0},component:wt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(t):void 0}}return yt.map(t)}let P;const Ct=()=>A?$().routes:P||(P=St()),Et=["<nav",' class="bg-gray-200 dark:bg-gray-900 text-black dark:text-white"><div class="nav-btns-desktop flex justify-between items-center"><div></div><div class="text-xl font-thin">','</div><div class="flex"><a href="/gradio" target="_blank" rel="noopener noreferrer" data-tooltip="Gradio UI" class="text-black hover:text-black dark:text-white"><button class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class="h-5" src="https://gradio-theme-soft.hf.space/assets/logo-3707f936.svg"></button></a><a href="/docs" target="_blank" rel="noopener noreferrer" data-tooltip="OpenAPI documentation" class="text-black hover:text-black dark:text-white"><button class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class="h-5" src="https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/openapi_logo.svg"></button></a><a',' target="_blank" rel="noopener noreferrer" class="text-black hover:text-black dark:text-white"><button data-tooltip="Source code" class="px-4 py-2 mr-6 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fab fa-github text-xl"></i></button></a></div></div><div class="nav-btns-mobile flex gap-1 absolute top-2 right-3"><button data-tooltip="Menu" id="mobile-nav-btn" class="px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fas fa-bars"></i></button><div id="nav-btns-mobile" class="hidden"><a href="/docs" target="_blank" rel="noopener noreferrer" class="text-black hover:text-black dark:text-white"><button data-tooltip-target="tooltip-api" class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class="h-5" src="https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/openapi_logo.svg"></button></a><a',' target="_blank" rel="noopener noreferrer" class="text-black hover:text-black dark:text-white"><button data-tooltip="Source code" class="px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fab fa-github text-xl"></i></button></a></div></div></nav>'];function Lt(){const[t,e]=G(F);return ot(),S(Et,_(),b(t().info.title),L("href",b(t().info.repository_url,!0),!1),L("href",b(t().info.repository_url,!0),!1))}const Pt=["<div",' class="flex flex-col h-screen"><!--$-->',"<!--/--><!--$-->","<!--/--></div>"],N={apiUrl:window.origin,info:{title:"Libre Chat",description:"Open source chatbot",repository_url:"https://github.com/vemonet/libre-chat",favicon:"https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/logo.png",examples:["What is the capital of the Netherlands?"]}},F=J([N,()=>{}]);function Ut(){const[t,e]=T(N);return Q(async()=>{const n={}.VITE_API_URL||window.origin,o=await(await fetch(`${n}/config`)).json();e({apiUrl:n,...o})}),g(F.Provider,{value:[t,e],get children(){return g(gt,{root:n=>S(Pt,_(),b(g(Lt,{})),b(g(X,{get children(){return n.children}}))),get children(){return g(Ct,{})}})}})}export{Ut as A,F as C,St as c,It as m,xt as r};
