"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[858],{4401:(e,t,a)=>{a.d(t,{V:()=>l});var r=a(9307),n=a(5791),s=a(4316),o=a(950);const l=e=>{let{title:t,subtitle:a,error:l}=e;return(0,r.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(s.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},l),(0,r.createElement)(o.Z,null))}},4316:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(9307),n=a(5736);const s=e=>{let{title:t,subtitle:a}=e;return(0,r.createElement)("div",{className:"nfd-main-heading"},(0,r.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,r.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(a,"wp-module-onboarding")))}},5791:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(9307),n=a(4184),s=a.n(n),o=a(5158),l=a(6974),i=a(2200),d=a(6989),c=a.n(d),u=a(4704);const m=e=>{let{className:t="nfd-onboarding-layout__base",children:a}=e;const n=(0,l.TH)(),d=document.querySelector(".nfd-onboard-content");return(0,r.useEffect)((()=>{null==d||d.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,o.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){c()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,r.createElement)("div",{className:s()("nfd-onboarding-layout",t)},a)};var h=a(682);const g=e=>{let{children:t}=e;return(0,r.createElement)("section",{className:"is-contained"},t)},p=e=>{let{className:t="",children:a,isBgPrimary:n=!1,isCentered:o=!1,isVerticallyCentered:l=!1,isContained:i=!1,isPadded:d=!1,isFadeIn:c=!0}=e;const u=i?g:r.Fragment;return(0,r.createElement)(h.Z,{type:c&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,r.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-bg-primary":n},{"is-centered":o},{"is-vertically-centered":l},{"is-padded":d})},(0,r.createElement)(u,null,a)))}},7004:(e,t,a)=>{a.d(t,{L:()=>d,Y:()=>l});var r=a(9307),n=a(5791),s=a(4316),o=a(950);const l=e=>{let{title:t,subtitle:a}=e;return(0,r.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,r.createElement)(s.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-loader__logo-container"},(0,r.createElement)("div",{className:"step-loader__logo"})),(0,r.createElement)(o.Z,null))};var i=a(682);const d=()=>(0,r.createElement)("div",{className:"image-upload-loader--loading-box"},(0,r.createElement)(i.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},950:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(9307),n=a(9685),s=a(9818),o=a(5736);const l=e=>{let{question:t=(0,o.__)("Need Help?","wp-module-onboarding"),urlLabel:a=(0,o.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,s.select)(n.h).getHireExpertsUrl();return(0,r.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,r.createElement)("a",{href:l,target:"_blank"},a))}},1340:(e,t,a)=>{a.d(t,{U:()=>h,g:()=>w});var r=a(9307),n=a(9818),s=a(4333),o=a(5736),l=a(7004),i=a(9685),d=a(7625),c=a(2200),u=a(4401);var m=a(1589);const h=e=>{let{children:t,navigationStateCallback:a=!1}=e;const h=(0,s.useViewportMatch)("medium"),{storedThemeStatus:g,brandName:p}=(0,n.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,o.sprintf)(
/* translators: %s: Brand */
(0,o.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,o.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,o.sprintf)(
/* translators: %s: Brand */
(0,o.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,o.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,o.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:v}=(0,n.useDispatch)(i.h),E=async()=>{const e=await(0,d.YL)(c.DY);return null!=e&&e.error?c.vv:e.body.status},y=()=>{switch(g){case c.Rq:case c.GV:return(()=>{if("function"==typeof a)return a();h&&_(!0),f(!1),v(!0)})();default:_(!1),f(!0),v(!1)}};(0,r.useEffect)((()=>{y(),g===c.a0&&(async()=>{const e=await E();switch(e){case c.Zh:setTimeout((async()=>{if(await E()!==c.GV)return b(c.vv);window.location.reload()}),c.YU);break;case c.GV:window.location.reload();break;default:b(e)}})()}),[g]);const S=async()=>(b(c.Zh),(await(0,d.N9)(c.DY,!0,!1)).error?b(c.Rq):window.location.reload());return(0,r.createElement)(r.Fragment,null,(()=>{switch(g){case c.vv:return(0,r.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,o.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,o.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:S,modalExitButtonText:(0,o.__)("Exit to WordPress","wp-module-onboarding")});case c.Rq:return(0,r.createElement)(u.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case c.GV:return t;default:return(0,r.createElement)(l.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())};var g=a(3421),p=a(1392);const w=e=>{let{children:t,navigationStateCallback:a=!1}=e;const d=(0,s.useViewportMatch)("medium"),[m,h]=(0,r.useState)(c.Sr),{storedPluginsStatus:w,brandName:b}=(0,n.useSelect)((e=>({storedPluginsStatus:e(i.h).getPluginsStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),_=(e=>({loader:{title:(0,o.sprintf)(
/* translators: 1: Brand 2: Site */
(0,o.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,o.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,o.sprintf)(
/* translators: 1: Brand 2: Site */
(0,o.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,o.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,o.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updatePluginsStatus:f,setIsDrawerOpened:v,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:y}=(0,n.useDispatch)(i.h),S=async()=>{const e=await(0,g.qC)(c.Gv);return null!=e&&e.error?c.sG:e.body.status},N=e=>{switch(e){case c.sG:case c.ye:return(()=>{if("function"==typeof a)return a();d&&v(!0),E(!1),y(!0)})();default:v(!1),E(!0),y(!1)}};(0,r.useEffect)((()=>{N(m)}),[m]);return(0,r.useEffect)((()=>{h(w[c.Gv]),w[c.Gv]===c.Ck&&(async e=>{const t=await S();switch(t){case c.Sr:setTimeout((async()=>{if(await S()!==c.ye)return w[c.Gv]=c.sG,f(w),h(c.sG);window.location.reload()}),c.sr);break;case c.ye:window.location.reload();break;default:e[c.Gv]=t,h(t),f(e)}})(w)}),[w]),(0,r.createElement)(r.Fragment,null,(()=>{switch(m){case c.sG:return(0,r.createElement)(u.V,{title:_.errorState.title,subtitle:_.errorState.subtitle,error:_.errorState.error});case c.ye:return t;default:return(0,r.createElement)(l.Y,{title:_.loader.title,subtitle:_.loader.subtitle})}})())}},8858:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(9307),n=a(6974),s=a(9818),o=a(6138),l=a(9685),i=a(5791),d=a(2200),c=a(1340),u=a(6332);const m=()=>{const e=(0,n.TH)(),[t,a]=(0,r.useState)(),{currentStep:m,themeStatus:h}=(0,s.useSelect)((t=>({currentStep:t(l.h).getStepFromPath(e.pathname),themeStatus:t(l.h).getThemeStatus()})),[]),{updateThemeStatus:g,setDrawerActiveView:p,setSidebarActiveView:w}=(0,s.useDispatch)(l.h);return(0,r.useEffect)((()=>{w(d.Jq),p(d.jN)}),[]),(0,r.useEffect)((()=>{d.GV===h&&(async()=>{const e=await(0,o.C)(m.patternId,!0);if(null!=e&&e.error)return g(d.a0);a(null==e?void 0:e.body)})()}),[h]),(0,r.createElement)(c.U,null,(0,r.createElement)(u.V3,null,(0,r.createElement)(i.Z,{className:"theme-fonts-preview"},(0,r.createElement)("div",{className:"theme-fonts-preview__title-bar"},(0,r.createElement)("div",{className:"theme-fonts-preview__title-bar__browser"},(0,r.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}))),!t&&(0,r.createElement)(u.i5,{blockGrammer:"",styling:"large",viewportWidth:1300}),t&&(0,r.createElement)(u.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);