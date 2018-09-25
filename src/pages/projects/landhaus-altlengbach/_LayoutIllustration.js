import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  Container,
  Svg,
  Group,
  AnimatedBrowser,
  Canvas,
  Text,
  Rect,
  Line,
  Transition,
} from './_Graphics';

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
  <Container zoom={zoom} center={center}>
    <Svg viewBox={`0 0 ${width} ${height}`}>
      <Group center={center} show>
        <Canvas show={showCanvas} play={animate === 'canvas'} delay="2s">
          <rect
            x={-width}
            y={0}
            width={2 * width}
            height={2 * height}
            fill="rgba(0,0,0,0.1)"
          />
          <g className="contactSection">
            <rect
              x={-width}
              y={0}
              width={width}
              height={height}
              fill="#6e8b3d"
            />
            <Text x={-width / 2} y={height / 2} fontSize={height / 10}>
              Contact
            </Text>
          </g>
          <g className="mainSection">
            <rect x="0" y="0" width={width} height={height} fill="#52682d" />
            <Text x={width / 2} y={height / 2} fontSize={height / 10}>
              Main
            </Text>
          </g>
          <g className="plansSection">
            <rect
              x={0}
              y={height}
              width={width}
              height={height}
              fill="#435626"
            />
            <Text x={width / 2} y={height * 1.5} fontSize={height / 10}>
              Plans
            </Text>
          </g>

          <Group show={showLines} opacity={showBrowser ? 0.4 : 1}>
            <Line
              play={animate === 'lines'}
              delay="0.5s"
              d={`M${(width / 13) * 5},0 L${(width / 13) * 5},${height * 2}`}
            />
            <Rect
              delay="0.625s"
              play={animate === 'lines'}
              x="0"
              y="0"
              width={(width / 13) * 5}
              height={height}
            />
            <Line
              horizontal
              delay="0.75s"
              play={animate === 'lines'}
              d={`M${width},${height * 0.85} L${-width},${height * 0.85}`}
            />
            <Rect
              delay="0.875s"
              play={animate === 'lines'}
              x={0}
              y={height * 0.85}
              width={width}
              height={height * 0.15}
            />
            <Line
              horizontal
              delay="1s"
              play={animate === 'lines'}
              d={`M${width},${height * 1.15} L${-width},${height * 1.15}`}
            />
            <Rect
              delay="1.125s"
              play={animate === 'lines'}
              x={0}
              y={height}
              width={width}
              height={height * 0.15}
            />
            <Rect
              delay="1.375s"
              play={animate === 'lines'}
              x={0}
              y={height}
              width={(width / 13) * 5}
              height={height}
            />
            <Line
              delay="1.5s"
              play={animate === 'lines'}
              d={`M${width * -0.1},0 L${width * -0.1},${height * 2}`}
            />
            <Rect
              delay="1.625s"
              play={animate === 'lines'}
              x={width * -0.1}
              y="0"
              width={width * 0.1}
              height={height}
            />
            <Rect
              delay="1.875s"
              play={animate === 'lines'}
              x={-width}
              y={height * 0.85}
              width={width}
              height={height * 0.15}
            />
            <Rect
              delay="2.125s"
              play={animate === 'lines'}
              x={-width}
              y={height}
              width={width}
              height={height * 0.15}
            />
            <Rect
              delay="2.375s"
              play={animate === 'lines'}
              x={width * -0.1}
              y={height}
              width={width * 0.1}
              height={height}
            />
          </Group>
        </Canvas>
      </Group>
    </Svg>

    <TransitionGroup component={null}>
      {showBrowser && (
        <CSSTransition timeout={timeout} classNames={classNames} key={animate}>
          <AnimatedBrowser
            play={animate === 'browser'}
            delay="2s"
            target="_blank"
            {...rest}
            css="height: 100%;"
          >
            <TransitionGroup component={null}>
              {renderContent && (
                <CSSTransition
                  timeout={timeout}
                  classNames={classNames}
                  key={contentKey || 'default'}
                >
                  <Transition classNames={classNames}>
                    {renderContent()}
                  </Transition>
                </CSSTransition>
              )}
            </TransitionGroup>
          </AnimatedBrowser>
        </CSSTransition>
      )}
    </TransitionGroup>
  </Container>
);

export default LayoutIllustration;
