(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{8683:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=i.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},4712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let r=n(6927),i=n(5909),o=i._(n(6006)),l=r._(n(2930)),a=n(2017),s=n(6374),u=n(168);n(7653);let c=r._(n(5840)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/rinaldi.health/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,n,r,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function p(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:s,className:u,style:c,fetchPriority:d,placeholder:h,loading:g,unoptimized:m,fill:v,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:_,onLoad:O,onError:S,...C}=e;return o.default.createElement("img",{...C,...p(d),loading:g,width:a,height:l,decoding:s,"data-nimg":v?"fill":"1",className:u,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&f(e,h,y,b,w,m))},[n,h,y,b,w,S,m,t]),onLoad:e=>{let t=e.currentTarget;f(t,h,y,b,w,m)},onError:e=>{_(!0),"blur"===h&&w(!0),S&&S(e)}})}),g=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(u.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=d||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:f}=e,g=(0,o.useRef)(i);(0,o.useEffect)(()=>{g.current=i},[i]);let m=(0,o.useRef)(f);(0,o.useEffect)(()=>{m.current=f},[f]);let[v,y]=(0,o.useState)(!1),[b,w]=(0,o.useState)(!1),{props:_,meta:O}=(0,a.getImgProps)(e,{defaultLoader:c.default,imgConf:r,blurComplete:v,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{..._,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:w,ref:t}),O.priority?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+_.src+_.srcSet+_.sizes,rel:"preload",as:"image",href:_.srcSet?void 0:_.src,imageSrcSet:_.srcSet,imageSizes:_.sizes,crossOrigin:_.crossOrigin,referrerPolicy:_.referrerPolicy,...p(_.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(6927),i=r._(n(6006)),o=i.default.createContext({})},7290:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2017:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(7653);let r=n(2325),i=n(6374),o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/rinaldi.health/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function l(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n;let s,u,c,{src:d,sizes:f,unoptimized:p=!1,priority:h=!1,loading:g,className:m,quality:v,width:y,height:b,fill:w=!1,style:_,onLoad:O,onLoadingComplete:S,placeholder:C="empty",blurDataURL:E,fetchPriority:j,layout:k,objectFit:P,objectPosition:I,lazyBoundary:x,lazyRoot:V,...M}=e,{imgConf:R,showAltText:A,blurComplete:z,defaultLoader:N}=t,T=R||o||i.imageConfigDefault;if("allSizes"in T)s=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);s={...T,allSizes:e,deviceSizes:t}}let D=M.loader||N;delete M.loader,delete M.srcSet;let U="__next_img_default"in D;if(U){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!f&&(f=t)}let F="",W=a(y),B=a(b);if("object"==typeof(n=d)&&(l(n)||void 0!==n.src)){let e=l(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,F=e.src,!w){if(W||B){if(W&&!B){let t=W/e.width;B=Math.round(e.height*t)}else if(!W&&B){let t=B/e.height;W=Math.round(e.width*t)}}else W=e.width,B=e.height}}let L=!h&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,L=!1),s.unoptimized&&(p=!0),U&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(p=!0),h&&(j="high");let G=a(v),Z=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:I}:{},A?{}:{color:"transparent"},_),q="blur"===C&&E&&!z?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:B,blurWidth:u,blurHeight:c,blurDataURL:E,objectFit:Z.objectFit})+'")'}:{},H=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:n,quality:o,width:s[c]})}}({config:s,src:d,unoptimized:p,width:W,quality:G,sizes:f,loader:D}),$={...M,loading:L?"lazy":g,fetchPriority:j,width:W,height:B,decoding:"async",className:m,style:{...Z,...q},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:p,priority:h,placeholder:C,fill:w};return{props:$,meta:Y}}},2930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return h}});let r=n(6927),i=n(5909),o=i._(n(6006)),l=r._(n(9488)),a=n(4626),s=n(6436),u=n(7290);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7653);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2325:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r||t,s=i||n,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(6927),i=r._(n(6006)),o=n(6374),l=i.default.createContext(o.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},4595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let r=n(6927),i=n(2017),o=n(7653),l=n(4712),a=r._(n(5840)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=l.Image},5840:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},9488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(5909),i=r._(n(6006)),o=i.useLayoutEffect,l=i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3038:function(){},6394:function(e,t,n){e.exports=n(4595)},7611:function(e,t,n){"use strict";var r=n(6054);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,l){if(l!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},9497:function(e,t,n){e.exports=n(7611)()},6054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8211:function(e,t,n){"use strict";t.Z=void 0;var r=l(n(6006)),i=l(n(9497)),o=l(n(8683));function l(e){return e&&e.__esModule?e:{default:e}}let a=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:i="#FFF",children:l})=>("object"==typeof window&&document.documentElement.style.setProperty("--line-color",i),r.default.createElement("div",{className:(0,o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===n,"vertical-timeline--one-column-left":"1-column"===n||"1-column-left"===n,"vertical-timeline--one-column-right":"1-column-right"===n})},l));a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:i.default.string},t.Z=a},8149:function(e,t,n){"use strict";t.Z=void 0;var r=a(n(6006)),i=a(n(9497)),o=a(n(8683)),l=n(1476);function a(e){return e&&e.__esModule?e:{default:e}}let s=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:i=null,date:a="",dateClassName:s="",icon:u=null,iconClassName:c="",iconOnClick:d=null,onTimelineElementClick:f=null,iconStyle:p=null,id:h="",position:g="",style:m=null,textClassName:v="",intersectionObserverProps:y={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1})=>r.default.createElement(l.InView,y,({inView:l,ref:y})=>r.default.createElement("div",{ref:y,id:h,className:(0,o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===g,"vertical-timeline-element--right":"right"===g,"vertical-timeline-element--no-children":""===e}),style:m},r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:p,onClick:d,className:(0,o.default)(c,"vertical-timeline-element-icon",{"bounce-in":l||b,"is-hidden":!(l||b)})},u),r.default.createElement("div",{style:i,onClick:f,className:(0,o.default)(v,"vertical-timeline-element-content",{"bounce-in":l||b,"is-hidden":!(l||b)})},r.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,r.default.createElement("span",{className:(0,o.default)(s,"vertical-timeline-element-date")},a)))));s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})},t.Z=s},731:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(8211).Z,VerticalTimelineElement:n(8149).Z}},1476:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return h},default:function(){return h},defaultFallbackInView:function(){return c},observe:function(){return d},useInView:function(){return g}});var r=n(6006);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new Map,a=new WeakMap,s=0,u=void 0;function c(e){u=e}function d(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=u),void 0===window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=Object.keys(e).sort().filter(function(t){return void 0!==e[t]}).map(function(t){var n;return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t])}).toString(),n=l.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver(function(t){t.forEach(function(t){var n,o=t.isIntersecting&&r.some(function(e){return t.intersectionRatio>=e});e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(function(e){e(o,t)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},l.set(t,n)}return n}(n),c=o.id,d=o.observer,f=o.elements,p=f.get(e)||[];return f.has(e)||f.set(e,p),p.push(t),d.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(f.delete(e),d.unobserve(e)),0===f.size&&(d.disconnect(),l.delete(c))}}var f=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!=typeof e.children}var h=function(e){function t(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){!n.node||(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),p(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e);var n=t.prototype;return n.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o},l)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,f);return r.createElement(a||"div",i({ref:this.handleNode},s),l)},t}(r.Component);function g(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,c=t.initialInView,f=t.fallbackInView,p=r.useRef(),h=r.useState({inView:!!c}),g=h[0],m=h[1],v=r.useCallback(function(e){void 0!==p.current&&(p.current(),p.current=void 0),!u&&e&&(p.current=d(e,function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)},{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:i},f))},[Array.isArray(n)?n.toString():n,a,l,s,u,o,f,i]);(0,r.useEffect)(function(){p.current||!g.entry||s||u||m({inView:!!c})});var y=[v,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},3186:function(e,t,n){"use strict";n.d(t,{YD:function(){return u}});var r=n(6006),i=Object.defineProperty,o=new Map,l=new WeakMap,a=0,s=void 0;function u({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:u,triggerOnce:c,skip:d,initialInView:f,fallbackInView:p,onChange:h}={}){var g;let[m,v]=r.useState(null),y=r.useRef(),[b,w]=r.useState({inView:!!f,entry:void 0});y.current=h,r.useEffect(()=>{let r;if(!d&&m)return r=function(e,t,n={},r=s){if(void 0===window.IntersectionObserver&&void 0!==r){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:u,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t]}`}).toString(),n=o.get(t);if(!n){let r;let i=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var n;let o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(e=>{e(o,t)})})},e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:i},o.set(t,n)}return n}(n),d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),u.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(c.delete(e),u.unobserve(e)),0===c.size&&(u.disconnect(),o.delete(i))}}(m,(e,t)=>{w({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&c&&r&&(r(),r=void 0)},{root:u,rootMargin:i,threshold:e,trackVisibility:n,delay:t},p),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,m,u,i,c,d,n,p,t]);let _=null==(g=b.entry)?void 0:g.target,O=r.useRef();m||!_||c||d||O.current===_||(O.current=_,w({inView:!!f,entry:void 0}));let S=[v,b.inView,b.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}r.Component}}]);