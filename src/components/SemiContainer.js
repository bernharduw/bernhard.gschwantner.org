import React from 'react';
import { Box } from 'rebass';

const SemiContainer = ({ side = 'start', ...props }) => (
  <Box
    width={[1, 1 / 2]}
    ml={side === 'start' ? 'auto' : 0}
    mr={side === 'end' ? 'auto' : 0}
    pl={[2, side === 'start' ? 3 : 0]}
    pr={[2, side === 'end' ? 3 : 0]}
    css={`
      max-width: 500px;
    `}
    {...props}
  />
);

export default SemiContainer;
