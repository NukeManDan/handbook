"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"client connection status indicators",title:"Client Connection Status Indicators"},l=void 0,d={unversionedId:"user-guide/client connection status indicators",id:"user-guide/client connection status indicators",title:"Client Connection Status Indicators",description:"This document explains what the different connection quality indicators on the video thumbnails actually mean.",source:"@site/docs/user-guide/client-connection-status-indicators.md",sourceDirName:"user-guide",slug:"/user-guide/client connection status indicators",permalink:"/handbook/docs/user-guide/client connection status indicators",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/user-guide/client-connection-status-indicators.md",tags:[],version:"current",lastUpdatedAt:1675577672,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{id:"client connection status indicators",title:"Client Connection Status Indicators"}},c={},u=[{value:"GOOD",id:"good",level:2},{value:"NON-OPTIMAL",id:"non-optimal",level:2},{value:"POOR",id:"poor",level:2},{value:"LOST",id:"lost",level:2},{value:"GHOST/NINJA",id:"ghostninja",level:2},{value:"Target bitrates expected for the video streams",id:"target-bitrates-expected-for-the-video-streams",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains what the different connection quality indicators on the video thumbnails actually mean."),(0,i.kt)("h2",{id:"good"},"GOOD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With video enabled, when the send bitrate for the video stream is at least 50% of the target bitrate expected for the stream. Please refer to the target bitrates table below."),(0,i.kt)("li",{parentName:"ul"},"With video disabled or screen sharing is in progress, when the downstream packet loss is less than 6%.")),(0,i.kt)("h2",{id:"non-optimal"},"NON-OPTIMAL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With video enabled, when the send bitrate for the video stream is at least 30% of the target bitrate expected for the stream. Please refer to the target bitrates table below."),(0,i.kt)("li",{parentName:"ul"},"With video disabled or screen sharing is in progress, when the downstream packet loss is between 6% and 8%.")),(0,i.kt)("h2",{id:"poor"},"POOR"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With video enabled, when the send bitrate for the video stream is at least 10% of the target bitrate expected for the stream. Please refer to the target bitrates table below."),(0,i.kt)("li",{parentName:"ul"},"With video disabled or screen sharing is in progress, when the downstream packet loss is between 8% and 12%.")),(0,i.kt)("h2",{id:"lost"},"LOST"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the user stops receiving video for the remote endpoint even when the endpoint is not video muted and it is in LastN as indicated by the bridge\u2019s LastNEndpointChangeEvent."),(0,i.kt)("li",{parentName:"ul"},"When the bridge sends an EndpointConnectivityStatusChangeEvent indicating that the remote endpoint is no longer active, i.e., when the bridge has not received media from the remote endpoint for more than 3 secs.")),(0,i.kt)("h2",{id:"ghostninja"},"GHOST/NINJA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the user stops receiving video for the remote endpoint even when the endpoint is not video muted and it is not in LastN as indicated by the bridge\u2019s LastNEndpointChangeEvent. This means that the bridge decided to suspend the video for this user. Bridge takes into consideration the available downlink bandwidth for the receiving endpoint and the number of video streams requested using the channelLast setting.")),(0,i.kt)("h2",{id:"target-bitrates-expected-for-the-video-streams"},"Target bitrates expected for the video streams"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CodecType"),(0,i.kt)("th",{parentName:"tr",align:null},"180p (in Kbps)"),(0,i.kt)("th",{parentName:"tr",align:null},"360p (in Kbps)"),(0,i.kt)("th",{parentName:"tr",align:null},"720p (in Kbps)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VP8"),(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"1500")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VP9"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"1200")))))}h.isMDXComponent=!0}}]);