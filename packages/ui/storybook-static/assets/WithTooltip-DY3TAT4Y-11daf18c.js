import{c as ee}from"./chunk-3EFM6HRY-4c51b38f.js";import{a as k,_ as te}from"./chunk-FD4M6EBV-8d27da22.js";import{_ as re,a as oe}from"./chunk-NNAAFZ4U-67fa674f.js";import{R as O,r as a}from"./index-f1f749bf.js";import{R as ne,r as ie}from"./index-96c5f47c.js";import{e as B,l as $}from"./index-82fd74cc.js";import{s as ue}from"./index-d475d2ea.js";import{m as se}from"./memoizerific-a8c4a000.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";var ae=re({"../../node_modules/react-fast-compare/index.js"(e,r){var n=typeof Element<"u",v=typeof Map=="function",c=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(i,s){if(i===s)return!0;if(i&&s&&typeof i=="object"&&typeof s=="object"){if(i.constructor!==s.constructor)return!1;var t,o,p;if(Array.isArray(i)){if(t=i.length,t!=s.length)return!1;for(o=t;o--!==0;)if(!d(i[o],s[o]))return!1;return!0}var f;if(v&&i instanceof Map&&s instanceof Map){if(i.size!==s.size)return!1;for(f=i.entries();!(o=f.next()).done;)if(!s.has(o.value[0]))return!1;for(f=i.entries();!(o=f.next()).done;)if(!d(o.value[1],s.get(o.value[0])))return!1;return!0}if(c&&i instanceof Set&&s instanceof Set){if(i.size!==s.size)return!1;for(f=i.entries();!(o=f.next()).done;)if(!s.has(o.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(s)){if(t=i.length,t!=s.length)return!1;for(o=t;o--!==0;)if(i[o]!==s[o])return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===s.toString();if(p=Object.keys(i),t=p.length,t!==Object.keys(s).length)return!1;for(o=t;o--!==0;)if(!Object.prototype.hasOwnProperty.call(s,p[o]))return!1;if(n&&i instanceof Element)return!1;for(o=t;o--!==0;)if(!((p[o]==="_owner"||p[o]==="__v"||p[o]==="__o")&&i.$$typeof)&&!d(i[p[o]],s[p[o]]))return!1;return!0}return i!==i&&s!==s}r.exports=function(i,s){try{return d(i,s)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}}}),I=function(e){return e.reduce(function(r,n){var v=n[0],c=n[1];return r[v]=c,r},{})},q=typeof window<"u"&&window.document&&window.document.createElement?a.useLayoutEffect:a.useEffect,fe=oe(ae()),le=[],ce=function(e,r,n){n===void 0&&(n={});var v=a.useRef(null),c={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||le},u=a.useState({styles:{popper:{position:c.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),d=u[0],i=u[1],s=a.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var f=p.state,h=Object.keys(f.elements);ie.flushSync(function(){i({styles:I(h.map(function(w){return[w,f.styles[w]||{}]})),attributes:I(h.map(function(w){return[w,f.attributes[w]]}))})})},requires:["computeStyles"]}},[]),t=a.useMemo(function(){var p={onFirstUpdate:c.onFirstUpdate,placement:c.placement,strategy:c.strategy,modifiers:[].concat(c.modifiers,[s,{name:"applyStyles",enabled:!1}])};return(0,fe.default)(v.current,p)?v.current||p:(v.current=p,p)},[c.onFirstUpdate,c.placement,c.strategy,c.modifiers,s]),o=a.useRef();return q(function(){o.current&&o.current.setOptions(t)},[t]),q(function(){if(!(e==null||r==null)){var p=n.createPopper||ee,f=p(e,r,t);return o.current=f,function(){f.destroy(),o.current=null}}},[e,r,n.createPopper]),{state:o.current?o.current.state:null,styles:d.styles,attributes:d.attributes,update:o.current?o.current.update:null,forceUpdate:o.current?o.current.forceUpdate:null}};function X(e){var r=a.useRef(e);return r.current=e,a.useCallback(function(){return r.current},[])}var de=function(){};function pe(e){var r=e.initial,n=e.value,v=e.onChange,c=v===void 0?de:v;if(r===void 0&&n===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var u=a.useState(r),d=u[0],i=u[1],s=X(d),t=a.useCallback(function(p){var f=s(),h=typeof p=="function"?p(f):p;typeof h.persist=="function"&&h.persist(),i(h),typeof c=="function"&&c(h)},[s,c]),o=n!==void 0;return[o?n:d,o?c:t]}function G(e,r){return e===void 0&&(e=0),r===void 0&&(r=0),function(){return{width:0,height:0,top:r,right:e,bottom:r,left:e,x:0,y:0,toJSON:function(){return null}}}}var ve=["styles","attributes"],Y={getBoundingClientRect:G()},J={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function me(e,r){var n,v,c;e===void 0&&(e={}),r===void 0&&(r={});var u=Object.keys(J).reduce(function(l,g){var L;return k({},l,(L={},L[g]=l[g]!==void 0?l[g]:J[g],L))},e),d=a.useMemo(function(){return[{name:"offset",options:{offset:u.offset}}]},Array.isArray(u.offset)?u.offset:[]),i=k({},r,{placement:r.placement||u.placement,modifiers:r.modifiers||d}),s=a.useState(null),t=s[0],o=s[1],p=a.useState(null),f=p[0],h=p[1],w=pe({initial:u.defaultVisible,value:u.visible,onChange:u.onVisibleChange}),P=w[0],x=w[1],S=a.useRef();a.useEffect(function(){return function(){return clearTimeout(S.current)}},[]);var j=ce(u.followCursor?Y:t,f,i),z=j.styles,F=j.attributes,A=te(j,ve),_=A.update,T=X({visible:P,triggerRef:t,tooltipRef:f,finalConfig:u}),b=a.useCallback(function(l){return Array.isArray(u.trigger)?u.trigger.includes(l):u.trigger===l},Array.isArray(u.trigger)?u.trigger:[u.trigger]),m=a.useCallback(function(){clearTimeout(S.current),S.current=window.setTimeout(function(){return x(!1)},u.delayHide)},[u.delayHide,x]),E=a.useCallback(function(){clearTimeout(S.current),S.current=window.setTimeout(function(){return x(!0)},u.delayShow)},[u.delayShow,x]),C=a.useCallback(function(){T().visible?m():E()},[T,m,E]);a.useEffect(function(){if(T().finalConfig.closeOnOutsideClick){var l=function(g){var L,W=T(),D=W.tooltipRef,N=W.triggerRef,V=(g.composedPath==null||(L=g.composedPath())==null?void 0:L[0])||g.target;V instanceof Node&&D!=null&&N!=null&&!D.contains(V)&&!N.contains(V)&&m()};return document.addEventListener("mousedown",l),function(){return document.removeEventListener("mousedown",l)}}},[T,m]),a.useEffect(function(){if(!(t==null||!b("click")))return t.addEventListener("click",C),function(){return t.removeEventListener("click",C)}},[t,b,C]),a.useEffect(function(){if(!(t==null||!b("double-click")))return t.addEventListener("dblclick",C),function(){return t.removeEventListener("dblclick",C)}},[t,b,C]),a.useEffect(function(){if(!(t==null||!b("right-click"))){var l=function(g){g.preventDefault(),C()};return t.addEventListener("contextmenu",l),function(){return t.removeEventListener("contextmenu",l)}}},[t,b,C]),a.useEffect(function(){if(!(t==null||!b("focus")))return t.addEventListener("focus",E),t.addEventListener("blur",m),function(){t.removeEventListener("focus",E),t.removeEventListener("blur",m)}},[t,b,E,m]),a.useEffect(function(){if(!(t==null||!b("hover")))return t.addEventListener("mouseenter",E),t.addEventListener("mouseleave",m),function(){t.removeEventListener("mouseenter",E),t.removeEventListener("mouseleave",m)}},[t,b,E,m]),a.useEffect(function(){if(!(f==null||!b("hover")||!T().finalConfig.interactive))return f.addEventListener("mouseenter",E),f.addEventListener("mouseleave",m),function(){f.removeEventListener("mouseenter",E),f.removeEventListener("mouseleave",m)}},[f,b,E,m,T]);var U=A==null||(n=A.state)==null||(v=n.modifiersData)==null||(c=v.hide)==null?void 0:c.isReferenceHidden;a.useEffect(function(){u.closeOnTriggerHidden&&U&&m()},[u.closeOnTriggerHidden,m,U]),a.useEffect(function(){if(!u.followCursor||t==null)return;function l(g){var L=g.clientX,W=g.clientY;Y.getBoundingClientRect=G(L,W),_==null||_()}return t.addEventListener("mousemove",l),function(){return t.removeEventListener("mousemove",l)}},[u.followCursor,t,_]),a.useEffect(function(){if(!(f==null||_==null||u.mutationObserverOptions==null)){var l=new MutationObserver(_);return l.observe(f,u.mutationObserverOptions),function(){return l.disconnect()}}},[u.mutationObserverOptions,f,_]);var Q=function(l){return l===void 0&&(l={}),k({},l,{style:k({},l.style,z.popper)},F.popper,{"data-popper-interactive":u.interactive})},Z=function(l){return l===void 0&&(l={}),k({},l,F.arrow,{style:k({},l.style,z.arrow),"data-popper-arrow":!0})};return k({getArrowProps:Z,getTooltipProps:Q,setTooltipRef:h,setTriggerRef:o,tooltipRef:f,triggerRef:t,visible:P},A)}var y=se(1e3)((e,r,n,v=0)=>r.split("-")[0]===e?n:v),R=8,ge=B.div({position:"absolute",borderStyle:"solid"},({placement:e})=>{let r=0,n=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{n=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{r=8;break}}return{transform:`translate3d(${r}px, ${n}px, 0px)`}},({theme:e,color:r,placement:n})=>({bottom:`${y("top",n,`${R*-1}px`,"auto")}`,top:`${y("bottom",n,`${R*-1}px`,"auto")}`,right:`${y("left",n,`${R*-1}px`,"auto")}`,left:`${y("right",n,`${R*-1}px`,"auto")}`,borderBottomWidth:`${y("top",n,"0",R)}px`,borderTopWidth:`${y("bottom",n,"0",R)}px`,borderRightWidth:`${y("left",n,"0",R)}px`,borderLeftWidth:`${y("right",n,"0",R)}px`,borderTopColor:y("top",n,e.color[r]||r||e.base==="light"?$(e.background.app):e.background.app,"transparent"),borderBottomColor:y("bottom",n,e.color[r]||r||e.base==="light"?$(e.background.app):e.background.app,"transparent"),borderLeftColor:y("left",n,e.color[r]||r||e.base==="light"?$(e.background.app):e.background.app,"transparent"),borderRightColor:y("right",n,e.color[r]||r||e.base==="light"?$(e.background.app):e.background.app,"transparent")})),be=B.div(({hidden:e})=>({display:e?"none":"inline-block",zIndex:2147483647}),({theme:e,color:r,hasChrome:n})=>n?{background:e.color[r]||r||e.base==="light"?$(e.background.app):e.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}),H=O.forwardRef(({placement:e,hasChrome:r,children:n,arrowProps:v,tooltipRef:c,color:u,...d},i)=>O.createElement(be,{hasChrome:r,ref:i,...d,color:u},r&&O.createElement(ge,{placement:e,...v,color:u}),n));H.displayName="Tooltip";H.defaultProps={color:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:M}=ue,ye=B.div`
  display: inline-block;
  cursor: ${e=>e.mode==="hover"?"default":"pointer"};
`,he=B.g`
  cursor: ${e=>e.mode==="hover"?"default":"pointer"};
`,K=({svg:e,trigger:r,closeOnClick:n,placement:v,modifiers:c,hasChrome:u,tooltip:d,children:i,tooltipShown:s,onVisibilityChange:t,...o})=>{let p=e?he:ye,{getArrowProps:f,getTooltipProps:h,setTooltipRef:w,setTriggerRef:P,visible:x,state:S}=me({trigger:r,placement:v,defaultVisible:s,closeOnOutsideClick:n,onVisibleChange:t},{modifiers:c});return O.createElement(O.Fragment,null,O.createElement(p,{mode:r,ref:P,...o},i),x&&ne.createPortal(O.createElement(H,{placement:S==null?void 0:S.placement,ref:w,hasChrome:u,arrowProps:f(),...h()},typeof d=="function"?d({onHide:()=>t(!1)}):d),M.body))};K.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var xe=({startOpen:e=!1,onVisibilityChange:r,...n})=>{let[v,c]=a.useState(e),u=a.useCallback(d=>{r&&r(d)===!1||c(d)},[r]);return a.useEffect(()=>{let d=()=>u(!1);M.addEventListener("keydown",d,!1);let i=Array.from(M.getElementsByTagName("iframe")),s=[];return i.forEach(t=>{let o=()=>{try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",d),s.push(()=>{try{t.contentWindow.document.removeEventListener("click",d)}catch{}}))}catch{}};o(),t.addEventListener("load",o),s.push(()=>{t.removeEventListener("load",o)})}),()=>{M.removeEventListener("keydown",d),s.forEach(t=>{t()})}}),O.createElement(K,{...n,tooltipShown:v,onVisibilityChange:u})};export{xe as WithToolTipState,xe as WithTooltip,K as WithTooltipPure};
//# sourceMappingURL=WithTooltip-DY3TAT4Y-11daf18c.js.map
