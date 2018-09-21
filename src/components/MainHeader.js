import React from 'react';
import { Flex } from 'rebass';
import { keyframes, css } from 'styled-components';
import { darken, lighten, adjustHue } from 'polished';

const moveBackground = keyframes`
  0% {
		background-position: 100% 50%;
	}

	50% {
		background-position: 0% 50%;
  }

  100% {
		background-position: 100% 50%;
	}
`;

function getGradient(color) {
  const gradient = [
    darken(0.4, adjustHue(-15, color)),
    darken(0.2, adjustHue(-10, color)),
    color,
    lighten(0.05, adjustHue(30, color)),
  ].join(',');
  // console.log(gradient);
  return gradient;
}

const Header = ({
  css: additionalCss = '',
  color = '#ea5971',
  animate = false,
  ...props
}) => (
  <Flex
    as="header"
    css={css`
      background-image: linear-gradient(to bottom left, ${getGradient(color)});
      background-color: ${color};
      background-attachment: fixed;
      background-size: 400% 100%;
      background-position: 100% 50%;
      transition: background 4s ease-out;

      ${additionalCss};

      &:hover {
        background-position: 25% 50%;
      }
      ${animate
        ? css`
            animation: ${moveBackground} 20s ease-in-out infinite;
          `
        : ''};
    `}
    color="white"
    alignItems="center"
    flexDirection={['column', 'row']}
    {...props}
  />
);

export default Header;
