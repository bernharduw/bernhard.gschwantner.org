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
  angle: initialAngle = 64 * (Math.random() >= 0.5 ? 1 : -1),
  ...rest
}) {
  // Create a positive or negative angle between 2 and 6 vh.
  const [angle] = React.useState(initialAngle);
  // Slide through the padding defaults from p to py to pt
  // and from p to py to pb. If nothing is defined use the base value:
  // scale 4 top padding,
  // and if there's a next button use scale 6, otherwise scale 4 for bottom padding.
  const paddingTop = pt == null ? (py == null ? 4 : py) : pt;
  const paddingBottom =
    pb == null ? (py == null ? (p == null ? (nextId ? 6 : 4) : p) : py) : pb;
  return (
    <Flex
      id={id}
      flexDirection="column"
      justifyContent="center"
      p={p}
      pt={paddingTop}
      pb={paddingBottom}
      color={color}
      style={{ backgroundColor: bg, ...style }}
      css={[
        css`
          min-height: 100vh;
          position: relative;
          scroll-snap-align: start;
        `,
        angle &&
          css`
            @supports (clip-path: polygon(0 0, 100vw 100vh)) {
              clip-path: polygon(
                0 ${Math.max(angle, 0)}px,
                0 100%,
                100% 100%,
                100% ${Math.max(-angle, 0)}px
              );
              margin-top: -${Math.abs(angle)}px;
              padding-top: ${pt == null
                ? `${Math.abs(angle) + 32}px`
                : undefined};
              padding-bottom: 128px;
            }
          `,
      ]}
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
