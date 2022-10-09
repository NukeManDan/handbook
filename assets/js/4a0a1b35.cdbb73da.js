"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(a),f=i,p=c["".concat(o,".").concat(f)]||c[f]||b[f]||l;return a?n.createElement(p,r(r({ref:t},s),{},{components:a})):n.createElement(p,r({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],d={id:"mobile-feature-flags",title:"Feature flags"},o=void 0,u={unversionedId:"dev-guide/mobile-feature-flags",id:"dev-guide/mobile-feature-flags",title:"Feature flags",description:"The mobile SDK supports a number of feature flags which allow for customizing certain",source:"@site/docs/dev-guide/mobile-feature-flags.md",sourceDirName:"dev-guide",slug:"/dev-guide/mobile-feature-flags",permalink:"/handbook/docs/dev-guide/mobile-feature-flags",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/mobile-feature-flags.md",tags:[],version:"current",lastUpdatedAt:1665334650,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"mobile-feature-flags",title:"Feature flags"},sidebar:"docs",previous:{title:"Jitsi Meet development",permalink:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet"},next:{title:"Android SDK",permalink:"/handbook/docs/dev-guide/dev-guide-android-sdk"}},s={},b=[],c={toc:b};function f(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The mobile SDK supports a number of feature flags which allow for customizing certain\nUI aspects and behavior."),(0,l.kt)("p",null,"Here are the currently implemented flags:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add-people.enabled"),": Flag indicating if add-people functionality should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"android.audio-focus.disabled"),": Flag indicating if the SDK should not require the audio focus. Used by apps that do not use Jitsi audio.  Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"audio-mute.enabled"),": Flag indicating if the audio mute button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"calendar.enabled"),": Flag indicating if calendar integration should be enabled. Default: enabled (true) on Android, auto-detected on iOS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"call-integration.enabled"),": Flag indicating if call integration (CallKit on iOS, ConnectionService on Android) should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"close-captions.enabled"),": Flag indicating if close captions should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"conference-timer.enabled"),": Flag indicating if conference timer should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chat.enabled"),": Flag indicating if chat should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filmstrip.enabled"),": Flag indicating if the filmstrip should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"invite.enabled"),": Flag indicating if invite functionality should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios.recording.enabled"),": Flag indicating if recording should be enabled in iOS. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios.screensharing.enabled"),": Flag indicating if screen sharing should be enabled in iOS. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kick-out.enabled"),": Flag indicating if kickout is enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"live-streaming.enabled"),": Flag indicating if live-streaming should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"meeting-name.enabled"),": Flag indicating if displaying the meeting name should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"meeting-password.enabled"),": Flag indicating if the meeting password button should be enabled. Note that this flag just decides on the buttton, if a meeting has a password set, the password dialog will still show up. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notifications.enabled"),": Flag indicating if the notifications should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overflow-menu.enabled"),": Flag indicating if the audio overflow menu button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pip.enabled"),": Flag indicating if Picture-in-Picture should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"raise-hand.enabled"),": Flag indicating if raise hand feature should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recording.enabled"),": Flag indicating if recording should be enabled. Default: auto-detected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolution"),": Flag indicating the local and (maximum) remote video resolution. Overrides the server configuration. Default: (unset)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server-url-change.enabled"),": Flag indicating if server URL change is enabled. Default: enabled (true)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tile-view.enabled"),": Flag indicating if tile view feature should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolbox.alwaysVisible"),": Flag indicating if the toolbox should be always be visible. Default: disabled (false)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolbox.enabled"),": Flag indicating if the toolbox should be enabled. Default: enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"video-mute.enabled"),":  Flag indicating if the video mute button should be displayed. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"video-share.enabled"),":  Flag indicating if the video share button should be enabled. Default: enabled (true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"welcomepage.enabled"),": Flag indicating if the welcome page should be enabled. Default: disabled (false).")),(0,l.kt)("p",null,"All flags are defined ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.js"},"here"),"."))}f.isMDXComponent=!0}}]);