import React from 'react';
import { Button } from 'rebass';
import Link from '../Link';

export default function FancyButton({
  to,
  href,
  color = '#333',
  bg = 'transparent',
  borderColor = color,
  hoverBg = color,
  hoverColor = '#fff',
  ...props
}) {
  return (
    <Link href={href} to={to}>
      <Button
        bg={bg}
        color={color}
        fontWeight="normal"
        border="2px solid"
        borderColor={borderColor}
        css={`
          transition: color 0.3s ease-out, background 0.3s ease-out;
          &:hover {
            background-color: ${hoverBg};
            color: ${hoverColor};
          }
        `}
        {...props}
      />
    </Link>
  );
}
