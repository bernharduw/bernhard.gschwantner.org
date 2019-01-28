import React from 'react';
import { Heading, Text } from 'rebass';

export const Title = props => (
  <Heading as="h1" fontSize={6} mb={3} {...props} />
);

const stickyStyle = `
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export const H2 = ({ css, sticky, ...props }) => (
  <Heading
    mb={3}
    fontSize={4}
    mx={-1}
    p={1}
    pt={[3, 4]}
    {...props}
    css={`
      border-bottom: 4px solid currentColor;

      ${sticky ? stickyStyle : ''};
      ${css || ''};
    `}
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
