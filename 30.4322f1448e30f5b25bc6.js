(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{666:function(e){e.exports=JSON.parse('["CT000000.dcm","CT000001.dcm","CT000002.dcm","CT000003.dcm","CT000004.dcm","CT000005.dcm","CT000006.dcm","CT000007.dcm","CT000008.dcm","CT000009.dcm","CT000010.dcm","CT000011.dcm","CT000012.dcm","CT000013.dcm","CT000014.dcm","CT000015.dcm","CT000016.dcm","CT000017.dcm","CT000018.dcm","CT000019.dcm","CT000020.dcm","CT000021.dcm","CT000022.dcm","CT000023.dcm","CT000024.dcm","CT000025.dcm","CT000026.dcm","CT000027.dcm","CT000028.dcm","CT000029.dcm","CT000030.dcm"]')},827:function(e,n,s){"use strict";s.r(n);var m=s(664),a=s(0),o=s.n(a),t=s(666);Object(m.installWADOImageLoader)(),n.default=()=>{const e=Object(a.useMemo)(()=>t.slice(0,5).map(e=>new m.CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/${e}`)),[]),n=Object(a.useMemo)(()=>e.map(e=>e.progress),[e]),s=Object(m.useImageLoadedTime)(n);return o.a.createElement("div",null,o.a.createElement("p",null,s?`Image loaded at ${s.toDateString()}`:"in progress..."))}},828:function(e,n,s){"use strict";s.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  installWADOImageLoader,\n  useImageLoadedTime,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\nimport series from '../../../__fixtures__/series.json';\n\ninstallWADOImageLoader();\n\nexport default () => {\n  const images: CornerstoneImage[] = useMemo(\n    () =>\n      series\n        .slice(0, 5)\n        .map(p => new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/${p}`)),\n    [],\n  );\n\n  const progresses = useMemo(() => images.map(image => image.progress), [images]);\n\n  const imageLoadedTime = useImageLoadedTime(progresses);\n\n  return (\n    <div>\n      <p>{imageLoadedTime ? `Image loaded at ${imageLoadedTime.toDateString()}` : 'in progress...'}</p>\n    </div>\n  );\n};\n"},897:function(e,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return r}));s(0);var m=s(62),a=s(7),o=s(89);const t={};function r({components:e,...n}){return Object(m.b)("wrapper",Object.assign({},t,n,{components:e,mdxType:"MDXLayout"}),Object(m.b)("h1",null,Object(m.b)("inlineCode",{parentName:"h1"},"useImageLoadedTime()")),Object(m.b)("pre",null,Object(m.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * Progress\uac00 \uc644\ub8cc\ub41c \uc2dc\uac04\uc744 \ucc3e\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.\n *\n * (A. Task \uc2dc\uc791)\n * \u2192 User\uac00 \ud589\ub3d9\ud560 \uc218 \uc5c6\ub294 Image Loading \uc2dc\uac04\n * \u2192 (B. Image\uac00 \ub85c\ub529\ub418\uc5b4 Task\uac00 \uc2dc\uc791\ub41c \uc2dc\uac04)\n * \u2192 Task \uc9c4\ud589\n * \u2192 (C. Task \uc644\ub8cc \uc2dc\uc810)\n *\n * User\uac00 Task\ub97c \uc9c4\ud589\ud55c \uc2dc\uac04\uc744 \uc880 \ub354 \uc815\ud655\ud558\uac8c \uacc4\uc0b0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.\n *\n * C - A = User\uac00 \ud589\ub3d9\ud560 \uc218 \uc5c6\ub294 Image Loading \uc2dc\uac04 \ub54c\ubb38\uc5d0 \ubd80\uc815\ud655\n * B - A = C - A \ubcf4\ub2e4 \uc880 \ub354 User\uac00 \ud589\ub3d9\ud560 \uc218 \uc788\ub294 \uc2dc\uac04\uc744 \uae30\uc900\uc73c\ub85c \uacc4\uc0b0\n *\n * \\```ts\n * const progress = useMemo(() => [image.progress], [image]);\n * const imageLoadedTime = useImageLoadedTime(progress);\n * \\```\n *\n * \uc5ec\uae30\uc11c `imageLoadedTime`\uc740 Image\uac00 \ucd5c\uc885\uc801\uc73c\ub85c Load\ub41c \uc2dc\uac04\uc774\ub2e4.\n */\nexport function useImageLoadedTime(progresses: Observable<number>[] | null): Date | null {\n}\n")),Object(m.b)(o.Example,{example:Object(a.b)("./useImageLoadedTime/Basic",{component:s(827),source:s(828),filename:"src/_packages/@lunit/insight-viewer/__pages__/Hooks/useImageLoadedTime/Basic.tsx"}),mdxType:"Example"},Object(m.b)(o.Preview,{height:100,mdxType:"Preview"})))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=30.4322f1448e30f5b25bc6.js.map