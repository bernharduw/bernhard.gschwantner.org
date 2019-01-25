import React from 'react';
import { Flex } from 'rebass';

export default function Project(props) {
  return (
    <Flex
      as="article"
      flexDirection="column"
      justifyContent="center"
      css={{ minHeight: '100vh', overflowX: 'hidden' }}
      {...props}
    />
  );
}
