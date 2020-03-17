(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FrameConsumer}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const FrameContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({contentWindow:window});function FrameConsumer({stateRef:stateRef}){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FrameContext.Consumer,null,state=>{stateRef(state)})}},129:function(module,__webpack_exports__,__webpack_require__){"use strict";async function delay(ms){return new Promise(resolve=>{setTimeout(resolve,ms)})}__webpack_require__.d(__webpack_exports__,"a",(function(){return ParallelImageLoader}));class ParallelImageLoader{constructor(options={}){this.options=options,this.loadImage=({imageId:imageId,options:options})=>"number"==typeof this.options.timeout?Promise.race([cornerstone.loadImage(imageId,options),delay(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(imageId,options)}}},13:function(module,__webpack_exports__,__webpack_require__){"use strict";var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(451);__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"CornerstoneSingleImage")&&__webpack_require__.d(__webpack_exports__,"CornerstoneSingleImage",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.CornerstoneSingleImage})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"InsightViewer")&&__webpack_require__.d(__webpack_exports__,"InsightViewer",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.InsightViewer})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"InsightViewerContainer")&&__webpack_require__.d(__webpack_exports__,"InsightViewerContainer",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.InsightViewerContainer})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"installWADOImageLoader")&&__webpack_require__.d(__webpack_exports__,"installWADOImageLoader",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.installWADOImageLoader})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"unloadWADOImage")&&__webpack_require__.d(__webpack_exports__,"unloadWADOImage",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.unloadWADOImage})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"useInsightViewerSync")&&__webpack_require__.d(__webpack_exports__,"useInsightViewerSync",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.useInsightViewerSync})),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__,"withInsightViewerStorybookGlobalStyle")&&__webpack_require__.d(__webpack_exports__,"withInsightViewerStorybookGlobalStyle",(function(){return _types__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle}));var _loaders_installWADOImageLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(452);__webpack_require__.d(__webpack_exports__,"installWADOImageLoader",(function(){return _loaders_installWADOImageLoader__WEBPACK_IMPORTED_MODULE_1__.a}));__webpack_require__(453);var _loaders_unloadImage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(454);__webpack_require__.d(__webpack_exports__,"unloadWADOImage",(function(){return _loaders_unloadImage__WEBPACK_IMPORTED_MODULE_3__.a}));var _components_InsightViewer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(488);__webpack_require__.d(__webpack_exports__,"InsightViewer",(function(){return _components_InsightViewer__WEBPACK_IMPORTED_MODULE_4__.a}));__webpack_require__(455),__webpack_require__(492),__webpack_require__(489);var _components_InsightViewerContainer__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(456);__webpack_require__.d(__webpack_exports__,"InsightViewerContainer",(function(){return _components_InsightViewerContainer__WEBPACK_IMPORTED_MODULE_8__.a}));__webpack_require__(457),__webpack_require__(491),__webpack_require__(490),__webpack_require__(458),__webpack_require__(459),__webpack_require__(460),__webpack_require__(461),__webpack_require__(462),__webpack_require__(463),__webpack_require__(464),__webpack_require__(221);var _hooks_useInsightViewerSync__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(465);__webpack_require__.d(__webpack_exports__,"useInsightViewerSync",(function(){return _hooks_useInsightViewerSync__WEBPACK_IMPORTED_MODULE_20__.a}));__webpack_require__(487),__webpack_require__(466),__webpack_require__(467),__webpack_require__(468),__webpack_require__(130);var _image_CornerstoneSingleImage__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(222);__webpack_require__.d(__webpack_exports__,"CornerstoneSingleImage",(function(){return _image_CornerstoneSingleImage__WEBPACK_IMPORTED_MODULE_26__.a}));__webpack_require__(469),__webpack_require__(129),__webpack_require__(470),__webpack_require__(471),__webpack_require__(223);var _theme_withInsightViewerStorybookGlobalStyle__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__(472);__webpack_require__.d(__webpack_exports__,"withInsightViewerStorybookGlobalStyle",(function(){return _theme_withInsightViewerStorybookGlobalStyle__WEBPACK_IMPORTED_MODULE_32__.a}));__webpack_require__(105)},130:function(module,__webpack_exports__,__webpack_require__){"use strict";function getProgressEventDetail(event){const detail=event.detail;if(detail&&"string"==typeof detail.url&&"string"==typeof detail.imageId&&"number"==typeof detail.loaded&&"number"==typeof detail.total&&"number"==typeof detail.percentComplete)return detail}__webpack_require__.d(__webpack_exports__,"a",(function(){return getProgressEventDetail}))},137:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(95),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);const Button=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__.a).attrs(props=>({variant:"outlined",...props}))`
  && {
    text-transform: none;
    height: 40px;
    border-radius: 3px;
    font-size: 14px;
    letter-spacing: 0.6px;
    line-height: 1.15;

    color: #fff;
    background-color: #02bfd3;

    &:hover {
      color: #fff;
      background-color: #0294a8;
    }

    &.Mui-disabled {
      opacity: 0.5;
    }
  }
`},138:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);function useDialog(dialogTemplate){const[dialogProps,setDialogProps]=Object(react.useState)(null);return[Object(react.useCallback)(async props=>new Promise(resolve=>{setDialogProps({...props,closeDialog:returnValue=>{resolve(returnValue),setDialogProps(null)}})}),[]),Object(react.useMemo)(()=>dialogProps?dialogTemplate(dialogProps):null,[dialogProps,dialogTemplate])]}__webpack_require__.d(__webpack_exports__,"a",(function(){return useDialog}))},14:function(module,__webpack_exports__,__webpack_require__){"use strict";var createSvgIcon=__webpack_require__(90),createSvgIcon_default=__webpack_require__.n(createSvgIcon),react=__webpack_require__(0),react_default=__webpack_require__.n(react);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var _ref=react_default.a.createElement("g",null,react_default.a.createElement("path",{fillRule:"evenodd",d:"M10.294,16.879C9.882,16.879 9.507,17.295 9.507,17.808L9.507,18.738C9.507,19.253 9.882,19.668 10.294,19.668C10.704,19.668 11.077,19.253 11.077,18.738L11.077,17.808C11.077,17.295 10.704,16.878 10.294,16.878L10.294,16.879ZM16.494,15.518L17.145,16.168C17.507,16.531 17.565,17.061 17.275,17.351C16.986,17.64 16.457,17.582 16.094,17.218C15.993,17.119 15.542,16.668 15.442,16.568C15.079,16.205 15.018,15.675 15.309,15.385C15.601,15.095 16.131,15.154 16.494,15.518ZM4.1,15.515C4.461,15.153 4.993,15.092 5.283,15.383C5.572,15.675 5.513,16.204 5.15,16.568L4.499,17.218C4.138,17.581 3.607,17.638 3.317,17.348C3.026,17.058 3.086,16.531 3.449,16.167L4.1,15.515ZM13.917,13.992C12.993,14.915 11.715,15.484 10.297,15.484C10.292,15.484 10.287,15.484 10.282,15.484C7.486,15.484 5.185,13.183 5.185,10.387C5.185,10.382 5.185,10.377 5.185,10.372C5.185,10.366 5.185,10.36 5.185,10.354C5.185,7.558 7.486,5.257 10.282,5.257C10.287,5.257 10.292,5.257 10.297,5.257C10.302,5.257 10.306,5.257 10.311,5.257C13.108,5.257 15.41,7.559 15.41,10.356C15.41,10.361 15.41,10.367 15.41,10.372C15.414,11.729 14.876,13.033 13.917,13.992ZM10.03,14.09C10.022,14.09 10.014,14.09 10.006,14.09C7.979,14.09 6.312,12.423 6.312,10.396C6.312,10.388 6.312,10.38 6.312,10.372C6.312,10.363 6.312,10.354 6.312,10.345C6.312,8.319 7.979,6.652 10.005,6.652C10.013,6.652 10.022,6.652 10.03,6.652L10.03,14.09ZM2.859,9.517C3.372,9.517 3.789,9.893 3.789,10.303L3.79,10.303C3.79,10.713 3.373,11.087 2.86,11.087L1.93,11.087C1.417,11.087 1,10.713 1,10.303C1,9.893 1.417,9.517 1.93,9.517L2.859,9.517ZM18.664,9.517C19.177,9.517 19.594,9.893 19.594,10.303C19.594,10.714 19.178,11.087 18.664,11.087L17.754,11.087C17.24,11.087 16.824,10.713 16.824,10.303C16.824,9.892 17.24,9.517 17.753,9.517L18.664,9.517ZM4.099,5.225C4,5.125 3.549,4.675 3.447,4.575C3.087,4.211 3.026,3.681 3.317,3.391C3.607,3.1 4.138,3.16 4.5,3.524C4.601,3.622 5.05,4.074 5.15,4.174C5.512,4.537 5.572,5.068 5.282,5.358C4.991,5.648 4.462,5.588 4.1,5.225L4.099,5.225ZM16.495,5.225L17.145,4.575C17.508,4.211 17.567,3.682 17.276,3.391C16.986,3.101 16.456,3.161 16.095,3.524C15.993,3.624 15.543,4.074 15.443,4.174C15.08,4.538 15.021,5.068 15.311,5.358C15.601,5.648 16.133,5.588 16.495,5.225ZM10.294,3.863C10.704,3.863 11.077,3.448 11.077,2.933L11.077,2.003C11.077,1.489 10.704,1.073 10.294,1.073C9.882,1.073 9.507,1.489 9.507,2.003L9.507,2.933C9.507,3.448 9.882,3.863 10.294,3.863Z"}));const SvgIcoAdjust=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,_ref),ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoAdjust,_extends({svgRef:ref},props)));__webpack_require__.p;function ico_circle_filled_extends(){return(ico_circle_filled_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_circle_filled_ref=react_default.a.createElement("path",{d:"M12,18c-3.292,0 -6,-2.708 -6,-6c0,-3.292 2.708,-6 6,-6c3.292,0 6,2.708 6,6c-0.003,3.29 -2.71,5.997 -6,6Z"});const SvgIcoCircleFilled=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_circle_filled_extends({width:24,height:24,viewBox:"0 0 24 24",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_circle_filled_ref),ico_circle_filled_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoCircleFilled,ico_circle_filled_extends({svgRef:ref},props)));__webpack_require__.p;function ico_circle_extends(){return(ico_circle_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_circle_ref=react_default.a.createElement("g",{transform:"translate(-1882 -1892)"},react_default.a.createElement("path",{d:"M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z",transform:"translate(1882 1898)"}));const SvgIcoCircle=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_circle_extends({width:24,height:24,viewBox:"0 0 24 24",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_circle_ref),ico_circle_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoCircle,ico_circle_extends({svgRef:ref},props)));__webpack_require__.p;function ico_contour_extends(){return(ico_contour_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_contour_ref=react_default.a.createElement("g",{transform:"translate(-1873.422 -1538.422)"},react_default.a.createElement("path",{d:"M6,12a6,6,0,1,1,6-6A6.007,6.007,0,0,1,6,12ZM6,3.272A2.728,2.728,0,1,0,8.728,6,2.731,2.731,0,0,0,6,3.272Z",transform:"translate(1879.422 1544.422)"}),react_default.a.createElement("path",{d:"M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,12,24ZM12,2.286A9.714,9.714,0,1,0,21.714,12,9.726,9.726,0,0,0,12,2.286Z",transform:"translate(1873.422 1538.422)"}));const SvgIcoContour=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_contour_extends({width:24,height:24,viewBox:"0 0 24 24",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_contour_ref),ico_contour_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoContour,ico_contour_extends({svgRef:ref},props)));__webpack_require__.p;function ico_flip_extends(){return(ico_flip_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_flip_ref=react_default.a.createElement("g",{fillRule:"evenodd"},react_default.a.createElement("path",{d:"M9.117 8.701h1.156V6.388H9.117v2.313zm0 3.471h1.156V9.859H9.117v2.313zm0 3.47h1.156v-2.313H9.117v2.313zm0 3.471h1.156v-2.314H9.117v2.314zM12.67 4.442l2.723 1.092V2.67l-.73.473C12.828.518 9.223-.197 6.538 1.558c-1.147.75-2.138 2.213-2.541 3.415L5.64 4.94a4.35 4.35 0 0 1 1.715-2.149c2.004-1.309 4.69-.786 6.072 1.157l-.759.494zM7.188 12.782c0 .173-.176.298-.176.298L2.06 16.147c-.361.237-.656.06-.656-.387V9.803c0-.45.295-.623.656-.386l4.952 3.068s.176.124.176.297M12.191 12.78c0-.172.176-.296.176-.296l4.952-3.067c.361-.238.656-.062.656.386v5.957c0 .449-.295.624-.656.387l-4.952-3.068s-.176-.125-.176-.298"}));const SvgIcoFlip=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_flip_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_flip_ref),ico_flip_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoFlip,ico_flip_extends({svgRef:ref},props)));__webpack_require__.p;function ico_heatmap_extends(){return(ico_heatmap_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_heatmap_ref=react_default.a.createElement("defs",null,react_default.a.createElement("style",null,".a{fill:#5269e8;}.b{fill:#ad450e;}.c{fill:none;}")),_ref2=react_default.a.createElement("g",{transform:"translate(-1877 -1486)"},react_default.a.createElement("path",{className:"a",d:"M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,12,24ZM12,3.428A8.572,8.572,0,1,0,20.572,12,8.582,8.582,0,0,0,12,3.428Z",transform:"translate(1877 1486)"}),react_default.a.createElement("path",{className:"b",d:"M6,12a6,6,0,1,1,6-6A6.007,6.007,0,0,1,6,12ZM6,3.272A2.728,2.728,0,1,0,8.728,6,2.731,2.731,0,0,0,6,3.272Z",transform:"translate(1883 1492)"}));const SvgIcoHeatmap=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_heatmap_extends({width:24,height:24,viewBox:"0 0 24 24",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_heatmap_ref,_ref2),ico_heatmap_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoHeatmap,ico_heatmap_extends({svgRef:ref},props)));__webpack_require__.p;function ico_invert_extends(){return(ico_invert_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_invert_ref=react_default.a.createElement("path",{fillRule:"evenodd",d:"M9.17 16.902c-2.313 0-5.322-2.935-3.121-7.337 2.2-4.402 3.122-6.11 3.122-6.11v13.447zm4.685-7.867c-1.934-3.867-2.744-5.669-2.893-6.007-.319-.994-1.185-1.275-1.743-1.296-.582 0-1.25.39-1.57 1.388-.151.342-.964 2.097-2.896 5.961-1.546 3.091-.663 5.331.002 6.404.997 1.615 2.824 2.688 4.548 2.688 1.722 0 3.551-1.09 4.552-2.708.662-1.073 1.544-3.34 0-6.43z"});const SvgIcoInvert=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_invert_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_invert_ref),ico_invert_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoInvert,ico_invert_extends({svgRef:ref},props)));__webpack_require__.p;function ico_lunit_extends(){return(ico_lunit_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_lunit_ref=react_default.a.createElement("g",{transform:"translate(-4935 -7650)"},react_default.a.createElement("path",{d:"M204.51,130.011a4.094,4.094,0,0,1-3.884-2.647,3.819,3.819,0,0,1,1.361-4.37,4.256,4.256,0,0,1,4.766-.186l6.069-5.791a4.064,4.064,0,0,1-.624-2.2,4.107,4.107,0,1,1,4.1,3.922,4.556,4.556,0,0,1-2.3-.6l-6.069,5.788a3.753,3.753,0,0,1,.678,2.159A4.015,4.015,0,0,1,204.51,130.011Zm0-6.248a2.412,2.412,0,0,0-2.392,1.87,2.309,2.309,0,0,0,1.45,2.609,2.5,2.5,0,0,0,2.96-.848,2.253,2.253,0,0,0-.29-2.941l-.014-.013h0a2.48,2.48,0,0,0-1.715-.667Zm10-7.237h0a2.591,2.591,0,0,0,1.78.625,2.329,2.329,0,1,0-2.434-2.327,2.354,2.354,0,0,0,.654,1.7Z",transform:"translate(4736.597 7542.1)"}));const SvgIcoLunit=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_lunit_extends({width:24,height:24,viewBox:"0 0 24 24",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_lunit_ref),ico_lunit_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoLunit,ico_lunit_extends({svgRef:ref},props)));__webpack_require__.p;function ico_magnify_extends(){return(ico_magnify_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_magnify_ref=react_default.a.createElement("path",{fillRule:"evenodd",d:"M4.308 8.645A4.282 4.282 0 0 1 8.59 4.363c2.365 0 4.474 2.106 4.474 4.473a4.284 4.284 0 0 1-4.283 4.284c-2.367 0-4.473-2.11-4.473-4.475m13.541 7.181l-3.779-3.78c.57-.934.898-2.035.898-3.21 0-3.417-2.96-6.377-6.378-6.377a6.185 6.185 0 0 0-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.136 0 2.2-.309 3.115-.844l3.8 3.801a.952.952 0 0 0 1.344 0l.944-.942c.371-.37.236-.84-.135-1.21"});const SvgIcoMagnify=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_magnify_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_magnify_ref),ico_magnify_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoMagnify,ico_magnify_extends({svgRef:ref},props)));__webpack_require__.p;function ico_pan_extends(){return(ico_pan_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_pan_ref=react_default.a.createElement("path",{fillRule:"evenodd",d:"M19.904 10l-3.492-3.056v1.747h-4.949V3.743h1.746L10.153.25 7.097 3.743h1.748V8.69H3.896V6.944L.404 10l3.492 3.056V11.31h4.949v4.949H7.097l3.056 3.492 3.056-3.492h-1.746V11.31h4.949v1.746z"});const SvgIcoPan=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_pan_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_pan_ref),ico_pan_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoPan,ico_pan_extends({svgRef:ref},props)));__webpack_require__.p;function ico_pen_extends(){return(ico_pen_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_pen_ref=react_default.a.createElement("path",{d:"M14.7,2.6c-1.9-1.4-3.2-1.3-3.8-1.3c-0.1,0-0.3,0.1-0.4,0.2L6,7.9l-2.3,3.1c-0.3,0.4-0.4,0.8-0.5,1.3L2.9,18 c0,0.4,0.4,0.7,0.8,0.6l5.3-2c0.4-0.2,0.8-0.5,1.1-0.8l1.8-2.5l5-6.9C17,6.1,17.1,5.9,17,5.8C17,5.2,16.6,4,14.7,2.6z M9,15.4 l-2,0.8c-0.1,0-0.2,0-0.2-0.1c-0.3-0.3-0.6-0.7-1.1-1c-0.5-0.4-0.9-0.6-1.3-0.7c-0.1,0-0.1-0.1-0.1-0.2L4.3,12l0.5-0.8 c0,0,1.2-0.2,2.8,1c1.6,1.2,1.8,2.4,1.8,2.4L9,15.4z"});const SvgIcoPen=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_pen_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_pen_ref),ico_pen_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoPen,ico_pen_extends({svgRef:ref},props)));__webpack_require__.p;function ico_reset_extends(){return(ico_reset_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_reset_ref=react_default.a.createElement("path",{fillRule:"evenodd",d:"M16.257 8.052l-4.564-.247 1.65-1.65-.126-.128c-2.106-1.974-5.409-1.939-7.459.111-2.092 2.093-2.086 5.49.012 7.59 2.098 2.097 5.497 2.103 7.59.011a5.33 5.33 0 0 0 1.502-2.979l1.8.061a7.103 7.103 0 0 1-2.037 4.184c-2.79 2.79-7.319 2.782-10.117-.016C1.71 12.191 1.701 7.66 4.491 4.871c2.746-2.747 7.182-2.78 9.99-.107l.126.127 1.465-1.466.185 4.627z"});const SvgIcoReset=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_reset_extends({viewBox:"0 0 20 20",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_reset_ref),ico_reset_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoReset,ico_reset_extends({svgRef:ref},props)));__webpack_require__.p;function ico_user_extends(){return(ico_user_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var ico_user_ref=react_default.a.createElement("path",{d:"M155.771,26.331C69.74,26.331,0,96.071,0,182.102c0,37.488,13.25,71.883,35.314,98.761 c3.404-27.256,30.627-50.308,68.8-61.225c13.946,12.994,31.96,20.878,51.656,20.878c19.233,0,36.894-7.487,50.698-19.936 c38.503,11.871,65.141,36.27,66.017,64.63c24.284-27.472,39.056-63.555,39.056-103.108 C311.541,96.071,241.801,26.331,155.771,26.331z M155.771,222.069c-9.944,0-19.314-2.732-27.634-7.464 c-20.05-11.409-33.855-34.756-33.855-61.711c0-38.143,27.583-69.176,61.489-69.176c33.909,0,61.489,31.033,61.489,69.176 c0,27.369-14.237,51.004-34.786,62.215C174.379,219.523,165.346,222.069,155.771,222.069z"});const SvgIcoUser=({svgRef:svgRef,title:title,...props})=>react_default.a.createElement("svg",ico_user_extends({viewBox:"0 0 311.541 311.541",ref:svgRef},props),title?react_default.a.createElement("title",null,title):null,ico_user_ref),ico_user_ForwardRef=react_default.a.forwardRef((props,ref)=>react_default.a.createElement(SvgIcoUser,ico_user_extends({svgRef:ref},props)));__webpack_require__.p;function toMaterialIcon(Icon){return createSvgIcon_default()(Object(react.createElement)(Icon),Icon.displayName||"OPTControlIcon")}__webpack_require__.d(__webpack_exports__,"a",(function(){return AdjustIcon})),__webpack_require__.d(__webpack_exports__,"c",(function(){return FlipIcon})),__webpack_require__.d(__webpack_exports__,"d",(function(){return InvertIcon})),__webpack_require__.d(__webpack_exports__,"f",(function(){return MagnifyIcon})),__webpack_require__.d(__webpack_exports__,"g",(function(){return PanIcon})),__webpack_require__.d(__webpack_exports__,"h",(function(){return PenIcon})),__webpack_require__.d(__webpack_exports__,"i",(function(){return ResetIcon})),__webpack_require__.d(__webpack_exports__,"b",(function(){return CircleIcon})),__webpack_require__.d(__webpack_exports__,"e",(function(){return LunitIcon}));const AdjustIcon=toMaterialIcon(ForwardRef),FlipIcon=toMaterialIcon(ico_flip_ForwardRef),InvertIcon=toMaterialIcon(ico_invert_ForwardRef),MagnifyIcon=toMaterialIcon(ico_magnify_ForwardRef),PanIcon=toMaterialIcon(ico_pan_ForwardRef),PenIcon=toMaterialIcon(ico_pen_ForwardRef),ResetIcon=toMaterialIcon(ico_reset_ForwardRef),CircleIcon=toMaterialIcon(ico_circle_ForwardRef),LunitIcon=(toMaterialIcon(ico_circle_filled_ForwardRef),toMaterialIcon(ico_contour_ForwardRef),toMaterialIcon(ico_heatmap_ForwardRef),toMaterialIcon(ico_lunit_ForwardRef));toMaterialIcon(ico_user_ForwardRef)},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TextInput}));var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(988),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);const TextInput=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__.a).attrs(props=>({variant:"outlined",margin:"dense",...props}))`
  && {
    margin: 0;
    height: 40px;

    input {
      border-radius: 3px;
      background-color: #0f1b2f;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: #1a1a23;
    }

    .MuiInputBase-input {
      height: 20px;
      padding: 10px 14px;
    }

    .Mui-error {
      fieldset {
        border-color: #f05543;
      }
    }

    .Mui-focused {
      input {
        background-color: #0c0c21;
      }
    }

    .Mui-disabled {
      opacity: 0.5;
    }
  }
`},175:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react);function getRGBArray(value){let r,g,b;const v=Math.max(Math.min(value,1),0);return v<.25?(r=0,g=4*v,b=1):v<.5?(r=0,g=1,b=1+4*(.25-v)):v<.75?(r=4*(v-.5),g=1,b=0):(r=1,g=1+4*(.75-v),b=0),[255*r<<0,255*g<<0,255*b<<0]}function getRGBAArray({stop:stop,threshold:threshold}){const alpha=function getAlpha({stop:stop,threshold:threshold}){return stop<threshold?0:.75*(stop-threshold)/(1-threshold)}({stop:stop,threshold:threshold});if(alpha<=0)return[0,0,0,0];const[r,g,b]=getRGBArray(stop);return[r,g,b,alpha]}function HeatmapScaleSVGImage({threshold:threshold=0,width:width,height:height,...imageProps}){const dataUri=function useHeatmapScaleImageURI({width:width,height:height,threshold:threshold}){return Object(react.useMemo)(()=>{const canvas=document.createElement("canvas");if(!canvas)return null;const ratio=window.devicePixelRatio,w=width*ratio,h=height*ratio;canvas.setAttribute("width",w.toString()),canvas.setAttribute("height",h.toString());const ctx=canvas.getContext("2d");if(!ctx)return null;let i=w+1;for(;--i>=0;)ctx.beginPath(),ctx.fillStyle=`rgba(${getRGBAArray({stop:i/w,threshold:threshold})})`,ctx.fillRect(i,0,1,h),ctx.closePath();return canvas.toDataURL()},[threshold,width,height])}({width:width,height:height,threshold:threshold});return dataUri?react_default.a.createElement("image",Object.assign({},imageProps,{xlinkHref:dataUri,width:width,height:height})):null}function posMapToImageData(posMap,threshold){const width=posMap[0].length,height=posMap.length,imageData=document.createElement("canvas").getContext("2d").createImageData(width,height),imageDataRgbaMap=imageData.data;let y=-1;for(;++y<height;){let x=-1;for(;++x<width;){const pos=4*(y*width+x),stop=posMap[y][x];if(stop<threshold)imageDataRgbaMap[pos]=0,imageDataRgbaMap[pos+1]=0,imageDataRgbaMap[pos+2]=0,imageDataRgbaMap[pos+3]=0;else{const value=(stop-threshold)/(1-threshold),[r,g,b]=getRGBArray(value);imageDataRgbaMap[pos]=r,imageDataRgbaMap[pos+1]=g,imageDataRgbaMap[pos+2]=b,imageDataRgbaMap[pos+3]=196*value<<0}}}return imageData}__webpack_require__.d(__webpack_exports__,"a",(function(){return HeatmapScaleSVGImage})),__webpack_require__.d(__webpack_exports__,"b",(function(){return posMapToImageData}))},221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useImageProgress}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function useImageProgress(image){const[progress,setProgress]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(image){const subscription=image.progress.subscribe(nextProgress=>{setProgress(nextProgress<1?nextProgress:null)});return()=>{subscription.unsubscribe()}}setProgress(null)},[image]),progress}},222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CornerstoneSingleImage}));var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(176),_ParallelImageLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(129),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(130),_wadoImageLoaderXHRLoader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(239);const defaultLoader=new _ParallelImageLoader__WEBPACK_IMPORTED_MODULE_1__.a;class CornerstoneSingleImage{constructor(imageId,options={}){this.imageId=imageId,this.options=options,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"==typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(cancel=>cancel()),this._destoyed=!0},this.onProgress=event=>{const eventDetail=Object(_types__WEBPACK_IMPORTED_MODULE_2__.a)(event);eventDetail&&eventDetail.imageId===this.imageId&&this._progressSubject.next(Math.min(eventDetail.loaded/eventDetail.total,.99))},this.loadImage=async imageId=>{try{const image=await this._loader.loadImage({imageId:imageId,options:{loader:Object(_wadoImageLoaderXHRLoader__WEBPACK_IMPORTED_MODULE_3__.a)(cancel=>this._cancel.push(cancel))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(image),this._progressSubject.next(1))}catch(error){this._destoyed||(console.warn(`It will retry loadImage(${imageId}):`,error),this.loadImage(imageId))}},this._imageSubject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.a(null),this._progressSubject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.a(0),this._loader=options.loader||defaultLoader,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(imageId)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return globalStyle}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const blockStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
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
`,globalStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  :root {
    ${blockStyle};
  }
`},224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SubmitContainer}));const SubmitContainer=__webpack_require__(2).default.div`
  margin: ${({theme:theme})=>theme.spacing(1)};
  position: relative;
`},230:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return dashStroke}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const dash=styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  to {
    stroke-dashoffset: 0;
  }
`,dashStroke=styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${dash} 10s linear infinite;
`},239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return wadoImageLoaderXHRLoader}));const wadoImageLoaderXHRLoader=getCancel=>(url,imageId,headers={},params={})=>{const{cornerstone:cornerstone}=cornerstoneWADOImageLoader.external,xhr=new XMLHttpRequest;return new Promise((resolve,reject)=>{xhr.open("get",url,!0),xhr.responseType="arraybuffer",Object.keys(headers).forEach(key=>{xhr.setRequestHeader(key,headers[key])}),params.deferred={resolve:resolve,reject:reject},params.url=url,params.imageId=imageId,"function"==typeof getCancel&&getCancel((function cancel(){try{xhr.abort()}catch(error){}})),xhr.onreadystatechange=()=>{4===xhr.readyState&&200===xhr.status&&resolve(xhr.response)},xhr.onloadstart=()=>{const eventData={url:url,imageId:imageId};cornerstone&&cornerstone.triggerEvent(cornerstone.events,"cornerstoneimageloadstart",eventData)},xhr.onloadend=()=>{const eventData={url:url,imageId:imageId};cornerstone.triggerEvent(cornerstone.events,"cornerstoneimageloadend",eventData)},xhr.onprogress=({loaded:loaded,lengthComputable:lengthComputable,total:total})=>{let percentComplete;lengthComputable&&(percentComplete=Math.round(loaded/total*100));const eventData={url:url,imageId:imageId,loaded:loaded,total:total,percentComplete:percentComplete};cornerstone.triggerEvent(cornerstone.events,"cornerstoneimageloadprogress",eventData)},xhr.send()})}},242:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Container}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Container({style:style,children:children,...divProps}){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",Object.assign({},divProps,{style:{...style,position:"relative",display:"inline-block"}}),children)}},243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LowToHigh}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function trianglePath(x,y,width,height){return`${x},${y+height/-2} ${x+width},${y} ${x},${y+height/2}`}const textStyle={fontSize:11,fontWeight:200,fontStyle:"normal",fontStretch:"normal",lineHeight:1.2,letterSpacing:2,color:"#ffffff"},textStyleEnd={...textStyle,textAlign:"right"};function LowToHigh({width:width,style:style,...svgProps}){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",Object.assign({},svgProps,{width:width,height:20,style:{...style,position:"absolute",left:0}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text",{x:0,y:15,fill:"#ffffff",style:textStyle},"LOW"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line",{x1:40,y1:11,x2:width-50,y2:11,stroke:"#ffffff",strokeWidth:1}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon",{points:trianglePath(width-50,11,5,5),fill:"#ffffff"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text",{x:width,y:15,fill:"#ffffff",style:textStyleEnd,textAnchor:"end"},"HIGH"))}},244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Ticks}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Ticks({steps:steps,y:y,tickWidth:tickWidth,stepWidth:stepWidth,tickHeight:tickHeight,tickColor:tickColor}){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Array.from({length:steps+1},(_,i)=>{const x=Math.floor(stepWidth*i);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line",{key:"tick_"+i,x1:x,y1:y,x2:x,y2:y+tickHeight,strokeWidth:tickWidth,stroke:tickColor})}))}},245:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useShortcut}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function useShortcut({test:test,callback:callback,deps:deps=[],windows:windows=[window]}){Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function handler(event){test(event)&&callback()}return windows.forEach(window=>window.addEventListener("keyup",handler)),()=>{windows.forEach(window=>window.removeEventListener("keyup",handler))}},[test,callback,windows,...deps])}},40:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return scalebarHeight}));const scalebarHeight=16},451:function(module,exports){},452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return installWADOImageLoader}));let installed=!1;function installWADOImageLoader(){installed||(installed=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone,cornerstoneWADOImageLoader.webWorkerManager.initialize({maxWebWorkers:navigator.hardwareConcurrency||4,startWebWorkersOnDemand:!1,taskConfiguration:{decodeTask:{initializeCodecsOnStartup:!0}}}))}},453:function(module,__webpack_exports__,__webpack_require__){"use strict"},454:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return unloadWADOImage}));const unloadWADOImage=function unloadImage(imageId){function unload(id){var _cornerstoneWADOImage,_cornerstoneWADOImage2,_cornerstoneWADOImage3;/^wadouri:/.test(id)&&(null===(_cornerstoneWADOImage=cornerstoneWADOImageLoader)||void 0===_cornerstoneWADOImage||null===(_cornerstoneWADOImage2=_cornerstoneWADOImage.wadouri)||void 0===_cornerstoneWADOImage2||null===(_cornerstoneWADOImage3=_cornerstoneWADOImage2.dataSetCacheManager)||void 0===_cornerstoneWADOImage3||_cornerstoneWADOImage3.unload(id))}Array.isArray(imageId)?imageId.forEach(id=>unload(id)):"string"==typeof imageId&&unload(imageId)}},455:function(module,__webpack_exports__,__webpack_require__){"use strict";var polylabel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(494),polylabel__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(polylabel__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);class ContourViewerBase extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(...args){super(...args),this.svgRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.createRef)()}render(){const{cornerstoneRenderData:cornerstoneRenderData,contours:contours,focusedContour:focusedContour}=this.props;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},contours.length>0&&cornerstoneRenderData&&cornerstoneRenderData.element&&contours.map(contour=>{const polygon=function toLocal(element,polygon){return polygon.map(([x,y])=>{const p=cornerstone.pixelToCanvas(element,{x:x,y:y});return[p.x,p.y]})}(cornerstoneRenderData.element,contour.polygon),labelCenter=polylabel__WEBPACK_IMPORTED_MODULE_0___default()([polygon],1),focused=contour===focusedContour,dataAttrs=contour.dataAttrs||{};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{key:"polygon"+contour.id},!0===this.props.border&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon",Object.assign({},dataAttrs,{"data-border":"border","data-id":contour.id,"data-focused":focused||void 0,points:polygon.map(([x,y])=>`${x},${y}`).join(" ")})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon",Object.assign({},dataAttrs,{"data-id":contour.id,"data-focused":focused||void 0,points:polygon.map(([x,y])=>`${x},${y}`).join(" ")})),!0===this.props.border&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text",Object.assign({},dataAttrs,{"data-border":"border","data-id":contour.id,"data-focused":focused||void 0,fontSize:14*Math.max(1,cornerstoneRenderData.viewport.scale),x:labelCenter[0],y:labelCenter[1]}),contour.label?"function"==typeof contour.label?contour.label(contour):contour.label:contour.id),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text",Object.assign({},dataAttrs,{"data-id":contour.id,"data-focused":focused||void 0,fontSize:14*Math.max(1,cornerstoneRenderData.viewport.scale),x:labelCenter[0],y:labelCenter[1]}),contour.label?"function"==typeof contour.label?contour.label(contour):contour.label:contour.id))}))}}ContourViewerBase.defaultProps={border:!0};Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(ContourViewerBase)`
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
`},456:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsightViewerContainer}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const InsightViewerContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  background-color: #000000;
  position: relative;
  width: ${({width:width})=>width}px;
  height: ${({height:height})=>height}px;
`;styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  position: absolute;
  left: 5px;
  top: 5px;
`,styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
`,styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  position: absolute;
  right: 5px;
  top: 5px;
`,styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`},457:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(512);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(221);Object(react__WEBPACK_IMPORTED_MODULE_1__.createContext)({inProgress:!1,setProgress:()=>{},unsetProgress:()=>{}});styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`},458:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);class CircleViewerBase extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...args){super(...args),this.svgRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}render(){const{cornerstoneRenderData:cornerstoneRenderData,contours:contours,focusedContour:focusedContour}=this.props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},contours.length>0&&cornerstoneRenderData&&cornerstoneRenderData.element&&contours.map(contour=>{const{cx:cx,cy:cy,r:r}=function toLocal(element,polygon){const{x:x1,y:y1}=cornerstone.pixelToCanvas(element,{x:polygon[0][0],y:polygon[0][1]}),{x:x2,y:y2}=cornerstone.pixelToCanvas(element,{x:polygon[1][0],y:polygon[1][1]});return{cx:x1,cy:y1,r:Math.sqrt(Math.pow(Math.abs(x2-x1),2)+Math.pow(Math.abs(y2-y1),2))}}(cornerstoneRenderData.element,contour.polygon),focused=contour===focusedContour,dataAttrs=contour.dataAttrs||{};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:"circle"+contour.id},!0===this.props.border&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",Object.assign({},dataAttrs,{"data-border":"border","data-id":contour.id,"data-focused":focused||void 0,cx:cx,cy:cy,r:r})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",Object.assign({},dataAttrs,{"data-id":contour.id,"data-focused":focused||void 0,cx:cx,cy:cy,r:r})),!0===this.props.border&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text",Object.assign({},dataAttrs,{"data-border":"border","data-id":contour.id,"data-focused":focused||void 0,fontSize:14*Math.max(1,cornerstoneRenderData.viewport.scale),x:cx,y:cy}),contour.label?"function"==typeof contour.label?contour.label(contour):contour.label:contour.id),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text",Object.assign({},dataAttrs,{"data-id":contour.id,"data-focused":focused||void 0,fontSize:14*Math.max(1,cornerstoneRenderData.viewport.scale),x:cx,y:cy}),contour.label?"function"==typeof contour.label?contour.label(contour):contour.label:contour.id))}))}}CircleViewerBase.defaultProps={border:!0};Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(CircleViewerBase)`
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
`},459:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},460:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);__webpack_require__(2).default.div`
  display: inline-block;
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`},461:function(module,__webpack_exports__,__webpack_require__){"use strict";var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(989),styled_components__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(95),__webpack_require__(515),__webpack_require__(519),__webpack_require__(514),__webpack_require__(518),__webpack_require__(520),__webpack_require__(68),__webpack_require__(0),__webpack_require__(2));Object(styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__.a)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
`},462:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},463:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},464:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},465:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useInsightViewerSync}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function useInsightViewerSync(){const[cornerstoneRenderData,setCornerstoneRenderData]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return{cornerstoneRenderData:cornerstoneRenderData,updateCornerstoneRenderData:setCornerstoneRenderData}}},466:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},467:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(990),__webpack_require__(516)},468:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);__webpack_require__(222);const ImageStoreContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)();ImageStoreContext.Consumer},469:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(176),__webpack_require__(516);var _ParallelImageLoader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(129);__webpack_require__(130),__webpack_require__(239);new _ParallelImageLoader__WEBPACK_IMPORTED_MODULE_2__.a},470:function(module,__webpack_exports__,__webpack_require__){"use strict"},471:function(module,__webpack_exports__,__webpack_require__){"use strict"},472:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withInsightViewerStorybookGlobalStyle}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(223);const StorybookGlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${_style__WEBPACK_IMPORTED_MODULE_2__.a}
`,withInsightViewerStorybookGlobalStyle=storyFn=>{const story=storyFn();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StorybookGlobalStyle,null),"function"==typeof story?Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(story):Object(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(story)?story:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"story is not valid element"))}},487:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0)},488:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),context_frame=__webpack_require__(105);__webpack_require__.d(__webpack_exports__,"a",(function(){return InsightViewer_InsightViewer}));class InsightViewer_InsightViewer extends react.Component{constructor(...args){super(...args),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=element=>{this.element=element,element&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=image=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let defaultViewport=this.getDefaultViewport(image,this.element);if(!defaultViewport)throw new Error("defaultViewport는 null일 수 없다.");if(Array.isArray(this.props.defaultViewportTransforms)){const minScale=defaultViewport.scale;for(const transform of this.props.defaultViewportTransforms){const patch=transform({element:this.element,currentViewport:defaultViewport,minScale:minScale,maxScale:3});defaultViewport={...defaultViewport,...patch}}}defaultViewport={...defaultViewport,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,image,defaultViewport),this.setImage(image),this.setViewport(defaultViewport),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=image=>{if(image)if(image.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(image);else{if(!this.currentViewport)throw new Error("어떤 상황인지 확인 필요!!!");cornerstone.displayImage(this.element,image,this.currentViewport)}},this.onImageRenderered=event=>{const eventData=event.detail;eventData&&eventData.canvasContext&&eventData.element&&eventData.enabledElement&&eventData.image&&"number"==typeof eventData.renderTimeInMs&&eventData.viewport?(this.currentViewport=eventData.viewport,this.props.updateCornerstoneRenderData(eventData)):console.error("CornerstoneEventData에 없는 정보가 있다???",eventData)},this.startPanInteraction=pan=>{this.teardownPanInteraction&&this.teardownPanInteraction();const element=pan instanceof this.contentWindow.HTMLElement?pan:!0===pan?this.element:null;element&&(this.teardownPanInteraction=function startPanInteraction({element:element,getCurrentViewport:getCurrentViewport,onMove:onMove,onEnd:onEnd,contentWindow:contentWindow}){let startPageX,startPageY,startTranslationX,startTranslationY;function start(event){if(0!==event.button)return;event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault();const viewport=getCurrentViewport();viewport&&(element.removeEventListener("mousedown",start),startPageX=event.pageX,startPageY=event.pageY,startTranslationX=viewport.translation.x,startTranslationY=viewport.translation.y,contentWindow.addEventListener("mousemove",move),contentWindow.addEventListener("mouseup",end),element.addEventListener("mouseleave",end))}function move(event){event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault();const viewport=getCurrentViewport();if(!viewport)return;const dx=(event.pageX-startPageX)/viewport.scale,dy=(event.pageY-startPageY)/viewport.scale;onMove({x:startTranslationX+dx,y:startTranslationY+dy})}function end(event){0===event.button&&(event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault(),contentWindow.removeEventListener("mousemove",move),contentWindow.removeEventListener("mouseup",end),element.removeEventListener("mouseleave",end),element.addEventListener("mousedown",start),onEnd())}return element.addEventListener("mousedown",start),()=>{element.removeEventListener("mousedown",start),contentWindow.removeEventListener("mousemove",move),contentWindow.removeEventListener("mouseup",end),element.removeEventListener("mouseleave",end)}}({element:element,getCurrentViewport:()=>this.currentViewport,onMove:translation=>this.updateCurrentViewport({translation:translation}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=adjust=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const element=adjust instanceof this.contentWindow.HTMLElement?adjust:!0===adjust?this.element:null;element&&(this.teardownAdjustInteraction=function startAdjustInteraction({element:element,getCurrentViewport:getCurrentViewport,onMove:onMove,onEnd:onEnd,contentWindow:contentWindow}){let startPageX,startPageY,startWindowCenter,startWindowWidth;function start(event){if(0!==event.button)return;event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault();const viewport=getCurrentViewport();viewport&&(element.removeEventListener("mousedown",this.onAdjustStart),startPageX=event.pageX,startPageY=event.pageY,startWindowCenter=viewport.voi.windowCenter,startWindowWidth=viewport.voi.windowWidth,contentWindow.addEventListener("mousemove",move),contentWindow.addEventListener("mouseup",end),element.addEventListener("mouseleave",end))}function move(event){event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault();const dx=event.pageX-startPageX,dy=event.pageY-startPageY;onMove({windowWidth:Math.max(startWindowWidth+dx,1),windowCenter:Math.max(startWindowCenter+dy,1)})}function end(event){0===event.button&&(event.stopPropagation(),event.stopImmediatePropagation(),event.preventDefault(),contentWindow.removeEventListener("mousemove",move),contentWindow.removeEventListener("mouseup",end),element.removeEventListener("mouseleave",end),element.addEventListener("mousedown",start),onEnd())}return element.addEventListener("mousedown",start),()=>{element.removeEventListener("mousedown",start),contentWindow.removeEventListener("mousemove",move),contentWindow.removeEventListener("mouseup",end),element.removeEventListener("mouseleave",end)}}({element:element,getCurrentViewport:()=>this.currentViewport,onMove:voi=>this.updateCurrentViewport({voi:voi}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=zoom=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const element=zoom instanceof this.contentWindow.HTMLElement?zoom:!0===zoom?this.element:null;element&&(this.teardownZoomInteraction=function startZoomInteraction({element:element,getMinMaxScale:getMinMaxScale,getCurrentViewport:getCurrentViewport,onZoom:onZoom,contentWindow:contentWindow}){function wheel(event){event.preventDefault(),event.stopPropagation(),event.stopImmediatePropagation();const[minScale,maxScale]=getMinMaxScale(),currentViewport=getCurrentViewport();if(!currentViewport)return;const delta=event.deltaY>0?1:-1,nextScale=Math.max(minScale,Math.min(maxScale,currentViewport.scale-.03*delta));if(currentViewport.scale===nextScale)return;const{top:top,left:left,width:width,height:height}=element.getBoundingClientRect(),distanceX=event.pageX-contentWindow.scrollX-(left+width/2),distanceY=event.pageY-contentWindow.scrollY-(top+height/2),dx=(1-nextScale/currentViewport.scale)*distanceX,dy=(1-nextScale/currentViewport.scale)*distanceY;onZoom({translation:{x:currentViewport.translation.x+dx/nextScale,y:currentViewport.translation.y+dy/nextScale},scale:nextScale})}return element.addEventListener("wheel",wheel),()=>{element.removeEventListener("wheel",wheel)}}({element:element,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:patch=>this.updateCurrentViewport(patch),contentWindow:this.contentWindow}))},this.getDefaultViewport=(image,element)=>image&&element?cornerstone.getDefaultViewportForImage(element,image):null,this.getMinScale=()=>{const viewport=this.getDefaultViewport(this.currentImage,this.element);if(!viewport)throw new Error("viewport가 정상적으로 와야만 한다");return viewport.scale},this.getMaxScale=()=>3,this.updateViewport=patch=>{this.currentViewport&&this.updateCurrentViewport(patch)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=image=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=image.image.subscribe(this.subscribeImage)},this.setImage=image=>{this.currentImage=image},this.setViewport=viewport=>{this.currentViewport=viewport,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=update=>{if(!this.currentViewport)throw new Error("viewport가 없는 상태에서 실행되면 안된다");const patch="function"==typeof update?update(this.currentViewport):update;this.currentViewport={...this.currentViewport,...patch},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(context_frame.a,{stateRef:({contentWindow:contentWindow})=>this.contentWindow=contentWindow}),react_default.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(prevProps){const{width:width,height:height,flip:flip,invert:invert,pan:pan,adjust:adjust,zoom:zoom,resetTime:resetTime,image:image}=this.props,defaultViewport=this.getDefaultViewport(this.currentImage,this.element);if(prevProps.pan!==pan&&this.startPanInteraction(pan),prevProps.adjust!==adjust&&this.startAdjustInteraction(adjust),prevProps.zoom!==zoom&&this.startZoomInteraction(zoom),defaultViewport&&(prevProps.resetTime!==resetTime?this.updateCurrentViewport({...defaultViewport,hflip:flip,invert:defaultViewport.invert?!invert:invert}):prevProps.flip===flip&&prevProps.invert===invert||this.updateCurrentViewport({hflip:flip,invert:defaultViewport.invert?!invert:invert})),(prevProps.width!==width||prevProps.height!==height)&&this.currentImage){cornerstone.resize(this.element);const viewport=cornerstone.getViewport(this.element);if(!viewport)throw new Error("getViewport() is returns not a Viewport");this.setViewport(viewport)}prevProps.image!==image&&this.setCornerstoneImage(image)}}},489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(175);var react=__webpack_require__(0);react.Component;__webpack_require__(2).default.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`},490:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(2),context_frame=__webpack_require__(105);var dashStroke=__webpack_require__(230);class CircleDrawer_CircleDrawerBase extends react.Component{constructor(props){super(props),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=svg=>{svg&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=svg,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=svg},this.getElement=({draw:draw})=>draw instanceof this.contentWindow.HTMLElement?draw:this.svg,this.canActivate=({draw:draw})=>draw instanceof this.contentWindow.HTMLElement||!0===draw,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=event=>{event.stopPropagation(),this.findFocus(event.pageX,event.pageY)},this.findFocus=(pageX,pageY)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,pageX,pageY);this.focused=function hitTestCircles(contours,cursor){return contours.find(contour=>{const[[cx,cy],[x1,y1]]=contour.polygon,[x2,y2]=cursor,r1=Math.sqrt(Math.pow(Math.abs(x1-cx),2)+Math.pow(Math.abs(y1-cy),2));return Math.sqrt(Math.pow(Math.abs(x2-cx),2)+Math.pow(Math.abs(y2-cy),2))<=r1})||null}(this.props.contours,[x,y]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=event=>{event.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=event=>{if(event.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData를 찾을 수 없다!");this.preventClickEvent=!1,this.startX=event.pageX,this.startY=event.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,event.pageX,event.pageY);this.setState(prevState=>({...prevState,p1:[x,y]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=event=>{if(event.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData를 찾을 수 없다!");!this.preventClickEvent&&Math.max(Math.abs(event.pageX-this.startX),Math.abs(event.pageY-this.startY))>20&&(this.preventClickEvent=!0);const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,event.pageX,event.pageY);this.setState(prevState=>({...prevState,p2:[x,y]}))},this.onMouseUpToEndDraw=event=>{event.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],event),this.setState(prevState=>({...prevState,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=event=>{event.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=event=>{"escape"===event.key.toLowerCase()&&(event.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(prevState=>({...prevState,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(context_frame.a,{stateRef:({contentWindow:contentWindow})=>this.contentWindow=contentWindow}),react_default.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:x1,y:y1}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:x2,y:y2}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),r=Math.sqrt(Math.pow(Math.abs(x2-x1),2)+Math.pow(Math.abs(y2-y1),2));return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("circle",{cx:x1,cy:y1,r:r}),!1!==this.props.animateStroke&&react_default.a.createElement("circle",{cx:x1,cy:y1,r:r,"data-highlight":"highlight"}),react_default.a.createElement("line",{x1:x1,y1:y1,x2:x2,y2:y2}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(prevProps){prevProps.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(styled_components_browser_esm.default)(CircleDrawer_CircleDrawerBase)`
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
    ${dashStroke.a}
  }

  > line {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
  }
`},491:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(2);Object(styled_components_browser_esm.default)((function PointPinBase({x:x,y:y,label:label,onEnter:onEnter,onLeave:onLeave,onRemove:onRemove,...gProps}){const onClick=Object(react.useCallback)(event=>{event.stopPropagation(),event.nativeEvent.stopImmediatePropagation(),event.preventDefault(),onRemove()},[onRemove]);return react_default.a.createElement("g",Object.assign({},gProps,{transform:`translate(${x} ${y})`,onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onClick}),react_default.a.createElement("circle",{cx:0,cy:0,r:4}),react_default.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),react_default.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),label&&react_default.a.createElement("g",{transform:"translate(0 -25)"},react_default.a.createElement("text",null,label),react_default.a.createElement("text",null,label)))}))`
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
`;react.Component},492:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(2),context_frame=__webpack_require__(105),point_in_polygon=__webpack_require__(497),point_in_polygon_default=__webpack_require__.n(point_in_polygon);var dashStroke=__webpack_require__(230);function toLocal(element,polygon){return polygon.map(([x,y])=>{const p=cornerstone.pixelToCanvas(element,{x:x,y:y});return p.x+","+p.y}).join(" ")}class ContourDrawer_ContourDrawerBase extends react.Component{constructor(props){super(props),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=svg=>{svg&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents(),this.canActivate(this.props)&&(this.svg=svg,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=svg},this.getElement=({draw:draw})=>draw instanceof this.contentWindow.HTMLElement?draw:this.svg,this.canActivate=({draw:draw})=>draw instanceof this.contentWindow.HTMLElement||!0===draw,this.activateInitialEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=event=>{event.stopPropagation(),this.findFocus(event.pageX,event.pageY)},this.findFocus=(pageX,pageY)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,pageX,pageY);this.focused=function hitTestContours(contours,cursor){return contours.find(contour=>point_in_polygon_default()(cursor,contour.polygon))||null}(this.props.contours,[x,y]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=event=>{event.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onMouseDownToStartDraw=event=>{if(event.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData를 찾을 수 없다!");this.preventClickEvent=!1,this.startX=event.pageX,this.startY=event.pageY,this.deactivateInitialEvents(),this.activateDrawEvents();const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,event.pageX,event.pageY);this.setState(prevState=>({...prevState,polygon:[[x,y]]}))},this.activateDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelDraw))},this.deactivateDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelDraw))},this.onMouseMoveToDraw=event=>{if(event.stopPropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData를 찾을 수 없다!");!this.preventClickEvent&&Math.max(Math.abs(event.pageX-this.startX),Math.abs(event.pageY-this.startY))>20&&(this.preventClickEvent=!0);const element=this.props.cornerstoneRenderData.element,{x:x,y:y}=cornerstone.pageToPixel(element,event.pageX,event.pageY);this.setState(prevState=>({...prevState,polygon:[...prevState.polygon,[x,y]]}))},this.onMouseUpToEndDraw=event=>{event.stopPropagation(),this.deactivateDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,event),this.setState(prevState=>({...prevState,polygon:[]}))},this.onMouseLeaveToCancelDraw=event=>{event.stopPropagation(),this.cancelDraw()},this.onKeyDownToCancelDraw=event=>{"escape"===event.key.toLowerCase()&&(event.stopPropagation(),this.cancelDraw())},this.cancelDraw=()=>{this.deactivateDrawEvents(),this.activateInitialEvents(),this.setState(prevState=>({...prevState,polygon:[]}))},this.state={polygon:[]}}render(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(context_frame.a,{stateRef:({contentWindow:contentWindow})=>this.contentWindow=contentWindow}),react_default.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("polyline",{points:toLocal(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&react_default.a.createElement("polyline",{points:toLocal(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(prevProps){prevProps.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateDrawEvents())}}Object(styled_components_browser_esm.default)(ContourDrawer_ContourDrawerBase)`
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
    ${dashStroke.a}
  }
`},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components_browser_esm=__webpack_require__(2);const blockStyle=styled_components_browser_esm.css`
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
`,globalStyle=styled_components_browser_esm.css`
  :root {
    ${blockStyle};
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
`;styled_components_browser_esm.createGlobalStyle`
  ${globalStyle}
`;var StylesProvider=__webpack_require__(1033),ThemeProvider=__webpack_require__(1029),react=__webpack_require__(0),react_default=__webpack_require__.n(react),createMuiTheme=__webpack_require__(509);const theme={...Object(createMuiTheme.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),app:{backgroundColor:"#222232"}};function context_ThemeProvider({children:children,injectFirst:injectFirst=!0}){return react_default.a.createElement(StylesProvider.b,{injectFirst:injectFirst},react_default.a.createElement(styled_components_browser_esm.ThemeProvider,{theme:theme},react_default.a.createElement(ThemeProvider.a,{theme:theme},children)))}const StorybookGlobalStyle=styled_components_browser_esm.createGlobalStyle`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${globalStyle}
`,withOPTComponentsStorybookGlobalStyle=storyFn=>{const story=storyFn();return react_default.a.createElement(context_ThemeProvider,null,react_default.a.createElement(StorybookGlobalStyle,null),"function"==typeof story?Object(react.createElement)(story):Object(react.isValidElement)(story)?story:react_default.a.createElement("div",null,"story is not valid element"))};var ButtonBase=__webpack_require__(517),Done=__webpack_require__(501),Done_default=__webpack_require__.n(Done);const checkIcon=react_default.a.createElement(Done_default.a,null),buttonClasses_label="LunitButton-label",buttonClasses_icon="LunitButton-icon",buttonClasses_check="LunitButton-check";function Button_ButtonBase({label:label,icon:icon,check:check=checkIcon,className:className="",selected:selected,onChange:onChange,onClick:onClick,hideCheck:hideCheck,style:style={},disabled:disabled=!1,...muiButtonProps}){const click=Object(react.useCallback)(event=>{"boolean"==typeof selected&&"function"==typeof onChange&&onChange(!selected),"function"==typeof onClick&&onClick(event)},[selected,onChange,onClick]);return react_default.a.createElement(ButtonBase.a,Object.assign({},muiButtonProps,{className:className,"aria-selected":!0===selected,style:style,onClick:click,disabled:disabled}),icon&&react_default.a.createElement("span",{className:buttonClasses_icon},icon),label&&react_default.a.createElement("span",{className:buttonClasses_label},label),!0!==hideCheck&&!0===selected&&react_default.a.createElement("span",{className:buttonClasses_check},check))}Object(styled_components_browser_esm.default)(Button_ButtonBase).attrs(props=>{if(!props.label||!props.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===props.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===props.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...props,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${buttonClasses_icon} {
      font-size: 21px;
      display: block;
      text-align: center;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${buttonClasses_label} {
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
`;const Button=Object(styled_components_browser_esm.default)(Button_ButtonBase)`
  && {
    justify-content: ${({layout:layout})=>layout};
    padding-left: ${({layout:layout})=>"left"===layout?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${buttonClasses_icon} {
      font-size: 21px;
      margin-right: ${({label:label})=>label?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${buttonClasses_check} {
      ${({layout:layout})=>"left"!==layout?"display: none":""};
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
`;styled_components_browser_esm.css`
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
`;var KeyboardArrowDown=__webpack_require__(502),KeyboardArrowDown_default=__webpack_require__.n(KeyboardArrowDown);const panelClasses_header="LunitPanel-header",panelClasses_icon="LunitPanel-icon",panelClasses_title="LunitPanel-title",panelClasses_content="LunitPanel-content";const Arrow=Object(styled_components_browser_esm.default)(KeyboardArrowDown_default.a)`
  transition: transform 0.3s ease-out;
`,panelStyle=styled_components_browser_esm.css`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${panelClasses_header} {
    height: 25px;
    background-color: var(--panel-header-background-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 1px 14px 0 14px;

    .${panelClasses_icon} {
      color: var(--panel-icon-color);
      margin-left: -8px;
      margin-right: 6px;
      transform: translateY(2px);
    }

    .${panelClasses_title} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${panelClasses_content} {
    padding: 14px;
  }
`,panelIconHoverStyle=styled_components_browser_esm.css`
  .${panelClasses_header} {
    .${panelClasses_icon} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,Panel=Object(styled_components_browser_esm.default)((function PanelBase({className:className="",expanded:expanded,onChange:onChange,style:style={},title:title,icon:icon,children:children,disabled:disabled}){const expand=Object(react.useCallback)(()=>{"boolean"==typeof expanded&&"function"==typeof onChange&&onChange(!expanded)},[expanded,onChange]),content="function"==typeof children?children(!0===expanded):children,iconElement=function getIcon(value,expanded){const icon="function"==typeof value?value(!0===expanded):value;return icon||("boolean"!=typeof expanded?null:expanded?react_default.a.createElement(Arrow,null):react_default.a.createElement(Arrow,{style:{transform:"rotate(180deg)"}}))}(icon,expanded);return react_default.a.createElement("div",{className:className,"aria-expanded":!0===expanded,"aria-disabled":!0===disabled,style:style},react_default.a.createElement("div",{className:panelClasses_header},iconElement&&react_default.a.createElement("span",{className:panelClasses_icon,onClick:expand},iconElement),react_default.a.createElement("span",{className:panelClasses_title},"function"==typeof title?title(!0===expanded):title)),content&&react_default.a.createElement("div",{className:panelClasses_content},content))}))`
  ${({disabled:disabled})=>disabled?styled_components_browser_esm.css`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:styled_components_browser_esm.css`
        opacity: 1;
      `}
  ${panelStyle}
  ${({onChange:onChange})=>"function"==typeof onChange?panelIconHoverStyle:""}
`,SessionPanel=Object(styled_components_browser_esm.default)((function SessionPanelBase({sessionId:sessionId,defaultExpanded:defaultExpanded=!0,onChange:onChange,...props}){const id=Object(react.useMemo)(()=>`__sidebar_panel_${sessionId}__`,[sessionId]),[expanded,setExpanded]=Object(react.useState)(()=>{const sessionValue=localStorage.getItem(id);return"string"==typeof sessionValue?"open"===sessionValue:defaultExpanded}),updateExpanded=Object(react.useCallback)(nextExpanded=>{localStorage.setItem(id,nextExpanded?"open":"close"),setExpanded(nextExpanded),"function"==typeof onChange&&onChange(nextExpanded)},[id,onChange]);return react_default.a.createElement(Panel,Object.assign({},props,{expanded:expanded,onChange:updateExpanded}))}))`
  opacity: ${({disabled:disabled})=>disabled?.4:1};
  ${panelStyle}
  ${panelIconHoverStyle}s
`;styled_components_browser_esm.default.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,styled_components_browser_esm.default.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(styled_components_browser_esm.default)((function PanelToolbarBase({children:children,className:className=""}){return react_default.a.createElement("div",{className:className},children)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,styled_components_browser_esm.default.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const verticalLayout=({gap:gap=2})=>styled_components_browser_esm.css`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${gap}px;
  }
`,horizontalLayout=({gap:gap=2})=>styled_components_browser_esm.css`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${gap}px;
  }
`,ButtonLayout=Object(styled_components_browser_esm.default)((function ButtonLayoutBase({className:className="",children:children,style:style}){return react_default.a.createElement("div",{className:className,style:style},children)}))`
  ${({direction:direction})=>"horizontal"===direction?horizontalLayout:verticalLayout};
`;var Slider=__webpack_require__(520);const Slider_Slider=Object(styled_components_browser_esm.default)(Slider.a).attrs({valueLabelDisplay:"on"})`
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
`;var icons_Error=__webpack_require__(67),Error_default=__webpack_require__.n(icons_Error),Help=__webpack_require__(308),Help_default=__webpack_require__.n(Help),Tooltip=__webpack_require__(1035),makeStyles=__webpack_require__(1034);function Tooltip_Tooltip({className:className,...props}){const{arrow:arrow,popper:popper,...classes}=useTooltipStyle(props),[arrowRef,setArrowRef]=react_default.a.useState(null);return react_default.a.createElement(Tooltip.a,Object.assign({classes:classes,PopperProps:{className:popper+" "+(className||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(arrowRef),element:arrowRef}}}}},props,{title:react_default.a.createElement(react.Fragment,null,props.title,react_default.a.createElement("span",{className:arrow,ref:setArrowRef}))}))}const useTooltipStyle=Object(makeStyles.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),blinkAnimation=(Object(styled_components_browser_esm.default)(Tooltip_Tooltip).attrs({children:react_default.a.createElement(Help_default.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(styled_components_browser_esm.default)(Tooltip_Tooltip).attrs({children:react_default.a.createElement(Help_default.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,styled_components_browser_esm.keyframes`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),ErrorIcon=Object(styled_components_browser_esm.default)(Error_default.a)`
  animation: ${blinkAnimation} 1s infinite;
`;Object(styled_components_browser_esm.default)(Tooltip_Tooltip).attrs({children:react_default.a.createElement(ErrorIcon,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(styled_components_browser_esm.default)(Tooltip_Tooltip).attrs({children:react_default.a.createElement(ErrorIcon,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;__webpack_require__(307);react.Component;__webpack_require__(95),__webpack_require__(510);var Switch=__webpack_require__(515);Object(styled_components_browser_esm.default)(Switch.a)`
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
`;var Paper=__webpack_require__(983);const lighten=styled_components_browser_esm.css`
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
`,DialogPaper=(Object(createMuiTheme.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(styled_components_browser_esm.default)(Paper.a)`
  ${lighten};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`);var Dialog=__webpack_require__(992);__webpack_require__(984),__webpack_require__(985),__webpack_require__(986),__webpack_require__(987);Object(styled_components_browser_esm.default)(Dialog.a)`
  && {
    .MuiDialog-paper {
      ${lighten};

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
`;__webpack_require__(138);var IconButton=__webpack_require__(143);__webpack_require__(506),__webpack_require__(505),__webpack_require__(241);styled_components_browser_esm.css`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,styled_components_browser_esm.css`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`,styled_components_browser_esm.css`
  display: block;
  position: relative;
`,styled_components_browser_esm.css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`,styled_components_browser_esm.css`
  position: absolute;
  left: 100vw;
  top: 0;
  width: 200px;
  height: 300px;
`,Object(styled_components_browser_esm.default)(IconButton.a)`
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
`;styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var SnackbarContent=__webpack_require__(1032);const Snackbar_SnackbarContent=Object(styled_components_browser_esm.default)(SnackbarContent.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`,NormalSnackbarContent=Object(styled_components_browser_esm.default)(Snackbar_SnackbarContent)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,InfoSnackbarContent=Object(styled_components_browser_esm.default)(Snackbar_SnackbarContent)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,WarningSnackbarContent=Object(styled_components_browser_esm.default)(Snackbar_SnackbarContent)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,ErrorSnackbarContent=Object(styled_components_browser_esm.default)(Snackbar_SnackbarContent)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const enter=styled_components_browser_esm.keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;Object(styled_components_browser_esm.default)((function VideoBackgroundContainerBase({source:source,children:children,...divProps}){return react_default.a.createElement("div",divProps,react_default.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},source),children)}))`
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

    animation: ${enter} 1s ease-out;
  }
`;__webpack_require__.d(__webpack_exports__,"m",(function(){return withOPTComponentsStorybookGlobalStyle})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Button})),__webpack_require__.d(__webpack_exports__,"g",(function(){return Panel})),__webpack_require__.d(__webpack_exports__,"h",(function(){return SessionPanel})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ButtonLayout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return Slider_Slider})),__webpack_require__.d(__webpack_exports__,"k",(function(){return Tooltip_Tooltip})),__webpack_require__.d(__webpack_exports__,"c",(function(){return DialogPaper})),__webpack_require__.d(__webpack_exports__,"j",(function(){return Snackbar_SnackbarContent})),__webpack_require__.d(__webpack_exports__,"f",(function(){return NormalSnackbarContent})),__webpack_require__.d(__webpack_exports__,"e",(function(){return InfoSnackbarContent})),__webpack_require__.d(__webpack_exports__,"l",(function(){return WarningSnackbarContent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ErrorSnackbarContent}))},507:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ColorScalebar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(242),_env__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_LowToHigh__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(243),_Ticks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(244);function ColorScalebar({width:width,steps:steps,scaleImage:scaleImage,tickColor:tickColor,tickWidth:tickWidth=1,tickHeight:tickHeight=7,className:className,children:children}){const stepWidth=width/steps;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_1__.a,{className:className},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:width,height:_env__WEBPACK_IMPORTED_MODULE_2__.a+tickHeight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ticks__WEBPACK_IMPORTED_MODULE_4__.a,{steps:steps,y:_env__WEBPACK_IMPORTED_MODULE_2__.a,stepWidth:stepWidth,tickWidth:tickWidth,tickHeight:tickHeight,tickColor:tickColor}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect",{x:0,y:0,width:width,height:_env__WEBPACK_IMPORTED_MODULE_2__.a,fill:tickColor}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect",{x:1,y:1,width:width-2,height:_env__WEBPACK_IMPORTED_MODULE_2__.a-2,fill:"#000000"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(scaleImage,{x:1,y:1,width:width-2,height:_env__WEBPACK_IMPORTED_MODULE_2__.a-2})),children,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LowToHigh__WEBPACK_IMPORTED_MODULE_3__.a,{width:width,style:{top:_env__WEBPACK_IMPORTED_MODULE_2__.a+tickHeight}}))}},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GrayScalebar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(242),_env__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_LowToHigh__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(243),_Ticks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(244);function GrayScalebar({width:width,steps:steps,lines:lines,backgroundColor:backgroundColor,tickColor:tickColor,tickWidth:tickWidth=1,tickHeight:tickHeight=7,className:className,children:children}){const stepWidth=width/steps;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_1__.a,{className:className},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:width,height:_env__WEBPACK_IMPORTED_MODULE_2__.a+tickHeight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ticks__WEBPACK_IMPORTED_MODULE_4__.a,{steps:steps,y:_env__WEBPACK_IMPORTED_MODULE_2__.a,stepWidth:stepWidth,tickWidth:tickWidth,tickHeight:tickHeight,tickColor:tickColor||backgroundColor}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect",{x:0,y:0,width:width,height:_env__WEBPACK_IMPORTED_MODULE_2__.a,fill:backgroundColor}),lines.map(({step:step,lineWidth:strokeWidth,color:color})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line",{key:`step${step}`,x1:stepWidth*step,y1:0,x2:stepWidth*step,y2:_env__WEBPACK_IMPORTED_MODULE_2__.a,strokeWidth:strokeWidth,stroke:color}))),children,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LowToHigh__WEBPACK_IMPORTED_MODULE_3__.a,{width:width,style:{top:_env__WEBPACK_IMPORTED_MODULE_2__.a+tickHeight}}))}},511:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components_browser_esm=__webpack_require__(2);styled_components_browser_esm.default.div`
  color: #f05543;
`;var react=__webpack_require__(0),react_default=__webpack_require__.n(react);Object(styled_components_browser_esm.default)((function FooterBase({className:className}){return react_default.a.createElement("footer",{className:className},react_default.a.createElement("p",null,"Lunit INSIGHT for OPT"),react_default.a.createElement("p",null,"Contact ",react_default.a.createElement("a",{href:"mailto:insight@lunit.io"},"insight@lunit.io")),react_default.a.createElement("p",null,"© ",(new Date).getFullYear()," ",react_default.a.createElement("a",{href:"https://lunit.io",target:"_blank",rel:"noopener noreferrer"},"Lunit Inc.")," ","ALL RIGHTS RESERVED"))}))`
  color: #89a1b5;

  a {
    color: #0ca1c6;
    background-color: transparent;
    text-decoration: none;
  }

  i {
    font-style: normal;
    text-decoration: none;
    margin: auto 1em;
  }
`;var CircularProgress=__webpack_require__(512);const Progress=Object(styled_components_browser_esm.default)(CircularProgress.a)`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
`;__webpack_require__(137),__webpack_require__(224),__webpack_require__(172);__webpack_require__.d(__webpack_exports__,"a",(function(){return Progress}))},535:function(module,exports,__webpack_require__){__webpack_require__(536),__webpack_require__(682),module.exports=__webpack_require__(683)},600:function(module,exports){},683:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(493);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{enableShortcuts:!1,isToolshown:!1,theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.create)({base:"dark",appBg:"#141422",appContentBg:"#222232"})}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(928),module)}.call(this,__webpack_require__(49)(module))},928:function(module,exports,__webpack_require__){var map={"./__stories__/use-resize-observer.stories.tsx":929,"./_packages/@lunit/opt-components/__stories__/Button.stories.tsx":936,"./_packages/@lunit/opt-components/__stories__/DialogPaper.stories.tsx":937,"./_packages/@lunit/opt-components/__stories__/Panel.stories.tsx":938,"./_packages/@lunit/opt-components/__stories__/Slider.stories.tsx":939,"./_packages/@lunit/opt-components/__stories__/Snackbar.stories.tsx":940,"./_packages/@lunit/opt-components/__stories__/Tooltip.stories.tsx":941,"./_packages/@lunit/opt-control-icons/__stories__/opt-control-icons.stories.tsx":942,"./_packages/@lunit/opt-login-components/__stories__/Button.stories.tsx":943,"./_packages/@lunit/opt-login-components/__stories__/TextInput.stories.tsx":944,"./_packages/@lunit/scalebar/__stories__/Scalebar.stories.tsx":945,"./_packages/@lunit/use-dialog/__stories__/useDialog.stories.tsx":980,"./_packages/@lunit/use-shortcut/__stories__/useShortcut.stories.tsx":981};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=928},929:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useResizeObserverSample",(function(){return useResizeObserverSample}));var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),use_resize_observer_polyfilled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(241),use_resize_observer_polyfilled__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(use_resize_observer_polyfilled__WEBPACK_IMPORTED_MODULE_3__),addSourceDecorator=(__webpack_require__(16).withSource,__webpack_require__(16).addSource);Object(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.installWADOImageLoader)(),__webpack_exports__.default={parameters:{storySource:{source:"import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  InsightViewer,\n  InsightViewerContainer,\n  installWADOImageLoader,\n  unloadWADOImage,\n  useInsightViewerSync,\n  withInsightViewerStorybookGlobalStyle,\n} from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport React, { useMemo } from 'react';\nimport useResizeObserver from 'use-resize-observer/polyfilled';\n\ninstallWADOImageLoader();\n\nexport default {\n  title: 'libraries',\n  decorators: [withInsightViewerStorybookGlobalStyle, withOPTComponentsStorybookGlobalStyle],\n};\n\nexport const useResizeObserverSample = () => {\n  const resetTime: number = useMemo(() => Date.now(), []);\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://lunit-frontend-fixtures.netlify.com/dcm-files/series/CT000010.dcm`, {\n        unload: unloadWADOImage,\n      }),\n    [],\n  );\n\n  const { updateCornerstoneRenderData } = useInsightViewerSync();\n\n  // 특정 Element의 width, height를 지속적으로 감지한다\n  // flex 등 layout으로 처리된 <div> Element의 width, height를 useResizeObserver()로 받아서\n  // <InsightViewer width={width} height={height}> 로 넘길 수 있다\n  const { ref: resizeRef, width = 500, height = 500 } = useResizeObserver<HTMLDivElement>({});\n\n  return (\n    <div ref={resizeRef} style={{ width: '50vw', height: '80vh' }}>\n      <InsightViewerContainer width={width} height={height}>\n        <InsightViewer\n          width={width}\n          height={height}\n          invert={false}\n          flip={false}\n          pan\n          adjust={false}\n          zoom={false}\n          resetTime={resetTime}\n          image={image}\n          updateCornerstoneRenderData={updateCornerstoneRenderData}\n        />\n      </InsightViewerContainer>\n    </div>\n  );\n};\n\nuseResizeObserverSample.story = {\n  name: 'use-resize-observer',\n};\n",locationsMap:{"libraries--use-resize-observer-sample":{startLoc:{col:39,line:22},endLoc:{col:1,line:57},startBody:{col:39,line:22},endBody:{col:1,line:57}}}}},title:"libraries",decorators:[_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle,_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m]};const useResizeObserverSample=addSourceDecorator(()=>{const resetTime=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>Date.now(),[]),image=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>new _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.CornerstoneSingleImage("wadouri:https://lunit-frontend-fixtures.netlify.com/dcm-files/series/CT000010.dcm",{unload:_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.unloadWADOImage}),[]),{updateCornerstoneRenderData:updateCornerstoneRenderData}=Object(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.useInsightViewerSync)(),{ref:resizeRef,width:width=500,height:height=500}=use_resize_observer_polyfilled__WEBPACK_IMPORTED_MODULE_3___default()({});return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{ref:resizeRef,style:{width:"50vw",height:"80vh"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.InsightViewerContainer,{width:width,height:height},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.InsightViewer,{width:width,height:height,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!1,resetTime:resetTime,image:image,updateCornerstoneRenderData:updateCornerstoneRenderData})))},{__STORY__:"import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  InsightViewer,\n  InsightViewerContainer,\n  installWADOImageLoader,\n  unloadWADOImage,\n  useInsightViewerSync,\n  withInsightViewerStorybookGlobalStyle,\n} from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport React, { useMemo } from 'react';\nimport useResizeObserver from 'use-resize-observer/polyfilled';\n\ninstallWADOImageLoader();\n\nexport default {\n  title: 'libraries',\n  decorators: [withInsightViewerStorybookGlobalStyle, withOPTComponentsStorybookGlobalStyle],\n};\n\nexport const useResizeObserverSample = () => {\n  const resetTime: number = useMemo(() => Date.now(), []);\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://lunit-frontend-fixtures.netlify.com/dcm-files/series/CT000010.dcm`, {\n        unload: unloadWADOImage,\n      }),\n    [],\n  );\n\n  const { updateCornerstoneRenderData } = useInsightViewerSync();\n\n  // 특정 Element의 width, height를 지속적으로 감지한다\n  // flex 등 layout으로 처리된 <div> Element의 width, height를 useResizeObserver()로 받아서\n  // <InsightViewer width={width} height={height}> 로 넘길 수 있다\n  const { ref: resizeRef, width = 500, height = 500 } = useResizeObserver<HTMLDivElement>({});\n\n  return (\n    <div ref={resizeRef} style={{ width: '50vw', height: '80vh' }}>\n      <InsightViewerContainer width={width} height={height}>\n        <InsightViewer\n          width={width}\n          height={height}\n          invert={false}\n          flip={false}\n          pan\n          adjust={false}\n          zoom={false}\n          resetTime={resetTime}\n          image={image}\n          updateCornerstoneRenderData={updateCornerstoneRenderData}\n        />\n      </InsightViewerContainer>\n    </div>\n  );\n};\n\nuseResizeObserverSample.story = {\n  name: 'use-resize-observer',\n};\n",__ADDS_MAP__:{"libraries--use-resize-observer-sample":{startLoc:{col:39,line:22},endLoc:{col:1,line:57},startBody:{col:39,line:22},endBody:{col:1,line:57}}},__MAIN_FILE_LOCATION__:"/use-resize-observer.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/travis/build/lunit-io/frontend-components/src/__stories__",__IDS_TO_FRAMEWORKS__:{}});useResizeObserverSample.story={name:"use-resize-observer"}},936:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,'import { withInsightViewerStorybookGlobalStyle } from \'@lunit/insight-viewer\';\nimport { Button, ButtonLayout, withOPTComponentsStorybookGlobalStyle } from \'@lunit/opt-components\';\nimport { AdjustIcon, MagnifyIcon, PanIcon, PenIcon } from \'@lunit/opt-control-icons\';\nimport { storiesOf } from \'@storybook/react\';\nimport React, { Fragment } from \'react\';\nimport styled from \'styled-components\';\n\nconst directions = [\'vertical\', \'horizontal\'] as const;\n\nstoriesOf(\'opt-components\', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add(\'Button\', () => (\n    <Container>\n      {directions.map(direction => (\n        <Fragment key={direction}>\n          <div style={{ width: direction === \'vertical\' ? 200 : 500 }}>\n            <ButtonLayout direction={direction}>\n              <Button layout="left" label="PEN" icon={<PenIcon />} />\n              <Button layout="left" label="PAN" icon={<PanIcon />} selected />\n              <Button layout="left" label="ADJUST" icon={<AdjustIcon />} />\n              <Button layout="left" label="MAGNIFY" icon={<MagnifyIcon />} disabled />\n            </ButtonLayout>\n          </div>\n\n          <div style={{ width: direction === \'vertical\' ? 200 : 330 }}>\n            <ButtonLayout direction={direction}>\n              <Button layout="center" label="PEN" />\n              <Button layout="center" label="PAN" selected />\n              <Button layout="center" label="ADJUST" />\n              <Button layout="center" label="MAGNIFY" disabled />\n            </ButtonLayout>\n          </div>\n\n          <div style={{ width: 200 }}>\n            <ButtonLayout direction={direction}>\n              <Button layout="center" icon={<PenIcon />} />\n              <Button layout="center" icon={<PanIcon />} selected />\n              <Button layout="center" icon={<AdjustIcon />} />\n              <Button layout="center" icon={<MagnifyIcon />} disabled />\n            </ButtonLayout>\n          </div>\n\n          <div style={{ width: direction === \'vertical\' ? 200 : 500 }}>\n            <ButtonLayout direction={direction}>\n              <Button layout="left" label="PEN" />\n              <Button layout="left" label="PAN" selected />\n              <Button layout="left" label="ADJUST" />\n              <Button layout="left" label="MAGNIFY" disabled />\n            </ButtonLayout>\n          </div>\n\n          <BlueButtonDiv style={{ width: direction === \'vertical\' ? 200 : 500 }}>\n            <ButtonLayout direction={direction}>\n              <Button layout="left" label="PEN" icon={<PenIcon />} />\n              <Button layout="left" label="PAN" icon={<PanIcon />} selected />\n              <Button layout="left" label="ADJUST" icon={<AdjustIcon />} />\n              <Button layout="left" label="MAGNIFY" icon={<MagnifyIcon />} disabled />\n            </ButtonLayout>\n          </BlueButtonDiv>\n        </Fragment>\n      ))}\n    </Container>\n  ));\n\nconst Container = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n\n  > div {\n    margin-right: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-flow: column;\n    width: 200px;\n    padding: 10px;\n    background-color: #1e2d47;\n  }\n`;\n\nconst BlueButtonDiv = styled.div`\n  --button-background-color: #a892ff;\n  --button-label-color: rgba(255, 255, 255, 0.8);\n  --button-background-color-hover: #907ae5;\n  --button-label-color-hover: rgba(255, 255, 255, 1);\n  --button-background-color-selected: #7763bf;\n  --button-label-color-selected: rgba(255, 255, 255, 1);\n  --button-background-color-disabled: #8b75ca;\n  --button-label-color-disabled: rgba(255, 255, 255, 0.2);\n`;\n'),__ADDS_MAP__={"opt-components--button":{startLoc:{col:7,line:13},endLoc:{col:3,line:64},startBody:{col:17,line:13},endBody:{col:3,line:64}}};const directions=["vertical","horizontal"];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("opt-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Button.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("Button",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container,null,directions.map(direction=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,{key:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{width:"vertical"===direction?200:500}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PEN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.h,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PAN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.g,null),selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"ADJUST",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"MAGNIFY",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.f,null),disabled:!0}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{width:"vertical"===direction?200:330}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",label:"PEN"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",label:"PAN",selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",label:"ADJUST"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",label:"MAGNIFY",disabled:!0}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{width:200}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.h,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.g,null),selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"center",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.f,null),disabled:!0}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{width:"vertical"===direction?200:500}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PEN"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PAN",selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"ADJUST"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"MAGNIFY",disabled:!0}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BlueButtonDiv,{style:{width:"vertical"===direction?200:500}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:direction},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PEN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.h,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PAN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.g,null),selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"ADJUST",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"MAGNIFY",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.f,null),disabled:!0})))))));const Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: column;
    width: 200px;
    padding: 10px;
    background-color: #1e2d47;
  }
`,BlueButtonDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
  --button-background-color: #a892ff;
  --button-label-color: rgba(255, 255, 255, 0.8);
  --button-background-color-hover: #907ae5;
  --button-label-color-hover: rgba(255, 255, 255, 1);
  --button-background-color-selected: #7763bf;
  --button-label-color-selected: rgba(255, 255, 255, 1);
  --button-background-color-disabled: #8b75ca;
  --button-label-color-disabled: rgba(255, 255, 255, 0.2);
`}.call(this,__webpack_require__(49)(module))},937:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DialogPaperSample",(function(){return DialogPaperSample}));var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(991),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),addSourceDecorator=(__webpack_require__(16).withSource,__webpack_require__(16).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { DialogPaper, Button, withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport React, { useState } from 'react';\nimport { Modal } from '@material-ui/core';\nimport styled from 'styled-components';\n\nexport default {\n  title: 'opt-components',\n  component: DialogPaper,\n  decorators: [withOPTComponentsStorybookGlobalStyle, withInsightViewerStorybookGlobalStyle],\n};\n\nexport const DialogPaperSample = () => {\n  const [modalOpen, setModalOpen] = useState<boolean>(true);\n\n  return (\n    <>\n      <CenterModal open={modalOpen} onClose={() => setModalOpen(false)}>\n        <DialogPaper>\n          <p>Hello World</p>\n\n          <div style={{ marginTop: 17 }}>\n            <Button onClick={() => setModalOpen(false)} style={{ width: 130 }} layout=\"center\" label=\"CLOSE\" />\n          </div>\n        </DialogPaper>\n      </CenterModal>\n      {!modalOpen && <Button onClick={() => setModalOpen(true)} style={{ width: 100 }} layout=\"center\" label=\"show\" />}\n    </>\n  );\n};\n\nconst CenterModal = styled(Modal)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n`;\n\nDialogPaperSample.story = {\n  name: 'DialogPaper',\n};\n",locationsMap:{"opt-components--dialog-paper-sample":{startLoc:{col:33,line:13},endLoc:{col:1,line:30},startBody:{col:33,line:13},endBody:{col:1,line:30}}}}},title:"opt-components",component:_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.c,decorators:[_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.m,_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__.withInsightViewerStorybookGlobalStyle]};const DialogPaperSample=addSourceDecorator(()=>{const[modalOpen,setModalOpen]=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!0);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenterModal,{open:modalOpen,onClose:()=>setModalOpen(!1)},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.c,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,"Hello World"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{marginTop:17}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:()=>setModalOpen(!1),style:{width:130},layout:"center",label:"CLOSE"})))),!modalOpen&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:()=>setModalOpen(!0),style:{width:100},layout:"center",label:"show"}))},{__STORY__:"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { DialogPaper, Button, withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport React, { useState } from 'react';\nimport { Modal } from '@material-ui/core';\nimport styled from 'styled-components';\n\nexport default {\n  title: 'opt-components',\n  component: DialogPaper,\n  decorators: [withOPTComponentsStorybookGlobalStyle, withInsightViewerStorybookGlobalStyle],\n};\n\nexport const DialogPaperSample = () => {\n  const [modalOpen, setModalOpen] = useState<boolean>(true);\n\n  return (\n    <>\n      <CenterModal open={modalOpen} onClose={() => setModalOpen(false)}>\n        <DialogPaper>\n          <p>Hello World</p>\n\n          <div style={{ marginTop: 17 }}>\n            <Button onClick={() => setModalOpen(false)} style={{ width: 130 }} layout=\"center\" label=\"CLOSE\" />\n          </div>\n        </DialogPaper>\n      </CenterModal>\n      {!modalOpen && <Button onClick={() => setModalOpen(true)} style={{ width: 100 }} layout=\"center\" label=\"show\" />}\n    </>\n  );\n};\n\nconst CenterModal = styled(Modal)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n`;\n\nDialogPaperSample.story = {\n  name: 'DialogPaper',\n};\n",__ADDS_MAP__:{"opt-components--dialog-paper-sample":{startLoc:{col:33,line:13},endLoc:{col:1,line:30},startBody:{col:33,line:13},endBody:{col:1,line:30}}},__MAIN_FILE_LOCATION__:"/DialogPaper.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",__IDS_TO_FRAMEWORKS__:{}}),CenterModal=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_0__.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;DialogPaperSample.story={name:"DialogPaper"}},938:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport {\n  Button,\n  ButtonLayout,\n  Panel,\n  SessionPanel,\n  withOPTComponentsStorybookGlobalStyle,\n} from '@lunit/opt-components';\nimport { AdjustIcon, MagnifyIcon, PanIcon, PenIcon } from '@lunit/opt-control-icons';\nimport { storiesOf } from '@storybook/react';\nimport React, { ReactNode, SVGProps } from 'react';\nimport styled from 'styled-components';\n\nstoriesOf('opt-components', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('Panel', () => (\n    <Container>\n      {[200, 250, 300].map(width => (\n        <div key={'width-' + width} style={{ width }}>\n          <SessionPanel title=\"TEST\" style={{ marginBottom: 6 }} sessionId={'session-panel-' + width}>\n            {expanded => (\n              <ButtonLayout direction={expanded ? 'vertical' : 'horizontal'}>\n                <Button layout={expanded ? 'left' : 'center'} label={expanded ? 'PEN' : undefined} icon={<PenIcon />} />\n                <Button\n                  layout={expanded ? 'left' : 'center'}\n                  label={expanded ? 'PAN' : undefined}\n                  icon={<PanIcon />}\n                  selected\n                />\n                <Button\n                  layout={expanded ? 'left' : 'center'}\n                  label={expanded ? 'ADJUST' : undefined}\n                  icon={<AdjustIcon />}\n                />\n                <Button\n                  layout={expanded ? 'left' : 'center'}\n                  label={expanded ? 'MAGNIFY' : undefined}\n                  icon={<MagnifyIcon />}\n                  disabled\n                />\n              </ButtonLayout>\n            )}\n          </SessionPanel>\n\n          <Panel title=\"TEST\" style={{ backgroundColor: '#294723' }}>\n            <ButtonLayout direction=\"vertical\">\n              <Button layout=\"left\" label=\"PEN\" icon={<PenIcon />} />\n              <Button layout=\"left\" label=\"PAN\" icon={<PanIcon />} selected />\n              <Button layout=\"left\" label=\"ADJUST\" icon={<AdjustIcon />} />\n              <Button layout=\"left\" label=\"MAGNIFY\" icon={<MagnifyIcon />} disabled />\n            </ButtonLayout>\n          </Panel>\n        </div>\n      ))}\n\n      <LineText x={600} y={15} width={600} height={20} textAnchor=\"end\" stroke=\"#000000\" fill=\"#ffffff\">\n        <tspan fill=\"blue\">Hello</tspan> World? <tspan fill=\"red\">Hello</tspan> World?\n      </LineText>\n    </Container>\n  ));\n\nfunction LineText({\n  children,\n  width,\n  height,\n  stroke,\n  fill,\n  ...props\n}: { children: ReactNode } & SVGProps<SVGTextElement>) {\n  return (\n    <svg width={width} height={height} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>\n      <text\n        {...props}\n        width={width}\n        height={height}\n        stroke={stroke}\n        strokeWidth={5}\n        strokeLinejoin=\"round\"\n        strokeLinecap=\"round\"\n      >\n        {children}\n      </text>\n      <text {...props} width={width} height={height} fill={fill}>\n        {children}\n      </text>\n    </svg>\n  );\n}\n\nconst Container = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n\n  > div {\n    margin-right: 10px;\n    margin-bottom: 10px;\n    background-color: #040a17;\n    padding: 10px 0;\n    display: flex;\n    flex-flow: column;\n  }\n`;\n"),__ADDS_MAP__={"opt-components--panel":{startLoc:{col:7,line:17},endLoc:{col:3,line:61},startBody:{col:16,line:17},endBody:{col:3,line:61}}};function LineText({children:children,width:width,height:height,stroke:stroke,fill:fill,...props}){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg",{width:width,height:height,style:{backgroundColor:"rgba(255, 255, 255, 0.1)"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("text",Object.assign({},props,{width:width,height:height,stroke:stroke,strokeWidth:5,strokeLinejoin:"round",strokeLinecap:"round"}),children),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("text",Object.assign({},props,{width:width,height:height,fill:fill}),children))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("opt-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Panel.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("Panel",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container,null,[200,250,300].map(width=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{key:"width-"+width,style:{width:width}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.h,{title:"TEST",style:{marginBottom:6},sessionId:"session-panel-"+width},expanded=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:expanded?"vertical":"horizontal"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:expanded?"left":"center",label:expanded?"PEN":void 0,icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.h,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:expanded?"left":"center",label:expanded?"PAN":void 0,icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.g,null),selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:expanded?"left":"center",label:expanded?"ADJUST":void 0,icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:expanded?"left":"center",label:expanded?"MAGNIFY":void 0,icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.f,null),disabled:!0}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.g,{title:"TEST",style:{backgroundColor:"#294723"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.b,{direction:"vertical"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PEN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.h,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"PAN",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.g,null),selected:!0}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"ADJUST",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.a,{layout:"left",label:"MAGNIFY",icon:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_control_icons__WEBPACK_IMPORTED_MODULE_2__.f,null),disabled:!0}))))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LineText,{x:600,y:15,width:600,height:20,textAnchor:"end",stroke:"#000000",fill:"#ffffff"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tspan",{fill:"blue"},"Hello")," World? ",react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tspan",{fill:"red"},"Hello")," World?")));const Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: #040a17;
    padding: 10px 0;
    display: flex;
    flex-flow: column;
  }
`}.call(this,__webpack_require__(49)(module))},939:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"BlueSlider",(function(){return BlueSlider}));var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { Slider, withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { storiesOf } from '@storybook/react';\nimport React from 'react';\nimport styled from 'styled-components';\n\nstoriesOf('opt-components', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('Slider', () => (\n    <div style={{ width: 300, margin: 20 }}>\n      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 30px' }}>\n        <Slider defaultValue={50} />\n      </div>\n\n      <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', padding: '10px 30px' }}>\n        <BlueSlider defaultValue={50} />\n      </div>\n    </div>\n  ));\n\nexport const BlueSlider = styled(Slider)`\n  --slider-rail-color: rgba(86, 81, 136, 0.4);\n  --slider-thumb-color: #6b6b9b;\n  --slider-track-color: rgba(86, 81, 136, 0.6);\n  --slider-value-label-color: #ffffff;\n`;\n"),__ADDS_MAP__={"opt-components--slider":{startLoc:{col:7,line:10},endLoc:{col:3,line:20},startBody:{col:17,line:10},endBody:{col:3,line:20}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("opt-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Slider.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("Slider",()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{width:300,margin:20}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.2)",padding:"10px 30px"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.i,{defaultValue:50})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 1)",padding:"10px 30px"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BlueSlider,{defaultValue:50}))));const BlueSlider=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.i)`
  --slider-rail-color: rgba(86, 81, 136, 0.4);
  --slider-thumb-color: #6b6b9b;
  --slider-track-color: rgba(86, 81, 136, 0.6);
  --slider-value-label-color: #ffffff;
`}.call(this,__webpack_require__(49)(module))},940:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(143),_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(141),_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(109),_storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,'import { withInsightViewerStorybookGlobalStyle } from \'@lunit/insight-viewer\';\nimport {\n  ErrorSnackbarContent,\n  InfoSnackbarContent,\n  NormalSnackbarContent,\n  SnackbarContent,\n  WarningSnackbarContent,\n  withOPTComponentsStorybookGlobalStyle,\n} from \'@lunit/opt-components\';\nimport { Button, IconButton } from \'@material-ui/core\';\nimport { Close } from \'@material-ui/icons\';\nimport { Snackbar, SnackbarProvider, useSnackbar } from \'@ssen/snackbar\';\nimport { storiesOf } from \'@storybook/react\';\nimport React from \'react\';\nimport styled from \'styled-components\';\n\nlet count: number = 0;\n\nfunction Basic() {\n  const { addSnackbar, snackbarContainer } = useSnackbar();\n\n  return (\n    <Container>\n      <button\n        onClick={() => {\n          count++;\n\n          addSnackbar(\n            <Snackbar autoClose={false}>\n              <SnackbarContent\n                message={`${count} HELLO SNACKBAR!`}\n                action={[\n                  <Button key="undo" color="inherit" size="small">\n                    UNDO\n                  </Button>,\n                  <IconButton key="close" aria-label="close" color="inherit">\n                    <Close />\n                  </IconButton>,\n                ]}\n              />\n            </Snackbar>,\n          );\n        }}\n      >\n        Default\n      </button>\n\n      <button\n        onClick={() => {\n          count++;\n\n          addSnackbar(\n            <Snackbar autoClose={false}>\n              <NormalSnackbarContent\n                message={`${count} HELLO SNACKBAR!`}\n                action={[\n                  <Button key="undo" color="inherit" size="small">\n                    UNDO\n                  </Button>,\n                  <IconButton key="close" aria-label="close" color="inherit">\n                    <Close />\n                  </IconButton>,\n                ]}\n              />\n            </Snackbar>,\n          );\n        }}\n      >\n        Normal\n      </button>\n\n      <button\n        onClick={() => {\n          count++;\n\n          addSnackbar(\n            <Snackbar autoClose={false}>\n              <InfoSnackbarContent\n                message={`${count} HELLO SNACKBAR!`}\n                action={[\n                  <Button key="undo" color="inherit" size="small">\n                    UNDO\n                  </Button>,\n                  <IconButton key="close" aria-label="close" color="inherit">\n                    <Close />\n                  </IconButton>,\n                ]}\n              />\n            </Snackbar>,\n          );\n        }}\n      >\n        Info\n      </button>\n\n      <button\n        onClick={() => {\n          count++;\n\n          addSnackbar(\n            <Snackbar autoClose={false}>\n              <WarningSnackbarContent\n                message={`${count} HELLO SNACKBAR!`}\n                action={[\n                  <Button key="undo" color="inherit" size="small">\n                    UNDO\n                  </Button>,\n                  <IconButton key="close" aria-label="close" color="inherit">\n                    <Close />\n                  </IconButton>,\n                ]}\n              />\n            </Snackbar>,\n          );\n        }}\n      >\n        Warning\n      </button>\n\n      <button\n        onClick={() => {\n          count++;\n\n          addSnackbar(\n            <Snackbar autoClose={false}>\n              <ErrorSnackbarContent\n                message={`${count} HELLO SNACKBAR!`}\n                action={[\n                  <Button key="undo" color="inherit" size="small">\n                    UNDO\n                  </Button>,\n                  <IconButton key="close" aria-label="close" color="inherit">\n                    <Close />\n                  </IconButton>,\n                ]}\n              />\n            </Snackbar>,\n          );\n        }}\n      >\n        Error\n      </button>\n\n      <SnackbarContainer ref={snackbarContainer} />\n    </Container>\n  );\n}\n\nstoriesOf(\'opt-components\', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .addDecorator(storyFn => <SnackbarProvider>{storyFn()}</SnackbarProvider>)\n  .add(\'<Snackbar>\', () => <Basic />);\n\nconst Container = styled.div`\n  position: relative;\n  width: 700px;\n  height: 400px;\n  border: 1px solid white;\n`;\n\nconst SnackbarContainer = styled.div`\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: right;\n  align-items: flex-end;\n\n  > * {\n    margin-top: 10px;\n  }\n`;\n'),__ADDS_MAP__={"opt-components--snackbar":{startLoc:{col:7,line:153},endLoc:{col:36,line:153},startBody:{col:21,line:153},endBody:{col:36,line:153}}};let count=0;function Basic(){const{addSnackbar:addSnackbar,snackbarContainer:snackbarContainer}=Object(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)();return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:()=>{count++,addSnackbar(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.Snackbar,{autoClose:!1},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.j,{message:`${count} HELLO SNACKBAR!`,action:[react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{key:"undo",color:"inherit",size:"small"},"UNDO"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,{key:"close","aria-label":"close",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a,null))]})))}},"Default"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:()=>{count++,addSnackbar(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.Snackbar,{autoClose:!1},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.f,{message:`${count} HELLO SNACKBAR!`,action:[react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{key:"undo",color:"inherit",size:"small"},"UNDO"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,{key:"close","aria-label":"close",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a,null))]})))}},"Normal"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:()=>{count++,addSnackbar(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.Snackbar,{autoClose:!1},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.e,{message:`${count} HELLO SNACKBAR!`,action:[react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{key:"undo",color:"inherit",size:"small"},"UNDO"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,{key:"close","aria-label":"close",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a,null))]})))}},"Info"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:()=>{count++,addSnackbar(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.Snackbar,{autoClose:!1},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.l,{message:`${count} HELLO SNACKBAR!`,action:[react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{key:"undo",color:"inherit",size:"small"},"UNDO"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,{key:"close","aria-label":"close",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a,null))]})))}},"Warning"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:()=>{count++,addSnackbar(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.Snackbar,{autoClose:!1},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.d,{message:`${count} HELLO SNACKBAR!`,action:[react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{key:"undo",color:"inherit",size:"small"},"UNDO"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__.a,{key:"close","aria-label":"close",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default.a,null))]})))}},"Error"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SnackbarContainer,{ref:snackbarContainer}))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)("opt-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Snackbar.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_4__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_3__.withInsightViewerStorybookGlobalStyle).addDecorator(storyFn=>react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ssen_snackbar__WEBPACK_IMPORTED_MODULE_5__.SnackbarProvider,null,storyFn())).add("<Snackbar>",()=>react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Basic,null));const Container=styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div`
  position: relative;
  width: 700px;
  height: 400px;
  border: 1px solid white;
`,SnackbarContainer=styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: right;
  align-items: flex-end;

  > * {
    margin-top: 10px;
  }
`}.call(this,__webpack_require__(49)(module))},941:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0__),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { Tooltip, withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { Error } from '@material-ui/icons';\nimport { storiesOf } from '@storybook/react';\nimport React from 'react';\nimport styled from 'styled-components';\n\nstoriesOf('opt-components', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('Tooltip', () => {\n    const title = (\n      <div>\n        <h1>Hello</h1>\n        <p>World!!! World!!!</p>\n      </div>\n    );\n\n    return (\n      <>\n        <Grid style={{ marginLeft: 170, marginTop: 150 }}>\n          <Tooltip title={title} placement=\"top\" open>\n            <Error />\n          </Tooltip>\n\n          <Tooltip title={title} placement=\"right\" open>\n            <Error />\n          </Tooltip>\n\n          <Tooltip title={title} placement=\"left\" open>\n            <Error />\n          </Tooltip>\n\n          <Tooltip title={title} placement=\"bottom\" open>\n            <Error />\n          </Tooltip>\n        </Grid>\n\n        <Grid style={{ marginLeft: 570, marginTop: 150 }}>\n          <WarningTooltip title={title} placement=\"top\" open>\n            <Error style={{ color: 'red' }} />\n          </WarningTooltip>\n\n          <WarningTooltip title={title} placement=\"right\" open>\n            <Error style={{ color: 'red' }} />\n          </WarningTooltip>\n\n          <WarningTooltip title={title} placement=\"left\" open>\n            <Error style={{ color: 'red' }} />\n          </WarningTooltip>\n\n          <WarningTooltip title={title} placement=\"bottom\" open>\n            <Error style={{ color: 'red' }} />\n          </WarningTooltip>\n        </Grid>\n      </>\n    );\n  });\n\nconst WarningTooltip = styled(Tooltip)`\n  --tooltip-background-color: red;\n  --tooltip-color: yellow;\n`;\n\nconst Grid = styled.div`\n  position: fixed;\n\n  display: grid;\n  grid-template-columns: 100px 100px;\n  grid-template-rows: 100px 100px;\n`;\n"),__ADDS_MAP__={"opt-components--tooltip":{startLoc:{col:7,line:11},endLoc:{col:3,line:58},startBody:{col:18,line:11},endBody:{col:3,line:58}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("opt-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Tooltip.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__.withInsightViewerStorybookGlobalStyle).add("Tooltip",()=>{const title=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"Hello"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",null,"World!!! World!!!"));return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Grid,{style:{marginLeft:170,marginTop:150}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.k,{title:title,placement:"top",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,null)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.k,{title:title,placement:"right",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,null)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.k,{title:title,placement:"left",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,null)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.k,{title:title,placement:"bottom",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,null))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Grid,{style:{marginLeft:570,marginTop:150}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WarningTooltip,{title:title,placement:"top",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,{style:{color:"red"}})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WarningTooltip,{title:title,placement:"right",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,{style:{color:"red"}})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WarningTooltip,{title:title,placement:"left",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,{style:{color:"red"}})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WarningTooltip,{title:title,placement:"bottom",open:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_0___default.a,{style:{color:"red"}}))))});const WarningTooltip=Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.k)`
  --tooltip-background-color: red;
  --tooltip-color: yellow;
`,Grid=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
  position: fixed;

  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
`}.call(this,__webpack_require__(49)(module))},942:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { Typography } from '@material-ui/core';\nimport { storiesOf } from '@storybook/react';\nimport React from 'react';\nimport { AdjustIcon, CircleIcon, FlipIcon, InvertIcon, MagnifyIcon, PanIcon, PenIcon, ResetIcon, LunitIcon } from '../';\n\nstoriesOf('opt-contol-icons', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('Icons', () => (\n    <Typography>\n      <AdjustIcon />\n      <FlipIcon />\n      <InvertIcon />\n      <MagnifyIcon />\n      <PanIcon />\n      <PenIcon />\n      <ResetIcon />\n      <CircleIcon />\n      <LunitIcon />\n    </Typography>\n  ));\n"),__ADDS_MAP__={"opt-contol-icons--icons":{startLoc:{col:7,line:11},endLoc:{col:3,line:23},startBody:{col:16,line:11},endBody:{col:3,line:23}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("opt-contol-icons",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/opt-control-icons.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-control-icons/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__.withInsightViewerStorybookGlobalStyle).add("Icons",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.a,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.c,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.d,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.f,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.g,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.h,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.i,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.b,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.e,null)))}.call(this,__webpack_require__(49)(module))},943:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_lunit_opt_login_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(511),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(137),_components_SubmitContainer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(224),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { Progress } from '@lunit/opt-login-components';\nimport { storiesOf } from '@storybook/react';\nimport React, { CSSProperties } from 'react';\nimport { Button } from '../components/Button';\nimport { SubmitContainer } from '../components/SubmitContainer';\n\nconst style: CSSProperties = { width: 300 };\n\nstoriesOf('opt-login-components', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('<Button>', () => (\n    <Button style={style} variant=\"outlined\" size=\"large\">\n      Submit\n    </Button>\n  ))\n  .add('<Button disabled>', () => (\n    <Button style={style} variant=\"outlined\" size=\"large\" disabled>\n      Submit\n    </Button>\n  ))\n  .add('<Button> + <Progress>', () => (\n    <SubmitContainer style={style}>\n      <Button style={style} variant=\"outlined\" size=\"large\" disabled>\n        Submit\n      </Button>\n\n      <Progress size={24} />\n    </SubmitContainer>\n  ));\n"),__ADDS_MAP__={"opt-login-components--button-progress":{startLoc:{col:7,line:24},endLoc:{col:3,line:32},startBody:{col:32,line:24},endBody:{col:3,line:32}},"opt-login-components--button-disabled":{startLoc:{col:7,line:19},endLoc:{col:3,line:23},startBody:{col:28,line:19},endBody:{col:3,line:23}},"opt-login-components--button":{startLoc:{col:7,line:14},endLoc:{col:3,line:18},startBody:{col:19,line:14},endBody:{col:3,line:18}}};const style={width:300};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("opt-login-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Button.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-login-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("<Button>",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__.a,{style:style,variant:"outlined",size:"large"},"Submit")).add("<Button disabled>",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__.a,{style:style,variant:"outlined",size:"large",disabled:!0},"Submit")).add("<Button> + <Progress>",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SubmitContainer__WEBPACK_IMPORTED_MODULE_6__.a,{style:style},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__.a,{style:style,variant:"outlined",size:"large",disabled:!0},"Submit"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lunit_opt_login_components__WEBPACK_IMPORTED_MODULE_2__.a,{size:24})))}.call(this,__webpack_require__(49)(module))},944:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_components_TextInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { storiesOf } from '@storybook/react';\nimport React, { CSSProperties } from 'react';\nimport { TextInput } from '../components/TextInput';\n\nconst style: CSSProperties = { width: 300 };\n\nstoriesOf('opt-login-components', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('<TextInput>', () => <TextInput style={style} placeholder=\"PLACEHOLDER\" margin=\"dense\" variant=\"outlined\" />)\n  .add('<TextInput disabled>', () => (\n    <TextInput style={style} placeholder=\"PLACEHOLDER\" margin=\"dense\" variant=\"outlined\" disabled />\n  ));\n"),__ADDS_MAP__={"opt-login-components--textinput-disabled":{startLoc:{col:7,line:13},endLoc:{col:3,line:15},startBody:{col:31,line:13},endBody:{col:3,line:15}},"opt-login-components--textinput":{startLoc:{col:7,line:12},endLoc:{col:115,line:12},startBody:{col:22,line:12},endBody:{col:115,line:12}}};const style={width:300};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("opt-login-components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/opt-login-components/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("<TextInput>",()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__.a,{style:style,placeholder:"PLACEHOLDER",margin:"dense",variant:"outlined"})).add("<TextInput disabled>",()=>react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__.a,{style:style,placeholder:"PLACEHOLDER",margin:"dense",variant:"outlined",disabled:!0}))}.call(this,__webpack_require__(49)(module))},945:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_heatmap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(175),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(142),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),_components_ColorScalebar__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(507),_components_GrayScalebar__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(508),_env__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(40),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { HeatmapScaleSVGImage } from '@lunit/heatmap';\nimport { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { number, radios, withKnobs } from '@storybook/addon-knobs';\nimport { storiesOf } from '@storybook/react';\nimport React, { ReactNode } from 'react';\nimport styled from 'styled-components';\nimport { ColorScalebar } from '../components/ColorScalebar';\nimport { GrayScalebar } from '../components/GrayScalebar';\nimport { scalebarHeight } from '../env';\n\nconst ScalebarTopLabel = styled.span`\n  font-size: 11px;\n  font-weight: 200;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: 2px;\n  color: #ffffff;\n\n  position: absolute;\n  text-align: justify;\n  text-align-last: justify;\n  text-justify: inter-word;\n  top: -20px;\n  left: 0;\n\n  &:after {\n    content: '';\n    display: inline-block;\n    width: 100%;\n  }\n`;\n\nconst ScalebarLeftLabel = styled.span`\n  font-size: 11px;\n  font-weight: 200;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: 2px;\n  color: #ffffff;\n\n  position: absolute;\n  text-align: right;\n  top: 0;\n  width: 400px;\n  left: -410px;\n`;\n\nconst scalebarDecorator = (story: () => ReactNode) => <div style={{ marginLeft: 250, marginTop: 100 }}>{story()}</div>;\n\nstoriesOf('scalebar', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .addDecorator(scalebarDecorator)\n  .addDecorator(withKnobs)\n  .add('<GrayScalebar>', () => {\n    const width: number = number('Width', 200, { range: true, step: 10, min: 100, max: 600 });\n    const label: string = radios<string>(\n      'Label',\n      {\n        None: 'none',\n        Top: 'top',\n        Left: 'left',\n      },\n      'none',\n    );\n\n    return (\n      <GrayScalebar\n        width={width}\n        steps={10}\n        backgroundColor=\"#333333\"\n        lines={[\n          { step: 1, lineWidth: 2, color: '#ffffff' },\n          { step: 5, lineWidth: 4, color: '#ffffff' },\n          { step: 9, lineWidth: 6, color: '#ffffff' },\n        ]}\n      >\n        {label === 'top' ? (\n          <ScalebarTopLabel style={{ width }}>STROKE WEIGHT INDICATOR</ScalebarTopLabel>\n        ) : label === 'left' ? (\n          <ScalebarLeftLabel>STROKE WEIGHT INDICATOR</ScalebarLeftLabel>\n        ) : null}\n      </GrayScalebar>\n    );\n  })\n  .add('<ColorScalebar>', () => {\n    const width: number = number('Width', 200, { range: true, step: 10, min: 100, max: 600 });\n    const label: string = radios<string>(\n      'Label',\n      {\n        None: 'none',\n        Top: 'top',\n        Left: 'left',\n      },\n      'none',\n    );\n\n    return (\n      <ColorScalebar\n        width={width}\n        steps={10}\n        scaleImage={<HeatmapScaleSVGImage width={width} height={scalebarHeight} threshold={0.1} />}\n        tickColor=\"#333333\"\n      >\n        {label === 'top' ? (\n          <ScalebarTopLabel style={{ width }}>HEATMAP COLOR INDICATOR</ScalebarTopLabel>\n        ) : label === 'left' ? (\n          <ScalebarLeftLabel>HEATMAP COLOR INDICATOR</ScalebarLeftLabel>\n        ) : null}\n      </ColorScalebar>\n    );\n  });\n"),__ADDS_MAP__={"scalebar--colorscalebar":{startLoc:{col:7,line:89},endLoc:{col:3,line:115},startBody:{col:26,line:89},endBody:{col:3,line:115}},"scalebar--grayscalebar":{startLoc:{col:7,line:58},endLoc:{col:3,line:88},startBody:{col:25,line:58},endBody:{col:3,line:88}}};const ScalebarTopLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span`
  font-size: 11px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #ffffff;

  position: absolute;
  text-align: justify;
  text-align-last: justify;
  text-justify: inter-word;
  top: -20px;
  left: 0;

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`,ScalebarLeftLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span`
  font-size: 11px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #ffffff;

  position: absolute;
  text-align: right;
  top: 0;
  width: 400px;
  left: -410px;
`;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("scalebar",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Scalebar.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/scalebar/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_2__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_1__.withInsightViewerStorybookGlobalStyle).addDecorator(story=>react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{marginLeft:250,marginTop:100}},story())).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("<GrayScalebar>",()=>{const width=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width",200,{range:!0,step:10,min:100,max:600}),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("Label",{None:"none",Top:"top",Left:"left"},"none");return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_GrayScalebar__WEBPACK_IMPORTED_MODULE_8__.a,{width:width,steps:10,backgroundColor:"#333333",lines:[{step:1,lineWidth:2,color:"#ffffff"},{step:5,lineWidth:4,color:"#ffffff"},{step:9,lineWidth:6,color:"#ffffff"}]},"top"===label?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ScalebarTopLabel,{style:{width:width}},"STROKE WEIGHT INDICATOR"):"left"===label?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ScalebarLeftLabel,null,"STROKE WEIGHT INDICATOR"):null)}).add("<ColorScalebar>",()=>{const width=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Width",200,{range:!0,step:10,min:100,max:600}),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("Label",{None:"none",Top:"top",Left:"left"},"none");return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ColorScalebar__WEBPACK_IMPORTED_MODULE_7__.a,{width:width,steps:10,scaleImage:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lunit_heatmap__WEBPACK_IMPORTED_MODULE_0__.a,{width:width,height:_env__WEBPACK_IMPORTED_MODULE_9__.a,threshold:.1}),tickColor:"#333333"},"top"===label?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ScalebarTopLabel,{style:{width:width}},"HEATMAP COLOR INDICATOR"):"left"===label?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ScalebarLeftLabel,null,"HEATMAP COLOR INDICATOR"):null)})}.call(this,__webpack_require__(49)(module))},980:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(992),_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(984),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95),_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(985),_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(986),_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(987),_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5),_lunit_use_dialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(138),_storybook_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { DialogTemplate, useDialog } from '@lunit/use-dialog';\nimport { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';\nimport { storiesOf } from '@storybook/react';\nimport React, { ReactNode, useCallback, useState } from 'react';\n\ninterface ConfirmParams {\n  title: string;\n  description: string;\n  agree?: string;\n  disagree?: string;\n}\n\nconst ConfirmDialogTemplate: DialogTemplate<ConfirmParams, boolean> = ({\n  closeDialog,\n  title,\n  description,\n  agree = 'Agree',\n  disagree = 'Disagree',\n}) => {\n  return (\n    <Dialog\n      open\n      onClose={() => closeDialog(false)}\n      aria-labelledby=\"alert-dialog-title\"\n      aria-describedby=\"alert-dialog-description\"\n    >\n      <DialogTitle id=\"alert-dialog-title\">{title}</DialogTitle>\n\n      <DialogContent>\n        <DialogContentText id=\"alert-dialog-description\">{description}</DialogContentText>\n      </DialogContent>\n      <DialogActions>\n        <Button color=\"primary\" onClick={() => closeDialog(false)}>\n          {disagree}\n        </Button>\n        <Button color=\"primary\" autoFocus onClick={() => closeDialog(true)}>\n          {agree}\n        </Button>\n      </DialogActions>\n    </Dialog>\n  );\n};\n\nfunction Sample() {\n  const [confirmResult, setConfirmResult] = useState<ReactNode>(null);\n  const [openConfirm, confirmElement] = useDialog(ConfirmDialogTemplate);\n\n  const callback = useCallback(async () => {\n    const confirm: boolean = await openConfirm({ title: 'TITLE', description: 'DESCRIPTION' });\n\n    setConfirmResult(<p>Confirm result is {confirm.toString()}</p>);\n  }, [openConfirm]);\n\n  return (\n    <div>\n      <button onClick={callback}>Open Confirm</button>\n\n      {confirmResult}\n      {confirmElement}\n    </div>\n  );\n}\n\nstoriesOf('use-dialog', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('useDialog()', () => <Sample />);\n"),__ADDS_MAP__={"use-dialog--usedialog":{startLoc:{col:7,line:69},endLoc:{col:38,line:69},startBody:{col:22,line:69},endBody:{col:38,line:69}}};const ConfirmDialogTemplate=({closeDialog:closeDialog,title:title,description:description,agree:agree="Agree",disagree:disagree="Disagree"})=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_0__.a,{open:!0,onClose:()=>closeDialog(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__.a,{id:"alert-dialog-title"},title),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__.a,{id:"alert-dialog-description"},description)),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{color:"primary",onClick:()=>closeDialog(!1)},disagree),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.a,{color:"primary",autoFocus:!0,onClick:()=>closeDialog(!0)},agree)));function Sample(){const[confirmResult,setConfirmResult]=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(null),[openConfirm,confirmElement]=Object(_lunit_use_dialog__WEBPACK_IMPORTED_MODULE_8__.a)(ConfirmDialogTemplate),callback=Object(react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(async()=>{const confirm=await openConfirm({title:"TITLE",description:"DESCRIPTION"});setConfirmResult(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p",null,"Confirm result is ",confirm.toString()))},[openConfirm]);return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button",{onClick:callback},"Open Confirm"),confirmResult,confirmElement)}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_9__.storiesOf)("use-dialog",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/useDialog.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/use-dialog/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_7__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_6__.withInsightViewerStorybookGlobalStyle).add("useDialog()",()=>react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Sample,null))}.call(this,__webpack_require__(49)(module))},981:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_lunit_use_shortcut__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(245),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),withSourceLoader=__webpack_require__(16).withSource,__STORY__=(__webpack_require__(16).addSource,"import { withInsightViewerStorybookGlobalStyle } from '@lunit/insight-viewer';\nimport { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';\nimport { useShortcut } from '@lunit/use-shortcut';\nimport { storiesOf } from '@storybook/react';\nimport React, { ReactNode, useState } from 'react';\n\nfunction Sample() {\n  const [result, setResult] = useState<ReactNode>(null);\n\n  useShortcut({\n    test: event => event.key.toLowerCase() === 'a',\n    callback: () => setResult('🍏'),\n  });\n\n  useShortcut({\n    test: event => event.key.toLowerCase() === 'b',\n    callback: () => setResult('🍌'),\n  });\n\n  useShortcut({\n    test: event => event.key.toLowerCase() === 'c',\n    callback: () => setResult('🍒'),\n  });\n\n  return (\n    <div>\n      <p>Key down \"a\", \"b\", \"c\"</p>\n      {result}\n    </div>\n  );\n}\n\nstoriesOf('use-shortcut', module)\n  .addDecorator(withOPTComponentsStorybookGlobalStyle)\n  .addDecorator(withInsightViewerStorybookGlobalStyle)\n  .add('useShortcut()', () => <Sample />);\n"),__ADDS_MAP__={"use-shortcut--useshortcut":{startLoc:{col:7,line:36},endLoc:{col:40,line:36},startBody:{col:24,line:36},endBody:{col:40,line:36}}};function Sample(){const[result,setResult]=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);return Object(_lunit_use_shortcut__WEBPACK_IMPORTED_MODULE_2__.a)({test:event=>"a"===event.key.toLowerCase(),callback:()=>setResult("🍏")}),Object(_lunit_use_shortcut__WEBPACK_IMPORTED_MODULE_2__.a)({test:event=>"b"===event.key.toLowerCase(),callback:()=>setResult("🍌")}),Object(_lunit_use_shortcut__WEBPACK_IMPORTED_MODULE_2__.a)({test:event=>"c"===event.key.toLowerCase(),callback:()=>setResult("🍒")}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",null,'Key down "a", "b", "c"'),result)}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("use-shortcut",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/useShortcut.stories.tsx",[],{},"/home/travis/build/lunit-io/frontend-components/src/_packages/@lunit/use-shortcut/__stories__",{})).addDecorator(_lunit_opt_components__WEBPACK_IMPORTED_MODULE_1__.m).addDecorator(_lunit_insight_viewer__WEBPACK_IMPORTED_MODULE_0__.withInsightViewerStorybookGlobalStyle).add("useShortcut()",()=>react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Sample,null))}.call(this,__webpack_require__(49)(module))}},[[535,1,2]]]);
//# sourceMappingURL=main.9158ce0c03a52c604cac.bundle.js.map