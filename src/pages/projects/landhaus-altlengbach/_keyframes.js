import { keyframes } from 'styled-components';

export const makeScaleX = (delay, speed) => keyframes`
  0%   { transform: scaleX(0); }
  5%   { transform: scaleX(0.5); }
  20%  { transform: scaleX(0.5); }
  25%  { transform: scaleX(1); }
  ${95 - (100 / speed) * delay}% { transform: scaleX(1); opacity: 1; }
  ${100 - (100 / speed) * delay}%   { transform: scaleX(0); opacity: 0; }
`;

export const makeScaleY = (delay, speed) => keyframes`
  0%   { transform: scaleY(0); }
  5%   { transform: scaleY(0.5); }
  15%  { transform: scaleY(0.5); }
  20%  { transform: scaleY(1); }
  ${95 - (100 / speed) * delay}% { transform: scaleY(1); opacity: 1; }
  ${100 - (100 / speed) * delay}%   { transform: scaleY(0); opacity: 0; }
`;

export const makeFadeIn = (delay, speed) => keyframes`
  0%  { opacity: 0; }
  20% { opacity: 1; }
  ${95 - (100 / speed) * delay}% { opacity: 1; }
  ${100 - (100 / speed) * delay}% { opacity: 0; }
`;

export const moveElement = keyframes`
  0%      { transform: translateY(0%); }
  10%     { transform: translateY(100%); }
  26.667% { transform: translateY(100%); }
  36.667% { transform: translateY(0%); }
  53.333% { transform: translateY(0%); }
  63.333% { transform: translateX(-100%); }
  80%     { transform: translateX(-100%); }
  90%     { transform: translateX(0%); }
`;

export const moveCanvas = keyframes`
  0%      { transform: translateY(0%); }
  10%     { transform: translateY(-100%); }
  26.667% { transform: translateY(-100%); }
  36.667% { transform: translateY(0%); }
  53.333% { transform: translateY(0%); }
  63.333% { transform: translateX(100%); }
  80%     { transform: translateX(100%); }
  90%     { transform: translateX(0%); }
`;
