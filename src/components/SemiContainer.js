import React from 'react';
import { Box } from 'rebass';

const SemiContainer = props => (
  <Box
    width={[1, 1 / 2]}
    px={[2, 3]}
    css={`
      max-width: 500px;

      &:first-child {
        margin-left: auto; // Align the first child to the right.
      }
      &:last-child {
        margin-right: auto; // Align the last child to the left.
      }
    `}
    {...props}
  />
);

export default SemiContainer;
