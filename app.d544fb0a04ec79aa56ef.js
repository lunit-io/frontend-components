!function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],h=0,u=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(d&&d(e);u.length;)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={0:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;s.push([182,1]),o()}(Array(18).concat([function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o(0),r=o.n(n);const s=Object(n.createContext)({contentWindow:window});function i({stateRef:t}){return r.a.createElement(s.Consumer,null,e=>{t(e)})}},,,,,,,,,,,,,function(t,e,o){"use strict";async function n(t){return new Promise(e=>{setTimeout(e,t)})}o.d(e,"a",(function(){return r}));class r{constructor(t={}){this.options=t,this.loadImage=({imageId:t,options:e})=>"number"===typeof this.options.timeout?Promise.race([cornerstone.loadImage(t,e),n(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(t,e)}}},,,,,,,,,,function(t,e,o){"use strict";var n=o(90);o.o(n,"CornerstoneSingleImage")&&o.d(e,"CornerstoneSingleImage",(function(){return n.CornerstoneSingleImage})),o.o(n,"InsightViewer")&&o.d(e,"InsightViewer",(function(){return n.InsightViewer})),o.o(n,"globalStyle")&&o.d(e,"globalStyle",(function(){return n.globalStyle})),o.o(n,"installWADOImageLoader")&&o.d(e,"installWADOImageLoader",(function(){return n.installWADOImageLoader})),o.o(n,"unloadImage")&&o.d(e,"unloadImage",(function(){return n.unloadImage}));var r=o(91);o.d(e,"installWADOImageLoader",(function(){return r.a}));o(92);var s=o(93);o.d(e,"unloadImage",(function(){return s.a}));var i=o(94);o.d(e,"InsightViewer",(function(){return i.a}));o(96),o(97),o(98),o(128),o(99),o(100),o(131),o(101),o(102),o(103),o(104),o(105),o(106),o(108),o(109),o(110),o(111),o(112),o(113),o(114),o(57),o(115),o(129),o(116),o(117),o(118),o(46);var a=o(58);o.d(e,"CornerstoneSingleImage",(function(){return a.a}));o(119),o(31),o(120),o(121),o(122),o(123),o(124),o(130),o(125);var c=o(59);o.d(e,"globalStyle",(function(){return c.a}));o(126),o(18)},,,,,function(t,e,o){"use strict";function n(t){const e=t.detail;if(e&&"string"===typeof e.url&&"string"===typeof e.imageId&&"number"===typeof e.loaded&&"number"===typeof e.total&&"number"===typeof e.percentComplete)return e}o.d(e,"a",(function(){return n}))},,,,,,,,,,,function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(0);function r(t){const[e,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{if(t){const e=t.progress.subscribe(t=>{o(t<1?t:null)});return()=>{e.unsubscribe()}}o(null)},[t]),e}},function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o(27),r=o(31),s=o(46),i=o(75);const a=new r.a;class c{constructor(t,e={}){this.imageId=t,this.options=e,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"===typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(t=>t()),this._destoyed=!0},this.onProgress=t=>{const e=Object(s.a)(t);e&&e.imageId===this.imageId&&this._progressSubject.next(Math.min(e.loaded/e.total,.99))},this.loadImage=async t=>{try{const e=await this._loader.loadImage({imageId:t,options:{loader:Object(i.a)(t=>this._cancel.push(t))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(e),this._progressSubject.next(1))}catch(e){this._destoyed||(console.warn(`It will retry loadImage(${t}):`,e),this.loadImage(t))}},this._imageSubject=new n.a(null),this._progressSubject=new n.a(0),this._loader=e.loader||a,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(t)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(2);const r=n.c`
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
`,s=n.c`
  :root {
    ${r};
  }
`},function(t,e,o){"use strict";function n({element:t,getCurrentViewport:e,onMove:o,onEnd:n,contentWindow:r}){let s,i,a,c;function l(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=e();n&&(t.removeEventListener("mousedown",this.onAdjustStart),s=o.pageX,i=o.pageY,a=n.voi.windowCenter,c=n.voi.windowWidth,r.addEventListener("mousemove",d),r.addEventListener("mouseup",h),t.addEventListener("mouseleave",h))}function d(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const e=t.pageX-s,n=t.pageY-i;o({windowWidth:Math.max(c+e,1),windowCenter:Math.max(a+n,1)})}function h(e){0===e.button&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),r.removeEventListener("mousemove",d),r.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h),t.addEventListener("mousedown",l),n())}return t.addEventListener("mousedown",l),()=>{t.removeEventListener("mousedown",l),r.removeEventListener("mousemove",d),r.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h)}}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";function n({element:t,getCurrentViewport:e,onMove:o,onEnd:n,contentWindow:r}){let s,i,a,c;function l(){t.addEventListener("mousedown",h),t.addEventListener("touchstart",u)}function d(){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",u)}function h(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=e();n&&(d(),s=o.pageX,i=o.pageY,a=n.translation.x,c=n.translation.y,r.addEventListener("mousemove",m),r.addEventListener("mouseup",f),t.addEventListener("mouseleave",f))}function u(t){if(1!==t.targetTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const o=e();o&&(d(),s=t.touches[0].pageX,i=t.touches[0].pageY,a=o.translation.x,c=o.translation.y,r.addEventListener("touchmove",p),r.addEventListener("touchend",v),r.addEventListener("touchcancel",v))}function p(t){1===t.targetTouches.length&&1===t.changedTouches.length||(r.removeEventListener("touchmove",p),r.removeEventListener("touchend",v),r.removeEventListener("touchcancel",v),l()),t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=e();if(!n)return;const d=(t.touches[0].pageX-s)/n.scale,h=(t.touches[0].pageY-i)/n.scale;o({x:a+d,y:c+h})}function v(t){r.removeEventListener("touchmove",p),r.removeEventListener("touchend",v),r.removeEventListener("touchcancel",v),l(),n()}function m(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=e();if(!n)return;const r=(t.pageX-s)/n.scale,l=(t.pageY-i)/n.scale;o({x:a+r,y:c+l})}function f(e){0===e.button&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),t.removeEventListener("mouseleave",f),l(),n())}return l(),()=>{t.removeEventListener("mousedown",h),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",f),t.removeEventListener("mouseleave",f),t.removeEventListener("touchstart",u),r.removeEventListener("touchmove",p),r.removeEventListener("touchend",v),r.removeEventListener("touchcancel",v)}}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(152),r=o(151);function s({element:t,getMinMaxScale:e,getCurrentViewport:o,onZoom:s,contentWindow:i}){function a(n){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation();const[r,a]=e(),c=o();if(!c)return;const l=n.deltaY>0?1:-1,d=Math.max(r,Math.min(a,c.scale-.03*l));if(c.scale===d)return;const{top:h,left:u,width:p,height:v}=t.getBoundingClientRect(),m=n.pageX-i.scrollX-(u+p/2),f=n.pageY-i.scrollY-(h+v/2),g=(1-d/c.scale)*m,b=(1-d/c.scale)*f;s({translation:{x:c.translation.x+g/d,y:c.translation.y+b/d},scale:d})}let c,l,d,h;function u(e){if(2!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=o();if(!n)return;h=n.scale,d=n.translation,c=[{x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY},{x:e.targetTouches[1].pageX,y:e.targetTouches[1].pageY}];const r=Math.abs(c[0].x-c[1].x),s=Math.abs(c[0].y-c[1].y);l=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),t.removeEventListener("touchstart",u),t.addEventListener("touchmove",p),t.addEventListener("touchend",v),t.addEventListener("touchcancel",v)}function p(t){if(2!==t.targetTouches.length||2!==t.changedTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const e=[{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY},{x:t.changedTouches[1].pageX,y:t.changedTouches[1].pageY}],o=Math.abs(e[0].x-e[1].x),n=Math.abs(e[0].y-e[1].y),r=Math.sqrt(Math.pow(o,2)+Math.pow(n,2)),i=h*(r/l),a=((e[0].x+e[1].x)/2-(c[0].x+c[1].x)/2)/i,u=((e[0].y+e[1].y)/2-(c[0].y+c[1].y)/2)/i,p={x:d.x+a,y:d.y+u};s({translation:p,scale:i})}function v(i){const a=o();if(!a)return;const[c,l]=e();if(a.scale<c){const t=Object(r.a)(e=>{const o=Object(n.a)(e/500);e>500?(s({translation:a.translation,scale:c}),t.stop()):s({translation:a.translation,scale:a.scale+(c-a.scale)*o})})}else if(a.scale>l){const t=Object(r.a)(e=>{const o=Object(n.a)(e/500);e>500?(s({translation:a.translation,scale:l}),t.stop()):s({translation:a.translation,scale:a.scale+(l-a.scale)*o})})}t.removeEventListener("touchmove",p),t.removeEventListener("touchend",v),t.removeEventListener("touchcancel",v),t.addEventListener("touchstart",u)}return t.addEventListener("wheel",a),t.addEventListener("touchstart",u),()=>{t.removeEventListener("wheel",a),t.removeEventListener("touchstart",u),t.removeEventListener("touchmove",p),t.removeEventListener("touchend",v),t.removeEventListener("touchcancel",v)}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(136),r=o.n(n);function s(t,e){return t.find(t=>r()(e,t.polygon))||null}},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(2);const r=n.e`
  to {
    stroke-dashoffset: 0;
  }
`,s=n.c`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${r} 10s linear infinite;
`},,,,,,function(t,e,o){"use strict";function n(t,e){return t.find(t=>{const[[o,n],[r,s]]=t.polygon,[i,a]=e,c=Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2));return Math.sqrt(Math.pow(Math.abs(i-o),2)+Math.pow(Math.abs(a-n),2))<=c})||null}o.d(e,"a",(function(){return n}))},,,,,function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));const n=t=>(e,o,n={},r={})=>{const{cornerstone:s}=cornerstoneWADOImageLoader.external,i=new XMLHttpRequest;return new Promise((a,c)=>{i.open("get",e,!0),i.responseType="arraybuffer",Object.keys(n).forEach(t=>{i.setRequestHeader(t,n[t])}),r.deferred={resolve:a,reject:c},r.url=e,r.imageId=o,"function"===typeof t&&t((function(){try{i.abort()}catch(t){}})),i.onreadystatechange=()=>{4===i.readyState&&200===i.status&&a(i.response)},i.onloadstart=()=>{const t={url:e,imageId:o};s&&s.triggerEvent(s.events,"cornerstoneimageloadstart",t)},i.onloadend=()=>{const t={url:e,imageId:o};s.triggerEvent(s.events,"cornerstoneimageloadend",t)},i.onprogress=({loaded:t,lengthComputable:n,total:r})=>{let i;n&&(i=Math.round(t/r*100));const a={url:e,imageId:o,loaded:t,total:r,percentComplete:i};s.triggerEvent(s.events,"cornerstoneimageloadprogress",a)},i.send()})}},,,,,,,,,,,,,,,function(t,e){},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));let n=!1;function r(){n||(n=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone)}},function(t,e,o){"use strict"},function(t,e,o){"use strict";function n(t){function e(t){var e,o,n;/^wadouri:/.test(t)&&(null===(e=cornerstoneWADOImageLoader)||void 0===e||null===(o=e.wadouri)||void 0===o||null===(n=o.dataSetCacheManager)||void 0===n||n.unload(t))}Array.isArray(t)?t.forEach(t=>e(t)):"string"===typeof t&&e(t)}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(0),r=o.n(n),s=o(18),i=o(60),a=o(61),c=o(62);class l extends n.Component{constructor(...t){super(...t),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=t=>{this.element=t,t&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=t=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let e=this.getDefaultViewport(t,this.element);if(!e)throw new Error("defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.");if(Array.isArray(this.props.defaultViewportTransforms)){const t=e.scale;for(const o of this.props.defaultViewportTransforms){const n=o({element:this.element,currentViewport:e,minScale:t,maxScale:3});e={...e,...n}}}e={...e,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,t,e),this.setImage(t),this.setViewport(e),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=t=>{if(t)if(t.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(t);else{if(!this.currentViewport)throw new Error("\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!");cornerstone.displayImage(this.element,t,this.currentViewport)}},this.onImageRenderered=t=>{const e=t.detail;e&&e.canvasContext&&e.element&&e.enabledElement&&e.image&&"number"===typeof e.renderTimeInMs&&e.viewport?(this.currentViewport=e.viewport,this.props.updateCornerstoneRenderData(e)):console.error("CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???",e)},this.startPanInteraction=t=>{this.teardownPanInteraction&&this.teardownPanInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownPanInteraction=Object(a.a)({element:e,getCurrentViewport:()=>this.currentViewport,onMove:t=>this.updateCurrentViewport({translation:t}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=t=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownAdjustInteraction=Object(i.a)({element:e,getCurrentViewport:()=>this.currentViewport,onMove:t=>this.updateCurrentViewport({voi:t}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=t=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownZoomInteraction=Object(c.a)({element:e,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:t=>this.updateCurrentViewport(t),contentWindow:this.contentWindow}))},this.getDefaultViewport=(t,e)=>t&&e?cornerstone.getDefaultViewportForImage(e,t):null,this.getMinScale=()=>{const t=this.getDefaultViewport(this.currentImage,this.element);if(!t)throw new Error("viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4");return t.scale},this.getMaxScale=()=>3,this.updateViewport=t=>{this.currentViewport&&this.updateCurrentViewport(t)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=t=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=t.image.subscribe(this.subscribeImage)},this.setImage=t=>{this.currentImage=t},this.setViewport=t=>{this.currentViewport=t,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=t=>{if(!this.currentViewport)throw new Error("viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4");const e="function"===typeof t?t(this.currentViewport):t;this.currentViewport={...this.currentViewport,...e},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(t){const{width:e,height:o,flip:n,invert:r,pan:s,adjust:i,zoom:a,resetTime:c,image:l}=this.props,d=this.getDefaultViewport(this.currentImage,this.element);if(t.pan!==s&&this.startPanInteraction(s),t.adjust!==i&&this.startAdjustInteraction(i),t.zoom!==a&&this.startZoomInteraction(a),d&&(t.resetTime!==c?this.updateCurrentViewport({...d,hflip:n,invert:d.invert?!r:r}):t.flip===n&&t.invert===r||this.updateCurrentViewport({hflip:n,invert:d.invert?!r:r})),(t.width!==e||t.height!==o)&&this.currentImage){cornerstone.resize(this.element);const t=cornerstone.getViewport(this.element);if(!t)throw new Error("getViewport() is returns not a Viewport");this.setViewport(t)}t.image!==l&&this.setCornerstoneImage(l)}}},,function(t,e,o){"use strict";var n=o(132),r=o.n(n),s=o(0),i=o.n(s),a=o(2);class c extends s.Component{constructor(...t){super(...t),this.svgRef=Object(s.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return i.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const n=function(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return[n.x,n.y]})}(t.element,e.polygon),a=r()([n],1),c=e===o,l=e.dataAttrs||{};return i.a.createElement(s.Fragment,{key:"polygon"+e.id},!0===this.props.border&&i.a.createElement("polygon",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),i.a.createElement("polygon",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),!0===this.props.border&&i.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:a[0],y:a[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),i.a.createElement("text",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:a[0],y:a[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}c.defaultProps={border:!0};Object(a.d)(c)`
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
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),i=o(18),a=o(63),c=o(64);function l(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return n.x+","+n.y}).join(" ")}class d extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({draw:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({draw:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=t=>{t.stopPropagation(),this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=t=>{t.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=t=>{if(t.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.pageX,this.startY=t.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,polygon:[[o,n]]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=t=>{if(t.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.pageX-this.startX),Math.abs(t.pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,polygon:[...t.polygon,[o,n]]}))},this.onMouseUpToEndDraw=t=>{t.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,t),this.setState(t=>({...t,polygon:[]}))},this.onMouseLeaveToCancelDraw=t=>{t.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=t=>{"escape"===t.key.toLowerCase()&&(t.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,polygon:[]}))},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(s.d)(d)`
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
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),i=o(18),a=o(63);class c extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({hover:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({hover:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=t=>{this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(t,e,o){"use strict";var n=o(2);n.d.div`
  background-color: #000000;
  position: relative;
  width: ${({width:t})=>t}px;
  height: ${({height:t})=>t}px;
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
`},function(t,e,o){"use strict";o(153);var n=o(0),r=o(2);o(57);Object(n.createContext)({inProgress:!1,setProgress:()=>{},unsetProgress:()=>{}});r.d.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2);class i extends n.Component{constructor(...t){super(...t),this.svgRef=Object(n.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return r.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const{cx:s,cy:i,r:a}=function(t,e){const{x:o,y:n}=cornerstone.pixelToCanvas(t,{x:e[0][0],y:e[0][1]}),{x:r,y:s}=cornerstone.pixelToCanvas(t,{x:e[1][0],y:e[1][1]});return{cx:o,cy:n,r:Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2))}}(t.element,e.polygon),c=e===o,l=e.dataAttrs||{};return r.a.createElement(n.Fragment,{key:"circle"+e.id},!0===this.props.border&&r.a.createElement("circle",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,cx:s,cy:i,r:a})),r.a.createElement("circle",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,cx:s,cy:i,r:a})),!0===this.props.border&&r.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:s,y:i}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),r.a.createElement("text",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:s,y:i}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}i.defaultProps={border:!0};Object(s.d)(i)`
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
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),i=o(18),a=o(70),c=o(64);class l extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({draw:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({draw:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=t=>{t.stopPropagation(),this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=t=>{t.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=t=>{if(t.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.pageX,this.startY=t.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,p1:[o,n]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=t=>{if(t.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.pageX-this.startX),Math.abs(t.pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,p2:[o,n]}))},this.onMouseUpToEndDraw=t=>{t.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],t),this.setState(t=>({...t,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=t=>{t.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=t=>{"escape"===t.key.toLowerCase()&&(t.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:t,y:e}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:o,y:n}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),s=Math.sqrt(Math.pow(Math.abs(o-t),2)+Math.pow(Math.abs(n-e),2));return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{cx:t,cy:e,r:s}),!1!==this.props.animateStroke&&r.a.createElement("circle",{cx:t,cy:e,r:s,"data-highlight":"highlight"}),r.a.createElement("line",{x1:t,y1:e,x2:o,y2:n}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(s.d)(l)`
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
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),i=o(18),a=o(70);class c extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({hover:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({hover:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=t=>{this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(a.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0);o(2).d.div`
  display: inline-block;
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`},function(t,e,o){"use strict";var n=o(187),r=(o(185),o(156),o(159),o(155),o(158),o(160),o(26),o(0),o(2));Object(r.d)(n.a)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
`},,function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";var n=o(0);o(18);n.Component},function(t,e,o){"use strict";o(60)},function(t,e,o){"use strict";o(61)},function(t,e,o){"use strict";o(62)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0),o(188),o(84)},function(t,e,o){"use strict";var n=o(0);o(58);const r=Object(n.createContext)();r.Consumer},function(t,e,o){"use strict";o(27),o(84);var n=o(31);o(46),o(75);new n.a},function(t,e,o){"use strict"},function(t,e,o){"use strict";o(27)},function(t,e,o){"use strict";o(27)},function(t,e,o){"use strict";o(27),o(84);new(o(31).a)},function(t,e,o){"use strict";o(27)},function(t,e,o){"use strict"},function(t,e,o){"use strict";o(0);var n=o(2),r=o(59);n.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${r.a}
`},,function(t,e,o){"use strict";var n=o(0);n.Component;o(2).d.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(29)},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2);Object(s.d)((function({x:t,y:e,label:o,onEnter:s,onLeave:i,onRemove:a,...c}){const l=Object(n.useCallback)(t=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),t.preventDefault(),a()},[a]);return r.a.createElement("g",Object.assign({},c,{transform:`translate(${t} ${e})`,onMouseEnter:s,onMouseLeave:i,onClick:l}),r.a.createElement("circle",{cx:0,cy:0,r:4}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),o&&r.a.createElement("g",{transform:"translate(0 -25)"},r.a.createElement("text",null,o),r.a.createElement("text",null,o)))}))`
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
`;n.Component},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";o.r(e);var n=o(41),r=o(0),s=o.n(r),i=o(14),a=o(2);const c=a.c`
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
`;var h=o(157),u=o(140),p=o.n(u);const v=s.a.createElement(p.a,null),m="LunitButton-label",f="LunitButton-icon",g="LunitButton-check";function b({label:t,icon:e,check:o=v,className:n="",selected:i,onChange:a,onClick:c,hideCheck:l,style:d={},disabled:u=!1,...p}){const b=Object(r.useCallback)(t=>{"boolean"===typeof i&&"function"===typeof a&&a(!i),"function"===typeof c&&c(t)},[i,a,c]);return s.a.createElement(h.a,Object.assign({},p,{className:n,"aria-selected":!0===i,style:d,onClick:b,disabled:u}),e&&s.a.createElement("span",{className:f},e),t&&s.a.createElement("span",{className:m},t),!0!==l&&!0===i&&s.a.createElement("span",{className:g},o))}Object(a.d)(b).attrs(t=>{if(!t.label||!t.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===t.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===t.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...t,hideCheck:!0,layout:"center"}})`
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
    justify-content: ${({layout:t})=>t};
    padding-left: ${({layout:t})=>"left"===t?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${f} {
      font-size: 21px;
      margin-right: ${({label:t})=>t?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${g} {
      ${({layout:t})=>"left"!==t?"display: none":""};
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
`,D=a.c`
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
`,L=a.c`
  .${x} {
    .${y} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,j=Object(a.d)((function({className:t="",expanded:e,onChange:o,style:n={},title:i,icon:a,children:c,disabled:l}){const d=Object(r.useCallback)(()=>{"boolean"===typeof e&&"function"===typeof o&&o(!e)},[e,o]),h="function"===typeof c?c(!0===e):c,u=function(t,e){const o="function"===typeof t?t(!0===e):t;return o||("boolean"!==typeof e?null:e?s.a.createElement(I,null):s.a.createElement(I,{style:{transform:"rotate(180deg)"}}))}(a,e);return s.a.createElement("div",{className:t,"aria-expanded":!0===e,"aria-disabled":!0===l,style:n},s.a.createElement("div",{className:x},u&&s.a.createElement("span",{className:y,onClick:d},u),s.a.createElement("span",{className:k},"function"===typeof i?i(!0===e):i)),h&&s.a.createElement("div",{className:M},h))}))`
  ${({disabled:t})=>t?a.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:a.c`
        opacity: 1;
      `}
  ${D}
  ${({onChange:t})=>"function"===typeof t?L:""}
`;Object(a.d)((function({sessionId:t,defaultExpanded:e=!0,onChange:o,...n}){const i=Object(r.useMemo)(()=>`__sidebar_panel_${t}__`,[t]),[a,c]=Object(r.useState)(()=>{const t=localStorage.getItem(i);return"string"===typeof t?"open"===t:e}),l=Object(r.useCallback)(t=>{localStorage.setItem(i,t?"open":"close"),c(t),"function"===typeof o&&o(t)},[i,o]);return s.a.createElement(j,Object.assign({},n,{expanded:a,onChange:l}))}))`
  opacity: ${({disabled:t})=>t?.4:1};
  ${D}
  ${L}s
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
`;Object(a.d)((function({children:t,className:e=""}){return s.a.createElement("div",{className:e},t)}))`
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
`;const C=({gap:t=2})=>a.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${t}px;
  }
`,T=({gap:t=2})=>a.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${t}px;
  }
`;Object(a.d)((function({className:t="",children:e,style:o}){return s.a.createElement("div",{className:t,style:o},e)}))`
  ${({direction:t})=>"horizontal"===t?T:C};
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
`;var S=o(143),P=o.n(S),R=o(80),W=o.n(R),V=o(225),z=o(224);function $({className:t,...e}){const{arrow:o,popper:n,...i}=A(e),[a,c]=s.a.useState(null);return s.a.createElement(V.a,Object.assign({classes:i,PopperProps:{className:n+" "+(t||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(a),element:a}}}}},e,{title:s.a.createElement(r.Fragment,null,e.title,s.a.createElement("span",{className:o,ref:c}))}))}const A=Object(z.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),F=(Object(a.d)($).attrs({children:s.a.createElement(W.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(a.d)($).attrs({children:s.a.createElement(W.a,{style:{color:"#00a4c8"}})})`
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
`;Object(a.d)($).attrs({children:s.a.createElement(_,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(a.d)($).attrs({children:s.a.createElement(_,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(78);r.Component;o(185),o(149);var N=o(156);Object(a.d)(N.a)`
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
`;var Y=o(186);const X=a.c`
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
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(a.d)(Y.a)`
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
`,K=(Object(a.d)((function({source:t,children:e,...o}){return s.a.createElement("div",o,s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},t),e)}))`
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
`);function G(){const t=Object(r.useMemo)(()=>new n.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:n.unloadImage}),[]);return s.a.createElement("div",null,s.a.createElement(K,null),s.a.createElement(n.InsightViewer,{width:700,height:600,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!0,resetTime:Date.now(),image:t,updateCornerstoneRenderData:()=>{}}))}Object(n.installWADOImageLoader)(),Object(i.render)(s.a.createElement(G,null),document.querySelector("#app"))}]));
//# sourceMappingURL=app.d544fb0a04ec79aa56ef.js.map