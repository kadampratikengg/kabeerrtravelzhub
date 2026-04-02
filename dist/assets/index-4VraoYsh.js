(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();function No(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mo={exports:{}},kn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh=Symbol.for("react.transitional.element"),ah=Symbol.for("react.fragment");function Uo(t,e,l){var a=null;if(l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),"key"in e){l={};for(var i in e)i!=="key"&&(l[i]=e[i])}else l=e;return e=l.ref,{$$typeof:lh,type:t,key:a,ref:e!==void 0?e:null,props:l}}kn.Fragment=ah;kn.jsx=Uo;kn.jsxs=Uo;Mo.exports=kn;var A=Mo.exports,Ho={exports:{}},D={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.transitional.element"),ih=Symbol.for("react.portal"),nh=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),rh=Symbol.for("react.consumer"),ch=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),dh=Symbol.for("react.memo"),Bo=Symbol.for("react.lazy"),mh=Symbol.for("react.activity"),Fr=Symbol.iterator;function hh(t){return t===null||typeof t!="object"?null:(t=Fr&&t[Fr]||t["@@iterator"],typeof t=="function"?t:null)}var ko={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qo=Object.assign,Lo={};function ca(t,e,l){this.props=t,this.context=e,this.refs=Lo,this.updater=l||ko}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yo(){}Yo.prototype=ca.prototype;function Zu(t,e,l){this.props=t,this.context=e,this.refs=Lo,this.updater=l||ko}var Vu=Zu.prototype=new Yo;Vu.constructor=Zu;qo(Vu,ca.prototype);Vu.isPureReactComponent=!0;var Ir=Array.isArray;function Vs(){}var W={H:null,A:null,T:null,S:null},Go=Object.prototype.hasOwnProperty;function Ku(t,e,l){var a=l.ref;return{$$typeof:Qu,type:t,key:e,ref:a!==void 0?a:null,props:l}}function vh(t,e){return Ku(t.type,e,t.props)}function Ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qu}function ph(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Pr=/\/+/g;function ss(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ph(""+t.key):e.toString(36)}function gh(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Vs,Vs):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Rl(t,e,l,a,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(n){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Qu:case ih:s=!0;break;case Bo:return s=t._init,Rl(s(t._payload),e,l,a,i)}}if(s)return i=i(t),s=a===""?"."+ss(t,0):a,Ir(i)?(l="",s!=null&&(l=s.replace(Pr,"$&/")+"/"),Rl(i,e,l,"",function(c){return c})):i!=null&&(Ju(i)&&(i=vh(i,l+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Pr,"$&/")+"/")+s)),e.push(i)),1;s=0;var u=a===""?".":a+":";if(Ir(t))for(var r=0;r<t.length;r++)a=t[r],n=u+ss(a,r),s+=Rl(a,e,l,n,i);else if(r=hh(t),typeof r=="function")for(t=r.call(t),r=0;!(a=t.next()).done;)a=a.value,n=u+ss(a,r++),s+=Rl(a,e,l,n,i);else if(n==="object"){if(typeof t.then=="function")return Rl(gh(t),e,l,a,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function _i(t,e,l){if(t==null)return t;var a=[],i=0;return Rl(t,a,"","",function(n){return e.call(l,n,i++)}),a}function bh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xh={map:_i,forEach:function(t,e,l){_i(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return _i(t,function(){e++}),e},toArray:function(t){return _i(t,function(e){return e})||[]},only:function(t){if(!Ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Activity=mh;D.Children=xh;D.Component=ca;D.Fragment=nh;D.Profiler=uh;D.PureComponent=Zu;D.StrictMode=sh;D.Suspense=fh;D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W;D.__COMPILER_RUNTIME={__proto__:null,c:function(t){return W.H.useMemoCache(t)}};D.cache=function(t){return function(){return t.apply(null,arguments)}};D.cacheSignal=function(){return null};D.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=qo({},t.props),i=t.key;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)!Go.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(a[n]=e[n]);var n=arguments.length-2;if(n===1)a.children=l;else if(1<n){for(var s=Array(n),u=0;u<n;u++)s[u]=arguments[u+2];a.children=s}return Ku(t.type,i,a)};D.createContext=function(t){return t={$$typeof:ch,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:rh,_context:t},t};D.createElement=function(t,e,l){var a,i={},n=null;if(e!=null)for(a in e.key!==void 0&&(n=""+e.key),e)Go.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=e[a]);var s=arguments.length-2;if(s===1)i.children=l;else if(1<s){for(var u=Array(s),r=0;r<s;r++)u[r]=arguments[r+2];i.children=u}if(t&&t.defaultProps)for(a in s=t.defaultProps,s)i[a]===void 0&&(i[a]=s[a]);return Ku(t,n,i)};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:oh,render:t}};D.isValidElement=Ju;D.lazy=function(t){return{$$typeof:Bo,_payload:{_status:-1,_result:t},_init:bh}};D.memo=function(t,e){return{$$typeof:dh,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=W.T,l={};W.T=l;try{var a=t(),i=W.S;i!==null&&i(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Vs,tc)}catch(n){tc(n)}finally{e!==null&&l.types!==null&&(e.types=l.types),W.T=e}};D.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()};D.use=function(t){return W.H.use(t)};D.useActionState=function(t,e,l){return W.H.useActionState(t,e,l)};D.useCallback=function(t,e){return W.H.useCallback(t,e)};D.useContext=function(t){return W.H.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t,e){return W.H.useDeferredValue(t,e)};D.useEffect=function(t,e){return W.H.useEffect(t,e)};D.useEffectEvent=function(t){return W.H.useEffectEvent(t)};D.useId=function(){return W.H.useId()};D.useImperativeHandle=function(t,e,l){return W.H.useImperativeHandle(t,e,l)};D.useInsertionEffect=function(t,e){return W.H.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return W.H.useLayoutEffect(t,e)};D.useMemo=function(t,e){return W.H.useMemo(t,e)};D.useOptimistic=function(t,e){return W.H.useOptimistic(t,e)};D.useReducer=function(t,e,l){return W.H.useReducer(t,e,l)};D.useRef=function(t){return W.H.useRef(t)};D.useState=function(t){return W.H.useState(t)};D.useSyncExternalStore=function(t,e,l){return W.H.useSyncExternalStore(t,e,l)};D.useTransition=function(){return W.H.useTransition()};D.version="19.2.4";Ho.exports=D;var b=Ho.exports;const yh=No(b);var Xo={exports:{}},qn={},Qo={exports:{}},Zo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,U){var M=E.length;E.push(U);t:for(;0<M;){var lt=M-1>>>1,ft=E[lt];if(0<i(ft,U))E[lt]=U,E[M]=ft,M=lt;else break t}}function l(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var U=E[0],M=E.pop();if(M!==U){E[0]=M;t:for(var lt=0,ft=E.length,Ti=ft>>>1;lt<Ti;){var Ei=2*(lt+1)-1,ns=E[Ei],ul=Ei+1,Ai=E[ul];if(0>i(ns,M))ul<ft&&0>i(Ai,ns)?(E[lt]=Ai,E[ul]=M,lt=ul):(E[lt]=ns,E[Ei]=M,lt=Ei);else if(ul<ft&&0>i(Ai,M))E[lt]=Ai,E[ul]=M,lt=ul;else break t}}return U}function i(E,U){var M=E.sortIndex-U.sortIndex;return M!==0?M:E.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var n=performance;t.unstable_now=function(){return n.now()}}else{var s=Date,u=s.now();t.unstable_now=function(){return s.now()-u}}var r=[],c=[],h=1,d=null,m=3,p=!1,y=!1,w=!1,S=!1,f=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function g(E){for(var U=l(c);U!==null;){if(U.callback===null)a(c);else if(U.startTime<=E)a(c),U.sortIndex=U.expirationTime,e(r,U);else break;U=l(c)}}function z(E){if(w=!1,g(E),!y)if(l(r)!==null)y=!0,j||(j=!0,le());else{var U=l(c);U!==null&&Yt(z,U.startTime-E)}}var j=!1,T=-1,_=5,R=-1;function N(){return S?!0:!(t.unstable_now()-R<_)}function zt(){if(S=!1,j){var E=t.unstable_now();R=E;var U=!0;try{t:{y=!1,w&&(w=!1,o(T),T=-1),p=!0;var M=m;try{e:{for(g(E),d=l(r);d!==null&&!(d.expirationTime>E&&N());){var lt=d.callback;if(typeof lt=="function"){d.callback=null,m=d.priorityLevel;var ft=lt(d.expirationTime<=E);if(E=t.unstable_now(),typeof ft=="function"){d.callback=ft,g(E),U=!0;break e}d===l(r)&&a(r),g(E)}else a(r);d=l(r)}if(d!==null)U=!0;else{var Ti=l(c);Ti!==null&&Yt(z,Ti.startTime-E),U=!1}}break t}finally{d=null,m=M,p=!1}U=void 0}}finally{U?le():j=!1}}}var le;if(typeof v=="function")le=function(){v(zt)};else if(typeof MessageChannel<"u"){var xa=new MessageChannel,zi=xa.port2;xa.port1.onmessage=zt,le=function(){zi.postMessage(null)}}else le=function(){f(zt,0)};function Yt(E,U){T=f(function(){E(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(E){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var M=m;m=U;try{return E()}finally{m=M}},t.unstable_requestPaint=function(){S=!0},t.unstable_runWithPriority=function(E,U){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=m;m=E;try{return U()}finally{m=M}},t.unstable_scheduleCallback=function(E,U,M){var lt=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?lt+M:lt):M=lt,E){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=M+ft,E={id:h++,callback:U,priorityLevel:E,startTime:M,expirationTime:ft,sortIndex:-1},M>lt?(E.sortIndex=M,e(c,E),l(r)===null&&E===l(c)&&(w?(o(T),T=-1):w=!0,Yt(z,M-lt))):(E.sortIndex=ft,e(r,E),y||p||(y=!0,j||(j=!0,le()))),E},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(E){var U=m;return function(){var M=m;m=U;try{return E.apply(this,arguments)}finally{m=M}}}})(Zo);Qo.exports=Zo;var wh=Qo.exports,Vo={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=b;function Ko(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ce(){}var wt={d:{f:Ce,r:function(){throw Error(Ko(522))},D:Ce,C:Ce,L:Ce,m:Ce,X:Ce,S:Ce,M:Ce},p:0,findDOMNode:null},zh=Symbol.for("react.portal");function Th(t,e,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zh,key:a==null?null:""+a,children:t,containerInfo:e,implementation:l}}var Na=Sh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ln(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wt;St.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Ko(299));return Th(t,e,null,l)};St.flushSync=function(t){var e=Na.T,l=wt.p;try{if(Na.T=null,wt.p=2,t)return t()}finally{Na.T=e,wt.p=l,wt.d.f()}};St.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,wt.d.C(t,e))};St.prefetchDNS=function(t){typeof t=="string"&&wt.d.D(t)};St.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,a=Ln(l,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?wt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:n}):l==="script"&&wt.d.X(t,{crossOrigin:a,integrity:i,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};St.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=Ln(e.as,e.crossOrigin);wt.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&wt.d.M(t)};St.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,a=Ln(l,e.crossOrigin);wt.d.L(t,l,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};St.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=Ln(e.as,e.crossOrigin);wt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else wt.d.m(t)};St.requestFormReset=function(t){wt.d.r(t)};St.unstable_batchedUpdates=function(t,e){return t(e)};St.useFormState=function(t,e,l){return Na.H.useFormState(t,e,l)};St.useFormStatus=function(){return Na.H.useHostTransitionStatus()};St.version="19.2.4";function Jo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jo)}catch(t){console.error(t)}}Jo(),Vo.exports=St;var Eh=Vo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=wh,$o=b,Ah=Eh;function x(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ri(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Fo(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Io(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ec(t){if(ri(t)!==t)throw Error(x(188))}function _h(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(x(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return ec(i),t;if(n===a)return ec(i),e;n=n.sibling}throw Error(x(188))}if(l.return!==a.return)l=i,a=n;else{for(var s=!1,u=i.child;u;){if(u===l){s=!0,l=i,a=n;break}if(u===a){s=!0,a=i,l=n;break}u=u.sibling}if(!s){for(u=n.child;u;){if(u===l){s=!0,l=n,a=i;break}if(u===a){s=!0,a=n,l=i;break}u=u.sibling}if(!s)throw Error(x(189))}}if(l.alternate!==a)throw Error(x(190))}if(l.tag!==3)throw Error(x(188));return l.stateNode.current===l?t:e}function Po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Po(t),e!==null)return e;t=t.sibling}return null}var F=Object.assign,jh=Symbol.for("react.element"),ji=Symbol.for("react.transitional.element"),ja=Symbol.for("react.portal"),Nl=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),ef=Symbol.for("react.consumer"),be=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Js=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ws=Symbol.for("react.activity"),Oh=Symbol.for("react.memo_cache_sentinel"),lc=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=lc&&t[lc]||t["@@iterator"],typeof t=="function"?t:null)}var Rh=Symbol.for("react.client.reference");function Fs(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Rh?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nl:return"Fragment";case Ks:return"Profiler";case tf:return"StrictMode";case Js:return"Suspense";case $s:return"SuspenseList";case Ws:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ja:return"Portal";case be:return t.displayName||"Context";case ef:return(t._context.displayName||"Context")+".Consumer";case $u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wu:return e=t.displayName||null,e!==null?e:Fs(t.type)||"Memo";case Me:e=t._payload,t=t._init;try{return Fs(t(e))}catch{}}return null}var Oa=Array.isArray,O=$o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Ah.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ml={pending:!1,data:null,method:null,action:null},Is=[],Ml=-1;function ce(t){return{current:t}}function ht(t){0>Ml||(t.current=Is[Ml],Is[Ml]=null,Ml--)}function K(t,e){Ml++,Is[Ml]=t.current,t.current=e}var se=ce(null),Ka=ce(null),Ze=ce(null),rn=ce(null);function cn(t,e){switch(K(Ze,e),K(Ka,t),K(se,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ro(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ro(e),t=Sm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ht(se),K(se,t)}function Il(){ht(se),ht(Ka),ht(Ze)}function Ps(t){t.memoizedState!==null&&K(rn,t);var e=se.current,l=Sm(e,t.type);e!==l&&(K(Ka,t),K(se,l))}function on(t){Ka.current===t&&(ht(se),ht(Ka)),rn.current===t&&(ht(rn),ii._currentValue=ml)}var us,ac;function cl(t){if(us===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);us=e&&e[1]||"",ac=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+us+t+ac}var rs=!1;function cs(t,e){if(!t||rs)return"";rs=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var m=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){m=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){m=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),s=n[0],u=n[1];if(s&&u){var r=s.split(`
`),c=u.split(`
`);for(i=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(a===r.length||i===c.length)for(a=r.length-1,i=c.length-1;1<=a&&0<=i&&r[a]!==c[i];)i--;for(;1<=a&&0<=i;a--,i--)if(r[a]!==c[i]){if(a!==1||i!==1)do if(a--,i--,0>i||r[a]!==c[i]){var h=`
`+r[a].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=a&&0<=i);break}}}finally{rs=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?cl(l):""}function Dh(t,e){switch(t.tag){case 26:case 27:case 5:return cl(t.type);case 16:return cl("Lazy");case 13:return t.child!==e&&e!==null?cl("Suspense Fallback"):cl("Suspense");case 19:return cl("SuspenseList");case 0:case 15:return cs(t.type,!1);case 11:return cs(t.type.render,!1);case 1:return cs(t.type,!0);case 31:return cl("Activity");default:return""}}function ic(t){try{var e="",l=null;do e+=Dh(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var tu=Object.prototype.hasOwnProperty,Fu=ot.unstable_scheduleCallback,os=ot.unstable_cancelCallback,Ch=ot.unstable_shouldYield,Nh=ot.unstable_requestPaint,Ut=ot.unstable_now,Mh=ot.unstable_getCurrentPriorityLevel,lf=ot.unstable_ImmediatePriority,af=ot.unstable_UserBlockingPriority,fn=ot.unstable_NormalPriority,Uh=ot.unstable_LowPriority,nf=ot.unstable_IdlePriority,Hh=ot.log,Bh=ot.unstable_setDisableYieldValue,ci=null,Ht=null;function Le(t){if(typeof Hh=="function"&&Bh(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(ci,t)}catch{}}var Bt=Math.clz32?Math.clz32:Lh,kh=Math.log,qh=Math.LN2;function Lh(t){return t>>>=0,t===0?32:31-(kh(t)/qh|0)|0}var Oi=256,Ri=262144,Di=4194304;function ol(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,n=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var u=a&134217727;return u!==0?(a=u&~n,a!==0?i=ol(a):(s&=u,s!==0?i=ol(s):l||(l=u&~t,l!==0&&(i=ol(l))))):(u=a&~n,u!==0?i=ol(u):s!==0?i=ol(s):l||(l=a&~t,l!==0&&(i=ol(l)))),i===0?0:e!==0&&e!==i&&!(e&n)&&(n=i&-i,l=e&-e,n>=l||n===32&&(l&4194048)!==0)?e:i}function oi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Yh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(){var t=Di;return Di<<=1,!(Di&62914560)&&(Di=4194304),t}function fs(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function fi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gh(t,e,l,a,i,n){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var u=t.entanglements,r=t.expirationTimes,c=t.hiddenUpdates;for(l=s&~l;0<l;){var h=31-Bt(l),d=1<<h;u[h]=0,r[h]=-1;var m=c[h];if(m!==null)for(c[h]=null,h=0;h<m.length;h++){var p=m[h];p!==null&&(p.lane&=-536870913)}l&=~d}a!==0&&uf(t,a,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(s&~e))}function uf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Bt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function rf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Bt(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function cf(t,e){var l=e&-e;return l=l&42?1:Iu(l),l&(t.suspendedLanes|e)?0:l}function Iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pu(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function of(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Nm(t.type))}function nc(t,e){var l=Y.p;try{return Y.p=t,e()}finally{Y.p=l}}var il=Math.random().toString(36).slice(2),pt="__reactFiber$"+il,Ot="__reactProps$"+il,oa="__reactContainer$"+il,eu="__reactEvents$"+il,Xh="__reactListeners$"+il,Qh="__reactHandles$"+il,sc="__reactResources$"+il,di="__reactMarker$"+il;function tr(t){delete t[pt],delete t[Ot],delete t[eu],delete t[Xh],delete t[Qh]}function Ul(t){var e=t[pt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[oa]||l[pt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=ho(t);t!==null;){if(l=t[pt])return l;t=ho(t)}return e}t=l,l=t.parentNode}return null}function fa(t){if(t=t[pt]||t[oa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ra(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(x(33))}function Zl(t){var e=t[sc];return e||(e=t[sc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mt(t){t[di]=!0}var ff=new Set,df={};function zl(t,e){Pl(t,e),Pl(t+"Capture",e)}function Pl(t,e){for(df[t]=e,t=0;t<e.length;t++)ff.add(e[t])}var Zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},rc={};function Vh(t){return tu.call(rc,t)?!0:tu.call(uc,t)?!1:Zh.test(t)?rc[t]=!0:(uc[t]=!0,!1)}function Qi(t,e,l){if(Vh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ci(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function fe(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kh(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){l=""+s,n.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lu(t){if(!t._valueTracker){var e=mf(t)?"checked":"value";t._valueTracker=Kh(t,e,""+t[e])}}function hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=mf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jh=/[\n"\\]/g;function Vt(t){return t.replace(Jh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function au(t,e,l,a,i,n,s,u){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xt(e)):t.value!==""+Xt(e)&&(t.value=""+Xt(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?iu(t,s,Xt(e)):l!=null?iu(t,s,Xt(l)):a!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+Xt(u):t.removeAttribute("name")}function vf(t,e,l,a,i,n,s,u){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){lu(t);return}l=l!=null?""+Xt(l):"",e=e!=null?""+Xt(e):l,u||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=u?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),lu(t)}function iu(t,e,l){e==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Vl(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Xt(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e,l){if(e!=null&&(e=""+Xt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Xt(l):""}function gf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(x(92));if(Oa(a)){if(1<a.length)throw Error(x(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Xt(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),lu(t)}function ta(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var $h=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||$h.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function bf(t,e,l){if(e!=null&&typeof e!="object")throw Error(x(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&cc(t,i,a)}else for(var n in e)e.hasOwnProperty(n)&&cc(t,n,e[n])}function er(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zi(t){return Fh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function xe(){}var nu=null;function lr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hl=null,Kl=null;function oc(t){var e=fa(t);if(e&&(t=e.stateNode)){var l=t[Ot]||null;t:switch(t=e.stateNode,e.type){case"input":if(au(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Vt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[Ot]||null;if(!i)throw Error(x(90));au(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&hf(a)}break t;case"textarea":pf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Vl(t,!!l.multiple,e,!1)}}}var ds=!1;function xf(t,e,l){if(ds)return t(e,l);ds=!0;try{var a=t(e);return a}finally{if(ds=!1,(Hl!==null||Kl!==null)&&(Pn(),Hl&&(e=Hl,t=Kl,Kl=Hl=null,oc(e),t)))for(e=0;e<t.length;e++)oc(t[e])}}function Ja(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Ot]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(x(231,e,typeof l));return l}var Te=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Te)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){su=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{su=!1}var Ye=null,ar=null,Vi=null;function yf(){if(Vi)return Vi;var t,e=ar,l=e.length,a,i="value"in Ye?Ye.value:Ye.textContent,n=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[n-a];a++);return Vi=i.slice(t,1<a?1-a:void 0)}function Ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ni(){return!0}function fc(){return!1}function Rt(t){function e(l,a,i,n,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(l=t[u],this[u]=l?l(n):n[u]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ni:fc,this.isPropagationStopped=fc,this}return F(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),e}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gn=Rt(Tl),mi=F({},Tl,{view:0,detail:0}),Ih=Rt(mi),ms,hs,Sa,Xn=F({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(ms=t.screenX-Sa.screenX,hs=t.screenY-Sa.screenY):hs=ms=0,Sa=t),ms)},movementY:function(t){return"movementY"in t?t.movementY:hs}}),dc=Rt(Xn),Ph=F({},Xn,{dataTransfer:0}),tv=Rt(Ph),ev=F({},mi,{relatedTarget:0}),vs=Rt(ev),lv=F({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Rt(lv),iv=F({},Tl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nv=Rt(iv),sv=F({},Tl,{data:0}),mc=Rt(sv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cv[t])?!!e[t]:!1}function ir(){return ov}var fv=F({},mi,{key:function(t){if(t.key){var e=uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(t){return t.type==="keypress"?Ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dv=Rt(fv),mv=F({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=Rt(mv),hv=F({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),vv=Rt(hv),pv=F({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=Rt(pv),bv=F({},Xn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Rt(bv),yv=F({},Tl,{newState:0,oldState:0}),wv=Rt(yv),Sv=[9,13,27,32],nr=Te&&"CompositionEvent"in window,Ma=null;Te&&"documentMode"in document&&(Ma=document.documentMode);var zv=Te&&"TextEvent"in window&&!Ma,wf=Te&&(!nr||Ma&&8<Ma&&11>=Ma),vc=" ",pc=!1;function Sf(t,e){switch(t){case"keyup":return Sv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bl=!1;function Tv(t,e){switch(t){case"compositionend":return zf(e);case"keypress":return e.which!==32?null:(pc=!0,vc);case"textInput":return t=e.data,t===vc&&pc?null:t;default:return null}}function Ev(t,e){if(Bl)return t==="compositionend"||!nr&&Sf(t,e)?(t=yf(),Vi=ar=Ye=null,Bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wf&&e.locale!=="ko"?null:e.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Av[t.type]:e==="textarea"}function Tf(t,e,l,a){Hl?Kl?Kl.push(a):Kl=[a]:Hl=a,e=Rn(e,"onChange"),0<e.length&&(l=new Gn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ua=null,$a=null;function _v(t){xm(t,0)}function Qn(t){var e=Ra(t);if(hf(e))return t}function bc(t,e){if(t==="change")return e}var Ef=!1;if(Te){var ps;if(Te){var gs="oninput"in document;if(!gs){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),gs=typeof xc.oninput=="function"}ps=gs}else ps=!1;Ef=ps&&(!document.documentMode||9<document.documentMode)}function yc(){Ua&&(Ua.detachEvent("onpropertychange",Af),$a=Ua=null)}function Af(t){if(t.propertyName==="value"&&Qn($a)){var e=[];Tf(e,$a,t,lr(t)),xf(_v,e)}}function jv(t,e,l){t==="focusin"?(yc(),Ua=e,$a=l,Ua.attachEvent("onpropertychange",Af)):t==="focusout"&&yc()}function Ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn($a)}function Rv(t,e){if(t==="click")return Qn(e)}function Dv(t,e){if(t==="input"||t==="change")return Qn(e)}function Cv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:Cv;function Wa(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!tu.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sc(t,e){var l=wc(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=wc(l)}}function _f(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_f(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=dn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=dn(t.document)}return e}function sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Nv=Te&&"documentMode"in document&&11>=document.documentMode,kl=null,uu=null,Ha=null,ru=!1;function zc(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ru||kl==null||kl!==dn(a)||(a=kl,"selectionStart"in a&&sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&Wa(Ha,a)||(Ha=a,a=Rn(uu,"onSelect"),0<a.length&&(e=new Gn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=kl)))}function rl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ql={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},bs={},Of={};Te&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete ql.animationend.animation,delete ql.animationiteration.animation,delete ql.animationstart.animation),"TransitionEvent"in window||delete ql.transitionend.transition);function El(t){if(bs[t])return bs[t];if(!ql[t])return t;var e=ql[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Of)return bs[t]=e[l];return t}var Rf=El("animationend"),Df=El("animationiteration"),Cf=El("animationstart"),Mv=El("transitionrun"),Uv=El("transitionstart"),Hv=El("transitioncancel"),Nf=El("transitionend"),Mf=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function ee(t,e){Mf.set(t,e),zl(e,[t])}var mn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Gt=[],Ll=0,ur=0;function Zn(){for(var t=Ll,e=ur=Ll=0;e<t;){var l=Gt[e];Gt[e++]=null;var a=Gt[e];Gt[e++]=null;var i=Gt[e];Gt[e++]=null;var n=Gt[e];if(Gt[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}n!==0&&Uf(l,i,n)}}function Vn(t,e,l,a){Gt[Ll++]=t,Gt[Ll++]=e,Gt[Ll++]=l,Gt[Ll++]=a,ur|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function rr(t,e,l,a){return Vn(t,e,l,a),hn(t)}function Al(t,e){return Vn(t,null,null,e),hn(t)}function Uf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=t.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-Bt(l),t=n.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),n):null}function hn(t){if(50<Za)throw Za=0,Ru=null,Error(x(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Yl={};function Bv(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,l,a){return new Bv(t,e,l,a)}function cr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function we(t,e){var l=t.alternate;return l===null?(l=Nt(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Hf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ji(t,e,l,a,i,n){var s=0;if(a=t,typeof t=="function")cr(t)&&(s=1);else if(typeof t=="string")s=Gp(t,l,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ws:return t=Nt(31,l,e,i),t.elementType=Ws,t.lanes=n,t;case Nl:return hl(l.children,i,n,e);case tf:s=8,i|=24;break;case Ks:return t=Nt(12,l,e,i|2),t.elementType=Ks,t.lanes=n,t;case Js:return t=Nt(13,l,e,i),t.elementType=Js,t.lanes=n,t;case $s:return t=Nt(19,l,e,i),t.elementType=$s,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case be:s=10;break t;case ef:s=9;break t;case $u:s=11;break t;case Wu:s=14;break t;case Me:s=16,a=null;break t}s=29,l=Error(x(130,t===null?"null":typeof t,"")),a=null}return e=Nt(s,l,e,i),e.elementType=t,e.type=a,e.lanes=n,e}function hl(t,e,l,a){return t=Nt(7,t,a,e),t.lanes=l,t}function xs(t,e,l){return t=Nt(6,t,null,e),t.lanes=l,t}function Bf(t){var e=Nt(18,null,null,0);return e.stateNode=t,e}function ys(t,e,l){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Tc=new WeakMap;function Kt(t,e){if(typeof t=="object"&&t!==null){var l=Tc.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ic(e)},Tc.set(t,e),e)}return{value:t,source:e,stack:ic(e)}}var Gl=[],Xl=0,vn=null,Fa=0,Qt=[],Zt=0,tl=null,ae=1,ie="";function pe(t,e){Gl[Xl++]=Fa,Gl[Xl++]=vn,vn=t,Fa=e}function kf(t,e,l){Qt[Zt++]=ae,Qt[Zt++]=ie,Qt[Zt++]=tl,tl=t;var a=ae;t=ie;var i=32-Bt(a)-1;a&=~(1<<i),l+=1;var n=32-Bt(e)+i;if(30<n){var s=i-i%5;n=(a&(1<<s)-1).toString(32),a>>=s,i-=s,ae=1<<32-Bt(e)+i|l<<i|a,ie=n+t}else ae=1<<n|l<<i|a,ie=t}function or(t){t.return!==null&&(pe(t,1),kf(t,1,0))}function fr(t){for(;t===vn;)vn=Gl[--Xl],Gl[Xl]=null,Fa=Gl[--Xl],Gl[Xl]=null;for(;t===tl;)tl=Qt[--Zt],Qt[Zt]=null,ie=Qt[--Zt],Qt[Zt]=null,ae=Qt[--Zt],Qt[Zt]=null}function qf(t,e){Qt[Zt++]=ae,Qt[Zt++]=ie,Qt[Zt++]=tl,ae=e.id,ie=e.overflow,tl=t}var gt=null,$=null,q=!1,Ve=null,Jt=!1,ou=Error(x(519));function el(t){var e=Error(x(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(Kt(e,t)),ou}function Ec(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[pt]=t,e[Ot]=a,l){case"dialog":H("cancel",e),H("close",e);break;case"iframe":case"object":case"embed":H("load",e);break;case"video":case"audio":for(l=0;l<li.length;l++)H(li[l],e);break;case"source":H("error",e);break;case"img":case"image":case"link":H("error",e),H("load",e);break;case"details":H("toggle",e);break;case"input":H("invalid",e),vf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":H("invalid",e);break;case"textarea":H("invalid",e),gf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||wm(e.textContent,l)?(a.popover!=null&&(H("beforetoggle",e),H("toggle",e)),a.onScroll!=null&&H("scroll",e),a.onScrollEnd!=null&&H("scrollend",e),a.onClick!=null&&(e.onclick=xe),e=!0):e=!1,e||el(t,!0)}function Ac(t){for(gt=t.return;gt;)switch(gt.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:gt=gt.return}}function jl(t){if(t!==gt)return!1;if(!q)return Ac(t),q=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Uu(t.type,t.memoizedProps)),l=!l),l&&$&&el(t),Ac(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));$=mo(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));$=mo(t)}else e===27?(e=$,nl(t.type)?(t=qu,qu=null,$=t):$=e):$=gt?Wt(t.stateNode.nextSibling):null;return!0}function bl(){$=gt=null,q=!1}function ws(){var t=Ve;return t!==null&&(_t===null?_t=t:_t.push.apply(_t,t),Ve=null),t}function Ia(t){Ve===null?Ve=[t]:Ve.push(t)}var fu=ce(null),_l=null,ye=null;function He(t,e,l){K(fu,e._currentValue),e._currentValue=l}function Se(t){t._currentValue=fu.current,ht(fu)}function du(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function mu(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var s=i.child;n=n.firstContext;t:for(;n!==null;){var u=n;n=i;for(var r=0;r<e.length;r++)if(u.context===e[r]){n.lanes|=l,u=n.alternate,u!==null&&(u.lanes|=l),du(n.return,l,t),a||(s=null);break t}n=u.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(x(341));s.lanes|=l,n=s.alternate,n!==null&&(n.lanes|=l),du(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function da(t,e,l,a){t=null;for(var i=e,n=!1;i!==null;){if(!n){if(i.flags&524288)n=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(x(387));if(s=s.memoizedProps,s!==null){var u=i.type;qt(i.pendingProps.value,s.value)||(t!==null?t.push(u):t=[u])}}else if(i===rn.current){if(s=i.alternate,s===null)throw Error(x(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(ii):t=[ii])}i=i.return}t!==null&&mu(e,t,l,a),e.flags|=262144}function pn(t){for(t=t.firstContext;t!==null;){if(!qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xl(t){_l=t,ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bt(t){return Lf(_l,t)}function Mi(t,e){return _l===null&&xl(t),Lf(t,e)}function Lf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ye===null){if(t===null)throw Error(x(308));ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ye=ye.next=e;return l}var kv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},qv=ot.unstable_scheduleCallback,Lv=ot.unstable_NormalPriority,ut={$$typeof:be,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dr(){return{controller:new kv,data:new Map,refCount:0}}function hi(t){t.refCount--,t.refCount===0&&qv(Lv,function(){t.controller.abort()})}var Ba=null,hu=0,ea=0,Jl=null;function Yv(t,e){if(Ba===null){var l=Ba=[];hu=0,ea=Br(),Jl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return hu++,e.then(_c,_c),e}function _c(){if(--hu===0&&Ba!==null){Jl!==null&&(Jl.status="fulfilled");var t=Ba;Ba=null,ea=0,Jl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gv(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var jc=O.S;O.S=function(t,e){tm=Ut(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Yv(t,e),jc!==null&&jc(t,e)};var vl=ce(null);function mr(){var t=vl.current;return t!==null?t:V.pooledCache}function $i(t,e){e===null?K(vl,vl.current):K(vl,e.pool)}function Yf(){var t=mr();return t===null?null:{parent:ut._currentValue,pool:t}}var ma=Error(x(460)),hr=Error(x(474)),Kn=Error(x(542)),gn={then:function(){}};function Oc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(xe,xe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dc(t),t;default:if(typeof e.status=="string")e.then(xe,xe);else{if(t=V,t!==null&&100<t.shellSuspendCounter)throw Error(x(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dc(t),t}throw pl=e,ma}}function fl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(pl=l,ma):l}}var pl=null;function Rc(){if(pl===null)throw Error(x(459));var t=pl;return pl=null,t}function Dc(t){if(t===ma||t===Kn)throw Error(x(483))}var $l=null,Pa=0;function Ui(t){var e=Pa;return Pa+=1,$l===null&&($l=[]),Gf($l,t,e)}function za(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Hi(t,e){throw e.$$typeof===jh?Error(x(525)):(t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Xf(t){function e(f,o){if(t){var v=f.deletions;v===null?(f.deletions=[o],f.flags|=16):v.push(o)}}function l(f,o){if(!t)return null;for(;o!==null;)e(f,o),o=o.sibling;return null}function a(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function i(f,o){return f=we(f,o),f.index=0,f.sibling=null,f}function n(f,o,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<o?(f.flags|=67108866,o):v):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function s(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function u(f,o,v,g){return o===null||o.tag!==6?(o=xs(v,f.mode,g),o.return=f,o):(o=i(o,v),o.return=f,o)}function r(f,o,v,g){var z=v.type;return z===Nl?h(f,o,v.props.children,g,v.key):o!==null&&(o.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Me&&fl(z)===o.type)?(o=i(o,v.props),za(o,v),o.return=f,o):(o=Ji(v.type,v.key,v.props,null,f.mode,g),za(o,v),o.return=f,o)}function c(f,o,v,g){return o===null||o.tag!==4||o.stateNode.containerInfo!==v.containerInfo||o.stateNode.implementation!==v.implementation?(o=ys(v,f.mode,g),o.return=f,o):(o=i(o,v.children||[]),o.return=f,o)}function h(f,o,v,g,z){return o===null||o.tag!==7?(o=hl(v,f.mode,g,z),o.return=f,o):(o=i(o,v),o.return=f,o)}function d(f,o,v){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=xs(""+o,f.mode,v),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case ji:return v=Ji(o.type,o.key,o.props,null,f.mode,v),za(v,o),v.return=f,v;case ja:return o=ys(o,f.mode,v),o.return=f,o;case Me:return o=fl(o),d(f,o,v)}if(Oa(o)||ya(o))return o=hl(o,f.mode,v,null),o.return=f,o;if(typeof o.then=="function")return d(f,Ui(o),v);if(o.$$typeof===be)return d(f,Mi(f,o),v);Hi(f,o)}return null}function m(f,o,v,g){var z=o!==null?o.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return z!==null?null:u(f,o,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ji:return v.key===z?r(f,o,v,g):null;case ja:return v.key===z?c(f,o,v,g):null;case Me:return v=fl(v),m(f,o,v,g)}if(Oa(v)||ya(v))return z!==null?null:h(f,o,v,g,null);if(typeof v.then=="function")return m(f,o,Ui(v),g);if(v.$$typeof===be)return m(f,o,Mi(f,v),g);Hi(f,v)}return null}function p(f,o,v,g,z){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(v)||null,u(o,f,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ji:return f=f.get(g.key===null?v:g.key)||null,r(o,f,g,z);case ja:return f=f.get(g.key===null?v:g.key)||null,c(o,f,g,z);case Me:return g=fl(g),p(f,o,v,g,z)}if(Oa(g)||ya(g))return f=f.get(v)||null,h(o,f,g,z,null);if(typeof g.then=="function")return p(f,o,v,Ui(g),z);if(g.$$typeof===be)return p(f,o,v,Mi(o,g),z);Hi(o,g)}return null}function y(f,o,v,g){for(var z=null,j=null,T=o,_=o=0,R=null;T!==null&&_<v.length;_++){T.index>_?(R=T,T=null):R=T.sibling;var N=m(f,T,v[_],g);if(N===null){T===null&&(T=R);break}t&&T&&N.alternate===null&&e(f,T),o=n(N,o,_),j===null?z=N:j.sibling=N,j=N,T=R}if(_===v.length)return l(f,T),q&&pe(f,_),z;if(T===null){for(;_<v.length;_++)T=d(f,v[_],g),T!==null&&(o=n(T,o,_),j===null?z=T:j.sibling=T,j=T);return q&&pe(f,_),z}for(T=a(T);_<v.length;_++)R=p(T,f,_,v[_],g),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?_:R.key),o=n(R,o,_),j===null?z=R:j.sibling=R,j=R);return t&&T.forEach(function(zt){return e(f,zt)}),q&&pe(f,_),z}function w(f,o,v,g){if(v==null)throw Error(x(151));for(var z=null,j=null,T=o,_=o=0,R=null,N=v.next();T!==null&&!N.done;_++,N=v.next()){T.index>_?(R=T,T=null):R=T.sibling;var zt=m(f,T,N.value,g);if(zt===null){T===null&&(T=R);break}t&&T&&zt.alternate===null&&e(f,T),o=n(zt,o,_),j===null?z=zt:j.sibling=zt,j=zt,T=R}if(N.done)return l(f,T),q&&pe(f,_),z;if(T===null){for(;!N.done;_++,N=v.next())N=d(f,N.value,g),N!==null&&(o=n(N,o,_),j===null?z=N:j.sibling=N,j=N);return q&&pe(f,_),z}for(T=a(T);!N.done;_++,N=v.next())N=p(T,f,_,N.value,g),N!==null&&(t&&N.alternate!==null&&T.delete(N.key===null?_:N.key),o=n(N,o,_),j===null?z=N:j.sibling=N,j=N);return t&&T.forEach(function(le){return e(f,le)}),q&&pe(f,_),z}function S(f,o,v,g){if(typeof v=="object"&&v!==null&&v.type===Nl&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ji:t:{for(var z=v.key;o!==null;){if(o.key===z){if(z=v.type,z===Nl){if(o.tag===7){l(f,o.sibling),g=i(o,v.props.children),g.return=f,f=g;break t}}else if(o.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Me&&fl(z)===o.type){l(f,o.sibling),g=i(o,v.props),za(g,v),g.return=f,f=g;break t}l(f,o);break}else e(f,o);o=o.sibling}v.type===Nl?(g=hl(v.props.children,f.mode,g,v.key),g.return=f,f=g):(g=Ji(v.type,v.key,v.props,null,f.mode,g),za(g,v),g.return=f,f=g)}return s(f);case ja:t:{for(z=v.key;o!==null;){if(o.key===z)if(o.tag===4&&o.stateNode.containerInfo===v.containerInfo&&o.stateNode.implementation===v.implementation){l(f,o.sibling),g=i(o,v.children||[]),g.return=f,f=g;break t}else{l(f,o);break}else e(f,o);o=o.sibling}g=ys(v,f.mode,g),g.return=f,f=g}return s(f);case Me:return v=fl(v),S(f,o,v,g)}if(Oa(v))return y(f,o,v,g);if(ya(v)){if(z=ya(v),typeof z!="function")throw Error(x(150));return v=z.call(v),w(f,o,v,g)}if(typeof v.then=="function")return S(f,o,Ui(v),g);if(v.$$typeof===be)return S(f,o,Mi(f,v),g);Hi(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,o!==null&&o.tag===6?(l(f,o.sibling),g=i(o,v),g.return=f,f=g):(l(f,o),g=xs(v,f.mode,g),g.return=f,f=g),s(f)):l(f,o)}return function(f,o,v,g){try{Pa=0;var z=S(f,o,v,g);return $l=null,z}catch(T){if(T===ma||T===Kn)throw T;var j=Nt(29,T,null,f.mode);return j.lanes=g,j.return=f,j}finally{}}}var yl=Xf(!0),Qf=Xf(!1),Ue=!1;function vr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ke(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Je(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,L&2){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=hn(t),Uf(t,null,l),e}return Vn(t,a,e,l),hn(t)}function ka(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,rf(t,l)}}function Ss(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=s:n=n.next=s,l=l.next}while(l!==null);n===null?i=n=e:n=n.next=e}else i=n=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var pu=!1;function qa(){if(pu){var t=Jl;if(t!==null)throw t}}function La(t,e,l,a){pu=!1;var i=t.updateQueue;Ue=!1;var n=i.firstBaseUpdate,s=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var r=u,c=r.next;r.next=null,s===null?n=c:s.next=c,s=r;var h=t.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==s&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=r))}if(n!==null){var d=i.baseState;s=0,h=c=r=null,u=n;do{var m=u.lane&-536870913,p=m!==u.lane;if(p?(k&m)===m:(a&m)===m){m!==0&&m===ea&&(pu=!0),h!==null&&(h=h.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var y=t,w=u;m=e;var S=l;switch(w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(S,d,m);break t}d=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(S,d,m):y,m==null)break t;d=F({},d,m);break t;case 2:Ue=!0}}m=u.callback,m!==null&&(t.flags|=64,p&&(t.flags|=8192),p=i.callbacks,p===null?i.callbacks=[m]:p.push(m))}else p={lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=p,r=d):h=h.next=p,s|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);h===null&&(r=d),i.baseState=r,i.firstBaseUpdate=c,i.lastBaseUpdate=h,n===null&&(i.shared.lanes=0),al|=s,t.lanes=s,t.memoizedState=d}}function Zf(t,e){if(typeof t!="function")throw Error(x(191,t));t.call(e)}function Vf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Zf(l[t],e)}var la=ce(null),bn=ce(0);function Cc(t,e){t=je,K(bn,t),K(la,e),je=t|e.baseLanes}function gu(){K(bn,je),K(la,la.current)}function pr(){je=bn.current,ht(la),ht(bn)}var Lt=ce(null),$t=null;function Be(t){var e=t.alternate;K(at,at.current&1),K(Lt,t),$t===null&&(e===null||la.current!==null||e.memoizedState!==null)&&($t=t)}function bu(t){K(at,at.current),K(Lt,t),$t===null&&($t=t)}function Kf(t){t.tag===22?(K(at,at.current),K(Lt,t),$t===null&&($t=t)):ke()}function ke(){K(at,at.current),K(Lt,Lt.current)}function Ct(t){ht(Lt),$t===t&&($t=null),ht(at)}var at=ce(0);function xn(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Bu(l)||ku(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ee=0,C=null,Z=null,nt=null,yn=!1,Wl=!1,wl=!1,wn=0,ti=0,Fl=null,Xv=0;function tt(){throw Error(x(321))}function gr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!qt(t[l],e[l]))return!1;return!0}function br(t,e,l,a,i,n){return Ee=n,C=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?Td:Or,wl=!1,n=l(a,i),wl=!1,Wl&&(n=$f(e,l,a,i)),Jf(t),n}function Jf(t){O.H=ei;var e=Z!==null&&Z.next!==null;if(Ee=0,nt=Z=C=null,yn=!1,ti=0,Fl=null,e)throw Error(x(300));t===null||rt||(t=t.dependencies,t!==null&&pn(t)&&(rt=!0))}function $f(t,e,l,a){C=t;var i=0;do{if(Wl&&(Fl=null),ti=0,Wl=!1,25<=i)throw Error(x(301));if(i+=1,nt=Z=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}O.H=Ed,n=e(l,a)}while(Wl);return n}function Qv(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?vi(e):e,t=t.useState()[0],(Z!==null?Z.memoizedState:null)!==t&&(C.flags|=1024),e}function xr(){var t=wn!==0;return wn=0,t}function yr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function wr(t){if(yn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yn=!1}Ee=0,nt=Z=C=null,Wl=!1,ti=wn=0,Fl=null}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?C.memoizedState=nt=t:nt=nt.next=t,nt}function it(){if(Z===null){var t=C.alternate;t=t!==null?t.memoizedState:null}else t=Z.next;var e=nt===null?C.memoizedState:nt.next;if(e!==null)nt=e,Z=t;else{if(t===null)throw C.alternate===null?Error(x(467)):Error(x(310));Z=t,t={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},nt===null?C.memoizedState=nt=t:nt=nt.next=t}return nt}function Jn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vi(t){var e=ti;return ti+=1,Fl===null&&(Fl=[]),t=Gf(Fl,t,e),e=C,(nt===null?e.memoizedState:nt.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?Td:Or),t}function $n(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vi(t);if(t.$$typeof===be)return bt(t)}throw Error(x(438,String(t)))}function Sr(t){var e=null,l=C.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=C.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Jn(),C.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Oh;return e.index++,l}function Ae(t,e){return typeof e=="function"?e(t):e}function Wi(t){var e=it();return zr(e,Z,t)}function zr(t,e,l){var a=t.queue;if(a===null)throw Error(x(311));a.lastRenderedReducer=l;var i=t.baseQueue,n=a.pending;if(n!==null){if(i!==null){var s=i.next;i.next=n.next,n.next=s}e.baseQueue=i=n,a.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var u=s=null,r=null,c=e,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(k&d)===d:(Ee&d)===d){var m=c.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ea&&(h=!0);else if((Ee&m)===m){c=c.next,m===ea&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(u=r=d,s=n):r=r.next=d,C.lanes|=m,al|=m;d=c.action,wl&&l(n,d),n=c.hasEagerState?c.eagerState:l(n,d)}else m={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(u=r=m,s=n):r=r.next=m,C.lanes|=d,al|=d;c=c.next}while(c!==null&&c!==e);if(r===null?s=n:r.next=u,!qt(n,t.memoizedState)&&(rt=!0,h&&(l=Jl,l!==null)))throw l;t.memoizedState=n,t.baseState=s,t.baseQueue=r,a.lastRenderedState=n}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function zs(t){var e=it(),l=e.queue;if(l===null)throw Error(x(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,n=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do n=t(n,s.action),s=s.next;while(s!==i);qt(n,e.memoizedState)||(rt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),l.lastRenderedState=n}return[n,a]}function Wf(t,e,l){var a=C,i=it(),n=q;if(n){if(l===void 0)throw Error(x(407));l=l()}else l=e();var s=!qt((Z||i).memoizedState,l);if(s&&(i.memoizedState=l,rt=!0),i=i.queue,Tr(Pf.bind(null,a,i,t),[t]),i.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(a.flags|=2048,aa(9,{destroy:void 0},If.bind(null,a,i,l,e),null),V===null)throw Error(x(349));n||Ee&127||Ff(a,e,l)}return l}function Ff(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=C.updateQueue,e===null?(e=Jn(),C.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function If(t,e,l,a){e.value=l,e.getSnapshot=a,td(e)&&ed(t)}function Pf(t,e,l){return l(function(){td(e)&&ed(t)})}function td(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!qt(t,l)}catch{return!0}}function ed(t){var e=Al(t,2);e!==null&&jt(e,t,2)}function xu(t){var e=yt();if(typeof t=="function"){var l=t;if(t=l(),wl){Le(!0);try{l()}finally{Le(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:t},e}function ld(t,e,l,a){return t.baseState=l,zr(t,Z,typeof a=="function"?a:Ae)}function Zv(t,e,l,a,i){if(Fn(t))throw Error(x(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){n.listeners.push(s)}};O.T!==null?l(!0):n.isTransition=!1,a(n),l=e.pending,l===null?(n.next=e.pending=n,ad(e,n)):(n.next=l.next,e.pending=l.next=n)}}function ad(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var n=O.T,s={};O.T=s;try{var u=l(i,a),r=O.S;r!==null&&r(s,u),Nc(t,e,u)}catch(c){yu(t,e,c)}finally{n!==null&&s.types!==null&&(n.types=s.types),O.T=n}}else try{n=l(i,a),Nc(t,e,n)}catch(c){yu(t,e,c)}}function Nc(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Mc(t,e,a)},function(a){return yu(t,e,a)}):Mc(t,e,l)}function Mc(t,e,l){e.status="fulfilled",e.value=l,id(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,ad(t,l)))}function yu(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,id(e),e=e.next;while(e!==a)}t.action=null}function id(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function nd(t,e){return e}function Uc(t,e){if(q){var l=V.formState;if(l!==null){t:{var a=C;if(q){if($){e:{for(var i=$,n=Jt;i.nodeType!==8;){if(!n){i=null;break e}if(i=Wt(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){$=Wt(i.nextSibling),a=i.data==="F!";break t}}el(a)}a=!1}a&&(e=l[0])}}return l=yt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:e},l.queue=a,l=wd.bind(null,C,a),a.dispatch=l,a=xu(!1),n=jr.bind(null,C,!1,a.queue),a=yt(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Zv.bind(null,C,i,n,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Hc(t){var e=it();return sd(e,Z,t)}function sd(t,e,l){if(e=zr(t,e,nd)[0],t=Wi(Ae)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=vi(e)}catch(s){throw s===ma?Kn:s}else a=e;e=it();var i=e.queue,n=i.dispatch;return l!==e.memoizedState&&(C.flags|=2048,aa(9,{destroy:void 0},Vv.bind(null,i,l),null)),[a,n,t]}function Vv(t,e){t.action=e}function Bc(t){var e=it(),l=Z;if(l!==null)return sd(e,l,t);it(),e=e.memoizedState,l=it();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function aa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=C.updateQueue,e===null&&(e=Jn(),C.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ud(){return it().memoizedState}function Fi(t,e,l,a){var i=yt();C.flags|=t,i.memoizedState=aa(1|e,{destroy:void 0},l,a===void 0?null:a)}function Wn(t,e,l,a){var i=it();a=a===void 0?null:a;var n=i.memoizedState.inst;Z!==null&&a!==null&&gr(a,Z.memoizedState.deps)?i.memoizedState=aa(e,n,l,a):(C.flags|=t,i.memoizedState=aa(1|e,n,l,a))}function kc(t,e){Fi(8390656,8,t,e)}function Tr(t,e){Wn(2048,8,t,e)}function Kv(t){C.flags|=4;var e=C.updateQueue;if(e===null)e=Jn(),C.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function rd(t){var e=it().memoizedState;return Kv({ref:e,nextImpl:t}),function(){if(L&2)throw Error(x(440));return e.impl.apply(void 0,arguments)}}function cd(t,e){return Wn(4,2,t,e)}function od(t,e){return Wn(4,4,t,e)}function fd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dd(t,e,l){l=l!=null?l.concat([t]):null,Wn(4,4,fd.bind(null,e,t),l)}function Er(){}function md(t,e){var l=it();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&gr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function hd(t,e){var l=it();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&gr(e,a[1]))return a[0];if(a=t(),wl){Le(!0);try{t()}finally{Le(!1)}}return l.memoizedState=[a,e],a}function Ar(t,e,l){return l===void 0||Ee&1073741824&&!(k&261930)?t.memoizedState=e:(t.memoizedState=l,t=lm(),C.lanes|=t,al|=t,l)}function vd(t,e,l,a){return qt(l,e)?l:la.current!==null?(t=Ar(t,l,a),qt(t,e)||(rt=!0),t):!(Ee&42)||Ee&1073741824&&!(k&261930)?(rt=!0,t.memoizedState=l):(t=lm(),C.lanes|=t,al|=t,e)}function pd(t,e,l,a,i){var n=Y.p;Y.p=n!==0&&8>n?n:8;var s=O.T,u={};O.T=u,jr(t,!1,e,l);try{var r=i(),c=O.S;if(c!==null&&c(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=Gv(r,a);Ya(t,e,h,kt(t))}else Ya(t,e,a,kt(t))}catch(d){Ya(t,e,{then:function(){},status:"rejected",reason:d},kt())}finally{Y.p=n,s!==null&&u.types!==null&&(s.types=u.types),O.T=s}}function Jv(){}function wu(t,e,l,a){if(t.tag!==5)throw Error(x(476));var i=gd(t).queue;pd(t,i,e,ml,l===null?Jv:function(){return bd(t),l(a)})}function gd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ml,baseState:ml,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:ml},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bd(t){var e=gd(t);e.next===null&&(e=t.alternate.memoizedState),Ya(t,e.next.queue,{},kt())}function _r(){return bt(ii)}function xd(){return it().memoizedState}function yd(){return it().memoizedState}function $v(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=kt();t=Ke(l);var a=Je(e,t,l);a!==null&&(jt(a,e,l),ka(a,e,l)),e={cache:dr()},t.payload=e;return}e=e.return}}function Wv(t,e,l){var a=kt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Fn(t)?Sd(e,l):(l=rr(t,e,l,a),l!==null&&(jt(l,t,a),zd(l,e,a)))}function wd(t,e,l){var a=kt();Ya(t,e,l,a)}function Ya(t,e,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Fn(t))Sd(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var s=e.lastRenderedState,u=n(s,l);if(i.hasEagerState=!0,i.eagerState=u,qt(u,s))return Vn(t,e,i,0),V===null&&Zn(),!1}catch{}finally{}if(l=rr(t,e,i,a),l!==null)return jt(l,t,a),zd(l,e,a),!0}return!1}function jr(t,e,l,a){if(a={lane:2,revertLane:Br(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fn(t)){if(e)throw Error(x(479))}else e=rr(t,l,a,2),e!==null&&jt(e,t,2)}function Fn(t){var e=t.alternate;return t===C||e!==null&&e===C}function Sd(t,e){Wl=yn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function zd(t,e,l){if(l&4194048){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,rf(t,l)}}var ei={readContext:bt,use:$n,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};ei.useEffectEvent=tt;var Td={readContext:bt,use:$n,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:kc,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Fi(4194308,4,fd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Fi(4194308,4,t,e)},useInsertionEffect:function(t,e){Fi(4,2,t,e)},useMemo:function(t,e){var l=yt();e=e===void 0?null:e;var a=t();if(wl){Le(!0);try{t()}finally{Le(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=yt();if(l!==void 0){var i=l(e);if(wl){Le(!0);try{l(e)}finally{Le(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Wv.bind(null,C,t),[a.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:function(t){t=xu(t);var e=t.queue,l=wd.bind(null,C,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Er,useDeferredValue:function(t,e){var l=yt();return Ar(l,t,e)},useTransition:function(){var t=xu(!1);return t=pd.bind(null,C,t.queue,!0,!1),yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=C,i=yt();if(q){if(l===void 0)throw Error(x(407));l=l()}else{if(l=e(),V===null)throw Error(x(349));k&127||Ff(a,e,l)}i.memoizedState=l;var n={value:l,getSnapshot:e};return i.queue=n,kc(Pf.bind(null,a,n,t),[t]),a.flags|=2048,aa(9,{destroy:void 0},If.bind(null,a,n,l,e),null),l},useId:function(){var t=yt(),e=V.identifierPrefix;if(q){var l=ie,a=ae;l=(a&~(1<<32-Bt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=wn++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Xv++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:_r,useFormState:Uc,useActionState:Uc,useOptimistic:function(t){var e=yt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jr.bind(null,C,!0,l),l.dispatch=e,[t,e]},useMemoCache:Sr,useCacheRefresh:function(){return yt().memoizedState=$v.bind(null,C)},useEffectEvent:function(t){var e=yt(),l={impl:t};return e.memoizedState=l,function(){if(L&2)throw Error(x(440));return l.impl.apply(void 0,arguments)}}},Or={readContext:bt,use:$n,useCallback:md,useContext:bt,useEffect:Tr,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:od,useMemo:hd,useReducer:Wi,useRef:ud,useState:function(){return Wi(Ae)},useDebugValue:Er,useDeferredValue:function(t,e){var l=it();return vd(l,Z.memoizedState,t,e)},useTransition:function(){var t=Wi(Ae)[0],e=it().memoizedState;return[typeof t=="boolean"?t:vi(t),e]},useSyncExternalStore:Wf,useId:xd,useHostTransitionStatus:_r,useFormState:Hc,useActionState:Hc,useOptimistic:function(t,e){var l=it();return ld(l,Z,t,e)},useMemoCache:Sr,useCacheRefresh:yd};Or.useEffectEvent=rd;var Ed={readContext:bt,use:$n,useCallback:md,useContext:bt,useEffect:Tr,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:od,useMemo:hd,useReducer:zs,useRef:ud,useState:function(){return zs(Ae)},useDebugValue:Er,useDeferredValue:function(t,e){var l=it();return Z===null?Ar(l,t,e):vd(l,Z.memoizedState,t,e)},useTransition:function(){var t=zs(Ae)[0],e=it().memoizedState;return[typeof t=="boolean"?t:vi(t),e]},useSyncExternalStore:Wf,useId:xd,useHostTransitionStatus:_r,useFormState:Bc,useActionState:Bc,useOptimistic:function(t,e){var l=it();return Z!==null?ld(l,Z,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:yd};Ed.useEffectEvent=rd;function Ts(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:F({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Su={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=kt(),i=Ke(a);i.payload=e,l!=null&&(i.callback=l),e=Je(t,i,a),e!==null&&(jt(e,t,a),ka(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=kt(),i=Ke(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Je(t,i,a),e!==null&&(jt(e,t,a),ka(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=kt(),a=Ke(l);a.tag=2,e!=null&&(a.callback=e),e=Je(t,a,l),e!==null&&(jt(e,t,l),ka(e,t,l))}};function qc(t,e,l,a,i,n,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,s):e.prototype&&e.prototype.isPureReactComponent?!Wa(l,a)||!Wa(i,n):!0}function Lc(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Sl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=F({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}function Ad(t){mn(t)}function _d(t){console.error(t)}function jd(t){mn(t)}function Sn(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Yc(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function zu(t,e,l){return l=Ke(l),l.tag=3,l.payload={element:null},l.callback=function(){Sn(t,e)},l}function Od(t){return t=Ke(t),t.tag=3,t}function Rd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;t.payload=function(){return i(n)},t.callback=function(){Yc(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yc(e,l,a),typeof i!="function"&&($e===null?$e=new Set([this]):$e.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function Fv(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&da(e,l,i,!0),l=Lt.current,l!==null){switch(l.tag){case 31:case 13:return $t===null?_n():l.alternate===null&&et===0&&(et=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===gn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Us(t,a,i)),!1;case 22:return l.flags|=65536,a===gn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Us(t,a,i)),!1}throw Error(x(435,l.tag))}return Us(t,a,i),_n(),!1}if(q)return e=Lt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==ou&&(t=Error(x(422),{cause:a}),Ia(Kt(t,l)))):(a!==ou&&(e=Error(x(423),{cause:a}),Ia(Kt(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Kt(a,l),i=zu(t.stateNode,a,i),Ss(t,i),et!==4&&(et=2)),!1;var n=Error(x(520),{cause:a});if(n=Kt(n,l),Qa===null?Qa=[n]:Qa.push(n),et!==4&&(et=2),e===null)return!0;a=Kt(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=zu(l.stateNode,a,t),Ss(l,t),!1;case 1:if(e=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&($e===null||!$e.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Od(i),Rd(i,t,l,a),Ss(l,i),!1}l=l.return}while(l!==null);return!1}var Rr=Error(x(461)),rt=!1;function vt(t,e,l,a){e.child=t===null?Qf(e,null,l,a):yl(e,t.child,l,a)}function Gc(t,e,l,a,i){l=l.render;var n=e.ref;if("ref"in a){var s={};for(var u in a)u!=="ref"&&(s[u]=a[u])}else s=a;return xl(e),a=br(t,e,l,s,n,i),u=xr(),t!==null&&!rt?(yr(t,e,i),_e(t,e,i)):(q&&u&&or(e),e.flags|=1,vt(t,e,a,i),e.child)}function Xc(t,e,l,a,i){if(t===null){var n=l.type;return typeof n=="function"&&!cr(n)&&n.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=n,Dd(t,e,n,a,i)):(t=Ji(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!Dr(t,i)){var s=n.memoizedProps;if(l=l.compare,l=l!==null?l:Wa,l(s,a)&&t.ref===e.ref)return _e(t,e,i)}return e.flags|=1,t=we(n,a),t.ref=e.ref,t.return=e,e.child=t}function Dd(t,e,l,a,i){if(t!==null){var n=t.memoizedProps;if(Wa(n,a)&&t.ref===e.ref)if(rt=!1,e.pendingProps=a=n,Dr(t,i))t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,_e(t,e,i)}return Tu(t,e,l,a,i)}function Cd(t,e,l,a){var i=a.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(e.flags&128){if(n=n!==null?n.baseLanes|l:l,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,e.child=null;return Qc(t,e,n,l,a)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&$i(e,n!==null?n.cachePool:null),n!==null?Cc(e,n):gu(),Kf(e);else return a=e.lanes=536870912,Qc(t,e,n!==null?n.baseLanes|l:l,l,a)}else n!==null?($i(e,n.cachePool),Cc(e,n),ke(),e.memoizedState=null):(t!==null&&$i(e,null),gu(),ke());return vt(t,e,i,l),e.child}function Da(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qc(t,e,l,a,i){var n=mr();return n=n===null?null:{parent:ut._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&$i(e,null),gu(),Kf(e),t!==null&&da(t,e,a,!0),e.childLanes=i,null}function Ii(t,e){return e=zn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Zc(t,e,l){return yl(e,t.child,null,l),t=Ii(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function Iv(t,e,l){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(q){if(a.mode==="hidden")return t=Ii(e,a),e.lanes=536870912,Da(null,t);if(bu(e),(t=$)?(t=Tm(t,Jt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:tl!==null?{id:ae,overflow:ie}:null,retryLane:536870912,hydrationErrors:null},l=Bf(t),l.return=e,e.child=l,gt=e,$=null)):t=null,t===null)throw el(e);return e.lanes=536870912,null}return Ii(e,a)}var n=t.memoizedState;if(n!==null){var s=n.dehydrated;if(bu(e),i)if(e.flags&256)e.flags&=-257,e=Zc(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(x(558));else if(rt||da(t,e,l,!1),i=(l&t.childLanes)!==0,rt||i){if(a=V,a!==null&&(s=cf(a,l),s!==0&&s!==n.retryLane))throw n.retryLane=s,Al(t,s),jt(a,t,s),Rr;_n(),e=Zc(t,e,l)}else t=n.treeContext,$=Wt(s.nextSibling),gt=e,q=!0,Ve=null,Jt=!1,t!==null&&qf(e,t),e=Ii(e,a),e.flags|=4096;return e}return t=we(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Pi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(x(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Tu(t,e,l,a,i){return xl(e),l=br(t,e,l,a,void 0,i),a=xr(),t!==null&&!rt?(yr(t,e,i),_e(t,e,i)):(q&&a&&or(e),e.flags|=1,vt(t,e,l,i),e.child)}function Vc(t,e,l,a,i,n){return xl(e),e.updateQueue=null,l=$f(e,a,l,i),Jf(t),a=xr(),t!==null&&!rt?(yr(t,e,n),_e(t,e,n)):(q&&a&&or(e),e.flags|=1,vt(t,e,l,n),e.child)}function Kc(t,e,l,a,i){if(xl(e),e.stateNode===null){var n=Yl,s=l.contextType;typeof s=="object"&&s!==null&&(n=bt(s)),n=new l(a,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Su,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=a,n.state=e.memoizedState,n.refs={},vr(e),s=l.contextType,n.context=typeof s=="object"&&s!==null?bt(s):Yl,n.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Ts(e,l,s,a),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(s=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),s!==n.state&&Su.enqueueReplaceState(n,n.state,null),La(e,a,n,i),qa(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){n=e.stateNode;var u=e.memoizedProps,r=Sl(l,u);n.props=r;var c=n.context,h=l.contextType;s=Yl,typeof h=="object"&&h!==null&&(s=bt(h));var d=l.getDerivedStateFromProps;h=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u||c!==s)&&Lc(e,n,a,s),Ue=!1;var m=e.memoizedState;n.state=m,La(e,a,n,i),qa(),c=e.memoizedState,u||m!==c||Ue?(typeof d=="function"&&(Ts(e,l,d,a),c=e.memoizedState),(r=Ue||qc(e,l,r,a,m,c,s))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=c),n.props=a,n.state=c,n.context=s,a=r):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{n=e.stateNode,vu(t,e),s=e.memoizedProps,h=Sl(l,s),n.props=h,d=e.pendingProps,m=n.context,c=l.contextType,r=Yl,typeof c=="object"&&c!==null&&(r=bt(c)),u=l.getDerivedStateFromProps,(c=typeof u=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==d||m!==r)&&Lc(e,n,a,r),Ue=!1,m=e.memoizedState,n.state=m,La(e,a,n,i),qa();var p=e.memoizedState;s!==d||m!==p||Ue||t!==null&&t.dependencies!==null&&pn(t.dependencies)?(typeof u=="function"&&(Ts(e,l,u,a),p=e.memoizedState),(h=Ue||qc(e,l,h,a,m,p,r)||t!==null&&t.dependencies!==null&&pn(t.dependencies))?(c||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,p,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,p,r)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=p),n.props=a,n.state=p,n.context=r,a=h):(typeof n.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),a=!1)}return n=a,Pi(t,e),a=(e.flags&128)!==0,n||a?(n=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&a?(e.child=yl(e,t.child,null,i),e.child=yl(e,null,l,i)):vt(t,e,l,i),e.memoizedState=n.state,t=e.child):t=_e(t,e,i),t}function Jc(t,e,l,a){return bl(),e.flags|=256,vt(t,e,l,a),e.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function As(t){return{baseLanes:t,cachePool:Yf()}}function _s(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Mt),t}function Nd(t,e,l){var a=e.pendingProps,i=!1,n=(e.flags&128)!==0,s;if((s=n)||(s=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(q){if(i?Be(e):ke(),(t=$)?(t=Tm(t,Jt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:tl!==null?{id:ae,overflow:ie}:null,retryLane:536870912,hydrationErrors:null},l=Bf(t),l.return=e,e.child=l,gt=e,$=null)):t=null,t===null)throw el(e);return ku(t)?e.lanes=32:e.lanes=536870912,null}var u=a.children;return a=a.fallback,i?(ke(),i=e.mode,u=zn({mode:"hidden",children:u},i),a=hl(a,i,l,null),u.return=e,a.return=e,u.sibling=a,e.child=u,a=e.child,a.memoizedState=As(l),a.childLanes=_s(t,s,l),e.memoizedState=Es,Da(null,a)):(Be(e),Eu(e,u))}var r=t.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(n)e.flags&256?(Be(e),e.flags&=-257,e=js(t,e,l)):e.memoizedState!==null?(ke(),e.child=t.child,e.flags|=128,e=null):(ke(),u=a.fallback,i=e.mode,a=zn({mode:"visible",children:a.children},i),u=hl(u,i,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,yl(e,t.child,null,l),a=e.child,a.memoizedState=As(l),a.childLanes=_s(t,s,l),e.memoizedState=Es,e=Da(null,a));else if(Be(e),ku(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var c=s.dgst;s=c,a=Error(x(419)),a.stack="",a.digest=s,Ia({value:a,source:null,stack:null}),e=js(t,e,l)}else if(rt||da(t,e,l,!1),s=(l&t.childLanes)!==0,rt||s){if(s=V,s!==null&&(a=cf(s,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,Al(t,a),jt(s,t,a),Rr;Bu(u)||_n(),e=js(t,e,l)}else Bu(u)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,$=Wt(u.nextSibling),gt=e,q=!0,Ve=null,Jt=!1,t!==null&&qf(e,t),e=Eu(e,a.children),e.flags|=4096);return e}return i?(ke(),u=a.fallback,i=e.mode,r=t.child,c=r.sibling,a=we(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,c!==null?u=we(c,u):(u=hl(u,i,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,Da(null,a),a=e.child,u=t.child.memoizedState,u===null?u=As(l):(i=u.cachePool,i!==null?(r=ut._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Yf(),u={baseLanes:u.baseLanes|l,cachePool:i}),a.memoizedState=u,a.childLanes=_s(t,s,l),e.memoizedState=Es,Da(t.child,a)):(Be(e),l=t.child,t=l.sibling,l=we(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Eu(t,e){return e=zn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function zn(t,e){return t=Nt(22,t,null,e),t.lanes=0,t}function js(t,e,l){return yl(e,t.child,null,l),t=Eu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $c(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),du(t.return,e,l)}function Os(t,e,l,a,i,n){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=l,s.tailMode=i,s.treeForkCount=n)}function Md(t,e,l){var a=e.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var s=at.current,u=(s&2)!==0;if(u?(s=s&1|2,e.flags|=128):s&=1,K(at,s),vt(t,e,a,l),a=q?Fa:0,!u&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$c(t,l,e);else if(t.tag===19)$c(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&xn(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Os(e,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xn(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Os(e,!0,l,null,n,a);break;case"together":Os(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function _e(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),al|=e.lanes,!(l&e.childLanes))if(t!==null){if(da(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,l=we(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=we(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Dr(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&pn(t)))}function Pv(t,e,l){switch(e.tag){case 3:cn(e,e.stateNode.containerInfo),He(e,ut,t.memoizedState.cache),bl();break;case 27:case 5:Ps(e);break;case 4:cn(e,e.stateNode.containerInfo);break;case 10:He(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,bu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Be(e),e.flags|=128,null):l&e.child.childLanes?Nd(t,e,l):(Be(e),t=_e(t,e,l),t!==null?t.sibling:null);Be(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(da(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return Md(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(at,at.current),a)break;return null;case 22:return e.lanes=0,Cd(t,e,l,e.pendingProps);case 24:He(e,ut,t.memoizedState.cache)}return _e(t,e,l)}function Ud(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)rt=!0;else{if(!Dr(t,l)&&!(e.flags&128))return rt=!1,Pv(t,e,l);rt=!!(t.flags&131072)}else rt=!1,q&&e.flags&1048576&&kf(e,Fa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=fl(e.elementType),e.type=t,typeof t=="function")cr(t)?(a=Sl(t,a),e.tag=1,e=Kc(null,e,t,a,l)):(e.tag=0,e=Tu(null,e,t,a,l));else{if(t!=null){var i=t.$$typeof;if(i===$u){e.tag=11,e=Gc(null,e,t,a,l);break t}else if(i===Wu){e.tag=14,e=Xc(null,e,t,a,l);break t}}throw e=Fs(t)||t,Error(x(306,e,""))}}return e;case 0:return Tu(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=Sl(a,e.pendingProps),Kc(t,e,a,i,l);case 3:t:{if(cn(e,e.stateNode.containerInfo),t===null)throw Error(x(387));a=e.pendingProps;var n=e.memoizedState;i=n.element,vu(t,e),La(e,a,null,l);var s=e.memoizedState;if(a=s.cache,He(e,ut,a),a!==n.cache&&mu(e,[ut],l,!0),qa(),a=s.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=Jc(t,e,a,l);break t}else if(a!==i){i=Kt(Error(x(424)),e),Ia(i),e=Jc(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($=Wt(t.firstChild),gt=e,q=!0,Ve=null,Jt=!0,l=Qf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(bl(),a===i){e=_e(t,e,l);break t}vt(t,e,a,l)}e=e.child}return e;case 26:return Pi(t,e),t===null?(l=po(e.type,null,e.pendingProps,null))?e.memoizedState=l:q||(l=e.type,t=e.pendingProps,a=Dn(Ze.current).createElement(l),a[pt]=e,a[Ot]=t,xt(a,l,t),mt(a),e.stateNode=a):e.memoizedState=po(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ps(e),t===null&&q&&(a=e.stateNode=Em(e.type,e.pendingProps,Ze.current),gt=e,Jt=!0,i=$,nl(e.type)?(qu=i,$=Wt(a.firstChild)):$=i),vt(t,e,e.pendingProps.children,l),Pi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&q&&((i=a=$)&&(a=Op(a,e.type,e.pendingProps,Jt),a!==null?(e.stateNode=a,gt=e,$=Wt(a.firstChild),Jt=!1,i=!0):i=!1),i||el(e)),Ps(e),i=e.type,n=e.pendingProps,s=t!==null?t.memoizedProps:null,a=n.children,Uu(i,n)?a=null:s!==null&&Uu(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=br(t,e,Qv,null,null,l),ii._currentValue=i),Pi(t,e),vt(t,e,a,l),e.child;case 6:return t===null&&q&&((t=l=$)&&(l=Rp(l,e.pendingProps,Jt),l!==null?(e.stateNode=l,gt=e,$=null,t=!0):t=!1),t||el(e)),null;case 13:return Nd(t,e,l);case 4:return cn(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=yl(e,null,a,l):vt(t,e,a,l),e.child;case 11:return Gc(t,e,e.type,e.pendingProps,l);case 7:return vt(t,e,e.pendingProps,l),e.child;case 8:return vt(t,e,e.pendingProps.children,l),e.child;case 12:return vt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,He(e,e.type,a.value),vt(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,xl(e),i=bt(i),a=a(i),e.flags|=1,vt(t,e,a,l),e.child;case 14:return Xc(t,e,e.type,e.pendingProps,l);case 15:return Dd(t,e,e.type,e.pendingProps,l);case 19:return Md(t,e,l);case 31:return Iv(t,e,l);case 22:return Cd(t,e,l,e.pendingProps);case 24:return xl(e),a=bt(ut),t===null?(i=mr(),i===null&&(i=V,n=dr(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),e.memoizedState={parent:a,cache:i},vr(e),He(e,ut,i)):(t.lanes&l&&(vu(t,e),La(e,null,null,l),qa()),i=t.memoizedState,n=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),He(e,ut,a)):(a=n.cache,He(e,ut,a),a!==i.cache&&mu(e,[ut],l,!0))),vt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(x(156,e.tag))}function de(t){t.flags|=4}function Rs(t,e,l,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(nm())t.flags|=8192;else throw pl=gn,hr}else t.flags&=-16777217}function Wc(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!jm(e))if(nm())t.flags|=8192;else throw pl=gn,hr}function Bi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?sf():536870912,t.lanes|=e,ia|=e)}function Ta(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function J(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function tp(t,e,l){var a=e.pendingProps;switch(fr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(e),null;case 1:return J(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Se(ut),Il(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(jl(e)?de(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ws())),J(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(de(e),n!==null?(J(e),Wc(e,n)):(J(e),Rs(e,i,null,a,l))):n?n!==t.memoizedState?(de(e),J(e),Wc(e,n)):(J(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&de(e),J(e),Rs(e,i,t,a,l)),null;case 27:if(on(e),l=Ze.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&de(e);else{if(!a){if(e.stateNode===null)throw Error(x(166));return J(e),null}t=se.current,jl(e)?Ec(e):(t=Em(i,a,l),e.stateNode=t,de(e))}return J(e),null;case 5:if(on(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&de(e);else{if(!a){if(e.stateNode===null)throw Error(x(166));return J(e),null}if(n=se.current,jl(e))Ec(e);else{var s=Dn(Ze.current);switch(n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}n[pt]=e,n[Ot]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=n;t:switch(xt(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&de(e)}}return J(e),Rs(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&de(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(x(166));if(t=Ze.current,jl(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=gt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[pt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wm(t.nodeValue,l)),t||el(e,!0)}else t=Dn(t).createTextNode(a),t[pt]=e,e.stateNode=t}return J(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=jl(e),l!==null){if(t===null){if(!a)throw Error(x(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(557));t[pt]=e}else bl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;J(e),t=!1}else l=ws(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if(e.flags&128)throw Error(x(558))}return J(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=jl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(x(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[pt]=e}else bl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;J(e),i=!1}else i=ws(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),e.flags&128?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Bi(e,e.updateQueue),J(e),null);case 4:return Il(),t===null&&kr(e.stateNode.containerInfo),J(e),null;case 10:return Se(e.type),J(e),null;case 19:if(ht(at),a=e.memoizedState,a===null)return J(e),null;if(i=(e.flags&128)!==0,n=a.rendering,n===null)if(i)Ta(a,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(n=xn(t),n!==null){for(e.flags|=128,Ta(a,!1),t=n.updateQueue,e.updateQueue=t,Bi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Hf(l,t),l=l.sibling;return K(at,at.current&1|2),q&&pe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ut()>En&&(e.flags|=128,i=!0,Ta(a,!1),e.lanes=4194304)}else{if(!i)if(t=xn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Bi(e,t),Ta(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!q)return J(e),null}else 2*Ut()-a.renderingStartTime>En&&l!==536870912&&(e.flags|=128,i=!0,Ta(a,!1),e.lanes=4194304);a.isBackwards?(n.sibling=e.child,e.child=n):(t=a.last,t!==null?t.sibling=n:e.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ut(),t.sibling=null,l=at.current,K(at,i?l&1|2:l&1),q&&pe(e,a.treeForkCount),t):(J(e),null);case 22:case 23:return Ct(e),pr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(J(e),e.subtreeFlags&6&&(e.flags|=8192)):J(e),l=e.updateQueue,l!==null&&Bi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&ht(vl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Se(ut),J(e),null;case 25:return null;case 30:return null}throw Error(x(156,e.tag))}function ep(t,e){switch(fr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Se(ut),Il(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(x(340));bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(at),null;case 4:return Il(),null;case 10:return Se(e.type),null;case 22:case 23:return Ct(e),pr(),t!==null&&ht(vl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Se(ut),null;case 25:return null;default:return null}}function Hd(t,e){switch(fr(e),e.tag){case 3:Se(ut),Il();break;case 26:case 27:case 5:on(e);break;case 4:Il();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:ht(at);break;case 10:Se(e.type);break;case 22:case 23:Ct(e),pr(),t!==null&&ht(vl);break;case 24:Se(ut)}}function pi(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var n=l.create,s=l.inst;a=n(),s.destroy=a}l=l.next}while(l!==i)}}catch(u){X(e,e.return,u)}}function ll(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){var s=a.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,i=e;var r=l,c=u;try{c()}catch(h){X(i,r,h)}}}a=a.next}while(a!==n)}}catch(h){X(e,e.return,h)}}function Bd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Vf(e,l)}catch(a){X(t,t.return,a)}}}function kd(t,e,l){l.props=Sl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){X(t,e,a)}}function Ga(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){X(t,e,i)}}function ne(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){X(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){X(t,e,i)}else l.current=null}function qd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){X(t,t.return,i)}}function Ds(t,e,l){try{var a=t.stateNode;zp(a,t.type,l,e),a[Ot]=e}catch(i){X(t,t.return,i)}}function Ld(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nl(t.type)||t.tag===4}function Cs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ld(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=xe));else if(a!==4&&(a===27&&nl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Au(t,e,l),t=t.sibling;t!==null;)Au(t,e,l),t=t.sibling}function Tn(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&nl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Tn(t,e,l),t=t.sibling;t!==null;)Tn(t,e,l),t=t.sibling}function Yd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);xt(e,a,l),e[pt]=t,e[Ot]=l}catch(n){X(t,t.return,n)}}var ge=!1,st=!1,Ns=!1,Fc=typeof WeakSet=="function"?WeakSet:Set,dt=null;function lp(t,e){if(t=t.containerInfo,Nu=Un,t=jf(t),sr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var s=0,u=-1,r=-1,c=0,h=0,d=t,m=null;e:for(;;){for(var p;d!==l||i!==0&&d.nodeType!==3||(u=s+i),d!==n||a!==0&&d.nodeType!==3||(r=s+a),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)m=d,d=p;for(;;){if(d===t)break e;if(m===l&&++c===i&&(u=s),m===n&&++h===a&&(r=s),(p=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=p}l=u===-1||r===-1?null:{start:u,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mu={focusedElem:t,selectionRange:l},Un=!1,dt=e;dt!==null;)if(e=dt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,dt=t;else for(;dt!==null;){switch(e=dt,n=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)i=t[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&n!==null){t=void 0,l=e,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var y=Sl(l.type,i);t=a.getSnapshotBeforeUpdate(y,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(w){X(l,l.return,w)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Hu(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(x(163))}if(t=e.sibling,t!==null){t.return=e.return,dt=t;break}dt=e.return}}function Gd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:he(t,l),a&4&&pi(5,l);break;case 1:if(he(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){X(l,l.return,s)}else{var i=Sl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){X(l,l.return,s)}}a&64&&Bd(l),a&512&&Ga(l,l.return);break;case 3:if(he(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Vf(t,e)}catch(s){X(l,l.return,s)}}break;case 27:e===null&&a&4&&Yd(l);case 26:case 5:he(t,l),e===null&&a&4&&qd(l),a&512&&Ga(l,l.return);break;case 12:he(t,l);break;case 31:he(t,l),a&4&&Zd(t,l);break;case 13:he(t,l),a&4&&Vd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=fp.bind(null,l),Dp(t,l))));break;case 22:if(a=l.memoizedState!==null||ge,!a){e=e!==null&&e.memoizedState!==null||st,i=ge;var n=st;ge=a,(st=e)&&!n?ve(t,l,(l.subtreeFlags&8772)!==0):he(t,l),ge=i,st=n}break;case 30:break;default:he(t,l)}}function Xd(t){var e=t.alternate;e!==null&&(t.alternate=null,Xd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var I=null,At=!1;function me(t,e,l){for(l=l.child;l!==null;)Qd(t,e,l),l=l.sibling}function Qd(t,e,l){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ci,l)}catch{}switch(l.tag){case 26:st||ne(l,e),me(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:st||ne(l,e);var a=I,i=At;nl(l.type)&&(I=l.stateNode,At=!1),me(t,e,l),Va(l.stateNode),I=a,At=i;break;case 5:st||ne(l,e);case 6:if(a=I,i=At,I=null,me(t,e,l),I=a,At=i,I!==null)if(At)try{(I.nodeType===9?I.body:I.nodeName==="HTML"?I.ownerDocument.body:I).removeChild(l.stateNode)}catch(n){X(l,e,n)}else try{I.removeChild(l.stateNode)}catch(n){X(l,e,n)}break;case 18:I!==null&&(At?(t=I,oo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ra(t)):oo(I,l.stateNode));break;case 4:a=I,i=At,I=l.stateNode.containerInfo,At=!0,me(t,e,l),I=a,At=i;break;case 0:case 11:case 14:case 15:ll(2,l,e),st||ll(4,l,e),me(t,e,l);break;case 1:st||(ne(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&kd(l,e,a)),me(t,e,l);break;case 21:me(t,e,l);break;case 22:st=(a=st)||l.memoizedState!==null,me(t,e,l),st=a;break;default:me(t,e,l)}}function Zd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ra(t)}catch(l){X(e,e.return,l)}}}function Vd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ra(t)}catch(l){X(e,e.return,l)}}function ap(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Fc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Fc),e;default:throw Error(x(435,t.tag))}}function ki(t,e){var l=ap(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var i=dp.bind(null,t,a);a.then(i,i)}})}function Tt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=t,s=e,u=s;t:for(;u!==null;){switch(u.tag){case 27:if(nl(u.type)){I=u.stateNode,At=!1;break t}break;case 5:I=u.stateNode,At=!1;break t;case 3:case 4:I=u.stateNode.containerInfo,At=!0;break t}u=u.return}if(I===null)throw Error(x(160));Qd(n,s,i),I=null,At=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Kd(e,t),e=e.sibling}var te=null;function Kd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tt(e,t),Et(t),a&4&&(ll(3,t,t.return),pi(3,t),ll(5,t,t.return));break;case 1:Tt(e,t),Et(t),a&512&&(st||l===null||ne(l,l.return)),a&64&&ge&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=te;if(Tt(e,t),Et(t),a&512&&(st||l===null||ne(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[di]||n[pt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),xt(n,a,l),n[pt]=t,mt(n),a=n;break t;case"link":var s=bo("link","href",i).get(a+(l.href||""));if(s){for(var u=0;u<s.length;u++)if(n=s[u],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(u,1);break e}}n=i.createElement(a),xt(n,a,l),i.head.appendChild(n);break;case"meta":if(s=bo("meta","content",i).get(a+(l.content||""))){for(u=0;u<s.length;u++)if(n=s[u],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(u,1);break e}}n=i.createElement(a),xt(n,a,l),i.head.appendChild(n);break;default:throw Error(x(468,a))}n[pt]=t,mt(n),a=n}t.stateNode=a}else xo(i,t.type,t.stateNode);else t.stateNode=go(i,a,t.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?xo(i,t.type,t.stateNode):go(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ds(t,t.memoizedProps,l.memoizedProps)}break;case 27:Tt(e,t),Et(t),a&512&&(st||l===null||ne(l,l.return)),l!==null&&a&4&&Ds(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Tt(e,t),Et(t),a&512&&(st||l===null||ne(l,l.return)),t.flags&32){i=t.stateNode;try{ta(i,"")}catch(y){X(t,t.return,y)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ds(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Ns=!0);break;case 6:if(Tt(e,t),Et(t),a&4){if(t.stateNode===null)throw Error(x(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(y){X(t,t.return,y)}}break;case 3:if(ln=null,i=te,te=Cn(e.containerInfo),Tt(e,t),te=i,Et(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(y){X(t,t.return,y)}Ns&&(Ns=!1,Jd(t));break;case 4:a=te,te=Cn(t.stateNode.containerInfo),Tt(e,t),Et(t),te=a;break;case 12:Tt(e,t),Et(t);break;case 31:Tt(e,t),Et(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 13:Tt(e,t),Et(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(In=Ut()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 22:i=t.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,c=ge,h=st;if(ge=c||i,st=h||r,Tt(e,t),st=h,ge=c,Et(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||r||ge||st||dl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){r=l=e;try{if(n=r.stateNode,i)s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=r.stateNode;var d=r.memoizedProps.style,m=d!=null&&d.hasOwnProperty("display")?d.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(y){X(r,r.return,y)}}}else if(e.tag===6){if(l===null){r=e;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(y){X(r,r.return,y)}}}else if(e.tag===18){if(l===null){r=e;try{var p=r.stateNode;i?fo(p,!0):fo(r.stateNode,!1)}catch(y){X(r,r.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,ki(t,l))));break;case 19:Tt(e,t),Et(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 30:break;case 21:break;default:Tt(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ld(a)){l=a;break}a=a.return}if(l==null)throw Error(x(160));switch(l.tag){case 27:var i=l.stateNode,n=Cs(t);Tn(t,n,i);break;case 5:var s=l.stateNode;l.flags&32&&(ta(s,""),l.flags&=-33);var u=Cs(t);Tn(t,u,s);break;case 3:case 4:var r=l.stateNode.containerInfo,c=Cs(t);Au(t,c,r);break;default:throw Error(x(161))}}catch(h){X(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Jd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function he(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Gd(t,e.alternate,e),e=e.sibling}function dl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ll(4,e,e.return),dl(e);break;case 1:ne(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&kd(e,e.return,l),dl(e);break;case 27:Va(e.stateNode);case 26:case 5:ne(e,e.return),dl(e);break;case 22:e.memoizedState===null&&dl(e);break;case 30:dl(e);break;default:dl(e)}t=t.sibling}}function ve(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,n=e,s=n.flags;switch(n.tag){case 0:case 11:case 15:ve(i,n,l),pi(4,n);break;case 1:if(ve(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){X(a,a.return,c)}if(a=n,i=a.updateQueue,i!==null){var u=a.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)Zf(r[i],u)}catch(c){X(a,a.return,c)}}l&&s&64&&Bd(n),Ga(n,n.return);break;case 27:Yd(n);case 26:case 5:ve(i,n,l),l&&a===null&&s&4&&qd(n),Ga(n,n.return);break;case 12:ve(i,n,l);break;case 31:ve(i,n,l),l&&s&4&&Zd(i,n);break;case 13:ve(i,n,l),l&&s&4&&Vd(i,n);break;case 22:n.memoizedState===null&&ve(i,n,l),Ga(n,n.return);break;case 30:break;default:ve(i,n,l)}e=e.sibling}}function Cr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&hi(l))}function Nr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hi(t))}function Pt(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$d(t,e,l,a),e=e.sibling}function $d(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Pt(t,e,l,a),i&2048&&pi(9,e);break;case 1:Pt(t,e,l,a);break;case 3:Pt(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hi(t)));break;case 12:if(i&2048){Pt(t,e,l,a),t=e.stateNode;try{var n=e.memoizedProps,s=n.id,u=n.onPostCommit;typeof u=="function"&&u(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){X(e,e.return,r)}}else Pt(t,e,l,a);break;case 31:Pt(t,e,l,a);break;case 13:Pt(t,e,l,a);break;case 23:break;case 22:n=e.stateNode,s=e.alternate,e.memoizedState!==null?n._visibility&2?Pt(t,e,l,a):Xa(t,e):n._visibility&2?Pt(t,e,l,a):(n._visibility|=2,Dl(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Cr(s,e);break;case 24:Pt(t,e,l,a),i&2048&&Nr(e.alternate,e);break;default:Pt(t,e,l,a)}}function Dl(t,e,l,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,s=e,u=l,r=a,c=s.flags;switch(s.tag){case 0:case 11:case 15:Dl(n,s,u,r,i),pi(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Dl(n,s,u,r,i):Xa(n,s):(h._visibility|=2,Dl(n,s,u,r,i)),i&&c&2048&&Cr(s.alternate,s);break;case 24:Dl(n,s,u,r,i),i&&c&2048&&Nr(s.alternate,s);break;default:Dl(n,s,u,r,i)}e=e.sibling}}function Xa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:Xa(l,a),i&2048&&Cr(a.alternate,a);break;case 24:Xa(l,a),i&2048&&Nr(a.alternate,a);break;default:Xa(l,a)}e=e.sibling}}var Ca=8192;function Ol(t,e,l){if(t.subtreeFlags&Ca)for(t=t.child;t!==null;)Wd(t,e,l),t=t.sibling}function Wd(t,e,l){switch(t.tag){case 26:Ol(t,e,l),t.flags&Ca&&t.memoizedState!==null&&Xp(l,te,t.memoizedState,t.memoizedProps);break;case 5:Ol(t,e,l);break;case 3:case 4:var a=te;te=Cn(t.stateNode.containerInfo),Ol(t,e,l),te=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ca,Ca=16777216,Ol(t,e,l),Ca=a):Ol(t,e,l));break;default:Ol(t,e,l)}}function Fd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ea(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];dt=a,Pd(a,t)}Fd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(t),t=t.sibling}function Id(t){switch(t.tag){case 0:case 11:case 15:Ea(t),t.flags&2048&&ll(9,t,t.return);break;case 3:Ea(t);break;case 12:Ea(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tn(t)):Ea(t);break;default:Ea(t)}}function tn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];dt=a,Pd(a,t)}Fd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ll(8,e,e.return),tn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,tn(e));break;default:tn(e)}t=t.sibling}}function Pd(t,e){for(;dt!==null;){var l=dt;switch(l.tag){case 0:case 11:case 15:ll(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hi(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,dt=a;else t:for(l=t;dt!==null;){a=dt;var i=a.sibling,n=a.return;if(Xd(a),a===l){dt=null;break t}if(i!==null){i.return=n,dt=i;break t}dt=n}}}var ip={getCacheForType:function(t){var e=bt(ut),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return bt(ut).controller.signal}},np=typeof WeakMap=="function"?WeakMap:Map,L=0,V=null,B=null,k=0,G=0,Dt=null,Ge=!1,ha=!1,Mr=!1,je=0,et=0,al=0,gl=0,Ur=0,Mt=0,ia=0,Qa=null,_t=null,_u=!1,In=0,tm=0,En=1/0,An=null,$e=null,ct=0,We=null,na=null,ze=0,ju=0,Ou=null,em=null,Za=0,Ru=null;function kt(){return L&2&&k!==0?k&-k:O.T!==null?Br():of()}function lm(){if(Mt===0)if(!(k&536870912)||q){var t=Ri;Ri<<=1,!(Ri&3932160)&&(Ri=262144),Mt=t}else Mt=536870912;return t=Lt.current,t!==null&&(t.flags|=32),Mt}function jt(t,e,l){(t===V&&(G===2||G===9)||t.cancelPendingCommit!==null)&&(sa(t,0),Xe(t,k,Mt,!1)),fi(t,l),(!(L&2)||t!==V)&&(t===V&&(!(L&2)&&(gl|=l),et===4&&Xe(t,k,Mt,!1)),oe(t))}function am(t,e,l){if(L&6)throw Error(x(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||oi(t,e),i=a?rp(t,e):Ms(t,e,!0),n=a;do{if(i===0){ha&&!a&&Xe(t,e,0,!1);break}else{if(l=t.current.alternate,n&&!sp(l)){i=Ms(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var u=t;i=Qa;var r=u.current.memoizedState.isDehydrated;if(r&&(sa(u,s).flags|=256),s=Ms(u,s,!1),s!==2){if(Mr&&!r){u.errorRecoveryDisabledLanes|=n,gl|=n,i=4;break t}n=_t,_t=i,n!==null&&(_t===null?_t=n:_t.push.apply(_t,n))}i=s}if(n=!1,i!==2)continue}}if(i===1){sa(t,0),Xe(t,e,0,!0);break}t:{switch(a=t,n=i,n){case 0:case 1:throw Error(x(345));case 4:if((e&4194048)!==e)break;case 6:Xe(a,e,Mt,!Ge);break t;case 2:_t=null;break;case 3:case 5:break;default:throw Error(x(329))}if((e&62914560)===e&&(i=In+300-Ut(),10<i)){if(Xe(a,e,Mt,!Ge),Yn(a,0,!0)!==0)break t;ze=e,a.timeoutHandle=zm(Ic.bind(null,a,l,_t,An,_u,e,Mt,gl,ia,Ge,n,"Throttled",-0,0),i);break t}Ic(a,l,_t,An,_u,e,Mt,gl,ia,Ge,n,null,-0,0)}}break}while(!0);oe(t)}function Ic(t,e,l,a,i,n,s,u,r,c,h,d,m,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xe},Wd(e,n,d);var y=(n&62914560)===n?In-Ut():(n&4194048)===n?tm-Ut():0;if(y=Qp(d,y),y!==null){ze=n,t.cancelPendingCommit=y(to.bind(null,t,e,n,l,a,i,s,u,r,h,d,null,m,p)),Xe(t,n,s,!c);return}}to(t,e,n,l,a,i,s,u,r)}function sp(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!qt(n(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xe(t,e,l,a){e&=~Ur,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var n=31-Bt(i),s=1<<n;a[n]=-1,i&=~s}l!==0&&uf(t,l,e)}function Pn(){return L&6?!0:(gi(0),!1)}function Hr(){if(B!==null){if(G===0)var t=B.return;else t=B,ye=_l=null,wr(t),$l=null,Pa=0,t=B;for(;t!==null;)Hd(t.alternate,t),t=t.return;B=null}}function sa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Ap(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ze=0,Hr(),V=t,B=l=we(t.current,null),k=e,G=0,Dt=null,Ge=!1,ha=oi(t,e),Mr=!1,ia=Mt=Ur=gl=al=et=0,_t=Qa=null,_u=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Bt(a),n=1<<i;e|=t[i],a&=~n}return je=e,Zn(),l}function im(t,e){C=null,O.H=ei,e===ma||e===Kn?(e=Rc(),G=3):e===hr?(e=Rc(),G=4):G=e===Rr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dt=e,B===null&&(et=1,Sn(t,Kt(e,t.current)))}function nm(){var t=Lt.current;return t===null?!0:(k&4194048)===k?$t===null:(k&62914560)===k||k&536870912?t===$t:!1}function sm(){var t=O.H;return O.H=ei,t===null?ei:t}function um(){var t=O.A;return O.A=ip,t}function _n(){et=4,Ge||(k&4194048)!==k&&Lt.current!==null||(ha=!0),!(al&134217727)&&!(gl&134217727)||V===null||Xe(V,k,Mt,!1)}function Ms(t,e,l){var a=L;L|=2;var i=sm(),n=um();(V!==t||k!==e)&&(An=null,sa(t,e)),e=!1;var s=et;t:do try{if(G!==0&&B!==null){var u=B,r=Dt;switch(G){case 8:Hr(),s=6;break t;case 3:case 2:case 9:case 6:Lt.current===null&&(e=!0);var c=G;if(G=0,Dt=null,Ql(t,u,r,c),l&&ha){s=0;break t}break;default:c=G,G=0,Dt=null,Ql(t,u,r,c)}}up(),s=et;break}catch(h){im(t,h)}while(!0);return e&&t.shellSuspendCounter++,ye=_l=null,L=a,O.H=i,O.A=n,B===null&&(V=null,k=0,Zn()),s}function up(){for(;B!==null;)rm(B)}function rp(t,e){var l=L;L|=2;var a=sm(),i=um();V!==t||k!==e?(An=null,En=Ut()+500,sa(t,e)):ha=oi(t,e);t:do try{if(G!==0&&B!==null){e=B;var n=Dt;e:switch(G){case 1:G=0,Dt=null,Ql(t,e,n,1);break;case 2:case 9:if(Oc(n)){G=0,Dt=null,Pc(e);break}e=function(){G!==2&&G!==9||V!==t||(G=7),oe(t)},n.then(e,e);break t;case 3:G=7;break t;case 4:G=5;break t;case 7:Oc(n)?(G=0,Dt=null,Pc(e)):(G=0,Dt=null,Ql(t,e,n,7));break;case 5:var s=null;switch(B.tag){case 26:s=B.memoizedState;case 5:case 27:var u=B;if(s?jm(s):u.stateNode.complete){G=0,Dt=null;var r=u.sibling;if(r!==null)B=r;else{var c=u.return;c!==null?(B=c,ts(c)):B=null}break e}}G=0,Dt=null,Ql(t,e,n,5);break;case 6:G=0,Dt=null,Ql(t,e,n,6);break;case 8:Hr(),et=6;break t;default:throw Error(x(462))}}cp();break}catch(h){im(t,h)}while(!0);return ye=_l=null,O.H=a,O.A=i,L=l,B!==null?0:(V=null,k=0,Zn(),et)}function cp(){for(;B!==null&&!Ch();)rm(B)}function rm(t){var e=Ud(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?ts(t):B=e}function Pc(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Vc(l,e,e.pendingProps,e.type,void 0,k);break;case 11:e=Vc(l,e,e.pendingProps,e.type.render,e.ref,k);break;case 5:wr(e);default:Hd(l,e),e=B=Hf(e,je),e=Ud(l,e,je)}t.memoizedProps=t.pendingProps,e===null?ts(t):B=e}function Ql(t,e,l,a){ye=_l=null,wr(e),$l=null,Pa=0;var i=e.return;try{if(Fv(t,i,e,l,k)){et=1,Sn(t,Kt(l,t.current)),B=null;return}}catch(n){if(i!==null)throw B=i,n;et=1,Sn(t,Kt(l,t.current)),B=null;return}e.flags&32768?(q||a===1?t=!0:ha||k&536870912?t=!1:(Ge=t=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),cm(e,t)):ts(e)}function ts(t){var e=t;do{if(e.flags&32768){cm(e,Ge);return}t=e.return;var l=tp(e.alternate,e,je);if(l!==null){B=l;return}if(e=e.sibling,e!==null){B=e;return}B=e=t}while(e!==null);et===0&&(et=5)}function cm(t,e){do{var l=ep(t.alternate,t);if(l!==null){l.flags&=32767,B=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){B=t;return}B=t=l}while(t!==null);et=6,B=null}function to(t,e,l,a,i,n,s,u,r){t.cancelPendingCommit=null;do es();while(ct!==0);if(L&6)throw Error(x(327));if(e!==null){if(e===t.current)throw Error(x(177));if(n=e.lanes|e.childLanes,n|=ur,Gh(t,l,n,s,u,r),t===V&&(B=V=null,k=0),na=e,We=t,ze=l,ju=n,Ou=i,em=a,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,mp(fn,function(){return hm(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,e.subtreeFlags&13878||a){a=O.T,O.T=null,i=Y.p,Y.p=2,s=L,L|=4;try{lp(t,e,l)}finally{L=s,Y.p=i,O.T=a}}ct=1,om(),fm(),dm()}}function om(){if(ct===1){ct=0;var t=We,e=na,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=O.T,O.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{Kd(e,t);var n=Mu,s=jf(t.containerInfo),u=n.focusedElem,r=n.selectionRange;if(s!==u&&u&&u.ownerDocument&&_f(u.ownerDocument.documentElement,u)){if(r!==null&&sr(u)){var c=r.start,h=r.end;if(h===void 0&&(h=c),"selectionStart"in u)u.selectionStart=c,u.selectionEnd=Math.min(h,u.value.length);else{var d=u.ownerDocument||document,m=d&&d.defaultView||window;if(m.getSelection){var p=m.getSelection(),y=u.textContent.length,w=Math.min(r.start,y),S=r.end===void 0?w:Math.min(r.end,y);!p.extend&&w>S&&(s=S,S=w,w=s);var f=Sc(u,w),o=Sc(u,S);if(f&&o&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==o.node||p.focusOffset!==o.offset)){var v=d.createRange();v.setStart(f.node,f.offset),p.removeAllRanges(),w>S?(p.addRange(v),p.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),p.addRange(v))}}}}for(d=[],p=u;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<d.length;u++){var g=d[u];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Un=!!Nu,Mu=Nu=null}finally{L=i,Y.p=a,O.T=l}}t.current=e,ct=2}}function fm(){if(ct===2){ct=0;var t=We,e=na,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=O.T,O.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{Gd(t,e.alternate,e)}finally{L=i,Y.p=a,O.T=l}}ct=3}}function dm(){if(ct===4||ct===3){ct=0,Nh();var t=We,e=na,l=ze,a=em;e.subtreeFlags&10256||e.flags&10256?ct=5:(ct=0,na=We=null,mm(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&($e=null),Pu(l),e=e.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=O.T,i=Y.p,Y.p=2,O.T=null;try{for(var n=t.onRecoverableError,s=0;s<a.length;s++){var u=a[s];n(u.value,{componentStack:u.stack})}}finally{O.T=e,Y.p=i}}ze&3&&es(),oe(t),i=t.pendingLanes,l&261930&&i&42?t===Ru?Za++:(Za=0,Ru=t):Za=0,gi(0)}}function mm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,hi(e)))}function es(){return om(),fm(),dm(),hm()}function hm(){if(ct!==5)return!1;var t=We,e=ju;ju=0;var l=Pu(ze),a=O.T,i=Y.p;try{Y.p=32>l?32:l,O.T=null,l=Ou,Ou=null;var n=We,s=ze;if(ct=0,na=We=null,ze=0,L&6)throw Error(x(331));var u=L;if(L|=4,Id(n.current),$d(n,n.current,s,l),L=u,gi(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ci,n)}catch{}return!0}finally{Y.p=i,O.T=a,mm(t,e)}}function eo(t,e,l){e=Kt(l,e),e=zu(t.stateNode,e,2),t=Je(t,e,2),t!==null&&(fi(t,2),oe(t))}function X(t,e,l){if(t.tag===3)eo(t,t,l);else for(;e!==null;){if(e.tag===3){eo(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($e===null||!$e.has(a))){t=Kt(l,t),l=Od(2),a=Je(e,l,2),a!==null&&(Rd(l,a,e,t),fi(a,2),oe(a));break}}e=e.return}}function Us(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new np;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Mr=!0,i.add(l),t=op.bind(null,t,e,l),e.then(t,t))}function op(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,V===t&&(k&l)===l&&(et===4||et===3&&(k&62914560)===k&&300>Ut()-In?!(L&2)&&sa(t,0):Ur|=l,ia===k&&(ia=0)),oe(t)}function vm(t,e){e===0&&(e=sf()),t=Al(t,e),t!==null&&(fi(t,e),oe(t))}function fp(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),vm(t,l)}function dp(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(x(314))}a!==null&&a.delete(e),vm(t,l)}function mp(t,e){return Fu(t,e)}var jn=null,Cl=null,Du=!1,On=!1,Hs=!1,Qe=0;function oe(t){t!==Cl&&t.next===null&&(Cl===null?jn=Cl=t:Cl=Cl.next=t),On=!0,Du||(Du=!0,vp())}function gi(t,e){if(!Hs&&On){Hs=!0;do for(var l=!1,a=jn;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var s=a.suspendedLanes,u=a.pingedLanes;n=(1<<31-Bt(42|t)+1)-1,n&=i&~(s&~u),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,lo(a,n))}else n=k,n=Yn(a,a===V?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(n&3)||oi(a,n)||(l=!0,lo(a,n));a=a.next}while(l);Hs=!1}}function hp(){pm()}function pm(){On=Du=!1;var t=0;Qe!==0&&Ep()&&(t=Qe);for(var e=Ut(),l=null,a=jn;a!==null;){var i=a.next,n=gm(a,e);n===0?(a.next=null,l===null?jn=i:l.next=i,i===null&&(Cl=l)):(l=a,(t!==0||n&3)&&(On=!0)),a=i}ct!==0&&ct!==5||gi(t),Qe!==0&&(Qe=0)}function gm(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var s=31-Bt(n),u=1<<s,r=i[s];r===-1?(!(u&l)||u&a)&&(i[s]=Yh(u,e)):r<=e&&(t.expiredLanes|=u),n&=~u}if(e=V,l=k,l=Yn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(G===2||G===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&os(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||oi(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&os(a),Pu(l)){case 2:case 8:l=af;break;case 32:l=fn;break;case 268435456:l=nf;break;default:l=fn}return a=bm.bind(null,t),l=Fu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&os(a),t.callbackPriority=2,t.callbackNode=null,2}function bm(t,e){if(ct!==0&&ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(es()&&t.callbackNode!==l)return null;var a=k;return a=Yn(t,t===V?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(am(t,a,e),gm(t,Ut()),t.callbackNode!=null&&t.callbackNode===l?bm.bind(null,t):null)}function lo(t,e){if(es())return null;am(t,e,!0)}function vp(){_p(function(){L&6?Fu(lf,hp):pm()})}function Br(){if(Qe===0){var t=ea;t===0&&(t=Oi,Oi<<=1,!(Oi&261888)&&(Oi=256)),Qe=t}return Qe}function ao(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zi(""+t)}function io(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function pp(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var n=ao((i[Ot]||null).action),s=a.submitter;s&&(e=(e=s[Ot]||null)?ao(e.formAction):s.getAttribute("formAction"),e!==null&&(n=e,s=null));var u=new Gn("action","action",null,a,i);t.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qe!==0){var r=s?io(i,s):new FormData(i);wu(l,{pending:!0,data:r,method:i.method,action:n},null,r)}}else typeof n=="function"&&(u.preventDefault(),r=s?io(i,s):new FormData(i),wu(l,{pending:!0,data:r,method:i.method,action:n},n,r))},currentTarget:i}]})}}for(var Bs=0;Bs<cu.length;Bs++){var ks=cu[Bs],gp=ks.toLowerCase(),bp=ks[0].toUpperCase()+ks.slice(1);ee(gp,"on"+bp)}ee(Rf,"onAnimationEnd");ee(Df,"onAnimationIteration");ee(Cf,"onAnimationStart");ee("dblclick","onDoubleClick");ee("focusin","onFocus");ee("focusout","onBlur");ee(Mv,"onTransitionRun");ee(Uv,"onTransitionStart");ee(Hv,"onTransitionCancel");ee(Nf,"onTransitionEnd");Pl("onMouseEnter",["mouseout","mouseover"]);Pl("onMouseLeave",["mouseout","mouseover"]);Pl("onPointerEnter",["pointerout","pointerover"]);Pl("onPointerLeave",["pointerout","pointerover"]);zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zl("onBeforeInput",["compositionend","keypress","textInput","paste"]);zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li));function xm(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var n=void 0;if(e)for(var s=a.length-1;0<=s;s--){var u=a[s],r=u.instance,c=u.currentTarget;if(u=u.listener,r!==n&&i.isPropagationStopped())break t;n=u,i.currentTarget=c;try{n(i)}catch(h){mn(h)}i.currentTarget=null,n=r}else for(s=0;s<a.length;s++){if(u=a[s],r=u.instance,c=u.currentTarget,u=u.listener,r!==n&&i.isPropagationStopped())break t;n=u,i.currentTarget=c;try{n(i)}catch(h){mn(h)}i.currentTarget=null,n=r}}}}function H(t,e){var l=e[eu];l===void 0&&(l=e[eu]=new Set);var a=t+"__bubble";l.has(a)||(ym(e,t,2,!1),l.add(a))}function qs(t,e,l){var a=0;e&&(a|=4),ym(l,t,a,e)}var qi="_reactListening"+Math.random().toString(36).slice(2);function kr(t){if(!t[qi]){t[qi]=!0,ff.forEach(function(l){l!=="selectionchange"&&(xp.has(l)||qs(l,!1,t),qs(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qi]||(e[qi]=!0,qs("selectionchange",!1,e))}}function ym(t,e,l,a){switch(Nm(e)){case 2:var i=Kp;break;case 8:i=Jp;break;default:i=Gr}l=i.bind(null,e,l,t),i=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function Ls(t,e,l,a,i){var n=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var u=a.stateNode.containerInfo;if(u===i)break;if(s===4)for(s=a.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;u!==null;){if(s=Ul(u),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){a=n=s;continue t}u=u.parentNode}}a=a.return}xf(function(){var c=n,h=lr(l),d=[];t:{var m=Mf.get(t);if(m!==void 0){var p=Gn,y=t;switch(t){case"keypress":if(Ki(l)===0)break t;case"keydown":case"keyup":p=dv;break;case"focusin":y="focus",p=vs;break;case"focusout":y="blur",p=vs;break;case"beforeblur":case"afterblur":p=vs;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vv;break;case Rf:case Df:case Cf:p=av;break;case Nf:p=gv;break;case"scroll":case"scrollend":p=Ih;break;case"wheel":p=xv;break;case"copy":case"cut":case"paste":p=nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hc;break;case"toggle":case"beforetoggle":p=wv}var w=(e&4)!==0,S=!w&&(t==="scroll"||t==="scrollend"),f=w?m!==null?m+"Capture":null:m;w=[];for(var o=c,v;o!==null;){var g=o;if(v=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||v===null||f===null||(g=Ja(o,f),g!=null&&w.push(ai(o,g,v))),S)break;o=o.return}0<w.length&&(m=new p(m,y,null,l,h),d.push({event:m,listeners:w}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",m&&l!==nu&&(y=l.relatedTarget||l.fromElement)&&(Ul(y)||y[oa]))break t;if((p||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,p?(y=l.relatedTarget||l.toElement,p=c,y=y?Ul(y):null,y!==null&&(S=ri(y),w=y.tag,y!==S||w!==5&&w!==27&&w!==6)&&(y=null)):(p=null,y=c),p!==y)){if(w=dc,g="onMouseLeave",f="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(w=hc,g="onPointerLeave",f="onPointerEnter",o="pointer"),S=p==null?m:Ra(p),v=y==null?m:Ra(y),m=new w(g,o+"leave",p,l,h),m.target=S,m.relatedTarget=v,g=null,Ul(h)===c&&(w=new w(f,o+"enter",y,l,h),w.target=v,w.relatedTarget=S,g=w),S=g,p&&y)e:{for(w=yp,f=p,o=y,v=0,g=f;g;g=w(g))v++;g=0;for(var z=o;z;z=w(z))g++;for(;0<v-g;)f=w(f),v--;for(;0<g-v;)o=w(o),g--;for(;v--;){if(f===o||o!==null&&f===o.alternate){w=f;break e}f=w(f),o=w(o)}w=null}else w=null;p!==null&&no(d,m,p,w,!1),y!==null&&S!==null&&no(d,S,y,w,!0)}}t:{if(m=c?Ra(c):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var j=bc;else if(gc(m))if(Ef)j=Dv;else{j=Ov;var T=jv}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?c&&er(c.elementType)&&(j=bc):j=Rv;if(j&&(j=j(t,c))){Tf(d,j,l,h);break t}T&&T(t,m,c),t==="focusout"&&c&&m.type==="number"&&c.memoizedProps.value!=null&&iu(m,"number",m.value)}switch(T=c?Ra(c):window,t){case"focusin":(gc(T)||T.contentEditable==="true")&&(kl=T,uu=c,Ha=null);break;case"focusout":Ha=uu=kl=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,zc(d,l,h);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":zc(d,l,h)}var _;if(nr)t:{switch(t){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else Bl?Sf(t,l)&&(R="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(R="onCompositionStart");R&&(wf&&l.locale!=="ko"&&(Bl||R!=="onCompositionStart"?R==="onCompositionEnd"&&Bl&&(_=yf()):(Ye=h,ar="value"in Ye?Ye.value:Ye.textContent,Bl=!0)),T=Rn(c,R),0<T.length&&(R=new mc(R,t,null,l,h),d.push({event:R,listeners:T}),_?R.data=_:(_=zf(l),_!==null&&(R.data=_)))),(_=zv?Tv(t,l):Ev(t,l))&&(R=Rn(c,"onBeforeInput"),0<R.length&&(T=new mc("onBeforeInput","beforeinput",null,l,h),d.push({event:T,listeners:R}),T.data=_)),pp(d,t,c,l,h)}xm(d,e)})}function ai(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Rn(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ja(t,l),i!=null&&a.unshift(ai(t,i,n)),i=Ja(t,e),i!=null&&a.push(ai(t,i,n))),t.tag===3)return a;t=t.return}return[]}function yp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function no(t,e,l,a,i){for(var n=e._reactName,s=[];l!==null&&l!==a;){var u=l,r=u.alternate,c=u.stateNode;if(u=u.tag,r!==null&&r===a)break;u!==5&&u!==26&&u!==27||c===null||(r=c,i?(c=Ja(l,n),c!=null&&s.unshift(ai(l,c,r))):i||(c=Ja(l,n),c!=null&&s.push(ai(l,c,r)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var wp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function so(t){return(typeof t=="string"?t:""+t).replace(wp,`
`).replace(Sp,"")}function wm(t,e){return e=so(e),so(t)===e}function Q(t,e,l,a,i,n){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ta(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ta(t,""+a);break;case"className":Ci(t,"class",a);break;case"tabIndex":Ci(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(t,l,a);break;case"style":bf(t,a,n);break;case"data":if(e!=="object"){Ci(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(e!=="input"&&Q(t,e,"name",i.name,i,null),Q(t,e,"formEncType",i.formEncType,i,null),Q(t,e,"formMethod",i.formMethod,i,null),Q(t,e,"formTarget",i.formTarget,i,null)):(Q(t,e,"encType",i.encType,i,null),Q(t,e,"method",i.method,i,null),Q(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=xe);break;case"onScroll":a!=null&&H("scroll",t);break;case"onScrollEnd":a!=null&&H("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(x(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(x(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Zi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":H("beforetoggle",t),H("toggle",t),Qi(t,"popover",a);break;case"xlinkActuate":fe(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fe(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fe(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fe(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fe(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fe(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fe(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wh.get(l)||l,Qi(t,l,a))}}function Cu(t,e,l,a,i,n){switch(l){case"style":bf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(x(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(x(60));t.innerHTML=l}}break;case"children":typeof a=="string"?ta(t,a):(typeof a=="number"||typeof a=="bigint")&&ta(t,""+a);break;case"onScroll":a!=null&&H("scroll",t);break;case"onScrollEnd":a!=null&&H("scrollend",t);break;case"onClick":a!=null&&(t.onclick=xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!df.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),n=t[Ot]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Qi(t,l,a)}}}function xt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":H("error",t),H("load",t);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var s=l[n];if(s!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:Q(t,e,n,s,l,null)}}i&&Q(t,e,"srcSet",l.srcSet,l,null),a&&Q(t,e,"src",l.src,l,null);return;case"input":H("invalid",t);var u=n=s=i=null,r=null,c=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":i=h;break;case"type":s=h;break;case"checked":r=h;break;case"defaultChecked":c=h;break;case"value":n=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(x(137,e));break;default:Q(t,e,a,h,l,null)}}vf(t,n,u,r,c,s,i,!1);return;case"select":H("invalid",t),a=s=n=null;for(i in l)if(l.hasOwnProperty(i)&&(u=l[i],u!=null))switch(i){case"value":n=u;break;case"defaultValue":s=u;break;case"multiple":a=u;default:Q(t,e,i,u,l,null)}e=n,l=s,t.multiple=!!a,e!=null?Vl(t,!!a,e,!1):l!=null&&Vl(t,!!a,l,!0);return;case"textarea":H("invalid",t),n=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(u=l[s],u!=null))switch(s){case"value":a=u;break;case"defaultValue":i=u;break;case"children":n=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(x(91));break;default:Q(t,e,s,u,l,null)}gf(t,a,i,n);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Q(t,e,r,a,l,null)}return;case"dialog":H("beforetoggle",t),H("toggle",t),H("cancel",t),H("close",t);break;case"iframe":case"object":H("load",t);break;case"video":case"audio":for(a=0;a<li.length;a++)H(li[a],t);break;case"image":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"embed":case"source":case"link":H("error",t),H("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in l)if(l.hasOwnProperty(c)&&(a=l[c],a!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:Q(t,e,c,a,l,null)}return;default:if(er(e)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&Cu(t,e,h,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&Q(t,e,u,a,l,null))}function zp(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,s=null,u=null,r=null,c=null,h=null;for(p in l){var d=l[p];if(l.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=d;default:a.hasOwnProperty(p)||Q(t,e,p,null,a,d)}}for(var m in a){var p=a[m];if(d=l[m],a.hasOwnProperty(m)&&(p!=null||d!=null))switch(m){case"type":n=p;break;case"name":i=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(x(137,e));break;default:p!==d&&Q(t,e,m,p,a,d)}}au(t,s,u,r,c,h,n,i);return;case"select":p=s=u=m=null;for(n in l)if(r=l[n],l.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":p=r;default:a.hasOwnProperty(n)||Q(t,e,n,null,a,r)}for(i in a)if(n=a[i],r=l[i],a.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":m=n;break;case"defaultValue":u=n;break;case"multiple":s=n;default:n!==r&&Q(t,e,i,n,a,r)}e=u,l=s,a=p,m!=null?Vl(t,!!l,m,!1):!!a!=!!l&&(e!=null?Vl(t,!!l,e,!0):Vl(t,!!l,l?[]:"",!1));return;case"textarea":p=m=null;for(u in l)if(i=l[u],l.hasOwnProperty(u)&&i!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Q(t,e,u,null,a,i)}for(s in a)if(i=a[s],n=l[s],a.hasOwnProperty(s)&&(i!=null||n!=null))switch(s){case"value":m=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(x(91));break;default:i!==n&&Q(t,e,s,i,a,n)}pf(t,m,p);return;case"option":for(var y in l)if(m=l[y],l.hasOwnProperty(y)&&m!=null&&!a.hasOwnProperty(y))switch(y){case"selected":t.selected=!1;break;default:Q(t,e,y,null,a,m)}for(r in a)if(m=a[r],p=l[r],a.hasOwnProperty(r)&&m!==p&&(m!=null||p!=null))switch(r){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:Q(t,e,r,m,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in l)m=l[w],l.hasOwnProperty(w)&&m!=null&&!a.hasOwnProperty(w)&&Q(t,e,w,null,a,m);for(c in a)if(m=a[c],p=l[c],a.hasOwnProperty(c)&&m!==p&&(m!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(x(137,e));break;default:Q(t,e,c,m,a,p)}return;default:if(er(e)){for(var S in l)m=l[S],l.hasOwnProperty(S)&&m!==void 0&&!a.hasOwnProperty(S)&&Cu(t,e,S,void 0,a,m);for(h in a)m=a[h],p=l[h],!a.hasOwnProperty(h)||m===p||m===void 0&&p===void 0||Cu(t,e,h,m,a,p);return}}for(var f in l)m=l[f],l.hasOwnProperty(f)&&m!=null&&!a.hasOwnProperty(f)&&Q(t,e,f,null,a,m);for(d in a)m=a[d],p=l[d],!a.hasOwnProperty(d)||m===p||m==null&&p==null||Q(t,e,d,m,a,p)}function uo(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,s=i.initiatorType,u=i.duration;if(n&&u&&uo(s)){for(s=0,u=i.responseEnd,a+=1;a<l.length;a++){var r=l[a],c=r.startTime;if(c>u)break;var h=r.transferSize,d=r.initiatorType;h&&uo(d)&&(r=r.responseEnd,s+=h*(r<u?1:(u-c)/(r-c)))}if(--a,e+=8*(n+s)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nu=null,Mu=null;function Dn(t){return t.nodeType===9?t:t.ownerDocument}function ro(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ys=null;function Ep(){var t=window.event;return t&&t.type==="popstate"?t===Ys?!1:(Ys=t,!0):(Ys=null,!1)}var zm=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,co=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof co<"u"?function(t){return co.resolve(null).then(t).catch(jp)}:zm;function jp(t){setTimeout(function(){throw t})}function nl(t){return t==="head"}function oo(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(i),ra(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Va(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Va(l);for(var n=l.firstChild;n;){var s=n.nextSibling,u=n.nodeName;n[di]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=s}}else l==="body"&&Va(t.ownerDocument.body);l=i}while(l);ra(e)}function fo(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Hu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Hu(l),tr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Op(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[di])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Wt(t.nextSibling),t===null)break}return null}function Rp(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Wt(t.nextSibling),t===null))return null;return t}function Tm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Wt(t.nextSibling),t===null))return null;return t}function Bu(t){return t.data==="$?"||t.data==="$~"}function ku(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Dp(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Wt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var qu=null;function mo(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Wt(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function ho(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Em(t,e,l){switch(e=Dn(l),t){case"html":if(t=e.documentElement,!t)throw Error(x(452));return t;case"head":if(t=e.head,!t)throw Error(x(453));return t;case"body":if(t=e.body,!t)throw Error(x(454));return t;default:throw Error(x(451))}}function Va(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tr(t)}var Ft=new Map,vo=new Set;function Cn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Re=Y.d;Y.d={f:Cp,r:Np,D:Mp,C:Up,L:Hp,m:Bp,X:qp,S:kp,M:Lp};function Cp(){var t=Re.f(),e=Pn();return t||e}function Np(t){var e=fa(t);e!==null&&e.tag===5&&e.type==="form"?bd(e):Re.r(t)}var va=typeof document>"u"?null:document;function Am(t,e,l){var a=va;if(a&&typeof e=="string"&&e){var i=Vt(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),vo.has(i)||(vo.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),xt(e,"link",t),mt(e),a.head.appendChild(e)))}}function Mp(t){Re.D(t),Am("dns-prefetch",t,null)}function Up(t,e){Re.C(t,e),Am("preconnect",t,e)}function Hp(t,e,l){Re.L(t,e,l);var a=va;if(a&&t&&e){var i='link[rel="preload"][as="'+Vt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Vt(l.imageSizes)+'"]')):i+='[href="'+Vt(t)+'"]';var n=i;switch(e){case"style":n=ua(t);break;case"script":n=pa(t)}Ft.has(n)||(t=F({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ft.set(n,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(bi(n))||e==="script"&&a.querySelector(xi(n))||(e=a.createElement("link"),xt(e,"link",t),mt(e),a.head.appendChild(e)))}}function Bp(t,e){Re.m(t,e);var l=va;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Vt(a)+'"][href="'+Vt(t)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=pa(t)}if(!Ft.has(n)&&(t=F({rel:"modulepreload",href:t},e),Ft.set(n,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xi(n)))return}a=l.createElement("link"),xt(a,"link",t),mt(a),l.head.appendChild(a)}}}function kp(t,e,l){Re.S(t,e,l);var a=va;if(a&&t){var i=Zl(a).hoistableStyles,n=ua(t);e=e||"default";var s=i.get(n);if(!s){var u={loading:0,preload:null};if(s=a.querySelector(bi(n)))u.loading=5;else{t=F({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ft.get(n))&&qr(t,l);var r=s=a.createElement("link");mt(r),xt(r,"link",t),r._p=new Promise(function(c,h){r.onload=c,r.onerror=h}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,en(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:u},i.set(n,s)}}}function qp(t,e){Re.X(t,e);var l=va;if(l&&t){var a=Zl(l).hoistableScripts,i=pa(t),n=a.get(i);n||(n=l.querySelector(xi(i)),n||(t=F({src:t,async:!0},e),(e=Ft.get(i))&&Lr(t,e),n=l.createElement("script"),mt(n),xt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Lp(t,e){Re.M(t,e);var l=va;if(l&&t){var a=Zl(l).hoistableScripts,i=pa(t),n=a.get(i);n||(n=l.querySelector(xi(i)),n||(t=F({src:t,async:!0,type:"module"},e),(e=Ft.get(i))&&Lr(t,e),n=l.createElement("script"),mt(n),xt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function po(t,e,l,a){var i=(i=Ze.current)?Cn(i):null;if(!i)throw Error(x(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=ua(l.href),l=Zl(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ua(l.href);var n=Zl(i).hoistableStyles,s=n.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,s),(n=i.querySelector(bi(t)))&&!n._p&&(s.instance=n,s.state.loading=5),Ft.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ft.set(t,l),n||Yp(i,t,l,s.state))),e&&a===null)throw Error(x(528,""));return s}if(e&&a!==null)throw Error(x(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pa(l),l=Zl(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(x(444,t))}}function ua(t){return'href="'+Vt(t)+'"'}function bi(t){return'link[rel="stylesheet"]['+t+"]"}function _m(t){return F({},t,{"data-precedence":t.precedence,precedence:null})}function Yp(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),xt(e,"link",l),mt(e),t.head.appendChild(e))}function pa(t){return'[src="'+Vt(t)+'"]'}function xi(t){return"script[async]"+t}function go(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Vt(l.href)+'"]');if(a)return e.instance=a,mt(a),a;var i=F({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),mt(a),xt(a,"style",i),en(a,l.precedence,t),e.instance=a;case"stylesheet":i=ua(l.href);var n=t.querySelector(bi(i));if(n)return e.state.loading|=4,e.instance=n,mt(n),n;a=_m(l),(i=Ft.get(i))&&qr(a,i),n=(t.ownerDocument||t).createElement("link"),mt(n);var s=n;return s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),xt(n,"link",a),e.state.loading|=4,en(n,l.precedence,t),e.instance=n;case"script":return n=pa(l.src),(i=t.querySelector(xi(n)))?(e.instance=i,mt(i),i):(a=l,(i=Ft.get(n))&&(a=F({},l),Lr(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),mt(i),xt(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(x(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,en(a,l.precedence,t));return e.instance}function en(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,s=0;s<a.length;s++){var u=a[s];if(u.dataset.precedence===e)n=u;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function qr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Lr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ln=null;function bo(t,e,l){if(ln===null){var a=new Map,i=ln=new Map;i.set(l,a)}else i=ln,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var n=l[i];if(!(n[di]||n[pt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var s=n.getAttribute(e)||"";s=t+s;var u=a.get(s);u?u.push(n):a.set(s,[n])}}return a}function xo(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Gp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function jm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function Xp(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var i=ua(a.href),n=e.querySelector(bi(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Nn.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=n,mt(n);return}n=e.ownerDocument||e,a=_m(a),(i=Ft.get(i))&&qr(a,i),n=n.createElement("link"),mt(n);var s=n;s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),xt(n,"link",a),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=Nn.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Gs=0;function Qp(t,e){return t.stylesheets&&t.count===0&&an(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&an(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&Gs===0&&(Gs=62500*Tp());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&an(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Gs?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Nn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)an(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mn=null;function an(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mn=new Map,e.forEach(Zp,t),Mn=null,Nn.call(t))}function Zp(t,e){if(!(e.state.loading&4)){var l=Mn.get(t);if(l)var a=l.get(null);else{l=new Map,Mn.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var s=i[n];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),n=l.get(s)||a,n===a&&l.set(null,i),l.set(s,i),this.count++,a=Nn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var ii={$$typeof:be,Provider:null,Consumer:null,_currentValue:ml,_currentValue2:ml,_threadCount:0};function Vp(t,e,l,a,i,n,s,u,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.hiddenUpdates=fs(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Om(t,e,l,a,i,n,s,u,r,c,h,d){return t=new Vp(t,e,l,s,r,c,h,d,u),e=1,n===!0&&(e|=24),n=Nt(3,null,null,e),t.current=n,n.stateNode=t,e=dr(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:e},vr(n),t}function Rm(t){return t?(t=Yl,t):Yl}function Dm(t,e,l,a,i,n){i=Rm(i),a.context===null?a.context=i:a.pendingContext=i,a=Ke(e),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=Je(t,a,e),l!==null&&(jt(l,t,e),ka(l,t,e))}function yo(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Yr(t,e){yo(t,e),(t=t.alternate)&&yo(t,e)}function Cm(t){if(t.tag===13||t.tag===31){var e=Al(t,67108864);e!==null&&jt(e,t,67108864),Yr(t,67108864)}}function wo(t){if(t.tag===13||t.tag===31){var e=kt();e=Iu(e);var l=Al(t,e);l!==null&&jt(l,t,e),Yr(t,e)}}var Un=!0;function Kp(t,e,l,a){var i=O.T;O.T=null;var n=Y.p;try{Y.p=2,Gr(t,e,l,a)}finally{Y.p=n,O.T=i}}function Jp(t,e,l,a){var i=O.T;O.T=null;var n=Y.p;try{Y.p=8,Gr(t,e,l,a)}finally{Y.p=n,O.T=i}}function Gr(t,e,l,a){if(Un){var i=Lu(a);if(i===null)Ls(t,e,a,Hn,l),So(t,a);else if(Wp(i,t,e,l,a))a.stopPropagation();else if(So(t,a),e&4&&-1<$p.indexOf(t)){for(;i!==null;){var n=fa(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var s=ol(n.pendingLanes);if(s!==0){var u=n;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var r=1<<31-Bt(s);u.entanglements[1]|=r,s&=~r}oe(n),!(L&6)&&(En=Ut()+500,gi(0))}}break;case 31:case 13:u=Al(n,2),u!==null&&jt(u,n,2),Pn(),Yr(n,2)}if(n=Lu(a),n===null&&Ls(t,e,a,Hn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else Ls(t,e,a,null,l)}}function Lu(t){return t=lr(t),Xr(t)}var Hn=null;function Xr(t){if(Hn=null,t=Ul(t),t!==null){var e=ri(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Fo(e),t!==null)return t;t=null}else if(l===31){if(t=Io(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Hn=t,null}function Nm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mh()){case lf:return 2;case af:return 8;case fn:case Uh:return 32;case nf:return 268435456;default:return 32}default:return 32}}var Yu=!1,Fe=null,Ie=null,Pe=null,ni=new Map,si=new Map,qe=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function So(t,e){switch(t){case"focusin":case"focusout":Fe=null;break;case"dragenter":case"dragleave":Ie=null;break;case"mouseover":case"mouseout":Pe=null;break;case"pointerover":case"pointerout":ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(e.pointerId)}}function Aa(t,e,l,a,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wp(t,e,l,a,i){switch(e){case"focusin":return Fe=Aa(Fe,t,e,l,a,i),!0;case"dragenter":return Ie=Aa(Ie,t,e,l,a,i),!0;case"mouseover":return Pe=Aa(Pe,t,e,l,a,i),!0;case"pointerover":var n=i.pointerId;return ni.set(n,Aa(ni.get(n)||null,t,e,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,si.set(n,Aa(si.get(n)||null,t,e,l,a,i)),!0}return!1}function Mm(t){var e=Ul(t.target);if(e!==null){var l=ri(e);if(l!==null){if(e=l.tag,e===13){if(e=Fo(l),e!==null){t.blockedOn=e,nc(t.priority,function(){wo(l)});return}}else if(e===31){if(e=Io(l),e!==null){t.blockedOn=e,nc(t.priority,function(){wo(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Lu(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);nu=a,l.target.dispatchEvent(a),nu=null}else return e=fa(l),e!==null&&Cm(e),t.blockedOn=l,!1;e.shift()}return!0}function zo(t,e,l){nn(t)&&l.delete(e)}function Fp(){Yu=!1,Fe!==null&&nn(Fe)&&(Fe=null),Ie!==null&&nn(Ie)&&(Ie=null),Pe!==null&&nn(Pe)&&(Pe=null),ni.forEach(zo),si.forEach(zo)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Fp)))}var Yi=null;function To(t){Yi!==t&&(Yi=t,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,function(){Yi===t&&(Yi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Xr(a||l)===null)continue;break}var n=fa(l);n!==null&&(t.splice(e,3),e-=3,wu(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function ra(t){function e(r){return Li(r,t)}Fe!==null&&Li(Fe,t),Ie!==null&&Li(Ie,t),Pe!==null&&Li(Pe,t),ni.forEach(e),si.forEach(e);for(var l=0;l<qe.length;l++){var a=qe[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<qe.length&&(l=qe[0],l.blockedOn===null);)Mm(l),l.blockedOn===null&&qe.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],s=i[Ot]||null;if(typeof n=="function")s||To(l);else if(s){var u=null;if(n&&n.hasAttribute("formAction")){if(i=n,s=n[Ot]||null)u=s.formAction;else if(Xr(i)!==null)continue}else u=s.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),To(l)}}}function Um(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Qr(t){this._internalRoot=t}ls.prototype.render=Qr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));var l=e.current,a=kt();Dm(l,a,t,e,null,null)};ls.prototype.unmount=Qr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dm(t.current,2,null,t,null,null),Pn(),e[oa]=null}};function ls(t){this._internalRoot=t}ls.prototype.unstable_scheduleHydration=function(t){if(t){var e=of();t={blockedOn:null,target:t,priority:e};for(var l=0;l<qe.length&&e!==0&&e<qe[l].priority;l++);qe.splice(l,0,t),l===0&&Mm(t)}};var Eo=$o.version;if(Eo!=="19.2.4")throw Error(x(527,Eo,"19.2.4"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=_h(e),t=t!==null?Po(t):null,t=t===null?null:t.stateNode,t};var Ip={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{ci=Gi.inject(Ip),Ht=Gi}catch{}}qn.createRoot=function(t,e){if(!Wo(t))throw Error(x(299));var l=!1,a="",i=Ad,n=_d,s=jd;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Om(t,1,!1,null,null,l,a,null,i,n,s,Um),t[oa]=e.current,kr(t),new Qr(e)};qn.hydrateRoot=function(t,e,l){if(!Wo(t))throw Error(x(299));var a=!1,i="",n=Ad,s=_d,u=jd,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),e=Om(t,1,!0,e,l??null,a,i,r,n,s,u,Um),e.context=Rm(null),l=e.current,a=kt(),a=Iu(a),i=Ke(a),i.callback=null,Je(l,i,a),l=a,e.current.lanes=l,fi(e,l),oe(e),t[oa]=e.current,kr(t),new ls(e)};qn.version="19.2.4";function Hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm)}catch(t){console.error(t)}}Hm(),Xo.exports=qn;var Pp=Xo.exports;const tg=No(Pp);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ao="popstate";function _o(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function eg(t={}){function e(a,i){var c;let n=(c=i.state)==null?void 0:c.masked,{pathname:s,search:u,hash:r}=n||a.location;return Gu("",{pathname:s,search:u,hash:r},i.state&&i.state.usr||null,i.state&&i.state.key||"default",n?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function l(a,i){return typeof i=="string"?i:ui(i)}return ag(e,l,null,t)}function P(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function re(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lg(){return Math.random().toString(36).substring(2,10)}function jo(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Gu(t,e,l=null,a,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ga(e):e,state:l,key:e&&e.key||a||lg(),unstable_mask:i}}function ui({pathname:t="/",search:e="",hash:l=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function ga(t){let e={};if(t){let l=t.indexOf("#");l>=0&&(e.hash=t.substring(l),t=t.substring(0,l));let a=t.indexOf("?");a>=0&&(e.search=t.substring(a),t=t.substring(0,a)),t&&(e.pathname=t)}return e}function ag(t,e,l,a={}){let{window:i=document.defaultView,v5Compat:n=!1}=a,s=i.history,u="POP",r=null,c=h();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function h(){return(s.state||{idx:null}).idx}function d(){u="POP";let S=h(),f=S==null?null:S-c;c=S,r&&r({action:u,location:w.location,delta:f})}function m(S,f){u="PUSH";let o=_o(S)?S:Gu(w.location,S,f);c=h()+1;let v=jo(o,c),g=w.createHref(o.unstable_mask||o);try{s.pushState(v,"",g)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(g)}n&&r&&r({action:u,location:w.location,delta:1})}function p(S,f){u="REPLACE";let o=_o(S)?S:Gu(w.location,S,f);c=h();let v=jo(o,c),g=w.createHref(o.unstable_mask||o);s.replaceState(v,"",g),n&&r&&r({action:u,location:w.location,delta:0})}function y(S){return ig(S)}let w={get action(){return u},get location(){return t(i,s)},listen(S){if(r)throw new Error("A history only accepts one active listener");return i.addEventListener(Ao,d),r=S,()=>{i.removeEventListener(Ao,d),r=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let f=y(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:p,go(S){return s.go(S)}};return w}function ig(t,e=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),P(l,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:ui(t);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=l+a),new URL(a,l)}function Bm(t,e,l="/"){return ng(t,e,l,!1)}function ng(t,e,l,a){let i=typeof e=="string"?ga(e):e,n=Oe(i.pathname||"/",l);if(n==null)return null;let s=km(t);sg(s);let u=null;for(let r=0;u==null&&r<s.length;++r){let c=gg(n);u=vg(s[r],c,a)}return u}function km(t,e=[],l=[],a="",i=!1){let n=(s,u,r=i,c)=>{let h={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:u,route:s};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(a)&&r)return;P(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length)}let d=ue([a,h.relativePath]),m=l.concat(h);s.children&&s.children.length>0&&(P(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),km(s.children,e,m,d,r)),!(s.path==null&&!s.index)&&e.push({path:d,score:mg(d,s.index),routesMeta:m})};return t.forEach((s,u)=>{var r;if(s.path===""||!((r=s.path)!=null&&r.includes("?")))n(s,u);else for(let c of qm(s.path))n(s,u,!0,c)}),e}function qm(t){let e=t.split("/");if(e.length===0)return[];let[l,...a]=e,i=l.endsWith("?"),n=l.replace(/\?$/,"");if(a.length===0)return i?[n,""]:[n];let s=qm(a.join("/")),u=[];return u.push(...s.map(r=>r===""?n:[n,r].join("/"))),i&&u.push(...s),u.map(r=>t.startsWith("/")&&r===""?"/":r)}function sg(t){t.sort((e,l)=>e.score!==l.score?l.score-e.score:hg(e.routesMeta.map(a=>a.childrenIndex),l.routesMeta.map(a=>a.childrenIndex)))}var ug=/^:[\w-]+$/,rg=3,cg=2,og=1,fg=10,dg=-2,Oo=t=>t==="*";function mg(t,e){let l=t.split("/"),a=l.length;return l.some(Oo)&&(a+=dg),e&&(a+=cg),l.filter(i=>!Oo(i)).reduce((i,n)=>i+(ug.test(n)?rg:n===""?og:fg),a)}function hg(t,e){return t.length===e.length&&t.slice(0,-1).every((a,i)=>a===e[i])?t[t.length-1]-e[e.length-1]:0}function vg(t,e,l=!1){let{routesMeta:a}=t,i={},n="/",s=[];for(let u=0;u<a.length;++u){let r=a[u],c=u===a.length-1,h=n==="/"?e:e.slice(n.length)||"/",d=Bn({path:r.relativePath,caseSensitive:r.caseSensitive,end:c},h),m=r.route;if(!d&&c&&l&&!a[a.length-1].route.index&&(d=Bn({path:r.relativePath,caseSensitive:r.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:ue([n,d.pathname]),pathnameBase:wg(ue([n,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(n=ue([n,d.pathnameBase]))}return s}function Bn(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,a]=pg(t.path,t.caseSensitive,t.end),i=e.match(l);if(!i)return null;let n=i[0],s=n.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:a.reduce((c,{paramName:h,isOptional:d},m)=>{if(h==="*"){let y=u[m]||"";s=n.slice(0,n.length-y.length).replace(/(.)\/+$/,"$1")}const p=u[m];return d&&!p?c[h]=void 0:c[h]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:n,pathnameBase:s,pattern:t}}function pg(t,e=!1,l=!0){re(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,u,r,c,h)=>{if(a.push({paramName:u,isOptional:r!=null}),r){let d=h.charAt(c+s.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(a.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),a]}function gg(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return re(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Oe(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let l=e.endsWith("/")?e.length-1:e.length,a=t.charAt(l);return a&&a!=="/"?null:t.slice(l)||"/"}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xg(t,e="/"){let{pathname:l,search:a="",hash:i=""}=typeof t=="string"?ga(t):t,n;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?n=Ro(l.substring(1),"/"):n=Ro(l,e)):n=e,{pathname:n,search:Sg(a),hash:zg(i)}}function Ro(t,e){let l=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?l.length>1&&l.pop():i!=="."&&l.push(i)}),l.length>1?l.join("/"):"/"}function Xs(t,e,l,a){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yg(t){return t.filter((e,l)=>l===0||e.route.path&&e.route.path.length>0)}function Lm(t){let e=yg(t);return e.map((l,a)=>a===e.length-1?l.pathname:l.pathnameBase)}function Zr(t,e,l,a=!1){let i;typeof t=="string"?i=ga(t):(i={...t},P(!i.pathname||!i.pathname.includes("?"),Xs("?","pathname","search",i)),P(!i.pathname||!i.pathname.includes("#"),Xs("#","pathname","hash",i)),P(!i.search||!i.search.includes("#"),Xs("#","search","hash",i)));let n=t===""||i.pathname==="",s=n?"/":i.pathname,u;if(s==null)u=l;else{let d=e.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}u=d>=0?e[d]:"/"}let r=xg(i,u),c=s&&s!=="/"&&s.endsWith("/"),h=(n||s===".")&&l.endsWith("/");return!r.pathname.endsWith("/")&&(c||h)&&(r.pathname+="/"),r}var ue=t=>t.join("/").replace(/\/\/+/g,"/"),wg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Tg=class{constructor(t,e,l,a=!1){this.status=t,this.statusText=e||"",this.internal=a,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Eg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Ag(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gm(t,e){let l=t;if(typeof l!="string"||!bg.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let a=l,i=!1;if(Ym)try{let n=new URL(window.location.href),s=l.startsWith("//")?new URL(n.protocol+l):new URL(l),u=Oe(s.pathname,e);s.origin===n.origin&&u!=null?l=u+s.search+s.hash:i=!0}catch{re(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xm=["POST","PUT","PATCH","DELETE"];new Set(Xm);var _g=["GET",...Xm];new Set(_g);var ba=b.createContext(null);ba.displayName="DataRouter";var as=b.createContext(null);as.displayName="DataRouterState";var jg=b.createContext(!1),Qm=b.createContext({isTransitioning:!1});Qm.displayName="ViewTransition";var Og=b.createContext(new Map);Og.displayName="Fetchers";var Rg=b.createContext(null);Rg.displayName="Await";var It=b.createContext(null);It.displayName="Navigation";var yi=b.createContext(null);yi.displayName="Location";var De=b.createContext({outlet:null,matches:[],isDataRoute:!1});De.displayName="Route";var Vr=b.createContext(null);Vr.displayName="RouteError";var Zm="REACT_ROUTER_ERROR",Dg="REDIRECT",Cg="ROUTE_ERROR_RESPONSE";function Ng(t){if(t.startsWith(`${Zm}:${Dg}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Mg(t){if(t.startsWith(`${Zm}:${Cg}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Tg(e.status,e.statusText,e.data)}catch{}}function Ug(t,{relative:e}={}){P(wi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:a}=b.useContext(It),{hash:i,pathname:n,search:s}=Si(t,{relative:e}),u=n;return l!=="/"&&(u=n==="/"?l:ue([l,n])),a.createHref({pathname:u,search:s,hash:i})}function wi(){return b.useContext(yi)!=null}function sl(){return P(wi(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(yi).location}var Vm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(t){b.useContext(It).static||b.useLayoutEffect(t)}function Hg(){let{isDataRoute:t}=b.useContext(De);return t?$g():Bg()}function Bg(){P(wi(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(ba),{basename:e,navigator:l}=b.useContext(It),{matches:a}=b.useContext(De),{pathname:i}=sl(),n=JSON.stringify(Lm(a)),s=b.useRef(!1);return Km(()=>{s.current=!0}),b.useCallback((r,c={})=>{if(re(s.current,Vm),!s.current)return;if(typeof r=="number"){l.go(r);return}let h=Zr(r,JSON.parse(n),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ue([e,h.pathname])),(c.replace?l.replace:l.push)(h,c.state,c)},[e,l,n,i,t])}b.createContext(null);function Si(t,{relative:e}={}){let{matches:l}=b.useContext(De),{pathname:a}=sl(),i=JSON.stringify(Lm(l));return b.useMemo(()=>Zr(t,JSON.parse(i),a,e==="path"),[t,i,a,e])}function kg(t,e){return Jm(t,e)}function Jm(t,e,l){var S;P(wi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=b.useContext(It),{matches:i}=b.useContext(De),n=i[i.length-1],s=n?n.params:{},u=n?n.pathname:"/",r=n?n.pathnameBase:"/",c=n&&n.route;{let f=c&&c.path||"";Wm(u,!c||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let h=sl(),d;if(e){let f=typeof e=="string"?ga(e):e;P(r==="/"||((S=f.pathname)==null?void 0:S.startsWith(r)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${r}" but pathname "${f.pathname}" was given in the \`location\` prop.`),d=f}else d=h;let m=d.pathname||"/",p=m;if(r!=="/"){let f=r.replace(/^\//,"").split("/");p="/"+m.replace(/^\//,"").split("/").slice(f.length).join("/")}let y=Bm(t,{pathname:p});re(c||y!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),re(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=Xg(y&&y.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:ue([r,a.encodeLocation?a.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?r:ue([r,a.encodeLocation?a.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),i,l);return e&&w?b.createElement(yi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...d},navigationType:"POP"}},w):w}function qg(){let t=Jg(),e=Eg(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},n={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:n},"ErrorBoundary")," or"," ",b.createElement("code",{style:n},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),l?b.createElement("pre",{style:i},l):null,s)}var Lg=b.createElement(qg,null),$m=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const l=Mg(t.digest);l&&(t=l)}let e=t!==void 0?b.createElement(De.Provider,{value:this.props.routeContext},b.createElement(Vr.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(Yg,{error:t},e):e}};$m.contextType=jg;var Qs=new WeakMap;function Yg({children:t,error:e}){let{basename:l}=b.useContext(It);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=Ng(e.digest);if(a){let i=Qs.get(e);if(i)throw i;let n=Gm(a.location,l);if(Ym&&!Qs.get(e))if(n.isExternal||a.reloadDocument)window.location.href=n.absoluteURL||n.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(n.to,{replace:a.replace}));throw Qs.set(e,s),s}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n.absoluteURL||n.to}`})}}return t}function Gg({routeContext:t,match:e,children:l}){let a=b.useContext(ba);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(De.Provider,{value:t},l)}function Xg(t,e=[],l){let a=l==null?void 0:l.state;if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let i=t,n=a==null?void 0:a.errors;if(n!=null){let h=i.findIndex(d=>d.route.id&&(n==null?void 0:n[d.route.id])!==void 0);P(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(n).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let s=!1,u=-1;if(l&&a){s=a.renderFallback;for(let h=0;h<i.length;h++){let d=i[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:m,errors:p}=a,y=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){l.isStatic&&(s=!0),u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}}let r=l==null?void 0:l.onError,c=a&&r?(h,d)=>{var m,p;r(h,{location:a.location,params:((p=(m=a.matches)==null?void 0:m[0])==null?void 0:p.params)??{},unstable_pattern:Ag(a.matches),errorInfo:d})}:void 0;return i.reduceRight((h,d,m)=>{let p,y=!1,w=null,S=null;a&&(p=n&&d.route.id?n[d.route.id]:void 0,w=d.route.errorElement||Lg,s&&(u<0&&m===0?(Wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):u===m&&(y=!0,S=d.route.hydrateFallbackElement||null)));let f=e.concat(i.slice(0,m+1)),o=()=>{let v;return p?v=w:y?v=S:d.route.Component?v=b.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,b.createElement(Gg,{match:d,routeContext:{outlet:h,matches:f,isDataRoute:a!=null},children:v})};return a&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?b.createElement($m,{location:a.location,revalidation:a.revalidation,component:w,error:p,children:o(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):o()},null)}function Kr(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qg(t){let e=b.useContext(ba);return P(e,Kr(t)),e}function Zg(t){let e=b.useContext(as);return P(e,Kr(t)),e}function Vg(t){let e=b.useContext(De);return P(e,Kr(t)),e}function Jr(t){let e=Vg(t),l=e.matches[e.matches.length-1];return P(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function Kg(){return Jr("useRouteId")}function Jg(){var a;let t=b.useContext(Vr),e=Zg("useRouteError"),l=Jr("useRouteError");return t!==void 0?t:(a=e.errors)==null?void 0:a[l]}function $g(){let{router:t}=Qg("useNavigate"),e=Jr("useNavigate"),l=b.useRef(!1);return Km(()=>{l.current=!0}),b.useCallback(async(i,n={})=>{re(l.current,Vm),l.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...n}))},[t,e])}var Do={};function Wm(t,e,l){!e&&!Do[t]&&(Do[t]=!0,re(!1,l))}b.memo(Wg);function Wg({routes:t,future:e,state:l,isStatic:a,onError:i}){return Jm(t,void 0,{state:l,isStatic:a,onError:i})}function Ne(t){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fg({basename:t="/",children:e=null,location:l,navigationType:a="POP",navigator:i,static:n=!1,unstable_useTransitions:s}){P(!wi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),r=b.useMemo(()=>({basename:u,navigator:i,static:n,unstable_useTransitions:s,future:{}}),[u,i,n,s]);typeof l=="string"&&(l=ga(l));let{pathname:c="/",search:h="",hash:d="",state:m=null,key:p="default",unstable_mask:y}=l,w=b.useMemo(()=>{let S=Oe(c,u);return S==null?null:{location:{pathname:S,search:h,hash:d,state:m,key:p,unstable_mask:y},navigationType:a}},[u,c,h,d,m,p,a,y]);return re(w!=null,`<Router basename="${u}"> is not able to match the URL "${c}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:b.createElement(It.Provider,{value:r},b.createElement(yi.Provider,{children:e,value:w}))}function Ig({children:t,location:e}){return kg(Xu(t),e)}function Xu(t,e=[]){let l=[];return b.Children.forEach(t,(a,i)=>{if(!b.isValidElement(a))return;let n=[...e,i];if(a.type===b.Fragment){l.push.apply(l,Xu(a.props.children,n));return}P(a.type===Ne,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!a.props.index||!a.props.children,"An index route cannot have child routes.");let s={id:a.props.id||n.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=Xu(a.props.children,n)),l.push(s)}),l}var sn="get",un="application/x-www-form-urlencoded";function is(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Pg(t){return is(t)&&t.tagName.toLowerCase()==="button"}function tb(t){return is(t)&&t.tagName.toLowerCase()==="form"}function eb(t){return is(t)&&t.tagName.toLowerCase()==="input"}function lb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ab(t,e){return t.button===0&&(!e||e==="_self")&&!lb(t)}var Xi=null;function ib(){if(Xi===null)try{new FormData(document.createElement("form"),0),Xi=!1}catch{Xi=!0}return Xi}var nb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zs(t){return t!=null&&!nb.has(t)?(re(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${un}"`),null):t}function sb(t,e){let l,a,i,n,s;if(tb(t)){let u=t.getAttribute("action");a=u?Oe(u,e):null,l=t.getAttribute("method")||sn,i=Zs(t.getAttribute("enctype"))||un,n=new FormData(t)}else if(Pg(t)||eb(t)&&(t.type==="submit"||t.type==="image")){let u=t.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let r=t.getAttribute("formaction")||u.getAttribute("action");if(a=r?Oe(r,e):null,l=t.getAttribute("formmethod")||u.getAttribute("method")||sn,i=Zs(t.getAttribute("formenctype"))||Zs(u.getAttribute("enctype"))||un,n=new FormData(u,t),!ib()){let{name:c,type:h,value:d}=t;if(h==="image"){let m=c?`${c}.`:"";n.append(`${m}x`,"0"),n.append(`${m}y`,"0")}else c&&n.append(c,d)}}else{if(is(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=sn,a=null,i=un,s=t}return n&&i==="text/plain"&&(s=n,n=void 0),{action:a,method:l.toLowerCase(),encType:i,formData:n,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $r(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ub(t,e,l,a){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:e&&Oe(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function rb(t,e){if(t.id in e)return e[t.id];try{let l=await import(t.module);return e[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ob(t,e,l){let a=await Promise.all(t.map(async i=>{let n=e.routes[i.route.id];if(n){let s=await rb(n,l);return s.links?s.links():[]}return[]}));return hb(a.flat(1).filter(cb).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Co(t,e,l,a,i,n){let s=(r,c)=>l[c]?r.route.id!==l[c].route.id:!0,u=(r,c)=>{var h;return l[c].pathname!==r.pathname||((h=l[c].route.path)==null?void 0:h.endsWith("*"))&&l[c].params["*"]!==r.params["*"]};return n==="assets"?e.filter((r,c)=>s(r,c)||u(r,c)):n==="data"?e.filter((r,c)=>{var d;let h=a.routes[r.route.id];if(!h||!h.hasLoader)return!1;if(s(r,c)||u(r,c))return!0;if(r.route.shouldRevalidate){let m=r.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=l[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:r.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function fb(t,e,{includeHydrateFallback:l}={}){return db(t.map(a=>{let i=e.routes[a.route.id];if(!i)return[];let n=[i.module];return i.clientActionModule&&(n=n.concat(i.clientActionModule)),i.clientLoaderModule&&(n=n.concat(i.clientLoaderModule)),l&&i.hydrateFallbackModule&&(n=n.concat(i.hydrateFallbackModule)),i.imports&&(n=n.concat(i.imports)),n}).flat(1))}function db(t){return[...new Set(t)]}function mb(t){let e={},l=Object.keys(t).sort();for(let a of l)e[a]=t[a];return e}function hb(t,e){let l=new Set;return new Set(e),t.reduce((a,i)=>{let n=JSON.stringify(mb(i));return l.has(n)||(l.add(n),a.push({key:n,link:i})),a},[])}function Fm(){let t=b.useContext(ba);return $r(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function vb(){let t=b.useContext(as);return $r(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Wr=b.createContext(void 0);Wr.displayName="FrameworkContext";function Im(){let t=b.useContext(Wr);return $r(t,"You must render this element inside a <HydratedRouter> element"),t}function pb(t,e){let l=b.useContext(Wr),[a,i]=b.useState(!1),[n,s]=b.useState(!1),{onFocus:u,onBlur:r,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=e,m=b.useRef(null);b.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let w=f=>{f.forEach(o=>{s(o.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return m.current&&S.observe(m.current),()=>{S.disconnect()}}},[t]),b.useEffect(()=>{if(a){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[a]);let p=()=>{i(!0)},y=()=>{i(!1),s(!1)};return l?t!=="intent"?[n,m,{}]:[n,m,{onFocus:_a(u,p),onBlur:_a(r,y),onMouseEnter:_a(c,p),onMouseLeave:_a(h,y),onTouchStart:_a(d,p)}]:[!1,m,{}]}function _a(t,e){return l=>{t&&t(l),l.defaultPrevented||e(l)}}function gb({page:t,...e}){let{router:l}=Fm(),a=b.useMemo(()=>Bm(l.routes,t,l.basename),[l.routes,t,l.basename]);return a?b.createElement(xb,{page:t,matches:a,...e}):null}function bb(t){let{manifest:e,routeModules:l}=Im(),[a,i]=b.useState([]);return b.useEffect(()=>{let n=!1;return ob(t,e,l).then(s=>{n||i(s)}),()=>{n=!0}},[t,e,l]),a}function xb({page:t,matches:e,...l}){let a=sl(),{future:i,manifest:n,routeModules:s}=Im(),{basename:u}=Fm(),{loaderData:r,matches:c}=vb(),h=b.useMemo(()=>Co(t,e,c,n,a,"data"),[t,e,c,n,a]),d=b.useMemo(()=>Co(t,e,c,n,a,"assets"),[t,e,c,n,a]),m=b.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(e.forEach(o=>{var g;let v=n.routes[o.route.id];!v||!v.hasLoader||(!h.some(z=>z.route.id===o.route.id)&&o.route.id in r&&((g=s[o.route.id])!=null&&g.shouldRevalidate)||v.hasClientLoader?S=!0:w.add(o.route.id))}),w.size===0)return[];let f=ub(t,u,i.unstable_trailingSlashAwareDataRequests,"data");return S&&w.size>0&&f.searchParams.set("_routes",e.filter(o=>w.has(o.route.id)).map(o=>o.route.id).join(",")),[f.pathname+f.search]},[u,i.unstable_trailingSlashAwareDataRequests,r,a,n,h,e,t,s]),p=b.useMemo(()=>fb(d,n),[d,n]),y=bb(d);return b.createElement(b.Fragment,null,m.map(w=>b.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...l})),p.map(w=>b.createElement("link",{key:w,rel:"modulepreload",href:w,...l})),y.map(({key:w,link:S})=>b.createElement("link",{key:w,nonce:l.nonce,...S,crossOrigin:S.crossOrigin??l.crossOrigin})))}function yb(...t){return e=>{t.forEach(l=>{typeof l=="function"?l(e):l!=null&&(l.current=e)})}}var wb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wb&&(window.__reactRouterVersion="7.13.2")}catch{}function Sb({basename:t,children:e,unstable_useTransitions:l,window:a}){let i=b.useRef();i.current==null&&(i.current=eg({window:a,v5Compat:!0}));let n=i.current,[s,u]=b.useState({action:n.action,location:n.location}),r=b.useCallback(c=>{l===!1?u(c):b.startTransition(()=>u(c))},[l]);return b.useLayoutEffect(()=>n.listen(r),[n,r]),b.createElement(Fg,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:n,unstable_useTransitions:l})}var Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,th=b.forwardRef(function({onClick:e,discover:l="render",prefetch:a="none",relative:i,reloadDocument:n,replace:s,unstable_mask:u,state:r,target:c,to:h,preventScrollReset:d,viewTransition:m,unstable_defaultShouldRevalidate:p,...y},w){let{basename:S,navigator:f,unstable_useTransitions:o}=b.useContext(It),v=typeof h=="string"&&Pm.test(h),g=Gm(h,S);h=g.to;let z=Ug(h,{relative:i}),j=sl(),T=null;if(u){let Yt=Zr(u,[],j.unstable_mask?j.unstable_mask.pathname:"/",!0);S!=="/"&&(Yt.pathname=Yt.pathname==="/"?S:ue([S,Yt.pathname])),T=f.createHref(Yt)}let[_,R,N]=pb(a,y),zt=Ab(h,{replace:s,unstable_mask:u,state:r,target:c,preventScrollReset:d,relative:i,viewTransition:m,unstable_defaultShouldRevalidate:p,unstable_useTransitions:o});function le(Yt){e&&e(Yt),Yt.defaultPrevented||zt(Yt)}let xa=!(g.isExternal||n),zi=b.createElement("a",{...y,...N,href:(xa?T:void 0)||g.absoluteURL||z,onClick:xa?le:e,ref:yb(w,R),target:c,"data-discover":!v&&l==="render"?"true":void 0});return _&&!v?b.createElement(b.Fragment,null,zi,b.createElement(gb,{page:z})):zi});th.displayName="Link";var zb=b.forwardRef(function({"aria-current":e="page",caseSensitive:l=!1,className:a="",end:i=!1,style:n,to:s,viewTransition:u,children:r,...c},h){let d=Si(s,{relative:c.relative}),m=sl(),p=b.useContext(as),{navigator:y,basename:w}=b.useContext(It),S=p!=null&&Db(d)&&u===!0,f=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,o=m.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;l||(o=o.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&w&&(v=Oe(v,w)||v);const g=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let z=o===f||!i&&o.startsWith(f)&&o.charAt(g)==="/",j=v!=null&&(v===f||!i&&v.startsWith(f)&&v.charAt(f.length)==="/"),T={isActive:z,isPending:j,isTransitioning:S},_=z?e:void 0,R;typeof a=="function"?R=a(T):R=[a,z?"active":null,j?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof n=="function"?n(T):n;return b.createElement(th,{...c,"aria-current":_,className:R,ref:h,style:N,to:s,viewTransition:u},typeof r=="function"?r(T):r)});zb.displayName="NavLink";var Tb=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:l,reloadDocument:a,replace:i,state:n,method:s=sn,action:u,onSubmit:r,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:m,...p},y)=>{let{unstable_useTransitions:w}=b.useContext(It),S=Ob(),f=Rb(u,{relative:c}),o=s.toLowerCase()==="get"?"get":"post",v=typeof u=="string"&&Pm.test(u),g=z=>{if(r&&r(z),z.defaultPrevented)return;z.preventDefault();let j=z.nativeEvent.submitter,T=(j==null?void 0:j.getAttribute("formmethod"))||s,_=()=>S(j||z.currentTarget,{fetcherKey:e,method:T,navigate:l,replace:i,state:n,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:m});w&&l!==!1?b.startTransition(()=>_()):_()};return b.createElement("form",{ref:y,method:o,action:f,onSubmit:a?r:g,...p,"data-discover":!v&&t==="render"?"true":void 0})});Tb.displayName="Form";function Eb(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eh(t){let e=b.useContext(ba);return P(e,Eb(t)),e}function Ab(t,{target:e,replace:l,unstable_mask:a,state:i,preventScrollReset:n,relative:s,viewTransition:u,unstable_defaultShouldRevalidate:r,unstable_useTransitions:c}={}){let h=Hg(),d=sl(),m=Si(t,{relative:s});return b.useCallback(p=>{if(ab(p,e)){p.preventDefault();let y=l!==void 0?l:ui(d)===ui(m),w=()=>h(t,{replace:y,unstable_mask:a,state:i,preventScrollReset:n,relative:s,viewTransition:u,unstable_defaultShouldRevalidate:r});c?b.startTransition(()=>w()):w()}},[d,h,m,l,a,i,e,t,n,s,u,r,c])}var _b=0,jb=()=>`__${String(++_b)}__`;function Ob(){let{router:t}=eh("useSubmit"),{basename:e}=b.useContext(It),l=Kg(),a=t.fetch,i=t.navigate;return b.useCallback(async(n,s={})=>{let{action:u,method:r,encType:c,formData:h,body:d}=sb(n,e);if(s.navigate===!1){let m=s.fetcherKey||jb();await a(m,l,s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:d,formMethod:s.method||r,formEncType:s.encType||c,flushSync:s.flushSync})}else await i(s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:d,formMethod:s.method||r,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:l,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,i,e,l])}function Rb(t,{relative:e}={}){let{basename:l}=b.useContext(It),a=b.useContext(De);P(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),n={...Si(t||".",{relative:e})},s=sl();if(t==null){n.search=s.search;let u=new URLSearchParams(n.search),r=u.getAll("index");if(r.some(h=>h==="")){u.delete("index"),r.filter(d=>d).forEach(d=>u.append("index",d));let h=u.toString();n.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(n.search=n.search?n.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(n.pathname=n.pathname==="/"?l:ue([l,n.pathname])),ui(n)}function Db(t,{relative:e}={}){let l=b.useContext(Qm);P(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=eh("useViewTransitionState"),i=Si(t,{relative:e});if(!l.isTransitioning)return!1;let n=Oe(l.currentLocation.pathname,a)||l.currentLocation.pathname,s=Oe(l.nextLocation.pathname,a)||l.nextLocation.pathname;return Bn(i.pathname,s)!=null||Bn(i.pathname,n)!=null}const Cb=`
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from travlla.dexignzone.com/tailwind/demo/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Apr 2026 06:42:14 GMT -->
<head>
    <!-- Character Encoding -->
	<meta charset="UTF-8">

	<!-- Responsive Design -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Title -->
	<title>Travlla - Travel & Tour Tailwind CSS Template | Home Page 1</title>

    <meta name="title" content="Travlla - Travel & Tour Tailwind CSS Template | DexignZone">
    <meta name="description" content="Travlla is a responsive Travel & Tour Tailwind CSS template designed for travel agencies, tour operators, holiday planners, and booking websites.">
    <meta name="keywords" content="travel HTML template, tour booking template, Tailwind travel website, tourism Tailwind template, holiday booking, responsive travel design, tour operator website, Travlla template, modern travel design, travel agency web design">
    <meta name="author" content="DexignZone">
    <meta name="robots" content="index, follow">

    <!-- CANONICAL URL -->
    <link rel="canonical" href="index-2.html">

    <!-- FAVICONS ICON -->
    <link rel="icon" type="image/png" href="assets/images/favicon.ico">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Travlla - Travel & Tour Tailwind CSS Template | DexignZone">
    <meta property="og:description" content="Travlla is a responsive Travel & Tour Tailwind CSS template designed for travel agencies, tour operators, holiday planners, and booking websites.">
    <meta property="og:image" content="social-image.png">
    <meta property="og:url" content="https://travlla.dexignzone.com/demo/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Travlla">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Travlla - Travel & Tour Tailwind CSS Template | DexignZone">
    <meta name="twitter:description" content="Travlla is a responsive Travel & Tour Tailwind CSS template designed for travel agencies, tour operators, holiday planners, and booking websites.">
    <meta name="twitter:image" content="social-image.png">

    <!-- IE Compatibility -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
	<link rel="stylesheet" type="text/css" href="assets/icons/line-awesome/css/line-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="assets/icons/flaticon/flaticon.css">
	<link rel="stylesheet" type="text/css" href="assets/icons/fontawesome/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="assets/icons/themify-icons/css/themify-icons.css">
	<link rel="stylesheet" type="text/css" href="assets/icons/feather/css/feather.css">
		
	<link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" href="assets/vendor/flatpickr/css/flatpicker.css">
	<link rel="stylesheet" href="assets/css/lc_lightbox.css">
	<link rel="stylesheet" href="assets/vendor/magnific-popup/magnific-popup.css">
	<link rel="stylesheet" href="assets/vendor/lightgallery/dist/css/lightgallery-bundle.min.css">
	<link rel="stylesheet" href="assets/vendor/nouislider/nouislider.min.css">

	<!-- style -->
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com/">
	<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Afacad:ital,wght@0,400..700;1,400..700&amp;family=Figtree:ital,wght@0,300..900;1,300..900&amp;family=Kaushan+Script&amp;display=swap" rel="stylesheet">

</head>
<body id="bg" class="selection:bg-[#484848] selection:text-white">
<!-- LOADING AREA START ===== -->
<div class="loading-area">
    <div class="loading-box"></div>
    <div class="loading-pic">
        <figure class="loader">
            <div class="dot white"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </figure>
    </div>
</div>
<!-- LOADING AREA  END ====== -->

<!-- Curser Pointer -->
<div class="cursor"></div>
<div class="cursor2"></div>
<div class="page-wraper">
	<header class="site-header sticky-header absolute lg:left-8.75 lg:right-8.75 lg:top-8.75 left-0 right-0 top-0 duration-500 z-999 [.site-header.is-fixed]:fixed [.site-header.is-fixed]:animate-header-scroll-animation [.site-header.is-fixed]:bg-primary [.site-header.is-fixed]:rounded-b-3xl [.site-header.is-fixed]:top-0">
		<div class="main-bar-wraper">
			<div class="w-full lg:min-h-30 min-h-20 lg:ps-8.75 px-4 lg:pe-13.75 duration-500 rounded-5xl flex items-center justify-between">
				<div class="flex relative w-full">
					<div class="flex items-center relative z-9 h-20 lg:w-44 w-30">
						<a href="index-2.html" class="table-cell align-middle">
<img src="/assets/logo.png" alt="logo" class="object-contain duration-500" style="height:6rem;width:auto;">
						</a>
					</div>
					<button class="xmenu-toggler lg:hidden float-right mt-4.5 mb-4 md:ml-7 ml-4 size-11 bg-dark-600 relative cursor-pointer max-lg:order-1" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
						<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5"></span>
						<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25"></span>
						<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4"></span>
					</button>
					<div class="lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 opacity-0 visible pointer-events-none menu-close fade-overlay"></div>
					<div class="flex lg:justify-center lg:basis-auto lg:grow max-lg:flex-col justify-start font-base max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll">
						<div class="flex items-center relative z-9 py-6.25 lg:hidden">
							<a href="index-2.html" class="table-cell align-middle">
								<img src="/assets/logo.png" alt="" class="object-contain duration-500">
							</a>
						</div>
						<ul class="lg:flex flex-wrap navbar-nav">
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="index-2.html">
									<span class="inline-block">Home</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="about-1.html">
									<span class="inline-block">About</span>
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="pages.html">
									<span class="inline-block">Pages</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
									</li>
									<li class="relative border-b border-black/5"><a class="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25" href="faq.html"><span>Faq</span></a></li>
									<li class="relative border-b border-black/5"><a class="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25" href="pricing.html"><span>Pricing</span></a></li>
									<li class="relative border-b border-black/5"><a class="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25" href="error-404.html"><span>Error-404</span></a></li>
									<li class="relative border-b border-black/5"><a class="block relative text-sm text-primary font-semibold py-3 lg:px-5 duration-500 hover:text-primary hover:pl-6.25" href="compare.html"><span>Compare</span></a></li>
								</ul>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="destinations.html">
									<span class="inline-block">Destinations</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="tours.html">
									<span class="inline-block">Tours</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="blogs.html">
									<span class="inline-block">Blogs</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="contact.html">
									<span class="inline-block">Contact</span>
								</a>
							</li>
						</ul>
						<div class="lg:hidden block max-lg:p-5 text-center mt-auto">
							<ul>
								<li class="inline-block mx-0.5">
									<a class="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></a>
								</li>
								<li class="inline-block mx-0.5">
									<a class="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></a>
								</li>
								<li class="inline-block mx-0.5">
									<a class="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></a>
								</li>
								<li class="inline-block mx-0.5">
									<a class="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></a>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex lg:justify-end lg:items-center z-9 h-20 xl:pl-8 max-lg:ms-auto">
						<div class="flex items-center">
							<ul class="ml-5 flex items-center -mr-2.5">
								<li class="inline-block">
									<button type="button" aria-label="Open search" data-target="#searchOverlay1" aria-expanded="false" aria-controls="searchOverlay1" class="flex items-center justify-center size-14 px-4 quick-search cursor-pointer text-white" data-target="#searchOverlay1">
										<i class="fa fa-search text-xl" aria-hidden="true"></i>
									</button>
								</li>
								<li class="inline-block" data-drawer="#offcanvas-right" data-drawer-placement="right">
									<button class="lg:mt-4.5 lg:mb-4 lg:ml-5 lg:size-11 bg-dark-600 relative cursor-pointer max-lg:order-1 max-md:ms-auto toggle-nav-btn" type="button" aria-label="Open information drawer" aria-expanded="false" aria-controls="offcanvas-right">
										<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-7 max-lg:hidden"></span>
										<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-7 max-lg:hidden"></span>
										<span class="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-7 max-lg:hidden"></span>
										<b class="lg:hidden uppercase fixed -rotate-90 -translate-y-1/2 -right-7.5 bg-primary px-5 rounded-t-2lg text-white tracking-[2px] top-1/2">Info</b>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="fixed -top-full left-0 size-full bg-body-bg z-999 flex items-center justify-center p-8 duration-500 xmenu-search" id="searchOverlay1">
						<form class="absolute top-1/2 left-1/2 -translate-1/2 w-[calc(100%_-_80px)] max-w-150 text-primary text-3xl font-light text-left outline-none p-1.5 duration-500 bg-paleaqua rounded-25xl" action="#">
							<div class="relative flex flex-wrap items-stretch w-full bg-white rounded-25xl overflow-hidden">
								<input name="search" value="" type="text" class="h-17.5 pr-3 pl-7.5 text-lg text-primary w-[1%] flex-1 outline-none duration-300 placeholder:text-primary focus:border-primary" placeholder="Search...">
								<span class="flex">
									<button type="button" aria-label="Submit search" class="px-2.5 outline-none size-17.5 bg-primary text-2xl text-white rounded-full flex-1 ml-2.5 duration-500 cursor-pointer"><i class="fa fa-search" aria-hidden="true"></i></button>
								</span>
							</div>
						</form>
						<button type="button" aria-label="Close search" class="absolute right-8 top-8 text-primary bg-citrusyellow text-base size-10 cursor-pointer rounded search-remove"><i class="fa fa-close" aria-hidden="true"></i></button>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div id="smooth-wrapper">
		<div id="smooth-content">
			<!-- CONTENT START -->
			<div class="page-content">
				<!-- Banner Style One -->
				<div class="3xl:h-237.5 2xl:h-225 sm:h-192 h-170 overflow-hidden relative trv-banner-1-wrap">
					<div class="trv-banner-1-rain-effect">
						<div class="absolute left-0 size-full z-2 rain front-row"></div>
						<div class="absolute left-0 size-full z-2 rain back-row"></div>
					</div>
					<video muted loop autoplay class="absolute left-1/2 top-1/2 -translate-1/2 object-cover size-full z-0">
						<source src="assets/images/video-1.mp4" type="video/mp4">
					</video>
					<div class="relative z-2 3xl:h-220 2xl:h-207.5 lg:h-171.25 h-195 lg:m-8.75 lg:rounded-3xl bg-black/35">
						<div class="xl:pt-50 md:pt-40 pt-37.5 md:pl-17.5 max-md:px-5 max-w-255">
							<span class="2xl:text-48 text-3xl leading-17.5 text-aquamist xl:pl-12.5 font-display block">Explore</span>
							<div class="relative">
								<h1 class="!font-display 2xl:!text-62xl xl:!text-45xl md:!text-32xl !text-80 !text-white relative inline-block animate-slide-left" title="World">World</h1>
								
								<h1 class="!font-display 2xl:!text-62xl xl:!text-45xl md:!text-32xl !text-80 !text-transparent absolute left-0 top-0 z-1 [-webkit-text-stroke:2px_#fff] animate-slide-left" title="World">World</h1>
							</div>
							<span class="absolute 2xl:-bottom-8.75 xl:-bottom-12.5 bottom-0 xl:left-25 left-12.5 max-2xl:max-w-108 max-xl:max-w-75 max-md:hidden">
								<img src="assets/images/main-slider/slider1/Rock.png" alt="Image" width="582" height="473">
							</span>
							<div class="text-lg leading-7.5 text-white relative 2xl:ml-175 xl:ml-120 xl:max-w-57.5 w-full mb-7.5">The Safety of our customers at all stages</div>
							<div class="2xl:ml-187.5 xl:ml-120 relative z-[4]"><a href="contact.html" class="site-button butn-bg-shape">Get In Touch</a></div>
						</div>
						<div class="text-white absolute bottom-7.5 3xl:right-112.5 2xl:right-64.5 sm:right-10 right-5 flex items-center z-4">
							<span class="pr-26.25 text-xs leading-4.5 tracking-[0.2em] uppercase relative inline-block after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-5 after:top-1/2 after:-translate-y-1/2 max-sm:hidden">Follow Us</span>
							<ul class="flex">
								<li><a href="https://www.facebook.com/" target="_blank" class="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i class="fa-brands fa-facebook-f"></i></a></li>
								<li><a href="https://www.linkedin.com/" target="_blank" class="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i class="fa-brands fa-linkedin-in"></i></a></li>
								<li><a href="https://www.instagram.com/" target="_blank" class="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i class="fa-brands fa-instagram"></i></a></li>
								<li><a href="https://www.x.com/" target="_blank" class="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i class="fa-brands fa-x-twitter"></i></a></li>
							</ul>
						</div>
						<div class="absolute inset-0 z-[3] overflow-hidden max-lg:hidden">
							<div class="absolute top-1/2 -translate-y-1/2 size-175 right-0">
								<div class="-right-4/5 absolute z-2 rotate-center animate-rotate-center"><span class="size-175 rounded-full border border-white/30 block relative after:size-3.5 after:bg-white after:rounded-full after:absolute after:right-8.75 after:top-1/4 after:z-10"></span></div>
							</div>
							<div class="absolute top-1/2 -translate-y-1/2 size-225 right-0">
								<div class="right-[-70%] absolute z-2 animate-rotate-center"><span class="size-225 rounded-full border border-white/30 block relative after:size-3.5 after:bg-secondary after:rounded-full after:absolute after:right-18.75 after:bottom-1/5 after:z-10"></span></div>
							</div>
							<div class="absolute top-1/2 -translate-y-1/2 size-275 right-0">
								<div class="-right-3/5 absolute z-2 animate-rotate-center"><span class="size-275 rounded-full border border-white/30 block relative after:size-3.5 after:bg-citrusyellow after:rounded-full after:absolute after:left-0.75 after:top-2/5 after:z-10"></span></div>
							</div>
						</div>
					</div>
					<div class="absolute left-0 bottom-0 z-10">
						<div class="xl:max-w-82.5 max-w-57.5 animate-rotate-90-br-cw">
							<img src="assets/images/lizard.png" alt="Image" class="w-full" width="330" height="346">
							<img src="assets/images/li-eye.gif" alt="image" class="absolute bottom-[70%] left-[24%] w-10">
						</div>
					</div>
					<div class="absolute top-37.5 w-full">            
						<div class="inline-block whitespace-nowrap animate-moveCloud">
							<img src="assets/images/cloud-1.png" alt="Image" class="w-auto" width="400" height="332">
						</div>
					</div>
					<div class="absolute top-0 w-full">
						<div class="inline-block whitespace-nowrap animate-moveCloud">
							<img src="assets/images/cloud-2.png" alt="Image" class="w-auto" width="297" height="225">    
						</div>
					</div>
				</div>
				<!-- Banner Style One End -->
				
				<!-- SEARCH BAR START-->
				<div class="bg-lightturquoise xl:pt-17.5 pt-12.5 px-5">
					<div class="max-w-250 mx-auto lg:h-25 p-1.75 bg-paleaqua lg:rounded-25xl rounded-2xl">
						<div class="bg-white lg:rounded-25xl rounded-2xl sm:pt-3 sm:pr-3.25 sm:pb-2.25 sm:pl-10 p-5 h-full">
							<form>
								<div class="flex justify-between items-center max-lg:flex-wrap max-sm:flex-col">
									<div class="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
										<div class="custom-select style-1" data-label="Color">
											<label class="pb-1.25 flex items-center">
												<i class="inline-block mr-5">
													<img src="assets/images/search-icon/icon1.png" alt="Image" class="h-5 w-full">
												</i>Location
											</label>
											<select class="dynamic-select" id="sortingSelect">
												<option value="Zealand" selected>New Zealand</option>
												<option value="Paris">Paris</option>
												<option value="Bali">Bali</option>
												<option value="Indonesia">Indonesia</option>
											</select>
										</div>
									</div>
									<div class="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
										<div class="custom-select style-1">
											<label class="pb-1.25 flex items-center">
												<i class="inline-block mr-5"><img src="assets/images/search-icon/icon2.png" alt="Image" class="h-5 w-full"></i>
												Activity Type
											</label>
											<select class="dynamic-select" aria-label="Default select example">
												<option selected>Adventure</option>
												<option value="1">Beyond the Edge</option>
												<option value="2">Whispering Peaks</option>
												<option value="3">Wave Riders</option>
											</select>
										</div>
									</div>
									<div class="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
										<div class="">
											<label class="pb-1.25 flex items-center"><i class="inline-block mr-5"><img src="assets/images/search-icon/icon3.png" class="h-5 w-full" alt="Image"></i>Date</label>
											<div class="relative">
												<input class="outline-none h-8.5 p-0 font-title font-bold text-xl text-primary bg-transparent placeholder:!text-primary flatpickr1" placeholder="Date">
												<span class="absolute right-3.75 bottom-0 text-input text-lg pointer-events-none">
													<i class="fa fa-solid fa-calendar-days"></i>
												</span>
											</div>
										</div>
									</div>
									<div class="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
										<div class="">
											<label for="travelerCount" class="pb-1.25 flex items-center"><i class="inline-block mr-5"><img src="assets/images/search-icon/icon4.png" class="h-5 w-full" alt="Image"></i>Traveler</label>
											<div class="input-group">
												<span class="flex gap-2.5 w-full">
													<input id="travelerCount" type="number" step="1" value="1" name="quantity" class="touchspin h-6 lg:w-17.5 w-full leading-6.75 text-primary font-bold outline-none font-title text-xl">
													<button type="button" aria-label="Decrease traveler count" value="-" data-field="quantity" class="button-minus cursor-pointer size-6 leading-6.75 text-center text-base text-input"><i class="las la-minus text-lg" aria-hidden="true"></i></button>
													<button type="button" aria-label="Increase traveler count" value="+" data-field="quantity" class="button-plus cursor-pointer size-6 leading-6.75 text-center text-base text-input"><i class="las la-plus text-lg" aria-hidden="true"></i></button>
												</span>
											</div>
										</div>
									</div>
									<div class="lg:w-auto w-full">
										<div class="trv-search-st1-search-btn">
											<button aria-label="Search" class="text-28 text-white rounded-full size-15 bg-primary max-lg:!w-full duration-500 cursor-pointer"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- SEARCH BAR END--> 
				
				<!--POPULAR DESTINATION SECTION START-->
				<div class="relative overflow-hidden md:pb-22.5 pb-10 md:pt-30 pt-17.5 bg-contain bg-[bottom_center] bg-repeat-x bg-[url(../images/background/Cloud-bg.png)]">
					<div class="container">
						<!-- TITLE START-->
						<div class="text-center max-w-150 mx-auto md:mb-15 mb-7.5">
							<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5"><span class="text-citrusyellow">Popular </span>Destination</h2>
							<p class="text-base">Destinations worth exploring! Here are a few popular spots</p>
							<div class="-mt-7">
								<img src="assets/images/background/Title-Separator.png" alt="Image" class="w-117.5 inline-block" width="470" height="70">
							</div>
						</div>
						<!-- TITLE END-->
						<div >
							<div class="swiper reviewtwo-slider !relative !z-1 !-mt-7.5 xl:!pb-29 !pb-22.5">
								<div class="swiper-wrapper pt-7.5">
									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic1.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Paris</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic2.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html"  class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Maldives</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic3.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Hong Kong</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic4.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Thailand</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic5.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Bangkok</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic6.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Tokyo</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic7.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Spain</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="destination-detail.html"><img src="assets/images/destinations/style1/pic8.jpg" width="309" height="500" alt="Image" class="w-full h-125 object-cover object-center"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="destination-detail.html" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">California</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-button-next"></div>
								<div class="swiper-button-prev"></div>
							</div>
						</div> 
					</div>
					<div class="absolute -left-28.75 top-2/5 w-57.5 opacity-50 animate-slide-top2"><img src="assets/images/hotballon-Left.png" alt="image" width="233" height="333"></div>
					<div class="absolute -right-13.75 top-2/5 w-27.5 animate-slide-top"><img src="assets/images/hotballon-right.png" alt="image"  width="110" height="166"></div>
				</div>
				<!--POPULAR DESTINATION SECTION END-->
				
				<!--WE RECOMMEND SECTION START-->
				<div class="bg-paleaqua lg:pt-30">
					<div class="container">
						<div class="grid grid-cols-12">
							<div class="xl:col-span-5 lg:col-span-7 col-span-12 px-3.75 max-lg:mb-40">
								<div class="2xl:mb-30 mb-10 relative">
									<!-- TITLE START-->
									<div class="text-left 2xl:mb-15 mb-10">
										<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5">We <span class="text-citrusyellow">Recommend </span>Beautiful Destinations Every Month</h2>
										<p class="2xl:mb-12.5 mb-7 sm:pr-8.75 text-base">Travlla is a multi-award-winning strategy and content creation
											agency that specializes in travel marketing. They have one of the
											world's largest and most influential online travel communities,
											helping brands and tourism.
										</p>
									</div>
									<!-- TITLE END-->
									<div class="mb-5 flex max-sm:flex-wrap">
										<div class="sm:w-35 w-full sm:h-51 h-40 p-2.25 bg-white rounded-3xl flex min-w-35 sm:mr-7.5 max-sm:mb-10">
											<div class="bg-primary shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-2.5 rounded-2xxl text-center flex flex-col items-center justify-center w-full">
												<span class="text-38 text-citrusyellow font-black block">24/7</span>
												<span class="text-white text-2xl font-title font-medium block">Guide Support</span>
											</div> 
										</div>
										<div>
											<div class="flex mb-7.5 trv-icon-bx-st1">
												<div class="bg-no-repeat size-21.25 min-w-21.25 bg-cover mr-7.5 flex items-center justify-center bg-[url(../images/trv-icon/Icon-Bg.png)] trv-icon-bx-media">
													<span><img src="assets/images/trv-icon/travel-guide.png" alt="travel-guide" width="48" height="49" loading="lazy" class="max-w-12"></span>
												</div>
												<div >
													<h2 class="mb-3 font-medium text-2xl">Trusted travel guide</h2>
													<p>Provides reliable information to help travelers plan their trips efficiently and safely.</p>   
												</div>
											</div>
											<div class="flex mb-7.5 trv-icon-bx-st1">
												<div class="bg-no-repeat size-21.25 min-w-21.25 bg-cover mr-7.5 flex items-center justify-center bg-[url(../images/trv-icon/Icon-Bg.png)] trv-icon-bx-media">
													<span><img src="assets/images/trv-icon/mission-icon.png" alt="mission-icon" width="48" height="49" loading="lazy" class="max-w-12"></span>
												</div>
												<div >
													<h2 class="mb-3 font-medium text-2xl">Mission & Vision</h2>
													<p>Aims to connect people to positive experience through travel, helping them see the world differently.</p>   
												</div>
											</div>
										</div>
									</div>
									<div class="sm:flex items-center">
										<div class="mr-3">
											<a href="destination-detail.html" class="site-button butn-bg-shape">Discover More</a>
										</div>
										<div class="flex max-sm:pt-2.5">
											<div class="flex items-center mr-5">
												<span class="size-9 inline-flex rounded-full overflow-hidden border border-white ml-0">
													<img src="assets/images/hpy-cus/pic1.jpg" alt="img" width="34" height="34" loading="lazy">
												</span>
												<span class="size-9 inline-flex rounded-full overflow-hidden border border-white -ml-2.5">
													<img src="assets/images/hpy-cus/pic2.jpg" alt="img" width="34" height="34" loading="lazy">
												</span>
												<span class="size-9 inline-flex rounded-full overflow-hidden border border-white -ml-2.5">
													<img src="assets/images/hpy-cus/pic3.jpg" alt="img" width="34" height="34" loading="lazy">
												</span>
											</div>
											<div>
												<span class="block font-black text-22 text-primary">3.5k</span>
												<p class="mb-0 uppercase font-medium text-xs">Happy Customer</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="xl:col-span-7 lg:col-span-5 col-span-12 relative px-3.75">
								<div class="absolute z-1 lg:top-7.5 -top-40.5 3xl:-right-36.25 lg:-right-0.25 -right-6.25 animate-slide-top max-md:hidden">
									<div class="absolute lg:-left-27.5 -left-22.5 bottom-1.25">
										<img src="assets/images/plane1.png" alt="image" class="max-lg:max-w-80" width="384" height="193" loading="lazy">
									</div>
									<div class="bg-white rounded-xl py-1 lg:pl-13.75 pl-10.75 pr-6 inline-flex items-center lg:w-88 w-70">
										<h2 class="!font-display !font-black lg:!text-83 !text-6xl leading-none !text-secondary !mb-0 !text-shadow-[0px_4px_0px_var(--primary)] !mr-6.75">25</h2>
										<span class="font-black lg:text-28 text-2xl leading-[1.2] text-primary">Years of Experience</span>
									</div>
								</div>
								<div class="mt-3 xl:size-105 sm:size-90 size-70 border-[20px] border-white rounded-full
								shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] max-xl:relative max-xl:-bottom-41.25 max-lg:bottom-1/2 max-lg:translate-x-1/2 max-md:translate-x-0">
									<img src="assets/images/we-rec-pic2.jpg" alt="image" class="w-full rounded-full" width="380" height="380" loading="lazy">
								</div>
								<div class="absolute 3xl:-right-43.75 right-0.25 bottom-0 max-lg:w-[80%]">
									<img src="assets/images/we-rec-pic.png" alt="Image" width="764" height="586" loading="lazy">
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--WE RECOMMEND SECTION END-->
				
				<!-- CLIENT LOGO SECTION START -->
				<div class="p-5 bg-paleaqua">
					<div class="py-5 bg-white border-4 border-dashed border-paleaqua">
						<div class="container">
							<div class="grid grid-cols-12 items-center">
								<div class="xl:col-span-3 col-span-12">
									<div>
										<h2 class="!font-black !leading-[1] xl:text-46 md:text-40 text-3xl max-xl:mb-5 max-xl:text-center"><span class="!font-base text-citrusyellow block text-5xl !font-black">1K+ </span>Brands Trust Us</h2>
									</div>
								</div>
								<div class="xl:col-span-9 col-span-12">
									<div class="swiper brand-swiper">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/1.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="339" height="82" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/2.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="232" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/3.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="389" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/4.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="219" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/5.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="211" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/1.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="339" height="81" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/2.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="232" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/3.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="339" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/4.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="219" height="91" loading="lazy"></a>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="text-center">
													<a href="about-1.html"><img src="assets/images/client-logo/dark/5.png" class="w-auto h-11.25 mx-auto opacity-40" alt="img" width="211" height="91" loading="lazy"></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- CLIENT LOGO  SECTION End -->
				
				<!-- VIDEO WITH ACHIVMENT SECTION START-->
				<div class="lg:py-30 py-15 bg-paleaqua">
					<div class="container">
						<div class="relative md:rounded-6xl rounded-3xl overflow-hidden">
							<div class="lg:h-160 sm:h-200 h-150 bg-black overflow-hidden relative">
								<div class="flex items-center h-full relative z-2 justify-center">
									<div class="video-section-outer">
										<div class="video-section">
											<a href="https://www.youtube.com/watch?v=0O2ah2XLbto" class="popup-youtube play-now-video">
												<i class="icon fa fa-play"></i>
												<span class="ripple"></span>
											</a>                                              
										</div>
									</div>
									<div class="absolute 2xl:h-107.5 lg:h-100.5 sm:h-110.5 h-100 max-md:text-center rounded-3xl border-[10px] border-white/20 md:top-12.5 md:right-12.5 md:left-12.5 top-3.5 right-3.5 left-3.5">
										<div class="xl:max-w-127.5 max-w-80 xl:h-71.75 bg-[url(../images/say-yes.png)] bg-cover w-full absolute lg:top-22.5 top-15.5 lg:-right-5 md:right-[20%] right-0 z-10 xl:pl-32.5 lg:pl-20 lg:pt-27 lg:pb-2.5 lg:pr-2.5 lg:bg-position-[center_18px] sm:bg-position-[-40px_-36px] bg-position-[-10px_-16px] bg-no-repeat">
											<div class="text-white xl:text-40 sm:text-36 text-26 leading-[1] font-display">Say <span class="xl:text-25xl md:text-80 text-6xl text-citrusyellow">Yes!</span></div>
											<div class="text-white xl:text-40 sm:text-36 text-26 leading-[1] font-display">To New Adventure</div> 
										</div>
									</div>
								</div>
								<div class="h-200 md:h-250 opacity-100 bg-[center_top] bg-no-repeat bg-cover left-0 top-0 absolute translate-z-0 w-full z-1 bg-[url(../images/background/vid-bg2.jpg)] parallax-image"></div>
								<div class="lg:h-40 sm:h-65 h-40 sm:p-10 pb-2.5 p-5 absolute bottom-0 z-10 right-0 left-0 bg-[rgba(6,97,104,0.62)] backdrop-blur-[5px]">
									<div class="grid grid-cols-12">
										<div class="lg:col-span-3 col-span-6 lg:mb-7.5 mb-5">
											<div class="flex z-1">
												<div class="xl:w-12.5 sm:w-10.5 w-7 md:max-w-12.5 sm:max-w-10.5 max-w-7 xl:mr-7.5 mr-3.5">
													<img src="assets/images/trv-icon/count-icon1.png" alt="Image" class="w-full" width="50" height="50" loading="lazy">
												</div>
												<div>
													<h2 class="!font-medium !text-white sm:mb-5 mb-2.5 xl:text-2xl sm:text-xl text-sm">Awards Winning</h2>
													<div class="font-black xl:text-42 sm:text-36 text-2xl leading-[0.75] font-base text-white">
													<span class="value" data-value="3600">3600</span><b>+</b></div>
												</div>
											</div>
										</div>
										<div class="lg:col-span-3 col-span-6 lg:mb-7.5 mb-5">
											<div class="flex">
												<div class="xl:w-12.5 sm:w-10.5 w-7 md:max-w-12.5 sm:max-w-10.5 max-w-7 xl:mr-7.5 mr-3.5">
													<img src="assets/images/trv-icon/count-icon2.png" alt="Image"  class="w-full" width="50" height="50" loading="lazy">
												</div>
												<div class="trv-icon-content-info">
													<h2 class="!font-medium !text-white sm:mb-5 mb-2.5 xl:text-2xl sm:text-xl text-sm">Happy Traveler</h2>
													<div class="font-black xl:text-42 sm:text-36 text-2xl leading-[0.75] font-base text-white">
													<span class="value" data-value="3600">3600</span><b>+</b></div>
												</div>
											</div>    
										</div>
										<div class="lg:col-span-3 col-span-6 lg:mb-7.5 mb-5">
											<div class="flex">
												<div class="xl:w-12.5 sm:w-10.5 w-7 md:max-w-12.5 sm:max-w-10.5 max-w-7 xl:mr-7.5 mr-3.5">
													<img src="assets/images/trv-icon/count-icon3.png" alt="Image"  class="w-full" width="50" height="50" loading="lazy">
												</div>
												<div class="trv-icon-content-info">
													<h2 class="!font-medium !text-white sm:mb-5 mb-2.5 xl:text-2xl sm:text-xl text-sm">Tours success</h2>
													<div class="font-black xl:text-42 sm:text-36 text-2xl leading-[0.75] font-base text-white">
													<span class="value" data-value="2.5">2.5</span><b>K</b></div>
												</div>
											</div>
										</div>
										<div class="lg:col-span-3 col-span-6 lg:mb-7.5 mb-5">
											<div class="flex">
												<div class="xl:w-12.5 sm:w-10.5 w-7 md:max-w-12.5 sm:max-w-10.5 max-w-7 xl:mr-7.5 mr-3.5">
													<img src="assets/images/trv-icon/count-icon4.png" alt="Image"  class="w-full" width="50" height="50" loading="lazy">
												</div>
												<div class="trv-icon-content-info">
													<h2 class="!font-medium !text-white sm:mb-5 mb-2.5 xl:text-2xl sm:text-xl text-sm">Our Experience</h2>
													<div class="font-black xl:text-42 sm:text-36 text-2xl leading-[0.75] font-base text-white">
													<span class="value" data-value="25">25</span><b>+</b></div>
												</div>
											</div>    
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--VIDEO WITH ACHIVMENT SECTION END-->
				
				<!--WE OFFER SERVICES SECTION START-->
				<div class="bg-primary relative overflow-hidden sm:pb-22.5 pb-10 sm:pt-30 pt-17.5 before:absolute before:left-0 before:right-0 before:bottom-0 before:z-0 2xl:before:h-55 sm:before:h-40 before:h-0 before:bg-lightturquoise">
					<div class="container">
						<div class="relative z-1">
							<div class="grid grid-cols-12">
								<div class="lg:col-span-5 col-span-12 px-3.75">
									<div class="relative z-1">
										<img class="block sm:ml-21.5 pb-17.5 animate-slide-left max-xl:-bottom-73 max-lg:bottom-0 max-xl:relative max-lg:[position:inherit] size-auto" src="assets/images/Left-Man-Image.png" alt="image" width="50" height="127" loading="lazy">
										<img class="absolute xl:bottom-0 lg:-bottom-60 bottom-10 left-0 size-auto" src="assets/images/travel-sites.png" alt="image" width="50" height="127" loading="lazy">
										<div class="img-bg-shade"></div>
									</div>
								</div>
								<div class="lg:col-span-7 col-span-12 px-3.75">
									<div class="trv-we-off-content">
										<!-- TITLE START-->
											<div class="lg:mr-22.5 text-left mb-15">
												<h2 class="!text-white xl:text-46 md:text-40 text-3xl mb-2.5">We offer Best <span class="text-citrusyellow">Services </span></h2>
												<p class="text-paleaqua mb-12.5 text-base">Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.</p>
											</div>
										<!-- TITLE END-->
										<!--servce box-->
										<div class="grid grid-cols-12 gap-7.5">
											<div class="xl:col-span-4 md:col-span-6 col-span-12 mb-10">
												<div class="relative text-center bg-white ml-3 rounded-tl-8xl rounded-br-8xl rounded-tr-2xl rounded-bl-2xl pt-8.75 px-4 pb-15">
													<div>
														<span class="inline-block mb-7.5">
															<img src="assets/images/trv-icon/ship.png" alt="Image" class="max-w-16 w-full inline-block"
															style="filter: brightness(0) saturate(100%) invert(53%) sepia(72%) saturate(1711%) hue-rotate(188deg) brightness(100%) contrast(94%);" width="64" height="64" loading="lazy">
														</span>
													</div>
													<div class="trv-icon-content">
														<h2 class="mb-3.75 text-2xl">Exclusive Trip</h2>
														<p class="p-text">We pay attention to every quality in the service we provide to you</p>
													</div>
													<div class="relative after:absolute after:-left-7 after:-top-10.25 after:size-0 after:border-t-[12px] after:border-t-transparent after:border-r-[12px] after:border-r-[#297BD4] after:border-b-[12px] after:border-b-transparent">
														<div class="absolute -left-7 -bottom-15 size-0 border-b-[90px] border-b-[#489CF6] border-r-[80px] border-r-transparent">
															<span class="text-xs/[1.5] font-medium block text-white font-title pt-9 px-2.5 pb-0">Step</span>
															<div class="text-2xl font-black text-white pl-2.5">01</div>
														</div>
													</div>
												</div>
											</div>
											<div class="xl:col-span-4 md:col-span-6 col-span-12 mb-10">
												<div class="relative text-center bg-white ml-3 rounded-tl-8xl rounded-br-8xl rounded-tr-2xl rounded-bl-2xl pt-8.75 px-4 pb-15">
													<div class="inline-block mb-7.5">
														<span>
															<img src="assets/images/trv-icon/plane-booking.png" alt="Image" class="max-w-16 w-full inline-block"
															style="filter: brightness(0) saturate(100%) invert(64%) sepia(100%) saturate(1157%) hue-rotate(350deg) brightness(103%) contrast(103%);" width="64" height="64" loading="lazy">
															
														</span>
													</div>
													<div class="trv-icon-content">
														<h2 class="mb-3.75 text-2xl">Easy Booking</h2>
														<p class="p-text">Booking process and full support service assistance from us.</p>
													</div>
													<div class="relative after:absolute after:-left-7 after:-top-10.25 after:size-0 after:border-t-[12px] after:border-t-transparent after:border-r-[12px] after:border-r-[#BA7D0A] after:border-b-[12px] after:border-b-transparent">
														<div class="absolute -left-7 -bottom-15 size-0 border-b-[90px] border-b-[#FFAA0D] border-r-[80px] border-r-transparent">
															<span class="text-xs/[1.5] font-medium block text-white font-title pt-9 px-2.5 pb-0">Step</span>
															<div class="text-2xl font-black text-white pl-2.5">02</div>
														</div>
													</div>
												</div>
											</div>
											<div class="xl:col-span-4 col-span-12 mb-10">
												<div class="relative text-center bg-white ml-3 rounded-tl-8xl rounded-br-8xl rounded-tr-2xl rounded-bl-2xl pt-8.75 px-4 pb-15">
													<div class="inline-block mb-7.5">
														<span>
															<img src="assets/images/trv-icon/guide-icon.png" alt="Image" class="max-w-16 w-full inline-block"
															style="filter: brightness(0) saturate(100%) invert(67%) sepia(36%) saturate(2222%) hue-rotate(38deg) brightness(102%) contrast(101%);" width="64" height="64" loading="lazy">
														</span>
													</div>
													<div class="trv-icon-content">
														<h2 class="mb-3.75 text-2xl">Professional Guide</h2>
														<p class="p-text">While on vacation will be guided by our professional guide</p>
													</div>
													<div class="relative after:absolute after:-left-7 after:-top-10.25 after:size-0 after:border-t-[12px] after:border-t-transparent after:border-r-[12px] after:border-r-[#568603] after:border-b-[12px] after:border-b-transparent">
														<div class="absolute -left-7 -bottom-15 size-0 border-b-[90px] border-b-[#85D200] border-r-[80px] border-r-transparent">
															<span class="text-xs/[1.5] font-medium block text-white font-title pt-9 px-2.5 pb-0">Step</span>
															<div class="text-2xl font-black text-white pl-2.5">03</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="rounded-full 2xl:h-50 2xl:mb-7.5 overflow-hidden ">
											<img src="assets/images/landscape-pic.jpg" alt="image" class="w-full" width="726" height="199" loading="lazy">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="absolute left-0 2xl:bottom-55 bottom-40"><img src="assets/images/building-1.png" alt="Image" width="301" height="640" loading="lazy"></div>
					<div class="absolute md:right-0 sm:-right-20 -right-38 md:top-0 sm:-top-3 -top-12"><img src="assets/images/Right-top-plane.png" alt="Image" width="257" height="342" loading="lazy"></div>
				</div>
				<!--WE OFFER SERVICES SECTION START-->

				<!--POPULAR SEARCH DESTINATION START-->
				<div class="bg-eggshell">
					<div class="pt-10 pb-1.25">
						<div class="swiper popular-places-logo-swiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>250 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">Paris</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>65 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">Thailand</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>175 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">Bangkok</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>130 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">Dubai</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>140 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">France</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>350 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">London</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>250 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">Paris</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>65 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">Thailand</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>175 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">Bangkok</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>130 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">Dubai</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>140 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-citrusyellow leading-14.5 block hover:text-secondary duration-500">France</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="text-center">
										<div class="text-xs leading-3.5 text-primary inline-flex py-1.5 px-2.5 bg-white border border-primary/20 rounded-2lg">
											<i class="fa-regular fa-flag mr-1"></i>350 Tour 
										</div>
										<a href="destination-detail.html" class="font-display text-40 text-primary leading-14.5 block hover:text-secondary duration-500">London</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div>
							<div class="grid grid-cols-12">
								<div class="md:col-span-5 col-span-12 px-3.75">
									<div class="media">
										<img src="assets/images/pop-search-left-pic.png" alt="Image" width="510" height="184" loading="lazy">
									</div>
								</div>
								<div class="md:col-span-7 col-span-12 px-3.75">
									<div class="md:ml-12.5">
										<span class="text-primary block font-title font-bold text-28 mb-3.75">Popular!</span>
										<h2 class="2xl:!text-40xl lg:!text-30xl sm:!text-90 !text-6xl !leading-[0.75] uppercase !text-eggshelllight !font-black !font-base mb-2.5">Search</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--POPULAR SEARCH DESTINATION END-->
				
				<!--EXPLORE POPULAR TOUR START-->
				<div class="bg-lightturquoise sm:mx-15 xl:pb-26.5 pb-5 xl:pt-30 pt-12.5">
					<div class="container-fluid">
						<!-- TITLE START-->
						<div class="text-center max-w-150 mx-auto md:mb-15 mb-7.5">
							<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5">Explore Popular<span class="text-citrusyellow"> Tours!</span></h2>
							<p class="text-base">Destinations worth exploring! Here are a few popular spots</p>
							<div class="-mt-7">
								<img src="assets/images/background/Title-Separator.png" alt="Image" class="w-117.5 inline-block" width="470" height="70" loading="lazy">
							</div>
						</div>
						<!-- TITLE END-->
						<div>
							<div class="swiper trv-tours-st1 xl:!pb-29 !pb-22.5">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic1.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span class="block">8 days , 3 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															Bali, Indonesia
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$59</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Nusa Penida is a stunning island located just southeast of Bali</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic2.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span class="block">4 days , 2 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															South Korea
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$75</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Deogyusan  mountain. Its highest peak is 1,614 m. above sea level</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic3.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span class="block">6 days , 3 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															Tokyo City Japan
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$99</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">The bridge offers panoramic views of Tokyo Tower, the skyline.</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic4.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span class="block">8 days , 3 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															Plateau in Slovenia
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$149</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Nusa Penida is a stunning island located just southeast of Bali</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic5.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span>4 days , 2 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															Switzerland Tour Package
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$129</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Deogyusan  mountain. Its highest peak is 1,614 m. above sea level</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="mx-3.75">
											<div class="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
												<a href="tour-detail.html"><img src="assets/images/tour/style1/pic6.jpg" alt="Image" class="xl:h-105 h-80 w-full object-cover object-center" width="309" height="500" loading="lazy"></a>
												<div class="absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex itmes-center">
													<i class="text-xl mr-2.5 fa-regular fa-calendar-days"></i>
													<span class="block">6 days , 3 Nights</span>
												</div>
												<div class="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500">
													<h3 class="2xl:text-28 text-2xl font-medium">
														<a href="tour-detail.html" class="text-white">
														   <i class="fa-solid fa-location-dot"></i>
															Tokyo City Japan
														</a>
													</h3>
												</div>
											</div>
											<div class="bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
												<div class="mb-7.5 flex">
													<div class="w-20">
														<span class="text-citrusyellow text-28/[1.3] font-black block">$79</span>
														<span class="text-base block">Per Day</span>
													</div>
													<div class="w-[calc(100%_-_90px)] text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">The bridge offers panoramic views of Tokyo Tower, the skyline.</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Book Now</a>
													</div>
													<div>
														<span>(4.8 Review)</span>
														<div class="text-citrusyellow">
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
															<i class="fa-solid fa-star"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-button-next"></div>
								<div class="swiper-button-prev"></div>
							</div>
						</div> 
					</div>
				</div>
				<!--EXPLORE POPULAR TOUR END-->
				
				<!--3 STEP SECTION START-->
				<div class="bg-white md:pt-30 pt-17.5 relative overflow-hidden">
					<div class="absolute w-150 h-137.5 -left-75 top-1/2 bg-amber [filter:blur(100px)]"></div>
					<div class="absolute w-150 h-125 -right-75 top-1/2 bg-bluelight [filter:blur(100px)]"></div>
					<div class="absolute w-150 h-125 left-1/2 -translate-x-1/2 -top-50 bg-amber [filter:blur(100px)]"></div>
					<div class="container">
						<div class="section-content">
							<div class="relative z-1 mb-30">
								<div class="grid grid-cols-12">
									<div class="xl:col-span-7 col-span-12 px-3.75">
										<div>
											<!-- TITLE START-->
											<div class="md:max-w-100 max-w-[inherit] text-left lg:mb-15 mb-7.5">
												<h2 class="xl:text-46 md:text-40 text-3xl mb-3.5"><span class="text-citrusyellow">3 Easy Steps </span>for Book Your Next Trip</h2>
											</div>
											<!-- TITLE END-->
											<div class="md:flex max-2xl:justify-center">
												<div class="md:mr-6 md:min-w-61.5 min-w-[inherit]">
													<div class="media">
														<img src="assets/images/offer/pic1.jpg" alt="Image" class="md:w-59 w-[calc(100%_-_12px)] h-66.5 object-cover object-center rounded-xl" width="236" height="266" loading="lazy">
													</div>
													<div class="rounded-xl md:max-w-59 max-w-[inherit] p-5 pt-15 ml-3 -mt-11 bg-citrusyellow max-md:text-center max-md:mb-7.5">
														<span class="text-primary font-semibold text-lg leading-6 block pb-2.5">Get Special Offer</span>
														<div class="flex max-md:justify-center">
															<h2 class="!text-white !text-95 !leading-[0.75] !font-black !font-base">48</h2>
															<div class="block text-xl text-primary uppercase font-black leading-6">%<span class="block">Off</span></div>
														</div>
													</div>
												</div>
												<div class="md:mr-6.25">
													<div class="mb-5 bg-white border border-paleaqua p-2.5 sm:pl-12.5 pl-10.5 shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] rounded-tr-50xl rounded-br-50xl relative sm:ml-12.5 ml-6.5">
														<div class="flex items-center justify-between">
															<div class="sm:size-20 size-15 sm:min-w-20 min-w-15 items-center justify-center flex bg-primary rounded-xl font-base sm:text-42 text-36 text-white font-black absolute sm:-left-12.5 -left-8.5 top-1/2 -translate-y-1/2">
																01
															</div>
															<div>
																<div class="font-title text-primary lg:text-2xl text-xl font-medium leading-[1.2] mb-2.5">Choose Destination</div>
																<p class="text-primary">First, select your preferred destination and proceed further</p>
															</div>
															<div class="sm:size-25 size-15 sm:min-w-25 min-w-15 bg-citrusyellow rounded-full flex items-center justify-center mr-0">
																<div class="bg-white sm:size-22.5 size-12.5 sm:min-w-22.5 min-w-12.5 flex items-center justify-center rounded-full">
																	<img src="assets/images/trv-icon/destination.png" alt="image" class="sm:max-w-12 max-w-7 w-full" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)"  width="48" height="48" loading="lazy">
																</div>
															</div>
														</div>
													</div>
													<div class="mb-5 bg-white border border-paleaqua p-2.5 sm:pl-12.5 pl-10.5 shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] rounded-tr-50xl rounded-br-50xl relative sm:ml-12.5 ml-6.5">
														<div class="flex items-center justify-between">
															<div class="sm:size-20 size-15 sm:min-w-20 min-w-15 items-center justify-center flex bg-primary rounded-xl font-base sm:text-42 text-36 text-white font-black absolute sm:-left-12.5 -left-8.5 top-1/2 -translate-y-1/2">
																02
															</div>
															<div>
																<div class="font-title text-primary lg:text-2xl text-xl font-medium leading-[1.2] mb-2.5">Make Payment</div>
																<p class="text-primary">We pay attention to every quality in the service we provide to you</p>
															</div>
															<div class="sm:size-25 size-15 sm:min-w-25 min-w-15 bg-citrusyellow rounded-full flex items-center justify-center mr-0">
																<div class="bg-white sm:size-22.5 size-12.5 sm:min-w-22.5 min-w-12.5 flex items-center justify-center rounded-full">
																	<img src="assets/images/trv-icon/make-payment.png" alt="image" class="sm:max-w-12 max-w-7 w-full" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="48" height="48" loading="lazy">
																</div>
															</div>
														</div>
													</div>
													<div class="mb-5 bg-white border border-paleaqua p-2.5 sm:pl-12.5 pl-10.5 shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] rounded-tr-50xl rounded-br-50xl relative sm:ml-12.5 ml-6.5">
														<div class="flex items-center justify-between">
															<div class="sm:size-20 size-15 sm:min-w-20 min-w-15 items-center justify-center flex bg-primary rounded-xl font-base sm:text-42 text-36 text-white font-black absolute sm:-left-12.5 -left-8.5 top-1/2 -translate-y-1/2">
																03
															</div>
															<div>
																<div class="font-title text-primary lg:text-2xl text-xl font-medium leading-[1.2] mb-2.5">Ready For Travelling</div>
																<p class="text-primary">We pay attention to every quality in the service we provide to you</p>
															</div>
															<div class="sm:size-25 size-15 sm:min-w-25 min-w-15 bg-citrusyellow rounded-full flex items-center justify-center mr-0">
																<div class="bg-white sm:size-22.5 size-12.5 sm:min-w-22.5 min-w-12.5 flex items-center justify-center rounded-full">
																	<img src="assets/images/trv-icon/travelling.png" alt="image" class="sm:max-w-12 max-w-7 w-full" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="48" height="48" loading="lazy">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="xl:col-span-5 col-span-12 px-3.75">
										<div class="relative z-1 pt-22.5 max-2xl:flex max-2xl:justify-center">
											<img src="assets/images/hotballon-Left.png" alt="img" class="w-17 absolute left-0 2xl:-bottom-106.25 bottom-0 animate-slide-top2" width="68" height="98" loading="lazy">
											<img src="assets/images/hotballon-right.png" alt="img" class="sm:w-32 w-25 absolute sm:right-15 right-0 top-2.5 z-1" width="128" height="198" loading="lazy">
											<img src="assets/images/cloud-1.png" alt="Image" class="absolute z-2 w-2/5 -left-7.5 top-40 animate-smooth-up-down" width="204" height="169" loading="lazy">
											<img src="assets/images/cloud-2.png" alt="Image" class="absolute right-0 top-10 z-3 animate-smooth-up-down2" width="297" height="225" loading="lazy">
											<div class="2xl:absolute after:absolute after:bottom-[-30%] after:left-1/2 after:-translate-1/2 sm:after:size-125 after:size-80 after:rounded-full after:bg-eggshell after:-z-1">
												<img src="assets/images/Girl-Image.png" alt="img" class="mr-20 relative z-5" width="440" height="577" loading="lazy">
												<span class="text-primary font-display sm:text-40 text-36 flex items-baseline absolute 2xl:left-[85%] sm:left-[90%] left-[78%] text-left rotate-[-90deg] origin-[0_0] sm:pl-12.5">For <b class="text-citrusyellow text-98 font-normal leading-[1]">Summer!</b></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="overflow-hidden rounded-br-25xl rounded-bl-25xl bg-primary pt-27.5 pb-17.5 bg-[url(../images/w-cho-top.png),url(../images/w-cho-btm.png)] bg-no-repeat [background-position:top_left,bottom_left] flex flex-wrap items-center justify-between">
							<div class="max-w-122.5 xl:ml-45 ml-10 mb-7.5">
								<h3 class="!font-display !text-40 mb-7.5 !text-white">
									Why Choose Us!
								</h3>
								<div class="mb-3.75">
									<ul class="sm:flex text-white flex-wrap">
										<li class="font-title font-medium text-lg text-white sm:w-1/2 pr-2.5 flex mb-5">
											<i class="size-7.5 max-w-7.5 mr-6 rounded-full bg-citrusyellow !flex items-center justify-center text-white fa-solid fa-check"></i>
											<span>Perfect Detailing</span>
										</li>
										<li class="font-title font-medium text-lg text-white sm:w-1/2 pr-2.5 flex mb-5">
											<i class="size-7.5 max-w-7.5 mr-6 rounded-full bg-citrusyellow !flex items-center justify-center text-white fa-solid fa-check"></i>
											<span>Save Your Budget</span>
										</li>
										<li class="font-title font-medium text-lg text-white sm:w-1/2 pr-2.5 flex mb-5">
											<i class="size-7.5 max-w-7.5 mr-6 rounded-full bg-citrusyellow !flex items-center justify-center text-white fa-solid fa-check"></i>
											<span>Free Consultations</span>
										</li>
										<li class="font-title font-medium text-lg text-white sm:w-1/2 pr-2.5 flex mb-5">
											<i class="size-7.5 max-w-7.5 mr-6 rounded-full bg-citrusyellow !flex items-center justify-center text-white fa-solid fa-check"></i>
											<span>Completed Certification</span>
										</li>
									</ul>
								</div>
								<a href="destination-detail.html" class="site-button butn-bg-shape">Discover More</a>
							</div>
							<div class="mx-auto lg:mr-40 max-lg:text-center">
								<div class="mb-2.5">
									<img src="assets/images/24-Image.png" alt="image" width="147" height="163" loading="lazy">
								</div>
								<div>
									<h3 class="!font-black xl:!text-58 !text-40 !leading-[0.75] mb-2.5 uppercase !text-white !font-base">Call Us</h3>
									<span class="block font-bold xl:text-38 text-28 leading-[1.2] uppercase text-secondary">+91 9503953737</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--3 STEP SECTION END-->
				
				<!--TESTIMONIAL SECTION START-->
				<div class="sm:py-22.5 py-10 relative overflow-hidden bg-white">
					<div class="container">
						<!-- TITLE START-->
						<div class="text-center max-w-150 mx-auto xl:mb-15 mb-0">
							<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5">Our Client<span class="text-citrusyellow"> Says!</span></h2>
							<p class="text-base">Destinations worth exploring! Here are a few popular spots</p>
							<div class="-mt-7">
								<img src="assets/images/background/Title-Separator.png" alt="Image" class="w-117.5 inline-block" width="470" height="70" loading="lazy">
							</div>
						</div>
						<!-- TITLE END-->
						<div>
							<div class="text-center relative font-bold 2xl:text-40xl/48 xl:text-30xl/48 lg:text-80 max-lg:mb-7.5 sm:text-6xl text-40 tracking-[0.12em] uppercase bg-primary-gradient bg-clip-text 
							[-webkit-text-fill-color:transparent] 
							bg-[linear-gradient(to_bottom,#066168_15%,rgba(255,170,13,0.3019607843)_60%,#fff_85%)]">
								Testimonial
								<img src="assets/images/airplane-takeoff1.png" alt="Image" class="absolute xl:-top-5 sm:-top-6 top-0 left-1/2 -translate-x-1/2 max-xl:w-[40%] max-md:w-[60%]" width="493" height="116" loading="lazy">
							</div>

							<div class="relative">
								<!--Image Slider-->
								<div class="swiper testimonial-content-sld">
									<div class="swiper-wrapper">
										<!--1-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic1.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Amelia Warner</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="img" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-full" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--2-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic2.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--3-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic3.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
									   <!--1-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic1.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Amelia Warner</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--2-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic2.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--3-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic3.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--3-->
										<!--2-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic2.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										<!--3-->
										<div class="swiper-slide">
											<div class="md:flex items-center bg-white">
												<div class="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="assets/images/trv-testimonial2/pic3.jpg" alt="Image" class="rounded-3xl" width="375" height="489" loading="lazy">
												</div>
												<div class="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div class="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 class="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span class="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="assets/images/trv-icon/Quote.png" alt="image" class="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style="filter: brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" width="70" height="58" loading="lazy">
														</div>
													</div>
													<p class="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div class="md:float-right text-citrusyellow text-base mr-0.75">
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
														<i class="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="testimonial-content-sld-control">
										<div class="swiper-button-next"></div>
										<div class="swiper-button-prev"></div>
									</div>
								</div>
								<!--Thumbnail Slider-->
								<div class="swiper testimonial-thum-sld xl:h-92.5 h-auto !overflow-hidden xl:w-28.75 w-62.5 xl:!absolute xl:top-1/2 top-auto xl:left-128.75 left-0 xl:-translate-y-1/2 transform-none max-xl:mt-5 xl:!mx-auto md:!mx-0 !mx-auto !relative">
									<div class="swiper-wrapper xl:flex-col">
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic1.jpg" alt="Image" class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic2.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic3.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
									   </div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic4.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>

										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic1.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic2.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic3.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
										<div class="swiper-slide">
											<div class="duration-500">
												<img src="assets/images/trv-testimonial2/pic4.jpg" alt="Image"  class="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="absolute -right-13.75 top-2/5 w-27.5 animate-slide-top"><img src="assets/images/hotballon-right.png" alt="image"></div>
				</div>
				<!--TESTIMONIAL SECTION End-->
				
				<!-- ADVENTURE SECTION START -->
				<div class="py-22.5 bg-cover relative text-center overflow-hidden bg-[url(../images/background/adv-bg.jpg)] trv-adventure-st1">
					<div class="rounded-full inline-block relative mb-0 circle-text2">
						<div class="bg-primary rounded-full sm:size-55 size-50 flex items-center justify-center emblem-wrap">
							<div class="font-base text-xs font-normal tracking-[10px] uppercase mx-auto sm:size-50 size-45 rounded-full text-white text-center bg-transparent animate-spinZ emblem">Want-to-see-our-top-destinations-</div>
							<i class="mx-auto sm:size-31 size-25 text-center flex items-center justify-center rounded-full bg-[#0A747C] absolute left-1/2 top-1/2 -translate-1/2 overflow-hidden"><img src="assets/images/advanture-st1.png" alt="In Circle Pic" class="h-auto sm:max-w-18.5 max-w-15.5" width="74" height="74" loading="lazy"></i>
						</div>
					</div>
					<h2 class="!font-display leading-[1] xl:!text-50xl md:!text-30xl sm:!text-80 !text-40 px-7.5 !font-normal !text-white md:text-shadow-[2px_5px_0px_rgba(255,255,255,0.72)] max-sm:mt-7.5">Adventure</h2>
					<p class="font-title uppercase xl:text-50 sm:text-3xl text-22 leading-[1.2] font-normal text-white sm:mb-7.5 max-sm:my-2.5">It's time to Travel </p>
					<a href="contact.html" class="site-button butn-bg-shape">Booking Now</a>
				</div>
				<!-- ADVENTURE SECTION END -->
				
				<!--ALL BLOGS SECTION START-->
				<div class="sm:pt-22.5 pt-10 pb-40 bg-paleaqua">
					<div class="container">
						<!-- TITLE START-->
						<div class="md:mb-15 mb-7.5 grid grid-cols-12">
							<div class="xl:col-span-4 lg:col-span-6 col-span-12">
								<div class="text-left">
									<h2 class="xl:text-46 md:text-40 text-3xl mb-3.5">Explore<span class="text-citrusyellow"> Latest News</span></h2>
									<div class="text-base max-lg:mb-7.5">Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates:</div>
								</div>
							</div>
							<div class="xl:col-span-8 lg:col-span-6 col-span-12">
								<div class="lg:text-right">
									<a href="blog-detail.html" class="site-button butn-bg-shape">See More Articles</a>
								</div>
							</div>
						</div>
						<!-- TITLE END-->
						<div>
							<div class="grid grid-cols-12 md:gap-7.5">
								<div class="xl:col-span-4 md:col-span-6 col-span-12">
									<div class="relative flex mb-7.5">
										<div class="mr-2.5 relative z-1 rounded-xxl overflow-hidden min-w-25 w-25 h-32.75">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-sm/pic1.jpg" alt="Image" class="size-full" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="bg-white py-6.25 lg:px-5 px-3 rounded-xxl w-full">
											<div class="size-10 text-white text-sm leading-none bg-primary text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5">
												<span class="block text-xl leading-none font-bold text-white">14</span>June
											</div>
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none  pb-3.75">Aidan Butler</div>
											<div>
												<h2><a href="blog-detail.html" class="duration-500 2xl:text-xl/6 sm:text-lg text-sm font-title font-medium text-primary block hover:text-citrusyellow">Resources for your first trip to overseas vacation</a></h2>
											</div>
										</div>                                
									</div>
									<div class="relative flex mb-7.5">
										<div class="mr-2.5 relative z-1 rounded-xxl overflow-hidden min-w-25 w-25 h-32.75">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-sm/pic2.jpg" alt="Image" class="size-full" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="bg-white py-6.25 lg:px-5 px-3 rounded-xxl w-full">
											<div class="size-10 text-white text-sm leading-none bg-primary text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5">
												<span class="block text-xl leading-none font-bold text-white">26</span>June
											</div>
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none  pb-3.75">Ricardo Bell</div>
											<div>
												<h2><a href="blog-detail.html" class="duration-500 2xl:text-xl/6 sm:text-lg text-sm font-title font-medium text-primary block hover:text-citrusyellow">How to get acquainted with natives in a strange land</a></h2>
											</div>
										</div>                                
									</div>
									<div class="relative flex mb-7.5">
										<div class="mr-2.5 relative z-1 rounded-xxl overflow-hidden min-w-25 w-25 h-32.75">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-sm/pic3.jpg" alt="Image" class="size-full" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="bg-white py-6.25 lg:px-5 px-3 rounded-xxl w-full">
											<div class="size-10 text-white text-sm leading-none bg-primary text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5">
												<span class="block text-xl leading-none font-bold text-white">20</span>June
											</div>
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none  pb-3.75">Martin Hicks</div>
											<div>
												<h2><a href="blog-detail.html" class="duration-500 2xl:text-xl/6 sm:text-lg text-sm font-title font-medium text-primary block hover:text-citrusyellow">Resources for your first trip to overseas vacation</a></h2>
											</div>
										</div>                                
									</div>
								</div>
								<div class="xl:col-span-4 md:col-span-6 col-span-12">
									<div class="relative flex mb-7.5">
										<div class="mr-2.5 relative z-1 rounded-xxl overflow-hidden min-w-25 w-25 h-32.75">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-sm/pic4.jpg" alt="Image" class="size-full" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="bg-white py-6.25 lg:px-5 px-3 rounded-xxl w-full">
											<div class="size-10 text-white text-sm leading-none bg-primary text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5">
												<span class="block text-xl leading-none font-bold text-white">28</span>June
											</div>
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none  pb-3.75">Poul Ward</div>
											<div>
												<h2><a href="blog-detail.html" class="duration-500 2xl:text-xl/6 sm:text-lg text-sm font-title font-medium text-primary block hover:text-citrusyellow">Step by step guide to planning your ideal holiday</a></h2>
											</div>
										</div>                                
									</div>
									<div class="relative mb-7.5">
										<div class="relative z-1 rounded-xl overflow-hidden">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-md/pic1.jpg" alt="Image" class="object-cover object-center h-52.5 w-full" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="size-10 text-primary text-sm leading-none bg-paleaqua text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5 z-1">
											<span class="block text-xl leading-none font-bold">28</span>June
										</div>                                      
										<div class="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 md:mx-5 z-1 absolute max-xl:w-[91%] max-md:w-full">
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none  pb-3.75">Poul Ward</div>
											<div>
												<h2 class="post-title"><a href="blog-detail.html" class="duration-500 2xl:text-xl/6 sm:text-lg text-sm font-title font-medium text-primary block hover:text-citrusyellow">Step by step guide to planning your ideal holiday</a></h2>
											</div>
										</div>                                
									</div>
								</div>
								<div class="xl:col-span-4 md:col-span-6 col-span-12">
									<div class="relative mb-7.5 max-xl:left-1/2 max-md:left-0 max-md:-bottom-15">
										<div class="relative z-1 rounded-xl overflow-hidden">
											<a href="blog-detail.html"><img src="assets/images/trv-blog/blog-lg/pic1.jpg" alt="Image" class="w-full  object-cover h-113.25" width="100" height="131" loading="lazy"></a>
										</div>
										<div class="size-20 text-primary text-sm leading-none bg-paleaqua text-center flex flex-col items-center justify-center rounded-md absolute top-2.5 right-2.5 z-1"><span class="block text-36 leading-none font-extrabold">08</span>June</div>   
										<div class="pt-15 p-7.5 absolute rounded-xxl z-1 bottom-0 left-0 w-full 
										bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.76)_73%)]">
											<div class="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Joey Peterson</div>
											<div class="trv-post-title ">
												<h3><a href="blog-detail.html" class="2xl:text-28 text-2xl font-title font-medium text-white block">The Top Travel Destinations for Photography Enthusiasts</a></h3>
											</div>
										</div>                                
									</div>
								</div>
							</div>
						</div> 
					</div>
				</div>
				<!--ALL BLOGS SECTION END-->
			</div>
			<!-- CONTENT END -->
			
			<!-- FOOTER START -->
			<footer class="pt-20 bg-primary bg-cover bg-[url(../images/background/ftr-dark-bg.png)]">
				<div class="-mt-40">
					<div class="container bg-citrusyellow rounded-3xl md:flex items-center justify-between !py-6.25 lg:!px-17.5 sm:!px-10.5 !px-5.5 max-w-324">
						<div class="pr-5 max-lg:w-1/2 max-md:w-full">
						<div class="text-primary font-display lg:text-80 sm:text-46 text-28 leading-[0.75] sm:text-shadow-[2px_3px_0px_rgba(255,255,255,0.72)] pb-5"><span class="text-white inline-block">Subscribe</span> Now!</div>
							<div class="text-primary text-xl font-medium font-title max-md:mb-5">
								Sign up to searing weekly newsletter to get the latest updates. 
							</div>  
						</div>
						<div class="p-1.5 bg-paleaqua rounded-full max-w-107 flex-1 h-20">
							<form class="dzSubscribe" method="post" action="https://travlla.dexignzone.com/tailwind/demo/assets/script/mailchamp.php">
								<div class="dzSubscribeMsg"></div>
								<div class="flex relative">
									<label for="newsletter-email" class="sr-only">Email address</label>
									<input name="news-letter" required="required" type="email"  id="newsletter-email" autocomplete="email" class="form-control !h-17 !border-0 outline-none !py-2.5 !pl-5 !pr-17.5 rounded-full !text-2xs !leading-5 bg-white focus:text-[#212529] focus:bg-transparent focus:shadow-[0_1px_3px_0_rgba(0,0,0,0.6)] placeholder:text-primary" placeholder="Email address...">
									<button type="submit" name="submit" value="submit" class="text-28 text-white rounded-full size-15 bg-primary absolute top-1.25 right-1.25 duration-500 cursor-pointer" aria-label="Subscribe to newsletter"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- FOOTER BLOCKES START -->  
				<div class="container">
					<div class="sm:pt-20 pt-10 text-white/06 border-b border-primary">
						<div class="grid grid-cols-12">
							<div class="lg:col-span-3 col-span-12 sm:px-3.75">
								<div class="mb-10">
									<div class="mb-10 text-center block max-w-48.25 after:table after:clear-both">
										<a href="index-2.html"><img src="/assets/logo.png" alt="logo" width="193" height="81" loading="lazy"></a>
									</div>
									<p class="sm:pr-12.5 mb-4 text-base text-white/50">405, HN More Complex, NDA Road, Shivane, Pune � 411023<br/>Email: kabeerrtravelzhub@gmail.com<br/>Phone: +91 9503953737</p>
									<ul class="mt-5">
										<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
											<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com/" target="_blank">
												<i class="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
											</a>
										</li>
										<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
											<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com/" target="_blank"> 
												<i class="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
											</a>
										</li>
										<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
											<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com/" target="_blank">
												<i class="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
											</a>
										</li>
										<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
											<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
												<i class="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
											</a>
										</li>
									</ul>
								</div>    
							</div>
							<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
								<div class="mb-10">
									<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Explore</h3>
									<ul>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="about-1.html">About us</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="faq.html">FAQ's</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="services.html">Services</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="our-team.html">Team</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="contact.html">News & Articles</a></li>
									</ul>
								</div>
							</div>
							<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
								<div class="mb-10">
									<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Destinations</h3>
									<ul>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="about-1.html">Tokyo</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="faq.html">France</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="services.html">Dubai</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="our-team.html">Kenya</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="contact.html">Vietnam</a></li>
									</ul>
								</div>
							</div>
							<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
								<div class="mb-10">
									<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Legal</h3>
									<ul>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="about-1.html">Terms & Condition</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="faq.html">Privacy Policy</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="services.html">Contact</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="our-team.html">Careers</a></li>
										<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="contact.html">Help</a></li>
									</ul>
								</div>
							</div>
							<div class="lg:col-span-3 sm:col-span-6 col-span-12 sm:px-3.75">
								<div class="mb-10">
									<ul> 
										<li class="mb-2.5 relative flex items-center">
											<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
												<i class="fa-solid fa-phone text-xl text-white"></i>
											</div>
											<a href="tel:+919503953737">
												<span class="xl:text-3xl text-2xl text-citrusyellow font-normal font-display">+91 9503953737</span>
											</a>
										</li>
										<li class="mb-2.5 relative flex items-center">
											<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
												<i class="fa-solid fa-envelope text-xl text-white"></i>
											</div>
											<a class="black text-paleaqua font-semibold xl:text-lg text-sm font-base" href="mailto:kabeerrtravelzhub@gmail.com"><span class="__cf_email__" data-cfemail="3b4f495a4d57575a52555d547b5c565a525715585456">[email&#160;protected]</span></a>
										</li>
										<li class="relative flex items-center">
											<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
												<i class="fa-solid fa-house text-xl text-white"></i>
											</div>
											<span class="black text-paleaqua font-semibold xl:text-lg text-sm font-base">405, HN More Complex, NDA Road, Shivane, Pune � 411023</span>
										</li>
									</ul>  
								</div>
							</div>
						</div>
					</div>
					<div class="xl:py-10 py-1.25 xl:flex items-center">
						<h3 class="whitespace-nowrap mr-11.5 !text-white relative text-28 max-xl:mb-7.5">Follow Instagram</h3>
						<ul class="flex xl:gap-5 gap-y-2.5 gap-x-[2%] flex-wrap">
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic1.jpg" alt="pic1" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic2.jpg" alt="pic2" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic3.jpg" alt="pic3" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic4.jpg" alt="pic4" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic5.jpg" alt="pic5" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic6.jpg" alt="pic6" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic7.jpg" alt="pic7" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic8.jpg" alt="pic8" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
							<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
								<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
									<img src="assets/images/insta-gallery/pic9.jpg" alt="pic9" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
									<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
										<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="py-10 text-white relative z-1 font-normal after:absolute after:bg-primary after:max-w-135 after:h-px after:left-1/2 after:top-0 after:-translate-x-1/2">
						<div class="container">
							<p class="copyrights-text text-center text-sm font-semibold">Â© <span class="current-year">2024</span> <a href="https://www.dexignzone.com/"><span class="inline-block text-citrusyellow uppercase text-center text-sm font-semibold">Travlla</span></a> All  Rights Reserved.</p>
						</div>
					</div>		
				</div>
				<!-- FOOTER COPYRIGHT -->
			</footer>
			<!-- FOOTER END -->
		</div>
	</div>
	
	<!-- BUTTON TOP START -->
	<button class="scroltop" aria-label="Scroll to top"><span class="fa fa-angle-up  relative" id="btn-vibrate" aria-hidden="true"></span></button>
	<div id="offcanvas-right" class="fixed top-0 right-0 z-9999999 h-screen overflow-y-auto transition-transform translate-x-full bg-black/20 backdrop-blur-[5px] sm:max-w-125 max-w-88 custom-scroll">
		<button type="button" class="absolute right-0 top-6 text-[#443935] bg-citrusyellow text-base size-7 cursor-pointer rounded m-6.25" data-drawer-hide="offcanvas-right" aria-label="Close">
			<i class="fa-solid fa-xmark" aria-hidden="true"></i>
		</button>
		<div class="pt-30 pb-10 px-8">
			<div class="">
				<div class="mb-15">
					<img src="/assets/logo.png" alt="Image" class="max-w-33.5">
				</div>
				<div class="trv-side-pnl-content">
					<div class="mb-15">
						<h3 class="text-28 !text-white mb-5">It's Time to Traveling</h3>
						<h3 class="!text-secondary text-5xl mb-5 uppercase">Plan Your Next Holiday</h3>
						<p class="text-base !text-white/50">Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing.</p>   
					</div>
					<h3 class="text-28 !text-white mb-5">Don't miss out this offers!</h3>
					<ul class="flex justify-between pb-10 mb-10 relative after:w-75 after:bg-white/15 after:h-px after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
						<li>
							<h2 class="!text-secondary text-34 mb-2">$199</h2>
							<span class="!text-white text-lg font-medium font-title">Basic Plan</span>
						</li>
						<li>
							<h2 class="!text-secondary text-34 mb-2">$299</h2>
							<span class="!text-white text-lg font-medium font-title">Pro Plan</span>
						</li>
						<li>
							<h2 class="!text-secondary text-34 mb-2">$399</h2>
							<span class="!text-white text-lg font-medium font-title">Full Plan</span>
						</li>
					</ul>
					<ul class="mt-5">
						<li class="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
							<a class="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.x.com/">
								<i class="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
							</a>
						</li>
						<li class="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
							<a class="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.facebook.com/">
								<i class="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
							</a>
						</li>
						<li class="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
							<a class="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.instagram.com/">
								<i class="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
							</a>
						</li>
						<li class="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
							<a class="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.pinterest.com/">
								<i class="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
    
<!-- JAVASCRIPT  FILES ========================================= --> 
<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="assets/js/jquery-3.7.1.min.js"><\/script>
<script src="assets/vendor/gsap/gsap.min.js"><\/script>
<script src="assets/vendor/gsap/ScrollSmoother.js"><\/script>
<script src="assets/vendor/gsap/ScrollTrigger.min.js"><\/script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"><\/script>
<script src="assets/vendor/masonry/masonry-4.2.2.js"><\/script>
<script src="assets/vendor/masonry/isotope.pkgd.min.js"><\/script>
<script src="assets/vendor/flatpickr/js/flatpickr.js"><\/script>
<script src="assets/vendor/magnific-popup/magnific-popup.js"><\/script>
<script src="assets/vendor/nouislider/nouislider.min.js"><\/script>
<script src="assets/vendor/group-slide/group-loop.js"><\/script>
<script src="assets/vendor/xmenu/xmenu.js"><\/script>
<script src="assets/vendor/lightgallery/dist/lightgallery.min.js"><\/script>
<script src="assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js"><\/script>
<script src="assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js"><\/script>
<script src="assets/js/imagesloaded.pkgd.min.js"><\/script>
<script src='../../../www.google.com/recaptcha/api.js'><\/script>
<script src="assets/js/theia-sticky-sidebar.js"><\/script>
<script src="assets/js/owl.carousel.min.js"><\/script>
<script src="assets/js/isotope.pkgd.min.js"><\/script>
<script src="assets/js/dz.carousel.js"><\/script>
<script src="assets/js/lc_lightbox.lite.js"><\/script>
<script src="assets/js/dz.ajax.js"><\/script>
<script src="assets/js/animation.js"><\/script>
<script src="assets/js/custom.js"><\/script>

<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"0931814f84b94398b852d3ac91b5f293","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>

<!-- Mirrored from travlla.dexignzone.com/tailwind/demo/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Apr 2026 06:42:51 GMT -->
</html>
`,Nb=["/assets/js/jquery-3.7.1.min.js","/assets/vendor/gsap/gsap.min.js","/assets/vendor/gsap/ScrollSmoother.js","/assets/vendor/gsap/ScrollTrigger.min.js","/assets/vendor/swiper/swiper-bundle.min.js","/assets/vendor/masonry/masonry-4.2.2.js","/assets/vendor/masonry/isotope.pkgd.min.js","/assets/vendor/flatpickr/js/flatpickr.js","/assets/vendor/magnific-popup/magnific-popup.js","/assets/vendor/nouislider/nouislider.min.js","/assets/vendor/group-slide/group-loop.js","/assets/vendor/xmenu/xmenu.js","/assets/vendor/lightgallery/dist/lightgallery.min.js","/assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js","/assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js","/assets/js/imagesloaded.pkgd.min.js","/assets/js/theia-sticky-sidebar.js","/assets/js/owl.carousel.min.js","/assets/js/isotope.pkgd.min.js","/assets/js/dz.carousel.js","/assets/js/lc_lightbox.lite.js","/assets/js/dz.ajax.js","/assets/js/animation.js","/assets/js/custom.js"],Mb=t=>new Promise((e,l)=>{if(document.querySelector(`script[src="${t}"]`)){e();return}const a=document.createElement("script");a.src=t,a.async=!1,a.onload=()=>e(),a.onerror=()=>l(new Error(`Failed to load ${t}`)),document.body.appendChild(a)});function Ub(){const[t,e]=b.useState(""),[l,a]=b.useState(!0),[i,n]=b.useState("");b.useEffect(()=>{try{const u=new DOMParser().parseFromString(Cb,"text/html"),r=u.body.cloneNode(!0),c=r.querySelector('[class*="bg-paleaqua"][class*="pb-40"]');if(c){let d=c.nextSibling;for(;d;){const m=d.nextSibling;d.remove(),d=m}}const h=r.querySelector(".loading-area");h&&h.remove(),document.body.id=u.body.id||"",document.body.className=u.body.className||"",r.querySelectorAll('a[href$=".html"]').forEach(d=>{d.setAttribute("data-disabled","spa"),d.href="#"}),e(r.innerHTML)}catch(u){console.error(u),n("Template failed to load")}finally{a(!1)}},[]),b.useEffect(()=>{if(!t)return;let u=!1;return(async()=>{for(const c of Nb){if(u)break;try{await Mb(c)}catch(h){console.warn(h),n(`Missing asset: ${c}`);break}}const r=document.querySelector(".loading-area");r&&r.remove(),!u&&window.Travlla&&typeof window.Travlla.init=="function"&&window.Travlla.init(),document.querySelectorAll('a[data-disabled="spa"]').forEach(c=>c.addEventListener("click",h=>h.preventDefault()))})(),()=>{u=!0}},[t]);const s=()=>{{alert("WhatsApp number missing. Add VITE_WHATSAPP_NUMBER to your .env file.");return}};return A.jsxs("div",{className:"relative",children:[l&&A.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-black",children:"Loading�"}),i&&!l&&A.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-red-700",children:i}),!l&&!i&&A.jsx("div",{className:"template-body",dangerouslySetInnerHTML:{__html:t}}),A.jsxs("button",{type:"button",onClick:s,className:"fixed bottom-6 right-6 z-[1000] bg-[#25D366] text-white shadow-2xl rounded-full h-14 px-5 flex items-center gap-3 hover:scale-105 transition-all duration-300","aria-label":"Chat on WhatsApp",children:[A.jsx("span",{className:"text-xl",children:"?"}),A.jsx("span",{className:"font-semibold",children:"Chat on WhatsApp"})]})]})}function Hb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"About"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"About page placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Replace this with real content. The navigation shells are ready; drop your copy and layout here."})]})})}function Bb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Pages"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"Pages index placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Hook up your real pages overview here. Currently a stub component under /src/pages/Pages.jsx."})]})})}function kb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Destinations"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"Destinations placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Add destination listings/cards here. This component lives at /src/pages/Destinations.jsx."})]})})}function qb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Tours"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"Tours placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Build out tour grids/detail links here. Component: /src/pages/Tours.jsx."})]})})}function Lb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Blogs"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"Blogs placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Drop your blog list or routing to posts here. Component: /src/pages/Blogs.jsx."})]})})}function Yb(){return A.jsx("main",{className:"min-h-screen flex items-center justify-center bg-slate-950 text-white",children:A.jsxs("div",{className:"max-w-3xl px-6 text-center space-y-4",children:[A.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Contact"}),A.jsx("h1",{className:"text-3xl font-semibold",children:"Contact placeholder"}),A.jsx("p",{className:"text-slate-300",children:"Replace with your form and contact details. Component: /src/pages/Contact.jsx."})]})})}function Gb(){return A.jsx(Sb,{children:A.jsx("div",{className:"app-shell",children:A.jsx("main",{className:"flex-1 pt-4",children:A.jsxs(Ig,{children:[A.jsx(Ne,{path:"/",element:A.jsx(Ub,{})}),A.jsx(Ne,{path:"/about",element:A.jsx(Hb,{})}),A.jsx(Ne,{path:"/pages",element:A.jsx(Bb,{})}),A.jsx(Ne,{path:"/destinations",element:A.jsx(kb,{})}),A.jsx(Ne,{path:"/tours",element:A.jsx(qb,{})}),A.jsx(Ne,{path:"/blogs",element:A.jsx(Lb,{})}),A.jsx(Ne,{path:"/contact",element:A.jsx(Yb,{})})]})})})})}tg.createRoot(document.getElementById("root")).render(A.jsx(yh.StrictMode,{children:A.jsx(Gb,{})}));
