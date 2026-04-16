(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uc={exports:{}},qs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=Symbol.for("react.transitional.element"),sh=Symbol.for("react.fragment");function Hc(e,t,l){var a=null;if(l!==void 0&&(a=""+l),t.key!==void 0&&(a=""+t.key),"key"in t){l={};for(var i in t)i!=="key"&&(l[i]=t[i])}else l=t;return t=l.ref,{$$typeof:ih,type:e,key:a,ref:t!==void 0?t:null,props:l}}qs.Fragment=sh;qs.jsx=Hc;qs.jsxs=Hc;Uc.exports=qs;var g=Uc.exports,Bc={exports:{}},R={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.transitional.element"),nh=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),ch=Symbol.for("react.consumer"),fh=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),hh=Symbol.for("react.memo"),qc=Symbol.for("react.lazy"),gh=Symbol.for("react.activity"),eu=Symbol.iterator;function ph(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yc=Object.assign,Gc={};function ua(e,t,l){this.props=e,this.context=t,this.refs=Gc,this.updater=l||Lc}ua.prototype.isReactComponent={};ua.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ua.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qc(){}Qc.prototype=ua.prototype;function Kr(e,t,l){this.props=e,this.context=t,this.refs=Gc,this.updater=l||Lc}var Jr=Kr.prototype=new Qc;Jr.constructor=Kr;Yc(Jr,ua.prototype);Jr.isPureReactComponent=!0;var tu=Array.isArray;function Jn(){}var W={H:null,A:null,T:null,S:null},Xc=Object.prototype.hasOwnProperty;function $r(e,t,l){var a=l.ref;return{$$typeof:Vr,type:e,key:t,ref:a!==void 0?a:null,props:l}}function bh(e,t){return $r(e.type,t,e.props)}function Wr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function vh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var lu=/\/+/g;function on(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vh(""+e.key):t.toString(36)}function xh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Jn,Jn):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ol(e,t,l,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(s){case"bigint":case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case Vr:case nh:n=!0;break;case qc:return n=e._init,Ol(n(e._payload),t,l,a,i)}}if(n)return i=i(e),n=a===""?"."+on(e,0):a,tu(i)?(l="",n!=null&&(l=n.replace(lu,"$&/")+"/"),Ol(i,t,l,"",function(u){return u})):i!=null&&(Wr(i)&&(i=bh(i,l+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(lu,"$&/")+"/")+n)),t.push(i)),1;n=0;var r=a===""?".":a+":";if(tu(e))for(var o=0;o<e.length;o++)a=e[o],s=r+on(a,o),n+=Ol(a,t,l,s,i);else if(o=ph(e),typeof o=="function")for(e=o.call(e),o=0;!(a=e.next()).done;)a=a.value,s=r+on(a,o++),n+=Ol(a,t,l,s,i);else if(s==="object"){if(typeof e.then=="function")return Ol(xh(e),t,l,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return n}function _i(e,t,l){if(e==null)return e;var a=[],i=0;return Ol(e,a,"","",function(s){return t.call(l,s,i++)}),a}function yh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wh={map:_i,forEach:function(e,t,l){_i(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return _i(e,function(){t++}),t},toArray:function(e){return _i(e,function(t){return t})||[]},only:function(e){if(!Wr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Activity=gh;R.Children=wh;R.Component=ua;R.Fragment=rh;R.Profiler=uh;R.PureComponent=Kr;R.StrictMode=oh;R.Suspense=mh;R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W;R.__COMPILER_RUNTIME={__proto__:null,c:function(e){return W.H.useMemoCache(e)}};R.cache=function(e){return function(){return e.apply(null,arguments)}};R.cacheSignal=function(){return null};R.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Yc({},e.props),i=e.key;if(t!=null)for(s in t.key!==void 0&&(i=""+t.key),t)!Xc.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(a[s]=t[s]);var s=arguments.length-2;if(s===1)a.children=l;else if(1<s){for(var n=Array(s),r=0;r<s;r++)n[r]=arguments[r+2];a.children=n}return $r(e.type,i,a)};R.createContext=function(e){return e={$$typeof:fh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ch,_context:e},e};R.createElement=function(e,t,l){var a,i={},s=null;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)Xc.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=t[a]);var n=arguments.length-2;if(n===1)i.children=l;else if(1<n){for(var r=Array(n),o=0;o<n;o++)r[o]=arguments[o+2];i.children=r}if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return $r(e,s,i)};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:dh,render:e}};R.isValidElement=Wr;R.lazy=function(e){return{$$typeof:qc,_payload:{_status:-1,_result:e},_init:yh}};R.memo=function(e,t){return{$$typeof:hh,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=W.T,l={};W.T=l;try{var a=e(),i=W.S;i!==null&&i(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Jn,au)}catch(s){au(s)}finally{t!==null&&l.types!==null&&(t.types=l.types),W.T=t}};R.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()};R.use=function(e){return W.H.use(e)};R.useActionState=function(e,t,l){return W.H.useActionState(e,t,l)};R.useCallback=function(e,t){return W.H.useCallback(e,t)};R.useContext=function(e){return W.H.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e,t){return W.H.useDeferredValue(e,t)};R.useEffect=function(e,t){return W.H.useEffect(e,t)};R.useEffectEvent=function(e){return W.H.useEffectEvent(e)};R.useId=function(){return W.H.useId()};R.useImperativeHandle=function(e,t,l){return W.H.useImperativeHandle(e,t,l)};R.useInsertionEffect=function(e,t){return W.H.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return W.H.useLayoutEffect(e,t)};R.useMemo=function(e,t){return W.H.useMemo(e,t)};R.useOptimistic=function(e,t){return W.H.useOptimistic(e,t)};R.useReducer=function(e,t,l){return W.H.useReducer(e,t,l)};R.useRef=function(e){return W.H.useRef(e)};R.useState=function(e){return W.H.useState(e)};R.useSyncExternalStore=function(e,t,l){return W.H.useSyncExternalStore(e,t,l)};R.useTransition=function(){return W.H.useTransition()};R.version="19.2.4";Bc.exports=R;var x=Bc.exports;const Sh=kc(x);var Zc={exports:{}},Ls={},Vc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,k){var M=j.length;j.push(k);e:for(;0<M;){var le=M-1>>>1,fe=j[le];if(0<i(fe,k))j[le]=k,j[M]=fe,M=le;else break e}}function l(j){return j.length===0?null:j[0]}function a(j){if(j.length===0)return null;var k=j[0],M=j.pop();if(M!==k){j[0]=M;e:for(var le=0,fe=j.length,ji=fe>>>1;le<ji;){var Ai=2*(le+1)-1,rn=j[Ai],rl=Ai+1,Ni=j[rl];if(0>i(rn,M))rl<fe&&0>i(Ni,rn)?(j[le]=Ni,j[rl]=M,le=rl):(j[le]=rn,j[Ai]=M,le=Ai);else if(rl<fe&&0>i(Ni,M))j[le]=Ni,j[rl]=M,le=rl;else break e}}return k}function i(j,k){var M=j.sortIndex-k.sortIndex;return M!==0?M:j.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var n=Date,r=n.now();e.unstable_now=function(){return n.now()-r}}var o=[],u=[],h=1,c=null,m=3,b=!1,w=!1,S=!1,z=!1,d=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function v(j){for(var k=l(u);k!==null;){if(k.callback===null)a(u);else if(k.startTime<=j)a(u),k.sortIndex=k.expirationTime,t(o,k);else break;k=l(u)}}function T(j){if(S=!1,v(j),!w)if(l(o)!==null)w=!0,N||(N=!0,lt());else{var k=l(u);k!==null&&Ye(T,k.startTime-j)}}var N=!1,E=-1,A=5,O=-1;function C(){return z?!0:!(e.unstable_now()-O<A)}function ze(){if(z=!1,N){var j=e.unstable_now();O=j;var k=!0;try{e:{w=!1,S&&(S=!1,f(E),E=-1),b=!0;var M=m;try{t:{for(v(j),c=l(o);c!==null&&!(c.expirationTime>j&&C());){var le=c.callback;if(typeof le=="function"){c.callback=null,m=c.priorityLevel;var fe=le(c.expirationTime<=j);if(j=e.unstable_now(),typeof fe=="function"){c.callback=fe,v(j),k=!0;break t}c===l(o)&&a(o),v(j)}else a(o);c=l(o)}if(c!==null)k=!0;else{var ji=l(u);ji!==null&&Ye(T,ji.startTime-j),k=!1}}break e}finally{c=null,m=M,b=!1}k=void 0}}finally{k?lt():N=!1}}}var lt;if(typeof p=="function")lt=function(){p(ze)};else if(typeof MessageChannel<"u"){var wa=new MessageChannel,Ei=wa.port2;wa.port1.onmessage=ze,lt=function(){Ei.postMessage(null)}}else lt=function(){d(ze,0)};function Ye(j,k){E=d(function(){j(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var M=m;m=k;try{return j()}finally{m=M}},e.unstable_requestPaint=function(){z=!0},e.unstable_runWithPriority=function(j,k){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var M=m;m=j;try{return k()}finally{m=M}},e.unstable_scheduleCallback=function(j,k,M){var le=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?le+M:le):M=le,j){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=M+fe,j={id:h++,callback:k,priorityLevel:j,startTime:M,expirationTime:fe,sortIndex:-1},M>le?(j.sortIndex=M,t(u,j),l(o)===null&&j===l(u)&&(S?(f(E),E=-1):S=!0,Ye(T,M-le))):(j.sortIndex=fe,t(o,j),w||b||(w=!0,N||(N=!0,lt()))),j},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(j){var k=m;return function(){var M=m;m=k;try{return j.apply(this,arguments)}finally{m=M}}}})(Kc);Vc.exports=Kc;var zh=Vc.exports,Jc={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=x;function $c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dt(){}var we={d:{f:Dt,r:function(){throw Error($c(522))},D:Dt,C:Dt,L:Dt,m:Dt,X:Dt,S:Dt,M:Dt},p:0,findDOMNode:null},Eh=Symbol.for("react.portal");function jh(e,t,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eh,key:a==null?null:""+a,children:e,containerInfo:t,implementation:l}}var ka=Th.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ys(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Se.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error($c(299));return jh(e,t,null,l)};Se.flushSync=function(e){var t=ka.T,l=we.p;try{if(ka.T=null,we.p=2,e)return e()}finally{ka.T=t,we.p=l,we.d.f()}};Se.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Se.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Se.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,a=Ys(l,t.crossOrigin),i=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:s}):l==="script"&&we.d.X(e,{crossOrigin:a,integrity:i,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Se.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Ys(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Se.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,a=Ys(l,t.crossOrigin);we.d.L(e,l,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Se.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Ys(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Se.requestFormReset=function(e){we.d.r(e)};Se.unstable_batchedUpdates=function(e,t){return e(t)};Se.useFormState=function(e,t,l){return ka.H.useFormState(e,t,l)};Se.useFormStatus=function(){return ka.H.useHostTransitionStatus()};Se.version="19.2.4";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Jc.exports=Se;var Ah=Jc.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=zh,Fc=x,Nh=Ah;function y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ci(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ef(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(ci(e)!==e)throw Error(y(188))}function _h(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(y(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===l)return iu(i),e;if(s===a)return iu(i),t;s=s.sibling}throw Error(y(188))}if(l.return!==a.return)l=i,a=s;else{for(var n=!1,r=i.child;r;){if(r===l){n=!0,l=i,a=s;break}if(r===a){n=!0,a=i,l=s;break}r=r.sibling}if(!n){for(r=s.child;r;){if(r===l){n=!0,l=s,a=i;break}if(r===a){n=!0,a=s,l=i;break}r=r.sibling}if(!n)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?e:t}function tf(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=tf(e),t!==null)return t;e=e.sibling}return null}var F=Object.assign,Oh=Symbol.for("react.element"),Oi=Symbol.for("react.transitional.element"),Oa=Symbol.for("react.portal"),Cl=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),$n=Symbol.for("react.profiler"),af=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),Fr=Symbol.for("react.forward_ref"),Wn=Symbol.for("react.suspense"),Fn=Symbol.for("react.suspense_list"),Ir=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),In=Symbol.for("react.activity"),Rh=Symbol.for("react.memo_cache_sentinel"),su=Symbol.iterator;function Sa(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var Dh=Symbol.for("react.client.reference");function Pn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dh?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cl:return"Fragment";case $n:return"Profiler";case lf:return"StrictMode";case Wn:return"Suspense";case Fn:return"SuspenseList";case In:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Oa:return"Portal";case vt:return e.displayName||"Context";case af:return(e._context.displayName||"Context")+".Consumer";case Fr:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ir:return t=e.displayName||null,t!==null?t:Pn(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Pn(e(t))}catch{}}return null}var Ra=Array.isArray,_=Fc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Nh.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ml={pending:!1,data:null,method:null,action:null},er=[],Ml=-1;function ut(e){return{current:e}}function he(e){0>Ml||(e.current=er[Ml],er[Ml]=null,Ml--)}function K(e,t){Ml++,er[Ml]=e.current,e.current=t}var nt=ut(null),$a=ut(null),Zt=ut(null),us=ut(null);function cs(e,t){switch(K(Zt,t),K($a,e),K(nt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fc(t),e=Tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}he(nt),K(nt,e)}function Il(){he(nt),he($a),he(Zt)}function tr(e){e.memoizedState!==null&&K(us,e);var t=nt.current,l=Tm(t,e.type);t!==l&&(K($a,e),K(nt,l))}function fs(e){$a.current===e&&(he(nt),he($a)),us.current===e&&(he(us),ni._currentValue=ml)}var un,nu;function ul(e){if(un===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);un=t&&t[1]||"",nu=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+un+e+nu}var cn=!1;function fn(e,t){if(!e||cn)return"";cn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(b){var m=b}Reflect.construct(e,[],c)}else{try{c.call()}catch(b){m=b}e.call(c.prototype)}}else{try{throw Error()}catch(b){m=b}(c=e())&&typeof c.catch=="function"&&c.catch(function(){})}}catch(b){if(b&&m&&typeof b.stack=="string")return[b.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),n=s[0],r=s[1];if(n&&r){var o=n.split(`
`),u=r.split(`
`);for(i=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(a===o.length||i===u.length)for(a=o.length-1,i=u.length-1;1<=a&&0<=i&&o[a]!==u[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==u[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==u[i]){var h=`
`+o[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=i);break}}}finally{cn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?ul(l):""}function Ch(e,t){switch(e.tag){case 26:case 27:case 5:return ul(e.type);case 16:return ul("Lazy");case 13:return e.child!==t&&t!==null?ul("Suspense Fallback"):ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return ul("Activity");default:return""}}function ru(e){try{var t="",l=null;do t+=Ch(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var lr=Object.prototype.hasOwnProperty,Pr=ce.unstable_scheduleCallback,dn=ce.unstable_cancelCallback,Mh=ce.unstable_shouldYield,kh=ce.unstable_requestPaint,ke=ce.unstable_now,Uh=ce.unstable_getCurrentPriorityLevel,sf=ce.unstable_ImmediatePriority,nf=ce.unstable_UserBlockingPriority,ds=ce.unstable_NormalPriority,Hh=ce.unstable_LowPriority,rf=ce.unstable_IdlePriority,Bh=ce.log,qh=ce.unstable_setDisableYieldValue,fi=null,Ue=null;function Lt(e){if(typeof Bh=="function"&&qh(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(fi,e)}catch{}}var He=Math.clz32?Math.clz32:Gh,Lh=Math.log,Yh=Math.LN2;function Gh(e){return e>>>=0,e===0?32:31-(Lh(e)/Yh|0)|0}var Ri=256,Di=262144,Ci=4194304;function cl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gs(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,n=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~s,a!==0?i=cl(a):(n&=r,n!==0?i=cl(n):l||(l=r&~e,l!==0&&(i=cl(l))))):(r=a&~s,r!==0?i=cl(r):n!==0?i=cl(n):l||(l=a&~e,l!==0&&(i=cl(l)))),i===0?0:t!==0&&t!==i&&!(t&s)&&(s=i&-i,l=t&-t,s>=l||s===32&&(l&4194048)!==0)?t:i}function di(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function of(){var e=Ci;return Ci<<=1,!(Ci&62914560)&&(Ci=4194304),e}function mn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function mi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xh(e,t,l,a,i,s){var n=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var r=e.entanglements,o=e.expirationTimes,u=e.hiddenUpdates;for(l=n&~l;0<l;){var h=31-He(l),c=1<<h;r[h]=0,o[h]=-1;var m=u[h];if(m!==null)for(u[h]=null,h=0;h<m.length;h++){var b=m[h];b!==null&&(b.lane&=-536870913)}l&=~c}a!==0&&uf(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(n&~t))}function uf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-He(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function cf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-He(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function ff(e,t){var l=t&-t;return l=l&42?1:eo(l),l&(e.suspendedLanes|t)?0:l}function eo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function to(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function df(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:km(e.type))}function ou(e,t){var l=Y.p;try{return Y.p=e,t()}finally{Y.p=l}}var il=Math.random().toString(36).slice(2),pe="__reactFiber$"+il,_e="__reactProps$"+il,ca="__reactContainer$"+il,ar="__reactEvents$"+il,Zh="__reactListeners$"+il,Vh="__reactHandles$"+il,uu="__reactResources$"+il,hi="__reactMarker$"+il;function lo(e){delete e[pe],delete e[_e],delete e[ar],delete e[Zh],delete e[Vh]}function kl(e){var t=e[pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ca]||l[pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=pc(e);e!==null;){if(l=e[pe])return l;e=pc(e)}return t}e=l,l=e.parentNode}return null}function fa(e){if(e=e[pe]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Da(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(y(33))}function Zl(e){var t=e[uu];return t||(t=e[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function me(e){e[hi]=!0}var mf=new Set,hf={};function zl(e,t){Pl(e,t),Pl(e+"Capture",t)}function Pl(e,t){for(hf[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var Kh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},fu={};function Jh(e){return lr.call(fu,e)?!0:lr.call(cu,e)?!1:Kh.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function Vi(e,t,l){if(Jh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Mi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function ft(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $h(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(n){l=""+n,s.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(n){l=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){if(!e._valueTracker){var t=gf(e)?"checked":"value";e._valueTracker=$h(e,t,""+e[t])}}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=gf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wh=/[\n"\\]/g;function Ve(e){return e.replace(Wh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function sr(e,t,l,a,i,s,n,r){e.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?e.type=n:e.removeAttribute("type"),t!=null?n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qe(t)):e.value!==""+Qe(t)&&(e.value=""+Qe(t)):n!=="submit"&&n!=="reset"||e.removeAttribute("value"),t!=null?nr(e,n,Qe(t)):l!=null?nr(e,n,Qe(l)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Qe(r):e.removeAttribute("name")}function bf(e,t,l,a,i,s,n,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ir(e);return}l=l!=null?""+Qe(l):"",t=t!=null?""+Qe(t):l,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.name=n),ir(e)}function nr(e,t,l){t==="number"&&ms(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Vl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Qe(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vf(e,t,l){if(t!=null&&(t=""+Qe(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Qe(l):""}function xf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(y(92));if(Ra(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Qe(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ir(e)}function ea(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Fh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function yf(e,t,l){if(t!=null&&typeof t!="object")throw Error(y(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&du(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&du(e,s,t[s])}function ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xt(){}var rr=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Kl=null;function mu(e){var t=fa(e);if(t&&(e=t.stateNode)){var l=e[_e]||null;e:switch(e=t.stateNode,t.type){case"input":if(sr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ve(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[_e]||null;if(!i)throw Error(y(90));sr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&pf(a)}break e;case"textarea":vf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Vl(e,!!l.multiple,t,!1)}}}var hn=!1;function wf(e,t,l){if(hn)return e(t,l);hn=!0;try{var a=e(t);return a}finally{if(hn=!1,(Ul!==null||Kl!==null)&&(en(),Ul&&(t=Ul,e=Kl,Kl=Ul=null,mu(t),e)))for(t=0;t<e.length;t++)mu(e[t])}}function Wa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[_e]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(y(231,t,typeof l));return l}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(Tt)try{var za={};Object.defineProperty(za,"passive",{get:function(){or=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{or=!1}var Yt=null,so=null,Ji=null;function Sf(){if(Ji)return Ji;var e,t=so,l=t.length,a,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(e=0;e<l&&t[e]===i[e];e++);var n=l-e;for(a=1;a<=n&&t[l-a]===i[s-a];a++);return Ji=i.slice(e,1<a?1-a:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function hu(){return!1}function Oe(e){function t(l,a,i,s,n){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=n,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(l=e[r],this[r]=l?l(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ki:hu,this.isPropagationStopped=hu,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Oe(Tl),gi=F({},Tl,{view:0,detail:0}),eg=Oe(gi),gn,pn,Ta,Xs=F({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ta&&(Ta&&e.type==="mousemove"?(gn=e.screenX-Ta.screenX,pn=e.screenY-Ta.screenY):pn=gn=0,Ta=e),gn)},movementY:function(e){return"movementY"in e?e.movementY:pn}}),gu=Oe(Xs),tg=F({},Xs,{dataTransfer:0}),lg=Oe(tg),ag=F({},gi,{relatedTarget:0}),bn=Oe(ag),ig=F({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Oe(ig),ng=F({},Tl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=Oe(ng),og=F({},Tl,{data:0}),pu=Oe(og),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function no(){return dg}var mg=F({},gi,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Oe(mg),gg=F({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Oe(gg),pg=F({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),bg=Oe(pg),vg=F({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Oe(vg),yg=F({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=Oe(yg),Sg=F({},Tl,{newState:0,oldState:0}),zg=Oe(Sg),Tg=[9,13,27,32],ro=Tt&&"CompositionEvent"in window,Ua=null;Tt&&"documentMode"in document&&(Ua=document.documentMode);var Eg=Tt&&"TextEvent"in window&&!Ua,zf=Tt&&(!ro||Ua&&8<Ua&&11>=Ua),vu=" ",xu=!1;function Tf(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hl=!1;function jg(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(xu=!0,vu);case"textInput":return e=t.data,e===vu&&xu?null:e;default:return null}}function Ag(e,t){if(Hl)return e==="compositionend"||!ro&&Tf(e,t)?(e=Sf(),Ji=so=Yt=null,Hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zf&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function jf(e,t,l,a){Ul?Kl?Kl.push(a):Kl=[a]:Ul=a,t=Rs(t,"onChange"),0<t.length&&(l=new Qs("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ha=null,Fa=null;function _g(e){wm(e,0)}function Zs(e){var t=Da(e);if(pf(t))return e}function wu(e,t){if(e==="change")return t}var Af=!1;if(Tt){var vn;if(Tt){var xn="oninput"in document;if(!xn){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),xn=typeof Su.oninput=="function"}vn=xn}else vn=!1;Af=vn&&(!document.documentMode||9<document.documentMode)}function zu(){Ha&&(Ha.detachEvent("onpropertychange",Nf),Fa=Ha=null)}function Nf(e){if(e.propertyName==="value"&&Zs(Fa)){var t=[];jf(t,Fa,e,io(e)),wf(_g,t)}}function Og(e,t,l){e==="focusin"?(zu(),Ha=t,Fa=l,Ha.attachEvent("onpropertychange",Nf)):e==="focusout"&&zu()}function Rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(Fa)}function Dg(e,t){if(e==="click")return Zs(t)}function Cg(e,t){if(e==="input"||e==="change")return Zs(t)}function Mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Mg;function Ia(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!lr.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var l=Tu(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Tu(l)}}function _f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ms(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ms(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kg=Tt&&"documentMode"in document&&11>=document.documentMode,Bl=null,ur=null,Ba=null,cr=!1;function ju(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cr||Bl==null||Bl!==ms(a)||(a=Bl,"selectionStart"in a&&oo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ba&&Ia(Ba,a)||(Ba=a,a=Rs(ur,"onSelect"),0<a.length&&(t=new Qs("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Bl)))}function ol(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ql={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionrun:ol("Transition","TransitionRun"),transitionstart:ol("Transition","TransitionStart"),transitioncancel:ol("Transition","TransitionCancel"),transitionend:ol("Transition","TransitionEnd")},yn={},Rf={};Tt&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete ql.animationend.animation,delete ql.animationiteration.animation,delete ql.animationstart.animation),"TransitionEvent"in window||delete ql.transitionend.transition);function El(e){if(yn[e])return yn[e];if(!ql[e])return e;var t=ql[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Rf)return yn[e]=t[l];return e}var Df=El("animationend"),Cf=El("animationiteration"),Mf=El("animationstart"),Ug=El("transitionrun"),Hg=El("transitionstart"),Bg=El("transitioncancel"),kf=El("transitionend"),Uf=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function tt(e,t){Uf.set(e,t),zl(t,[e])}var hs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ge=[],Ll=0,uo=0;function Vs(){for(var e=Ll,t=uo=Ll=0;t<e;){var l=Ge[t];Ge[t++]=null;var a=Ge[t];Ge[t++]=null;var i=Ge[t];Ge[t++]=null;var s=Ge[t];if(Ge[t++]=null,a!==null&&i!==null){var n=a.pending;n===null?i.next=i:(i.next=n.next,n.next=i),a.pending=i}s!==0&&Hf(l,i,s)}}function Ks(e,t,l,a){Ge[Ll++]=e,Ge[Ll++]=t,Ge[Ll++]=l,Ge[Ll++]=a,uo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function co(e,t,l,a){return Ks(e,t,l,a),gs(e)}function jl(e,t){return Ks(e,null,null,t),gs(e)}function Hf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,s=e.return;s!==null;)s.childLanes|=l,a=s.alternate,a!==null&&(a.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-He(l),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),s):null}function gs(e){if(50<Ka)throw Ka=0,Dr=null,Error(y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yl={};function qg(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,l,a){return new qg(e,t,l,a)}function fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var l=e.alternate;return l===null?(l=Ce(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Bf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,l,a,i,s){var n=0;if(a=e,typeof e=="function")fo(e)&&(n=1);else if(typeof e=="string")n=Xp(e,l,nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case In:return e=Ce(31,l,t,i),e.elementType=In,e.lanes=s,e;case Cl:return hl(l.children,i,s,t);case lf:n=8,i|=24;break;case $n:return e=Ce(12,l,t,i|2),e.elementType=$n,e.lanes=s,e;case Wn:return e=Ce(13,l,t,i),e.elementType=Wn,e.lanes=s,e;case Fn:return e=Ce(19,l,t,i),e.elementType=Fn,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:n=10;break e;case af:n=9;break e;case Fr:n=11;break e;case Ir:n=14;break e;case Mt:n=16,a=null;break e}n=29,l=Error(y(130,e===null?"null":typeof e,"")),a=null}return t=Ce(n,l,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function hl(e,t,l,a){return e=Ce(7,e,a,t),e.lanes=l,e}function wn(e,t,l){return e=Ce(6,e,null,t),e.lanes=l,e}function qf(e){var t=Ce(18,null,null,0);return t.stateNode=e,t}function Sn(e,t,l){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Au=new WeakMap;function Ke(e,t){if(typeof e=="object"&&e!==null){var l=Au.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ru(t)},Au.set(e,t),t)}return{value:e,source:t,stack:ru(t)}}var Gl=[],Ql=0,ps=null,Pa=0,Xe=[],Ze=0,el=null,at=1,it="";function pt(e,t){Gl[Ql++]=Pa,Gl[Ql++]=ps,ps=e,Pa=t}function Lf(e,t,l){Xe[Ze++]=at,Xe[Ze++]=it,Xe[Ze++]=el,el=e;var a=at;e=it;var i=32-He(a)-1;a&=~(1<<i),l+=1;var s=32-He(t)+i;if(30<s){var n=i-i%5;s=(a&(1<<n)-1).toString(32),a>>=n,i-=n,at=1<<32-He(t)+i|l<<i|a,it=s+e}else at=1<<s|l<<i|a,it=e}function mo(e){e.return!==null&&(pt(e,1),Lf(e,1,0))}function ho(e){for(;e===ps;)ps=Gl[--Ql],Gl[Ql]=null,Pa=Gl[--Ql],Gl[Ql]=null;for(;e===el;)el=Xe[--Ze],Xe[Ze]=null,it=Xe[--Ze],Xe[Ze]=null,at=Xe[--Ze],Xe[Ze]=null}function Yf(e,t){Xe[Ze++]=at,Xe[Ze++]=it,Xe[Ze++]=el,at=t.id,it=t.overflow,el=e}var be=null,$=null,q=!1,Vt=null,Je=!1,dr=Error(y(519));function tl(e){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Ke(t,e)),dr}function Nu(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[pe]=e,t[_e]=a,l){case"dialog":U("cancel",t),U("close",t);break;case"iframe":case"object":case"embed":U("load",t);break;case"video":case"audio":for(l=0;l<ii.length;l++)U(ii[l],t);break;case"source":U("error",t);break;case"img":case"image":case"link":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"input":U("invalid",t),bf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":U("invalid",t);break;case"textarea":U("invalid",t),xf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||zm(t.textContent,l)?(a.popover!=null&&(U("beforetoggle",t),U("toggle",t)),a.onScroll!=null&&U("scroll",t),a.onScrollEnd!=null&&U("scrollend",t),a.onClick!=null&&(t.onclick=xt),t=!0):t=!1,t||tl(e,!0)}function _u(e){for(be=e.return;be;)switch(be.tag){case 5:case 31:case 13:Je=!1;return;case 27:case 3:Je=!0;return;default:be=be.return}}function Nl(e){if(e!==be)return!1;if(!q)return _u(e),q=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Hr(e.type,e.memoizedProps)),l=!l),l&&$&&tl(e),_u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));$=gc(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));$=gc(e)}else t===27?(t=$,sl(e.type)?(e=Yr,Yr=null,$=e):$=t):$=be?We(e.stateNode.nextSibling):null;return!0}function vl(){$=be=null,q=!1}function zn(){var e=Vt;return e!==null&&(Ae===null?Ae=e:Ae.push.apply(Ae,e),Vt=null),e}function ei(e){Vt===null?Vt=[e]:Vt.push(e)}var mr=ut(null),Al=null,yt=null;function Ut(e,t,l){K(mr,t._currentValue),t._currentValue=l}function St(e){e._currentValue=mr.current,he(mr)}function hr(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function gr(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var n=i.child;s=s.firstContext;e:for(;s!==null;){var r=s;s=i;for(var o=0;o<t.length;o++)if(r.context===t[o]){s.lanes|=l,r=s.alternate,r!==null&&(r.lanes|=l),hr(s.return,l,e),a||(n=null);break e}s=r.next}}else if(i.tag===18){if(n=i.return,n===null)throw Error(y(341));n.lanes|=l,s=n.alternate,s!==null&&(s.lanes|=l),hr(n,l,e),n=null}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===e){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}}function da(e,t,l,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var n=i.alternate;if(n===null)throw Error(y(387));if(n=n.memoizedProps,n!==null){var r=i.type;qe(i.pendingProps.value,n.value)||(e!==null?e.push(r):e=[r])}}else if(i===us.current){if(n=i.alternate,n===null)throw Error(y(387));n.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ni):e=[ni])}i=i.return}e!==null&&gr(t,e,l,a),t.flags|=262144}function bs(e){for(e=e.firstContext;e!==null;){if(!qe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xl(e){Al=e,yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ve(e){return Gf(Al,e)}function Ui(e,t){return Al===null&&xl(e),Gf(e,t)}function Gf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},yt===null){if(e===null)throw Error(y(308));yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yt=yt.next=t;return l}var Lg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Yg=ce.unstable_scheduleCallback,Gg=ce.unstable_NormalPriority,re={$$typeof:vt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function go(){return{controller:new Lg,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&Yg(Gg,function(){e.controller.abort()})}var qa=null,pr=0,ta=0,Jl=null;function Qg(e,t){if(qa===null){var l=qa=[];pr=0,ta=Lo(),Jl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return pr++,t.then(Ou,Ou),t}function Ou(){if(--pr===0&&qa!==null){Jl!==null&&(Jl.status="fulfilled");var e=qa;qa=null,ta=0,Jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xg(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ru=_.S;_.S=function(e,t){lm=ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qg(e,t),Ru!==null&&Ru(e,t)};var gl=ut(null);function po(){var e=gl.current;return e!==null?e:V.pooledCache}function Fi(e,t){t===null?K(gl,gl.current):K(gl,t.pool)}function Qf(){var e=po();return e===null?null:{parent:re._currentValue,pool:e}}var ma=Error(y(460)),bo=Error(y(474)),Js=Error(y(542)),vs={then:function(){}};function Du(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(xt,xt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mu(e),e;default:if(typeof t.status=="string")t.then(xt,xt);else{if(e=V,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mu(e),e}throw pl=t,ma}}function fl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(pl=l,ma):l}}var pl=null;function Cu(){if(pl===null)throw Error(y(459));var e=pl;return pl=null,e}function Mu(e){if(e===ma||e===Js)throw Error(y(483))}var $l=null,ti=0;function Hi(e){var t=ti;return ti+=1,$l===null&&($l=[]),Xf($l,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===Oh?Error(y(525)):(e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zf(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function l(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function a(d){for(var f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(d,f){return d=wt(d,f),d.index=0,d.sibling=null,d}function s(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=67108866,f):p):(d.flags|=67108866,f)):(d.flags|=1048576,f)}function n(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function r(d,f,p,v){return f===null||f.tag!==6?(f=wn(p,d.mode,v),f.return=d,f):(f=i(f,p),f.return=d,f)}function o(d,f,p,v){var T=p.type;return T===Cl?h(d,f,p.props.children,v,p.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&fl(T)===f.type)?(f=i(f,p.props),Ea(f,p),f.return=d,f):(f=Wi(p.type,p.key,p.props,null,d.mode,v),Ea(f,p),f.return=d,f)}function u(d,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Sn(p,d.mode,v),f.return=d,f):(f=i(f,p.children||[]),f.return=d,f)}function h(d,f,p,v,T){return f===null||f.tag!==7?(f=hl(p,d.mode,v,T),f.return=d,f):(f=i(f,p),f.return=d,f)}function c(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=wn(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oi:return p=Wi(f.type,f.key,f.props,null,d.mode,p),Ea(p,f),p.return=d,p;case Oa:return f=Sn(f,d.mode,p),f.return=d,f;case Mt:return f=fl(f),c(d,f,p)}if(Ra(f)||Sa(f))return f=hl(f,d.mode,p,null),f.return=d,f;if(typeof f.then=="function")return c(d,Hi(f),p);if(f.$$typeof===vt)return c(d,Ui(d,f),p);Bi(d,f)}return null}function m(d,f,p,v){var T=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return T!==null?null:r(d,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:return p.key===T?o(d,f,p,v):null;case Oa:return p.key===T?u(d,f,p,v):null;case Mt:return p=fl(p),m(d,f,p,v)}if(Ra(p)||Sa(p))return T!==null?null:h(d,f,p,v,null);if(typeof p.then=="function")return m(d,f,Hi(p),v);if(p.$$typeof===vt)return m(d,f,Ui(d,p),v);Bi(d,p)}return null}function b(d,f,p,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return d=d.get(p)||null,r(f,d,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oi:return d=d.get(v.key===null?p:v.key)||null,o(f,d,v,T);case Oa:return d=d.get(v.key===null?p:v.key)||null,u(f,d,v,T);case Mt:return v=fl(v),b(d,f,p,v,T)}if(Ra(v)||Sa(v))return d=d.get(p)||null,h(f,d,v,T,null);if(typeof v.then=="function")return b(d,f,p,Hi(v),T);if(v.$$typeof===vt)return b(d,f,p,Ui(f,v),T);Bi(f,v)}return null}function w(d,f,p,v){for(var T=null,N=null,E=f,A=f=0,O=null;E!==null&&A<p.length;A++){E.index>A?(O=E,E=null):O=E.sibling;var C=m(d,E,p[A],v);if(C===null){E===null&&(E=O);break}e&&E&&C.alternate===null&&t(d,E),f=s(C,f,A),N===null?T=C:N.sibling=C,N=C,E=O}if(A===p.length)return l(d,E),q&&pt(d,A),T;if(E===null){for(;A<p.length;A++)E=c(d,p[A],v),E!==null&&(f=s(E,f,A),N===null?T=E:N.sibling=E,N=E);return q&&pt(d,A),T}for(E=a(E);A<p.length;A++)O=b(E,d,A,p[A],v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?A:O.key),f=s(O,f,A),N===null?T=O:N.sibling=O,N=O);return e&&E.forEach(function(ze){return t(d,ze)}),q&&pt(d,A),T}function S(d,f,p,v){if(p==null)throw Error(y(151));for(var T=null,N=null,E=f,A=f=0,O=null,C=p.next();E!==null&&!C.done;A++,C=p.next()){E.index>A?(O=E,E=null):O=E.sibling;var ze=m(d,E,C.value,v);if(ze===null){E===null&&(E=O);break}e&&E&&ze.alternate===null&&t(d,E),f=s(ze,f,A),N===null?T=ze:N.sibling=ze,N=ze,E=O}if(C.done)return l(d,E),q&&pt(d,A),T;if(E===null){for(;!C.done;A++,C=p.next())C=c(d,C.value,v),C!==null&&(f=s(C,f,A),N===null?T=C:N.sibling=C,N=C);return q&&pt(d,A),T}for(E=a(E);!C.done;A++,C=p.next())C=b(E,d,A,C.value,v),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?A:C.key),f=s(C,f,A),N===null?T=C:N.sibling=C,N=C);return e&&E.forEach(function(lt){return t(d,lt)}),q&&pt(d,A),T}function z(d,f,p,v){if(typeof p=="object"&&p!==null&&p.type===Cl&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:e:{for(var T=p.key;f!==null;){if(f.key===T){if(T=p.type,T===Cl){if(f.tag===7){l(d,f.sibling),v=i(f,p.props.children),v.return=d,d=v;break e}}else if(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&fl(T)===f.type){l(d,f.sibling),v=i(f,p.props),Ea(v,p),v.return=d,d=v;break e}l(d,f);break}else t(d,f);f=f.sibling}p.type===Cl?(v=hl(p.props.children,d.mode,v,p.key),v.return=d,d=v):(v=Wi(p.type,p.key,p.props,null,d.mode,v),Ea(v,p),v.return=d,d=v)}return n(d);case Oa:e:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){l(d,f.sibling),v=i(f,p.children||[]),v.return=d,d=v;break e}else{l(d,f);break}else t(d,f);f=f.sibling}v=Sn(p,d.mode,v),v.return=d,d=v}return n(d);case Mt:return p=fl(p),z(d,f,p,v)}if(Ra(p))return w(d,f,p,v);if(Sa(p)){if(T=Sa(p),typeof T!="function")throw Error(y(150));return p=T.call(p),S(d,f,p,v)}if(typeof p.then=="function")return z(d,f,Hi(p),v);if(p.$$typeof===vt)return z(d,f,Ui(d,p),v);Bi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(l(d,f.sibling),v=i(f,p),v.return=d,d=v):(l(d,f),v=wn(p,d.mode,v),v.return=d,d=v),n(d)):l(d,f)}return function(d,f,p,v){try{ti=0;var T=z(d,f,p,v);return $l=null,T}catch(E){if(E===ma||E===Js)throw E;var N=Ce(29,E,null,d.mode);return N.lanes=v,N.return=d,N}finally{}}}var yl=Zf(!0),Vf=Zf(!1),kt=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function br(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,L&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=gs(e),Hf(e,null,l),t}return Ks(e,a,t,l),gs(e)}function La(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,cf(e,l)}}function Tn(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var n={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?i=s=n:s=s.next=n,l=l.next}while(l!==null);s===null?i=s=t:s=s.next=t}else i=s=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var vr=!1;function Ya(){if(vr){var e=Jl;if(e!==null)throw e}}function Ga(e,t,l,a){vr=!1;var i=e.updateQueue;kt=!1;var s=i.firstBaseUpdate,n=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var o=r,u=o.next;o.next=null,n===null?s=u:n.next=u,n=o;var h=e.alternate;h!==null&&(h=h.updateQueue,r=h.lastBaseUpdate,r!==n&&(r===null?h.firstBaseUpdate=u:r.next=u,h.lastBaseUpdate=o))}if(s!==null){var c=i.baseState;n=0,h=u=o=null,r=s;do{var m=r.lane&-536870913,b=m!==r.lane;if(b?(B&m)===m:(a&m)===m){m!==0&&m===ta&&(vr=!0),h!==null&&(h=h.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var w=e,S=r;m=t;var z=l;switch(S.tag){case 1:if(w=S.payload,typeof w=="function"){c=w.call(z,c,m);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(z,c,m):w,m==null)break e;c=F({},c,m);break e;case 2:kt=!0}}m=r.callback,m!==null&&(e.flags|=64,b&&(e.flags|=8192),b=i.callbacks,b===null?i.callbacks=[m]:b.push(m))}else b={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},h===null?(u=h=b,o=c):h=h.next=b,n|=m;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;b=r,r=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);h===null&&(o=c),i.baseState=o,i.firstBaseUpdate=u,i.lastBaseUpdate=h,s===null&&(i.shared.lanes=0),al|=n,e.lanes=n,e.memoizedState=c}}function Kf(e,t){if(typeof e!="function")throw Error(y(191,e));e.call(t)}function Jf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Kf(l[e],t)}var la=ut(null),xs=ut(0);function ku(e,t){e=Nt,K(xs,e),K(la,t),Nt=e|t.baseLanes}function xr(){K(xs,Nt),K(la,la.current)}function xo(){Nt=xs.current,he(la),he(xs)}var Le=ut(null),$e=null;function Ht(e){var t=e.alternate;K(ae,ae.current&1),K(Le,e),$e===null&&(t===null||la.current!==null||t.memoizedState!==null)&&($e=e)}function yr(e){K(ae,ae.current),K(Le,e),$e===null&&($e=e)}function $f(e){e.tag===22?(K(ae,ae.current),K(Le,e),$e===null&&($e=e)):Bt()}function Bt(){K(ae,ae.current),K(Le,Le.current)}function De(e){he(Le),$e===e&&($e=null),he(ae)}var ae=ut(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||qr(l)||Lr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Et=0,D=null,Z=null,se=null,ws=!1,Wl=!1,wl=!1,Ss=0,li=0,Fl=null,Zg=0;function ee(){throw Error(y(321))}function yo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!qe(e[l],t[l]))return!1;return!0}function wo(e,t,l,a,i,s){return Et=s,D=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?jd:Do,wl=!1,s=l(a,i),wl=!1,Wl&&(s=Ff(t,l,a,i)),Wf(e),s}function Wf(e){_.H=ai;var t=Z!==null&&Z.next!==null;if(Et=0,se=Z=D=null,ws=!1,li=0,Fl=null,t)throw Error(y(300));e===null||oe||(e=e.dependencies,e!==null&&bs(e)&&(oe=!0))}function Ff(e,t,l,a){D=e;var i=0;do{if(Wl&&(Fl=null),li=0,Wl=!1,25<=i)throw Error(y(301));if(i+=1,se=Z=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Ad,s=t(l,a)}while(Wl);return s}function Vg(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(Z!==null?Z.memoizedState:null)!==e&&(D.flags|=1024),t}function So(){var e=Ss!==0;return Ss=0,e}function zo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function To(e){if(ws){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ws=!1}Et=0,se=Z=D=null,Wl=!1,li=Ss=0,Fl=null}function ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?D.memoizedState=se=e:se=se.next=e,se}function ie(){if(Z===null){var e=D.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=se===null?D.memoizedState:se.next;if(t!==null)se=t,Z=e;else{if(e===null)throw D.alternate===null?Error(y(467)):Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},se===null?D.memoizedState=se=e:se=se.next=e}return se}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=li;return li+=1,Fl===null&&(Fl=[]),e=Xf(Fl,e,t),t=D,(se===null?t.memoizedState:se.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?jd:Do),e}function Ws(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===vt)return ve(e)}throw Error(y(438,String(e)))}function Eo(e){var t=null,l=D.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=D.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=$s(),D.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Rh;return t.index++,l}function jt(e,t){return typeof t=="function"?t(e):t}function Ii(e){var t=ie();return jo(t,Z,e)}function jo(e,t,l){var a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var n=i.next;i.next=s.next,s.next=n}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var r=n=null,o=null,u=t,h=!1;do{var c=u.lane&-536870913;if(c!==u.lane?(B&c)===c:(Et&c)===c){var m=u.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),c===ta&&(h=!0);else if((Et&m)===m){u=u.next,m===ta&&(h=!0);continue}else c={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(r=o=c,n=s):o=o.next=c,D.lanes|=m,al|=m;c=u.action,wl&&l(s,c),s=u.hasEagerState?u.eagerState:l(s,c)}else m={lane:c,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(r=o=m,n=s):o=o.next=m,D.lanes|=c,al|=c;u=u.next}while(u!==null&&u!==t);if(o===null?n=s:o.next=r,!qe(s,e.memoizedState)&&(oe=!0,h&&(l=Jl,l!==null)))throw l;e.memoizedState=s,e.baseState=n,e.baseQueue=o,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function En(e){var t=ie(),l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,s=t.memoizedState;if(i!==null){l.pending=null;var n=i=i.next;do s=e(s,n.action),n=n.next;while(n!==i);qe(s,t.memoizedState)||(oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),l.lastRenderedState=s}return[s,a]}function If(e,t,l){var a=D,i=ie(),s=q;if(s){if(l===void 0)throw Error(y(407));l=l()}else l=t();var n=!qe((Z||i).memoizedState,l);if(n&&(i.memoizedState=l,oe=!0),i=i.queue,Ao(td.bind(null,a,i,e),[e]),i.getSnapshot!==t||n||se!==null&&se.memoizedState.tag&1){if(a.flags|=2048,aa(9,{destroy:void 0},ed.bind(null,a,i,l,t),null),V===null)throw Error(y(349));s||Et&127||Pf(a,t,l)}return l}function Pf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=D.updateQueue,t===null?(t=$s(),D.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function ed(e,t,l,a){t.value=l,t.getSnapshot=a,ld(t)&&ad(e)}function td(e,t,l){return l(function(){ld(t)&&ad(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!qe(e,l)}catch{return!0}}function ad(e){var t=jl(e,2);t!==null&&Ne(t,e,2)}function wr(e){var t=ye();if(typeof e=="function"){var l=e;if(e=l(),wl){Lt(!0);try{l()}finally{Lt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},t}function id(e,t,l,a){return e.baseState=l,jo(e,Z,typeof a=="function"?a:jt)}function Kg(e,t,l,a,i){if(Is(e))throw Error(y(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){s.listeners.push(n)}};_.T!==null?l(!0):s.isTransition=!1,a(s),l=t.pending,l===null?(s.next=t.pending=s,sd(t,s)):(s.next=l.next,t.pending=l.next=s)}}function sd(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=_.T,n={};_.T=n;try{var r=l(i,a),o=_.S;o!==null&&o(n,r),Uu(e,t,r)}catch(u){Sr(e,t,u)}finally{s!==null&&n.types!==null&&(s.types=n.types),_.T=s}}else try{s=l(i,a),Uu(e,t,s)}catch(u){Sr(e,t,u)}}function Uu(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Hu(e,t,a)},function(a){return Sr(e,t,a)}):Hu(e,t,l)}function Hu(e,t,l){t.status="fulfilled",t.value=l,nd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,sd(e,l)))}function Sr(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,nd(t),t=t.next;while(t!==a)}e.action=null}function nd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rd(e,t){return t}function Bu(e,t){if(q){var l=V.formState;if(l!==null){e:{var a=D;if(q){if($){t:{for(var i=$,s=Je;i.nodeType!==8;){if(!s){i=null;break t}if(i=We(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){$=We(i.nextSibling),a=i.data==="F!";break e}}tl(a)}a=!1}a&&(t=l[0])}}return l=ye(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rd,lastRenderedState:t},l.queue=a,l=zd.bind(null,D,a),a.dispatch=l,a=wr(!1),s=Ro.bind(null,D,!1,a.queue),a=ye(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=Kg.bind(null,D,i,s,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function qu(e){var t=ie();return od(t,Z,e)}function od(e,t,l){if(t=jo(e,t,rd)[0],e=Ii(jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=bi(t)}catch(n){throw n===ma?Js:n}else a=t;t=ie();var i=t.queue,s=i.dispatch;return l!==t.memoizedState&&(D.flags|=2048,aa(9,{destroy:void 0},Jg.bind(null,i,l),null)),[a,s,e]}function Jg(e,t){e.action=t}function Lu(e){var t=ie(),l=Z;if(l!==null)return od(t,l,e);ie(),t=t.memoizedState,l=ie();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function aa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=D.updateQueue,t===null&&(t=$s(),D.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ud(){return ie().memoizedState}function Pi(e,t,l,a){var i=ye();D.flags|=e,i.memoizedState=aa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Fs(e,t,l,a){var i=ie();a=a===void 0?null:a;var s=i.memoizedState.inst;Z!==null&&a!==null&&yo(a,Z.memoizedState.deps)?i.memoizedState=aa(t,s,l,a):(D.flags|=e,i.memoizedState=aa(1|t,s,l,a))}function Yu(e,t){Pi(8390656,8,e,t)}function Ao(e,t){Fs(2048,8,e,t)}function $g(e){D.flags|=4;var t=D.updateQueue;if(t===null)t=$s(),D.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function cd(e){var t=ie().memoizedState;return $g({ref:t,nextImpl:e}),function(){if(L&2)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function fd(e,t){return Fs(4,2,e,t)}function dd(e,t){return Fs(4,4,e,t)}function md(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,l){l=l!=null?l.concat([e]):null,Fs(4,4,md.bind(null,t,e),l)}function No(){}function gd(e,t){var l=ie();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&yo(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function pd(e,t){var l=ie();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&yo(t,a[1]))return a[0];if(a=e(),wl){Lt(!0);try{e()}finally{Lt(!1)}}return l.memoizedState=[a,t],a}function _o(e,t,l){return l===void 0||Et&1073741824&&!(B&261930)?e.memoizedState=t:(e.memoizedState=l,e=im(),D.lanes|=e,al|=e,l)}function bd(e,t,l,a){return qe(l,t)?l:la.current!==null?(e=_o(e,l,a),qe(e,t)||(oe=!0),e):!(Et&42)||Et&1073741824&&!(B&261930)?(oe=!0,e.memoizedState=l):(e=im(),D.lanes|=e,al|=e,t)}function vd(e,t,l,a,i){var s=Y.p;Y.p=s!==0&&8>s?s:8;var n=_.T,r={};_.T=r,Ro(e,!1,t,l);try{var o=i(),u=_.S;if(u!==null&&u(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=Xg(o,a);Qa(e,t,h,Be(e))}else Qa(e,t,a,Be(e))}catch(c){Qa(e,t,{then:function(){},status:"rejected",reason:c},Be())}finally{Y.p=s,n!==null&&r.types!==null&&(n.types=r.types),_.T=n}}function Wg(){}function zr(e,t,l,a){if(e.tag!==5)throw Error(y(476));var i=xd(e).queue;vd(e,i,t,ml,l===null?Wg:function(){return yd(e),l(a)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ml,baseState:ml,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:ml},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),Qa(e,t.next.queue,{},Be())}function Oo(){return ve(ni)}function wd(){return ie().memoizedState}function Sd(){return ie().memoizedState}function Fg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Be();e=Kt(l);var a=Jt(t,e,l);a!==null&&(Ne(a,t,l),La(a,t,l)),t={cache:go()},e.payload=t;return}t=t.return}}function Ig(e,t,l){var a=Be();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Is(e)?Td(t,l):(l=co(e,t,l,a),l!==null&&(Ne(l,e,a),Ed(l,t,a)))}function zd(e,t,l){var a=Be();Qa(e,t,l,a)}function Qa(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Td(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var n=t.lastRenderedState,r=s(n,l);if(i.hasEagerState=!0,i.eagerState=r,qe(r,n))return Ks(e,t,i,0),V===null&&Vs(),!1}catch{}finally{}if(l=co(e,t,i,a),l!==null)return Ne(l,e,a),Ed(l,t,a),!0}return!1}function Ro(e,t,l,a){if(a={lane:2,revertLane:Lo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(y(479))}else t=co(e,l,a,2),t!==null&&Ne(t,e,2)}function Is(e){var t=e.alternate;return e===D||t!==null&&t===D}function Td(e,t){Wl=ws=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Ed(e,t,l){if(l&4194048){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,cf(e,l)}}var ai={readContext:ve,use:Ws,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee,useHostTransitionStatus:ee,useFormState:ee,useActionState:ee,useOptimistic:ee,useMemoCache:ee,useCacheRefresh:ee};ai.useEffectEvent=ee;var jd={readContext:ve,use:Ws,useCallback:function(e,t){return ye().memoizedState=[e,t===void 0?null:t],e},useContext:ve,useEffect:Yu,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Pi(4194308,4,md.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){Pi(4,2,e,t)},useMemo:function(e,t){var l=ye();t=t===void 0?null:t;var a=e();if(wl){Lt(!0);try{e()}finally{Lt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ye();if(l!==void 0){var i=l(t);if(wl){Lt(!0);try{l(t)}finally{Lt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Ig.bind(null,D,e),[a.memoizedState,e]},useRef:function(e){var t=ye();return e={current:e},t.memoizedState=e},useState:function(e){e=wr(e);var t=e.queue,l=zd.bind(null,D,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:No,useDeferredValue:function(e,t){var l=ye();return _o(l,e,t)},useTransition:function(){var e=wr(!1);return e=vd.bind(null,D,e.queue,!0,!1),ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=D,i=ye();if(q){if(l===void 0)throw Error(y(407));l=l()}else{if(l=t(),V===null)throw Error(y(349));B&127||Pf(a,t,l)}i.memoizedState=l;var s={value:l,getSnapshot:t};return i.queue=s,Yu(td.bind(null,a,s,e),[e]),a.flags|=2048,aa(9,{destroy:void 0},ed.bind(null,a,s,l,t),null),l},useId:function(){var e=ye(),t=V.identifierPrefix;if(q){var l=it,a=at;l=(a&~(1<<32-He(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ss++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Zg++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:Bu,useActionState:Bu,useOptimistic:function(e){var t=ye();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ro.bind(null,D,!0,l),l.dispatch=t,[e,t]},useMemoCache:Eo,useCacheRefresh:function(){return ye().memoizedState=Fg.bind(null,D)},useEffectEvent:function(e){var t=ye(),l={impl:e};return t.memoizedState=l,function(){if(L&2)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},Do={readContext:ve,use:Ws,useCallback:gd,useContext:ve,useEffect:Ao,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:dd,useMemo:pd,useReducer:Ii,useRef:ud,useState:function(){return Ii(jt)},useDebugValue:No,useDeferredValue:function(e,t){var l=ie();return bd(l,Z.memoizedState,e,t)},useTransition:function(){var e=Ii(jt)[0],t=ie().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:If,useId:wd,useHostTransitionStatus:Oo,useFormState:qu,useActionState:qu,useOptimistic:function(e,t){var l=ie();return id(l,Z,e,t)},useMemoCache:Eo,useCacheRefresh:Sd};Do.useEffectEvent=cd;var Ad={readContext:ve,use:Ws,useCallback:gd,useContext:ve,useEffect:Ao,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:dd,useMemo:pd,useReducer:En,useRef:ud,useState:function(){return En(jt)},useDebugValue:No,useDeferredValue:function(e,t){var l=ie();return Z===null?_o(l,e,t):bd(l,Z.memoizedState,e,t)},useTransition:function(){var e=En(jt)[0],t=ie().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:If,useId:wd,useHostTransitionStatus:Oo,useFormState:Lu,useActionState:Lu,useOptimistic:function(e,t){var l=ie();return Z!==null?id(l,Z,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Eo,useCacheRefresh:Sd};Ad.useEffectEvent=cd;function jn(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:F({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Tr={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Be(),i=Kt(a);i.payload=t,l!=null&&(i.callback=l),t=Jt(e,i,a),t!==null&&(Ne(t,e,a),La(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Be(),i=Kt(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=Jt(e,i,a),t!==null&&(Ne(t,e,a),La(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Be(),a=Kt(l);a.tag=2,t!=null&&(a.callback=t),t=Jt(e,a,l),t!==null&&(Ne(t,e,l),La(t,e,l))}};function Gu(e,t,l,a,i,s,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,n):t.prototype&&t.prototype.isPureReactComponent?!Ia(l,a)||!Ia(i,s):!0}function Qu(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Tr.enqueueReplaceState(t,t.state,null)}function Sl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=F({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function Nd(e){hs(e)}function _d(e){console.error(e)}function Od(e){hs(e)}function zs(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Xu(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Er(e,t,l){return l=Kt(l),l.tag=3,l.payload={element:null},l.callback=function(){zs(e,t)},l}function Rd(e){return e=Kt(e),e.tag=3,e}function Dd(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){Xu(t,l,a)}}var n=l.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(e.callback=function(){Xu(t,l,a),typeof i!="function"&&($t===null?$t=new Set([this]):$t.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function Pg(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&da(t,l,i,!0),l=Le.current,l!==null){switch(l.tag){case 31:case 13:return $e===null?Ns():l.alternate===null&&te===0&&(te=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===vs?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Hn(e,a,i)),!1;case 22:return l.flags|=65536,a===vs?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Hn(e,a,i)),!1}throw Error(y(435,l.tag))}return Hn(e,a,i),Ns(),!1}if(q)return t=Le.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==dr&&(e=Error(y(422),{cause:a}),ei(Ke(e,l)))):(a!==dr&&(t=Error(y(423),{cause:a}),ei(Ke(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Ke(a,l),i=Er(e.stateNode,a,i),Tn(e,i),te!==4&&(te=2)),!1;var s=Error(y(520),{cause:a});if(s=Ke(s,l),Va===null?Va=[s]:Va.push(s),te!==4&&(te=2),t===null)return!0;a=Ke(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=Er(l.stateNode,a,e),Tn(l,e),!1;case 1:if(t=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&($t===null||!$t.has(s))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Rd(i),Dd(i,e,l,a),Tn(l,i),!1}l=l.return}while(l!==null);return!1}var Co=Error(y(461)),oe=!1;function ge(e,t,l,a){t.child=e===null?Vf(t,null,l,a):yl(t,e.child,l,a)}function Zu(e,t,l,a,i){l=l.render;var s=t.ref;if("ref"in a){var n={};for(var r in a)r!=="ref"&&(n[r]=a[r])}else n=a;return xl(t),a=wo(e,t,l,n,s,i),r=So(),e!==null&&!oe?(zo(e,t,i),At(e,t,i)):(q&&r&&mo(t),t.flags|=1,ge(e,t,a,i),t.child)}function Vu(e,t,l,a,i){if(e===null){var s=l.type;return typeof s=="function"&&!fo(s)&&s.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=s,Cd(e,t,s,a,i)):(e=Wi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Mo(e,i)){var n=s.memoizedProps;if(l=l.compare,l=l!==null?l:Ia,l(n,a)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=wt(s,a),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,l,a,i){if(e!==null){var s=e.memoizedProps;if(Ia(s,a)&&e.ref===t.ref)if(oe=!1,t.pendingProps=a=s,Mo(e,i))e.flags&131072&&(oe=!0);else return t.lanes=e.lanes,At(e,t,i)}return jr(e,t,l,a,i)}function Md(e,t,l,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,t.child=null;return Ku(e,t,s,l,a)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,s!==null?s.cachePool:null),s!==null?ku(t,s):xr(),$f(t);else return a=t.lanes=536870912,Ku(e,t,s!==null?s.baseLanes|l:l,l,a)}else s!==null?(Fi(t,s.cachePool),ku(t,s),Bt(),t.memoizedState=null):(e!==null&&Fi(t,null),xr(),Bt());return ge(e,t,i,l),t.child}function Ca(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ku(e,t,l,a,i){var s=po();return s=s===null?null:{parent:re._currentValue,pool:s},t.memoizedState={baseLanes:l,cachePool:s},e!==null&&Fi(t,null),xr(),$f(t),e!==null&&da(e,t,a,!0),t.childLanes=i,null}function es(e,t){return t=Ts({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ju(e,t,l){return yl(t,e.child,null,l),e=es(t,t.pendingProps),e.flags|=2,De(t),t.memoizedState=null,e}function ep(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(q){if(a.mode==="hidden")return e=es(t,a),t.lanes=536870912,Ca(null,e);if(yr(t),(e=$)?(e=jm(e,Je),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:at,overflow:it}:null,retryLane:536870912,hydrationErrors:null},l=qf(e),l.return=t,t.child=l,be=t,$=null)):e=null,e===null)throw tl(t);return t.lanes=536870912,null}return es(t,a)}var s=e.memoizedState;if(s!==null){var n=s.dehydrated;if(yr(t),i)if(t.flags&256)t.flags&=-257,t=Ju(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(y(558));else if(oe||da(e,t,l,!1),i=(l&e.childLanes)!==0,oe||i){if(a=V,a!==null&&(n=ff(a,l),n!==0&&n!==s.retryLane))throw s.retryLane=n,jl(e,n),Ne(a,e,n),Co;Ns(),t=Ju(e,t,l)}else e=s.treeContext,$=We(n.nextSibling),be=t,q=!0,Vt=null,Je=!1,e!==null&&Yf(t,e),t=es(t,a),t.flags|=4096;return t}return e=wt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ts(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function jr(e,t,l,a,i){return xl(t),l=wo(e,t,l,a,void 0,i),a=So(),e!==null&&!oe?(zo(e,t,i),At(e,t,i)):(q&&a&&mo(t),t.flags|=1,ge(e,t,l,i),t.child)}function $u(e,t,l,a,i,s){return xl(t),t.updateQueue=null,l=Ff(t,a,l,i),Wf(e),a=So(),e!==null&&!oe?(zo(e,t,s),At(e,t,s)):(q&&a&&mo(t),t.flags|=1,ge(e,t,l,s),t.child)}function Wu(e,t,l,a,i){if(xl(t),t.stateNode===null){var s=Yl,n=l.contextType;typeof n=="object"&&n!==null&&(s=ve(n)),s=new l(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},vo(t),n=l.contextType,s.context=typeof n=="object"&&n!==null?ve(n):Yl,s.state=t.memoizedState,n=l.getDerivedStateFromProps,typeof n=="function"&&(jn(t,l,n,a),s.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Tr.enqueueReplaceState(s,s.state,null),Ga(t,a,s,i),Ya(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var r=t.memoizedProps,o=Sl(l,r);s.props=o;var u=s.context,h=l.contextType;n=Yl,typeof h=="object"&&h!==null&&(n=ve(h));var c=l.getDerivedStateFromProps;h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||u!==n)&&Qu(t,s,a,n),kt=!1;var m=t.memoizedState;s.state=m,Ga(t,a,s,i),Ya(),u=t.memoizedState,r||m!==u||kt?(typeof c=="function"&&(jn(t,l,c,a),u=t.memoizedState),(o=kt||Gu(t,l,o,a,m,u,n))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),s.props=a,s.state=u,s.context=n,a=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,br(e,t),n=t.memoizedProps,h=Sl(l,n),s.props=h,c=t.pendingProps,m=s.context,u=l.contextType,o=Yl,typeof u=="object"&&u!==null&&(o=ve(u)),r=l.getDerivedStateFromProps,(u=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(n!==c||m!==o)&&Qu(t,s,a,o),kt=!1,m=t.memoizedState,s.state=m,Ga(t,a,s,i),Ya();var b=t.memoizedState;n!==c||m!==b||kt||e!==null&&e.dependencies!==null&&bs(e.dependencies)?(typeof r=="function"&&(jn(t,l,r,a),b=t.memoizedState),(h=kt||Gu(t,l,h,a,m,b,o)||e!==null&&e.dependencies!==null&&bs(e.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,b,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,b,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||n===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),s.props=a,s.state=b,s.context=o,a=h):(typeof s.componentDidUpdate!="function"||n===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,ts(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=yl(t,e.child,null,i),t.child=yl(t,null,l,i)):ge(e,t,l,i),t.memoizedState=s.state,e=t.child):e=At(e,t,i),e}function Fu(e,t,l,a){return vl(),t.flags|=256,ge(e,t,l,a),t.child}var An={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nn(e){return{baseLanes:e,cachePool:Qf()}}function _n(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Me),e}function kd(e,t,l){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,n;if((n=s)||(n=e!==null&&e.memoizedState===null?!1:(ae.current&2)!==0),n&&(i=!0,t.flags&=-129),n=(t.flags&32)!==0,t.flags&=-33,e===null){if(q){if(i?Ht(t):Bt(),(e=$)?(e=jm(e,Je),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:at,overflow:it}:null,retryLane:536870912,hydrationErrors:null},l=qf(e),l.return=t,t.child=l,be=t,$=null)):e=null,e===null)throw tl(t);return Lr(e)?t.lanes=32:t.lanes=536870912,null}var r=a.children;return a=a.fallback,i?(Bt(),i=t.mode,r=Ts({mode:"hidden",children:r},i),a=hl(a,i,l,null),r.return=t,a.return=t,r.sibling=a,t.child=r,a=t.child,a.memoizedState=Nn(l),a.childLanes=_n(e,n,l),t.memoizedState=An,Ca(null,a)):(Ht(t),Ar(t,r))}var o=e.memoizedState;if(o!==null&&(r=o.dehydrated,r!==null)){if(s)t.flags&256?(Ht(t),t.flags&=-257,t=On(e,t,l)):t.memoizedState!==null?(Bt(),t.child=e.child,t.flags|=128,t=null):(Bt(),r=a.fallback,i=t.mode,a=Ts({mode:"visible",children:a.children},i),r=hl(r,i,l,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,yl(t,e.child,null,l),a=t.child,a.memoizedState=Nn(l),a.childLanes=_n(e,n,l),t.memoizedState=An,t=Ca(null,a));else if(Ht(t),Lr(r)){if(n=r.nextSibling&&r.nextSibling.dataset,n)var u=n.dgst;n=u,a=Error(y(419)),a.stack="",a.digest=n,ei({value:a,source:null,stack:null}),t=On(e,t,l)}else if(oe||da(e,t,l,!1),n=(l&e.childLanes)!==0,oe||n){if(n=V,n!==null&&(a=ff(n,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,jl(e,a),Ne(n,e,a),Co;qr(r)||Ns(),t=On(e,t,l)}else qr(r)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,$=We(r.nextSibling),be=t,q=!0,Vt=null,Je=!1,e!==null&&Yf(t,e),t=Ar(t,a.children),t.flags|=4096);return t}return i?(Bt(),r=a.fallback,i=t.mode,o=e.child,u=o.sibling,a=wt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,u!==null?r=wt(u,r):(r=hl(r,i,l,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,Ca(null,a),a=t.child,r=e.child.memoizedState,r===null?r=Nn(l):(i=r.cachePool,i!==null?(o=re._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Qf(),r={baseLanes:r.baseLanes|l,cachePool:i}),a.memoizedState=r,a.childLanes=_n(e,n,l),t.memoizedState=An,Ca(e.child,a)):(Ht(t),l=e.child,e=l.sibling,l=wt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l)}function Ar(e,t){return t=Ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ts(e,t){return e=Ce(22,e,null,t),e.lanes=0,e}function On(e,t,l){return yl(t,e.child,null,l),e=Ar(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iu(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),hr(e.return,t,l)}function Rn(e,t,l,a,i,s){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:s}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=l,n.tailMode=i,n.treeForkCount=s)}function Ud(e,t,l){var a=t.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var n=ae.current,r=(n&2)!==0;if(r?(n=n&1|2,t.flags|=128):n&=1,K(ae,n),ge(e,t,a,l),a=q?Pa:0,!r&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,l,t);else if(e.tag===19)Iu(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&ys(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Rn(t,!1,i,l,s,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Rn(t,!0,l,null,s,a);break;case"together":Rn(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function At(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),al|=t.lanes,!(l&t.childLanes))if(e!==null){if(da(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,l=wt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=wt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Mo(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&bs(e)))}function tp(e,t,l){switch(t.tag){case 3:cs(t,t.stateNode.containerInfo),Ut(t,re,e.memoizedState.cache),vl();break;case 27:case 5:tr(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:Ut(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ht(t),t.flags|=128,null):l&t.child.childLanes?kd(e,t,l):(Ht(t),e=At(e,t,l),e!==null?e.sibling:null);Ht(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(da(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return Ud(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ae,ae.current),a)break;return null;case 22:return t.lanes=0,Md(e,t,l,t.pendingProps);case 24:Ut(t,re,e.memoizedState.cache)}return At(e,t,l)}function Hd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)oe=!0;else{if(!Mo(e,l)&&!(t.flags&128))return oe=!1,tp(e,t,l);oe=!!(e.flags&131072)}else oe=!1,q&&t.flags&1048576&&Lf(t,Pa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=fl(t.elementType),t.type=e,typeof e=="function")fo(e)?(a=Sl(e,a),t.tag=1,t=Wu(null,t,e,a,l)):(t.tag=0,t=jr(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===Fr){t.tag=11,t=Zu(null,t,e,a,l);break e}else if(i===Ir){t.tag=14,t=Vu(null,t,e,a,l);break e}}throw t=Pn(e)||e,Error(y(306,t,""))}}return t;case 0:return jr(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Sl(a,t.pendingProps),Wu(e,t,a,i,l);case 3:e:{if(cs(t,t.stateNode.containerInfo),e===null)throw Error(y(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,br(e,t),Ga(t,a,null,l);var n=t.memoizedState;if(a=n.cache,Ut(t,re,a),a!==s.cache&&gr(t,[re],l,!0),Ya(),a=n.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:n.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Fu(e,t,a,l);break e}else if(a!==i){i=Ke(Error(y(424)),t),ei(i),t=Fu(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($=We(e.firstChild),be=t,q=!0,Vt=null,Je=!0,l=Vf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(vl(),a===i){t=At(e,t,l);break e}ge(e,t,a,l)}t=t.child}return t;case 26:return ts(e,t),e===null?(l=vc(t.type,null,t.pendingProps,null))?t.memoizedState=l:q||(l=t.type,e=t.pendingProps,a=Ds(Zt.current).createElement(l),a[pe]=t,a[_e]=e,xe(a,l,e),me(a),t.stateNode=a):t.memoizedState=vc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return tr(t),e===null&&q&&(a=t.stateNode=Am(t.type,t.pendingProps,Zt.current),be=t,Je=!0,i=$,sl(t.type)?(Yr=i,$=We(a.firstChild)):$=i),ge(e,t,t.pendingProps.children,l),ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&q&&((i=a=$)&&(a=Rp(a,t.type,t.pendingProps,Je),a!==null?(t.stateNode=a,be=t,$=We(a.firstChild),Je=!1,i=!0):i=!1),i||tl(t)),tr(t),i=t.type,s=t.pendingProps,n=e!==null?e.memoizedProps:null,a=s.children,Hr(i,s)?a=null:n!==null&&Hr(i,n)&&(t.flags|=32),t.memoizedState!==null&&(i=wo(e,t,Vg,null,null,l),ni._currentValue=i),ts(e,t),ge(e,t,a,l),t.child;case 6:return e===null&&q&&((e=l=$)&&(l=Dp(l,t.pendingProps,Je),l!==null?(t.stateNode=l,be=t,$=null,e=!0):e=!1),e||tl(t)),null;case 13:return kd(e,t,l);case 4:return cs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=yl(t,null,a,l):ge(e,t,a,l),t.child;case 11:return Zu(e,t,t.type,t.pendingProps,l);case 7:return ge(e,t,t.pendingProps,l),t.child;case 8:return ge(e,t,t.pendingProps.children,l),t.child;case 12:return ge(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Ut(t,t.type,a.value),ge(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,xl(t),i=ve(i),a=a(i),t.flags|=1,ge(e,t,a,l),t.child;case 14:return Vu(e,t,t.type,t.pendingProps,l);case 15:return Cd(e,t,t.type,t.pendingProps,l);case 19:return Ud(e,t,l);case 31:return ep(e,t,l);case 22:return Md(e,t,l,t.pendingProps);case 24:return xl(t),a=ve(re),e===null?(i=po(),i===null&&(i=V,s=go(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=l),i=s),t.memoizedState={parent:a,cache:i},vo(t),Ut(t,re,i)):(e.lanes&l&&(br(e,t),Ga(t,null,null,l),Ya()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ut(t,re,a)):(a=s.cache,Ut(t,re,a),a!==i.cache&&gr(t,[re],l,!0))),ge(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function dt(e){e.flags|=4}function Dn(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(rm())e.flags|=8192;else throw pl=vs,bo}else e.flags&=-16777217}function Pu(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(rm())e.flags|=8192;else throw pl=vs,bo}function qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?of():536870912,e.lanes|=t,ia|=t)}function ja(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function J(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function lp(e,t,l){var a=t.pendingProps;switch(ho(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(t),null;case 1:return J(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),St(re),Il(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?dt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zn())),J(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(dt(t),s!==null?(J(t),Pu(t,s)):(J(t),Dn(t,i,null,a,l))):s?s!==e.memoizedState?(dt(t),J(t),Pu(t,s)):(J(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&dt(t),J(t),Dn(t,i,e,a,l)),null;case 27:if(fs(t),l=Zt.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return J(t),null}e=nt.current,Nl(t)?Nu(t):(e=Am(i,a,l),t.stateNode=e,dt(t))}return J(t),null;case 5:if(fs(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return J(t),null}if(s=nt.current,Nl(t))Nu(t);else{var n=Ds(Zt.current);switch(s){case 1:s=n.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=n.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=n.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?n.createElement(i,{is:a.is}):n.createElement(i)}}s[pe]=t,s[_e]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)s.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=s;e:switch(xe(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&dt(t)}}return J(t),Dn(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(y(166));if(e=Zt.current,Nl(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=be,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[pe]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||zm(e.nodeValue,l)),e||tl(t,!0)}else e=Ds(e).createTextNode(a),e[pe]=t,t.stateNode=e}return J(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Nl(t),l!==null){if(e===null){if(!a)throw Error(y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[pe]=t}else vl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),e=!1}else l=zn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(De(t),t):(De(t),null);if(t.flags&128)throw Error(y(558))}return J(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Nl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[pe]=t}else vl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),i=!1}else i=zn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(De(t),t):(De(t),null)}return De(t),t.flags&128?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),qi(t,t.updateQueue),J(t),null);case 4:return Il(),e===null&&Yo(t.stateNode.containerInfo),J(t),null;case 10:return St(t.type),J(t),null;case 19:if(he(ae),a=t.memoizedState,a===null)return J(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)ja(a,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,ja(a,!1),e=s.updateQueue,t.updateQueue=e,qi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Bf(l,e),l=l.sibling;return K(ae,ae.current&1|2),q&&pt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ke()>js&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304)}else{if(!i)if(e=ys(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,qi(t,e),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!q)return J(t),null}else 2*ke()-a.renderingStartTime>js&&l!==536870912&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ke(),e.sibling=null,l=ae.current,K(ae,i?l&1|2:l&1),q&&pt(t,a.treeForkCount),e):(J(t),null);case 22:case 23:return De(t),xo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?l&536870912&&!(t.flags&128)&&(J(t),t.subtreeFlags&6&&(t.flags|=8192)):J(t),l=t.updateQueue,l!==null&&qi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&he(gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),St(re),J(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function ap(e,t){switch(ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return St(re),Il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fs(t),null;case 31:if(t.memoizedState!==null){if(De(t),t.alternate===null)throw Error(y(340));vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(De(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ae),null;case 4:return Il(),null;case 10:return St(t.type),null;case 22:case 23:return De(t),xo(),e!==null&&he(gl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return St(re),null;case 25:return null;default:return null}}function Bd(e,t){switch(ho(t),t.tag){case 3:St(re),Il();break;case 26:case 27:case 5:fs(t);break;case 4:Il();break;case 31:t.memoizedState!==null&&De(t);break;case 13:De(t);break;case 19:he(ae);break;case 10:St(t.type);break;case 22:case 23:De(t),xo(),e!==null&&he(gl);break;case 24:St(re)}}function vi(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var s=l.create,n=l.inst;a=s(),n.destroy=a}l=l.next}while(l!==i)}}catch(r){Q(t,t.return,r)}}function ll(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var n=a.inst,r=n.destroy;if(r!==void 0){n.destroy=void 0,i=t;var o=l,u=r;try{u()}catch(h){Q(i,o,h)}}}a=a.next}while(a!==s)}}catch(h){Q(t,t.return,h)}}function qd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Jf(t,l)}catch(a){Q(e,e.return,a)}}}function Ld(e,t,l){l.props=Sl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Q(e,t,a)}}function Xa(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){Q(e,t,i)}}function st(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Q(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Q(e,t,i)}else l.current=null}function Yd(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Q(e,e.return,i)}}function Cn(e,t,l){try{var a=e.stateNode;Ep(a,e.type,l,t),a[_e]=t}catch(i){Q(e,e.return,i)}}function Gd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sl(e.type)||e.tag===4}function Mn(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=xt));else if(a!==4&&(a===27&&sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Nr(e,t,l),e=e.sibling;e!==null;)Nr(e,t,l),e=e.sibling}function Es(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Es(e,t,l),e=e.sibling;e!==null;)Es(e,t,l),e=e.sibling}function Qd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);xe(t,a,l),t[pe]=e,t[_e]=l}catch(s){Q(e,e.return,s)}}var bt=!1,ne=!1,kn=!1,ec=typeof WeakSet=="function"?WeakSet:Set,de=null;function ip(e,t){if(e=e.containerInfo,kr=Us,e=Of(e),oo(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var n=0,r=-1,o=-1,u=0,h=0,c=e,m=null;t:for(;;){for(var b;c!==l||i!==0&&c.nodeType!==3||(r=n+i),c!==s||a!==0&&c.nodeType!==3||(o=n+a),c.nodeType===3&&(n+=c.nodeValue.length),(b=c.firstChild)!==null;)m=c,c=b;for(;;){if(c===e)break t;if(m===l&&++u===i&&(r=n),m===s&&++h===a&&(o=n),(b=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=b}l=r===-1||o===-1?null:{start:r,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ur={focusedElem:e,selectionRange:l},Us=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){switch(t=de,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,l=t,i=s.memoizedProps,s=s.memoizedState,a=l.stateNode;try{var w=Sl(l.type,i);e=a.getSnapshotBeforeUpdate(w,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(S){Q(l,l.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Br(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Br(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(y(163))}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}}function Xd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ht(e,l),a&4&&vi(5,l);break;case 1:if(ht(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(n){Q(l,l.return,n)}else{var i=Sl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(n){Q(l,l.return,n)}}a&64&&qd(l),a&512&&Xa(l,l.return);break;case 3:if(ht(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Jf(e,t)}catch(n){Q(l,l.return,n)}}break;case 27:t===null&&a&4&&Qd(l);case 26:case 5:ht(e,l),t===null&&a&4&&Yd(l),a&512&&Xa(l,l.return);break;case 12:ht(e,l);break;case 31:ht(e,l),a&4&&Kd(e,l);break;case 13:ht(e,l),a&4&&Jd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=mp.bind(null,l),Cp(e,l))));break;case 22:if(a=l.memoizedState!==null||bt,!a){t=t!==null&&t.memoizedState!==null||ne,i=bt;var s=ne;bt=a,(ne=t)&&!s?gt(e,l,(l.subtreeFlags&8772)!==0):ht(e,l),bt=i,ne=s}break;case 30:break;default:ht(e,l)}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var I=null,je=!1;function mt(e,t,l){for(l=l.child;l!==null;)Vd(e,t,l),l=l.sibling}function Vd(e,t,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(fi,l)}catch{}switch(l.tag){case 26:ne||st(l,t),mt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ne||st(l,t);var a=I,i=je;sl(l.type)&&(I=l.stateNode,je=!1),mt(e,t,l),Ja(l.stateNode),I=a,je=i;break;case 5:ne||st(l,t);case 6:if(a=I,i=je,I=null,mt(e,t,l),I=a,je=i,I!==null)if(je)try{(I.nodeType===9?I.body:I.nodeName==="HTML"?I.ownerDocument.body:I).removeChild(l.stateNode)}catch(s){Q(l,t,s)}else try{I.removeChild(l.stateNode)}catch(s){Q(l,t,s)}break;case 18:I!==null&&(je?(e=I,mc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),oa(e)):mc(I,l.stateNode));break;case 4:a=I,i=je,I=l.stateNode.containerInfo,je=!0,mt(e,t,l),I=a,je=i;break;case 0:case 11:case 14:case 15:ll(2,l,t),ne||ll(4,l,t),mt(e,t,l);break;case 1:ne||(st(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ld(l,t,a)),mt(e,t,l);break;case 21:mt(e,t,l);break;case 22:ne=(a=ne)||l.memoizedState!==null,mt(e,t,l),ne=a;break;default:mt(e,t,l)}}function Kd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oa(e)}catch(l){Q(t,t.return,l)}}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oa(e)}catch(l){Q(t,t.return,l)}}function sp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ec),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ec),t;default:throw Error(y(435,e.tag))}}function Li(e,t){var l=sp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=hp.bind(null,e,a);a.then(i,i)}})}function Te(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],s=e,n=t,r=n;e:for(;r!==null;){switch(r.tag){case 27:if(sl(r.type)){I=r.stateNode,je=!1;break e}break;case 5:I=r.stateNode,je=!1;break e;case 3:case 4:I=r.stateNode.containerInfo,je=!0;break e}r=r.return}if(I===null)throw Error(y(160));Vd(s,n,i),I=null,je=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}var et=null;function $d(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Te(t,e),Ee(e),a&4&&(ll(3,e,e.return),vi(3,e),ll(5,e,e.return));break;case 1:Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),a&64&&bt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=et;if(Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),a&4){var s=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[hi]||s[pe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),xe(s,a,l),s[pe]=e,me(s),a=s;break e;case"link":var n=yc("link","href",i).get(a+(l.href||""));if(n){for(var r=0;r<n.length;r++)if(s=n[r],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){n.splice(r,1);break t}}s=i.createElement(a),xe(s,a,l),i.head.appendChild(s);break;case"meta":if(n=yc("meta","content",i).get(a+(l.content||""))){for(r=0;r<n.length;r++)if(s=n[r],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){n.splice(r,1);break t}}s=i.createElement(a),xe(s,a,l),i.head.appendChild(s);break;default:throw Error(y(468,a))}s[pe]=e,me(s),a=s}e.stateNode=a}else wc(i,e.type,e.stateNode);else e.stateNode=xc(i,a,e.memoizedProps);else s!==a?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,a===null?wc(i,e.type,e.stateNode):xc(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Cn(e,e.memoizedProps,l.memoizedProps)}break;case 27:Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),l!==null&&a&4&&Cn(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),e.flags&32){i=e.stateNode;try{ea(i,"")}catch(w){Q(e,e.return,w)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Cn(e,i,l!==null?l.memoizedProps:i)),a&1024&&(kn=!0);break;case 6:if(Te(t,e),Ee(e),a&4){if(e.stateNode===null)throw Error(y(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(w){Q(e,e.return,w)}}break;case 3:if(is=null,i=et,et=Cs(t.containerInfo),Te(t,e),et=i,Ee(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{oa(t.containerInfo)}catch(w){Q(e,e.return,w)}kn&&(kn=!1,Wd(e));break;case 4:a=et,et=Cs(e.stateNode.containerInfo),Te(t,e),Ee(e),et=a;break;case 12:Te(t,e),Ee(e);break;case 31:Te(t,e),Ee(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:Te(t,e),Ee(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ps=ke()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:i=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,u=bt,h=ne;if(bt=u||i,ne=h||o,Te(t,e),ne=h,bt=u,Ee(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||o||bt||ne||dl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(s=o.stateNode,i)n=s.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{r=o.stateNode;var c=o.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(w){Q(o,o.return,w)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(w){Q(o,o.return,w)}}}else if(t.tag===18){if(l===null){o=t;try{var b=o.stateNode;i?hc(b,!0):hc(o.stateNode,!1)}catch(w){Q(o,o.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:Te(t,e),Ee(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:Te(t,e),Ee(e)}}function Ee(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Gd(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var i=l.stateNode,s=Mn(e);Es(e,s,i);break;case 5:var n=l.stateNode;l.flags&32&&(ea(n,""),l.flags&=-33);var r=Mn(e);Es(e,r,n);break;case 3:case 4:var o=l.stateNode.containerInfo,u=Mn(e);Nr(e,u,o);break;default:throw Error(y(161))}}catch(h){Q(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ht(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xd(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ll(4,t,t.return),dl(t);break;case 1:st(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ld(t,t.return,l),dl(t);break;case 27:Ja(t.stateNode);case 26:case 5:st(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function gt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,n=s.flags;switch(s.tag){case 0:case 11:case 15:gt(i,s,l),vi(4,s);break;case 1:if(gt(i,s,l),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){Q(a,a.return,u)}if(a=s,i=a.updateQueue,i!==null){var r=a.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Kf(o[i],r)}catch(u){Q(a,a.return,u)}}l&&n&64&&qd(s),Xa(s,s.return);break;case 27:Qd(s);case 26:case 5:gt(i,s,l),l&&a===null&&n&4&&Yd(s),Xa(s,s.return);break;case 12:gt(i,s,l);break;case 31:gt(i,s,l),l&&n&4&&Kd(i,s);break;case 13:gt(i,s,l),l&&n&4&&Jd(i,s);break;case 22:s.memoizedState===null&&gt(i,s,l),Xa(s,s.return);break;case 30:break;default:gt(i,s,l)}t=t.sibling}}function ko(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&pi(l))}function Uo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e))}function Pe(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fd(e,t,l,a),t=t.sibling}function Fd(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pe(e,t,l,a),i&2048&&vi(9,t);break;case 1:Pe(e,t,l,a);break;case 3:Pe(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e)));break;case 12:if(i&2048){Pe(e,t,l,a),e=t.stateNode;try{var s=t.memoizedProps,n=s.id,r=s.onPostCommit;typeof r=="function"&&r(n,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){Q(t,t.return,o)}}else Pe(e,t,l,a);break;case 31:Pe(e,t,l,a);break;case 13:Pe(e,t,l,a);break;case 23:break;case 22:s=t.stateNode,n=t.alternate,t.memoizedState!==null?s._visibility&2?Pe(e,t,l,a):Za(e,t):s._visibility&2?Pe(e,t,l,a):(s._visibility|=2,Rl(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ko(n,t);break;case 24:Pe(e,t,l,a),i&2048&&Uo(t.alternate,t);break;default:Pe(e,t,l,a)}}function Rl(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,n=t,r=l,o=a,u=n.flags;switch(n.tag){case 0:case 11:case 15:Rl(s,n,r,o,i),vi(8,n);break;case 23:break;case 22:var h=n.stateNode;n.memoizedState!==null?h._visibility&2?Rl(s,n,r,o,i):Za(s,n):(h._visibility|=2,Rl(s,n,r,o,i)),i&&u&2048&&ko(n.alternate,n);break;case 24:Rl(s,n,r,o,i),i&&u&2048&&Uo(n.alternate,n);break;default:Rl(s,n,r,o,i)}t=t.sibling}}function Za(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:Za(l,a),i&2048&&ko(a.alternate,a);break;case 24:Za(l,a),i&2048&&Uo(a.alternate,a);break;default:Za(l,a)}t=t.sibling}}var Ma=8192;function _l(e,t,l){if(e.subtreeFlags&Ma)for(e=e.child;e!==null;)Id(e,t,l),e=e.sibling}function Id(e,t,l){switch(e.tag){case 26:_l(e,t,l),e.flags&Ma&&e.memoizedState!==null&&Zp(l,et,e.memoizedState,e.memoizedProps);break;case 5:_l(e,t,l);break;case 3:case 4:var a=et;et=Cs(e.stateNode.containerInfo),_l(e,t,l),et=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ma,Ma=16777216,_l(e,t,l),Ma=a):_l(e,t,l));break;default:_l(e,t,l)}}function Pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Aa(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];de=a,tm(a,e)}Pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)em(e),e=e.sibling}function em(e){switch(e.tag){case 0:case 11:case 15:Aa(e),e.flags&2048&&ll(9,e,e.return);break;case 3:Aa(e);break;case 12:Aa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ls(e)):Aa(e);break;default:Aa(e)}}function ls(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];de=a,tm(a,e)}Pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ll(8,t,t.return),ls(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ls(t));break;default:ls(t)}e=e.sibling}}function tm(e,t){for(;de!==null;){var l=de;switch(l.tag){case 0:case 11:case 15:ll(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pi(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,de=a;else e:for(l=e;de!==null;){a=de;var i=a.sibling,s=a.return;if(Zd(a),a===l){de=null;break e}if(i!==null){i.return=s,de=i;break e}de=s}}}var np={getCacheForType:function(e){var t=ve(re),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ve(re).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,L=0,V=null,H=null,B=0,G=0,Re=null,Gt=!1,ha=!1,Ho=!1,Nt=0,te=0,al=0,bl=0,Bo=0,Me=0,ia=0,Va=null,Ae=null,_r=!1,Ps=0,lm=0,js=1/0,As=null,$t=null,ue=0,Wt=null,sa=null,zt=0,Or=0,Rr=null,am=null,Ka=0,Dr=null;function Be(){return L&2&&B!==0?B&-B:_.T!==null?Lo():df()}function im(){if(Me===0)if(!(B&536870912)||q){var e=Di;Di<<=1,!(Di&3932160)&&(Di=262144),Me=e}else Me=536870912;return e=Le.current,e!==null&&(e.flags|=32),Me}function Ne(e,t,l){(e===V&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(na(e,0),Qt(e,B,Me,!1)),mi(e,l),(!(L&2)||e!==V)&&(e===V&&(!(L&2)&&(bl|=l),te===4&&Qt(e,B,Me,!1)),ct(e))}function sm(e,t,l){if(L&6)throw Error(y(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||di(e,t),i=a?cp(e,t):Un(e,t,!0),s=a;do{if(i===0){ha&&!a&&Qt(e,t,0,!1);break}else{if(l=e.current.alternate,s&&!op(l)){i=Un(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var n=0;else n=e.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){t=n;e:{var r=e;i=Va;var o=r.current.memoizedState.isDehydrated;if(o&&(na(r,n).flags|=256),n=Un(r,n,!1),n!==2){if(Ho&&!o){r.errorRecoveryDisabledLanes|=s,bl|=s,i=4;break e}s=Ae,Ae=i,s!==null&&(Ae===null?Ae=s:Ae.push.apply(Ae,s))}i=n}if(s=!1,i!==2)continue}}if(i===1){na(e,0),Qt(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:Qt(a,t,Me,!Gt);break e;case 2:Ae=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(i=Ps+300-ke(),10<i)){if(Qt(a,t,Me,!Gt),Gs(a,0,!0)!==0)break e;zt=t,a.timeoutHandle=Em(tc.bind(null,a,l,Ae,As,_r,t,Me,bl,ia,Gt,s,"Throttled",-0,0),i);break e}tc(a,l,Ae,As,_r,t,Me,bl,ia,Gt,s,null,-0,0)}}break}while(!0);ct(e)}function tc(e,t,l,a,i,s,n,r,o,u,h,c,m,b){if(e.timeoutHandle=-1,c=t.subtreeFlags,c&8192||(c&16785408)===16785408){c={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xt},Id(t,s,c);var w=(s&62914560)===s?Ps-ke():(s&4194048)===s?lm-ke():0;if(w=Vp(c,w),w!==null){zt=s,e.cancelPendingCommit=w(ac.bind(null,e,t,s,l,a,i,n,r,o,h,c,null,m,b)),Qt(e,s,n,!u);return}}ac(e,t,s,l,a,i,n,r,o)}function op(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],s=i.getSnapshot;i=i.value;try{if(!qe(s(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t,l,a){t&=~Bo,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-He(i),n=1<<s;a[s]=-1,i&=~n}l!==0&&uf(e,l,t)}function en(){return L&6?!0:(xi(0),!1)}function qo(){if(H!==null){if(G===0)var e=H.return;else e=H,yt=Al=null,To(e),$l=null,ti=0,e=H;for(;e!==null;)Bd(e.alternate,e),e=e.return;H=null}}function na(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Np(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),zt=0,qo(),V=e,H=l=wt(e.current,null),B=t,G=0,Re=null,Gt=!1,ha=di(e,t),Ho=!1,ia=Me=Bo=bl=al=te=0,Ae=Va=null,_r=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-He(a),s=1<<i;t|=e[i],a&=~s}return Nt=t,Vs(),l}function nm(e,t){D=null,_.H=ai,t===ma||t===Js?(t=Cu(),G=3):t===bo?(t=Cu(),G=4):G=t===Co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Re=t,H===null&&(te=1,zs(e,Ke(t,e.current)))}function rm(){var e=Le.current;return e===null?!0:(B&4194048)===B?$e===null:(B&62914560)===B||B&536870912?e===$e:!1}function om(){var e=_.H;return _.H=ai,e===null?ai:e}function um(){var e=_.A;return _.A=np,e}function Ns(){te=4,Gt||(B&4194048)!==B&&Le.current!==null||(ha=!0),!(al&134217727)&&!(bl&134217727)||V===null||Qt(V,B,Me,!1)}function Un(e,t,l){var a=L;L|=2;var i=om(),s=um();(V!==e||B!==t)&&(As=null,na(e,t)),t=!1;var n=te;e:do try{if(G!==0&&H!==null){var r=H,o=Re;switch(G){case 8:qo(),n=6;break e;case 3:case 2:case 9:case 6:Le.current===null&&(t=!0);var u=G;if(G=0,Re=null,Xl(e,r,o,u),l&&ha){n=0;break e}break;default:u=G,G=0,Re=null,Xl(e,r,o,u)}}up(),n=te;break}catch(h){nm(e,h)}while(!0);return t&&e.shellSuspendCounter++,yt=Al=null,L=a,_.H=i,_.A=s,H===null&&(V=null,B=0,Vs()),n}function up(){for(;H!==null;)cm(H)}function cp(e,t){var l=L;L|=2;var a=om(),i=um();V!==e||B!==t?(As=null,js=ke()+500,na(e,t)):ha=di(e,t);e:do try{if(G!==0&&H!==null){t=H;var s=Re;t:switch(G){case 1:G=0,Re=null,Xl(e,t,s,1);break;case 2:case 9:if(Du(s)){G=0,Re=null,lc(t);break}t=function(){G!==2&&G!==9||V!==e||(G=7),ct(e)},s.then(t,t);break e;case 3:G=7;break e;case 4:G=5;break e;case 7:Du(s)?(G=0,Re=null,lc(t)):(G=0,Re=null,Xl(e,t,s,7));break;case 5:var n=null;switch(H.tag){case 26:n=H.memoizedState;case 5:case 27:var r=H;if(n?Om(n):r.stateNode.complete){G=0,Re=null;var o=r.sibling;if(o!==null)H=o;else{var u=r.return;u!==null?(H=u,tn(u)):H=null}break t}}G=0,Re=null,Xl(e,t,s,5);break;case 6:G=0,Re=null,Xl(e,t,s,6);break;case 8:qo(),te=6;break e;default:throw Error(y(462))}}fp();break}catch(h){nm(e,h)}while(!0);return yt=Al=null,_.H=a,_.A=i,L=l,H!==null?0:(V=null,B=0,Vs(),te)}function fp(){for(;H!==null&&!Mh();)cm(H)}function cm(e){var t=Hd(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?tn(e):H=t}function lc(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=$u(l,t,t.pendingProps,t.type,void 0,B);break;case 11:t=$u(l,t,t.pendingProps,t.type.render,t.ref,B);break;case 5:To(t);default:Bd(l,t),t=H=Bf(t,Nt),t=Hd(l,t,Nt)}e.memoizedProps=e.pendingProps,t===null?tn(e):H=t}function Xl(e,t,l,a){yt=Al=null,To(t),$l=null,ti=0;var i=t.return;try{if(Pg(e,i,t,l,B)){te=1,zs(e,Ke(l,e.current)),H=null;return}}catch(s){if(i!==null)throw H=i,s;te=1,zs(e,Ke(l,e.current)),H=null;return}t.flags&32768?(q||a===1?e=!0:ha||B&536870912?e=!1:(Gt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Le.current,a!==null&&a.tag===13&&(a.flags|=16384))),fm(t,e)):tn(t)}function tn(e){var t=e;do{if(t.flags&32768){fm(t,Gt);return}e=t.return;var l=lp(t.alternate,t,Nt);if(l!==null){H=l;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);te===0&&(te=5)}function fm(e,t){do{var l=ap(e.alternate,e);if(l!==null){l.flags&=32767,H=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=l}while(e!==null);te=6,H=null}function ac(e,t,l,a,i,s,n,r,o){e.cancelPendingCommit=null;do ln();while(ue!==0);if(L&6)throw Error(y(327));if(t!==null){if(t===e.current)throw Error(y(177));if(s=t.lanes|t.childLanes,s|=uo,Xh(e,l,s,n,r,o),e===V&&(H=V=null,B=0),sa=t,Wt=e,zt=l,Or=s,Rr=i,am=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,gp(ds,function(){return pm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=_.T,_.T=null,i=Y.p,Y.p=2,n=L,L|=4;try{ip(e,t,l)}finally{L=n,Y.p=i,_.T=a}}ue=1,dm(),mm(),hm()}}function dm(){if(ue===1){ue=0;var e=Wt,t=sa,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=_.T,_.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{$d(t,e);var s=Ur,n=Of(e.containerInfo),r=s.focusedElem,o=s.selectionRange;if(n!==r&&r&&r.ownerDocument&&_f(r.ownerDocument.documentElement,r)){if(o!==null&&oo(r)){var u=o.start,h=o.end;if(h===void 0&&(h=u),"selectionStart"in r)r.selectionStart=u,r.selectionEnd=Math.min(h,r.value.length);else{var c=r.ownerDocument||document,m=c&&c.defaultView||window;if(m.getSelection){var b=m.getSelection(),w=r.textContent.length,S=Math.min(o.start,w),z=o.end===void 0?S:Math.min(o.end,w);!b.extend&&S>z&&(n=z,z=S,S=n);var d=Eu(r,S),f=Eu(r,z);if(d&&f&&(b.rangeCount!==1||b.anchorNode!==d.node||b.anchorOffset!==d.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var p=c.createRange();p.setStart(d.node,d.offset),b.removeAllRanges(),S>z?(b.addRange(p),b.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),b.addRange(p))}}}}for(c=[],b=r;b=b.parentNode;)b.nodeType===1&&c.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<c.length;r++){var v=c[r];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Us=!!kr,Ur=kr=null}finally{L=i,Y.p=a,_.T=l}}e.current=t,ue=2}}function mm(){if(ue===2){ue=0;var e=Wt,t=sa,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=_.T,_.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{Xd(e,t.alternate,t)}finally{L=i,Y.p=a,_.T=l}}ue=3}}function hm(){if(ue===4||ue===3){ue=0,kh();var e=Wt,t=sa,l=zt,a=am;t.subtreeFlags&10256||t.flags&10256?ue=5:(ue=0,sa=Wt=null,gm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&($t=null),to(l),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(fi,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,i=Y.p,Y.p=2,_.T=null;try{for(var s=e.onRecoverableError,n=0;n<a.length;n++){var r=a[n];s(r.value,{componentStack:r.stack})}}finally{_.T=t,Y.p=i}}zt&3&&ln(),ct(e),i=e.pendingLanes,l&261930&&i&42?e===Dr?Ka++:(Ka=0,Dr=e):Ka=0,xi(0)}}function gm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pi(t)))}function ln(){return dm(),mm(),hm(),pm()}function pm(){if(ue!==5)return!1;var e=Wt,t=Or;Or=0;var l=to(zt),a=_.T,i=Y.p;try{Y.p=32>l?32:l,_.T=null,l=Rr,Rr=null;var s=Wt,n=zt;if(ue=0,sa=Wt=null,zt=0,L&6)throw Error(y(331));var r=L;if(L|=4,em(s.current),Fd(s,s.current,n,l),L=r,xi(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(fi,s)}catch{}return!0}finally{Y.p=i,_.T=a,gm(e,t)}}function ic(e,t,l){t=Ke(l,t),t=Er(e.stateNode,t,2),e=Jt(e,t,2),e!==null&&(mi(e,2),ct(e))}function Q(e,t,l){if(e.tag===3)ic(e,e,l);else for(;t!==null;){if(t.tag===3){ic(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($t===null||!$t.has(a))){e=Ke(l,e),l=Rd(2),a=Jt(t,l,2),a!==null&&(Dd(l,a,t,e),mi(a,2),ct(a));break}}t=t.return}}function Hn(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new rp;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Ho=!0,i.add(l),e=dp.bind(null,e,t,l),t.then(e,e))}function dp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,V===e&&(B&l)===l&&(te===4||te===3&&(B&62914560)===B&&300>ke()-Ps?!(L&2)&&na(e,0):Bo|=l,ia===B&&(ia=0)),ct(e)}function bm(e,t){t===0&&(t=of()),e=jl(e,t),e!==null&&(mi(e,t),ct(e))}function mp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),bm(e,l)}function hp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(t),bm(e,l)}function gp(e,t){return Pr(e,t)}var _s=null,Dl=null,Cr=!1,Os=!1,Bn=!1,Xt=0;function ct(e){e!==Dl&&e.next===null&&(Dl===null?_s=Dl=e:Dl=Dl.next=e),Os=!0,Cr||(Cr=!0,bp())}function xi(e,t){if(!Bn&&Os){Bn=!0;do for(var l=!1,a=_s;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var n=a.suspendedLanes,r=a.pingedLanes;s=(1<<31-He(42|e)+1)-1,s&=i&~(n&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,sc(a,s))}else s=B,s=Gs(a,a===V?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(s&3)||di(a,s)||(l=!0,sc(a,s));a=a.next}while(l);Bn=!1}}function pp(){vm()}function vm(){Os=Cr=!1;var e=0;Xt!==0&&Ap()&&(e=Xt);for(var t=ke(),l=null,a=_s;a!==null;){var i=a.next,s=xm(a,t);s===0?(a.next=null,l===null?_s=i:l.next=i,i===null&&(Dl=l)):(l=a,(e!==0||s&3)&&(Os=!0)),a=i}ue!==0&&ue!==5||xi(e),Xt!==0&&(Xt=0)}function xm(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var n=31-He(s),r=1<<n,o=i[n];o===-1?(!(r&l)||r&a)&&(i[n]=Qh(r,t)):o<=t&&(e.expiredLanes|=r),s&=~r}if(t=V,l=B,l=Gs(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&dn(a),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||di(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&dn(a),to(l)){case 2:case 8:l=nf;break;case 32:l=ds;break;case 268435456:l=rf;break;default:l=ds}return a=ym.bind(null,e),l=Pr(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&dn(a),e.callbackPriority=2,e.callbackNode=null,2}function ym(e,t){if(ue!==0&&ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(ln()&&e.callbackNode!==l)return null;var a=B;return a=Gs(e,e===V?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(sm(e,a,t),xm(e,ke()),e.callbackNode!=null&&e.callbackNode===l?ym.bind(null,e):null)}function sc(e,t){if(ln())return null;sm(e,t,!0)}function bp(){_p(function(){L&6?Pr(sf,pp):vm()})}function Lo(){if(Xt===0){var e=ta;e===0&&(e=Ri,Ri<<=1,!(Ri&261888)&&(Ri=256)),Xt=e}return Xt}function nc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function rc(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function vp(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var s=nc((i[_e]||null).action),n=a.submitter;n&&(t=(t=n[_e]||null)?nc(t.formAction):n.getAttribute("formAction"),t!==null&&(s=t,n=null));var r=new Qs("action","action",null,a,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xt!==0){var o=n?rc(i,n):new FormData(i);zr(l,{pending:!0,data:o,method:i.method,action:s},null,o)}}else typeof s=="function"&&(r.preventDefault(),o=n?rc(i,n):new FormData(i),zr(l,{pending:!0,data:o,method:i.method,action:s},s,o))},currentTarget:i}]})}}for(var qn=0;qn<fr.length;qn++){var Ln=fr[qn],xp=Ln.toLowerCase(),yp=Ln[0].toUpperCase()+Ln.slice(1);tt(xp,"on"+yp)}tt(Df,"onAnimationEnd");tt(Cf,"onAnimationIteration");tt(Mf,"onAnimationStart");tt("dblclick","onDoubleClick");tt("focusin","onFocus");tt("focusout","onBlur");tt(Ug,"onTransitionRun");tt(Hg,"onTransitionStart");tt(Bg,"onTransitionCancel");tt(kf,"onTransitionEnd");Pl("onMouseEnter",["mouseout","mouseover"]);Pl("onMouseLeave",["mouseout","mouseover"]);Pl("onPointerEnter",["pointerout","pointerover"]);Pl("onPointerLeave",["pointerout","pointerover"]);zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zl("onBeforeInput",["compositionend","keypress","textInput","paste"]);zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function wm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var n=a.length-1;0<=n;n--){var r=a[n],o=r.instance,u=r.currentTarget;if(r=r.listener,o!==s&&i.isPropagationStopped())break e;s=r,i.currentTarget=u;try{s(i)}catch(h){hs(h)}i.currentTarget=null,s=o}else for(n=0;n<a.length;n++){if(r=a[n],o=r.instance,u=r.currentTarget,r=r.listener,o!==s&&i.isPropagationStopped())break e;s=r,i.currentTarget=u;try{s(i)}catch(h){hs(h)}i.currentTarget=null,s=o}}}}function U(e,t){var l=t[ar];l===void 0&&(l=t[ar]=new Set);var a=e+"__bubble";l.has(a)||(Sm(t,e,2,!1),l.add(a))}function Yn(e,t,l){var a=0;t&&(a|=4),Sm(l,e,a,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[Yi]){e[Yi]=!0,mf.forEach(function(l){l!=="selectionchange"&&(wp.has(l)||Yn(l,!1,e),Yn(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Yn("selectionchange",!1,t))}}function Sm(e,t,l,a){switch(km(t)){case 2:var i=$p;break;case 8:i=Wp;break;default:i=Zo}l=i.bind(null,t,l,e),i=void 0,!or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function Gn(e,t,l,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var n=a.tag;if(n===3||n===4){var r=a.stateNode.containerInfo;if(r===i)break;if(n===4)for(n=a.return;n!==null;){var o=n.tag;if((o===3||o===4)&&n.stateNode.containerInfo===i)return;n=n.return}for(;r!==null;){if(n=kl(r),n===null)return;if(o=n.tag,o===5||o===6||o===26||o===27){a=s=n;continue e}r=r.parentNode}}a=a.return}wf(function(){var u=s,h=io(l),c=[];e:{var m=Uf.get(e);if(m!==void 0){var b=Qs,w=e;switch(e){case"keypress":if($i(l)===0)break e;case"keydown":case"keyup":b=hg;break;case"focusin":w="focus",b=bn;break;case"focusout":w="blur",b=bn;break;case"beforeblur":case"afterblur":b=bn;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=bg;break;case Df:case Cf:case Mf:b=sg;break;case kf:b=xg;break;case"scroll":case"scrollend":b=eg;break;case"wheel":b=wg;break;case"copy":case"cut":case"paste":b=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=bu;break;case"toggle":case"beforetoggle":b=zg}var S=(t&4)!==0,z=!S&&(e==="scroll"||e==="scrollend"),d=S?m!==null?m+"Capture":null:m;S=[];for(var f=u,p;f!==null;){var v=f;if(p=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||p===null||d===null||(v=Wa(f,d),v!=null&&S.push(si(f,v,p))),z)break;f=f.return}0<S.length&&(m=new b(m,w,null,l,h),c.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&l!==rr&&(w=l.relatedTarget||l.fromElement)&&(kl(w)||w[ca]))break e;if((b||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,b?(w=l.relatedTarget||l.toElement,b=u,w=w?kl(w):null,w!==null&&(z=ci(w),S=w.tag,w!==z||S!==5&&S!==27&&S!==6)&&(w=null)):(b=null,w=u),b!==w)){if(S=gu,v="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=bu,v="onPointerLeave",d="onPointerEnter",f="pointer"),z=b==null?m:Da(b),p=w==null?m:Da(w),m=new S(v,f+"leave",b,l,h),m.target=z,m.relatedTarget=p,v=null,kl(h)===u&&(S=new S(d,f+"enter",w,l,h),S.target=p,S.relatedTarget=z,v=S),z=v,b&&w)t:{for(S=Sp,d=b,f=w,p=0,v=d;v;v=S(v))p++;v=0;for(var T=f;T;T=S(T))v++;for(;0<p-v;)d=S(d),p--;for(;0<v-p;)f=S(f),v--;for(;p--;){if(d===f||f!==null&&d===f.alternate){S=d;break t}d=S(d),f=S(f)}S=null}else S=null;b!==null&&oc(c,m,b,S,!1),w!==null&&z!==null&&oc(c,z,w,S,!0)}}e:{if(m=u?Da(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var N=wu;else if(yu(m))if(Af)N=Cg;else{N=Rg;var E=Og}else b=m.nodeName,!b||b.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?u&&ao(u.elementType)&&(N=wu):N=Dg;if(N&&(N=N(e,u))){jf(c,N,l,h);break e}E&&E(e,m,u),e==="focusout"&&u&&m.type==="number"&&u.memoizedProps.value!=null&&nr(m,"number",m.value)}switch(E=u?Da(u):window,e){case"focusin":(yu(E)||E.contentEditable==="true")&&(Bl=E,ur=u,Ba=null);break;case"focusout":Ba=ur=Bl=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,ju(c,l,h);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":ju(c,l,h)}var A;if(ro)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Hl?Tf(e,l)&&(O="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(O="onCompositionStart");O&&(zf&&l.locale!=="ko"&&(Hl||O!=="onCompositionStart"?O==="onCompositionEnd"&&Hl&&(A=Sf()):(Yt=h,so="value"in Yt?Yt.value:Yt.textContent,Hl=!0)),E=Rs(u,O),0<E.length&&(O=new pu(O,e,null,l,h),c.push({event:O,listeners:E}),A?O.data=A:(A=Ef(l),A!==null&&(O.data=A)))),(A=Eg?jg(e,l):Ag(e,l))&&(O=Rs(u,"onBeforeInput"),0<O.length&&(E=new pu("onBeforeInput","beforeinput",null,l,h),c.push({event:E,listeners:O}),E.data=A)),vp(c,e,u,l,h)}wm(c,t)})}function si(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Rs(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Wa(e,l),i!=null&&a.unshift(si(e,i,s)),i=Wa(e,t),i!=null&&a.push(si(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function oc(e,t,l,a,i){for(var s=t._reactName,n=[];l!==null&&l!==a;){var r=l,o=r.alternate,u=r.stateNode;if(r=r.tag,o!==null&&o===a)break;r!==5&&r!==26&&r!==27||u===null||(o=u,i?(u=Wa(l,s),u!=null&&n.unshift(si(l,u,o))):i||(u=Wa(l,s),u!=null&&n.push(si(l,u,o)))),l=l.return}n.length!==0&&e.push({event:t,listeners:n})}var zp=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(zp,`
`).replace(Tp,"")}function zm(e,t){return t=uc(t),uc(e)===t}function X(e,t,l,a,i,s){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ea(e,""+a);break;case"className":Mi(e,"class",a);break;case"tabIndex":Mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,l,a);break;case"style":yf(e,a,s);break;case"data":if(t!=="object"){Mi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ki(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(t!=="input"&&X(e,t,"name",i.name,i,null),X(e,t,"formEncType",i.formEncType,i,null),X(e,t,"formMethod",i.formMethod,i,null),X(e,t,"formTarget",i.formTarget,i,null)):(X(e,t,"encType",i.encType,i,null),X(e,t,"method",i.method,i,null),X(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ki(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=xt);break;case"onScroll":a!=null&&U("scroll",e);break;case"onScrollEnd":a!=null&&U("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Ki(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":U("beforetoggle",e),U("toggle",e),Vi(e,"popover",a);break;case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Vi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ih.get(l)||l,Vi(e,l,a))}}function Mr(e,t,l,a,i,s){switch(l){case"style":yf(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ea(e,a):(typeof a=="number"||typeof a=="bigint")&&ea(e,""+a);break;case"onScroll":a!=null&&U("scroll",e);break;case"onScrollEnd":a!=null&&U("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),s=e[_e]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Vi(e,l,a)}}}function xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",e),U("load",e);var a=!1,i=!1,s;for(s in l)if(l.hasOwnProperty(s)){var n=l[s];if(n!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:X(e,t,s,n,l,null)}}i&&X(e,t,"srcSet",l.srcSet,l,null),a&&X(e,t,"src",l.src,l,null);return;case"input":U("invalid",e);var r=s=n=i=null,o=null,u=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":i=h;break;case"type":n=h;break;case"checked":o=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,t));break;default:X(e,t,a,h,l,null)}}bf(e,s,r,o,u,n,i,!1);return;case"select":U("invalid",e),a=n=s=null;for(i in l)if(l.hasOwnProperty(i)&&(r=l[i],r!=null))switch(i){case"value":s=r;break;case"defaultValue":n=r;break;case"multiple":a=r;default:X(e,t,i,r,l,null)}t=s,l=n,e.multiple=!!a,t!=null?Vl(e,!!a,t,!1):l!=null&&Vl(e,!!a,l,!0);return;case"textarea":U("invalid",e),s=i=a=null;for(n in l)if(l.hasOwnProperty(n)&&(r=l[n],r!=null))switch(n){case"value":a=r;break;case"defaultValue":i=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(y(91));break;default:X(e,t,n,r,l,null)}xf(e,a,i,s);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:X(e,t,o,a,l,null)}return;case"dialog":U("beforetoggle",e),U("toggle",e),U("cancel",e),U("close",e);break;case"iframe":case"object":U("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)U(ii[a],e);break;case"image":U("error",e),U("load",e);break;case"details":U("toggle",e);break;case"embed":case"source":case"link":U("error",e),U("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in l)if(l.hasOwnProperty(u)&&(a=l[u],a!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:X(e,t,u,a,l,null)}return;default:if(ao(t)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&Mr(e,t,h,a,l,void 0));return}}for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null&&X(e,t,r,a,l,null))}function Ep(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,n=null,r=null,o=null,u=null,h=null;for(b in l){var c=l[b];if(l.hasOwnProperty(b)&&c!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=c;default:a.hasOwnProperty(b)||X(e,t,b,null,a,c)}}for(var m in a){var b=a[m];if(c=l[m],a.hasOwnProperty(m)&&(b!=null||c!=null))switch(m){case"type":s=b;break;case"name":i=b;break;case"checked":u=b;break;case"defaultChecked":h=b;break;case"value":n=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(y(137,t));break;default:b!==c&&X(e,t,m,b,a,c)}}sr(e,n,r,o,u,h,s,i);return;case"select":b=n=r=m=null;for(s in l)if(o=l[s],l.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":b=o;default:a.hasOwnProperty(s)||X(e,t,s,null,a,o)}for(i in a)if(s=a[i],o=l[i],a.hasOwnProperty(i)&&(s!=null||o!=null))switch(i){case"value":m=s;break;case"defaultValue":r=s;break;case"multiple":n=s;default:s!==o&&X(e,t,i,s,a,o)}t=r,l=n,a=b,m!=null?Vl(e,!!l,m,!1):!!a!=!!l&&(t!=null?Vl(e,!!l,t,!0):Vl(e,!!l,l?[]:"",!1));return;case"textarea":b=m=null;for(r in l)if(i=l[r],l.hasOwnProperty(r)&&i!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:X(e,t,r,null,a,i)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":m=i;break;case"defaultValue":b=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==s&&X(e,t,n,i,a,s)}vf(e,m,b);return;case"option":for(var w in l)if(m=l[w],l.hasOwnProperty(w)&&m!=null&&!a.hasOwnProperty(w))switch(w){case"selected":e.selected=!1;break;default:X(e,t,w,null,a,m)}for(o in a)if(m=a[o],b=l[o],a.hasOwnProperty(o)&&m!==b&&(m!=null||b!=null))switch(o){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:X(e,t,o,m,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in l)m=l[S],l.hasOwnProperty(S)&&m!=null&&!a.hasOwnProperty(S)&&X(e,t,S,null,a,m);for(u in a)if(m=a[u],b=l[u],a.hasOwnProperty(u)&&m!==b&&(m!=null||b!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(y(137,t));break;default:X(e,t,u,m,a,b)}return;default:if(ao(t)){for(var z in l)m=l[z],l.hasOwnProperty(z)&&m!==void 0&&!a.hasOwnProperty(z)&&Mr(e,t,z,void 0,a,m);for(h in a)m=a[h],b=l[h],!a.hasOwnProperty(h)||m===b||m===void 0&&b===void 0||Mr(e,t,h,m,a,b);return}}for(var d in l)m=l[d],l.hasOwnProperty(d)&&m!=null&&!a.hasOwnProperty(d)&&X(e,t,d,null,a,m);for(c in a)m=a[c],b=l[c],!a.hasOwnProperty(c)||m===b||m==null&&b==null||X(e,t,c,m,a,b)}function cc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],s=i.transferSize,n=i.initiatorType,r=i.duration;if(s&&r&&cc(n)){for(n=0,r=i.responseEnd,a+=1;a<l.length;a++){var o=l[a],u=o.startTime;if(u>r)break;var h=o.transferSize,c=o.initiatorType;h&&cc(c)&&(o=o.responseEnd,n+=h*(o<r?1:(r-u)/(o-u)))}if(--a,t+=8*(s+n)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kr=null,Ur=null;function Ds(e){return e.nodeType===9?e:e.ownerDocument}function fc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qn=null;function Ap(){var e=window.event;return e&&e.type==="popstate"?e===Qn?!1:(Qn=e,!0):(Qn=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(Op)}:Em;function Op(e){setTimeout(function(){throw e})}function sl(e){return e==="head"}function mc(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),oa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ja(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ja(l);for(var s=l.firstChild;s;){var n=s.nextSibling,r=s.nodeName;s[hi]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=n}}else l==="body"&&Ja(e.ownerDocument.body);l=i}while(l);oa(t)}function hc(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Br(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Br(l),lo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Rp(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[hi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function Dp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=We(e.nextSibling),e===null))return null;return e}function jm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=We(e.nextSibling),e===null))return null;return e}function qr(e){return e.data==="$?"||e.data==="$~"}function Lr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cp(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function We(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yr=null;function gc(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return We(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Am(e,t,l){switch(t=Ds(l),e){case"html":if(e=t.documentElement,!e)throw Error(y(452));return e;case"head":if(e=t.head,!e)throw Error(y(453));return e;case"body":if(e=t.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function Ja(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lo(e)}var Fe=new Map,bc=new Set;function Cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ot=Y.d;Y.d={f:Mp,r:kp,D:Up,C:Hp,L:Bp,m:qp,X:Yp,S:Lp,M:Gp};function Mp(){var e=Ot.f(),t=en();return e||t}function kp(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?yd(t):Ot.r(e)}var ga=typeof document>"u"?null:document;function Nm(e,t,l){var a=ga;if(a&&typeof t=="string"&&t){var i=Ve(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),bc.has(i)||(bc.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),xe(t,"link",e),me(t),a.head.appendChild(t)))}}function Up(e){Ot.D(e),Nm("dns-prefetch",e,null)}function Hp(e,t){Ot.C(e,t),Nm("preconnect",e,t)}function Bp(e,t,l){Ot.L(e,t,l);var a=ga;if(a&&e&&t){var i='link[rel="preload"][as="'+Ve(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Ve(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Ve(l.imageSizes)+'"]')):i+='[href="'+Ve(e)+'"]';var s=i;switch(t){case"style":s=ra(e);break;case"script":s=pa(e)}Fe.has(s)||(e=F({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Fe.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(yi(s))||t==="script"&&a.querySelector(wi(s))||(t=a.createElement("link"),xe(t,"link",e),me(t),a.head.appendChild(t)))}}function qp(e,t){Ot.m(e,t);var l=ga;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ve(a)+'"][href="'+Ve(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pa(e)}if(!Fe.has(s)&&(e=F({rel:"modulepreload",href:e},t),Fe.set(s,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(wi(s)))return}a=l.createElement("link"),xe(a,"link",e),me(a),l.head.appendChild(a)}}}function Lp(e,t,l){Ot.S(e,t,l);var a=ga;if(a&&e){var i=Zl(a).hoistableStyles,s=ra(e);t=t||"default";var n=i.get(s);if(!n){var r={loading:0,preload:null};if(n=a.querySelector(yi(s)))r.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Fe.get(s))&&Go(e,l);var o=n=a.createElement("link");me(o),xe(o,"link",e),o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,as(n,t,a)}n={type:"stylesheet",instance:n,count:1,state:r},i.set(s,n)}}}function Yp(e,t){Ot.X(e,t);var l=ga;if(l&&e){var a=Zl(l).hoistableScripts,i=pa(e),s=a.get(i);s||(s=l.querySelector(wi(i)),s||(e=F({src:e,async:!0},t),(t=Fe.get(i))&&Qo(e,t),s=l.createElement("script"),me(s),xe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Gp(e,t){Ot.M(e,t);var l=ga;if(l&&e){var a=Zl(l).hoistableScripts,i=pa(e),s=a.get(i);s||(s=l.querySelector(wi(i)),s||(e=F({src:e,async:!0,type:"module"},t),(t=Fe.get(i))&&Qo(e,t),s=l.createElement("script"),me(s),xe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function vc(e,t,l,a){var i=(i=Zt.current)?Cs(i):null;if(!i)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ra(l.href),l=Zl(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ra(l.href);var s=Zl(i).hoistableStyles,n=s.get(e);if(n||(i=i.ownerDocument||i,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,n),(s=i.querySelector(yi(e)))&&!s._p&&(n.instance=s,n.state.loading=5),Fe.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Fe.set(e,l),s||Qp(i,e,l,n.state))),t&&a===null)throw Error(y(528,""));return n}if(t&&a!==null)throw Error(y(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pa(l),l=Zl(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function ra(e){return'href="'+Ve(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function _m(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Qp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),xe(t,"link",l),me(t),e.head.appendChild(t))}function pa(e){return'[src="'+Ve(e)+'"]'}function wi(e){return"script[async]"+e}function xc(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ve(l.href)+'"]');if(a)return t.instance=a,me(a),a;var i=F({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),me(a),xe(a,"style",i),as(a,l.precedence,e),t.instance=a;case"stylesheet":i=ra(l.href);var s=e.querySelector(yi(i));if(s)return t.state.loading|=4,t.instance=s,me(s),s;a=_m(l),(i=Fe.get(i))&&Go(a,i),s=(e.ownerDocument||e).createElement("link"),me(s);var n=s;return n._p=new Promise(function(r,o){n.onload=r,n.onerror=o}),xe(s,"link",a),t.state.loading|=4,as(s,l.precedence,e),t.instance=s;case"script":return s=pa(l.src),(i=e.querySelector(wi(s)))?(t.instance=i,me(i),i):(a=l,(i=Fe.get(s))&&(a=F({},l),Qo(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),me(i),xe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,as(a,l.precedence,e));return t.instance}function as(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,n=0;n<a.length;n++){var r=a[n];if(r.dataset.precedence===t)s=r;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Go(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var is=null;function yc(e,t,l){if(is===null){var a=new Map,i=is=new Map;i.set(l,a)}else i=is,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var s=l[i];if(!(s[hi]||s[pe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var n=s.getAttribute(t)||"";n=e+n;var r=a.get(n);r?r.push(s):a.set(n,[s])}}return a}function wc(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Zp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var i=ra(a.href),s=t.querySelector(yi(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ms.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=s,me(s);return}s=t.ownerDocument||t,a=_m(a),(i=Fe.get(i))&&Go(a,i),s=s.createElement("link"),me(s);var n=s;n._p=new Promise(function(r,o){n.onload=r,n.onerror=o}),xe(s,"link",a),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Ms.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Xn=0;function Vp(e,t){return e.stylesheets&&e.count===0&&ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Xn===0&&(Xn=62500*jp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Xn?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ks=null;function ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ks=new Map,t.forEach(Kp,e),ks=null,Ms.call(e))}function Kp(e,t){if(!(t.state.loading&4)){var l=ks.get(e);if(l)var a=l.get(null);else{l=new Map,ks.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var n=i[s];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(l.set(n.dataset.precedence,n),a=n)}a&&l.set(null,a)}i=t.instance,n=i.getAttribute("data-precedence"),s=l.get(n)||a,s===a&&l.set(null,i),l.set(n,i),this.count++,a=Ms.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ni={$$typeof:vt,Provider:null,Consumer:null,_currentValue:ml,_currentValue2:ml,_threadCount:0};function Jp(e,t,l,a,i,s,n,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.hiddenUpdates=mn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Rm(e,t,l,a,i,s,n,r,o,u,h,c){return e=new Jp(e,t,l,n,o,u,h,c,r),t=1,s===!0&&(t|=24),s=Ce(3,null,null,t),e.current=s,s.stateNode=e,t=go(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:l,cache:t},vo(s),e}function Dm(e){return e?(e=Yl,e):Yl}function Cm(e,t,l,a,i,s){i=Dm(i),a.context===null?a.context=i:a.pendingContext=i,a=Kt(t),a.payload={element:l},s=s===void 0?null:s,s!==null&&(a.callback=s),l=Jt(e,a,t),l!==null&&(Ne(l,e,t),La(l,e,t))}function Sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Xo(e,t){Sc(e,t),(e=e.alternate)&&Sc(e,t)}function Mm(e){if(e.tag===13||e.tag===31){var t=jl(e,67108864);t!==null&&Ne(t,e,67108864),Xo(e,67108864)}}function zc(e){if(e.tag===13||e.tag===31){var t=Be();t=eo(t);var l=jl(e,t);l!==null&&Ne(l,e,t),Xo(e,t)}}var Us=!0;function $p(e,t,l,a){var i=_.T;_.T=null;var s=Y.p;try{Y.p=2,Zo(e,t,l,a)}finally{Y.p=s,_.T=i}}function Wp(e,t,l,a){var i=_.T;_.T=null;var s=Y.p;try{Y.p=8,Zo(e,t,l,a)}finally{Y.p=s,_.T=i}}function Zo(e,t,l,a){if(Us){var i=Gr(a);if(i===null)Gn(e,t,a,Hs,l),Tc(e,a);else if(Ip(i,e,t,l,a))a.stopPropagation();else if(Tc(e,a),t&4&&-1<Fp.indexOf(e)){for(;i!==null;){var s=fa(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var n=cl(s.pendingLanes);if(n!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;n;){var o=1<<31-He(n);r.entanglements[1]|=o,n&=~o}ct(s),!(L&6)&&(js=ke()+500,xi(0))}}break;case 31:case 13:r=jl(s,2),r!==null&&Ne(r,s,2),en(),Xo(s,2)}if(s=Gr(a),s===null&&Gn(e,t,a,Hs,l),s===i)break;i=s}i!==null&&a.stopPropagation()}else Gn(e,t,a,null,l)}}function Gr(e){return e=io(e),Vo(e)}var Hs=null;function Vo(e){if(Hs=null,e=kl(e),e!==null){var t=ci(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Pc(t),e!==null)return e;e=null}else if(l===31){if(e=ef(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hs=e,null}function km(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uh()){case sf:return 2;case nf:return 8;case ds:case Hh:return 32;case rf:return 268435456;default:return 32}default:return 32}}var Qr=!1,Ft=null,It=null,Pt=null,ri=new Map,oi=new Map,qt=[],Fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Na(e,t,l,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=fa(t),t!==null&&Mm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ip(e,t,l,a,i){switch(t){case"focusin":return Ft=Na(Ft,e,t,l,a,i),!0;case"dragenter":return It=Na(It,e,t,l,a,i),!0;case"mouseover":return Pt=Na(Pt,e,t,l,a,i),!0;case"pointerover":var s=i.pointerId;return ri.set(s,Na(ri.get(s)||null,e,t,l,a,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Na(oi.get(s)||null,e,t,l,a,i)),!0}return!1}function Um(e){var t=kl(e.target);if(t!==null){var l=ci(t);if(l!==null){if(t=l.tag,t===13){if(t=Pc(l),t!==null){e.blockedOn=t,ou(e.priority,function(){zc(l)});return}}else if(t===31){if(t=ef(l),t!==null){e.blockedOn=t,ou(e.priority,function(){zc(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Gr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);rr=a,l.target.dispatchEvent(a),rr=null}else return t=fa(l),t!==null&&Mm(t),e.blockedOn=l,!1;t.shift()}return!0}function Ec(e,t,l){ns(e)&&l.delete(t)}function Pp(){Qr=!1,Ft!==null&&ns(Ft)&&(Ft=null),It!==null&&ns(It)&&(It=null),Pt!==null&&ns(Pt)&&(Pt=null),ri.forEach(Ec),oi.forEach(Ec)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Qr||(Qr=!0,ce.unstable_scheduleCallback(ce.unstable_NormalPriority,Pp)))}var Qi=null;function jc(e){Qi!==e&&(Qi=e,ce.unstable_scheduleCallback(ce.unstable_NormalPriority,function(){Qi===e&&(Qi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Vo(a||l)===null)continue;break}var s=fa(l);s!==null&&(e.splice(t,3),t-=3,zr(s,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function oa(e){function t(o){return Gi(o,e)}Ft!==null&&Gi(Ft,e),It!==null&&Gi(It,e),Pt!==null&&Gi(Pt,e),ri.forEach(t),oi.forEach(t);for(var l=0;l<qt.length;l++){var a=qt[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<qt.length&&(l=qt[0],l.blockedOn===null);)Um(l),l.blockedOn===null&&qt.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],s=l[a+1],n=i[_e]||null;if(typeof s=="function")n||jc(l);else if(n){var r=null;if(s&&s.hasAttribute("formAction")){if(i=s,n=s[_e]||null)r=n.formAction;else if(Vo(i)!==null)continue}else r=n.action;typeof r=="function"?l[a+1]=r:(l.splice(a,3),a-=3),jc(l)}}}function Hm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(n){return i=n})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Ko(e){this._internalRoot=e}an.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));var l=t.current,a=Be();Cm(l,a,e,t,null,null)};an.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cm(e.current,2,null,e,null,null),en(),t[ca]=null}};function an(e){this._internalRoot=e}an.prototype.unstable_scheduleHydration=function(e){if(e){var t=df();e={blockedOn:null,target:e,priority:t};for(var l=0;l<qt.length&&t!==0&&t<qt[l].priority;l++);qt.splice(l,0,e),l===0&&Um(e)}};var Ac=Fc.version;if(Ac!=="19.2.4")throw Error(y(527,Ac,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=_h(t),e=e!==null?tf(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{fi=Xi.inject(eb),Ue=Xi}catch{}}Ls.createRoot=function(e,t){if(!Ic(e))throw Error(y(299));var l=!1,a="",i=Nd,s=_d,n=Od;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=Rm(e,1,!1,null,null,l,a,null,i,s,n,Hm),e[ca]=t.current,Yo(e),new Ko(t)};Ls.hydrateRoot=function(e,t,l){if(!Ic(e))throw Error(y(299));var a=!1,i="",s=Nd,n=_d,r=Od,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=Rm(e,1,!0,t,l??null,a,i,o,s,n,r,Hm),t.context=Dm(null),l=t.current,a=Be(),a=eo(a),i=Kt(a),i.callback=null,Jt(l,i,a),l=a,t.current.lanes=l,mi(t,l),ct(t),e[ca]=t.current,Yo(e),new an(t)};Ls.version="19.2.4";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(e){console.error(e)}}Bm(),Zc.exports=Ls;var tb=Zc.exports;const lb=kc(tb);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nc="popstate";function _c(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function ab(e={}){function t(a,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:n,search:r,hash:o}=s||a.location;return Xr("",{pathname:n,search:r,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function l(a,i){return typeof i=="string"?i:ui(i)}return sb(t,l,null,e)}function P(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ib(){return Math.random().toString(36).substring(2,10)}function Oc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Xr(e,t,l=null,a,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ba(t):t,state:l,key:t&&t.key||a||ib(),unstable_mask:i}}function ui({pathname:e="/",search:t="",hash:l=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function ba(e){let t={};if(e){let l=e.indexOf("#");l>=0&&(t.hash=e.substring(l),e=e.substring(0,l));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function sb(e,t,l,a={}){let{window:i=document.defaultView,v5Compat:s=!1}=a,n=i.history,r="POP",o=null,u=h();u==null&&(u=0,n.replaceState({...n.state,idx:u},""));function h(){return(n.state||{idx:null}).idx}function c(){r="POP";let z=h(),d=z==null?null:z-u;u=z,o&&o({action:r,location:S.location,delta:d})}function m(z,d){r="PUSH";let f=_c(z)?z:Xr(S.location,z,d);u=h()+1;let p=Oc(f,u),v=S.createHref(f.unstable_mask||f);try{n.pushState(p,"",v)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(v)}s&&o&&o({action:r,location:S.location,delta:1})}function b(z,d){r="REPLACE";let f=_c(z)?z:Xr(S.location,z,d);u=h();let p=Oc(f,u),v=S.createHref(f.unstable_mask||f);n.replaceState(p,"",v),s&&o&&o({action:r,location:S.location,delta:0})}function w(z){return nb(z)}let S={get action(){return r},get location(){return e(i,n)},listen(z){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(Nc,c),o=z,()=>{i.removeEventListener(Nc,c),o=null}},createHref(z){return t(i,z)},createURL:w,encodeLocation(z){let d=w(z);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:b,go(z){return n.go(z)}};return S}function nb(e,t=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),P(l,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:ui(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=l+a),new URL(a,l)}function qm(e,t,l="/"){return rb(e,t,l,!1)}function rb(e,t,l,a){let i=typeof t=="string"?ba(t):t,s=_t(i.pathname||"/",l);if(s==null)return null;let n=Lm(e);ob(n);let r=null;for(let o=0;r==null&&o<n.length;++o){let u=xb(s);r=bb(n[o],u,a)}return r}function Lm(e,t=[],l=[],a="",i=!1){let s=(n,r,o=i,u)=>{let h={relativePath:u===void 0?n.path||"":u,caseSensitive:n.caseSensitive===!0,childrenIndex:r,route:n};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(a)&&o)return;P(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length)}let c=rt([a,h.relativePath]),m=l.concat(h);n.children&&n.children.length>0&&(P(n.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Lm(n.children,t,m,c,o)),!(n.path==null&&!n.index)&&t.push({path:c,score:gb(c,n.index),routesMeta:m})};return e.forEach((n,r)=>{var o;if(n.path===""||!((o=n.path)!=null&&o.includes("?")))s(n,r);else for(let u of Ym(n.path))s(n,r,!0,u)}),t}function Ym(e){let t=e.split("/");if(t.length===0)return[];let[l,...a]=t,i=l.endsWith("?"),s=l.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let n=Ym(a.join("/")),r=[];return r.push(...n.map(o=>o===""?s:[s,o].join("/"))),i&&r.push(...n),r.map(o=>e.startsWith("/")&&o===""?"/":o)}function ob(e){e.sort((t,l)=>t.score!==l.score?l.score-t.score:pb(t.routesMeta.map(a=>a.childrenIndex),l.routesMeta.map(a=>a.childrenIndex)))}var ub=/^:[\w-]+$/,cb=3,fb=2,db=1,mb=10,hb=-2,Rc=e=>e==="*";function gb(e,t){let l=e.split("/"),a=l.length;return l.some(Rc)&&(a+=hb),t&&(a+=fb),l.filter(i=>!Rc(i)).reduce((i,s)=>i+(ub.test(s)?cb:s===""?db:mb),a)}function pb(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function bb(e,t,l=!1){let{routesMeta:a}=e,i={},s="/",n=[];for(let r=0;r<a.length;++r){let o=a[r],u=r===a.length-1,h=s==="/"?t:t.slice(s.length)||"/",c=Bs({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},h),m=o.route;if(!c&&u&&l&&!a[a.length-1].route.index&&(c=Bs({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!c)return null;Object.assign(i,c.params),n.push({params:i,pathname:rt([s,c.pathname]),pathnameBase:zb(rt([s,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(s=rt([s,c.pathnameBase]))}return n}function Bs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,a]=vb(e.path,e.caseSensitive,e.end),i=t.match(l);if(!i)return null;let s=i[0],n=s.replace(/(.)\/+$/,"$1"),r=i.slice(1);return{params:a.reduce((u,{paramName:h,isOptional:c},m)=>{if(h==="*"){let w=r[m]||"";n=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const b=r[m];return c&&!b?u[h]=void 0:u[h]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:n,pattern:e}}function vb(e,t=!1,l=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,r,o,u,h)=>{if(a.push({paramName:r,isOptional:o!=null}),o){let c=h.charAt(u+n.length);return c&&c!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function xb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _t(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let l=t.endsWith("/")?t.length-1:t.length,a=e.charAt(l);return a&&a!=="/"?null:e.slice(l)||"/"}var yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wb(e,t="/"){let{pathname:l,search:a="",hash:i=""}=typeof e=="string"?ba(e):e,s;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?s=Dc(l.substring(1),"/"):s=Dc(l,t)):s=t,{pathname:s,search:Tb(a),hash:Eb(i)}}function Dc(e,t){let l=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?l.length>1&&l.pop():i!=="."&&l.push(i)}),l.length>1?l.join("/"):"/"}function Zn(e,t,l,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sb(e){return e.filter((t,l)=>l===0||t.route.path&&t.route.path.length>0)}function Gm(e){let t=Sb(e);return t.map((l,a)=>a===t.length-1?l.pathname:l.pathnameBase)}function Jo(e,t,l,a=!1){let i;typeof e=="string"?i=ba(e):(i={...e},P(!i.pathname||!i.pathname.includes("?"),Zn("?","pathname","search",i)),P(!i.pathname||!i.pathname.includes("#"),Zn("#","pathname","hash",i)),P(!i.search||!i.search.includes("#"),Zn("#","search","hash",i)));let s=e===""||i.pathname==="",n=s?"/":i.pathname,r;if(n==null)r=l;else{let c=t.length-1;if(!a&&n.startsWith("..")){let m=n.split("/");for(;m[0]==="..";)m.shift(),c-=1;i.pathname=m.join("/")}r=c>=0?t[c]:"/"}let o=wb(i,r),u=n&&n!=="/"&&n.endsWith("/"),h=(s||n===".")&&l.endsWith("/");return!o.pathname.endsWith("/")&&(u||h)&&(o.pathname+="/"),o}var rt=e=>e.join("/").replace(/\/\/+/g,"/"),zb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Eb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,jb=class{constructor(e,t,l,a=!1){this.status=e,this.statusText=t||"",this.internal=a,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Ab(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Nb(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xm(e,t){let l=e;if(typeof l!="string"||!yb.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let a=l,i=!1;if(Qm)try{let s=new URL(window.location.href),n=l.startsWith("//")?new URL(s.protocol+l):new URL(l),r=_t(n.pathname,t);n.origin===s.origin&&r!=null?l=r+n.search+n.hash:i=!0}catch{ot(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zm=["POST","PUT","PATCH","DELETE"];new Set(Zm);var _b=["GET",...Zm];new Set(_b);var va=x.createContext(null);va.displayName="DataRouter";var sn=x.createContext(null);sn.displayName="DataRouterState";var Ob=x.createContext(!1),Vm=x.createContext({isTransitioning:!1});Vm.displayName="ViewTransition";var Rb=x.createContext(new Map);Rb.displayName="Fetchers";var Db=x.createContext(null);Db.displayName="Await";var Ie=x.createContext(null);Ie.displayName="Navigation";var Si=x.createContext(null);Si.displayName="Location";var Rt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var $o=x.createContext(null);$o.displayName="RouteError";var Km="REACT_ROUTER_ERROR",Cb="REDIRECT",Mb="ROUTE_ERROR_RESPONSE";function kb(e){if(e.startsWith(`${Km}:${Cb}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ub(e){if(e.startsWith(`${Km}:${Mb}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new jb(t.status,t.statusText,t.data)}catch{}}function Hb(e,{relative:t}={}){P(zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:a}=x.useContext(Ie),{hash:i,pathname:s,search:n}=Ti(e,{relative:t}),r=s;return l!=="/"&&(r=s==="/"?l:rt([l,s])),a.createHref({pathname:r,search:n,hash:i})}function zi(){return x.useContext(Si)!=null}function nl(){return P(zi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Si).location}var Jm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $m(e){x.useContext(Ie).static||x.useLayoutEffect(e)}function Bb(){let{isDataRoute:e}=x.useContext(Rt);return e?Fb():qb()}function qb(){P(zi(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(va),{basename:t,navigator:l}=x.useContext(Ie),{matches:a}=x.useContext(Rt),{pathname:i}=nl(),s=JSON.stringify(Gm(a)),n=x.useRef(!1);return $m(()=>{n.current=!0}),x.useCallback((o,u={})=>{if(ot(n.current,Jm),!n.current)return;if(typeof o=="number"){l.go(o);return}let h=Jo(o,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:rt([t,h.pathname])),(u.replace?l.replace:l.push)(h,u.state,u)},[t,l,s,i,e])}x.createContext(null);function Ti(e,{relative:t}={}){let{matches:l}=x.useContext(Rt),{pathname:a}=nl(),i=JSON.stringify(Gm(l));return x.useMemo(()=>Jo(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function Lb(e,t){return Wm(e,t)}function Wm(e,t,l){var z;P(zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=x.useContext(Ie),{matches:i}=x.useContext(Rt),s=i[i.length-1],n=s?s.params:{},r=s?s.pathname:"/",o=s?s.pathnameBase:"/",u=s&&s.route;{let d=u&&u.path||"";Im(r,!u||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${r}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let h=nl(),c;if(t){let d=typeof t=="string"?ba(t):t;P(o==="/"||((z=d.pathname)==null?void 0:z.startsWith(o)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${d.pathname}" was given in the \`location\` prop.`),c=d}else c=h;let m=c.pathname||"/",b=m;if(o!=="/"){let d=o.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(d.length).join("/")}let w=qm(e,{pathname:b});ot(u||w!=null,`No routes matched location "${c.pathname}${c.search}${c.hash}" `),ot(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${c.pathname}${c.search}${c.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Zb(w&&w.map(d=>Object.assign({},d,{params:Object.assign({},n,d.params),pathname:rt([o,a.encodeLocation?a.encodeLocation(d.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:rt([o,a.encodeLocation?a.encodeLocation(d.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),i,l);return t&&S?x.createElement(Si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...c},navigationType:"POP"}},S):S}function Yb(){let e=Wb(),t=Ab(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},n=null;return console.error("Error handled by React Router default ErrorBoundary:",e),n=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"ErrorBoundary")," or"," ",x.createElement("code",{style:s},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),l?x.createElement("pre",{style:i},l):null,n)}var Gb=x.createElement(Yb,null),Fm=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const l=Ub(e.digest);l&&(e=l)}let t=e!==void 0?x.createElement(Rt.Provider,{value:this.props.routeContext},x.createElement($o.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Qb,{error:e},t):t}};Fm.contextType=Ob;var Vn=new WeakMap;function Qb({children:e,error:t}){let{basename:l}=x.useContext(Ie);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=kb(t.digest);if(a){let i=Vn.get(t);if(i)throw i;let s=Xm(a.location,l);if(Qm&&!Vn.get(t))if(s.isExternal||a.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:a.replace}));throw Vn.set(t,n),n}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function Xb({routeContext:e,match:t,children:l}){let a=x.useContext(va);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Rt.Provider,{value:e},l)}function Zb(e,t=[],l){let a=l==null?void 0:l.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,s=a==null?void 0:a.errors;if(s!=null){let h=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);P(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let n=!1,r=-1;if(l&&a){n=a.renderFallback;for(let h=0;h<i.length;h++){let c=i[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(r=h),c.route.id){let{loaderData:m,errors:b}=a,w=c.route.loader&&!m.hasOwnProperty(c.route.id)&&(!b||b[c.route.id]===void 0);if(c.route.lazy||w){l.isStatic&&(n=!0),r>=0?i=i.slice(0,r+1):i=[i[0]];break}}}}let o=l==null?void 0:l.onError,u=a&&o?(h,c)=>{var m,b;o(h,{location:a.location,params:((b=(m=a.matches)==null?void 0:m[0])==null?void 0:b.params)??{},unstable_pattern:Nb(a.matches),errorInfo:c})}:void 0;return i.reduceRight((h,c,m)=>{let b,w=!1,S=null,z=null;a&&(b=s&&c.route.id?s[c.route.id]:void 0,S=c.route.errorElement||Gb,n&&(r<0&&m===0?(Im("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,z=null):r===m&&(w=!0,z=c.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,m+1)),f=()=>{let p;return b?p=S:w?p=z:c.route.Component?p=x.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=h,x.createElement(Xb,{match:c,routeContext:{outlet:h,matches:d,isDataRoute:a!=null},children:p})};return a&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?x.createElement(Fm,{location:a.location,revalidation:a.revalidation,component:S,error:b,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:u}):f()},null)}function Wo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vb(e){let t=x.useContext(va);return P(t,Wo(e)),t}function Kb(e){let t=x.useContext(sn);return P(t,Wo(e)),t}function Jb(e){let t=x.useContext(Rt);return P(t,Wo(e)),t}function Fo(e){let t=Jb(e),l=t.matches[t.matches.length-1];return P(l.route.id,`${e} can only be used on routes that contain a unique "id"`),l.route.id}function $b(){return Fo("useRouteId")}function Wb(){var a;let e=x.useContext($o),t=Kb("useRouteError"),l=Fo("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[l]}function Fb(){let{router:e}=Vb("useNavigate"),t=Fo("useNavigate"),l=x.useRef(!1);return $m(()=>{l.current=!0}),x.useCallback(async(i,s={})=>{ot(l.current,Jm),l.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Cc={};function Im(e,t,l){!t&&!Cc[e]&&(Cc[e]=!0,ot(!1,l))}x.memo(Ib);function Ib({routes:e,future:t,state:l,isStatic:a,onError:i}){return Wm(e,void 0,{state:l,isStatic:a,onError:i})}function Ct(e){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pb({basename:e="/",children:t=null,location:l,navigationType:a="POP",navigator:i,static:s=!1,unstable_useTransitions:n}){P(!zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let r=e.replace(/^\/*/,"/"),o=x.useMemo(()=>({basename:r,navigator:i,static:s,unstable_useTransitions:n,future:{}}),[r,i,s,n]);typeof l=="string"&&(l=ba(l));let{pathname:u="/",search:h="",hash:c="",state:m=null,key:b="default",unstable_mask:w}=l,S=x.useMemo(()=>{let z=_t(u,r);return z==null?null:{location:{pathname:z,search:h,hash:c,state:m,key:b,unstable_mask:w},navigationType:a}},[r,u,h,c,m,b,a,w]);return ot(S!=null,`<Router basename="${r}"> is not able to match the URL "${u}${h}${c}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:x.createElement(Ie.Provider,{value:o},x.createElement(Si.Provider,{children:t,value:S}))}function ev({children:e,location:t}){return Lb(Zr(e),t)}function Zr(e,t=[]){let l=[];return x.Children.forEach(e,(a,i)=>{if(!x.isValidElement(a))return;let s=[...t,i];if(a.type===x.Fragment){l.push.apply(l,Zr(a.props.children,s));return}P(a.type===Ct,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!a.props.index||!a.props.children,"An index route cannot have child routes.");let n={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(n.children=Zr(a.props.children,s)),l.push(n)}),l}var rs="get",os="application/x-www-form-urlencoded";function nn(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function tv(e){return nn(e)&&e.tagName.toLowerCase()==="button"}function lv(e){return nn(e)&&e.tagName.toLowerCase()==="form"}function av(e){return nn(e)&&e.tagName.toLowerCase()==="input"}function iv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sv(e,t){return e.button===0&&(!t||t==="_self")&&!iv(e)}var Zi=null;function nv(){if(Zi===null)try{new FormData(document.createElement("form"),0),Zi=!1}catch{Zi=!0}return Zi}var rv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kn(e){return e!=null&&!rv.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`),null):e}function ov(e,t){let l,a,i,s,n;if(lv(e)){let r=e.getAttribute("action");a=r?_t(r,t):null,l=e.getAttribute("method")||rs,i=Kn(e.getAttribute("enctype"))||os,s=new FormData(e)}else if(tv(e)||av(e)&&(e.type==="submit"||e.type==="image")){let r=e.form;if(r==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||r.getAttribute("action");if(a=o?_t(o,t):null,l=e.getAttribute("formmethod")||r.getAttribute("method")||rs,i=Kn(e.getAttribute("formenctype"))||Kn(r.getAttribute("enctype"))||os,s=new FormData(r,e),!nv()){let{name:u,type:h,value:c}=e;if(h==="image"){let m=u?`${u}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else u&&s.append(u,c)}}else{if(nn(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=rs,a=null,i=os,n=e}return s&&i==="text/plain"&&(n=s,s=void 0),{action:a,method:l.toLowerCase(),encType:i,formData:s,body:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Io(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uv(e,t,l,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return l?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:t&&_t(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function cv(e,t){if(e.id in t)return t[e.id];try{let l=await import(e.module);return t[e.id]=l,l}catch(l){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function dv(e,t,l){let a=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let n=await cv(s,l);return n.links?n.links():[]}return[]}));return pv(a.flat(1).filter(fv).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Mc(e,t,l,a,i,s){let n=(o,u)=>l[u]?o.route.id!==l[u].route.id:!0,r=(o,u)=>{var h;return l[u].pathname!==o.pathname||((h=l[u].route.path)==null?void 0:h.endsWith("*"))&&l[u].params["*"]!==o.params["*"]};return s==="assets"?t.filter((o,u)=>n(o,u)||r(o,u)):s==="data"?t.filter((o,u)=>{var c;let h=a.routes[o.route.id];if(!h||!h.hasLoader)return!1;if(n(o,u)||r(o,u))return!0;if(o.route.shouldRevalidate){let m=o.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((c=l[0])==null?void 0:c.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function mv(e,t,{includeHydrateFallback:l}={}){return hv(e.map(a=>{let i=t.routes[a.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),l&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function hv(e){return[...new Set(e)]}function gv(e){let t={},l=Object.keys(e).sort();for(let a of l)t[a]=e[a];return t}function pv(e,t){let l=new Set;return new Set(t),e.reduce((a,i)=>{let s=JSON.stringify(gv(i));return l.has(s)||(l.add(s),a.push({key:s,link:i})),a},[])}function Pm(){let e=x.useContext(va);return Io(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function bv(){let e=x.useContext(sn);return Io(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Po=x.createContext(void 0);Po.displayName="FrameworkContext";function eh(){let e=x.useContext(Po);return Io(e,"You must render this element inside a <HydratedRouter> element"),e}function vv(e,t){let l=x.useContext(Po),[a,i]=x.useState(!1),[s,n]=x.useState(!1),{onFocus:r,onBlur:o,onMouseEnter:u,onMouseLeave:h,onTouchStart:c}=t,m=x.useRef(null);x.useEffect(()=>{if(e==="render"&&n(!0),e==="viewport"){let S=d=>{d.forEach(f=>{n(f.isIntersecting)})},z=new IntersectionObserver(S,{threshold:.5});return m.current&&z.observe(m.current),()=>{z.disconnect()}}},[e]),x.useEffect(()=>{if(a){let S=setTimeout(()=>{n(!0)},100);return()=>{clearTimeout(S)}}},[a]);let b=()=>{i(!0)},w=()=>{i(!1),n(!1)};return l?e!=="intent"?[s,m,{}]:[s,m,{onFocus:_a(r,b),onBlur:_a(o,w),onMouseEnter:_a(u,b),onMouseLeave:_a(h,w),onTouchStart:_a(c,b)}]:[!1,m,{}]}function _a(e,t){return l=>{e&&e(l),l.defaultPrevented||t(l)}}function xv({page:e,...t}){let{router:l}=Pm(),a=x.useMemo(()=>qm(l.routes,e,l.basename),[l.routes,e,l.basename]);return a?x.createElement(wv,{page:e,matches:a,...t}):null}function yv(e){let{manifest:t,routeModules:l}=eh(),[a,i]=x.useState([]);return x.useEffect(()=>{let s=!1;return dv(e,t,l).then(n=>{s||i(n)}),()=>{s=!0}},[e,t,l]),a}function wv({page:e,matches:t,...l}){let a=nl(),{future:i,manifest:s,routeModules:n}=eh(),{basename:r}=Pm(),{loaderData:o,matches:u}=bv(),h=x.useMemo(()=>Mc(e,t,u,s,a,"data"),[e,t,u,s,a]),c=x.useMemo(()=>Mc(e,t,u,s,a,"assets"),[e,t,u,s,a]),m=x.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,z=!1;if(t.forEach(f=>{var v;let p=s.routes[f.route.id];!p||!p.hasLoader||(!h.some(T=>T.route.id===f.route.id)&&f.route.id in o&&((v=n[f.route.id])!=null&&v.shouldRevalidate)||p.hasClientLoader?z=!0:S.add(f.route.id))}),S.size===0)return[];let d=uv(e,r,i.unstable_trailingSlashAwareDataRequests,"data");return z&&S.size>0&&d.searchParams.set("_routes",t.filter(f=>S.has(f.route.id)).map(f=>f.route.id).join(",")),[d.pathname+d.search]},[r,i.unstable_trailingSlashAwareDataRequests,o,a,s,h,t,e,n]),b=x.useMemo(()=>mv(c,s),[c,s]),w=yv(c);return x.createElement(x.Fragment,null,m.map(S=>x.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...l})),b.map(S=>x.createElement("link",{key:S,rel:"modulepreload",href:S,...l})),w.map(({key:S,link:z})=>x.createElement("link",{key:S,nonce:l.nonce,...z,crossOrigin:z.crossOrigin??l.crossOrigin})))}function Sv(...e){return t=>{e.forEach(l=>{typeof l=="function"?l(t):l!=null&&(l.current=t)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.13.2")}catch{}function Tv({basename:e,children:t,unstable_useTransitions:l,window:a}){let i=x.useRef();i.current==null&&(i.current=ab({window:a,v5Compat:!0}));let s=i.current,[n,r]=x.useState({action:s.action,location:s.location}),o=x.useCallback(u=>{l===!1?r(u):x.startTransition(()=>r(u))},[l]);return x.useLayoutEffect(()=>s.listen(o),[s,o]),x.createElement(Pb,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:s,unstable_useTransitions:l})}var th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=x.forwardRef(function({onClick:t,discover:l="render",prefetch:a="none",relative:i,reloadDocument:s,replace:n,unstable_mask:r,state:o,target:u,to:h,preventScrollReset:c,viewTransition:m,unstable_defaultShouldRevalidate:b,...w},S){let{basename:z,navigator:d,unstable_useTransitions:f}=x.useContext(Ie),p=typeof h=="string"&&th.test(h),v=Xm(h,z);h=v.to;let T=Hb(h,{relative:i}),N=nl(),E=null;if(r){let Ye=Jo(r,[],N.unstable_mask?N.unstable_mask.pathname:"/",!0);z!=="/"&&(Ye.pathname=Ye.pathname==="/"?z:rt([z,Ye.pathname])),E=d.createHref(Ye)}let[A,O,C]=vv(a,w),ze=Nv(h,{replace:n,unstable_mask:r,state:o,target:u,preventScrollReset:c,relative:i,viewTransition:m,unstable_defaultShouldRevalidate:b,unstable_useTransitions:f});function lt(Ye){t&&t(Ye),Ye.defaultPrevented||ze(Ye)}let wa=!(v.isExternal||s),Ei=x.createElement("a",{...w,...C,href:(wa?E:void 0)||v.absoluteURL||T,onClick:wa?lt:t,ref:Sv(S,O),target:u,"data-discover":!p&&l==="render"?"true":void 0});return A&&!p?x.createElement(x.Fragment,null,Ei,x.createElement(xv,{page:T})):Ei});lh.displayName="Link";var Ev=x.forwardRef(function({"aria-current":t="page",caseSensitive:l=!1,className:a="",end:i=!1,style:s,to:n,viewTransition:r,children:o,...u},h){let c=Ti(n,{relative:u.relative}),m=nl(),b=x.useContext(sn),{navigator:w,basename:S}=x.useContext(Ie),z=b!=null&&Cv(c)&&r===!0,d=w.encodeLocation?w.encodeLocation(c).pathname:c.pathname,f=m.pathname,p=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(f=f.toLowerCase(),p=p?p.toLowerCase():null,d=d.toLowerCase()),p&&S&&(p=_t(p,S)||p);const v=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=f===d||!i&&f.startsWith(d)&&f.charAt(v)==="/",N=p!=null&&(p===d||!i&&p.startsWith(d)&&p.charAt(d.length)==="/"),E={isActive:T,isPending:N,isTransitioning:z},A=T?t:void 0,O;typeof a=="function"?O=a(E):O=[a,T?"active":null,N?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let C=typeof s=="function"?s(E):s;return x.createElement(lh,{...u,"aria-current":A,className:O,ref:h,style:C,to:n,viewTransition:r},typeof o=="function"?o(E):o)});Ev.displayName="NavLink";var jv=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:l,reloadDocument:a,replace:i,state:s,method:n=rs,action:r,onSubmit:o,relative:u,preventScrollReset:h,viewTransition:c,unstable_defaultShouldRevalidate:m,...b},w)=>{let{unstable_useTransitions:S}=x.useContext(Ie),z=Rv(),d=Dv(r,{relative:u}),f=n.toLowerCase()==="get"?"get":"post",p=typeof r=="string"&&th.test(r),v=T=>{if(o&&o(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,E=(N==null?void 0:N.getAttribute("formmethod"))||n,A=()=>z(N||T.currentTarget,{fetcherKey:t,method:E,navigate:l,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:c,unstable_defaultShouldRevalidate:m});S&&l!==!1?x.startTransition(()=>A()):A()};return x.createElement("form",{ref:w,method:f,action:d,onSubmit:a?o:v,...b,"data-discover":!p&&e==="render"?"true":void 0})});jv.displayName="Form";function Av(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ah(e){let t=x.useContext(va);return P(t,Av(e)),t}function Nv(e,{target:t,replace:l,unstable_mask:a,state:i,preventScrollReset:s,relative:n,viewTransition:r,unstable_defaultShouldRevalidate:o,unstable_useTransitions:u}={}){let h=Bb(),c=nl(),m=Ti(e,{relative:n});return x.useCallback(b=>{if(sv(b,t)){b.preventDefault();let w=l!==void 0?l:ui(c)===ui(m),S=()=>h(e,{replace:w,unstable_mask:a,state:i,preventScrollReset:s,relative:n,viewTransition:r,unstable_defaultShouldRevalidate:o});u?x.startTransition(()=>S()):S()}},[c,h,m,l,a,i,t,e,s,n,r,o,u])}var _v=0,Ov=()=>`__${String(++_v)}__`;function Rv(){let{router:e}=ah("useSubmit"),{basename:t}=x.useContext(Ie),l=$b(),a=e.fetch,i=e.navigate;return x.useCallback(async(s,n={})=>{let{action:r,method:o,encType:u,formData:h,body:c}=ov(s,t);if(n.navigate===!1){let m=n.fetcherKey||Ov();await a(m,l,n.action||r,{unstable_defaultShouldRevalidate:n.unstable_defaultShouldRevalidate,preventScrollReset:n.preventScrollReset,formData:h,body:c,formMethod:n.method||o,formEncType:n.encType||u,flushSync:n.flushSync})}else await i(n.action||r,{unstable_defaultShouldRevalidate:n.unstable_defaultShouldRevalidate,preventScrollReset:n.preventScrollReset,formData:h,body:c,formMethod:n.method||o,formEncType:n.encType||u,replace:n.replace,state:n.state,fromRouteId:l,flushSync:n.flushSync,viewTransition:n.viewTransition})},[a,i,t,l])}function Dv(e,{relative:t}={}){let{basename:l}=x.useContext(Ie),a=x.useContext(Rt);P(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),s={...Ti(e||".",{relative:t})},n=nl();if(e==null){s.search=n.search;let r=new URLSearchParams(s.search),o=r.getAll("index");if(o.some(h=>h==="")){r.delete("index"),o.filter(c=>c).forEach(c=>r.append("index",c));let h=r.toString();s.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(s.pathname=s.pathname==="/"?l:rt([l,s.pathname])),ui(s)}function Cv(e,{relative:t}={}){let l=x.useContext(Vm);P(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ah("useViewTransitionState"),i=Ti(e,{relative:t});if(!l.isTransitioning)return!1;let s=_t(l.currentLocation.pathname,a)||l.currentLocation.pathname,n=_t(l.nextLocation.pathname,a)||l.nextLocation.pathname;return Bs(i.pathname,n)!=null||Bs(i.pathname,s)!=null}const Mv=`
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
							<a href="#" class="table-cell align-middle" data-disabled="spa">
								<img src="/assets/logo.png" alt="" class="object-contain duration-500">
							</a>
						</div>
						<ul class="lg:flex flex-wrap navbar-nav">
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Home</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">About</span>
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Pages</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
									</li>
									
									
									
									
								</ul>
								
							
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Destinations</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Tours</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Blogs</span>
									<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
								</a>
								
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="#" data-disabled="spa">
									<span class="inline-block">Contact</span>
								</a>
							</li>
						
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Nusa Penida is a stunning island located just southeast of Bali</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Deogyusan  mountain. Its highest peak is 1,614 m. above sea level</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">The bridge offers panoramic views of Tokyo Tower, the skyline.</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Nusa Penida is a stunning island located just southeast of Bali</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">Deogyusan  mountain. Its highest peak is 1,614 m. above sea level</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
								<div class="w-full text-xl/[1.3] font-title font-medium">
														<a href="tour-detail.html" class="text-primary hover:text-citrusyellow duration-500">The bridge offers panoramic views of Tokyo Tower, the skyline.</a>
													</div>
												</div>
												<div class="flex itmes-center justify-between">
													<div class="trv-book">
														<a href="tour-detail.html" class="site-button outline">Call Now</a>
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
									<p class="sm:pr-12.5 mb-4 text-base text-white/50">405, HN More Complex, NDA Road, Shivane, Pune - 411023<br/>Email: kabeerrtravelzhub@gmail.com<br/>Phone: +91 9503953737</p>
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
											<a class="black text-paleaqua font-semibold xl:text-lg text-sm font-base" href="mailto:kabeerrtravelzhub@gmail.com">kabeerrtravelzhub@gmail.com</a>
										</li>
										<li class="relative flex items-center">
											<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
												<i class="fa-solid fa-house text-xl text-white"></i>
											</div>
											<span class="black text-paleaqua font-semibold xl:text-lg text-sm font-base">405, HN More Complex, NDA Road, Shivane, Pune - 411023</span>
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
							<p class="copyrights-text text-center text-sm font-semibold"> <span class="current-year">2026</span> <span class="inline-block text-citrusyellow uppercase text-center text-sm font-semibold">Kabeerr Travelz Hub</span> All Rights Reserved.</p>
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
`,kv=["/assets/js/jquery-3.7.1.min.js","/assets/vendor/gsap/gsap.min.js","/assets/vendor/gsap/ScrollSmoother.js","/assets/vendor/gsap/ScrollTrigger.min.js","/assets/vendor/swiper/swiper-bundle.min.js","/assets/vendor/masonry/masonry-4.2.2.js","/assets/vendor/masonry/isotope.pkgd.min.js","/assets/vendor/flatpickr/js/flatpickr.js","/assets/vendor/magnific-popup/magnific-popup.js","/assets/vendor/nouislider/nouislider.min.js","/assets/vendor/group-slide/group-loop.js","/assets/vendor/xmenu/xmenu.js","/assets/vendor/lightgallery/dist/lightgallery.min.js","/assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js","/assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js","/assets/js/imagesloaded.pkgd.min.js","/assets/js/theia-sticky-sidebar.js","/assets/js/owl.carousel.min.js","/assets/js/isotope.pkgd.min.js","/assets/js/dz.carousel.js","/assets/js/lc_lightbox.lite.js","/assets/js/dz.ajax.js","/assets/js/animation.js","/assets/js/custom.js"],Uv=e=>new Promise((t,l)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const a=document.createElement("script");a.src=e,a.async=!1,a.onload=()=>t(),a.onerror=()=>l(new Error(`Failed to load ${e}`)),document.body.appendChild(a)});function Hv(){const[e,t]=x.useState(""),[l,a]=x.useState(!0),[i,s]=x.useState("");x.useEffect(()=>{try{const r=new DOMParser().parseFromString(Mv,"text/html"),o=r.body.cloneNode(!0),u=o.querySelector('[class*="bg-paleaqua"][class*="pb-40"]');if(u){let c=u.nextSibling;for(;c;){const m=c.nextSibling;c.remove(),c=m}}const h=o.querySelector(".loading-area");h&&h.remove(),document.body.id=r.body.id||"",document.body.className=r.body.className||"",o.querySelectorAll('a[href$=".html"]').forEach(c=>{const m=c.getAttribute("href");m==="about-1.html"?c.href="/about":m==="destination-detail.html"?c.href="/destinations":m==="tour-detail.html"?c.href="/tours":m==="blog-detail.html"?c.href="/blogs":m==="contact.html"?c.href="/contact":m==="services.html"?c.href="/pages":(c.setAttribute("data-disabled","spa"),c.href="#"),c.removeAttribute("data-disabled")}),o.querySelectorAll('a[href="#"]').forEach(c=>{const m=c.querySelector("span");if(m){const b=m.textContent.toLowerCase();b==="home"?c.href="/":b==="about"?c.href="/about":b==="pages"?c.href="/pages":b==="destinations"?c.href="/destinations":b==="tours"?c.href="/tours":b==="blogs"?c.href="/blogs":b==="contact"&&(c.href="/contact"),c.removeAttribute("data-disabled")}}),t(o.innerHTML)}catch(r){console.error(r),s("Template failed to load")}finally{a(!1)}},[]),x.useEffect(()=>{if(!e)return;let r=!1;return(async()=>{for(const u of kv){if(r)break;try{await Uv(u)}catch(h){console.warn(h),s(`Missing asset: ${u}`);break}}const o=document.querySelector(".loading-area");o&&o.remove(),!r&&window.Travlla&&typeof window.Travlla.init=="function"&&window.Travlla.init(),document.querySelectorAll('a[data-disabled="spa"]').forEach(u=>u.addEventListener("click",h=>h.preventDefault()))})(),()=>{r=!0}},[e]);const n=()=>{{alert("WhatsApp number missing. Add VITE_WHATSAPP_NUMBER to your .env file.");return}};return g.jsxs("div",{className:"relative",children:[l&&g.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-black",children:"Loading…"}),i&&!l&&g.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-red-700",children:i}),!l&&!i&&g.jsx("div",{className:"template-body",dangerouslySetInnerHTML:{__html:e}}),g.jsxs("button",{type:"button",onClick:n,className:"fixed bottom-6 right-6 z-[1000] bg-[#25D366] text-white shadow-2xl rounded-full h-14 px-5 flex items-center gap-3 hover:scale-105 transition-all duration-300","aria-label":"Chat on WhatsApp",children:[g.jsx("span",{className:"text-xl",children:"?"}),g.jsx("span",{className:"font-semibold",children:"Chat on WhatsApp"})]})]})}const Bv=`
<header class="site-header sticky-header absolute lg:left-8.75 lg:right-8.75 lg:top-8.75 left-0 right-0 top-0 duration-500 z-999 [.site-header.is-fixed]:fixed [.site-header.is-fixed]:animate-header-scroll-animation [.site-header.is-fixed]:bg-primary [.site-header.is-fixed]:rounded-b-3xl [.site-header.is-fixed]:top-0">
	<div class="main-bar-wraper">
		<div class="w-full lg:min-h-30 min-h-20 lg:ps-8.75 px-4 lg:pe-13.75 duration-500 rounded-5xl flex items-center justify-between">
			<div class="flex relative w-full">
				<div class="flex items-center relative z-9 h-20 lg:w-44 w-30">
					<a href="/" class="table-cell align-middle">
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
						<a href="/" class="table-cell align-middle">
							<img src="/assets/logo.png" alt="" class="object-contain duration-500">
						</a>
					</div>
					<ul class="lg:flex flex-wrap navbar-nav">
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/">
								<span class="inline-block">Home</span>
								<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/about">
								<span class="inline-block">About</span>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/pages">
								<span class="inline-block">Pages</span>
								<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
							</a>
							<ul class="lg:absolute lg:top-full lg:left-0 lg:bg-black lg:text-white lg:shadow-lg lg:min-w-48 lg:py-2 lg:hidden lg:group-hover:block lg:z-50">
								<li><a href="/pages" class="block px-4 py-2 hover:bg-gray-700">Pages</a></li>
								<li><a href="/pages#faq" class="block px-4 py-2 hover:bg-gray-700">Faq</a></li>
								<li><a href="/pages#pricing" class="block px-4 py-2 hover:bg-gray-700">Pricing</a></li>
								<li><a href="/pages#error" class="block px-4 py-2 hover:bg-gray-700">Error-404</a></li>
								<li><a href="/pages#compare" class="block px-4 py-2 hover:bg-gray-700">Compare</a></li>
							</ul>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/destinations">
								<span class="inline-block">Destinations</span>
								<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/tours">
								<span class="inline-block">Tours</span>
								<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/blogs">
								<span class="inline-block">Blogs</span>
								<i class="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-black text-white float-end"></i>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/contact">
								<span class="inline-block">Contact</span>
							</a>
						</li>
					</ul>
					<div class="lg:hidden block max-lg:p-5 text-center mt-auto border-t border-gray-200">
						<a href="#" class="block w-full bg-primary text-white py-2.5 rounded-lg font-semibold mb-3 hover:bg-opacity-90">Login</a>
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
`;function xa(){return x.useEffect(()=>{const e=document.querySelector(".site-header");if(!e)return;const t=()=>{window.scrollY>100?e.classList.add("is-fixed"):e.classList.remove("is-fixed")};return window.addEventListener("scroll",t),t(),window.Travlla&&typeof window.Travlla.initNavbar=="function"&&window.Travlla.initNavbar(),()=>{window.removeEventListener("scroll",t)}},[]),g.jsx("div",{dangerouslySetInnerHTML:{__html:Bv}})}const qv=`
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
							<a href="/"><img src="/assets/logo.png" alt="logo" width="193" height="81" loading="lazy"></a>
						</div>
						<p class="sm:pr-12.5 mb-4 text-base text-white/50">405, HN More Complex, NDA Road, Shivane, Pune - 411023<br/>Email: kabeerrtravelzhub@gmail.com<br/>Phone: +91 9503953737</p>
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
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/about">About us</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages#faq">FAQ's</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Services</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Team</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/blogs">News & Articles</a></li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
					<div class="mb-10">
						<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Destinations</h3>
						<ul>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Tokyo</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">France</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Dubai</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Kenya</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Vietnam</a></li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
					<div class="mb-10">
						<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Legal</h3>
						<ul>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Terms & Condition</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Privacy Policy</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/contact">Contact</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Careers</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Help</a></li>
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
								<a class="black text-paleaqua font-semibold xl:text-lg text-sm font-base" href="mailto:kabeerrtravelzhub@gmail.com">kabeerrtravelzhub@gmail.com</a>
							</li>
							<li class="relative flex items-center">
								<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
									<i class="fa-solid fa-house text-xl text-white"></i>
								</div>
								<span class="black text-paleaqua font-semibold xl:text-lg text-sm font-base">405, HN More Complex, NDA Road, Shivane, Pune - 411023</span>
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
				<p class="copyrights-text text-center text-sm font-semibold"> <span class="current-year">2026</span> <span class="inline-block text-citrusyellow uppercase text-center text-sm font-semibold">Kabeerr Travelz Hub</span> All Rights Reserved.</p>
			</div>
		</div>
	</div>
</footer>
<!-- FOOTER END -->
`;function ya(){return x.useEffect(()=>{window.Travlla&&typeof window.Travlla.initFooter=="function"&&window.Travlla.initFooter()},[]),g.jsx("div",{dangerouslySetInnerHTML:{__html:qv}})}function Lv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Us"}),g.jsx("p",{className:"text-lg text-gray-700 mb-6",children:"Welcome to Kabeer Travelz Hub. We are dedicated to providing exceptional travel experiences and making your journeys unforgettable."}),g.jsx("p",{className:"text-gray-600",children:"Our team of experienced travel professionals works tirelessly to curate the best destinations, accommodations, and activities for our clients. With years of expertise in the travel industry, we ensure every trip is tailored to your preferences and budget."})]})})}),g.jsx(ya,{})]})}function Yv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Our Pages"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"FAQ"}),g.jsx("p",{className:"text-gray-600",children:"Find answers to common questions about our services."})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Pricing"}),g.jsx("p",{className:"text-gray-600",children:"Explore our competitive pricing plans."})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Error 404"}),g.jsx("p",{className:"text-gray-600",children:"Custom 404 error page for better user experience."})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Compare"}),g.jsx("p",{className:"text-gray-600",children:"Compare different travel packages and options."})]})]})]})})}),g.jsx(ya,{})]})}function Gv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsxs("div",{className:"container",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-12",children:"Explore Destinations"}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[g.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/destinations/style1/pic1.jpg",alt:"Destination 1",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Beautiful Beach"}),g.jsx("p",{className:"text-gray-600",children:"Relax on pristine beaches with crystal clear waters."})]})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/destinations/style1/pic2.jpg",alt:"Destination 2",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Mountain Adventure"}),g.jsx("p",{className:"text-gray-600",children:"Experience thrilling mountain hikes and scenic views."})]})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/destinations/style1/pic3.jpg",alt:"Destination 3",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"City Exploration"}),g.jsx("p",{className:"text-gray-600",children:"Discover vibrant cities with rich culture and history."})]})]})]})]})}),g.jsx(ya,{})]})}function Qv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsxs("div",{className:"container",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-12",children:"Our Tours"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[g.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Adventure Tour"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Experience thrilling adventures in exotic locations."}),g.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4",children:[g.jsx("li",{children:"Hiking and trekking"}),g.jsx("li",{children:"Wildlife safari"}),g.jsx("li",{children:"River rafting"})]}),g.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",children:"Book Now"})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Cultural Tour"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Immerse yourself in rich cultural experiences."}),g.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4",children:[g.jsx("li",{children:"Historical sites"}),g.jsx("li",{children:"Local cuisine"}),g.jsx("li",{children:"Traditional performances"})]}),g.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",children:"Book Now"})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Relaxation Tour"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Unwind in luxurious resorts and spas."}),g.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4",children:[g.jsx("li",{children:"Beach resorts"}),g.jsx("li",{children:"Spa treatments"}),g.jsx("li",{children:"Yoga sessions"})]}),g.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",children:"Book Now"})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Family Tour"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Create lasting memories with your family."}),g.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4",children:[g.jsx("li",{children:"Family-friendly activities"}),g.jsx("li",{children:"Educational experiences"}),g.jsx("li",{children:"Safe adventures"})]}),g.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",children:"Book Now"})]})]})]})}),g.jsx(ya,{})]})}function Xv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsxs("div",{className:"container",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-12",children:"Travel Blog"}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[g.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic1.jpg",alt:"Blog 1",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Top 10 Beach Destinations"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Discover the most beautiful beaches around the world..."}),g.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]}),g.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic2.jpg",alt:"Blog 2",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Adventure Travel Tips"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Essential tips for your next adventure trip..."}),g.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]}),g.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[g.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic3.jpg",alt:"Blog 3",className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Cultural Experiences"}),g.jsx("p",{className:"text-gray-600 mb-4",children:"Immerse yourself in local cultures and traditions..."}),g.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]})]})]})}),g.jsx(ya,{})]})}function Zv(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),g.jsxs(g.Fragment,{children:[g.jsx(xa,{}),g.jsx("main",{className:"py-20",children:g.jsxs("div",{className:"container",children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-16",children:"Contact Us"}),g.jsxs("div",{className:"grid grid-cols-2 gap-12 items-start",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-900",children:"Send Us a Message"}),g.jsxs("form",{className:"bg-white p-8 rounded-lg shadow-md space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Name"}),g.jsx("input",{type:"text",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"Your Name"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Email"}),g.jsx("input",{type:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"your@email.com"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Subject"}),g.jsx("input",{type:"text",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"Message Subject"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Message"}),g.jsx("textarea",{className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-40 resize-none",placeholder:"Your message here..."})]}),g.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300",children:"Send Message"})]})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-semibold mb-8 text-gray-900",children:"Contact Information"}),g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0",children:g.jsx("i",{className:"fa-solid fa-phone text-xl text-blue-600"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Phone"}),g.jsx("a",{href:"tel:+919503953737",className:"text-gray-600 hover:text-blue-600 transition duration-300 text-base",children:"+91 9503953737"})]})]}),g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0",children:g.jsx("i",{className:"fa-solid fa-envelope text-xl text-blue-600"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Email"}),g.jsx("a",{href:"mailto:kabeerrtravelzhub@gmail.com",className:"text-gray-600 hover:text-blue-600 transition duration-300 text-base",children:"kabeerrtravelzhub@gmail.com"})]})]}),g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0",children:g.jsx("i",{className:"fa-solid fa-house text-xl text-blue-600"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Address"}),g.jsx("p",{className:"text-gray-600 text-base leading-relaxed",children:"405, HN More Complex, NDA Road, Shivane, Pune - 411023"})]})]}),g.jsxs("div",{className:"mt-10",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Follow Us"}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("a",{href:"https://www.facebook.com/dexignzone",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300",children:g.jsx("i",{className:"fab fa-facebook-f"})}),g.jsx("a",{href:"https://twitter.com/dexignzones",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300",children:g.jsx("i",{className:"fab fa-twitter"})}),g.jsx("a",{href:"https://www.linkedin.com/showcase/3686700/admin/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300",children:g.jsx("i",{className:"fab fa-linkedin-in"})}),g.jsx("a",{href:"https://www.instagram.com/dexignzone/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300",children:g.jsx("i",{className:"fab fa-instagram"})})]})]})]})]})]})]})}),g.jsx(ya,{})]})}function Vv(){return g.jsx(Tv,{children:g.jsx("div",{className:"app-shell",children:g.jsx("main",{className:"flex-1 pt-4",children:g.jsxs(ev,{children:[g.jsx(Ct,{path:"/",element:g.jsx(Hv,{})}),g.jsx(Ct,{path:"/about",element:g.jsx(Lv,{})}),g.jsx(Ct,{path:"/pages",element:g.jsx(Yv,{})}),g.jsx(Ct,{path:"/destinations",element:g.jsx(Gv,{})}),g.jsx(Ct,{path:"/tours",element:g.jsx(Qv,{})}),g.jsx(Ct,{path:"/blogs",element:g.jsx(Xv,{})}),g.jsx(Ct,{path:"/contact",element:g.jsx(Zv,{})})]})})})})}lb.createRoot(document.getElementById("root")).render(g.jsx(Sh.StrictMode,{children:g.jsx(Vv,{})}));
