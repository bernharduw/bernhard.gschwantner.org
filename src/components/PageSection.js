import React from 'react';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import { Flex, Text } from 'rebass';
import styled, { css } from 'styled-components';
import Link from './Link';

export default function PageSection({
  id,
  previousId,
  nextId,
  color,
  bg,
  style,
  p,
  py,
  pt,
  pb,
  children,
  ...rest
}) {
  // Create a positive or negative angle between 2 and 6 vh.
  const [angle] = React.useState(
    (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1)
  );
  // Slide through the padding defaults from p to py to pt
  // and from p to py to pb. If nothing is defined use the base value:
  // scale 4 top padding,
  // and if there's a next button use scale 6, otherwise scale 4 for bottom padding.
  pt = pt == null ? (py == null ? 4 : py) : pt;
  pb = pb == null ? (py == null ? (p == null ? (nextId ? 6 : 4) : p) : py) : pb;
  return (
    <Flex
      id={id}
      flexDirection="column"
      justifyContent="center"
      p={p}
      py={py}
      pt={pt}
      pb={pb}
      color={color}
      style={{ backgroundColor: bg, ...style }}
      css={css`
        min-height: 100vh;
        position: relative;
        scroll-snap-align: start;
        @supports (clip-path: polygon(0 0, 100vw 100vh)) {
          clip-path: polygon(
            0 ${Math.max(angle, 0)}vh,
            0 100%,
            100% 100%,
            100% ${Math.max(-angle, 0)}vh
          );
          margin-top: -${Math.abs(angle)}vh;
          padding-top: ${pt == null
            ? `calc(${Math.abs(angle)}vh + 32px)`
            : undefined};
          padding-bottom: ${pb == null ? 128 : undefined};
        }
      `}
      {...rest}
    >
      {children}

      {nextId && (
        <PageSectionNav
          href={`#${nextId}`}
          title="Go to next page"
          bottom={0}
          pb={5}
          color={color}
          hoverColor={bg}
        >
          <FiChevronsDown />
        </PageSectionNav>
      )}
      {previousId && (
        <PageSectionNav
          top={0}
          href={`#${previousId}`}
          title="Go to previous page"
          color={color}
          hoverColor={bg}
        >
          <FiChevronsUp />
        </PageSectionNav>
      )}
    </Flex>
  );
}

export function PageSectionNav({
  top,
  bottom,
  color,
  hoverColor,
  children,
  ...rest
}) {
  return (
    <Link
      display="block"
      p={4}
      textAlign="center"
      css={`
        position: absolute;
        left: 0;
        right: 0;
        bottom: ${bottom};
        top: ${top};
        opacity: 0.75;
        :hover {
          opacity: 1;
          color: ${hoverColor};
        }
        &:hover ${NavInner} {
          background-color: ${color};
        }
        :focus {
          outline: none;
        }
        &:focus ${NavInner} {
          box-shadow: 0 0 0 2px ${color};
        }
      `}
      {...rest}
    >
      {children && (
        <NavInner as="span" p={3} borderColor={color}>
          {children}
        </NavInner>
      )}
    </Link>
  );
}

const NavInner = styled(Text)`
  display: inline-block;
  line-height: 16px;
  border: 2px solid ${props => props.borderColor};
  border-radius: 50em;
  transition: background 0.3s ease-out;
  > svg {
    font-size: 20px;
    vertical-align: middle;
  }
`;
