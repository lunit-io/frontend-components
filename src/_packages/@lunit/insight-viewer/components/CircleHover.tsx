import React, { Component } from 'react';
import styled from 'styled-components';
import { FrameConsumer } from '../context/frame';
import { hitTestCircles } from '../geom/hitTestCircles';
import { InsightViewerGuestProps } from '../hooks/useInsightViewerSync';
import { Contour, Point } from '../types';

export interface CircleHoverProps<T extends Contour> extends InsightViewerGuestProps {
  width: number;
  height: number;

  /** Contour 데이터를 상속받은 Annotation 데이터 */
  contours: T[];

  /**
   * Hover 기능 활성화 여부
   * <InsightViewer> 와 마찬가지로 HTMLElement로 입력할 경우 MouseEvent를 해당 HTMLElement를 사용해서 처리한다
   */
  hover: boolean | HTMLElement | null;

  /**
   * 특정 Contour에 Mouse Over 되었을 때
   * focusedContour를 결정하는데 필요하다
   */
  onFocus: (contour: T | null) => void;

  className?: string;
}

interface CircleHoverState {
  p1: Point | null;
  p2: Point | null;
}

export class CircleHoverBase<T extends Contour> extends Component<CircleHoverProps<T>, CircleHoverState> {
  private svg: SVGSVGElement | null = null;
  private element: HTMLElement | null = null;
  private focused: T | null = null;

  private contentWindow: Window = window;

  constructor(props: CircleHoverProps<T>) {
    super(props);

    this.state = {
      p1: null,
      p2: null,
    };
  }

  render() {
    return (
      <>
        <FrameConsumer stateRef={({ contentWindow }) => (this.contentWindow = contentWindow)} />
        <svg
          ref={this.svgRef}
          role="figure"
          width={this.props.width}
          height={this.props.height}
          className={this.props.className}
        >
          {this.props.cornerstoneRenderData &&
            this.state.p1 &&
            this.state.p2 &&
            (() => {
              const { x: x1, y: y1 } = cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element, {
                x: this.state.p1[0],
                y: this.state.p1[1],
              });
              const { x: x2, y: y2 } = cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element, {
                x: this.state.p2[0],
                y: this.state.p2[1],
              });
              const r: number = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));

              return (
                <>
                  <circle cx={x1} cy={y1} r={r} />
                  <line x1={x1} y1={y1} x2={x2} y2={y2} />
                </>
              );
            })()}
        </svg>
      </>
    );
  }

  svgRef = (svg: SVGSVGElement) => {
    if (svg && this.svg && this.element) {
      this.deactivateInitialEvents();

      if (this.canActivate(this.props)) {
        this.svg = svg;
        this.element = this.getElement(this.props);
        this.activateInitialEvents();
      }
    }

    this.svg = svg;
  };

  componentDidMount() {
    if (!this.svg) throw new Error('<svg> is not initialized');

    if (this.canActivate(this.props)) {
      this.element = this.getElement(this.props);
      this.activateInitialEvents();
    }
  }

  componentDidUpdate(prevProps: Readonly<CircleHoverProps<T>>) {
    if (prevProps.hover !== this.props.hover) {
      if (this.element) this.deactivateInitialEvents();

      if (this.canActivate(this.props)) {
        this.element = this.getElement(this.props);
        this.activateInitialEvents();
      }
    }
  }

  componentWillUnmount() {
    if (this.element) this.deactivateInitialEvents();
  }

  getElement = ({ hover }: Readonly<CircleHoverProps<T>>): HTMLElement => {
    //@ts-ignore
    return hover instanceof this.contentWindow['HTMLElement'] ? (hover as HTMLElement) : (this.svg as HTMLElement);
  };

  canActivate = ({ hover }: Readonly<CircleHoverProps<T>>) => {
    return hover instanceof this.contentWindow['HTMLElement'] || hover === true;
  };

  // ---------------------------------------------
  // initial events
  // ---------------------------------------------
  activateInitialEvents = () => {
    if (this.element) this.element.addEventListener('mousemove', this.onMouseMoveToFindFocus);
  };

  deactivateInitialEvents = () => {
    if (this.element) this.element.removeEventListener('mousemove', this.onMouseMoveToFindFocus);
  };

  onMouseMoveToFindFocus = (event: MouseEvent) => {
    event.stopPropagation();

    this.findFocus(event.pageX, event.pageY);
  };

  findFocus = (pageX: number, pageY: number) => {
    if (!this.props.contours || this.props.contours.length === 0 || !this.props.cornerstoneRenderData) return;

    const element: HTMLElement = this.props.cornerstoneRenderData.element;

    const { x, y } = cornerstone.pageToPixel(element, pageX, pageY);

    this.focused = hitTestCircles(this.props.contours, [x, y]);

    this.props.onFocus(this.focused);
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const CircleHover: new <T extends Contour>() => CircleHoverBase<T> = styled(CircleHoverBase)`
  position: absolute;
  top: 0;
  left: 0;
` as any;

/**
 * @deprecated use CircleHover instead
 */
export const UserCircleHover = CircleHover;
