import React from 'react';
import Link from './Link';

export default function Button({ color, hoverColor, ...rest }) {
  return (
    <Link
      p={3}
      css={`
        transition: color 0.3s ease-out, background 0.3s ease-out;
        border: 2px solid ${color};
        border-radius: 50em;
        font-weight: normal;
        :hover {
          background-color: ${color};
          color: ${hoverColor};
          text-decoration: none;
        }
        :focus {
          outline: none;
          box-shadow: 0 0 0 2px;
        }
        :disabled {
          opacity: 0.65;
          :hover {
            background-color: transparent;
            color: currentColor;
          }
        }
        > svg {
          vertical-align: middle;
        }
      `}
      {...rest}
    />
  );
}
