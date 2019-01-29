import React from 'react';
import { Box } from 'rebass';

export default function SemiContainer({ reverse, css, ...props }) {
  return (
    <Box
      width={[1, 1 / 2]}
      px={[2, 3]}
      css={`
        max-width: 500px;
        ${css} ${reverse
          ? `&:first-child {
              margin-right: auto; // Align the last child to the left.
            }
            &:last-child {
              margin-left: auto; // Align the first child to the right.
            }`
          : `&:first-child {
              margin-left: auto; // Align the first child to the right.
            }
            &:last-child {
              margin-right: auto; // Align the last child to the left.
            }`};
      `}
      {...props}
    />
  );
}
