import React from 'react';
import { Heading, Text, Flex } from 'rebass';

export const Title = props => (
  <Heading as="h1" fontSize={6} mb={3} {...props} />
);

export const H2 = props => (
  <Heading
    mb={3}
    mx={-1}
    p={1}
    pt={[3, 4]}
    css={`
      border-bottom: 4px solid currentColor;
      position: sticky;
      top: 0;
      background-color: #fff;
    `}
    {...props}
  />
);

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

export const Ul = props => (
  <Text
    as="ul"
    mb={3}
    css={`
      & > li {
        margin-bottom: 0;
      }
    `}
    {...props}
  />
);
