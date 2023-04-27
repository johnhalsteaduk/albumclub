(globalThis.webpackChunkbluehostPlugin=globalThis.webpackChunkbluehostPlugin||[]).push([[43],{7980:(e,t,r)=>{"use strict";r.r(t);var n=r(9307);r(5468);const o=window.wp.domReady;var l=r.n(o);const s=window.wp.plugins;var a=r(9196);function i(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}i({},"ErrorBoundary",(()=>u)),i({},"ErrorBoundaryContext",(()=>d));const d=(0,a.createContext)(null),c={didCatch:!1,error:null};class u extends a.Component{state=c;static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary=(...e)=>{const{error:t}=this.state;null!==t&&(this.props.onReset?.({args:e,reason:"imperative-api"}),this.setState(c))};componentDidCatch(e,t){this.props.onError?.(e,t)}componentDidUpdate(e,t){const{didCatch:r}=this.state,{resetKeys:n}=this.props;r&&null!==t.error&&function(e=[],t=[]){return e.length!==t.length||e.some(((e,r)=>!Object.is(e,t[r])))}(e.resetKeys,n)&&(this.props.onReset?.({next:n,prev:e.resetKeys,reason:"keys"}),this.setState(c))}render(){const{children:e,fallbackRender:t,FallbackComponent:r,fallback:n}=this.props,{didCatch:o,error:l}=this.state;let s=e;if(o){const e={error:l,resetErrorBoundary:this.resetErrorBoundary};if((0,a.isValidElement)(n))s=n;else if("function"==typeof t)s=t(e);else{if(!r)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");s=(0,a.createElement)(r,e)}}return(0,a.createElement)(d.Provider,{value:{didCatch:o,error:l,resetErrorBoundary:this.resetErrorBoundary}},s)}}function h(){const e=(0,a.useContext)(d);!function(e){if(null==e||"boolean"!=typeof e.didCatch||"function"!=typeof e.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found")}(e);const[t,r]=(0,a.useState)({error:null,hasError:!1}),n=(0,a.useMemo)((()=>({resetBoundary:()=>{e?.resetErrorBoundary(),r({error:null,hasError:!1})},showBoundary:e=>r({error:e,hasError:!0})})),[e?.resetErrorBoundary]);if(t.hasError)throw t.error;return n}function p(e,t){const r=(0,a.forwardRef)(((r,n)=>(0,a.createElement)(u,t,(0,a.createElement)(e,{...r,ref:n})))),n=e.displayName||e.name||"Unknown";return r.displayName=`withErrorBoundary(${n})`,r}i({},"useErrorBoundary",(()=>h)),i({},"withErrorBoundary",(()=>p));var w=r(9818);const m="core/edit-post",f="welcomeGuide";var g=r(504);const E=(0,n.lazy)((()=>Promise.all([r.e(778),r.e(122)]).then(r.bind(r,1122)))),b=(0,n.lazy)((()=>Promise.all([r.e(778),r.e(786)]).then(r.bind(r,9786)))),y=(0,n.lazy)((()=>Promise.all([r.e(778),r.e(161)]).then(r.bind(r,4161))));(0,s.registerPlugin)("newfold-editor-placeholders",{render:g.Qk});const v=()=>{(0,w.select)(m).isFeatureActive(f)&&((0,w.dispatch)(m).toggleFeature(f),window.suppressedCore=!0),(0,g.jg)();const e=void 0!==window.nfTourContext&&window.nfTourContext;let t=(0,n.createElement)(n.Fragment,null);switch(e){case"about":t=E;break;case"contact":t=b;break;case"home":t=y;break;default:t=n.Fragment}return(0,n.createElement)(u,{FallbackComponent:(0,n.createElement)("div",null)},(0,n.createElement)(n.Suspense,{fallback:(0,n.createElement)("div",null)},(0,n.createElement)(t,null)))};l()((()=>{(0,n.render)((0,n.createElement)(v,null),document.getElementById("newfold-editortours"))}))},504:(e,t,r)=>{"use strict";r.d(t,{Qk:()=>f,Rx:()=>g,Vi:()=>p,jg:()=>c});var n=r(9307),o=r(9818);const l=window.wp.components;var s=r(2067),a=r(2819),i=r(5736),d=r(9196);const c=()=>{-1!==window.navigator.userAgent.indexOf("Trident")||document.addEventListener("selectionchange",(e=>{let t=(document.getSelection().baseNode||0).parentNode,r=document.lastNode;t!==r&&(r&&r.dispatchEvent(new Event("caretOut")),(document.lastNode=t).dispatchEvent(new Event("caretIn")))}))},u=e=>{const t=e.target.id;let r=document.getElementById("style-"+t);null===r&&(r=document.createElement("style"),r.type="text/css",r.id="style-"+t,r.innerText="span#"+t+".nf-placeholder.nf-highlight, span#"+t+".nf-placeholder.nf-highlight[data-rich-text-format-boundary] { background-color: inherit !important; color: inherit !important; }",document.getElementsByTagName("head")[0].appendChild(r))},h=e=>{const t=document.getElementById("style-"+e);null!==t&&t.parentNode.removeChild(t)},p=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=(0,o.select)("core/block-editor").getBlocks(),{nfPlaceholders:r}=window;let n=[];if(t.length){const l=new DOMParser;return t.forEach((t=>{switch(t.name){case"core/heading":case"core/paragraph":let s=l.parseFromString(t.attributes.content,"text/html").querySelectorAll(".nf-placeholder");if(s.length){s=Array.from(s);for(const l of s)"object"==typeof r&&r.hasOwnProperty(l.id)&&l.innerText!==r[l.id]||e?(h(l.id),(0,o.dispatch)("core/block-editor").updateBlock(t.clientId,{attributes:{content:(0,a.replace)(t.attributes.content,l.outerHTML,l.innerHTML)}})):n.push(l.id)}}})),!n.length||n}return null},w=()=>(0,n.createElement)(l.Button,{isSecondary:!0,onClick:()=>{void 0!==window.nfTour&&window.nfTour.start()},className:"relaunch-tour"},(0,i.__)("Relaunch Tour","bluehost-wordpress-plugin")),m=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{t(p()),o(!1)}),[]),!r&&(e.length?(e.forEach((e=>h(e))),(0,n.createElement)(d.Fragment,null,(0,n.createElement)(l.Notice,{status:"warning",isDismissible:!1},(0,i.sprintf)((0,i._n)("We found %s placeholder still on this page.","We found %s placeholders still on this page.",e.length,"bluehost-wordpress-plugin"),e.length)),(0,n.createElement)("h4",null,(0,i.__)("These placeholders haven't been edited","bluehost-wordpress-plugin"),":"),(0,n.createElement)("ul",{id:"unedited"},e.map((e=>void 0===window.nfPlaceholders||void 0===window.nfPlaceholders[e]?(0,n.createElement)("li",null,(0,i.__)("Oops, we couldn't find this placeholder, please double check the content","bluehost-wordpress-plugin")):(0,n.createElement)("li",{key:e},window.nfPlaceholders[e])))),(0,n.createElement)(w,null))):(0,n.createElement)(d.Fragment,null,(0,n.createElement)(l.Notice,{status:"success",isDismissible:!1},(0,i.__)("This page looks great! Time to share it with your visitors.","bluehost-wordpress-plugin")),(0,n.createElement)(w,null)))},f=()=>(0,n.createElement)(s.PluginPrePublishPanel,{className:"newfold-default-content-validation",title:(0,i.__)("Bluehost","bluehost-wordpress-plugin"),opened:!0,initialOpen:!0,icon:(0,n.createElement)("span",null)},(0,n.createElement)(m,null)),g=()=>{let e=document.querySelectorAll(".nf-placeholder"),t=!1;if(void 0!==window.nfPlaceholders?t=!0:window.nfPlaceholders={},e.length&&(e=Array.from(e)),Array.isArray(e)&&(e.forEach((e=>{t||(window.nfPlaceholders[e.id]=e.innerText),e.addEventListener("click",u),e.addEventListener("caretIn",u)})),!t)){const e=wp.data.select("core/editor").getEditedPostAttribute("meta");wp.data.dispatch("core/editor").editPost({meta:{...e,nf_dc_placeholders:JSON.stringify(window.nfPlaceholders)}})}}},5468:(e,t,r)=>{void 0!==window.bluehostPluginPublicPath&&(r.p=window.bluehostPluginPublicPath)},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},6989:e=>{"use strict";e.exports=window.wp.apiFetch},9818:e=>{"use strict";e.exports=window.wp.data},2067:e=>{"use strict";e.exports=window.wp.editPost},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},6483:e=>{"use strict";e.exports=window.wp.url}},e=>{var t=(7980,e(e.s=7980));(window.bluehostPlugin=window.bluehostPlugin||{}).editortours=t}]);