(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{788:function(e,n,t){"use strict";t.r(n),n.default="import React, { Component } from 'react';\nimport { Unsubscribable } from 'rxjs';\nimport { FrameConsumer } from '../context/frame';\nimport { InsightViewerHostProps } from '../hooks/useInsightViewerSync';\nimport { CornerstoneImage } from '../image/types';\nimport {\n  CornerstoneRenderData,\n  CornerstoneViewerLike,\n  Interaction,\n  ViewportTransform,\n  ViewportTransformParams,\n} from '../types';\n\nexport type CornerstoneViewerInteractions = (Interaction | false | null | undefined)[];\n\nexport interface CornerstoneViewerProps extends InsightViewerHostProps {\n  width: number;\n  height: number;\n\n  image: CornerstoneImage;\n\n  interactions?: CornerstoneViewerInteractions;\n\n  /** Invert Color Image */\n  invert: boolean;\n\n  /** Flip Image */\n  flip: boolean;\n\n  /**\n   * Date.now() \ub85c \uc785\ub825\ud558\uba74 \ub41c\ub2e4.\n   * \uac12\uc774 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0 Pan, Adjust, Zoom \uc73c\ub85c \ubcc0\uacbd\ub41c \uc0c1\ud0dc\ub4e4\uc774 \ucd08\uae30\ud654 \ub41c\ub2e4.\n   */\n  resetTime: number;\n\n  /**\n   * Image\uac00 \ucd5c\ucd08 \uadf8\ub824\uc9c0\ub294 \uc21c\uac04 \ubcc0\uacbd\ud55c\ub2e4\n   */\n  defaultViewportTransforms?: ViewportTransform[];\n}\n\nconst maxScale: number = 3;\n\nexport class CornerstoneViewer extends Component<CornerstoneViewerProps, {}> implements CornerstoneViewerLike {\n  // ref={}\uc5d0 \uc758\ud574\uc11c componentDidMount() \uc774\uc804\uc5d0 \ubc18\ub4dc\uc2dc \ub4e4\uc5b4\uc628\ub2e4\n  private element!: HTMLDivElement;\n\n  // imageLoaded \uc774\ud6c4 \uc9c0\uc5f0\ub418\uc5b4 \ub4e4\uc5b4\uc624\uac8c \ub41c\ub2e4\n  // setViewport, updateViewport \uc5d0 \uc758\ud574\uc11c\ub9cc \uc811\uadfc\ud55c\ub2e4\n  private currentViewport: cornerstone.Viewport | null = null;\n  // props.image.subscribe()\ub97c \ud1b5\ud574\uc11c \uc9c0\uc5f0\ub418\uc5b4 \ub4e4\uc5b4\uc624\uac8c \ub41c\ub2e4\n  private currentImage: cornerstone.Image | null = null;\n\n  // mouse interaction\uc5d0\uc11c \uc0ac\uc6a9\ud55c\ub2e4\n  private teardownInteraction: (() => void)[] | null = null;\n\n  // rx subscriptions\n  private imageSubscription: Unsubscribable | null = null;\n\n  private needImageInitialize: boolean = true;\n\n  private contentWindow: Window = window;\n\n  render() {\n    return (\n      <>\n        <FrameConsumer stateRef={({ contentWindow }) => (this.contentWindow = contentWindow)} />\n        <div\n          ref={this.elementRef}\n          style={{\n            width: this.props.width,\n            height: this.props.height,\n          }}\n        />\n      </>\n    );\n  }\n\n  // ---------------------------------------------\n  // life cycle\n  // ---------------------------------------------\n  elementRef = (element: HTMLDivElement) => {\n    this.element = element;\n\n    if (!element) return;\n\n    this.startInteraction(this.props.interactions);\n  };\n\n  componentDidMount() {\n    // cornerstone\uc758 imagernderered event\ub97c \ubc1b\ub294\ub2e4\n    // image\uac00 render \ub420\ub54c\ub9c8\ub2e4 context\ub85c enabledElement\ub97c \ubc30\ud3ec\ud574\uc8fc\uae30 \uc704\ud574 \ud544\uc694\ud558\ub2e4\n    this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED, this.onImageRenderered);\n\n    this.setCornerstoneImage(this.props.image);\n  }\n\n  initImage = (image: cornerstone.Image) => {\n    cornerstone.disable(this.element);\n    cornerstone.enable(this.element, { renderer: 'webgl' });\n\n    let defaultViewport = this.getDefaultViewport(image, this.element);\n\n    if (!defaultViewport) {\n      throw new Error('defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.');\n    }\n\n    if (Array.isArray(this.props.defaultViewportTransforms)) {\n      const minScale: number = defaultViewport.scale;\n\n      for (const transform of this.props.defaultViewportTransforms) {\n        const patch = transform({\n          element: this.element,\n          currentViewport: defaultViewport,\n          minScale,\n          maxScale,\n        });\n\n        defaultViewport = {\n          ...defaultViewport,\n          ...patch,\n        };\n      }\n    }\n\n    defaultViewport = {\n      ...defaultViewport,\n      hflip: this.props.flip,\n      invert: this.props.invert,\n    };\n\n    cornerstone.displayImage(this.element, image, defaultViewport);\n\n    this.setImage(image);\n    this.setViewport(defaultViewport);\n    this.startInteraction(this.props.interactions);\n  };\n\n  componentWillUnmount() {\n    this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED, this.onImageRenderered);\n    cornerstone.disable(this.element);\n\n    if (this.imageSubscription) {\n      this.imageSubscription.unsubscribe();\n    }\n\n    if (this.teardownInteraction) {\n      this.teardownInteraction.forEach((teardown) => teardown());\n    }\n  }\n\n  componentDidUpdate(prevProps: Readonly<CornerstoneViewerProps>) {\n    const { width, height, flip, invert, interactions, resetTime, image } = this.props;\n\n    const defaultViewport: cornerstone.Viewport | null = this.getDefaultViewport(this.currentImage, this.element);\n\n    // \uc120\ud0dd\ub41c control \uc0c1\ud0dc\uc5d0 \ub530\ub77c event\ub97c \ud574\uc81c/\ub4f1\ub85d \ud574\uc900\ub2e4\n    if (prevProps.interactions !== interactions) {\n      this.startInteraction(interactions);\n    }\n\n    if (defaultViewport) {\n      if (prevProps.resetTime !== resetTime) {\n        // resetTime\uc774 \uc0c8\ub85c \uac31\uc2e0\ub418\uba74 viewport\ub97c defaultViewport\ub97c \uc0ac\uc6a9\ud574\uc11c \ucd08\uae30\ud654 \ud574\uc900\ub2e4\n        this.updateCurrentViewport({\n          ...defaultViewport,\n          //...this.defaultViewport,\n          hflip: flip,\n          invert: defaultViewport.invert ? !invert : invert,\n        });\n      } else {\n        // flip, invert\ub294 resetTime\uc758 \ubd80\ubd84 \uc9d1\ud569\uc774\uae30 \ub54c\ubb38\uc5d0\n        // resetTime\uc5d0 \uc758\ud55c \uac31\uc2e0\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc801\uc6a9\ud55c\ub2e4\n        if (prevProps.flip !== flip || prevProps.invert !== invert) {\n          this.updateCurrentViewport({\n            hflip: flip,\n            invert: defaultViewport.invert ? !invert : invert,\n          });\n        }\n      }\n    }\n\n    if (prevProps.width !== width || prevProps.height !== height) {\n      if (this.currentImage) {\n        // container size\uac00 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0 cornerstone resize() \ucc98\ub9ac\ub97c \ud574\uc900\ub2e4\n        cornerstone.resize(this.element);\n\n        const viewport = cornerstone.getViewport(this.element);\n\n        if (viewport) {\n          this.setViewport(viewport);\n        } else {\n          throw new Error('getViewport() is returns not a Viewport');\n        }\n      }\n    }\n\n    if (prevProps.image !== image) {\n      this.setCornerstoneImage(image);\n    }\n  }\n\n  subscribeImage = (image: cornerstone.Image | null) => {\n    if (!image) return;\n\n    image.voiLUT = undefined; // remove VOI LUT for 'adjust' functionality\n\n    // props.image\uc758 \ubcc0\uacbd \ub610\ub294 \ucd08\uae30\ud654\ub85c \uc778\ud55c \uc644\uc804\ud55c \ucd08\uae30\ud654\uac00 \ud544\uc694\ud560\ub54c\n    if (this.needImageInitialize) {\n      this.needImageInitialize = false;\n      this.initImage(image);\n    }\n    // \ub2e8\uc21c series image\uc758 \ubcc0\uacbd\uc77c \uacbd\uc6b0\uc5d0\ub294 \ud654\uba74 \ud45c\uc2dc\ub9cc \ubc14\uafd4\uc900\ub2e4\n    else if (this.currentViewport) {\n      cornerstone.displayImage(this.element, image, this.currentViewport);\n    }\n    // \uc774\uac74 \uc2e4\ud589\ub418\uba74 \uc548\ub428\n    else {\n      throw new Error('\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!');\n    }\n  };\n\n  onImageRenderered = (event: cornerstone.CornerstoneEvent) => {\n    const eventData: cornerstone.CornerstoneEventData | undefined = event.detail;\n    if (\n      eventData &&\n      eventData.canvasContext &&\n      eventData.element &&\n      eventData.enabledElement &&\n      eventData.image &&\n      typeof eventData.renderTimeInMs === 'number' &&\n      eventData.viewport\n    ) {\n      this.currentViewport = eventData.viewport;\n      this.props.updateCornerstoneRenderData(eventData as CornerstoneRenderData);\n    } else {\n      console.error('CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???', eventData);\n    }\n  };\n\n  // ---------------------------------------------\n  // event handlers\n  // ---------------------------------------------\n  startInteraction = (interactions: CornerstoneViewerInteractions | undefined) => {\n    if (this.teardownInteraction) {\n      this.teardownInteraction.forEach((teardown) => teardown());\n    }\n\n    if (Array.isArray(interactions) && interactions.length > 0) {\n      this.teardownInteraction = interactions\n        .filter((interaction): interaction is Interaction => typeof interaction === 'function')\n        .map((interaction) => interaction(this));\n    }\n  };\n\n  // ---------------------------------------------\n  // getters\n  // ---------------------------------------------\n  getElement = () => this.element;\n\n  getContentWindow = () => this.contentWindow;\n\n  getCurrentViewport = () => this.currentViewport!;\n\n  getDefaultViewport = (image: cornerstone.Image | null, element: HTMLElement | null): cornerstone.Viewport | null => {\n    if (!image || !element) return null;\n    return cornerstone.getDefaultViewportForImage(element, image);\n  };\n\n  getMinScale = () => {\n    const viewport = this.getDefaultViewport(this.currentImage, this.element);\n\n    if (!viewport) {\n      throw new Error('viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4');\n    }\n\n    return viewport.scale;\n  };\n\n  getMaxScale = () => {\n    return maxScale;\n  };\n\n  // ---------------------------------------------\n  // setters\n  // ---------------------------------------------\n  updateViewport = (patch: Partial<cornerstone.Viewport>) => {\n    if (this.currentViewport) {\n      this.updateCurrentViewport(patch);\n    }\n  };\n\n  getViewportTransformParams = (): ViewportTransformParams => {\n    return {\n      element: this.element,\n      minScale: this.getMinScale(),\n      maxScale: this.getMaxScale(),\n      currentViewport: this.currentViewport,\n    };\n  };\n\n  private setCornerstoneImage = (image: CornerstoneImage) => {\n    this.needImageInitialize = true;\n\n    this.setImage(null);\n\n    if (this.imageSubscription) {\n      this.imageSubscription.unsubscribe();\n      this.imageSubscription = null;\n    }\n\n    this.imageSubscription = image.image.subscribe(this.subscribeImage);\n  };\n\n  private setImage = (image: cornerstone.Image | null) => {\n    this.currentImage = image;\n  };\n\n  private setViewport = (viewport: cornerstone.Viewport) => {\n    this.currentViewport = viewport;\n    cornerstone.setViewport(this.element, this.currentViewport);\n  };\n\n  private updateCurrentViewport = (\n    update: Partial<cornerstone.Viewport> | ((viewport: cornerstone.Viewport) => Partial<cornerstone.Viewport>),\n  ) => {\n    if (!this.currentViewport) {\n      throw new Error('viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4');\n    }\n\n    const patch: Partial<cornerstone.Viewport> = typeof update === 'function' ? update(this.currentViewport) : update;\n\n    this.currentViewport = {\n      ...this.currentViewport,\n      ...patch,\n    };\n\n    cornerstone.setViewport(this.element, this.currentViewport);\n  };\n}\n"},789:function(e,n,t){"use strict";t.r(n);var r=t(666),i=t(0),o=t.n(i);Object(r.installWADOImageLoader)();const s={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]};n.default=()=>{const e=Object(i.useMemo)(()=>new r.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:r.unloadImage}),[]);return o.a.createElement(r.InsightViewerTestController,{options:s},({width:n,height:t,invert:i,flip:s,control:a,wheel:l,resetTime:p,interactions:m})=>o.a.createElement(r.CornerstoneViewer,{width:n,height:t,invert:i,flip:s,interactions:m,resetTime:p,image:e,updateCornerstoneRenderData:()=>{}}))}},790:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, interactions }) => (\n        <CornerstoneViewer\n          width={width}\n          height={height}\n          invert={invert} // \uc0c9\uc0c1\uc744 \ubc18\uc804\ud55c\ub2e4\n          flip={flip} // \uc774\ubbf8\uc9c0\ub97c \uc88c\uc6b0\ub85c \ub4a4\uc9d1\ub294\ub2e4\n          interactions={interactions}\n          resetTime={resetTime} // \uc774 \uac12\uc774 \ubcc0\uacbd\ub418\uba74 Pan, Adjust, Zoom \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654 \ub41c\ub2e4\n          image={image}\n          updateCornerstoneRenderData={() => {}}\n        />\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},791:function(e,n,t){"use strict";t.r(n);var r=t(666),i=t(0),o=t.n(i);Object(r.installWADOImageLoader)();const s={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]};n.default=()=>{const e=Object(i.useMemo)(()=>new r.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:r.unloadImage}),[]);return o.a.createElement(r.InsightViewerTestController,{options:s},({width:n,height:t,invert:i,flip:s,control:a,wheel:l,resetTime:p,interactions:m,element:c,setElement:u})=>o.a.createElement(r.InsightViewerContainer,{ref:u,width:n,height:t},o.a.createElement(r.CornerstoneViewer,{width:n,height:t,invert:i,flip:s,interactions:m,resetTime:p,image:e,updateCornerstoneRenderData:()=>{}})))}},792:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerContainer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, interactions, element, setElement }) => (\n        <InsightViewerContainer ref={setElement} width={width} height={height}>\n          <CornerstoneViewer\n            width={width}\n            height={height}\n            invert={invert}\n            flip={flip}\n            interactions={interactions}\n            resetTime={resetTime}\n            image={image}\n            updateCornerstoneRenderData={() => {}}\n          />\n        </InsightViewerContainer>\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},793:function(e,n,t){"use strict";t.r(n);var r=t(666),i=t(0),o=t.n(i);Object(r.installWADOImageLoader)();const s={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!0],invert:[!0]};n.default=()=>{const e=Object(i.useMemo)(()=>new r.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:r.unloadImage}),[]);return o.a.createElement(r.InsightViewerTestController,{options:s},({width:n,height:t,invert:i,flip:s,control:a,wheel:l,resetTime:p,interactions:m,element:c,setElement:u})=>o.a.createElement(r.CornerstoneViewer,{width:n,height:t,invert:i,flip:s,interactions:m,resetTime:p,image:e,updateCornerstoneRenderData:()=>{}}))}},794:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [true],\n  invert: [true],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, interactions, element, setElement }) => (\n        <CornerstoneViewer\n          width={width}\n          height={height}\n          invert={invert} // \uc0c9\uc0c1\uc744 \ubc18\uc804\ud55c\ub2e4\n          flip={flip} // \uc774\ubbf8\uc9c0\ub97c \uc88c\uc6b0\ub85c \ub4a4\uc9d1\ub294\ub2e4\n          interactions={interactions}\n          resetTime={resetTime} // \uc774 \uac12\uc774 \ubcc0\uacbd\ub418\uba74 Pan, Adjust, Zoom \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654 \ub41c\ub2e4\n          image={image}\n          updateCornerstoneRenderData={() => {}}\n        />\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},924:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));t(0);var r=t(62),i=t(7),o=t(89),s=t(667);const a={};function l({components:e,...n}){return Object(r.b)("wrapper",Object.assign({},a,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"<CornerstoneViewer>")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uae30\ub2a5\ub4e4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*.dcm"),", ",Object(r.b)("inlineCode",{parentName:"li"},"*.jpg"),", ",Object(r.b)("inlineCode",{parentName:"li"},"*.png")," \ub4f1\uc758 \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9b0\ub2e4"),Object(r.b)("li",{parentName:"ul"},"Pan, Adjust, Flip, Invert \ub4f1 \uae30\ubcf8\uc801\uc778 User Interaction \uc774\ub098 Dicom Display \uc5d0 \uad00\ub828\ub41c \uae30\ub2a5\ub4e4\uc744 \uad6c\ud604\ud55c\ub2e4"))),Object(r.b)("li",{parentName:"ul"},"\ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uae30\ub2a5\ub4e4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Heatmap \ub610\ub294 Contour \ucc98\ub9ac \u2192 ",Object(r.b)("inlineCode",{parentName:"li"},"<HeatmapViewer>"),", ",Object(r.b)("inlineCode",{parentName:"li"},"<ContourViewer>")," \uc5d0\uc11c \uad6c\ud604\ub428"),Object(r.b)("li",{parentName:"ul"},"DBT \ub4f1\uc5d0 \uc0ac\uc6a9\ub418\ub294 Series Image \uae30\ub2a5 \uad6c\ud604 \u2192 ",Object(r.b)("inlineCode",{parentName:"li"},"class CornerstoneSeriesImage")," \ub97c \ud1b5\ud574 \uad6c\ud604\ub428"),Object(r.b)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac1c\uc758 \ud654\uba74\ub4e4\uc744 \ub3d9\uae30\ud654 \uc2dc\ud0a4\uac70\ub098 \ud558\ub294 Viewport \ub3d9\uae30\ud654 \u2192 ",Object(r.b)("inlineCode",{parentName:"li"},"useViewportMirroring()")," \ub4f1 Utility Hook\uc744 \ud1b5\ud574 \uad6c\ud604\ub428")))),Object(r.b)("h1",null,"API"),Object(r.b)(o.Example,{example:Object(i.d)("@lunit/insight-viewer/components/CornerstoneViewer",{source:t(788),filename:"src/_packages/@lunit/insight-viewer/components/CornerstoneViewer.tsx"}),api:!0,mdxType:"Example"}),Object(r.b)("h1",null,"\uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9"),Object(r.b)(o.Example,{example:Object(i.b)("./CornerstoneViewer/Basic",{component:t(789),source:t(790),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/CornerstoneViewer/Basic.tsx"}),mdxType:"Example"},Object(r.b)(s.a,{height:720,mdxType:"InsightViewerPreview"})),Object(r.b)("h1",null,"\uc678\ubd80 HTML Element\ub97c \uc0ac\uc6a9\ud574\uc11c Event \ucc98\ub9ac"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<CornerstoneViewer/>\n<HeatmapViewer/>\n<ContourViewer/>\n<ContourDrawer/>\n")),Object(r.b)("p",null,"\uc704\uc640 \uac19\uc774 \uc5ec\ub7ec\uac1c\uc758 Component\ub4e4\uc744 Layer\ub85c \uacb9\uccd0 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"MouseEvent"),"\uc640 \uac19\uc740 \uc0ac\uc6a9\uc790 \uc785\ub825\uc774 \ucc28\ub2e8\ub420 \uc218 \uc788\ub2e4."),Object(r.b)("p",null,"\uc774\uc640 \uac19\uc740 Layer \uad6c\uc131 \ubb38\uc81c\ub97c \ube44\ub86f\ud55c \uc5ec\ub7ec User Interaction\uc744 \uc678\ubd80\uc5d0 \uc704\uc784\ud558\uae30 \uc704\ud574, \uc77c\ubd80 \uc18d\uc131\ub4e4\uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," \ubfd0\ub9cc \uc544\ub2c8\ub77c ",Object(r.b)("inlineCode",{parentName:"p"},"HTMLElement"),"\ub85c \uc785\ub825\ub420 \uc218 \uc788\ub2e4."),Object(r.b)(o.Example,{example:Object(i.b)("./CornerstoneViewer/DelegateInteraction",{component:t(791),source:t(792),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/CornerstoneViewer/DelegateInteraction.tsx"}),mdxType:"Example"},Object(r.b)(s.a,{height:720,mdxType:"InsightViewerPreview"})),Object(r.b)("h1",null,"Tests"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"flip={true} invert={true}")," \uae30\ubcf8\uac12 Test"),Object(r.b)(o.Example,{example:Object(i.b)("./CornerstoneViewer/InvertAndFlip",{component:t(793),source:t(794),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/CornerstoneViewer/InvertAndFlip.tsx"}),mdxType:"Example"},Object(r.b)(s.a,{height:720,mdxType:"InsightViewerPreview"})))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=15.45b5470106c6da231db7.js.map