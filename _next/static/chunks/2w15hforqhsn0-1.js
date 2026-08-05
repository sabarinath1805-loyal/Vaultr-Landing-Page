;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="1b49ddda-3f41-3f55-5b22-88ea56aba348")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,132655,831818,e=>{"use strict";let t,a,i;var r=e.i(339954),n=e.i(650471);try{var s="u">typeof window?window:e.g;s._sentryModuleMetadata=s._sentryModuleMetadata||{},s._sentryModuleMetadata[(new s.Error).stack]=Object.assign({},s._sentryModuleMetadata[(new s.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var o=n.default,l={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},d={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},u=e=>e===l.VIDEO?"playback":e,c=class e extends Error{constructor(t,a=e.MEDIA_ERR_CUSTOM,i,r){var n;super(t),this.name="MediaError",this.code=a,this.context=r,this.fatal=null!=i?i:a>=e.MEDIA_ERR_NETWORK&&a<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};c.MEDIA_ERR_ABORTED=1,c.MEDIA_ERR_NETWORK=2,c.MEDIA_ERR_DECODE=3,c.MEDIA_ERR_SRC_NOT_SUPPORTED=4,c.MEDIA_ERR_ENCRYPTED=5,c.MEDIA_ERR_CUSTOM=100,c.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var h=(e,t)=>null!=t&&e in t,m={ANY:"any",MUTED:"muted"},p={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},v={MSE:"mse",NATIVE:"native"},b={HEADER:"header",QUERY:"query",NONE:"none"},E=Object.values(b),g={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},y={HLS:g.M3U8};Object.keys(y),[...Object.values(g)];var f={code:"en"},A=(e,t,a,i,r=e)=>{r.addEventListener(t,a,i),e.addEventListener("teardown",()=>{r.removeEventListener(t,a)},{once:!0})},w=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},k=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return h(e,y)?y[e]:t}return M(e)},T=e=>"VOD"===e?p.ON_DEMAND:p.LIVE,_=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,M=e=>{let{src:t}=e;if(!t)return"";let a="";try{a=I(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let i=a.lastIndexOf(".");if(i<0)return S(e)?g.M3U8:"";let r=a.slice(i+1).toUpperCase();return h(r,g)?g[r]:""},C=e=>{try{return new URL(e),!1}catch{return!0}},I=(e,t)=>{var a;if(!C(e))return new URL(e);let i=null==(a=null==window?void 0:window.location)?void 0:a.href,r=null!=t?t:i;return t&&C(t.toString())&&(r=new URL(t,i)),new URL(e,r)},R="mux.com",S=({src:e,customDomain:t=R})=>{let a;try{a=new URL(`${e}`)}catch{return!1}let i="https:"===a.protocol,r=a.hostname===`stream.${t}`.toLowerCase(),n=a.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return i&&r&&s&&o},L=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}};function D(e,t=!0){var a;return new x(t&&null!=(a=null==f?void 0:f[e])?a:e,t?f.code:"en")}var x=class{constructor(e,t=(e=>null!=(e=f)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,a)=>{var i;return null!=(i=e[a])?i:""})}toString(){return this.message}},O=Object.values(m),N=e=>"boolean"==typeof e||"string"==typeof e&&O.includes(e),P=(e,t)=>{if(!t)return;let a=e.muted,i=()=>e.muted=a;switch(t){case m.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(i)});break;case m.MUTED:e.muted=!0,e.play().catch(i);break;default:e.play().catch(()=>{})}},U=e=>"time"in e?e.time:e.startTime;function W(e,t,a,i,r,n){let s=document.createElement("track");return s.kind=t,s.label=a,i&&(s.srclang=i),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function B(e,t){let a=Array.prototype.find.call(e.querySelectorAll("track"),e=>e.track===t);null==a||a.remove()}function $(e,t,a){var i;return null==(i=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===a))?void 0:i.track}async function H(e,t,a,i){let r=$(e,a,i);return r||((r=W(e,i,a)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>U(t)-U(e)).forEach(t=>{var a,n;let s=t.value,o=U(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===i?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(a=null==r?void 0:r.cues)?void 0:a[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===i?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var K="cuepoints",V=Object.freeze({label:K});async function F(e,t,a=V){return H(e,t,a.label,"metadata")}var Y=e=>({time:e.startTime,value:JSON.parse(e.text)});function j(e,t={label:K}){let a=$(e,t.label,"metadata");return null!=a&&a.cues?Array.from(a.cues,e=>Y(e)):[]}function G(e,t={label:K}){var a,i;let r=$(e,t.label,"metadata");if(!(null!=(a=null==r?void 0:r.activeCues)&&a.length))return;if(1===r.activeCues.length)return Y(r.activeCues[0]);let{currentTime:n}=e;return Y(Array.prototype.find.call(null!=(i=r.activeCues)?i:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function q(e,t=V){return new Promise(a=>{A(e,"loadstart",async()=>{let i=await F(e,[],t);A(e,"cuechange",()=>{let t=G(e);if(t){let a=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},i),a(i)})})}var Z="chapters",z=Object.freeze({label:Z}),Q=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function X(e,t,a=z){return H(e,t,a.label,"chapters")}function J(e,t={label:Z}){var a;let i=$(e,t.label,"chapters");return null!=(a=null==i?void 0:i.cues)&&a.length?Array.from(i.cues,e=>Q(e)):[]}function ee(e,t={label:Z}){var a,i;let r=$(e,t.label,"chapters");if(!(null!=(a=null==r?void 0:r.activeCues)&&a.length))return;if(1===r.activeCues.length)return Q(r.activeCues[0]);let{currentTime:n}=e;return Q(Array.prototype.find.call(null!=(i=r.activeCues)?i:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function et(e,t=z){return new Promise(a=>{A(e,"loadstart",async()=>{let i=await X(e,[],t);A(e,"cuechange",()=>{let t=ee(e);if(t){let a=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(a)}},{},i),a(i)})})}function ea(e,t){if(t){let a=t.playingDate;if(null!=a)return new Date(a.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}function ei(e,t){return t&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}var er={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},en=(e,t,a,i,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,m,v;let b,E;if(n){let a=D("Your device appears to be offline",r),i=c.MEDIA_ERR_NETWORK,n=new c(a,i,!1,void 0);return n.errorCategory=t,n.muxCode=d.NETWORK_OFFLINE,n.data=e,n}let g="status"in e?e.status:e.code,y=Date.now(),f=c.MEDIA_ERR_NETWORK;if(200===g)return;let A=u(t),k=(b=u(t),E=`${b}Token`,null!=(m=a.tokens)&&m[b]?null==(v=a.tokens)?void 0:v[b]:h(E,a)?a[E]:void 0),T=t===l.VIDEO?er.VIDEO:t===l.DRM?er.DRM:void 0,[_]=w(null!=(s=a.playbackId)?s:"");if(!g||!_)return;let M=L(k);if(k&&!M){let a=new c(D("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:A}),f,!0,D("Compact JWT string: {token}",r).format({token:k}));return a.errorCategory=t,a.muxCode=d.NETWORK_TOKEN_MALFORMED,a.data=e,a}if(g>=500){let e=new c("",f,null==i||i);return e.errorCategory=t,e.muxCode=d.NETWORK_UNKNOWN_ERROR,e}if(403===g)if(M){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(M,y)){let a={timeStyle:"medium",dateStyle:"medium"},i=new c(D("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:A}),f,!0,D("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",a).format(null!=(o=M.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",a).format(y)}));return i.errorCategory=t,i.muxCode=d.NETWORK_TOKEN_EXPIRED,i.data=e,i}if((({sub:e},t)=>e!==t)(M,_)){let a=new c(D("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:A}),f,!0,D("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:A,playbackId:_,tokenPlaybackId:M.sub}));return a.errorCategory=t,a.muxCode=d.NETWORK_TOKEN_SUB_MISMATCH,a.data=e,a}if((({aud:e},t)=>!e)(M,0)){let a=new c(D("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:A}),f,!0,D("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:A,expectedAud:T}));return a.errorCategory=t,a.muxCode=d.NETWORK_TOKEN_AUD_MISSING,a.data=e,a}if((({aud:e},t)=>e!==t)(M,T)){let a=new c(D("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:A}),f,!0,D("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:A,expectedAud:T,aud:M.aud}));return a.errorCategory=t,a.muxCode=d.NETWORK_TOKEN_AUD_MISMATCH,a.data=e,a}}else{let a=new c(D("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:A,category:t}),f,null==i||i,D("Specified playback ID: {playbackId}",r).format({playbackId:_}));return a.errorCategory=t,a.muxCode=d.NETWORK_TOKEN_MISSING,a.data=e,a}if(412===g){let n=new c(D("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),f,null==i||i,D("Specified playback ID: {playbackId}",r).format({playbackId:_}));return n.errorCategory=t,n.muxCode=d.NETWORK_NOT_READY,n.streamType=a.streamType===p.LIVE?"live":a.streamType===p.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===g){let a=new c(D("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),f,null==i||i,D("Specified playback ID: {playbackId}",r).format({playbackId:_}));return a.errorCategory=t,a.muxCode=d.NETWORK_NOT_FOUND,a.data=e,a}if(400===g){let a=new c(D("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),f,null==i||i,D("Specified playback ID: {playbackId}",r).format({playbackId:_}));return a.errorCategory=t,a.muxCode=d.NETWORK_INVALID_URL,a.data=e,a}let C=new c("",f,null==i||i);return C.errorCategory=t,C.muxCode=d.NETWORK_UNKNOWN_ERROR,C.data=e,C},es=o.DefaultConfig.capLevelController,eo={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},el=class e extends es{constructor(e){super(e)}static setMaxAutoResolution(t,a){a?e.maxAutoResolution.set(t,a):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let a=this.hls;return null!=(t=e.maxAutoResolution.get(a))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,a)=>this.isLevelAllowed(t)&&a<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let i=eo[a.toLowerCase().trim()];if(!i)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=i),n=r.findIndex(e=>e.width*e.height===i);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let a=super.getMaxLevel(t),i=this.getValidLevels(t);if(!i[a])return a;let r=Math.min(i[a].width,i[a].height),n=e.minMaxResolution;return r>=n?a:es.getMaxLevelByMediaSize(i,16/9*n,n)}};el.minMaxResolution=720,el.maxAutoResolution=new WeakMap;var ed,eu,ec,eh,em,ep,ev=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),eb="fairplay",eE=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,eg=async(e,t)=>{if(t===g.MP4)return{streamType:p.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===g.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let a=await t.text(),i=await ((e,t)=>{let a,i=e.split(`
`).find((e,t,a)=>t>0&&a[t-1].startsWith("#EXT-X-STREAM-INF"));if(!i)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(C(i)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{a=I(i,t)}catch(e){return Promise.reject(e)}return fetch(a).then(e=>200!==e.status?Promise.reject(e):e.text())})(a,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let a={};for(let e of t){let t=Object.fromEntries([...e.matchAll(eE)].map(([,e,t])=>[e,t])),i=t["DATA-ID"];i&&(a[i]={...t})}return{sessionData:a}})(a),...(e=>{var t,a,i;let r=e.split(`
`),n=null==(a=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:a.trim(),s=T(n),o=_(n),l;if(s===p.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(i=null==e?void 0:e.split(":"))?void 0:i[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(i)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},ey=async(e,t,a=k({src:e}))=>{var i,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await eg(e,a),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&ef(null!=(i=c.URI)?i:c.VALUE,t),(null!=(r=eT.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=eT.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=eT.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ef=async(e,t)=>{var a,i;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(a=null==n?void 0:n[0])&&a.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(i=eT.get(t))?i:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},eA=null!=(eu=null==(ed=null==globalThis?void 0:globalThis.navigator)?void 0:ed.userAgent)?eu:"",ew=null!=(em=null==(eh=null==(ec=null==globalThis?void 0:globalThis.navigator)?void 0:ec.userAgentData)?void 0:eh.platform)?em:"",ek=eA.toLowerCase().includes("android")||["x11","android"].some(e=>ew.toLowerCase().includes(e)),eT=new WeakMap,e_="mux.com",eM=null==(ep=o.isSupported)?void 0:ep.call(o),eC=()=>{if("u">typeof window)return r.default.utils.now()},eI=r.default.utils.generateUUID,eR=({playbackId:e,customDomain:t=e_,maxResolution:a,minResolution:i,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=w(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(a&&p.searchParams.set("max_resolution",a),i&&(p.searchParams.set("min_resolution",i),a&&+a.slice(0,-1)<+i.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",i,"maxResolution",a)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},eS=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},eL=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},eD=e=>{var t;return null==(t=eT.get(e))?void 0:t.error},ex=e=>{var t;return null==(t=eT.get(e))?void 0:t.metadata},eO=e=>{var t,a;return null!=(a=null==(t=eT.get(e))?void 0:t.streamType)?a:p.UNKNOWN},eN=e=>{var t,a;return null!=(a=null==(t=eT.get(e))?void 0:t.targetLiveWindow)?a:NaN},eP=e=>{var t,a;return null!=(a=null==(t=eT.get(e))?void 0:t.seekable)?a:e.seekable},eU=e=>{var t;let a=null==(t=eT.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof a)return NaN;let i=eP(e);return i.length?i.end(i.length-1)-a:NaN},eW=e=>{var t;return null==(t=eT.get(e))?void 0:t.coreReference},eB=.034,e$=(e,t,a=eB)=>e>t||((e,t,a=eB)=>Math.abs(e-t)<=a)(e,t,a),eH=(e,t)=>{var a,i,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(i=null==(a=t.levels)?void 0:a[t.currentLevel])?void 0:i.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},eK=(e,t)=>e.ended||e.loop?e.ended:!!(t&&eH(e,t))||((e,t=eB)=>e.paused&&e$(e.currentTime,e.duration,t))(e),eV=(e,t,a)=>{var i,r,n;eF(t,a,e);let{metadata:s={}}=e,{view_session_id:l=eI()}=s,d=null!=(i=null==e?void 0:e.metadata)&&i.video_id?e.metadata.video_id:eJ(e)&&null!=(n=null!=(r=eS(e.playbackId))?r:eL(e.src))?n:e.src;s.view_session_id=l,s.video_id=d,e.metadata=s,e.drmTypeCb=e=>{var a;null==(a=t.mux)||a.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var a;let i=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(a=eT.get(t))?void 0:a.coreReference;eV(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,i&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},eT.set(t,{retryCount:0});let u=ej(e,t),c=(({preload:e,src:t},a,i)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?a.setAttribute("preload",e):a.removeAttribute("preload")};if(!i)return r(e),r;let n=!1,s=!1,o=i.config.maxBufferLength,l=i.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:a.preload;s||"none"===t||("metadata"===t?(i.config.maxBufferLength=1,i.config.maxBufferSize=1):(i.config.maxBufferLength=o,i.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,i.loadSource(t))};return A(a,"play",()=>{s=!0,i.config.maxBufferLength=o,i.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,u);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?u&&t.mux.addHLSJS({hlsjs:u,Hls:u?o:void 0}):e1(e,t,u),e2(e,t,u),q(t),et(t);let h=((e,t,a)=>{let{autoplay:i}=e,r=!1,n=!1,s=N(i)?i:!!i,l=()=>{r||A(t,"playing",()=>{r=!0},{once:!0})};if(l(),A(t,"loadstart",()=>{r=!1,l(),P(t,s)},{once:!0}),A(t,"loadstart",()=>{a||(n=e.streamType&&e.streamType!==p.UNKNOWN?e.streamType===p.LIVE:!Number.isFinite(t.duration)),P(t,s)},{once:!0}),a&&a.once(o.Events.LEVEL_LOADED,(t,a)=>{var i;n=e.streamType&&e.streamType!==p.UNKNOWN?e.streamType===p.LIVE:null!=(i=a.details.live)&&i}),!s){let i=()=>{!n||Number.isFinite(e.startTime)||(null!=a&&a.liveSyncPosition?t.currentTime=a.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};a&&A(t,"play",()=>{"metadata"===t.preload?a.once(o.Events.LEVEL_UPDATED,i):i()},{once:!0})}return e=>{r||P(t,s=N(e)?e:!!e)}})(e,t,u),m={engine:u,setAutoplay:h,setPreload:c},v=eT.get(t);return v&&(v.coreReference=m),m},eF=(e,t,a)=>{let i=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=a&&a.muxDataKeepSession?i&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),i&&(i.detachMedia(),i.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",e4),e.removeEventListener("error",e9),e.removeEventListener("durationchange",e3),eT.delete(e),e.dispatchEvent(new Event("teardown")))};function eY(e,t){var a;let i=k(e);if(i!==g.M3U8)return!0;let r=!i||null==(a=t.canPlayType(i))||a,{preferPlayback:n}=e,s=n===v.MSE,o=n===v.NATIVE,l=eM&&(s||ek||!(/^((?!chrome|android).)*safari/i.test(eA)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(o||!l)}var ej=(e,t)=>{let{debug:a,streamType:i,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:l={},maxAutoResolution:d}=e,u=k(e)===g.M3U8,c=eY(e,t);if(u&&!c&&eM){let u=eG(i),c=eq(e),h=[b.QUERY,b.HEADER].includes(s)?{useHeaders:s===b.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,m=e0(e,l),p=new o({debug:a,startPosition:r,cmcd:h,xhrSetup:(e,t)=>{var a,i;if(s&&s!==b.QUERY)return;let r=I(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(i=null==(a=r.searchParams.get("CMCD"))?void 0:a.split(","))?i:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...m,...u,...c,...l});return m.capLevelController===el&&void 0!==d&&el.setMaxAutoResolution(p,d),p.on(o.Events.MANIFEST_PARSED,async function(e,a){var i,r;let n=null==(i=a.sessionData)?void 0:i["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&ef(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),p}},eG=e=>e===p.LIVE?{backBufferLength:8}:{},eq=e=>{let{tokens:{drm:t}={},playbackId:a,drmTypeCb:i}=e,r=eS(a);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:eQ(e,"fairplay"),serverCertificateUrl:eX(e,"fairplay")},"com.widevine.alpha":{licenseUrl:eQ(e,"widevine")},"com.microsoft.playready":{licenseUrl:eQ(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let a=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:a}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let a=e.includes("fps")?eb:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==i||i(a),t}))}:{}},eZ=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ez=async(e,t)=>{let a=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==a.status?Promise.reject(a):new Uint8Array(await a.arrayBuffer())},eQ=({playbackId:e,tokens:{drm:t}={},customDomain:a=e_},i)=>{let r=eS(e);return`https://license.${a.toLocaleLowerCase().endsWith(e_)?a:e_}/license/${i}/${r}?token=${t}`},eX=({playbackId:e,tokens:{drm:t}={},customDomain:a=e_},i)=>{let r=eS(e);return`https://license.${a.toLocaleLowerCase().endsWith(e_)?a:e_}/appcert/${i}/${r}?token=${t}`},eJ=({playbackId:e,src:t,customDomain:a})=>{if(e)return!0;if("string"!=typeof t)return!1;let i=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return i.includes(e_)||!!a&&i.includes(a.toLocaleLowerCase())},e0=(e,t)=>{let a={};return a.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==a.capLevelToPlayerSize?(a.capLevelController=el,a.capLevelToPlayerSize=!0):a.capLevelController=n.CapLevelController,a},e1=(e,t,a)=>{var i;let{envKey:n,disableTracking:s,muxDataSDK:l=r.default,muxDataSDKOptions:d={}}=e,u=eJ(e);if(!s&&(n||u)){let{playerInitTime:r,playerSoftwareName:s,playerSoftwareVersion:u,beaconCollectionDomain:c,debug:h,disableCookies:m}=e,p={...e.metadata,video_title:(null==(i=null==e?void 0:e.metadata)?void 0:i.video_title)||void 0};l.monitor(t,{debug:h,beaconCollectionDomain:c,hlsjs:a,Hls:a?o:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:m,...d,data:{...n?{env_key:n}:{},player_software_name:s,player_software:s,player_software_version:u,player_init_time:r,...p}})}},e2=(e,t,a)=>{var i,r;let n=eY(e,t),{src:s,customDomain:u=e_}=e,h=()=>{t.ended||e.disablePseudoEnded||!eK(t,a)||(eH(t,a)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},m,v,b=()=>{let e=eP(t),a,i;e.length>0&&(a=e.start(0),i=e.end(0)),(v!==i||m!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),m=a,v=i};if(A(t,"durationchange",b),t&&n){let a=k(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(u)){let e=eL(s);ef(new URL(`https://stream.${u}/${e}/metadata.json`).toString(),t)}let n=()=>{if(eO(t)!==p.LIVE||Number.isFinite(t.duration))return;let e=setInterval(b,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),A(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},o=async()=>ey(s,t,a).then(n).catch(a=>{if(a instanceof Response){let i=en(a,l.VIDEO,e);if(i)return void e5(t,i)}});if("none"===t.preload){let e=()=>{o(),t.removeEventListener("loadedmetadata",a)},a=()=>{o(),t.removeEventListener("play",e)};A(t,"play",e,{once:!0}),A(t,"loadedmetadata",a,{once:!0})}else o();null!=(i=e.tokens)&&i.drm?((e,t)=>{let a={mediaEl:t,getAppCertificate:()=>eZ(eX(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=en(t,l.DRM,e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ez(t,eQ(e,"fairplay")).catch(t=>{if(t instanceof Response){let a=en(t,l.DRM,e);return console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a?Promise.reject(a):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:e5,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,eb)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:i,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new c(D("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=l.DRM,t.muxCode=d.ENCRYPTED_CDM_ERROR,i(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var a,r;let i,s,o,l,d,c,m,p;e.webkitKeys||u();let v=await n;if(null===t.initData||null==v)return;let b=(a=t.initData,r=v,i=function(e){let t=new ArrayBuffer(2*e.length),a=new DataView(t);for(let t=0;t<e.length;t++)a.setUint16(2*t,e.charCodeAt(t),!0);return t}(ev(a)),s=new Uint8Array(a),o=new Uint8Array(i),l=new Uint8Array(r),d=new Uint8Array(s.byteLength+4+l.byteLength+4+o.byteLength),c=0,m=e=>{d.set(e,c),c+=e.byteLength},p=e=>{let t=new DataView(d.buffer),a=e.byteLength;t.setUint32(c,a,!0),c+=4,m(e)},m(s),p(o),p(l),d);h(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),i(e,t)}})()},u=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new c("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",c.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=l.DRM,e.muxCode=d.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},h=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,i=await a(e);r.update(i)}catch(t){console.error("Error on FairPlay session message",t),i(e,t)}},o=t=>{let a=t.target.error;if(!a)return;console.error(`Internal Webkit Key Session Error - sysCode: ${a.systemCode} code: ${a.code}`);let r=new c(D("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),c.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=l.DRM,r.muxCode=d.ENCRYPTED_CDM_ERROR,i(e,r)},u=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",u),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",u),s=u},m=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",m),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",m,{once:!0})})(a);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:a,saveAndDispatchError:i,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let a=t.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);e.mediaKeys||await u(a);let i=t.initData;if(null==i)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await h(a,i)}catch(t){i(e,t);return}},u=async a=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new c(D("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=l.DRM,t.muxCode=d.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,i(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=D("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new c(e,c.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=l.DRM,t.muxCode=d.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){i(e,t);return}await e.setMediaKeys(s)},h=async(t,r)=>{let o=e.mediaKeys.createSession(),u=async t=>{let r=t.message,n=await a(r);try{await o.update(n)}catch{let t=new c(D("Failed to update DRM license. This may be an issue with the player or your protected content."),c.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=l.DRM,t.muxCode=d.ENCRYPTED_UPDATE_LICENSE_FAILED,i(e,t)}},h=()=>{o.keyStatuses.forEach(t=>{let a;"internal-error"===t?((a=new c(D("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),c.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=l.DRM,a.muxCode=d.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((a=new c(D("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),c.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=l.DRM,a.muxCode=d.ENCRYPTED_OUTPUT_RESTRICTED),a&&i(e,a)})};o.addEventListener("keystatuseschange",h),o.addEventListener("message",u);let m=async()=>{o.removeEventListener("keystatuseschange",h),o.removeEventListener("message",u),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",m),e.removeEventListener("teardown",m),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",m,{once:!0}),e.addEventListener("teardown",m,{once:!0}),s=m,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new c(D("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),c.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=l.DRM,e.muxCode=d.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},m=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",m),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",m,{once:!0}),m})({fallbackToWebkitFairplay:async()=>{var a;await t(),null==(a=e.fallbackToWebkitFairplay)||a.call(e)},...a})}})(e,t):A(t,"encrypted",()=>{let e=new c(D("Attempting to play DRM-protected content without providing a DRM token."),c.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=l.DRM,e.muxCode=d.ENCRYPTED_MISSING_TOKEN,e5(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=eT.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",e3,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",e4),t.addEventListener("error",e9),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),A(t,"pause",h),A(t,"seeked",h),A(t,"play",()=>{t.ended||e$(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let i,r;a&&s?(a.once(o.Events.LEVEL_LOADED,(e,i)=>{((e,t,a)=>{var i,r,n,s,o,l,d,u,c;let h,m,v,b,E,{streamType:g,targetLiveWindow:y,liveEdgeStartOffset:f,lowLatency:A}=(m=T(h=e.type),v=_(h),E=!!(null!=(c=e.partList)&&c.length),m===p.LIVE&&(b=E?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:v,liveEdgeStartOffset:b,lowLatency:E});if(g===p.LIVE){A?(a.config.backBufferLength=null!=(i=a.userConfig.backBufferLength)?i:4,a.config.maxFragLookUpTolerance=null!=(r=a.userConfig.maxFragLookUpTolerance)?r:.001,a.config.abrBandWidthUpFactor=null!=(n=a.userConfig.abrBandWidthUpFactor)?n:a.config.abrBandWidthFactor):a.config.backBufferLength=null!=(s=a.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var i;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(i=a.liveSyncPosition)?i:t.seekable.end(e)}});(null!=(o=eT.get(t))?o:{}).seekable=e}(null!=(l=eT.get(t))?l:{}).liveEdgeStartOffset=f,(null!=(d=eT.get(t))?d:{}).targetLiveWindow=y,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=eT.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(i.details,t,a),b(),eO(t)!==p.LIVE||Number.isFinite(t.duration)||(a.on(o.Events.LEVEL_UPDATED,b),A(t,"durationchange",()=>{Number.isFinite(t.duration)&&a.off(o.Events.LEVELS_UPDATED,b)}))}),a.on(o.Events.ERROR,(i,r)=>{var n,s;let o=e8(r,e);if(o.muxCode===d.NETWORK_NOT_READY){let e=null!=(n=eT.get(t))?n:{},i=null!=(s=e.retryCount)?s:0;if(i<6){let n=0===i?5e3:6e4,s=new c(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),e5(t,s);let l=setTimeout(()=>{e.retryCount=i+1,"manifestLoadError"===r.details&&r.url&&a.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let a=new c('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(a,o),e5(t,a);return}}e5(t,o)}),a.on(o.Events.MANIFEST_LOADED,()=>{let e=eT.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",e9),A(t,"waiting",h),function(e,t){var a;if(!("videoTracks"in e))return;let i=new WeakMap;t.on(o.Events.MANIFEST_PARSED,function(t,a){l();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,a.levels.entries())){let a=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);i.set(t,`${e}`),a.id=`${e}`}}),t.on(o.Events.AUDIO_TRACKS_UPDATED,function(t,a){for(let t of(s(),a.audioTracks)){let a=t.default?"main":"alternative",i=e.addAudioTrack(a,t.name,t.lang);i.id=`${t.id}`,t.default&&(i.enabled=!0)}});let r=()=>{var a;let i=+(null==(a=[...e.audioTracks].find(e=>e.enabled))?void 0:a.id),r=t.audioTracks.map(e=>e.id);i!=t.audioTrack&&r.includes(i)&&(t.audioTrack=i)};e.audioTracks.addEventListener("change",r),t.on(o.Events.LEVELS_UPDATED,function(t,a){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=a.levels.map(e=>i.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let a=e.target.selectedIndex;a!=t.nextLevel&&(t.nextLevel=a)};null==(a=e.videoRenditions)||a.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},l=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(o.Events.DESTROYING,()=>{var t,a;l(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(a=e.videoRenditions)||a.removeEventListener("change",n)})}(e,a),a.on(o.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:i})=>{i.forEach(e=>{var i,r;let n=null!=(i=e.subtitleTrack)?i:e.closedCaptions,s=a.subtitleTracks.findIndex(({lang:t,name:a,type:i})=>t==(null==n?void 0:n.lang)&&a===e.label&&i.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;W(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),i=()=>{if(!a.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let i=a.subtitleTracks[a.subtitleTrack],r=i?i.default?"default":`${a.subtitleTracks[a.subtitleTrack].type.toLowerCase()}${a.subtitleTrack}`:void 0;if(a.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=a.subtitleTracks.findIndex(({lang:t,name:a,type:i,default:r})=>"default"===e.id&&r||t==e.language&&a===e.label&&i.toLowerCase()===e.kind);a.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",i),a.on(o.Events.CUES_PARSED,(e,{track:a,cues:i})=>{let r=t.textTracks.getTrackById(a);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),i.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),a.once(o.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var a,i;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(a=e.cues)&&a.length)){let a="track";e.kind&&(a+=`[kind="${e.kind}"]`),e.label&&(a+=`[label="${e.label}"]`);let r=t.querySelector(a),n=null!=(i=null==r?void 0:r.getAttribute("src"))?i:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},a.once(o.Events.MANIFEST_LOADED,r),a.once(o.Events.MEDIA_ATTACHED,r),a.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function e3(e){var t;let a=e.target,i=null==(t=eT.get(a))?void 0:t.startTime;if(i&&function(e,t,a){t&&a>t&&(a=t);for(let t=0;t<e.length;t++)if(e.start(t)<=a&&e.end(t)>=a)return!0;return!1}(a.seekable,a.duration,i)){let e="auto"===a.preload;e&&(a.preload="none"),a.currentTime=i,e&&(a.preload="auto")}}async function e4(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:a,code:i}=t.error,r=new c(a,i);if(t.src&&i===c.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let a=null!=(e=eD(t))?e:t.error;(null==a?void 0:a.code)===c.MEDIA_ERR_SRC_NOT_SUPPORTED&&e5(t,r)},500);if(t.src&&(i!==c.MEDIA_ERR_DECODE||void 0!==i))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}e5(t,r)}function e5(e,t){var a;t.fatal&&((null!=(a=eT.get(e))?a:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function e9(e){var t,a;if(!(e instanceof CustomEvent)||!(e.detail instanceof c))return;let i=e.target,r=e.detail;r&&r.fatal&&((null!=(t=eT.get(i))?t:{}).error=r,null==(a=i.mux)||a.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var e8=(e,t)=>{var a,i,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[o.ErrorTypes.NETWORK_ERROR]:c.MEDIA_ERR_NETWORK,[o.ErrorTypes.MEDIA_ERROR]:c.MEDIA_ERR_DECODE,[o.ErrorTypes.KEY_SYSTEM_ERROR]:c.MEDIA_ERR_ENCRYPTED},s,u=[o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,o.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?c.MEDIA_ERR_NETWORK:n[e.type];if(u===c.MEDIA_ERR_NETWORK&&e.response){let r=null!=(a=e.type===o.ErrorTypes.KEY_SYSTEM_ERROR?l.DRM:e.type===o.ErrorTypes.NETWORK_ERROR?l.VIDEO:void 0)?a:l.VIDEO;s=null!=(i=en(e.response,r,t,e.fatal))?i:new c("",u,e.fatal)}else u===c.MEDIA_ERR_ENCRYPTED?e.details===o.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new c(D("Attempting to play DRM-protected content without providing a DRM token."),c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_MISSING_TOKEN):e.details===o.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new c(D("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===o.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new c(D("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),c.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===o.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new c(D("Failed to update DRM license. This may be an issue with the player or your protected content."),c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===o.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new c(D("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===o.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new c(D("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_CDM_ERROR):e.details===o.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new c(D("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),c.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_OUTPUT_RESTRICTED):((s=new c(e.error.message,c.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=l.DRM,s.muxCode=d.ENCRYPTED_ERROR):s=new c("",u,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};e.s(["CmcdTypeValues",0,E,"MaxResolution",0,{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},"MediaError",0,c,"MinResolution",0,{noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},"MuxErrorCategory",0,l,"MuxErrorCode",0,d,"MuxJWTAud",0,er,"PlaybackTypes",0,v,"RenditionOrder",0,{DESCENDING:"desc"},"StreamTypes",0,p,"addChapters",0,X,"addCuePoints",0,F,"addTextTrack",0,W,"errorCategoryToTokenNameOrPrefix",0,u,"generatePlayerInitTime",0,eC,"getActiveChapter",0,ee,"getActiveCuePoint",0,G,"getChapters",0,J,"getCoreReference",0,eW,"getCuePoints",0,j,"getCurrentPdt",0,ei,"getEnded",0,eK,"getError",0,eD,"getLiveEdgeStart",0,eU,"getMetadata",0,ex,"getSeekable",0,eP,"getStartDate",0,ea,"getStreamType",0,eO,"getTargetLiveWindow",0,eN,"i18n",0,D,"initialize",0,eV,"parseJwt",0,L,"removeTextTrack",0,B,"teardown",0,eF,"toMuxVideoURL",0,eR,"toPlaybackIdFromSrc",0,eL,"toPlaybackIdParts",0,w],132655);try{var e6="u">typeof window?window:e.g;e6._sentryModuleMetadata=e6._sentryModuleMetadata||{},e6._sentryModuleMetadata[(new e6.Error).stack]=Object.assign({},e6._sentryModuleMetadata[(new e6.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let e7=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],te=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function tt(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${tr(e)}></audio>
    </slot>
    <slot></slot>
  `}function ta(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${tr(e)}></video>
    </slot>
    <slot></slot>
  `}function ti(e,{tag:t,is:a}){let i=globalThis.document?.createElement?.(t,{is:a}),r=i?function(e){let t=[];for(let a=Object.getPrototypeOf(e);a&&a!==HTMLElement.prototype;a=Object.getPrototypeOf(a)){let e=Object.getOwnPropertyNames(a);t.push(...e)}return t}(i):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?tt:ta;static shadowRootOptions={mode:"open"};static Events=e7;static #e=!1;static get observedAttributes(){return n.#t(),[...i?.constructor?.observedAttributes??[],...te]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof i[t])this.prototype[t]=function(...e){return this.#a(),(()=>{if(this.call)return this.call(t,...e);let a=this.nativeEl?.[t];return a?.apply(this.nativeEl,e)})()};else{let a={get(){this.#a();let a=t.toLowerCase();if(e.has(a)){let e=this.getAttribute(a);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(a.set=function(a){this.#a();let i=t.toLowerCase();e.has(i)?!0===a||!1===a||null==a?this.toggleAttribute(i,!!a):this.setAttribute(i,a):this.set?this.set(t,a):this.nativeEl&&(this.nativeEl[t]=a)}),Object.defineProperty(this.prototype,t,a)}}#i=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#a(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#a(){this.#i||(this.#i=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let a of e)t[a.name]=a.value;return t}(this.attributes);a&&(e.is=a),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let a=this.#n.get(t);a||(a=t.cloneNode(),this.#n.set(t,a),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(a),this.#h(a)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:a}=t,i=this.#n.get(e);i&&a&&(i.setAttribute(a,e.getAttribute(a)??""),this.#h(i))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,a){this.#a(),this.#m(e,t,a)}#m(e,t,a){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===a?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==a&&this.nativeEl?.setAttribute(e,a))}connectedCallback(){this.#a(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function tr(e){let t="";for(let a in e){if(!te.includes(a))continue;let i=e[a];""===i?t+=` ${a}`:t+=` ${a}="${i}"`}return t}let tn=ti(globalThis.HTMLElement??class{},{tag:"video"});ti(globalThis.HTMLElement??class{},{tag:"audio"});try{var ts="u">typeof window?window:e.g;ts._sentryModuleMetadata=ts._sentryModuleMetadata||{},ts._sentryModuleMetadata[(new ts.Error).stack]=Object.assign({},ts._sentryModuleMetadata[(new ts.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var to,tl,td,tu,tc,th,tm,tp,tv,tb,tE,tg,ty,tf,tA=e=>{throw TypeError(e)},tw=(e,t,a)=>t.has(e)||tA("Cannot "+a),tk=(e,t,a)=>(tw(e,t,"read from private field"),a?a.call(e):t.get(e)),tT=(e,t,a)=>t.has(e)?tA("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),t_=(e,t,a,i)=>(tw(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),tM=(e,t,a)=>(tw(e,t,"access private method"),a),tC=(()=>{try{return"0.30.6"}catch{}return"UNKNOWN"})(),tI=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,tR={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},tS=Object.values(tR),tL="mux-video",tD=class extends tn{constructor(){super(),tT(this,tE),tT(this,to),tT(this,tl),tT(this,td,{}),tT(this,tu,{}),tT(this,tc),tT(this,th),tT(this,tm),tT(this,tp),tT(this,tv,""),tT(this,tb,e=>{var t;let a=ex(this.nativeEl),i=null!=(t=this.metadata)?t:{};this.metadata={...a,...i},(null==a?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(t_(this,tv,"default"),this.updateLogo())}),tT(this,ty),t_(this,tl,eC())}static get NAME(){return tL}static get VERSION(){return tC}static get observedAttributes(){var e;return[...tS,...null!=(e=tn.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?tI:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${tn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[tR.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(tR.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?E.includes(e)?this.setAttribute(tR.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${E.join()}`):this.removeAttribute(tR.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(tR.PLAYER_INIT_TIME)?+this.getAttribute(tR.PLAYER_INIT_TIME):tk(this,tl)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(tR.PLAYER_INIT_TIME):this.setAttribute(tR.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=tk(this,tm))?e:tL}set playerSoftwareName(e){t_(this,tm,e)}get playerSoftwareVersion(){var e;return null!=(e=tk(this,th))?e:tC}set playerSoftwareVersion(e){t_(this,th,e)}get _hls(){var e;return null==(e=tk(this,tE,tg))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=eD(this.nativeEl))?e:null}get errorTranslator(){return tk(this,tp)}set errorTranslator(e){t_(this,tp,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(tR.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(tR.TYPE,e):this.removeAttribute(tR.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(tR.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(tR.DEBUG,""):this.removeAttribute(tR.DEBUG))}get disableTracking(){return this.hasAttribute(tR.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(tR.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(tR.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(tR.DISABLE_COOKIES,""):this.removeAttribute(tR.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(tR.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(tR.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(tR.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(tR.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(tR.START_TIME):this.setAttribute(tR.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(tR.PLAYBACK_ID)?this.getAttribute(tR.PLAYBACK_ID):null!=(e=eL(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(tR.PLAYBACK_ID,e):this.removeAttribute(tR.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(tR.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(tR.MAX_RESOLUTION,e):this.removeAttribute(tR.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(tR.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(tR.MIN_RESOLUTION,e):this.removeAttribute(tR.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(tR.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(tR.MAX_AUTO_RESOLUTION):this.setAttribute(tR.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(tR.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(tR.RENDITION_ORDER,e):this.removeAttribute(tR.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(tR.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(tR.PROGRAM_START_TIME):this.setAttribute(tR.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(tR.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(tR.PROGRAM_END_TIME):this.setAttribute(tR.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(tR.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(tR.ASSET_START_TIME):this.setAttribute(tR.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(tR.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(tR.ASSET_END_TIME):this.setAttribute(tR.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(tR.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(tR.CUSTOM_DOMAIN,e):this.removeAttribute(tR.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:tk(this,ty)}set capRenditionToPlayerSize(e){t_(this,ty,e)}get drmToken(){var e;return null!=(e=this.getAttribute(tR.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(tR.DRM_TOKEN,e):this.removeAttribute(tR.DRM_TOKEN))}get playbackToken(){var e,t,a,i;if(this.hasAttribute(tR.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(tR.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(tR.PLAYBACK_ID)){let[,e]=w(null!=(t=this.playbackId)?t:"");return null!=(a=new URLSearchParams(e).get("token"))?a:void 0}if(this.src)return null!=(i=new URLSearchParams(this.src).get("token"))?i:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(tR.PLAYBACK_TOKEN,e):this.removeAttribute(tR.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(tR.PLAYBACK_TOKEN),t=this.getAttribute(tR.DRM_TOKEN);return{...tk(this,tu),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){t_(this,tu,null!=e?e:{})}get ended(){return eK(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(tR.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(tR.ENV_KEY,e):this.removeAttribute(tR.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(tR.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(tR.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(tR.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(tR.STREAM_TYPE))?e:eO(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(tR.STREAM_TYPE,e):this.removeAttribute(tR.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(tR.TARGET_LIVE_WINDOW)?+this.getAttribute(tR.TARGET_LIVE_WINDOW):eN(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(tR.TARGET_LIVE_WINDOW):this.setAttribute(tR.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(tR.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,i=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,i-a)}return eU(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(tR.LIVE_EDGE_OFFSET))return+this.getAttribute(tR.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(tR.LIVE_EDGE_OFFSET):this.setAttribute(tR.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return eP(this.nativeEl)}async addCuePoints(e){return F(this.nativeEl,e)}get activeCuePoint(){return G(this.nativeEl)}get cuePoints(){return j(this.nativeEl)}async addChapters(e){return X(this.nativeEl,e)}get activeChapter(){return ee(this.nativeEl)}get chapters(){return J(this.nativeEl)}getStartDate(){return ea(this.nativeEl,this._hls)}get currentPdt(){return ei(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(tR.PREFER_PLAYBACK);if(e===v.MSE||e===v.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===v.MSE||e===v.NATIVE?this.setAttribute(tR.PREFER_PLAYBACK,e):this.removeAttribute(tR.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![tR.METADATA_URL].includes(e)).reduce((e,t)=>{let a=this.getAttribute(t);return null!=a&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...tk(this,td)}}set metadata(e){t_(this,td,null!=e?e:{}),this.mux&&this.mux.emit("hb",tk(this,td))}get _hlsConfig(){return tk(this,tc)}set _hlsConfig(e){t_(this,tc,e)}get logo(){var e;return null!=(e=this.getAttribute(tR.LOGO))?e:tk(this,tv)}set logo(e){e?this.setAttribute(tR.LOGO,e):this.removeAttribute(tR.LOGO)}load(){eV(this,this.nativeEl,tk(this,tE,tg))}unload(){eF(this.nativeEl,tk(this,tE,tg),this)}attributeChangedCallback(e,t,a){var i,r;switch(tn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,a),e){case tR.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=a?a:void 0;break;case tR.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=a?a:void 0;break;case"src":{let e=!!t,i=!!a;!e&&i?tM(this,tE,tf).call(this):e&&!i?this.unload():e&&i&&(this.unload(),tM(this,tE,tf).call(this));break}case"autoplay":if(a===t)break;null==(i=tk(this,tE,tg))||i.setAutoplay(this.autoplay);break;case"preload":if(a===t)break;null==(r=tk(this,tE,tg))||r.setPreload(a);break;case tR.PLAYBACK_ID:case tR.CUSTOM_DOMAIN:case tR.MAX_RESOLUTION:case tR.MIN_RESOLUTION:case tR.RENDITION_ORDER:case tR.PROGRAM_START_TIME:case tR.PROGRAM_END_TIME:case tR.ASSET_START_TIME:case tR.ASSET_END_TIME:case tR.PLAYBACK_TOKEN:this.src=eR(this);break;case tR.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case tR.METADATA_URL:a&&fetch(a).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case tR.STREAM_TYPE:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case tR.TARGET_LIVE_WINDOW:(null==a||a!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case tR.LOGO:(null==a||a!==t)&&this.updateLogo();break;case tR.DISABLE_TRACKING:if(null==a||a!==t){let e=this.currentTime,t=this.paused;this.unload(),tM(this,tE,tf).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case tR.DISABLE_COOKIES:(null==a||a!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case tR.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(tk(this,tv)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",tk(this,tb)),this.nativeEl&&this.src&&!tk(this,tE,tg)&&tM(this,tE,tf).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",tk(this,tb)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};to=new WeakMap,tl=new WeakMap,td=new WeakMap,tu=new WeakMap,tc=new WeakMap,th=new WeakMap,tm=new WeakMap,tp=new WeakMap,tv=new WeakMap,tb=new WeakMap,tE=new WeakSet,tg=function(){return eW(this.nativeEl)},ty=new WeakMap,tf=async function(){tk(this,to)||(await t_(this,to,Promise.resolve()),t_(this,to,null),this.load())};try{var tx="u">typeof window?window:e.g;tx._sentryModuleMetadata=tx._sentryModuleMetadata||{},tx._sentryModuleMetadata[(new tx.Error).stack]=Object.assign({},tx._sentryModuleMetadata[(new tx.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let tO=new WeakMap;class tN extends Error{}class tP extends Error{}let tU=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],tW=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let a=t.deref();a&&e(a)})}}:Set;function tB(){return globalThis.cast?.framework?.CastContext.getInstance()}function t$(){return tB()?.getCurrentSession()}function tH(){return t$()?.getSessionObj().media[0]}function tK(e){return tB().setOptions({...tV(),...e})}function tV(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function tF(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return tU.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function tY(e){try{let a=await (await fetch(e)).text(),i=a,r=function(e){let t=e.split("\n"),a=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let i=t[e+1]?t[e+1].trim():"";i&&!i.startsWith("#")&&a.push(i)}return a}(a);if(r.length>0){let t=new URL(r[0],e).toString();i=await (await fetch(t)).text()}var t=i.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}try{var tj="u">typeof window?window:e.g;tj._sentryModuleMetadata=tj._sentryModuleMetadata||{},tj._sentryModuleMetadata[(new tj.Error).stack]=Object.assign({},tj._sentryModuleMetadata[(new tj.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let tG=new tW,tq=new WeakSet;aL=()=>{globalThis.chrome?.cast?.isAvailable?t||(t=cast.framework,tB().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED,e=>{tG.forEach(t=>tO.get(t).onCastStateChanged?.(e))}),tB().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED,e=>{tG.forEach(t=>tO.get(t).onSessionStateChanged?.(e))}),tG.forEach(e=>tO.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?aL():customElements.whenDefined("google-cast-button").then(aL):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(aL)};let tZ=0;class tz extends EventTarget{#p;#i;#v;#b;#E="disconnected";#g=!1;#y=new Set;#f=new WeakMap;#A=()=>this.#w();constructor(e){super(),this.#p=e,tG.add(this),tO.set(this,{init:()=>this.#a(),onCastStateChanged:()=>this.#k(),onSessionStateChanged:()=>this.#T(),getCastPlayer:()=>this.#_}),this.#a()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#A),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&tq.delete(this.#p),this.#i=!1}get #_(){if(tq.has(this.#p))return this.#v}get state(){return this.#E}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new tN("disableRemotePlayback attribute is present.");return this.#f.set(e,++tZ),this.#y.add(e),queueMicrotask(()=>e(this.#M())),tZ}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new tN("disableRemotePlayback attribute is present.");e?this.#y.delete(e):this.#y.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new tN("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new tP("The RemotePlayback API is disabled on this platform.");let e=tq.has(this.#p);tq.add(this.#p),tK(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await tB().requestSession()}catch(t){if(e||tq.delete(this.#p),"cancel"===t)return;throw Error(t)}tO.get(this.#p)?.loadOnPrompt?.()}#C(){tq.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),tq.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#M(){let e=tB()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#k(){let e=tB().getCastState();if(tq.has(this.#p)&&"CONNECTING"===e&&(this.#E="connecting",this.dispatchEvent(new Event("connecting"))),!this.#g&&e?.includes("CONNECT"))for(let e of(this.#g=!0,this.#y))e(!0);else if(this.#g&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#g=!1,this.#y))e(!1)}async #T(){let{SESSION_RESUMED:e}=t.SessionState;if(tB().getSessionState()===e&&this.#p.castSrc===tH()?.media.contentId){tq.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var a;await (a=new chrome.cast.media.GetStatusRequest,new Promise((e,t)=>{tH().getStatus(a,e,t)}))}catch(e){console.error(e)}this.#b[t.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#a(){t&&!this.#i&&(this.#i=!0,tK(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#A),this.#k(),this.#v=new t.RemotePlayer,new t.RemotePlayerController(this.#v),this.#b={[t.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#E="connected",this.dispatchEvent(new Event("connect"))):(this.#C(),this.#E="disconnected",this.dispatchEvent(new Event("disconnect")))},[t.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#_?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[t.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[t.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#_?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#_?.playerState]))},[t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#_?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#w()}async #w(){let e;if(!this.#_)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),a=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),i=t.map(({language:e,name:t,trackId:i})=>{let{mode:r}=a.find(a=>a.language===e&&a.label===t)??{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),r=i.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=i.find(({mode:e})=>"showing"===e),s=t$()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,a)=>{tH().editTracksInfo(e,t,a)})}catch(e){console.error(e)}}}try{var tQ="u">typeof window?window:e.g;tQ._sentryModuleMetadata=tQ._sentryModuleMetadata||{},tQ._sentryModuleMetadata[(new tQ.Error).stack]=Object.assign({},tQ._sentryModuleMetadata[(new tQ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let tX=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#R={paused:!1};#S=tV();#L;#D;get remote(){if(this.#D)return this.#D;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),tO.set(this,{loadOnPrompt:()=>this.#x()}),this.#D=new tz(this)}return super.remote}get #_(){return tO.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#D?.destroy(),this.#D=null,tO.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),"cast-receiver"===e&&a){this.#S.receiverApplicationId=a;return}if(this.#_)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #x(){this.#R.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#_)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),a=[],i=0;if(t.length&&(e.tracks=t.map(e=>{let t=++i;0===a.length&&"showing"===e.track.mode&&a.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],tF(this.castSrc)){let t=await tY(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#R.paused,r.activeTrackIds=a,await t$()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#_){this.#_.isPaused&&this.#_.controller?.playOrPause();return}return super.play()}pause(){if(this.#_){this.#_.isPaused||this.#_.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#S}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#L}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#L=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#_)switch(this.#_.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#_?this.#_.isPaused:super.paused}get muted(){return this.#_?this.#_?.isMuted:super.muted}set muted(e){if(this.#_){(e&&!this.#_.isMuted||!e&&this.#_.isMuted)&&this.#_.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#_?this.#_?.volumeLevel??1:super.volume}set volume(e){if(this.#_){this.#_.volumeLevel=+e,this.#_.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#_&&this.#_?.isMediaLoaded?this.#_?.duration??NaN:super.duration}get currentTime(){return this.#_&&this.#_?.isMediaLoaded?this.#_?.currentTime??0:super.currentTime}set currentTime(e){if(this.#_){this.#_.currentTime=e,this.#_.controller?.seek();return}super.currentTime=e}};try{var tJ="u">typeof window?window:e.g;tJ._sentryModuleMetadata=tJ._sentryModuleMetadata||{},tJ._sentryModuleMetadata[(new tJ.Error).stack]=Object.assign({},tJ._sentryModuleMetadata[(new tJ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class t0 extends Event{track;constructor(e,t){super(e),this.track=t.track}}try{var t1="u">typeof window?window:e.g;t1._sentryModuleMetadata=t1._sentryModuleMetadata||{},t1._sentryModuleMetadata[(new t1.Error).stack]=Object.assign({},t1._sentryModuleMetadata[(new t1.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let t2=new WeakMap;function t3(e){var t,a;let i;return t2.get(e)??(t=e,a={},(i=t2.get(t))||t2.set(t,i={}),Object.assign(i,a))}try{var t4="u">typeof window?window:e.g;t4._sentryModuleMetadata=t4._sentryModuleMetadata||{},t4._sentryModuleMetadata[(new t4.Error).stack]=Object.assign({},t4._sentryModuleMetadata[(new t4.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function t5(e,t){let a=e.videoTracks;t3(t).media=new WeakRef(e),t3(t).renditionSet||(t3(t).renditionSet=new Set);let i=t3(a).trackSet;i.add(t);let r=i.size-1;r in t8.prototype||Object.defineProperty(t8.prototype,r,{get(){return[...t3(this).trackSet][r]}}),queueMicrotask(()=>{a.dispatchEvent(new t0("addtrack",{track:t}))})}function t9(e){let t=t3(e).media?.deref()?.videoTracks;t&&(t3(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new t0("removetrack",{track:e}))}))}class t8 extends EventTarget{#O;#N;#P;constructor(){super(),t3(this).trackSet=new Set}get #U(){return t3(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}try{var t6="u">typeof window?window:e.g;t6._sentryModuleMetadata=t6._sentryModuleMetadata||{},t6._sentryModuleMetadata[(new t6.Error).stack]=Object.assign({},t6._sentryModuleMetadata[(new t6.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class t7 extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}try{var ae="u">typeof window?window:e.g;ae._sentryModuleMetadata=ae._sentryModuleMetadata||{},ae._sentryModuleMetadata[(new ae.Error).stack]=Object.assign({},ae._sentryModuleMetadata[(new ae.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function at(e){let t=t3(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...t3(e).renditionSet]):[]}class aa extends EventTarget{#W;#B;#P;[Symbol.iterator](){return at(this).values()}get length(){return at(this).length}getRenditionById(e){return at(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return at(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,a]of at(this).entries())a.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}try{var ai="u">typeof window?window:e.g;ai._sentryModuleMetadata=ai._sentryModuleMetadata||{},ai._sentryModuleMetadata[(new ai.Error).stack]=Object.assign({},ai._sentryModuleMetadata[(new ai.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class ar{src;id;width;height;bitrate;frameRate;codec;#$=!1;get selected(){return this.#$}set selected(e){if(this.#$!==e){var t;let a;this.#$=e,t=this,(a=t3(t).media?.deref()?.videoRenditions)&&!t3(a).changeRequested&&(t3(a).changeRequested=!0,queueMicrotask(()=>{delete t3(a).changeRequested,t3(t).track.selected&&a.dispatchEvent(new Event("change"))}))}}}try{var an="u">typeof window?window:e.g;an._sentryModuleMetadata=an._sentryModuleMetadata||{},an._sentryModuleMetadata[(new an.Error).stack]=Object.assign({},an._sentryModuleMetadata[(new an.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class as{id;kind;label="";language="";sourceBuffer;#$=!1;addRendition(e,t,a,i,r,n){var s;let o,l,d,u=new ar;return u.src=e,u.width=t,u.height=a,u.frameRate=n,u.bitrate=r,u.codec=i,s=this,o=t3(s).media?.deref()?.videoRenditions,t3(u).media=t3(s).media,t3(u).track=s,(l=t3(s).renditionSet).add(u),(d=l.size-1)in aa.prototype||Object.defineProperty(aa.prototype,d,{get(){return at(this)[d]}}),queueMicrotask(()=>{o&&s.selected&&o.dispatchEvent(new t7("addrendition",{rendition:u}))}),u}removeRendition(e){let t,a;t=t3(e).media?.deref()?.videoRenditions,a=t3(e).track,t3(a).renditionSet.delete(e),queueMicrotask(()=>{let a=t3(e).track;t&&a.selected&&t.dispatchEvent(new t7("removerendition",{rendition:e}))})}get selected(){return this.#$}set selected(e){this.#$===e||(this.#$=e,!0===e&&function(e){let t=t3(e).media?.deref()?.videoTracks??[],a=!1;for(let i of t)i!==e&&(i.selected=!1,a=!0);if(a){if(t3(t).changeRequested)return;t3(t).changeRequested=!0,queueMicrotask(()=>{delete t3(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}try{var ao="u">typeof window?window:e.g;ao._sentryModuleMetadata=ao._sentryModuleMetadata||{},ao._sentryModuleMetadata[(new ao.Error).stack]=Object.assign({},ao._sentryModuleMetadata[(new ao.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function al(e){let t=t3(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...t3(e).renditionSet]):[]}class ad extends EventTarget{#W;#B;#P;[Symbol.iterator](){return al(this).values()}get length(){return al(this).length}getRenditionById(e){return al(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return al(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,a]of al(this).entries())a.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}try{var au="u">typeof window?window:e.g;au._sentryModuleMetadata=au._sentryModuleMetadata||{},au._sentryModuleMetadata[(new au.Error).stack]=Object.assign({},au._sentryModuleMetadata[(new au.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class ac{src;id;bitrate;codec;#$=!1;get selected(){return this.#$}set selected(e){if(this.#$!==e){var t;let a;this.#$=e,t=this,(a=t3(t).media?.deref()?.audioRenditions)&&!t3(a).changeRequested&&(t3(a).changeRequested=!0,queueMicrotask(()=>{delete t3(a).changeRequested,t3(t).track.enabled&&a.dispatchEvent(new Event("change"))}))}}}try{var ah="u">typeof window?window:e.g;ah._sentryModuleMetadata=ah._sentryModuleMetadata||{},ah._sentryModuleMetadata[(new ah.Error).stack]=Object.assign({},ah._sentryModuleMetadata[(new ah.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function am(e,t){let a=e.audioTracks;t3(t).media=new WeakRef(e),t3(t).renditionSet||(t3(t).renditionSet=new Set);let i=t3(a).trackSet;i.add(t);let r=i.size-1;r in av.prototype||Object.defineProperty(av.prototype,r,{get(){return[...t3(this).trackSet][r]}}),queueMicrotask(()=>{a.dispatchEvent(new t0("addtrack",{track:t}))})}function ap(e){let t=t3(e).media?.deref()?.audioTracks;t&&(t3(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new t0("removetrack",{track:e}))}))}class av extends EventTarget{#O;#N;#P;constructor(){super(),t3(this).trackSet=new Set}get #U(){return t3(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}try{var ab="u">typeof window?window:e.g;ab._sentryModuleMetadata=ab._sentryModuleMetadata||{},ab._sentryModuleMetadata[(new ab.Error).stack]=Object.assign({},ab._sentryModuleMetadata[(new ab.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class aE{id;kind;label="";language="";sourceBuffer;#H=!1;addRendition(e,t,a){var i;let r,n,s,o=new ac;return o.src=e,o.codec=t,o.bitrate=a,i=this,r=t3(i).media?.deref()?.audioRenditions,t3(o).media=t3(i).media,t3(o).track=i,(n=t3(i).renditionSet).add(o),(s=n.size-1)in ad.prototype||Object.defineProperty(ad.prototype,s,{get(){return al(this)[s]}}),queueMicrotask(()=>{r&&i.enabled&&r.dispatchEvent(new t7("addrendition",{rendition:o}))}),o}removeRendition(e){let t,a;t=t3(e).media?.deref()?.audioRenditions,a=t3(e).track,t3(a).renditionSet.delete(e),queueMicrotask(()=>{let a=t3(e).track;t&&a.enabled&&t.dispatchEvent(new t7("removerendition",{rendition:e}))})}get enabled(){return this.#H}set enabled(e){if(this.#H!==e){let t;this.#H=e,(t=t3(this).media?.deref()?.audioTracks)&&!t3(t).changeRequested&&(t3(t).changeRequested=!0,queueMicrotask(()=>{delete t3(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}try{var ag="u">typeof window?window:e.g;ag._sentryModuleMetadata=ag._sentryModuleMetadata||{},ag._sentryModuleMetadata[(new ag.Error).stack]=Object.assign({},ag._sentryModuleMetadata[(new ag.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let ay=aw(globalThis.HTMLMediaElement,"video"),af=aw(globalThis.HTMLMediaElement,"audio");function aA(e){if(!e?.prototype)return e;let t=aw(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=t3(e).videoTracks;if(!t&&(t=new t8,t3(e).videoTracks=t,ay)){let a=ay.call(e.nativeEl??e);for(let t of a)t5(e,t);a.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",i=>{if([...t].some(e=>e instanceof as)){for(let e of a)t9(e);return}t5(e,i.track)}),a.addEventListener("removetrack",e=>{t9(e.track)})}return t}});let a=aw(e,"audio");(!a||`${a}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=t3(e).audioTracks;if(!t&&(t=new av,t3(e).audioTracks=t,af)){let a=af.call(e.nativeEl??e);for(let t of a)am(e,t);a.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",i=>{if([...t].some(e=>e instanceof aE)){for(let e of a)ap(e);return}am(e,i.track)}),a.addEventListener("removetrack",e=>{ap(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",a=""){let i=new as;return i.kind=e,i.label=t,i.language=a,t5(this,i),i}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=t9),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",a=""){let i=new aE;return i.kind=e,i.label=t,i.language=a,am(this,i),i}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=ap),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return i(this)}});let i=e=>{let t=t3(e).videoRenditions;return t||(t3(t=new aa).media=new WeakRef(e),t3(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=t3(e).audioRenditions;return t||(t3(t=new ad).media=new WeakRef(e),t3(e).audioRenditions=t),t};return e}function aw(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}try{var ak="u">typeof window?window:e.g;ak._sentryModuleMetadata=ak._sentryModuleMetadata||{},ak._sentryModuleMetadata[(new ak.Error).stack]=Object.assign({},ak._sentryModuleMetadata[(new ak.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var aT="u">typeof window?window:e.g;aT._sentryModuleMetadata=aT._sentryModuleMetadata||{},aT._sentryModuleMetadata[(new aT.Error).stack]=Object.assign({},aT._sentryModuleMetadata[(new aT.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var a_=e=>{throw TypeError(e)},aM=(e,t,a)=>t.has(e)||a_("Cannot "+a),aC=(e,t,a)=>(aM(e,t,"read from private field"),a?a.call(e):t.get(e)),aI=(e,t,a)=>t.has(e)?a_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),aR=(e,t,a,i)=>(aM(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),aS=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends aS{});var aL,aD,ax=class extends aS{},aO=class{constructor(e,t={}){aI(this,aD),aR(this,aD,null==t?void 0:t.detail)}get detail(){return aC(this,aD)}initCustomEvent(){}};aD=new WeakMap;var aN={document:{createElement:function(e,t){return new ax}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ax)},CustomEvent:aO,EventTarget:aS,HTMLElement:ax,HTMLVideoElement:class extends aS{}},aP="u"<typeof window||void 0===globalThis.customElements,aU=aP?aN:globalThis;aP&&aN.document;var aW,aB=class extends tX(aA(tD)){constructor(){super(...arguments),aI(this,aW)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=aC(this,aW))?e:this.muxCastCustomData}set castCustomData(e){aR(this,aW,e)}};aW=new WeakMap,aU.customElements.get("mux-video")||(aU.customElements.define("mux-video",aB),aU.MuxVideoElement=aB);try{var a$="u">typeof window?window:e.g;a$._sentryModuleMetadata=a$._sentryModuleMetadata||{},a$._sentryModuleMetadata[(new a$.Error).stack]=Object.assign({},a$._sentryModuleMetadata[(new a$.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let aH={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},aK={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},aV={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},aF=Object.entries(aV),aY=aF.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{}),aj=aF.reduce((e,[t,a])=>(e[t]=a.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),aG=Object.entries(aj).reduce((e,[t,a])=>{let i=aY[t];return i&&(e[a]=i),e},{userinactivechange:"userinactive"}),aq=Object.entries(aY).reduce((e,[t,a])=>{let i=aj[t];return i&&(e[a]=i),e},{userinactive:"userinactivechange"}),aZ={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},az={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},aQ={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},aX={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},aJ={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},a0={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};e.s(["AttributeToStateChangeEventMap",0,aq,"AvailabilityStates",0,aX,"MediaStateChangeEvents",0,aj,"MediaStateReceiverAttributes",0,aK,"MediaUIAttributes",0,aY,"MediaUIEvents",0,aH,"MediaUIProps",0,aV,"PointerTypes",0,aQ,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,aG,"StreamTypes",0,aJ,"TextTrackKinds",0,aZ,"TextTrackModes",0,az,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,a0],440798),e.i(440798);try{var a1="u">typeof window?window:e.g;a1._sentryModuleMetadata=a1._sentryModuleMetadata||{},a1._sentryModuleMetadata[(new a1.Error).stack]=Object.assign({},a1._sentryModuleMetadata[(new a1.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function a2(e){if(e){let{id:t,width:a,height:i}=e;return[t,a,i].filter(e=>null!=e).join(":")}}function a3(e){if(e){let[t,a,i]=e.split(":");return{id:t,width:+a,height:+i}}}function a4(e){if(e){let{id:t,kind:a,language:i,label:r}=e;return[t,a,i,r].filter(e=>null!=e).join(":")}}function a5(e){if(e){let[t,a,i,r]=e.split(":");return{id:t,kind:a,language:i,label:r}}}function a9(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function a8(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let a6=e=>new Promise(t=>setTimeout(t,e));try{var a7="u">typeof window?window:e.g;a7._sentryModuleMetadata=a7._sentryModuleMetadata||{},a7._sentryModuleMetadata[(new a7.Error).stack]=Object.assign({},a7._sentryModuleMetadata[(new a7.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var ie="u">typeof window?window:e.g;ie._sentryModuleMetadata=ie._sentryModuleMetadata||{},ie._sentryModuleMetadata[(new ie.Error).stack]=Object.assign({},ie._sentryModuleMetadata[(new ie.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let it={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},ia=(null==(ul=globalThis.navigator)?void 0:ul.language)||"en",ii=(e,t={})=>(e=>{var t,a,i;let[r]=ia.split("-");return(null==(t=it[ia])?void 0:t[e])||(null==(a=it[r])?void 0:a[e])||(null==(i=it.en)?void 0:i[e])||e})(e).replace(/\{(\w+)\}/g,(e,a)=>a in t?String(t[a]):`{${a}}`);try{var ir="u">typeof window?window:e.g;ir._sentryModuleMetadata=ir._sentryModuleMetadata||{},ir._sentryModuleMetadata[(new ir.Error).stack]=Object.assign({},ir._sentryModuleMetadata[(new ir.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let is=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],io=e=>{if(!a9(e))return"";let t=Math.abs(e),a=t!==e,i=new Date(0,0,0,0,0,t,0),r=[i.getHours(),i.getMinutes(),i.getSeconds()].map((e,t)=>{let a;return e&&(a=1===e?ii(is[t].singular):ii(is[t].plural),`${e} ${a}`)}).filter(e=>e).join(", ");return a?ii("{time} remaining",{time:r}):r};function il(e,t){let a=!1;e<0&&(a=!0,e=0-e);let i=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=i="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(a?"-":"")+n+r+(i=i<10?"0"+i:i)}let id=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,id,"formatAsTimePhrase",0,io,"formatTime",0,il,"serializeTimeRanges",0,function(e=id){return Array.from(e).map((t,a)=>[Number(e.start(a).toFixed(3)),Number(e.end(a).toFixed(3))].join(":")).join(" ")}],436594),e.i(436594);try{var iu="u">typeof window?window:e.g;iu._sentryModuleMetadata=iu._sentryModuleMetadata||{},iu._sentryModuleMetadata[(new iu.Error).stack]=Object.assign({},iu._sentryModuleMetadata[(new iu.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class ic{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ih extends ic{}class im extends ih{constructor(){super(...arguments),this.role=null}}let ip={createElement:function(){return new iv.HTMLElement},createElementNS:function(){return new iv.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},iv={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:ip,Node:ih,Element:im,HTMLElement:class extends im{constructor(){super(...arguments),this.innerHTML=""}get content(){return new iv.DocumentFragment}},DocumentFragment:class extends ic{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},ib="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,iE=Object.keys(iv).every(e=>e in globalThis),ig=ib&&!iE?iv:globalThis,iy=ib&&!iE?ip:globalThis.document;try{var iA="u">typeof window?window:e.g;iA._sentryModuleMetadata=iA._sentryModuleMetadata||{},iA._sentryModuleMetadata[(new iA.Error).stack]=Object.assign({},iA._sentryModuleMetadata[(new iA.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let iw=new WeakMap,ik=e=>{let t=iw.get(e);return t||iw.set(e,t=new Set),t},iT=new ig.ResizeObserver(e=>{for(let t of e)for(let e of ik(t.target))e(t)});function i_(e,t){ik(e).add(t),iT.observe(e)}function iM(e,t){let a=ik(e);a.delete(t),a.size||iT.unobserve(e)}try{var iC="u">typeof window?window:e.g;iC._sentryModuleMetadata=iC._sentryModuleMetadata||{},iC._sentryModuleMetadata[(new iC.Error).stack]=Object.assign({},iC._sentryModuleMetadata[(new iC.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function iI(e){let t={};for(let a of e)t[a.name]=a.value;return t}function iR(e){var t;return null!=(t=iS(e))?t:iO(e,"media-controller")}function iS(e){var t;let{MEDIA_CONTROLLER:a}=aK,i=e.getAttribute(a);if(i)return null==(t=iP(e))?void 0:t.getElementById(i)}let iL=(e,t,a=".value")=>{let i=e.querySelector(a);i&&(i.textContent=t)},iD=(e,t)=>{let a,i;return(a=`slot[name="${t}"]`,!(i=e.shadowRoot.querySelector(a))?[]:i.children)[0]},ix=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ix(e,t.getRootNode().host)),iO=(e,t)=>{if(!e)return null;let a=e.closest(t);return a||iO(e.getRootNode().host,t)};function iN(e=document){var t;let a=null==e?void 0:e.activeElement;return a?null!=(t=iN(a.shadowRoot))?t:a:null}function iP(e){var t;let a=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return a instanceof ShadowRoot||a instanceof Document?a:null}function iU(e,{depth:t=3,checkOpacity:a=!0,checkVisibilityCSS:i=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:a,checkVisibilityCSS:i});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(a&&"0"===e.opacity||i&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function iW(e,t){let a=function(e,t){var a,i;let r;for(r of null!=(a=e.querySelectorAll("style:not([media])"))?a:[]){let e;try{e=null==(i=r.sheet)?void 0:i.cssRules}catch{continue}for(let a of null!=e?e:[])if(t(a.selectorText))return a}}(e,e=>e===t);return a||iB(e,t)}function iB(e,t){var a,i;let r=null!=(a=e.querySelectorAll("style:not([media])"))?a:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(i=n.sheet.cssRules)?void 0:i[s]}function i$(e,t,a=NaN){let i=e.getAttribute(t);return null!=i?+i:a}function iH(e,t,a){let i=+a;if(null==a||Number.isNaN(i)){e.hasAttribute(t)&&e.removeAttribute(t);return}i$(e,t,void 0)!==i&&e.setAttribute(t,`${i}`)}function iK(e,t){return e.hasAttribute(t)}function iV(e,t,a){if(null==a){e.hasAttribute(t)&&e.removeAttribute(t);return}iK(e,t)!=a&&e.toggleAttribute(t,a)}function iF(e,t,a=null){var i;return null!=(i=e.getAttribute(t))?i:a}function iY(e,t,a){if(null==a){e.hasAttribute(t)&&e.removeAttribute(t);return}let i=`${a}`;iF(e,t,void 0)!==i&&e.setAttribute(t,i)}try{var ij="u">typeof window?window:e.g;ij._sentryModuleMetadata=ij._sentryModuleMetadata||{},ij._sentryModuleMetadata[(new ij.Error).stack]=Object.assign({},ij._sentryModuleMetadata[(new ij.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var iG=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},iq=(e,t,a)=>(iG(e,t,"read from private field"),a?a.call(e):t.get(e)),iZ=(e,t,a,i)=>(iG(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class iz extends ig.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,ud,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[aK.MEDIA_CONTROLLER,aY.MEDIA_PAUSED]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===aK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=iq(this,ud))?void 0:i.unassociateElement)||r.call(i,this),iZ(this,ud,null)),a&&this.isConnected&&(iZ(this,ud,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=iq(this,ud))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a,i;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),iZ(this,ud,(a=this,(r=a.getAttribute(aK.MEDIA_CONTROLLER))?null==(i=a.getRootNode())?void 0:i.getElementById(r):iO(a,"media-controller"))),this.getAttribute(aK.MEDIA_CONTROLLER)&&(null==(t=null==(e=iq(this,ud))?void 0:e.associateElement)||t.call(e,this)),iq(this,ud)&&(iq(this,ud).addEventListener("pointerdown",this),iq(this,ud).addEventListener("click",this),iq(this,ud).hasAttribute("tabindex")||(iq(this,ud).tabIndex=0))}disconnectedCallback(){var e,t,a,i;this.getAttribute(aK.MEDIA_CONTROLLER)&&(null==(t=null==(e=iq(this,ud))?void 0:e.unassociateElement)||t.call(e,this)),null==(a=iq(this,ud))||a.removeEventListener("pointerdown",this),null==(i=iq(this,ud))||i.removeEventListener("click",this),iZ(this,ud,null)}handleEvent(e){var t;let a=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==a?void 0:a.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:a}=e,{left:i,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-i,l=a-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===aQ.TOUCH)return void this.handleTap(e);if(d===aQ.MOUSE||d===aQ.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return iK(this,aY.MEDIA_PAUSED)}set mediaPaused(e){iV(this,aY.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?aH.MEDIA_PLAY_REQUEST:aH.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new ig.CustomEvent(t,{composed:!0,bubbles:!0}))}}ud=new WeakMap,iz.shadowRootOptions={mode:"open"},iz.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},ig.customElements.get("media-gesture-receiver")||ig.customElements.define("media-gesture-receiver",iz);try{var iQ="u">typeof window?window:e.g;iQ._sentryModuleMetadata=iQ._sentryModuleMetadata||{},iQ._sentryModuleMetadata[(new iQ.Error).stack]=Object.assign({},iQ._sentryModuleMetadata[(new iQ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var iX=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},iJ=(e,t,a)=>(iX(e,t,"read from private field"),a?a.call(e):t.get(e)),i0=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},i1=(e,t,a,i)=>(iX(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),i2=(e,t,a)=>(iX(e,t,"access private method"),a);let i3="audio",i4="autohide",i5="breakpoints",i9="gesturesdisabled",i8="keyboardcontrol",i6="noautohide",i7="userinactive",re="autohideovercontrols",rt=Object.values(aY);function ra(e,t){var a,i,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(a=e.getAttribute(i5))?a:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(i=n,r=t,Object.keys(i).filter(e=>r>=parseInt(i[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(aj.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(aj.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class ri extends ig.HTMLElement{constructor(){if(super(),i0(this,ug),i0(this,uf),i0(this,uw),i0(this,uT),i0(this,uM),i0(this,uu,void 0),i0(this,uc,0),i0(this,uh,null),i0(this,um,null),i0(this,up,void 0),this.breakpointsComputed=!1,i0(this,uv,e=>{let t=this.media;for(let a of e)if("childList"===a.type){for(let e of a.removedNodes){if("media"!=e.slot||a.target!=this)continue;let i=a.previousSibling&&a.previousSibling.previousElementSibling;if(i&&t){let t="media"!==i.slot;for(;null!==(i=i.previousSibling);)"media"==i.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of a.addedNodes)e===t&&this.handleMediaUpdated(t)}}),i0(this,ub,!1),i0(this,uE,e=>{iJ(this,ub)||(setTimeout(()=>{ra(e.target,e.contentRect.width),i1(this,ub,!1)},0),i1(this,ub,!0))}),i0(this,uI,void 0),i0(this,uR,()=>{if(!iJ(this,uI).assignedElements({flatten:!0}).length){iJ(this,uh)&&this.mediaUnsetCallback(iJ(this,uh));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}i1(this,uu,new MutationObserver(iJ(this,uv)))}static get observedAttributes(){return[i4,i9].concat(rt).filter(e=>![aY.MEDIA_RENDITION_LIST,aY.MEDIA_AUDIO_TRACK_LIST,aY.MEDIA_CHAPTERS_CUES,aY.MEDIA_WIDTH,aY.MEDIA_HEIGHT,aY.MEDIA_ERROR,aY.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,a){e.toLowerCase()==i4&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(i1(this,uh,e),e.localName.includes("-")&&await ig.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;iJ(this,uu).observe(this,{childList:!0,subtree:!0}),i_(this,iJ(this,uE));let t=null!=this.getAttribute(i3)?ii("audio player"):ii("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(i7,""),ra(this,this.getBoundingClientRect().width);let a=this.querySelector(":scope > slot[slot=media]");a&&(i1(this,uI,a),iJ(this,uI).addEventListener("slotchange",iJ(this,uR))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=ig.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;iM(this,iJ(this,uE)),clearTimeout(iJ(this,um)),iJ(this,uu).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=ig.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),iJ(this,uI)&&(iJ(this,uI).removeEventListener("slotchange",iJ(this,uR)),i1(this,uI,null)),i1(this,ub,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){i1(this,uh,null)}handleEvent(e){switch(e.type){case"pointerdown":i1(this,uc,e.timeStamp);break;case"pointermove":i2(this,ug,uy).call(this,e);break;case"pointerup":i2(this,uf,uA).call(this,e);break;case"mouseleave":i2(this,uw,uk).call(this);break;case"mouseup":this.removeAttribute(i8);break;case"keyup":i2(this,uM,uC).call(this),this.setAttribute(i8,"")}}set autohide(e){let t=Number(e);i1(this,up,isNaN(t)?0:t)}get autohide(){return(void 0===iJ(this,up)?2:iJ(this,up)).toString()}get breakpoints(){return iF(this,i5)}set breakpoints(e){iY(this,i5,e)}get audio(){return iK(this,i3)}set audio(e){iV(this,i3,e)}get gesturesDisabled(){return iK(this,i9)}set gesturesDisabled(e){iV(this,i9,e)}get keyboardControl(){return iK(this,i8)}set keyboardControl(e){iV(this,i8,e)}get noAutohide(){return iK(this,i6)}set noAutohide(e){iV(this,i6,e)}get autohideOverControls(){return iK(this,re)}set autohideOverControls(e){iV(this,re,e)}get userInteractive(){return iK(this,i7)}set userInteractive(e){iV(this,i7,e)}}uu=new WeakMap,uc=new WeakMap,uh=new WeakMap,um=new WeakMap,up=new WeakMap,uv=new WeakMap,ub=new WeakMap,uE=new WeakMap,ug=new WeakSet,uy=function(e){if("mouse"!==e.pointerType&&e.timeStamp-iJ(this,uc)<250)return;i2(this,uT,u_).call(this),clearTimeout(iJ(this,um));let t=this.hasAttribute(re);([this,this.media].includes(e.target)||t)&&i2(this,uM,uC).call(this)},uf=new WeakSet,uA=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(i7);[this,this.media].includes(e.target)&&t?i2(this,uw,uk).call(this):i2(this,uM,uC).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&i2(this,uM,uC).call(this)},uw=new WeakSet,uk=function(){if(0>iJ(this,up)||this.hasAttribute(i7))return;this.setAttribute(i7,"");let e=new ig.CustomEvent(aj.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},uT=new WeakSet,u_=function(){if(!this.hasAttribute(i7))return;this.removeAttribute(i7);let e=new ig.CustomEvent(aj.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},uM=new WeakSet,uC=function(){i2(this,uT,u_).call(this),clearTimeout(iJ(this,um));let e=parseInt(this.autohide);e<0||i1(this,um,setTimeout(()=>{i2(this,uw,uk).call(this)},1e3*e))},uI=new WeakMap,uR=new WeakMap,ri.shadowRootOptions={mode:"open"},ri.getTemplateHTML=function(e){return`
    <style>
      
      :host([${aY.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${i3}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${i3}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${i3}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${i3}])[${i9}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${i3}])[${i9}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${i3}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${i3}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${i3}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${i3}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${i6}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${i7}]:not([${aY.MEDIA_PAUSED}]):not([${aY.MEDIA_IS_AIRPLAYING}]):not([${aY.MEDIA_IS_CASTING}]):not([${i3}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${i6}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${i7}]:not([${i6}]):not([${aY.MEDIA_PAUSED}]):not([${aY.MEDIA_IS_CASTING}]):not([${i3}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${i7}][${re}]:not([${i6}]):not([${aY.MEDIA_PAUSED}]):not([${aY.MEDIA_IS_CASTING}]):not([${i3}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${i3}])[${aY.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${iz.shadowRootOptions.mode}">
          ${iz.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},ig.customElements.get("media-container")||ig.customElements.define("media-container",ri);try{var rr="u">typeof window?window:e.g;rr._sentryModuleMetadata=rr._sentryModuleMetadata||{},rr._sentryModuleMetadata[(new rr.Error).stack]=Object.assign({},rr._sentryModuleMetadata[(new rr.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var rn=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},rs=(e,t,a)=>(rn(e,t,"read from private field"),a?a.call(e):t.get(e)),ro=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},rl=(e,t,a,i)=>(rn(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class rd{constructor(e,t,{defaultValue:a}={defaultValue:void 0}){ro(this,uO),ro(this,uS,void 0),ro(this,uL,void 0),ro(this,uD,void 0),ro(this,ux,new Set),rl(this,uS,e),rl(this,uL,t),rl(this,uD,new Set(a))}[Symbol.iterator](){return rs(this,uO,uN).values()}get length(){return rs(this,uO,uN).size}get value(){var e;return null!=(e=[...rs(this,uO,uN)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rl(this,ux,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...rs(this,uO,uN)][e]}values(){return rs(this,uO,uN).values()}forEach(e,t){rs(this,uO,uN).forEach(e,t)}add(...e){var t,a;e.forEach(e=>rs(this,ux).add(e)),(""!==this.value||(null==(t=rs(this,uS))?void 0:t.hasAttribute(`${rs(this,uL)}`)))&&(null==(a=rs(this,uS))||a.setAttribute(`${rs(this,uL)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>rs(this,ux).delete(e)),null==(t=rs(this,uS))||t.setAttribute(`${rs(this,uL)}`,`${this.value}`)}contains(e){return rs(this,uO,uN).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}uS=new WeakMap,uL=new WeakMap,uD=new WeakMap,ux=new WeakMap,uO=new WeakSet,uN=function(){return rs(this,ux).size?rs(this,ux):rs(this,uD)};try{var ru="u">typeof window?window:e.g;ru._sentryModuleMetadata=ru._sentryModuleMetadata||{},ru._sentryModuleMetadata[(new ru.Error).stack]=Object.assign({},ru._sentryModuleMetadata[(new ru.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let rc=(e="")=>{let[t,a,i]=e.split(":"),r=i?decodeURIComponent(i):void 0;return{kind:"cc"===t?aZ.CAPTIONS:aZ.SUBTITLES,language:a,label:r}},rh=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let a=rc(e);return{...t,...a}}),rm=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?rc(e):e):"string"==typeof e?rh(e):[e]:[],rp=({kind:e,label:t,language:a}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${a}:${encodeURIComponent(t)}`:a,rv=(e=[])=>Array.prototype.map.call(e,rp).join(" "),rb=e=>{let t=Object.entries(e).map(([e,t])=>a=>a[e]===t);return e=>t.every(t=>t(e))},rE=(e,t=[],a=[])=>{let i=rm(a).map(rb);Array.from(t).filter(e=>i.some(t=>t(e))).forEach(t=>{t.mode=e})},rg=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let a="function"==typeof t?t:rb(t);return Array.from(e.textTracks).filter(a)},ry=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(aY.MEDIA_SUBTITLES_SHOWING)};try{var rf="u">typeof window?window:e.g;rf._sentryModuleMetadata=rf._sentryModuleMetadata||{},rf._sentryModuleMetadata[(new rf.Error).stack]=Object.assign({},rf._sentryModuleMetadata[(new rf.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let rA="exitFullscreen"in iy?"exitFullscreen":"webkitExitFullscreen"in iy?"webkitExitFullscreen":"webkitCancelFullScreen"in iy?"webkitCancelFullScreen":void 0,rw="fullscreenElement"in iy?"fullscreenElement":"webkitFullscreenElement"in iy?"webkitFullscreenElement":void 0,rk="fullscreenEnabled"in iy?"fullscreenEnabled":"webkitFullscreenEnabled"in iy?"webkitFullscreenEnabled":void 0;try{var rT="u">typeof window?window:e.g;rT._sentryModuleMetadata=rT._sentryModuleMetadata||{},rT._sentryModuleMetadata[(new rT.Error).stack]=Object.assign({},rT._sentryModuleMetadata[(new rT.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let r_=()=>{var e;return a||(a=null==(e=null==iy?void 0:iy.createElement)?void 0:e.call(iy,"video"))},rM=async(e=r_())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let a=new AbortController,i=await Promise.race([rC(e,a.signal),rI(e,t)]);return a.abort(),i},rC=(e,t)=>new Promise(a=>{e.addEventListener("volumechange",()=>a(!0),{signal:t})}),rI=async(e,t)=>{for(let a=0;a<10;a++){if(e.volume===t)return!1;await a6(10)}return e.volume!==t},rR=/.*Version\/.*Safari\/.*/.test(ig.navigator.userAgent),rS=(e=r_())=>(!ig.matchMedia("(display-mode: standalone)").matches||!rR)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rL=(e=r_())=>(e=>{let{documentElement:t,media:a}=e;return!!(null==t?void 0:t[rk])||a&&"webkitSupportsFullscreen"in a})({documentElement:iy,media:e}),rD=rL(),rx=rS(),rO=!!ig.WebKitPlaybackTargetAvailabilityEvent,rN=!!ig.chrome;try{var rP="u">typeof window?window:e.g;rP._sentryModuleMetadata=rP._sentryModuleMetadata||{},rP._sentryModuleMetadata[(new rP.Error).stack]=Object.assign({},rP._sentryModuleMetadata[(new rP.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let rU=e=>rg(e.media,e=>[aZ.SUBTITLES,aZ.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rW=e=>rg(e.media,e=>e.mode===az.SHOWING&&[aZ.SUBTITLES,aZ.CAPTIONS].includes(e.kind)),rB=(e,t)=>{let a=rU(e),i=rW(e),r=!!i.length;if(a.length){if(!1===t||r&&!0!==t)rE(az.DISABLED,a,i);else if(!0===t||!r&&!1!==t){let t=a[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=ig.localStorage.getItem("media-chrome-pref-subtitles-lang"),i=e?[e,...ig.navigator.languages]:ig.navigator.languages,r=a.filter(e=>i.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>i.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-i.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;rE(az.DISABLED,a,i),rE(az.SHOWING,a,[{language:n,label:s,kind:o}])}}},r$=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?rH(e,t):Object.entries(e).every(([e,a])=>e in t&&r$(a,t[e])))),rH=(e,t)=>{let a=Array.isArray(e),i=Array.isArray(t);return a===i&&(!a&&!i||e.length===t.length&&e.every((e,a)=>r$(e,t[a])))};try{var rK="u">typeof window?window:e.g;rK._sentryModuleMetadata=rK._sentryModuleMetadata||{},rK._sentryModuleMetadata[(new rK.Error).stack]=Object.assign({},rK._sentryModuleMetadata[(new rK.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let rV=Object.values(aJ),rF=rM().then(e=>i=e),rY=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof ig.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let a=ig.customElements.get(t);a&&e instanceof a||(await ig.customElements.whenDefined(t),ig.customElements.upgrade(e))}))},rj=new ig.DOMParser,rG={mediaError:{get(e,t){let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==a?void 0:a.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var a;let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==(a=null==i?void 0:i.error)?void 0:a.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var a,i;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(i=null==(a=null==r?void 0:r.error)?void 0:a.message)?i:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:a}=e;return null==(t=null==a?void 0:a.paused)||t},set(e,t){var a;let{media:i}=t;i&&(e?i.pause():null==(a=i.play())||a.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:a}=e;return!!a&&(t?"playing"===t.type:!a.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.playbackRate)?t:1},set(e,t){let{media:a}=t;!a||Number.isFinite(+e)&&(a.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.muted)&&t},set(e,t){let{media:a,options:{noMutedPref:i}={}}=t;if(a){a.muted=e;try{let t=null!==ig.localStorage.getItem("media-chrome-pref-muted"),r=a.hasAttribute("muted");if(i){t&&ig.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;ig.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:a}}=t,{media:i}=t;if(i&&!i.muted&&!a)try{let a="true"===ig.localStorage.getItem("media-chrome-pref-muted");rG.mediaMuted.set(a,t),e(a)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:a}=t;a&&(a.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.volume)?t:1},set(e,t){let{media:a,options:{noVolumePref:i}={}}=t;if(a){try{null==e?ig.localStorage.removeItem("media-chrome-pref-volume"):a.hasAttribute("muted")||i||ig.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(a.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:a}}=t;if(!a)try{let{media:a}=t;if(!a)return;let i=ig.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;rG.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:a}=e;return null!=(t=null==a?void 0:a.currentTime)?t:0},set(e,t){let{media:a}=t;a&&a9(e)&&(a.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:a}={}}=e;return a&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?a:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:a}=e;if(!(null==(t=null==a?void 0:a.seekable)?void 0:t.length))return;let i=a.seekable.start(0),r=a.seekable.end(a.seekable.length-1);if(i||r)return[Number(i.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:a}=e,i=null!=(t=null==a?void 0:a.buffered)?t:[];return Array.from(i).map((e,t)=>[Number(i.start(t).toFixed(3)),Number(i.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:a}={}}=e,i=[aJ.LIVE,aJ.ON_DEMAND].includes(a)?a:void 0;if(!t)return i;let{streamType:r}=t;if(rV.includes(r))return r===aJ.UNKNOWN?i:r;let n=t.duration;return n===1/0?aJ.LIVE:Number.isFinite(n)?aJ.ON_DEMAND:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:a}=t,i=rG.mediaStreamType.get(e);return(null==a||Number.isNaN(a))&&i===aJ.LIVE?0:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:a=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(rG.mediaStreamType.get(e)!==aJ.LIVE)return!1;let i=t.seekable;if(!i)return!0;if(!i.length)return!1;let r=i.end(i.length-1)-a;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rU(e).map(({kind:e,label:t,language:a})=>({kind:e,label:t,language:a})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rW(e).map(({kind:e,label:t,language:a})=>({kind:e,label:t,language:a})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a,i;let{media:r,options:n}=t;if(!r)return;let s=e=>{var a;n.defaultSubtitles&&(e&&![aZ.CAPTIONS,aZ.SUBTITLES].includes(null==(a=null==e?void 0:e.track)?void 0:a.kind)||rB(t,!0))};return r.addEventListener("loadstart",s),null==(a=r.textTracks)||a.addEventListener("addtrack",s),null==(i=r.textTracks)||i.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:a}=e;if(!a)return[];let[i]=rg(a,{kind:aZ.CHAPTERS});return Array.from(null!=(t=null==i?void 0:i.cues)?t:[]).map(({text:e,startTime:t,endTime:a})=>({text:e&&rj.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:a}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(!i)return;let r=i.querySelector('track[kind="chapters"][default][src]'),n=null==(a=i.shadowRoot)?void 0:a.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,a;let{media:i,documentElement:r}=e;if(!i||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===i)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=i.localName)?void 0:t.includes("-"))&&ix(i,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===i)return!0;e=null==(a=e.pictureInPictureElement)?void 0:a.shadowRoot}}return!1},set(e,t){let{media:a}=t;if(a)if(e){if(!iy.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!a.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};a.requestPictureInPicture().catch(t=>{if(11===t.code){if(!a.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===a.readyState&&"none"===a.preload){let t=()=>{a.removeEventListener("loadedmetadata",i),a.preload="none"},i=()=>{a.requestPictureInPicture().catch(e),t()};a.addEventListener("loadedmetadata",i),a.preload="metadata",setTimeout(()=>{0===a.readyState&&e(),t()},1e3)}else throw t}else throw t})}else iy.pictureInPictureElement&&iy.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:a}=e;return[...null!=(t=null==a?void 0:a.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,a,i;let{media:r}=e;return null==(i=null==(a=null==r?void 0:r.videoRenditions)?void 0:a[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:i.id},set(e,t){let{media:a}=t;if(!(null==a?void 0:a.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let i=Array.prototype.findIndex.call(a.videoRenditions,t=>t.id==e);a.videoRenditions.selectedIndex!=i&&(a.videoRenditions.selectedIndex=i)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:a}=e;return[...null!=(t=null==a?void 0:a.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,a;let{media:i}=e;return null==(a=[...null!=(t=null==i?void 0:i.audioTracks)?t:[]].find(e=>e.enabled))?void 0:a.id},set(e,t){let{media:a}=t;if(!(null==a?void 0:a.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of a.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:a,documentElement:i,fullscreenElement:r=a}=e;if(!a||!i)return!1;let n=(e=>{let{documentElement:t,media:a}=e,i=null==t?void 0:t[rw];return!i&&"webkitDisplayingFullscreen"in a&&"webkitPresentationMode"in a&&a.webkitDisplayingFullscreen&&a.webkitPresentationMode===a0.FULLSCREEN?a:i})(e);if(!n)return!1;if(n===r||n===a)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(rw in e))return ix(n,r);for(;null==e?void 0:e[rw];){if(e[rw]===r)return!0;e=null==(t=e[rw])?void 0:t.shadowRoot}}return!1})(e),set(e,t,a){var i,r;e?((e=>{var t;let{media:a,fullscreenElement:i}=e;try{let e=i&&"requestFullscreen"in i?"requestFullscreen":i&&"webkitRequestFullScreen"in i?"webkitRequestFullScreen":void 0;if(e){let a=null==(t=i[e])?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}else(null==a?void 0:a.webkitEnterFullscreen)?a.webkitEnterFullscreen():(null==a?void 0:a.requestFullscreen)&&a.requestFullscreen()}catch(e){console.error(e)}})(t),!a.detail||(null==(i=t.media)?void 0:i.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:a}=e;if(rA){let e=null==(t=null==a?void 0:a[rA])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:a}=e;return!!(null==a?void 0:a.remote)&&(null==(t=a.remote)?void 0:t.state)!=="disconnected"&&!!a.remote.state},set(e,t){var a,i;let{media:r}=t;if(r&&(!e||(null==(a=r.remote)?void 0:a.state)==="disconnected")&&(e||(null==(i=r.remote)?void 0:i.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:a}=t;if(a){if(!(a.webkitShowPlaybackTargetPicker&&ig.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");a.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rD||!rL(t))return aX.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return rx&&rS(t)?(null==t?void 0:t.disablePictureInPicture)?aX.UNAVAILABLE:void 0:aX.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return aX.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&rF.then(t=>e(t?void 0:aX.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var a;let{media:i}=e;return rN&&(null==(a=null==i?void 0:i.remote)?void 0:a.state)?null!=t&&"available"!==t?aX.UNAVAILABLE:void 0:aX.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(i)return i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||null==(a=null==i?void 0:i.remote)||a.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==i?void 0:i.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>rO?(null==t?void 0:t.availability)==="not-available"?aX.UNAVAILABLE:void 0:aX.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var a;let{media:i}=t;if(i)return i.disableRemotePlayback||i.hasAttribute("disableremoteplayback")||null==(a=null==i?void 0:i.remote)||a.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==i?void 0:i.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:a}=e;return(null==a?void 0:a.videoRenditions)?(null==(t=a.videoRenditions)?void 0:t.length)?void 0:aX.UNAVAILABLE:aX.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,a;let{media:i}=e;return(null==i?void 0:i.audioTracks)?(null!=(a=null==(t=i.audioTracks)?void 0:t.length)?a:0)<=1?aX.UNAVAILABLE:void 0:aX.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}};try{var rq="u">typeof window?window:e.g;rq._sentryModuleMetadata=rq._sentryModuleMetadata||{},rq._sentryModuleMetadata[(new rq.Error).stack]=Object.assign({},rq._sentryModuleMetadata[(new rq.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let rZ={[aH.MEDIA_PREVIEW_REQUEST](e,t,{detail:a}){var i,r,n;let s,o,{media:l}=t,d=null!=a?a:void 0;if(l&&null!=d){let[e]=rg(l,{kind:aZ.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(i=null==e?void 0:e.cues)?i:[],(e,t,a)=>0===t?e.endTime>d:t===a.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,a=new URL(t.text,e);o=new URLSearchParams(a.hash).get("#xywh").split(",").map(e=>+e),s=a.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,a)=>t===a.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=a&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[aH.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[aH.MEDIA_PLAY_REQUEST](e,t){var a,i,r,n;let s=e.mediaStreamType.get(t)===aJ.LIVE,o=!(null==(a=t.options)?void 0:a.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(a){let i=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(a-i,t)}}e.mediaPaused.set(!1,t)},[aH.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:a}){e.mediaPlaybackRate.set(a,t)},[aH.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[aH.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[aH.MEDIA_LOOP_REQUEST](e,t,{detail:a}){let i=!!a;return e.mediaLoop.set(i,t),{mediaLoop:i}},[aH.MEDIA_VOLUME_REQUEST](e,t,{detail:a}){a&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(a,t)},[aH.MEDIA_SEEK_REQUEST](e,t,{detail:a}){e.mediaCurrentTime.set(a,t)},[aH.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var a,i,r;let n=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(i=t.options)?void 0:i.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[aH.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:a}){var i;let{options:r}=t,n=rU(t),s=rm(a),o=null==(i=s[0])?void 0:i.language;o&&!r.noSubtitlesLangPref&&ig.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rE(az.SHOWING,n,s)},[aH.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:a}){let i=rU(t);rE(az.DISABLED,i,null!=a?a:[])},[aH.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:a}){rB(t,a)},[aH.MEDIA_RENDITION_REQUEST](e,t,{detail:a}){e.mediaRenditionSelected.set(a,t)},[aH.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:a}){e.mediaAudioTrackEnabled.set(a,t)},[aH.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[aH.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[aH.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,a){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,a)},[aH.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[aH.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[aH.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[aH.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};try{var rz="u">typeof window?window:e.g;rz._sentryModuleMetadata=rz._sentryModuleMetadata||{},rz._sentryModuleMetadata[(new rz.Error).stack]=Object.assign({},rz._sentryModuleMetadata[(new rz.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var rQ="u">typeof window?window:e.g;rQ._sentryModuleMetadata=rQ._sentryModuleMetadata||{},rQ._sentryModuleMetadata[(new rQ.Error).stack]=Object.assign({},rQ._sentryModuleMetadata[(new rQ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var rX=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},rJ=(e,t,a)=>(rX(e,t,"read from private field"),a?a.call(e):t.get(e)),r0=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},r1=(e,t,a,i)=>(rX(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),r2=(e,t,a)=>(rX(e,t,"access private method"),a);let r3=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],r4="defaultsubtitles",r5="defaultstreamtype",r9="defaultduration",r8="fullscreenelement",r6="hotkeys",r7="keyboardbackwardseekoffset",ne="keyboardforwardseekoffset",nt="keyboarddownvolumestep",na="keyboardupvolumestep",ni="keysused",nr="lang",nn="loop",ns="liveedgeoffset",no="noautoseektolive",nl="nodefaultstore",nd="nohotkeys",nu="nomutedpref",nc="nosubtitleslangpref",nh="novolumepref",nm="seektoliveoffset";class np extends ri{constructor(){super(),r0(this,uF),r0(this,uG),r0(this,uZ),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,r0(this,uP,new rd(this,r6)),r0(this,uU,void 0),r0(this,uW,void 0),r0(this,uB,null),r0(this,u$,void 0),r0(this,uH,void 0),r0(this,uK,e=>{var t;null==(t=rJ(this,uW))||t.dispatch(e)}),r0(this,uV,void 0),r0(this,uj,e=>{let{key:t,shiftKey:a}=e;a&&("/"===t||"?"===t)||r3.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",rJ(this,uj))}),this.associateElement(this);let e={};r1(this,u$,t=>{Object.entries(t).forEach(([t,a])=>{if(t in e&&e[t]===a)return;this.propagateMediaState(t,a);let i=t.toLowerCase(),r=new ig.CustomEvent(aq[i],{composed:!0,detail:a});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(nd,r6,r5,r4,r9,nu,nh,nr,nn,ns,nm,no)}get mediaStore(){return rJ(this,uW)}set mediaStore(e){var t,a;(rJ(this,uW)&&(null==(t=rJ(this,uH))||t.call(this),r1(this,uH,void 0)),r1(this,uW,e),rJ(this,uW)||this.hasAttribute(nl))?r1(this,uH,null==(a=rJ(this,uW))?void 0:a.subscribe(rJ(this,u$))):r2(this,uF,uY).call(this)}get fullscreenElement(){var e;return null!=(e=rJ(this,uU))?e:this}set fullscreenElement(e){var t;this.hasAttribute(r8)&&this.removeAttribute(r8),r1(this,uU,e),null==(t=rJ(this,uW))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return iK(this,r4)}set defaultSubtitles(e){iV(this,r4,e)}get defaultStreamType(){return iF(this,r5)}set defaultStreamType(e){iY(this,r5,e)}get defaultDuration(){return i$(this,r9)}set defaultDuration(e){iH(this,r9,e)}get noHotkeys(){return iK(this,nd)}set noHotkeys(e){iV(this,nd,e)}get keysUsed(){return iF(this,ni)}set keysUsed(e){iY(this,ni,e)}get liveEdgeOffset(){return i$(this,ns)}set liveEdgeOffset(e){iH(this,ns,e)}get noAutoSeekToLive(){return iK(this,no)}set noAutoSeekToLive(e){iV(this,no,e)}get noVolumePref(){return iK(this,nh)}set noVolumePref(e){iV(this,nh,e)}get noMutedPref(){return iK(this,nu)}set noMutedPref(e){iV(this,nu,e)}get noSubtitlesLangPref(){return iK(this,nc)}set noSubtitlesLangPref(e){iV(this,nc,e)}get noDefaultStore(){return iK(this,nl)}set noDefaultStore(e){iV(this,nl,e)}attributeChangedCallback(e,t,a){var i,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,a),e===nd)a!==t&&""===a?(this.hasAttribute(r6)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==t&&null===a&&this.enableHotkeys();else if(e===r6)rJ(this,uP).value=a;else if(e===r4&&a!==t)null==(i=rJ(this,uW))||i.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(r4)}});else if(e===r5)null==(n=rJ(this,uW))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(r5))?r:void 0}});else if(e===ns&&a!==t)null==(s=rJ(this,uW))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(ns)?+this.getAttribute(ns):void 0,seekToLiveOffset:this.hasAttribute(nm)?+this.getAttribute(nm):this.hasAttribute(ns)?+this.getAttribute(ns):void 0}});else if(e===nm&&a!==t)null==(o=rJ(this,uW))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(nm)?+this.getAttribute(nm):this.hasAttribute(ns)?+this.getAttribute(ns):void 0}});else if(e===no)null==(l=rJ(this,uW))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(no)}});else if(e===r8){let e=a?null==(d=this.getRootNode())?void 0:d.getElementById(a):void 0;r1(this,uU,e),null==(u=rJ(this,uW))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===nr&&a!==t?(ia=a,null==(c=rJ(this,uW))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===nn&&a!==t?null==(h=rJ(this,uW))||h.dispatch({type:aH.MEDIA_LOOP_REQUEST,detail:null!=a}):e===nh&&a!==t?null==(m=rJ(this,uW))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(nh)}}):e===nu&&a!==t&&(null==(p=rJ(this,uW))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(nu)}}))}connectedCallback(){var e,t,a;this.associateElement(this),rJ(this,uW)||this.hasAttribute(nl)||r2(this,uF,uY).call(this),null==(e=rJ(this,uW))||e.dispatch({type:"documentelementchangerequest",detail:iy}),null==(t=rJ(this,uW))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),rJ(this,uW)&&!rJ(this,uH)&&r1(this,uH,null==(a=rJ(this,uW))?void 0:a.subscribe(rJ(this,u$))),void 0!==rJ(this,uV)&&rJ(this,uW)&&this.media&&setTimeout(()=>{var e,t,a;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(a=rJ(this,uW))||a.dispatch({type:aH.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:rJ(this,uV)}))},0),this.hasAttribute(nd)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,a,i,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),rJ(this,uW)){let e=rJ(this,uW).getState();r1(this,uV,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(a=rJ(this,uW))||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(i=rJ(this,uW))||i.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=rJ(this,uW))||r.dispatch({type:aH.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}rJ(this,uH)&&(null==(n=rJ(this,uH))||n.call(this),r1(this,uH,void 0)),this.unassociateElement(this),rJ(this,uB)&&(rJ(this,uB).remove(),r1(this,uB,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=rJ(this,uW))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=rJ(this,uW))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){nk(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let a=nT(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(aH).forEach(t=>{e.addEventListener(t,rJ(this,uK))}),t.set(e,a)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(aH).forEach(t=>{e.removeEventListener(t,rJ(this,uK))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),rJ(this,uW)&&Object.entries(rJ(this,uW).getState()).forEach(([t,a])=>{nk([e],t,a)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,a=t.indexOf(e);a<0||t.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",r2(this,uG,uq))}disableHotkeys(){this.removeEventListener("keydown",r2(this,uG,uq)),this.removeEventListener("keyup",rJ(this,uj))}get hotkeys(){return rJ(this,uP)}set hotkeys(e){iY(this,r6,e)}keyboardShortcutHandler(e){var t,a,i,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(i=null!=(a=null==(t=m.getAttribute(ni))?void 0:t.split(" "))?a:null==m?void 0:m.keysUsed)?i:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||rJ(this,uP).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&rJ(this,uP).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&rJ(this,uP).contains("noshift+/")))switch(e.key){case" ":case"k":u=rJ(this,uW).getState().mediaPaused?aH.MEDIA_PLAY_REQUEST:aH.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new ig.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?aH.MEDIA_UNMUTE_REQUEST:aH.MEDIA_MUTE_REQUEST,this.dispatchEvent(new ig.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?aH.MEDIA_EXIT_FULLSCREEN_REQUEST:aH.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new ig.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new ig.CustomEvent(aH.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(r7)?+this.getAttribute(r7):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new ig.CustomEvent(aH.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(ne)?+this.getAttribute(ne):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new ig.CustomEvent(aH.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(na)?+this.getAttribute(na):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new ig.CustomEvent(aH.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(nt)?+this.getAttribute(nt):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new ig.CustomEvent(aH.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new ig.CustomEvent(aH.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new ig.CustomEvent(aH.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&r2(this,uZ,uz).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?aH.MEDIA_EXIT_PIP_REQUEST:aH.MEDIA_ENTER_PIP_REQUEST,h=new ig.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}uP=new WeakMap,uU=new WeakMap,uW=new WeakMap,uB=new WeakMap,u$=new WeakMap,uH=new WeakMap,uK=new WeakMap,uV=new WeakMap,uF=new WeakSet,uY=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:a,stateMediator:i=rG,requestMap:r=rZ,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||r$(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(i).reduce((e,[t,{get:a}])=>(e[t]=a(d),e),{}))},m={},p=async(e,t)=>{var a,r,n,u,p,v,b,E,g,y,f,A,w,k,T,_;let M=!!o;if(o={...d,...null!=o?o:{},...e},M)return;await rY(...Object.values(e));let C=l.length>0&&0===t&&s,I=d.media!==o.media,R=(null==(a=d.media)?void 0:a.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),S=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),L=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),D=(null==(b=d.media)?void 0:b.remote)!==(null==(E=o.media)?void 0:E.remote),x=d.documentElement!==o.documentElement,O=!!d.media&&(I||C),N=!!(null==(g=d.media)?void 0:g.textTracks)&&(R||C),P=!!(null==(y=d.media)?void 0:y.videoRenditions)&&(S||C),U=!!(null==(f=d.media)?void 0:f.audioTracks)&&(L||C),W=!!(null==(A=d.media)?void 0:A.remote)&&(D||C),B=!!d.documentElement&&(x||C),$=O||N||P||U||W||B,H=0===l.length&&1===t&&s,K=!!o.media&&(I||H),V=!!(null==(w=o.media)?void 0:w.textTracks)&&(R||H),F=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(S||H),Y=!!(null==(T=o.media)?void 0:T.audioTracks)&&(L||H),j=!!(null==(_=o.media)?void 0:_.remote)&&(D||H),G=!!o.documentElement&&(x||H),q=K||V||F||Y||j||G;if(!($||q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(i).forEach(([e,{get:t,mediaEvents:a=[],textTracksEvents:i=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=a=>{c({[e]:t(d,a)})};h=m[e].mediaEvents,a.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),K&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,i.forEach(t=>{var a,i;h&&N&&(null==(a=d.media.textTracks)||a.removeEventListener(t,h),m[e].textTracksEvents=void 0),V&&(null==(i=o.media.textTracks)||i.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var a,i;h&&P&&(null==(a=d.media.videoRenditions)||a.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),F&&(null==(i=o.media.videoRenditions)||i.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var a,i;h&&U&&(null==(a=d.media.audioTracks)||a.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(i=o.media.audioTracks)||i.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var a,i;h&&W&&(null==(a=d.media.remote)||a.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(i=o.media.remote)||i.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),G&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&$&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:a,options:n}),{dispatch(e){let{type:t,detail:a}=e;r[t]&&null==u.mediaErrorCode?c(r[t](i,d,e)):"mediaelementchangerequest"===t?p({media:a}):"fullscreenelementchangerequest"===t?p({fullscreenElement:a}):"documentelementchangerequest"===t?p({documentElement:a}):"optionschangerequest"===t&&(Object.entries(null!=a?a:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(r4),defaultDuration:this.hasAttribute(r9)?+this.getAttribute(r9):void 0,defaultStreamType:null!=(e=this.getAttribute(r5))?e:void 0,liveEdgeOffset:this.hasAttribute(ns)?+this.getAttribute(ns):void 0,seekToLiveOffset:this.hasAttribute(nm)?+this.getAttribute(nm):this.hasAttribute(ns)?+this.getAttribute(ns):void 0,noAutoSeekToLive:this.hasAttribute(no),noVolumePref:this.hasAttribute(nh),noMutedPref:this.hasAttribute(nu),noSubtitlesLangPref:this.hasAttribute(nc)}})},uj=new WeakMap,uG=new WeakSet,uq=function(e){var t;let{metaKey:a,altKey:i,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=rJ(this,uB))?void 0:t.open)||a||i||!s&&!r3.includes(r))return void this.removeEventListener("keyup",rJ(this,uj));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||rJ(this,uP).contains(`no${r.toLowerCase()}`)||" "===r&&rJ(this,uP).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",rJ(this,uj),{once:!0})},uZ=new WeakSet,uz=function(){rJ(this,uB)||(r1(this,uB,iy.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(rJ(this,uB))),rJ(this,uB).open=!0};let nv=Object.values(aY),nb=Object.values(aV),nE=e=>{var t,a,i,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(ig.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(i=null==(a=null==e?void 0:e.getAttribute)?void 0:a.call(e,aK.MEDIA_CHROME_ATTRIBUTES))?void 0:i.split)?void 0:r.call(i,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>nv.includes(e)):[]},ng=e=>{var t,a;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&ig.customElements.get(null==(a=e.nodeName)?void 0:a.toLowerCase())&&!(e instanceof ig.customElements.get(e.nodeName.toLowerCase()))&&ig.customElements.upgrade(e),nb.some(t=>t in e)||!!nE(e).length},ny=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},nf={[aY.MEDIA_SUBTITLES_LIST]:rv,[aY.MEDIA_SUBTITLES_SHOWING]:rv,[aY.MEDIA_SEEKABLE]:ny,[aY.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ny).join(" "),[aY.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[aY.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(a2).join(" ")},[aY.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(a4).join(" ")}},nA=async(e,t,a)=>{var i,r;if(e.isConnected||await a6(0),"boolean"==typeof a||null==a)return iV(e,t,a);if("number"==typeof a)return iH(e,t,a);if("string"==typeof a)return iY(e,t,a);if(Array.isArray(a)&&!a.length)return e.removeAttribute(t);let n=null!=(r=null==(i=nf[t])?void 0:i.call(nf,a))?r:a;return e.setAttribute(t,n)},nw=(e,t)=>{var a;if(null==(a=e.closest)?void 0:a.call(e,'*[slot="media"]'))return;let i=(e,t)=>{var a,i;ng(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(i=null==(a=null==e?void 0:e.shadowRoot)?void 0:a.children)?i:[]].forEach(e=>nw(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!ng(e)?ig.customElements.whenDefined(r).then(()=>{i(e,t)}):i(e,t)},nk=(e,t,a)=>{e.forEach(e=>{if(t in e){e[t]=a;return}let i=nE(e),r=t.toLowerCase();i.includes(r)&&nA(e,r,a)})},nT=(e,t,a)=>{nw(e,t);let i=e=>{var a;t(null!=(a=null==e?void 0:e.composedPath()[0])?a:e.target)},r=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(aH.REGISTER_MEDIA_STATE_RECEIVER,i),e.addEventListener(aH.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let i=e.target;"media"!==i.name&&(n.forEach(e=>nw(e,a)),(n=[...i.assignedElements({flatten:!0})]).forEach(e=>nw(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:i=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(i,e=>nw(e,t)),Array.prototype.forEach.call(r,e=>nw(e,a))):"attributes"===n&&o===aK.MEDIA_CHROME_ATTRIBUTES&&(ng(s)?t(s):a(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{nw(e,a),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(aH.REGISTER_MEDIA_STATE_RECEIVER,i),e.removeEventListener(aH.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};ig.customElements.get("media-controller")||ig.customElements.define("media-controller",np);try{var n_="u">typeof window?window:e.g;n_._sentryModuleMetadata=n_._sentryModuleMetadata||{},n_._sentryModuleMetadata[(new n_.Error).stack]=Object.assign({},n_._sentryModuleMetadata[(new n_.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let nM="placement",nC="bounds";class nI extends ig.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!iU(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let a=getComputedStyle(this),i=null!=(e=iO(this,"#"+this.bounds))?e:iR(this);if(!i)return;let{x:r,width:n}=i.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=a.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=a.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[nM,nC]}get placement(){return iF(this,nM)}set placement(e){iY(this,nM,e)}get bounds(){return iF(this,nC)}set bounds(e){iY(this,nC,e)}}nI.shadowRootOptions={mode:"open"},nI.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},ig.customElements.get("media-tooltip")||ig.customElements.define("media-tooltip",nI);try{var nR="u">typeof window?window:e.g;nR._sentryModuleMetadata=nR._sentryModuleMetadata||{},nR._sentryModuleMetadata[(new nR.Error).stack]=Object.assign({},nR._sentryModuleMetadata[(new nR.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var nS=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},nL=(e,t,a)=>(nS(e,t,"read from private field"),a?a.call(e):t.get(e)),nD=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},nx=(e,t,a,i)=>(nS(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let nO="tooltipplacement",nN="disabled",nP="notooltip";class nU extends ig.HTMLElement{constructor(){if(super(),nD(this,u2),nD(this,uQ,void 0),this.preventClick=!1,this.tooltipEl=null,nD(this,uX,e=>{this.preventClick||this.handleClick(e),setTimeout(nL(this,uJ),0)}),nD(this,uJ,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),nD(this,u0,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",nL(this,u0))}),nD(this,u1,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!this.keysUsed.includes(i)?this.removeEventListener("keyup",nL(this,u0)):this.addEventListener("keyup",nL(this,u0),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",nO,aK.MEDIA_CONTROLLER,aY.MEDIA_LANG]}enable(){this.addEventListener("click",nL(this,uX)),this.addEventListener("keydown",nL(this,u1)),this.tabIndex=0}disable(){this.removeEventListener("click",nL(this,uX)),this.removeEventListener("keydown",nL(this,u1)),this.removeEventListener("keyup",nL(this,u0)),this.tabIndex=-1}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===aK.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=nL(this,uQ))?void 0:i.unassociateElement)||r.call(i,this),nx(this,uQ,null)),a&&this.isConnected&&(nx(this,uQ,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=nL(this,uQ))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&a!==t?null==a?this.enable():this.disable():e===nO&&this.tooltipEl&&a!==t?this.tooltipEl.placement=a:e===aY.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),nL(this,uJ).call(this)}connectedCallback(){var e,t,a;let{style:i}=iW(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(aK.MEDIA_CONTROLLER);r&&(nx(this,uQ,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=nL(this,uQ))?void 0:t.associateElement)||a.call(t,this)),ig.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=u2,t=u3,nS(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=nL(this,uQ))?void 0:e.unassociateElement)||t.call(e,this),nx(this,uQ,null),this.removeEventListener("mouseenter",nL(this,uJ)),this.removeEventListener("focus",nL(this,uJ)),this.removeEventListener("click",nL(this,uX))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return iF(this,nO)}set tooltipPlacement(e){iY(this,nO,e)}get mediaController(){return iF(this,aK.MEDIA_CONTROLLER)}set mediaController(e){iY(this,aK.MEDIA_CONTROLLER,e)}get disabled(){return iK(this,nN)}set disabled(e){iV(this,nN,e)}get noTooltip(){return iK(this,nP)}set noTooltip(e){iV(this,nP,e)}handleClick(e){}}uQ=new WeakMap,uX=new WeakMap,uJ=new WeakMap,u0=new WeakMap,u1=new WeakMap,u2=new WeakSet,u3=function(){this.addEventListener("mouseenter",nL(this,uJ)),this.addEventListener("focus",nL(this,uJ)),this.addEventListener("click",nL(this,uX));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},nU.shadowRootOptions={mode:"open"},nU.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${nI.shadowRootOptions.mode}">
          ${nI.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},nU.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},nU.getTooltipContentHTML=function(){return""},ig.customElements.get("media-chrome-button")||ig.customElements.define("media-chrome-button",nU);try{var nW="u">typeof window?window:e.g;nW._sentryModuleMetadata=nW._sentryModuleMetadata||{},nW._sentryModuleMetadata[(new nW.Error).stack]=Object.assign({},nW._sentryModuleMetadata[(new nW.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let nB=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,n$=e=>{let t=e.mediaIsAirplaying?ii("stop airplay"):ii("start airplay");e.setAttribute("aria-label",t)};class nH extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_IS_AIRPLAYING,aY.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),n$(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_IS_AIRPLAYING&&n$(this)}get mediaIsAirplaying(){return iK(this,aY.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){iV(this,aY.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return iF(this,aY.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){iY(this,aY.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new ig.CustomEvent(aH.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}nH.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${aY.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${aY.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${aY.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${aY.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nB}</slot>
      <slot name="exit">${nB}</slot>
    </slot>
  `},nH.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ii("start airplay")}</slot>
    <slot name="tooltip-exit">${ii("stop airplay")}</slot>
  `},ig.customElements.get("media-airplay-button")||ig.customElements.define("media-airplay-button",nH);try{var nK="u">typeof window?window:e.g;nK._sentryModuleMetadata=nK._sentryModuleMetadata||{},nK._sentryModuleMetadata[(new nK.Error).stack]=Object.assign({},nK._sentryModuleMetadata[(new nK.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let nV=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nF=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nY=e=>{e.setAttribute("aria-checked",ry(e).toString())};class nj extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_SUBTITLES_LIST,aY.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",ii("closed captions")),nY(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_SUBTITLES_SHOWING&&nY(this)}get mediaSubtitlesList(){return nG(this,aY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nq(this,aY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nG(this,aY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nq(this,aY.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new ig.CustomEvent(aH.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}nj.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${nV}</slot>
      <slot name="off">${nF}</slot>
    </slot>
  `},nj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${ii("Enable captions")}</slot>
    <slot name="tooltip-disable">${ii("Disable captions")}</slot>
  `};let nG=(e,t)=>{let a=e.getAttribute(t);return a?rh(a):[]},nq=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=rv(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};ig.customElements.get("media-captions-button")||ig.customElements.define("media-captions-button",nj);try{var nZ="u">typeof window?window:e.g;nZ._sentryModuleMetadata=nZ._sentryModuleMetadata||{},nZ._sentryModuleMetadata[(new nZ.Error).stack]=Object.assign({},nZ._sentryModuleMetadata[(new nZ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let nz=e=>{let t=e.mediaIsCasting?ii("stop casting"):ii("start casting");e.setAttribute("aria-label",t)};class nQ extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_IS_CASTING,aY.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nz(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_IS_CASTING&&nz(this)}get mediaIsCasting(){return iK(this,aY.MEDIA_IS_CASTING)}set mediaIsCasting(e){iV(this,aY.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return iF(this,aY.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){iY(this,aY.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?aH.MEDIA_EXIT_CAST_REQUEST:aH.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new ig.CustomEvent(e,{composed:!0,bubbles:!0}))}}nQ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${aY.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${aY.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${aY.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${aY.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},nQ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ii("Start casting")}</slot>
    <slot name="tooltip-exit">${ii("Stop casting")}</slot>
  `},ig.customElements.get("media-cast-button")||ig.customElements.define("media-cast-button",nQ);try{var nX="u">typeof window?window:e.g;nX._sentryModuleMetadata=nX._sentryModuleMetadata||{},nX._sentryModuleMetadata[(new nX.Error).stack]=Object.assign({},nX._sentryModuleMetadata[(new nX.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var nJ=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},n0=(e,t,a)=>(nJ(e,t,"read from private field"),a?a.call(e):t.get(e)),n1=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},n2=(e,t,a,i)=>(nJ(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),n3=(e,t,a)=>(nJ(e,t,"access private method"),a);let n4="open";class n5 extends ig.HTMLElement{constructor(){super(),n1(this,u8),n1(this,u7),n1(this,ct),n1(this,ci),n1(this,cn),n1(this,co),n1(this,u4,!1),n1(this,u5,null),n1(this,u9,null)}static get observedAttributes(){return[n4,"anchor"]}get open(){return iK(this,n4)}set open(e){iV(this,n4,e)}handleEvent(e){switch(e.type){case"invoke":n3(this,ci,cr).call(this,e);break;case"focusout":n3(this,cn,cs).call(this,e);break;case"keydown":n3(this,co,cl).call(this,e)}}connectedCallback(){n3(this,u8,u6).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,a){n3(this,u8,u6).call(this),e===n4&&a!==t&&(this.open?n3(this,u7,ce).call(this):n3(this,ct,ca).call(this))}focus(){n2(this,u5,iN());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}get keysUsed(){return["Escape","Tab"]}}u4=new WeakMap,u5=new WeakMap,u9=new WeakMap,u8=new WeakSet,u6=function(){if(!n0(this,u4)&&(n2(this,u4,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=iW(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},u7=new WeakSet,ce=function(){var e;null==(e=n0(this,u9))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ct=new WeakSet,ca=function(){var e;null==(e=n0(this,u9))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ci=new WeakSet,cr=function(e){n2(this,u9,e.relatedTarget),ix(this,e.relatedTarget)||(this.open=!this.open)},cn=new WeakSet,cs=function(e){var t;!ix(this,e.relatedTarget)&&(null==(t=n0(this,u5))||t.focus(),n0(this,u9)&&n0(this,u9)!==e.relatedTarget&&this.open&&(this.open=!1))},co=new WeakSet,cl=function(e){var t,a,i,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(a=null==(t=this.previousElementSibling)?void 0:t.focus)||a.call(t):null==(r=null==(i=this.nextElementSibling)?void 0:i.focus)||r.call(i),this.blur()):"Escape"===s&&(null==(n=n0(this,u5))||n.focus(),this.open=!1))},n5.shadowRootOptions={mode:"open"},n5.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},n5.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},ig.customElements.get("media-chrome-dialog")||ig.customElements.define("media-chrome-dialog",n5);try{var n9="u">typeof window?window:e.g;n9._sentryModuleMetadata=n9._sentryModuleMetadata||{},n9._sentryModuleMetadata[(new n9.Error).stack]=Object.assign({},n9._sentryModuleMetadata[(new n9.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var n8=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},n6=(e,t,a)=>(n8(e,t,"read from private field"),a?a.call(e):t.get(e)),n7=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},se=(e,t,a,i)=>(n8(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),st=(e,t,a)=>(n8(e,t,"access private method"),a);class sa extends ig.HTMLElement{constructor(){if(super(),n7(this,cg),n7(this,cf),n7(this,cw),n7(this,cT),n7(this,cM),n7(this,cI),n7(this,cS),n7(this,cD),n7(this,cd,void 0),n7(this,cu,void 0),n7(this,cc,void 0),n7(this,ch,void 0),n7(this,cm,{}),n7(this,cp,[]),n7(this,cv,()=>{if(this.range.matches(":focus-visible")){let{style:e}=iW(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),n7(this,cb,()=>{let{style:e}=iW(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),n7(this,cE,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),se(this,cc,this.shadowRoot.querySelector("#startpoint")),se(this,ch,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",aK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===aK.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=n6(this,cd))?void 0:i.unassociateElement)||r.call(i,this),se(this,cd,null)),a&&this.isConnected&&(se(this,cd,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=n6(this,cd))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==a)&&(null==a?(this.range.removeAttribute(e),st(this,cf,cA).call(this)):(this.range.setAttribute(e,a),st(this,cw,ck).call(this)))}connectedCallback(){var e,t,a;let{style:i}=iW(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),n6(this,cm).pointer=iW(this.shadowRoot,"#pointer"),n6(this,cm).progress=iW(this.shadowRoot,"#progress"),n6(this,cm).thumb=iW(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),n6(this,cm).activeSegment=iW(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(aK.MEDIA_CONTROLLER);r&&(se(this,cd,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=n6(this,cd))?void 0:t.associateElement)||a.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",n6(this,cv)),this.shadowRoot.addEventListener("focusout",n6(this,cb)),st(this,cf,cA).call(this),i_(this.container,n6(this,cE))}disconnectedCallback(){var e,t;st(this,cw,ck).call(this),null==(t=null==(e=n6(this,cd))?void 0:e.unassociateElement)||t.call(e,this),se(this,cd,null),this.shadowRoot.removeEventListener("focusin",n6(this,cv)),this.shadowRoot.removeEventListener("focusout",n6(this,cb)),iM(this.container,n6(this,cE))}updatePointerBar(e){var t;null==(t=n6(this,cm).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let a=100*this.range.valueAsNumber;null==(e=n6(this,cm).progress)||e.style.setProperty("width",`${a}%`),null==(t=n6(this,cm).thumb)||t.style.setProperty("left",`${a}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let a=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];se(this,cp,[...a]);let i=a.pop();for(let[e,r]of a.entries()){let[n,s]=[0===e,e===a.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?i:a[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=iy.createElementNS("http://www.w3.org/2000/svg","rect"),c=iB(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,a,i,r;let n,s,o;return t=e.clientX,a=e.clientY,i=n6(this,cc).getBoundingClientRect(),n=(r=n6(this,ch).getBoundingClientRect()).x-i.x,0==(o=n*n+(s=r.y-i.y)*s)?0:Math.max(0,Math.min(1,((t-i.x)*n+(a-i.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":st(this,cD,cx).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":st(this,cM,cC).call(this,e);break;case"pointerdown":st(this,cT,c_).call(this,e);break;case"pointerup":st(this,cI,cR).call(this);break;case"pointerleave":st(this,cS,cL).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}cd=new WeakMap,cu=new WeakMap,cc=new WeakMap,ch=new WeakMap,cm=new WeakMap,cp=new WeakMap,cv=new WeakMap,cb=new WeakMap,cE=new WeakMap,cg=new WeakSet,cy=function(e){let t=n6(this,cm).activeSegment;if(!t)return;let a=this.getPointerRatio(e),i=n6(this,cp).findIndex((e,t,i)=>{let r=i[t+1];return null!=r&&a>=e&&a<=r}),r=`#segments-clipping rect:nth-child(${i+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},cf=new WeakSet,cA=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},cw=new WeakSet,ck=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=ig.window)||e.removeEventListener("pointerup",this),null==(t=ig.window)||t.removeEventListener("pointermove",this)},cT=new WeakSet,c_=function(e){var t;se(this,cu,e.composedPath().includes(this.range)),null==(t=ig.window)||t.addEventListener("pointerup",this,{once:!0})},cM=new WeakSet,cC=function(e){var t;"mouse"!==e.pointerType&&st(this,cT,c_).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=ig.window)||t.addEventListener("pointermove",this)},cI=new WeakSet,cR=function(){var e;null==(e=ig.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},cS=new WeakSet,cL=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=ig.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=n6(this,cm).activeSegment)||t.style.removeProperty("transform")},cD=new WeakSet,cx=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),st(this,cg,cy).call(this,e),this.dragging&&("mouse"!==e.pointerType||!n6(this,cu))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},sa.shadowRootOptions={mode:"open"},sa.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},sa.getContainerTemplateHTML=function(e){return""},ig.customElements.get("media-chrome-range")||ig.customElements.define("media-chrome-range",sa);try{var si="u">typeof window?window:e.g;si._sentryModuleMetadata=si._sentryModuleMetadata||{},si._sentryModuleMetadata[(new si.Error).stack]=Object.assign({},si._sentryModuleMetadata[(new si.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sr=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},sn=(e,t,a)=>(sr(e,t,"read from private field"),a?a.call(e):t.get(e)),ss=(e,t,a,i)=>(sr(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class so extends ig.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cO,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[aK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===aK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=sn(this,cO))?void 0:i.unassociateElement)||r.call(i,this),ss(this,cO,null)),a&&this.isConnected&&(ss(this,cO,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=sn(this,cO))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let i=this.getAttribute(aK.MEDIA_CONTROLLER);i&&(ss(this,cO,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=sn(this,cO))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sn(this,cO))?void 0:e.unassociateElement)||t.call(e,this),ss(this,cO,null)}}cO=new WeakMap,so.shadowRootOptions={mode:"open"},so.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},ig.customElements.get("media-control-bar")||ig.customElements.define("media-control-bar",so);try{var sl="u">typeof window?window:e.g;sl._sentryModuleMetadata=sl._sentryModuleMetadata||{},sl._sentryModuleMetadata[(new sl.Error).stack]=Object.assign({},sl._sentryModuleMetadata[(new sl.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sd=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},su=(e,t,a)=>(sd(e,t,"read from private field"),a?a.call(e):t.get(e)),sc=(e,t,a,i)=>(sd(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class sh extends ig.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cN,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[aK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===aK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=su(this,cN))?void 0:i.unassociateElement)||r.call(i,this),sc(this,cN,null)),a&&this.isConnected&&(sc(this,cN,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=su(this,cN))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let{style:i}=iW(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(aK.MEDIA_CONTROLLER);r&&(sc(this,cN,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(a=null==(t=su(this,cN))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=su(this,cN))?void 0:e.unassociateElement)||t.call(e,this),sc(this,cN,null)}}cN=new WeakMap,sh.shadowRootOptions={mode:"open"},sh.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},sh.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},ig.customElements.get("media-text-display")||ig.customElements.define("media-text-display",sh);try{var sm="u">typeof window?window:e.g;sm._sentryModuleMetadata=sm._sentryModuleMetadata||{},sm._sentryModuleMetadata[(new sm.Error).stack]=Object.assign({},sm._sentryModuleMetadata[(new sm.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sp=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},sv=(e,t,a)=>(sp(e,t,"read from private field"),a?a.call(e):t.get(e));class sb extends sh{constructor(){var e;super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cP,void 0),((e,t,a,i)=>(sp(e,t,"write to private field"),i?i.call(e,a):t.set(e,a)))(this,cP,this.shadowRoot.querySelector("slot")),sv(this,cP).textContent=il(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_DURATION]}attributeChangedCallback(e,t,a){e===aY.MEDIA_DURATION&&(sv(this,cP).textContent=il(+a)),super.attributeChangedCallback(e,t,a)}get mediaDuration(){return i$(this,aY.MEDIA_DURATION)}set mediaDuration(e){iH(this,aY.MEDIA_DURATION,e)}}cP=new WeakMap,sb.getSlotTemplateHTML=function(e,t){return`
    <slot>${il(t.mediaDuration)}</slot>
  `},ig.customElements.get("media-duration-display")||ig.customElements.define("media-duration-display",sb);try{var sE="u">typeof window?window:e.g;sE._sentryModuleMetadata=sE._sentryModuleMetadata||{},sE._sentryModuleMetadata[(new sE.Error).stack]=Object.assign({},sE._sentryModuleMetadata[(new sE.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let sg={2:ii("Network Error"),3:ii("Decode Error"),4:ii("Source Not Supported"),5:ii("Encryption Error")},sy={2:ii("A network error caused the media download to fail."),3:ii("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:ii("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:ii("The media is encrypted and there are no keys to decrypt it.")},sf=e=>{var t,a;return 1===e.code?null:{title:null!=(t=sg[e.code])?t:`Error ${e.code}`,message:null!=(a=sy[e.code])?a:e.message}};try{var sA="u">typeof window?window:e.g;sA._sentryModuleMetadata=sA._sentryModuleMetadata||{},sA._sentryModuleMetadata[(new sA.Error).stack]=Object.assign({},sA._sentryModuleMetadata[(new sA.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sw=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};function sk(e){var t;let{title:a,message:i}=null!=(t=sf(e))?t:{},r="";return a&&(r+=`<slot name="error-${e.code}-title"><h3>${a}</h3></slot>`),i&&(r+=`<slot name="error-${e.code}-message"><p>${i}</p></slot>`),r}let sT=[aY.MEDIA_ERROR_CODE,aY.MEDIA_ERROR_MESSAGE];class s_ extends n5{constructor(){super(...arguments),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cU,null)}static get observedAttributes(){return[...super.observedAttributes,...sT]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,a){var i;if(super.attributeChangedCallback(e,t,a),!sT.includes(e))return;let r=null!=(i=this.mediaError)?i:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==sf(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=sf(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return sw(this,e=cU,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,a;sw(this,t=cU,"write to private field"),a?a.call(this,e):t.set(this,e)}get mediaErrorCode(){return i$(this,"mediaerrorcode")}set mediaErrorCode(e){iH(this,"mediaerrorcode",e)}get mediaErrorMessage(){return iF(this,"mediaerrormessage")}set mediaErrorMessage(e){iY(this,"mediaerrormessage",e)}}cU=new WeakMap,s_.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${sk({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},s_.formatErrorMessage=sk,ig.customElements.get("media-error-dialog")||ig.customElements.define("media-error-dialog",s_);try{var sM="u">typeof window?window:e.g;sM._sentryModuleMetadata=sM._sentryModuleMetadata||{},sM._sentryModuleMetadata[(new sM.Error).stack]=Object.assign({},sM._sentryModuleMetadata[(new sM.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sC=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)},sI=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)};class sR extends n5{constructor(){super(...arguments),sI(this,cW,e=>{var t;if(!this.open)return;let a=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!a)return;let i=e.composedPath(),r=i[0]===this||i.includes(this),n=i.includes(a);r&&!n&&(this.open=!1)}),sI(this,cB,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",sC(this,cW)),document.addEventListener("keydown",sC(this,cB)))}disconnectedCallback(){this.removeEventListener("click",sC(this,cW)),document.removeEventListener("keydown",sC(this,cB))}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),"open"===e&&(this.open?(this.addEventListener("click",sC(this,cW)),document.addEventListener("keydown",sC(this,cB))):(this.removeEventListener("click",sC(this,cW)),document.removeEventListener("keydown",sC(this,cB))))}}cW=new WeakMap,cB=new WeakMap,sR.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let a=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${a}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},ig.customElements.get("media-keyboard-shortcuts-dialog")||ig.customElements.define("media-keyboard-shortcuts-dialog",sR);try{var sS="u">typeof window?window:e.g;sS._sentryModuleMetadata=sS._sentryModuleMetadata||{},sS._sentryModuleMetadata[(new sS.Error).stack]=Object.assign({},sS._sentryModuleMetadata[(new sS.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sL=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};let sD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,sx=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sO=e=>{let t=e.mediaIsFullscreen?ii("exit fullscreen mode"):ii("enter fullscreen mode");e.setAttribute("aria-label",t)};class sN extends nU{constructor(){super(...arguments),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,c$,null)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_IS_FULLSCREEN,aY.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sO(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_IS_FULLSCREEN&&sO(this)}get mediaFullscreenUnavailable(){return iF(this,aY.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){iY(this,aY.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return iK(this,aY.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){iV(this,aY.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,a,i,r;sL(this,t=c$,"write to private field"),a?a.call(this,e):t.set(this,e);let n=(sL(this,i=c$,"read from private field"),(r?r.call(this):i.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new ig.CustomEvent(aH.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new ig.CustomEvent(aH.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}c$=new WeakMap,sN.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${aY.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${aY.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${aY.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${aY.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sD}</slot>
      <slot name="exit">${sx}</slot>
    </slot>
  `},sN.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ii("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${ii("Exit fullscreen mode")}</slot>
  `},ig.customElements.get("media-fullscreen-button")||ig.customElements.define("media-fullscreen-button",sN);try{var sP="u">typeof window?window:e.g;sP._sentryModuleMetadata=sP._sentryModuleMetadata||{},sP._sentryModuleMetadata[(new sP.Error).stack]=Object.assign({},sP._sentryModuleMetadata[(new sP.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let{MEDIA_TIME_IS_LIVE:sU,MEDIA_PAUSED:sW}=aY,{MEDIA_SEEK_TO_LIVE_REQUEST:sB,MEDIA_PLAY_REQUEST:s$}=aH,sH=e=>{var t;let a=e.mediaPaused||!e.mediaTimeIsLive,i=a?ii("seek to live"):ii("playing live");e.setAttribute("aria-label",i);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=ii("live")),a?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class sK extends nU{static get observedAttributes(){return[...super.observedAttributes,sU,sW]}connectedCallback(){super.connectedCallback(),sH(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),sH(this)}get mediaPaused(){return iK(this,aY.MEDIA_PAUSED)}set mediaPaused(e){iV(this,aY.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return iK(this,aY.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){iV(this,aY.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new ig.CustomEvent(sB,{composed:!0,bubbles:!0})),this.hasAttribute(sW)&&this.dispatchEvent(new ig.CustomEvent(s$,{composed:!0,bubbles:!0})))}}sK.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${sU}]:not([${sW}])) slot[name=indicator] > *,
      :host([${sU}]:not([${sW}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${sU}]:not([${sW}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${ii("live")}</slot>
  `},ig.customElements.get("media-live-button")||ig.customElements.define("media-live-button",sK);try{var sV="u">typeof window?window:e.g;sV._sentryModuleMetadata=sV._sentryModuleMetadata||{},sV._sentryModuleMetadata[(new sV.Error).stack]=Object.assign({},sV._sentryModuleMetadata[(new sV.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var sF=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},sY=(e,t,a)=>(sF(e,t,"read from private field"),a?a.call(e):t.get(e)),sj=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},sG=(e,t,a,i)=>(sF(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let sq="loadingdelay",sZ="noautohide",sz=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class sQ extends ig.HTMLElement{constructor(){if(super(),sj(this,cH,void 0),sj(this,cK,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[aK.MEDIA_CONTROLLER,aY.MEDIA_PAUSED,aY.MEDIA_LOADING,sq]}attributeChangedCallback(e,t,a){var i,r,n,s,o;e===sq&&t!==a?this.loadingDelay=Number(a):e===aK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=sY(this,cH))?void 0:i.unassociateElement)||r.call(i,this),sG(this,cH,null)),a&&this.isConnected&&(sG(this,cH,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=sY(this,cH))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,a;let i=this.getAttribute(aK.MEDIA_CONTROLLER);i&&(sG(this,cH,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=sY(this,cH))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sY(this,cH))?void 0:e.unassociateElement)||t.call(e,this),sG(this,cH,null)}get loadingDelay(){return sY(this,cK)}set loadingDelay(e){sG(this,cK,e);let{style:t}=iW(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return iK(this,aY.MEDIA_PAUSED)}set mediaPaused(e){iV(this,aY.MEDIA_PAUSED,e)}get mediaLoading(){return iK(this,aY.MEDIA_LOADING)}set mediaLoading(e){iV(this,aY.MEDIA_LOADING,e)}get mediaController(){return iF(this,aK.MEDIA_CONTROLLER)}set mediaController(e){iY(this,aK.MEDIA_CONTROLLER,e)}get noAutohide(){return iK(this,sZ)}set noAutohide(e){iV(this,sZ,e)}}cH=new WeakMap,cK=new WeakMap,sQ.shadowRootOptions={mode:"open"},sQ.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${aY.MEDIA_LOADING}]:not([${aY.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${aY.MEDIA_LOADING}]:not([${aY.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${aY.MEDIA_LOADING}]:not([${aY.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${sz}</slot>
    <div id="status" role="status" aria-live="polite">${ii("media loading")}</div>
  `},ig.customElements.get("media-loading-indicator")||ig.customElements.define("media-loading-indicator",sQ);try{var sX="u">typeof window?window:e.g;sX._sentryModuleMetadata=sX._sentryModuleMetadata||{},sX._sentryModuleMetadata[(new sX.Error).stack]=Object.assign({},sX._sentryModuleMetadata[(new sX.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let sJ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,s0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,s1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,s2=e=>{let t="off"===e.mediaVolumeLevel?ii("unmute"):ii("mute");e.setAttribute("aria-label",t)};class s3 extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),s2(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_VOLUME_LEVEL&&s2(this)}get mediaVolumeLevel(){return iF(this,aY.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){iY(this,aY.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?aH.MEDIA_UNMUTE_REQUEST:aH.MEDIA_MUTE_REQUEST;this.dispatchEvent(new ig.CustomEvent(e,{composed:!0,bubbles:!0}))}}s3.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${aY.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${aY.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${aY.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${aY.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${aY.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${aY.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${aY.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${sJ}</slot>
      <slot name="low">${s0}</slot>
      <slot name="medium">${s0}</slot>
      <slot name="high">${s1}</slot>
    </slot>
  `},s3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${ii("Mute")}</slot>
    <slot name="tooltip-unmute">${ii("Unmute")}</slot>
  `},ig.customElements.get("media-mute-button")||ig.customElements.define("media-mute-button",s3);try{var s4="u">typeof window?window:e.g;s4._sentryModuleMetadata=s4._sentryModuleMetadata||{},s4._sentryModuleMetadata[(new s4.Error).stack]=Object.assign({},s4._sentryModuleMetadata[(new s4.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let s5=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,s9=e=>{let t=e.mediaIsPip?ii("exit picture in picture mode"):ii("enter picture in picture mode");e.setAttribute("aria-label",t)};class s8 extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_IS_PIP,aY.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),s9(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_IS_PIP&&s9(this)}get mediaPipUnavailable(){return iF(this,aY.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){iY(this,aY.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return iK(this,aY.MEDIA_IS_PIP)}set mediaIsPip(e){iV(this,aY.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?aH.MEDIA_EXIT_PIP_REQUEST:aH.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new ig.CustomEvent(e,{composed:!0,bubbles:!0}))}}s8.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${aY.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${aY.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${aY.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${aY.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${s5}</slot>
      <slot name="exit">${s5}</slot>
    </slot>
  `},s8.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ii("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${ii("Exit picture in picture mode")}</slot>
  `},ig.customElements.get("media-pip-button")||ig.customElements.define("media-pip-button",s8);try{var s6="u">typeof window?window:e.g;s6._sentryModuleMetadata=s6._sentryModuleMetadata||{},s6._sentryModuleMetadata[(new s6.Error).stack]=Object.assign({},s6._sentryModuleMetadata[(new s6.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var s7=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)};let oe="rates",ot=[1,1.2,1.5,1.7,2];class oa extends nU{constructor(){var e;super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cV,new rd(this,oe,{defaultValue:ot})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PLAYBACK_RATE,oe]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===oe&&(s7(this,cV).value=a),e===aY.MEDIA_PLAYBACK_RATE){let e=a?+a:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ii("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return s7(this,cV)}set rates(e){e?Array.isArray(e)?s7(this,cV).value=e.join(" "):"string"==typeof e&&(s7(this,cV).value=e):s7(this,cV).value=""}get mediaPlaybackRate(){return i$(this,aY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iH(this,aY.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let a=Array.from(s7(this,cV).values(),e=>+e).sort((e,t)=>e-t),i=null!=(t=null!=(e=a.find(e=>e>this.mediaPlaybackRate))?e:a[0])?t:1,r=new ig.CustomEvent(aH.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(r)}}cV=new WeakMap,oa.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},oa.getTooltipContentHTML=function(){return ii("Playback rate")},ig.customElements.get("media-playback-rate-button")||ig.customElements.define("media-playback-rate-button",oa);try{var oi="u">typeof window?window:e.g;oi._sentryModuleMetadata=oi._sentryModuleMetadata||{},oi._sentryModuleMetadata[(new oi.Error).stack]=Object.assign({},oi._sentryModuleMetadata[(new oi.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let or=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,on=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,os=e=>{let t=e.mediaPaused?ii("play"):ii("pause");e.setAttribute("aria-label",t)};class oo extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PAUSED,aY.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),os(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),(e===aY.MEDIA_PAUSED||e===aY.MEDIA_LANG)&&os(this)}get mediaPaused(){return iK(this,aY.MEDIA_PAUSED)}set mediaPaused(e){iV(this,aY.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?aH.MEDIA_PLAY_REQUEST:aH.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new ig.CustomEvent(e,{composed:!0,bubbles:!0}))}}oo.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${aY.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${aY.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${aY.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${aY.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${or}</slot>
      <slot name="pause">${on}</slot>
    </slot>
  `},oo.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${ii("Play")}</slot>
    <slot name="tooltip-pause">${ii("Pause")}</slot>
  `},ig.customElements.get("media-play-button")||ig.customElements.define("media-play-button",oo);try{var ol="u">typeof window?window:e.g;ol._sentryModuleMetadata=ol._sentryModuleMetadata||{},ol._sentryModuleMetadata[(new ol.Error).stack]=Object.assign({},ol._sentryModuleMetadata[(new ol.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let od="placeholdersrc";class ou extends ig.HTMLElement{static get observedAttributes(){return[od,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,a){if("src"===e&&(null==a?this.image.removeAttribute("src"):this.image.setAttribute("src",a)),e===od)if(null==a)this.image.style.removeProperty("background-image");else{var i;i=this.image,i.style["background-image"]=`url('${a}')`}}get placeholderSrc(){return iF(this,od)}set placeholderSrc(e){iY(this,"src",e)}get src(){return iF(this,"src")}set src(e){iY(this,"src",e)}}ou.shadowRootOptions={mode:"open"},ou.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},ig.customElements.get("media-poster-image")||ig.customElements.define("media-poster-image",ou);try{var oc="u">typeof window?window:e.g;oc._sentryModuleMetadata=oc._sentryModuleMetadata||{},oc._sentryModuleMetadata[(new oc.Error).stack]=Object.assign({},oc._sentryModuleMetadata[(new oc.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var oh=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};cF=new WeakMap,ig.customElements.get("media-preview-chapter-display")||ig.customElements.define("media-preview-chapter-display",class extends sh{constructor(){super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cF,void 0),((e,t,a,i)=>(oh(e,t,"write to private field"),i?i.call(e,a):t.set(e,a)))(this,cF,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PREVIEW_CHAPTER,aY.MEDIA_LANG]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),(e===aY.MEDIA_PREVIEW_CHAPTER||e===aY.MEDIA_LANG)&&a!==t&&null!=a){var i;if((oh(this,cF,"read from private field"),i?i.call(this):cF.get(this)).textContent=a,""!==a){let e=ii("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return iF(this,aY.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){iY(this,aY.MEDIA_PREVIEW_CHAPTER,e)}});try{var om="u">typeof window?window:e.g;om._sentryModuleMetadata=om._sentryModuleMetadata||{},om._sentryModuleMetadata[(new om.Error).stack]=Object.assign({},om._sentryModuleMetadata[(new om.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var op=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},ov=(e,t,a)=>(op(e,t,"read from private field"),a?a.call(e):t.get(e)),ob=(e,t,a,i)=>(op(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class oE extends ig.HTMLElement{constructor(){if(super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cY,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[aK.MEDIA_CONTROLLER,aY.MEDIA_PREVIEW_IMAGE,aY.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,a;let i=this.getAttribute(aK.MEDIA_CONTROLLER);i&&(ob(this,cY,null==(e=this.getRootNode())?void 0:e.getElementById(i)),null==(a=null==(t=ov(this,cY))?void 0:t.associateElement)||a.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ov(this,cY))?void 0:e.unassociateElement)||t.call(e,this),ob(this,cY,null)}attributeChangedCallback(e,t,a){var i,r,n,s,o;[aY.MEDIA_PREVIEW_IMAGE,aY.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===aK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(i=ov(this,cY))?void 0:i.unassociateElement)||r.call(i,this),ob(this,cY,null)),a&&this.isConnected&&(ob(this,cY,null==(n=this.getRootNode())?void 0:n.getElementById(a)),null==(o=null==(s=ov(this,cY))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return iF(this,aY.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iY(this,aY.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(aY.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(aY.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(aY.MEDIA_PREVIEW_COORDS)}update(){let e,t,a=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(a&&i))return;let[r,n,s,o]=a,l=i.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let a=parseInt(u)/s,i=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=a<1?a:Math.max(a,r),t=i<1?i:Math.max(i,n)}else{let a=Math.min(parseInt(u)/s,parseInt(c)/o),i=Math.max(parseInt(h)/s,parseInt(m)/o),r=a<1?a:i>1?i:1;e=r,t=r}let{style:p}=iW(this.shadowRoot,":host"),v=iW(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),E=1>Math.min(e,t)?"min":"max";p.setProperty(`${E}-width`,"initial","important"),p.setProperty(`${E}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let g=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,g(),b.onload=null},b.src=l,g()),g(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}cY=new WeakMap,oE.shadowRootOptions={mode:"open"},oE.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},ig.customElements.get("media-preview-thumbnail")||ig.customElements.define("media-preview-thumbnail",oE);try{var og="u">typeof window?window:e.g;og._sentryModuleMetadata=og._sentryModuleMetadata||{},og._sentryModuleMetadata[(new og.Error).stack]=Object.assign({},og._sentryModuleMetadata[(new og.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var oy=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},of=(e,t,a)=>(oy(e,t,"read from private field"),a?a.call(e):t.get(e));cj=new WeakMap,ig.customElements.get("media-preview-time-display")||ig.customElements.define("media-preview-time-display",class extends sh{constructor(){super(),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,cj,void 0),((e,t,a,i)=>(oy(e,t,"write to private field"),i?i.call(e,a):t.set(e,a)))(this,cj,this.shadowRoot.querySelector("slot")),of(this,cj).textContent=il(0)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_PREVIEW_TIME&&null!=a&&(of(this,cj).textContent=il(parseFloat(a)))}get mediaPreviewTime(){return i$(this,aY.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iH(this,aY.MEDIA_PREVIEW_TIME,e)}});try{var oA="u">typeof window?window:e.g;oA._sentryModuleMetadata=oA._sentryModuleMetadata||{},oA._sentryModuleMetadata[(new oA.Error).stack]=Object.assign({},oA._sentryModuleMetadata[(new oA.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let ow="seekoffset";class ok extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_CURRENT_TIME,ow]}connectedCallback(){super.connectedCallback(),this.seekOffset=i$(this,ow,30)}attributeChangedCallback(e,t,a){var i;super.attributeChangedCallback(e,t,a),i=this.seekOffset,this.setAttribute("aria-label",ii("seek back {seekOffset} seconds",{seekOffset:i})),e===ow&&(this.seekOffset=i$(this,ow,30))}get seekOffset(){return i$(this,ow,30)}set seekOffset(e){iH(this,ow,e),this.setAttribute("aria-label",ii("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),iL(iD(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return i$(this,aY.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iH(this,aY.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new ig.CustomEvent(aH.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}ok.getSlotTemplateHTML=function(e,t){let a;return`
    <slot name="icon">${a=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${a}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},ok.getTooltipContentHTML=function(){return ii("Seek backward")},ig.customElements.get("media-seek-backward-button")||ig.customElements.define("media-seek-backward-button",ok);try{var oT="u">typeof window?window:e.g;oT._sentryModuleMetadata=oT._sentryModuleMetadata||{},oT._sentryModuleMetadata[(new oT.Error).stack]=Object.assign({},oT._sentryModuleMetadata[(new oT.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let o_="seekoffset";class oM extends nU{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_CURRENT_TIME,o_]}connectedCallback(){super.connectedCallback(),this.seekOffset=i$(this,o_,30)}attributeChangedCallback(e,t,a){var i;super.attributeChangedCallback(e,t,a),i=this.seekOffset,this.setAttribute("aria-label",ii("seek forward {seekOffset} seconds",{seekOffset:i})),e===o_&&(this.seekOffset=i$(this,o_,30))}get seekOffset(){return i$(this,o_,30)}set seekOffset(e){iH(this,o_,e),this.setAttribute("aria-label",ii("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),iL(iD(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return i$(this,aY.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iH(this,aY.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new ig.CustomEvent(aH.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}oM.getSlotTemplateHTML=function(e,t){let a;return`
    <slot name="icon">${a=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${a}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},oM.getTooltipContentHTML=function(){return ii("Seek forward")},ig.customElements.get("media-seek-forward-button")||ig.customElements.define("media-seek-forward-button",oM);try{var oC="u">typeof window?window:e.g;oC._sentryModuleMetadata=oC._sentryModuleMetadata||{},oC._sentryModuleMetadata[(new oC.Error).stack]=Object.assign({},oC._sentryModuleMetadata[(new oC.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var oI=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oR=(e,t,a)=>(oI(e,t,"read from private field"),a?a.call(e):t.get(e)),oS=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},oL=(e,t,a,i)=>(oI(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),oD=(e,t,a)=>(oI(e,t,"access private method"),a);let ox={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},oO=[...Object.values(ox),aY.MEDIA_CURRENT_TIME,aY.MEDIA_DURATION,aY.MEDIA_SEEKABLE],oN=["Enter"," "],oP="&nbsp;/&nbsp;",oU=(e,{timesSep:t=oP}={})=>{var a,i;let r=null!=(a=e.mediaCurrentTime)?a:0,[,n]=null!=(i=e.mediaSeekable)?i:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?il(0-(s-r)):il(r);return e.showDuration?`${o}${t}${il(s)}`:o};class oW extends sh{constructor(){super(),oS(this,cz),oS(this,cX),oS(this,c0),oS(this,c2),oS(this,cG,void 0),oS(this,cq,null),oS(this,cZ,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!oN.includes(i)?this.removeEventListener("keyup",oR(this,cq)):this.addEventListener("keyup",oR(this,cq))}),oL(this,cG,this.shadowRoot.querySelector("slot")),oR(this,cG).innerHTML=`${oU(this)}`}static get observedAttributes(){return[...super.observedAttributes,...oO,"disabled"]}connectedCallback(){let{style:e}=iW(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",ii("playback time")),oD(this,c0,c1).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),oD(this,cX,cJ).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,a){this.setAttribute("aria-label",ii("playback time")),oO.includes(e)?this.update():"disabled"===e&&a!==t?null==a?oD(this,c0,c1).call(this):oD(this,c2,c3).call(this):e===ox.NO_TOGGLE&&a!==t&&(this.noToggle?oD(this,c2,c3).call(this):oD(this,c0,c1).call(this)),super.attributeChangedCallback(e,t,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return iK(this,ox.REMAINING)}set remaining(e){iV(this,ox.REMAINING,e)}get showDuration(){return iK(this,ox.SHOW_DURATION)}set showDuration(e){iV(this,ox.SHOW_DURATION,e)}get noToggle(){return iK(this,ox.NO_TOGGLE)}set noToggle(e){iV(this,ox.NO_TOGGLE,e)}get mediaDuration(){return i$(this,aY.MEDIA_DURATION)}set mediaDuration(e){iH(this,aY.MEDIA_DURATION,e)}get mediaCurrentTime(){return i$(this,aY.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iH(this,aY.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(aY.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(aY.MEDIA_SEEKABLE):this.setAttribute(aY.MEDIA_SEEKABLE,e.join(":"))}update(){let e=oU(this);(e=>{var t;let a=e.mediaCurrentTime,[,i]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(i)&&(r=i),null==a||null===r)return e.setAttribute("aria-valuetext",ii("video not loaded, unknown time."));let n=e.remaining?io(0-(r-a)):io(a);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=ii("{currentTime} of {totalTime}",{currentTime:n,totalTime:io(r)});e.setAttribute("aria-valuetext",s)})(this),e!==oR(this,cG).innerHTML&&(oR(this,cG).innerHTML=e)}}cG=new WeakMap,cq=new WeakMap,cZ=new WeakMap,cz=new WeakSet,cQ=function(){oR(this,cq)||(oL(this,cq,e=>{let{key:t}=e;oN.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",oR(this,cq))}),this.addEventListener("keydown",oR(this,cZ)),this.addEventListener("click",this.toggleTimeDisplay))},cX=new WeakSet,cJ=function(){oR(this,cq)&&(this.removeEventListener("keyup",oR(this,cq)),this.removeEventListener("keydown",oR(this,cZ)),this.removeEventListener("click",this.toggleTimeDisplay),oL(this,cq,null))},c0=new WeakSet,c1=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),oD(this,cz,cQ).call(this))},c2=new WeakSet,c3=function(){this.removeAttribute("role"),this.disable(),oD(this,cX,cJ).call(this)},oW.getSlotTemplateHTML=function(e,t){return`
    <slot>${oU(t)}</slot>
  `},ig.customElements.get("media-time-display")||ig.customElements.define("media-time-display",oW);try{var oB="u">typeof window?window:e.g;oB._sentryModuleMetadata=oB._sentryModuleMetadata||{},oB._sentryModuleMetadata[(new oB.Error).stack]=Object.assign({},oB._sentryModuleMetadata[(new oB.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var o$=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oH=(e,t,a)=>(o$(e,t,"read from private field"),a?a.call(e):t.get(e)),oK=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},oV=(e,t,a,i)=>(o$(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);class oF{constructor(e,t,a){oK(this,c4,void 0),oK(this,c5,void 0),oK(this,c9,void 0),oK(this,c8,void 0),oK(this,c6,void 0),oK(this,c7,void 0),oK(this,he,void 0),oK(this,ht,void 0),oK(this,ha,0),oK(this,hi,(e=performance.now())=>{oV(this,ha,requestAnimationFrame(oH(this,hi))),oV(this,c8,performance.now()-oH(this,c9));let t=1e3/this.fps;if(oH(this,c8)>t){let a,i,r,n;oV(this,c9,e-oH(this,c8)%t);let s=1e3/((e-oH(this,c5))/++(a=this,i=c6,{set _(value){oV(a,i,value,r)},get _(){return oH(a,i,n)}})._),o=(e-oH(this,c7))/1e3/this.duration,l=oH(this,he)+o*this.playbackRate;l-oH(this,c4).valueAsNumber>0?oV(this,ht,this.playbackRate/this.duration/s):(oV(this,ht,.995*oH(this,ht)),l=oH(this,c4).valueAsNumber+oH(this,ht)),this.callback(l)}}),oV(this,c4,e),this.callback=t,this.fps=a}start(){0===oH(this,ha)&&(oV(this,c9,performance.now()),oV(this,c5,oH(this,c9)),oV(this,c6,0),oH(this,hi).call(this))}stop(){0!==oH(this,ha)&&(cancelAnimationFrame(oH(this,ha)),oV(this,ha,0))}update({start:e,duration:t,playbackRate:a}){let i=e-oH(this,c4).valueAsNumber,r=Math.abs(t-this.duration);(i>0||i<-.03||r>=.5)&&this.callback(e),oV(this,he,e),oV(this,c7,performance.now()),this.duration=t,this.playbackRate=a}}c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakMap,c6=new WeakMap,c7=new WeakMap,he=new WeakMap,ht=new WeakMap,ha=new WeakMap,hi=new WeakMap;try{var oY="u">typeof window?window:e.g;oY._sentryModuleMetadata=oY._sentryModuleMetadata||{},oY._sentryModuleMetadata[(new oY.Error).stack]=Object.assign({},oY._sentryModuleMetadata[(new oY.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var oj=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},oG=(e,t,a)=>(oj(e,t,"read from private field"),a?a.call(e):t.get(e)),oq=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},oZ=(e,t,a,i)=>(oj(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),oz=(e,t,a)=>(oj(e,t,"access private method"),a);let oQ=(e,t=e.mediaCurrentTime)=>{let a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(i)?0:Math.max(0,Math.min((t-a)/(i-a),1))},oX=(e,t=e.range.valueAsNumber)=>{let a=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,i=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(i)?0:t*(i-a)+a};class oJ extends sa{constructor(){super(),oq(this,hv),oq(this,hg),oq(this,hf),oq(this,hw),oq(this,hT),oq(this,hM),oq(this,hI),oq(this,hr,null),oq(this,hn,void 0),oq(this,hs,void 0),oq(this,ho,void 0),oq(this,hl,void 0),oq(this,hd,void 0),oq(this,hu,void 0),oq(this,hc,void 0),oq(this,hh,void 0),oq(this,hm,void 0),oq(this,hp,()=>{oz(this,hv,hb).call(this)?oG(this,hn).start():oG(this,hn).stop()}),oq(this,hE,e=>{!this.dragging&&(a9(e)&&(this.range.valueAsNumber=e),oG(this,hm)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oZ(this,hs,this.shadowRoot.querySelectorAll('[part~="box"]')),oZ(this,hl,this.shadowRoot.querySelector('[part~="preview-box"]')),oZ(this,hd,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);oZ(this,hu,parseInt(e.getPropertyValue("--media-box-padding-left"))),oZ(this,hc,parseInt(e.getPropertyValue("--media-box-padding-right"))),oZ(this,hn,new oF(this.range,oG(this,hE),60))}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PAUSED,aY.MEDIA_DURATION,aY.MEDIA_SEEKABLE,aY.MEDIA_CURRENT_TIME,aY.MEDIA_PREVIEW_IMAGE,aY.MEDIA_PREVIEW_TIME,aY.MEDIA_PREVIEW_CHAPTER,aY.MEDIA_BUFFERED,aY.MEDIA_PLAYBACK_RATE,aY.MEDIA_LOADING,aY.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ii("seek")),oG(this,hp).call(this),oZ(this,hr,this.getRootNode()),null==(e=oG(this,hr))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oG(this,hn).stop(),null==(e=oG(this,hr))||e.removeEventListener("transitionstart",this),oZ(this,hr,null)}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),t!=a){if(e===aY.MEDIA_CURRENT_TIME||e===aY.MEDIA_PAUSED||e===aY.MEDIA_ENDED||e===aY.MEDIA_LOADING||e===aY.MEDIA_DURATION||e===aY.MEDIA_SEEKABLE){let e,t,a,i;oG(this,hn).update({start:oQ(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oG(this,hp).call(this),e=this.range,t=io(+oX(this)),a=io(+this.mediaSeekableEnd),i=t&&a?ii("{currentTime} of {totalTime}",{currentTime:t,totalTime:a}):ii("video not loaded, unknown time."),e.setAttribute("aria-valuetext",i)}else e===aY.MEDIA_BUFFERED&&this.updateBufferedBar();(e===aY.MEDIA_DURATION||e===aY.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oG(this,hh),this.updateBar())}}get mediaChaptersCues(){return oG(this,hh)}set mediaChaptersCues(e){var t;oZ(this,hh,e),this.updateSegments(null==(t=oG(this,hh))?void 0:t.map(e=>({start:oQ(this,e.startTime),end:oQ(this,e.endTime)})))}get mediaPaused(){return iK(this,aY.MEDIA_PAUSED)}set mediaPaused(e){iV(this,aY.MEDIA_PAUSED,e)}get mediaLoading(){return iK(this,aY.MEDIA_LOADING)}set mediaLoading(e){iV(this,aY.MEDIA_LOADING,e)}get mediaDuration(){return i$(this,aY.MEDIA_DURATION)}set mediaDuration(e){iH(this,aY.MEDIA_DURATION,e)}get mediaCurrentTime(){return i$(this,aY.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iH(this,aY.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return i$(this,aY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iH(this,aY.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(aY.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(aY.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(aY.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(aY.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(aY.MEDIA_SEEKABLE):this.setAttribute(aY.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return iF(this,aY.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iY(this,aY.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return i$(this,aY.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iH(this,aY.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return iK(this,aY.MEDIA_ENDED)}set mediaEnded(e){iV(this,aY.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,a=this.mediaBuffered;if(!a.length)return;if(this.mediaEnded)t=1;else{let i=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=a.find(([e,t])=>e<=i&&i<=t))?e:[];t=oQ(this,r)}let{style:i}=iW(this.shadowRoot,"#buffered");i.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=iW(this.shadowRoot,"#current-rail"),t=iW(this.shadowRoot,'[part~="current-box"]'),a=oz(this,hg,hy).call(this,oG(this,hd)),i=oz(this,hf,hA).call(this,a,this.range.valueAsNumber),r=oz(this,hw,hk).call(this,a,this.range.valueAsNumber);e.style.transform=`translateX(${i})`,e.style.setProperty("--_range-width",`${a.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${a.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oz(this,hI,hR).call(this);break;case"pointermove":oz(this,hT,h_).call(this,e);break;case"pointerup":oG(this,hm)&&oZ(this,hm,!1);break;case"pointerdown":oZ(this,hm,!0);break;case"pointerleave":oz(this,hM,hC).call(this,null);break;case"transitionstart":ix(e.target,this)&&setTimeout(()=>oG(this,hp).call(this),0)}}}hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakMap,hc=new WeakMap,hh=new WeakMap,hm=new WeakMap,hp=new WeakMap,hv=new WeakSet,hb=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&iU(this)},hE=new WeakMap,hg=new WeakSet,hy=function(e){var t;let a=(null!=(t=this.getAttribute("bounds")?iO(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),i=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(i.left-a.left-r/2),s=a.right-i.left-r/2;return{box:{width:r,min:n,max:s},bounds:a,range:i}},hf=new WeakSet,hA=function(e,t){let a=`${100*t}%`,{width:i,min:r,max:n}=e.box;if(!i)return a;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;a=`max(${e}, ${a})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;a=`min(${a}, ${e})`}return a},hw=new WeakSet,hk=function(e,t){let{width:a,min:i,max:r}=e.box,n=t*e.range.width;if(n<i+oG(this,hu)){let t=e.range.left-e.bounds.left-oG(this,hu);return`${n-a/2+t}px`}if(n>r-oG(this,hc)){let t=e.bounds.right-e.range.right-oG(this,hc);return`${n+a/2-t-e.range.width}px`}return 0},hT=new WeakSet,h_=function(e){let t=[...oG(this,hs)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void oz(this,hM,hC).call(this,null);let a=this.mediaSeekableEnd;if(!a)return;let i=iW(this.shadowRoot,"#preview-rail"),r=iW(this.shadowRoot,'[part~="preview-box"]'),n=oz(this,hg,hy).call(this,oG(this,hl)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=oz(this,hf,hA).call(this,n,s),l=oz(this,hw,hk).call(this,n,s);i.style.transform=`translateX(${o})`,i.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(oG(this,ho))-Math.round(s*a))&&s>.01&&s<.99||(oZ(this,ho,s*a),oz(this,hM,hC).call(this,oG(this,ho)))},hM=new WeakSet,hC=function(e){this.dispatchEvent(new ig.CustomEvent(aH.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},hI=new WeakSet,hR=function(){oG(this,hn).stop();let e=oX(this);this.dispatchEvent(new ig.CustomEvent(aH.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},oJ.shadowRootOptions={mode:"open"},oJ.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${aY.MEDIA_PREVIEW_IMAGE}], [${aY.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${aY.MEDIA_PREVIEW_IMAGE}], [${aY.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${aY.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${aY.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${aY.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${aY.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${aY.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${aY.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${aY.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${aY.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${aY.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${aY.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${aY.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${aY.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${oE.shadowRootOptions.mode}">
            ${oE.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},ig.customElements.get("media-time-range")||ig.customElements.define("media-time-range",oJ);try{var o0="u">typeof window?window:e.g;o0._sentryModuleMetadata=o0._sentryModuleMetadata||{},o0._sentryModuleMetadata[(new o0.Error).stack]=Object.assign({},o0._sentryModuleMetadata[(new o0.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var o1=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return a?a.call(e):t.get(e)};hS=new WeakMap,ig.customElements.get("media-volume-range")||ig.customElements.define("media-volume-range",class extends sa{constructor(){super(...arguments),((e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)})(this,hS,()=>{let e=this.range.value,t=new ig.CustomEvent(aH.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_VOLUME,aY.MEDIA_MUTED,aY.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ii("volume")),this.range.addEventListener("input",o1(this,hS))}disconnectedCallback(){this.range.removeEventListener("input",o1(this,hS)),super.disconnectedCallback()}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===aY.MEDIA_VOLUME||e===aY.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return i$(this,aY.MEDIA_VOLUME,1)}set mediaVolume(e){iH(this,aY.MEDIA_VOLUME,e)}get mediaMuted(){return iK(this,aY.MEDIA_MUTED)}set mediaMuted(e){iV(this,aY.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return iF(this,aY.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){iY(this,aY.MEDIA_VOLUME_UNAVAILABLE,e)}});try{var o2="u">typeof window?window:e.g;o2._sentryModuleMetadata=o2._sentryModuleMetadata||{},o2._sentryModuleMetadata[(new o2.Error).stack]=Object.assign({},o2._sentryModuleMetadata[(new o2.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class o3 extends nU{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=ii("Loop"))}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return iK(this,aY.MEDIA_LOOP)}set mediaLoop(e){iV(this,aY.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new ig.CustomEvent(aH.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}o3.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${aY.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},o3.getTooltipContentHTML=function(){return ii("Loop")},ig.customElements.get("media-loop-button")||ig.customElements.define("media-loop-button",o3);try{var o4="u">typeof window?window:e.g;o4._sentryModuleMetadata=o4._sentryModuleMetadata||{},o4._sentryModuleMetadata[(new o4.Error).stack]=Object.assign({},o4._sentryModuleMetadata[(new o4.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var o5="u">typeof window?window:e.g;o5._sentryModuleMetadata=o5._sentryModuleMetadata||{},o5._sentryModuleMetadata[(new o5.Error).stack]=Object.assign({},o5._sentryModuleMetadata[(new o5.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var o9="u">typeof window?window:e.g;o9._sentryModuleMetadata=o9._sentryModuleMetadata||{},o9._sentryModuleMetadata[(new o9.Error).stack]=Object.assign({},o9._sentryModuleMetadata[(new o9.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var o8=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},o6=(e,t,a)=>(o8(e,t,"read from private field"),a?a.call(e):t.get(e)),o7=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},le=(e,t,a,i)=>(o8(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a);let lt={processCallback(e,t,a){if(a){for(let[e,i]of t)if(e in a){let t=a[e];"boolean"==typeof t&&i instanceof ld&&"boolean"==typeof i.element[i.attributeName]?i.booleanValue=t:"function"==typeof t&&i instanceof ld?i.element[i.attributeName]=t:i.value=t}}}};class la extends ig.DocumentFragment{constructor(e,t,a=lt){var i;super(),o7(this,hL,void 0),o7(this,hD,void 0),this.append(e.content.cloneNode(!0)),le(this,hL,li(this)),le(this,hD,a),null==(i=a.createCallback)||i.call(a,this,o6(this,hL),t),a.processCallback(this,o6(this,hL),t)}update(e){o6(this,hD).processCallback(this,o6(this,hL),e)}}hL=new WeakMap,hD=new WeakMap;let li=(e,t=[])=>{let a,i;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new ll;for([a,i]of ln(r.value))if(a){let a=new ld(e,r.name,r.namespaceURI);n.append(a),t.push([i,a])}else n.append(i);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([a,i]of ln(n))if(a){let a=new lu(e);s.push(a),t.push([i,a])}else s.push(new Text(i));else if(r instanceof HTMLTemplateElement){let a=new lc(e,r);s.push(a),t.push([a.expression,a])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else li(r,t);return t},lr={},ln=e=>{let t="",a=0,i=lr[e],r=0,n;if(i)return i;for(i=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++a?(t&&i.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--a?t+=n||"":(i.push([1,t.trim()]),t="",r++);return t&&i.push([0,(a>0?"{{":"")+t]),lr[e]=i};class ls{get value(){return""}set value(e){}toString(){return this.value}}let lo=new WeakMap;class ll{constructor(){o7(this,hx,[])}[Symbol.iterator](){return o6(this,hx).values()}get length(){return o6(this,hx).length}item(e){return o6(this,hx)[e]}append(...e){for(let t of e)t instanceof ld&&lo.set(t,this),o6(this,hx).push(t)}toString(){return o6(this,hx).join("")}}hx=new WeakMap;class ld extends ls{constructor(e,t,a){super(),o7(this,hW),o7(this,hO,""),o7(this,hN,void 0),o7(this,hP,void 0),o7(this,hU,void 0),le(this,hN,e),le(this,hP,t),le(this,hU,a)}get attributeName(){return o6(this,hP)}get attributeNamespace(){return o6(this,hU)}get element(){return o6(this,hN)}get value(){return o6(this,hO)}set value(e){o6(this,hO)!==e&&(le(this,hO,e),o6(this,hW,hB)&&1!==o6(this,hW,hB).length?o6(this,hN).setAttributeNS(o6(this,hU),o6(this,hP),o6(this,hW,hB).toString()):null==e?o6(this,hN).removeAttributeNS(o6(this,hU),o6(this,hP)):o6(this,hN).setAttributeNS(o6(this,hU),o6(this,hP),e))}get booleanValue(){return o6(this,hN).hasAttributeNS(o6(this,hU),o6(this,hP))}set booleanValue(e){if(o6(this,hW,hB)&&1!==o6(this,hW,hB).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}hO=new WeakMap,hN=new WeakMap,hP=new WeakMap,hU=new WeakMap,hW=new WeakSet,hB=function(){return lo.get(this)};class lu extends ls{constructor(e,t){super(),o7(this,h$,void 0),o7(this,hH,void 0),le(this,h$,e),le(this,hH,t?[...t]:[new Text])}get replacementNodes(){return o6(this,hH)}get parentNode(){return o6(this,h$)}get nextSibling(){return o6(this,hH)[o6(this,hH).length-1].nextSibling}get previousSibling(){return o6(this,hH)[0].previousSibling}get value(){return o6(this,hH).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),le(this,hH,function(e,t,a,i=null){let r=0,n,s,o,l=a.length,d=t.length;for(;r<l&&r<d&&t[r]==a[r];)r++;for(;r<l&&r<d&&a[l-1]==t[d-1];)i=a[--d,--l];if(r==d)for(;r<l;)e.insertBefore(a[r++],i);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=a[r++],s=n?n.nextSibling:i,n==o?n=s:r<l&&a[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=i;)s=n.nextSibling,e.removeChild(n),n=s}return a}(o6(this,hH)[0].parentNode,o6(this,hH),t,this.nextSibling))}}h$=new WeakMap,hH=new WeakMap;class lc extends lu{constructor(e,t){const a=t.getAttribute("directive")||t.getAttribute("type");let i=t.getAttribute("expression")||t.getAttribute(a)||"";i.startsWith("{{")&&(i=i.trim().slice(2,-2).trim()),super(e),this.expression=i,this.template=t,this.directive=a}}try{var lh="u">typeof window?window:e.g;lh._sentryModuleMetadata=lh._sentryModuleMetadata||{},lh._sentryModuleMetadata[(new lh.Error).stack]=Object.assign({},lh._sentryModuleMetadata[(new lh.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let lm={string:e=>String(e)};class lp{constructor(e){this.template=e,this.state=void 0}}let lv=new WeakMap,lb=new WeakMap,lE={partial:(e,t)=>{t[e.expression]=new lp(e.template)},if:(e,t)=>{var a;if(lA(e.expression,t))if(lv.get(e)!==e.template){lv.set(e,e.template);let a=new la(e.template,t,ly);e.replace(a),lb.set(e,a)}else null==(a=lb.get(e))||a.update(t);else e.replace(""),lv.delete(e),lb.delete(e)}},lg=Object.keys(lE),ly={processCallback(e,t,a){var i,r;if(a)for(let[e,n]of t){if(n instanceof lc){if(!n.directive){let e=lg.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(i=lE[n.directive])||i.call(lE,n,a);continue}let t=lA(e,a);if(t instanceof lp){lv.get(n)!==t.template?(lv.set(n,t.template),n.value=t=new la(t.template,t.state,ly),lb.set(n,t)):null==(r=lb.get(n))||r.update(t.state);continue}t?(n instanceof ld&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof ld?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,lv.delete(n),lb.delete(n))):n instanceof ld?n.value=void 0:(n.value=void 0,lv.delete(n),lb.delete(n))}}},lf={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var a;return null==(a=lm[t])?void 0:a.call(lm,e)}};function lA(e,t={}){var a,i,r,n,s,o,l;let d=(function(e,t){let a,i,r,n=[];for(;e;){for(let n in r=null,a=e.length,t)(i=t[n].exec(e))&&i.index<a&&(r={token:i[0],type:n,matches:i.slice(1)},a=i.index);a&&n.push({token:e.substr(0,a),type:void 0}),r&&n.push(r),e=e.substr(a+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lw(e);if((null==(a=d[0])?void 0:a.token)===">"){let a=t[null==(i=d[1])?void 0:i.token];if(!a)return lw(e);let o={...t};a.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let a=null==(r=l[e])?void 0:r.token,i=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;a&&"="===i&&(o[a]=lT(d,t))}return a}if(1===d.length)return lk(d[0])?lT(d[0].token,t):lw(e);if(2===d.length){let a=lf[null==(o=d[0])?void 0:o.token];return a&&lk(d[1])?a(lT(d[1].token,t)):lw(e)}if(3===d.length){let a=null==(l=d[1])?void 0:l.token,i=lf[a];if(!i||!lk(d[0])||!lk(d[2]))return lw(e);let r=lT(d[0].token,t);return i(r,"|"===a?d[2].token:lT(d[2].token,t))}}function lw(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lk({type:e}){return["number","boolean","string","param"].includes(e)}function lT(e,t){let a=e[0],i=e.slice(-1);return"true"===e||"false"===e?"true"===e:a===i&&["'",'"'].includes(a)?e.slice(1,-1):a8(e)?parseFloat(e):t[e]}try{var l_="u">typeof window?window:e.g;l_._sentryModuleMetadata=l_._sentryModuleMetadata||{},l_._sentryModuleMetadata[(new l_.Error).stack]=Object.assign({},l_._sentryModuleMetadata[(new l_.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var lM=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},lC=(e,t,a)=>(lM(e,t,"read from private field"),a?a.call(e):t.get(e)),lI=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},lR=(e,t,a,i)=>(lM(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),lS=(e,t,a)=>(lM(e,t,"access private method"),a);let lL={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lD=iy.createElement("template");lD.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lx extends ig.HTMLElement{constructor(){super(),lI(this,hj),lI(this,hq),lI(this,hK,void 0),lI(this,hV,void 0),lI(this,hF,void 0),lI(this,hY,void 0),lI(this,hz,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),lR(this,hY,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lL[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),lR(this,hz,this.render.bind(this)),lS(this,hj,hG).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lC(this,hK))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(lR(this,hK,e),lR(this,hF,null),this.createRenderer())}get props(){var e,t,a;let i=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lL[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of i){let t=null!=(a=lL[e.name])?a:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:i}=e;null!=i?(a8(i)&&(i=parseFloat(i)),r[t]=""===i||i):r[t]=!1}return r}attributeChangedCallback(e,t,a){"template"===e&&t!=a&&lS(this,hq,hZ).call(this)}connectedCallback(){this.addEventListener(aj.BREAKPOINTS_COMPUTED,lC(this,hz)),lC(this,hY).observe(this,{attributes:!0}),lC(this,hY).observe(this.renderRoot,{attributes:!0,subtree:!0}),lS(this,hq,hZ).call(this)}disconnectedCallback(){this.removeEventListener(aj.BREAKPOINTS_COMPUTED,lC(this,hz)),lC(this,hY).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==lC(this,hV)&&(lR(this,hV,this.template),this.renderer=new la(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lD.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lO(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}hK=new WeakMap,hV=new WeakMap,hF=new WeakMap,hY=new WeakMap,hj=new WeakSet,hG=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},hq=new WeakSet,hZ=function(){var e;let t=this.getAttribute("template");if(!t||t===lC(this,hF))return;let a=this.getRootNode(),i=null==(e=null==a?void 0:a.getElementById)?void 0:e.call(a,t);if(i){lR(this,hF,t),lR(this,hK,i),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lR(this,hF,t),lO(t).then(e=>{let t=iy.createElement("template");t.innerHTML=e,lR(this,hK,t),this.createRenderer()}).catch(console.error))},hz=new WeakMap,lx.observedAttributes=["template"],lx.processor=ly,ig.customElements.get("media-theme")||ig.customElements.define("media-theme",lx);try{var lN="u">typeof window?window:e.g;lN._sentryModuleMetadata=lN._sentryModuleMetadata||{},lN._sentryModuleMetadata[(new lN.Error).stack]=Object.assign({},lN._sentryModuleMetadata[(new lN.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}function lP(e){return e.split("-")[0]}try{var lU="u">typeof window?window:e.g;lU._sentryModuleMetadata=lU._sentryModuleMetadata||{},lU._sentryModuleMetadata[(new lU.Error).stack]=Object.assign({},lU._sentryModuleMetadata[(new lU.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class lW extends Event{constructor({action:e="auto",relatedTarget:t,...a}){super("invoke",a),this.action=e,this.relatedTarget=t}}class lB extends Event{constructor({newState:e,oldState:t,...a}){super("toggle",a),this.newState=e,this.oldState=t}}try{var l$="u">typeof window?window:e.g;l$._sentryModuleMetadata=l$._sentryModuleMetadata||{},l$._sentryModuleMetadata[(new l$.Error).stack]=Object.assign({},l$._sentryModuleMetadata[(new l$.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var lH=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},lK=(e,t,a)=>(lH(e,t,"read from private field"),a?a.call(e):t.get(e)),lV=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},lF=(e,t,a,i)=>(lH(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),lY=(e,t,a)=>(lH(e,t,"access private method"),a);function lj({type:e,text:t,value:a,checked:i}){let r=iy.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=a,r.checked=i;let n=iy.createElement("span");return n.textContent=t,r.append(n),r}function lG(e,t){let a=e.querySelector(`:scope > [slot="${t}"]`);if((null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a)return a.cloneNode(!0);let i=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return i?i.cloneNode(!0):""}let lq="style",lZ="hidden",lz="disabled";class lQ extends ig.HTMLElement{constructor(){if(super(),lV(this,h4),lV(this,h9),lV(this,h7),lV(this,mt),lV(this,mi),lV(this,mn),lV(this,md),lV(this,mc),lV(this,mm),lV(this,mv),lV(this,mE),lV(this,my),lV(this,mA),lV(this,mk),lV(this,m_),lV(this,mC),lV(this,mR),lV(this,mL),lV(this,hQ,null),lV(this,hX,null),lV(this,hJ,null),lV(this,h0,new Set),lV(this,h1,void 0),lV(this,h2,!1),lV(this,h3,null),lV(this,h6,()=>{let e=lK(this,h0),t=new Set(this.items);for(let a of e)t.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(let a of t)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));lF(this,h0,t)}),lV(this,mo,()=>{lY(this,md,mu).call(this),lY(this,mc,mh).call(this,!1)}),lV(this,ml,()=>{lY(this,md,mu).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),lF(this,h1,new MutationObserver(lK(this,h6)))}static get observedAttributes(){return[lz,lZ,lq,"anchor",aK.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":lY(this,h4,h5).call(this,e);break;case"invoke":lY(this,mt,ma).call(this,e);break;case"click":lY(this,mm,mp).call(this,e);break;case"toggle":lY(this,mE,mg).call(this,e);break;case"focusout":lY(this,mA,mw).call(this,e);break;case"keydown":lY(this,mk,mT).call(this,e)}}connectedCallback(){var e,t;lK(this,h1).observe(this.defaultSlot,{childList:!0}),lF(this,h3,iB(this.shadowRoot,":host")),lY(this,h7,me).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),lF(this,hQ,iS(this)),null==(t=null==(e=lK(this,hQ))?void 0:e.associateElement)||t.call(e,this),this.hidden||(i_(lJ(this),lK(this,mo)),i_(this,lK(this,ml))),lY(this,h9,h8).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;lK(this,h1).disconnect(),iM(lJ(this),lK(this,mo)),iM(this,lK(this,ml)),this.disable(),null==(t=null==(e=lK(this,hQ))?void 0:e.unassociateElement)||t.call(e,this),lF(this,hQ,null),lF(this,hX,null),lF(this,hJ,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,a){var i,r,n,s;e===lZ&&a!==t?(lK(this,h2)||lF(this,h2,!0),this.hidden?lY(this,mn,ms).call(this):lY(this,mi,mr).call(this),this.dispatchEvent(new lB({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===aK.MEDIA_CONTROLLER?(t&&(null==(r=null==(i=lK(this,hQ))?void 0:i.unassociateElement)||r.call(i,this),lF(this,hQ,null)),a&&this.isConnected&&(lF(this,hQ,iS(this)),null==(s=null==(n=lK(this,hQ))?void 0:n.associateElement)||s.call(n,this))):e===lz&&a!==t?null==a?this.enable():this.disable():e===lq&&a!==t&&lY(this,h7,me).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=iP(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lX)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&lY(this,mL,mD).call(this,t)}focus(){if(lF(this,hX,iN()),this.items.length){lY(this,mR,mS).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let a=lY(this,m_,mM).call(this,e);a&&(lY(this,mL,mD).call(this,a,"checkbox"===a.type),lK(this,hJ)&&!this.hidden&&(null==(t=lK(this,hX))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,a;let{key:i}=e,r=this.items,n=null!=(a=null!=(t=lY(this,m_,mM).call(this,e))?t:lY(this,mC,mI).call(this))?a:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===i?s++:"ArrowUp"===i?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),lY(this,mR,mS).call(this,r[s]),r[s].focus()}}function lX(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function lJ(e){var t;return null!=(t=e.getAttribute("bounds")?iO(e,`#${e.getAttribute("bounds")}`):iR(e)||e.parentElement)?t:e}hQ=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakMap,h2=new WeakMap,h3=new WeakMap,h4=new WeakSet,h5=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&lY(this,h9,h8).call(this),t.name||lK(this,h6).call(this)},h9=new WeakSet,h8=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},h6=new WeakMap,h7=new WeakSet,me=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),a=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===a?"":"width:0")},mt=new WeakSet,ma=function(e){lF(this,hJ,e.relatedTarget),ix(this,e.relatedTarget)||(this.hidden=!this.hidden)},mi=new WeakSet,mr=function(){var e;null==(e=lK(this,hJ))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),i_(lJ(this),lK(this,mo)),i_(this,lK(this,ml))},mn=new WeakSet,ms=function(){var e;null==(e=lK(this,hJ))||e.setAttribute("aria-expanded","false"),iM(lJ(this),lK(this,mo)),iM(this,lK(this,ml))},mo=new WeakMap,ml=new WeakMap,md=new WeakSet,mu=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:a}=function({anchor:e,floating:t,placement:a}){let{x:i,y:r}=function({anchor:e,floating:t},a){let i,r="x"==(["top","bottom"].includes(lP(a))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=lP(a),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":i={x:o,y:e.y-t.height};break;case"bottom":i={x:o,y:e.y+e.height};break;case"right":i={x:e.x+e.width,y:l};break;case"left":i={x:e.x-t.width,y:l};break;default:i={x:e.x,y:e.y}}switch(a.split("-")[1]){case"start":i[r]-=d;break;case"end":i[r]+=d}return i}(function({anchor:e,floating:t}){var a,i,r;let n,s;return{anchor:(a=e,i=t.offsetParent,n=a.getBoundingClientRect(),s=null!=(r=null==i?void 0:i.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),a);return{x:i,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let i=lJ(this).getBoundingClientRect(),r=i.width-t-e,n=i.height-a-this.offsetHeight,{style:s}=lK(this,h3);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=i.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},mc=new WeakSet,mh=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),a=null==t?void 0:t.querySelector('[role="menu"]'),{style:i}=lK(this,h3);if(e||i.setProperty("--media-menu-transition-in","none"),a){let e=a.offsetHeight,i=Math.max(a.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${i}px`),this.style.setProperty("min-height",`${e}px`),lY(this,md,mu).call(this,i)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),lY(this,md,mu).call(this);i.removeProperty("--media-menu-transition-in")},mm=new WeakSet,mp=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(lK(this,mv,mb))){null==(t=lK(this,hX))||t.focus(),this.hidden=!0;return}let a=lY(this,m_,mM).call(this,e);!a||a.hasAttribute("disabled")||(lY(this,mR,mS).call(this,a),this.handleSelect(e))},mv=new WeakSet,mb=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},mE=new WeakSet,mg=function(e){if(e.target===this)return;lY(this,my,mf).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let a of t)a.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=a.getAttribute("aria-expanded")||a.invokeTargetElement.hidden||a.invokeTargetElement.dispatchEvent(new lW({relatedTarget:a})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);lY(this,mc,mh).call(this,!0)},my=new WeakSet,mf=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},mA=new WeakSet,mw=function(e){var t;ix(this,e.relatedTarget)||(lK(this,h2)&&(null==(t=lK(this,hX))||t.focus()),lK(this,hJ)&&lK(this,hJ)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},mk=new WeakSet,mT=function(e){var t,a,i,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(lK(this,h2)){this.hidden=!0;return}e.shiftKey?null==(a=null==(t=this.previousElementSibling)?void 0:t.focus)||a.call(t):null==(r=null==(i=this.nextElementSibling)?void 0:i.focus)||r.call(i),this.blur()}else"Escape"===s?(null==(n=lK(this,hX))||n.focus(),lK(this,h2)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},m_=new WeakSet,mM=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},mC=new WeakSet,mI=function(){return this.items.find(e=>0===e.tabIndex)},mR=new WeakSet,mS=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},mL=new WeakSet,mD=function(e,t){let a=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=a[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},lQ.shadowRootOptions={mode:"open"},lQ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},ig.customElements.get("media-chrome-menu")||ig.customElements.define("media-chrome-menu",lQ);try{var l0="u">typeof window?window:e.g;l0._sentryModuleMetadata=l0._sentryModuleMetadata||{},l0._sentryModuleMetadata[(new l0.Error).stack]=Object.assign({},l0._sentryModuleMetadata[(new l0.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var l1=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},l2=(e,t,a)=>(l1(e,t,"read from private field"),a?a.call(e):t.get(e)),l3=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},l4=(e,t,a,i)=>(l1(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),l5=(e,t,a)=>(l1(e,t,"access private method"),a);let l9="type",l8="value",l6="checked",l7="disabled";class de extends ig.HTMLElement{constructor(){if(super(),l3(this,mN),l3(this,mU),l3(this,mB),l3(this,mF),l3(this,mx,!1),l3(this,mO,void 0),l3(this,mH,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let a=this.shadowRoot.querySelector('slot[name="description"]'),i=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==i?void 0:i.dataset.description)?t:null==i?void 0:i.text,n=iy.createElement("span");n.textContent=null!=r?r:"",a.replaceChildren(n)}),l3(this,mK,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",l2(this,mK))}),l3(this,mV,e=>{let{metaKey:t,altKey:a,key:i}=e;t||a||!this.keysUsed.includes(i)?this.removeEventListener("keyup",l2(this,mK)):this.addEventListener("keyup",l2(this,mK),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=iI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[l9,l7,l6,l8]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),dt(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":l5(this,mN,mP).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":l2(this,mV).call(this,e);break;case"keyup":l2(this,mK).call(this,e)}}attributeChangedCallback(e,t,a){e===l6&&dt(this)&&!l2(this,mx)?this.setAttribute("aria-checked",null!=a?"true":"false"):e===l9&&a!==t?this.role="menuitem"+a:e===l7&&a!==t&&(null==a?this.enable():this.disable())}connectedCallback(){this.hasAttribute(l7)||this.enable(),this.role="menuitem"+this.type,l4(this,mO,function e(t,a){if(!t)return null;let{host:i}=t.getRootNode();return!a&&i?e(t,i):(null==a?void 0:a.items)?a:e(a,null==a?void 0:a.parentNode)}(this,this.parentNode)),l5(this,mF,mY).call(this),this.submenuElement&&l5(this,mU,mW).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),l5(this,mF,mY).call(this),l4(this,mO,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=iP(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(l9))?e:""}set type(e){this.setAttribute(l9,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(l8))?e:this.text}set value(e){this.setAttribute(l8,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(dt(this))return"true"===this.getAttribute("aria-checked")}set checked(e){dt(this)&&(l4(this,mx,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!dt(this)&&this.invokeTargetElement&&ix(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lW({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function dt(e){return"radio"===e.type||"checkbox"===e.type}mx=new WeakMap,mO=new WeakMap,mN=new WeakSet,mP=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?l5(this,mU,mW).call(this):l5(this,mB,m$).call(this))},mU=new WeakSet,mW=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",l2(this,mH)),this.submenuElement.addEventListener("addmenuitem",l2(this,mH)),this.submenuElement.addEventListener("removemenuitem",l2(this,mH)),l2(this,mH).call(this)},mB=new WeakSet,m$=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",l2(this,mH)),this.submenuElement.removeEventListener("addmenuitem",l2(this,mH)),this.submenuElement.removeEventListener("removemenuitem",l2(this,mH)),l2(this,mH).call(this)},mH=new WeakMap,mK=new WeakMap,mV=new WeakMap,mF=new WeakSet,mY=function(){var e;let t=null==(e=l2(this,mO))?void 0:e.radioGroupItems;if(!t)return;let a=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(a||(a=t[0]),t))e.setAttribute("aria-checked","false");null==a||a.setAttribute("aria-checked","true")},de.shadowRootOptions={mode:"open"},de.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},de.getSuffixSlotInnerHTML=function(e){return""},ig.customElements.get("media-chrome-menu-item")||ig.customElements.define("media-chrome-menu-item",de);try{var da="u">typeof window?window:e.g;da._sentryModuleMetadata=da._sentryModuleMetadata||{},da._sentryModuleMetadata[(new da.Error).stack]=Object.assign({},da._sentryModuleMetadata[(new da.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class di extends lQ{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:iR(this).querySelector("media-settings-menu-button")}}di.getTemplateHTML=function(e){return`
    ${lQ.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},ig.customElements.get("media-settings-menu")||ig.customElements.define("media-settings-menu",di);try{var dr="u">typeof window?window:e.g;dr._sentryModuleMetadata=dr._sentryModuleMetadata||{},dr._sentryModuleMetadata[(new dr.Error).stack]=Object.assign({},dr._sentryModuleMetadata[(new dr.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class dn extends de{}dn.shadowRootOptions={mode:"open"},dn.getTemplateHTML=function(e){return`
    ${de.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},dn.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},ig.customElements.get("media-settings-menu-item")||ig.customElements.define("media-settings-menu-item",dn);try{var ds="u">typeof window?window:e.g;ds._sentryModuleMetadata=ds._sentryModuleMetadata||{},ds._sentryModuleMetadata[(new ds.Error).stack]=Object.assign({},ds._sentryModuleMetadata[(new ds.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class dl extends nU{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=iP(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new lW({relatedTarget:this}))}}ig.customElements.get("media-chrome-menu-button")||ig.customElements.define("media-chrome-menu-button",dl);try{var dd="u">typeof window?window:e.g;dd._sentryModuleMetadata=dd._sentryModuleMetadata||{},dd._sentryModuleMetadata[(new dd.Error).stack]=Object.assign({},dd._sentryModuleMetadata[(new dd.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class du extends dl{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ii("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:iR(this).querySelector("media-settings-menu")}}du.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},du.getTooltipContentHTML=function(){return ii("Settings")},ig.customElements.get("media-settings-menu-button")||ig.customElements.define("media-settings-menu-button",du);try{var dc="u">typeof window?window:e.g;dc._sentryModuleMetadata=dc._sentryModuleMetadata||{},dc._sentryModuleMetadata[(new dc.Error).stack]=Object.assign({},dc._sentryModuleMetadata[(new dc.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var dh=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dm=(e,t,a)=>(dh(e,t,"read from private field"),a?a.call(e):t.get(e)),dp=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dv=(e,t,a,i)=>(dh(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),db=(e,t,a)=>(dh(e,t,"access private method"),a);mj=new WeakMap,mG=new WeakMap,mq=new WeakSet,mZ=function(){if(dm(this,mG)===JSON.stringify(this.mediaAudioTrackList))return;dv(this,mG,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=lj({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(e)}},mz=new WeakSet,mQ=function(){if(null==this.value)return;let e=new ig.CustomEvent(aH.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ig.customElements.get("media-audio-track-menu")||ig.customElements.define("media-audio-track-menu",class extends lQ{constructor(){super(...arguments),dp(this,mq),dp(this,mz),dp(this,mj,[]),dp(this,mG,void 0)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_AUDIO_TRACK_LIST,aY.MEDIA_AUDIO_TRACK_ENABLED,aY.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===aY.MEDIA_AUDIO_TRACK_ENABLED&&t!==a)this.value=a;else if(e===aY.MEDIA_AUDIO_TRACK_LIST&&t!==a){var i;dv(this,mj,null==(i=null!=a?a:"")?void 0:i.split(/\s+/).map(a5)),db(this,mq,mZ).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",db(this,mz,mQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",db(this,mz,mQ))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=iR(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return dm(this,mj)}set mediaAudioTrackList(e){dv(this,mj,e),db(this,mq,mZ).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=iF(this,aY.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){iY(this,aY.MEDIA_AUDIO_TRACK_ENABLED,e)}});try{var dE="u">typeof window?window:e.g;dE._sentryModuleMetadata=dE._sentryModuleMetadata||{},dE._sentryModuleMetadata[(new dE.Error).stack]=Object.assign({},dE._sentryModuleMetadata[(new dE.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let dg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dy=e=>{let t=ii("Audio");e.setAttribute("aria-label",t)};class df extends dl{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_AUDIO_TRACK_ENABLED,aY.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dy(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_LANG&&dy(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=iR(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=iF(this,aY.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){iY(this,aY.MEDIA_AUDIO_TRACK_ENABLED,e)}}df.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${dg}</slot>
  `},df.getTooltipContentHTML=function(){return ii("Audio")},ig.customElements.get("media-audio-track-menu-button")||ig.customElements.define("media-audio-track-menu-button",df);try{var dA="u">typeof window?window:e.g;dA._sentryModuleMetadata=dA._sentryModuleMetadata||{},dA._sentryModuleMetadata[(new dA.Error).stack]=Object.assign({},dA._sentryModuleMetadata[(new dA.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var dw=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dk=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dT=(e,t,a)=>(dw(e,t,"access private method"),a);let d_=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class dM extends lQ{constructor(){super(...arguments),dk(this,mJ),dk(this,m1),dk(this,mX,void 0)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_SUBTITLES_LIST,aY.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_SUBTITLES_LIST&&t!==a?dT(this,mJ,m0).call(this):e===aY.MEDIA_SUBTITLES_SHOWING&&t!==a&&(this.value=a||"",dT(this,mJ,m0).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dT(this,m1,m2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dT(this,m1,m2))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:iR(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dC(this,aY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dI(this,aY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dC(this,aY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dI(this,aY.MEDIA_SUBTITLES_SHOWING,e)}}mX=new WeakMap,mJ=new WeakSet,m0=function(){var e,t,a,i,r,n;let s=(dw(this,t=mX,"read from private field"),(a?a.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(aY.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;i=mX,r=JSON.stringify(this.mediaSubtitlesList),dw(this,i,"write to private field"),n?n.call(this,r):i.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=lj({type:"radio",text:this.formatMenuItemText(ii("Off")),value:"off",checked:l});for(let t of(d.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let a=lj({type:"radio",text:this.formatMenuItemText(t.label,t),value:rp(t),checked:this.value==rp(t)});a.prepend(lG(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&a.append(lG(this,"captions-indicator")),this.defaultSlot.append(a)}},m1=new WeakSet,m2=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(aY.MEDIA_SUBTITLES_SHOWING),a=this.value!==t;if((null==e?void 0:e.length)&&a&&this.dispatchEvent(new ig.CustomEvent(aH.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!a)return;let i=new ig.CustomEvent(aH.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(i)},dM.getTemplateHTML=function(e){return`
    ${lQ.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${d_}</slot>
  `};let dC=(e,t)=>{let a=e.getAttribute(t);return a?rh(a):[]},dI=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=rv(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};ig.customElements.get("media-captions-menu")||ig.customElements.define("media-captions-menu",dM);try{var dR="u">typeof window?window:e.g;dR._sentryModuleMetadata=dR._sentryModuleMetadata||{},dR._sentryModuleMetadata[(new dR.Error).stack]=Object.assign({},dR._sentryModuleMetadata[(new dR.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let dS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dL=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dD=e=>{e.setAttribute("data-captions-enabled",ry(e).toString())},dx=e=>{e.setAttribute("aria-label",ii("closed captions"))};class dO extends dl{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_SUBTITLES_LIST,aY.MEDIA_SUBTITLES_SHOWING,aY.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),dx(this),dD(this)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_SUBTITLES_SHOWING?dD(this):e===aY.MEDIA_LANG&&dx(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=iR(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dN(this,aY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dP(this,aY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dN(this,aY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dP(this,aY.MEDIA_SUBTITLES_SHOWING,e)}}dO.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${dS}</slot>
      <slot name="off">${dL}</slot>
    </slot>
  `},dO.getTooltipContentHTML=function(){return ii("Captions")};let dN=(e,t)=>{let a=e.getAttribute(t);return a?rh(a):[]},dP=(e,t,a)=>{if(!(null==a?void 0:a.length))return void e.removeAttribute(t);let i=rv(a);e.getAttribute(t)!==i&&e.setAttribute(t,i)};ig.customElements.get("media-captions-menu-button")||ig.customElements.define("media-captions-menu-button",dO);try{var dU="u">typeof window?window:e.g;dU._sentryModuleMetadata=dU._sentryModuleMetadata||{},dU._sentryModuleMetadata[(new dU.Error).stack]=Object.assign({},dU._sentryModuleMetadata[(new dU.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var dW=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dB=(e,t,a)=>(dW(e,t,"read from private field"),a?a.call(e):t.get(e)),d$=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dH=(e,t,a)=>(dW(e,t,"access private method"),a);let dK="rates";m3=new WeakMap,m4=new WeakSet,m5=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(dB(this,m3)).map(e=>Number(e)));for(let a of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=lj({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});t.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(t)}},m9=new WeakSet,m8=function(){if(!this.value)return;let e=new ig.CustomEvent(aH.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ig.customElements.get("media-playback-rate-menu")||ig.customElements.define("media-playback-rate-menu",class extends lQ{constructor(){super(),d$(this,m4),d$(this,m9),d$(this,m3,new rd(this,dK,{defaultValue:ot})),dH(this,m4,m5).call(this)}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PLAYBACK_RATE,dK]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),e===aY.MEDIA_PLAYBACK_RATE&&t!=a?(this.value=a,dH(this,m4,m5).call(this)):e===dK&&t!=a&&(dB(this,m3).value=a,dH(this,m4,m5).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dH(this,m9,m8))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dH(this,m9,m8))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:iR(this).querySelector("media-playback-rate-menu-button")}get rates(){return dB(this,m3)}set rates(e){e?Array.isArray(e)?dB(this,m3).value=e.join(" "):"string"==typeof e&&(dB(this,m3).value=e):dB(this,m3).value="",dH(this,m4,m5).call(this)}get mediaPlaybackRate(){return i$(this,aY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iH(this,aY.MEDIA_PLAYBACK_RATE,e)}});try{var dV="u">typeof window?window:e.g;dV._sentryModuleMetadata=dV._sentryModuleMetadata||{},dV._sentryModuleMetadata[(new dV.Error).stack]=Object.assign({},dV._sentryModuleMetadata[(new dV.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class dF extends dl{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===aY.MEDIA_PLAYBACK_RATE){let e=a?+a:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ii("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:iR(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return i$(this,aY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iH(this,aY.MEDIA_PLAYBACK_RATE,e)}}dF.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},dF.getTooltipContentHTML=function(){return ii("Playback rate")},ig.customElements.get("media-playback-rate-menu-button")||ig.customElements.define("media-playback-rate-menu-button",dF);try{var dY="u">typeof window?window:e.g;dY._sentryModuleMetadata=dY._sentryModuleMetadata||{},dY._sentryModuleMetadata[(new dY.Error).stack]=Object.assign({},dY._sentryModuleMetadata[(new dY.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var dj=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dG=(e,t,a)=>(dj(e,t,"read from private field"),a?a.call(e):t.get(e)),dq=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},dZ=(e,t,a,i)=>(dj(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),dz=(e,t,a)=>(dj(e,t,"access private method"),a);m6=new WeakMap,m7=new WeakMap,pe=new WeakSet,pt=function(){if(dG(this,m7).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&dG(this,m7).mediaHeight===this.mediaHeight)return;dG(this,m7).mediaRenditionList=JSON.stringify(this.mediaRenditionList),dG(this,m7).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let a of e)a.selected=a===t;this.defaultSlot.textContent="";let a=!this.mediaRenditionSelected;for(let t of e){let e=lj({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!a});e.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(e)}let i=t&&this.showRenditionBitrate(t),r=a?t?this.formatMenuItemText(`${ii("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:i})}`,t):this.formatMenuItemText(`${ii("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(ii("Auto")),n=lj({type:"radio",text:r,value:"auto",checked:a});n.dataset.description=r,n.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(n)},pa=new WeakSet,pi=function(){if(null==this.value)return;let e=new ig.CustomEvent(aH.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ig.customElements.get("media-rendition-menu")||ig.customElements.define("media-rendition-menu",class extends lQ{constructor(){super(...arguments),dq(this,pe),dq(this,pa),dq(this,m6,[]),dq(this,m7,{})}static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_RENDITION_LIST,aY.MEDIA_RENDITION_SELECTED,aY.MEDIA_RENDITION_UNAVAILABLE,aY.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let a=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,i=`${t.toFixed(+(t<1))} Mbps`;return`${a} (${i})`}return this.formatMenuItemText(a,e)}static compareRendition(e,t){var a,i;return t.height===e.height?(null!=(a=t.bitrate)?a:0)-(null!=(i=e.bitrate)?i:0):t.height-e.height}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),e===aY.MEDIA_RENDITION_SELECTED&&t!==a)this.value=null!=a?a:"auto",dz(this,pe,pt).call(this);else if(e===aY.MEDIA_RENDITION_LIST&&t!==a)dZ(this,m6,null==a?void 0:a.split(/\s+/).map(a3)),dz(this,pe,pt).call(this);else e===aY.MEDIA_HEIGHT&&t!==a&&dz(this,pe,pt).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dz(this,pa,pi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dz(this,pa,pi))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:iR(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return dG(this,m6)}set mediaRenditionList(e){dZ(this,m6,e),dz(this,pe,pt).call(this)}get mediaRenditionSelected(){return iF(this,aY.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){iY(this,aY.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return i$(this,aY.MEDIA_HEIGHT)}set mediaHeight(e){iH(this,aY.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});try{var dQ="u">typeof window?window:e.g;dQ._sentryModuleMetadata=dQ._sentryModuleMetadata||{},dQ._sentryModuleMetadata[(new dQ.Error).stack]=Object.assign({},dQ._sentryModuleMetadata[(new dQ.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}let dX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class dJ extends dl{static get observedAttributes(){return[...super.observedAttributes,aY.MEDIA_RENDITION_SELECTED,aY.MEDIA_RENDITION_UNAVAILABLE,aY.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ii("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:iR(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return iF(this,aY.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){iY(this,aY.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return i$(this,aY.MEDIA_HEIGHT)}set mediaHeight(e){iH(this,aY.MEDIA_HEIGHT,e)}}dJ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${dX}</slot>
  `},dJ.getTooltipContentHTML=function(){return ii("Quality")},ig.customElements.get("media-rendition-menu-button")||ig.customElements.define("media-rendition-menu-button",dJ);try{var d0="u">typeof window?window:e.g;d0._sentryModuleMetadata=d0._sentryModuleMetadata||{},d0._sentryModuleMetadata[(new d0.Error).stack]=Object.assign({},d0._sentryModuleMetadata[(new d0.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var d1=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},d2=(e,t,a)=>(d1(e,t,"read from private field"),a?a.call(e):t.get(e)),d3=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},d4=(e,t,a,i)=>(d1(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),d5=(e,t,a)=>(d1(e,t,"access private method"),a);class d9 extends lQ{constructor(){super(),d3(this,pn),d3(this,po),d3(this,pd),d3(this,pc),d3(this,pp),d3(this,pr,!1),d3(this,pm,e=>{let t=e.target,a=(null==t?void 0:t.nodeName)==="VIDEO",i=d5(this,pc,ph).call(this,t);(a||i)&&(d2(this,pr)?d5(this,po,pl).call(this):d5(this,pp,pv).call(this,e))}),d3(this,pb,e=>{let t=e.target,a=this.contains(t),i=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=d5(this,pc,ph).call(this,t);a||i&&(r||n)||d5(this,po,pl).call(this)}),d3(this,pE,e=>{"Escape"===e.key&&d5(this,po,pl).call(this)}),d3(this,pg,e=>{var t,a;let i=e.target;if(null==(t=i.matches)?void 0:t.call(i,'button[invoke="copy"]')){let e=null==(a=i.closest("media-context-menu-item"))?void 0:a.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}d5(this,po,pl).call(this)}),this.setAttribute("noautohide",""),d5(this,pn,ps).call(this)}connectedCallback(){super.connectedCallback(),iR(this).addEventListener("contextmenu",d2(this,pm)),this.addEventListener("click",d2(this,pg))}disconnectedCallback(){super.disconnectedCallback(),iR(this).removeEventListener("contextmenu",d2(this,pm)),this.removeEventListener("click",d2(this,pg)),document.removeEventListener("mousedown",d2(this,pb)),document.removeEventListener("keydown",d2(this,pE))}}pr=new WeakMap,pn=new WeakSet,ps=function(){this.hidden=!d2(this,pr)},po=new WeakSet,pl=function(){d4(this,pr,!1),d5(this,pn,ps).call(this)},pd=new WeakSet,pu=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&d5(e,po,pl).call(e)})},pc=new WeakSet,ph=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},pm=new WeakMap,pp=new WeakSet,pv=function(e){e.preventDefault(),d5(this,pd,pu).call(this),d4(this,pr,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,d5(this,pn,ps).call(this),document.addEventListener("mousedown",d2(this,pb),{once:!0}),document.addEventListener("keydown",d2(this,pE),{once:!0})},pb=new WeakMap,pE=new WeakMap,pg=new WeakMap,d9.getTemplateHTML=function(e){return`
      ${lQ.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},ig.customElements.get("media-context-menu")||ig.customElements.define("media-context-menu",d9);try{var d8="u">typeof window?window:e.g;d8._sentryModuleMetadata=d8._sentryModuleMetadata||{},d8._sentryModuleMetadata[(new d8.Error).stack]=Object.assign({},d8._sentryModuleMetadata[(new d8.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}class d6 extends de{}d6.shadowRootOptions={mode:"open"},d6.getTemplateHTML=function(e){return`
    ${de.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},ig.customElements.get("media-context-menu-item")||ig.customElements.define("media-context-menu-item",d6);try{var d7="u">typeof window?window:e.g;d7._sentryModuleMetadata=d7._sentryModuleMetadata||{},d7._sentryModuleMetadata[(new d7.Error).stack]=Object.assign({},d7._sentryModuleMetadata[(new d7.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}try{var ue="u">typeof window?window:e.g;ue._sentryModuleMetadata=ue._sentryModuleMetadata||{},ue._sentryModuleMetadata[(new ue.Error).stack]=Object.assign({},ue._sentryModuleMetadata[(new ue.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var ut=e=>{throw TypeError(e)},ua=(e,t,a)=>t.has(e)||ut("Cannot "+a),ui=(e,t,a)=>(ua(e,t,"read from private field"),a?a.call(e):t.get(e)),ur=(e,t,a)=>t.has(e)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),un=(e,t,a,i)=>(ua(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),us=(e,t,a)=>(ua(e,t,"access private method"),a),uo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends uo{});var ul,ud,uu,uc,uh,um,up,uv,ub,uE,ug,uy,uf,uA,uw,uk,uT,u_,uM,uC,uI,uR,uS,uL,uD,ux,uO,uN,uP,uU,uW,uB,u$,uH,uK,uV,uF,uY,uj,uG,uq,uZ,uz,uQ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ca,ci,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cE,cg,cy,cf,cA,cw,ck,cT,c_,cM,cC,cI,cR,cS,cL,cD,cx,cO,cN,cP,cU,cW,cB,c$,cH,cK,cV,cF,cY,cj,cG,cq,cZ,cz,cQ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,ha,hi,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hE,hg,hy,hf,hA,hw,hk,hT,h_,hM,hC,hI,hR,hS,hL,hD,hx,hO,hN,hP,hU,hW,hB,h$,hH,hK,hV,hF,hY,hj,hG,hq,hZ,hz,hQ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,ma,mi,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mE,mg,my,mf,mA,mw,mk,mT,m_,mM,mC,mI,mR,mS,mL,mD,mx,mO,mN,mP,mU,mW,mB,m$,mH,mK,mV,mF,mY,mj,mG,mq,mZ,mz,mQ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pa,pi,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pE,pg,py,pf=class extends uo{},pA=class{constructor(e,t={}){ur(this,py),un(this,py,null==t?void 0:t.detail)}get detail(){return ui(this,py)}initCustomEvent(){}};py=new WeakMap;var pw={document:{createElement:function(e,t){return new pf}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(pf)},CustomEvent:pA,EventTarget:uo,HTMLElement:pf,HTMLVideoElement:class extends uo{}},pk="u"<typeof window||void 0===globalThis.customElements,pT=pk?pw:globalThis,p_=pk?pw.document:globalThis.document;function pM(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function pC(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function pI(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function pR(e){let t=(function(e){let t={};for(let a in e)null!=e[a]&&(t[a]=e[a]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var pS,pL,pD,px=(e,t)=>!!e&&!!t&&(!!e.contains(t)||px(e,t.getRootNode().host)),pO="mux.com",pN=(()=>{try{return"3.11.8"}catch{}return"UNKNOWN"})(),pP=e=>{if(e){if([p.LIVE,p.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return p.LIVE}},pU={crossorigin:"crossOrigin",playsinline:"playsInline"},pW=class{constructor(e,t){ur(this,pS),ur(this,pL),ur(this,pD,[]),un(this,pS,e),un(this,pL,t)}[Symbol.iterator](){return ui(this,pD).values()}get length(){return ui(this,pD).length}get value(){var e;return null!=(e=ui(this,pD).join(" "))?e:""}set value(e){var t;e!==this.value&&(un(this,pD,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return ui(this,pD)[e]}values(){return ui(this,pD).values()}keys(){return ui(this,pD).keys()}forEach(e){ui(this,pD).forEach(e)}add(...e){var t,a;e.forEach(e=>{this.contains(e)||ui(this,pD).push(e)}),(""!==this.value||null!=(t=ui(this,pS))&&t.hasAttribute(`${ui(this,pL)}`))&&null!=(a=ui(this,pS))&&a.setAttribute(`${ui(this,pL)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{ui(this,pD).splice(ui(this,pD).indexOf(e),1)}),null==(t=ui(this,pS))||t.setAttribute(`${ui(this,pL)}`,`${this.value}`)}contains(e){return ui(this,pD).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};pS=new WeakMap,pL=new WeakMap,pD=new WeakMap;var pB=`[mux-player ${pN}]`;function p$(...e){console.warn(pB,...e)}function pH(...e){console.error(pB,...e)}function pK(e){var t;let a=null!=(t=e.message)?t:"";e.context&&(a+=` ${e.context}`),e.file&&(a+=` ${D("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),p$(a)}var pV={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},pF={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},pY=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),pj=[...Object.values(pV).filter(e=>pV.PLAYSINLINE!==e),...Object.values(pF)];function pG(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var pq=class extends pT.HTMLElement{static get observedAttributes(){return pj}constructor(){super()}attributeChangedCallback(e,t,a){var i,r;switch(e){case pF.MUTED:this.media&&(this.media.muted=null!=a,this.media.defaultMuted=null!=a);return;case pF.VOLUME:{let e=null!=(i=pI(a))?i:1;this.media&&(this.media.volume=e);return}case pF.PLAYBACKRATE:{let e=null!=(r=pI(a))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:pY}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:pY}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=pI(this.getAttribute(pF.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(pF.PLAYBACKRATE,`${e}`):this.removeAttribute(pF.PLAYBACKRATE)}get crossOrigin(){return pG(this,pV.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(pV.CROSSORIGIN,`${e}`)}get autoplay(){return null!=pG(this,pV.AUTOPLAY)}set autoplay(e){e?this.setAttribute(pV.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(pV.AUTOPLAY)}get loop(){return null!=pG(this,pV.LOOP)}set loop(e){e?this.setAttribute(pV.LOOP,""):this.removeAttribute(pV.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=pG(this,pV.MUTED)}set defaultMuted(e){e?this.setAttribute(pV.MUTED,""):this.removeAttribute(pV.MUTED)}get playsInline(){return null!=pG(this,pV.PLAYSINLINE)}set playsInline(e){pH("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(pV.PRELOAD,e):this.removeAttribute(pV.PRELOAD)}},pZ=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,pz=new WeakMap,pQ=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let a=pz.get(this.element);a&&a.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=pz.get(this.element);e&&e.delete(this.type)}}static for(t){pz.has(t.element)||pz.set(t.element,new Map);let a=t.attributeName.slice(2),i=pz.get(t.element);return i&&i.has(a)?i.get(a):new e(t.element,a)}},pX=new Map,pJ=new WeakMap,p0=new WeakMap,p1=class{constructor(e,t,a){this.strings=e,this.values=t,this.processor=a,this.stringsKey=this.strings.join("\x01")}get template(){if(pX.has(this.stringsKey))return pX.get(this.stringsKey);{let e=p_.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,a,i)=>e+a+(i<t?`{{ ${i} }}`:""),""),pX.set(this.stringsKey,e),e}}renderInto(e){var t;let a=this.template;if(pJ.get(e)!==a){pJ.set(e,a);let t=new la(a,this.values,this.processor);p0.set(e,t),e instanceof lu?e.replace(...t.children):e.appendChild(t);return}let i=p0.get(e);null==(t=null==i?void 0:i.update)||t.call(i,this.values)}},p2={processCallback(e,t,a){var i;if(a)for(let[e,r]of t)e in a&&function(e,t){(function(e,t){if(e instanceof ld&&t instanceof Element){let a=e.element;return a[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),a[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof ld){let a=e.attributeNamespace;return t!==e.element.hasAttributeNS(a,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof ld&&e.attributeName.startsWith("on")&&(pQ.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof lu&&(e.replace(""),1)||t instanceof p1&&e instanceof lu&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof lu&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof ld){let a=e.attributeNamespace,i=e.element.getAttributeNS(a,e.attributeName);return String(t)!==i&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(i=a[e])?i:"")}};function p3(e,...t){return new p1(e,t,p2)}var p4=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),p5=e=>e.charAt(0).toUpperCase()+e.slice(1),p9=(e,t)=>{let a=(e=>{if(e.muxCode){if(e.muxCode===d.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===d.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([d.NETWORK_TOKEN_AUD_MISMATCH,d.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===d.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===d.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===d.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===d.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===c.MEDIA_ERR_NETWORK)return"";if(e.code===c.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===c.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:a}},p8=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,p6=p_.createElement("template");"innerHTML"in p6&&(p6.innerHTML=p8);var p7,ve,vt=class extends lx{};vt.template=null==(ve=null==(p7=p6.content)?void 0:p7.children)?void 0:ve[0],pT.customElements.get("media-theme-gerwig")||pT.customElements.define("media-theme-gerwig",vt);var va={SRC:"src",POSTER:"poster"},vi={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},vr=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],vn=s_.formatErrorMessage;function vs(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,a)=>{let i=e.getAttribute(a);return null!==i&&(t[a.replace(/^metadata-/,"").replace(/-/g,"_")]=i),t},t)}s_.formatErrorMessage=e=>{var t,a;if(e instanceof c){let i=((e,t=!1)=>({title:((e,t=!1)=>{var a,i;if(e.muxCode){let r=p5(null!=(a=e.errorCategory)?a:"video"),n=u(null!=(i=e.errorCategory)?i:l.VIDEO);if(e.muxCode===d.NETWORK_OFFLINE)return D("Your device appears to be offline",t);if(e.muxCode===d.NETWORK_TOKEN_EXPIRED)return D("{category} URL has expired",t).format({category:r});if([d.NETWORK_TOKEN_SUB_MISMATCH,d.NETWORK_TOKEN_AUD_MISMATCH,d.NETWORK_TOKEN_AUD_MISSING,d.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return D("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===d.NETWORK_TOKEN_MISSING)return D("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===d.NETWORK_NOT_FOUND)return D("{category} does not exist",t).format({category:r});if(e.muxCode===d.NETWORK_NOT_READY){let a="live"===e.streamType?"Live stream":"Video";return D("{mediaType} is not currently available",t).format({mediaType:a})}}if(e.code){if(e.code===c.MEDIA_ERR_NETWORK)return D("Network Error",t);if(e.code===c.MEDIA_ERR_DECODE)return D("Media Error",t);if(e.code===c.MEDIA_ERR_SRC_NOT_SUPPORTED)return D("Source Not Supported",t)}return D("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var a,i;if(e.muxCode){let r=p5(null!=(a=e.errorCategory)?a:"video"),n=u(null!=(i=e.errorCategory)?i:l.VIDEO);return e.muxCode===d.NETWORK_OFFLINE?D("Check your internet connection and try reloading this video.",t):e.muxCode===d.NETWORK_TOKEN_EXPIRED?D("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===d.NETWORK_TOKEN_SUB_MISMATCH?D("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===d.NETWORK_TOKEN_MALFORMED?D("{category} URL is formatted incorrectly",t).format({category:r}):[d.NETWORK_TOKEN_AUD_MISMATCH,d.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?D("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[d.NETWORK_TOKEN_MISSING,d.NETWORK_INVALID_URL].includes(e.muxCode)?D("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===d.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===c.MEDIA_ERR_NETWORK||e.code===c.MEDIA_ERR_DECODE||e.code===c.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=i&&i.title?`<h3>${i.title}</h3>`:""}
      ${null!=i&&i.message||null!=i&&i.linkUrl?`<p>
        ${null==i?void 0:i.message}
        ${null!=i&&i.linkUrl?`<a
              href="${i.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=i.linkText)?t:""} ${D("(opens in a new window)")}"
              >${null!=(a=i.linkText)?a:i.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return vn(e)};var vo,vl,vd,vu,vc,vh,vm,vp,vv,vb,vE,vg,vy,vf,vA,vw,vk,vT,v_,vM,vC,vI=Object.values(tR),vR=Object.values(va),vS=Object.values(vi),vL="mux-player",vD={isDialogOpen:!1},vx={redundant_streams:!0},vO=class extends pq{constructor(){super(),ur(this,vy),ur(this,vo),ur(this,vl,!1),ur(this,vd,{}),ur(this,vu,!0),ur(this,vc,new pW(this,"hotkeys")),ur(this,vh),ur(this,vm,()=>us(this,vy,vk).call(this)),ur(this,vp,()=>us(this,vy,vk).call(this)),ur(this,vv,()=>us(this,vy,vk).call(this)),ur(this,vb),ur(this,vE,{...vD,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&us(this,vy,vw).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(px(this,p_.activeElement)||e.preventDefault())}}),ur(this,vg,e=>{var t;let a=null==(t=this.media)?void 0:t.error;if(!(a instanceof c)){let{message:e,code:t}=null!=a?a:{};a=new c(e,t)}if(!(null!=a&&a.fatal)){p$(a),a.data&&p$(`${a.name} data:`,a.data);return}let i=p9(a,!1);i.message&&pK(i),pH(a),a.data&&pH(`${a.name} data:`,a.data),us(this,vy,vw).call(this,{isDialogOpen:!0})}),un(this,vo,eC()),this.attachShadow({mode:"open"}),us(this,vy,vA).call(this),this.isConnected&&us(this,vy,vf).call(this)}static get NAME(){return vL}static get VERSION(){return pN}static get observedAttributes(){var e;return[...null!=(e=pq.observedAttributes)?e:[],...vR,...vI,...vS]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){us(this,vy,vf).call(this);let e=this.media;e&&(e.metadata=vs(this))}disconnectedCallback(){var e,t,a,i,r,n,s,o;null==(e=ui(this,vh))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",ui(this,vm)),null==(a=this.media)||a.removeEventListener("loadstart",ui(this,vp)),this.removeEventListener("error",ui(this,vg)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(i=this.media)?void 0:i.textTracks)||r.removeEventListener("addtrack",ui(this,vv)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",ui(this,vv)),null==(o=ui(this,vb))||o.call(this),un(this,vb,void 0),un(this,vl,!1)}attributeChangedCallback(e,t,a){var i;switch(us(this,vy,vf).call(this),super.attributeChangedCallback(e,t,a),e){case vi.HOTKEYS:ui(this,vc).value=a;break;case vi.THUMBNAIL_TIME:null!=a&&this.tokens.thumbnail&&p$(D("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case vi.THUMBNAIL_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e,a=er.THUMBNAIL;t!==a&&p$(D("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:a,tokenNamePrefix:"thumbnail"}))}}break;case vi.STORYBOARD_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e,a=er.STORYBOARD;t!==a&&p$(D("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:a,tokenNamePrefix:"storyboard"}))}}break;case vi.DRM_TOKEN:if(a){let e=L(a);if(e){let{aud:t}=e,a=er.DRM;t!==a&&p$(D("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:a,tokenNamePrefix:"drm"}))}}break;case tR.PLAYBACK_ID:null!=a&&a.includes("?token")&&pH(D("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break;case tR.STREAM_TYPE:a&&![p.LIVE,p.ON_DEMAND,p.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?1/0:0:pK({file:"invalid-stream-type.md",message:D("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===p.LIVE?null==this.getAttribute(vi.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case vi.FULLSCREEN_ELEMENT:if(null!=a||a!==t){let e=p_.getElementById(a),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case tR.CAP_RENDITION_TO_PLAYER_SIZE:(null==a||a!==t)&&(this.capRenditionToPlayerSize=null!=a||void 0)}[tR.PLAYBACK_ID,va.SRC,vi.PLAYBACK_TOKEN].includes(e)&&t!==a&&un(this,vE,{...ui(this,vE),...vD}),us(this,vy,vk).call(this,{[null!=(i=pU[e])?i:pC(e)]:a})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(aY.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new pT.CustomEvent(aH.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(aj.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(aY.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new pT.CustomEvent(aH.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var a;null==(a=this.mediaController)||a.addEventListener(aj.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(tR.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?E.includes(e)?this.setAttribute(tR.PREFER_CMCD,e):p$(`Invalid value for preferCmcd. Must be one of ${E.join()}`):this.removeAttribute(tR.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(aY.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(aY.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(vi.THEME))?e:"gerwig"}set theme(e){this.setAttribute(vi.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let a of e.getAttributeNames()){if(vr.includes(a))continue;let i=e.getAttribute(a);t[pC(a)]=""===i||i}return t}set themeProps(e){var t,a;us(this,vy,vf).call(this);let i={...this.themeProps,...e};for(let r in i){if(vr.includes(r))continue;let i=null==e?void 0:e[r];"boolean"==typeof i||null==i?null==(t=this.mediaTheme)||t.toggleAttribute(pM(r),!!i):null==(a=this.mediaTheme)||a.setAttribute(pM(r),i)}}get playbackId(){var e;return null!=(e=this.getAttribute(tR.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(tR.PLAYBACK_ID,e):this.removeAttribute(tR.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=vN(this,va.SRC))?e:void 0:null!=(t=this.getAttribute(va.SRC))?t:void 0}set src(e){e?this.setAttribute(va.SRC,e):this.removeAttribute(va.SRC)}get poster(){var e;let t=this.getAttribute(va.POSTER);if(null!=t)return t;let{tokens:a}=this;return a.playback&&!a.thumbnail?void p$("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:a=pO,thumbnailTime:i,programTime:r}={})=>{var n;let s=null==t?i:void 0,{aud:o}=null!=(n=L(t))?n:{};if(!(t&&"t"!==o))return`https://image.${a}/${e}/thumbnail.webp${pR({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(va.POSTER,e):this.removeAttribute(va.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(vi.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(vi.STORYBOARD_SRC,e):this.removeAttribute(vi.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[p.LIVE,p.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:a=pO,programStartTime:i,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=L(t))?n:{};if(!(t&&"s"!==s))return`https://image.${a}/${e}/storyboard.vtt${pR({token:t,format:"webp",program_start_time:i,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(vi.AUDIO)}set audio(e){e?this.setAttribute(vi.AUDIO,""):this.removeAttribute(vi.AUDIO)}get hotkeys(){return ui(this,vc)}get nohotkeys(){return this.hasAttribute(vi.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(vi.NOHOTKEYS,""):this.removeAttribute(vi.NOHOTKEYS)}get thumbnailTime(){return pI(this.getAttribute(vi.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(vi.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(vi.VIDEO_TITLE))?e:this.getAttribute(vi.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(vi.VIDEO_TITLE,e):this.removeAttribute(vi.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=vN(this,vi.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(vi.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let a=this.getAttribute(vi.PRIMARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=pT.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return a}set primaryColor(e){this.setAttribute(vi.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let a=this.getAttribute(vi.SECONDARY_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=pT.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return a}set secondaryColor(e){this.setAttribute(vi.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let a=this.getAttribute(vi.ACCENT_COLOR);if(null!=a||this.mediaTheme&&(a=null==(t=null==(e=pT.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return a}set accentColor(e){this.setAttribute(vi.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(vi.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(vi.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(vi.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(vi.PLAYBACK_RATES))return this.getAttribute(vi.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(vi.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(vi.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=pI(this.getAttribute(vi.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(vi.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=pI(this.getAttribute(vi.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(vi.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(vi.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(vi.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(vi.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return pI(this.getAttribute(vi.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(vi.DEFAULT_DURATION):this.setAttribute(vi.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(tR.PLAYER_INIT_TIME)?pI(this.getAttribute(tR.PLAYER_INIT_TIME)):ui(this,vo)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(tR.PLAYER_INIT_TIME):this.setAttribute(tR.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(tR.PLAYER_SOFTWARE_NAME))?e:vL}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(tR.PLAYER_SOFTWARE_VERSION))?e:pN}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(tR.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(tR.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(tR.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(tR.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(tR.MAX_RESOLUTION,e):this.removeAttribute(tR.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(tR.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(tR.MIN_RESOLUTION,e):this.removeAttribute(tR.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(tR.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(tR.MAX_AUTO_RESOLUTION):this.setAttribute(tR.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(tR.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(tR.RENDITION_ORDER,e):this.removeAttribute(tR.RENDITION_ORDER))}get programStartTime(){return pI(this.getAttribute(tR.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(tR.PROGRAM_START_TIME):this.setAttribute(tR.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return pI(this.getAttribute(tR.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(tR.PROGRAM_END_TIME):this.setAttribute(tR.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return pI(this.getAttribute(tR.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(tR.ASSET_START_TIME):this.setAttribute(tR.ASSET_START_TIME,`${e}`)}get assetEndTime(){return pI(this.getAttribute(tR.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(tR.ASSET_END_TIME):this.setAttribute(tR.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(vi.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(vi.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,a])=>(e[t]=a,e),{}):vx}set extraSourceParams(e){null==e?this.removeAttribute(vi.EXTRA_SOURCE_PARAMS):this.setAttribute(vi.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(tR.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(tR.CUSTOM_DOMAIN,e):this.removeAttribute(tR.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=vN(this,tR.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(tR.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(vi.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(vi.NO_VOLUME_PREF,""):this.removeAttribute(vi.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(vi.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(vi.NO_MUTED_PREF,""):this.removeAttribute(vi.NO_MUTED_PREF)}get debug(){return null!=vN(this,tR.DEBUG)}set debug(e){e?this.setAttribute(tR.DEBUG,""):this.removeAttribute(tR.DEBUG)}get disableTracking(){return null!=vN(this,tR.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(tR.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=vN(this,tR.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(tR.DISABLE_COOKIES,""):this.removeAttribute(tR.DISABLE_COOKIES)}get streamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(tR.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?a:p.UNKNOWN}set streamType(e){this.setAttribute(tR.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,a;return null!=(a=null!=(t=this.getAttribute(vi.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(vi.DEFAULT_STREAM_TYPE))?a:p.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(vi.DEFAULT_STREAM_TYPE,e):this.removeAttribute(vi.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(vi.TARGET_LIVE_WINDOW)?+this.getAttribute(vi.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(vi.TARGET_LIVE_WINDOW):this.setAttribute(vi.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return pI(vN(this,tR.START_TIME))}set startTime(e){this.setAttribute(tR.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(tR.PREFER_PLAYBACK);if(e===v.MSE||e===v.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===v.MSE||e===v.NATIVE?this.setAttribute(tR.PREFER_PLAYBACK,e):this.removeAttribute(tR.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(us(this,vy,vf).call(this),this.media)?this.media.metadata={...vs(this),...e}:pH("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(us(this,vy,vf).call(this),this.media)?this.media._hlsConfig=e:pH("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(us(this,vy,vf).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void pH("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(us(this,vy,vf).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void pH("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(vi.PLAYBACK_TOKEN),t=this.getAttribute(vi.DRM_TOKEN),a=this.getAttribute(vi.THUMBNAIL_TOKEN),i=this.getAttribute(vi.STORYBOARD_TOKEN);return{...ui(this,vd),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=a?{thumbnail:a}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){un(this,vd,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(vi.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(vi.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(vi.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(vi.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(vi.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(vi.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(vi.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(vi.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,a,i){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return W(n,e,t,a,i)}removeTextTrack(e){var t;let a=null==(t=this.media)?void 0:t.nativeEl;if(a)return B(a,e)}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(vi.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(vi.CAST_RECEIVER,e):this.removeAttribute(vi.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:pH("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(vi.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(vi.NO_TOOLTIPS,""):this.removeAttribute(vi.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(vi.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(vi.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(vi.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:pH("underlying media element missing when trying to set capRenditionToPlayerSize")}};function vN(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}vo=new WeakMap,vl=new WeakMap,vd=new WeakMap,vu=new WeakMap,vc=new WeakMap,vh=new WeakMap,vm=new WeakMap,vp=new WeakMap,vv=new WeakMap,vb=new WeakMap,vE=new WeakMap,vg=new WeakMap,vy=new WeakSet,vf=function(){var e,t,a,i;if(!ui(this,vl)){un(this,vl,!0),us(this,vy,vk).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof pT.HTMLElement))throw""}catch{pH("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{pH("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof np))throw""}catch{pH("<media-controller> failed to upgrade!")}us(this,vy,vT).call(this),us(this,vy,v_).call(this),us(this,vy,vM).call(this),un(this,vu,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i7))||t),us(this,vy,vC).call(this),null==(a=this.media)||a.addEventListener("streamtypechange",ui(this,vm)),null==(i=this.media)||i.addEventListener("loadstart",ui(this,vp))}},vA=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},vw=function(e){Object.assign(ui(this,vE),e),us(this,vy,vk).call(this)},vk=function(e={}){var t,a,i,r,n,s,o,l,d,u,c,h,m,v,b,E,g,y,f,A,w,k,T,_,M,C,I,R,S,L,D,x,O,N,P,U,W,B,$,H,K,V,F,Y,j,G,q,Z,z,Q;let X,J,ee,et;t={...ui(this,vE),...e},X={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(a=this.media)?void 0:a.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(vi.STORYBOARD_SRC),fullscreenElement:this.getAttribute(vi.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,a;let i=e.theme;if(i){let r=null==(a=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:a.call(t,i);if(r&&r instanceof HTMLTemplateElement)return r;i.startsWith("media-theme-")||(i=`media-theme-${i}`);let n=pT.customElements.get(i);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(vi.NOHOTKEYS),hotKeys:this.getAttribute(vi.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(tR.TARGET_LIVE_WINDOW),streamType:pP(this.getAttribute(tR.STREAM_TYPE)),primaryColor:this.getAttribute(vi.PRIMARY_COLOR),secondaryColor:this.getAttribute(vi.SECONDARY_COLOR),accentColor:this.getAttribute(vi.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(J=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(J).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(vi.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(tR.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(vi.TITLE),videoTitle:null!=(r=this.getAttribute(vi.VIDEO_TITLE))?r:this.getAttribute(vi.TITLE),novolumepref:this.hasAttribute(vi.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(vi.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(vi.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(vi.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=p3`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(X)}
    ${pZ}
  </style>
  ${l=X,p3`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${ee=l.hotKeys?`${l.hotKeys}`:"","live"===pP(l.streamType)&&(ee+=" noarrowleft noarrowright"),ee||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(p.LIVE))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(Q={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},et="",Object.entries(Q).forEach(([e,t])=>{null!=t&&(et+=`${pM(e)}: ${t}; `)}),h=et?et.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(v=l.backwardSeekOffset)&&v}"
    playbackrates="${null!=(b=l.playbackRates)&&b}"
    defaultshowremainingtime="${null!=(E=l.defaultShowRemainingTime)&&E}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(y=l.hideDuration)&&y}"
    title="${null!=(f=l.title)&&f}"
    videotitle="${null!=(A=l.videoTitle)&&A}"
    proudlydisplaymuxbadge="${null!=(w=l.proudlyDisplayMuxBadge)&&w}"
    exportparts="${p4}"
    onclose="${l.onCloseErrorDialog}"
    onfocusin="${l.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(k=l.noHotKeys)&&k}"
      target-live-window="${null!=(T=l.targetLiveWindow)&&T}"
      stream-type="${null!=(_=pP(l.streamType))&&_}"
      crossorigin="${null!=(M=l.crossOrigin)?M:""}"
      playsinline
      autoplay="${null!=(C=l.autoplay)&&C}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(S=l.preload)&&S}"
      debug="${null!=(L=l.debug)&&L}"
      prefer-cmcd="${null!=(D=l.preferCmcd)&&D}"
      disable-tracking="${null!=(x=l.disableTracking)&&x}"
      disable-cookies="${null!=(O=l.disableCookies)&&O}"
      prefer-playback="${null!=(N=l.preferPlayback)&&N}"
      start-time="${null!=l.startTime&&l.startTime}"
      beacon-collection-domain="${null!=(P=l.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(W=l.playerSoftwareName)&&W}"
      player-software-version="${null!=(B=l.playerSoftwareVersion)&&B}"
      env-key="${null!=($=l.envKey)&&$}"
      custom-domain="${null!=(H=l.customDomain)&&H}"
      src="${l.src?l.src:!!l.playbackId&&eR(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&eR(l)}"
      cast-receiver="${null!=(K=l.castReceiver)&&K}"
      drm-token="${null!=(F=null==(V=l.tokens)?void 0:V.drm)&&F}"
      playback-token="${null!=(j=null==(Y=l.tokens)?void 0:Y.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(G=l.disablePseudoEnded)&&G}"
      max-auto-resolution="${null!=(q=l.maxAutoResolution)&&q}"
      cap-rendition-to-player-size="${null!=(Z=l.capRenditionToPlayerSize)&&Z}"
    >
      ${l.storyboard?p3`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:p3``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(z=l.placeholder)&&z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},vT=function(){let e=e=>{var t,a;if(!(null!=e&&e.startsWith("theme-")))return;let i=e.replace(/^theme-/,"");if(vr.includes(i))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(i,r):null==(a=this.mediaTheme)||a.removeAttribute(i)};un(this,vh,new MutationObserver(t=>{for(let{attributeName:a}of t)e(a)})),ui(this,vh).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},v_=function(){this.addEventListener("error",ui(this,vg)),this.media&&(this.media.errorTranslator=(e={})=>{var t,a,i;if(!((null==(t=this.media)?void 0:t.error)instanceof c))return e;let r=p9(null==(a=this.media)?void 0:a.error,!1);return{player_error_code:null==(i=this.media)?void 0:i.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},vM=function(){var e,t,a,i;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",ui(this,vv)),null==(i=null==(a=this.media)?void 0:a.textTracks)||i.addEventListener("removetrack",ui(this,vv))},vC=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let a,i=new WeakMap,r=()=>this.streamType===p.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,a=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===p.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!a)return;i.has(e)||i.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=i.get(e)||"auto"},500)})},s=()=>{var e,t;n(a,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i7))&&t)},o=()=>{var e,t;let i=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];i!==a&&(null==a||a.removeEventListener("cuechange",s)),null==(a=i)||a.addEventListener("cuechange",s),n(a,ui(this,vu))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let i=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i7))||t;ui(this,vu)!==i&&(un(this,vu,i),n(a,ui(this,vu)))};this.addEventListener("userinactivechange",l),un(this,vb,()=>{var e,t;null==a||a.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};try{var vP="u">typeof window?window:e.g;vP._sentryModuleMetadata=vP._sentryModuleMetadata||{},vP._sentryModuleMetadata[(new vP.Error).stack]=Object.assign({},vP._sentryModuleMetadata[(new vP.Error).stack],{"_sentryBundlerPluginAppKey:brand-site":!0})}catch(e){}var vU=e=>{throw TypeError(e)},vW=(e,t,a)=>t.has(e)||vU("Cannot "+a),vB=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"u"<typeof DocumentFragment&&(globalThis.DocumentFragment=class extends vB{});var v$,vH=class extends vB{},vK=class{constructor(e,t={}){((e,t,a)=>t.has(e)?vU("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a))(this,v$),((e,t,a,i)=>(vW(e,t,"write to private field"),i?i.call(e,a):t.set(e,a)))(this,v$,null==t?void 0:t.detail)}get detail(){let e,t;return vW(this,e=v$,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};v$=new WeakMap;var vV={document:{createElement:function(e,t){return new vH}},DocumentFragment,customElements:{get(e){},define(e,t,a){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vH)},CustomEvent:vK,EventTarget:vB,HTMLElement:vH,HTMLVideoElement:class extends vB{}},vF="u"<typeof window||void 0===globalThis.customElements,vY=vF?vV:globalThis;vF&&vV.document,vY.customElements.get("mux-player")||(vY.customElements.define("mux-player",vO),vY.MuxPlayerElement=vO),e.s([],831818)}]);

//# debugId=1b49ddda-3f41-3f55-5b22-88ea56aba348