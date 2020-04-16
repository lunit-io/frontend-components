(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{802:function(e,n,t){"use strict";t.r(n),n.default="import styled from 'styled-components';\n\nexport const InsightViewerContainer = styled.div<{ width: number; height: number }>`\n  background-color: #000000;\n  position: relative;\n  width: ${({ width }) => width}px;\n  height: ${({ height }) => height}px;\n`;\n\nexport const LeftTopHolder = styled.div`\n  position: absolute;\n  left: 5px;\n  top: 5px;\n`;\n\nexport const LeftBottomHolder = styled.div`\n  position: absolute;\n  left: 5px;\n  bottom: 5px;\n`;\n\nexport const RightTopHolder = styled.div`\n  position: absolute;\n  right: 5px;\n  top: 5px;\n`;\n\nexport const RightBottomHolder = styled.div`\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n`;\n"},803:function(e,n,t){"use strict";t.r(n);var o=t(666),i=t(0),r=t.n(i);Object(o.installWADOImageLoader)();const l={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]};n.default=()=>{const e=Object(i.useMemo)(()=>new o.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:o.unloadImage}),[]);return r.a.createElement(o.InsightViewerTestController,{options:l},({width:n,height:t,invert:i,flip:l,control:s,wheel:a,resetTime:p,element:d,setElement:m,interactions:c})=>r.a.createElement(o.InsightViewerContainer,{ref:m,width:n,height:t},r.a.createElement(o.CornerstoneViewer,{width:n,height:t,invert:i,flip:l,interactions:c,resetTime:p,image:e,updateCornerstoneRenderData:()=>{}}),r.a.createElement(o.LeftTopHolder,null,r.a.createElement("span",{style:{color:"red",fontSize:13}},"LEFT / TOP")),r.a.createElement(o.RightTopHolder,null,r.a.createElement("span",{style:{color:"red",fontSize:13}},"RIGHT / TOP")),r.a.createElement(o.LeftBottomHolder,null,r.a.createElement("span",{style:{color:"red",fontSize:13}},"LEFT / BOTTOM")),r.a.createElement(o.RightBottomHolder,null,r.a.createElement("span",{style:{color:"red",fontSize:13}},"RIGHT / BOTTOM"))))}},804:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerContainer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  LeftBottomHolder,\n  LeftTopHolder,\n  RightBottomHolder,\n  RightTopHolder,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, element, setElement, interactions }) => (\n        <InsightViewerContainer ref={setElement} width={width} height={height}>\n          <CornerstoneViewer\n            width={width}\n            height={height}\n            invert={invert}\n            flip={flip}\n            interactions={interactions}\n            resetTime={resetTime}\n            image={image}\n            updateCornerstoneRenderData={() => {}}\n          />\n\n          <LeftTopHolder>\n            <span style={{ color: 'red', fontSize: 13 }}>LEFT / TOP</span>\n          </LeftTopHolder>\n\n          <RightTopHolder>\n            <span style={{ color: 'red', fontSize: 13 }}>RIGHT / TOP</span>\n          </RightTopHolder>\n\n          <LeftBottomHolder>\n            <span style={{ color: 'red', fontSize: 13 }}>LEFT / BOTTOM</span>\n          </LeftBottomHolder>\n\n          <RightBottomHolder>\n            <span style={{ color: 'red', fontSize: 13 }}>RIGHT / BOTTOM</span>\n          </RightBottomHolder>\n        </InsightViewerContainer>\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},926:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));t(0);var o=t(62),i=t(7),r=t(89),l=t(667);const s={};function a({components:e,...n}){return Object(o.b)("wrapper",Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"<InsightViewerContainer>")),Object(o.b)("p",null,"\ud2b9\ubcc4\ud55c \uae30\ub2a5\uc740 \uc5c6\ub2e4."),Object(o.b)("p",null,"\ub2e8\uc21c\ud788 Element\ub4e4\uc774 Layer\ub85c \uacb9\uccd0\uc11c \ubc30\uce58\ub418\uac8c \ud558\uae30 \uc704\ud55c ",Object(o.b)("inlineCode",{parentName:"p"},"position: relative")," \uc120\uc5b8\ub9cc \uac00\uc9c0\uace0 \uc788\ub2e4."),Object(o.b)(r.Example,{example:Object(i.d)("../../components/InsightViewerContainer",{source:t(802),filename:"src/_packages/@lunit/insight-viewer/components/InsightViewerContainer.tsx"}),mdxType:"Example"}),Object(o.b)("h1",null,"Holders"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<LeftTopHolder>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<RightTopHolder>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<RightBottomHolder>")," \ub610\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"<LeftBottomHolder>"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uac01 \ucf54\ub108\uc5d0 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ub2e8\uc21c\ud55c Styled-Component \uc774\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\uc5d0 \ub530\ub77c Holder\ub294 \uadf8\ub0e5 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud574\ub3c4 \ub41c\ub2e4.")),Object(o.b)(r.Example,{example:Object(i.b)("./InsightViewerContainer/Holders",{component:t(803),source:t(804),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/InsightViewerContainer/Holders.tsx"}),mdxType:"Example"},Object(o.b)(l.a,{height:720,mdxType:"InsightViewerPreview"})))}a.isMDXComponent=!0}}]);
//# sourceMappingURL=37.45b5470106c6da231db7.js.map