import styled, { css } from 'styled-components';

import { moveCanvas, moveElement, fadeIn, scaleX, scaleY } from './_keyframes';

export const Svg = styled.svg`
  margin-left: auto;
  max-width: 468px;
  display: block;
  padding-top: 16px;
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

export const FadingGroup = styled.g`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveElement}  ${speed} ${delay} ease infinite` : 'none'};

  &.fade-enter,
  &.fade-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.5s;
  }
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

export const Rect = styled.rect.attrs({
  fill: 'rgba(255, 255, 255, 0.3)',
})`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${fadeIn}  ${speed} ${delay} ease infinite` : 'none'};
  opacity: ${props => (props.play ? 0 : 1)};
  transition: ${props => (props.play ? 'none' : 'opacity 1s')};
`;

export const Line = styled.path.attrs({
  stroke: '#fff',
  strokeWidth: 2,
})`
  animation: ${({ speed = '10s', delay = '0s', horizontal, play }) =>
    play
      ? css`${horizontal ? scaleX : scaleY} ${speed} ${delay} ease infinite`
      : 'none'};
  transform: ${props =>
    props.play ? (props.horizontal ? 'scaleX(0)' : 'scaleY(0)') : 'none'};
  transform-origin: ${props => (props.horizontal ? '100% 0%' : '0% 0%')};
`;
