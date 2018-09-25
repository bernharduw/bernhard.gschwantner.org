import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Browser from '../../../components/Browser';
import { Group, FadingGroup, Canvas, Svg, Rect, Line } from './_Graphics';

const LayoutIllustration = ({
  zoom = '',
  center = false,
  width = 640,
  height = 360,
  showLines = false,
  showCanvas = false,
  showBrowser = false,
  animate = '',
  classNames = 'fade',
  timeout = 1000,
  contentKey,
  renderContent,
  ...rest
}) => (
  <Svg viewBox={`0 0 ${width} ${height}`}>
    <Group center={center} zoom={zoom} show>
      <Canvas show={showCanvas} play={animate === 'canvas'} delay="2s">
        <rect
          x={-width}
          y={0}
          width={2 * width}
          height={2 * height}
          fill="rgba(0,0,0,0.1)"
        />
        <g className="contactSection">
          <rect x={-width} y="0" width={width} height={height} fill="#6e8b3d" />
          <foreignObject
            x={-width}
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Contact</p>
          </foreignObject>
        </g>
        <g className="mainSection">
          <rect x="0" y="0" width={width} height={height} fill="#52682d" />
          <foreignObject
            x={0}
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Main</p>
          </foreignObject>
        </g>
        <g className="plansSection">
          <rect x={0} y={height} width={width} height={height} fill="#435626" />
          <foreignObject
            x={0}
            y={height + height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Plans</p>
          </foreignObject>
        </g>

        <Group show={showLines} opacity={showBrowser ? 0.2 : 1}>
          <Line
            play={animate === 'lines'}
            delay="1s"
            d={`M${(width / 13) * 5},0 L${(width / 13) * 5},${height * 2}`}
          />
          <Rect
            delay="1.25s"
            play={animate === 'lines'}
            x="0"
            y="0"
            width={(width / 13) * 5}
            height={height}
          />
          <Line
            horizontal
            delay="1.5s"
            play={animate === 'lines'}
            d={`M${width},${height * 0.85} L${-width},${height * 0.85}`}
          />
          <Rect
            delay="1.75s"
            play={animate === 'lines'}
            x={0}
            y={height * 0.85}
            width={width}
            height={height * 0.15}
          />
          <Line
            horizontal
            delay="2s"
            play={animate === 'lines'}
            d={`M${width},${height * 1.15} L${-width},${height * 1.15}`}
          />
          <Rect
            delay="2.25s"
            play={animate === 'lines'}
            x={0}
            y={height}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="2.75s"
            play={animate === 'lines'}
            x={0}
            y={height}
            width={(width / 13) * 5}
            height={height}
          />
          <Line
            delay="3s"
            play={animate === 'lines'}
            d={`M${width * -0.1},0 L${width * -0.1},${height * 2}`}
          />
          <Rect
            delay="3.25s"
            play={animate === 'lines'}
            x={width * -0.1}
            y="0"
            width={width * 0.1}
            height={height}
          />
          <Rect
            delay="3.75s"
            play={animate === 'lines'}
            x={-width}
            y={height * 0.85}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="4.25s"
            play={animate === 'lines'}
            x={-width}
            y={height}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="4.75s"
            play={animate === 'lines'}
            x={width * -0.1}
            y={height}
            width={width * 0.1}
            height={height}
          />
        </Group>
      </Canvas>

      <TransitionGroup component={null}>
        {(renderContent || showBrowser) && (
          <CSSTransition
            timeout={timeout}
            classNames={classNames}
            key={contentKey || 'default'}
          >
            <FadingGroup play={animate === 'browser'} delay="2s">
              <foreignObject x={0} y={0} width={width} height={height}>
                <Browser
                  target="_blank"
                  {...rest}
                  css={'height: 100%; height: calc(100% + 19px);'}
                >
                  {renderContent && renderContent()}
                </Browser>
              </foreignObject>
            </FadingGroup>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Group>
  </Svg>
);

export default LayoutIllustration;
