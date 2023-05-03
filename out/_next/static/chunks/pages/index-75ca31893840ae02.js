(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5901)}])},3991:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c}});var n,r,o="refresh",u="navigate",a="restore",l="server-patch",i="prefetch",c="fast-refresh";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(567),o=n(7702),u=n(1309);n(8421),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});var a=n(8754)._(n(7294)),l=n(4532),i=n(3353),c=n(1410),f=n(9064),s=n(370),d=n(9955),p=n(4224),v=n(508),h=n(1516),_=n(4266),b=n(3991),y=new Set;function g(e,t,n,r,o,u){if(u||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){var a=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(a))return;y.add(a)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(function(e){})}}function m(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}var j=a.default.forwardRef(function(e,t){var n,c,y=e.href,j=e.as,C=e.children,O=e.prefetch,E=void 0===O?null:O,P=e.passHref,x=e.replace,M=e.shallow,k=e.scroll,R=e.locale,T=e.onClick,w=e.onMouseEnter,I=e.onTouchStart,A=e.legacyBehavior,N=void 0!==A&&A,S=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=C,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var L=!1!==E,U=null===E?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,D=a.default.useContext(d.RouterContext),H=a.default.useContext(p.AppRouterContext),K=null!=D?D:H,F=!D,B=a.default.useMemo(function(){if(!D){var e=m(y);return{href:e,as:j?m(j):e}}var t=u._((0,l.resolveHref)(D,y,!0),2),n=t[0],r=t[1];return{href:n,as:j?(0,l.resolveHref)(D,j):r||n}},[D,y,j]),X=B.href,q=B.as,z=a.default.useRef(X),V=a.default.useRef(q);N&&(c=a.default.Children.only(n));var G=N?c&&"object"==typeof c&&c.ref:t,Y=u._((0,v.useIntersection)({rootMargin:"200px"}),3),J=Y[0],Q=Y[1],W=Y[2],Z=a.default.useCallback(function(e){(V.current!==q||z.current!==X)&&(W(),V.current=q,z.current=X),J(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[q,G,X,W,J]);a.default.useEffect(function(){K&&Q&&L&&g(K,X,q,{locale:R},{kind:U},F)},[q,X,Q,R,L,null==D?void 0:D.locale,K,F,U]);var $={ref:Z,onClick:function(e){N||"function"!=typeof T||T(e),N&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e),K&&!e.defaultPrevented&&function(e,t,n,r,o,u,l,c,f,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!f&&!(0,i.isLocalURL)(n)))){e.preventDefault();var d,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:l}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?a.default.startTransition(p):p()}}(e,K,X,q,x,M,k,R,F,L)},onMouseEnter:function(e){N||"function"!=typeof w||w(e),N&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),K&&(L||!F)&&g(K,X,q,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},F)},onTouchStart:function(e){N||"function"!=typeof I||I(e),N&&c.props&&"function"==typeof c.props.onTouchStart&&c.props.onTouchStart(e),K&&(L||!F)&&g(K,X,q,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},F)}};if((0,f.isAbsoluteUrl)(q))$.href=q;else if(!N||P||"a"===c.type&&!("href"in c.props)){var ee=void 0!==R?R:null==D?void 0:D.locale,et=(null==D?void 0:D.isLocaleDomain)&&(0,h.getDomainLocale)(q,ee,null==D?void 0:D.locales,null==D?void 0:D.domainLocales);$.href=et||(0,_.addBasePath)((0,s.addLocale)(q,ee,null==D?void 0:D.defaultLocale))}return N?a.default.cloneElement(c,$):a.default.createElement("a",r._({},S,$),n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1309);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var o=n(7294),u=n(29),a="function"==typeof IntersectionObserver,l=new Map,i=[];function c(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,f=r._((0,o.useState)(!1),2),s=f[0],d=f[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!c&&!s){var e,r,o,f,v=p.current;if(v&&v.tagName)return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(f=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(f.delete(v),o.unobserve(v),0===f.size){o.disconnect(),l.delete(r);var e=i.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var h=(0,u.requestIdleCallback)(function(){return d(!0)});return function(){return(0,u.cancelIdleCallback)(h)}}},[c,n,t,s,p.current]),[v,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5901:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return c},default:function(){return f}});var r=n(5893),o=n(1163),u=n(1664),a=n.n(u),l=n(3766),i=n.n(l),c=!0;function f(e){var t=e.results,n=(0,o.useRouter)(),u=n.query.tag,l=new Set;return t.forEach(function(e){e.tags.forEach(function(e){return l.add(e)})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"AI News"}),!u&&(0,r.jsx)("div",{className:"tagsList",children:Array.from(l).map(function(e,t){return(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),n.push("/?tag=".concat(encodeURIComponent(e)))},children:e}),t<l.size-1&&", "]},t)})}),u&&(0,r.jsx)("div",{className:"showAll",children:(0,r.jsx)(a(),{href:"/",children:"Show All"})}),t.map(function(e,t){return(0,r.jsxs)("div",{className:i().newsItem,children:[(0,r.jsx)("div",{className:"bmDate",children:e.bookmarkedDate}),(0,r.jsx)("div",{children:e.name}),(0,r.jsx)("div",{children:e.tags.map(function(t,o){return(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),n.push("/?tag=".concat(encodeURIComponent(t)))},children:t}),o<e.tags.length-1&&", "]},o)})}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"Read More"})}),(0,r.jsxs)("div",{children:["Published: ",e.publishedDate]})]},t)})]})}},3766:function(e){e.exports={newsItem:"newsItem_newsItem__vKXPg"}},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);