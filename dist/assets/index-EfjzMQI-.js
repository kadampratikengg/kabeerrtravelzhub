(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},Bs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=Symbol.for("react.transitional.element"),rh=Symbol.for("react.fragment");function Bc(e,t,l){var a=null;if(l!==void 0&&(a=""+l),t.key!==void 0&&(a=""+t.key),"key"in t){l={};for(var i in t)i!=="key"&&(l[i]=t[i])}else l=t;return t=l.ref,{$$typeof:nh,type:e,key:a,ref:t!==void 0?t:null,props:l}}Bs.Fragment=rh;Bs.jsx=Bc;Bs.jsxs=Bc;qc.exports=Bs;var u=qc.exports,Lc={exports:{}},R={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.transitional.element"),oh=Symbol.for("react.portal"),uh=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),dh=Symbol.for("react.consumer"),mh=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),gh=Symbol.for("react.memo"),Yc=Symbol.for("react.lazy"),vh=Symbol.for("react.activity"),eu=Symbol.iterator;function bh(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Xc={};function ua(e,t,l){this.props=e,this.context=t,this.refs=Xc,this.updater=l||Gc}ua.prototype.isReactComponent={};ua.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ua.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zc(){}Zc.prototype=ua.prototype;function Kr(e,t,l){this.props=e,this.context=t,this.refs=Xc,this.updater=l||Gc}var Jr=Kr.prototype=new Zc;Jr.constructor=Kr;Qc(Jr,ua.prototype);Jr.isPureReactComponent=!0;var tu=Array.isArray;function Jn(){}var W={H:null,A:null,T:null,S:null},Vc=Object.prototype.hasOwnProperty;function $r(e,t,l){var a=l.ref;return{$$typeof:Vr,type:e,key:t,ref:a!==void 0?a:null,props:l}}function xh(e,t){return $r(e.type,t,e.props)}function Wr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function yh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var lu=/\/+/g;function on(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yh(""+e.key):t.toString(36)}function wh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Jn,Jn):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ol(e,t,l,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(s){case"bigint":case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case Vr:case oh:n=!0;break;case Yc:return n=e._init,Ol(n(e._payload),t,l,a,i)}}if(n)return i=i(e),n=a===""?"."+on(e,0):a,tu(i)?(l="",n!=null&&(l=n.replace(lu,"$&/")+"/"),Ol(i,t,l,"",function(c){return c})):i!=null&&(Wr(i)&&(i=xh(i,l+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(lu,"$&/")+"/")+n)),t.push(i)),1;n=0;var r=a===""?".":a+":";if(tu(e))for(var o=0;o<e.length;o++)a=e[o],s=r+on(a,o),n+=Ol(a,t,l,s,i);else if(o=bh(e),typeof o=="function")for(e=o.call(e),o=0;!(a=e.next()).done;)a=a.value,s=r+on(a,o++),n+=Ol(a,t,l,s,i);else if(s==="object"){if(typeof e.then=="function")return Ol(wh(e),t,l,a,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return n}function _i(e,t,l){if(e==null)return e;var a=[],i=0;return Ol(e,a,"","",function(s){return t.call(l,s,i++)}),a}function Sh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zh={map:_i,forEach:function(e,t,l){_i(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return _i(e,function(){t++}),t},toArray:function(e){return _i(e,function(t){return t})||[]},only:function(e){if(!Wr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Activity=vh;R.Children=zh;R.Component=ua;R.Fragment=uh;R.Profiler=fh;R.PureComponent=Kr;R.StrictMode=ch;R.Suspense=ph;R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W;R.__COMPILER_RUNTIME={__proto__:null,c:function(e){return W.H.useMemoCache(e)}};R.cache=function(e){return function(){return e.apply(null,arguments)}};R.cacheSignal=function(){return null};R.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Qc({},e.props),i=e.key;if(t!=null)for(s in t.key!==void 0&&(i=""+t.key),t)!Vc.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(a[s]=t[s]);var s=arguments.length-2;if(s===1)a.children=l;else if(1<s){for(var n=Array(s),r=0;r<s;r++)n[r]=arguments[r+2];a.children=n}return $r(e.type,i,a)};R.createContext=function(e){return e={$$typeof:mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:dh,_context:e},e};R.createElement=function(e,t,l){var a,i={},s=null;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)Vc.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=t[a]);var n=arguments.length-2;if(n===1)i.children=l;else if(1<n){for(var r=Array(n),o=0;o<n;o++)r[o]=arguments[o+2];i.children=r}if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return $r(e,s,i)};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:hh,render:e}};R.isValidElement=Wr;R.lazy=function(e){return{$$typeof:Yc,_payload:{_status:-1,_result:e},_init:Sh}};R.memo=function(e,t){return{$$typeof:gh,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=W.T,l={};W.T=l;try{var a=e(),i=W.S;i!==null&&i(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Jn,au)}catch(s){au(s)}finally{t!==null&&l.types!==null&&(t.types=l.types),W.T=t}};R.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()};R.use=function(e){return W.H.use(e)};R.useActionState=function(e,t,l){return W.H.useActionState(e,t,l)};R.useCallback=function(e,t){return W.H.useCallback(e,t)};R.useContext=function(e){return W.H.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e,t){return W.H.useDeferredValue(e,t)};R.useEffect=function(e,t){return W.H.useEffect(e,t)};R.useEffectEvent=function(e){return W.H.useEffectEvent(e)};R.useId=function(){return W.H.useId()};R.useImperativeHandle=function(e,t,l){return W.H.useImperativeHandle(e,t,l)};R.useInsertionEffect=function(e,t){return W.H.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return W.H.useLayoutEffect(e,t)};R.useMemo=function(e,t){return W.H.useMemo(e,t)};R.useOptimistic=function(e,t){return W.H.useOptimistic(e,t)};R.useReducer=function(e,t,l){return W.H.useReducer(e,t,l)};R.useRef=function(e){return W.H.useRef(e)};R.useState=function(e){return W.H.useState(e)};R.useSyncExternalStore=function(e,t,l){return W.H.useSyncExternalStore(e,t,l)};R.useTransition=function(){return W.H.useTransition()};R.version="19.2.4";Lc.exports=R;var x=Lc.exports;const Th=Hc(x);var Kc={exports:{}},Ls={},Jc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,k){var C=j.length;j.push(k);e:for(;0<C;){var le=C-1>>>1,fe=j[le];if(0<i(fe,k))j[le]=k,j[C]=fe,C=le;else break e}}function l(j){return j.length===0?null:j[0]}function a(j){if(j.length===0)return null;var k=j[0],C=j.pop();if(C!==k){j[0]=C;e:for(var le=0,fe=j.length,ji=fe>>>1;le<ji;){var Ni=2*(le+1)-1,rn=j[Ni],rl=Ni+1,Ai=j[rl];if(0>i(rn,C))rl<fe&&0>i(Ai,rn)?(j[le]=Ai,j[rl]=C,le=rl):(j[le]=rn,j[Ni]=C,le=Ni);else if(rl<fe&&0>i(Ai,C))j[le]=Ai,j[rl]=C,le=rl;else break e}}return k}function i(j,k){var C=j.sortIndex-k.sortIndex;return C!==0?C:j.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var n=Date,r=n.now();e.unstable_now=function(){return n.now()-r}}var o=[],c=[],p=1,f=null,h=3,v=!1,w=!1,S=!1,z=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function b(j){for(var k=l(c);k!==null;){if(k.callback===null)a(c);else if(k.startTime<=j)a(c),k.sortIndex=k.expirationTime,t(o,k);else break;k=l(c)}}function T(j){if(S=!1,b(j),!w)if(l(o)!==null)w=!0,A||(A=!0,lt());else{var k=l(c);k!==null&&Ye(T,k.startTime-j)}}var A=!1,E=-1,N=5,O=-1;function D(){return z?!0:!(e.unstable_now()-O<N)}function ze(){if(z=!1,A){var j=e.unstable_now();O=j;var k=!0;try{e:{w=!1,S&&(S=!1,d(E),E=-1),v=!0;var C=h;try{t:{for(b(j),f=l(o);f!==null&&!(f.expirationTime>j&&D());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var fe=le(f.expirationTime<=j);if(j=e.unstable_now(),typeof fe=="function"){f.callback=fe,b(j),k=!0;break t}f===l(o)&&a(o),b(j)}else a(o);f=l(o)}if(f!==null)k=!0;else{var ji=l(c);ji!==null&&Ye(T,ji.startTime-j),k=!1}}break e}finally{f=null,h=C,v=!1}k=void 0}}finally{k?lt():A=!1}}}var lt;if(typeof g=="function")lt=function(){g(ze)};else if(typeof MessageChannel<"u"){var wa=new MessageChannel,Ei=wa.port2;wa.port1.onmessage=ze,lt=function(){Ei.postMessage(null)}}else lt=function(){m(ze,0)};function Ye(j,k){E=m(function(){j(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var C=h;h=k;try{return j()}finally{h=C}},e.unstable_requestPaint=function(){z=!0},e.unstable_runWithPriority=function(j,k){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var C=h;h=j;try{return k()}finally{h=C}},e.unstable_scheduleCallback=function(j,k,C){var le=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?le+C:le):C=le,j){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=C+fe,j={id:p++,callback:k,priorityLevel:j,startTime:C,expirationTime:fe,sortIndex:-1},C>le?(j.sortIndex=C,t(c,j),l(o)===null&&j===l(c)&&(S?(d(E),E=-1):S=!0,Ye(T,C-le))):(j.sortIndex=fe,t(o,j),w||v||(w=!0,A||(A=!0,lt()))),j},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(j){var k=h;return function(){var C=h;h=k;try{return j.apply(this,arguments)}finally{h=C}}}})($c);Jc.exports=$c;var Eh=Jc.exports,Wc={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=x;function Fc(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mt(){}var we={d:{f:Mt,r:function(){throw Error(Fc(522))},D:Mt,C:Mt,L:Mt,m:Mt,X:Mt,S:Mt,M:Mt},p:0,findDOMNode:null},Nh=Symbol.for("react.portal");function Ah(e,t,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nh,key:a==null?null:""+a,children:e,containerInfo:t,implementation:l}}var ka=jh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ys(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Se.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Fc(299));return Ah(e,t,null,l)};Se.flushSync=function(e){var t=ka.T,l=we.p;try{if(ka.T=null,we.p=2,e)return e()}finally{ka.T=t,we.p=l,we.d.f()}};Se.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Se.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Se.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,a=Ys(l,t.crossOrigin),i=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:s}):l==="script"&&we.d.X(e,{crossOrigin:a,integrity:i,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Se.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Ys(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Se.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,a=Ys(l,t.crossOrigin);we.d.L(e,l,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Se.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Ys(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Se.requestFormReset=function(e){we.d.r(e)};Se.unstable_batchedUpdates=function(e,t){return e(t)};Se.useFormState=function(e,t,l){return ka.H.useFormState(e,t,l)};Se.useFormStatus=function(){return ka.H.useHostTransitionStatus()};Se.version="19.2.4";function Ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic)}catch(e){console.error(e)}}Ic(),Wc.exports=Se;var _h=Wc.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=Eh,Pc=x,Oh=_h;function y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ci(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lf(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(ci(e)!==e)throw Error(y(188))}function Rh(e){var t=e.alternate;if(!t){if(t=ci(e),t===null)throw Error(y(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===l)return iu(i),e;if(s===a)return iu(i),t;s=s.sibling}throw Error(y(188))}if(l.return!==a.return)l=i,a=s;else{for(var n=!1,r=i.child;r;){if(r===l){n=!0,l=i,a=s;break}if(r===a){n=!0,a=i,l=s;break}r=r.sibling}if(!n){for(r=s.child;r;){if(r===l){n=!0,l=s,a=i;break}if(r===a){n=!0,a=s,l=i;break}r=r.sibling}if(!n)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?e:t}function af(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=af(e),t!==null)return t;e=e.sibling}return null}var F=Object.assign,Mh=Symbol.for("react.element"),Oi=Symbol.for("react.transitional.element"),Oa=Symbol.for("react.portal"),Dl=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),$n=Symbol.for("react.profiler"),nf=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Fr=Symbol.for("react.forward_ref"),Wn=Symbol.for("react.suspense"),Fn=Symbol.for("react.suspense_list"),Ir=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),In=Symbol.for("react.activity"),Dh=Symbol.for("react.memo_cache_sentinel"),su=Symbol.iterator;function Sa(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var Ch=Symbol.for("react.client.reference");function Pn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ch?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dl:return"Fragment";case $n:return"Profiler";case sf:return"StrictMode";case Wn:return"Suspense";case Fn:return"SuspenseList";case In:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Oa:return"Portal";case bt:return e.displayName||"Context";case nf:return(e._context.displayName||"Context")+".Consumer";case Fr:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ir:return t=e.displayName||null,t!==null?t:Pn(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Pn(e(t))}catch{}}return null}var Ra=Array.isArray,_=Pc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Oh.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ml={pending:!1,data:null,method:null,action:null},er=[],Cl=-1;function ut(e){return{current:e}}function he(e){0>Cl||(e.current=er[Cl],er[Cl]=null,Cl--)}function K(e,t){Cl++,er[Cl]=e.current,e.current=t}var nt=ut(null),$a=ut(null),Zt=ut(null),us=ut(null);function cs(e,t){switch(K(Zt,t),K($a,e),K(nt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fc(t),e=jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}he(nt),K(nt,e)}function Il(){he(nt),he($a),he(Zt)}function tr(e){e.memoizedState!==null&&K(us,e);var t=nt.current,l=jm(t,e.type);t!==l&&(K($a,e),K(nt,l))}function fs(e){$a.current===e&&(he(nt),he($a)),us.current===e&&(he(us),ni._currentValue=ml)}var un,nu;function ul(e){if(un===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);un=t&&t[1]||"",nu=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+un+e+nu}var cn=!1;function fn(e,t){if(!e||cn)return"";cn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(v){var h=v}Reflect.construct(e,[],f)}else{try{f.call()}catch(v){h=v}e.call(f.prototype)}}else{try{throw Error()}catch(v){h=v}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(v){if(v&&h&&typeof v.stack=="string")return[v.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),n=s[0],r=s[1];if(n&&r){var o=n.split(`
`),c=r.split(`
`);for(i=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(a===o.length||i===c.length)for(a=o.length-1,i=c.length-1;1<=a&&0<=i&&o[a]!==c[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==c[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==c[i]){var p=`
`+o[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=i);break}}}finally{cn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?ul(l):""}function kh(e,t){switch(e.tag){case 26:case 27:case 5:return ul(e.type);case 16:return ul("Lazy");case 13:return e.child!==t&&t!==null?ul("Suspense Fallback"):ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return ul("Activity");default:return""}}function ru(e){try{var t="",l=null;do t+=kh(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var lr=Object.prototype.hasOwnProperty,Pr=ce.unstable_scheduleCallback,dn=ce.unstable_cancelCallback,Uh=ce.unstable_shouldYield,Hh=ce.unstable_requestPaint,ke=ce.unstable_now,qh=ce.unstable_getCurrentPriorityLevel,rf=ce.unstable_ImmediatePriority,of=ce.unstable_UserBlockingPriority,ds=ce.unstable_NormalPriority,Bh=ce.unstable_LowPriority,uf=ce.unstable_IdlePriority,Lh=ce.log,Yh=ce.unstable_setDisableYieldValue,fi=null,Ue=null;function Lt(e){if(typeof Lh=="function"&&Yh(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(fi,e)}catch{}}var He=Math.clz32?Math.clz32:Xh,Gh=Math.log,Qh=Math.LN2;function Xh(e){return e>>>=0,e===0?32:31-(Gh(e)/Qh|0)|0}var Ri=256,Mi=262144,Di=4194304;function cl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gs(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,n=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~s,a!==0?i=cl(a):(n&=r,n!==0?i=cl(n):l||(l=r&~e,l!==0&&(i=cl(l))))):(r=a&~s,r!==0?i=cl(r):n!==0?i=cl(n):l||(l=a&~e,l!==0&&(i=cl(l)))),i===0?0:t!==0&&t!==i&&!(t&s)&&(s=i&-i,l=t&-t,s>=l||s===32&&(l&4194048)!==0)?t:i}function di(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(){var e=Di;return Di<<=1,!(Di&62914560)&&(Di=4194304),e}function mn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function mi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vh(e,t,l,a,i,s){var n=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var r=e.entanglements,o=e.expirationTimes,c=e.hiddenUpdates;for(l=n&~l;0<l;){var p=31-He(l),f=1<<p;r[p]=0,o[p]=-1;var h=c[p];if(h!==null)for(c[p]=null,p=0;p<h.length;p++){var v=h[p];v!==null&&(v.lane&=-536870913)}l&=~f}a!==0&&ff(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(n&~t))}function ff(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-He(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function df(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-He(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function mf(e,t){var l=t&-t;return l=l&42?1:eo(l),l&(e.suspendedLanes|t)?0:l}function eo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function to(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function hf(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Hm(e.type))}function ou(e,t){var l=Y.p;try{return Y.p=e,t()}finally{Y.p=l}}var il=Math.random().toString(36).slice(2),ge="__reactFiber$"+il,_e="__reactProps$"+il,ca="__reactContainer$"+il,ar="__reactEvents$"+il,Kh="__reactListeners$"+il,Jh="__reactHandles$"+il,uu="__reactResources$"+il,hi="__reactMarker$"+il;function lo(e){delete e[ge],delete e[_e],delete e[ar],delete e[Kh],delete e[Jh]}function kl(e){var t=e[ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ca]||l[ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=gc(e);e!==null;){if(l=e[ge])return l;e=gc(e)}return t}e=l,l=e.parentNode}return null}function fa(e){if(e=e[ge]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ma(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(y(33))}function Zl(e){var t=e[uu];return t||(t=e[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function me(e){e[hi]=!0}var pf=new Set,gf={};function zl(e,t){Pl(e,t),Pl(e+"Capture",t)}function Pl(e,t){for(gf[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var $h=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},fu={};function Wh(e){return lr.call(fu,e)?!0:lr.call(cu,e)?!1:$h.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function Vi(e,t,l){if(Wh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Ci(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function ft(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fh(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(n){l=""+n,s.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(n){l=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){if(!e._valueTracker){var t=vf(e)?"checked":"value";e._valueTracker=Fh(e,t,""+e[t])}}function bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=vf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ih=/[\n"\\]/g;function Ve(e){return e.replace(Ih,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function sr(e,t,l,a,i,s,n,r){e.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?e.type=n:e.removeAttribute("type"),t!=null?n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qe(t)):e.value!==""+Qe(t)&&(e.value=""+Qe(t)):n!=="submit"&&n!=="reset"||e.removeAttribute("value"),t!=null?nr(e,n,Qe(t)):l!=null?nr(e,n,Qe(l)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Qe(r):e.removeAttribute("name")}function xf(e,t,l,a,i,s,n,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ir(e);return}l=l!=null?""+Qe(l):"",t=t!=null?""+Qe(t):l,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.name=n),ir(e)}function nr(e,t,l){t==="number"&&ms(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Vl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Qe(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yf(e,t,l){if(t!=null&&(t=""+Qe(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Qe(l):""}function wf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(y(92));if(Ra(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Qe(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ir(e)}function ea(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Ph=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Ph.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Sf(e,t,l){if(t!=null&&typeof t!="object")throw Error(y(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&du(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&du(e,s,t[s])}function ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return tp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xt(){}var rr=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Kl=null;function mu(e){var t=fa(e);if(t&&(e=t.stateNode)){var l=e[_e]||null;e:switch(e=t.stateNode,t.type){case"input":if(sr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ve(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[_e]||null;if(!i)throw Error(y(90));sr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&bf(a)}break e;case"textarea":yf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Vl(e,!!l.multiple,t,!1)}}}var hn=!1;function zf(e,t,l){if(hn)return e(t,l);hn=!0;try{var a=e(t);return a}finally{if(hn=!1,(Ul!==null||Kl!==null)&&(en(),Ul&&(t=Ul,e=Kl,Kl=Ul=null,mu(t),e)))for(t=0;t<e.length;t++)mu(e[t])}}function Wa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[_e]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(y(231,t,typeof l));return l}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(Tt)try{var za={};Object.defineProperty(za,"passive",{get:function(){or=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{or=!1}var Yt=null,so=null,Ji=null;function Tf(){if(Ji)return Ji;var e,t=so,l=t.length,a,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(e=0;e<l&&t[e]===i[e];e++);var n=l-e;for(a=1;a<=n&&t[l-a]===i[s-a];a++);return Ji=i.slice(e,1<a?1-a:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function hu(){return!1}function Oe(e){function t(l,a,i,s,n){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=n,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(l=e[r],this[r]=l?l(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ki:hu,this.isPropagationStopped=hu,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Oe(Tl),pi=F({},Tl,{view:0,detail:0}),lp=Oe(pi),pn,gn,Ta,Xs=F({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ta&&(Ta&&e.type==="mousemove"?(pn=e.screenX-Ta.screenX,gn=e.screenY-Ta.screenY):gn=pn=0,Ta=e),pn)},movementY:function(e){return"movementY"in e?e.movementY:gn}}),pu=Oe(Xs),ap=F({},Xs,{dataTransfer:0}),ip=Oe(ap),sp=F({},pi,{relatedTarget:0}),vn=Oe(sp),np=F({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=Oe(np),op=F({},Tl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=Oe(op),cp=F({},Tl,{data:0}),gu=Oe(cp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mp[e])?!!t[e]:!1}function no(){return hp}var pp=F({},pi,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gp=Oe(pp),vp=F({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Oe(vp),bp=F({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),xp=Oe(bp),yp=F({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=Oe(yp),Sp=F({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Oe(Sp),Tp=F({},Tl,{newState:0,oldState:0}),Ep=Oe(Tp),jp=[9,13,27,32],ro=Tt&&"CompositionEvent"in window,Ua=null;Tt&&"documentMode"in document&&(Ua=document.documentMode);var Np=Tt&&"TextEvent"in window&&!Ua,Ef=Tt&&(!ro||Ua&&8<Ua&&11>=Ua),bu=" ",xu=!1;function jf(e,t){switch(e){case"keyup":return jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hl=!1;function Ap(e,t){switch(e){case"compositionend":return Nf(t);case"keypress":return t.which!==32?null:(xu=!0,bu);case"textInput":return e=t.data,e===bu&&xu?null:e;default:return null}}function _p(e,t){if(Hl)return e==="compositionend"||!ro&&jf(e,t)?(e=Tf(),Ji=so=Yt=null,Hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Op[e.type]:t==="textarea"}function Af(e,t,l,a){Ul?Kl?Kl.push(a):Kl=[a]:Ul=a,t=Rs(t,"onChange"),0<t.length&&(l=new Qs("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ha=null,Fa=null;function Rp(e){zm(e,0)}function Zs(e){var t=Ma(e);if(bf(t))return e}function wu(e,t){if(e==="change")return t}var _f=!1;if(Tt){var bn;if(Tt){var xn="oninput"in document;if(!xn){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),xn=typeof Su.oninput=="function"}bn=xn}else bn=!1;_f=bn&&(!document.documentMode||9<document.documentMode)}function zu(){Ha&&(Ha.detachEvent("onpropertychange",Of),Fa=Ha=null)}function Of(e){if(e.propertyName==="value"&&Zs(Fa)){var t=[];Af(t,Fa,e,io(e)),zf(Rp,t)}}function Mp(e,t,l){e==="focusin"?(zu(),Ha=t,Fa=l,Ha.attachEvent("onpropertychange",Of)):e==="focusout"&&zu()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(Fa)}function Cp(e,t){if(e==="click")return Zs(t)}function kp(e,t){if(e==="input"||e==="change")return Zs(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Up;function Ia(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!lr.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var l=Tu(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Tu(l)}}function Rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ms(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ms(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hp=Tt&&"documentMode"in document&&11>=document.documentMode,ql=null,ur=null,qa=null,cr=!1;function ju(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cr||ql==null||ql!==ms(a)||(a=ql,"selectionStart"in a&&oo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ia(qa,a)||(qa=a,a=Rs(ur,"onSelect"),0<a.length&&(t=new Qs("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ql)))}function ol(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Bl={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionrun:ol("Transition","TransitionRun"),transitionstart:ol("Transition","TransitionStart"),transitioncancel:ol("Transition","TransitionCancel"),transitionend:ol("Transition","TransitionEnd")},yn={},Df={};Tt&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete Bl.animationend.animation,delete Bl.animationiteration.animation,delete Bl.animationstart.animation),"TransitionEvent"in window||delete Bl.transitionend.transition);function El(e){if(yn[e])return yn[e];if(!Bl[e])return e;var t=Bl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Df)return yn[e]=t[l];return e}var Cf=El("animationend"),kf=El("animationiteration"),Uf=El("animationstart"),qp=El("transitionrun"),Bp=El("transitionstart"),Lp=El("transitioncancel"),Hf=El("transitionend"),qf=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function tt(e,t){qf.set(e,t),zl(t,[e])}var hs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ge=[],Ll=0,uo=0;function Vs(){for(var e=Ll,t=uo=Ll=0;t<e;){var l=Ge[t];Ge[t++]=null;var a=Ge[t];Ge[t++]=null;var i=Ge[t];Ge[t++]=null;var s=Ge[t];if(Ge[t++]=null,a!==null&&i!==null){var n=a.pending;n===null?i.next=i:(i.next=n.next,n.next=i),a.pending=i}s!==0&&Bf(l,i,s)}}function Ks(e,t,l,a){Ge[Ll++]=e,Ge[Ll++]=t,Ge[Ll++]=l,Ge[Ll++]=a,uo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function co(e,t,l,a){return Ks(e,t,l,a),ps(e)}function jl(e,t){return Ks(e,null,null,t),ps(e)}function Bf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,s=e.return;s!==null;)s.childLanes|=l,a=s.alternate,a!==null&&(a.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-He(l),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),s):null}function ps(e){if(50<Ka)throw Ka=0,Mr=null,Error(y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yl={};function Yp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,l,a){return new Yp(e,t,l,a)}function fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var l=e.alternate;return l===null?(l=De(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Lf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,l,a,i,s){var n=0;if(a=e,typeof e=="function")fo(e)&&(n=1);else if(typeof e=="string")n=Vg(e,l,nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case In:return e=De(31,l,t,i),e.elementType=In,e.lanes=s,e;case Dl:return hl(l.children,i,s,t);case sf:n=8,i|=24;break;case $n:return e=De(12,l,t,i|2),e.elementType=$n,e.lanes=s,e;case Wn:return e=De(13,l,t,i),e.elementType=Wn,e.lanes=s,e;case Fn:return e=De(19,l,t,i),e.elementType=Fn,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:n=10;break e;case nf:n=9;break e;case Fr:n=11;break e;case Ir:n=14;break e;case Ct:n=16,a=null;break e}n=29,l=Error(y(130,e===null?"null":typeof e,"")),a=null}return t=De(n,l,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function hl(e,t,l,a){return e=De(7,e,a,t),e.lanes=l,e}function wn(e,t,l){return e=De(6,e,null,t),e.lanes=l,e}function Yf(e){var t=De(18,null,null,0);return t.stateNode=e,t}function Sn(e,t,l){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nu=new WeakMap;function Ke(e,t){if(typeof e=="object"&&e!==null){var l=Nu.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ru(t)},Nu.set(e,t),t)}return{value:e,source:t,stack:ru(t)}}var Gl=[],Ql=0,gs=null,Pa=0,Xe=[],Ze=0,el=null,at=1,it="";function gt(e,t){Gl[Ql++]=Pa,Gl[Ql++]=gs,gs=e,Pa=t}function Gf(e,t,l){Xe[Ze++]=at,Xe[Ze++]=it,Xe[Ze++]=el,el=e;var a=at;e=it;var i=32-He(a)-1;a&=~(1<<i),l+=1;var s=32-He(t)+i;if(30<s){var n=i-i%5;s=(a&(1<<n)-1).toString(32),a>>=n,i-=n,at=1<<32-He(t)+i|l<<i|a,it=s+e}else at=1<<s|l<<i|a,it=e}function mo(e){e.return!==null&&(gt(e,1),Gf(e,1,0))}function ho(e){for(;e===gs;)gs=Gl[--Ql],Gl[Ql]=null,Pa=Gl[--Ql],Gl[Ql]=null;for(;e===el;)el=Xe[--Ze],Xe[Ze]=null,it=Xe[--Ze],Xe[Ze]=null,at=Xe[--Ze],Xe[Ze]=null}function Qf(e,t){Xe[Ze++]=at,Xe[Ze++]=it,Xe[Ze++]=el,at=t.id,it=t.overflow,el=e}var ve=null,$=null,B=!1,Vt=null,Je=!1,dr=Error(y(519));function tl(e){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Ke(t,e)),dr}function Au(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ge]=e,t[_e]=a,l){case"dialog":U("cancel",t),U("close",t);break;case"iframe":case"object":case"embed":U("load",t);break;case"video":case"audio":for(l=0;l<ii.length;l++)U(ii[l],t);break;case"source":U("error",t);break;case"img":case"image":case"link":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"input":U("invalid",t),xf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":U("invalid",t);break;case"textarea":U("invalid",t),wf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Em(t.textContent,l)?(a.popover!=null&&(U("beforetoggle",t),U("toggle",t)),a.onScroll!=null&&U("scroll",t),a.onScrollEnd!=null&&U("scrollend",t),a.onClick!=null&&(t.onclick=xt),t=!0):t=!1,t||tl(e,!0)}function _u(e){for(ve=e.return;ve;)switch(ve.tag){case 5:case 31:case 13:Je=!1;return;case 27:case 3:Je=!0;return;default:ve=ve.return}}function Al(e){if(e!==ve)return!1;if(!B)return _u(e),B=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Hr(e.type,e.memoizedProps)),l=!l),l&&$&&tl(e),_u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));$=pc(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));$=pc(e)}else t===27?(t=$,sl(e.type)?(e=Yr,Yr=null,$=e):$=t):$=ve?We(e.stateNode.nextSibling):null;return!0}function bl(){$=ve=null,B=!1}function zn(){var e=Vt;return e!==null&&(Ne===null?Ne=e:Ne.push.apply(Ne,e),Vt=null),e}function ei(e){Vt===null?Vt=[e]:Vt.push(e)}var mr=ut(null),Nl=null,yt=null;function Ut(e,t,l){K(mr,t._currentValue),t._currentValue=l}function St(e){e._currentValue=mr.current,he(mr)}function hr(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function pr(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var n=i.child;s=s.firstContext;e:for(;s!==null;){var r=s;s=i;for(var o=0;o<t.length;o++)if(r.context===t[o]){s.lanes|=l,r=s.alternate,r!==null&&(r.lanes|=l),hr(s.return,l,e),a||(n=null);break e}s=r.next}}else if(i.tag===18){if(n=i.return,n===null)throw Error(y(341));n.lanes|=l,s=n.alternate,s!==null&&(s.lanes|=l),hr(n,l,e),n=null}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===e){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}}function da(e,t,l,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var n=i.alternate;if(n===null)throw Error(y(387));if(n=n.memoizedProps,n!==null){var r=i.type;Be(i.pendingProps.value,n.value)||(e!==null?e.push(r):e=[r])}}else if(i===us.current){if(n=i.alternate,n===null)throw Error(y(387));n.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ni):e=[ni])}i=i.return}e!==null&&pr(t,e,l,a),t.flags|=262144}function vs(e){for(e=e.firstContext;e!==null;){if(!Be(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xl(e){Nl=e,yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function be(e){return Xf(Nl,e)}function Ui(e,t){return Nl===null&&xl(e),Xf(e,t)}function Xf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},yt===null){if(e===null)throw Error(y(308));yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yt=yt.next=t;return l}var Gp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Qp=ce.unstable_scheduleCallback,Xp=ce.unstable_NormalPriority,re={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function po(){return{controller:new Gp,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&Qp(Xp,function(){e.controller.abort()})}var Ba=null,gr=0,ta=0,Jl=null;function Zp(e,t){if(Ba===null){var l=Ba=[];gr=0,ta=Lo(),Jl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return gr++,t.then(Ou,Ou),t}function Ou(){if(--gr===0&&Ba!==null){Jl!==null&&(Jl.status="fulfilled");var e=Ba;Ba=null,ta=0,Jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ru=_.S;_.S=function(e,t){im=ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zp(e,t),Ru!==null&&Ru(e,t)};var pl=ut(null);function go(){var e=pl.current;return e!==null?e:V.pooledCache}function Fi(e,t){t===null?K(pl,pl.current):K(pl,t.pool)}function Zf(){var e=go();return e===null?null:{parent:re._currentValue,pool:e}}var ma=Error(y(460)),vo=Error(y(474)),Js=Error(y(542)),bs={then:function(){}};function Mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(xt,xt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cu(e),e;default:if(typeof t.status=="string")t.then(xt,xt);else{if(e=V,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cu(e),e}throw gl=t,ma}}function fl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(gl=l,ma):l}}var gl=null;function Du(){if(gl===null)throw Error(y(459));var e=gl;return gl=null,e}function Cu(e){if(e===ma||e===Js)throw Error(y(483))}var $l=null,ti=0;function Hi(e){var t=ti;return ti+=1,$l===null&&($l=[]),Vf($l,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qi(e,t){throw t.$$typeof===Mh?Error(y(525)):(e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kf(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function l(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function a(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function i(m,d){return m=wt(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=67108866,d):g):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function n(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function r(m,d,g,b){return d===null||d.tag!==6?(d=wn(g,m.mode,b),d.return=m,d):(d=i(d,g),d.return=m,d)}function o(m,d,g,b){var T=g.type;return T===Dl?p(m,d,g.props.children,b,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ct&&fl(T)===d.type)?(d=i(d,g.props),Ea(d,g),d.return=m,d):(d=Wi(g.type,g.key,g.props,null,m.mode,b),Ea(d,g),d.return=m,d)}function c(m,d,g,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Sn(g,m.mode,b),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function p(m,d,g,b,T){return d===null||d.tag!==7?(d=hl(g,m.mode,b,T),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=wn(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oi:return g=Wi(d.type,d.key,d.props,null,m.mode,g),Ea(g,d),g.return=m,g;case Oa:return d=Sn(d,m.mode,g),d.return=m,d;case Ct:return d=fl(d),f(m,d,g)}if(Ra(d)||Sa(d))return d=hl(d,m.mode,g,null),d.return=m,d;if(typeof d.then=="function")return f(m,Hi(d),g);if(d.$$typeof===bt)return f(m,Ui(m,d),g);qi(m,d)}return null}function h(m,d,g,b){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return T!==null?null:r(m,d,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oi:return g.key===T?o(m,d,g,b):null;case Oa:return g.key===T?c(m,d,g,b):null;case Ct:return g=fl(g),h(m,d,g,b)}if(Ra(g)||Sa(g))return T!==null?null:p(m,d,g,b,null);if(typeof g.then=="function")return h(m,d,Hi(g),b);if(g.$$typeof===bt)return h(m,d,Ui(m,g),b);qi(m,g)}return null}function v(m,d,g,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(g)||null,r(d,m,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oi:return m=m.get(b.key===null?g:b.key)||null,o(d,m,b,T);case Oa:return m=m.get(b.key===null?g:b.key)||null,c(d,m,b,T);case Ct:return b=fl(b),v(m,d,g,b,T)}if(Ra(b)||Sa(b))return m=m.get(g)||null,p(d,m,b,T,null);if(typeof b.then=="function")return v(m,d,g,Hi(b),T);if(b.$$typeof===bt)return v(m,d,g,Ui(d,b),T);qi(d,b)}return null}function w(m,d,g,b){for(var T=null,A=null,E=d,N=d=0,O=null;E!==null&&N<g.length;N++){E.index>N?(O=E,E=null):O=E.sibling;var D=h(m,E,g[N],b);if(D===null){E===null&&(E=O);break}e&&E&&D.alternate===null&&t(m,E),d=s(D,d,N),A===null?T=D:A.sibling=D,A=D,E=O}if(N===g.length)return l(m,E),B&&gt(m,N),T;if(E===null){for(;N<g.length;N++)E=f(m,g[N],b),E!==null&&(d=s(E,d,N),A===null?T=E:A.sibling=E,A=E);return B&&gt(m,N),T}for(E=a(E);N<g.length;N++)O=v(E,m,N,g[N],b),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?N:O.key),d=s(O,d,N),A===null?T=O:A.sibling=O,A=O);return e&&E.forEach(function(ze){return t(m,ze)}),B&&gt(m,N),T}function S(m,d,g,b){if(g==null)throw Error(y(151));for(var T=null,A=null,E=d,N=d=0,O=null,D=g.next();E!==null&&!D.done;N++,D=g.next()){E.index>N?(O=E,E=null):O=E.sibling;var ze=h(m,E,D.value,b);if(ze===null){E===null&&(E=O);break}e&&E&&ze.alternate===null&&t(m,E),d=s(ze,d,N),A===null?T=ze:A.sibling=ze,A=ze,E=O}if(D.done)return l(m,E),B&&gt(m,N),T;if(E===null){for(;!D.done;N++,D=g.next())D=f(m,D.value,b),D!==null&&(d=s(D,d,N),A===null?T=D:A.sibling=D,A=D);return B&&gt(m,N),T}for(E=a(E);!D.done;N++,D=g.next())D=v(E,m,N,D.value,b),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?N:D.key),d=s(D,d,N),A===null?T=D:A.sibling=D,A=D);return e&&E.forEach(function(lt){return t(m,lt)}),B&&gt(m,N),T}function z(m,d,g,b){if(typeof g=="object"&&g!==null&&g.type===Dl&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oi:e:{for(var T=g.key;d!==null;){if(d.key===T){if(T=g.type,T===Dl){if(d.tag===7){l(m,d.sibling),b=i(d,g.props.children),b.return=m,m=b;break e}}else if(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ct&&fl(T)===d.type){l(m,d.sibling),b=i(d,g.props),Ea(b,g),b.return=m,m=b;break e}l(m,d);break}else t(m,d);d=d.sibling}g.type===Dl?(b=hl(g.props.children,m.mode,b,g.key),b.return=m,m=b):(b=Wi(g.type,g.key,g.props,null,m.mode,b),Ea(b,g),b.return=m,m=b)}return n(m);case Oa:e:{for(T=g.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){l(m,d.sibling),b=i(d,g.children||[]),b.return=m,m=b;break e}else{l(m,d);break}else t(m,d);d=d.sibling}b=Sn(g,m.mode,b),b.return=m,m=b}return n(m);case Ct:return g=fl(g),z(m,d,g,b)}if(Ra(g))return w(m,d,g,b);if(Sa(g)){if(T=Sa(g),typeof T!="function")throw Error(y(150));return g=T.call(g),S(m,d,g,b)}if(typeof g.then=="function")return z(m,d,Hi(g),b);if(g.$$typeof===bt)return z(m,d,Ui(m,g),b);qi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,d!==null&&d.tag===6?(l(m,d.sibling),b=i(d,g),b.return=m,m=b):(l(m,d),b=wn(g,m.mode,b),b.return=m,m=b),n(m)):l(m,d)}return function(m,d,g,b){try{ti=0;var T=z(m,d,g,b);return $l=null,T}catch(E){if(E===ma||E===Js)throw E;var A=De(29,E,null,m.mode);return A.lanes=b,A.return=m,A}finally{}}}var yl=Kf(!0),Jf=Kf(!1),kt=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,L&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ps(e),Bf(e,null,l),t}return Ks(e,a,t,l),ps(e)}function La(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,df(e,l)}}function Tn(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var n={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?i=s=n:s=s.next=n,l=l.next}while(l!==null);s===null?i=s=t:s=s.next=t}else i=s=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var br=!1;function Ya(){if(br){var e=Jl;if(e!==null)throw e}}function Ga(e,t,l,a){br=!1;var i=e.updateQueue;kt=!1;var s=i.firstBaseUpdate,n=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var o=r,c=o.next;o.next=null,n===null?s=c:n.next=c,n=o;var p=e.alternate;p!==null&&(p=p.updateQueue,r=p.lastBaseUpdate,r!==n&&(r===null?p.firstBaseUpdate=c:r.next=c,p.lastBaseUpdate=o))}if(s!==null){var f=i.baseState;n=0,p=c=o=null,r=s;do{var h=r.lane&-536870913,v=h!==r.lane;if(v?(q&h)===h:(a&h)===h){h!==0&&h===ta&&(br=!0),p!==null&&(p=p.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var w=e,S=r;h=t;var z=l;switch(S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(z,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(z,f,h):w,h==null)break e;f=F({},f,h);break e;case 2:kt=!0}}h=r.callback,h!==null&&(e.flags|=64,v&&(e.flags|=8192),v=i.callbacks,v===null?i.callbacks=[h]:v.push(h))}else v={lane:h,tag:r.tag,payload:r.payload,callback:r.callback,next:null},p===null?(c=p=v,o=f):p=p.next=v,n|=h;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;v=r,r=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);p===null&&(o=f),i.baseState=o,i.firstBaseUpdate=c,i.lastBaseUpdate=p,s===null&&(i.shared.lanes=0),al|=n,e.lanes=n,e.memoizedState=f}}function $f(e,t){if(typeof e!="function")throw Error(y(191,e));e.call(t)}function Wf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)$f(l[e],t)}var la=ut(null),xs=ut(0);function ku(e,t){e=At,K(xs,e),K(la,t),At=e|t.baseLanes}function xr(){K(xs,At),K(la,la.current)}function xo(){At=xs.current,he(la),he(xs)}var Le=ut(null),$e=null;function Ht(e){var t=e.alternate;K(ae,ae.current&1),K(Le,e),$e===null&&(t===null||la.current!==null||t.memoizedState!==null)&&($e=e)}function yr(e){K(ae,ae.current),K(Le,e),$e===null&&($e=e)}function Ff(e){e.tag===22?(K(ae,ae.current),K(Le,e),$e===null&&($e=e)):qt()}function qt(){K(ae,ae.current),K(Le,Le.current)}function Me(e){he(Le),$e===e&&($e=null),he(ae)}var ae=ut(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Br(l)||Lr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Et=0,M=null,Z=null,se=null,ws=!1,Wl=!1,wl=!1,Ss=0,li=0,Fl=null,Kp=0;function ee(){throw Error(y(321))}function yo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Be(e[l],t[l]))return!1;return!0}function wo(e,t,l,a,i,s){return Et=s,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Ad:Mo,wl=!1,s=l(a,i),wl=!1,Wl&&(s=Pf(t,l,a,i)),If(e),s}function If(e){_.H=ai;var t=Z!==null&&Z.next!==null;if(Et=0,se=Z=M=null,ws=!1,li=0,Fl=null,t)throw Error(y(300));e===null||oe||(e=e.dependencies,e!==null&&vs(e)&&(oe=!0))}function Pf(e,t,l,a){M=e;var i=0;do{if(Wl&&(Fl=null),li=0,Wl=!1,25<=i)throw Error(y(301));if(i+=1,se=Z=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=_d,s=t(l,a)}while(Wl);return s}function Jp(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?vi(t):t,e=e.useState()[0],(Z!==null?Z.memoizedState:null)!==e&&(M.flags|=1024),t}function So(){var e=Ss!==0;return Ss=0,e}function zo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function To(e){if(ws){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ws=!1}Et=0,se=Z=M=null,Wl=!1,li=Ss=0,Fl=null}function ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?M.memoizedState=se=e:se=se.next=e,se}function ie(){if(Z===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=se===null?M.memoizedState:se.next;if(t!==null)se=t,Z=e;else{if(e===null)throw M.alternate===null?Error(y(467)):Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},se===null?M.memoizedState=se=e:se=se.next=e}return se}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vi(e){var t=li;return li+=1,Fl===null&&(Fl=[]),e=Vf(Fl,e,t),t=M,(se===null?t.memoizedState:se.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ad:Mo),e}function Ws(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vi(e);if(e.$$typeof===bt)return be(e)}throw Error(y(438,String(e)))}function Eo(e){var t=null,l=M.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=M.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=$s(),M.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dh;return t.index++,l}function jt(e,t){return typeof t=="function"?t(e):t}function Ii(e){var t=ie();return jo(t,Z,e)}function jo(e,t,l){var a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var n=i.next;i.next=s.next,s.next=n}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var r=n=null,o=null,c=t,p=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(q&f)===f:(Et&f)===f){var h=c.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===ta&&(p=!0);else if((Et&h)===h){c=c.next,h===ta&&(p=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(r=o=f,n=s):o=o.next=f,M.lanes|=h,al|=h;f=c.action,wl&&l(s,f),s=c.hasEagerState?c.eagerState:l(s,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(r=o=h,n=s):o=o.next=h,M.lanes|=f,al|=f;c=c.next}while(c!==null&&c!==t);if(o===null?n=s:o.next=r,!Be(s,e.memoizedState)&&(oe=!0,p&&(l=Jl,l!==null)))throw l;e.memoizedState=s,e.baseState=n,e.baseQueue=o,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function En(e){var t=ie(),l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,s=t.memoizedState;if(i!==null){l.pending=null;var n=i=i.next;do s=e(s,n.action),n=n.next;while(n!==i);Be(s,t.memoizedState)||(oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),l.lastRenderedState=s}return[s,a]}function ed(e,t,l){var a=M,i=ie(),s=B;if(s){if(l===void 0)throw Error(y(407));l=l()}else l=t();var n=!Be((Z||i).memoizedState,l);if(n&&(i.memoizedState=l,oe=!0),i=i.queue,No(ad.bind(null,a,i,e),[e]),i.getSnapshot!==t||n||se!==null&&se.memoizedState.tag&1){if(a.flags|=2048,aa(9,{destroy:void 0},ld.bind(null,a,i,l,t),null),V===null)throw Error(y(349));s||Et&127||td(a,t,l)}return l}function td(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=M.updateQueue,t===null?(t=$s(),M.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function ld(e,t,l,a){t.value=l,t.getSnapshot=a,id(t)&&sd(e)}function ad(e,t,l){return l(function(){id(t)&&sd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Be(e,l)}catch{return!0}}function sd(e){var t=jl(e,2);t!==null&&Ae(t,e,2)}function wr(e){var t=ye();if(typeof e=="function"){var l=e;if(e=l(),wl){Lt(!0);try{l()}finally{Lt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},t}function nd(e,t,l,a){return e.baseState=l,jo(e,Z,typeof a=="function"?a:jt)}function $p(e,t,l,a,i){if(Is(e))throw Error(y(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){s.listeners.push(n)}};_.T!==null?l(!0):s.isTransition=!1,a(s),l=t.pending,l===null?(s.next=t.pending=s,rd(t,s)):(s.next=l.next,t.pending=l.next=s)}}function rd(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=_.T,n={};_.T=n;try{var r=l(i,a),o=_.S;o!==null&&o(n,r),Uu(e,t,r)}catch(c){Sr(e,t,c)}finally{s!==null&&n.types!==null&&(s.types=n.types),_.T=s}}else try{s=l(i,a),Uu(e,t,s)}catch(c){Sr(e,t,c)}}function Uu(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Hu(e,t,a)},function(a){return Sr(e,t,a)}):Hu(e,t,l)}function Hu(e,t,l){t.status="fulfilled",t.value=l,od(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,rd(e,l)))}function Sr(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,od(t),t=t.next;while(t!==a)}e.action=null}function od(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ud(e,t){return t}function qu(e,t){if(B){var l=V.formState;if(l!==null){e:{var a=M;if(B){if($){t:{for(var i=$,s=Je;i.nodeType!==8;){if(!s){i=null;break t}if(i=We(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){$=We(i.nextSibling),a=i.data==="F!";break e}}tl(a)}a=!1}a&&(t=l[0])}}return l=ye(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:t},l.queue=a,l=Ed.bind(null,M,a),a.dispatch=l,a=wr(!1),s=Ro.bind(null,M,!1,a.queue),a=ye(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=$p.bind(null,M,i,s,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function Bu(e){var t=ie();return cd(t,Z,e)}function cd(e,t,l){if(t=jo(e,t,ud)[0],e=Ii(jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=vi(t)}catch(n){throw n===ma?Js:n}else a=t;t=ie();var i=t.queue,s=i.dispatch;return l!==t.memoizedState&&(M.flags|=2048,aa(9,{destroy:void 0},Wp.bind(null,i,l),null)),[a,s,e]}function Wp(e,t){e.action=t}function Lu(e){var t=ie(),l=Z;if(l!==null)return cd(t,l,e);ie(),t=t.memoizedState,l=ie();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function aa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=M.updateQueue,t===null&&(t=$s(),M.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function fd(){return ie().memoizedState}function Pi(e,t,l,a){var i=ye();M.flags|=e,i.memoizedState=aa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Fs(e,t,l,a){var i=ie();a=a===void 0?null:a;var s=i.memoizedState.inst;Z!==null&&a!==null&&yo(a,Z.memoizedState.deps)?i.memoizedState=aa(t,s,l,a):(M.flags|=e,i.memoizedState=aa(1|t,s,l,a))}function Yu(e,t){Pi(8390656,8,e,t)}function No(e,t){Fs(2048,8,e,t)}function Fp(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=$s(),M.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function dd(e){var t=ie().memoizedState;return Fp({ref:t,nextImpl:e}),function(){if(L&2)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function md(e,t){return Fs(4,2,e,t)}function hd(e,t){return Fs(4,4,e,t)}function pd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,l){l=l!=null?l.concat([e]):null,Fs(4,4,pd.bind(null,t,e),l)}function Ao(){}function vd(e,t){var l=ie();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&yo(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function bd(e,t){var l=ie();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&yo(t,a[1]))return a[0];if(a=e(),wl){Lt(!0);try{e()}finally{Lt(!1)}}return l.memoizedState=[a,t],a}function _o(e,t,l){return l===void 0||Et&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=l,e=nm(),M.lanes|=e,al|=e,l)}function xd(e,t,l,a){return Be(l,t)?l:la.current!==null?(e=_o(e,l,a),Be(e,t)||(oe=!0),e):!(Et&42)||Et&1073741824&&!(q&261930)?(oe=!0,e.memoizedState=l):(e=nm(),M.lanes|=e,al|=e,t)}function yd(e,t,l,a,i){var s=Y.p;Y.p=s!==0&&8>s?s:8;var n=_.T,r={};_.T=r,Ro(e,!1,t,l);try{var o=i(),c=_.S;if(c!==null&&c(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var p=Vp(o,a);Qa(e,t,p,qe(e))}else Qa(e,t,a,qe(e))}catch(f){Qa(e,t,{then:function(){},status:"rejected",reason:f},qe())}finally{Y.p=s,n!==null&&r.types!==null&&(n.types=r.types),_.T=n}}function Ip(){}function zr(e,t,l,a){if(e.tag!==5)throw Error(y(476));var i=wd(e).queue;yd(e,i,t,ml,l===null?Ip:function(){return Sd(e),l(a)})}function wd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ml,baseState:ml,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:ml},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sd(e){var t=wd(e);t.next===null&&(t=e.alternate.memoizedState),Qa(e,t.next.queue,{},qe())}function Oo(){return be(ni)}function zd(){return ie().memoizedState}function Td(){return ie().memoizedState}function Pp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=qe();e=Kt(l);var a=Jt(t,e,l);a!==null&&(Ae(a,t,l),La(a,t,l)),t={cache:po()},e.payload=t;return}t=t.return}}function eg(e,t,l){var a=qe();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Is(e)?jd(t,l):(l=co(e,t,l,a),l!==null&&(Ae(l,e,a),Nd(l,t,a)))}function Ed(e,t,l){var a=qe();Qa(e,t,l,a)}function Qa(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Is(e))jd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var n=t.lastRenderedState,r=s(n,l);if(i.hasEagerState=!0,i.eagerState=r,Be(r,n))return Ks(e,t,i,0),V===null&&Vs(),!1}catch{}finally{}if(l=co(e,t,i,a),l!==null)return Ae(l,e,a),Nd(l,t,a),!0}return!1}function Ro(e,t,l,a){if(a={lane:2,revertLane:Lo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(y(479))}else t=co(e,l,a,2),t!==null&&Ae(t,e,2)}function Is(e){var t=e.alternate;return e===M||t!==null&&t===M}function jd(e,t){Wl=ws=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Nd(e,t,l){if(l&4194048){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,df(e,l)}}var ai={readContext:be,use:Ws,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee,useHostTransitionStatus:ee,useFormState:ee,useActionState:ee,useOptimistic:ee,useMemoCache:ee,useCacheRefresh:ee};ai.useEffectEvent=ee;var Ad={readContext:be,use:Ws,useCallback:function(e,t){return ye().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Yu,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Pi(4194308,4,pd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){Pi(4,2,e,t)},useMemo:function(e,t){var l=ye();t=t===void 0?null:t;var a=e();if(wl){Lt(!0);try{e()}finally{Lt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ye();if(l!==void 0){var i=l(t);if(wl){Lt(!0);try{l(t)}finally{Lt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=eg.bind(null,M,e),[a.memoizedState,e]},useRef:function(e){var t=ye();return e={current:e},t.memoizedState=e},useState:function(e){e=wr(e);var t=e.queue,l=Ed.bind(null,M,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Ao,useDeferredValue:function(e,t){var l=ye();return _o(l,e,t)},useTransition:function(){var e=wr(!1);return e=yd.bind(null,M,e.queue,!0,!1),ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=M,i=ye();if(B){if(l===void 0)throw Error(y(407));l=l()}else{if(l=t(),V===null)throw Error(y(349));q&127||td(a,t,l)}i.memoizedState=l;var s={value:l,getSnapshot:t};return i.queue=s,Yu(ad.bind(null,a,s,e),[e]),a.flags|=2048,aa(9,{destroy:void 0},ld.bind(null,a,s,l,t),null),l},useId:function(){var e=ye(),t=V.identifierPrefix;if(B){var l=it,a=at;l=(a&~(1<<32-He(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ss++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Kp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:qu,useActionState:qu,useOptimistic:function(e){var t=ye();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ro.bind(null,M,!0,l),l.dispatch=t,[e,t]},useMemoCache:Eo,useCacheRefresh:function(){return ye().memoizedState=Pp.bind(null,M)},useEffectEvent:function(e){var t=ye(),l={impl:e};return t.memoizedState=l,function(){if(L&2)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},Mo={readContext:be,use:Ws,useCallback:vd,useContext:be,useEffect:No,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:bd,useReducer:Ii,useRef:fd,useState:function(){return Ii(jt)},useDebugValue:Ao,useDeferredValue:function(e,t){var l=ie();return xd(l,Z.memoizedState,e,t)},useTransition:function(){var e=Ii(jt)[0],t=ie().memoizedState;return[typeof e=="boolean"?e:vi(e),t]},useSyncExternalStore:ed,useId:zd,useHostTransitionStatus:Oo,useFormState:Bu,useActionState:Bu,useOptimistic:function(e,t){var l=ie();return nd(l,Z,e,t)},useMemoCache:Eo,useCacheRefresh:Td};Mo.useEffectEvent=dd;var _d={readContext:be,use:Ws,useCallback:vd,useContext:be,useEffect:No,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:bd,useReducer:En,useRef:fd,useState:function(){return En(jt)},useDebugValue:Ao,useDeferredValue:function(e,t){var l=ie();return Z===null?_o(l,e,t):xd(l,Z.memoizedState,e,t)},useTransition:function(){var e=En(jt)[0],t=ie().memoizedState;return[typeof e=="boolean"?e:vi(e),t]},useSyncExternalStore:ed,useId:zd,useHostTransitionStatus:Oo,useFormState:Lu,useActionState:Lu,useOptimistic:function(e,t){var l=ie();return Z!==null?nd(l,Z,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Eo,useCacheRefresh:Td};_d.useEffectEvent=dd;function jn(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:F({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Tr={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=qe(),i=Kt(a);i.payload=t,l!=null&&(i.callback=l),t=Jt(e,i,a),t!==null&&(Ae(t,e,a),La(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=qe(),i=Kt(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=Jt(e,i,a),t!==null&&(Ae(t,e,a),La(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=qe(),a=Kt(l);a.tag=2,t!=null&&(a.callback=t),t=Jt(e,a,l),t!==null&&(Ae(t,e,l),La(t,e,l))}};function Gu(e,t,l,a,i,s,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,n):t.prototype&&t.prototype.isPureReactComponent?!Ia(l,a)||!Ia(i,s):!0}function Qu(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Tr.enqueueReplaceState(t,t.state,null)}function Sl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=F({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function Od(e){hs(e)}function Rd(e){console.error(e)}function Md(e){hs(e)}function zs(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Xu(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Er(e,t,l){return l=Kt(l),l.tag=3,l.payload={element:null},l.callback=function(){zs(e,t)},l}function Dd(e){return e=Kt(e),e.tag=3,e}function Cd(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){Xu(t,l,a)}}var n=l.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(e.callback=function(){Xu(t,l,a),typeof i!="function"&&($t===null?$t=new Set([this]):$t.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function tg(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&da(t,l,i,!0),l=Le.current,l!==null){switch(l.tag){case 31:case 13:return $e===null?As():l.alternate===null&&te===0&&(te=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===bs?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Hn(e,a,i)),!1;case 22:return l.flags|=65536,a===bs?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Hn(e,a,i)),!1}throw Error(y(435,l.tag))}return Hn(e,a,i),As(),!1}if(B)return t=Le.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==dr&&(e=Error(y(422),{cause:a}),ei(Ke(e,l)))):(a!==dr&&(t=Error(y(423),{cause:a}),ei(Ke(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Ke(a,l),i=Er(e.stateNode,a,i),Tn(e,i),te!==4&&(te=2)),!1;var s=Error(y(520),{cause:a});if(s=Ke(s,l),Va===null?Va=[s]:Va.push(s),te!==4&&(te=2),t===null)return!0;a=Ke(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=Er(l.stateNode,a,e),Tn(l,e),!1;case 1:if(t=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&($t===null||!$t.has(s))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Dd(i),Cd(i,e,l,a),Tn(l,i),!1}l=l.return}while(l!==null);return!1}var Do=Error(y(461)),oe=!1;function pe(e,t,l,a){t.child=e===null?Jf(t,null,l,a):yl(t,e.child,l,a)}function Zu(e,t,l,a,i){l=l.render;var s=t.ref;if("ref"in a){var n={};for(var r in a)r!=="ref"&&(n[r]=a[r])}else n=a;return xl(t),a=wo(e,t,l,n,s,i),r=So(),e!==null&&!oe?(zo(e,t,i),Nt(e,t,i)):(B&&r&&mo(t),t.flags|=1,pe(e,t,a,i),t.child)}function Vu(e,t,l,a,i){if(e===null){var s=l.type;return typeof s=="function"&&!fo(s)&&s.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=s,kd(e,t,s,a,i)):(e=Wi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Co(e,i)){var n=s.memoizedProps;if(l=l.compare,l=l!==null?l:Ia,l(n,a)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=wt(s,a),e.ref=t.ref,e.return=t,t.child=e}function kd(e,t,l,a,i){if(e!==null){var s=e.memoizedProps;if(Ia(s,a)&&e.ref===t.ref)if(oe=!1,t.pendingProps=a=s,Co(e,i))e.flags&131072&&(oe=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return jr(e,t,l,a,i)}function Ud(e,t,l,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,t.child=null;return Ku(e,t,s,l,a)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,s!==null?s.cachePool:null),s!==null?ku(t,s):xr(),Ff(t);else return a=t.lanes=536870912,Ku(e,t,s!==null?s.baseLanes|l:l,l,a)}else s!==null?(Fi(t,s.cachePool),ku(t,s),qt(),t.memoizedState=null):(e!==null&&Fi(t,null),xr(),qt());return pe(e,t,i,l),t.child}function Da(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ku(e,t,l,a,i){var s=go();return s=s===null?null:{parent:re._currentValue,pool:s},t.memoizedState={baseLanes:l,cachePool:s},e!==null&&Fi(t,null),xr(),Ff(t),e!==null&&da(e,t,a,!0),t.childLanes=i,null}function es(e,t){return t=Ts({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ju(e,t,l){return yl(t,e.child,null,l),e=es(t,t.pendingProps),e.flags|=2,Me(t),t.memoizedState=null,e}function lg(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(B){if(a.mode==="hidden")return e=es(t,a),t.lanes=536870912,Da(null,e);if(yr(t),(e=$)?(e=Am(e,Je),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:at,overflow:it}:null,retryLane:536870912,hydrationErrors:null},l=Yf(e),l.return=t,t.child=l,ve=t,$=null)):e=null,e===null)throw tl(t);return t.lanes=536870912,null}return es(t,a)}var s=e.memoizedState;if(s!==null){var n=s.dehydrated;if(yr(t),i)if(t.flags&256)t.flags&=-257,t=Ju(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(y(558));else if(oe||da(e,t,l,!1),i=(l&e.childLanes)!==0,oe||i){if(a=V,a!==null&&(n=mf(a,l),n!==0&&n!==s.retryLane))throw s.retryLane=n,jl(e,n),Ae(a,e,n),Do;As(),t=Ju(e,t,l)}else e=s.treeContext,$=We(n.nextSibling),ve=t,B=!0,Vt=null,Je=!1,e!==null&&Qf(t,e),t=es(t,a),t.flags|=4096;return t}return e=wt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ts(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function jr(e,t,l,a,i){return xl(t),l=wo(e,t,l,a,void 0,i),a=So(),e!==null&&!oe?(zo(e,t,i),Nt(e,t,i)):(B&&a&&mo(t),t.flags|=1,pe(e,t,l,i),t.child)}function $u(e,t,l,a,i,s){return xl(t),t.updateQueue=null,l=Pf(t,a,l,i),If(e),a=So(),e!==null&&!oe?(zo(e,t,s),Nt(e,t,s)):(B&&a&&mo(t),t.flags|=1,pe(e,t,l,s),t.child)}function Wu(e,t,l,a,i){if(xl(t),t.stateNode===null){var s=Yl,n=l.contextType;typeof n=="object"&&n!==null&&(s=be(n)),s=new l(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},bo(t),n=l.contextType,s.context=typeof n=="object"&&n!==null?be(n):Yl,s.state=t.memoizedState,n=l.getDerivedStateFromProps,typeof n=="function"&&(jn(t,l,n,a),s.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Tr.enqueueReplaceState(s,s.state,null),Ga(t,a,s,i),Ya(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var r=t.memoizedProps,o=Sl(l,r);s.props=o;var c=s.context,p=l.contextType;n=Yl,typeof p=="object"&&p!==null&&(n=be(p));var f=l.getDerivedStateFromProps;p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||c!==n)&&Qu(t,s,a,n),kt=!1;var h=t.memoizedState;s.state=h,Ga(t,a,s,i),Ya(),c=t.memoizedState,r||h!==c||kt?(typeof f=="function"&&(jn(t,l,f,a),c=t.memoizedState),(o=kt||Gu(t,l,o,a,h,c,n))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),s.props=a,s.state=c,s.context=n,a=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,vr(e,t),n=t.memoizedProps,p=Sl(l,n),s.props=p,f=t.pendingProps,h=s.context,c=l.contextType,o=Yl,typeof c=="object"&&c!==null&&(o=be(c)),r=l.getDerivedStateFromProps,(c=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(n!==f||h!==o)&&Qu(t,s,a,o),kt=!1,h=t.memoizedState,s.state=h,Ga(t,a,s,i),Ya();var v=t.memoizedState;n!==f||h!==v||kt||e!==null&&e.dependencies!==null&&vs(e.dependencies)?(typeof r=="function"&&(jn(t,l,r,a),v=t.memoizedState),(p=kt||Gu(t,l,p,a,h,v,o)||e!==null&&e.dependencies!==null&&vs(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,v,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,v,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||n===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),s.props=a,s.state=v,s.context=o,a=p):(typeof s.componentDidUpdate!="function"||n===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,ts(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=yl(t,e.child,null,i),t.child=yl(t,null,l,i)):pe(e,t,l,i),t.memoizedState=s.state,e=t.child):e=Nt(e,t,i),e}function Fu(e,t,l,a){return bl(),t.flags|=256,pe(e,t,l,a),t.child}var Nn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function An(e){return{baseLanes:e,cachePool:Zf()}}function _n(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ce),e}function Hd(e,t,l){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,n;if((n=s)||(n=e!==null&&e.memoizedState===null?!1:(ae.current&2)!==0),n&&(i=!0,t.flags&=-129),n=(t.flags&32)!==0,t.flags&=-33,e===null){if(B){if(i?Ht(t):qt(),(e=$)?(e=Am(e,Je),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:at,overflow:it}:null,retryLane:536870912,hydrationErrors:null},l=Yf(e),l.return=t,t.child=l,ve=t,$=null)):e=null,e===null)throw tl(t);return Lr(e)?t.lanes=32:t.lanes=536870912,null}var r=a.children;return a=a.fallback,i?(qt(),i=t.mode,r=Ts({mode:"hidden",children:r},i),a=hl(a,i,l,null),r.return=t,a.return=t,r.sibling=a,t.child=r,a=t.child,a.memoizedState=An(l),a.childLanes=_n(e,n,l),t.memoizedState=Nn,Da(null,a)):(Ht(t),Nr(t,r))}var o=e.memoizedState;if(o!==null&&(r=o.dehydrated,r!==null)){if(s)t.flags&256?(Ht(t),t.flags&=-257,t=On(e,t,l)):t.memoizedState!==null?(qt(),t.child=e.child,t.flags|=128,t=null):(qt(),r=a.fallback,i=t.mode,a=Ts({mode:"visible",children:a.children},i),r=hl(r,i,l,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,yl(t,e.child,null,l),a=t.child,a.memoizedState=An(l),a.childLanes=_n(e,n,l),t.memoizedState=Nn,t=Da(null,a));else if(Ht(t),Lr(r)){if(n=r.nextSibling&&r.nextSibling.dataset,n)var c=n.dgst;n=c,a=Error(y(419)),a.stack="",a.digest=n,ei({value:a,source:null,stack:null}),t=On(e,t,l)}else if(oe||da(e,t,l,!1),n=(l&e.childLanes)!==0,oe||n){if(n=V,n!==null&&(a=mf(n,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,jl(e,a),Ae(n,e,a),Do;Br(r)||As(),t=On(e,t,l)}else Br(r)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,$=We(r.nextSibling),ve=t,B=!0,Vt=null,Je=!1,e!==null&&Qf(t,e),t=Nr(t,a.children),t.flags|=4096);return t}return i?(qt(),r=a.fallback,i=t.mode,o=e.child,c=o.sibling,a=wt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,c!==null?r=wt(c,r):(r=hl(r,i,l,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,Da(null,a),a=t.child,r=e.child.memoizedState,r===null?r=An(l):(i=r.cachePool,i!==null?(o=re._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Zf(),r={baseLanes:r.baseLanes|l,cachePool:i}),a.memoizedState=r,a.childLanes=_n(e,n,l),t.memoizedState=Nn,Da(e.child,a)):(Ht(t),l=e.child,e=l.sibling,l=wt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l)}function Nr(e,t){return t=Ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ts(e,t){return e=De(22,e,null,t),e.lanes=0,e}function On(e,t,l){return yl(t,e.child,null,l),e=Nr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iu(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),hr(e.return,t,l)}function Rn(e,t,l,a,i,s){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:s}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=l,n.tailMode=i,n.treeForkCount=s)}function qd(e,t,l){var a=t.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var n=ae.current,r=(n&2)!==0;if(r?(n=n&1|2,t.flags|=128):n&=1,K(ae,n),pe(e,t,a,l),a=B?Pa:0,!r&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,l,t);else if(e.tag===19)Iu(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&ys(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Rn(t,!1,i,l,s,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Rn(t,!0,l,null,s,a);break;case"together":Rn(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Nt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),al|=t.lanes,!(l&t.childLanes))if(e!==null){if(da(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,l=wt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=wt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Co(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&vs(e)))}function ag(e,t,l){switch(t.tag){case 3:cs(t,t.stateNode.containerInfo),Ut(t,re,e.memoizedState.cache),bl();break;case 27:case 5:tr(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:Ut(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ht(t),t.flags|=128,null):l&t.child.childLanes?Hd(e,t,l):(Ht(t),e=Nt(e,t,l),e!==null?e.sibling:null);Ht(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(da(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return qd(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ae,ae.current),a)break;return null;case 22:return t.lanes=0,Ud(e,t,l,t.pendingProps);case 24:Ut(t,re,e.memoizedState.cache)}return Nt(e,t,l)}function Bd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)oe=!0;else{if(!Co(e,l)&&!(t.flags&128))return oe=!1,ag(e,t,l);oe=!!(e.flags&131072)}else oe=!1,B&&t.flags&1048576&&Gf(t,Pa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=fl(t.elementType),t.type=e,typeof e=="function")fo(e)?(a=Sl(e,a),t.tag=1,t=Wu(null,t,e,a,l)):(t.tag=0,t=jr(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===Fr){t.tag=11,t=Zu(null,t,e,a,l);break e}else if(i===Ir){t.tag=14,t=Vu(null,t,e,a,l);break e}}throw t=Pn(e)||e,Error(y(306,t,""))}}return t;case 0:return jr(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Sl(a,t.pendingProps),Wu(e,t,a,i,l);case 3:e:{if(cs(t,t.stateNode.containerInfo),e===null)throw Error(y(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,vr(e,t),Ga(t,a,null,l);var n=t.memoizedState;if(a=n.cache,Ut(t,re,a),a!==s.cache&&pr(t,[re],l,!0),Ya(),a=n.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:n.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Fu(e,t,a,l);break e}else if(a!==i){i=Ke(Error(y(424)),t),ei(i),t=Fu(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($=We(e.firstChild),ve=t,B=!0,Vt=null,Je=!0,l=Jf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(bl(),a===i){t=Nt(e,t,l);break e}pe(e,t,a,l)}t=t.child}return t;case 26:return ts(e,t),e===null?(l=bc(t.type,null,t.pendingProps,null))?t.memoizedState=l:B||(l=t.type,e=t.pendingProps,a=Ms(Zt.current).createElement(l),a[ge]=t,a[_e]=e,xe(a,l,e),me(a),t.stateNode=a):t.memoizedState=bc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return tr(t),e===null&&B&&(a=t.stateNode=_m(t.type,t.pendingProps,Zt.current),ve=t,Je=!0,i=$,sl(t.type)?(Yr=i,$=We(a.firstChild)):$=i),pe(e,t,t.pendingProps.children,l),ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((i=a=$)&&(a=Dg(a,t.type,t.pendingProps,Je),a!==null?(t.stateNode=a,ve=t,$=We(a.firstChild),Je=!1,i=!0):i=!1),i||tl(t)),tr(t),i=t.type,s=t.pendingProps,n=e!==null?e.memoizedProps:null,a=s.children,Hr(i,s)?a=null:n!==null&&Hr(i,n)&&(t.flags|=32),t.memoizedState!==null&&(i=wo(e,t,Jp,null,null,l),ni._currentValue=i),ts(e,t),pe(e,t,a,l),t.child;case 6:return e===null&&B&&((e=l=$)&&(l=Cg(l,t.pendingProps,Je),l!==null?(t.stateNode=l,ve=t,$=null,e=!0):e=!1),e||tl(t)),null;case 13:return Hd(e,t,l);case 4:return cs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=yl(t,null,a,l):pe(e,t,a,l),t.child;case 11:return Zu(e,t,t.type,t.pendingProps,l);case 7:return pe(e,t,t.pendingProps,l),t.child;case 8:return pe(e,t,t.pendingProps.children,l),t.child;case 12:return pe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Ut(t,t.type,a.value),pe(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,xl(t),i=be(i),a=a(i),t.flags|=1,pe(e,t,a,l),t.child;case 14:return Vu(e,t,t.type,t.pendingProps,l);case 15:return kd(e,t,t.type,t.pendingProps,l);case 19:return qd(e,t,l);case 31:return lg(e,t,l);case 22:return Ud(e,t,l,t.pendingProps);case 24:return xl(t),a=be(re),e===null?(i=go(),i===null&&(i=V,s=po(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=l),i=s),t.memoizedState={parent:a,cache:i},bo(t),Ut(t,re,i)):(e.lanes&l&&(vr(e,t),Ga(t,null,null,l),Ya()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ut(t,re,a)):(a=s.cache,Ut(t,re,a),a!==i.cache&&pr(t,[re],l,!0))),pe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function dt(e){e.flags|=4}function Mn(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw gl=bs,vo}else e.flags&=-16777217}function Pu(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Mm(t))if(um())e.flags|=8192;else throw gl=bs,vo}function Bi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cf():536870912,e.lanes|=t,ia|=t)}function ja(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function J(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function ig(e,t,l){var a=t.pendingProps;switch(ho(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(t),null;case 1:return J(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),St(re),Il(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Al(t)?dt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zn())),J(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(dt(t),s!==null?(J(t),Pu(t,s)):(J(t),Mn(t,i,null,a,l))):s?s!==e.memoizedState?(dt(t),J(t),Pu(t,s)):(J(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&dt(t),J(t),Mn(t,i,e,a,l)),null;case 27:if(fs(t),l=Zt.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return J(t),null}e=nt.current,Al(t)?Au(t):(e=_m(i,a,l),t.stateNode=e,dt(t))}return J(t),null;case 5:if(fs(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return J(t),null}if(s=nt.current,Al(t))Au(t);else{var n=Ms(Zt.current);switch(s){case 1:s=n.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=n.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=n.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?n.createElement(i,{is:a.is}):n.createElement(i)}}s[ge]=t,s[_e]=a;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)s.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=s;e:switch(xe(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&dt(t)}}return J(t),Mn(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&dt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(y(166));if(e=Zt.current,Al(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=ve,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Em(e.nodeValue,l)),e||tl(t,!0)}else e=Ms(e).createTextNode(a),e[ge]=t,t.stateNode=e}return J(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Al(t),l!==null){if(e===null){if(!a)throw Error(y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[ge]=t}else bl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),e=!1}else l=zn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Me(t),t):(Me(t),null);if(t.flags&128)throw Error(y(558))}return J(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Al(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[ge]=t}else bl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),i=!1}else i=zn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Me(t),t):(Me(t),null)}return Me(t),t.flags&128?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Bi(t,t.updateQueue),J(t),null);case 4:return Il(),e===null&&Yo(t.stateNode.containerInfo),J(t),null;case 10:return St(t.type),J(t),null;case 19:if(he(ae),a=t.memoizedState,a===null)return J(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)ja(a,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,ja(a,!1),e=s.updateQueue,t.updateQueue=e,Bi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Lf(l,e),l=l.sibling;return K(ae,ae.current&1|2),B&&gt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ke()>js&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304)}else{if(!i)if(e=ys(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bi(t,e),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!B)return J(t),null}else 2*ke()-a.renderingStartTime>js&&l!==536870912&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ke(),e.sibling=null,l=ae.current,K(ae,i?l&1|2:l&1),B&&gt(t,a.treeForkCount),e):(J(t),null);case 22:case 23:return Me(t),xo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?l&536870912&&!(t.flags&128)&&(J(t),t.subtreeFlags&6&&(t.flags|=8192)):J(t),l=t.updateQueue,l!==null&&Bi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&he(pl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),St(re),J(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function sg(e,t){switch(ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return St(re),Il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fs(t),null;case 31:if(t.memoizedState!==null){if(Me(t),t.alternate===null)throw Error(y(340));bl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Me(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));bl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ae),null;case 4:return Il(),null;case 10:return St(t.type),null;case 22:case 23:return Me(t),xo(),e!==null&&he(pl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return St(re),null;case 25:return null;default:return null}}function Ld(e,t){switch(ho(t),t.tag){case 3:St(re),Il();break;case 26:case 27:case 5:fs(t);break;case 4:Il();break;case 31:t.memoizedState!==null&&Me(t);break;case 13:Me(t);break;case 19:he(ae);break;case 10:St(t.type);break;case 22:case 23:Me(t),xo(),e!==null&&he(pl);break;case 24:St(re)}}function bi(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var s=l.create,n=l.inst;a=s(),n.destroy=a}l=l.next}while(l!==i)}}catch(r){Q(t,t.return,r)}}function ll(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var n=a.inst,r=n.destroy;if(r!==void 0){n.destroy=void 0,i=t;var o=l,c=r;try{c()}catch(p){Q(i,o,p)}}}a=a.next}while(a!==s)}}catch(p){Q(t,t.return,p)}}function Yd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Wf(t,l)}catch(a){Q(e,e.return,a)}}}function Gd(e,t,l){l.props=Sl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Q(e,t,a)}}function Xa(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){Q(e,t,i)}}function st(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Q(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Q(e,t,i)}else l.current=null}function Qd(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Q(e,e.return,i)}}function Dn(e,t,l){try{var a=e.stateNode;Ng(a,e.type,l,t),a[_e]=t}catch(i){Q(e,e.return,i)}}function Xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sl(e.type)||e.tag===4}function Cn(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ar(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=xt));else if(a!==4&&(a===27&&sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Ar(e,t,l),e=e.sibling;e!==null;)Ar(e,t,l),e=e.sibling}function Es(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Es(e,t,l),e=e.sibling;e!==null;)Es(e,t,l),e=e.sibling}function Zd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);xe(t,a,l),t[ge]=e,t[_e]=l}catch(s){Q(e,e.return,s)}}var vt=!1,ne=!1,kn=!1,ec=typeof WeakSet=="function"?WeakSet:Set,de=null;function ng(e,t){if(e=e.containerInfo,kr=Us,e=Mf(e),oo(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var n=0,r=-1,o=-1,c=0,p=0,f=e,h=null;t:for(;;){for(var v;f!==l||i!==0&&f.nodeType!==3||(r=n+i),f!==s||a!==0&&f.nodeType!==3||(o=n+a),f.nodeType===3&&(n+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===l&&++c===i&&(r=n),h===s&&++p===a&&(o=n),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}l=r===-1||o===-1?null:{start:r,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ur={focusedElem:e,selectionRange:l},Us=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){switch(t=de,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,l=t,i=s.memoizedProps,s=s.memoizedState,a=l.stateNode;try{var w=Sl(l.type,i);e=a.getSnapshotBeforeUpdate(w,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(S){Q(l,l.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)qr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(y(163))}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}}function Vd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ht(e,l),a&4&&bi(5,l);break;case 1:if(ht(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(n){Q(l,l.return,n)}else{var i=Sl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(n){Q(l,l.return,n)}}a&64&&Yd(l),a&512&&Xa(l,l.return);break;case 3:if(ht(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Wf(e,t)}catch(n){Q(l,l.return,n)}}break;case 27:t===null&&a&4&&Zd(l);case 26:case 5:ht(e,l),t===null&&a&4&&Qd(l),a&512&&Xa(l,l.return);break;case 12:ht(e,l);break;case 31:ht(e,l),a&4&&$d(e,l);break;case 13:ht(e,l),a&4&&Wd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=pg.bind(null,l),kg(e,l))));break;case 22:if(a=l.memoizedState!==null||vt,!a){t=t!==null&&t.memoizedState!==null||ne,i=vt;var s=ne;vt=a,(ne=t)&&!s?pt(e,l,(l.subtreeFlags&8772)!==0):ht(e,l),vt=i,ne=s}break;case 30:break;default:ht(e,l)}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var I=null,je=!1;function mt(e,t,l){for(l=l.child;l!==null;)Jd(e,t,l),l=l.sibling}function Jd(e,t,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(fi,l)}catch{}switch(l.tag){case 26:ne||st(l,t),mt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ne||st(l,t);var a=I,i=je;sl(l.type)&&(I=l.stateNode,je=!1),mt(e,t,l),Ja(l.stateNode),I=a,je=i;break;case 5:ne||st(l,t);case 6:if(a=I,i=je,I=null,mt(e,t,l),I=a,je=i,I!==null)if(je)try{(I.nodeType===9?I.body:I.nodeName==="HTML"?I.ownerDocument.body:I).removeChild(l.stateNode)}catch(s){Q(l,t,s)}else try{I.removeChild(l.stateNode)}catch(s){Q(l,t,s)}break;case 18:I!==null&&(je?(e=I,mc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),oa(e)):mc(I,l.stateNode));break;case 4:a=I,i=je,I=l.stateNode.containerInfo,je=!0,mt(e,t,l),I=a,je=i;break;case 0:case 11:case 14:case 15:ll(2,l,t),ne||ll(4,l,t),mt(e,t,l);break;case 1:ne||(st(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Gd(l,t,a)),mt(e,t,l);break;case 21:mt(e,t,l);break;case 22:ne=(a=ne)||l.memoizedState!==null,mt(e,t,l),ne=a;break;default:mt(e,t,l)}}function $d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oa(e)}catch(l){Q(t,t.return,l)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oa(e)}catch(l){Q(t,t.return,l)}}function rg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ec),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ec),t;default:throw Error(y(435,e.tag))}}function Li(e,t){var l=rg(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=gg.bind(null,e,a);a.then(i,i)}})}function Te(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],s=e,n=t,r=n;e:for(;r!==null;){switch(r.tag){case 27:if(sl(r.type)){I=r.stateNode,je=!1;break e}break;case 5:I=r.stateNode,je=!1;break e;case 3:case 4:I=r.stateNode.containerInfo,je=!0;break e}r=r.return}if(I===null)throw Error(y(160));Jd(s,n,i),I=null,je=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}var et=null;function Fd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Te(t,e),Ee(e),a&4&&(ll(3,e,e.return),bi(3,e),ll(5,e,e.return));break;case 1:Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),a&64&&vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=et;if(Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),a&4){var s=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[hi]||s[ge]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),xe(s,a,l),s[ge]=e,me(s),a=s;break e;case"link":var n=yc("link","href",i).get(a+(l.href||""));if(n){for(var r=0;r<n.length;r++)if(s=n[r],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){n.splice(r,1);break t}}s=i.createElement(a),xe(s,a,l),i.head.appendChild(s);break;case"meta":if(n=yc("meta","content",i).get(a+(l.content||""))){for(r=0;r<n.length;r++)if(s=n[r],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){n.splice(r,1);break t}}s=i.createElement(a),xe(s,a,l),i.head.appendChild(s);break;default:throw Error(y(468,a))}s[ge]=e,me(s),a=s}e.stateNode=a}else wc(i,e.type,e.stateNode);else e.stateNode=xc(i,a,e.memoizedProps);else s!==a?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,a===null?wc(i,e.type,e.stateNode):xc(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Dn(e,e.memoizedProps,l.memoizedProps)}break;case 27:Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),l!==null&&a&4&&Dn(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Te(t,e),Ee(e),a&512&&(ne||l===null||st(l,l.return)),e.flags&32){i=e.stateNode;try{ea(i,"")}catch(w){Q(e,e.return,w)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Dn(e,i,l!==null?l.memoizedProps:i)),a&1024&&(kn=!0);break;case 6:if(Te(t,e),Ee(e),a&4){if(e.stateNode===null)throw Error(y(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(w){Q(e,e.return,w)}}break;case 3:if(is=null,i=et,et=Ds(t.containerInfo),Te(t,e),et=i,Ee(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{oa(t.containerInfo)}catch(w){Q(e,e.return,w)}kn&&(kn=!1,Id(e));break;case 4:a=et,et=Ds(e.stateNode.containerInfo),Te(t,e),Ee(e),et=a;break;case 12:Te(t,e),Ee(e);break;case 31:Te(t,e),Ee(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:Te(t,e),Ee(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ps=ke()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:i=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,c=vt,p=ne;if(vt=c||i,ne=p||o,Te(t,e),ne=p,vt=c,Ee(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||o||vt||ne||dl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(s=o.stateNode,i)n=s.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{r=o.stateNode;var f=o.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;r.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(w){Q(o,o.return,w)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(w){Q(o,o.return,w)}}}else if(t.tag===18){if(l===null){o=t;try{var v=o.stateNode;i?hc(v,!0):hc(o.stateNode,!1)}catch(w){Q(o,o.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:Te(t,e),Ee(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:Te(t,e),Ee(e)}}function Ee(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Xd(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var i=l.stateNode,s=Cn(e);Es(e,s,i);break;case 5:var n=l.stateNode;l.flags&32&&(ea(n,""),l.flags&=-33);var r=Cn(e);Es(e,r,n);break;case 3:case 4:var o=l.stateNode.containerInfo,c=Cn(e);Ar(e,c,o);break;default:throw Error(y(161))}}catch(p){Q(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Id(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Id(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ht(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vd(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ll(4,t,t.return),dl(t);break;case 1:st(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Gd(t,t.return,l),dl(t);break;case 27:Ja(t.stateNode);case 26:case 5:st(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function pt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,n=s.flags;switch(s.tag){case 0:case 11:case 15:pt(i,s,l),bi(4,s);break;case 1:if(pt(i,s,l),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){Q(a,a.return,c)}if(a=s,i=a.updateQueue,i!==null){var r=a.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)$f(o[i],r)}catch(c){Q(a,a.return,c)}}l&&n&64&&Yd(s),Xa(s,s.return);break;case 27:Zd(s);case 26:case 5:pt(i,s,l),l&&a===null&&n&4&&Qd(s),Xa(s,s.return);break;case 12:pt(i,s,l);break;case 31:pt(i,s,l),l&&n&4&&$d(i,s);break;case 13:pt(i,s,l),l&&n&4&&Wd(i,s);break;case 22:s.memoizedState===null&&pt(i,s,l),Xa(s,s.return);break;case 30:break;default:pt(i,s,l)}t=t.sibling}}function ko(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&gi(l))}function Uo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e))}function Pe(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pd(e,t,l,a),t=t.sibling}function Pd(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pe(e,t,l,a),i&2048&&bi(9,t);break;case 1:Pe(e,t,l,a);break;case 3:Pe(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gi(e)));break;case 12:if(i&2048){Pe(e,t,l,a),e=t.stateNode;try{var s=t.memoizedProps,n=s.id,r=s.onPostCommit;typeof r=="function"&&r(n,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){Q(t,t.return,o)}}else Pe(e,t,l,a);break;case 31:Pe(e,t,l,a);break;case 13:Pe(e,t,l,a);break;case 23:break;case 22:s=t.stateNode,n=t.alternate,t.memoizedState!==null?s._visibility&2?Pe(e,t,l,a):Za(e,t):s._visibility&2?Pe(e,t,l,a):(s._visibility|=2,Rl(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ko(n,t);break;case 24:Pe(e,t,l,a),i&2048&&Uo(t.alternate,t);break;default:Pe(e,t,l,a)}}function Rl(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,n=t,r=l,o=a,c=n.flags;switch(n.tag){case 0:case 11:case 15:Rl(s,n,r,o,i),bi(8,n);break;case 23:break;case 22:var p=n.stateNode;n.memoizedState!==null?p._visibility&2?Rl(s,n,r,o,i):Za(s,n):(p._visibility|=2,Rl(s,n,r,o,i)),i&&c&2048&&ko(n.alternate,n);break;case 24:Rl(s,n,r,o,i),i&&c&2048&&Uo(n.alternate,n);break;default:Rl(s,n,r,o,i)}t=t.sibling}}function Za(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:Za(l,a),i&2048&&ko(a.alternate,a);break;case 24:Za(l,a),i&2048&&Uo(a.alternate,a);break;default:Za(l,a)}t=t.sibling}}var Ca=8192;function _l(e,t,l){if(e.subtreeFlags&Ca)for(e=e.child;e!==null;)em(e,t,l),e=e.sibling}function em(e,t,l){switch(e.tag){case 26:_l(e,t,l),e.flags&Ca&&e.memoizedState!==null&&Kg(l,et,e.memoizedState,e.memoizedProps);break;case 5:_l(e,t,l);break;case 3:case 4:var a=et;et=Ds(e.stateNode.containerInfo),_l(e,t,l),et=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ca,Ca=16777216,_l(e,t,l),Ca=a):_l(e,t,l));break;default:_l(e,t,l)}}function tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Na(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];de=a,am(a,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lm(e),e=e.sibling}function lm(e){switch(e.tag){case 0:case 11:case 15:Na(e),e.flags&2048&&ll(9,e,e.return);break;case 3:Na(e);break;case 12:Na(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ls(e)):Na(e);break;default:Na(e)}}function ls(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];de=a,am(a,e)}tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ll(8,t,t.return),ls(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ls(t));break;default:ls(t)}e=e.sibling}}function am(e,t){for(;de!==null;){var l=de;switch(l.tag){case 0:case 11:case 15:ll(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:gi(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,de=a;else e:for(l=e;de!==null;){a=de;var i=a.sibling,s=a.return;if(Kd(a),a===l){de=null;break e}if(i!==null){i.return=s,de=i;break e}de=s}}}var og={getCacheForType:function(e){var t=be(re),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return be(re).controller.signal}},ug=typeof WeakMap=="function"?WeakMap:Map,L=0,V=null,H=null,q=0,G=0,Re=null,Gt=!1,ha=!1,Ho=!1,At=0,te=0,al=0,vl=0,qo=0,Ce=0,ia=0,Va=null,Ne=null,_r=!1,Ps=0,im=0,js=1/0,Ns=null,$t=null,ue=0,Wt=null,sa=null,zt=0,Or=0,Rr=null,sm=null,Ka=0,Mr=null;function qe(){return L&2&&q!==0?q&-q:_.T!==null?Lo():hf()}function nm(){if(Ce===0)if(!(q&536870912)||B){var e=Mi;Mi<<=1,!(Mi&3932160)&&(Mi=262144),Ce=e}else Ce=536870912;return e=Le.current,e!==null&&(e.flags|=32),Ce}function Ae(e,t,l){(e===V&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(na(e,0),Qt(e,q,Ce,!1)),mi(e,l),(!(L&2)||e!==V)&&(e===V&&(!(L&2)&&(vl|=l),te===4&&Qt(e,q,Ce,!1)),ct(e))}function rm(e,t,l){if(L&6)throw Error(y(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||di(e,t),i=a?dg(e,t):Un(e,t,!0),s=a;do{if(i===0){ha&&!a&&Qt(e,t,0,!1);break}else{if(l=e.current.alternate,s&&!cg(l)){i=Un(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var n=0;else n=e.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){t=n;e:{var r=e;i=Va;var o=r.current.memoizedState.isDehydrated;if(o&&(na(r,n).flags|=256),n=Un(r,n,!1),n!==2){if(Ho&&!o){r.errorRecoveryDisabledLanes|=s,vl|=s,i=4;break e}s=Ne,Ne=i,s!==null&&(Ne===null?Ne=s:Ne.push.apply(Ne,s))}i=n}if(s=!1,i!==2)continue}}if(i===1){na(e,0),Qt(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:Qt(a,t,Ce,!Gt);break e;case 2:Ne=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(i=Ps+300-ke(),10<i)){if(Qt(a,t,Ce,!Gt),Gs(a,0,!0)!==0)break e;zt=t,a.timeoutHandle=Nm(tc.bind(null,a,l,Ne,Ns,_r,t,Ce,vl,ia,Gt,s,"Throttled",-0,0),i);break e}tc(a,l,Ne,Ns,_r,t,Ce,vl,ia,Gt,s,null,-0,0)}}break}while(!0);ct(e)}function tc(e,t,l,a,i,s,n,r,o,c,p,f,h,v){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xt},em(t,s,f);var w=(s&62914560)===s?Ps-ke():(s&4194048)===s?im-ke():0;if(w=Jg(f,w),w!==null){zt=s,e.cancelPendingCommit=w(ac.bind(null,e,t,s,l,a,i,n,r,o,p,f,null,h,v)),Qt(e,s,n,!c);return}}ac(e,t,s,l,a,i,n,r,o)}function cg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],s=i.getSnapshot;i=i.value;try{if(!Be(s(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t,l,a){t&=~qo,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-He(i),n=1<<s;a[s]=-1,i&=~n}l!==0&&ff(e,l,t)}function en(){return L&6?!0:(xi(0),!1)}function Bo(){if(H!==null){if(G===0)var e=H.return;else e=H,yt=Nl=null,To(e),$l=null,ti=0,e=H;for(;e!==null;)Ld(e.alternate,e),e=e.return;H=null}}function na(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Og(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),zt=0,Bo(),V=e,H=l=wt(e.current,null),q=t,G=0,Re=null,Gt=!1,ha=di(e,t),Ho=!1,ia=Ce=qo=vl=al=te=0,Ne=Va=null,_r=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-He(a),s=1<<i;t|=e[i],a&=~s}return At=t,Vs(),l}function om(e,t){M=null,_.H=ai,t===ma||t===Js?(t=Du(),G=3):t===vo?(t=Du(),G=4):G=t===Do?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Re=t,H===null&&(te=1,zs(e,Ke(t,e.current)))}function um(){var e=Le.current;return e===null?!0:(q&4194048)===q?$e===null:(q&62914560)===q||q&536870912?e===$e:!1}function cm(){var e=_.H;return _.H=ai,e===null?ai:e}function fm(){var e=_.A;return _.A=og,e}function As(){te=4,Gt||(q&4194048)!==q&&Le.current!==null||(ha=!0),!(al&134217727)&&!(vl&134217727)||V===null||Qt(V,q,Ce,!1)}function Un(e,t,l){var a=L;L|=2;var i=cm(),s=fm();(V!==e||q!==t)&&(Ns=null,na(e,t)),t=!1;var n=te;e:do try{if(G!==0&&H!==null){var r=H,o=Re;switch(G){case 8:Bo(),n=6;break e;case 3:case 2:case 9:case 6:Le.current===null&&(t=!0);var c=G;if(G=0,Re=null,Xl(e,r,o,c),l&&ha){n=0;break e}break;default:c=G,G=0,Re=null,Xl(e,r,o,c)}}fg(),n=te;break}catch(p){om(e,p)}while(!0);return t&&e.shellSuspendCounter++,yt=Nl=null,L=a,_.H=i,_.A=s,H===null&&(V=null,q=0,Vs()),n}function fg(){for(;H!==null;)dm(H)}function dg(e,t){var l=L;L|=2;var a=cm(),i=fm();V!==e||q!==t?(Ns=null,js=ke()+500,na(e,t)):ha=di(e,t);e:do try{if(G!==0&&H!==null){t=H;var s=Re;t:switch(G){case 1:G=0,Re=null,Xl(e,t,s,1);break;case 2:case 9:if(Mu(s)){G=0,Re=null,lc(t);break}t=function(){G!==2&&G!==9||V!==e||(G=7),ct(e)},s.then(t,t);break e;case 3:G=7;break e;case 4:G=5;break e;case 7:Mu(s)?(G=0,Re=null,lc(t)):(G=0,Re=null,Xl(e,t,s,7));break;case 5:var n=null;switch(H.tag){case 26:n=H.memoizedState;case 5:case 27:var r=H;if(n?Mm(n):r.stateNode.complete){G=0,Re=null;var o=r.sibling;if(o!==null)H=o;else{var c=r.return;c!==null?(H=c,tn(c)):H=null}break t}}G=0,Re=null,Xl(e,t,s,5);break;case 6:G=0,Re=null,Xl(e,t,s,6);break;case 8:Bo(),te=6;break e;default:throw Error(y(462))}}mg();break}catch(p){om(e,p)}while(!0);return yt=Nl=null,_.H=a,_.A=i,L=l,H!==null?0:(V=null,q=0,Vs(),te)}function mg(){for(;H!==null&&!Uh();)dm(H)}function dm(e){var t=Bd(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?tn(e):H=t}function lc(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=$u(l,t,t.pendingProps,t.type,void 0,q);break;case 11:t=$u(l,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:To(t);default:Ld(l,t),t=H=Lf(t,At),t=Bd(l,t,At)}e.memoizedProps=e.pendingProps,t===null?tn(e):H=t}function Xl(e,t,l,a){yt=Nl=null,To(t),$l=null,ti=0;var i=t.return;try{if(tg(e,i,t,l,q)){te=1,zs(e,Ke(l,e.current)),H=null;return}}catch(s){if(i!==null)throw H=i,s;te=1,zs(e,Ke(l,e.current)),H=null;return}t.flags&32768?(B||a===1?e=!0:ha||q&536870912?e=!1:(Gt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Le.current,a!==null&&a.tag===13&&(a.flags|=16384))),mm(t,e)):tn(t)}function tn(e){var t=e;do{if(t.flags&32768){mm(t,Gt);return}e=t.return;var l=ig(t.alternate,t,At);if(l!==null){H=l;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);te===0&&(te=5)}function mm(e,t){do{var l=sg(e.alternate,e);if(l!==null){l.flags&=32767,H=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=l}while(e!==null);te=6,H=null}function ac(e,t,l,a,i,s,n,r,o){e.cancelPendingCommit=null;do ln();while(ue!==0);if(L&6)throw Error(y(327));if(t!==null){if(t===e.current)throw Error(y(177));if(s=t.lanes|t.childLanes,s|=uo,Vh(e,l,s,n,r,o),e===V&&(H=V=null,q=0),sa=t,Wt=e,zt=l,Or=s,Rr=i,sm=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,vg(ds,function(){return bm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=_.T,_.T=null,i=Y.p,Y.p=2,n=L,L|=4;try{ng(e,t,l)}finally{L=n,Y.p=i,_.T=a}}ue=1,hm(),pm(),gm()}}function hm(){if(ue===1){ue=0;var e=Wt,t=sa,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=_.T,_.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{Fd(t,e);var s=Ur,n=Mf(e.containerInfo),r=s.focusedElem,o=s.selectionRange;if(n!==r&&r&&r.ownerDocument&&Rf(r.ownerDocument.documentElement,r)){if(o!==null&&oo(r)){var c=o.start,p=o.end;if(p===void 0&&(p=c),"selectionStart"in r)r.selectionStart=c,r.selectionEnd=Math.min(p,r.value.length);else{var f=r.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var v=h.getSelection(),w=r.textContent.length,S=Math.min(o.start,w),z=o.end===void 0?S:Math.min(o.end,w);!v.extend&&S>z&&(n=z,z=S,S=n);var m=Eu(r,S),d=Eu(r,z);if(m&&d&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==d.node||v.focusOffset!==d.offset)){var g=f.createRange();g.setStart(m.node,m.offset),v.removeAllRanges(),S>z?(v.addRange(g),v.extend(d.node,d.offset)):(g.setEnd(d.node,d.offset),v.addRange(g))}}}}for(f=[],v=r;v=v.parentNode;)v.nodeType===1&&f.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<f.length;r++){var b=f[r];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Us=!!kr,Ur=kr=null}finally{L=i,Y.p=a,_.T=l}}e.current=t,ue=2}}function pm(){if(ue===2){ue=0;var e=Wt,t=sa,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=_.T,_.T=null;var a=Y.p;Y.p=2;var i=L;L|=4;try{Vd(e,t.alternate,t)}finally{L=i,Y.p=a,_.T=l}}ue=3}}function gm(){if(ue===4||ue===3){ue=0,Hh();var e=Wt,t=sa,l=zt,a=sm;t.subtreeFlags&10256||t.flags&10256?ue=5:(ue=0,sa=Wt=null,vm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&($t=null),to(l),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(fi,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,i=Y.p,Y.p=2,_.T=null;try{for(var s=e.onRecoverableError,n=0;n<a.length;n++){var r=a[n];s(r.value,{componentStack:r.stack})}}finally{_.T=t,Y.p=i}}zt&3&&ln(),ct(e),i=e.pendingLanes,l&261930&&i&42?e===Mr?Ka++:(Ka=0,Mr=e):Ka=0,xi(0)}}function vm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gi(t)))}function ln(){return hm(),pm(),gm(),bm()}function bm(){if(ue!==5)return!1;var e=Wt,t=Or;Or=0;var l=to(zt),a=_.T,i=Y.p;try{Y.p=32>l?32:l,_.T=null,l=Rr,Rr=null;var s=Wt,n=zt;if(ue=0,sa=Wt=null,zt=0,L&6)throw Error(y(331));var r=L;if(L|=4,lm(s.current),Pd(s,s.current,n,l),L=r,xi(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(fi,s)}catch{}return!0}finally{Y.p=i,_.T=a,vm(e,t)}}function ic(e,t,l){t=Ke(l,t),t=Er(e.stateNode,t,2),e=Jt(e,t,2),e!==null&&(mi(e,2),ct(e))}function Q(e,t,l){if(e.tag===3)ic(e,e,l);else for(;t!==null;){if(t.tag===3){ic(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($t===null||!$t.has(a))){e=Ke(l,e),l=Dd(2),a=Jt(t,l,2),a!==null&&(Cd(l,a,t,e),mi(a,2),ct(a));break}}t=t.return}}function Hn(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new ug;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Ho=!0,i.add(l),e=hg.bind(null,e,t,l),t.then(e,e))}function hg(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,V===e&&(q&l)===l&&(te===4||te===3&&(q&62914560)===q&&300>ke()-Ps?!(L&2)&&na(e,0):qo|=l,ia===q&&(ia=0)),ct(e)}function xm(e,t){t===0&&(t=cf()),e=jl(e,t),e!==null&&(mi(e,t),ct(e))}function pg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),xm(e,l)}function gg(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(t),xm(e,l)}function vg(e,t){return Pr(e,t)}var _s=null,Ml=null,Dr=!1,Os=!1,qn=!1,Xt=0;function ct(e){e!==Ml&&e.next===null&&(Ml===null?_s=Ml=e:Ml=Ml.next=e),Os=!0,Dr||(Dr=!0,xg())}function xi(e,t){if(!qn&&Os){qn=!0;do for(var l=!1,a=_s;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var n=a.suspendedLanes,r=a.pingedLanes;s=(1<<31-He(42|e)+1)-1,s&=i&~(n&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,sc(a,s))}else s=q,s=Gs(a,a===V?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(s&3)||di(a,s)||(l=!0,sc(a,s));a=a.next}while(l);qn=!1}}function bg(){ym()}function ym(){Os=Dr=!1;var e=0;Xt!==0&&_g()&&(e=Xt);for(var t=ke(),l=null,a=_s;a!==null;){var i=a.next,s=wm(a,t);s===0?(a.next=null,l===null?_s=i:l.next=i,i===null&&(Ml=l)):(l=a,(e!==0||s&3)&&(Os=!0)),a=i}ue!==0&&ue!==5||xi(e),Xt!==0&&(Xt=0)}function wm(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var n=31-He(s),r=1<<n,o=i[n];o===-1?(!(r&l)||r&a)&&(i[n]=Zh(r,t)):o<=t&&(e.expiredLanes|=r),s&=~r}if(t=V,l=q,l=Gs(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&dn(a),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||di(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&dn(a),to(l)){case 2:case 8:l=of;break;case 32:l=ds;break;case 268435456:l=uf;break;default:l=ds}return a=Sm.bind(null,e),l=Pr(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&dn(a),e.callbackPriority=2,e.callbackNode=null,2}function Sm(e,t){if(ue!==0&&ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(ln()&&e.callbackNode!==l)return null;var a=q;return a=Gs(e,e===V?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rm(e,a,t),wm(e,ke()),e.callbackNode!=null&&e.callbackNode===l?Sm.bind(null,e):null)}function sc(e,t){if(ln())return null;rm(e,t,!0)}function xg(){Rg(function(){L&6?Pr(rf,bg):ym()})}function Lo(){if(Xt===0){var e=ta;e===0&&(e=Ri,Ri<<=1,!(Ri&261888)&&(Ri=256)),Xt=e}return Xt}function nc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function rc(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function yg(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var s=nc((i[_e]||null).action),n=a.submitter;n&&(t=(t=n[_e]||null)?nc(t.formAction):n.getAttribute("formAction"),t!==null&&(s=t,n=null));var r=new Qs("action","action",null,a,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xt!==0){var o=n?rc(i,n):new FormData(i);zr(l,{pending:!0,data:o,method:i.method,action:s},null,o)}}else typeof s=="function"&&(r.preventDefault(),o=n?rc(i,n):new FormData(i),zr(l,{pending:!0,data:o,method:i.method,action:s},s,o))},currentTarget:i}]})}}for(var Bn=0;Bn<fr.length;Bn++){var Ln=fr[Bn],wg=Ln.toLowerCase(),Sg=Ln[0].toUpperCase()+Ln.slice(1);tt(wg,"on"+Sg)}tt(Cf,"onAnimationEnd");tt(kf,"onAnimationIteration");tt(Uf,"onAnimationStart");tt("dblclick","onDoubleClick");tt("focusin","onFocus");tt("focusout","onBlur");tt(qp,"onTransitionRun");tt(Bp,"onTransitionStart");tt(Lp,"onTransitionCancel");tt(Hf,"onTransitionEnd");Pl("onMouseEnter",["mouseout","mouseover"]);Pl("onMouseLeave",["mouseout","mouseover"]);Pl("onPointerEnter",["pointerout","pointerover"]);Pl("onPointerLeave",["pointerout","pointerover"]);zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zl("onBeforeInput",["compositionend","keypress","textInput","paste"]);zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function zm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var n=a.length-1;0<=n;n--){var r=a[n],o=r.instance,c=r.currentTarget;if(r=r.listener,o!==s&&i.isPropagationStopped())break e;s=r,i.currentTarget=c;try{s(i)}catch(p){hs(p)}i.currentTarget=null,s=o}else for(n=0;n<a.length;n++){if(r=a[n],o=r.instance,c=r.currentTarget,r=r.listener,o!==s&&i.isPropagationStopped())break e;s=r,i.currentTarget=c;try{s(i)}catch(p){hs(p)}i.currentTarget=null,s=o}}}}function U(e,t){var l=t[ar];l===void 0&&(l=t[ar]=new Set);var a=e+"__bubble";l.has(a)||(Tm(t,e,2,!1),l.add(a))}function Yn(e,t,l){var a=0;t&&(a|=4),Tm(l,e,a,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[Yi]){e[Yi]=!0,pf.forEach(function(l){l!=="selectionchange"&&(zg.has(l)||Yn(l,!1,e),Yn(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Yn("selectionchange",!1,t))}}function Tm(e,t,l,a){switch(Hm(t)){case 2:var i=Fg;break;case 8:i=Ig;break;default:i=Zo}l=i.bind(null,t,l,e),i=void 0,!or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function Gn(e,t,l,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var n=a.tag;if(n===3||n===4){var r=a.stateNode.containerInfo;if(r===i)break;if(n===4)for(n=a.return;n!==null;){var o=n.tag;if((o===3||o===4)&&n.stateNode.containerInfo===i)return;n=n.return}for(;r!==null;){if(n=kl(r),n===null)return;if(o=n.tag,o===5||o===6||o===26||o===27){a=s=n;continue e}r=r.parentNode}}a=a.return}zf(function(){var c=s,p=io(l),f=[];e:{var h=qf.get(e);if(h!==void 0){var v=Qs,w=e;switch(e){case"keypress":if($i(l)===0)break e;case"keydown":case"keyup":v=gp;break;case"focusin":w="focus",v=vn;break;case"focusout":w="blur",v=vn;break;case"beforeblur":case"afterblur":v=vn;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xp;break;case Cf:case kf:case Uf:v=rp;break;case Hf:v=wp;break;case"scroll":case"scrollend":v=lp;break;case"wheel":v=zp;break;case"copy":case"cut":case"paste":v=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=vu;break;case"toggle":case"beforetoggle":v=Ep}var S=(t&4)!==0,z=!S&&(e==="scroll"||e==="scrollend"),m=S?h!==null?h+"Capture":null:h;S=[];for(var d=c,g;d!==null;){var b=d;if(g=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||g===null||m===null||(b=Wa(d,m),b!=null&&S.push(si(d,b,g))),z)break;d=d.return}0<S.length&&(h=new v(h,w,null,l,p),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&l!==rr&&(w=l.relatedTarget||l.fromElement)&&(kl(w)||w[ca]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=l.relatedTarget||l.toElement,v=c,w=w?kl(w):null,w!==null&&(z=ci(w),S=w.tag,w!==z||S!==5&&S!==27&&S!==6)&&(w=null)):(v=null,w=c),v!==w)){if(S=pu,b="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=vu,b="onPointerLeave",m="onPointerEnter",d="pointer"),z=v==null?h:Ma(v),g=w==null?h:Ma(w),h=new S(b,d+"leave",v,l,p),h.target=z,h.relatedTarget=g,b=null,kl(p)===c&&(S=new S(m,d+"enter",w,l,p),S.target=g,S.relatedTarget=z,b=S),z=b,v&&w)t:{for(S=Tg,m=v,d=w,g=0,b=m;b;b=S(b))g++;b=0;for(var T=d;T;T=S(T))b++;for(;0<g-b;)m=S(m),g--;for(;0<b-g;)d=S(d),b--;for(;g--;){if(m===d||d!==null&&m===d.alternate){S=m;break t}m=S(m),d=S(d)}S=null}else S=null;v!==null&&oc(f,h,v,S,!1),w!==null&&z!==null&&oc(f,z,w,S,!0)}}e:{if(h=c?Ma(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var A=wu;else if(yu(h))if(_f)A=kp;else{A=Dp;var E=Mp}else v=h.nodeName,!v||v.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&ao(c.elementType)&&(A=wu):A=Cp;if(A&&(A=A(e,c))){Af(f,A,l,p);break e}E&&E(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&nr(h,"number",h.value)}switch(E=c?Ma(c):window,e){case"focusin":(yu(E)||E.contentEditable==="true")&&(ql=E,ur=c,qa=null);break;case"focusout":qa=ur=ql=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,ju(f,l,p);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":ju(f,l,p)}var N;if(ro)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Hl?jf(e,l)&&(O="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(O="onCompositionStart");O&&(Ef&&l.locale!=="ko"&&(Hl||O!=="onCompositionStart"?O==="onCompositionEnd"&&Hl&&(N=Tf()):(Yt=p,so="value"in Yt?Yt.value:Yt.textContent,Hl=!0)),E=Rs(c,O),0<E.length&&(O=new gu(O,e,null,l,p),f.push({event:O,listeners:E}),N?O.data=N:(N=Nf(l),N!==null&&(O.data=N)))),(N=Np?Ap(e,l):_p(e,l))&&(O=Rs(c,"onBeforeInput"),0<O.length&&(E=new gu("onBeforeInput","beforeinput",null,l,p),f.push({event:E,listeners:O}),E.data=N)),yg(f,e,c,l,p)}zm(f,t)})}function si(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Rs(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Wa(e,l),i!=null&&a.unshift(si(e,i,s)),i=Wa(e,t),i!=null&&a.push(si(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function oc(e,t,l,a,i){for(var s=t._reactName,n=[];l!==null&&l!==a;){var r=l,o=r.alternate,c=r.stateNode;if(r=r.tag,o!==null&&o===a)break;r!==5&&r!==26&&r!==27||c===null||(o=c,i?(c=Wa(l,s),c!=null&&n.unshift(si(l,c,o))):i||(c=Wa(l,s),c!=null&&n.push(si(l,c,o)))),l=l.return}n.length!==0&&e.push({event:t,listeners:n})}var Eg=/\r\n?/g,jg=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(Eg,`
`).replace(jg,"")}function Em(e,t){return t=uc(t),uc(e)===t}function X(e,t,l,a,i,s){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ea(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,l,a);break;case"style":Sf(e,a,s);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ki(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(t!=="input"&&X(e,t,"name",i.name,i,null),X(e,t,"formEncType",i.formEncType,i,null),X(e,t,"formMethod",i.formMethod,i,null),X(e,t,"formTarget",i.formTarget,i,null)):(X(e,t,"encType",i.encType,i,null),X(e,t,"method",i.method,i,null),X(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ki(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=xt);break;case"onScroll":a!=null&&U("scroll",e);break;case"onScrollEnd":a!=null&&U("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Ki(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":U("beforetoggle",e),U("toggle",e),Vi(e,"popover",a);break;case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Vi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ep.get(l)||l,Vi(e,l,a))}}function Cr(e,t,l,a,i,s){switch(l){case"style":Sf(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ea(e,a):(typeof a=="number"||typeof a=="bigint")&&ea(e,""+a);break;case"onScroll":a!=null&&U("scroll",e);break;case"onScrollEnd":a!=null&&U("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),s=e[_e]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Vi(e,l,a)}}}function xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",e),U("load",e);var a=!1,i=!1,s;for(s in l)if(l.hasOwnProperty(s)){var n=l[s];if(n!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:X(e,t,s,n,l,null)}}i&&X(e,t,"srcSet",l.srcSet,l,null),a&&X(e,t,"src",l.src,l,null);return;case"input":U("invalid",e);var r=s=n=i=null,o=null,c=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":i=p;break;case"type":n=p;break;case"checked":o=p;break;case"defaultChecked":c=p;break;case"value":s=p;break;case"defaultValue":r=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,t));break;default:X(e,t,a,p,l,null)}}xf(e,s,r,o,c,n,i,!1);return;case"select":U("invalid",e),a=n=s=null;for(i in l)if(l.hasOwnProperty(i)&&(r=l[i],r!=null))switch(i){case"value":s=r;break;case"defaultValue":n=r;break;case"multiple":a=r;default:X(e,t,i,r,l,null)}t=s,l=n,e.multiple=!!a,t!=null?Vl(e,!!a,t,!1):l!=null&&Vl(e,!!a,l,!0);return;case"textarea":U("invalid",e),s=i=a=null;for(n in l)if(l.hasOwnProperty(n)&&(r=l[n],r!=null))switch(n){case"value":a=r;break;case"defaultValue":i=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(y(91));break;default:X(e,t,n,r,l,null)}wf(e,a,i,s);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:X(e,t,o,a,l,null)}return;case"dialog":U("beforetoggle",e),U("toggle",e),U("cancel",e),U("close",e);break;case"iframe":case"object":U("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)U(ii[a],e);break;case"image":U("error",e),U("load",e);break;case"details":U("toggle",e);break;case"embed":case"source":case"link":U("error",e),U("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in l)if(l.hasOwnProperty(c)&&(a=l[c],a!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:X(e,t,c,a,l,null)}return;default:if(ao(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&Cr(e,t,p,a,l,void 0));return}}for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null&&X(e,t,r,a,l,null))}function Ng(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,n=null,r=null,o=null,c=null,p=null;for(v in l){var f=l[v];if(l.hasOwnProperty(v)&&f!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=f;default:a.hasOwnProperty(v)||X(e,t,v,null,a,f)}}for(var h in a){var v=a[h];if(f=l[h],a.hasOwnProperty(h)&&(v!=null||f!=null))switch(h){case"type":s=v;break;case"name":i=v;break;case"checked":c=v;break;case"defaultChecked":p=v;break;case"value":n=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,t));break;default:v!==f&&X(e,t,h,v,a,f)}}sr(e,n,r,o,c,p,s,i);return;case"select":v=n=r=h=null;for(s in l)if(o=l[s],l.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":v=o;default:a.hasOwnProperty(s)||X(e,t,s,null,a,o)}for(i in a)if(s=a[i],o=l[i],a.hasOwnProperty(i)&&(s!=null||o!=null))switch(i){case"value":h=s;break;case"defaultValue":r=s;break;case"multiple":n=s;default:s!==o&&X(e,t,i,s,a,o)}t=r,l=n,a=v,h!=null?Vl(e,!!l,h,!1):!!a!=!!l&&(t!=null?Vl(e,!!l,t,!0):Vl(e,!!l,l?[]:"",!1));return;case"textarea":v=h=null;for(r in l)if(i=l[r],l.hasOwnProperty(r)&&i!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:X(e,t,r,null,a,i)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":h=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==s&&X(e,t,n,i,a,s)}yf(e,h,v);return;case"option":for(var w in l)if(h=l[w],l.hasOwnProperty(w)&&h!=null&&!a.hasOwnProperty(w))switch(w){case"selected":e.selected=!1;break;default:X(e,t,w,null,a,h)}for(o in a)if(h=a[o],v=l[o],a.hasOwnProperty(o)&&h!==v&&(h!=null||v!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:X(e,t,o,h,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in l)h=l[S],l.hasOwnProperty(S)&&h!=null&&!a.hasOwnProperty(S)&&X(e,t,S,null,a,h);for(c in a)if(h=a[c],v=l[c],a.hasOwnProperty(c)&&h!==v&&(h!=null||v!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,t));break;default:X(e,t,c,h,a,v)}return;default:if(ao(t)){for(var z in l)h=l[z],l.hasOwnProperty(z)&&h!==void 0&&!a.hasOwnProperty(z)&&Cr(e,t,z,void 0,a,h);for(p in a)h=a[p],v=l[p],!a.hasOwnProperty(p)||h===v||h===void 0&&v===void 0||Cr(e,t,p,h,a,v);return}}for(var m in l)h=l[m],l.hasOwnProperty(m)&&h!=null&&!a.hasOwnProperty(m)&&X(e,t,m,null,a,h);for(f in a)h=a[f],v=l[f],!a.hasOwnProperty(f)||h===v||h==null&&v==null||X(e,t,f,h,a,v)}function cc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ag(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],s=i.transferSize,n=i.initiatorType,r=i.duration;if(s&&r&&cc(n)){for(n=0,r=i.responseEnd,a+=1;a<l.length;a++){var o=l[a],c=o.startTime;if(c>r)break;var p=o.transferSize,f=o.initiatorType;p&&cc(f)&&(o=o.responseEnd,n+=p*(o<r?1:(r-c)/(o-c)))}if(--a,t+=8*(s+n)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kr=null,Ur=null;function Ms(e){return e.nodeType===9?e:e.ownerDocument}function fc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qn=null;function _g(){var e=window.event;return e&&e.type==="popstate"?e===Qn?!1:(Qn=e,!0):(Qn=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(Mg)}:Nm;function Mg(e){setTimeout(function(){throw e})}function sl(e){return e==="head"}function mc(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),oa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ja(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ja(l);for(var s=l.firstChild;s;){var n=s.nextSibling,r=s.nodeName;s[hi]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=n}}else l==="body"&&Ja(e.ownerDocument.body);l=i}while(l);oa(t)}function hc(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function qr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":qr(l),lo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Dg(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[hi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function Cg(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=We(e.nextSibling),e===null))return null;return e}function Am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=We(e.nextSibling),e===null))return null;return e}function Br(e){return e.data==="$?"||e.data==="$~"}function Lr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kg(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function We(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yr=null;function pc(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return We(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function _m(e,t,l){switch(t=Ms(l),e){case"html":if(e=t.documentElement,!e)throw Error(y(452));return e;case"head":if(e=t.head,!e)throw Error(y(453));return e;case"body":if(e=t.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function Ja(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lo(e)}var Fe=new Map,vc=new Set;function Ds(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ot=Y.d;Y.d={f:Ug,r:Hg,D:qg,C:Bg,L:Lg,m:Yg,X:Qg,S:Gg,M:Xg};function Ug(){var e=Ot.f(),t=en();return e||t}function Hg(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?Sd(t):Ot.r(e)}var pa=typeof document>"u"?null:document;function Om(e,t,l){var a=pa;if(a&&typeof t=="string"&&t){var i=Ve(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),vc.has(i)||(vc.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),xe(t,"link",e),me(t),a.head.appendChild(t)))}}function qg(e){Ot.D(e),Om("dns-prefetch",e,null)}function Bg(e,t){Ot.C(e,t),Om("preconnect",e,t)}function Lg(e,t,l){Ot.L(e,t,l);var a=pa;if(a&&e&&t){var i='link[rel="preload"][as="'+Ve(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Ve(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Ve(l.imageSizes)+'"]')):i+='[href="'+Ve(e)+'"]';var s=i;switch(t){case"style":s=ra(e);break;case"script":s=ga(e)}Fe.has(s)||(e=F({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Fe.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(yi(s))||t==="script"&&a.querySelector(wi(s))||(t=a.createElement("link"),xe(t,"link",e),me(t),a.head.appendChild(t)))}}function Yg(e,t){Ot.m(e,t);var l=pa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ve(a)+'"][href="'+Ve(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ga(e)}if(!Fe.has(s)&&(e=F({rel:"modulepreload",href:e},t),Fe.set(s,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(wi(s)))return}a=l.createElement("link"),xe(a,"link",e),me(a),l.head.appendChild(a)}}}function Gg(e,t,l){Ot.S(e,t,l);var a=pa;if(a&&e){var i=Zl(a).hoistableStyles,s=ra(e);t=t||"default";var n=i.get(s);if(!n){var r={loading:0,preload:null};if(n=a.querySelector(yi(s)))r.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Fe.get(s))&&Go(e,l);var o=n=a.createElement("link");me(o),xe(o,"link",e),o._p=new Promise(function(c,p){o.onload=c,o.onerror=p}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,as(n,t,a)}n={type:"stylesheet",instance:n,count:1,state:r},i.set(s,n)}}}function Qg(e,t){Ot.X(e,t);var l=pa;if(l&&e){var a=Zl(l).hoistableScripts,i=ga(e),s=a.get(i);s||(s=l.querySelector(wi(i)),s||(e=F({src:e,async:!0},t),(t=Fe.get(i))&&Qo(e,t),s=l.createElement("script"),me(s),xe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Xg(e,t){Ot.M(e,t);var l=pa;if(l&&e){var a=Zl(l).hoistableScripts,i=ga(e),s=a.get(i);s||(s=l.querySelector(wi(i)),s||(e=F({src:e,async:!0,type:"module"},t),(t=Fe.get(i))&&Qo(e,t),s=l.createElement("script"),me(s),xe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function bc(e,t,l,a){var i=(i=Zt.current)?Ds(i):null;if(!i)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ra(l.href),l=Zl(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ra(l.href);var s=Zl(i).hoistableStyles,n=s.get(e);if(n||(i=i.ownerDocument||i,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,n),(s=i.querySelector(yi(e)))&&!s._p&&(n.instance=s,n.state.loading=5),Fe.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Fe.set(e,l),s||Zg(i,e,l,n.state))),t&&a===null)throw Error(y(528,""));return n}if(t&&a!==null)throw Error(y(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ga(l),l=Zl(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function ra(e){return'href="'+Ve(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function Rm(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Zg(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),xe(t,"link",l),me(t),e.head.appendChild(t))}function ga(e){return'[src="'+Ve(e)+'"]'}function wi(e){return"script[async]"+e}function xc(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ve(l.href)+'"]');if(a)return t.instance=a,me(a),a;var i=F({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),me(a),xe(a,"style",i),as(a,l.precedence,e),t.instance=a;case"stylesheet":i=ra(l.href);var s=e.querySelector(yi(i));if(s)return t.state.loading|=4,t.instance=s,me(s),s;a=Rm(l),(i=Fe.get(i))&&Go(a,i),s=(e.ownerDocument||e).createElement("link"),me(s);var n=s;return n._p=new Promise(function(r,o){n.onload=r,n.onerror=o}),xe(s,"link",a),t.state.loading|=4,as(s,l.precedence,e),t.instance=s;case"script":return s=ga(l.src),(i=e.querySelector(wi(s)))?(t.instance=i,me(i),i):(a=l,(i=Fe.get(s))&&(a=F({},l),Qo(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),me(i),xe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,as(a,l.precedence,e));return t.instance}function as(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,n=0;n<a.length;n++){var r=a[n];if(r.dataset.precedence===t)s=r;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Go(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var is=null;function yc(e,t,l){if(is===null){var a=new Map,i=is=new Map;i.set(l,a)}else i=is,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var s=l[i];if(!(s[hi]||s[ge]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var n=s.getAttribute(t)||"";n=e+n;var r=a.get(n);r?r.push(s):a.set(n,[s])}}return a}function wc(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Vg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Kg(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var i=ra(a.href),s=t.querySelector(yi(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cs.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=s,me(s);return}s=t.ownerDocument||t,a=Rm(a),(i=Fe.get(i))&&Go(a,i),s=s.createElement("link"),me(s);var n=s;n._p=new Promise(function(r,o){n.onload=r,n.onerror=o}),xe(s,"link",a),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Cs.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Xn=0;function Jg(e,t){return e.stylesheets&&e.count===0&&ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Xn===0&&(Xn=62500*Ag());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Xn?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Cs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ks=null;function ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ks=new Map,t.forEach($g,e),ks=null,Cs.call(e))}function $g(e,t){if(!(t.state.loading&4)){var l=ks.get(e);if(l)var a=l.get(null);else{l=new Map,ks.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var n=i[s];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(l.set(n.dataset.precedence,n),a=n)}a&&l.set(null,a)}i=t.instance,n=i.getAttribute("data-precedence"),s=l.get(n)||a,s===a&&l.set(null,i),l.set(n,i),this.count++,a=Cs.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ni={$$typeof:bt,Provider:null,Consumer:null,_currentValue:ml,_currentValue2:ml,_threadCount:0};function Wg(e,t,l,a,i,s,n,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.hiddenUpdates=mn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Dm(e,t,l,a,i,s,n,r,o,c,p,f){return e=new Wg(e,t,l,n,o,c,p,f,r),t=1,s===!0&&(t|=24),s=De(3,null,null,t),e.current=s,s.stateNode=e,t=po(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:l,cache:t},bo(s),e}function Cm(e){return e?(e=Yl,e):Yl}function km(e,t,l,a,i,s){i=Cm(i),a.context===null?a.context=i:a.pendingContext=i,a=Kt(t),a.payload={element:l},s=s===void 0?null:s,s!==null&&(a.callback=s),l=Jt(e,a,t),l!==null&&(Ae(l,e,t),La(l,e,t))}function Sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Xo(e,t){Sc(e,t),(e=e.alternate)&&Sc(e,t)}function Um(e){if(e.tag===13||e.tag===31){var t=jl(e,67108864);t!==null&&Ae(t,e,67108864),Xo(e,67108864)}}function zc(e){if(e.tag===13||e.tag===31){var t=qe();t=eo(t);var l=jl(e,t);l!==null&&Ae(l,e,t),Xo(e,t)}}var Us=!0;function Fg(e,t,l,a){var i=_.T;_.T=null;var s=Y.p;try{Y.p=2,Zo(e,t,l,a)}finally{Y.p=s,_.T=i}}function Ig(e,t,l,a){var i=_.T;_.T=null;var s=Y.p;try{Y.p=8,Zo(e,t,l,a)}finally{Y.p=s,_.T=i}}function Zo(e,t,l,a){if(Us){var i=Gr(a);if(i===null)Gn(e,t,a,Hs,l),Tc(e,a);else if(ev(i,e,t,l,a))a.stopPropagation();else if(Tc(e,a),t&4&&-1<Pg.indexOf(e)){for(;i!==null;){var s=fa(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var n=cl(s.pendingLanes);if(n!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;n;){var o=1<<31-He(n);r.entanglements[1]|=o,n&=~o}ct(s),!(L&6)&&(js=ke()+500,xi(0))}}break;case 31:case 13:r=jl(s,2),r!==null&&Ae(r,s,2),en(),Xo(s,2)}if(s=Gr(a),s===null&&Gn(e,t,a,Hs,l),s===i)break;i=s}i!==null&&a.stopPropagation()}else Gn(e,t,a,null,l)}}function Gr(e){return e=io(e),Vo(e)}var Hs=null;function Vo(e){if(Hs=null,e=kl(e),e!==null){var t=ci(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=tf(t),e!==null)return e;e=null}else if(l===31){if(e=lf(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hs=e,null}function Hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qh()){case rf:return 2;case of:return 8;case ds:case Bh:return 32;case uf:return 268435456;default:return 32}default:return 32}}var Qr=!1,Ft=null,It=null,Pt=null,ri=new Map,oi=new Map,Bt=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Aa(e,t,l,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=fa(t),t!==null&&Um(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ev(e,t,l,a,i){switch(t){case"focusin":return Ft=Aa(Ft,e,t,l,a,i),!0;case"dragenter":return It=Aa(It,e,t,l,a,i),!0;case"mouseover":return Pt=Aa(Pt,e,t,l,a,i),!0;case"pointerover":var s=i.pointerId;return ri.set(s,Aa(ri.get(s)||null,e,t,l,a,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Aa(oi.get(s)||null,e,t,l,a,i)),!0}return!1}function qm(e){var t=kl(e.target);if(t!==null){var l=ci(t);if(l!==null){if(t=l.tag,t===13){if(t=tf(l),t!==null){e.blockedOn=t,ou(e.priority,function(){zc(l)});return}}else if(t===31){if(t=lf(l),t!==null){e.blockedOn=t,ou(e.priority,function(){zc(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Gr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);rr=a,l.target.dispatchEvent(a),rr=null}else return t=fa(l),t!==null&&Um(t),e.blockedOn=l,!1;t.shift()}return!0}function Ec(e,t,l){ns(e)&&l.delete(t)}function tv(){Qr=!1,Ft!==null&&ns(Ft)&&(Ft=null),It!==null&&ns(It)&&(It=null),Pt!==null&&ns(Pt)&&(Pt=null),ri.forEach(Ec),oi.forEach(Ec)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Qr||(Qr=!0,ce.unstable_scheduleCallback(ce.unstable_NormalPriority,tv)))}var Qi=null;function jc(e){Qi!==e&&(Qi=e,ce.unstable_scheduleCallback(ce.unstable_NormalPriority,function(){Qi===e&&(Qi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Vo(a||l)===null)continue;break}var s=fa(l);s!==null&&(e.splice(t,3),t-=3,zr(s,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function oa(e){function t(o){return Gi(o,e)}Ft!==null&&Gi(Ft,e),It!==null&&Gi(It,e),Pt!==null&&Gi(Pt,e),ri.forEach(t),oi.forEach(t);for(var l=0;l<Bt.length;l++){var a=Bt[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Bt.length&&(l=Bt[0],l.blockedOn===null);)qm(l),l.blockedOn===null&&Bt.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],s=l[a+1],n=i[_e]||null;if(typeof s=="function")n||jc(l);else if(n){var r=null;if(s&&s.hasAttribute("formAction")){if(i=s,n=s[_e]||null)r=n.formAction;else if(Vo(i)!==null)continue}else r=n.action;typeof r=="function"?l[a+1]=r:(l.splice(a,3),a-=3),jc(l)}}}function Bm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(n){return i=n})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Ko(e){this._internalRoot=e}an.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));var l=t.current,a=qe();km(l,a,e,t,null,null)};an.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;km(e.current,2,null,e,null,null),en(),t[ca]=null}};function an(e){this._internalRoot=e}an.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Bt.length&&t!==0&&t<Bt[l].priority;l++);Bt.splice(l,0,e),l===0&&qm(e)}};var Nc=Pc.version;if(Nc!=="19.2.4")throw Error(y(527,Nc,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Rh(t),e=e!==null?af(e):null,e=e===null?null:e.stateNode,e};var lv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{fi=Xi.inject(lv),Ue=Xi}catch{}}Ls.createRoot=function(e,t){if(!ef(e))throw Error(y(299));var l=!1,a="",i=Od,s=Rd,n=Md;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=Dm(e,1,!1,null,null,l,a,null,i,s,n,Bm),e[ca]=t.current,Yo(e),new Ko(t)};Ls.hydrateRoot=function(e,t,l){if(!ef(e))throw Error(y(299));var a=!1,i="",s=Od,n=Rd,r=Md,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=Dm(e,1,!0,t,l??null,a,i,o,s,n,r,Bm),t.context=Cm(null),l=t.current,a=qe(),a=eo(a),i=Kt(a),i.callback=null,Jt(l,i,a),l=a,t.current.lanes=l,mi(t,l),ct(t),e[ca]=t.current,Yo(e),new an(t)};Ls.version="19.2.4";function Lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)}catch(e){console.error(e)}}Lm(),Kc.exports=Ls;var av=Kc.exports;const iv=Hc(av);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ac="popstate";function _c(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function sv(e={}){function t(a,i){var c;let s=(c=i.state)==null?void 0:c.masked,{pathname:n,search:r,hash:o}=s||a.location;return Xr("",{pathname:n,search:r,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function l(a,i){return typeof i=="string"?i:ui(i)}return rv(t,l,null,e)}function P(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nv(){return Math.random().toString(36).substring(2,10)}function Oc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Xr(e,t,l=null,a,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?va(t):t,state:l,key:t&&t.key||a||nv(),unstable_mask:i}}function ui({pathname:e="/",search:t="",hash:l=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function va(e){let t={};if(e){let l=e.indexOf("#");l>=0&&(t.hash=e.substring(l),e=e.substring(0,l));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function rv(e,t,l,a={}){let{window:i=document.defaultView,v5Compat:s=!1}=a,n=i.history,r="POP",o=null,c=p();c==null&&(c=0,n.replaceState({...n.state,idx:c},""));function p(){return(n.state||{idx:null}).idx}function f(){r="POP";let z=p(),m=z==null?null:z-c;c=z,o&&o({action:r,location:S.location,delta:m})}function h(z,m){r="PUSH";let d=_c(z)?z:Xr(S.location,z,m);c=p()+1;let g=Oc(d,c),b=S.createHref(d.unstable_mask||d);try{n.pushState(g,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(b)}s&&o&&o({action:r,location:S.location,delta:1})}function v(z,m){r="REPLACE";let d=_c(z)?z:Xr(S.location,z,m);c=p();let g=Oc(d,c),b=S.createHref(d.unstable_mask||d);n.replaceState(g,"",b),s&&o&&o({action:r,location:S.location,delta:0})}function w(z){return ov(z)}let S={get action(){return r},get location(){return e(i,n)},listen(z){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(Ac,f),o=z,()=>{i.removeEventListener(Ac,f),o=null}},createHref(z){return t(i,z)},createURL:w,encodeLocation(z){let m=w(z);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(z){return n.go(z)}};return S}function ov(e,t=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),P(l,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:ui(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=l+a),new URL(a,l)}function Ym(e,t,l="/"){return uv(e,t,l,!1)}function uv(e,t,l,a){let i=typeof t=="string"?va(t):t,s=_t(i.pathname||"/",l);if(s==null)return null;let n=Gm(e);cv(n);let r=null;for(let o=0;r==null&&o<n.length;++o){let c=wv(s);r=xv(n[o],c,a)}return r}function Gm(e,t=[],l=[],a="",i=!1){let s=(n,r,o=i,c)=>{let p={relativePath:c===void 0?n.path||"":c,caseSensitive:n.caseSensitive===!0,childrenIndex:r,route:n};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(a)&&o)return;P(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length)}let f=rt([a,p.relativePath]),h=l.concat(p);n.children&&n.children.length>0&&(P(n.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Gm(n.children,t,h,f,o)),!(n.path==null&&!n.index)&&t.push({path:f,score:vv(f,n.index),routesMeta:h})};return e.forEach((n,r)=>{var o;if(n.path===""||!((o=n.path)!=null&&o.includes("?")))s(n,r);else for(let c of Qm(n.path))s(n,r,!0,c)}),t}function Qm(e){let t=e.split("/");if(t.length===0)return[];let[l,...a]=t,i=l.endsWith("?"),s=l.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let n=Qm(a.join("/")),r=[];return r.push(...n.map(o=>o===""?s:[s,o].join("/"))),i&&r.push(...n),r.map(o=>e.startsWith("/")&&o===""?"/":o)}function cv(e){e.sort((t,l)=>t.score!==l.score?l.score-t.score:bv(t.routesMeta.map(a=>a.childrenIndex),l.routesMeta.map(a=>a.childrenIndex)))}var fv=/^:[\w-]+$/,dv=3,mv=2,hv=1,pv=10,gv=-2,Rc=e=>e==="*";function vv(e,t){let l=e.split("/"),a=l.length;return l.some(Rc)&&(a+=gv),t&&(a+=mv),l.filter(i=>!Rc(i)).reduce((i,s)=>i+(fv.test(s)?dv:s===""?hv:pv),a)}function bv(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function xv(e,t,l=!1){let{routesMeta:a}=e,i={},s="/",n=[];for(let r=0;r<a.length;++r){let o=a[r],c=r===a.length-1,p=s==="/"?t:t.slice(s.length)||"/",f=qs({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},p),h=o.route;if(!f&&c&&l&&!a[a.length-1].route.index&&(f=qs({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},p)),!f)return null;Object.assign(i,f.params),n.push({params:i,pathname:rt([s,f.pathname]),pathnameBase:Ev(rt([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=rt([s,f.pathnameBase]))}return n}function qs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,a]=yv(e.path,e.caseSensitive,e.end),i=t.match(l);if(!i)return null;let s=i[0],n=s.replace(/(.)\/+$/,"$1"),r=i.slice(1);return{params:a.reduce((c,{paramName:p,isOptional:f},h)=>{if(p==="*"){let w=r[h]||"";n=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=r[h];return f&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:n,pattern:e}}function yv(e,t=!1,l=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,r,o,c,p)=>{if(a.push({paramName:r,isOptional:o!=null}),o){let f=p.charAt(c+n.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function wv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _t(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let l=t.endsWith("/")?t.length-1:t.length,a=e.charAt(l);return a&&a!=="/"?null:e.slice(l)||"/"}var Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function zv(e,t="/"){let{pathname:l,search:a="",hash:i=""}=typeof e=="string"?va(e):e,s;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?s=Mc(l.substring(1),"/"):s=Mc(l,t)):s=t,{pathname:s,search:jv(a),hash:Nv(i)}}function Mc(e,t){let l=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?l.length>1&&l.pop():i!=="."&&l.push(i)}),l.length>1?l.join("/"):"/"}function Zn(e,t,l,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tv(e){return e.filter((t,l)=>l===0||t.route.path&&t.route.path.length>0)}function Xm(e){let t=Tv(e);return t.map((l,a)=>a===t.length-1?l.pathname:l.pathnameBase)}function Jo(e,t,l,a=!1){let i;typeof e=="string"?i=va(e):(i={...e},P(!i.pathname||!i.pathname.includes("?"),Zn("?","pathname","search",i)),P(!i.pathname||!i.pathname.includes("#"),Zn("#","pathname","hash",i)),P(!i.search||!i.search.includes("#"),Zn("#","search","hash",i)));let s=e===""||i.pathname==="",n=s?"/":i.pathname,r;if(n==null)r=l;else{let f=t.length-1;if(!a&&n.startsWith("..")){let h=n.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}r=f>=0?t[f]:"/"}let o=zv(i,r),c=n&&n!=="/"&&n.endsWith("/"),p=(s||n===".")&&l.endsWith("/");return!o.pathname.endsWith("/")&&(c||p)&&(o.pathname+="/"),o}var rt=e=>e.join("/").replace(/\/\/+/g,"/"),Ev=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Av=class{constructor(e,t,l,a=!1){this.status=e,this.statusText=t||"",this.internal=a,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function _v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ov(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vm(e,t){let l=e;if(typeof l!="string"||!Sv.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let a=l,i=!1;if(Zm)try{let s=new URL(window.location.href),n=l.startsWith("//")?new URL(s.protocol+l):new URL(l),r=_t(n.pathname,t);n.origin===s.origin&&r!=null?l=r+n.search+n.hash:i=!0}catch{ot(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:i,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Km=["POST","PUT","PATCH","DELETE"];new Set(Km);var Rv=["GET",...Km];new Set(Rv);var ba=x.createContext(null);ba.displayName="DataRouter";var sn=x.createContext(null);sn.displayName="DataRouterState";var Mv=x.createContext(!1),Jm=x.createContext({isTransitioning:!1});Jm.displayName="ViewTransition";var Dv=x.createContext(new Map);Dv.displayName="Fetchers";var Cv=x.createContext(null);Cv.displayName="Await";var Ie=x.createContext(null);Ie.displayName="Navigation";var Si=x.createContext(null);Si.displayName="Location";var Rt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var $o=x.createContext(null);$o.displayName="RouteError";var $m="REACT_ROUTER_ERROR",kv="REDIRECT",Uv="ROUTE_ERROR_RESPONSE";function Hv(e){if(e.startsWith(`${$m}:${kv}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function qv(e){if(e.startsWith(`${$m}:${Uv}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Av(t.status,t.statusText,t.data)}catch{}}function Bv(e,{relative:t}={}){P(zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:a}=x.useContext(Ie),{hash:i,pathname:s,search:n}=Ti(e,{relative:t}),r=s;return l!=="/"&&(r=s==="/"?l:rt([l,s])),a.createHref({pathname:r,search:n,hash:i})}function zi(){return x.useContext(Si)!=null}function nl(){return P(zi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Si).location}var Wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fm(e){x.useContext(Ie).static||x.useLayoutEffect(e)}function Lv(){let{isDataRoute:e}=x.useContext(Rt);return e?Pv():Yv()}function Yv(){P(zi(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(ba),{basename:t,navigator:l}=x.useContext(Ie),{matches:a}=x.useContext(Rt),{pathname:i}=nl(),s=JSON.stringify(Xm(a)),n=x.useRef(!1);return Fm(()=>{n.current=!0}),x.useCallback((o,c={})=>{if(ot(n.current,Wm),!n.current)return;if(typeof o=="number"){l.go(o);return}let p=Jo(o,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:rt([t,p.pathname])),(c.replace?l.replace:l.push)(p,c.state,c)},[t,l,s,i,e])}x.createContext(null);function Ti(e,{relative:t}={}){let{matches:l}=x.useContext(Rt),{pathname:a}=nl(),i=JSON.stringify(Xm(l));return x.useMemo(()=>Jo(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function Gv(e,t){return Im(e,t)}function Im(e,t,l){var z;P(zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=x.useContext(Ie),{matches:i}=x.useContext(Rt),s=i[i.length-1],n=s?s.params:{},r=s?s.pathname:"/",o=s?s.pathnameBase:"/",c=s&&s.route;{let m=c&&c.path||"";eh(r,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${r}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let p=nl(),f;if(t){let m=typeof t=="string"?va(t):t;P(o==="/"||((z=m.pathname)==null?void 0:z.startsWith(o)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${m.pathname}" was given in the \`location\` prop.`),f=m}else f=p;let h=f.pathname||"/",v=h;if(o!=="/"){let m=o.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let w=Ym(e,{pathname:v});ot(c||w!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),ot(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Kv(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},n,m.params),pathname:rt([o,a.encodeLocation?a.encodeLocation(m.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?o:rt([o,a.encodeLocation?a.encodeLocation(m.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),i,l);return t&&S?x.createElement(Si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},S):S}function Qv(){let e=Iv(),t=_v(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},n=null;return console.error("Error handled by React Router default ErrorBoundary:",e),n=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"ErrorBoundary")," or"," ",x.createElement("code",{style:s},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),l?x.createElement("pre",{style:i},l):null,n)}var Xv=x.createElement(Qv,null),Pm=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const l=qv(e.digest);l&&(e=l)}let t=e!==void 0?x.createElement(Rt.Provider,{value:this.props.routeContext},x.createElement($o.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Zv,{error:e},t):t}};Pm.contextType=Mv;var Vn=new WeakMap;function Zv({children:e,error:t}){let{basename:l}=x.useContext(Ie);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=Hv(t.digest);if(a){let i=Vn.get(t);if(i)throw i;let s=Vm(a.location,l);if(Zm&&!Vn.get(t))if(s.isExternal||a.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:a.replace}));throw Vn.set(t,n),n}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}function Vv({routeContext:e,match:t,children:l}){let a=x.useContext(ba);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Rt.Provider,{value:e},l)}function Kv(e,t=[],l){let a=l==null?void 0:l.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,s=a==null?void 0:a.errors;if(s!=null){let p=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);P(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,p+1))}let n=!1,r=-1;if(l&&a){n=a.renderFallback;for(let p=0;p<i.length;p++){let f=i[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(r=p),f.route.id){let{loaderData:h,errors:v}=a,w=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l.isStatic&&(n=!0),r>=0?i=i.slice(0,r+1):i=[i[0]];break}}}}let o=l==null?void 0:l.onError,c=a&&o?(p,f)=>{var h,v;o(p,{location:a.location,params:((v=(h=a.matches)==null?void 0:h[0])==null?void 0:v.params)??{},unstable_pattern:Ov(a.matches),errorInfo:f})}:void 0;return i.reduceRight((p,f,h)=>{let v,w=!1,S=null,z=null;a&&(v=s&&f.route.id?s[f.route.id]:void 0,S=f.route.errorElement||Xv,n&&(r<0&&h===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,z=null):r===h&&(w=!0,z=f.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,h+1)),d=()=>{let g;return v?g=S:w?g=z:f.route.Component?g=x.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=p,x.createElement(Vv,{match:f,routeContext:{outlet:p,matches:m,isDataRoute:a!=null},children:g})};return a&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?x.createElement(Pm,{location:a.location,revalidation:a.revalidation,component:S,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):d()},null)}function Wo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jv(e){let t=x.useContext(ba);return P(t,Wo(e)),t}function $v(e){let t=x.useContext(sn);return P(t,Wo(e)),t}function Wv(e){let t=x.useContext(Rt);return P(t,Wo(e)),t}function Fo(e){let t=Wv(e),l=t.matches[t.matches.length-1];return P(l.route.id,`${e} can only be used on routes that contain a unique "id"`),l.route.id}function Fv(){return Fo("useRouteId")}function Iv(){var a;let e=x.useContext($o),t=$v("useRouteError"),l=Fo("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[l]}function Pv(){let{router:e}=Jv("useNavigate"),t=Fo("useNavigate"),l=x.useRef(!1);return Fm(()=>{l.current=!0}),x.useCallback(async(i,s={})=>{ot(l.current,Wm),l.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Dc={};function eh(e,t,l){!t&&!Dc[e]&&(Dc[e]=!0,ot(!1,l))}x.memo(eb);function eb({routes:e,future:t,state:l,isStatic:a,onError:i}){return Im(e,void 0,{state:l,isStatic:a,onError:i})}function Dt(e){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tb({basename:e="/",children:t=null,location:l,navigationType:a="POP",navigator:i,static:s=!1,unstable_useTransitions:n}){P(!zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let r=e.replace(/^\/*/,"/"),o=x.useMemo(()=>({basename:r,navigator:i,static:s,unstable_useTransitions:n,future:{}}),[r,i,s,n]);typeof l=="string"&&(l=va(l));let{pathname:c="/",search:p="",hash:f="",state:h=null,key:v="default",unstable_mask:w}=l,S=x.useMemo(()=>{let z=_t(c,r);return z==null?null:{location:{pathname:z,search:p,hash:f,state:h,key:v,unstable_mask:w},navigationType:a}},[r,c,p,f,h,v,a,w]);return ot(S!=null,`<Router basename="${r}"> is not able to match the URL "${c}${p}${f}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:x.createElement(Ie.Provider,{value:o},x.createElement(Si.Provider,{children:t,value:S}))}function lb({children:e,location:t}){return Gv(Zr(e),t)}function Zr(e,t=[]){let l=[];return x.Children.forEach(e,(a,i)=>{if(!x.isValidElement(a))return;let s=[...t,i];if(a.type===x.Fragment){l.push.apply(l,Zr(a.props.children,s));return}P(a.type===Dt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!a.props.index||!a.props.children,"An index route cannot have child routes.");let n={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(n.children=Zr(a.props.children,s)),l.push(n)}),l}var rs="get",os="application/x-www-form-urlencoded";function nn(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ab(e){return nn(e)&&e.tagName.toLowerCase()==="button"}function ib(e){return nn(e)&&e.tagName.toLowerCase()==="form"}function sb(e){return nn(e)&&e.tagName.toLowerCase()==="input"}function nb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rb(e,t){return e.button===0&&(!t||t==="_self")&&!nb(e)}var Zi=null;function ob(){if(Zi===null)try{new FormData(document.createElement("form"),0),Zi=!1}catch{Zi=!0}return Zi}var ub=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kn(e){return e!=null&&!ub.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`),null):e}function cb(e,t){let l,a,i,s,n;if(ib(e)){let r=e.getAttribute("action");a=r?_t(r,t):null,l=e.getAttribute("method")||rs,i=Kn(e.getAttribute("enctype"))||os,s=new FormData(e)}else if(ab(e)||sb(e)&&(e.type==="submit"||e.type==="image")){let r=e.form;if(r==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||r.getAttribute("action");if(a=o?_t(o,t):null,l=e.getAttribute("formmethod")||r.getAttribute("method")||rs,i=Kn(e.getAttribute("formenctype"))||Kn(r.getAttribute("enctype"))||os,s=new FormData(r,e),!ob()){let{name:c,type:p,value:f}=e;if(p==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,f)}}else{if(nn(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=rs,a=null,i=os,n=e}return s&&i==="text/plain"&&(n=s,s=void 0),{action:a,method:l.toLowerCase(),encType:i,formData:s,body:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Io(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fb(e,t,l,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return l?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${a}`:i.pathname=`${i.pathname}.${a}`:i.pathname==="/"?i.pathname=`_root.${a}`:t&&_t(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${a}`,i}async function db(e,t){if(e.id in t)return t[e.id];try{let l=await import(e.module);return t[e.id]=l,l}catch(l){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function hb(e,t,l){let a=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let n=await db(s,l);return n.links?n.links():[]}return[]}));return bb(a.flat(1).filter(mb).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Cc(e,t,l,a,i,s){let n=(o,c)=>l[c]?o.route.id!==l[c].route.id:!0,r=(o,c)=>{var p;return l[c].pathname!==o.pathname||((p=l[c].route.path)==null?void 0:p.endsWith("*"))&&l[c].params["*"]!==o.params["*"]};return s==="assets"?t.filter((o,c)=>n(o,c)||r(o,c)):s==="data"?t.filter((o,c)=>{var f;let p=a.routes[o.route.id];if(!p||!p.hasLoader)return!1;if(n(o,c)||r(o,c))return!0;if(o.route.shouldRevalidate){let h=o.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=l[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function pb(e,t,{includeHydrateFallback:l}={}){return gb(e.map(a=>{let i=t.routes[a.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),l&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function gb(e){return[...new Set(e)]}function vb(e){let t={},l=Object.keys(e).sort();for(let a of l)t[a]=e[a];return t}function bb(e,t){let l=new Set;return new Set(t),e.reduce((a,i)=>{let s=JSON.stringify(vb(i));return l.has(s)||(l.add(s),a.push({key:s,link:i})),a},[])}function th(){let e=x.useContext(ba);return Io(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xb(){let e=x.useContext(sn);return Io(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Po=x.createContext(void 0);Po.displayName="FrameworkContext";function lh(){let e=x.useContext(Po);return Io(e,"You must render this element inside a <HydratedRouter> element"),e}function yb(e,t){let l=x.useContext(Po),[a,i]=x.useState(!1),[s,n]=x.useState(!1),{onFocus:r,onBlur:o,onMouseEnter:c,onMouseLeave:p,onTouchStart:f}=t,h=x.useRef(null);x.useEffect(()=>{if(e==="render"&&n(!0),e==="viewport"){let S=m=>{m.forEach(d=>{n(d.isIntersecting)})},z=new IntersectionObserver(S,{threshold:.5});return h.current&&z.observe(h.current),()=>{z.disconnect()}}},[e]),x.useEffect(()=>{if(a){let S=setTimeout(()=>{n(!0)},100);return()=>{clearTimeout(S)}}},[a]);let v=()=>{i(!0)},w=()=>{i(!1),n(!1)};return l?e!=="intent"?[s,h,{}]:[s,h,{onFocus:_a(r,v),onBlur:_a(o,w),onMouseEnter:_a(c,v),onMouseLeave:_a(p,w),onTouchStart:_a(f,v)}]:[!1,h,{}]}function _a(e,t){return l=>{e&&e(l),l.defaultPrevented||t(l)}}function wb({page:e,...t}){let{router:l}=th(),a=x.useMemo(()=>Ym(l.routes,e,l.basename),[l.routes,e,l.basename]);return a?x.createElement(zb,{page:e,matches:a,...t}):null}function Sb(e){let{manifest:t,routeModules:l}=lh(),[a,i]=x.useState([]);return x.useEffect(()=>{let s=!1;return hb(e,t,l).then(n=>{s||i(n)}),()=>{s=!0}},[e,t,l]),a}function zb({page:e,matches:t,...l}){let a=nl(),{future:i,manifest:s,routeModules:n}=lh(),{basename:r}=th(),{loaderData:o,matches:c}=xb(),p=x.useMemo(()=>Cc(e,t,c,s,a,"data"),[e,t,c,s,a]),f=x.useMemo(()=>Cc(e,t,c,s,a,"assets"),[e,t,c,s,a]),h=x.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,z=!1;if(t.forEach(d=>{var b;let g=s.routes[d.route.id];!g||!g.hasLoader||(!p.some(T=>T.route.id===d.route.id)&&d.route.id in o&&((b=n[d.route.id])!=null&&b.shouldRevalidate)||g.hasClientLoader?z=!0:S.add(d.route.id))}),S.size===0)return[];let m=fb(e,r,i.unstable_trailingSlashAwareDataRequests,"data");return z&&S.size>0&&m.searchParams.set("_routes",t.filter(d=>S.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[r,i.unstable_trailingSlashAwareDataRequests,o,a,s,p,t,e,n]),v=x.useMemo(()=>pb(f,s),[f,s]),w=Sb(f);return x.createElement(x.Fragment,null,h.map(S=>x.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...l})),v.map(S=>x.createElement("link",{key:S,rel:"modulepreload",href:S,...l})),w.map(({key:S,link:z})=>x.createElement("link",{key:S,nonce:l.nonce,...z,crossOrigin:z.crossOrigin??l.crossOrigin})))}function Tb(...e){return t=>{e.forEach(l=>{typeof l=="function"?l(t):l!=null&&(l.current=t)})}}var Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eb&&(window.__reactRouterVersion="7.13.2")}catch{}function jb({basename:e,children:t,unstable_useTransitions:l,window:a}){let i=x.useRef();i.current==null&&(i.current=sv({window:a,v5Compat:!0}));let s=i.current,[n,r]=x.useState({action:s.action,location:s.location}),o=x.useCallback(c=>{l===!1?r(c):x.startTransition(()=>r(c))},[l]);return x.useLayoutEffect(()=>s.listen(o),[s,o]),x.createElement(tb,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:s,unstable_useTransitions:l})}var ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=x.forwardRef(function({onClick:t,discover:l="render",prefetch:a="none",relative:i,reloadDocument:s,replace:n,unstable_mask:r,state:o,target:c,to:p,preventScrollReset:f,viewTransition:h,unstable_defaultShouldRevalidate:v,...w},S){let{basename:z,navigator:m,unstable_useTransitions:d}=x.useContext(Ie),g=typeof p=="string"&&ah.test(p),b=Vm(p,z);p=b.to;let T=Bv(p,{relative:i}),A=nl(),E=null;if(r){let Ye=Jo(r,[],A.unstable_mask?A.unstable_mask.pathname:"/",!0);z!=="/"&&(Ye.pathname=Ye.pathname==="/"?z:rt([z,Ye.pathname])),E=m.createHref(Ye)}let[N,O,D]=yb(a,w),ze=Ob(p,{replace:n,unstable_mask:r,state:o,target:c,preventScrollReset:f,relative:i,viewTransition:h,unstable_defaultShouldRevalidate:v,unstable_useTransitions:d});function lt(Ye){t&&t(Ye),Ye.defaultPrevented||ze(Ye)}let wa=!(b.isExternal||s),Ei=x.createElement("a",{...w,...D,href:(wa?E:void 0)||b.absoluteURL||T,onClick:wa?lt:t,ref:Tb(S,O),target:c,"data-discover":!g&&l==="render"?"true":void 0});return N&&!g?x.createElement(x.Fragment,null,Ei,x.createElement(wb,{page:T})):Ei});ih.displayName="Link";var Nb=x.forwardRef(function({"aria-current":t="page",caseSensitive:l=!1,className:a="",end:i=!1,style:s,to:n,viewTransition:r,children:o,...c},p){let f=Ti(n,{relative:c.relative}),h=nl(),v=x.useContext(sn),{navigator:w,basename:S}=x.useContext(Ie),z=v!=null&&kb(f)&&r===!0,m=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,d=h.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(d=d.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase()),g&&S&&(g=_t(g,S)||g);const b=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let T=d===m||!i&&d.startsWith(m)&&d.charAt(b)==="/",A=g!=null&&(g===m||!i&&g.startsWith(m)&&g.charAt(m.length)==="/"),E={isActive:T,isPending:A,isTransitioning:z},N=T?t:void 0,O;typeof a=="function"?O=a(E):O=[a,T?"active":null,A?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let D=typeof s=="function"?s(E):s;return x.createElement(ih,{...c,"aria-current":N,className:O,ref:p,style:D,to:n,viewTransition:r},typeof o=="function"?o(E):o)});Nb.displayName="NavLink";var Ab=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:l,reloadDocument:a,replace:i,state:s,method:n=rs,action:r,onSubmit:o,relative:c,preventScrollReset:p,viewTransition:f,unstable_defaultShouldRevalidate:h,...v},w)=>{let{unstable_useTransitions:S}=x.useContext(Ie),z=Db(),m=Cb(r,{relative:c}),d=n.toLowerCase()==="get"?"get":"post",g=typeof r=="string"&&ah.test(r),b=T=>{if(o&&o(T),T.defaultPrevented)return;T.preventDefault();let A=T.nativeEvent.submitter,E=(A==null?void 0:A.getAttribute("formmethod"))||n,N=()=>z(A||T.currentTarget,{fetcherKey:t,method:E,navigate:l,replace:i,state:s,relative:c,preventScrollReset:p,viewTransition:f,unstable_defaultShouldRevalidate:h});S&&l!==!1?x.startTransition(()=>N()):N()};return x.createElement("form",{ref:w,method:d,action:m,onSubmit:a?o:b,...v,"data-discover":!g&&e==="render"?"true":void 0})});Ab.displayName="Form";function _b(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(e){let t=x.useContext(ba);return P(t,_b(e)),t}function Ob(e,{target:t,replace:l,unstable_mask:a,state:i,preventScrollReset:s,relative:n,viewTransition:r,unstable_defaultShouldRevalidate:o,unstable_useTransitions:c}={}){let p=Lv(),f=nl(),h=Ti(e,{relative:n});return x.useCallback(v=>{if(rb(v,t)){v.preventDefault();let w=l!==void 0?l:ui(f)===ui(h),S=()=>p(e,{replace:w,unstable_mask:a,state:i,preventScrollReset:s,relative:n,viewTransition:r,unstable_defaultShouldRevalidate:o});c?x.startTransition(()=>S()):S()}},[f,p,h,l,a,i,t,e,s,n,r,o,c])}var Rb=0,Mb=()=>`__${String(++Rb)}__`;function Db(){let{router:e}=sh("useSubmit"),{basename:t}=x.useContext(Ie),l=Fv(),a=e.fetch,i=e.navigate;return x.useCallback(async(s,n={})=>{let{action:r,method:o,encType:c,formData:p,body:f}=cb(s,t);if(n.navigate===!1){let h=n.fetcherKey||Mb();await a(h,l,n.action||r,{unstable_defaultShouldRevalidate:n.unstable_defaultShouldRevalidate,preventScrollReset:n.preventScrollReset,formData:p,body:f,formMethod:n.method||o,formEncType:n.encType||c,flushSync:n.flushSync})}else await i(n.action||r,{unstable_defaultShouldRevalidate:n.unstable_defaultShouldRevalidate,preventScrollReset:n.preventScrollReset,formData:p,body:f,formMethod:n.method||o,formEncType:n.encType||c,replace:n.replace,state:n.state,fromRouteId:l,flushSync:n.flushSync,viewTransition:n.viewTransition})},[a,i,t,l])}function Cb(e,{relative:t}={}){let{basename:l}=x.useContext(Ie),a=x.useContext(Rt);P(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),s={...Ti(e||".",{relative:t})},n=nl();if(e==null){s.search=n.search;let r=new URLSearchParams(s.search),o=r.getAll("index");if(o.some(p=>p==="")){r.delete("index"),o.filter(f=>f).forEach(f=>r.append("index",f));let p=r.toString();s.search=p?`?${p}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(s.pathname=s.pathname==="/"?l:rt([l,s.pathname])),ui(s)}function kb(e,{relative:t}={}){let l=x.useContext(Jm);P(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=sh("useViewTransitionState"),i=Ti(e,{relative:t});if(!l.isTransitioning)return!1;let s=_t(l.currentLocation.pathname,a)||l.currentLocation.pathname,n=_t(l.nextLocation.pathname,a)||l.nextLocation.pathname;return qs(i.pathname,n)!=null||qs(i.pathname,s)!=null}const Ub=`
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
					<div id="mobile-menu" class="flex lg:justify-center lg:basis-auto lg:grow max-lg:flex-col justify-start font-base max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll">
						<div class="flex items-center relative z-9 py-6.25 lg:hidden">
							<a href="/" class="table-cell align-middle">
								<img src="/assets/logo.png" alt="" class="object-contain duration-500">
							</a>
						</div>
						<ul class="lg:flex flex-wrap navbar-nav">
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/">
									<span class="inline-block">Home</span>
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
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/destinations">
									<span class="inline-block">Destinations</span>
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/tours">
									<span class="inline-block">Tours</span>
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/blogs">
									<span class="inline-block">Blogs</span>
								</a>
							</li>
							<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
								<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/contact">
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

				<!-- VIDEO SECTION START-->
				<div class="home-video-section bg-lightturquoise xl:pt-17.5 pt-12.5 px-5">
					<div class="w-full mx-auto">
						<div class="text-center max-w-150 mx-auto md:mb-10 mb-7.5">
							<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5"><span class="text-citrusyellow">Travel </span>Videos</h2>
							<p class="text-base">Watch featured journeys and trip highlights</p>
						</div>
						<div class="home-featured-video overflow-hidden rounded-3xl bg-primary shadow-xl">
							<iframe class="w-full h-full" src="https://www.youtube.com/embed/Zcx247sfxPM?autoplay=1&mute=1&rel=0&playsinline=1&si=yoINV7QOtAdKo5xl" title="Featured travel video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</div>
						<div class="home-video-slider" aria-label="More travel videos">
							<div class="home-video-slide overflow-hidden rounded-2xl bg-primary shadow-md">
								<iframe class="w-full h-full" src="https://www.youtube.com/embed/Zcx247sfxPM?rel=0&playsinline=1&si=yoINV7QOtAdKo5xl" title="Travel video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							</div>
							<div class="home-video-slide overflow-hidden rounded-2xl bg-primary shadow-md">
								<iframe class="w-full h-full" src="https://www.youtube.com/embed/Zcx247sfxPM?rel=0&playsinline=1&si=yoINV7QOtAdKo5xl" title="Travel video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							</div>
							<div class="home-video-slide overflow-hidden rounded-2xl bg-primary shadow-md">
								<iframe class="w-full h-full" src="https://www.youtube.com/embed/Zcx247sfxPM?rel=0&playsinline=1&si=yoINV7QOtAdKo5xl" title="Travel video 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							</div>
							<div class="home-video-slide overflow-hidden rounded-2xl bg-primary shadow-md">
								<iframe class="w-full h-full" src="https://www.youtube.com/embed/Zcx247sfxPM?rel=0&playsinline=1&si=yoINV7QOtAdKo5xl" title="Travel video 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
				<!-- VIDEO SECTION END-->
				
				<!--POPULAR DESTINATION SECTION START-->
				<div class="relative overflow-hidden md:pb-22.5 pb-10 md:pt-30 pt-17.5 bg-contain bg-[bottom_center] bg-repeat-x bg-[url(../images/background/Cloud-bg.png)]">
					<div class="container">
						<!-- TITLE START-->
						<div class="text-center max-w-150 mx-auto md:mb-15 mb-7.5">
							<h2 class="xl:text-46 md:text-40 text-3xl mb-2.5"><span class="text-citrusyellow">Popular Indian </span>Destinations</h2>
							<p class="text-base">Maharashtra destinations worth exploring with family and friends</p>
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
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?mumbai,gateway-of-india" width="309" height="500" alt="Mumbai, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Mumbai</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?pune,maharashtra" width="309" height="500" alt="Pune, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Pune</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?lonavala,maharashtra" width="309" height="500" alt="Lonavala, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Lonavala</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?mahabaleshwar,maharashtra" width="309" height="500" alt="Mahabaleshwar, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Mahabaleshwar</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?nashik,vineyard,india" width="309" height="500" alt="Nashik, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Nashik</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?ajanta-caves,aurangabad" width="309" height="500" alt="Aurangabad, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Aurangabad</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?alibaug,beach,india" width="309" height="500" alt="Alibaug, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Alibaug</a></h3>
											</div>
											<div class="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" class="w-full max-w-75 mx-auto block duration-500">
											</div>
										</div>
									</div>

									<div class="swiper-slide">
										<div class="relative z-1 group">
											<div class="rounded-3xl overflow-hidden">
												<a href="/destinations"><img src="https://source.unsplash.com/700x1000/?tadoba,tiger,reserve" width="309" height="500" alt="Tadoba, Maharashtra" class="w-full h-125 object-cover object-center" loading="lazy"></a>
											</div>
											<div>
												<h3 class="text-28"><a href="/destinations" class="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Tadoba</a></h3>
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
`,Hb=["/assets/js/jquery-3.7.1.min.js","/assets/vendor/gsap/gsap.min.js","/assets/vendor/gsap/ScrollSmoother.js","/assets/vendor/gsap/ScrollTrigger.min.js","/assets/vendor/swiper/swiper-bundle.min.js","/assets/vendor/masonry/masonry-4.2.2.js","/assets/vendor/masonry/isotope.pkgd.min.js","/assets/vendor/flatpickr/js/flatpickr.js","/assets/vendor/magnific-popup/magnific-popup.js","/assets/vendor/nouislider/nouislider.min.js","/assets/vendor/group-slide/group-loop.js","/assets/vendor/xmenu/xmenu.js","/assets/vendor/lightgallery/dist/lightgallery.min.js","/assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js","/assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js","/assets/js/imagesloaded.pkgd.min.js","/assets/js/theia-sticky-sidebar.js","/assets/js/owl.carousel.min.js","/assets/js/isotope.pkgd.min.js","/assets/js/dz.carousel.js","/assets/js/lc_lightbox.lite.js","/assets/js/dz.ajax.js","/assets/js/animation.js","/assets/js/custom.js"],qb=e=>new Promise((t,l)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const a=document.createElement("script");a.src=e,a.async=!1,a.onload=()=>t(),a.onerror=()=>l(new Error(`Failed to load ${e}`)),document.body.appendChild(a)}),kc=()=>{document.querySelectorAll("header").forEach(e=>{const t=e.querySelector(".xmenu-toggler"),l=e.querySelector(".header-nav"),a=e.querySelector(".menu-close");if(!t||!l||t.dataset.mobileMenuBound==="true")return;t.dataset.mobileMenuBound="true";const i=()=>{l.classList.remove("show"),t.classList.remove("open"),t.setAttribute("aria-expanded","false"),document.body.classList.remove("overflow-hidden")},s=()=>{const n=l.classList.toggle("show");t.classList.toggle("open",n),t.setAttribute("aria-expanded",String(n)),document.body.classList.toggle("overflow-hidden",n)};t.addEventListener("click",s),a==null||a.addEventListener("click",i),l.querySelectorAll("a").forEach(n=>{n.addEventListener("click",i)})})},Uc=()=>{const e=document.querySelector(".reviewtwo-slider");!e||!window.Swiper||e.swiper||new window.Swiper(e,{speed:900,loop:!0,spaceBetween:30,slidesPerView:1,navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},breakpoints:{640:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}}})};function Bb(){const[e,t]=x.useState(""),[l,a]=x.useState(!0),[i,s]=x.useState("");x.useEffect(()=>{try{const r=new DOMParser().parseFromString(Ub,"text/html"),o=r.body.cloneNode(!0),c=o.querySelector('[class*="bg-paleaqua"][class*="pb-40"]');if(c){let f=c.nextSibling;for(;f;){const h=f.nextSibling;f.remove(),f=h}}const p=o.querySelector(".loading-area");p&&p.remove(),document.body.id=r.body.id||"",document.body.className=r.body.className||"",o.querySelectorAll('a[href$=".html"]').forEach(f=>{const h=f.getAttribute("href");h==="about-1.html"?f.href="/about":h==="destination-detail.html"?f.href="/destinations":h==="tour-detail.html"?f.href="/tours":h==="blog-detail.html"?f.href="/blogs":h==="contact.html"?f.href="/contact":h==="services.html"?f.href="/pages":(f.setAttribute("data-disabled","spa"),f.href="#"),f.removeAttribute("data-disabled")}),o.querySelectorAll('a[href="#"]').forEach(f=>{const h=f.querySelector("span");if(h){const v=h.textContent.toLowerCase();v==="home"?f.href="/":v==="about"?f.href="/about":v==="pages"?f.href="/pages":v==="destinations"?f.href="/destinations":v==="tours"?f.href="/tours":v==="blogs"?f.href="/blogs":v==="contact"&&(f.href="/contact"),f.removeAttribute("data-disabled")}}),t(o.innerHTML)}catch(r){console.error(r),s("Template failed to load")}finally{a(!1)}},[]),x.useEffect(()=>{if(!e)return;let r=!1;return(async()=>{for(const c of Hb){if(r)break;try{await qb(c)}catch(p){console.warn(p),s(`Missing asset: ${c}`);break}}const o=document.querySelector(".loading-area");o&&o.remove(),kc(),Uc(),!r&&window.Travlla&&typeof window.Travlla.init=="function"&&(window.Travlla.init(),kc(),Uc()),document.querySelectorAll('a[data-disabled="spa"]').forEach(c=>c.addEventListener("click",p=>p.preventDefault()))})(),()=>{r=!0}},[e]);const n=()=>{{alert("WhatsApp number missing. Add VITE_WHATSAPP_NUMBER to your .env file.");return}};return u.jsxs("div",{className:"relative",children:[l&&u.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-black",children:"Loading…"}),i&&!l&&u.jsx("div",{className:"flex items-center justify-center min-h-screen text-white bg-red-700",children:i}),!l&&!i&&u.jsx("div",{className:"template-body",dangerouslySetInnerHTML:{__html:e}}),u.jsxs("button",{type:"button",onClick:n,className:"fixed bottom-6 right-6 z-[1000] bg-[#25D366] text-white shadow-2xl rounded-full h-14 px-5 flex items-center gap-3 hover:scale-105 transition-all duration-300","aria-label":"Chat on WhatsApp",children:[u.jsx("span",{className:"text-xl",children:"?"}),u.jsx("span",{className:"font-semibold",children:"Chat on WhatsApp"})]})]})}const Lb=`
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
				<div id="mobile-menu" class="flex lg:justify-center lg:basis-auto lg:grow max-lg:flex-col justify-start font-base max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll">
					<div class="flex items-center relative z-9 py-6.25 lg:hidden">
						<a href="/" class="table-cell align-middle">
							<img src="/assets/logo.png" alt="" class="object-contain duration-500">
						</a>
					</div>
					<ul class="lg:flex flex-wrap navbar-nav">
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/">
								<span class="inline-block">Home</span>
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
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/destinations">
								<span class="inline-block">Destinations</span>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/tours">
								<span class="inline-block">Tours</span>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/blogs">
								<span class="inline-block">Blogs</span>
							</a>
						</li>
						<li class="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
							<a class="lg:py-7.5 py-2 xl:px-5 lg:px-2 relative lg:inline-block block text-lg font-medium lg:text-white text-primary hover:text-secondary" href="/contact">
								<span class="inline-block">Contact</span>
							</a>
						</li>
					</ul>
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
`,Yb=e=>{const t=e.querySelector(".site-header");if(!t)return;const l=t.querySelector(".xmenu-toggler"),a=t.querySelector(".header-nav"),i=t.querySelector(".menu-close");if(!l||!a||l.dataset.mobileMenuBound==="true")return;l.dataset.mobileMenuBound="true";const s=()=>{a.classList.remove("show"),l.classList.remove("open"),l.setAttribute("aria-expanded","false"),document.body.classList.remove("overflow-hidden")},n=()=>{const o=a.classList.toggle("show");l.classList.toggle("open",o),l.setAttribute("aria-expanded",String(o)),document.body.classList.toggle("overflow-hidden",o)};l.addEventListener("click",n),i==null||i.addEventListener("click",s);const r=a.querySelectorAll("a");return r.forEach(o=>o.addEventListener("click",s)),()=>{l.removeEventListener("click",n),i==null||i.removeEventListener("click",s),r.forEach(o=>o.removeEventListener("click",s)),s(),delete l.dataset.mobileMenuBound}};function xa(){return x.useEffect(()=>{const e=document.querySelector(".site-header");if(!e)return;const t=()=>{window.scrollY>100?e.classList.add("is-fixed"):e.classList.remove("is-fixed")};window.addEventListener("scroll",t),t(),window.Travlla&&typeof window.Travlla.initNavbar=="function"&&window.Travlla.initNavbar();const l=Yb(document);return()=>{window.removeEventListener("scroll",t),l==null||l()}},[]),u.jsx("div",{dangerouslySetInnerHTML:{__html:Lb}})}const Gb=`
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
`;function ya(){return x.useEffect(()=>{window.Travlla&&typeof window.Travlla.initFooter=="function"&&window.Travlla.initFooter()},[]),u.jsx("div",{dangerouslySetInnerHTML:{__html:Gb}})}function Qb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{className:"py-20",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Us"}),u.jsx("p",{className:"text-lg text-gray-700 mb-6",children:"Welcome to Kabeer Travelz Hub. We are dedicated to providing exceptional travel experiences and making your journeys unforgettable."}),u.jsx("p",{className:"text-gray-600",children:"Our team of experienced travel professionals works tirelessly to curate the best destinations, accommodations, and activities for our clients. With years of expertise in the travel industry, we ensure every trip is tailored to your preferences and budget."})]})})}),u.jsx(ya,{})]})}function Xb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{className:"py-20",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Our Pages"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"FAQ"}),u.jsx("p",{className:"text-gray-600",children:"Find answers to common questions about our services."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Pricing"}),u.jsx("p",{className:"text-gray-600",children:"Explore our competitive pricing plans."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Error 404"}),u.jsx("p",{className:"text-gray-600",children:"Custom 404 error page for better user experience."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Compare"}),u.jsx("p",{className:"text-gray-600",children:"Compare different travel packages and options."})]})]})]})})}),u.jsx(ya,{})]})}function Zb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{className:"py-20",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-12",children:"Explore Destinations"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/destinations/style1/pic1.jpg",alt:"Destination 1",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Beautiful Beach"}),u.jsx("p",{className:"text-gray-600",children:"Relax on pristine beaches with crystal clear waters."})]})]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/destinations/style1/pic2.jpg",alt:"Destination 2",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Mountain Adventure"}),u.jsx("p",{className:"text-gray-600",children:"Experience thrilling mountain hikes and scenic views."})]})]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/destinations/style1/pic3.jpg",alt:"Destination 3",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"City Exploration"}),u.jsx("p",{className:"text-gray-600",children:"Discover vibrant cities with rich culture and history."})]})]})]})]})}),u.jsx(ya,{})]})}function Vb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{children:u.jsx("div",{className:"bg-lightturquoise sm:mx-15 xl:pb-26.5 pb-5 xl:pt-30 pt-12.5",children:u.jsxs("div",{className:"container-fluid",children:[u.jsxs("div",{className:"text-center max-w-150 mx-auto md:mb-15 mb-7.5",children:[u.jsxs("h2",{className:"xl:text-46 md:text-40 text-3xl mb-2.5",children:["Explore Popular",u.jsx("span",{className:"text-citrusyellow",children:" Tours!"})]}),u.jsx("p",{className:"text-base",children:"Destinations worth exploring! Here are a few popular spots"}),u.jsx("div",{className:"-mt-7",children:u.jsx("img",{src:"/assets/images/background/Title-Separator.png",alt:"Image",className:"w-117.5 inline-block",width:"470",height:"70",loading:"lazy"})})]}),u.jsxs("div",{className:"grid xl:grid-cols-3 lg:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"mx-3.75",children:[u.jsxs("div",{className:"rounded-tl-3xl rounded-tr-3xl overflow-hidden relative",children:[u.jsx("a",{href:"/tours",children:u.jsx("img",{src:"/assets/images/tour/style1/pic3.jpg",alt:"Tokyo City Japan",className:"xl:h-105 h-80 w-full object-cover object-center",width:"309",height:"500",loading:"lazy"})}),u.jsxs("div",{className:"absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center",children:[u.jsx("i",{className:"text-xl mr-2.5 fa-regular fa-calendar-days"}),u.jsx("span",{className:"block",children:"6 days , 3 Nights"})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500",children:u.jsx("h3",{className:"2xl:text-28 text-2xl font-medium",children:u.jsxs("a",{href:"/tours",className:"text-white",children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," Tokyo City Japan"]})})})]}),u.jsxs("div",{className:"bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]",children:[u.jsx("div",{className:"mb-7.5 flex",children:u.jsx("div",{className:"w-full text-xl/[1.3] font-title font-medium",children:u.jsx("a",{href:"/tours",className:"text-primary hover:text-citrusyellow duration-500",children:"The bridge offers panoramic views of Tokyo Tower, the skyline."})})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"trv-book",children:u.jsx("a",{href:"/tours",className:"site-button outline",children:"Call Now"})}),u.jsxs("div",{children:[u.jsx("span",{children:"(4.8 Review)"}),u.jsxs("div",{className:"text-citrusyellow",children:[u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"})]})]})]})]})]}),u.jsxs("div",{className:"mx-3.75",children:[u.jsxs("div",{className:"rounded-tl-3xl rounded-tr-3xl overflow-hidden relative",children:[u.jsx("a",{href:"/tours",children:u.jsx("img",{src:"/assets/images/tour/style1/pic4.jpg",alt:"Plateau in Slovenia",className:"xl:h-105 h-80 w-full object-cover object-center",width:"309",height:"500",loading:"lazy"})}),u.jsxs("div",{className:"absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center",children:[u.jsx("i",{className:"text-xl mr-2.5 fa-regular fa-calendar-days"}),u.jsx("span",{className:"block",children:"8 days , 3 Nights"})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500",children:u.jsx("h3",{className:"2xl:text-28 text-2xl font-medium",children:u.jsxs("a",{href:"/tours",className:"text-white",children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," Plateau in Slovenia"]})})})]}),u.jsxs("div",{className:"bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]",children:[u.jsx("div",{className:"mb-7.5 flex",children:u.jsx("div",{className:"w-full text-xl/[1.3] font-title font-medium",children:u.jsx("a",{href:"/tours",className:"text-primary hover:text-citrusyellow duration-500",children:"Nusa Penida is a stunning island located just southeast of Bali"})})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"trv-book",children:u.jsx("a",{href:"/tours",className:"site-button outline",children:"Call Now"})}),u.jsxs("div",{children:[u.jsx("span",{children:"(4.8 Review)"}),u.jsxs("div",{className:"text-citrusyellow",children:[u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"})]})]})]})]})]}),u.jsxs("div",{className:"mx-3.75",children:[u.jsxs("div",{className:"rounded-tl-3xl rounded-tr-3xl overflow-hidden relative",children:[u.jsx("a",{href:"/tours",children:u.jsx("img",{src:"/assets/images/tour/style1/pic5.jpg",alt:"Switzerland Tour Package",className:"xl:h-105 h-80 w-full object-cover object-center",width:"309",height:"500",loading:"lazy"})}),u.jsxs("div",{className:"absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center",children:[u.jsx("i",{className:"text-xl mr-2.5 fa-regular fa-calendar-days"}),u.jsx("span",{className:"block",children:"4 days , 2 Nights"})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500",children:u.jsx("h3",{className:"2xl:text-28 text-2xl font-medium",children:u.jsxs("a",{href:"/tours",className:"text-white",children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," Switzerland Tour Package"]})})})]}),u.jsxs("div",{className:"bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]",children:[u.jsx("div",{className:"mb-7.5 flex",children:u.jsx("div",{className:"w-full text-xl/[1.3] font-title font-medium",children:u.jsx("a",{href:"/tours",className:"text-primary hover:text-citrusyellow duration-500",children:"Deogyusan mountain. Its highest peak is 1,614 m. above sea level"})})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"trv-book",children:u.jsx("a",{href:"/tours",className:"site-button outline",children:"Call Now"})}),u.jsxs("div",{children:[u.jsx("span",{children:"(4.8 Review)"}),u.jsxs("div",{className:"text-citrusyellow",children:[u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"})]})]})]})]})]}),u.jsxs("div",{className:"mx-3.75",children:[u.jsxs("div",{className:"rounded-tl-3xl rounded-tr-3xl overflow-hidden relative",children:[u.jsx("a",{href:"/tours",children:u.jsx("img",{src:"/assets/images/tour/style1/pic6.jpg",alt:"Tokyo City Japan",className:"xl:h-105 h-80 w-full object-cover object-center",width:"309",height:"500",loading:"lazy"})}),u.jsxs("div",{className:"absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center",children:[u.jsx("i",{className:"text-xl mr-2.5 fa-regular fa-calendar-days"}),u.jsx("span",{className:"block",children:"6 days , 3 Nights"})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500",children:u.jsx("h3",{className:"2xl:text-28 text-2xl font-medium",children:u.jsxs("a",{href:"/tours",className:"text-white",children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," Tokyo City Japan"]})})})]}),u.jsxs("div",{className:"bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]",children:[u.jsx("div",{className:"mb-7.5 flex",children:u.jsx("div",{className:"w-full text-xl/[1.3] font-title font-medium",children:u.jsx("a",{href:"/tours",className:"text-primary hover:text-citrusyellow duration-500",children:"The bridge offers panoramic views of Tokyo Tower, the skyline."})})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"trv-book",children:u.jsx("a",{href:"/tours",className:"site-button outline",children:"Call Now"})}),u.jsxs("div",{children:[u.jsx("span",{children:"(4.8 Review)"}),u.jsxs("div",{className:"text-citrusyellow",children:[u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"})]})]})]})]})]})]})]})})}),u.jsx(ya,{})]})}function Kb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{className:"py-20",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-12",children:"Travel Blog"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[u.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic1.jpg",alt:"Blog 1",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Top 10 Beach Destinations"}),u.jsx("p",{className:"text-gray-600 mb-4",children:"Discover the most beautiful beaches around the world..."}),u.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]}),u.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic2.jpg",alt:"Blog 2",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Adventure Travel Tips"}),u.jsx("p",{className:"text-gray-600 mb-4",children:"Essential tips for your next adventure trip..."}),u.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]}),u.jsxs("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("img",{src:"/assets/images/trv-blog/blog-lg/pic3.jpg",alt:"Blog 3",className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Cultural Experiences"}),u.jsx("p",{className:"text-gray-600 mb-4",children:"Immerse yourself in local cultures and traditions..."}),u.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800",children:"Read More →"})]})]})]})]})}),u.jsx(ya,{})]})}function Jb(){return x.useEffect(()=>{document.body.id="bg",document.body.className="selection:bg-[#484848] selection:text-white"},[]),u.jsxs(u.Fragment,{children:[u.jsx(xa,{}),u.jsx("main",{className:"py-20",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 text-center mb-16",children:"Contact Us"}),u.jsxs("div",{className:"grid grid-cols-2 gap-12 items-start",children:[u.jsx("div",{className:"col-span-1",children:u.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-6 text-gray-900",children:"Send Us a Message"}),u.jsxs("form",{className:"space-y-5",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Name"}),u.jsx("input",{type:"text",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"Your Name"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Email"}),u.jsx("input",{type:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"your@email.com"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Subject"}),u.jsx("input",{type:"text",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",placeholder:"Message Subject"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Message"}),u.jsx("textarea",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-40 resize-none",placeholder:"Your message here..."})]}),u.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300",children:"Send Message"})]})]})}),u.jsx("div",{className:"col-span-1",children:u.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-8 text-gray-900",children:"Contact Information"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4",children:u.jsx("i",{className:"fa-solid fa-phone text-xl text-blue-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Phone"}),u.jsx("a",{href:"tel:+919503953737",className:"text-gray-600 hover:text-blue-600 transition duration-300",children:"+91 9503953737"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4",children:u.jsx("i",{className:"fa-solid fa-envelope text-xl text-blue-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Email"}),u.jsx("a",{href:"mailto:kabeerrtravelzhub@gmail.com",className:"text-gray-600 hover:text-blue-600 transition duration-300",children:"kabeerrtravelzhub@gmail.com"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4",children:u.jsx("i",{className:"fa-solid fa-house text-xl text-blue-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Address"}),u.jsx("p",{className:"text-gray-600 text-base leading-relaxed",children:"405, HN More Complex, NDA Road, Shivane, Pune - 411023"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Follow Us"}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("a",{href:"https://www.facebook.com/dexignzone",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300",children:u.jsx("i",{className:"fab fa-facebook-f"})}),u.jsx("a",{href:"https://twitter.com/dexignzones",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300",children:u.jsx("i",{className:"fab fa-twitter"})}),u.jsx("a",{href:"https://www.linkedin.com/showcase/3686700/admin/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300",children:u.jsx("i",{className:"fab fa-linkedin-in"})}),u.jsx("a",{href:"https://www.instagram.com/dexignzone/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-11 h-11 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300",children:u.jsx("i",{className:"fab fa-instagram"})})]})]})]})]})})]})]})}),u.jsx(ya,{})]})}function $b(){return u.jsx(jb,{children:u.jsx("div",{className:"app-shell",children:u.jsx("main",{className:"flex-1 pt-4",children:u.jsxs(lb,{children:[u.jsx(Dt,{path:"/",element:u.jsx(Bb,{})}),u.jsx(Dt,{path:"/about",element:u.jsx(Qb,{})}),u.jsx(Dt,{path:"/pages",element:u.jsx(Xb,{})}),u.jsx(Dt,{path:"/destinations",element:u.jsx(Zb,{})}),u.jsx(Dt,{path:"/tours",element:u.jsx(Vb,{})}),u.jsx(Dt,{path:"/blogs",element:u.jsx(Kb,{})}),u.jsx(Dt,{path:"/contact",element:u.jsx(Jb,{})})]})})})})}iv.createRoot(document.getElementById("root")).render(u.jsx(Th.StrictMode,{children:u.jsx($b,{})}));
