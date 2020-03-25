(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{665:function(e,o,t){"use strict";t.d(o,"a",(function(){return s}));var r=t(89),a=t(664),l=t(694),n=t(611),c=t(0),i=t.n(c);function s(e){return i.a.createElement(d,{"data-test":"style block"},i.a.createElement(n.SnackbarProvider,null,i.a.createElement(l.f,{injectFirst:!1},i.a.createElement(r.Preview,e))))}const d=t(32).default.div`
  ${a.blockStyle};
  ${l.g};

  > :first-child {
    color: white;
    background-color: #222232;
    overflow: hidden;
  }
`},694:function(e,o,t){"use strict";t.d(o,"g",(function(){return a})),t.d(o,"f",(function(){return u})),t.d(o,"a",(function(){return y})),t.d(o,"c",(function(){return Q.a})),t.d(o,"d",(function(){return U.a})),t.d(o,"e",(function(){return V.a})),t.d(o,"b",(function(){return Z})),t.d(o,"h",(function(){return oe})),t.d(o,"i",(function(){return re}));var r=t(32);const a=r.css`
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
`,l=r.css`
  :root {
    ${a};
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
`;r.createGlobalStyle`
  ${l}
`;var n=t(653),c=t(646),i=t(0),s=t.n(i),d=t(126);const b={...Object(d.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),app:{backgroundColor:"#222232"}};function u({children:e,injectFirst:o=!0}){return s.a.createElement(n.b,{injectFirst:o},s.a.createElement(r.ThemeProvider,{theme:b},s.a.createElement(c.a,{theme:b},e)))}r.createGlobalStyle`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${l}
`;var f=t(129),p=t(604),g=t.n(p);const m=s.a.createElement(g.a,null),h="LunitButton-label",k="LunitButton-icon",v="LunitButton-check";function x({label:e,icon:o,check:t=m,className:r="",selected:a,onChange:l,onClick:n,hideCheck:c,style:d={},disabled:b=!1,...u}){const p=Object(i.useCallback)(e=>{"boolean"===typeof a&&"function"===typeof l&&l(!a),"function"===typeof n&&n(e)},[a,l,n]);return s.a.createElement(f.a,Object.assign({},u,{className:r,"aria-selected":!0===a,style:d,onClick:p,disabled:b}),o&&s.a.createElement("span",{className:k},o),e&&s.a.createElement("span",{className:h},e),!0!==c&&!0===a&&s.a.createElement("span",{className:v},t))}Object(r.default)(x).attrs(e=>{if(!e.label||!e.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===e.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===e.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...e,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${k} {
      font-size: 21px;
      display: block;
      text-align: center;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${h} {
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
`;const y=Object(r.default)(x)`
  && {
    justify-content: ${({layout:e})=>e};
    padding-left: ${({layout:e})=>"left"===e?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${k} {
      font-size: 21px;
      margin-right: ${({label:e})=>e?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${v} {
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
`;r.css`
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
`;var w=t(605),j=t.n(w);const E="LunitPanel-header",O="LunitPanel-icon",$="LunitPanel-title",C="LunitPanel-content";const M=Object(r.default)(j.a)`
  transition: transform 0.3s ease-out;
`,S=r.css`
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

    .${O} {
      color: var(--panel-icon-color);
      margin-left: -8px;
      margin-right: 6px;
      transform: translateY(2px);
    }

    .${$} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${C} {
    padding: 14px;
  }
`,z=r.css`
  .${E} {
    .${O} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,N=Object(r.default)((function({className:e="",expanded:o,onChange:t,style:r={},title:a,icon:l,children:n,disabled:c}){const d=Object(i.useCallback)(()=>{"boolean"===typeof o&&"function"===typeof t&&t(!o)},[o,t]),b="function"===typeof n?n(!0===o):n,u=function(e,o){const t="function"===typeof e?e(!0===o):e;return t||("boolean"!==typeof o?null:o?s.a.createElement(M,null):s.a.createElement(M,{style:{transform:"rotate(180deg)"}}))}(l,o);return s.a.createElement("div",{className:e,"aria-expanded":!0===o,"aria-disabled":!0===c,style:r},s.a.createElement("div",{className:E},u&&s.a.createElement("span",{className:O,onClick:d},u),s.a.createElement("span",{className:$},"function"===typeof a?a(!0===o):a)),b&&s.a.createElement("div",{className:C},b))}))`
  ${({disabled:e})=>e?r.css`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:r.css`
        opacity: 1;
      `}
  ${S}
  ${({onChange:e})=>"function"===typeof e?z:""}
`;Object(r.default)((function({sessionId:e,defaultExpanded:o=!0,onChange:t,...r}){const a=Object(i.useMemo)(()=>`__sidebar_panel_${e}__`,[e]),[l,n]=Object(i.useState)(()=>{const e=localStorage.getItem(a);return"string"===typeof e?"open"===e:o}),c=Object(i.useCallback)(e=>{localStorage.setItem(a,e?"open":"close"),n(e),"function"===typeof t&&t(e)},[a,t]);return s.a.createElement(N,Object.assign({},r,{expanded:l,onChange:c}))}))`
  opacity: ${({disabled:e})=>e?.4:1};
  ${S}
  ${z}s
`,r.default.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,r.default.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(r.default)((function({children:e,className:o=""}){return s.a.createElement("div",{className:o},e)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,r.default.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const L=({gap:e=2})=>r.css`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${e}px;
  }
`,B=({gap:e=2})=>r.css`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${e}px;
  }
`;Object(r.default)((function({className:e="",children:o,style:t}){return s.a.createElement("div",{className:e,style:t},o)}))`
  ${({direction:e})=>"horizontal"===e?B:L};
`;var I=t(661);Object(r.default)(I.a).attrs({valueLabelDisplay:"on"})`
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
`;var W=t(607),P=t.n(W),D=t(606),_=t.n(D),F=t(660),A=t(654);function T({className:e,...o}){const{arrow:t,popper:r,...a}=R(o),[l,n]=s.a.useState(null);return s.a.createElement(F.a,Object.assign({classes:a,PopperProps:{className:r+" "+(e||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(l),element:l}}}}},o,{title:s.a.createElement(i.Fragment,null,o.title,s.a.createElement("span",{className:t,ref:n}))}))}const R=Object(A.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),Y=(Object(r.default)(T).attrs({children:s.a.createElement(_.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(r.default)(T).attrs({children:s.a.createElement(_.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,r.keyframes`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),G=Object(r.default)(P.a)`
  animation: ${Y} 1s infinite;
`;Object(r.default)(T).attrs({children:s.a.createElement(G,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(r.default)(T).attrs({children:s.a.createElement(G,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;t(132);i.Component;t(641),t(63);var J=t(644);Object(r.default)(J.a)`
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
`;var q=t(597);const H=r.css`
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
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(r.default)(q.a)`
  ${H};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var K=t(658),Q=t(640),U=t(638),V=t(647),X=t(637);const Z=Object(r.default)(K.a)`
  && {
    .MuiDialog-paper {
      ${H};

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
`;var ee=t(695);function oe(){return Object(ee.a)(te)}const te=({closeDialog:e,title:o,description:t,agree:r="Agree"})=>s.a.createElement(Z,{open:!0,onClose:()=>e(),disableBackdropClick:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o&&s.a.createElement(X.a,{id:"alert-dialog-title"},o),s.a.createElement(U.a,null,s.a.createElement(V.a,{id:"alert-dialog-description"},t)),s.a.createElement(Q.a,null,s.a.createElement(y,{autoFocus:!0,layout:"center",label:r,style:{width:150},onClick:()=>e()})));function re(){return Object(ee.a)(ae)}const ae=({closeDialog:e,title:o,description:t,agree:r="Agree",disagree:a="Disagree"})=>s.a.createElement(Z,{open:!0,onClose:()=>e(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o&&s.a.createElement(X.a,{id:"alert-dialog-title"},o),s.a.createElement(U.a,null,s.a.createElement(V.a,{id:"alert-dialog-description"},t)),s.a.createElement(Q.a,null,s.a.createElement(y,{layout:"center",label:a,style:{width:150},onClick:()=>e(!1)}),s.a.createElement(y,{autoFocus:!0,layout:"center",label:r,style:{width:150},onClick:()=>e(!0)})));var le=t(596);t(610),t(609),t(608);r.css`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,r.css`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`,r.css`
  display: block;
  position: relative;
`,r.css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`,r.css`
  position: absolute;
  left: 100vw;
  top: 0;
  width: 200px;
  height: 300px;
`,Object(r.default)(le.a)`
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
`;r.default.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var ne=t(648);const ce=Object(r.default)(ne.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(r.default)(ce)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(r.default)(ce)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(r.default)(ce)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(r.default)(ce)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const ie=r.keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;Object(r.default)((function({source:e,children:o,...t}){return s.a.createElement("div",t,s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},e),o)}))`
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

    animation: ${ie} 1s ease-out;
  }
`},695:function(e,o,t){"use strict";t.d(o,"a",(function(){return a}));var r=t(0);function a(e){const[o,t]=Object(r.useState)(null);return[Object(r.useCallback)(async e=>new Promise(o=>{t({...e,closeDialog:e=>{o(e),t(null)}})}),[]),Object(r.useMemo)(()=>o?e(o):null,[o,e])]}}}]);
//# sourceMappingURL=2.d9335fb7baf85c51e521.js.map