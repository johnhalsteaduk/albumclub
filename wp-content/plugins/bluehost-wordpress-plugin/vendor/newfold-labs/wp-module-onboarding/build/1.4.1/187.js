"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[187],{4316:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9307),r=n(5736);const i=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,r.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,r.__)(n,"wp-module-onboarding")))}},5791:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(9307),r=n(4184),i=n.n(r),s=n(5158),d=n(6974),l=n(2200),o=n(6989),c=n.n(o),u=n(4704);const m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,d.TH)(),o=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==o||o.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){c()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${l.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:i()("nfd-onboarding-layout",t)},n)};var h=n(682);const g=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)},p=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:s=!1,isVerticallyCentered:d=!1,isContained:l=!1,isPadded:o=!1,isFadeIn:c=!0}=e;const u=l?g:a.Fragment;return(0,a.createElement)(h.Z,{type:c&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(m,{className:i()("nfd-onboarding-layout__common",t,{"is-bg-primary":r},{"is-centered":s},{"is-vertically-centered":d},{"is-padded":o})},(0,a.createElement)(u,null,n)))}},7187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9307),r=n(9818),i=n(5791),s=n(4316),d=n(2200),l=n(9685),o=n(4333);const c=()=>{const e=(0,o.useViewportMatch)("medium"),{setIsDrawerOpened:t,setDrawerActiveView:n,setSidebarActiveView:c,setIsDrawerSuppressed:u}=(0,r.useDispatch)(l.h);return(0,a.useEffect)((()=>{e&&t(!0),c(d.Jq),u(!1),n(d.BP)}),[]),(0,a.createElement)(i.Z,{isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:"Error 404",subtitle:"Please Check Again!"}))}}}]);