(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7503:function(e,t,r){Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,7977,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(4646),o=r(6494),n=r(5846),s=r.n(n),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:o.Ok.map(o=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===o.name}),href:o.hash,onClick:()=>{t(o.name),r(Date.now())},children:[o.name,o.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},o.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(9268),i=r(9380);r(6006);var o=r(8136);function n(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(o.eSY,{}):(0,a.jsx)(o.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return o},default:function(){return n},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(o.Provider,{value:{activeSection:r,setActiveSection:n,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n},useTheme:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(n(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(n("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(o.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(n("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(n("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},6494:function(e,t,r){"use strict";r.d(t,{$c:function(){return s},Ok:function(){return n},ZU:function(){return l}});var a=r(6006),i=r(2801),o=r(7782);let n=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],s=[{title:"Enrolled in OSU Nursing Program and USAF ROTC",location:"Columbus, OH",description:"I served in Detachment 645 in the Air Force ROTC program while pursuing a degree in Nursing at Ohio State University.",icon:a.createElement(o.iI$),date:"2019"},{title:"Pediatrics Rotation",location:"Nationwide Children’s Hospital, OH",description:"Performed stoma care, delivered medications, and focused assessments for high-risk patients",icon:a.createElement(o.roB),date:"January - April, 2021"},{title:"TODO",location:"Columbus, OH",description:"Will be adding more of my experience here",icon:a.createElement(i.huN),date:"2022"}],l=["Cardiac Treatment","Cardiac Monitoring","Postpartum Examination","Telemetry","Infant Care","Medication Administration","Mental Health Assistance","Burn Treatment","Bedside Assistance","CPR"]},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_3c0fe3', '__Inter_Fallback_3c0fe3'",fontStyle:"normal"},className:"__className_3c0fe3"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return Y},ErrorIcon:function(){return B},LoaderIcon:function(){return R},ToastBar:function(){return ee},ToastIcon:function(){return V},Toaster:function(){return ei},default:function(){return eo},resolveValue:function(){return C},toast:function(){return M},useToaster:function(){return U},useToasterStore:function(){return z}});var o,n=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?m(n,o):o+"{"+m(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=m(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=f(e),s=p[n]||(p[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!p[s]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),o=p[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,w=y.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:x&&x()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),b(c,s)}return t?t(i):i}}var E=e=>"function"==typeof e,C=(e,t)=>E(e)?e(t):e,j=(a=0,()=>(++a).toString()),N=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},O=new Map,P=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),$({type:4,toastId:e})},1e3);O.set(e,t)},A=e=>{let t=O.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&A(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?P(a):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},T=[],I={toasts:[],pausedAt:void 0},$=e=>{I=S(I,e),T.forEach(e=>{e(I)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,r]=(0,n.useState)(I);(0,n.useEffect)(()=>(T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),H=e=>(t,r)=>{let a=D(t,e,r);return $({type:2,toast:a}),a.id},M=(e,t)=>H("blank")(e,t);M.error=H("error"),M.success=H("success"),M.loading=H("loading"),M.custom=H("custom"),M.dismiss=e=>{$({type:3,toastId:e})},M.remove=e=>$({type:4,toastId:e}),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(M.success(C(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{M.error(C(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var F=(e,t)=>{$({type:1,toast:{id:e,height:t}})},L=()=>{$({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:r}=z(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&$({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:F,startPause:L,endPause:a,calculateOffset:i}}},B=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Y=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=k("div")`
  position: absolute;
`,q=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(J,null,t):t:"blank"===r?null:n.createElement(q,null,n.createElement(R,{...a}),"loading"!==r&&n.createElement(Z,null,"error"===r?n.createElement(B,{...a}):n.createElement(Y,{...a})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(r),G(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(V,{toast:e}),s=n.createElement(Q,{...e.ariaProps},C(e.message,e));return n.createElement(K,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,m.p=void 0,b=o,x=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=U(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,s=er(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?C(r.message,r):i?i(r):n.createElement(ee,{toast:r,position:o}))}))},eo=M}},function(e){e.O(0,[680,296,166,829,253,769,744],function(){return e(e.s=7503)}),_N_E=e.O()}]);