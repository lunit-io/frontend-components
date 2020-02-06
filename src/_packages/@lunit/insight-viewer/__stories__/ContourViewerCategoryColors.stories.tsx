import {
  Contour,
  ContourDrawer,
  ContourViewer,
  CornerstoneImage,
  CornerstoneSingleImage,
  InsightViewer,
  InsightViewerContainer,
  installWADOImageLoader,
  ProgressViewer,
  unloadWADOImage,
  useInsightViewerSync,
  useUserContour, withInsightViewerStorybookGlobalStyle,
} from '@lunit/insight-viewer';
import { withOPTComponentsStorybookGlobalStyle } from '@lunit/opt-components';
import { storiesOf } from '@storybook/react';
import { color as d3color } from 'd3-color';
import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useController, withTestController } from './decorators/withTestController';

installWADOImageLoader();

function labelFunction(contour: Contour): string {
  console.log('UserContourViewerColors2.stories.tsx..labelFunction()', contour.dataAttrs);
  return `[${contour.id}] ${contour.dataAttrs?.['data-category']}`;
}

const initialContours: Omit<Contour, 'id'>[] = [
  {
    polygon: [[365.2266666666667, 40.959999999999994], [360.96000000000004, 43.519999999999996], [356.6933333333333, 46.93333333333334], [353.28000000000003, 50.346666666666664], [349.8666666666667, 53.760000000000005], [348.16, 58.879999999999995], [346.4533333333334, 64.85333333333334], [345.6, 70.82666666666667], [345.6, 77.65333333333334], [349.0133333333334, 85.33333333333333], [358.40000000000003, 93.01333333333334], [371.20000000000005, 98.13333333333334], [390.8266666666667, 102.39999999999999], [412.16, 103.25333333333334], [432.64000000000004, 101.54666666666667], [444.5866666666667, 98.13333333333334], [453.12, 94.72000000000001], [458.24, 91.30666666666666], [460.8, 86.18666666666668], [461.65333333333336, 82.77333333333334], [457.3866666666667, 77.65333333333334], [452.2666666666667, 70.82666666666667], [446.29333333333335, 63.146666666666675], [443.73333333333335, 58.02666666666667], [441.17333333333335, 52.906666666666666], [439.4666666666667, 49.49333333333334], [437.76000000000005, 47.78666666666666]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [[260.2666666666667, 180.9066666666667], [260.2666666666667, 181.76], [256, 186.0266666666667], [253.44000000000003, 188.5866666666667], [250.88000000000002, 192], [248.32000000000002, 197.97333333333336], [245.76000000000002, 204.8], [244.9066666666667, 212.48000000000002], [244.9066666666667, 224.42666666666668], [248.32000000000002, 235.51999999999998], [257.7066666666667, 246.61333333333334], [271.36, 256.85333333333335], [298.6666666666667, 265.38666666666666], [308.9066666666667, 266.24], [331.9466666666667, 264.53333333333336], [343.04, 258.56], [349.8666666666667, 253.44], [354.1333333333334, 248.32], [356.6933333333333, 242.3466666666667], [357.5466666666667, 236.37333333333333], [357.5466666666667, 228.69333333333333], [357.5466666666667, 220.16000000000003], [354.9866666666667, 211.62666666666667], [349.8666666666667, 201.38666666666666], [343.8933333333334, 193.70666666666665], [337.06666666666666, 189.44], [328.53333333333336, 186.0266666666667], [320.85333333333335, 186.0266666666667], [313.17333333333335, 186.88]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
  {
    polygon: [[157.01333333333335, 369.49333333333334], [157.01333333333335, 369.49333333333334], [151.89333333333335, 376.32], [148.48000000000002, 382.29333333333335], [144.21333333333334, 389.97333333333336], [138.24, 405.33333333333337], [134.82666666666668, 416.4266666666667], [133.12, 431.7866666666667], [132.26666666666668, 444.5866666666667], [133.12, 454.82666666666665], [136.53333333333333, 462.50666666666666], [145.06666666666666, 470.18666666666667], [155.30666666666667, 474.4533333333333], [169.81333333333333, 477.0133333333334], [184.32000000000002, 476.16], [195.41333333333336, 472.7466666666667], [205.65333333333334, 467.62666666666667], [211.6266666666667, 463.36], [219.30666666666667, 456.53333333333336], [221.86666666666667, 451.41333333333336], [222.72000000000003, 446.29333333333335], [222.72000000000003, 439.4666666666667], [221.01333333333335, 430.08], [216.74666666666667, 418.9866666666667], [212.48000000000002, 409.6], [207.36, 401.06666666666666], [200.53333333333336, 394.24], [193.70666666666668, 389.12], [187.73333333333335, 385.70666666666665]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [[104.96000000000001, 89.60000000000001], [104.10666666666667, 89.60000000000001], [97.28, 91.30666666666666], [91.30666666666667, 93.01333333333334], [86.18666666666667, 94.72000000000001], [79.36, 98.13333333333334], [71.68, 103.25333333333334], [65.70666666666668, 109.22666666666667], [61.440000000000005, 113.49333333333333], [58.88, 121.17333333333333], [58.02666666666667, 129.70666666666665], [60.58666666666667, 145.06666666666666], [64, 151.04000000000002], [73.38666666666667, 162.98666666666668], [96.42666666666668, 179.2], [115.2, 186.88], [134.82666666666668, 191.1466666666667], [155.30666666666667, 191.1466666666667], [168.10666666666668, 188.5866666666667], [178.34666666666666, 186.0266666666667], [186.88000000000002, 180.9066666666667], [191.14666666666668, 175.7866666666667], [193.70666666666668, 169.81333333333333], [194.56, 163.84000000000003], [194.56, 158.72000000000003], [194.56, 151.89333333333332], [193.70666666666668, 146.77333333333337], [192, 140.8], [192, 139.09333333333336], [190.29333333333335, 133.97333333333336]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [[249.17333333333335, -17.06666666666667], [246.61333333333334, -17.06666666666667], [232.10666666666668, -12.800000000000004], [221.01333333333335, -9.38666666666667], [208.21333333333334, -5.1200000000000045], [198.82666666666668, 0], [192, 5.119999999999997], [187.73333333333335, 10.240000000000002], [185.17333333333335, 15.36], [183.46666666666667, 23.040000000000006], [183.46666666666667, 34.13333333333334], [183.46666666666667, 46.93333333333334], [186.02666666666667, 64.85333333333334], [190.29333333333335, 76.8], [197.97333333333336, 86.18666666666668], [207.36, 93.01333333333334], [221.86666666666667, 97.28000000000002], [238.08, 98.98666666666666], [256.85333333333335, 98.13333333333334], [271.36, 93.86666666666666], [284.16, 87.89333333333333], [296.96000000000004, 80.21333333333334], [306.3466666666667, 72.53333333333333], [310.61333333333334, 67.41333333333334], [313.17333333333335, 60.58666666666667], [314.0266666666667, 54.61333333333333], [314.0266666666667, 44.373333333333335], [312.32, 35.84], [308.9066666666667, 25.599999999999994], [306.3466666666667, 17.066666666666663], [304.64000000000004, 7.68], [303.7866666666667, 1.7066666666666634], [302.93333333333334, -2.5600000000000023], [302.08000000000004, -5.973333333333336]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
  {
    polygon: [[320, 363.52], [318.29333333333335, 363.52], [314.0266666666667, 365.2266666666667], [308.05333333333334, 367.7866666666667], [300.37333333333333, 374.61333333333334], [291.84000000000003, 381.44], [287.5733333333333, 389.12], [285.0133333333334, 395.94666666666666], [284.16, 401.92], [284.16, 407.04], [287.5733333333333, 414.72], [295.25333333333333, 423.25333333333333], [305.49333333333334, 432.64], [318.29333333333335, 441.17333333333335], [329.3866666666667, 446.29333333333335], [344.74666666666667, 449.7066666666667], [353.28000000000003, 450.56], [360.96000000000004, 450.56], [366.93333333333334, 448], [374.61333333333334, 444.5866666666667], [380.5866666666667, 441.17333333333335], [384.85333333333335, 437.76], [389.12, 433.49333333333334], [391.68, 426.6666666666667], [392.53333333333336, 416.4266666666667], [393.3866666666667, 401.92], [393.3866666666667, 391.68], [390.8266666666667, 382.29333333333335], [388.2666666666667, 377.17333333333335], [384.85333333333335, 372.9066666666667], [379.73333333333335, 371.2], [374.61333333333334, 370.3466666666667], [367.7866666666667, 370.3466666666667], [358.40000000000003, 370.3466666666667], [354.9866666666667, 370.3466666666667]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [[410.4533333333334, 273.06666666666666], [407.04, 273.92], [401.92, 275.62666666666667], [397.65333333333336, 276.48], [395.09333333333336, 278.18666666666667], [392.53333333333336, 279.04], [389.97333333333336, 281.6], [388.2666666666667, 284.16], [386.56, 289.28000000000003], [384.85333333333335, 296.1066666666667], [383.1466666666667, 306.3466666666667], [381.44, 318.29333333333335], [380.5866666666667, 327.68], [381.44, 333.65333333333336], [385.7066666666667, 337.92], [392.53333333333336, 342.18666666666667], [401.92, 345.6], [414.72, 349.0133333333333], [427.52000000000004, 349.8666666666667], [438.61333333333334, 349.8666666666667], [446.29333333333335, 347.3066666666667], [453.12, 344.74666666666667], [456.53333333333336, 341.3333333333333], [459.9466666666667, 337.06666666666666], [461.65333333333336, 332.8], [463.36, 327.68], [464.21333333333337, 321.70666666666665], [465.0666666666667, 314.88], [465.92, 307.2], [465.92, 302.08], [465.92, 296.96], [465.92, 292.6933333333333], [465.0666666666667, 289.28000000000003], [463.36, 285.0133333333333], [461.65333333333336, 281.6], [458.24, 277.3333333333333], [454.8266666666667, 274.7733333333333], [450.56, 271.36], [447.1466666666667, 269.6533333333333], [444.5866666666667, 267.94666666666666], [442.88000000000005, 267.09333333333336], [440.32000000000005, 267.09333333333336]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
  {
    polygon: [[95.57333333333334, 251.73333333333335], [89.60000000000001, 255.14666666666665], [82.77333333333334, 261.12], [75.94666666666667, 267.94666666666666], [72.53333333333333, 273.92], [69.97333333333334, 279.8933333333333], [69.12, 285.0133333333333], [69.12, 290.9866666666667], [69.97333333333334, 298.6666666666667], [75.94666666666667, 308.05333333333334], [82.77333333333334, 315.73333333333335], [93.01333333333334, 323.41333333333336], [106.66666666666667, 330.24], [120.32000000000001, 332.8], [134.82666666666668, 333.65333333333336], [157.86666666666667, 330.24], [174.08, 323.41333333333336], [183.46666666666667, 317.44], [193.70666666666668, 310.61333333333334], [201.38666666666668, 303.7866666666667], [205.65333333333334, 297.81333333333333], [207.36, 291.84], [208.21333333333334, 283.3066666666667], [205.65333333333334, 273.92], [197.97333333333336, 262.82666666666665], [188.58666666666667, 251.73333333333335], [180.05333333333334, 244.90666666666664], [169.81333333333333, 238.07999999999998], [161.28, 233.81333333333333], [154.45333333333335, 231.25333333333333], [149.33333333333334, 230.39999999999998], [145.06666666666666, 230.39999999999998]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'normal',
    },
  },
  {
    polygon: [[31.573333333333334, 365.2266666666667], [30.720000000000002, 365.2266666666667], [27.30666666666667, 368.64], [24.74666666666667, 372.9066666666667], [19.62666666666667, 380.5866666666667], [15.360000000000001, 387.41333333333336], [11.946666666666667, 395.09333333333336], [10.24, 403.62666666666667], [9.386666666666667, 410.4533333333333], [9.386666666666667, 417.28000000000003], [11.093333333333334, 422.40000000000003], [17.92, 427.52000000000004], [30.720000000000002, 433.49333333333334], [45.22666666666667, 435.2], [55.46666666666667, 435.2], [65.70666666666668, 434.3466666666667], [74.24000000000001, 430.08], [81.92, 424.96000000000004], [87.04, 419.84000000000003], [90.45333333333333, 414.72], [92.16000000000001, 409.6], [93.01333333333334, 403.62666666666667], [93.01333333333334, 395.94666666666666], [90.45333333333333, 388.26666666666665], [86.18666666666667, 381.44], [81.92, 375.4666666666667], [75.09333333333333, 370.3466666666667], [63.14666666666667, 364.37333333333333], [53.760000000000005, 362.6666666666667], [48.64, 362.6666666666667], [42.66666666666667, 363.52], [40.96, 364.37333333333333], [36.693333333333335, 366.08]],
    label: labelFunction,
    dataAttrs: {
      'data-category': 'abnormal',
    },
  },
];

const colors = {
  normal: '#3366cc',
  abnormal: '#dc3912',
};

const contourStyle = (value: string, color: string) => css`
  > [data-category="${value}"] {
    --contour-viewer-color: ${color};
    --contour-viewer-focused-color: ${d3color(color)?.brighter(3).toString() || color};
    --contour-viewer-fill-color: ${color};
  }
`;

const Viewer = styled(ContourViewer)`
  polygon {
    fill-opacity: 0.3;
  }

  ${Object.keys(colors).map(value => contourStyle(value, colors[value]))};
`;

const Drawer = styled(ContourDrawer)`
  --contour-drawer-color: #99f4ac;
  --contour-drawer-fill-color: rgba(255, 255, 255, 0.4);
  --contour-drawer-stroke-width: 7px;
`;

function Sample() {
  const resetTime: number = useMemo(() => Date.now(), []);
  const image: CornerstoneImage = useMemo(() => new CornerstoneSingleImage(`wadouri:https://lunit-frontend-fixtures.netlify.com/dcm-files/series/CT000010.dcm`, {unload: unloadWADOImage}), []);
  
  const {
    width,
    height,
    control,
    wheel,
    invert,
    flip,
  } = useController();
  
  const [interactionElement, setInteractionElement] = useState<HTMLElement | null>(null);
  
  const {
    cornerstoneRenderData,
    updateCornerstoneRenderData,
  } = useInsightViewerSync();
  
  const {
    contours,
    focusedContour,
    addContour,
    removeContour,
    focusContour,
  } = useUserContour({initialContours});
  
  return (
    <InsightViewerContainer ref={setInteractionElement} width={width} height={height}>
      <InsightViewer width={width}
                     height={height}
                     invert={invert}
                     flip={flip}
                     pan={control === 'pan' && interactionElement}
                     adjust={control === 'adjust' && interactionElement}
                     zoom={wheel === 'zoom' && interactionElement}
                     resetTime={resetTime}
                     image={image}
                     updateCornerstoneRenderData={updateCornerstoneRenderData}/>
      {
        contours &&
        contours.length > 0 &&
        cornerstoneRenderData &&
        // Canvas Style을 변경할 수 있다
        <Viewer width={width}
                height={height}
                contours={contours}
                focusedContour={focusedContour}
                cornerstoneRenderData={cornerstoneRenderData}/>
      }
      {
        contours &&
        cornerstoneRenderData &&
        control === 'pen' &&
        // Canvas Style을 변경할 수 있다
        <Drawer width={width}
                height={height}
                contours={contours}
                draw={control === 'pen' && interactionElement}
                onFocus={focusContour}
                onAdd={contour => addContour(contour, {
                  dataAttrs: {'data-category': Math.random() > 0.5 ? 'normal' : 'abnormal'},
                  label: labelFunction,
                })}
                onRemove={removeContour}
                cornerstoneRenderData={cornerstoneRenderData}/>
      }
      <ProgressViewer image={image}
                      width={width}
                      height={height}/>
    </InsightViewerContainer>
  );
}

storiesOf('insight-viewer', module)
  .addDecorator(withOPTComponentsStorybookGlobalStyle)
  .addDecorator(withInsightViewerStorybookGlobalStyle)
  .addDecorator(withTestController({
    width: [600, 400, 1000],
    height: [700, 400, 1000],
    control: ['pen', ['none', 'pen', 'pan', 'adjust']],
    wheel: ['zoom', ['none', 'zoom']],
    flip: false,
    invert: false,
  }))
  .add('<ContourViewer className={categoryColors}>', () => <Sample/>);