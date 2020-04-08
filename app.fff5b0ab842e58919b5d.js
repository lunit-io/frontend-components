!function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(h&&h(t);d.length;)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={0:0},s=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var h=c;s.push([182,1]),o()}(Array(18).concat([function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o(0),r=o.n(n);const s=Object(n.createContext)({contentWindow:window});function a({stateRef:e}){return r.a.createElement(s.Consumer,null,t=>{e(t)})}},,,,,,,,,,,,,function(e,t,o){"use strict";async function n(e){return new Promise(t=>{setTimeout(t,e)})}o.d(t,"a",(function(){return r}));class r{constructor(e={}){this.options=e,this.loadImage=({imageId:e,options:t})=>"number"===typeof this.options.timeout?Promise.race([cornerstone.loadImage(e,t),n(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(e,t)}}},,,,,,,,,,function(e,t,o){"use strict";var n=o(90);o.o(n,"CornerstoneSingleImage")&&o.d(t,"CornerstoneSingleImage",(function(){return n.CornerstoneSingleImage})),o.o(n,"InsightViewer")&&o.d(t,"InsightViewer",(function(){return n.InsightViewer})),o.o(n,"globalStyle")&&o.d(t,"globalStyle",(function(){return n.globalStyle})),o.o(n,"installWADOImageLoader")&&o.d(t,"installWADOImageLoader",(function(){return n.installWADOImageLoader})),o.o(n,"unloadImage")&&o.d(t,"unloadImage",(function(){return n.unloadImage}));var r=o(91);o.d(t,"installWADOImageLoader",(function(){return r.a}));o(92);var s=o(93);o.d(t,"unloadImage",(function(){return s.a}));var a=o(94);o.d(t,"InsightViewer",(function(){return a.a}));o(96),o(97),o(98),o(128),o(99),o(100),o(131),o(101),o(102),o(103),o(104),o(105),o(106),o(108),o(109),o(110),o(111),o(112),o(113),o(114),o(57),o(115),o(129),o(116),o(117),o(118),o(46);var i=o(58);o.d(t,"CornerstoneSingleImage",(function(){return i.a}));o(119),o(31),o(120),o(121),o(122),o(123),o(124),o(130),o(125);var c=o(59);o.d(t,"globalStyle",(function(){return c.a}));o(126),o(18)},,,,,function(e,t,o){"use strict";function n(e){const t=e.detail;if(t&&"string"===typeof t.url&&"string"===typeof t.imageId&&"number"===typeof t.loaded&&"number"===typeof t.total&&"number"===typeof t.percentComplete)return t}o.d(t,"a",(function(){return n}))},,,,,,,,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(0);function r(e){const[t,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{if(e){const t=e.progress.subscribe(e=>{o(e<1?e:null)});return()=>{t.unsubscribe()}}o(null)},[e]),t}},function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o(27),r=o(31),s=o(46),a=o(75);const i=new r.a;class c{constructor(e,t={}){this.imageId=e,this.options=t,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"===typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(e=>e()),this._destoyed=!0},this.onProgress=e=>{const t=Object(s.a)(e);t&&t.imageId===this.imageId&&this._progressSubject.next(Math.min(t.loaded/t.total,.99))},this.loadImage=async e=>{try{const t=await this._loader.loadImage({imageId:e,options:{loader:Object(a.a)(e=>this._cancel.push(e))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(t),this._progressSubject.next(1))}catch(t){this._destoyed||(console.warn(`It will retry loadImage(${e}):`,t),this.loadImage(e))}},this._imageSubject=new n.a(null),this._progressSubject=new n.a(0),this._loader=t.loader||i,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(e)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(2);const r=n.c`
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
`},function(e,t,o){"use strict";function n({element:e,getCurrentViewport:t,onMove:o,onEnd:n,contentWindow:r}){let s,a,i,c;function l(){e.addEventListener("mousedown",v),e.addEventListener("touchstart",u)}function h(){e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",u)}function u(e){if(e.targetTouches.length>1)return r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),void l();if(1!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const o=t();o&&(h(),s=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=o.voi.windowCenter,c=o.voi.windowWidth,r.addEventListener("touchmove",d),r.addEventListener("touchend",p),r.addEventListener("touchcancel",p))}function d(e){if(1!==e.targetTouches.length||1!==e.changedTouches.length)return r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),void l();if(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!t())return;const n=e.targetTouches[0].pageX-s,h=e.targetTouches[0].pageY-a;o({windowWidth:Math.max(c+n,1),windowCenter:Math.max(i+h,1)})}function p(e){r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l(),n()}function v(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=t();n&&(h(),s=o.pageX,a=o.pageY,i=n.voi.windowCenter,c=n.voi.windowWidth,r.addEventListener("mousemove",m),r.addEventListener("mouseup",g),e.addEventListener("mouseleave",g))}function m(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const t=e.pageX-s,n=e.pageY-a;o({windowWidth:Math.max(c+t,1),windowCenter:Math.max(i+n,1)})}function g(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",g),e.removeEventListener("mouseleave",g),l(),n())}return l(),()=>{e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",u),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",g),e.removeEventListener("mouseleave",g),r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)}}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";function n({element:e,getCurrentViewport:t,onMove:o,onEnd:n,contentWindow:r}){let s,a,i,c;function l(){e.addEventListener("mousedown",v),e.addEventListener("touchstart",u)}function h(){e.removeEventListener("mousedown",v),e.removeEventListener("touchstart",u)}function u(e){if(e.targetTouches.length>1)return r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),void l();if(1!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const o=t();o&&(h(),s=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=o.translation.x,c=o.translation.y,r.addEventListener("touchmove",d),r.addEventListener("touchend",p),r.addEventListener("touchcancel",p))}function d(e){if(1!==e.targetTouches.length||1!==e.changedTouches.length)return r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),void l();e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=t();if(!n)return;const h=(e.targetTouches[0].pageX-s)/n.scale,u=(e.targetTouches[0].pageY-a)/n.scale;o({x:i+h,y:c+u})}function p(e){r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p),l(),n()}function v(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=t();n&&(h(),s=o.pageX,a=o.pageY,i=n.translation.x,c=n.translation.y,r.addEventListener("mousemove",m),r.addEventListener("mouseup",g),e.addEventListener("mouseleave",g))}function m(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=t();if(!n)return;const r=(e.pageX-s)/n.scale,l=(e.pageY-a)/n.scale;o({x:i+r,y:c+l})}function g(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",g),e.removeEventListener("mouseleave",g),l(),n())}return l(),()=>{e.removeEventListener("mousedown",v),r.removeEventListener("mousemove",m),r.removeEventListener("mouseup",g),e.removeEventListener("mouseleave",g),e.removeEventListener("touchstart",u),r.removeEventListener("touchmove",d),r.removeEventListener("touchend",p),r.removeEventListener("touchcancel",p)}}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(152),r=o(151);function s({element:e,getMinMaxScale:t,getCurrentViewport:o,onZoom:s,contentWindow:a}){function i(n){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation();const[r,i]=t(),c=o();if(!c)return;const l=n.deltaY>0?1:-1,h=Math.max(r,Math.min(i,c.scale-.03*l));if(c.scale===h)return;const{top:u,left:d,width:p,height:v}=e.getBoundingClientRect(),m=n.pageX-a.scrollX-(d+p/2),g=n.pageY-a.scrollY-(u+v/2),f=(1-h/c.scale)*m,w=(1-h/c.scale)*g;s({translation:{x:c.translation.x+f/h,y:c.translation.y+w/h},scale:h})}let c,l,h,u;function d(t){if(2!==t.targetTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=o();if(!n)return;u=n.scale,h=n.translation,c=[{x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY},{x:t.targetTouches[1].pageX,y:t.targetTouches[1].pageY}];const r=Math.abs(c[0].x-c[1].x),s=Math.abs(c[0].y-c[1].y);l=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),e.removeEventListener("touchstart",d),e.addEventListener("touchmove",p),e.addEventListener("touchend",v),e.addEventListener("touchcancel",v)}function p(e){if(2!==e.targetTouches.length||2!==e.changedTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const t=[{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},{x:e.changedTouches[1].pageX,y:e.changedTouches[1].pageY}],o=Math.abs(t[0].x-t[1].x),n=Math.abs(t[0].y-t[1].y),r=Math.sqrt(Math.pow(o,2)+Math.pow(n,2)),a=u*(r/l),i=((t[0].x+t[1].x)/2-(c[0].x+c[1].x)/2)/a,d=((t[0].y+t[1].y)/2-(c[0].y+c[1].y)/2)/a,p={x:h.x+i,y:h.y+d};s({translation:p,scale:a})}function v(a){const i=o();if(!i)return;const[c,l]=t();if(i.scale<c){const e=Object(r.a)(t=>{const o=Object(n.a)(t/500);t>500?(s({translation:i.translation,scale:c}),e.stop()):s({translation:i.translation,scale:i.scale+(c-i.scale)*o})})}else if(i.scale>l){const e=Object(r.a)(t=>{const o=Object(n.a)(t/500);t>500?(s({translation:i.translation,scale:l}),e.stop()):s({translation:i.translation,scale:i.scale+(l-i.scale)*o})})}e.removeEventListener("touchmove",p),e.removeEventListener("touchend",v),e.removeEventListener("touchcancel",v),e.addEventListener("touchstart",d)}return e.addEventListener("wheel",i),e.addEventListener("touchstart",d),()=>{e.removeEventListener("wheel",i),e.removeEventListener("touchstart",d),e.removeEventListener("touchmove",p),e.removeEventListener("touchend",v),e.removeEventListener("touchcancel",v)}}},function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(136),r=o.n(n);function s(e,t){return e.find(e=>r()(t,e.polygon))||null}},function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(2);const r=n.e`
  to {
    stroke-dashoffset: 0;
  }
`,s=n.c`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${r} 10s linear infinite;
`},,,,,,function(e,t,o){"use strict";function n(e,t){return e.find(e=>{const[[o,n],[r,s]]=e.polygon,[a,i]=t,c=Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2));return Math.sqrt(Math.pow(Math.abs(a-o),2)+Math.pow(Math.abs(i-n),2))<=c})||null}o.d(t,"a",(function(){return n}))},,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));const n=e=>(t,o,n={},r={})=>{const{cornerstone:s}=cornerstoneWADOImageLoader.external,a=new XMLHttpRequest;return new Promise((i,c)=>{a.open("get",t,!0),a.responseType="arraybuffer",Object.keys(n).forEach(e=>{a.setRequestHeader(e,n[e])}),r.deferred={resolve:i,reject:c},r.url=t,r.imageId=o,"function"===typeof e&&e((function(){try{a.abort()}catch(e){}})),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&i(a.response)},a.onloadstart=()=>{const e={url:t,imageId:o};s&&s.triggerEvent(s.events,"cornerstoneimageloadstart",e)},a.onloadend=()=>{const e={url:t,imageId:o};s.triggerEvent(s.events,"cornerstoneimageloadend",e)},a.onprogress=({loaded:e,lengthComputable:n,total:r})=>{let a;n&&(a=Math.round(e/r*100));const i={url:t,imageId:o,loaded:e,total:r,percentComplete:a};s.triggerEvent(s.events,"cornerstoneimageloadprogress",i)},a.send()})}},,,,,,,,,,,,,,,function(e,t){},function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));let n=!1;function r(){n||(n=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone)}},function(e,t,o){"use strict"},function(e,t,o){"use strict";function n(e){function t(e){var t,o,n;/^wadouri:/.test(e)&&(null===(t=cornerstoneWADOImageLoader)||void 0===t||null===(o=t.wadouri)||void 0===o||null===(n=o.dataSetCacheManager)||void 0===n||n.unload(e))}Array.isArray(e)?e.forEach(e=>t(e)):"string"===typeof e&&t(e)}o.d(t,"a",(function(){return n}))},function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(0),r=o.n(n),s=o(18),a=o(60),i=o(61),c=o(62);class l extends n.Component{constructor(...e){super(...e),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=e=>{this.element=e,e&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=e=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let t=this.getDefaultViewport(e,this.element);if(!t)throw new Error("defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.");if(Array.isArray(this.props.defaultViewportTransforms)){const e=t.scale;for(const o of this.props.defaultViewportTransforms){const n=o({element:this.element,currentViewport:t,minScale:e,maxScale:3});t={...t,...n}}}t={...t,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,e,t),this.setImage(e),this.setViewport(t),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=e=>{if(e)if(e.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(e);else{if(!this.currentViewport)throw new Error("\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!");cornerstone.displayImage(this.element,e,this.currentViewport)}},this.onImageRenderered=e=>{const t=e.detail;t&&t.canvasContext&&t.element&&t.enabledElement&&t.image&&"number"===typeof t.renderTimeInMs&&t.viewport?(this.currentViewport=t.viewport,this.props.updateCornerstoneRenderData(t)):console.error("CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???",t)},this.startPanInteraction=e=>{this.teardownPanInteraction&&this.teardownPanInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownPanInteraction=Object(i.a)({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({translation:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=e=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownAdjustInteraction=Object(a.a)({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({voi:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=e=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownZoomInteraction=Object(c.a)({element:t,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:e=>this.updateCurrentViewport(e),contentWindow:this.contentWindow}))},this.getDefaultViewport=(e,t)=>e&&t?cornerstone.getDefaultViewportForImage(t,e):null,this.getMinScale=()=>{const e=this.getDefaultViewport(this.currentImage,this.element);if(!e)throw new Error("viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4");return e.scale},this.getMaxScale=()=>3,this.updateViewport=e=>{this.currentViewport&&this.updateCurrentViewport(e)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=e=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=e.image.subscribe(this.subscribeImage)},this.setImage=e=>{this.currentImage=e},this.setViewport=e=>{this.currentViewport=e,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=e=>{if(!this.currentViewport)throw new Error("viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4");const t="function"===typeof e?e(this.currentViewport):e;this.currentViewport={...this.currentViewport,...t},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(e){const{width:t,height:o,flip:n,invert:r,pan:s,adjust:a,zoom:i,resetTime:c,image:l}=this.props,h=this.getDefaultViewport(this.currentImage,this.element);if(e.pan!==s&&this.startPanInteraction(s),e.adjust!==a&&this.startAdjustInteraction(a),e.zoom!==i&&this.startZoomInteraction(i),h&&(e.resetTime!==c?this.updateCurrentViewport({...h,hflip:n,invert:h.invert?!r:r}):e.flip===n&&e.invert===r||this.updateCurrentViewport({hflip:n,invert:h.invert?!r:r})),(e.width!==t||e.height!==o)&&this.currentImage){cornerstone.resize(this.element);const e=cornerstone.getViewport(this.element);if(!e)throw new Error("getViewport() is returns not a Viewport");this.setViewport(e)}e.image!==l&&this.setCornerstoneImage(l)}}},,function(e,t,o){"use strict";var n=o(132),r=o.n(n),s=o(0),a=o.n(s),i=o(2);class c extends s.Component{constructor(...e){super(...e),this.svgRef=Object(s.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return a.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const n=function(e,t){return t.map(([t,o])=>{const n=cornerstone.pixelToCanvas(e,{x:t,y:o});return[n.x,n.y]})}(e.element,t.polygon),i=r()([n],1),c=t===o,l=t.dataAttrs||{};return a.a.createElement(s.Fragment,{key:"polygon"+t.id},!0===this.props.border&&a.a.createElement("polygon",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,points:n.map(([e,t])=>`${e},${t}`).join(" ")})),a.a.createElement("polygon",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,points:n.map(([e,t])=>`${e},${t}`).join(" ")})),!0===this.props.border&&a.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:i[0],y:i[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),a.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:i[0],y:i[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}c.defaultProps={border:!0};Object(i.d)(c)`
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
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(18),i=o(63),c=o(64);function l(e,t){return t.map(([t,o])=>{const n=cornerstone.pixelToCanvas(e,{x:t,y:o});return n.x+","+n.y}).join(" ")}class h extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&("touch-only"!==this.props.device&&"stylus-only"!==this.props.device&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw)),"mouse-only"!==this.props.device&&this.element.addEventListener("touchstart",this.onTouchStartToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("touchstart",this.onTouchStartToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onTouchStartToStartDraw=e=>{if(("stylus-only"===this.props.device||"mouse-and-stylus"===this.props.device)&&"stylus"!==e.targetTouches[0].touchType)return;if(e.targetTouches.length>1)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(e=>({...e,polygon:[]}));if(1!==e.targetTouches.length)return;if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY,this.deactivateInitialEvents(),this.activateTouchDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.targetTouches[0].pageX,e.targetTouches[0].pageY);this.setState(e=>({...e,polygon:[[o,n]]}))},this.activateTouchDrawEvents=()=>{this.element&&(this.element.addEventListener("touchmove",this.onTouchMoveToDraw),this.element.addEventListener("touchend",this.onTouchEndToEndDraw),this.element.addEventListener("touchcancel",this.onTouchEndToEndDraw),window.addEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.deactivateTouchDrawEvents=()=>{this.element&&(this.element.removeEventListener("touchmove",this.onTouchMoveToDraw),this.element.removeEventListener("touchend",this.onTouchEndToEndDraw),this.element.removeEventListener("touchcancel",this.onTouchEndToEndDraw),window.removeEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.onTouchMoveToDraw=e=>{if(1!==e.targetTouches.length||1!==e.changedTouches.length)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(e=>({...e,polygon:[]}));if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.targetTouches[0].pageX-this.startX),Math.abs(e.targetTouches[0].pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.targetTouches[0].pageX,e.targetTouches[0].pageY);this.setState(e=>({...e,polygon:[...e.polygon,[o,n]]}))},this.onTouchEndToEndDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,e),this.setState(e=>({...e,polygon:[]}))},this.onKeyDownToCancelTouchDraw=e=>{"escape"===e.key.toLowerCase()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelTouchDraw())},this.cancelTouchDraw=()=>{this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,polygon:[]}))},this.onMouseDownToStartDraw=e=>{if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateMouseDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[[o,n]]}))},this.activateMouseDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.deactivateMouseDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.onMouseMoveToDraw=e=>{if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[...e.polygon,[o,n]]}))},this.onMouseUpToEndDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,e),this.setState(e=>({...e,polygon:[]}))},this.onMouseLeaveToCancelDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelMouseDraw()},this.onKeyDownToCancelMouseDraw=e=>{"escape"===e.key.toLowerCase()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelMouseDraw())},this.cancelMouseDraw=()=>{this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,polygon:[]}))},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&r.a.createElement("polyline",{points:l(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents())}}h.defaultProps={device:"all"};Object(s.d)(h)`
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
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(18),i=o(63);class c extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({hover:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({hover:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=e=>{this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
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
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2);class a extends n.Component{constructor(...e){super(...e),this.svgRef=Object(n.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return r.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const{cx:s,cy:a,r:i}=function(e,t){const{x:o,y:n}=cornerstone.pixelToCanvas(e,{x:t[0][0],y:t[0][1]}),{x:r,y:s}=cornerstone.pixelToCanvas(e,{x:t[1][0],y:t[1][1]});return{cx:o,cy:n,r:Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2))}}(e.element,t.polygon),c=t===o,l=t.dataAttrs||{};return r.a.createElement(n.Fragment,{key:"circle"+t.id},!0===this.props.border&&r.a.createElement("circle",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,cx:s,cy:a,r:i})),r.a.createElement("circle",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,cx:s,cy:a,r:i})),!0===this.props.border&&r.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:s,y:a}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),r.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:s,y:a}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}a.defaultProps={border:!0};Object(s.d)(a)`
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
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(18),i=o(70),c=o(64);class l extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&("touch-only"!==this.props.device&&"stylus-only"!==this.props.device&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw)),"mouse-only"!==this.props.device&&this.element.addEventListener("touchstart",this.onTouchStartToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("touchstart",this.onTouchStartToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onTouchStartToStartDraw=e=>{if(("stylus-only"===this.props.device||"mouse-and-stylus"===this.props.device)&&"stylus"!==e.targetTouches[0].touchType)return;if(e.targetTouches.length>1)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(e=>({...e,p1:null,p2:null}));if(1!==e.targetTouches.length)return;if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY,this.deactivateInitialEvents(),this.activateTouchDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.targetTouches[0].pageX,e.targetTouches[0].pageY);this.setState(e=>({...e,p1:[o,n]}))},this.activateTouchDrawEvents=()=>{this.element&&(this.element.addEventListener("touchmove",this.onTouchMoveToDraw),this.element.addEventListener("touchend",this.onTouchEndToEndDraw),this.element.addEventListener("touchcancel",this.onTouchEndToEndDraw),window.addEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.deactivateTouchDrawEvents=()=>{this.element&&(this.element.removeEventListener("touchmove",this.onTouchMoveToDraw),this.element.removeEventListener("touchend",this.onTouchEndToEndDraw),this.element.removeEventListener("touchcancel",this.onTouchEndToEndDraw),window.removeEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.onTouchMoveToDraw=e=>{if(1!==e.targetTouches.length||1!==e.changedTouches.length)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(e=>({...e,p1:null,p2:null}));if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.targetTouches[0].pageX-this.startX),Math.abs(e.targetTouches[0].pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.targetTouches[0].pageX,e.targetTouches[0].pageY);this.setState(e=>({...e,p2:[o,n]}))},this.onTouchEndToEndDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],e),this.setState(e=>({...e,p1:null,p2:null}))},this.onKeyDownToCancelTouchDraw=e=>{"escape"===e.key.toLowerCase()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelTouchDraw())},this.cancelTouchDraw=()=>{this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,p1:null,p2:null}))},this.onMouseDownToStartDraw=e=>{if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateMouseDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p1:[o,n]}))},this.activateMouseDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.deactivateMouseDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.onMouseMoveToDraw=e=>{if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p2:[o,n]}))},this.onMouseUpToEndDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],e),this.setState(e=>({...e,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelMouseDraw()},this.onKeyDownToCancelMouseDraw=e=>{"escape"===e.key.toLowerCase()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.cancelMouseDraw())},this.cancelMouseDraw=()=>{this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:e,y:t}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:o,y:n}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),s=Math.sqrt(Math.pow(Math.abs(o-e),2)+Math.pow(Math.abs(n-t),2));return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{cx:e,cy:t,r:s}),!1!==this.props.animateStroke&&r.a.createElement("circle",{cx:e,cy:t,r:s,"data-highlight":"highlight"}),r.a.createElement("line",{x1:e,y1:t,x2:o,y2:n}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents())}}l.defaultProps={device:"all"};Object(s.d)(l)`
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
`},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(18),i=o(70);class c extends n.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({hover:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({hover:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=e=>{this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,e,t);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
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
`},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(29)},function(e,t,o){"use strict";var n=o(0),r=o.n(n),s=o(2);Object(s.d)((function({x:e,y:t,label:o,onEnter:s,onLeave:a,onRemove:i,...c}){const l=Object(n.useCallback)(e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.preventDefault(),i()},[i]);return r.a.createElement("g",Object.assign({},c,{transform:`translate(${e} ${t})`,onMouseEnter:s,onMouseLeave:a,onClick:l}),r.a.createElement("circle",{cx:0,cy:0,r:4}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),o&&r.a.createElement("g",{transform:"translate(0 -25)"},r.a.createElement("text",null,o),r.a.createElement("text",null,o)))}))`
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
`;n.Component},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var n=o(41),r=o(0),s=o.n(r),a=o(14),i=o(2);const c=i.c`
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
`,l=i.c`
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
`;i.b`
  ${l}
`;o(222),o(215);var h=o(148);Object(h.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}});i.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${l}
`;var u=o(157),d=o(140),p=o.n(d);const v=s.a.createElement(p.a,null),m="LunitButton-label",g="LunitButton-icon",f="LunitButton-check";function w({label:e,icon:t,check:o=v,className:n="",selected:a,onChange:i,onClick:c,hideCheck:l,style:h={},disabled:d=!1,...p}){const w=Object(r.useCallback)(e=>{"boolean"===typeof a&&"function"===typeof i&&i(!a),"function"===typeof c&&c(e)},[a,i,c]);return s.a.createElement(u.a,Object.assign({},p,{className:n,"aria-selected":!0===a,style:h,onClick:w,disabled:d}),t&&s.a.createElement("span",{className:g},t),e&&s.a.createElement("span",{className:m},e),!0!==l&&!0===a&&s.a.createElement("span",{className:f},o))}Object(i.d)(w).attrs(e=>{if(!e.label||!e.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===e.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===e.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...e,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${g} {
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
`,Object(i.d)(w)`
  && {
    justify-content: ${({layout:e})=>e};
    padding-left: ${({layout:e})=>"left"===e?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${g} {
      font-size: 21px;
      margin-right: ${({label:e})=>e?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${f} {
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
`,i.c`
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
`;var b=o(141),E=o.n(b);const y="LunitPanel-header",x="LunitPanel-icon",k="LunitPanel-title",T="LunitPanel-content";const D=Object(i.d)(E.a)`
  transition: transform 0.3s ease-out;
`,M=i.c`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${y} {
    height: 25px;
    background-color: var(--panel-header-background-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 1px 14px 0 14px;

    .${x} {
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

  .${T} {
    padding: 14px;
  }
`,I=i.c`
  .${y} {
    .${x} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,L=Object(i.d)((function({className:e="",expanded:t,onChange:o,style:n={},title:a,icon:i,children:c,disabled:l}){const h=Object(r.useCallback)(()=>{"boolean"===typeof t&&"function"===typeof o&&o(!t)},[t,o]),u="function"===typeof c?c(!0===t):c,d=function(e,t){const o="function"===typeof e?e(!0===t):e;return o||("boolean"!==typeof t?null:t?s.a.createElement(D,null):s.a.createElement(D,{style:{transform:"rotate(180deg)"}}))}(i,t);return s.a.createElement("div",{className:e,"aria-expanded":!0===t,"aria-disabled":!0===l,style:n},s.a.createElement("div",{className:y},d&&s.a.createElement("span",{className:x,onClick:h},d),s.a.createElement("span",{className:k},"function"===typeof a?a(!0===t):a)),u&&s.a.createElement("div",{className:T},u))}))`
  ${({disabled:e})=>e?i.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:i.c`
        opacity: 1;
      `}
  ${M}
  ${({onChange:e})=>"function"===typeof e?I:""}
`;Object(i.d)((function({sessionId:e,defaultExpanded:t=!0,onChange:o,...n}){const a=Object(r.useMemo)(()=>`__sidebar_panel_${e}__`,[e]),[i,c]=Object(r.useState)(()=>{const e=localStorage.getItem(a);return"string"===typeof e?"open"===e:t}),l=Object(r.useCallback)(e=>{localStorage.setItem(a,e?"open":"close"),c(e),"function"===typeof o&&o(e)},[a,o]);return s.a.createElement(L,Object.assign({},n,{expanded:i,onChange:l}))}))`
  opacity: ${({disabled:e})=>e?.4:1};
  ${M}
  ${I}s
`,i.d.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,i.d.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(i.d)((function({children:e,className:t=""}){return s.a.createElement("div",{className:t},e)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,i.d.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const C=({gap:e=2})=>i.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${e}px;
  }
`,S=({gap:e=2})=>i.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${e}px;
  }
`;Object(i.d)((function({className:e="",children:t,style:o}){return s.a.createElement("div",{className:e,style:o},t)}))`
  ${({direction:e})=>"horizontal"===e?S:C};
`;var P=o(160);Object(i.d)(P.a).attrs({valueLabelDisplay:"on"})`
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
`;var j=o(143),O=o.n(j),R=o(80),W=o.n(R),V=o(225),z=o(224);function A({className:e,...t}){const{arrow:o,popper:n,...a}=$(t),[i,c]=s.a.useState(null);return s.a.createElement(V.a,Object.assign({classes:a,PopperProps:{className:n+" "+(e||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(i),element:i}}}}},t,{title:s.a.createElement(r.Fragment,null,t.title,s.a.createElement("span",{className:o,ref:c}))}))}const $=Object(z.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),F=(Object(i.d)(A).attrs({children:s.a.createElement(W.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(i.d)(A).attrs({children:s.a.createElement(W.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,i.e`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),Y=Object(i.d)(O.a)`
  animation: ${F} 1s infinite;
`;Object(i.d)(A).attrs({children:s.a.createElement(Y,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(i.d)(A).attrs({children:s.a.createElement(Y,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(78);r.Component;o(185),o(149);var X=o(156);Object(i.d)(X.a)`
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
`;var _=o(186);const N=i.c`
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
`;Object(h.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(i.d)(_.a)`
  ${N};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var U=o(223);o(217),o(218),o(219),o(220);Object(i.d)(U.a)`
  && {
    .MuiDialog-paper {
      ${N};

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
`;var B=o(184);o(147),o(146),o(145);i.c`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,i.c`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`,i.c`
  display: block;
  position: relative;
`,i.c`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`,i.c`
  position: absolute;
  left: 100vw;
  top: 0;
  width: 200px;
  height: 300px;
`,Object(i.d)(B.a)`
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
`;i.d.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var H=o(221);const K=Object(i.d)(H.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(i.d)(K)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(i.d)(K)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(i.d)(K)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(i.d)(K)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const Z=i.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`,q=(Object(i.d)((function({source:e,children:t,...o}){return s.a.createElement("div",o,s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},e),t)}))`
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

    animation: ${Z} 1s ease-out;
  }
`,i.b`
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
`);function G(){const e=Object(r.useMemo)(()=>new n.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:n.unloadImage}),[]);return s.a.createElement("div",null,s.a.createElement(q,null),s.a.createElement(n.InsightViewer,{width:700,height:600,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!0,resetTime:Date.now(),image:e,updateCornerstoneRenderData:()=>{}}))}Object(n.installWADOImageLoader)(),Object(a.render)(s.a.createElement(G,null),document.querySelector("#app"))}]));
//# sourceMappingURL=app.fff5b0ab842e58919b5d.js.map