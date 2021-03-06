import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'rebass';

import Browser from '../../../components/Browser';
import {
  moveCanvas,
  moveElement,
  makeFadeIn,
  makeScaleX,
  makeScaleY,
} from './_keyframes';

export const Transition = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;

  &.${props => props.classNames}-enter {
    opacity: 0;
  }
  &.${props => props.classNames}-enter-active {
    opacity: 1;
  }
  &.${props => props.classNames}-exit-active {
    opacity: 0;
  }
`;

export const IllustrationContainer = styled(Box)`
  margin-top: 16px;
  margin-bottom: 16px;
  position: relative;
  transform-origin: 100% 0;
  transition: opacity 1s, transform 1s;
  transform: ${({ center, zoom }) =>
    `${center ? 'translate(-25%, 25%)' : ''} ${
      zoom === 'canvas' ? 'scale(0.5)' : 'none'
    }`};

  @media screen and (orientation: portrait) {
    // The view height should never exceed 50% of the viewport.
    // We can achieve that by constraining the width
    // to 50% of the viewport height * the aspect ratio (e.g. 16/9).
    max-width: ${props => 50 * props.aspectRatio}vh;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Svg = styled.svg`
  display: block;
  && {
    overflow: visible;
  }
`;

export const Group = styled.g`
  transition: opacity 1s;
  opacity: ${({ opacity = 1 }) => opacity};
`;

export const Canvas = styled(Group)`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveCanvas}  ${speed} ${delay} ease infinite` : 'none'};
`;

/**
 * A page or other named area within the canvas.
 */
export const CanvasArea = ({ x, y, width, height, fill, name }) => (
  <>
    <Box
      as="rect"
      x={x}
      y={y}
      width={width}
      height={height}
      css={`
        fill: ${fill};
      `}
    />
    {name && (
      <Box
        as="text"
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        alignmentBaseline="central"
        css={`
          font-size: ${height / 8}px;
          fill: rgba(255, 255, 255, 0.8);
        `}
      >
        {name}
      </Box>
    )}
  </>
);
const AnimatedElement = styled(Transition)`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveElement}  ${speed} ${delay} ease infinite` : 'none'};
`;

export const AnimatedBrowser = ({
  play,
  speed,
  delay,
  classNames,
  ...rest
}) => (
  <AnimatedElement
    play={play}
    speed={speed}
    delay={delay}
    classNames={classNames}
  >
    <Browser {...rest} />
  </AnimatedElement>
);
export const Rect = styled.rect.attrs({
  fill: 'rgba(255, 255, 255, 0.2)',
})`
  animation: ${({ play, speed = '5s', delay = '0s' }) =>
    play
      ? css`${makeFadeIn(
          parseFloat(delay),
          parseFloat(speed)
        )}  ${speed} ${delay} ease infinite`
      : 'none'};
  opacity: ${props => (props.play ? 0 : 1)};
  transition: ${props => (props.play ? 'none' : 'opacity 1s')};
`;

export const Line = styled.path.attrs({
  stroke: '#fff',
  strokeWidth: 2,
})`
  animation: ${({ speed = '5s', delay = '0s', horizontal, play }) =>
    play
      ? css`${
          horizontal
            ? makeScaleX(parseFloat(delay), parseFloat(speed))
            : makeScaleY(parseFloat(delay), parseFloat(speed))
        } ${speed} ${delay} ease infinite`
      : 'none'};
  transform: ${props =>
    props.play ? (props.horizontal ? 'scaleX(0)' : 'scaleY(0)') : 'none'};
  transform-origin: ${props => (props.horizontal ? '100% 0%' : '0% 0%')};
`;
