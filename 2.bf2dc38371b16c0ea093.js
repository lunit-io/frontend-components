(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{667:function(e,t,o){"use strict";o.d(t,"a",(function(){return v}));var r=o(89),a=o(666),n=o(700),l=o(0),i=o.n(l),c=o(12),s=o(600);class d extends s.a{constructor(e=100){super(),this.interval=e,this.remains=new Map,this.started=!1,this.intervalId=-1,this.paused=!1,this.lastTime=Date.now(),this.start=(e,t)=>{this.remains.set(t,e),this.started||(this.lastTime=Date.now(),this.intervalId=setInterval(this.intervalLoop,this.interval),this.started=!0)},this.stop=e=>{this.remains.has(e)&&(this.remains.delete(e),this.remains.size<=0&&(this.intervalId>-1&&clearInterval(this.intervalId),this.intervalId=-1,this.started=!1))},this.stopAll=()=>{this.started&&(this.remains.clear(),this.intervalId>-1&&clearInterval(this.intervalId),this.intervalId=-1,this.started=!1)},this.pause=()=>{this.started&&!this.paused&&(clearInterval(this.intervalId),this.intervalId=-1,this.paused=!0)},this.resume=()=>{this.started&&this.paused&&(this.lastTime=Date.now(),this.intervalId=setInterval(this.intervalLoop,this.interval),this.paused=!1)},this.intervalLoop=()=>{const e=Date.now();for(const[t,o]of this.remains){const r=o-(e-this.lastTime);r<=0?(t(),this.remains.delete(t)):this.remains.set(t,r)}this.lastTime=Date.now(),this.remains.size<=0&&(this.intervalId>-1&&clearInterval(this.intervalId),this.intervalId=-1,this.started=!1)}}}const b=Object(l.createContext)();let u=0;function p({children:e,interval:t=100}){const[o]=Object(l.useState)(()=>new d(t)),[r,a]=Object(l.useState)([]),n=Object(l.useRef)(null),s=Object(l.useCallback)(e=>{const t=u++,r=()=>{a(e=>{const o=e.findIndex(({props:e})=>e.primaryId===t);if(o>-1){const t=[...e];return t.splice(o,1),t}return e})},n=Object(l.cloneElement)(e,{key:t,primaryId:t,close:r,timer:o});return a(e=>[...e,n]),r},[o]),p=Object(l.useMemo)(()=>({snackbarContainer:n,addSnackbar:s}),[n,s]);return i.a.createElement(b.Provider,{value:p},"function"===typeof e?e({snackbarContainer:n}):e,r.length>0&&n.current&&Object(c.createPortal)(r,n.current))}b.Consumer;var f=o(36);class h extends l.Component{constructor(...e){super(...e),this.onMouseEnter=()=>{var e;null===(e=this.props.timer)||void 0===e||e.pause()},this.onMouseLeave=()=>{var e;null===(e=this.props.timer)||void 0===e||e.resume()},this.onClose=()=>{var e;null===(e=this.props.timer)||void 0===e||e.stop(this.onClose),"function"===typeof this.props.close&&this.props.close()}}render(){return i.a.createElement("div",{className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},i.a.cloneElement(this.props.children,{onClose:this.onClose}))}componentDidMount(){"number"===typeof this.props.autoClose&&this.props.timer&&this.props.timer.start(this.props.autoClose,this.onClose)}componentWillUnmount(){this.onClose()}}h.defaultProps={autoClose:5e3};const g=f.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;Object(f.d)(h)`
  opacity: 1;
  animation: ${g} 0.5s ease-out;
`;class m extends Event{}m.TIMER_END="TIMER_END";s.a;function v(e){return i.a.createElement(k,{"data-test":"style block"},i.a.createElement(p,null,i.a.createElement(n.f,{injectFirst:!1},i.a.createElement(r.Preview,e))))}const k=f.d.div`
  ${a.blockStyle};
  ${n.g};

  > :first-child {
    color: white;
    background-color: #222232;
    overflow: hidden;
  }
`},700:function(e,t,o){"use strict";o.d(t,"g",(function(){return a})),o.d(t,"f",(function(){return u})),o.d(t,"a",(function(){return y})),o.d(t,"c",(function(){return K.a})),o.d(t,"d",(function(){return Q.a})),o.d(t,"e",(function(){return V.a})),o.d(t,"b",(function(){return Z})),o.d(t,"h",(function(){return te})),o.d(t,"i",(function(){return re}));var r=o(36);const a=r.c`
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
`,n=r.c`
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
`;r.b`
  ${n}
`;var l=o(655),i=o(648),c=o(0),s=o.n(c),d=o(126);const b={...Object(d.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),app:{backgroundColor:"#222232"}};function u({children:e,injectFirst:t=!0}){return s.a.createElement(l.b,{injectFirst:t},s.a.createElement(r.a,{theme:b},s.a.createElement(i.a,{theme:b},e)))}r.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${n}
`;var p=o(129),f=o(605),h=o.n(f);const g=s.a.createElement(h.a,null),m="LunitButton-label",v="LunitButton-icon",k="LunitButton-check";function x({label:e,icon:t,check:o=g,className:r="",selected:a,onChange:n,onClick:l,hideCheck:i,style:d={},disabled:b=!1,...u}){const f=Object(c.useCallback)(e=>{"boolean"===typeof a&&"function"===typeof n&&n(!a),"function"===typeof l&&l(e)},[a,n,l]);return s.a.createElement(p.a,Object.assign({},u,{className:r,"aria-selected":!0===a,style:d,onClick:f,disabled:b}),t&&s.a.createElement("span",{className:v},t),e&&s.a.createElement("span",{className:m},e),!0!==i&&!0===a&&s.a.createElement("span",{className:k},o))}Object(r.d)(x).attrs(e=>{if(!e.label||!e.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===e.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===e.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...e,hideCheck:!0,layout:"center"}})`
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
`;const y=Object(r.d)(x)`
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

    .${k} {
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
`;r.c`
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
`;var w=o(606),E=o.n(w);const j="LunitPanel-header",O="LunitPanel-icon",C="LunitPanel-title",M="LunitPanel-content";const $=Object(r.d)(E.a)`
  transition: transform 0.3s ease-out;
`,I=r.c`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${j} {
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

    .${C} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${M} {
    padding: 14px;
  }
`,z=r.c`
  .${j} {
    .${O} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,S=Object(r.d)((function({className:e="",expanded:t,onChange:o,style:r={},title:a,icon:n,children:l,disabled:i}){const d=Object(c.useCallback)(()=>{"boolean"===typeof t&&"function"===typeof o&&o(!t)},[t,o]),b="function"===typeof l?l(!0===t):l,u=function(e,t){const o="function"===typeof e?e(!0===t):e;return o||("boolean"!==typeof t?null:t?s.a.createElement($,null):s.a.createElement($,{style:{transform:"rotate(180deg)"}}))}(n,t);return s.a.createElement("div",{className:e,"aria-expanded":!0===t,"aria-disabled":!0===i,style:r},s.a.createElement("div",{className:j},u&&s.a.createElement("span",{className:O,onClick:d},u),s.a.createElement("span",{className:C},"function"===typeof a?a(!0===t):a)),b&&s.a.createElement("div",{className:M},b))}))`
  ${({disabled:e})=>e?r.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:r.c`
        opacity: 1;
      `}
  ${I}
  ${({onChange:e})=>"function"===typeof e?z:""}
`;Object(r.d)((function({sessionId:e,defaultExpanded:t=!0,onChange:o,...r}){const a=Object(c.useMemo)(()=>`__sidebar_panel_${e}__`,[e]),[n,l]=Object(c.useState)(()=>{const e=localStorage.getItem(a);return"string"===typeof e?"open"===e:t}),i=Object(c.useCallback)(e=>{localStorage.setItem(a,e?"open":"close"),l(e),"function"===typeof o&&o(e)},[a,o]);return s.a.createElement(S,Object.assign({},r,{expanded:n,onChange:i}))}))`
  opacity: ${({disabled:e})=>e?.4:1};
  ${I}
  ${z}s
`,r.d.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,r.d.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(r.d)((function({children:e,className:t=""}){return s.a.createElement("div",{className:t},e)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,r.d.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const N=({gap:e=2})=>r.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${e}px;
  }
`,L=({gap:e=2})=>r.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${e}px;
  }
`;Object(r.d)((function({className:e="",children:t,style:o}){return s.a.createElement("div",{className:e,style:o},t)}))`
  ${({direction:e})=>"horizontal"===e?L:N};
`;var D=o(662);Object(r.d)(D.a).attrs({valueLabelDisplay:"on"})`
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
`;var B=o(608),W=o.n(B),P=o(607),T=o.n(P),_=o(665),F=o(656);function A({className:e,...t}){const{arrow:o,popper:r,...a}=R(t),[n,l]=s.a.useState(null);return s.a.createElement(_.a,Object.assign({classes:a,PopperProps:{className:r+" "+(e||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(n),element:n}}}}},t,{title:s.a.createElement(c.Fragment,null,t.title,s.a.createElement("span",{className:o,ref:l}))}))}const R=Object(F.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),Y=(Object(r.d)(A).attrs({children:s.a.createElement(T.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(r.d)(A).attrs({children:s.a.createElement(T.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,r.e`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),J=Object(r.d)(W.a)`
  animation: ${Y} 1s infinite;
`;Object(r.d)(A).attrs({children:s.a.createElement(J,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(r.d)(A).attrs({children:s.a.createElement(J,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(672),o(132);c.Component;o(641),o(63);var q=o(646);Object(r.d)(q.a)`
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
`;var U=o(597);const G=r.c`
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
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(r.d)(U.a)`
  ${G};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var H=o(660),K=o(640),Q=o(638),V=o(649),X=o(637);const Z=Object(r.d)(H.a)`
  && {
    .MuiDialog-paper {
      ${G};

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
`;var ee=o(701);function te(){return Object(ee.a)(oe)}const oe=({closeDialog:e,title:t,description:o,agree:r="Agree"})=>s.a.createElement(Z,{open:!0,onClose:()=>e(),disableBackdropClick:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},t&&s.a.createElement(X.a,{id:"alert-dialog-title"},t),s.a.createElement(Q.a,null,s.a.createElement(V.a,{id:"alert-dialog-description"},o)),s.a.createElement(K.a,null,s.a.createElement(y,{autoFocus:!0,layout:"center",label:r,style:{width:150},onClick:()=>e()})));function re(){return Object(ee.a)(ae)}const ae=({closeDialog:e,title:t,description:o,agree:r="Agree",disagree:a="Disagree"})=>s.a.createElement(Z,{open:!0,onClose:()=>e(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},t&&s.a.createElement(X.a,{id:"alert-dialog-title"},t),s.a.createElement(Q.a,null,s.a.createElement(V.a,{id:"alert-dialog-description"},o)),s.a.createElement(K.a,null,s.a.createElement(y,{layout:"center",label:a,style:{width:150},onClick:()=>e(!1)}),s.a.createElement(y,{autoFocus:!0,layout:"center",label:r,style:{width:150},onClick:()=>e(!0)})));var ne=o(596);o(611),o(610),o(609);r.d.div`
  ${({soloEnabled:e,width:t,height:o})=>e?ce:t/o<1.2?ie:le};
`;const le=r.c`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    position: relative;
    overflow: hidden;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,ie=r.c`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;

  > div {
    position: relative;
    overflow: hidden;
  }
`,ce=r.c`
  display: block;
  position: relative;

  > div[data-solo='true'] {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  > div[data-solo='false'] {
    position: absolute;
    left: 100vw;
    top: 0;
    width: 200px;
    height: 300px;
  }
`;Object(r.d)(ne.a)`
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
`;r.d.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var se=o(650);const de=Object(r.d)(se.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(r.d)(de)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(r.d)(de)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(r.d)(de)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(r.d)(de)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const be=r.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;Object(r.d)((function({source:e,children:t,...o}){return s.a.createElement("div",o,s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},e),t)}))`
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

    animation: ${be} 1s ease-out;
  }
`},701:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(0);function a(e){const[t,o]=Object(r.useState)(null);return[Object(r.useCallback)(async e=>new Promise(t=>{o({...e,closeDialog:e=>{t(e),o(null)}})}),[]),Object(r.useMemo)(()=>t?e(t):null,[t,e])]}}}]);
//# sourceMappingURL=2.bf2dc38371b16c0ea093.js.map