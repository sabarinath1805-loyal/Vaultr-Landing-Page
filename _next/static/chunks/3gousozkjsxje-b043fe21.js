;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="59807513-c803-afff-bb20-3796571d162e")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,513281,(e,t,r)=>{"use strict";try{var o="u">typeof window?window:e.g;o._sentryModuleMetadata=o._sentryModuleMetadata||{},o._sentryModuleMetadata[(new o.Error).stack]=Object.assign({},o._sentryModuleMetadata[(new o.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case i:case l:case d:case f:case b:case h:return e;default:switch(e=e&&e.$$typeof){case c:case u:case p:case g:case s:return e;default:return t}}case n:return t}}}r.ContextConsumer=s,r.ContextProvider=c,r.Element=a,r.ForwardRef=u,r.Fragment=i,r.Lazy=p,r.Memo=g,r.Portal=n,r.Profiler=l,r.StrictMode=d,r.Suspense=f,r.SuspenseList=b,r.isContextConsumer=function(e){return y(e)===s},r.isContextProvider=function(e){return y(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},r.isForwardRef=function(e){return y(e)===u},r.isFragment=function(e){return y(e)===i},r.isLazy=function(e){return y(e)===p},r.isMemo=function(e){return y(e)===g},r.isPortal=function(e){return y(e)===n},r.isProfiler=function(e){return y(e)===l},r.isStrictMode=function(e){return y(e)===d},r.isSuspense=function(e){return y(e)===f},r.isSuspenseList=function(e){return y(e)===b},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===d||e===f||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===m||void 0!==e.getModuleId)||!1},r.typeOf=y},383066,(e,t,r)=>{"use strict";try{var o="u">typeof window?window:e.g;o._sentryModuleMetadata=o._sentryModuleMetadata||{},o._sentryModuleMetadata[(new o.Error).stack]=Object.assign({},o._sentryModuleMetadata[(new o.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}t.exports=e.r(513281)},341085,47635,e=>{"use strict";let t,r;var o=e.i(408466);try{var a="u">typeof window?window:e.g;a._sentryModuleMetadata=a._sentryModuleMetadata||{},a._sentryModuleMetadata[(new a.Error).stack]=Object.assign({},a._sentryModuleMetadata[(new a.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function n(e,t,r,o,a,n){return{enabled:e.selectable({base:t,dark:r,solid:o,muted:a,state:"enabled",tone:n}),hovered:e.selectable({base:t,dark:r,solid:o,muted:a,state:"hovered",tone:n}),pressed:e.selectable({base:t,dark:r,solid:o,muted:a,state:"pressed",tone:n}),selected:e.selectable({base:t,dark:r,solid:o,muted:a,state:"selected",tone:n}),disabled:e.selectable({base:t,dark:r,solid:o,muted:a,state:"disabled",tone:n})}}function i(e,t,r,o,a,n){return{default:e.button({base:t,dark:r,solid:o.default,muted:a.default,mode:n}),primary:e.button({base:t,dark:r,solid:o.primary,muted:a.primary,mode:n}),positive:e.button({base:t,dark:r,solid:o.positive,muted:a.positive,mode:n}),caution:e.button({base:t,dark:r,solid:o.caution,muted:a.caution,mode:n}),critical:e.button({base:t,dark:r,solid:o.critical,muted:a.critical,mode:n})}}let d="hsl(0, 0%, 0%)",l="hsl(0, 0%, 100%)",s={default:{lightest:"hsl(0, 0%, 95%)",lighter:"hsl(0, 0%, 70%)",light:"hsl(0, 0%, 65%)",base:"hsl(0, 0%, 50%)",dark:"hsl(0, 0%, 35%)",darker:"hsl(0, 0%, 20%)",darkest:"hsl(0, 0%, 5%)"},transparent:{lightest:"hsl(240, 100%, 95%)",lighter:"hsl(240, 100%, 70%)",light:"hsl(240, 100%, 65%)",base:"hsl(240, 100%, 50%)",dark:"hsl(240, 100%, 35%)",darker:"hsl(240, 100%, 20%)",darkest:"hsl(240, 100%, 5%)"},primary:{lightest:"hsl(240, 100%, 95%)",lighter:"hsl(240, 100%, 70%)",light:"hsl(240, 100%, 65%)",base:"hsl(240, 100%, 50%)",dark:"hsl(240, 100%, 35%)",darker:"hsl(240, 100%, 20%)",darkest:"hsl(240, 100%, 5%)"},positive:{lightest:"hsl(120, 100%, 95%)",lighter:"hsl(120, 100%, 70%)",light:"hsl(120, 100%, 65%)",base:"hsl(120, 100%, 50%)",dark:"hsl(120, 100%, 35%)",darker:"hsl(120, 100%, 20%)",darkest:"hsl(120, 100%, 5%)"},caution:{lightest:"hsl(60, 100%, 95%)",lighter:"hsl(60, 100%, 70%)",light:"hsl(60, 100%, 65%)",base:"hsl(60, 100%, 50%)",dark:"hsl(60, 100%, 35%)",darker:"hsl(60, 100%, 20%)",darkest:"hsl(60, 100%, 5%)"},critical:{lightest:"hsl(0, 100%, 95%)",lighter:"hsl(0, 100%, 70%)",light:"hsl(0, 100%, 65%)",base:"hsl(0, 100%, 50%)",dark:"hsl(0, 100%, 35%)",darker:"hsl(0, 100%, 20%)",darkest:"hsl(0, 100%, 5%)"}},c={gray:"hsl(0, 0%, 50%)",red:"hsl(0, 100%, 50%)",orange:"hsl(30, 100%, 50%)",yellow:"hsl(60, 100%, 50%)",green:"hsl(120, 100%, 50%)",cyan:"hsl(180, 100%, 50%)",blue:"hsl(240, 100%, 50%)",purple:"hsl(270, 100%, 50%)",magenta:"hsl(300, 100%, 50%)"},u={transparent:{bg:[s.transparent.darkest,s.transparent.lightest],fg:[s.transparent.lightest,s.transparent.darkest],border:[s.transparent.darker,s.transparent.lighter],focusRing:[s.transparent.base,s.transparent.base]},primary:{bg:[s.primary.darkest,s.primary.lightest],fg:[s.primary.lightest,s.primary.darkest],border:[s.primary.darker,s.primary.lighter],focusRing:[s.primary.base,s.primary.base]},positive:{bg:[s.positive.darkest,s.positive.lightest],fg:[s.positive.lightest,s.positive.darkest],border:[s.positive.darker,s.positive.lighter],focusRing:[s.positive.base,s.positive.base]},caution:{bg:[s.caution.darkest,s.caution.lightest],fg:[s.caution.lightest,s.caution.darkest],border:[s.caution.darker,s.caution.lighter],focusRing:[s.caution.base,s.caution.base]},critical:{bg:[s.critical.darkest,s.critical.lightest],fg:[s.critical.lightest,s.critical.darkest],border:[s.critical.darker,s.critical.lighter],focusRing:[s.critical.base,s.critical.base]}},f={base:({dark:e,name:t})=>"default"===t?{bg:e?d:l,fg:e?l:d,border:e?s.default.darkest:s.default.lightest,focusRing:s.primary.base,shadow:{outline:d,umbra:d,penumbra:d,ambient:d},skeleton:{from:e?l:d,to:e?l:d}}:{bg:u[t].bg[+!e],fg:u[t].fg[+!e],border:u[t].border[+!e],focusRing:u[t].focusRing[+!e],shadow:{outline:d,umbra:d,penumbra:d,ambient:d},skeleton:{from:e?l:d,to:e?l:d}},solid:({base:e,dark:t,state:r,tone:o})=>{let a=s[o];return"hovered"===r?{bg:t?a.light:a.dark,bg2:t?a.light:a.dark,border:t?a.lighter:a.darker,fg:t?a.darkest:a.lightest,icon:t?a.darkest:a.lightest,muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}:{bg:a.base,bg2:a.base,border:t?a.light:a.dark,fg:t?a.darkest:a.lightest,icon:t?a.darkest:a.lightest,muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}},muted:({base:e,dark:t,state:r,tone:o})=>{let a=s[o];return"hovered"===r?{bg:t?a.darker:a.lighter,bg2:t?a.darker:a.lighter,border:t?a.lighter:a.darker,fg:t?a.lightest:a.darkest,icon:t?a.lightest:a.darkest,muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}:{bg:t?a.darkest:a.lightest,bg2:t?a.darkest:a.lightest,border:t?a.darker:a.lighter,fg:t?a.lighter:a.darker,icon:t?a.lighter:a.darker,muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}},button:({base:e,mode:t,muted:r,solid:o})=>"bleed"===t?{...r,enabled:{bg:"transparent",bg2:"transparent",fg:r.enabled.fg,icon:r.enabled.fg,border:"transparent",muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton},hovered:{bg:r.enabled.bg,bg2:r.enabled.bg,fg:r.hovered.fg,icon:r.hovered.fg,border:"transparent",muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}}:"ghost"===t?{...o,enabled:r.enabled}:o,card:({base:e})=>({bg:d,bg2:d,fg:d,icon:d,border:d,muted:{fg:d},accent:{fg:d},link:{fg:d},code:{bg:d,fg:d},skeleton:e.skeleton}),input:()=>({bg:d,bg2:d,fg:d,border:d,placeholder:d}),selectable:({muted:e,state:t,tone:r})=>e[r][t],spot:({key:e})=>c[e],syntax:()=>({atrule:d,attrName:d,attrValue:d,attribute:d,boolean:d,builtin:d,cdata:d,char:d,class:d,className:d,comment:d,constant:d,deleted:d,doctype:d,entity:d,function:d,hexcode:d,id:d,important:d,inserted:d,keyword:d,number:d,operator:d,prolog:d,property:d,pseudoClass:d,pseudoElement:d,punctuation:d,regex:d,selector:d,string:d,symbol:d,tag:d,unit:d,url:d,variable:d})};function b(e={}){let t={...f,...e};return{light:g(t,!1),dark:g(t,!0)}}function g(e,t){return{default:p(e,t,"default"),transparent:p(e,t,"transparent"),primary:p(e,t,"primary"),positive:p(e,t,"positive"),caution:p(e,t,"caution"),critical:p(e,t,"critical")}}function p(e,t,r){let o=e.base({dark:t,name:r}),a={default:{enabled:e.solid({base:o,dark:t,tone:"default",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"default",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"default",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"default",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"default",name:r,state:"selected"})},transparent:{enabled:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"selected"})},primary:{enabled:e.solid({base:o,dark:t,tone:"primary",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"primary",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"primary",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"primary",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"primary",name:r,state:"selected"})},positive:{enabled:e.solid({base:o,dark:t,tone:"positive",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"positive",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"positive",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"positive",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"positive",name:r,state:"selected"})},caution:{enabled:e.solid({base:o,dark:t,tone:"caution",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"caution",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"caution",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"caution",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"caution",name:r,state:"selected"})},critical:{enabled:e.solid({base:o,dark:t,tone:"critical",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"critical",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"critical",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"critical",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"critical",name:r,state:"selected"})}},d={default:{enabled:e.muted({base:o,dark:t,tone:"default",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"default",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"default",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"default",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"default",name:r,state:"selected"})},transparent:{enabled:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"selected"})},primary:{enabled:e.muted({base:o,dark:t,tone:"primary",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"primary",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"primary",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"primary",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"primary",name:r,state:"selected"})},positive:{enabled:e.muted({base:o,dark:t,tone:"positive",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"positive",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"positive",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"positive",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"positive",name:r,state:"selected"})},caution:{enabled:e.muted({base:o,dark:t,tone:"caution",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"caution",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"caution",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"caution",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"caution",name:r,state:"selected"})},critical:{enabled:e.muted({base:o,dark:t,tone:"critical",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"critical",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"critical",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"critical",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"critical",name:r,state:"selected"})}};return{base:o,button:{default:i(e,o,t,a,d,"default"),ghost:i(e,o,t,a,d,"ghost"),bleed:i(e,o,t,a,d,"bleed")},card:{enabled:e.card({base:o,dark:t,name:r,state:"enabled",solid:a,muted:d}),disabled:e.card({base:o,dark:t,name:r,state:"disabled",solid:a,muted:d}),hovered:e.card({base:o,dark:t,name:r,state:"hovered",solid:a,muted:d}),pressed:e.card({base:o,dark:t,name:r,state:"pressed",solid:a,muted:d}),selected:e.card({base:o,dark:t,name:r,state:"selected",solid:a,muted:d})},dark:t,input:{default:{enabled:e.input({base:o,dark:t,mode:"default",state:"enabled",solid:a.default,muted:d.default}),disabled:e.input({base:o,dark:t,mode:"default",state:"disabled",solid:a.default,muted:d.default}),hovered:e.input({base:o,dark:t,mode:"default",state:"hovered",solid:a.default,muted:d.default}),readOnly:e.input({base:o,dark:t,mode:"default",state:"readOnly",solid:a.default,muted:d.default})},invalid:{enabled:e.input({base:o,dark:t,mode:"invalid",state:"enabled",solid:a.default,muted:d.default}),disabled:e.input({base:o,dark:t,mode:"invalid",state:"disabled",solid:a.default,muted:d.default}),hovered:e.input({base:o,dark:t,mode:"invalid",state:"hovered",solid:a.default,muted:d.default}),readOnly:e.input({base:o,dark:t,mode:"invalid",state:"readOnly",solid:a.default,muted:d.default})}},selectable:{default:n(e,o,t,a,d,"default"),primary:n(e,o,t,a,d,"primary"),positive:n(e,o,t,a,d,"positive"),caution:n(e,o,t,a,d,"caution"),critical:n(e,o,t,a,d,"critical")},spot:{gray:e.spot({base:o,dark:t,key:"gray"}),blue:e.spot({base:o,dark:t,key:"blue"}),purple:e.spot({base:o,dark:t,key:"purple"}),magenta:e.spot({base:o,dark:t,key:"magenta"}),red:e.spot({base:o,dark:t,key:"red"}),orange:e.spot({base:o,dark:t,key:"orange"}),yellow:e.spot({base:o,dark:t,key:"yellow"}),green:e.spot({base:o,dark:t,key:"green"}),cyan:e.spot({base:o,dark:t,key:"cyan"})},syntax:e.syntax({base:o,dark:t}),solid:a,muted:d}}let h={sizes:[{distance:-4,size:19},{distance:-4,size:25},{distance:-8,size:33},{distance:-12,size:49}],focusRing:{offset:1,width:1}},m={textWeight:"medium",border:{width:1},focusRing:{offset:-1,width:1}},y={border:{width:1},focusRing:{offset:-1,width:1},shadow:{outline:.5}},v=[320,640,960,1280,1600,1920],w=[360,600,900,1200,1800,2400],k={dialog:{zOffset:600},popover:{zOffset:400},tooltip:{zOffset:200}},x=[0,1,3,6,9,12,21],$=[null,{umbra:[0,0,0,0],penumbra:[0,0,0,0],ambient:[0,0,0,0]},{umbra:[0,3,5,-2],penumbra:[0,6,10,0],ambient:[0,1,18,1]},{umbra:[0,7,8,-4],penumbra:[0,12,17,2],ambient:[0,5,22,4]},{umbra:[0,9,11,-5],penumbra:[0,18,28,2],ambient:[0,7,34,6]},{umbra:[0,11,15,-7],penumbra:[0,24,38,3],ambient:[0,9,46,8]}],S=[0,4,8,12,20,32,52,84,136,220],_={border:{width:1},checkbox:{size:17,focusRing:{offset:-1,width:1}},radio:{size:17,markSize:9,focusRing:{offset:-1,width:1}},switch:{width:25,height:17,padding:5,transitionDurationMs:150,transitionTimingFunction:"ease-out",focusRing:{offset:1,width:1}},select:{focusRing:{offset:-1,width:1}},text:{focusRing:{offset:-1,width:1}}},R={button:{root:{transition:"background-color 100ms,border-color 100ms,color 100ms"}}},j={code:{family:"ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:19,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:22,iconSize:33,lineHeight:31,letterSpacing:0}]},heading:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:700,medium:800,semibold:900,bold:900},sizes:[{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:17,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:21,iconSize:33,lineHeight:29,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:27,iconSize:41,lineHeight:35,letterSpacing:0},{ascenderHeight:9.5,descenderHeight:8.5,fontSize:33,iconSize:49,lineHeight:41,letterSpacing:0},{ascenderHeight:10.5,descenderHeight:9.5,fontSize:38,iconSize:53,lineHeight:47,letterSpacing:0}]},label:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',weights:{regular:600,medium:700,semibold:800,bold:900},sizes:[{ascenderHeight:2,descenderHeight:2,fontSize:8.1,iconSize:13,lineHeight:10,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:9.5,iconSize:15,lineHeight:11,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:10.8,iconSize:17,lineHeight:12,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:12.25,iconSize:19,lineHeight:13,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:13.6,iconSize:21,lineHeight:14,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:15,iconSize:23,lineHeight:15,letterSpacing:.5}]},text:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:15,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:18,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:21,iconSize:33,lineHeight:31,letterSpacing:0}]}},z=new WeakMap;function C(e){let t=z.get(e);if(t)return t;let r=I(e,e.card.enabled),o={_blend:e._blend||(e.dark?"screen":"multiply"),_dark:e.dark,accent:r.accent,avatar:r.avatar,backdrop:e.base.shadow.ambient,badge:r.badge,bg:e.base.bg,border:e.base.border,button:{default:E(e,e.button.default),ghost:E(e,e.button.ghost),bleed:E(e,e.button.bleed)},code:r.code,fg:e.base.fg,focusRing:e.base.focusRing,icon:r.muted.fg,input:{default:M(e.input.default),invalid:M(e.input.invalid)},kbd:r.kbd,link:r.link,muted:{...r.muted,bg:e.selectable?.default.enabled.bg2||e.base.bg},selectable:E(e,e.selectable||e.muted),shadow:e.base.shadow,skeleton:{from:e.skeleton?.from||e.base.border,to:e.skeleton?.to||e.base.border},syntax:e.syntax};return z.set(e,o),o}function E(e,t){return{default:{enabled:I(e,t.default.enabled),hovered:I(e,t.default.hovered),pressed:I(e,t.default.pressed),selected:I(e,t.default.selected),disabled:I(e,t.default.disabled)},neutral:{enabled:I(e,t.default.enabled),hovered:I(e,t.default.hovered),pressed:I(e,t.default.pressed),selected:I(e,t.default.selected),disabled:I(e,t.default.disabled)},primary:{enabled:I(e,t.primary.enabled),hovered:I(e,t.primary.hovered),pressed:I(e,t.primary.pressed),selected:I(e,t.primary.selected),disabled:I(e,t.primary.disabled)},suggest:{enabled:I(e,t.primary.enabled),hovered:I(e,t.primary.hovered),pressed:I(e,t.primary.pressed),selected:I(e,t.primary.selected),disabled:I(e,t.primary.disabled)},positive:{enabled:I(e,t.positive.enabled),hovered:I(e,t.positive.hovered),pressed:I(e,t.positive.pressed),selected:I(e,t.positive.selected),disabled:I(e,t.positive.disabled)},caution:{enabled:I(e,t.caution.enabled),hovered:I(e,t.caution.hovered),pressed:I(e,t.caution.pressed),selected:I(e,t.caution.selected),disabled:I(e,t.caution.disabled)},critical:{enabled:I(e,t.critical.enabled),hovered:I(e,t.critical.hovered),pressed:I(e,t.critical.pressed),selected:I(e,t.critical.selected),disabled:I(e,t.critical.disabled)}}}function I(e,t){return{...t,avatar:{gray:{bg:e.spot.gray,fg:e.base.bg},blue:{bg:e.spot.blue,fg:e.base.bg},purple:{bg:e.spot.purple,fg:e.base.bg},magenta:{bg:e.spot.magenta,fg:e.base.bg},red:{bg:e.spot.red,fg:e.base.bg},orange:{bg:e.spot.orange,fg:e.base.bg},yellow:{bg:e.spot.yellow,fg:e.base.bg},green:{bg:e.spot.green,fg:e.base.bg},cyan:{bg:e.spot.cyan,fg:e.base.bg}},badge:{default:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,dot:e.muted.default.enabled.muted.fg,icon:e.muted.default.enabled.muted.fg},neutral:{bg:e.muted.transparent.enabled.bg,fg:e.muted.transparent.enabled.fg,dot:e.muted.transparent.enabled.muted.fg,icon:e.muted.transparent.enabled.muted.fg},primary:{bg:e.muted.primary.enabled.bg,fg:e.muted.primary.enabled.fg,dot:e.muted.primary.enabled.muted.fg,icon:e.muted.primary.enabled.muted.fg},suggest:{bg:e.muted.primary.enabled.bg,fg:e.muted.primary.enabled.fg,dot:e.muted.primary.enabled.muted.fg,icon:e.muted.primary.enabled.muted.fg},positive:{bg:e.muted.positive.enabled.bg,fg:e.muted.positive.enabled.fg,dot:e.muted.positive.enabled.muted.fg,icon:e.muted.positive.enabled.muted.fg},caution:{bg:e.muted.caution.enabled.bg,fg:e.muted.caution.enabled.fg,dot:e.muted.caution.enabled.muted.fg,icon:e.muted.caution.enabled.muted.fg},critical:{bg:e.muted.critical.enabled.bg,fg:e.muted.critical.enabled.fg,dot:e.muted.critical.enabled.muted.fg,icon:e.muted.critical.enabled.muted.fg}},kbd:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,border:e.muted.default.enabled.border},muted:{...e.muted.default.enabled.muted,bg:t.bg2||t.bg},skeleton:{from:t.skeleton?.from||t.border,to:t.skeleton?.to||t.border}}}function M(e){return{enabled:N(e.enabled),disabled:N(e.disabled),readOnly:N(e.readOnly),hovered:N(e.hovered)}}function N(e){return{bg:e.bg,border:e.border,fg:e.fg,muted:{bg:e.bg2},placeholder:e.placeholder}}let H=new WeakMap;function T(e){if(e.sanity.v2?._resolved)return e.sanity.v2;let t=H.get(e);if(t)return t;let r={_version:2,_resolved:!0,avatar:{...h,...e.sanity.avatar},button:{...m,...e.sanity.button},card:y,color:C(e.sanity.color),container:e.sanity.container,font:e.sanity.fonts,input:{..._,...e.sanity.input,checkbox:{..._.checkbox,...e.sanity.input.checkbox},radio:{..._.radio,...e.sanity.input.radio},switch:{..._.switch,...e.sanity.input.switch}},layer:e.sanity.layer??k,media:e.sanity.media,radius:e.sanity.radius,shadow:e.sanity.shadows,space:e.sanity.space,style:e.sanity.styles};return H.set(e,r),r}function O(e){return 2===e._version}let L=new WeakMap;function F(e,t,r){Object.defineProperty(e,t,{get(){let o=r();return Object.defineProperty(e,t,{value:o,enumerable:!0,writable:!1,configurable:!1}),o},enumerable:!0,configurable:!0})}let A=new WeakMap,B=["transparent","default","primary","positive","caution","critical"];function P(e,t){let r={};for(let o of B)F(r,o,()=>{var r;return{base:{bg:(r=t[e][o]).bg,fg:r.fg,border:r.border,focusRing:r.focusRing,shadow:r.shadow},button:r.button,card:r.selectable.default,dark:r._dark,input:{default:V(r.input.default),invalid:V(r.input.invalid)},muted:{...r.button.ghost,transparent:r.button.ghost.default},solid:{...r.button.default,transparent:r.button.default.default},selectable:r.selectable,spot:{gray:r.avatar.gray.bg,blue:r.avatar.blue.bg,purple:r.avatar.purple.bg,magenta:r.avatar.magenta.bg,red:r.avatar.red.bg,orange:r.avatar.orange.bg,yellow:r.avatar.yellow.bg,green:r.avatar.green.bg,cyan:r.avatar.cyan.bg},syntax:r.syntax}});return r}function D(e){let t=A.get(e);if(t)return t;let{avatar:r,button:o,color:a,container:n,font:i,input:d,media:l,radius:s,shadow:c,space:u,style:f}=e,b={};F(b,"light",()=>P("light",a)),F(b,"dark",()=>P("dark",a));let g={_version:0,avatar:r,button:o,container:n,color:b,focusRing:d.text.focusRing,fonts:i,input:d,media:l,radius:s,shadows:c,space:u,styles:f,v2:e};return A.set(e,g),g}function V(e){return{enabled:W(e.enabled),disabled:W(e.disabled),readOnly:W(e.readOnly),hovered:W(e.hovered)}}function W(e){return{bg:e.bg,bg2:e.muted.bg,border:e.border,fg:e.fg,placeholder:e.placeholder}}let G=["multiply","screen"],Y=["transparent","default","neutral","primary","suggest","positive","caution","critical"],K=["default","neutral","primary","suggest","positive","caution","critical"],U=["enabled","hovered","pressed","selected","disabled"],X=["default","ghost","bleed"],q=["default","invalid"],Q=["enabled","hovered","readOnly","disabled"];function Z(e){return o.COLOR_TINTS.includes(e)}function J(e){return/^\d+%$/.test(e)}function ee(e){var t;let r=e.split("/"),a=r.shift()||"",[n,i]=a.split(" ");if(Z(n)){let e=r.shift()||"";return J(i)?{type:"color",tint:n,mix:Number(i.slice(0,-1))/100}:et(e)?{type:"color",tint:n,opacity:Number(e)}:{type:"color",tint:n}}if("black"===(t=n)||"white"===t){let e=r.shift()||"";return J(i)?{type:"color",key:n,mix:Number(i.slice(0,-1))/100}:et(e)?{type:"color",key:n,opacity:Number(e)}:{type:"color",key:n}}if(o.COLOR_HUES.includes(n)){let[e,t]=(a=r.shift()||"").split(" ");if(Z(e)){let o=r.shift()||"";return J(t)?{type:"color",hue:n,tint:e,mix:Number(t.slice(0,-1))/100}:et(o)?{type:"color",hue:n,tint:e,opacity:Number(o)}:{type:"color",hue:n,tint:e}}return{type:"hue",value:n}}if(G.includes(n))return{type:"blendMode",value:n}}function et(e){return"0"===e||/^0\.[0-9]+$/.test(e)||"1"===e}[...o.COLOR_HUES],[...Y],[...K],[...U],[...q],[...Q];let er=["500","500"];function eo(e,t=er){var r;let o,{hue:a,scheme:n}=e,i=ee(t[+("light"!==n)]);if(!i||"color"!==i.type)throw Error(`Invalid color token: ${t[0]}`);return r={...i,hue:i.hue||a},o="",o="black"===r.key||"white"===r.key?r.key:`${r.hue}/${r.tint}`,void 0!==r.mix?`${o} ${100*r.mix}%`:(void 0!==r.opacity&&(o+=`/${r.opacity}`),o)}let ea={base:{"*":{_blend:["multiply","screen"],accent:{fg:["purple/600","purple/400"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},backdrop:["gray/200/0.5","black/0.5"],badge:{"*":{bg:["100","900"],fg:["600","400"],icon:["500","500"],dot:["500","500"]},positive:{bg:["200 50%","900"],fg:["600","500"]},caution:{bg:["200 50%","900"],fg:["600","500"]}},bg:["50","950"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["800","200"],focusRing:["blue/500","blue/500"],icon:["600","400"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/600","blue/300"]},muted:{bg:["50","950"],fg:["700 75%","300 75%"]},shadow:{outline:["500/0.3","500/0.4"],umbra:["gray/500/0.1","black/0.2"],penumbra:["gray/500/0.07","black/0.14"],ambient:["gray/500/0.06","black/0.12"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},transparent:{bg:["50","black"]},default:{bg:["white","950"],fg:["800","200"],muted:{fg:["600","400"]}},primary:{_hue:"blue"},suggest:{_hue:"purple"},positive:{_hue:"green",shadow:{outline:["500/0.4","500/0.4"]}},caution:{_hue:"yellow",shadow:{outline:["600/0.3","500/0.4"]}},critical:{_hue:"red"}},button:{default:{"*":{"*":{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500/0","400/0"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["950","50"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},hovered:{bg:["600","300"],border:["700/0","300/0"]},pressed:{bg:["700","300"]},selected:{bg:["700","300"]},disabled:{_hue:"gray",accent:{fg:["100 70%","900 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/500","gray/400"],fg:["white","black"]}},badge:{"*":{bg:["gray/700","gray/300"],fg:["white","black"],dot:["white","black"],icon:["white","black"]}},bg:["300","600"],code:{bg:["950","50"],fg:["300","600"]},fg:["300","600"],muted:{bg:["950","50"],fg:["300","600"]},kbd:{bg:["black","white"],fg:["white","black"],border:["700","300"]},link:{fg:["100 70%","900 70%"]}}},default:{"*":{avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},bg:["800","200"],muted:{bg:["950","50"],fg:["400","600"]}},hovered:{bg:["900","100"]},pressed:{bg:["black","white"]},selected:{bg:["black","white"]}}},ghost:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 60%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["50","950"],border:["100","900"],code:{bg:["500 10%","400 10%"],fg:["700 60%","400 60%"]},fg:["600","400"],icon:["700 60%","300 60%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 60%","blue/300 60%"]},muted:{bg:["100","950"],fg:["700 60%","300 60%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["100","900"],fg:["700","300"]},pressed:{bg:["200","800"],fg:["800","200"]},selected:{bg:["200","800"],fg:["800","200"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["400","600"],icon:["300","700"],muted:{fg:["300","700"]},kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]}}},positive:{"*":{border:["600 20%","800"]}},caution:{"*":{border:["600 20%","800"]}}},bleed:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["white/0","black/0"],code:{bg:["50","950"],fg:["700 75%","300 75%"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["700","300"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["100","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","900"],fg:["800","200"],icon:["800 70%","300 70%"]},pressed:{bg:["100","800"],fg:["800","200"],icon:["800 70%","200 70%"]},selected:{bg:["100","900"],fg:["800","200"],icon:["800 60%","200 60%"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},code:{bg:["50","950"],fg:["200","800"]},fg:["400","600"],icon:["300","700"],muted:{fg:["400","600"]},kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]}}}}},input:{"*":{"*":{_blend:["multiply","screen"],bg:["white","black"],border:["200","700"],fg:["black","200"],muted:{bg:["50","950"]},placeholder:["400","600"]},hovered:{border:["300","700"]},readOnly:{bg:["50","950"],border:["200","800"],fg:["800","200"]},disabled:{bg:["50","950"],fg:["400","600"],border:["100","900"],placeholder:["200","800 50%"]}},invalid:{"*":{_hue:"red",bg:["100","950"]}}},selectable:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["50","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","950"]},pressed:{bg:["100","900"]},selected:{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["multiply","screen"],bg:["white","black"],fg:["black","white"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500 20%","400 20%"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["500 10%","400 10%"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["200","800"],icon:["200","800"],kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]},muted:{bg:["50 50%","950 50%"],fg:["200","800"]}}},default:{selected:{_hue:"blue"}},critical:{disabled:{bg:["50 50%","950 50%"]}}},syntax:{atrule:["purple/600","purple/400"],attrName:["green/600","green/400"],attrValue:["yellow/600","yellow/400"],attribute:["yellow/600","yellow/400"],boolean:["purple/600","purple/400"],builtin:["purple/600","purple/400"],cdata:["yellow/600","yellow/400"],char:["yellow/600","yellow/400"],class:["orange/600","orange/400"],className:["cyan/600","cyan/400"],comment:["gray/400","gray/600"],constant:["purple/600","purple/400"],deleted:["red/600","red/400"],entity:["red/600","red/400"],function:["green/600","green/400"],hexcode:["blue/600","blue/400"],id:["purple/600","purple/400"],important:["purple/600","purple/400"],inserted:["yellow/600","yellow/400"],keyword:["magenta/600","magenta/400"],number:["purple/600","purple/400"],operator:["magenta/600","magenta/400"],property:["blue/600","blue/400"],pseudoClass:["yellow/600","yellow/400"],pseudoElement:["yellow/600","yellow/400"],punctuation:["gray/600","gray/400"],regex:["blue/600","blue/400"],selector:["red/600","red/400"],string:["yellow/600","yellow/400"],symbol:["purple/600","purple/400"],tag:["red/600","red/400"],unit:["orange/600","orange/400"],url:["red/600","red/400"],variable:["red/600","red/400"]}};function en(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}function ei(...e){let t=e.filter(Boolean);return 0===t.length?{}:t.reduce(ed,{})}function ed(e,t){for(let r of Object.keys(t)){let o=e[r],a=t[r];en(o)&&en(a)?e[r]=ei(o,a):e[r]=a}return e}function el(e,t){let{scheme:r}=e,o={};for(let e of Y)F(o,e,()=>(function(e,t){let{scheme:r,tone:o}=e,a=t?.color?.base?.[o],n={hue:a?._hue||"gray",scheme:r};return{_blend:(a?._blend||["multiply","screen"])[+("light"!==r)],_dark:"dark"===r,accent:{fg:eo(n,a?.accent?.fg)},avatar:es({scheme:r},a),backdrop:eo(n,a?.backdrop),badge:eu(a?.badge,{scheme:r},t),bg:eo(n,a?.bg),border:eo(n,a?.border),button:function(e,t){let{scheme:r,tone:o}=e,a={};for(let e of X)a[e]=function(e,t){let{cardTone:r,mode:o,scheme:a}=e,n={};for(let e of K)n[e]=function(e,t){let{cardTone:r,mode:o,scheme:a,tone:n}=e,i={};for(let e of U)i[e]=function(e,t){let{cardTone:r,mode:o,tone:a,scheme:n,state:i}=e,d=t?.color?.base?.[r],l=t?.color?.button?.[o]?.[a]?.[i],s=l?._hue||d?._hue||"gray",c=l?._blend||["screen","multiply"],u={hue:s,scheme:n};return{_blend:c[+("light"!==n)],accent:{fg:eo(u,l?.accent?.fg)},avatar:es({scheme:n},l),badge:eu(l?.badge,{scheme:n},t),bg:eo(u,l?.bg),border:eo(u,l?.border),code:{bg:eo(u,l?.code?.bg),fg:eo(u,l?.code?.fg)},fg:eo(u,l?.fg),icon:eo(u,l?.icon),muted:{bg:eo(u,l?.muted?.bg),fg:eo(u,l?.muted?.fg)},kbd:{bg:eo(u,l?.kbd?.bg),fg:eo(u,l?.kbd?.fg),border:eo(u,l?.kbd?.border)},link:{fg:eo(u,l?.link?.fg)},skeleton:{from:eo(u,l?.skeleton?.from),to:eo(u,l?.skeleton?.to)}}}({cardTone:r,mode:o,tone:n,scheme:a,state:e},t);return i}({cardTone:r,mode:o,scheme:a,tone:e},t);return n}({cardTone:o,scheme:r,mode:e},t);return a}({scheme:r,tone:o},t),code:{bg:eo(n,a?.code?.bg),fg:eo(n,a?.code?.fg)},fg:eo(n,a?.fg),focusRing:eo(n,a?.focusRing),icon:eo(n,a?.icon),input:function(e,t){let{scheme:r,tone:o}=e;return{default:ef({mode:"default",scheme:r,tone:o},t),invalid:ef({mode:"invalid",scheme:r,tone:o},t)}}({scheme:r,tone:o},t),kbd:{bg:eo(n,a?.kbd?.bg),fg:eo(n,a?.kbd?.fg),border:eo(n,a?.kbd?.border)},link:{fg:eo(n,a?.link?.fg)},muted:{bg:eo(n,a?.muted?.bg),fg:eo(n,a?.muted?.fg)},selectable:function(e,t){let{scheme:r,tone:o}=e,a={};for(let e of K)a[e]=function(e,t){let{cardTone:r,scheme:o,tone:a}=e,n={};for(let e of U)n[e]=function(e,t){let{cardTone:r,scheme:o,state:a,tone:n}=e,i=t?.color?.base?.[r],d=t?.color?.selectable?.[n]?.[a],l=d?._hue||i?._hue||"gray",s=d?._blend||["screen","multiply"],c={hue:l,scheme:o};return{_blend:s[+("light"!==o)],accent:{fg:eo(c,d?.accent?.fg)},avatar:es({scheme:o},d),badge:eu(d?.badge,{scheme:o},t),bg:eo(c,d?.bg),border:eo(c,d?.border),code:{bg:eo(c,d?.code?.bg),fg:eo(c,d?.code?.fg)},fg:eo(c,d?.fg),icon:eo(c,d?.icon),muted:{bg:eo(c,d?.muted?.bg),fg:eo(c,d?.muted?.fg)},kbd:{bg:eo(c,d?.kbd?.bg),fg:eo(c,d?.kbd?.fg),border:eo(c,d?.kbd?.border)},link:{fg:eo(c,d?.link?.fg)},skeleton:{from:eo(c,d?.skeleton?.from),to:eo(c,d?.skeleton?.to)}}}({cardTone:r,tone:a,scheme:o,state:e},t);return n}({cardTone:o,scheme:r,tone:e},t);return a}({scheme:r,tone:o},t),shadow:function(e,t){let{scheme:r,tone:o}=e,a=t?.color?.base?.[o],n={hue:a?._hue||"gray",scheme:r};return{outline:eo(n,a?.shadow?.outline),umbra:eo(n,a?.shadow?.umbra),penumbra:eo(n,a?.shadow?.penumbra),ambient:eo(n,a?.shadow?.ambient)}}({scheme:r,tone:o},t),skeleton:{from:eo(n,a?.skeleton?.from),to:eo(n,a?.skeleton?.to)},syntax:function(e,t){let{scheme:r}=e,o=t?.color?.syntax,a={hue:"gray",scheme:r};return{atrule:eo(a,o?.atrule),attrName:eo(a,o?.attrName),attrValue:eo(a,o?.attrValue),attribute:eo(a,o?.attribute),boolean:eo(a,o?.boolean),builtin:eo(a,o?.builtin),cdata:eo(a,o?.cdata),char:eo(a,o?.char),class:eo(a,o?.class),className:eo(a,o?.className),comment:eo(a,o?.comment),constant:eo(a,o?.constant),deleted:eo(a,o?.deleted),doctype:eo(a,o?.doctype),entity:eo(a,o?.entity),function:eo(a,o?.function),hexcode:eo(a,o?.hexcode),id:eo(a,o?.id),important:eo(a,o?.important),inserted:eo(a,o?.inserted),keyword:eo(a,o?.keyword),number:eo(a,o?.number),operator:eo(a,o?.operator),prolog:eo(a,o?.prolog),property:eo(a,o?.property),pseudoClass:eo(a,o?.pseudoClass),pseudoElement:eo(a,o?.pseudoElement),punctuation:eo(a,o?.punctuation),regex:eo(a,o?.regex),selector:eo(a,o?.selector),string:eo(a,o?.string),symbol:eo(a,o?.symbol),tag:eo(a,o?.tag),unit:eo(a,o?.unit),url:eo(a,o?.url),variable:eo(a,o?.variable)}}({scheme:r},t)}})({scheme:r,tone:e},t));return o}function es(e,t){let{scheme:r}=e;return{gray:ec({color:"gray",scheme:r},t),blue:ec({color:"blue",scheme:r},t),purple:ec({color:"purple",scheme:r},t),magenta:ec({color:"magenta",scheme:r},t),red:ec({color:"red",scheme:r},t),orange:ec({color:"orange",scheme:r},t),yellow:ec({color:"yellow",scheme:r},t),green:ec({color:"green",scheme:r},t),cyan:ec({color:"cyan",scheme:r},t)}}function ec(e,t){let{color:r,scheme:o}=e,a=t?.avatar?.[r],n={hue:a?._hue||"gray",scheme:o};return{_blend:(a?._blend||["screen","multiply"])[+("light"!==o)],bg:eo(n,a?.bg),fg:eo(n,a?.fg)}}function eu(e,t,r){let{scheme:o}=t,a={};for(let t of K)a[t]=function(e,t,r){let{scheme:o,tone:a}=t,n=e?.[a],i={hue:n?._hue||r?.color?.base?.[a]?._hue||"gray",scheme:o};return{bg:eo(i,n?.bg),fg:eo(i,n?.fg),dot:eo(i,n?.dot),icon:eo(i,n?.icon)}}(e,{scheme:o,tone:t},r);return a}function ef(e,t){let{mode:r,scheme:o,tone:a}=e;return{enabled:eb({mode:r,scheme:o,state:"enabled",cardTone:a},t),hovered:eb({mode:r,scheme:o,state:"hovered",cardTone:a},t),readOnly:eb({mode:r,scheme:o,state:"readOnly",cardTone:a},t),disabled:eb({mode:r,scheme:o,state:"disabled",cardTone:a},t)}}function eb(e,t){let{cardTone:r,mode:o,scheme:a,state:n}=e,i=t?.color?.base?.[r],d=t?.color?.input?.[o]?.[n],l=d?._hue||i?._hue||"gray",s=d?._blend||["screen","multiply"],c={hue:l,scheme:a};return{_blend:s[+("light"!==a)],bg:eo(c,d?.bg),border:eo(c,d?.border),fg:eo(c,d?.fg),muted:{bg:eo(c,d?.muted?.bg)},placeholder:eo(c,d?.placeholder)}}let eg=o.color;function ep(e,t){return{r:255*(e.r/255*(t.r/255)),g:255*(e.g/255*(t.g/255)),b:255*(e.b/255*(t.b/255))}}function eh(e,t){var r,o,a,n,i,d;return{r:255*((r=e.r/255)+(o=t.r/255)-r*o),g:255*((a=e.g/255)+(n=t.g/255)-a*n),b:255*((i=e.b/255)+(d=t.b/255)-i*d)}}function em(e,t=0,r=1){return Math.min(r,Math.max(t,e))}function ey(e,t,r,o,a){var n;return r*(1-(n=em((a-e)/(t-e))))+o*n}function ev(e){return Math.round(e)}function ew(e){if(4===e.length){let t=e.slice(1,2),r=e.slice(2,3),o=e.slice(3,4);return{r:parseInt(t+t,16),g:parseInt(r+r,16),b:parseInt(o+o,16)}}return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}}function ek(e){let t=ev(em(Math.round(e.r),0,255)),r=ev(em(Math.round(e.g),0,255)),o=ev(em(Math.round(e.b),0,255));return"a"in e?`rgba(${t},${r},${o},${e.a})`:"#"+(0x1000000+(t<<16)+(r<<8)+o).toString(16).slice(1)}function ex({r:e,g:t,b:r}){e/=255;let o=Math.min(e,t/=255,r/=255),a=Math.max(e,t,r),n=a-o,i=0,d=0,l=0;return(i=Math.round(60*(i=0==n?0:a==e?(t-r)/n%6:a==t?(r-e)/n+2:(e-t)/n+4)))<0&&(i+=360),l=(a+o)/2,{h:i,s:d=+(100*(d=0==n?0:n/(1-Math.abs(2*l-1)))).toFixed(1),l:l=+(100*l).toFixed(1)}}function e$(e){let t=e.s/100,r=e.l/100,o=(1-Math.abs(2*r-1))*t,a=o*(1-Math.abs(e.h/60%2-1)),n=r-o/2,i=0,d=0,l=0;return 0<=e.h&&e.h<60?(i=o,d=a,l=0):60<=e.h&&e.h<120?(i=a,d=o,l=0):120<=e.h&&e.h<180?(i=0,d=o,l=a):180<=e.h&&e.h<240?(i=0,d=a,l=o):240<=e.h&&e.h<300?(i=a,d=0,l=o):300<=e.h&&e.h<360&&(i=o,d=0,l=a),{r:Math.round((i+n)*255),g:Math.round((d+n)*255),b:Math.round((l+n)*255)}}let eS=/hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;function e_(e){if(!e)return{r:0,g:0,b:0};if("string"!=typeof e)throw Error("parseColor: expected a string");if("#"===e[0]&&(4===e.length||7===e.length)&&function(e){for(let t of e)if(-1==="0123456789ABCDEFabcdef".indexOf(t))return!1;return!0}(e.slice(1)))return ew(e);if(e.startsWith("hsl("))return e$(function(e){let t=eS.exec(e);if(!t)throw Error(`parseHsl: string is not a HSL color: "${e}"`);return{h:parseInt(t[1]),s:parseFloat(t[3]),l:parseFloat(t[5])}}(e));if(e.startsWith("rgba(")){let t;return{r:parseInt((t=e.replace(/rgba\(|\)/g,"").split(","))[0]),g:parseInt(t[1]),b:parseInt(t[2]),a:parseFloat(t[3])}}throw Error(`parseColor: unexpected color format: "${e}"`)}function eR(e,t){let r=e_(e);return`rgba(${r.r},${r.g},${r.b},${t})`}let ej=[0,255];function ez(e,t){let{bg:r,blendMode:o,colorPalette:a}=t;if("white"===r)throw Error("Cannot blend with white background");let n=ee(e);if(!n||"color"!==n.type)throw Error(`Invalid color token value: ${e}`);let i="";if("black"===n.key&&(i=eC(a.black)),"white"===n.key&&(i=eC(a.white)),n.hue&&n.tint&&(i=eC(a[n.hue][n.tint])),!i)throw Error(`Invalid color token value: ${e}`);let d=i,l={blendMode:o,bg:r,black:eC(a.black),white:eC(a.white)};try{if(i=function(e,t){let{blendMode:r}=t,o=e_(e),a=e_(t.black),n=e_(t.white),i=t.bg?e_(t.bg):"multiply"===r?n:a,d={r:[a.r,n.r],g:[a.g,n.g],b:[a.b,n.b]},l={r:em(ey(...d.r,...ej,i.r),...ej),g:em(ey(...d.g,...ej,i.g),...ej),b:em(ey(...d.b,...ej,i.b),...ej)},s={r:em(ey(...d.r,...ej,o.r),...ej),g:em(ey(...d.g,...ej,o.g),...ej),b:em(ey(...d.b,...ej,o.b),...ej)},c="multiply"===r?ep(l,s):eh(l,s);return ek({r:em(ey(...ej,...d.r,c.r),...d.r),g:em(ey(...ej,...d.g,c.g),...d.g),b:em(ey(...ej,...d.b,c.b),...d.b)})}(i,l),r&&void 0!==n.mix){var s,c,u,f,b,g,p;let e=ew(r),t=ew(i);i=ek((s=n.mix,{r:(c=e.r,u=t.r,c+(u-c)*s),g:(f=e.g,b=t.g,f+(b-f)*s),b:(g=e.b,p=t.b,g+(p-g)*s)}))}}catch(e){throw console.warn("could not blend",i,l),e}return"#aN"===i&&(console.warn(`invalid color token value: ${e}`),i=d),void 0!==n.opacity&&(i=eR(i,n.opacity)),i}function eC(e){return"string"==typeof e?e:e.hex}function eE(e,t){let r=eI(t.default,{colorPalette:e}),o=r.bg;if("white"===o)throw Error("Cannot blend with white background");let a={default:r};for(let r of Y){if("default"===r)continue;let n="transparent"===r?{colorPalette:e}:{bg:o,colorPalette:e};F(a,r,()=>eI(t[r],n))}return a}function eI(e,t){var r,o,a,n;let{colorPalette:i,bg:d}=t,l=e._blend||"multiply",s=ez(e.bg,{colorPalette:i,bg:d,blendMode:l}),c={colorPalette:i,bg:s,blendMode:l},u=(r=e.button,o={baseBg:s,blendMode:l,colorPalette:i},{default:eH(r.default,o),ghost:eH(r.ghost,o),bleed:eH(r.bleed,o)}),f=function(e,t){let r={};for(let n of K){var o,a;r[n]=(o=e[n],a=t,{enabled:eT(o.enabled,a),hovered:eT(o.hovered,a),pressed:eT(o.pressed,a),selected:eT(o.selected,a),disabled:eT(o.disabled,a)})}return r}(e.selectable,{colorPalette:i,baseBg:s,blendMode:l}),b={outline:ez(e.shadow.outline,c),umbra:ez(e.shadow.umbra,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}}),penumbra:ez(e.shadow.penumbra,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}}),ambient:ez(e.shadow.ambient,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}})};return{_blend:l,_dark:e._dark,accent:{fg:ez(e.accent.fg,c)},avatar:eM(e.avatar,{baseBg:s,colorPalette:i,blendMode:l}),backdrop:ez(e.backdrop,c),badge:eN(e.badge,{baseBg:s,colorPalette:i,blendMode:l}),bg:s,border:ez(e.border,c),button:u,code:{bg:ez(e.code.bg,c),fg:ez(e.code.fg,c)},fg:ez(e.fg,c),focusRing:ez(e.focusRing,c),icon:ez(e.icon,c),input:(a=e.input,n={baseBg:s,colorPalette:i,blendMode:l},{default:eO(a.default,n),invalid:eO(a.invalid,n)}),kbd:function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=ez(e.bg,{bg:r,blendMode:o,colorPalette:a}),i={bg:n,blendMode:o,colorPalette:a};return{bg:n,fg:ez(e.fg,i),border:ez(e.border,i)}}(e.kbd,{baseBg:s,colorPalette:i,blendMode:l}),link:{fg:ez(e.link.fg,c)},muted:{bg:ez(e.muted.bg,c),fg:ez(e.muted.fg,c)},shadow:b,skeleton:{from:ez(e.skeleton.from,c),to:ez(e.skeleton.to,c)},syntax:function(e,t){let{colorPalette:r,baseBg:o,blendMode:a}=t,n={colorPalette:r,bg:o,blendMode:a};return{atrule:ez(e.atrule,n),attrName:ez(e.attrName,n),attrValue:ez(e.attrValue,n),attribute:ez(e.attribute,n),boolean:ez(e.boolean,n),builtin:ez(e.builtin,n),cdata:ez(e.cdata,n),char:ez(e.char,n),class:ez(e.class,n),className:ez(e.className,n),comment:ez(e.comment,n),constant:ez(e.constant,n),deleted:ez(e.deleted,n),doctype:ez(e.doctype,n),entity:ez(e.entity,n),function:ez(e.function,n),hexcode:ez(e.hexcode,n),id:ez(e.id,n),important:ez(e.important,n),inserted:ez(e.inserted,n),keyword:ez(e.keyword,n),number:ez(e.number,n),operator:ez(e.operator,n),prolog:ez(e.prolog,n),property:ez(e.property,n),pseudoClass:ez(e.pseudoClass,n),pseudoElement:ez(e.pseudoElement,n),punctuation:ez(e.punctuation,n),regex:ez(e.regex,n),selector:ez(e.selector,n),string:ez(e.string,n),symbol:ez(e.symbol,n),tag:ez(e.tag,n),unit:ez(e.unit,n),url:ez(e.url,n),variable:ez(e.variable,n)}}(e.syntax,{baseBg:s,colorPalette:i,blendMode:l}),selectable:f}}function eM(e,t){let r={};for(let a of o.COLOR_HUES)r[a]=function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=ez(e.bg,{bg:r,blendMode:o,colorPalette:a});return{_blend:n,bg:i,fg:ez(e.fg,{bg:i,blendMode:n,colorPalette:a})}}(e[a],t);return r}function eN(e,t){let r={};for(let o of K)r[o]=function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=ez(e.bg,{bg:r,blendMode:o,colorPalette:a}),i={bg:n,blendMode:o,colorPalette:a};return{bg:n,dot:ez(e.dot,i),fg:ez(e.fg,i),icon:ez(e.icon,i)}}(e[o],t);return r}function eH(e,t){let r={};for(let n of K){var o,a;r[n]=(o=e[n],a=t,{enabled:eT(o.enabled,a),hovered:eT(o.hovered,a),pressed:eT(o.pressed,a),selected:eT(o.selected,a),disabled:eT(o.disabled,a)})}return r}function eT(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=ez(e.bg,{bg:r,blendMode:o,colorPalette:a}),d={bg:i,blendMode:n,colorPalette:a};return{_blend:n,accent:{fg:ez(e.accent.fg,d)},avatar:eM(e.avatar,{baseBg:i,colorPalette:a,blendMode:n}),badge:eN(e.badge,{baseBg:i,colorPalette:a,blendMode:n}),bg:i,border:ez(e.border,d),code:{bg:ez(e.code.bg,d),fg:ez(e.code.fg,d)},fg:ez(e.fg,d),icon:ez(e.icon,d),link:{fg:ez(e.link.fg,d)},muted:{bg:ez(e.muted.bg,d),fg:ez(e.muted.fg,d)},kbd:{bg:ez(e.kbd.bg,d),fg:ez(e.kbd.fg,d),border:ez(e.kbd.border,d)},skeleton:{from:ez(e.skeleton?.from,d),to:ez(e.skeleton?.to,d)}}}function eO(e,t){return{enabled:eL(e.enabled,t),hovered:eL(e.hovered,t),readOnly:eL(e.readOnly,t),disabled:eL(e.disabled,t)}}function eL(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=ez(e.bg,{colorPalette:a,bg:r,blendMode:o}),d={colorPalette:a,bg:i,blendMode:n};return{_blend:n,bg:i,border:ez(e.border,d),fg:ez(e.fg,d),muted:{bg:ez(e.muted.bg,d)},placeholder:ez(e.placeholder,d)}}function eF(e){var t;let r,a,n,i,d,l=(t=e,a={color:{base:function(e){let t={};for(let r of Y)t[r]=function(e,t){let r=ei(e?.base?.["*"],e?.base?.[t]),a=r._hue||e?.base?.[t]?._hue||"gray";return{...r,_hue:a,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:ei({_hue:t},r.avatar?.["*"],r.avatar?.[t])}),{}),badge:K.reduce((t,o)=>({...t,[o]:{_hue:e?.base?.[o]?._hue||a,...r.badge?.["*"],...r.badge?.[o]}}),{})}}(e,r);return t}(r=ei(ea,t?.color)),button:function(e){let t={};for(let r of X)t[r]=function(e,t){let r={};for(let a of K)r[a]=function(e,t,r){let a={};for(let n of U)a[n]=function(e,t,r,a){let n=ei(e?.button?.[r]?.["*"]?.["*"],e?.button?.[r]?.[t]?.["*"],e?.button?.[r]?.["*"]?.[a],e?.button?.[r]?.[t]?.[a]),i=n._hue||e?.base?.[t]?._hue;return{...n,_hue:i,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:ei({_hue:t},n.avatar?.["*"],n.avatar?.[t])}),{}),badge:K.reduce((t,r)=>({...t,[r]:{_hue:e?.base?.[r]?._hue||i,...n.badge?.["*"],...n.badge?.[r]}}),{})}}(e,r,t,n);return a}(e,t,a);return r}(e,r);return t}(r),input:function(e){let t={};for(let r of q)t[r]=function(e,t){let r={};for(let o of Q)r[o]=function(e,t,r){let o=ei(e?.input?.["*"]?.["*"],e?.input?.[t]?.["*"],e?.input?.["*"]?.[r],e?.input?.[t]?.[r]),a=o._hue||e?.input?.[t]?._hue;return{...o,_hue:a}}(e,t,o);return r}(e,r);return t}(r),selectable:function(e){let t={};for(let r of K)t[r]=function(e,t){let r={_hue:e?.selectable?.[t]?._hue||e?.base?.[t]?._hue};for(let a of U)r[a]=function(e,t,r){let a=ei(e?.selectable?.["*"]?.["*"],e?.selectable?.[t]?.["*"],e?.selectable?.["*"]?.[r],e?.selectable?.[t]?.[r]),n=a._hue||e?.base?.[t]?._hue;return{...a,_hue:n,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:ei({_hue:t},a.avatar?.["*"],a.avatar?.[t])}),{}),badge:K.reduce((t,r)=>({...t,[r]:{_hue:e?.base?.[r]?._hue||n,...a.badge?.["*"],...a.badge?.[r]}}),{})}}(e,t,a);return r}(e,r);return t}(r),syntax:r.syntax}},F(n={},"light",()=>el({scheme:"light"},a)),F(n,"dark",()=>el({scheme:"dark"},a)),n);return D({_version:2,avatar:e?.avatar??h,button:e?.button??m,card:e?.card??y,color:(i=e?.palette??eg,F(d={},"light",()=>eE(i,l.light)),F(d,"dark",()=>eE(i,l.dark)),d),container:e?.container??v,font:e?.font??j,input:e?.input??_,layer:e?.layer??k,media:e?.media??w,radius:e?.radius??x,shadow:e?.shadow??$,space:e?.space??S,style:e?.style??R})}let eA=new Map;function eB(e,t,r){var o,a,n,i,d;let l,s=function(e,t,r){let o=eA.get(t);if(!o)return;let a=o.get(r);if(a)return a.get(e)}(e,t,r);if(s)return s;let c=O(e)?D(e):e,u=O(e)?e:function(e){if(e.v2)return e.v2;let t=L.get(e);if(t)return t;let{avatar:r,button:o,color:a,container:n,fonts:i,input:d,layer:l,media:s,radius:c,shadows:u,space:f,styles:b}=e,g={_version:2,avatar:{...h,...r},button:{...m,...o},card:y,color:{light:{transparent:C(a.light.transparent),default:C(a.light.default),neutral:C(a.light.transparent),primary:C(a.light.primary),suggest:C(a.light.primary),positive:C(a.light.positive),caution:C(a.light.caution),critical:C(a.light.critical)},dark:{transparent:C(a.dark.transparent),default:C(a.dark.default),neutral:C(a.dark.transparent),primary:C(a.dark.primary),suggest:C(a.dark.primary),positive:C(a.dark.positive),caution:C(a.dark.caution),critical:C(a.dark.critical)}},container:n,font:i,input:{..._,...d,checkbox:{..._.checkbox,...d.checkbox},radio:{..._.radio,...d.radio},switch:{..._.switch,...d.switch}},layer:l??k,media:s,radius:c,shadow:u,space:f,style:b};return L.set(e,g),g}(e),f=c.layer||k,b=u.color[t]||u.color.light,g="neutral"in(o=b[r]||b.default).badge?o:{...o,badge:{...o.badge,neutral:o.badge.default,suggest:o.badge.primary},button:{bleed:{...o.button.bleed,neutral:o.button.bleed.default,suggest:o.button.bleed.primary},default:{...o.button.default,neutral:o.button.default.default,suggest:o.button.default.primary},ghost:{...o.button.ghost,neutral:o.button.ghost.default,suggest:o.button.ghost.primary}},selectable:{...o.selectable,neutral:o.selectable.default,suggest:o.selectable.primary}},p=u.layer||k,{color:v,...w}=c,x={...w,layer:f,v2:{...u,_resolved:!0,color:g,layer:p}};F(x,"color",()=>{let e=c.color[t]||c.color.light;return e[r]||e.default});let $={sanity:x};return a=e,n=t,i=r,d=$,eA.has(n)||eA.set(n,new Map),(l=eA.get(n)).has(i)||l.set(i,new WeakMap),l.get(i).set(a,d),$}e.s(["buildTheme",0,eF,"createColorTheme",0,b,"getScopedTheme",0,eB,"getTheme_v2",0,T,"hexToRgb",0,ew,"hslToRgb",0,e$,"multiply",0,ep,"parseColor",0,e_,"rgbToHex",0,ek,"rgbToHsl",0,ex,"rgba",0,eR,"screen",0,eh],47635);var eP=e.i(843476),eD=e.i(881933),eV=e.i(271645),eW=e.i(997053),eG=e.i(383066),eY=e.i(447912),eK=e.i(27788),eU=e.i(258950),eX=e.i(846932),eq=e.i(88653);e.i(926199);var eQ=e.i(648568),eZ=e.i(174080),eJ=e.i(462576);try{var e0="u">typeof window?window:e.g;e0._sentryModuleMetadata=e0._sentryModuleMetadata||{},e0._sentryModuleMetadata[(new e0.Error).stack]=Object.assign({},e0._sentryModuleMetadata[(new e0.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let e1=eF(),e2=[],e3={},e5={initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},e4={hidden:{opacity:0},visible:{opacity:1}},e6={type:"spring",visualDuration:.2,bounce:.25};function e7(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function e8(e){return e7(e)&&"A"===e.nodeName}function e9(e){return e7(e)&&"BUTTON"===e.nodeName}function te(e,t){return e.contains(t)||e===t}function tt(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}function tr(e,t){return e.reduce((e,r)=>(e[r]=t,e),{})}function to(e){return 0===e?0:`${e/16}rem`}function ta(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function tn(e,t){return void 0===e?t||e2:Array.isArray(e)?e:[e]}function ti(e,t,r=e2){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:a}=T(e);return ta(o,r,e=>tr(t,to(a[e])))}function td(e,t){let{$size:r,$weight:o}=t,{font:a,media:n}=T(t.theme),{family:i,sizes:d,weights:l}=a[e],s=o&&l[o]||l.regular,c=d[2],u={position:"relative",fontFamily:i,fontWeight:`${s}`,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[u,...ta(n,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:a,letterSpacing:n,lineHeight:i}=e,d=t+r,l=i-d,s=2*Math.floor(1.125*o/2)+1;return{fontSize:to(o),lineHeight:`calc(${i} / ${o})`,letterSpacing:to(n),transform:`translateY(${to(r)})`,"&:before":{marginTop:`calc(${to(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:to((l-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${a} / 16 * 1rem)`,margin:to((l-a)/2)}}})(d[e]||c))]:(td.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:u}),td.warned=!0),[u])}function tl(e){return td("code",e)}function ts(e){return td("heading",e)}function tc(e){return td("label",e)}function tu(e){let{media:t}=T(e.theme);return ta(t,e.$align,e=>({textAlign:e}))}function tf(e){return td("text",e)}let tb="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof self?self:e.g;function tg(e,t){let r=Symbol.for(e);if(typeof document>"u"){let r=(0,eV.createContext)(t);return r.displayName=e,r}return tb[r]=tb[r]||(0,eV.createContext)(t),tb[r]}let tp=tg("@sanity/ui/context/theme",null);function th(e){let t,r,o,a,n=(0,eD.c)(15),i=(0,eV.useContext)(tp),{children:d}=e,l=e.scheme??(i?.scheme||"light"),s=e.theme??(i?.theme||null),c=e.tone??(i?.tone||"default");e:{let e;if(!s){t=null;break e}n[0]!==s||n[1]!==l||n[2]!==c?(e={version:0,theme:s,scheme:l,tone:c},n[0]=s,n[1]=l,n[2]=c,n[3]=e):e=n[3],t=e}let u=t;t:{let e;if(!s){r=null;break t}n[4]!==s||n[5]!==l||n[6]!==c?(e=eB(s,l,c),n[4]=s,n[5]=l,n[6]=c,n[7]=e):e=n[7],r=e}let f=r;if(!f){let e;return n[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eP.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),n[8]=e):e=n[8],e}return n[9]!==d||n[10]!==f?(o=(0,eP.jsx)(eW.ThemeProvider,{theme:f,children:d}),n[9]=d,n[10]=f,n[11]=o):o=n[11],n[12]!==o||n[13]!==u?(a=(0,eP.jsx)(tp.Provider,{value:u,children:o}),n[12]=o,n[13]=u,n[14]=a):a=n[14],a}function tm(){let e=(0,eV.useContext)(tp);if(!e)throw Error("useRootTheme(): missing context value");return e}function ty(e){let t,r=(0,eD.c)(5),{children:o,scheme:a,tone:n}=e,i=tm(),d=a||i.scheme;return r[0]!==o||r[1]!==i.theme||r[2]!==d||r[3]!==n?(t=(0,eP.jsx)(th,{scheme:d,theme:i.theme,tone:n,children:o}),r[0]=o,r[1]=i.theme,r[2]=d,r[3]=n,r[4]=t):t=r[4],t}function tv(){let e,t=(0,eD.c)(2),r=(0,eW.useTheme)();return t[0]!==r?(e=T(r),t[0]=r,t[1]=e):e=t[1],e}function tw(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function tk(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function tx(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function t$(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function tS(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}th.displayName="ThemeProvider",ty.displayName="ThemeColorProvider";let t_={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tR={content:"content-box",border:"border-box"},tj={stretch:"stretch",fill:"100%"};function tz(e){let{media:t}=T(e.theme);return ta(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function tC(e){let{media:t}=T(e.theme);return ta(t,e.$sizing,e=>({boxSizing:tR[e]}))}function tE(e){let{media:t}=T(e.theme);return ta(t,e.$height,e=>({height:tj[e]}))}function tI(e){let{media:t}=T(e.theme);return ta(t,e.$overflow,e=>({overflow:e}))}let tM={minWidth:0,minHeight:0};function tN(){return[tM,tH]}function tH(e){let{media:t}=T(e.theme);return e.$flex?ta(t,e.$flex,e=>({flex:`${e}`})):e2}let tT={"&&:not([hidden])":{display:"flex"}};function tO(e){let{media:t}=T(e.theme);return ta(t,e.$align,e=>({alignItems:e}))}function tL(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gap,e=>({gap:e?to(r[e]):void 0}))}function tF(e){let{media:t}=T(e.theme);return ta(t,e.$wrap,e=>({flexWrap:e}))}function tA(e){let{media:t}=T(e.theme);return ta(t,e.$justify,e=>({justifyContent:e}))}function tB(e){let{media:t}=T(e.theme);return ta(t,e.$direction,e=>({flexDirection:e}))}function tP(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tD(e){let{base:t,border:r,focusRing:o}=e,a=o.offset+o.width,n=0-o.offset,i=t?t.bg:"var(--card-bg-color)";return[n>0&&`inset 0 0 0 ${n}px var(--card-focus-ring-color)`,r&&tP(r),n<0&&`0 0 0 ${0-n}px ${i}`,a>0&&`0 0 0 ${a}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let tV={auto:"auto",full:"1 / -1"},tW={auto:"auto",full:"1 / -1"};function tG(e){let{media:t}=T(e.theme);return ta(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tV[e]})}function tY(e){let{media:t}=T(e.theme);return ta(t,e.$rowStart,e=>({gridRowStart:`${e}`}))}function tK(e){let{media:t}=T(e.theme);return ta(t,e.$rowEnd,e=>({gridRowEnd:`${e}`}))}function tU(e){let{media:t}=T(e.theme);return ta(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tW[e]})}function tX(e){let{media:t}=T(e.theme);return ta(t,e.$columnStart,e=>({gridColumnStart:`${e}`}))}function tq(e){let{media:t}=T(e.theme);return ta(t,e.$columnEnd,e=>({gridColumnEnd:`${e}`}))}let tQ={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tZ={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},tJ={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function t0(e){let{media:t}=T(e.theme);return ta(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function t1(e){let{media:t}=T(e.theme);return ta(t,e.$autoRows,e=>({gridAutoRows:e&&tJ[e]}))}function t2(e){let{media:t}=T(e.theme);return ta(t,e.$autoCols,e=>({gridAutoColumns:e&&tZ[e]}))}function t3(e){let{media:t}=T(e.theme);return ta(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function t5(e){let{media:t}=T(e.theme);return ta(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function t4(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gap,e=>({gridGap:e?to(r[e]):void 0}))}function t6(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gapX,e=>({columnGap:e?to(r[e]):void 0}))}function t7(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gapY,e=>({rowGap:e?to(r[e]):void 0}))}function t8(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:a,$space:n}=e,{font:i,media:d,space:l}=T(e.theme),s=Math.max(a.length,n.length,t.length),c=[],u=[],f=[];for(let e=0;e<s;e+=1)f[e]=void 0===t[e]?f[e-1]:t[e],c[e]=void 0===a[e]?c[e-1]:a[e],u[e]=void 0===n[e]?u[e-1]:n[e];return ta(d,c,(e,t)=>{let a=i.text.sizes[f[t]]||i.text.sizes[2],n=a.lineHeight-a.ascenderHeight-a.descenderHeight,d=l[c[t]],s=l[u[t]],b={paddingTop:to(d-a.ascenderHeight),paddingRight:to(d),paddingBottom:to(d-a.descenderHeight),paddingLeft:to(d)};return o&&(b.paddingRight=to(d+n+s)),r&&(b.paddingLeft=to(d+n+s)),b})}function t9(e){return t8({...e,$iconRight:!0})}let re=eW.css`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function rt(){return re}function rr(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:a,font:n}=T(e.theme);return eW.css`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${n.text.family};
    font-weight: ${o&&n.text.weights[o]||n.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${a.input.default.enabled.fg};
      --input-placeholder-color: ${a.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${a.input.default.enabled.fg};
        --input-placeholder-color: ${a.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${a.input.default.disabled.fg};
        --input-placeholder-color: ${a.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${a.input.invalid.enabled.fg};
        --input-placeholder-color: ${a.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${a.input.default.readOnly.fg};
        --input-placeholder-color: ${a.input.default.readOnly.placeholder};
      }
    }
  `}function ro(e){let{font:t,media:r}=T(e.theme);return ta(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:to(r.fontSize),lineHeight:`${r.lineHeight/r.fontSize}`}})}function ra(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:a,$unstableDisableFocusRing:n}=e,{color:i,input:d}=T(e.theme);return eW.css`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${a}'] {
      --card-bg-color: ${i.input.default.enabled.bg};
      --card-fg-color: ${i.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${tP({color:i.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${i.input.invalid.enabled.bg};
        --card-fg-color: ${i.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${tP({color:i.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${n?void 0:tD({border:{color:i.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${n?void 0:tD({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${i.input.default.disabled.bg} !important;
        --card-fg-color: ${i.input.default.disabled.fg} !important;
        --card-icon-color: ${i.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tP({color:i.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${i.input.invalid.disabled.bg} !important;
        --card-fg-color: ${i.input.invalid.disabled.fg} !important;
        --card-icon-color: ${i.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tP({color:i.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${i.input.default.readOnly.bg} !important;
        --card-fg-color: ${i.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${i.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${i.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${i.input.default.hovered.bg};
          --card-fg-color: ${i.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${i.input.invalid.hovered.bg};
          --card-fg-color: ${i.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tP({color:i.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tP({color:i.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function rn(e){let{theme:t}=e;return[ti(t,["padding"],e.$padding),ti(t,["paddingLeft","paddingRight"],e.$paddingX),ti(t,["paddingTop","paddingBottom"],e.$paddingY),ti(t,["paddingTop"],e.$paddingTop),ti(t,["paddingRight"],e.$paddingRight),ti(t,["paddingBottom"],e.$paddingBottom),ti(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function ri(e){let{media:t,radius:r}=T(e.theme);return ta(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=to(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function rd(e,t){return`${e.map(to).join(" ")} ${t}`}let rl=eW.styled.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,rs=eW.styled.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(tc,tu,function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eW.css`
    text-transform: uppercase;

    ${t&&eW.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eW.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),rc=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b=(0,eD.c)(26);b[0]!==e?({accent:r,align:o,children:a,muted:i,size:d,textOverflow:l,weight:s,...n}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=a,b[4]=n,b[5]=i,b[6]=d,b[7]=l,b[8]=s):(r=b[1],o=b[2],a=b[3],n=b[4],i=b[5],d=b[6],l=b[7],s=b[8]);let g=void 0!==i&&i,p=void 0===d?2:d,h=a;if("ellipsis"===l){let e;b[9]!==h?(e=(0,eP.jsx)(rl,{children:h}),b[9]=h,b[10]=e):e=b[10],h=e}else{let e;b[11]!==h?(e=(0,eP.jsx)("span",{children:h}),b[11]=h,b[12]=e):e=b[12],h=e}return b[13]!==o?(c=tn(o),b[13]=o,b[14]=c):c=b[14],b[15]!==p?(u=tn(p),b[15]=p,b[16]=u):u=b[16],b[17]!==r||b[18]!==h||b[19]!==g||b[20]!==t||b[21]!==n||b[22]!==c||b[23]!==u||b[24]!==s?(f=(0,eP.jsx)(rs,{"data-ui":"Label",...n,$accent:r,$align:c,$muted:g,$size:u,$weight:s,ref:t,children:h}),b[17]=r,b[18]=h,b[19]=g,b[20]=t,b[21]=n,b[22]=c,b[23]=u,b[24]=s,b[25]=f):f=b[25],f});rc.displayName="ForwardRef(Label)";let ru=eW.styled.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:to(r.size),height:to(r.size),borderRadius:to(r.size/2),"&>svg":{width:to(r.size),height:to(r.size),borderRadius:to(r.size/2)}}})},function(e){let{$color:t}=e,{avatar:r}=T(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:"0.5"},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tD({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),rf=eW.styled.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(function(){return{position:"absolute",boxSizing:"border-box",zIndex:"0",opacity:"0",transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:"0"},"[data-arrow-position='top'] > &":{opacity:"1",transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:"1",transform:"rotate(-180deg)"}}}),rb=eW.styled.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),rg=eW.styled.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),rp=eW.styled.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),rh=(0,eW.styled)(rc).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),rm=eW.styled.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(function(){return{position:"relative"}}),ry=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x=(0,eD.c)(46);x[0]!==e?({__unstable_hideInnerStroke:r,as:n,color:c,src:s,title:b,initials:i,onImageLoadError:d,arrowPosition:a,animateArrowFrom:o,status:u,size:f,...l}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=a,x[4]=n,x[5]=i,x[6]=d,x[7]=l,x[8]=s,x[9]=c,x[10]=u,x[11]=f,x[12]=b):(r=x[1],o=x[2],a=x[3],n=x[4],i=x[5],d=x[6],l=x[7],s=x[8],c=x[9],u=x[10],f=x[11],b=x[12]);let $=void 0===c?"gray":c,S=void 0===u?"online":u,_=void 0===f?1:f,{avatar:R}=tv(),j=eG.default.isValidElementType(n)?n:"div",z=tn(_),C=(R.sizes[z[0]]||R.sizes[0]).size,E=C/2,I=(0,eV.useId)(),[M,N]=(0,eV.useState)(o||a||"inside"),[H,T]=(0,eV.useState)(!1),O=`avatar-image-${I}`;x[13]!==M||x[14]!==a?(g=()=>{if(M===a)return;let e=requestAnimationFrame(()=>N(a));return()=>cancelAnimationFrame(e)},p=[M,a],x[13]=M,x[14]=a,x[15]=g,x[16]=p):(g=x[15],p=x[16]),(0,eV.useEffect)(g,p),x[17]!==s?(h=()=>{s&&T(!1)},m=[s],x[17]=s,x[18]=h,x[19]=m):(h=x[18],m=x[19]),(0,eV.useEffect)(h,m),x[20]!==d?(y=()=>{T(!0),d&&d(Error("Avatar: the image failed to load"))},x[20]=d,x[21]=y):y=x[21];let L=y,F="string"==typeof j?j:void 0;x[22]!==$?(v=(0,eP.jsx)(rf,{children:(0,eP.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,eP.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:$})})}),x[22]=$,x[23]=v):v=x[23],x[24]!==r||x[25]!==E||x[26]!==C||x[27]!==L||x[28]!==H||x[29]!==O||x[30]!==s?(w=!H&&s&&(0,eP.jsxs)(rm,{viewBox:`0 0 ${C} ${C}`,fill:"none",children:[(0,eP.jsx)("defs",{children:(0,eP.jsx)("pattern",{id:O,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,eP.jsx)("image",{href:s,width:"1",height:"1",onError:L})})}),(0,eP.jsx)("circle",{cx:E,cy:E,r:E,fill:`url(#${O})`}),!r&&(0,eP.jsx)(rb,{cx:E,cy:E,rx:E,ry:E,vectorEffect:"non-scaling-stroke"}),(0,eP.jsx)(rg,{cx:E,cy:E,rx:E,ry:E,vectorEffect:"non-scaling-stroke"})]}),x[24]=r,x[25]=E,x[26]=C,x[27]=L,x[28]=H,x[29]=O,x[30]=s,x[31]=w):w=x[31];let A=(H||!s)&&i&&(0,eP.jsx)(eP.Fragment,{children:(0,eP.jsx)(rp,{children:(0,eP.jsx)(rh,{forwardedAs:"span",size:z.map(rv),weight:"medium",children:i})})});return x[32]!==ru||x[33]!==M||x[34]!==j||x[35]!==$||x[36]!==t||x[37]!==l||x[38]!==z||x[39]!==S||x[40]!==v||x[41]!==w||x[42]!==A||x[43]!==F||x[44]!==b?(k=(0,eP.jsxs)(ru,{as:j,"data-as":F,"data-ui":"Avatar",...l,$color:$,$size:z,"aria-label":b,"data-arrow-position":M,"data-status":S,ref:t,title:b,children:[v,w,A]}),x[32]=ru,x[33]=M,x[34]=j,x[35]=$,x[36]=t,x[37]=l,x[38]=z,x[39]=S,x[40]=v,x[41]=w,x[42]=A,x[43]=F,x[44]=b,x[45]=k):k=x[45],k});function rv(e){return 1===e?1:2===e?3:5*(3===e)}ry.displayName="ForwardRef(Avatar)";let rw=eW.styled.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:to(r.size/2),minWidth:to(r.size),height:to(r.size)}:e3})},function(e){let{space:t}=T(e.theme);return eW.css`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${to(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),rk=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u=(0,eD.c)(20),{count:f,size:b}=e,g=void 0===b?1:b;if(u[0]!==t||u[1]!==g){let e=tn(g);o=rw,i=e,d="AvatarCounter",l=t,r=rc,a="span",n=e.map(rx),u[0]=t,u[1]=g,u[2]=r,u[3]=o,u[4]=a,u[5]=n,u[6]=i,u[7]=d,u[8]=l}else r=u[2],o=u[3],a=u[4],n=u[5],i=u[6],d=u[7],l=u[8];return u[9]!==r||u[10]!==f||u[11]!==a||u[12]!==n?(s=(0,eP.jsx)(r,{as:a,size:n,weight:"medium",children:f}),u[9]=r,u[10]=f,u[11]=a,u[12]=n,u[13]=s):s=u[13],u[14]!==o||u[15]!==i||u[16]!==d||u[17]!==l||u[18]!==s?(c=(0,eP.jsx)(o,{$size:i,"data-ui":d,ref:l,children:s}),u[14]=o,u[15]=i,u[16]=d,u[17]=l,u[18]=s,u[19]=c):c=u[19],c});function rx(e){return 1===e?1:2===e?3:5*(3===e)}rk.displayName="ForwardRef(AvatarCounter)";let r$=eW.css`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,rS=eW.styled.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:to(r.distance)}}:e3})},function(){return r$}),r_=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p=(0,eD.c)(38);p[0]!==e?({children:r,maxLength:a,size:n,...o}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=a,p[4]=n):(r=p[1],o=p[2],a=p[3],n=p[4]);let h=void 0===a?4:a,m=void 0===n?1:n;if(p[5]!==r||p[6]!==h||p[7]!==t||p[8]!==o||p[9]!==m){let e,a,n=eV.Children.toArray(r).filter(eV.isValidElement),g=Math.max(h,0);p[18]!==m?(e=tn(m),p[18]=m,p[19]=e):e=p[19];let y=e,v=n.length,w=v-(g-1),k=w>1?n.slice(w,v):n;i=rS,d="AvatarStack",l=o,s=t,c=y,p[20]!==v||p[21]!==y?(u=0===v&&(0,eP.jsx)("div",{children:(0,eP.jsx)(rk,{count:v,size:y})}),p[20]=v,p[21]=y,p[22]=u):u=p[22],p[23]!==w||p[24]!==v||p[25]!==y?(f=0!==v&&w>1&&(0,eP.jsx)("div",{children:(0,eP.jsx)(rk,{count:w,size:y})}),p[23]=w,p[24]=v,p[25]=y,p[26]=f):f=p[26],p[27]!==y?(a=(e,t)=>(0,eP.jsx)("div",{children:(0,eV.cloneElement)(e,{size:y})},String(t)),p[27]=y,p[28]=a):a=p[28],b=k.map(a),p[5]=r,p[6]=h,p[7]=t,p[8]=o,p[9]=m,p[10]=i,p[11]=d,p[12]=l,p[13]=s,p[14]=c,p[15]=u,p[16]=f,p[17]=b}else i=p[10],d=p[11],l=p[12],s=p[13],c=p[14],u=p[15],f=p[16],b=p[17];return p[29]!==i||p[30]!==d||p[31]!==l||p[32]!==s||p[33]!==c||p[34]!==u||p[35]!==f||p[36]!==b?(g=(0,eP.jsxs)(i,{"data-ui":d,...l,ref:s,$size:c,children:[u,f,b]}),p[29]=i,p[30]=d,p[31]=l,p[32]=s,p[33]=c,p[34]=u,p[35]=f,p[36]=b,p[37]=g):g=p[37],g});r_.displayName="ForwardRef(AvatarStack)";let rR=eW.styled.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return t_},tN,function(){return[tC,tE,tI,tz]},function(){return[tG,tY,tK,tU,tX,tq]},function(e){let{theme:t}=e;return[ti(t,["margin"],e.$margin),ti(t,["marginLeft","marginRight"],e.$marginX),ti(t,["marginTop","marginBottom"],e.$marginY),ti(t,["marginTop"],e.$marginTop),ti(t,["marginRight"],e.$marginRight),ti(t,["marginBottom"],e.$marginBottom),ti(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},rn),rj=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L,F,A,B,P,D,V,W,G,Y,K,U,X,q,Q,Z,J,ee,et=(0,eD.c)(109);et[0]!==e?({as:_,column:r,columnStart:a,columnEnd:o,display:R,flex:n,height:i,margin:j,marginX:u,marginY:f,marginTop:c,marginRight:s,marginBottom:d,marginLeft:l,overflow:b,padding:z,paddingX:y,paddingY:v,paddingTop:m,paddingRight:h,paddingBottom:g,paddingLeft:p,row:k,rowStart:$,rowEnd:x,sizing:S,...w}=e,et[0]=e,et[1]=r,et[2]=o,et[3]=a,et[4]=n,et[5]=i,et[6]=d,et[7]=l,et[8]=s,et[9]=c,et[10]=u,et[11]=f,et[12]=b,et[13]=g,et[14]=p,et[15]=h,et[16]=m,et[17]=y,et[18]=v,et[19]=w,et[20]=k,et[21]=x,et[22]=$,et[23]=S,et[24]=_,et[25]=R,et[26]=j,et[27]=z):(r=et[1],o=et[2],a=et[3],n=et[4],i=et[5],d=et[6],l=et[7],s=et[8],c=et[9],u=et[10],f=et[11],b=et[12],g=et[13],p=et[14],h=et[15],m=et[16],y=et[17],v=et[18],w=et[19],k=et[20],x=et[21],$=et[22],S=et[23],_=et[24],R=et[25],j=et[26],z=et[27]);let er=void 0===_?"div":_,eo=void 0===R?"block":R,ea=void 0===j?0:j,en=void 0===z?0:z,ei="string"==typeof er?er:void 0;return et[28]!==r?(C=tn(r),et[28]=r,et[29]=C):C=et[29],et[30]!==a?(E=tn(a),et[30]=a,et[31]=E):E=et[31],et[32]!==o?(I=tn(o),et[32]=o,et[33]=I):I=et[33],et[34]!==eo?(M=tn(eo),et[34]=eo,et[35]=M):M=et[35],et[36]!==n?(N=tn(n),et[36]=n,et[37]=N):N=et[37],et[38]!==i?(H=tn(i),et[38]=i,et[39]=H):H=et[39],et[40]!==ea?(T=tn(ea),et[40]=ea,et[41]=T):T=et[41],et[42]!==u?(O=tn(u),et[42]=u,et[43]=O):O=et[43],et[44]!==f?(L=tn(f),et[44]=f,et[45]=L):L=et[45],et[46]!==c?(F=tn(c),et[46]=c,et[47]=F):F=et[47],et[48]!==s?(A=tn(s),et[48]=s,et[49]=A):A=et[49],et[50]!==d?(B=tn(d),et[50]=d,et[51]=B):B=et[51],et[52]!==l?(P=tn(l),et[52]=l,et[53]=P):P=et[53],et[54]!==b?(D=tn(b),et[54]=b,et[55]=D):D=et[55],et[56]!==en?(V=tn(en),et[56]=en,et[57]=V):V=et[57],et[58]!==y?(W=tn(y),et[58]=y,et[59]=W):W=et[59],et[60]!==v?(G=tn(v),et[60]=v,et[61]=G):G=et[61],et[62]!==m?(Y=tn(m),et[62]=m,et[63]=Y):Y=et[63],et[64]!==h?(K=tn(h),et[64]=h,et[65]=K):K=et[65],et[66]!==g?(U=tn(g),et[66]=g,et[67]=U):U=et[67],et[68]!==p?(X=tn(p),et[68]=p,et[69]=X):X=et[69],et[70]!==k?(q=tn(k),et[70]=k,et[71]=q):q=et[71],et[72]!==$?(Q=tn($),et[72]=$,et[73]=Q):Q=et[73],et[74]!==x?(Z=tn(x),et[74]=x,et[75]=Z):Z=et[75],et[76]!==S?(J=tn(S),et[76]=S,et[77]=J):J=et[77],et[78]!==er||et[79]!==e.children||et[80]!==t||et[81]!==w||et[82]!==H||et[83]!==T||et[84]!==O||et[85]!==L||et[86]!==F||et[87]!==A||et[88]!==B||et[89]!==P||et[90]!==D||et[91]!==V||et[92]!==W||et[93]!==G||et[94]!==Y||et[95]!==K||et[96]!==U||et[97]!==X||et[98]!==q||et[99]!==Q||et[100]!==Z||et[101]!==J||et[102]!==ei||et[103]!==C||et[104]!==E||et[105]!==I||et[106]!==M||et[107]!==N?(ee=(0,eP.jsx)(rR,{"data-as":ei,"data-ui":"Box",...w,$column:C,$columnStart:E,$columnEnd:I,$display:M,$flex:N,$height:H,$margin:T,$marginX:O,$marginY:L,$marginTop:F,$marginRight:A,$marginBottom:B,$marginLeft:P,$overflow:D,$padding:V,$paddingX:W,$paddingY:G,$paddingTop:Y,$paddingRight:K,$paddingBottom:U,$paddingLeft:X,$row:q,$rowStart:Q,$rowEnd:Z,$sizing:J,as:er,ref:t,children:e.children}),et[78]=er,et[79]=e.children,et[80]=t,et[81]=w,et[82]=H,et[83]=T,et[84]=O,et[85]=L,et[86]=F,et[87]=A,et[88]=B,et[89]=P,et[90]=D,et[91]=V,et[92]=W,et[93]=G,et[94]=Y,et[95]=K,et[96]=U,et[97]=X,et[98]=q,et[99]=Q,et[100]=Z,et[101]=J,et[102]=ei,et[103]=C,et[104]=E,et[105]=I,et[106]=M,et[107]=N,et[108]=ee):ee=et[108],ee});rj.displayName="ForwardRef(Box)";let rz=eW.styled.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(tf,tu,function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eW.css`
    color: var(--card-fg-color);

    ${t&&eW.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eW.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),rC=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g=(0,eD.c)(26);g[0]!==e?({accent:n,align:r,children:o,muted:i,size:d,textOverflow:l,weight:s,...a}=e,g[0]=e,g[1]=r,g[2]=o,g[3]=a,g[4]=n,g[5]=i,g[6]=d,g[7]=l,g[8]=s):(r=g[1],o=g[2],a=g[3],n=g[4],i=g[5],d=g[6],l=g[7],s=g[8]);let p=void 0!==n&&n,h=void 0!==i&&i,m=void 0===d?2:d,y=o;if("ellipsis"===l){let e;g[9]!==y?(e=(0,eP.jsx)(rl,{children:y}),g[9]=y,g[10]=e):e=g[10],y=e}return g[11]!==r?(c=tn(r),g[11]=r,g[12]=c):c=g[12],g[13]!==m?(u=tn(m),g[13]=m,g[14]=u):u=g[14],g[15]!==y?(f=(0,eP.jsx)("span",{children:y}),g[15]=y,g[16]=f):f=g[16],g[17]!==p||g[18]!==h||g[19]!==t||g[20]!==a||g[21]!==c||g[22]!==u||g[23]!==f||g[24]!==s?(b=(0,eP.jsx)(rz,{"data-ui":"Text",...a,$accent:p,$align:c,$muted:h,ref:t,$size:u,$weight:s,children:f}),g[17]=p,g[18]=h,g[19]=t,g[20]=a,g[21]=c,g[22]=u,g[23]=f,g[24]=s,g[25]=b):b=g[25],b});rC.displayName="ForwardRef(Text)";let rE=(0,eW.styled)(rj).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(ri,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),rI=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eD.c)(21);if(f[0]!==e){let{children:t,fontSize:l,mode:s,padding:c,radius:u,tone:b,...g}=e;r=t,a=l,n=c,i=u,d=b,o=g,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d}else r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6];let b=void 0===a?1:a,g=void 0===n?1:n,p=void 0===i?"full":i,h=void 0===d?"default":d;return f[7]!==p?(l=tn(p),f[7]=p,f[8]=l):l=f[8],f[9]!==g?(s=tn(g),f[9]=g,f[10]=s):s=f[10],f[11]!==r||f[12]!==b?(c=(0,eP.jsx)(rC,{size:b,children:r}),f[11]=r,f[12]=b,f[13]=c):c=f[13],f[14]!==t||f[15]!==o||f[16]!==l||f[17]!==s||f[18]!==c||f[19]!==h?(u=(0,eP.jsx)(rE,{"data-ui":"Badge",...o,$tone:h,$radius:l,padding:s,ref:t,children:c}),f[14]=t,f[15]=o,f[16]=l,f[17]=s,f[18]=c,f[19]=h,f[20]=u):u=f[20],u});rI.displayName="ForwardRef(Badge)";let rM=(0,eW.styled)(rj).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(tN,function(){return[tT,tO,tL,tF,tA,tB]}),rN=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p=(0,eD.c)(27);p[0]!==e?({align:r,as:o,direction:d,gap:a,justify:n,wrap:l,...i}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=a,p[4]=n,p[5]=i,p[6]=d,p[7]=l):(r=p[1],o=p[2],a=p[3],n=p[4],i=p[5],d=p[6],l=p[7]);let h=void 0===d?"row":d;return p[8]!==r?(s=tn(r),p[8]=r,p[9]=s):s=p[9],p[10]!==h?(c=tn(h),p[10]=h,p[11]=c):c=p[11],p[12]!==a?(u=tn(a),p[12]=a,p[13]=u):u=p[13],p[14]!==n?(f=tn(n),p[14]=n,p[15]=f):f=p[15],p[16]!==l?(b=tn(l),p[16]=l,p[17]=b):b=p[17],p[18]!==o||p[19]!==t||p[20]!==i||p[21]!==s||p[22]!==c||p[23]!==u||p[24]!==f||p[25]!==b?(g=(0,eP.jsx)(rM,{"data-ui":"Flex",...i,$align:s,$direction:c,$gap:u,$justify:f,$wrap:b,forwardedAs:o,ref:t}),p[18]=o,p[19]=t,p[20]=i,p[21]=s,p[22]=c,p[23]=u,p[24]=f,p[25]=b,p[26]=g):g=p[26],g});rN.displayName="ForwardRef(Flex)";let rH=eW.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,rT=(0,eW.styled)(rC).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${rH} 500ms linear infinite;}`,rO=(0,eV.forwardRef)(function(e,t){let r,o,a=(0,eD.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,eP.jsx)(eY.SpinnerIcon,{}),a[0]=r):r=a[0],a[1]!==e||a[2]!==t?(o=(0,eP.jsx)(rT,{"data-ui":"Spinner",...e,ref:t,children:r}),a[1]=e,a[2]=t,a[3]=o):o=a[3],o});function rL(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function rF(...e){return e.filter(Boolean).join(",")}rO.displayName="ForwardRef(Spinner)";let rA=eW.styled.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(ri,function(e){let{$width:t}=e,{style:r}=T(e.theme);return eW.css`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&eW.css`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:a}=T(e.theme),n="ghost"===e.$mode,i=o.button[t]||o.button.default,d=i[e.$tone]||i.default,l={width:r.border.width,color:"var(--card-border-color)"},s;return[rL(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:tP(l),'&:disabled, &[data-disabled="true"]':rL(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:rF(tP(l),n?s:void 0),"&:focus":{boxShadow:tD({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:rF(tP(l),n?s:void 0)},"@media (hover: hover)":{"&:hover":rL(o,d.hovered),"&:active":rL(o,d.pressed),"&[data-hovered]":rL(o,d.hovered)},"&[data-selected]":rL(o,d.pressed)}},a?.button?.root].filter(Boolean)}),rB=eW.styled.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,rP=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L,F,A,B,P,D,V=(0,eD.c)(86);V[0]!==e?({children:a,disabled:n,fontSize:p,icon:r,iconRight:o,justify:h,loading:i,mode:m,padding:y,paddingX:u,paddingY:f,paddingTop:c,paddingBottom:d,paddingLeft:l,paddingRight:s,radius:v,selected:g,space:w,text:S,textAlign:_,textWeight:R,tone:k,type:x,muted:$,width:j,...b}=e,V[0]=e,V[1]=r,V[2]=o,V[3]=a,V[4]=n,V[5]=i,V[6]=d,V[7]=l,V[8]=s,V[9]=c,V[10]=u,V[11]=f,V[12]=b,V[13]=g,V[14]=p,V[15]=h,V[16]=m,V[17]=y,V[18]=v,V[19]=w,V[20]=k,V[21]=x,V[22]=$,V[23]=S,V[24]=_,V[25]=R,V[26]=j):(r=V[1],o=V[2],a=V[3],n=V[4],i=V[5],d=V[6],l=V[7],s=V[8],c=V[9],u=V[10],f=V[11],b=V[12],g=V[13],p=V[14],h=V[15],m=V[16],y=V[17],v=V[18],w=V[19],k=V[20],x=V[21],$=V[22],S=V[23],_=V[24],R=V[25],j=V[26]);let W=void 0===p?1:p,G=void 0===h?"center":h,Y=void 0===m?"default":m,K=void 0===y?3:y,U=void 0===v?2:v,X=void 0===w?3:w,q=void 0===k?"default":k,Q=void 0===x?"button":x,Z=void 0!==$&&$,{button:J}=tv();V[27]!==G?(z=tn(G),V[27]=G,V[28]=z):z=V[28];let ee=z;V[29]!==K?(C=tn(K),V[29]=K,V[30]=C):C=V[30];let et=C;V[31]!==u?(E=tn(u),V[31]=u,V[32]=E):E=V[32];let er=E;V[33]!==f?(I=tn(f),V[33]=f,V[34]=I):I=V[34];let eo=I;V[35]!==c?(M=tn(c),V[35]=c,V[36]=M):M=V[36];let ea=M;V[37]!==d?(N=tn(d),V[37]=d,V[38]=N):N=V[38];let en=N;V[39]!==l?(H=tn(l),V[39]=l,V[40]=H):H=V[40];let ei=H;V[41]!==s?(T=tn(s),V[41]=s,V[42]=T):T=V[42];let ed=T;V[43]!==U?(O=tn(U),V[43]=U,V[44]=O):O=V[44];let el=O;V[45]!==X?(L=tn(X),V[45]=X,V[46]=L):L=V[46];let es=L;V[47]!==et||V[48]!==en||V[49]!==ei||V[50]!==ed||V[51]!==ea||V[52]!==er||V[53]!==eo?(F={padding:et,paddingX:er,paddingY:eo,paddingTop:ea,paddingBottom:en,paddingLeft:ei,paddingRight:ed},V[47]=et,V[48]=en,V[49]=ei,V[50]=ed,V[51]=ea,V[52]=er,V[53]=eo,V[54]=F):F=V[54];let ec=F,eu=!!(i||n),ef=g?"":void 0,eb=!!(i||n);return V[55]!==i?(A=!!i&&(0,eP.jsx)(rB,{children:(0,eP.jsx)(rO,{})}),V[55]=i,V[56]=A):A=V[56],V[57]!==r||V[58]!==o||V[59]!==ec||V[60]!==J||V[61]!==W||V[62]!==ee||V[63]!==Z||V[64]!==es||V[65]!==S||V[66]!==_||V[67]!==R?(B=(r||S||o)&&(0,eP.jsx)(rj,{as:"span",...ec,children:(0,eP.jsxs)(rN,{as:"span",justify:ee,gap:es,children:[r&&(0,eP.jsxs)(rC,{size:W,children:[(0,eV.isValidElement)(r)&&r,(0,eG.isValidElementType)(r)&&(0,eP.jsx)(r,{})]}),S&&(0,eP.jsx)(rj,{children:(0,eP.jsx)(rC,{muted:Z,align:_,size:W,textOverflow:"ellipsis",weight:R??J.textWeight,children:S})}),o&&(0,eP.jsxs)(rC,{size:W,children:[(0,eV.isValidElement)(o)&&o,(0,eG.isValidElementType)(o)&&(0,eP.jsx)(o,{})]})]})}),V[57]=r,V[58]=o,V[59]=ec,V[60]=J,V[61]=W,V[62]=ee,V[63]=Z,V[64]=es,V[65]=S,V[66]=_,V[67]=R,V[68]=B):B=V[68],V[69]!==ec||V[70]!==a?(P=a&&(0,eP.jsx)(rj,{as:"span",...ec,children:a}),V[69]=ec,V[70]=a,V[71]=P):P=V[71],V[72]!==Y||V[73]!==el||V[74]!==t||V[75]!==b||V[76]!==eu||V[77]!==ef||V[78]!==eb||V[79]!==A||V[80]!==B||V[81]!==P||V[82]!==q||V[83]!==Q||V[84]!==j?(D=(0,eP.jsxs)(rA,{"data-ui":"Button",...b,$mode:Y,$radius:el,$tone:q,"data-disabled":eu,"data-selected":ef,disabled:eb,ref:t,type:Q,$width:j,children:[A,B,P]}),V[72]=Y,V[73]=el,V[74]=t,V[75]=b,V[76]=eu,V[77]=ef,V[78]=eb,V[79]=A,V[80]=B,V[81]=P,V[82]=q,V[83]=Q,V[84]=j,V[85]=D):D=V[85],D});rP.displayName="ForwardRef(Button)";let rD=(0,eW.styled)(rj).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[tw,tk,tx,t$,tS]},ri,function(e){let{card:t,media:r,shadow:o}=T(e.theme);return ta(r,e.$shadow,e=>(function(e,t=1){if(!e)return e3;let r=`0 0 0 ${to(t)} var(--card-shadow-outline-color)`,o=rd(e.umbra,"var(--card-shadow-umbra-color)"),a=rd(e.penumbra,"var(--card-shadow-penumbra-color)"),n=rd(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${a}, ${n}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=T(e.theme);return eW.css`
    ${t&&eW.css`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:a,color:n,style:i}=T(e.theme),d={width:a.border.width,color:"var(--card-border-color)"};return eW.css`
    color-scheme: ${n._dark?"dark":"light"};

    ${rL(n,n,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${rL(n,n.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${rL(n,n.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${rL(n,n.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rL(n,n.selectable.default.hovered,t)}
            }

            &:active {
              ${rL(n,n.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tD({base:n,border:d,focusRing:a.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${rL(n,n.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${rL(n,n.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${rL(n,n.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rL(n,n.selectable.default.hovered,t)}
            }

            &:active {
              ${rL(n,n.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tD({base:n,border:d,focusRing:a.focusRing}):void 0};
        }
      }
    }

    ${i?.card?.root}
  `}(e)]}),rV=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j=(0,eD.c)(56);j[0]!==e?({__unstable_checkered:g,__unstable_focusRing:p,as:r,border:o,borderTop:d,borderRight:i,borderBottom:a,borderLeft:n,muted:l,pressed:s,radius:h,scheme:u,selected:f,shadow:b,tone:m,...c}=e,j[0]=e,j[1]=r,j[2]=o,j[3]=a,j[4]=n,j[5]=i,j[6]=d,j[7]=l,j[8]=s,j[9]=c,j[10]=u,j[11]=f,j[12]=b,j[13]=g,j[14]=p,j[15]=h,j[16]=m):(r=j[1],o=j[2],a=j[3],n=j[4],i=j[5],d=j[6],l=j[7],s=j[8],c=j[9],u=j[10],f=j[11],b=j[12],g=j[13],p=j[14],h=j[15],m=j[16]);let z=void 0!==g&&g,C=void 0!==p&&p,E=void 0===h?0:h,I=void 0===m?"default":m,M=(0,eG.isValidElementType)(r)?r:"div",N=tm(),H="inherit"===I?N.tone:I,T="string"==typeof M?M:void 0,O=N.scheme;j[17]!==o?(y=tn(o),j[17]=o,j[18]=y):y=j[18],j[19]!==d?(v=tn(d),j[19]=d,j[20]=v):v=j[20],j[21]!==i?(w=tn(i),j[21]=i,j[22]=w):w=j[22],j[23]!==a?(k=tn(a),j[23]=a,j[24]=k):k=j[24],j[25]!==n?(x=tn(n),j[25]=n,j[26]=x):x=j[26],j[27]!==E?($=tn(E),j[27]=E,j[28]=$):$=j[28],j[29]!==b?(S=tn(b),j[29]=b,j[30]=S):S=j[30];let L=z?"":void 0,F=s?"":void 0,A=f?"":void 0;return j[31]!==M||j[32]!==z||j[33]!==C||j[34]!==l||j[35]!==t||j[36]!==c||j[37]!==N.scheme||j[38]!==f||j[39]!==x||j[40]!==$||j[41]!==S||j[42]!==L||j[43]!==F||j[44]!==A||j[45]!==T||j[46]!==y||j[47]!==v||j[48]!==w||j[49]!==k||j[50]!==H?(_=(0,eP.jsx)(rD,{"data-as":T,"data-scheme":O,"data-ui":"Card","data-tone":H,...c,$border:y,$borderTop:v,$borderRight:w,$borderBottom:k,$borderLeft:x,$checkered:z,$focusRing:C,$muted:l,$radius:$,$shadow:S,$tone:H,"data-checkered":L,"data-pressed":F,"data-selected":A,forwardedAs:M,ref:t,selected:f}),j[31]=M,j[32]=z,j[33]=C,j[34]=l,j[35]=t,j[36]=c,j[37]=N.scheme,j[38]=f,j[39]=x,j[40]=$,j[41]=S,j[42]=L,j[43]=F,j[44]=A,j[45]=T,j[46]=y,j[47]=v,j[48]=w,j[49]=k,j[50]=H,j[51]=_):_=j[51],j[52]!==u||j[53]!==_||j[54]!==H?(R=(0,eP.jsx)(ty,{scheme:u,tone:H,children:_}),j[52]=u,j[53]=_,j[54]=H,j[55]=R):R=j[55],R});function rW(e,t,r){let o,a,n,i=(0,eD.c)(9),d=void 0===t?rG:t;i[0]!==r||i[1]!==d||i[2]!==e?(o=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let a=r?.();if(!a||a.contains(o)){for(let e of d().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},i[0]=r,i[1]=d,i[2]=e,i[3]=o):o=i[3];let l=(0,eJ.useEffectEvent)(o),s=!!e;i[4]!==s||i[5]!==l?(a=()=>{if(!s)return;let e=e=>l(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i[4]=s,i[5]=l,i[6]=a):a=i[6],i[7]!==s?(n=[s],i[7]=s,i[8]=n):n=i[8],(0,eV.useEffect)(a,n),(0,eV.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function rG(){return e2}function rY(e,t){let r,o,a=(0,eD.c)(4);a[0]!==t||a[1]!==e?(r=()=>{e.current?.setCustomValidity(t||"")},o=[t,e],a[0]=t,a[1]=e,a[2]=r,a[3]=o):(r=a[2],o=a[3]),(0,eV.useEffect)(r,o)}rV.displayName="ForwardRef(Card)";let rK="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:eQ.ResizeObserver,rU=(t=new WeakMap,r=new WeakMap,{subscribe(e,o){let a=r.get(e)||[],n=t.get(e);return r.has(e)||(r.set(e,a),n=({subscribe(e,t){let r=new rK(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(e,e=>{for(let t of a)t(e)})),a.push(o),()=>{let e=a.indexOf(o);e>-1&&a.splice(e,1),0===a.length&&n&&n()}}});function rX(e){let t,r,o=(0,eD.c)(3),[a,n]=(0,eV.useState)(null);return o[0]!==e?(t=()=>{if(e)return rU.subscribe(e,n)},r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,eV.useEffect)(t,r),a}function rq(e,t){let r,o,a,n=(0,eD.c)(7);n[0]!==e?(r=t=>e(t),n[0]=e,n[1]=r):r=n[1];let i=(0,eJ.useEffectEvent)(r);n[2]!==i||n[3]!==t?(o=()=>{let e=e=>i(e);return window.addEventListener("keydown",e,t),()=>window.removeEventListener("keydown",e,t)},n[2]=i,n[3]=t,n[4]=o):o=n[4],n[5]!==t?(a=[t],n[5]=t,n[6]=a):a=n[6],(0,eV.useEffect)(o,a)}function rQ(e,t){let r,o,a=(0,eD.c)(4);return(0,eV.useDebugValue)(e),a[0]!==e?(r=t=>{let r=window.matchMedia(e);return r.addEventListener("change",t),()=>r.removeEventListener("change",t)},a[0]=e,a[1]=r):r=a[1],a[2]!==e?(o=()=>window.matchMedia(e).matches,a[2]=e,a[3]=o):o=a[3],(0,eV.useSyncExternalStore)(r,o,t)}function rZ(){return 0}function rJ(){let e,t,r,o,a=(0,eD.c)(2),{media:n}=tv();a[0]!==n?(r=n.length,o=()=>{if(!t){t=[];for(let o=r;o>-1;o-=1){var e;let r=0===(e=o)?`screen and (max-width: ${n[e]-1}px)`:e===n.length?`screen and (min-width: ${n[e-1]}px)`:`screen and (min-width: ${n[e-1]}px) and (max-width: ${n[e]-1}px)`;t.push({index:o,mq:window.matchMedia(r)})}}return t},e={getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}},a[0]=n,a[1]=e):e=a[1];let i=e;return(0,eV.useSyncExternalStore)(i.subscribe,i.getSnapshot,rZ)}function r0(){return!1}function r1(e){return rQ("(prefers-reduced-motion: reduce)",void 0===e?r2:e)}function r2(){return!1}let r3=eW.styled.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return eW.css`
    position: relative;
    display: inline-block;
  `}),r5=eW.styled.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:r,radius:o}=T(e.theme),{focusRing:a}=r.checkbox;return eW.css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${to(r.checkbox.size)};
      width: ${to(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${tP({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${to(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${tP({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tD({focusRing:a})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tD({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tP({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tD({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${tP({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${tP({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),r4=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h=(0,eD.c)(25);h[0]!==e?({checked:r,className:o,disabled:n,indeterminate:i,customValidity:a,readOnly:d,style:s,...l}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=a,h[4]=n,h[5]=i,h[6]=d,h[7]=l,h[8]=s):(r=h[1],o=h[2],a=h[3],n=h[4],i=h[5],d=h[6],l=h[7],s=h[8]);let m=(0,eV.useRef)(null);h[9]===Symbol.for("react.memo_cache_sentinel")?(c=()=>m.current,h[9]=c):c=h[9],(0,eV.useImperativeHandle)(t,c),h[10]!==i?(u=()=>{m.current&&(m.current.indeterminate=i||!1)},f=[i],h[10]=i,h[11]=u,h[12]=f):(u=h[11],f=h[12]),(0,eV.useEffect)(u,f),rY(m,a);let y=!n&&d?"":void 0,v=a?"":void 0,w=n||d;return h[13]!==r||h[14]!==d||h[15]!==l||h[16]!==y||h[17]!==v||h[18]!==w?(b=(0,eP.jsx)(r5,{"data-read-only":y,"data-error":v,...l,checked:r,disabled:w,type:"checkbox",readOnly:d,ref:m}),h[13]=r,h[14]=d,h[15]=l,h[16]=y,h[17]=v,h[18]=w,h[19]=b):b=h[19],h[20]===Symbol.for("react.memo_cache_sentinel")?(g=(0,eP.jsxs)("span",{children:[(0,eP.jsx)(eY.CheckmarkIcon,{}),(0,eP.jsx)(eY.RemoveIcon,{})]}),h[20]=g):g=h[20],h[21]!==o||h[22]!==s||h[23]!==b?(p=(0,eP.jsxs)(r3,{className:o,"data-ui":"Checkbox",style:s,children:[b,g]}),h[21]=o,h[22]=s,h[23]=b,h[24]=p):p=h[24],p});function r6({theme:e}){let{color:{syntax:t}}=T(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}r4.displayName="ForwardRef(Checkbox)";let r7=(0,eV.lazy)(()=>e.A(376841)),r8=eW.styled.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return eW.css`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${r6}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},tl),r9=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eD.c)(22);f[0]!==e?({children:r,language:o,size:n,weight:i,...a}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5]);let b=void 0===n?2:n;return f[6]!==b?(d=tn(b),f[6]=b,f[7]=d):d=f[7],f[8]!==r?(l=(0,eP.jsx)("code",{children:r}),f[8]=r,f[9]=l):l=f[9],f[10]!==r||f[11]!==o?(s=(0,eP.jsx)(r7,{language:o,value:r}),f[10]=r,f[11]=o,f[12]=s):s=f[12],f[13]!==l||f[14]!==s?(c=(0,eP.jsx)(eV.Suspense,{fallback:l,children:s}),f[13]=l,f[14]=s,f[15]=c):c=f[15],f[16]!==t||f[17]!==a||f[18]!==d||f[19]!==c||f[20]!==i?(u=(0,eP.jsx)(r8,{"data-ui":"Code",...a,$size:d,$weight:i,ref:t,children:c}),f[16]=t,f[17]=a,f[18]=d,f[19]=c,f[20]=i,f[21]=u):u=f[21],u});r9.displayName="ForwardRef(Code)";let oe={width:"100%",margin:"0 auto"},ot=(0,eW.styled)(rj).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return oe},function(e){let{container:t,media:r}=T(e.theme);return ta(r,e.$width,e=>({maxWidth:"auto"===e?"none":to(t[e])}))}),or=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eD.c)(11);d[0]!==e?({as:r,width:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l=void 0===a?2:a;return d[4]!==l?(n=tn(l),d[4]=l,d[5]=n):n=d[5],d[6]!==r||d[7]!==t||d[8]!==o||d[9]!==n?(i=(0,eP.jsx)(ot,{"data-ui":"Container",...o,$width:n,forwardedAs:r,ref:t}),d[6]=r,d[7]=t,d[8]=o,d[9]=n,d[10]=i):i=d[10],i});or.displayName="ForwardRef(Container)";let oo=(0,eW.styled)(rj).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[tQ,t0,t1,t2,t3,t5,t4,t6,t7]}),oa=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x=(0,eD.c)(42);x[0]!==e?({as:r,autoRows:n,autoCols:o,autoFlow:a,columns:d,gap:l,gapX:s,gapY:c,rows:f,children:i,...u}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=a,x[4]=n,x[5]=i,x[6]=d,x[7]=l,x[8]=s,x[9]=c,x[10]=u,x[11]=f):(r=x[1],o=x[2],a=x[3],n=x[4],i=x[5],d=x[6],l=x[7],s=x[8],c=x[9],u=x[10],f=x[11]);let $="string"==typeof r?r:void 0;return x[12]!==n?(b=tn(n),x[12]=n,x[13]=b):b=x[13],x[14]!==o?(g=tn(o),x[14]=o,x[15]=g):g=x[15],x[16]!==a?(p=tn(a),x[16]=a,x[17]=p):p=x[17],x[18]!==d?(h=tn(d),x[18]=d,x[19]=h):h=x[19],x[20]!==l?(m=tn(l),x[20]=l,x[21]=m):m=x[21],x[22]!==s?(y=tn(s),x[22]=s,x[23]=y):y=x[23],x[24]!==c?(v=tn(c),x[24]=c,x[25]=v):v=x[25],x[26]!==f?(w=tn(f),x[26]=f,x[27]=w):w=x[27],x[28]!==r||x[29]!==i||x[30]!==t||x[31]!==u||x[32]!==$||x[33]!==b||x[34]!==g||x[35]!==p||x[36]!==h||x[37]!==m||x[38]!==y||x[39]!==v||x[40]!==w?(k=(0,eP.jsx)(oo,{"data-as":$,"data-ui":"Grid",...u,$autoRows:b,$autoCols:g,$autoFlow:p,$columns:h,$gap:m,$gapX:y,$gapY:v,$rows:w,forwardedAs:r,ref:t,children:i}),x[28]=r,x[29]=i,x[30]=t,x[31]=u,x[32]=$,x[33]=b,x[34]=g,x[35]=p,x[36]=h,x[37]=m,x[38]=y,x[39]=v,x[40]=w,x[41]=k):k=x[41],k});oa.displayName="ForwardRef(Grid)";let on=eW.styled.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eW.css`
    ${t&&eW.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eW.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},tu,ts),oi=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g=(0,eD.c)(26);g[0]!==e?({accent:n,align:r,children:o,muted:i,size:d,textOverflow:l,weight:s,...a}=e,g[0]=e,g[1]=r,g[2]=o,g[3]=a,g[4]=n,g[5]=i,g[6]=d,g[7]=l,g[8]=s):(r=g[1],o=g[2],a=g[3],n=g[4],i=g[5],d=g[6],l=g[7],s=g[8]);let p=void 0!==n&&n,h=void 0!==i&&i,m=void 0===d?2:d,y=o;if("ellipsis"===l){let e;g[9]!==y?(e=(0,eP.jsx)(rl,{children:y}),g[9]=y,g[10]=e):e=g[10],y=e}return g[11]!==r?(c=tn(r),g[11]=r,g[12]=c):c=g[12],g[13]!==m?(u=tn(m),g[13]=m,g[14]=u):u=g[14],g[15]!==y?(f=(0,eP.jsx)("span",{children:y}),g[15]=y,g[16]=f):f=g[16],g[17]!==p||g[18]!==h||g[19]!==t||g[20]!==a||g[21]!==c||g[22]!==u||g[23]!==f||g[24]!==s?(b=(0,eP.jsx)(on,{"data-ui":"Heading",...a,$accent:p,$align:c,$muted:h,$size:u,$weight:s,ref:t,children:f}),g[17]=p,g[18]=h,g[19]=t,g[20]=a,g[21]=c,g[22]=u,g[23]=f,g[24]=s,g[25]=b):b=g[25],b});oi.displayName="ForwardRef(Heading)";let od=(0,eW.styled)(rj).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:"0","&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$space,e=>{let t=to(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),ol=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s=(0,eD.c)(15);s[0]!==e?({as:r,children:o,space:n,...a}=e,s[0]=e,s[1]=r,s[2]=o,s[3]=a,s[4]=n):(r=s[1],o=s[2],a=s[3],n=s[4]),s[5]!==o?(i=eV.Children.map(o,os),s[5]=o,s[6]=i):i=s[6];let c=i;return s[7]!==n?(d=tn(n),s[7]=n,s[8]=d):d=s[8],s[9]!==r||s[10]!==c||s[11]!==a||s[12]!==d||s[13]!==t?(l=(0,eP.jsx)(od,{"data-ui":"Inline",...a,$space:d,forwardedAs:r,ref:t,children:c}),s[9]=r,s[10]=c,s[11]=a,s[12]=d,s[13]=t,s[14]=l):l=s[14],l});function os(e){return e&&(0,eP.jsx)("div",{children:e})}ol.displayName="ForwardRef(Inline)";let oc=eW.styled.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(ri,function(){return eW.css`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),ou=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u=(0,eD.c)(19);u[0]!==e?({children:r,fontSize:a,padding:n,radius:i,...o}=e,u[0]=e,u[1]=r,u[2]=o,u[3]=a,u[4]=n,u[5]=i):(r=u[1],o=u[2],a=u[3],n=u[4],i=u[5]);let f=void 0===a?0:a,b=void 0===n?1:n,g=void 0===i?2:i;return u[6]!==g?(d=tn(g),u[6]=g,u[7]=d):d=u[7],u[8]!==r||u[9]!==f?(l=(0,eP.jsx)(rC,{as:"span",size:f,weight:"semibold",children:r}),u[8]=r,u[9]=f,u[10]=l):l=u[10],u[11]!==b||u[12]!==l?(s=(0,eP.jsx)(rj,{as:"span",padding:b,children:l}),u[11]=b,u[12]=l,u[13]=s):s=u[13],u[14]!==t||u[15]!==o||u[16]!==d||u[17]!==s?(c=(0,eP.jsx)(oc,{"data-ui":"KBD",...o,$radius:d,ref:t,children:s}),u[14]=t,u[15]=o,u[16]=d,u[17]=s,u[18]=c):c=u[18],c});ou.displayName="ForwardRef(KBD)";let of={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),a=r.floating.width,n=r.floating.height,i=e.shift?.x||0,d=e.shift?.y||0;if(a<=0||n<=0)return{};let{originX:l,originY:s}=["bottom","top"].includes(o)?{originX:ob(.5-i/a,0,1),originY:+("bottom"!==o)}:{originX:+("left"===o),originY:ob(.5-d/n,0,1)};return{data:{originX:l,originY:s}}}};function ob(e,t,r){return Math.min(Math.max(e,t),r)}function og(e,t,r){let o=t.x-e.x,a=t.y-e.y;return op(e,t,Math.min(1,r/Math.sqrt(o*o+a*a)))}function op(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let oh=eW.styled.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>eW.css`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),om=eW.styled.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,oy=eW.styled.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,ov=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eD.c)(29);f[0]!==e?({width:n,height:r,radius:a,...o}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n):(r=f[1],o=f[2],a=f[3],n=f[4]);let b=void 0===a?0:a,{card:g}=tv(),p=g.shadow.outline,h=n/2;f[5]!==h||f[6]!==r||f[7]!==b||f[8]!==n?(i=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],a=e[o-1],n=e[o+1];if(a&&t.radius){let e=og(t,a,t.radius),o=og(t,n,t.radius),i=op(e,t,.5),d=op(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:i,endControl:d})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:b,y:0,radius:b},{x:h,y:r-1,radius:b},{x:n-b,y:0,radius:b},{x:n,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),f[5]=h,f[6]=r,f[7]=b,f[8]=n,f[9]=i):i=f[9];let m=i,y=`${m}`,v=`${m} M ${n} -1 M 0 -1 Z`,w=`0 0 ${n} ${n}`;f[10]!==p||f[11]!==n?(d=(0,eP.jsx)("mask",{id:"stroke-mask",children:(0,eP.jsx)("rect",{x:0,y:p,width:n,height:n,fill:"white"})}),f[10]=p,f[11]=n,f[12]=d):d=f[12];let k=2*p;return f[13]!==y||f[14]!==k?(l=(0,eP.jsx)(om,{d:y,mask:"url(#stroke-mask)",strokeWidth:k}),f[13]=y,f[14]=k,f[15]=l):l=f[15],f[16]!==v?(s=(0,eP.jsx)(oy,{d:v}),f[16]=v,f[17]=s):s=f[17],f[18]!==w||f[19]!==d||f[20]!==l||f[21]!==s||f[22]!==n?(c=(0,eP.jsxs)("svg",{width:n,height:n,viewBox:w,children:[d,l,s]}),f[18]=w,f[19]=d,f[20]=l,f[21]=s,f[22]=n,f[23]=c):c=f[23],f[24]!==t||f[25]!==o||f[26]!==c||f[27]!==n?(u=(0,eP.jsx)(oh,{...o,$w:n,ref:t,children:c}),f[24]=t,f[25]=o,f[26]=c,f[27]=n,f[28]=u):u=f[28],u});ov.displayName="ForwardRef(Arrow)";let ow=tg("@sanity/ui/context/boundaryElement",null);function ok(e){let t,r,o=(0,eD.c)(5),{children:a,element:n}=e;o[0]!==n?(t={version:0,element:n},o[0]=n,o[1]=t):t=o[1];let i=t;return o[2]!==a||o[3]!==i?(r=(0,eP.jsx)(ow.Provider,{value:i,children:a}),o[2]=a,o[3]=i,o[4]=r):r=o[4],r}function ox(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}ok.displayName="BoundaryElementProvider";let o$={version:0,element:null};function oS(){let e=(0,eV.useContext)(ow);if(e&&(!ox(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||o$}function o_({children:e,condition:t,wrapper:r}){return t?r(e):e}o_.displayName="ConditionalWrapper";let oR=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c=(0,eD.c)(18),u=tv();c[0]!==e?({children:o,media:r,...a}=e,c[0]=e,c[1]=r,c[2]=o,c[3]=a):(r=c[1],o=c[2],a=c[3]);let f=r??u.media,[b,g]=(0,eV.useState)(null),p=rX(b)?.border.width??window.innerWidth;if(c[4]!==f||c[5]!==p){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r}(f,p);n=e.length?e.join(" "):void 0,c[4]=f,c[5]=p,c[6]=n}else n=c[6];let h=n;if(c[7]!==f||c[8]!==p){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r}(f,p);i=e.length?e.join(" "):void 0,c[7]=f,c[8]=p,c[9]=i}else i=c[9];let m=i;return c[10]!==b?(d=()=>b,l=[b],c[10]=b,c[11]=d,c[12]=l):(d=c[11],l=c[12]),(0,eV.useImperativeHandle)(t,d,l),c[13]!==o||c[14]!==h||c[15]!==m||c[16]!==a?(s=(0,eP.jsx)("div",{"data-ui":"ElementQuery",...a,"data-eq-max":h,"data-eq-min":m,ref:g,children:o}),c[13]=o,c[14]=h,c[15]=m,c[16]=a,c[17]=s):s=c[17],s});function oj(e){if(!ox(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}oR.displayName="ForwardRef(ElementQuery)";let oz=tg("@sanity/ui/context/layer",null);function oC(e){let t,r,o,a,n,i,d,l,s=(0,eD.c)(21),{children:c,zOffset:u}=e,f=void 0===u?0:u,b=(0,eV.useContext)(oz);s[0]!==b?(t=b&&oj(b),s[0]=b,s[1]=t):t=s[1];let g=t,p=g?.registerChild,h=(g?.level??0)+1;s[2]!==f?(r=tn(f),s[2]=f,s[3]=r):r=s[3];let m=r,y=m.length-1,v=Math.min(rJ(),y),w=g?g.zIndex+m[v]:m[v];s[4]===Symbol.for("react.memo_cache_sentinel")?(o={},s[4]=o):o=s[4];let[,k]=(0,eV.useState)(o),[x,$]=(0,eV.useState)(0),S=0===x;s[5]!==p||s[6]!==k?(a=e=>{let t=p?.(e);return void 0!==e?k(t=>{let r=t[e]??0,o={...t,[e]:r+1};return $(Object.keys(o).length),o}):$(oI),()=>{void 0!==e?k(t=>{let r={...t};return 1===r[e]?(delete r[e],$(Object.keys(r).length)):r[e]=r[e]-1,r}):$(oE),t?.()}},s[5]=p,s[6]=k,s[7]=a):a=s[7];let _=a;s[8]!==h||s[9]!==p?(n=()=>p?.(h),i=[h,p],s[8]=h,s[9]=p,s[10]=n,s[11]=i):(n=s[10],i=s[11]),(0,eV.useEffect)(n,i),s[12]!==S||s[13]!==h||s[14]!==_||s[15]!==x||s[16]!==w?(d={version:0,isTopLayer:S,level:h,registerChild:_,size:x,zIndex:w},s[12]=S,s[13]=h,s[14]=_,s[15]=x,s[16]=w,s[17]=d):d=s[17];let R=d;return s[18]!==c||s[19]!==R?(l=(0,eP.jsx)(oz.Provider,{value:R,children:c}),s[18]=c,s[19]=R,s[20]=l):l=s[20],l}function oE(e){return e-1}function oI(e){return e+1}function oM(){let e=(0,eD.c)(2),t=(0,eV.useContext)(oz);if(!t)throw Error("useLayer(): missing context value");try{let r;return e[0]!==t?(r=oj(t),e[0]=t,e[1]=r):r=e[1],r}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}oC.displayName="LayerProvider";let oN=eW.styled.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),oH=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b=(0,eD.c)(22);b[0]!==e?({children:r,onActivate:o,onFocus:a,style:i,...n}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=a,b[4]=n,b[5]=i):(r=b[1],o=b[2],a=b[3],n=b[4],i=b[5]);let g=void 0===i?e3:i,{zIndex:p,isTopLayer:h}=oM(),m=(0,eV.useRef)(null),y=(0,eV.useRef)(null),v=(0,eV.useRef)(h);b[6]===Symbol.for("react.memo_cache_sentinel")?(d=()=>y.current,b[6]=d):d=b[6],(0,eV.useImperativeHandle)(t,d),b[7]!==h||b[8]!==o?(l=()=>{v.current!==h&&h&&o?.({activeElement:m.current}),v.current=h},s=[h,o],b[7]=h,b[8]=o,b[9]=l,b[10]=s):(l=b[9],s=b[10]),(0,eV.useEffect)(l,s),b[11]!==h||b[12]!==a?(c=e=>{a?.(e);let t=y.current,r=document.activeElement;!h||!t||!r||e7(r)&&te(t,r)&&(m.current=r)},b[11]=h,b[12]=a,b[13]=c):c=b[13];let w=c;return b[14]!==g||b[15]!==p?(u={...g,zIndex:p},b[14]=g,b[15]=p,b[16]=u):u=b[16],b[17]!==r||b[18]!==w||b[19]!==n||b[20]!==u?(f=(0,eP.jsx)(oN,{...n,"data-ui":"Layer",onFocus:w,ref:y,style:u,children:r}),b[17]=r,b[18]=w,b[19]=n,b[20]=u,b[21]=f):f=b[21],f}),oT=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eD.c)(11);d[0]!==e?({children:r,zOffset:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l=void 0===a?1:a;return d[4]!==r||d[5]!==t||d[6]!==o?(n=(0,eP.jsx)(oH,{...o,ref:t,children:r}),d[4]=r,d[5]=t,d[6]=o,d[7]=n):n=d[7],d[8]!==n||d[9]!==l?(i=(0,eP.jsx)(oC,{zOffset:l,children:n}),d[8]=n,d[9]=l,d[10]=i):i=d[10],i});oT.displayName="ForwardRef(Layer)";let oO="@sanity/ui/context/portal",oL=Symbol.for(`${oO}/element`);tb[oL]=null;let oF=tg(oO,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(tb[oL]||(tb[oL]=document.createElement("div"),tb[oL].setAttribute("data-portal",""),document.body.appendChild(tb[oL])),tb[oL])}});function oA(){let e=(0,eV.useContext)(oF);if(!e)throw Error("usePortal(): missing context value");if(!ox(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function oB(e){let t,r=(0,eD.c)(3),{children:o,__unstable_name:a}=e,n=oA(),i=(a?n.elements&&n.elements[a]:n.element)||n.elements?.default;return i?(r[0]!==o||r[1]!==i?(t=(0,eZ.createPortal)(o,i),r[0]=o,r[1]=i,r[2]=t):t=r[2],t):null}function oP(e){let t,r,o=(0,eD.c)(7),{boundaryElement:a,children:n,element:i,__unstable_elements:d}=e,l=(0,eV.useSyncExternalStore)(oW,oV,oD),s=a||null,c=i||l;o[0]!==d||o[1]!==s||o[2]!==c?(t={version:0,boundaryElement:s,element:c,elements:d},o[0]=d,o[1]=s,o[2]=c,o[3]=t):t=o[3];let u=t;return o[4]!==n||o[5]!==u?(r=(0,eP.jsx)(oF.Provider,{value:u,children:n}),o[4]=n,o[5]=u,o[6]=r):r=o[6],r}function oD(){return null}function oV(){return document.body}oB.displayName="Portal",oP.displayName="PortalProvider";let oW=()=>()=>{},oG=eW.styled.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`,oY=(0,eV.forwardRef)(function(e,t){let r,o=(0,eD.c)(4),{as:a,children:n}=e;return o[0]!==a||o[1]!==n||o[2]!==t?(r=(0,eP.jsx)(oG,{"aria-hidden":!0,as:a,"data-ui":"SrOnly",ref:t,children:n}),o[0]=a,o[1]=n,o[2]=t,o[3]=r):r=o[3],r});oY.displayName="ForwardRef(SrOnly)";let oK=eW.styled.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,oU=eW.styled.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,oX=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k=(0,eD.c)(44);k[0]!==e?({as:i,gap:d,getItemKey:r,items:l,onChange:o,renderItem:a,...n}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=a,k[4]=n,k[5]=i,k[6]=d,k[7]=l):(r=k[1],o=k[2],a=k[3],n=k[4],i=k[5],d=k[6],l=k[7]);let x=void 0===i?"div":i,$=void 0===d?0:d;k[8]!==l?(s=void 0===l?[]:l,k[8]=l,k[9]=s):s=k[9];let S=s,{space:_}=tv(),R=(0,eV.useRef)(null),j=(0,eV.useRef)(null),[z,C]=(0,eV.useState)(0),[E,I]=(0,eV.useState)(0),[M,N]=(0,eV.useState)(-1);k[10]===Symbol.for("react.memo_cache_sentinel")?(c=()=>R.current,k[10]=c):c=k[10],(0,eV.useImperativeHandle)(t,c),k[11]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{if(!j.current)return;let e=j.current.firstChild;e instanceof HTMLElement&&N(e.offsetHeight)},k[11]=u):u=k[11],k[12]!==a?(f=[a],k[12]=a,k[13]=f):f=k[13],(0,eV.useEffect)(u,f),k[14]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{if(!R.current)return;let e=function(e){let t=e;for(;t&&!tt(t);)t=t.parentNode;return t}(R.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{C(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let r=new rK(e=>{I(e[0].contentRect.height)});return r.observe(e),t(),()=>{e.removeEventListener("scroll",t),r.unobserve(e),r.disconnect()}}let t=()=>{C(window.scrollY)},r=()=>{I(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),I(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},g=[],k[14]=b,k[15]=g):(b=k[14],g=k[15]),(0,eV.useEffect)(b,g);let H=S.length,T=M?H*(M+_[$])-_[$]:0,O=T?Math.max(Math.floor(z/T*H)-2,0):0,L=T?Math.ceil((z+E)/T*H)+1:0;k[16]!==O||k[17]!==$||k[18]!==M||k[19]!==o||k[20]!==E||k[21]!==z||k[22]!==_||k[23]!==L?(h=()=>{o&&o({fromIndex:O,gap:_[$],itemHeight:M,scrollHeight:E,scrollTop:z,toIndex:L})},p=[O,$,M,o,E,z,_,L],k[16]=O,k[17]=$,k[18]=M,k[19]=o,k[20]=E,k[21]=z,k[22]=_,k[23]=L,k[24]=p,k[25]=h):(p=k[24],h=k[25]),(0,eV.useEffect)(h,p),k[26]!==O||k[27]!==$||k[28]!==r||k[29]!==M||k[30]!==S||k[31]!==a||k[32]!==_||k[33]!==L?(m={fromIndex:O,gap:$,itemHeight:M,space:_,toIndex:L,getItemKey:r,items:S,renderItem:a},k[26]=O,k[27]=$,k[28]=r,k[29]=M,k[30]=S,k[31]=a,k[32]=_,k[33]=L,k[34]=m):m=k[34];let F=function(e){let t,r=(0,eD.c)(21),{fromIndex:o,gap:a,getItemKey:n,itemHeight:i,items:d,renderItem:l,space:s,toIndex:c}=e;if(!l||0===d.length)return null;if(-1===i){let e,t;return r[0]!==d[0]||r[1]!==l?(e=l(d[0]),r[0]=d[0],r[1]=l,r[2]=e):e=r[2],r[3]!==e?(t=[(0,eP.jsx)(oU,{children:e},0)],r[3]=e,r[4]=t):t=r[4],t}if(r[5]!==o||r[6]!==a||r[7]!==n||r[8]!==i||r[9]!==d||r[10]!==l||r[11]!==s||r[12]!==c){let e;r[14]!==o||r[15]!==a||r[16]!==n||r[17]!==i||r[18]!==l||r[19]!==s?(e=(e,t)=>{let r=o+t,d=l(e),c=n?n(e,r):r;return(0,eP.jsx)(oU,{style:{top:r*(i+s[a])},children:d},c)},r[14]=o,r[15]=a,r[16]=n,r[17]=i,r[18]=l,r[19]=s,r[20]=e):e=r[20],t=d.slice(o,c).map(e),r[5]=o,r[6]=a,r[7]=n,r[8]=i,r[9]=d,r[10]=l,r[11]=s,r[12]=c,r[13]=t}else t=r[13];return t}(m);return k[35]!==T?(y={height:T},k[35]=T,k[36]=y):y=k[36],k[37]!==F||k[38]!==y?(v=(0,eP.jsx)("div",{ref:j,style:y,children:F}),k[37]=F,k[38]=y,k[39]=v):v=k[39],k[40]!==x||k[41]!==n||k[42]!==v?(w=(0,eP.jsx)(oK,{as:x,"data-ui":"VirtualList",...n,ref:R,children:v}),k[40]=x,k[41]=n,k[42]=v,k[43]=w):w=k[43],w});function oq(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}oX.displayName="ForwardRef(VirtualList)";let oQ=[0,0,0,0],oZ={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},oJ=(0,eW.styled)(eX.motion.create(rV)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,o0=(0,eW.styled)(eX.motion.create(rN)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,o1=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N=(0,eD.c)(66);N[0]!==e?({__unstable_margins:l,animate:r,arrow:o,arrowRef:a,arrowX:n,arrowY:i,children:d,padding:f,placement:b,originX:s,originY:c,overflow:u,radius:g,scheme:h,shadow:m,strategy:y,style:v,tone:w,width:k,x:x,y:$,...p}=e,N[0]=e,N[1]=r,N[2]=o,N[3]=a,N[4]=n,N[5]=i,N[6]=d,N[7]=l,N[8]=s,N[9]=c,N[10]=u,N[11]=f,N[12]=b,N[13]=g,N[14]=p,N[15]=h,N[16]=m,N[17]=y,N[18]=v,N[19]=w,N[20]=k,N[21]=x,N[22]=$):(r=N[1],o=N[2],a=N[3],n=N[4],i=N[5],d=N[6],l=N[7],s=N[8],c=N[9],u=N[10],f=N[11],b=N[12],g=N[13],p=N[14],h=N[15],m=N[16],y=N[17],v=N[18],w=N[19],k=N[20],x=N[21],$=N[22]);let{zIndex:H}=oM(),T=l||oQ,O=(x??0)+T[3],L=($??0)+T[0],F=r?"transform":void 0;N[23]!==s||N[24]!==c||N[25]!==y||N[26]!==v||N[27]!==F||N[28]!==k||N[29]!==O||N[30]!==L||N[31]!==H?(S={left:O,originX:s,originY:c,position:y,top:L,width:k,zIndex:H,willChange:F,...v},N[23]=s,N[24]=c,N[25]=y,N[26]=v,N[27]=F,N[28]=k,N[29]=O,N[30]=L,N[31]=H,N[32]=S):S=N[32];let A=S,B=null!==n?n:void 0,P=null!==i?i:void 0;N[33]!==B||N[34]!==P?(_={left:B,top:P,right:void 0,bottom:void 0},N[33]=B,N[34]=P,N[35]=_):_=N[35];let D=_,V=p;return N[36]!==r?(R=r?["hidden","initial"]:void 0,N[36]=r,N[37]=R):R=N[37],N[38]!==r?(j=r?["visible","scaleIn"]:void 0,N[38]=r,N[39]=j):j=N[39],N[40]!==r?(z=r?["hidden","scaleOut"]:void 0,N[40]=r,N[41]=z):z=N[41],N[42]!==d||N[43]!==f?(C=(0,eP.jsx)(rN,{direction:"column",flex:1,padding:f,children:d}),N[42]=d,N[43]=f,N[44]=C):C=N[44],N[45]!==u||N[46]!==C?(E=(0,eP.jsx)(o0,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:u,variants:e4,transition:e6,children:C}),N[45]=u,N[46]=C,N[47]=E):E=N[47],N[48]!==o||N[49]!==a||N[50]!==D?(I=o&&(0,eP.jsx)(ov,{ref:a,style:D,width:19,height:8,radius:2}),N[48]=o,N[49]=a,N[50]=D,N[51]=I):I=N[51],N[52]!==b||N[53]!==g||N[54]!==t||N[55]!==A||N[56]!==h||N[57]!==m||N[58]!==E||N[59]!==I||N[60]!==V||N[61]!==R||N[62]!==j||N[63]!==z||N[64]!==w?(M=(0,eP.jsxs)(oJ,{"data-ui":"Popover",...V,"data-placement":b,radius:g,ref:t,scheme:h,shadow:m,sizing:"border",style:A,tone:w,variants:e5,transition:e6,initial:R,animate:j,exit:z,children:[E,I]}),N[52]=b,N[53]=g,N[54]=t,N[55]=A,N[56]=h,N[57]=m,N[58]=E,N[59]=I,N[60]=V,N[61]=R,N[62]=j,N[63]=z,N[64]=w,N[65]=M):M=N[65],M});o1.displayName="ForwardRef(PopoverCard)";let o2=()=>{let e,t=(0,eD.c)(2),{zIndex:r}=oM();return t[0]!==r?(e=(0,eP.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:r}}),t[0]=r,t[1]=e):e=t[1],e},o3=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L,F,A,B,P,D,V,W,G,Y,K,U,X,q,Q,Z,J,ee,et,er,eo,ea,en=(0,eD.c)(126),{container:ei,layer:ed}=tv(),el=oS();if(en[0]!==e){let{__unstable_margins:t,animate:I,arrow:M,boundaryElement:N,children:H,constrainSize:T,content:O,disabled:L,fallbackPlacements:F,matchReferenceWidth:A,floatingBoundary:B,modal:P,onActivate:D,open:V,overflow:W,padding:G,placement:Y,placementStrategy:K,portal:U,preventOverflow:X,radius:q,referenceBoundary:Q,referenceElement:Z,scheme:J,shadow:ee,tone:et,width:er,zOffset:eo,updateRef:ea,...ei}=e;y=t,v=I,x=M,r=N,d=H,$=T,l=O,s=L,o=F,c=A,a=B,u=P,f=V,S=W,b=G,_=Y,R=K,g=U,j=X,z=q,n=Q,p=Z,m=J,C=ee,w=et,k=er,i=eo,E=ea,h=ei,en[0]=e,en[1]=r,en[2]=o,en[3]=a,en[4]=n,en[5]=i,en[6]=d,en[7]=l,en[8]=s,en[9]=c,en[10]=u,en[11]=f,en[12]=b,en[13]=g,en[14]=p,en[15]=h,en[16]=m,en[17]=y,en[18]=v,en[19]=w,en[20]=k,en[21]=x,en[22]=$,en[23]=S,en[24]=_,en[25]=R,en[26]=j,en[27]=z,en[28]=C,en[29]=E}else r=en[1],o=en[2],a=en[3],n=en[4],i=en[5],d=en[6],l=en[7],s=en[8],c=en[9],u=en[10],f=en[11],b=en[12],g=en[13],p=en[14],h=en[15],m=en[16],y=en[17],v=en[18],w=en[19],k=en[20],x=en[21],$=en[22],S=en[23],_=en[24],R=en[25],j=en[26],z=en[27],C=en[28],E=en[29];let es=void 0===y?oQ:y,ec=void 0!==v&&v,eu=void 0!==x&&x,ef=void 0!==$&&$,eb=void 0===S?"hidden":S,eg=void 0===_?"bottom":_,ep=void 0===R?"flip":R,eh=void 0===j||j,em=void 0===z?3:z,ey=void 0===C?3:C,ev=void 0===w?"inherit":w,ew=void 0===k?"auto":k,ek=r??el?.element,ex=o??oZ[e.placement??"bottom"],e$=a??e.boundaryElement??el.element,eS=n??e.boundaryElement??el.element,e_=i??ed.popover.zOffset,eR=!r1()&&ec,ej=rX(ek)?.border;en[30]!==b?(I=tn(b),en[30]=b,en[31]=I):I=en[31];let ez=I;en[32]!==em?(M=tn(em),en[32]=em,en[33]=M):M=en[33];let eC=M;en[34]!==ey?(N=tn(ey),en[34]=ey,en[35]=N):N=en[35];let eE=N,eI=tn(ew);en[36]!==e_?(H=tn(e_),en[36]=e_,en[37]=H):H=en[37];let eM=H,eN=(0,eV.useRef)(null),eH=(0,eV.useRef)(null);en[38]===Symbol.for("react.memo_cache_sentinel")?(T=()=>eN.current,en[38]=T):T=en[38],(0,eV.useImperativeHandle)(t,T);let eT=rJ(),eO=ef||eh?ej?.width:void 0,eL=function(e){let{container:t,mediaIndex:r,width:o}=e,a=o[r],n=void 0===a?o[o.length-1]:a;return"number"==typeof n?t[n]:void 0}({container:ei,mediaIndex:eT,width:eI}),eF=(0,eV.useRef)(eL);en[39]!==eL?(O=()=>{eF.current=eL},L=[eL],en[39]=eL,en[40]=O,en[41]=L):(O=en[40],L=en[41]),(0,eV.useEffect)(O,L),en[42]!==eO||en[43]!==eL?(F=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(void 0!==r||void 0!==t)return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:eO,currentWidth:eL}),en[42]=eO,en[43]=eL,en[44]=F):F=en[44];let eA=F,eB=(0,eV.useRef)(eA);en[45]!==eA?(A=()=>{eB.current=eA},B=[eA],en[45]=eA,en[46]=A,en[47]=B):(A=en[46],B=en[47]),(0,eV.useEffect)(A,B);let eW=(0,eV.useRef)(void 0);en[48]!==c||en[49]!==eA||en[50]!==f||en[51]!==eL?(P=()=>{let e=eN.current;if(!f||!e)return;let t=eW.current;c?void 0!==t&&(e.style.width=`${t}px`):void 0!==eL&&(e.style.width=`${eL}px`),"number"==typeof eA&&(e.style.maxWidth=`${eA}px`)},D=[eL,c,eA,f],en[48]=c,en[49]=eA,en[50]=f,en[51]=eL,en[52]=P,en[53]=D):(P=en[52],D=en[53]),(0,eV.useEffect)(P,D);let[eG,eY]=(0,eV.useState)(void 0);en[54]!==eR||en[55]!==eu||en[56]!==ef||en[57]!==ex||en[58]!==e$||en[59]!==es||en[60]!==c||en[61]!==eg||en[62]!==ep||en[63]!==eh||en[64]!==eS?(V={animate:eR,arrowProp:eu,arrowRef:eH,constrainSize:ef,fallbackPlacements:ex,floatingBoundary:e$,margins:es,matchReferenceWidth:c,maxWidthRef:eB,placementProp:eg,placementStrategy:ep,preventOverflow:eh,referenceBoundary:eS,referenceWidthRef:eW,rootBoundary:"viewport",setReferenceWidth:eY,widthRef:eF},en[54]=eR,en[55]=eu,en[56]=ef,en[57]=ex,en[58]=e$,en[59]=es,en[60]=c,en[61]=eg,en[62]=ep,en[63]=eh,en[64]=eS,en[65]=V):V=en[65];let eX=function(e){let t,r=(0,eD.c)(42),{animate:o,arrowProp:a,arrowRef:n,constrainSize:i,fallbackPlacements:d,floatingBoundary:l,margins:s,matchReferenceWidth:c,maxWidthRef:u,placementProp:f,placementStrategy:b,preventOverflow:g,referenceBoundary:p,referenceWidthRef:h,rootBoundary:m,setReferenceWidth:y,widthRef:v}=e;if(r[0]!==o||r[1]!==a||r[2]!==n||r[3]!==i||r[4]!==d||r[5]!==l||r[6]!==s||r[7]!==c||r[8]!==u||r[9]!==f||r[10]!==b||r[11]!==g||r[12]!==p||r[13]!==h||r[14]!==m||r[15]!==y||r[16]!==v){let e,w;if(t=[],i||g)if("autoPlacement"===b){let e;r[18]!==d||r[19]!==f?(e=(0,eU.autoPlacement)({allowedPlacements:[f].concat(d)}),r[18]=d,r[19]=f,r[20]=e):e=r[20],t.push(e)}else{let e,o=l||void 0;r[21]!==d||r[22]!==m||r[23]!==o?(e=(0,eU.flip)({boundary:o,fallbackPlacements:d,padding:4,rootBoundary:m}),r[21]=d,r[22]=m,r[23]=o,r[24]=e):e=r[24],t.push(e)}if(r[25]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eU.offset)({mainAxis:4}),r[25]=e):e=r[25],t.push(e),i||c){let e,o=l||void 0;r[26]!==i||r[27]!==s||r[28]!==c||r[29]!==u||r[30]!==h||r[31]!==y||r[32]!==o||r[33]!==v?(e=function(e){let{constrainSize:t,margins:r,matchReferenceWidth:o,maxWidthRef:a,padding:n=0,referenceWidthRef:i,setReferenceWidth:d,widthRef:l}=e;return{name:"@sanity/ui/size",async fn(s){let{elements:c,placement:u,platform:f,rects:b}=s,{floating:g,reference:p}=b,h=await (0,eK.detectOverflow)(s,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:n,rootBoundary:"viewport"}),m=1/0,y=1/0,v=g.width,w=g.height;u.includes("top")&&(m=v-(h.left+h.right),y=w-h.top),u.includes("right")&&(m=v-h.right,y=w-(h.top+h.bottom)),u.includes("bottom")&&(m=v-(h.left+h.right),y=w-h.bottom),u.includes("left")&&(m=v-h.left,y=w-(h.top+h.bottom));let k=m-r[1]-r[3],x=y-r[0]-r[2],$=p.width-r[1]-r[3];i.current=$,d($),o?c.floating.style.width=`${$}px`:void 0!==l.current&&(c.floating.style.width=`${l.current}px`),t&&(c.floating.style.maxWidth=`${Math.min(k,a.current??1/0)}px`,c.floating.style.maxHeight=`${x}px`);let S=await f.getDimensions(c.floating),_=S.height;return v!==S.width||w!==_?{reset:{rects:!0}}:{}}}}({boundaryElement:o,constrainSize:i,margins:s,matchReferenceWidth:c,maxWidthRef:u,padding:4,referenceWidthRef:h,setReferenceWidth:y,widthRef:v}),r[26]=i,r[27]=s,r[28]=c,r[29]=u,r[30]=h,r[31]=y,r[32]=o,r[33]=v,r[34]=e):e=r[34],t.push(e)}if(g){let e,o=l||void 0;r[35]!==m||r[36]!==o?(e=(0,eU.shift)({boundary:o,rootBoundary:m,padding:4}),r[35]=m,r[36]=o,r[37]=e):e=r[37],t.push(e)}if(a){let e;r[38]!==n?(e=(0,eU.arrow)({element:n,padding:4}),r[38]=n,r[39]=e):e=r[39],t.push(e)}o&&t.push(of);let k=p||void 0;r[40]!==k?(w=(0,eU.hide)({boundary:k,padding:4,strategy:"referenceHidden"}),r[40]=k,r[41]=w):w=r[41],t.push(w),r[0]=o,r[1]=a,r[2]=n,r[3]=i,r[4]=d,r[5]=l,r[6]=s,r[7]=c,r[8]=u,r[9]=f,r[10]=b,r[11]=g,r[12]=p,r[13]=h,r[14]=m,r[15]=y,r[16]=v,r[17]=t}else t=r[17];return t}(V);en[66]!==p?(W=p?{reference:p}:void 0,en[66]=p,en[67]=W):W=en[67],en[68]!==eX||en[69]!==eg||en[70]!==W?(G={middleware:eX,placement:eg,whileElementsMounted:eK.autoUpdate,elements:W},en[68]=eX,en[69]=eg,en[70]=W,en[71]=G):G=en[71];let{x:eQ,y:eZ,middlewareData:eJ,placement:e0,refs:e1,strategy:e2,update:e3}=(0,eU.useFloating)(G),e5=eJ.hide?.referenceHidden,e4=eJ.arrow?.x,e6=eJ.arrow?.y,e7=eJ["@sanity/ui/origin"]?.originX,e8=eJ["@sanity/ui/origin"]?.originY;en[72]===Symbol.for("react.memo_cache_sentinel")?(Y=e=>{eH.current=e},en[72]=Y):Y=en[72];let e9=Y;en[73]!==e1?(K=e=>{eN.current=e,e1.setFloating(e)},en[73]=e1,en[74]=K):K=en[74];let te=K;en[75]!==d?(U=d?oq(d):null,en[75]=d,en[76]=U):U=en[76],en[77]!==e1.reference.current?(X=()=>e1.reference.current,en[77]=e1.reference.current,en[78]=X):X=en[78],(0,eV.useImperativeHandle)(U,X);e:{let e;if(p){q=d;break e}if(!d){q=null;break e}en[79]!==d||en[80]!==e1.setReference?(e=(0,eV.cloneElement)(d,{ref:e1.setReference}),en[79]=d,en[80]=e1.setReference,en[81]=e):e=en[81],q=e}let tt=q;if(en[82]!==e3?(Q=()=>e3,Z=[e3],en[82]=e3,en[83]=Q,en[84]=Z):(Q=en[83],Z=en[84]),(0,eV.useImperativeHandle)(E,Q,Z),s){let e;return en[85]!==d?(e=d||(0,eP.jsx)(eP.Fragment,{}),en[85]=d,en[86]=e):e=en[86],e}en[87]!==u?(J=u&&(0,eP.jsx)(o2,{}),en[87]=u,en[88]=J):J=en[88];let tr=c?eG:eL;en[89]!==eR||en[90]!==eu||en[91]!==e4||en[92]!==e6||en[93]!==l||en[94]!==es||en[95]!==e7||en[96]!==e8||en[97]!==eb||en[98]!==ez||en[99]!==e0||en[100]!==eC||en[101]!==e5||en[102]!==h||en[103]!==m||en[104]!==te||en[105]!==eE||en[106]!==e2||en[107]!==tr||en[108]!==ev||en[109]!==eQ||en[110]!==eZ?(ee=(0,eP.jsx)(o1,{...h,__unstable_margins:es,animate:eR,arrow:eu,arrowRef:e9,arrowX:e4,arrowY:e6,hidden:e5,overflow:eb,padding:ez,placement:e0,radius:eC,ref:te,scheme:m,shadow:eE,originX:e7,originY:e8,strategy:e2,tone:ev,width:tr,x:eQ,y:eZ,children:l}),en[89]=eR,en[90]=eu,en[91]=e4,en[92]=e6,en[93]=l,en[94]=es,en[95]=e7,en[96]=e8,en[97]=eb,en[98]=ez,en[99]=e0,en[100]=eC,en[101]=e5,en[102]=h,en[103]=m,en[104]=te,en[105]=eE,en[106]=e2,en[107]=tr,en[108]=ev,en[109]=eQ,en[110]=eZ,en[111]=ee):ee=en[111],en[112]!==J||en[113]!==ee||en[114]!==eM?(et=(0,eP.jsxs)(oC,{zOffset:eM,children:[J,ee]}),en[112]=J,en[113]=ee,en[114]=eM,en[115]=et):et=en[115];let to=et;en[116]!==f||en[117]!==to||en[118]!==g?(er=f&&(g?(0,eP.jsx)(oB,{__unstable_name:"string"==typeof g?g:void 0,children:to}):to),en[116]=f,en[117]=to,en[118]=g,en[119]=er):er=en[119];let ta=er;return en[120]!==eR||en[121]!==ta?(eo=eR?(0,eP.jsx)(eq.AnimatePresence,{children:ta}):ta,en[120]=eR,en[121]=ta,en[122]=eo):eo=en[122],en[123]!==tt||en[124]!==eo?(ea=(0,eP.jsxs)(eP.Fragment,{children:[eo,tt]}),en[123]=tt,en[124]=eo,en[125]=ea):ea=en[125],ea});o3.displayName="ForwardRef(Popover)";let o5=eW.styled.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return eW.css`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),o4=eW.styled.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:r}=T(e.theme),o=(r.radio.size-r.radio.markSize)/2;return eW.css`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${to(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${to(r.radio.size)};
      width: ${to(r.radio.size)};
      border-radius: ${to(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${tP({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${to(o)};
        left: ${to(o)};
        height: ${to(r.radio.markSize)};
        width: ${to(r.radio.markSize)};
        border-radius: ${to(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tD({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${tP({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tP({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),o6=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eD.c)(19);f[0]!==e?({className:r,disabled:a,style:d,customValidity:o,readOnly:n,...i}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6]);let b=(0,eV.useRef)(null);f[7]===Symbol.for("react.memo_cache_sentinel")?(l=()=>b.current,f[7]=l):l=f[7],(0,eV.useImperativeHandle)(t,l),rY(b,o);let g=!a&&n?"":void 0,p=o?"":void 0,h=a||n;return f[8]!==n||f[9]!==i||f[10]!==g||f[11]!==p||f[12]!==h?(s=(0,eP.jsx)(o4,{"data-read-only":g,"data-error":p,...i,disabled:h,readOnly:n,ref:b,type:"radio"}),f[8]=n,f[9]=i,f[10]=g,f[11]=p,f[12]=h,f[13]=s):s=f[13],f[14]===Symbol.for("react.memo_cache_sentinel")?(c=(0,eP.jsx)("span",{}),f[14]=c):c=f[14],f[15]!==r||f[16]!==d||f[17]!==s?(u=(0,eP.jsxs)(o5,{className:r,"data-ui":"Radio",style:d,children:[s,c]}),f[15]=r,f[16]=d,f[17]=s,f[18]=u):u=f[18],u});function o7(e){let{font:t}=T(e.theme);return eW.css`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function o8(e){let{color:t,input:r}=T(e.theme);return eW.css`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${tP({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${tP({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tD({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${tP({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${tP({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function o9(e){let{$fontSize:t}=e,{font:r,media:o}=T(e.theme);return ta(o,t,e=>{var t;return{fontSize:to((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:`${to(t.lineHeight)}`}})}o6.displayName="ForwardRef(Radio)";let ae=eW.styled.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(function(){return eW.css`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),at=eW.styled.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(function(){return[ri,o7,o8,o9,t9]}),ar=(0,eW.styled)(rj).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(function(e){let{color:t}=T(e.theme);return eW.css`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),ao=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k=(0,eD.c)(37);k[0]!==e?({children:r,customValidity:o,disabled:a,fontSize:d,padding:l,radius:s,readOnly:n,space:c,...i}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=a,k[4]=n,k[5]=i,k[6]=d,k[7]=l,k[8]=s,k[9]=c):(r=k[1],o=k[2],a=k[3],n=k[4],i=k[5],d=k[6],l=k[7],s=k[8],c=k[9]);let x=void 0===d?2:d,$=void 0===l?3:l,S=void 0===s?2:s,_=void 0===c?3:c,R=(0,eV.useRef)(null);k[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>R.current,k[10]=u):u=k[10],(0,eV.useImperativeHandle)(t,u),rY(R,o);let j=!a&&n?"":void 0;k[11]!==x?(f=tn(x),k[11]=x,k[12]=f):f=k[12],k[13]!==$?(b=tn($),k[13]=$,k[14]=b):b=k[14],k[15]!==S?(g=tn(S),k[15]=S,k[16]=g):g=k[16],k[17]!==_?(p=tn(_),k[17]=_,k[18]=p):p=k[18];let z=a||n;return k[19]!==r||k[20]!==i||k[21]!==z||k[22]!==j||k[23]!==f||k[24]!==b||k[25]!==g||k[26]!==p?(h=(0,eP.jsx)(at,{"data-read-only":j,"data-ui":"Select",...i,$fontSize:f,$padding:b,$radius:g,$space:p,disabled:z,ref:R,children:r}),k[19]=r,k[20]=i,k[21]=z,k[22]=j,k[23]=f,k[24]=b,k[25]=g,k[26]=p,k[27]=h):h=k[27],k[28]===Symbol.for("react.memo_cache_sentinel")?(m=(0,eP.jsx)(eY.ChevronDownIcon,{}),k[28]=m):m=k[28],k[29]!==x?(y=(0,eP.jsx)(rC,{size:x,children:m}),k[29]=x,k[30]=y):y=k[30],k[31]!==$||k[32]!==y?(v=(0,eP.jsx)(ar,{padding:$,children:y}),k[31]=$,k[32]=y,k[33]=v):v=k[33],k[34]!==h||k[35]!==v?(w=(0,eP.jsxs)(ae,{"data-ui":"Select",children:[h,v]}),k[34]=h,k[35]=v,k[36]=w):w=k[36],w});ao.displayName="ForwardRef(Select)";let aa={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},an=(0,eW.styled)(rj).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return aa},function(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$space,e=>({gridGap:to(r[e])}))}),ai=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eD.c)(12);d[0]!==e?({as:r,space:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l="string"==typeof r?r:void 0;return d[4]!==a?(n=tn(a),d[4]=a,d[5]=n):n=d[5],d[6]!==r||d[7]!==t||d[8]!==o||d[9]!==l||d[10]!==n?(i=(0,eP.jsx)(an,{"data-as":l,"data-ui":"Stack",...o,$space:n,forwardedAs:r,ref:t}),d[6]=r,d[7]=t,d[8]=o,d[9]=l,d[10]=n,d[11]=i):i=d[11],i});ai.displayName="ForwardRef(Stack)";let ad=eW.styled.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return eW.css`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),al=eW.styled.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return eW.css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),as=eW.styled.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:r}=T(e.theme);return eW.css`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${to(r.switch.width)};
    height: ${to(r.switch.height)};
    border-radius: ${to(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tD({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),ac=eW.styled.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=T(e.theme);return eW.css`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${to(t.switch.width)};
    height: ${to(t.switch.height)};
    border-radius: ${to(t.switch.height/2)};
  `}),au=eW.styled.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:r}=T(e.theme),o=r.switch.width,a=r.switch.height,n=r.switch.padding,i=a-2*r.switch.padding,d=o-2*n-i,l=o/2-i/2-n,s=!0!==t&&!0===e.$checked;return eW.css`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${to(n)};
    top: ${to(n)};
    height: ${to(i)};
    width: ${to(i)};
    border-radius: ${to(i/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${s&&eW.css`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&eW.css`
      transform: translate3d(${l}px, 0, 0);
    `}
  `}),af=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h=(0,eD.c)(26);h[0]!==e?({checked:r,className:o,disabled:a,indeterminate:n,readOnly:i,style:l,...d}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=a,h[4]=n,h[5]=i,h[6]=d,h[7]=l):(r=h[1],o=h[2],a=h[3],n=h[4],i=h[5],d=h[6],l=h[7]);let m=(0,eV.useRef)(null);h[8]===Symbol.for("react.memo_cache_sentinel")?(s=()=>m.current,h[8]=s):s=h[8],(0,eV.useImperativeHandle)(t,s),h[9]!==n?(c=()=>{m.current&&(m.current.indeterminate=n||!1)},u=[n],h[9]=n,h[10]=c,h[11]=u):(c=h[10],u=h[11]),(0,eV.useEffect)(c,u);let y=!a&&i?"":void 0,v=!0!==n&&r,w=a||i;return h[12]!==d||h[13]!==y||h[14]!==v||h[15]!==w?(f=(0,eP.jsx)(al,{"data-read-only":y,...d,checked:v,disabled:w,type:"checkbox",ref:m}),h[12]=d,h[13]=y,h[14]=v,h[15]=w,h[16]=f):f=h[16],h[17]===Symbol.for("react.memo_cache_sentinel")?(b=(0,eP.jsx)(ac,{}),h[17]=b):b=h[17],h[18]!==r||h[19]!==n?(g=(0,eP.jsxs)(as,{"aria-hidden":!0,"data-name":"representation",children:[b,(0,eP.jsx)(au,{$checked:r,$indeterminate:n})]}),h[18]=r,h[19]=n,h[20]=g):g=h[20],h[21]!==o||h[22]!==l||h[23]!==f||h[24]!==g?(p=(0,eP.jsxs)(ad,{className:o,"data-ui":"Switch",style:l,children:[f,g]}),h[21]=o,h[22]=l,h[23]=f,h[24]=g,h[25]=p):p=h[25],p});af.displayName="ForwardRef(Switch)";let ab=eW.styled.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(rt),ag=eW.styled.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,ap=eW.styled.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(t8,rr,ro),ah=eW.styled.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(ri,ra),am=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v=(0,eD.c)(35);v[0]!==e?({border:n,customValidity:o,disabled:i,fontSize:d,padding:l,radius:s,weight:c,__unstable_disableFocusRing:r,...a}=e,v[0]=e,v[1]=r,v[2]=o,v[3]=a,v[4]=n,v[5]=i,v[6]=d,v[7]=l,v[8]=s,v[9]=c):(r=v[1],o=v[2],a=v[3],n=v[4],i=v[5],d=v[6],l=v[7],s=v[8],c=v[9]);let w=void 0===n||n,k=void 0!==i&&i,x=void 0===d?2:d,$=void 0===l?3:l,S=void 0===s?2:s,_=(0,eV.useRef)(null),R=tm();v[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>_.current,v[10]=u):u=v[10],(0,eV.useImperativeHandle)(t,u),rY(_,o);let j=R.scheme,z=R.tone;v[11]!==x?(f=tn(x),v[11]=x,v[12]=f):f=v[12],v[13]!==$?(b=tn($),v[13]=$,v[14]=b):b=v[14];let C=R.scheme;v[15]===Symbol.for("react.memo_cache_sentinel")?(g=tn(0),v[15]=g):g=v[15],v[16]!==k||v[17]!==a||v[18]!==R.scheme||v[19]!==R.tone||v[20]!==f||v[21]!==b||v[22]!==c?(p=(0,eP.jsx)(ap,{"data-as":"textarea","data-scheme":j,"data-tone":z,...a,$fontSize:f,$padding:b,$scheme:C,$space:g,$tone:R.tone,$weight:c,disabled:k,ref:_}),v[16]=k,v[17]=a,v[18]=R.scheme,v[19]=R.tone,v[20]=f,v[21]=b,v[22]=c,v[23]=p):p=v[23],v[24]!==S?(h=tn(S),v[24]=S,v[25]=h):h=v[25];let E=w?"":void 0;return v[26]!==r||v[27]!==R.scheme||v[28]!==R.tone||v[29]!==h||v[30]!==E?(m=(0,eP.jsx)(ah,{$radius:h,$unstableDisableFocusRing:r,$scheme:R.scheme,$tone:R.tone,"data-border":E,"data-scheme":R.scheme,"data-tone":R.tone}),v[26]=r,v[27]=R.scheme,v[28]=R.tone,v[29]=h,v[30]=E,v[31]=m):m=v[31],v[32]!==p||v[33]!==m?(y=(0,eP.jsx)(ab,{"data-ui":"TextArea",children:(0,eP.jsxs)(ag,{children:[p,m]})}),v[32]=p,v[33]=m,v[34]=y):y=v[34],y});am.displayName="ForwardRef(TextArea)";let ay={zIndex:2},av=(0,eW.styled)(rV).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(rt),aw=eW.styled.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,ak=(0,eW.styled)(rV).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,ax=(0,eW.styled)(rV).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,a$=eW.styled.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(t8,rr,ro),aS=eW.styled.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(ri,ra),a_=(0,eW.styled)(rj).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,aR=(0,eW.styled)(rj).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,aj=(0,eW.styled)(rV).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,az=(0,eW.styled)(rP).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),aC=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L=(0,eD.c)(92);L[0]!==e?({__unstable_disableFocusRing:a,border:f,clearButton:n,disabled:b,fontSize:g,icon:r,iconRight:o,onClear:d,padding:p,prefix:l,radius:h,readOnly:s,space:m,suffix:u,customValidity:i,type:y,weight:v,...c}=e,L[0]=e,L[1]=r,L[2]=o,L[3]=a,L[4]=n,L[5]=i,L[6]=d,L[7]=l,L[8]=s,L[9]=c,L[10]=u,L[11]=f,L[12]=b,L[13]=g,L[14]=p,L[15]=h,L[16]=m,L[17]=y,L[18]=v):(r=L[1],o=L[2],a=L[3],n=L[4],i=L[5],d=L[6],l=L[7],s=L[8],c=L[9],u=L[10],f=L[11],b=L[12],g=L[13],p=L[14],h=L[15],m=L[16],y=L[17],v=L[18]);let F=void 0===f||f,A=void 0!==b&&b,B=void 0===g?2:g,P=void 0===p?3:p,D=void 0===h?2:h,V=void 0===m?3:m,W=void 0===y?"text":y,G=(0,eV.useRef)(null),Y=tm();L[19]!==B?(w=tn(B),L[19]=B,L[20]=w):w=L[20];let K=w;L[21]!==P?(k=tn(P),L[21]=P,L[22]=k):k=L[22];let U=k;L[23]!==D?(x=tn(D),L[23]=D,L[24]=x):x=L[24];let X=x;L[25]!==V?($=tn(V),L[25]=V,L[26]=$):$=L[26];let q=$,Q=!!n,Z=!!r,J=!!o,ee=!!u,et=!!l;L[27]===Symbol.for("react.memo_cache_sentinel")?(S=()=>G.current,L[27]=S):S=L[27],(0,eV.useImperativeHandle)(t,S),rY(G,i),L[28]!==d?(_=e=>{e.preventDefault(),e.stopPropagation(),d&&d(),G.current?.focus()},L[28]=d,L[29]=_):_=L[29];let er=_;L[30]!==l||L[31]!==X?(R=l&&(0,eP.jsx)(ak,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:X,sizing:"border",tone:"inherit",children:(0,eP.jsx)("span",{children:l})}),L[30]=l,L[31]=X,L[32]=R):R=L[32];let eo=R,ea=F?"":void 0;L[33]!==r||L[34]!==K||L[35]!==U?(j=r&&(0,eP.jsx)(a_,{padding:U,children:(0,eP.jsxs)(rC,{size:K,children:[(0,eV.isValidElement)(r)&&r,(0,eG.isValidElementType)(r)&&(0,eP.jsx)(r,{})]})}),L[33]=r,L[34]=K,L[35]=U,L[36]=j):j=L[36],L[37]!==Q||L[38]!==o||L[39]!==K||L[40]!==U?(z=!Q&&o&&(0,eP.jsx)(aR,{padding:U,children:(0,eP.jsxs)(rC,{size:K,children:[(0,eV.isValidElement)(o)&&o,(0,eG.isValidElementType)(o)&&(0,eP.jsx)(o,{})]})}),L[37]=Q,L[38]=o,L[39]=K,L[40]=U,L[41]=z):z=L[41],L[42]!==et||L[43]!==ee||L[44]!==a||L[45]!==X||L[46]!==Y.scheme||L[47]!==Y.tone||L[48]!==ea||L[49]!==j||L[50]!==z?(C=(0,eP.jsxs)(aS,{$hasPrefix:et,$unstableDisableFocusRing:a,$hasSuffix:ee,$radius:X,$scheme:Y.scheme,$tone:Y.tone,"data-border":ea,"data-scheme":Y.scheme,"data-tone":Y.tone,children:[j,z]}),L[42]=et,L[43]=ee,L[44]=a,L[45]=X,L[46]=Y.scheme,L[47]=Y.tone,L[48]=ea,L[49]=j,L[50]=z,L[51]=C):C=L[51];let en=C;L[52]!==U?(E=U.map(aI),L[52]=U,L[53]=E):E=L[53];let ei=E;L[54]!==U?(I=U.map(aM),L[54]=U,L[55]=I):I=L[55];let ed=I,el="object"==typeof n?n:e3;L[56]!==n||L[57]!==ei||L[58]!==ed||L[59]!==el||L[60]!==i||L[61]!==A||L[62]!==K||L[63]!==er||L[64]!==X||L[65]!==s?(M=!A&&!s&&n&&(0,eP.jsx)(aj,{forwardedAs:"span",padding:ei,style:ay,tone:i?"critical":"inherit",children:(0,eP.jsx)(az,{"aria-label":"Clear","data-qa":"clear-button",fontSize:K,icon:eY.CloseIcon,mode:"bleed",padding:ed,radius:X,...el,onClick:er,onMouseDown:aE})}),L[56]=n,L[57]=ei,L[58]=ed,L[59]=el,L[60]=i,L[61]=A,L[62]=K,L[63]=er,L[64]=X,L[65]=s,L[66]=M):M=L[66];let es=M;L[67]!==X||L[68]!==u?(N=u&&(0,eP.jsx)(ax,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:X,sizing:"border",tone:"inherit",children:(0,eP.jsx)("span",{children:u})}),L[67]=X,L[68]=u,L[69]=N):N=L[69];let ec=N,eu=J||Q;return L[70]!==Z||L[71]!==A||L[72]!==K||L[73]!==U||L[74]!==s||L[75]!==c||L[76]!==Y.scheme||L[77]!==Y.tone||L[78]!==q||L[79]!==eu||L[80]!==W||L[81]!==v?(H=(0,eP.jsx)(a$,{"data-as":"input","data-scheme":Y.scheme,"data-tone":Y.tone,...c,$fontSize:K,$iconLeft:Z,$iconRight:eu,$padding:U,$scheme:Y.scheme,$space:q,$tone:Y.tone,$weight:v,disabled:A,readOnly:s,ref:G,type:W}),L[70]=Z,L[71]=A,L[72]=K,L[73]=U,L[74]=s,L[75]=c,L[76]=Y.scheme,L[77]=Y.tone,L[78]=q,L[79]=eu,L[80]=W,L[81]=v,L[82]=H):H=L[82],L[83]!==es||L[84]!==en||L[85]!==H?(T=(0,eP.jsxs)(aw,{children:[H,en,es]}),L[83]=es,L[84]=en,L[85]=H,L[86]=T):T=L[86],L[87]!==eo||L[88]!==Y.tone||L[89]!==ec||L[90]!==T?(O=(0,eP.jsxs)(av,{"data-ui":"TextInput",tone:Y.tone,children:[eo,T,ec]}),L[87]=eo,L[88]=Y.tone,L[89]=ec,L[90]=T,L[91]=O):O=L[91],O});function aE(e){e.preventDefault(),e.stopPropagation()}function aI(e){return 0===e?0:1===e||2===e?1:e-2}function aM(e){return 0===e||1===e?0:2===e?1:e-1}function aN(e){let t,r,o=(0,eD.c)(3),[a,n]=(0,eV.useState)(e),i=(0,eV.useRef)(void 0);o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let r=()=>{n(e)};if(i.current&&(clearTimeout(i.current),i.current=void 0),!t)return r();i.current=setTimeout(r,t)},o[0]=t):t=o[0];let d=t;return o[1]!==a?(r=[a,d],o[1]=a,o[2]=r):r=o[2],r}aC.displayName="ForwardRef(TextInput)";let aH={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},aT=(0,eW.styled)(eX.motion.create(rV)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,aO=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S=(0,eD.c)(48);S[0]!==e?({animate:r,arrow:o,arrowRef:a,arrowX:n,arrowY:i,children:d,originX:l,originY:s,padding:c,placement:u,radius:f,scheme:g,shadow:p,style:h,...b}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=a,S[4]=n,S[5]=i,S[6]=d,S[7]=l,S[8]=s,S[9]=c,S[10]=u,S[11]=f,S[12]=b,S[13]=g,S[14]=p,S[15]=h):(r=S[1],o=S[2],a=S[3],n=S[4],i=S[5],d=S[6],l=S[7],s=S[8],c=S[9],u=S[10],f=S[11],b=S[12],g=S[13],p=S[14],h=S[15]);let _=r?"transform":void 0;S[16]!==l||S[17]!==s||S[18]!==h||S[19]!==_?(m={originX:l,originY:s,willChange:_,...h},S[16]=l,S[17]=s,S[18]=h,S[19]=_,S[20]=m):m=S[20];let R=m,j=null!==n?n:void 0,z=null!==i?i:void 0;S[21]!==j||S[22]!==z?(y={left:j,top:z,right:void 0,bottom:void 0},S[21]=j,S[22]=z,S[23]=y):y=S[23];let C=y,E=b;return S[24]!==r?(v=r?["hidden","initial"]:void 0,S[24]=r,S[25]=v):v=S[25],S[26]!==r?(w=r?["visible","scaleIn"]:void 0,S[26]=r,S[27]=w):w=S[27],S[28]!==r?(k=r?["hidden","scaleOut"]:void 0,S[28]=r,S[29]=k):k=S[29],S[30]!==o||S[31]!==a||S[32]!==C?(x=o&&(0,eP.jsx)(ov,{ref:a,style:C,width:15,height:6,radius:2}),S[30]=o,S[31]=a,S[32]=C,S[33]=x):x=S[33],S[34]!==d||S[35]!==c||S[36]!==u||S[37]!==f||S[38]!==t||S[39]!==R||S[40]!==g||S[41]!==p||S[42]!==E||S[43]!==v||S[44]!==w||S[45]!==k||S[46]!==x?($=(0,eP.jsxs)(aT,{"data-ui":"Tooltip__card",...E,"data-placement":u,padding:c,radius:f,ref:t,scheme:g,shadow:p,style:R,variants:e5,transition:e6,initial:v,animate:w,exit:k,children:[d,x]}),S[34]=d,S[35]=c,S[36]=u,S[37]=f,S[38]=t,S[39]=R,S[40]=g,S[41]=p,S[42]=E,S[43]=v,S[44]=w,S[45]=k,S[46]=x,S[47]=$):$=S[47],$});aO.displayName="ForwardRef(TooltipCard)";let aL=tg("@sanity/ui/context/tooltipDelayGroup",null);function aF(e){let t,r,o=(0,eD.c)(9),{children:a,delay:n}=e,[i,d]=aN(!1),[l,s]=aN(null),c="number"==typeof n?n:n?.open||0,u="number"==typeof n?n:n?.close||0,f=i?1:c;o[0]!==u||o[1]!==l||o[2]!==d||o[3]!==s||o[4]!==f?(t={setIsGroupActive:d,openTooltipId:l,setOpenTooltipId:s,openDelay:f,closeDelay:u},o[0]=u,o[1]=l,o[2]=d,o[3]=s,o[4]=f,o[5]=t):t=o[5];let b=t;return o[6]!==a||o[7]!==b?(r=(0,eP.jsx)(aL.Provider,{value:b,children:a}),o[6]=a,o[7]=b,o[8]=r):r=o[8],r}function aA(){return(0,eV.useContext)(aL)}aF.displayName="TooltipDelayGroupProvider";let aB=(0,eW.styled)(oT).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,aP=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L,F,A,B,P,D,V,W,G,Y,K,U,X,q,Q,Z=(0,eD.c)(137),J=oS(),{layer:ee}=tv();Z[0]!==e?({animate:f,arrow:b,boundaryElement:r,children:n,content:i,disabled:l,fallbackPlacements:o,padding:g,placement:p,portal:s,radius:h,scheme:u,shadow:m,zOffset:a,delay:d,...c}=e,Z[0]=e,Z[1]=r,Z[2]=o,Z[3]=a,Z[4]=n,Z[5]=i,Z[6]=d,Z[7]=l,Z[8]=s,Z[9]=c,Z[10]=u,Z[11]=f,Z[12]=b,Z[13]=g,Z[14]=p,Z[15]=h,Z[16]=m):(r=Z[1],o=Z[2],a=Z[3],n=Z[4],i=Z[5],d=Z[6],l=Z[7],s=Z[8],c=Z[9],u=Z[10],f=Z[11],b=Z[12],g=Z[13],p=Z[14],h=Z[15],m=Z[16]);let et=void 0!==f&&f,er=void 0!==b&&b,eo=void 0===g?2:g,ea=void 0===p?"bottom":p,en=void 0===h?2:h,ei=void 0===m?2:m,ed=r??J?.element,el=o??aH[e.placement??"bottom"],es=a??ee.tooltip.zOffset,ec=!r1()&&et;Z[17]!==el?(y=tn(el),Z[17]=el,Z[18]=y):y=Z[18];let eu=y,ef=(0,eV.useRef)(null),[eb,eg]=(0,eV.useState)(null),ep=(0,eV.useRef)(null),[eh,em]=(0,eV.useState)(0);Z[19]===Symbol.for("react.memo_cache_sentinel")?(v=()=>ef.current,Z[19]=v):v=Z[19],(0,eV.useImperativeHandle)(t,v);let ey=oA(),ev="string"==typeof s?ey.elements?.[s]||null:ey.element;Z[20]!==ec||Z[21]!==er||Z[22]!==ed||Z[23]!==eu?(w={animate:ec,arrowProp:er,arrowRef:ep,boundaryElement:ed,fallbackPlacements:eu,rootBoundary:"viewport"},Z[20]=ec,Z[21]=er,Z[22]=ed,Z[23]=eu,Z[24]=w):w=Z[24];let ew=function(e){let t,r=(0,eD.c)(17),{animate:o,arrowProp:a,arrowRef:n,boundaryElement:i,fallbackPlacements:d,rootBoundary:l}=e;if(r[0]!==o||r[1]!==a||r[2]!==n||r[3]!==i||r[4]!==d||r[5]!==l){let e,s,c;t=[];let u=i||void 0;r[7]!==d||r[8]!==l||r[9]!==u?(e=(0,eU.flip)({boundary:u,fallbackPlacements:d,padding:4,rootBoundary:l}),r[7]=d,r[8]=l,r[9]=u,r[10]=e):e=r[10],t.push(e),r[11]===Symbol.for("react.memo_cache_sentinel")?(s=(0,eU.offset)({mainAxis:4}),r[11]=s):s=r[11],t.push(s);let f=i||void 0;if(r[12]!==l||r[13]!==f?(c=(0,eU.shift)({boundary:f,rootBoundary:l,padding:4}),r[12]=l,r[13]=f,r[14]=c):c=r[14],t.push(c),a){let e;r[15]!==n?(e=(0,eU.arrow)({element:n,padding:4}),r[15]=n,r[16]=e):e=r[16],t.push(e)}o&&t.push(of),r[0]=o,r[1]=a,r[2]=n,r[3]=i,r[4]=d,r[5]=l,r[6]=t}else t=r[6];return t}(w);Z[25]!==eb?(k={reference:eb},Z[25]=eb,Z[26]=k):k=Z[26],Z[27]!==ew||Z[28]!==ea||Z[29]!==k?(x={middleware:ew,placement:ea,whileElementsMounted:eK.autoUpdate,elements:k},Z[27]=ew,Z[28]=ea,Z[29]=k,Z[30]=x):x=Z[30];let{floatingStyles:ek,placement:ex,middlewareData:e$,refs:eS,update:e_}=(0,eU.useFloating)(x),eR=e$.arrow?.x,ej=e$.arrow?.y,ez=e$["@sanity/ui/origin"]?.originX,eC=e$["@sanity/ui/origin"]?.originY,eE=(0,eV.useId)(),[eI,eM]=aN(!1),eN=aA();Z[31]!==eN?($=eN||{},Z[31]=eN,Z[32]=$):$=Z[32];let{setIsGroupActive:eH,setOpenTooltipId:eT}=$,eO=eI||eN?.openTooltipId===eE,eL=null!==eN,eF="number"==typeof d?d:d?.open||0,eA="number"==typeof d?d:d?.close||0,eB=eL?eN.openDelay:eF,eW=eL?eN.closeDelay:eA;Z[33]!==eW||Z[34]!==eL||Z[35]!==eB||Z[36]!==eH||Z[37]!==eM||Z[38]!==eT||Z[39]!==eE?(S=(e,t)=>{if(eL)if(e){let r=t?0:eB;eH?.(e,r),eT?.(eE,r)}else{let r=eW>200?eW:200;eH?.(e,r),eT?.(null,t?0:eW)}else eM(e,t?0:e?eB:eW)},Z[33]=eW,Z[34]=eL,Z[35]=eB,Z[36]=eH,Z[37]=eM,Z[38]=eT,Z[39]=eE,Z[40]=S):S=Z[40];let eG=S;Z[41]!==n?.props||Z[42]!==eG?(_=e=>{eG(!1),n?.props?.onBlur?.(e)},Z[41]=n?.props,Z[42]=eG,Z[43]=_):_=Z[43];let eY=_;Z[44]!==n?.props||Z[45]!==eG?(R=e=>{eG(!1,!0),n?.props.onClick?.(e)},Z[44]=n?.props,Z[45]=eG,Z[46]=R):R=Z[46];let eX=R;Z[47]!==n?.props||Z[48]!==eG?(j=e=>{eG(!1,!0),n?.props.onContextMenu?.(e)},Z[47]=n?.props,Z[48]=eG,Z[49]=j):j=Z[49];let eQ=j;Z[50]!==n?.props||Z[51]!==eG?(z=e=>{eG(!0),n?.props?.onFocus?.(e)},Z[50]=n?.props,Z[51]=eG,Z[52]=z):z=Z[52];let eZ=z;Z[53]!==n?.props||Z[54]!==eG?(C=e=>{eG(!0),n?.props?.onMouseEnter?.(e)},Z[53]=n?.props,Z[54]=eG,Z[55]=C):C=Z[55];let e0=C;Z[56]!==n?.props||Z[57]!==eG?(E=e=>{eG(!1),n?.props?.onMouseLeave?.(e)},Z[56]=n?.props,Z[57]=eG,Z[58]=E):E=Z[58];let e1=E;Z[59]!==eG||Z[60]!==eL||Z[61]!==eb||Z[62]!==eO?(I={handleIsOpenChange:eG,referenceElement:eb,showTooltip:eO,isInsideGroup:eL},Z[59]=eG,Z[60]=eL,Z[61]=eb,Z[62]=eO,Z[63]=I):I=Z[63],function(e){let t,r,o,a=(0,eD.c)(10),{handleIsOpenChange:n,referenceElement:i,showTooltip:d,isInsideGroup:l}=e;a[0]!==n||a[1]!==i?(t=(e,t)=>{i&&(i===e||e instanceof Node&&i.contains(e)||(n(!1),t()))},a[0]=n,a[1]=i,a[2]=t):t=a[2];let s=(0,eJ.useEffectEvent)(t);a[3]!==l||a[4]!==s||a[5]!==d?(r=()=>{if(!d||l)return;let e=t=>{s(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},a[3]=l,a[4]=s,a[5]=d,a[6]=r):r=a[6],a[7]!==l||a[8]!==d?(o=[l,d],a[7]=l,a[8]=d,a[9]=o):o=a[9],(0,eV.useEffect)(r,o)}(I),Z[64]!==l||Z[65]!==eG||Z[66]!==eO?(M=()=>{l&&eO&&eG(!1)},N=[l,eG,eO],Z[64]=l,Z[65]=eG,Z[66]=eO,Z[67]=M,Z[68]=N):(M=Z[67],N=Z[68]),(0,eV.useEffect)(M,N),Z[69]!==i||Z[70]!==eG||Z[71]!==eO?(H=()=>{!i&&eO&&eG(!1)},T=[i,eG,eO],Z[69]=i,Z[70]=eG,Z[71]=eO,Z[72]=H,Z[73]=T):(H=Z[72],T=Z[73]),(0,eV.useEffect)(H,T),Z[74]!==eG||Z[75]!==eO?(O=()=>{if(!eO)return;let e=function(e){"Escape"===e.key&&eG(!1,!0)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},L=[eG,eO],Z[74]=eG,Z[75]=eO,Z[76]=O,Z[77]=L):(O=Z[76],L=Z[77]),(0,eV.useEffect)(O,L),Z[78]!==ed||Z[79]!==ev?.offsetWidth?(F=()=>{em(Math.min(...ed?[ed.offsetWidth]:[],ev?.offsetWidth||document.body.offsetWidth)-8)},Z[78]=ed,Z[79]=ev?.offsetWidth,Z[80]=F):F=Z[80],Z[81]!==ed||Z[82]!==ev?(A=[ed,ev],Z[81]=ed,Z[82]=ev,Z[83]=A):A=Z[83],(0,eV.useLayoutEffect)(F,A),Z[84]!==e_?(B=e=>{ep.current=e,e_()},Z[84]=e_,Z[85]=B):B=Z[85];let e2=B;Z[86]!==eS?(P=e=>{ef.current=e,eS.setFloating(e)},Z[86]=eS,Z[87]=P):P=Z[87];let e3=P;e:{let e;if(!n){D=null;break e}Z[88]!==n||Z[89]!==eY||Z[90]!==eX||Z[91]!==eQ||Z[92]!==eZ||Z[93]!==e0||Z[94]!==e1?(e=(0,eV.cloneElement)(n,{onBlur:eY,onFocus:eZ,onMouseEnter:e0,onMouseLeave:e1,onClick:eX,onContextMenu:eQ,ref:eg}),Z[88]=n,Z[89]=eY,Z[90]=eX,Z[91]=eQ,Z[92]=eZ,Z[93]=e0,Z[94]=e1,Z[95]=e):e=Z[95],D=e}let e5=D;if(Z[96]!==n?(V=n?oq(n):null,Z[96]=n,Z[97]=V):V=Z[97],Z[98]!==eb?(W=()=>eb,G=[eb],Z[98]=eb,Z[99]=W,Z[100]=G):(W=Z[99],G=Z[100]),(0,eV.useImperativeHandle)(V,W,G),!e5){let e;return Z[101]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eP.jsx)(eP.Fragment,{}),Z[101]=e):e=Z[101],e}if(l)return e5;let e4=eh>0?`${eh}px`:void 0;Z[102]!==ek||Z[103]!==e4?(Y={...ek,maxWidth:e4},Z[102]=ek,Z[103]=e4,Z[104]=Y):Y=Z[104],Z[105]!==ec||Z[106]!==er||Z[107]!==eR||Z[108]!==ej||Z[109]!==i||Z[110]!==ez||Z[111]!==eC||Z[112]!==eo||Z[113]!==ex||Z[114]!==en||Z[115]!==c||Z[116]!==u||Z[117]!==e2||Z[118]!==e3||Z[119]!==ei?(K=(0,eP.jsx)(aO,{...c,animate:ec,arrow:er,arrowRef:e2,arrowX:eR,arrowY:ej,originX:ez,originY:eC,padding:eo,placement:ex,radius:en,ref:e3,scheme:u,shadow:ei,children:i}),Z[105]=ec,Z[106]=er,Z[107]=eR,Z[108]=ej,Z[109]=i,Z[110]=ez,Z[111]=eC,Z[112]=eo,Z[113]=ex,Z[114]=en,Z[115]=c,Z[116]=u,Z[117]=e2,Z[118]=e3,Z[119]=ei,Z[120]=K):K=Z[120],Z[121]!==c||Z[122]!==e3||Z[123]!==Y||Z[124]!==K||Z[125]!==es?(U=(0,eP.jsx)(aB,{"data-ui":"Tooltip",...c,ref:e3,style:Y,zOffset:es,children:K}),Z[121]=c,Z[122]=e3,Z[123]=Y,Z[124]=K,Z[125]=es,Z[126]=U):U=Z[126];let e6=U;Z[127]!==s||Z[128]!==eO||Z[129]!==e6?(X=eO&&(s?(0,eP.jsx)(oB,{__unstable_name:"string"==typeof s?s:void 0,children:e6}):e6),Z[127]=s,Z[128]=eO,Z[129]=e6,Z[130]=X):X=Z[130];let e7=X;return Z[131]!==ec||Z[132]!==e7?(q=ec?(0,eP.jsx)(eq.AnimatePresence,{children:e7}):e7,Z[131]=ec,Z[132]=e7,Z[133]=q):q=Z[133],Z[134]!==e5||Z[135]!==q?(Q=(0,eP.jsxs)(eP.Fragment,{children:[q,e5]}),Z[134]=e5,Z[135]=q,Z[136]=Q):Q=Z[136],Q});aP.displayName="ForwardRef(Tooltip)";let aD=eW.styled.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,aV=(0,eW.styled)(ou).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,aW=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eD.c)(26);f[0]!==e?({fontSize:r,keys:o,padding:a,radius:n,space:d,...i}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6]);let b=void 0===d?.5:d;f[7]!==b?(l=tn(b),f[7]=b,f[8]=l):l=f[8];let g=l;if(!o||0===o.length){let e;return f[9]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eP.jsx)(eP.Fragment,{}),f[9]=e):e=f[9],e}if(f[10]!==r||f[11]!==o||f[12]!==a||f[13]!==n){let e;f[15]!==r||f[16]!==a||f[17]!==n?(e=(e,t)=>(0,eP.jsx)(aV,{fontSize:r,padding:a,radius:n,children:e},t),f[15]=r,f[16]=a,f[17]=n,f[18]=e):e=f[18],s=o.map(e),f[10]=r,f[11]=o,f[12]=a,f[13]=n,f[14]=s}else s=f[14];return f[19]!==g||f[20]!==s?(c=(0,eP.jsx)(ol,{as:"span",space:g,children:s}),f[19]=g,f[20]=s,f[21]=c):c=f[21],f[22]!==t||f[23]!==i||f[24]!==c?(u=(0,eP.jsx)(aD,{"data-ui":"Hotkeys",...i,ref:t,children:c}),f[22]=t,f[23]=i,f[24]=c,f[25]=u):u=f[25],u});aW.displayName="ForwardRef(Hotkeys)";let aG=tg("@sanity/ui/context/menu",null);function aY(e){return e8(e)&&"true"!==e.getAttribute("data-disabled")||e9(e)&&!e.disabled}function aK(e){return e.filter(aY)}let aU=[];function aX(){}let aq=(0,eW.styled)(rj).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,aQ=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_=(0,eD.c)(49);if(_[0]!==e){let{children:t,focusFirst:g,focusLast:p,onClickOutside:h,onEscape:m,onItemClick:y,onItemSelect:v,onKeyDown:w,originElement:k,padding:x,registerElement:$,shouldFocus:S,space:R,...j}=e;o=t,a=h,n=m,i=y,d=v,l=w,s=k,f=x,c=$,r=S,b=R,u=j,_[0]=e,_[1]=r,_[2]=o,_[3]=a,_[4]=n,_[5]=i,_[6]=d,_[7]=l,_[8]=s,_[9]=c,_[10]=u,_[11]=f,_[12]=b}else r=_[1],o=_[2],a=_[3],n=_[4],i=_[5],d=_[6],l=_[7],s=_[8],c=_[9],u=_[10],f=_[11],b=_[12];let R=void 0===f?1:f,j=void 0===b?1:b,z=r??(e.focusFirst&&"first"||e.focusLast&&"last"||null),C=(0,eV.useRef)(null);_[13]===Symbol.for("react.memo_cache_sentinel")?(g=()=>C.current,_[13]=g):g=_[13],(0,eV.useImperativeHandle)(t,g);let{isTopLayer:E}=oM();_[14]!==l||_[15]!==s||_[16]!==z?(p={onKeyDown:l,originElement:s,shouldFocus:z,rootElementRef:C},_[14]=l,_[15]=s,_[16]=z,_[17]=p):p=_[17];let{activeElement:I,activeIndex:M,handleItemMouseEnter:N,handleItemMouseLeave:H,handleKeyDown:T,mount:O}=function(e){let t,r,o,a,n,i,d,l,s,c=(0,eD.c)(21),{onKeyDown:u,originElement:f,shouldFocus:b,rootElementRef:g}=e;c[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],c[0]=t):t=c[0];let p=(0,eV.useRef)(t),[h,m]=(0,eV.useState)(-1),y=(0,eV.useRef)(h),[v,w]=(0,eV.useState)(null);c[1]===Symbol.for("react.memo_cache_sentinel")?(r=e=>{m(e),y.current=e,w(p.current[e]||null)},c[1]=r):r=c[1];let k=r;c[2]!==g?(o=(e,t)=>e?(-1===p.current.indexOf(e)&&(p.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let a=Array.from(t.childNodes).indexOf(o);if(r.unshift(a),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||aU,a=r.get(t)||aU,n=Math.max(o.length,a.length);for(let e=0;e<n;e+=1){let t=o[e]||-1,r=a[e]||-1;if(t!==r)return t-r}return 0})}(g.current,p.current)),t&&k(p.current.indexOf(e)),()=>{let t=p.current.indexOf(e);t>-1&&p.current.splice(t,1)}):aX,c[2]=g,c[3]=o):o=c[3];let x=o;c[4]!==u||c[5]!==f?(a=e=>{if("Tab"===e.key){f&&f.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=aK(p.current)[0];if(!t)return;k(p.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=aK(p.current),r=t[t.length-1];if(!r)return;k(p.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=aK(p.current),r=t.length;if(0===r)return;let o=p.current[y.current],a=t.indexOf(o),n=t[a=(a-1+r)%r];k(p.current.indexOf(n));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=aK(p.current),r=t.length;if(0===r)return;let o=p.current[y.current],a=t.indexOf(o),n=t[a=(a+1)%r];k(p.current.indexOf(n));return}u&&u(e)},c[4]=u,c[5]=f,c[6]=a):a=c[6];let $=a;c[7]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{let t=e.currentTarget;k(p.current.indexOf(t))},c[7]=n):n=c[7];let S=n;c[8]!==g?(i=()=>{k(-2),g.current?.focus()},c[8]=g,c[9]=i):i=c[9];let _=i;return c[10]!==h||c[11]!==g||c[12]!==b?(d=()=>{if(!g.current)return;let e=requestAnimationFrame(()=>{if(-1===h){if("first"===b){let e=aK(p.current)[0];e&&k(p.current.indexOf(e))}if("last"===b){let e=aK(p.current),t=e[e.length-1];t&&k(p.current.indexOf(t))}return}(p.current[h]||null)?.focus()});return()=>cancelAnimationFrame(e)},l=[h,g,k,b],c[10]=h,c[11]=g,c[12]=b,c[13]=d,c[14]=l):(d=c[13],l=c[14]),(0,eV.useEffect)(d,l),c[15]!==v||c[16]!==h||c[17]!==_||c[18]!==$||c[19]!==x?(s={activeElement:v,activeIndex:h,handleItemMouseEnter:S,handleItemMouseLeave:_,handleKeyDown:$,mount:x},c[15]=v,c[16]=h,c[17]=_,c[18]=$,c[19]=x,c[20]=s):s=c[20],s}(p),L=(0,eV.useRef)(null);_[18]!==c?(h=e=>{L.current&&(L.current(),L.current=null),C.current=e,C.current&&c&&(L.current=c(C.current))},_[18]=c,_[19]=h):h=_[19];let F=h;_[20]!==M||_[21]!==d?(m=()=>{d&&d(M)},y=[M,d],_[20]=M,_[21]=d,_[22]=m,_[23]=y):(m=_[22],y=_[23]),(0,eV.useEffect)(m,y),_[24]===Symbol.for("react.memo_cache_sentinel")?(v=()=>[C.current],_[24]=v):v=_[24],rW(E&&a,v),_[25]!==E||_[26]!==n?(w=e=>{E&&"Escape"===e.key&&(e.stopPropagation(),n&&n())},_[25]=E,_[26]=n,_[27]=w):w=_[27],rq(w),_[28]!==I||_[29]!==N||_[30]!==H||_[31]!==O||_[32]!==a||_[33]!==n||_[34]!==i||_[35]!==c?(k={version:2,activeElement:I,mount:O,onClickOutside:a,onEscape:n,onItemClick:i,onItemMouseEnter:N,onItemMouseLeave:H,registerElement:c},_[28]=I,_[29]=N,_[30]=H,_[31]=O,_[32]=a,_[33]=n,_[34]=i,_[35]=c,_[36]=k):k=_[36];let A=k;return _[37]!==o||_[38]!==j?(x=(0,eP.jsx)(ai,{space:j,children:o}),_[37]=o,_[38]=j,_[39]=x):x=_[39],_[40]!==T||_[41]!==F||_[42]!==R||_[43]!==u||_[44]!==x?($=(0,eP.jsx)(aq,{"data-ui":"Menu",...u,onKeyDown:T,padding:R,ref:F,role:"menu",tabIndex:-1,children:x}),_[40]=T,_[41]=F,_[42]=R,_[43]=u,_[44]=x,_[45]=$):$=_[45],_[46]!==$||_[47]!==A?(S=(0,eP.jsx)(aG.Provider,{value:A,children:$}),_[46]=$,_[47]=A,_[48]=S):S=_[48],S});aQ.displayName="ForwardRef(Menu)";let aZ=eW.styled.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;aZ.displayName="MenuDivider";let aJ=(0,eW.styled)(rj).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(ri,function(){return eW.css`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=T(e.theme),a=r.selectable[t];return eW.css`
    ${rL(r,a.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${rL(r,a.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${rL(r,a.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${rL(r,a.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rL(r,a.hovered)}
            }

            &:active {
              ${rL(r,a.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${rL(r,a.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${rL(r,a.pressed)}
        }

        &[data-selected] {
          ${rL(r,a.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rL(r,a.hovered)}
            }
            &:active {
              ${rL(r,a.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function a0(){let e=(0,eV.useContext)(aG);if(!e)throw Error("useMenu(): missing context value");if(!ox(e)||2!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function a1(e){let t,r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O,L=(0,eD.c)(81);L[0]!==e?({as:d,children:r,fontSize:l,icon:t,menu:o,onClick:a,padding:s,popover:n,radius:c,space:u,text:b,tone:f,...i}=e,L[0]=e,L[1]=t,L[2]=r,L[3]=o,L[4]=a,L[5]=n,L[6]=i,L[7]=d,L[8]=l,L[9]=s,L[10]=c,L[11]=u,L[12]=f,L[13]=b):(t=L[1],r=L[2],o=L[3],a=L[4],n=L[5],i=L[6],d=L[7],l=L[8],s=L[9],c=L[10],u=L[11],f=L[12],b=L[13]);let F=void 0===d?"button":d,A=void 0===l?1:l,B=void 0===s?3:s,P=void 0===c?2:c,D=void 0===u?3:u,V=void 0===f?"default":f,W=a0(),{scheme:G}=tm(),{activeElement:Y,mount:K,onClickOutside:U,onEscape:X,onItemClick:q,onItemMouseEnter:Q,registerElement:Z}=W,J=Q??W.onItemMouseEnter,[ee,et]=(0,eV.useState)(null),[er,eo]=(0,eV.useState)(!1),[ea,en]=(0,eV.useState)(null),ei=!!Y&&Y===ee,[ed,el]=(0,eV.useState)(!1);L[14]!==J?(g=e=>{el(!1),J(e),eo(!0)},L[14]=J,L[15]=g):g=L[15];let es=g;L[16]!==ee?(p=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),eo(!1),requestAnimationFrame(()=>{ee?.focus()}))},L[16]=ee,L[17]=p):p=L[17];let ec=p;L[18]!==a?(h=e=>{a?.(e),en("first"),eo(!0)},L[18]=a,L[19]=h):h=L[19];let eu=h;L[20]!==q?(m=()=>{eo(!1),q?.()},L[20]=q,L[21]=m):m=L[21];let ef=m;L[22]===Symbol.for("react.memo_cache_sentinel")?(y=()=>el(!0),L[22]=y):y=L[22];let eb=y;L[23]!==K||L[24]!==ee?(v=()=>K(ee),w=[K,ee],L[23]=K,L[24]=ee,L[25]=v,L[26]=w):(v=L[25],w=L[26]),(0,eV.useEffect)(v,w),L[27]!==ei?(k=()=>{ei||eo(!1)},x=[ei],L[27]=ei,L[28]=k,L[29]=x):(k=L[28],x=L[29]),(0,eV.useEffect)(k,x),L[30]!==er?($=()=>{er||el(!1)},S=[er],L[30]=er,L[31]=$,L[32]=S):($=L[31],S=L[32]),(0,eV.useEffect)($,S),L[33]!==ea?(_=()=>{if(!ea)return;let e=requestAnimationFrame(()=>en(null));return()=>cancelAnimationFrame(e)},R=[ea],L[33]=ea,L[34]=_,L[35]=R):(_=L[34],R=L[35]),(0,eV.useEffect)(_,R),L[36]!==r||L[37]!==ef||L[38]!==ec||L[39]!==o||L[40]!==U||L[41]!==X||L[42]!==Z||L[43]!==ea?(j=(0,eP.jsx)(aQ,{...o,onClickOutside:U,onEscape:X,onItemClick:ef,onKeyDown:ec,onMouseEnter:eb,registerElement:Z,shouldFocus:ea,children:r}),L[36]=r,L[37]=ef,L[38]=ec,L[39]=o,L[40]=U,L[41]=X,L[42]=Z,L[43]=ea,L[44]=j):j=L[44];let eg=j;L[45]===Symbol.for("react.memo_cache_sentinel")?(z=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){en("first"),eo(!0),el(!0);return}},L[45]=z):z=L[45];let ep=z,eh="button"===F?ed:void 0,em="button"!==F?ed:void 0,ey=!ed&&ei?"":void 0;L[46]!==P?(C=tn(P),L[46]=P,L[47]=C):C=L[47];let ev="button"===F?"button":void 0;return L[48]!==t||L[49]!==A?(E=t&&(0,eP.jsxs)(rC,{size:A,children:[(0,eV.isValidElement)(t)&&t,(0,eG.isValidElementType)(t)&&(0,eP.jsx)(t,{})]}),L[48]=t,L[49]=A,L[50]=E):E=L[50],L[51]!==A||L[52]!==b?(I=(0,eP.jsx)(rj,{flex:1,children:(0,eP.jsx)(rC,{size:A,textOverflow:"ellipsis",weight:"medium",children:b})}),L[51]=A,L[52]=b,L[53]=I):I=L[53],L[54]===Symbol.for("react.memo_cache_sentinel")?(M=(0,eP.jsx)(eY.ChevronRightIcon,{}),L[54]=M):M=L[54],L[55]!==A?(N=(0,eP.jsx)(rC,{size:A,children:M}),L[55]=A,L[56]=N):N=L[56],L[57]!==B||L[58]!==D||L[59]!==E||L[60]!==I||L[61]!==N?(H=(0,eP.jsxs)(rN,{gap:D,padding:B,children:[E,I,N]}),L[57]=B,L[58]=D,L[59]=E,L[60]=I,L[61]=N,L[62]=H):H=L[62],L[63]!==F||L[64]!==eu||L[65]!==es||L[66]!==i||L[67]!==G||L[68]!==eh||L[69]!==em||L[70]!==ey||L[71]!==C||L[72]!==ev||L[73]!==H||L[74]!==V?(T=(0,eP.jsx)(aJ,{"data-as":F,"data-ui":"MenuGroup",forwardedAs:F,...i,"aria-pressed":eh,"data-pressed":em,"data-selected":ey,$radius:C,$tone:V,$scheme:G,onClick:eu,onKeyDown:ep,onMouseEnter:es,ref:et,tabIndex:-1,type:ev,children:H}),L[63]=F,L[64]=eu,L[65]=es,L[66]=i,L[67]=G,L[68]=eh,L[69]=em,L[70]=ey,L[71]=C,L[72]=ev,L[73]=H,L[74]=V,L[75]=T):T=L[75],L[76]!==eg||L[77]!==er||L[78]!==n||L[79]!==T?(O=(0,eP.jsx)(o3,{...n,content:eg,"data-ui":"MenuGroup__popover",open:er,children:T}),L[76]=eg,L[77]=er,L[78]=n,L[79]=T,L[80]=O):O=L[80],O}aJ.displayName="Selectable",a1.displayName="MenuGroup";let a2=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,_,R,j,z,C,E,I,M,N,H,T,O=(0,eD.c)(75);O[0]!==e?({as:m,children:a,disabled:n,fontSize:y,hotkeys:i,icon:r,iconRight:o,onClick:d,padding:v,paddingX:f,paddingY:b,paddingTop:u,paddingRight:c,paddingBottom:l,paddingLeft:s,pressed:g,radius:w,selected:h,space:k,text:$,tone:x,...p}=e,O[0]=e,O[1]=r,O[2]=o,O[3]=a,O[4]=n,O[5]=i,O[6]=d,O[7]=l,O[8]=s,O[9]=c,O[10]=u,O[11]=f,O[12]=b,O[13]=g,O[14]=p,O[15]=h,O[16]=m,O[17]=y,O[18]=v,O[19]=w,O[20]=k,O[21]=x,O[22]=$):(r=O[1],o=O[2],a=O[3],n=O[4],i=O[5],d=O[6],l=O[7],s=O[8],c=O[9],u=O[10],f=O[11],b=O[12],g=O[13],p=O[14],h=O[15],m=O[16],y=O[17],v=O[18],w=O[19],k=O[20],x=O[21],$=O[22]);let L=void 0===m?"button":m,F=void 0===y?1:y,A=void 0===v?3:v,B=void 0===w?2:w,P=void 0===k?3:k,D=void 0===x?"default":x,{scheme:V}=tm(),W=a0(),{activeElement:G,mount:Y,onItemClick:K,onItemMouseEnter:U,onItemMouseLeave:X}=W,q=U??W.onItemMouseEnter,Q=X??W.onItemMouseLeave,[Z,J]=(0,eV.useState)(null),ee=!!G&&G===Z,et=(0,eV.useRef)(null);O[23]===Symbol.for("react.memo_cache_sentinel")?(S=()=>et.current,O[23]=S):S=O[23],(0,eV.useImperativeHandle)(t,S),O[24]!==Y||O[25]!==Z||O[26]!==h?(_=()=>Y(Z,h),R=[Y,Z,h],O[24]=Y,O[25]=Z,O[26]=h,O[27]=_,O[28]=R):(_=O[27],R=O[28]),(0,eV.useEffect)(_,R),O[29]!==n||O[30]!==d||O[31]!==K?(j=e=>{n||(d&&d(e),K&&K())},O[29]=n,O[30]=d,O[31]=K,O[32]=j):j=O[32];let er=j;O[33]!==A||O[34]!==l||O[35]!==s||O[36]!==c||O[37]!==u||O[38]!==f||O[39]!==b?(z={padding:A,paddingX:f,paddingY:b,paddingTop:u,paddingRight:c,paddingBottom:l,paddingLeft:s},O[33]=A,O[34]=l,O[35]=s,O[36]=c,O[37]=u,O[38]=f,O[39]=b,O[40]=z):z=O[40];let eo=z;O[41]!==F?(C=tn(F).map(a3),O[41]=F,O[42]=C):C=O[42];let ea=C;O[43]===Symbol.for("react.memo_cache_sentinel")?(E=e=>{et.current=e,J(e)},O[43]=E):E=O[43];let en=E,ei="button"!==L&&g?"":void 0,ed=ee?"":void 0,el=n?"":void 0;O[44]!==B?(I=tn(B),O[44]=B,O[45]=I):I=O[45],O[46]===Symbol.for("react.memo_cache_sentinel")?(M=tn(0),O[46]=M):M=O[46];let es=n?"default":D,ec="button"===L?"button":void 0;return O[47]!==r||O[48]!==o||O[49]!==F||O[50]!==i||O[51]!==ea||O[52]!==eo||O[53]!==P||O[54]!==$?(N=(r||$||o)&&(0,eP.jsxs)(rN,{as:"span",gap:P,align:"center",...eo,children:[r&&(0,eP.jsxs)(rC,{size:F,children:[(0,eV.isValidElement)(r)&&r,(0,eG.isValidElementType)(r)&&(0,eP.jsx)(r,{})]}),$&&(0,eP.jsx)(rj,{flex:1,children:(0,eP.jsx)(rC,{size:F,textOverflow:"ellipsis",weight:"medium",children:$})}),i&&(0,eP.jsx)(aW,{fontSize:ea,keys:i,style:{marginTop:-4,marginBottom:-4}}),o&&(0,eP.jsxs)(rC,{size:F,children:[(0,eV.isValidElement)(o)&&o,(0,eG.isValidElementType)(o)&&(0,eP.jsx)(o,{})]})]}),O[47]=r,O[48]=o,O[49]=F,O[50]=i,O[51]=ea,O[52]=eo,O[53]=P,O[54]=$,O[55]=N):N=O[55],O[56]!==a||O[57]!==eo?(H=a&&(0,eP.jsx)(rj,{as:"span",...eo,children:a}),O[56]=a,O[57]=eo,O[58]=H):H=O[58],O[59]!==L||O[60]!==n||O[61]!==er||O[62]!==q||O[63]!==Q||O[64]!==p||O[65]!==V||O[66]!==ei||O[67]!==ed||O[68]!==el||O[69]!==I||O[70]!==es||O[71]!==ec||O[72]!==N||O[73]!==H?(T=(0,eP.jsxs)(aJ,{"data-ui":"MenuItem",role:"menuitem",...p,"data-pressed":ei,"data-selected":ed,"data-disabled":el,forwardedAs:L,$radius:I,$padding:M,$tone:es,$scheme:V,disabled:n,onClick:er,onMouseEnter:q,onMouseLeave:Q,ref:en,tabIndex:-1,type:ec,children:[N,H]}),O[59]=L,O[60]=n,O[61]=er,O[62]=q,O[63]=Q,O[64]=p,O[65]=V,O[66]=ei,O[67]=ed,O[68]=el,O[69]=I,O[70]=es,O[71]=ec,O[72]=N,O[73]=H,O[74]=T):T=O[74],T});function a3(e){return e-1}a2.displayName="ForwardRef(MenuItem)";let a5=(0,eW.styled)(rP).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,a4=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y=(0,eD.c)(30);y[0]!==e?({icon:o,id:a,focused:r,fontSize:c,label:n,onClick:i,onFocus:d,padding:u,selected:s,...l}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=a,y[4]=n,y[5]=i,y[6]=d,y[7]=l,y[8]=s,y[9]=c,y[10]=u):(r=y[1],o=y[2],a=y[3],n=y[4],i=y[5],d=y[6],l=y[7],s=y[8],c=y[9],u=y[10]);let v=void 0===c?1:c,w=void 0===u?2:u,k=(0,eV.useRef)(null),x=(0,eV.useRef)(!1);y[11]===Symbol.for("react.memo_cache_sentinel")?(f=()=>k.current,y[11]=f):f=y[11],(0,eV.useImperativeHandle)(t,f),y[12]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{x.current=!1},y[12]=b):b=y[12];let $=b;y[13]!==d?(g=e=>{x.current=!0,d&&d(e)},y[13]=d,y[14]=g):g=y[14];let S=g;y[15]!==r?(p=()=>{r&&!x.current&&(k.current&&k.current.focus(),x.current=!0)},h=[r],y[15]=r,y[16]=p,y[17]=h):(p=y[16],h=y[17]),(0,eV.useEffect)(p,h);let _=s?"true":"false",R=s?0:-1;return y[18]!==v||y[19]!==S||y[20]!==o||y[21]!==a||y[22]!==n||y[23]!==i||y[24]!==w||y[25]!==l||y[26]!==s||y[27]!==_||y[28]!==R?(m=(0,eP.jsx)(a5,{"data-ui":"Tab",...l,"aria-selected":_,fontSize:v,icon:o,id:a,mode:"bleed",onClick:i,onBlur:$,onFocus:S,padding:w,ref:k,role:"tab",selected:s,tabIndex:R,text:n,type:"button"}),y[18]=v,y[19]=S,y[20]=o,y[21]=a,y[22]=n,y[23]=i,y[24]=w,y[25]=l,y[26]=s,y[27]=_,y[28]=R,y[29]=m):m=y[29],m});a4.displayName="ForwardRef(Tab)";let a6=(0,eW.styled)(ol).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,a7=(0,eV.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eD.c)(15);d[0]!==e?({children:r,...o}=e,d[0]=e,d[1]=r,d[2]=o):(r=d[1],o=d[2]);let[l,s]=(0,eV.useState)(-1);if(d[3]!==r||d[4]!==l){let e,t=eV.Children.toArray(r).filter(eV.isValidElement);d[6]!==l?(e=(e,t)=>(0,eV.cloneElement)(e,{focused:l===t,key:t,onFocus:()=>s(t)}),d[6]=l,d[7]=e):e=d[7],a=t.map(e),d[3]=r,d[4]=l,d[5]=a}else a=d[5];let c=a,u=c.length;d[8]!==u?(n=e=>{"ArrowLeft"===e.key&&s(e=>(e+u-1)%u),"ArrowRight"===e.key&&s(e=>(e+1)%u)},d[8]=u,d[9]=n):n=d[9];let f=n;return d[10]!==f||d[11]!==t||d[12]!==o||d[13]!==c?(i=(0,eP.jsx)(a6,{"data-ui":"TabList",...o,onKeyDown:f,ref:t,role:"tablist",children:c}),d[10]=f,d[11]=t,d[12]=o,d[13]=c,d[14]=i):i=d[14],i});a7.displayName="ForwardRef(TabList)",e.s(["Arrow",0,ov,"Avatar",0,ry,"AvatarCounter",0,rk,"AvatarStack",0,r_,"Badge",0,rI,"BoundaryElementProvider",0,ok,"Box",0,rj,"Button",0,rP,"Card",0,rV,"Checkbox",0,r4,"Code",0,r9,"ConditionalWrapper",0,o_,"Container",0,or,"EMPTY_ARRAY",0,e2,"EMPTY_RECORD",0,e3,"ElementQuery",0,oR,"Flex",0,rN,"Grid",0,oa,"Heading",0,oi,"Hotkeys",0,aW,"Inline",0,ol,"KBD",0,ou,"Label",0,rc,"Layer",0,oT,"LayerProvider",0,oC,"Menu",0,aQ,"MenuDivider",0,aZ,"MenuGroup",0,a1,"MenuItem",0,a2,"Popover",0,o3,"Portal",0,oB,"PortalProvider",0,oP,"Radio",0,o6,"Select",0,ao,"Spinner",0,rO,"SrOnly",0,oY,"Stack",0,ai,"Switch",0,af,"Tab",0,a4,"TabList",0,a7,"Text",0,rC,"TextArea",0,am,"TextInput",0,aC,"ThemeColorProvider",0,ty,"ThemeProvider",0,th,"Tooltip",0,aP,"TooltipDelayGroupContext",0,aL,"TooltipDelayGroupProvider",0,aF,"VirtualList",0,oX,"_ResizeObserver",0,rK,"_cardColorStyle",0,rL,"_elementSizeObserver",0,rU,"_fillCSSObject",0,tr,"_getArrayProp",0,tn,"_getResponsiveSpace",0,ti,"_isEnterToClickElement",0,function(e){return e8(e)||e9(e)},"_isScrollable",0,tt,"_responsive",0,ta,"containsOrEqualsElement",0,te,"createColorTheme",0,b,"createGlobalScopedContext",0,tg,"hexToRgb",0,ew,"hslToRgb",0,e$,"isHTMLAnchorElement",0,e8,"isHTMLButtonElement",0,e9,"isHTMLElement",0,e7,"isHTMLInputElement",0,function(e){return e7(e)&&"INPUT"===e.nodeName},"isHTMLSelectElement",0,function(e){return e7(e)&&"SELECT"===e.nodeName},"isHTMLTextAreaElement",0,function(e){return e7(e)&&"TEXTAREA"===e.nodeName},"isRecord",0,ox,"multiply",0,ep,"parseColor",0,e_,"rem",0,to,"responsiveCodeFontStyle",0,tl,"responsiveHeadingFont",0,ts,"responsiveLabelFont",0,tc,"responsivePaddingStyle",0,rn,"responsiveRadiusStyle",0,ri,"responsiveTextAlignStyle",0,tu,"responsiveTextFont",0,tf,"rgbToHex",0,ek,"rgbToHsl",0,ex,"rgba",0,eR,"screen",0,eh,"studioTheme",0,e1,"useBoundaryElement",0,oS,"useClickOutsideEvent",0,rW,"useCustomValidity",0,rY,"useElementSize",0,rX,"useGlobalKeyDown",0,rq,"useLayer",0,oM,"useMatchMedia",0,rQ,"useMediaIndex",0,rJ,"usePortal",0,oA,"usePrefersDark",0,function(e){return rQ("(prefers-color-scheme: dark)",void 0===e?r0:e)},"usePrefersReducedMotion",0,r1,"useRootTheme",0,tm,"useTheme",0,function(){return(0,eW.useTheme)()},"useTheme_v2",0,tv,"useTooltipDelayGroup",0,aA],341085)}]);

//# debugId=59807513-c803-afff-bb20-3796571d162e