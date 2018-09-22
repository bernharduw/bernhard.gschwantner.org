import React from 'react';
import { Box } from 'rebass';

const Container = props => (
  <Box
    px={[2, 3]}
    py={4}
    mx="auto"
    css={`
      max-width: 1000px;
    `}
    {...props}
  />
);

export default Container;
