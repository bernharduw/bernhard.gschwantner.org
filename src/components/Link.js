import React from 'react';
import { Link as BaseLink } from 'gatsby';
import { Text } from 'rebass';

const variants = {};

export default function Link(props) {
  let as = props.as;
  if (!as) {
    as = 'button';
    if (!props.onClick && !props.disabled) as = 'span';
    if (props.href) as = 'a';
    if (props.to) as = BaseLink;
  }
  return (
    <Text
      as={as}
      color="inherit"
      bg="transparent"
      css={{
        textDecoration: 'none',
        transition: 'all 0.3s ease-out',
        ':hover': { textDecoration: 'underline' },
      }}
      {...variants[props.variant] || variants.default}
      {...props}
    />
  );
}
