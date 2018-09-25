import React from 'react';
import styled, { css } from 'styled-components';

import Browser from '../../../components/Browser';
import {
  moveCanvas,
  moveElement,
  makeFadeIn,
  makeScaleX,
  makeScaleY,
} from './_keyframes';

export const Container = styled.div`
  margin-left: auto;
  margin-top: 16px;
  max-width: 468px;
  position: relative;
  transform-origin: 100% 0;
  transition: opacity 1s, transform 1s;
  transform: ${({ center, zoom }) =>
    `${center ? 'translate(-25%, 25%)' : ''} ${
      zoom === 'canvas' ? 'scale(0.5)' : 'none'
    }`};
`;

export const Svg = styled.svg`
  display: block;
  && {
    overflow: visible;
  }
`;

export const Group = styled.g`
  transform-origin: 100% 0;
  transition: opacity 1s, transform 1s;
  transform: ${({ center, zoom }) =>
    `${center ? 'translate(-25%, 25%)' : ''} ${
      zoom === 'canvas' ? 'scale(0.5)' : 'none'
    }`};
  opacity: ${({ show = true, opacity = 1 }) => (show ? opacity : 0)};
`;

export const Canvas = styled(Group)`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveCanvas}  ${speed} ${delay} ease infinite` : 'none'};
`;

export const Transition = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`;

const AnimatedElement = styled(Transition)`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveElement}  ${speed} ${delay} ease infinite` : 'none'};
`;

export const AnimatedBrowser = ({ play, speed, delay, ...rest }) => (
  <AnimatedElement play={play} speed={speed} delay={delay}>
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

export const Text = styled.text.attrs({
  textAnchor: 'middle',
  alignmentBaseline: 'central',
})`
  fill: #fff;
  font-size: ${props => props.fontSize}px;
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
