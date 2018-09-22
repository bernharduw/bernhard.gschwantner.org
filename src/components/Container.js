import React from 'react';
import { Box } from 'rebass';

const Container = props => (
  <Box
    px={[2, 3]}
    py={4}
    css={`
      max-width: 1000px;
      margin: 0 auto;
    `}
    {...props}
  />
);

export default Container;
