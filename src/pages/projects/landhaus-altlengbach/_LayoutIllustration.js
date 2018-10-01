import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  IllustrationContainer,
  Svg,
  AnimatedBrowser,
  Canvas,
  Group,
  CanvasArea,
  Rect,
  Line,
  Transition,
} from './_Graphics';

function CanvasBackground({ width, height }) {
  return (
    <>
      <CanvasArea
        name="Main"
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#52682d"
      />
      <CanvasArea
        name="Contact"
        x={-width}
        y={0}
        width={width}
        height={height}
        fill="#6e8b3d"
      />
      <CanvasArea
        name="Plans"
        x={0}
        y={height}
        width={width}
        height={height}
        fill="#435626"
      />
      <CanvasArea
        x={-width}
        y={height}
        width={width}
        height={height}
        fill="#37471f"
      />
    </>
  );
}

function CanvasLines({ width, height, opacity, play }) {
  return (
    <Group opacity={opacity}>
      <Line
        play={play}
        delay="0.5s"
        d={`M${(width / 13) * 5},0 L${(width / 13) * 5},${height * 2}`}
      />
      <Rect
        delay="0.625s"
        play={play}
        x={0}
        y={0}
        width={(width / 13) * 5}
        height={height}
      />
      <Line
        horizontal
        delay="0.75s"
        play={play}
        d={`M${width},${height * 0.85} L${-width},${height * 0.85}`}
      />
      <Rect
        delay="0.875s"
        play={play}
        x={0}
        y={height * 0.85}
        width={width}
        height={height * 0.15}
      />
      <Line
        horizontal
        delay="1s"
        play={play}
        d={`M${width},${height * 1.15} L${-width},${height * 1.15}`}
      />
      <Rect
        delay="1.125s"
        play={play}
        x={0}
        y={height}
        width={width}
        height={height * 0.15}
      />
      <Rect
        delay="1.375s"
        play={play}
        x={0}
        y={height}
        width={(width / 13) * 5}
        height={height}
      />
      <Line
        delay="1.5s"
        play={play}
        d={`M${width * -0.1},0 L${width * -0.1},${height * 2}`}
      />
      <Rect
        delay="1.625s"
        play={play}
        x={width * -0.1}
        y={0}
        width={width * 0.1}
        height={height}
      />
      <Rect
        delay="1.875s"
        play={play}
        x={-width}
        y={height * 0.85}
        width={width}
        height={height * 0.15}
      />
      <Rect
        delay="2.125s"
        play={play}
        x={-width}
        y={height}
        width={width}
        height={height * 0.15}
      />
      <Rect
        delay="2.375s"
        play={play}
        x={width * -0.1}
        y={height}
        width={width * 0.1}
        height={height}
      />
    </Group>
  );
}

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
  css,
  ...rest
}) => (
  <IllustrationContainer zoom={zoom} center={center} css={css}>
    <Svg viewBox={`0 0 ${width} ${height}`}>
      <CSSTransition
        timeout={timeout}
        classNames={classNames}
        in={showCanvas}
        unmountOnExit
      >
        <Transition as="g" classNames={classNames}>
          <Canvas play={animate === 'canvas'} delay="1s">
            <CanvasBackground width={width} height={height} />
            <CSSTransition
              timeout={timeout}
              classNames={classNames}
              in={showLines}
              unmountOnExit
            >
              <Transition as="g" classNames={classNames}>
                <CanvasLines
                  width={width}
                  height={height}
                  play={animate === 'lines'}
                  opacity={animate === 'lines' ? 1 : 0.2}
                />
              </Transition>
            </CSSTransition>
          </Canvas>
        </Transition>
      </CSSTransition>
    </Svg>

    <CSSTransition
      classNames={classNames}
      timeout={timeout}
      in={showBrowser}
      unmountOnExit
    >
      <AnimatedBrowser
        classNames={classNames}
        play={animate === 'browser'}
        delay="1s"
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
              <Transition classNames={classNames}>{renderContent()}</Transition>
            </CSSTransition>
          )}
        </TransitionGroup>
      </AnimatedBrowser>
    </CSSTransition>
  </IllustrationContainer>
);

export default LayoutIllustration;
