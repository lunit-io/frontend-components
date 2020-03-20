!function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={0:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([168,1]),o()}(Array(31).concat([function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(0),n=o.n(r);const a=Object(r.createContext)({contentWindow:window});function i({stateRef:e}){return n.a.createElement(a.Consumer,null,t=>{e(t)})}},function(e,t,o){"use strict";async function r(e){return new Promise(t=>{setTimeout(t,e)})}o.d(t,"a",(function(){return n}));class n{constructor(e={}){this.options=e,this.loadImage=({imageId:e,options:t})=>"number"===typeof this.options.timeout?Promise.race([cornerstone.loadImage(e,t),r(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(e,t)}}},,,,,,,,,,function(e,t,o){"use strict";var r=o(84);o.o(r,"CornerstoneSingleImage")&&o.d(t,"CornerstoneSingleImage",(function(){return r.CornerstoneSingleImage})),o.o(r,"InsightViewer")&&o.d(t,"InsightViewer",(function(){return r.InsightViewer})),o.o(r,"globalStyle")&&o.d(t,"globalStyle",(function(){return r.globalStyle})),o.o(r,"installWADOImageLoader")&&o.d(t,"installWADOImageLoader",(function(){return r.installWADOImageLoader})),o.o(r,"unloadImage")&&o.d(t,"unloadImage",(function(){return r.unloadImage}));var n=o(85);o.d(t,"installWADOImageLoader",(function(){return n.a}));o(86);var a=o(87);o.d(t,"unloadImage",(function(){return a.a}));var i=o(114);o.d(t,"InsightViewer",(function(){return i.a}));o(89),o(118),o(113),o(90),o(91),o(116),o(117),o(92),o(93),o(94),o(95),o(97),o(98),o(99),o(57),o(100),o(115),o(101),o(102),o(103),o(47);var s=o(58);o.d(t,"CornerstoneSingleImage",(function(){return s.a}));o(104),o(32),o(105),o(106),o(107),o(108),o(109),o(119),o(110);var c=o(59);o.d(t,"globalStyle",(function(){return c.a}));o(111),o(31)},,,,,function(e,t,o){"use strict";function r(e){const t=e.detail;if(t&&"string"===typeof t.url&&"string"===typeof t.imageId&&"number"===typeof t.loaded&&"number"===typeof t.total&&"number"===typeof t.percentComplete)return t}o.d(t,"a",(function(){return r}))},,,,,,,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(0);function n(e){const[t,o]=Object(r.useState)(null);return Object(r.useEffect)(()=>{if(e){const t=e.progress.subscribe(e=>{o(e<1?e:null)});return()=>{t.unsubscribe()}}o(null)},[e]),t}},function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(26),n=o(32),a=o(47),i=o(69);const s=new n.a;class c{constructor(e,t={}){this.imageId=e,this.options=t,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"===typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(e=>e()),this._destoyed=!0},this.onProgress=e=>{const t=Object(a.a)(e);t&&t.imageId===this.imageId&&this._progressSubject.next(Math.min(t.loaded/t.total,.99))},this.loadImage=async e=>{try{const t=await this._loader.loadImage({imageId:e,options:{loader:Object(i.a)(e=>this._cancel.push(e))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(t),this._progressSubject.next(1))}catch(t){this._destoyed||(console.warn(`It will retry loadImage(${e}):`,t),this.loadImage(e))}},this._imageSubject=new r.a(null),this._progressSubject=new r.a(0),this._loader=t.loader||s,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(e)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(2);const n=r.c`
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
`,a=r.c`
  :root {
    ${n};
  }
`},function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(2);const n=r.e`
  to {
    stroke-dashoffset: 0;
  }
`,a=r.c`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${n} 10s linear infinite;
`},,,,,,,,,function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));const r=e=>(t,o,r={},n={})=>{const{cornerstone:a}=cornerstoneWADOImageLoader.external,i=new XMLHttpRequest;return new Promise((s,c)=>{i.open("get",t,!0),i.responseType="arraybuffer",Object.keys(r).forEach(e=>{i.setRequestHeader(e,r[e])}),n.deferred={resolve:s,reject:c},n.url=t,n.imageId=o,"function"===typeof e&&e((function(){try{i.abort()}catch(e){}})),i.onreadystatechange=()=>{4===i.readyState&&200===i.status&&s(i.response)},i.onloadstart=()=>{const e={url:t,imageId:o};a&&a.triggerEvent(a.events,"cornerstoneimageloadstart",e)},i.onloadend=()=>{const e={url:t,imageId:o};a.triggerEvent(a.events,"cornerstoneimageloadend",e)},i.onprogress=({loaded:e,lengthComputable:r,total:n})=>{let i;r&&(i=Math.round(e/n*100));const s={url:t,imageId:o,loaded:e,total:n,percentComplete:i};a.triggerEvent(a.events,"cornerstoneimageloadprogress",s)},i.send()})}},,,,,,,,,,,,,,,function(e,t){},function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));let r=!1;function n(){r||(r=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone,cornerstoneWADOImageLoader.webWorkerManager.initialize({maxWebWorkers:navigator.hardwareConcurrency||4,startWebWorkersOnDemand:!1,taskConfiguration:{decodeTask:{initializeCodecsOnStartup:!0}}}))}},function(e,t,o){"use strict"},function(e,t,o){"use strict";function r(e){function t(e){var t,o,r;/^wadouri:/.test(e)&&(null===(t=cornerstoneWADOImageLoader)||void 0===t||null===(o=t.wadouri)||void 0===o||null===(r=o.dataSetCacheManager)||void 0===r||r.unload(e))}Array.isArray(e)?e.forEach(e=>t(e)):"string"===typeof e&&t(e)}o.d(t,"a",(function(){return r}))},,function(e,t,o){"use strict";var r=o(120),n=o.n(r),a=o(0),i=o.n(a),s=o(2);class c extends a.Component{constructor(...e){super(...e),this.svgRef=Object(a.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return i.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const r=function(e,t){return t.map(([t,o])=>{const r=cornerstone.pixelToCanvas(e,{x:t,y:o});return[r.x,r.y]})}(e.element,t.polygon),s=n()([r],1),c=t===o,l=t.dataAttrs||{};return i.a.createElement(a.Fragment,{key:"polygon"+t.id},!0===this.props.border&&i.a.createElement("polygon",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,points:r.map(([e,t])=>`${e},${t}`).join(" ")})),i.a.createElement("polygon",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,points:r.map(([e,t])=>`${e},${t}`).join(" ")})),!0===this.props.border&&i.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:s[0],y:s[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),i.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:s[0],y:s[1]}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}c.defaultProps={border:!0};Object(s.d)(c)`
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
`},function(e,t,o){"use strict";var r=o(2);r.d.div`
  background-color: #000000;
  position: relative;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
`,r.d.div`
  position: absolute;
  left: 5px;
  top: 5px;
`,r.d.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
`,r.d.div`
  position: absolute;
  right: 5px;
  top: 5px;
`,r.d.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`},function(e,t,o){"use strict";o(139);var r=o(0),n=o(2);o(57);Object(r.createContext)({inProgress:!1,setProgress:()=>{},unsetProgress:()=>{}});n.d.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`},function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(2);class i extends r.Component{constructor(...e){super(...e),this.svgRef=Object(r.createRef)()}render(){const{cornerstoneRenderData:e,contours:t,focusedContour:o}=this.props;return n.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},t.length>0&&e&&e.element&&t.map(t=>{const{cx:a,cy:i,r:s}=function(e,t){const{x:o,y:r}=cornerstone.pixelToCanvas(e,{x:t[0][0],y:t[0][1]}),{x:n,y:a}=cornerstone.pixelToCanvas(e,{x:t[1][0],y:t[1][1]});return{cx:o,cy:r,r:Math.sqrt(Math.pow(Math.abs(n-o),2)+Math.pow(Math.abs(a-r),2))}}(e.element,t.polygon),c=t===o,l=t.dataAttrs||{};return n.a.createElement(r.Fragment,{key:"circle"+t.id},!0===this.props.border&&n.a.createElement("circle",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,cx:a,cy:i,r:s})),n.a.createElement("circle",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,cx:a,cy:i,r:s})),!0===this.props.border&&n.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:a,y:i}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id),n.a.createElement("text",Object.assign({},l,{"data-id":t.id,"data-focused":c||void 0,fontSize:14*Math.max(1,e.viewport.scale),x:a,y:i}),t.label?"function"===typeof t.label?t.label(t):t.label:t.id))}))}}i.defaultProps={border:!0};Object(a.d)(i)`
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
`},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0);o(2).d.div`
  display: inline-block;
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`},function(e,t,o){"use strict";var r=o(174),n=(o(171),o(142),o(145),o(141),o(144),o(146),o(25),o(0),o(2));Object(n.d)(r.a)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
`},,function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";o(0),o(173),o(78)},function(e,t,o){"use strict";var r=o(0);o(58);const n=Object(r.createContext)();n.Consumer},function(e,t,o){"use strict";o(26),o(78);var r=o(32);o(47),o(69);new r.a},function(e,t,o){"use strict"},function(e,t,o){"use strict";o(26)},function(e,t,o){"use strict";o(26)},function(e,t,o){"use strict";o(26),o(78);new(o(32).a)},function(e,t,o){"use strict";o(26)},function(e,t,o){"use strict"},function(e,t,o){"use strict";o(0);var r=o(2),n=o(59);r.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${n.a}
`},,function(e,t,o){"use strict";var r=o(0);r.Component;o(2).d.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`},function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(0),n=o.n(r),a=o(31);class i extends r.Component{constructor(...e){super(...e),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=e=>{this.element=e,e&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=e=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let t=this.getDefaultViewport(e,this.element);if(!t)throw new Error("defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.");if(Array.isArray(this.props.defaultViewportTransforms)){const e=t.scale;for(const o of this.props.defaultViewportTransforms){const r=o({element:this.element,currentViewport:t,minScale:e,maxScale:3});t={...t,...r}}}t={...t,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,e,t),this.setImage(e),this.setViewport(t),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=e=>{if(e)if(e.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(e);else{if(!this.currentViewport)throw new Error("\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!");cornerstone.displayImage(this.element,e,this.currentViewport)}},this.onImageRenderered=e=>{const t=e.detail;t&&t.canvasContext&&t.element&&t.enabledElement&&t.image&&"number"===typeof t.renderTimeInMs&&t.viewport?(this.currentViewport=t.viewport,this.props.updateCornerstoneRenderData(t)):console.error("CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???",t)},this.startPanInteraction=e=>{this.teardownPanInteraction&&this.teardownPanInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownPanInteraction=function({element:e,getCurrentViewport:t,onMove:o,onEnd:r,contentWindow:n}){let a,i,s,c;function l(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const r=t();r&&(e.removeEventListener("mousedown",l),a=o.pageX,i=o.pageY,s=r.translation.x,c=r.translation.y,n.addEventListener("mousemove",d),n.addEventListener("mouseup",u),e.addEventListener("mouseleave",u))}function d(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const r=t();if(!r)return;const n=(e.pageX-a)/r.scale,l=(e.pageY-i)/r.scale;o({x:s+n,y:c+l})}function u(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),n.removeEventListener("mousemove",d),n.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.addEventListener("mousedown",l),r())}return e.addEventListener("mousedown",l),()=>{e.removeEventListener("mousedown",l),n.removeEventListener("mousemove",d),n.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u)}}({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({translation:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=e=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownAdjustInteraction=function({element:e,getCurrentViewport:t,onMove:o,onEnd:r,contentWindow:n}){let a,i,s,c;function l(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const r=t();r&&(e.removeEventListener("mousedown",this.onAdjustStart),a=o.pageX,i=o.pageY,s=r.voi.windowCenter,c=r.voi.windowWidth,n.addEventListener("mousemove",d),n.addEventListener("mouseup",u),e.addEventListener("mouseleave",u))}function d(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const t=e.pageX-a,r=e.pageY-i;o({windowWidth:Math.max(c+t,1),windowCenter:Math.max(s+r,1)})}function u(t){0===t.button&&(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),n.removeEventListener("mousemove",d),n.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.addEventListener("mousedown",l),r())}return e.addEventListener("mousedown",l),()=>{e.removeEventListener("mousedown",l),n.removeEventListener("mousemove",d),n.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u)}}({element:t,getCurrentViewport:()=>this.currentViewport,onMove:e=>this.updateCurrentViewport({voi:e}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=e=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const t=e instanceof this.contentWindow.HTMLElement?e:!0===e?this.element:null;t&&(this.teardownZoomInteraction=function({element:e,getMinMaxScale:t,getCurrentViewport:o,onZoom:r,contentWindow:n}){function a(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation();const[i,s]=t(),c=o();if(!c)return;const l=a.deltaY>0?1:-1,d=Math.max(i,Math.min(s,c.scale-.03*l));if(c.scale===d)return;const{top:u,left:p,width:h,height:f}=e.getBoundingClientRect(),m=a.pageX-n.scrollX-(p+h/2),v=a.pageY-n.scrollY-(u+f/2),g=(1-d/c.scale)*m,b=(1-d/c.scale)*v;r({translation:{x:c.translation.x+g/d,y:c.translation.y+b/d},scale:d})}return e.addEventListener("wheel",a),()=>{e.removeEventListener("wheel",a)}}({element:t,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:e=>this.updateCurrentViewport(e),contentWindow:this.contentWindow}))},this.getDefaultViewport=(e,t)=>e&&t?cornerstone.getDefaultViewportForImage(t,e):null,this.getMinScale=()=>{const e=this.getDefaultViewport(this.currentImage,this.element);if(!e)throw new Error("viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4");return e.scale},this.getMaxScale=()=>3,this.updateViewport=e=>{this.currentViewport&&this.updateCurrentViewport(e)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=e=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=e.image.subscribe(this.subscribeImage)},this.setImage=e=>{this.currentImage=e},this.setViewport=e=>{this.currentViewport=e,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=e=>{if(!this.currentViewport)throw new Error("viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4");const t="function"===typeof e?e(this.currentViewport):e;this.currentViewport={...this.currentViewport,...t},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(a.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),n.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(e){const{width:t,height:o,flip:r,invert:n,pan:a,adjust:i,zoom:s,resetTime:c,image:l}=this.props,d=this.getDefaultViewport(this.currentImage,this.element);if(e.pan!==a&&this.startPanInteraction(a),e.adjust!==i&&this.startAdjustInteraction(i),e.zoom!==s&&this.startZoomInteraction(s),d&&(e.resetTime!==c?this.updateCurrentViewport({...d,hflip:r,invert:d.invert?!n:n}):e.flip===r&&e.invert===n||this.updateCurrentViewport({hflip:r,invert:d.invert?!n:n})),(e.width!==t||e.height!==o)&&this.currentImage){cornerstone.resize(this.element);const e=cornerstone.getViewport(this.element);if(!e)throw new Error("getViewport() is returns not a Viewport");this.setViewport(e)}e.image!==l&&this.setCornerstoneImage(l)}}},function(e,t,o){"use strict";o(0)},function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(2);Object(a.d)((function({x:e,y:t,label:o,onEnter:a,onLeave:i,onRemove:s,...c}){const l=Object(r.useCallback)(e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.preventDefault(),s()},[s]);return n.a.createElement("g",Object.assign({},c,{transform:`translate(${e} ${t})`,onMouseEnter:a,onMouseLeave:i,onClick:l}),n.a.createElement("circle",{cx:0,cy:0,r:4}),n.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),n.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),o&&n.a.createElement("g",{transform:"translate(0 -25)"},n.a.createElement("text",null,o),n.a.createElement("text",null,o)))}))`
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
`;r.Component},function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(2),i=o(31);var s=o(60);class c extends r.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:r,y:n}=cornerstone.pageToPixel(o,e,t);var a,i;this.focused=(a=this.props.contours,i=[r,n],a.find(e=>{const[[t,o],[r,n]]=e.polygon,[a,s]=i,c=Math.sqrt(Math.pow(Math.abs(r-t),2)+Math.pow(Math.abs(n-o),2));return Math.sqrt(Math.pow(Math.abs(a-t),2)+Math.pow(Math.abs(s-o),2))<=c})||null),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:r}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p1:[o,r]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:r}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,p2:[o,r]}))},this.onMouseUpToEndDraw=e=>{e.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],e),this.setState(e=>({...e,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=e=>{e.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=e=>{"escape"===e.key.toLowerCase()&&(e.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),n.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:e,y:t}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:o,y:r}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),a=Math.sqrt(Math.pow(Math.abs(o-e),2)+Math.pow(Math.abs(r-t),2));return n.a.createElement(n.a.Fragment,null,n.a.createElement("circle",{cx:e,cy:t,r:a}),!1!==this.props.animateStroke&&n.a.createElement("circle",{cx:e,cy:t,r:a,"data-highlight":"highlight"}),n.a.createElement("line",{x1:e,y1:t,x2:o,y2:r}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(a.d)(c)`
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
    ${s.a}
  }

  > line {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
  }
`},function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(2),i=o(31),s=o(124),c=o.n(s);var l=o(60);function d(e,t){return t.map(([t,o])=>{const r=cornerstone.pixelToCanvas(e,{x:t,y:o});return r.x+","+r.y}).join(" ")}class u extends r.Component{constructor(e){super(e),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=e=>{e&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=e,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=e},this.getElement=({draw:e})=>e instanceof this.contentWindow.HTMLElement?e:this.svg,this.canActivate=({draw:e})=>e instanceof this.contentWindow.HTMLElement||!0===e,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=e=>{e.stopPropagation(),this.findFocus(e.pageX,e.pageY)},this.findFocus=(e,t)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:r,y:n}=cornerstone.pageToPixel(o,e,t);var a,i;this.focused=(a=this.props.contours,i=[r,n],a.find(e=>c()(i,e.polygon))||null),this.props.onFocus(this.focused)},this.onMouseClickToRemove=e=>{e.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=e.pageX,this.startY=e.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const t=this.props.cornerstoneRenderData.element,{x:o,y:r}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[[o,r]]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=e=>{if(e.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(e.pageX-this.startX),Math.abs(e.pageY-this.startY))>20&&(this.preventClickEvent=!0);const t=this.props.cornerstoneRenderData.element,{x:o,y:r}=cornerstone.pageToPixel(t,e.pageX,e.pageY);this.setState(e=>({...e,polygon:[...e.polygon,[o,r]]}))},this.onMouseUpToEndDraw=e=>{e.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,e),this.setState(e=>({...e,polygon:[]}))},this.onMouseLeaveToCancelDraw=e=>{e.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=e=>{"escape"===e.key.toLowerCase()&&(e.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(e=>({...e,polygon:[]}))},this.state={polygon:[]}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{stateRef:({contentWindow:e})=>this.contentWindow=e}),n.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("polyline",{points:d(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&n.a.createElement("polyline",{points:d(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(e){e.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(a.d)(u)`
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
    ${l.a}
  }
`},function(e,t,o){"use strict";o(29)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var r=o(42),n=o(0),a=o.n(n),i=o(14),s=o(2);const c=s.c`
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
`,l=s.c`
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
`;s.b`
  ${l}
`;o(206),o(199);var d=o(136);Object(d.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}});s.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${l}
`;var u=o(143),p=o(128),h=o.n(p);const f=a.a.createElement(h.a,null),m="LunitButton-label",v="LunitButton-icon",g="LunitButton-check";function b({label:e,icon:t,check:o=f,className:r="",selected:i,onChange:s,onClick:c,hideCheck:l,style:d={},disabled:p=!1,...h}){const b=Object(n.useCallback)(e=>{"boolean"===typeof i&&"function"===typeof s&&s(!i),"function"===typeof c&&c(e)},[i,s,c]);return a.a.createElement(u.a,Object.assign({},h,{className:r,"aria-selected":!0===i,style:d,onClick:b,disabled:p}),t&&a.a.createElement("span",{className:v},t),e&&a.a.createElement("span",{className:m},e),!0!==l&&!0===i&&a.a.createElement("span",{className:g},o))}Object(s.d)(b).attrs(e=>{if(!e.label||!e.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===e.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===e.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...e,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${v} {
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
`,Object(s.d)(b)`
  && {
    justify-content: ${({layout:e})=>e};
    padding-left: ${({layout:e})=>"left"===e?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${v} {
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
`,s.c`
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
`;var w=o(129),x=o.n(w);const E="LunitPanel-header",k="LunitPanel-icon",y="LunitPanel-title",M="LunitPanel-content";const I=Object(s.d)(x.a)`
  transition: transform 0.3s ease-out;
`,D=s.c`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${E} {
    height: 25px;
    background-color: var(--panel-header-background-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 1px 14px 0 14px;

    .${k} {
      color: var(--panel-icon-color);
      margin-left: -8px;
      margin-right: 6px;
      transform: translateY(2px);
    }

    .${y} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${M} {
    padding: 14px;
  }
`,C=s.c`
  .${E} {
    .${k} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,j=Object(s.d)((function({className:e="",expanded:t,onChange:o,style:r={},title:i,icon:s,children:c,disabled:l}){const d=Object(n.useCallback)(()=>{"boolean"===typeof t&&"function"===typeof o&&o(!t)},[t,o]),u="function"===typeof c?c(!0===t):c,p=function(e,t){const o="function"===typeof e?e(!0===t):e;return o||("boolean"!==typeof t?null:t?a.a.createElement(I,null):a.a.createElement(I,{style:{transform:"rotate(180deg)"}}))}(s,t);return a.a.createElement("div",{className:e,"aria-expanded":!0===t,"aria-disabled":!0===l,style:r},a.a.createElement("div",{className:E},p&&a.a.createElement("span",{className:k,onClick:d},p),a.a.createElement("span",{className:y},"function"===typeof i?i(!0===t):i)),u&&a.a.createElement("div",{className:M},u))}))`
  ${({disabled:e})=>e?s.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:s.c`
        opacity: 1;
      `}
  ${D}
  ${({onChange:e})=>"function"===typeof e?C:""}
`;Object(s.d)((function({sessionId:e,defaultExpanded:t=!0,onChange:o,...r}){const i=Object(n.useMemo)(()=>`__sidebar_panel_${e}__`,[e]),[s,c]=Object(n.useState)(()=>{const e=localStorage.getItem(i);return"string"===typeof e?"open"===e:t}),l=Object(n.useCallback)(e=>{localStorage.setItem(i,e?"open":"close"),c(e),"function"===typeof o&&o(e)},[i,o]);return a.a.createElement(j,Object.assign({},r,{expanded:s,onChange:l}))}))`
  opacity: ${({disabled:e})=>e?.4:1};
  ${D}
  ${C}s
`,s.d.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,s.d.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(s.d)((function({children:e,className:t=""}){return a.a.createElement("div",{className:t},e)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,s.d.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const L=({gap:e=2})=>s.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${e}px;
  }
`,S=({gap:e=2})=>s.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${e}px;
  }
`;Object(s.d)((function({className:e="",children:t,style:o}){return a.a.createElement("div",{className:e,style:o},t)}))`
  ${({direction:e})=>"horizontal"===e?S:L};
`;var O=o(146);Object(s.d)(O.a).attrs({valueLabelDisplay:"on"})`
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
`;var T=o(131),P=o.n(T),R=o(74),W=o.n(R),V=o(209),z=o(208);function $({className:e,...t}){const{arrow:o,popper:r,...i}=A(t),[s,c]=a.a.useState(null);return a.a.createElement(V.a,Object.assign({classes:i,PopperProps:{className:r+" "+(e||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(s),element:s}}}}},t,{title:a.a.createElement(n.Fragment,null,t.title,a.a.createElement("span",{className:o,ref:c}))}))}const A=Object(z.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),_=(Object(s.d)($).attrs({children:a.a.createElement(W.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(s.d)($).attrs({children:a.a.createElement(W.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,s.e`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),N=Object(s.d)(P.a)`
  animation: ${_} 1s infinite;
`;Object(s.d)($).attrs({children:a.a.createElement(N,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(s.d)($).attrs({children:a.a.createElement(N,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(72);n.Component;o(171),o(137);var F=o(142);Object(s.d)(F.a)`
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
`;var Y=o(172);const X=s.c`
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
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(s.d)(Y.a)`
  ${X};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var B=o(207);o(201),o(202),o(203),o(204);Object(s.d)(B.a)`
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
`;var U=o(170);o(135),o(134),o(133);s.c`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,s.c`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`,s.c`
  display: block;
  position: relative;
`,s.c`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`,s.c`
  position: absolute;
  left: 100vw;
  top: 0;
  width: 200px;
  height: 300px;
`,Object(s.d)(U.a)`
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
`;s.d.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var Z=o(205);const H=Object(s.d)(Z.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(s.d)(H)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(s.d)(H)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(s.d)(H)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(s.d)(H)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const q=s.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`,K=(Object(s.d)((function({source:e,children:t,...o}){return a.a.createElement("div",o,a.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},e),t)}))`
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
`,s.b`
  ${l}
  ${r.globalStyle}
  
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
`);Object(r.installWADOImageLoader)(),Object(i.render)(a.a.createElement((function(){const e=Object(n.useMemo)(()=>new r.CornerstoneSingleImage("wadouri:https://lunit-frontend-fixtures.netlify.com/dcm-files/series/CT000010.dcm",{unload:r.unloadImage}),[]);return a.a.createElement("div",null,a.a.createElement(K,null),a.a.createElement(r.InsightViewer,{width:700,height:600,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!0,resetTime:Date.now(),image:e,updateCornerstoneRenderData:()=>{}}))}),null),document.querySelector("#app"))}]));
//# sourceMappingURL=app.9c826a2192a515230fdb.js.map