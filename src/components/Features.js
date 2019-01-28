import React from 'react';
import { Flex, Text } from 'rebass';

export function Features({ title, ...props }) {
  return (
    <Flex pt={1} css={{ textAlign: 'left' }}>
      <Text
        as="h3"
        fontSize={0}
        lineHeight={2}
        my={0}
        pr={3}
        width={1 / 4}
        fontWeight="300"
        css={{ textTransform: 'uppercase', opacity: 0.8 }}
      >
        {title}
      </Text>
      <Text as="ul" m={0} width={3 / 4} {...props} />
    </Flex>
  );
}
export function Feature(props) {
  return (
    <Text
      as="li"
      mb={0}
      fontSize={1}
      lineHeight={1}
      css={{
        listStyle: 'none',
        display: 'inline',
        ':nth-last-child(n+2)::after': {
          content: '", "',
        },
      }}
      {...props}
    />
  );
}
