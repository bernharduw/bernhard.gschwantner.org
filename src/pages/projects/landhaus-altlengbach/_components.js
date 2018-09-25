import React from 'react';
import { Heading, Text, Flex } from 'rebass';

export const Container = props => (
  <Flex flexDirection={['column', 'row']} {...props} />
);

export const Title = props => (
  <Heading as="h1" fontSize={6} mb={3} {...props} />
);

export const H2 = props => <Heading mb={3} {...props} />;

export const P = props => (
  <Text
    as="p"
    mb={3}
    css={`
      max-width: 30em;
    `}
    {...props}
  />
);
