import { keyframes } from 'styled-components';

export const scaleX = keyframes`
  0%   { transform: scaleX(0); }
  5%   { transform: scaleX(0.5); }
  20%  { transform: scaleX(0.5); }
  25%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`;

export const scaleY = keyframes`
  0%   { transform: scaleY(0); }
  5%   { transform: scaleY(0.5); }
  15%  { transform: scaleY(0.5); }
  20%  { transform: scaleY(1); }
  100% { transform: scaleY(1); }
`;

export const fadeIn = keyframes`
  0%  { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0; }
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
