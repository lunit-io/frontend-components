(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{878:function(n,e,t){"use strict";t.r(e),e.default="import { isIntersection } from '@lunit/is-intersection';\n\ntype Point = [number, number];\n\n/**\n * polygon\uc774 \uad50\ucc28\uc810\uc744 \uac00\uc9c4 complex polygon\uc778\uc9c0 \ud655\uc778\n * @param polygon Array<[number, number]>\n */\nexport function isComplexPolygon(polygon: Point[]): boolean {\n  // \ub05d\uc810\uc73c\ub85c \ucd5c\ucd08\uc810\uc744 \ucd94\uac00\ud574\uc11c \ub2eb\ud78c polygon\uc744 \ub9cc\ub4e4\uc5b4\uc900\ub2e4\n  const closedPolygon: Point[] = [...polygon, polygon[0]];\n  const max: number = closedPolygon.length;\n\n  // 0 ->\n  let i: number = -1;\n  while (++i < max - 2) {\n    // i + 1 ->\n    // \ud604\uc7ac i \uc9c0\uc810\uc758 \uc774\uc804\uc740 \uac80\uc0c9\ud560 \ud544\uc694\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 i \uc774\ud6c4 \uc9c0\uc810\ubd80\ud130 \uac80\uc0c9\ud55c\ub2e4\n    let n: number = i + 2;\n    while (++n < max - 1) {\n      // line a -> b \uc640 line c -> d \uac00 \uad50\ucc28\ud558\ub294\uc9c0 \uccb4\ud06c\ud55c\ub2e4\n      // i \uac00 point a \uac00 \ub418\uace0, i + 1 \uc774 point b \uac00 \ub41c\ub2e4\n      // i + 2 \uac00 c, i + 3 \uc774 d\uac00 \ub41c\ub2e4\n      // i + 1 -> i + 2 \uc740 i -> i + 1 \uacfc \ub9de\ub2ff\uc544\uc788\uc5b4 \uad50\ucc28\ub420 \uc218 \uc5c6\uc73c\ubbc0\ub85c \uc81c\uc678\ud55c\ub2e4\n      if (isIntersection(closedPolygon[i], closedPolygon[i + 1], closedPolygon[n], closedPolygon[n + 1])) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n}\n"},879:function(n,e,t){"use strict";t.r(e);var o=t(666),l=t(750),i=t(0),r=t.n(i);Object(o.installWADOImageLoader)();e.default=()=>{const n=Object(i.useMemo)(()=>new o.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:o.unloadImage}),[]),[e,t]=Object(i.useState)(null),{cornerstoneRenderData:a,updateCornerstoneRenderData:s}=Object(o.useInsightViewerSync)(),[c,m]=Object(i.useState)(null),p=Object(i.useCallback)(n=>{const e=Object(l.a)(n);m(r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"polygon"},"\ud83e\uddec")," ","POLYGON"),r.a.createElement("div",null,JSON.stringify(n)),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"question"},"\ud83e\udd37\u200d\u2642\ufe0f")," ","IS COMPLEX POLYGON? \u2192 ",e?"YES":"NO")))},[]);return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(o.InsightViewerContainer,{ref:t,width:400,height:500},r.a.createElement(o.CornerstoneViewer,{width:400,height:500,invert:!1,flip:!1,resetTime:0,image:n,updateCornerstoneRenderData:s}),a&&r.a.createElement(o.ContourDrawer,{width:400,height:500,contours:[],draw:e,onFocus:()=>{},onAdd:p,onRemove:()=>{},cornerstoneRenderData:a})),r.a.createElement("div",null,c))}},880:function(n,e,t){"use strict";t.r(e),e.default="import {\n  ContourDrawer,\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerContainer,\n  installWADOImageLoader,\n  Point,\n  unloadImage,\n  useInsightViewerSync,\n} from '@lunit/insight-viewer';\nimport { isComplexPolygon } from '@lunit/is-complex-polygon';\nimport React, { ReactNode, useCallback, useMemo, useState } from 'react';\n\ninstallWADOImageLoader();\n\nconst width: number = 400;\nconst height: number = 500;\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(() => {\n    return new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n      unload: unloadImage,\n    });\n  }, []);\n\n  const [element, setElement] = useState<HTMLElement | null>(null);\n\n  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();\n\n  const [checkResult, setCheckResult] = useState<ReactNode>(null);\n\n  const onAdd = useCallback((polygon: Point[]) => {\n    const result: boolean = isComplexPolygon(polygon);\n\n    setCheckResult(\n      <div>\n        <h3>\n          <span role=\"img\" aria-label=\"polygon\">\n            \ud83e\uddec\n          </span>{' '}\n          POLYGON\n        </h3>\n        <div>{JSON.stringify(polygon)}</div>\n        <p>\n          <span role=\"img\" aria-label=\"question\">\n            \ud83e\udd37\u200d\u2642\ufe0f\n          </span>{' '}\n          IS COMPLEX POLYGON? \u2192 {result ? 'YES' : 'NO'}\n        </p>\n      </div>,\n    );\n  }, []);\n\n  return (\n    <div style={{ display: 'flex' }}>\n      <InsightViewerContainer ref={setElement} width={width} height={height}>\n        <CornerstoneViewer\n          width={width}\n          height={height}\n          invert={false}\n          flip={false}\n          resetTime={0}\n          image={image}\n          updateCornerstoneRenderData={updateCornerstoneRenderData}\n        />\n        {cornerstoneRenderData && (\n          <ContourDrawer\n            width={width}\n            height={height}\n            contours={[]}\n            draw={element}\n            onFocus={() => {}}\n            onAdd={onAdd}\n            onRemove={() => {}}\n            cornerstoneRenderData={cornerstoneRenderData}\n          />\n        )}\n      </InsightViewerContainer>\n      <div>{checkResult}</div>\n    </div>\n  );\n};\n"},881:function(n,e,t){"use strict";t.r(e),e.default="import { isComplexPolygon } from '@lunit/is-complex-polygon';\n\ndescribe('isComplexPolygon()', () => {\n  test('the polygons are complex polygons', () => {\n    expect(\n      isComplexPolygon([\n        [267.52, 179.20000000000002],\n        [266.24, 179.20000000000002],\n        [261.12, 175.36],\n        [254.72, 170.24],\n        [249.6, 163.84],\n        [243.20000000000002, 153.6],\n        [234.24, 140.8],\n        [229.12, 131.84],\n        [216.32, 115.20000000000002],\n        [204.8, 98.56],\n        [195.84, 87.03999999999999],\n        [181.76, 72.96000000000001],\n        [175.36, 69.12],\n        [166.4, 62.72],\n        [161.28, 60.16],\n        [154.88, 57.60000000000001],\n        [149.76, 56.32000000000001],\n        [144.64000000000001, 56.32000000000001],\n        [139.52, 56.32000000000001],\n        [134.4, 56.32000000000001],\n        [130.56, 58.879999999999995],\n        [125.44, 62.72],\n        [121.60000000000001, 67.84],\n        [115.2, 74.24000000000001],\n        [111.36, 80.64000000000001],\n        [107.52, 88.32],\n        [101.12, 98.56],\n        [98.56, 104.96000000000001],\n        [94.72, 115.20000000000002],\n        [92.16, 126.72],\n        [90.88, 135.68],\n        [90.88, 145.92000000000002],\n        [90.88, 156.16],\n        [92.16, 165.12],\n        [97.28, 172.8],\n        [102.4, 179.20000000000002],\n        [110.08, 188.16],\n        [116.48, 190.72],\n        [122.88, 192],\n        [129.28, 193.28000000000003],\n        [136.96, 193.28000000000003],\n        [142.08, 192],\n        [148.48, 186.88],\n        [158.72, 177.92000000000002],\n        [166.4, 168.96],\n        [171.52, 162.56],\n        [176.64000000000001, 154.88],\n        [181.76, 144.64000000000001],\n        [186.88, 135.68],\n        [192, 125.44],\n        [195.84, 117.75999999999999],\n        [202.24, 106.24000000000001],\n        [207.36, 94.72],\n        [213.76, 85.75999999999999],\n        [221.44, 75.52000000000001],\n        [230.4, 66.56],\n        [240.64000000000001, 56.32000000000001],\n        [249.6, 49.92],\n        [262.4, 40.96000000000001],\n        [271.36, 38.400000000000006],\n        [280.32, 34.56],\n        [294.40000000000003, 29.439999999999998],\n        [302.08, 28.159999999999997],\n        [311.04, 26.879999999999995],\n        [320, 26.879999999999995],\n        [327.68, 26.879999999999995],\n        [334.08, 29.439999999999998],\n        [339.2, 30.72],\n        [344.32, 33.28],\n        [349.44, 38.400000000000006],\n        [354.56, 42.24000000000001],\n        [358.40000000000003, 47.36],\n        [362.24, 52.480000000000004],\n        [366.08, 58.879999999999995],\n        [369.92, 66.56],\n        [372.48, 75.52000000000001],\n        [376.32, 83.20000000000002],\n        [377.6, 88.32],\n        [377.6, 96],\n        [378.88, 101.12],\n        [378.88, 107.52000000000001],\n        [378.88, 112.64000000000001],\n        [377.6, 119.03999999999999],\n        [373.76, 122.88],\n        [369.92, 128],\n      ]),\n    ).toBeTruthy();\n\n    expect(\n      isComplexPolygon([\n        [312.32, 107.52000000000001],\n        [312.32, 106.24000000000001],\n        [311.04, 102.4],\n        [308.48, 97.28],\n        [304.64, 88.32],\n        [300.8, 81.92000000000002],\n        [298.24, 74.24000000000001],\n        [293.12, 67.84],\n        [286.72, 57.60000000000001],\n        [275.2, 44.8],\n        [264.96, 37.120000000000005],\n        [256, 32],\n        [241.92000000000002, 21.760000000000005],\n        [235.52, 19.200000000000003],\n        [225.28, 16.64],\n        [216.32, 15.36],\n        [207.36, 14.079999999999998],\n        [199.68, 14.079999999999998],\n        [193.28, 14.079999999999998],\n        [186.88, 15.36],\n        [180.48, 16.64],\n        [174.08, 19.200000000000003],\n        [170.24, 21.760000000000005],\n        [161.28, 28.159999999999997],\n        [154.88, 32],\n        [149.76, 38.400000000000006],\n        [144.64000000000001, 44.8],\n        [138.24, 51.2],\n        [133.12, 58.879999999999995],\n        [129.28, 65.28],\n        [125.44, 72.96000000000001],\n        [121.60000000000001, 80.64000000000001],\n        [120.32000000000001, 88.32],\n        [119.04, 97.28],\n        [119.04, 106.24000000000001],\n        [119.04, 116.47999999999999],\n        [119.04, 125.44],\n        [120.32000000000001, 134.4],\n        [125.44, 144.64000000000001],\n        [130.56, 151.04],\n        [135.68, 158.72],\n        [142.08, 163.84],\n        [148.48, 168.96],\n        [154.88, 171.52],\n        [157.44, 171.52],\n        [165.12, 172.8],\n        [168.96, 174.08],\n        [172.8, 174.08],\n        [180.48, 170.24],\n        [184.32, 166.4],\n        [190.72, 158.72],\n        [197.12, 148.48000000000002],\n        [202.24, 140.8],\n        [206.08, 133.12],\n        [212.48000000000002, 119.03999999999999],\n        [216.32, 110.08000000000001],\n        [221.44, 98.56],\n        [225.28, 85.75999999999999],\n        [229.12, 75.52000000000001],\n        [231.68, 66.56],\n        [234.24, 56.32000000000001],\n        [238.08, 46.08],\n        [240.64000000000001, 38.400000000000006],\n        [243.20000000000002, 34.56],\n        [247.04, 26.879999999999995],\n        [250.88, 21.760000000000005],\n        [253.44, 16.64],\n        [259.84000000000003, 11.519999999999996],\n        [266.24, 8.960000000000008],\n        [273.92, 6.400000000000006],\n        [282.88, 2.5600000000000023],\n        [293.12, 1.2800000000000011],\n        [303.36, -1.2800000000000011],\n        [316.16, -1.2800000000000011],\n        [332.8, -2.5600000000000023],\n        [343.04, -2.5600000000000023],\n        [353.28000000000003, -1.2800000000000011],\n        [362.24, 1.2800000000000011],\n        [372.48, 3.8400000000000034],\n        [381.44, 7.680000000000007],\n        [389.12, 12.799999999999997],\n        [396.8, 16.64],\n        [403.2, 21.760000000000005],\n        [409.6, 29.439999999999998],\n        [414.72, 35.84],\n        [419.84000000000003, 42.24000000000001],\n        [423.68, 49.92],\n        [427.52, 55.040000000000006],\n        [430.08, 61.44],\n        [431.36, 65.28],\n        [432.64, 71.68],\n        [435.2, 78.08000000000001],\n        [435.2, 81.92000000000002],\n        [435.2, 87.03999999999999],\n        [435.2, 90.88],\n        [433.92, 94.72],\n        [431.36, 98.56],\n        [428.8, 101.12],\n        [423.68, 104.96000000000001],\n        [419.84000000000003, 107.52000000000001],\n        [409.6, 112.64000000000001],\n        [401.92, 115.20000000000002],\n        [399.36, 116.47999999999999],\n        [395.52, 119.03999999999999],\n      ]),\n    ).toBeTruthy();\n\n    expect(\n      isComplexPolygon([\n        [322.56, 332.8],\n        [322.56, 332.8],\n        [317.44, 330.24],\n        [311.04, 326.40000000000003],\n        [302.08, 322.56],\n        [290.56, 316.16],\n        [279.04, 309.76],\n        [263.68, 302.08],\n        [252.16, 295.68],\n        [239.36, 286.72],\n        [226.56, 279.04],\n        [220.16, 275.2],\n        [209.92000000000002, 268.8],\n        [200.96, 262.40000000000003],\n        [193.28, 256],\n        [185.6, 249.60000000000002],\n        [179.20000000000002, 243.2],\n        [172.8, 238.07999999999998],\n        [165.12, 231.68],\n        [160, 225.28000000000003],\n        [153.6, 218.88],\n        [145.92000000000002, 208.64],\n        [138.24, 200.95999999999998],\n        [134.4, 195.84000000000003],\n        [128, 189.44],\n        [122.88, 183.04],\n        [119.04, 175.36],\n        [116.48, 168.96],\n        [115.2, 162.56],\n        [113.92, 156.16],\n        [113.92, 151.04],\n        [113.92, 140.8],\n        [119.04, 133.12],\n        [128, 122.88],\n        [139.52, 112.64000000000001],\n        [158.72, 98.56],\n        [170.24, 90.88],\n        [188.16, 80.64000000000001],\n        [203.52, 71.68],\n        [216.32, 66.56],\n        [227.84, 61.44],\n        [238.08, 57.60000000000001],\n        [249.6, 53.760000000000005],\n        [257.28000000000003, 53.760000000000005],\n        [263.68, 53.760000000000005],\n        [270.08, 55.040000000000006],\n        [275.2, 57.60000000000001],\n        [279.04, 62.72],\n        [282.88, 69.12],\n        [288, 78.08000000000001],\n        [290.56, 85.75999999999999],\n        [293.12, 94.72],\n        [295.68, 102.4],\n        [296.96, 111.36000000000001],\n        [296.96, 120.32],\n        [296.96, 130.56],\n        [293.12, 138.24],\n        [290.56, 144.64000000000001],\n        [284.16, 154.88],\n        [279.04, 161.28],\n        [272.64, 168.96],\n        [267.52, 175.36],\n        [261.12, 180.48000000000002],\n        [253.44, 186.88],\n        [247.04, 192],\n        [239.36, 197.12],\n        [234.24, 202.24],\n        [226.56, 206.07999999999998],\n        [220.16, 211.2],\n        [212.48000000000002, 215.04000000000002],\n        [207.36, 220.16000000000003],\n        [200.96, 224],\n        [194.56, 227.84000000000003],\n        [188.16, 232.95999999999998],\n        [183.04, 238.07999999999998],\n        [176.64000000000001, 241.92000000000002],\n        [172.8, 247.04000000000002],\n        [168.96, 252.16000000000003],\n        [166.4, 254.72000000000003],\n        [162.56, 259.84000000000003],\n        [161.28, 262.40000000000003],\n        [160, 266.24],\n        [158.72, 268.8],\n        [156.16, 276.48],\n        [156.16, 279.04],\n        [156.16, 282.88],\n        [154.88, 286.72],\n        [154.88, 289.28000000000003],\n        [154.88, 294.40000000000003],\n        [154.88, 296.96],\n        [154.88, 299.52],\n        [156.16, 303.36],\n        [157.44, 307.2],\n        [160, 311.04],\n        [161.28, 314.88],\n        [163.84, 318.72],\n        [166.4, 322.56],\n        [170.24, 326.40000000000003],\n        [172.8, 330.24],\n        [176.64000000000001, 334.08],\n        [180.48, 337.92],\n        [184.32, 341.76],\n        [189.44, 344.32],\n        [193.28, 348.16],\n        [198.4, 349.44],\n        [202.24, 352],\n        [209.92000000000002, 353.28000000000003],\n        [215.04, 355.84000000000003],\n        [221.44, 357.12],\n        [227.84, 357.12],\n        [234.24, 358.40000000000003],\n        [243.20000000000002, 359.68],\n        [250.88, 359.68],\n        [257.28000000000003, 359.68],\n        [263.68, 359.68],\n        [270.08, 358.40000000000003],\n        [275.2, 355.84000000000003],\n      ]),\n    ).toBeTruthy();\n  });\n\n  test('the polygons are simple polygons', () => {\n    expect(\n      isComplexPolygon([\n        [179.20000000000002, -15.36],\n        [179.20000000000002, -15.36],\n        [174.08, -15.36],\n        [168.96, -12.799999999999997],\n        [161.28, -11.519999999999996],\n        [153.6, -10.240000000000002],\n        [145.92000000000002, -8.96],\n        [134.4, -7.68],\n        [119.04, -3.8399999999999963],\n        [103.68, 1.2800000000000011],\n        [89.60000000000001, 8.960000000000008],\n        [83.2, 14.079999999999998],\n        [72.96000000000001, 21.760000000000005],\n        [66.56, 29.439999999999998],\n        [61.44, 37.120000000000005],\n        [57.6, 46.08],\n        [56.32, 55.040000000000006],\n        [56.32, 64],\n        [57.6, 75.52000000000001],\n        [61.44, 84.47999999999999],\n        [70.4, 97.28],\n        [80.64, 108.80000000000001],\n        [93.44, 120.32],\n        [110.08, 130.56],\n        [125.44, 140.8],\n        [143.36, 147.20000000000002],\n        [160, 152.32],\n        [177.92000000000002, 153.6],\n        [194.56, 153.6],\n        [208.64000000000001, 153.6],\n        [218.88, 148.48000000000002],\n        [230.4, 142.08],\n        [241.92000000000002, 134.4],\n        [250.88, 129.28],\n        [259.84000000000003, 122.88],\n        [267.52, 113.92000000000002],\n        [271.36, 108.80000000000001],\n        [279.04, 97.28],\n        [282.88, 88.32],\n        [285.44, 78.08000000000001],\n        [285.44, 66.56],\n        [285.44, 53.760000000000005],\n        [282.88, 43.519999999999996],\n        [279.04, 33.28],\n        [275.2, 24.320000000000007],\n        [272.64, 20.480000000000004],\n        [268.8, 12.799999999999997],\n        [264.96, 5.1200000000000045],\n        [262.4, 0],\n      ]),\n    ).toBeFalsy();\n\n    expect(\n      isComplexPolygon([\n        [253.44, 97.28],\n        [252.16, 97.28],\n        [247.04, 93.44],\n        [239.36, 90.88],\n        [231.68, 87.03999999999999],\n        [225.28, 83.20000000000002],\n        [217.6, 79.36000000000001],\n        [211.20000000000002, 78.08000000000001],\n        [200.96, 74.24000000000001],\n        [186.88, 72.96000000000001],\n        [177.92000000000002, 71.68],\n        [168.96, 71.68],\n        [156.16, 74.24000000000001],\n        [148.48, 75.52000000000001],\n        [140.8, 80.64000000000001],\n        [133.12, 85.75999999999999],\n        [126.72, 92.16],\n        [120.32000000000001, 98.56],\n        [111.36, 111.36000000000001],\n        [107.52, 119.03999999999999],\n        [102.4, 129.28],\n        [97.28, 142.08],\n        [94.72, 152.32],\n        [92.16, 163.84],\n        [88.32000000000001, 180.48000000000002],\n        [87.04, 192],\n        [87.04, 200.95999999999998],\n        [87.04, 211.2],\n        [87.04, 222.72000000000003],\n        [88.32000000000001, 234.24],\n        [90.88, 240.64],\n        [96, 248.32],\n        [101.12, 256],\n        [108.8, 262.40000000000003],\n        [117.76, 270.08],\n        [126.72, 273.92],\n        [139.52, 279.04],\n        [152.32, 281.6],\n        [166.4, 282.88],\n        [184.32, 284.16],\n        [209.92000000000002, 284.16],\n        [224, 281.6],\n        [244.48000000000002, 277.76],\n        [266.24, 275.2],\n        [281.6, 271.36],\n        [298.24, 266.24],\n        [308.48, 262.40000000000003],\n        [321.28000000000003, 257.28000000000003],\n        [331.52, 250.88],\n        [340.48, 243.2],\n        [346.88, 236.8],\n        [352, 230.40000000000003],\n        [355.84000000000003, 221.44],\n        [357.12, 213.76],\n        [358.40000000000003, 207.36],\n        [358.40000000000003, 199.68],\n        [359.68, 193.28000000000003],\n        [359.68, 185.6],\n        [359.68, 180.48000000000002],\n        [359.68, 176.64000000000001],\n        [358.40000000000003, 170.24],\n        [358.40000000000003, 165.12],\n        [357.12, 160],\n        [354.56, 154.88],\n        [352, 149.76],\n        [348.16, 144.64000000000001],\n        [344.32, 140.8],\n        [340.48, 135.68],\n        [335.36, 133.12],\n      ]),\n    ).toBeFalsy();\n  });\n});\n"},949:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));t(0);var o=t(62),l=t(7),i=t(89),r=t(667);const a={};function s({components:n,...e}){return Object(o.b)("wrapper",Object.assign({},a,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"@lunit/is-complex-polygon")),Object(o.b)("p",null,"Polygon (",Object(o.b)("inlineCode",{parentName:"p"},"[number, number][]"),")\uc774 \ub2e8\uc21c \ub2e4\uac01\ud615\uc774 \uc544\ub2cc\uc9c0 \ud310\ub2e8\ud55c\ub2e4."),Object(o.b)("p",null,"Annotation Tool, OPT\uc640 \uac19\uc774 \uc0ac\uc6a9\uc790\uc5d0\uac8c Annotation\uc744 \uc785\ub825 \ubc1b\uc744\ub54c",Object(o.b)("br",{parentName:"p"}),"\n","\uc798\ubabb\ub41c Polygon\uc774 \uc785\ub825\ub418\uc9c0 \uc54a\ub3c4\ub85d \ubc29\uc9c0\ud558\ub294\ub370 \uc0ac\uc6a9\ud55c\ub2e4."),Object(o.b)(i.Example,{example:Object(l.d)("../index",{source:t(878),filename:"src/_packages/@lunit/is-complex-polygon/index.ts"}),mdxType:"Example"}),Object(o.b)("h1",null,"Test"),Object(o.b)(i.Example,{example:Object(l.b)("./Sample",{component:t(879),source:t(880),filename:"src/_packages/@lunit/is-complex-polygon/__pages__/Sample.tsx"}),mdxType:"Example"},Object(o.b)(r.a,{height:520,mdxType:"InsightViewerPreview"})),Object(o.b)(i.Example,{example:Object(l.d)("../__tests__/isComplexPolygon.test",{source:t(881),filename:"src/_packages/@lunit/is-complex-polygon/__tests__/isComplexPolygon.test.ts"}),mdxType:"Example"}))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=29.45b5470106c6da231db7.js.map