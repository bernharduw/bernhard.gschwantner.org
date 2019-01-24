import React from 'react';
import { Box } from 'rebass';

const Container = props => (
  <Box
    px={[2, 3]}
    mx="auto"
    width="100%"
    css={`
      max-width: 1000px;
    `}
    {...props}
  />
);

export default Container;
