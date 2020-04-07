!function(e){function t(t){for(var n,s,a=t[0],c=t[1],l=t[2],h=0,u=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={0:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;i.push([182,1]),o()}(Array(18).concat([function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(0),r=o.n(n);const i=Object(n.createContext)({contentWindow:window});function s({stateRef:e}){return r.a.createElement(i.Consumer,null,t=>{e(t)})}},,,,,,,,,,,,,function(e,t,o){"use strict";async function n(e){return new Promise(t=>{setTimeout(t,e)})}o.d(t,"a",(function(){return r}));class r{constructor(e={}){this.options=e,this.loadImage=({imageId:e,options:t})=>"number"===typeof this.options.timeout?Promise.race([cornerstone.loadImage(e,t),n(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(e,t)}}},,,,,,,,,,function(e,t,o){"use strict";var n=o(90);o.o(n,"CornerstoneSingleImage")&&o.d(t,"CornerstoneSingleImage",(function(){return n.CornerstoneSingleImage})),o.o(n,"InsightViewer")&&o.d(t,"InsightViewer",(function(){return n.InsightViewer})),o.o(n,"globalStyle")&&o.d(t,"globalStyle",(function(){return n.globalStyle})),o.o(n,"installWADOImageLoader")&&o.d(t,"installWADOImageLoader",(function(){return n.installWADOImageLoader})),o.o(n,"unloadImage")&&o.d(t,"unloadImage",(function(){return n.unloadImage}));var r=o(91);o.d(t,"installWADOImageLoader",(function(){return r.a}));o(92);var i=o(93);o.d(t,"unloadImage",(function(){return i.a}));var s=o(94);o.d(t,"InsightViewer",(function(){return s.a}));o(96),o(97),o(98),o(128),o(99),o(100),o(131),o(101),o(102),o(103),o(104),o(105),o(106),o(108),o(109),o(110),o(111),o(112),o(113),o(114),o(57),o(115),o(129),o(116),o(117),o(118),o(46);var a=o(58);o.d(t,"CornerstoneSingleImage",(function(){return a.a}));o(119),o(31),o(120),o(121),o(122),o(123),o(124),o(130),o(125);var c=o(59);o.d(t,"globalStyle",(function(){return c.a}));o(126),o(18)},,,,,function(e,t,o){"use strict";function n(e){const t=e.detail;if(t&&"string"===typeof t.url&&"string"===typeof t.imageId&&"number"===typeof t.loaded&&"number"===typeof t.total&&"number"===typeof t.percentComplete)return t}o.d(t,"a",(function(){return n}))},,,,,,,,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(0);function r(e){const[t,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{if(e){const t=e.progress.subscribe(e=>{o(e<1?e:null)});return()=>{t.unsubscribe()}}o(null)},[e]),t}},function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o(27),r=o(31),i=o(46),s=o(75);const a=new r.a;class c{constructor(e,t={}){this.imageId=e,this.options=t,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"===typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(e=>e()),this._destoyed=!0},this.onProgress=e=>{const t=Object(i.a)(e);t&&t.imageId===this.imageId&&this._progressSubject.next(Math.min(t.loaded/t.total,.99))},this.loadImage=async e=>{try{const t=await this._loader.loadImage({imageId:e,options:{loader:Object(s.a)(e=>this._cancel.push(e))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(t),this._progressSubject.next(1))}catch(t){this._destoyed||(console.warn(`It will retry loadImage(${e}):`,t),this.loadImage(e))}},this._imageSubject=new n.a(null),this._progressSubject=new n.a(0),this._loader=t.loader||a,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(e)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(2);const r=n.c`
  --contour-viewer-color: #ffffff;
  --contour-viewer-focused-color: rgb(255, 194, 17);
  --contour-viewer-stroke-width: 3px;
  --contour-viewer-focused-stroke-width: 6px;
  --contour-viewer-fill-color: rgba(0, 0, 0, 0.2);
  --contour-viewer-focused-fill-color: rgba(0, 0, 0, 0.4);

  --contour-drawer-color: rgb(255, 224, 0);
  --contour-drawer-stroke-width: 4px;
  --contour-drawer-fill-color: rgba(255, 224, 0, 0.2);

  --pin-color: #ffffff;
  --pin-focused-color: rgb(255, 194, 17);
`,i=n.c`
  :root {
    ${r};
  }
`},function(e,t,o){"use strict";function n({element:e,getCurrentViewport:t,onMove:o,onEnd:n,contentWindow:r}){let i,s,a,c;function l(){e.addEventListener("mousedown",v),e.addEventListener("touchstart",h)}function d(){e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",h)}function h(e){if(e.targetTouches.length>1&&(r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l()),1!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const o=t();o&&(d(),i=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=o.voi.windowCenter,c=o.voi.windowWidth,r.addEventListener("touchmove",u),r.addEventListener("touchend",p),r.addEventListener("touchcancel",p))}function u(e){if(1===e.targetTouches.length&&1===e.changedTouches.length||(r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l()),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!t())return;const n=e.targetTouches[0].pageX-i,d=e.targetTouches[0].pageY-s;o({windowWidth:Math.max(c+n,1),windowCenter:Math.max(a+d,1)})}function p(e){r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l(),n()}function v(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=t();n&&(d(),i=o.pageX,s=o.pageY,a=n.voi.windowCenter,c=n.voi.windowWidth,r.addEventListener("mousemove",m),r.addEventListener("mouseup",f),e.addEventListener("mouseleave",f))}function m(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const t=e.pageX-i,n=e.pageY-s;o({windowWidth:Math.max(c+t,1),windowCenter:Math.max(a+n,1)})}function f(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),e.removeEventListener("mouseleave",f),l(),n())}return l(),()=>{e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",h),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),e.removeEventListener("mouseleave",f),r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)}}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";function n({element:e,getCurrentViewport:t,onMove:o,onEnd:n,contentWindow:r}){let i,s,a,c;function l(){e.addEventListener("mousedown",v),e.addEventListener("touchstart",h)}function d(){e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",h)}function h(e){if(e.targetTouches.length>1&&(r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l()),1!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const o=t();o&&(d(),i=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=o.translation.x,c=o.translation.y,r.addEventListener("touchmove",u),r.addEventListener("touchend",p),r.addEventListener("touchcancel",p))}function u(e){1===e.targetTouches.length&&1===e.changedTouches.length||(r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l()),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=t();if(!n)return;const d=(e.targetTouches[0].pageX-i)/n.scale,h=(e.targetTouches[0].pageY-s)/n.scale;o({x:a+d,y:c+h})}function p(e){r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l(),n()}function v(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=t();n&&(d(),i=o.pageX,s=o.pageY,a=n.translation.x,c=n.translation.y,r.addEventListener("mousemove",m),r.addEventListener("mouseup",f),e.addEventListener("mouseleave",f))}function m(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=t();if(!n)return;const r=(e.pageX-i)/n.scale,l=(e.pageY-s)/n.scale;o({x:a+r,y:c+l})}function f(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),e.removeEventListener("mouseleave",f),l(),n())}return l(),()=>{e.removeEventListener("mousedown",v),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),e.removeEventListener("mouseleave",f),e.removeEventListener("touchstart",h),r.removeEventListener("touchmove",u),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)}}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(152),r=o(151);function i({element:e,getMinMaxScale:t,getCurrentViewport:o,onZoom:i,contentWindow:s}){function a(n){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation();const[r,a]=t(),c=o();if(!c)return;const l=n.deltaY>0?1:-1,d=Math.max(r,Math.min(a,c.scale-.03*l));if(c.scale===d)return;const{top:h,left:u,width:p,height:v}=e.getBoundingClientRect(),m=n.pageX-s.scrollX-(u+p/2),f=n.pageY-s.scrollY-(h+v/2),g=(1-d/c.scale)*m,b=(1-d/c.scale)*f;i({translation:{x:c.translation.x+g/d,y:c.translation.y+b/d},scale:d})}let c,l,d,h;function u(t){if(2!==t.targetTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=o();if(!n)return;h=n.scale,d=n.translation,c=[{x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY},{x:t.targetTouches[1].pageX,y:t.targetTouches[1].pageY}];const r=Math.abs(c[0].x-c[1].x),i=Math.abs(c[0].y-c[1].y);l=Math.sqrt(Math.pow(r,2)+Math.pow(i,2)),e.removeEventListener("touchstart",u),e.addEventListener("touchmove",p),e.addEventListener("touchend",v),e.addEventListener("touchcancel",v)}function p(e){if(2!==e.targetTouches.length||2!==e.changedTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const t=[{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},{x:e.changedTouches[1].pageX,y:e.changedTouches[1].pageY}],o=Math.abs(t[0].x-t[1].x),n=Math.abs(t[0].y-t[1].y),r=Math.sqrt(Math.pow(o,2)+Math.pow(n,2)),s=h*(r/l),a=((t[0].x+t[1].x)/2-(c[0].x+c[1].x)/2)/s,u=((t[0].y+t[1].y)/2-(c[0].y+c[1].y)/2)/s,p={x:d.x+a,y:d.y+u};i({translation:p,scale:s})}function v(s){const a=o();if(!a)return;const[c,l]=t();if(a.scale<c){const e=Object(r.a)(t=>{const o=Object(n.a)(t/500);t>500?(i({translation:a.translation,scale:c}),e.stop()):i({translation:a.translation,scale:a.scale+(c-a.scale)*o})})}else if(a.scale>l){const e=Object(r.a)(t=>{const o=Object(n.a)(t/500);t>500?(i({translation:a.translation,scale:l}),e.stop()):i({translation:a.translation,scale:a.scale+(l-a.scale)*o})})}e.removeEventListener("touchmove",p),e.removeEventListener("touchend",v),e.removeEventListener("touchcancel",v),e.addEventListener("touchstart",u)}return e.addEventListener("wheel",a),e.addEventListener("touchstart",u),()=>{e.removeEventListener("wheel",a),e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",p),e.removeEventListener("touchend",v),e.removeEventListener("touchcancel",v)}}},function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(136),r=o.n(n);function i(e,t){return e.find(e=>r()(t,e.polygon))||null}},function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(2);const r=n.e`
  to {
    stroke-dashoffset: 0;
  }
`,i=n.c`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${r} 10s linear infinite;
`},,,,,,function(e,t,o){"use strict";function n(e,t){return e.find(e=>{const[[o,n],[r,i]]=e.polygon,[s,a]=t,c=Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(i-n),2));return Math.sqrt(Math.pow(Math.abs(s-o),2)+Math.pow(Math.abs(a-n),2))<=c})||null}o.d(t,"a",(function(){return n}))},,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));const n=e=>(t,o,n={},r={})=>{const{cornerstone:i}=cornerstoneWADOImageLoader.external,s=new XMLHttpRequest;return new Promise((a,c)=>{s.open("get",t,!0),s.responseType="arraybuffer",Object.keys(n).forEach(e=>{s.setRequestHeader(e,n[e])}),r.deferred={resolve:a,reject:c},r.url=t,r.imageId=o,"function"===typeof e&&e((function(){try{s.abort()}catch(e){}})),s.onreadystatechange=()=>{4===s.readyState&&200===s.status&&a(s.response)},s.onloadstart=()=>{const e={url:t,imageId:o};i&&i.triggerEvent(i.events,"cornerstoneimageloadstart",e)},s.onloadend=()=>{const e={url:t,imageId:o};i.triggerEvent(i.events,"cornerstoneimageloadend",e)},s.onprogress=({loaded:e,lengthComputable:n,total:r})=>{let s;n&&(s=Math.round(e/r*100));const a={url:t,imageId:o,loaded:e,total:r,percentComplete:s};i.triggerEvent(i.events,"cornerstoneimageloadprogress",a)},s.send()})}},,,,,,,,,,,,,,,function(e,t){},function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));let n=!1;function r(){n||(n=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone)}},function(e,t,o){"use strict"},function(e,t,o){"use strict";function n(e){function t(e){var t,o,n;/^wadouri:/.test(e)&&(null===(t=cornerstoneWADOImageLoader)||void 0===t||null===(o=t.wadouri)||void 0===o||null===(n=o.dataSetCacheManager)||void 0===n||n.unload(e))}Array.isArray(e)?e.forEach(e=>t(e)):"string"===typeof e&&t(e)}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(0),r=o.n(n),i=o(18),s=o(60),a=o(61),c=o(62);class l extends n.Component{constructor(...e){super(...e),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=e=>{this.element=e,e&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=e=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let t=this.getDefaultViewport(e,this.element);if(!t)throw new Error("defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.");if(Array.isArray(this.props.defaultViewportTransforms)){const e=t.scale;for(const o of this.props.defaultViewportTransforms){const n=o({element:this.element,currentViewport:t,minScale:e,maxScale:3});t={...t,...n}}}t={...t,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,e,t),this.setImage(e),this.setViewport(t),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=e=>{if(e)if(e.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(e);else{if(!this.currentViewport)throw new Error("\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!");cornerstone.displayImage(this.element,e,this.currentViewport)}},this.onImageRenderered=e=>{const t=e.detail;t&&t.canvasContext&&t.element&&t.enabledElement&&t.image&&"number"===typeof t.renderTimeInMs&&t.viewport?(this.currentViewport=t.viewport,this.props.updateCornerstoneRenderData(t)):console.error("CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???",t)},this.startPanInteraction=e=>{this.teardownPanInteraction&&this.teardownPanInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownPanInteraction=Object(a.a)({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({translation:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=e=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownAdjustInteraction=Object(s.a)({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({voi:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=e=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownZoomInteraction=Object(c.a)({element:t,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:e=>this.updateCurrentViewport(e),contentWindow:this.contentWindow}))},this.getDefaultViewport=(e,t)=>e&&t?cornerstone.getDefaultViewportForImage(t,e):null,this.getMinScale=()=>{const e=this.getDefaultViewport(this.currentImage,this.element);if(!e)throw new Error("viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4");return e.scale},this.getMaxScale=()=>3,this.updateViewport=e=>{this.currentViewport&&this.updateCurrentViewport(e)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=e=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=e.image.subscribe(this.subscribeImage)},this.setImage=e=>{this.currentImage=e},this.setViewport=e=>{this.currentViewport=e,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=e=>{if(!this.currentViewport)throw new Error("viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4");const t="function"===typeof e?e(this.currentViewport):e;this.currentViewport={...this.currentViewport,...t},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(e){const{width:t,height:o,flip:n,invert:r,pan:i,adjust:s,zoom:a,resetTime:c,image:l}=this.props,d=this.getDefaultViewport(this.currentImage,this.element);if(e.pan!==i&&this.startPanInteraction(i),e.adjust!==s&&this.startAdjustInteraction(s),e.zoom!==a&&this.startZoomInteraction(a),d&&(e.resetTime!==c?this.updateCurrentViewport({...d,hflip:n,invert:d.invert?!r:r}):e.flip===n&&e.invert===r||this.updateCurrentViewport({hflip:n,invert:d.invert?!r:r})),(e.width!==t||e.height!==o)&&this.currentImage){cornerstone.resize(this.element);const e=cornerstone.getViewport(this.element);if(!e)throw new Error("getViewport() is returns not a Viewport");this.setViewport(e)}e.image!==l&&this.setCornerstoneImage(l)}}},,function(e,t,o){"use strict";var n=o(132),r=o.n(n),i=o(0),s=o.n(i),a=o(2);class c extends i.Component{constructor(...e){super(...e),this.svgRef=Object(i.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return s.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const n=function(e,t){return t.map(([t,o])=>{const n=cornerstone.pixelToCanvas(e,{x:t,y:o});return[n.x,n.y]})}(e.element,t.polygon),a=r()([n],1),c=t===o,l=t.dataAttrs||{};return s.a.createElement(i.Fragment,{key:"polygon"+t.id},!0===this.props.border&&s.a.createElement("polygon",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,points:n.map(([e,t])=>`${e},${t}`).join(" ")})),s.a.createElement("polygon",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,points:n.map(([e,t])=>`${e},${t}`).join(" ")})),!0===this.props.border&&s.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:a[0],y:a[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),s.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:a[0],y:a[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}c.defaultProps={border:!0};Object(a.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;
  --fill-color: rgba(0, 0, 0, 0.2);
  --focused-fill-color: rgba(0, 0, 0, 0.4);

  > polygon {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    fill: var(--contour-viewer-fill-color, var(--fill-color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
      fill: var(--contour-viewer-focused-fill-color, var(--focused-fill-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;
      fill: transparent;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2),s=o(18),a=o(63),c=o(64);function l(e,t){return t.map(([t,o])=>{const n=cornerstone.pixelToCanvas(e,{x:t,y:o});return n.x+","+n.y}).join(" ")}class d extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[[o,n]]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[...e.polygon,[o,n]]}))},this.onMouseUpToEndDraw=e=>{e.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,e),this.setState(e=>({...e,polygon:[]}))},this.onMouseLeaveToCancelDraw=e=>{e.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=e=>{"escape"===e.key.toLowerCase()&&(e.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,polygon:[]}))},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(i.d)(d)`
  position: absolute;
  top: 0;
  left: 0;

  --color: rgb(255, 224, 0);
  --stroke-width: 4px;
  --fill-color: rgba(255, 224, 0, 0.2);

  > polyline:first-child {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: var(--contour-drawer-fill-color, var(--fill-color));
  }

  > polyline[data-highlight] {
    stroke: #ffffff;
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
    ${c.a}
  }
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2),s=o(18),a=o(63);class c extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({hover:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({hover:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=e=>{this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(i.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(e,t,o){"use strict";var n=o(2);n.d.div`
  background-color: #000000;
  position: relative;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
`,n.d.div`
  position: absolute;
  left: 5px;
  top: 5px;
`,n.d.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
`,n.d.div`
  position: absolute;
  right: 5px;
  top: 5px;
`,n.d.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`},function(e,t,o){"use strict";o(153);var n=o(0),r=o(2);o(57);Object(n.createContext)({inProgress:!1,setProgress:()=>{},unsetProgress:()=>{}});r.d.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2);class s extends n.Component{constructor(...e){super(...e),this.svgRef=Object(n.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return r.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const{cx:i,cy:s,r:a}=function(e,t){const{x:o,y:n}=cornerstone.pixelToCanvas(e,{x:t[0][0],y:t[0][1]}),{x:r,y:i}=cornerstone.pixelToCanvas(e,{x:t[1][0],y:t[1][1]});return{cx:o,cy:n,r:Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(i-n),2))}}(e.element,t.polygon),c=t===o,l=t.dataAttrs||{};return r.a.createElement(n.Fragment,{key:"circle"+t.id},!0===this.props.border&&r.a.createElement("circle",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,cx:i,cy:s,r:a})),r.a.createElement("circle",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,cx:i,cy:s,r:a})),!0===this.props.border&&r.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:i,y:s}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),r.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:i,y:s}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}s.defaultProps={border:!0};Object(i.d)(s)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;
  --fill-color: rgba(0, 0, 0, 0.2);
  --focused-fill-color: rgba(0, 0, 0, 0.4);

  > circle {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    fill: var(--contour-viewer-fill-color, var(--fill-color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
      fill: var(--contour-viewer-focused-fill-color, var(--focused-fill-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;
      fill: transparent;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2),s=o(18),a=o(70),c=o(64);class l extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p1:[o,n]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p2:[o,n]}))},this.onMouseUpToEndDraw=e=>{e.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],e),this.setState(e=>({...e,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=e=>{e.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=e=>{"escape"===e.key.toLowerCase()&&(e.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:e,y:t}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:o,y:n}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),i=Math.sqrt(Math.pow(Math.abs(o-e),2)+Math.pow(Math.abs(n-t),2));return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{cx:e,cy:t,r:i}),!1!==this.props.animateStroke&&r.a.createElement("circle",{cx:e,cy:t,r:i,"data-highlight":"highlight"}),r.a.createElement("line",{x1:e,y1:t,x2:o,y2:n}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(i.d)(l)`
  position: absolute;
  top: 0;
  left: 0;

  --color: rgb(255, 224, 0);
  --stroke-width: 4px;
  --fill-color: rgba(255, 224, 0, 0.2);

  > circle:first-child {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: var(--contour-drawer-fill-color, var(--fill-color));
  }

  > circle[data-highlight] {
    stroke: #ffffff;
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
    ${c.a}
  }

  > line {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
  }
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2),s=o(18),a=o(70);class c extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({hover:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({hover:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=e=>{this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(i.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0);o(2).d.div`
  display: inline-block;
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`},function(e,t,o){"use strict";var n=o(187),r=(o(185),o(156),o(159),o(155),o(158),o(160),o(26),o(0),o(2));Object(r.d)(n.a)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
`},,function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";var n=o(0);o(18);n.Component},function(e,t,o){"use strict";o(60)},function(e,t,o){"use strict";o(61)},function(e,t,o){"use strict";o(62)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0),o(188),o(84)},function(e,t,o){"use strict";var n=o(0);o(58);const r=Object(n.createContext)();r.Consumer},function(e,t,o){"use strict";o(27),o(84);var n=o(31);o(46),o(75);new n.a},function(e,t,o){"use strict"},function(e,t,o){"use strict";o(27)},function(e,t,o){"use strict";o(27)},function(e,t,o){"use strict";o(27),o(84);new(o(31).a)},function(e,t,o){"use strict";o(27)},function(e,t,o){"use strict"},function(e,t,o){"use strict";o(0);var n=o(2),r=o(59);n.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${r.a}
`},,function(e,t,o){"use strict";var n=o(0);n.Component;o(2).d.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(29)},function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(2);Object(i.d)((function({x:e,y:t,label:o,onEnter:i,onLeave:s,onRemove:a,...c}){const l=Object(n.useCallback)(e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.preventDefault(),a()},[a]);return r.a.createElement("g",Object.assign({},c,{transform:`translate(${e} ${t})`,onMouseEnter:i,onMouseLeave:s,onClick:l}),r.a.createElement("circle",{cx:0,cy:0,r:4}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),o&&r.a.createElement("g",{transform:"translate(0 -25)"},r.a.createElement("text",null,o),r.a.createElement("text",null,o)))}))`
  cursor: pointer;

  color: var(--pin-color, #ffffff);

  &[data-focused] {
    color: var(--pin-focused-color, rgb(255, 194, 17));
  }

  > circle {
    fill: #000000;
  }

  > path {
    fill: currentColor;

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
    }
  }

  > g {
    text {
      text-anchor: middle;
      font-size: 14px;
      font-weight: bold;
    }

    text:first-child {
      stroke-width: 4px;
      stroke: #000000;
    }

    text:last-child {
      fill: currentColor;
    }
  }
`;n.Component},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var n=o(41),r=o(0),i=o.n(r),s=o(14),a=o(2);const c=a.c`
  --button-background-color: rgba(255, 255, 255, 0.2);
  --button-label-color: rgba(255, 255, 255, 0.7);
  --button-background-color-hover: rgba(255, 255, 255, 0.35);
  --button-label-color-hover: rgba(255, 255, 255, 0.9);
  --button-background-color-selected: #00a4c8;
  --button-label-color-selected: #ffffff;
  --button-background-color-disabled: rgba(255, 255, 255, 0.12);
  --button-label-color-disabled: rgba(255, 255, 255, 0.2);

  --panel-background-color: #242e3e;
  --panel-header-background-color: rgba(255, 255, 255, 0.03);
  --panel-icon-color: #8694b1;
  --panel-icon-color-hover: #c5d8f8;
  --panel-title-color: #ffffff;

  --slider-rail-color: rgba(255, 255, 255, 0.4);
  --slider-thumb-color: #ffffff;
  --slider-track-color: rgba(255, 255, 255, 0.6);
  --slider-value-label-color: rgba(0, 0, 0, 0.4);

  --tooltip-background-color: rgba(0, 0, 0, 0.7);
  --tooltip-label-color: #ffffff;

  --snackbar-background-color: rgba(0, 0, 0, 0.7);
  --snackbar-label-color: #ffffff;

  --switch-color: #eeeeee;
  --switch-track-color: rgba(255, 255, 255, 0.2);
  --switch-color-checked: #00a5c8;
  --switch-track-color-checked: rgba(255, 255, 255, 0.2);
`,l=a.c`
  :root {
    ${c};
  }

  body {
    color: white;
    background-color: #222232;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea,
  pre {
    font-family: proximanova, noto_sanslight, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.6px;
  }
`;a.b`
  ${l}
`;o(222),o(215);var d=o(148);Object(d.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}});a.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${l}
`;var h=o(157),u=o(140),p=o.n(u);const v=i.a.createElement(p.a,null),m="LunitButton-label",f="LunitButton-icon",g="LunitButton-check";function b({label:e,icon:t,check:o=v,className:n="",selected:s,onChange:a,onClick:c,hideCheck:l,style:d={},disabled:u=!1,...p}){const b=Object(r.useCallback)(e=>{"boolean"===typeof s&&"function"===typeof a&&a(!s),"function"===typeof c&&c(e)},[s,a,c]);return i.a.createElement(h.a,Object.assign({},p,{className:n,"aria-selected":!0===s,style:d,onClick:b,disabled:u}),t&&i.a.createElement("span",{className:f},t),e&&i.a.createElement("span",{className:m},e),!0!==l&&!0===s&&i.a.createElement("span",{className:g},o))}Object(a.d)(b).attrs(e=>{if(!e.label||!e.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===e.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===e.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...e,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${f} {
      font-size: 21px;
      display: block;
      text-align: center;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${m} {
      display: block;
      text-align: center;
      margin-bottom: -2px;
    }

    &:hover {
      background-color: var(--button-background-color-hover);
      color: var(--button-label-color-hover);
    }

    &[aria-selected='true'] {
      background-color: var(--button-background-color-selected);
      color: var(--button-label-color-selected);
    }

    &:disabled {
      background-color: var(--button-background-color-disabled);
      color: var(--button-label-color-disabled);
    }
  }
`,Object(a.d)(b)`
  && {
    justify-content: ${({layout:e})=>e};
    padding-left: ${({layout:e})=>"left"===e?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${f} {
      font-size: 21px;
      margin-right: ${({label:e})=>e?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${g} {
      ${({layout:e})=>"left"!==e?"display: none":""};
      position: absolute;
      font-size: 21px;
      right: 5px;
      top: 8px;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    &:hover {
      background-color: var(--button-background-color-hover);
      color: var(--button-label-color-hover);
    }

    &[aria-selected='true'] {
      background-color: var(--button-background-color-selected);
      color: var(--button-label-color-selected);
    }

    &:disabled {
      background-color: var(--button-background-color-disabled);
      color: var(--button-label-color-disabled);
    }
  }
`,a.c`
  font-size: 13px;
  color: var(--button-label-color);
  background-color: var(--button-background-color);

  &:hover {
    background-color: var(--button-background-color-hover);
    color: var(--button-label-color-hover);
  }

  &[aria-selected='true'] {
    background-color: var(--button-background-color-selected);
    color: var(--button-label-color-selected);
  }

  &:disabled {
    background-color: var(--button-background-color-disabled);
    color: var(--button-label-color-disabled);
  }
`;var w=o(141),E=o.n(w);const x="LunitPanel-header",y="LunitPanel-icon",k="LunitPanel-title",M="LunitPanel-content";const I=Object(a.d)(E.a)`
  transition: transform 0.3s ease-out;
`,L=a.c`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${x} {
    height: 25px;
    background-color: var(--panel-header-background-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 1px 14px 0 14px;

    .${y} {
      color: var(--panel-icon-color);
      margin-left: -8px;
      margin-right: 6px;
      transform: translateY(2px);
    }

    .${k} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${M} {
    padding: 14px;
  }
`,D=a.c`
  .${x} {
    .${y} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,T=Object(a.d)((function({className:e="",expanded:t,onChange:o,style:n={},title:s,icon:a,children:c,disabled:l}){const d=Object(r.useCallback)(()=>{"boolean"===typeof t&&"function"===typeof o&&o(!t)},[t,o]),h="function"===typeof c?c(!0===t):c,u=function(e,t){const o="function"===typeof e?e(!0===t):e;return o||("boolean"!==typeof t?null:t?i.a.createElement(I,null):i.a.createElement(I,{style:{transform:"rotate(180deg)"}}))}(a,t);return i.a.createElement("div",{className:e,"aria-expanded":!0===t,"aria-disabled":!0===l,style:n},i.a.createElement("div",{className:x},u&&i.a.createElement("span",{className:y,onClick:d},u),i.a.createElement("span",{className:k},"function"===typeof s?s(!0===t):s)),h&&i.a.createElement("div",{className:M},h))}))`
  ${({disabled:e})=>e?a.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:a.c`
        opacity: 1;
      `}
  ${L}
  ${({onChange:e})=>"function"===typeof e?D:""}
`;Object(a.d)((function({sessionId:e,defaultExpanded:t=!0,onChange:o,...n}){const s=Object(r.useMemo)(()=>`__sidebar_panel_${e}__`,[e]),[a,c]=Object(r.useState)(()=>{const e=localStorage.getItem(s);return"string"===typeof e?"open"===e:t}),l=Object(r.useCallback)(e=>{localStorage.setItem(s,e?"open":"close"),c(e),"function"===typeof o&&o(e)},[s,o]);return i.a.createElement(T,Object.assign({},n,{expanded:a,onChange:l}))}))`
  opacity: ${({disabled:e})=>e?.4:1};
  ${L}
  ${D}s
`,a.d.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,a.d.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(a.d)((function({children:e,className:t=""}){return i.a.createElement("div",{className:t},e)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,a.d.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const j=({gap:e=2})=>a.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${e}px;
  }
`,C=({gap:e=2})=>a.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${e}px;
  }
`;Object(a.d)((function({className:e="",children:t,style:o}){return i.a.createElement("div",{className:e,style:o},t)}))`
  ${({direction:e})=>"horizontal"===e?C:j};
`;var O=o(160);Object(a.d)(O.a).attrs({valueLabelDisplay:"on"})`
  && {
    color: var(--slider-rail-color);
    height: 19px;

    .MuiSlider-thumb {
      width: 28px;
      height: 19px;
      background-color: var(--slider-thumb-color);
      border-radius: 10px;
      margin-top: -7px;
      margin-left: -14px;
    }

    .MuiSlider-active {
      cursor: none;
    }

    .MuiSlider-valueLabel {
      left: 0;
      top: -7px;
      transform: none;

      * {
        text-align: center;
        width: 28px;
        margin: 0;
        padding: 0;
        transform: none;
        background: transparent;
        color: var(--slider-value-label-color);
        font-size: 13px;
      }
    }

    ,
    .MuiSlider-rail {
      height: 5px;
      border-radius: 2px;
    }

    .MuiSlider-track {
      background-color: var(--slider-track-color);
      height: 5px;
      border-radius: 2px;
    }
  }
`;var S=o(143),P=o.n(S),R=o(80),W=o.n(R),V=o(225),z=o(224);function $({className:e,...t}){const{arrow:o,popper:n,...s}=A(t),[a,c]=i.a.useState(null);return i.a.createElement(V.a,Object.assign({classes:s,PopperProps:{className:n+" "+(e||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(a),element:a}}}}},t,{title:i.a.createElement(r.Fragment,null,t.title,i.a.createElement("span",{className:o,ref:c}))}))}const A=Object(z.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),F=(Object(a.d)($).attrs({children:i.a.createElement(W.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(a.d)($).attrs({children:i.a.createElement(W.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,a.e`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),_=Object(a.d)(P.a)`
  animation: ${F} 1s infinite;
`;Object(a.d)($).attrs({children:i.a.createElement(_,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(a.d)($).attrs({children:i.a.createElement(_,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(78);r.Component;o(185),o(149);var Y=o(156);Object(a.d)(Y.a)`
  && {
    .MuiSwitch-track {
      opacity: 1;
      background-color: var(--switch-track-color);
    }

    .MuiSwitch-switchBase {
      color: var(--switch-color);

      &.Mui-checked {
        color: var(--switch-color-checked);
      }
    }

    .Mui-checked + .MuiSwitch-track {
      opacity: 1;
      background-color: var(--switch-track-color-checked);
    }
  }
`;var N=o(186);const X=a.c`
  color: #242e3e;

  --button-background-color: #00a4c8;
  --button-label-color: rgba(255, 255, 255, 0.8);
  --button-background-color-hover: #008cb0;
  --button-label-color-hover: rgba(255, 255, 255, 1);
  --button-background-color-selected: #007294;
  --button-label-color-selected: rgba(255, 255, 255, 1);
  --button-background-color-disabled: rgba(0, 164, 200, 0.65);
  --button-label-color-disabled: rgba(255, 255, 255, 0.2);

  --slider-rail-color: rgba(86, 81, 136, 0.4);
  --slider-thumb-color: #6b6b9b;
  --slider-track-color: rgba(86, 81, 136, 0.6);
  --slider-value-label-color: #ffffff;
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(a.d)(N.a)`
  ${X};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var U=o(223);o(217),o(218),o(219),o(220);Object(a.d)(U.a)`
  && {
    .MuiDialog-paper {
      ${X};

      background-color: #ffffff;

      border-radius: 0;

      padding: 30px 50px;

      .MuiDialogTitle-root {
        color: inherit;
        padding: 0;
        margin: 0 0 15px 0;
      }

      .MuiDialogContent-root {
        color: inherit;
        padding: 0;
        margin: 0;
        overflow: unset;
      }

      .MuiDialogActions-root {
        padding: 0;
        margin: 15px 0 0 0;
        justify-content: center;
      }

      .MuiTypography-root {
        color: inherit;
      }
    }
  }
`;var B=o(184);o(147),o(146),o(145);a.c`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,a.c`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`,a.c`
  display: block;
  position: relative;
`,a.c`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`,a.c`
  position: absolute;
  left: 100vw;
  top: 0;
  width: 200px;
  height: 300px;
`,Object(a.d)(B.a)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  padding: 4px 6px;
  color: #8694b1;
  font-size: 18px;

  .MuiSvgIcon-root {
    font-size: 1em;
  }
`;a.d.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var H=o(221);const Z=Object(a.d)(H.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(a.d)(Z)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(a.d)(Z)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(a.d)(Z)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(a.d)(Z)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const q=a.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`,K=(Object(a.d)((function({source:e,children:t,...o}){return i.a.createElement("div",o,i.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},e),t)}))`
  position: relative;
  overflow: hidden;

  > * {
    position: relative;
  }

  > video {
    top: 50%;
    left: 50%;
    position: absolute;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    transform: translate3d(-50%, -50%, 0);

    animation: ${q} 1s ease-out;
  }
`,a.b`
  ${l}
  ${n.globalStyle}
  
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`);function G(){const e=Object(r.useMemo)(()=>new n.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:n.unloadImage}),[]);return i.a.createElement("div",null,i.a.createElement(K,null),i.a.createElement(n.InsightViewer,{width:700,height:600,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!0,resetTime:Date.now(),image:e,updateCornerstoneRenderData:()=>{}}))}Object(n.installWADOImageLoader)(),Object(s.render)(i.a.createElement(G,null),document.querySelector("#app"))}]));
//# sourceMappingURL=app.bf97830f1899fdec19f6.js.map