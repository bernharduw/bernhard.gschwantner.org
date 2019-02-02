import React from 'react';
import { Link as BaseLink } from 'gatsby';
import { Text } from 'rebass';

const isInteractive = ({ disabled, onClick, href, to }) =>
  Boolean(!disabled && (onClick || href || to));

const variants = {
  default: props =>
    isInteractive(props)
      ? {
          css: { ':hover': { textDecoration: 'underline' } },
        }
      : {},

  link: props =>
    isInteractive(props)
      ? {
          css: { textDecoration: 'underline' },
        }
      : {},
};

export default function Link(props) {
  let as = props.as;
  if (!as) {
    as = 'button';
    if (!props.onClick && !props.disabled) as = 'span';
    if (props.href) as = 'a';
    if (props.to) as = BaseLink;
  }
  const getVariant = variants[props.variant] || variants.default;
  const variant = getVariant(props);

  return (
    <Text
      as={as}
      color="inherit"
      bg="transparent"
      {...variant}
      css={{
        textDecoration: 'none',
        transition: 'all 0.3s ease-out',
        ...variant.css,
      }}
      {...props}
    />
  );
}
