import React from 'react';
import { Button } from 'rebass';
import Link from '../Link';

export default function FancyButton({
  to,
  href,
  color = 'currentColor',
  borderColor = color,
  hoverColor = 'transparent',
  ...props
}) {
  return (
    <Link href={href} to={to} css="border-radius: 50em;">
      <Button
        bg="transparent"
        color={color}
        borderColor={borderColor}
        border="2px solid"
        borderRadius="50em"
        fontWeight="normal"
        fontSize={3}
        css={`
          transition: color 0.3s ease-out, background 0.3s ease-out;
          &:hover {
            background-color: ${color};
            color: ${hoverColor};
          }
        `}
        {...props}
      />
    </Link>
  );
}
