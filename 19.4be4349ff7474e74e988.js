(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{666:function(e){e.exports=JSON.parse('["CT000000.dcm","CT000001.dcm","CT000002.dcm","CT000003.dcm","CT000004.dcm","CT000005.dcm","CT000006.dcm","CT000007.dcm","CT000008.dcm","CT000009.dcm","CT000010.dcm","CT000011.dcm","CT000012.dcm","CT000013.dcm","CT000014.dcm","CT000015.dcm","CT000016.dcm","CT000017.dcm","CT000018.dcm","CT000019.dcm","CT000020.dcm","CT000021.dcm","CT000022.dcm","CT000023.dcm","CT000024.dcm","CT000025.dcm","CT000026.dcm","CT000027.dcm","CT000028.dcm","CT000029.dcm","CT000030.dcm"]')},815:function(e,n,t){"use strict";t.r(n);var r=t(664),o=t(0),i=t.n(o),s=t(666);Object(r.installWADOImageLoader)(),n.default=()=>{const[e,n]=Object(o.useState)(()=>[]),t=Object(o.useMemo)(()=>new r.CornerstoneSeriesImage(s.map(e=>`wadouri:https://lunit-io.github.io/frontend-fixtures/dcm-files/series/${e}`),{unload:r.unloadImage}),[]),{current:a,end:l}=Object(r.useSeriesImagePosition)(t),[m,c]=Object(o.useState)(null);return Object(r.useSeriesImageScroll)({image:t,element:m}),Object(o.useEffect)(()=>{const e=t.progress.subscribe(e=>{n(n=>[...n,`[progress]: ${Math.floor(100*e)}%`])}),r=t.image.subscribe(e=>{console.warn("cornerstoneImage:",e),n(n=>[...n,`[image]: ${null===e||void 0===e?void 0:e.imageId}`])});return()=>{e.unsubscribe(),r.unsubscribe()}},[t]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{position:"absolute",top:0,left:0,padding:10,backgroundColor:"gray"}},i.a.createElement("button",{onClick:()=>t.prev()},"PREV"),i.a.createElement("button",{onClick:()=>t.next()},"NEXT"),i.a.createElement("hr",null),i.a.createElement("div",null,a," / ",l),i.a.createElement("div",{ref:c,style:{width:150,height:200,backgroundColor:"red"}},"Scroll here!")),i.a.createElement("ul",{style:{fontSize:11,marginLeft:180}},e.map((e,n)=>i.a.createElement("li",{key:n},e))))}},816:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneSequenceImage,\n  CornerstoneSeriesImage,\n  installWADOImageLoader,\n  unloadImage,\n  useSeriesImagePosition,\n  useSeriesImageScroll,\n} from '@lunit/insight-viewer';\nimport React, { useEffect, useMemo, useState } from 'react';\nimport series from '../../../__fixtures__/series.json';\n\ninstallWADOImageLoader();\n\nexport default () => {\n  const [log, setLog] = useState<string[]>(() => []);\n\n  const image: CornerstoneSequenceImage = useMemo(\n    () =>\n      new CornerstoneSeriesImage(\n        series.map(p => `wadouri:https://lunit-io.github.io/frontend-fixtures/dcm-files/series/${p}`),\n        { unload: unloadImage },\n      ),\n    [],\n  );\n\n  const { current, end } = useSeriesImagePosition(image);\n\n  const [scrollTargetElement, setScrollTargetElement] = useState<HTMLElement | null>(null);\n\n  useSeriesImageScroll({\n    image,\n    element: scrollTargetElement,\n  });\n\n  useEffect(() => {\n    // progress \uc815\ubcf4\ub97c \ubc1b\ub294\ub2e4\n    const progressSubscription = image.progress.subscribe((progress: number) => {\n      setLog(prevLog => [...prevLog, `[progress]: ${Math.floor(progress * 100)}%`]);\n    });\n\n    // image \uc815\ubcf4\ub97c \ubc1b\ub294\ub2e4\n    const imageSubscription = image.image.subscribe((cornerstoneImage: cornerstone.Image | null) => {\n      console.warn('cornerstoneImage:', cornerstoneImage);\n      setLog(prevLog => [...prevLog, `[image]: ${cornerstoneImage?.imageId}`]);\n    });\n\n    return () => {\n      progressSubscription.unsubscribe();\n      imageSubscription.unsubscribe();\n    };\n  }, [image]);\n\n  return (\n    <>\n      <div style={{ position: 'absolute', top: 0, left: 0, padding: 10, backgroundColor: 'gray' }}>\n        <button onClick={() => image.prev()}>PREV</button>\n        <button onClick={() => image.next()}>NEXT</button>\n        <hr />\n        <div>\n          {current} / {end}\n        </div>\n        <div ref={setScrollTargetElement} style={{ width: 150, height: 200, backgroundColor: 'red' }}>\n          Scroll here!\n        </div>\n      </div>\n      <ul style={{ fontSize: 11, marginLeft: 180 }}>\n        {log.map((line, i) => (\n          <li key={i}>{line}</li>\n        ))}\n      </ul>\n    </>\n  );\n};\n"},817:function(e,n,t){"use strict";t.r(n);var r=t(664),o=t(0),i=t.n(o),s=t(666);Object(r.installWADOImageLoader)(),n.default=()=>{const e=Object(o.useMemo)(()=>new r.CornerstoneSeriesImage(s.map(e=>`wadouri:https://lunit-io.github.io/frontend-fixtures/dcm-files/series/${e}`),{unload:r.unloadImage}),[]),n=Object(o.useMemo)(()=>"scroll",[]),[t,a]=Object(o.useState)(null);return Object(r.useSeriesImageScroll)({image:e,element:t,enabled:"scroll"===n}),i.a.createElement(r.InsightViewerContainer,{ref:a,width:400,height:500},i.a.createElement(r.InsightViewer,{width:400,height:500,invert:!1,flip:!1,pan:t,adjust:!1,zoom:"zoom"===n&&t,resetTime:0,image:e,updateCornerstoneRenderData:()=>{}}))}},818:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneSequenceImage,\n  CornerstoneSeriesImage,\n  InsightViewer,\n  InsightViewerContainer,\n  installWADOImageLoader,\n  unloadImage,\n  useSeriesImageScroll,\n} from '@lunit/insight-viewer';\nimport React, { useMemo, useState } from 'react';\nimport series from '../../../__fixtures__/series.json';\n\ninstallWADOImageLoader();\n\nexport default () => {\n  const image: CornerstoneSequenceImage = useMemo(\n    () =>\n      new CornerstoneSeriesImage(\n        series.map(p => `wadouri:https://lunit-io.github.io/frontend-fixtures/dcm-files/series/${p}`),\n        { unload: unloadImage },\n      ),\n    [],\n  );\n\n  const wheel = useMemo<'zoom' | 'scroll'>(() => 'scroll', []);\n\n  const [element, setElement] = useState<HTMLElement | null>(null);\n\n  useSeriesImageScroll({\n    image,\n    element,\n    enabled: wheel === 'scroll',\n  });\n\n  return (\n    <InsightViewerContainer ref={setElement} width={400} height={500}>\n      <InsightViewer\n        width={400}\n        height={500}\n        invert={false} // \uc0c9\uc0c1\uc744 \ubc18\uc804\ud55c\ub2e4\n        flip={false} // \uc774\ubbf8\uc9c0\ub97c \uc88c\uc6b0\ub85c \ub4a4\uc9d1\ub294\ub2e4\n        pan={element} // Pan Interaction\uc744 \ud65c\uc131\ud654 \ud55c\ub2e4\n        adjust={false} // Adjust Interaction\uc744 \ud65c\uc131\ud654 \ud55c\ub2e4 (Pan\uacfc \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4)\n        zoom={wheel === 'zoom' && element} // Zoom Interaction\uc744 \ud65c\uc131\ud654 \ud55c\ub2e4\n        resetTime={0} // \uc774 \uac12\uc774 \ubcc0\uacbd\ub418\uba74 Pan, Adjust, Zoom \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654 \ub41c\ub2e4\n        image={image}\n        updateCornerstoneRenderData={() => {}}\n      />\n    </InsightViewerContainer>\n  );\n};\n"},895:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));t(0);var r=t(62),o=t(7),i=t(89);const s={};function a({components:e,...n}){return Object(r.b)("wrapper",Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"useSeriesImageScroll()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CornerstoneSeriesImage"),"\ub97c Mouse Wheel\uc744 \uc0ac\uc6a9\ud574\uc11c Navigation \ud558\ub294\ub370 \uc0ac\uc6a9\ud55c\ub2e4."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EventTarget"),"\uc73c\ub85c \uc0ac\uc6a9\ud560 ",Object(r.b)("inlineCode",{parentName:"p"},"HTMLElement"),"\ub97c \ud544\uc694\ub85c \ud55c\ub2e4."),Object(r.b)(i.Example,{example:Object(o.b)("./useSeriesImageScroll/Basic",{component:t(815),source:t(816),filename:"src/_packages/@lunit/insight-viewer/__pages__/Hooks/useSeriesImageScroll/Basic.tsx"}),mdxType:"Example"},Object(r.b)(i.Preview,{height:380,style:{overflowY:"auto"},mdxType:"Preview"})),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"<InsightViewer>"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<InsightViewerContainer ref={}>"),"\ub97c \ud1b5\ud574 ",Object(r.b)("inlineCode",{parentName:"p"},"HTMLElement"),"\ub97c \ubc1b\uc544\uc11c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."),Object(r.b)(i.Example,{example:Object(o.b)("./useSeriesImageScroll/InsightViewer",{component:t(817),source:t(818),filename:"src/_packages/@lunit/insight-viewer/__pages__/Hooks/useSeriesImageScroll/InsightViewer.tsx"}),mdxType:"Example"},Object(r.b)(i.Preview,{height:520,mdxType:"Preview"})))}a.isMDXComponent=!0}}]);
//# sourceMappingURL=19.4be4349ff7474e74e988.js.map