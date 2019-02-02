import React from 'react';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import Link from './Link';

export default function PageSection({
  id,
  previousId,
  nextId,
  color,
  bg,
  children,
  ...rest
}) {
  // Create an positive or negative angle between 2 and 6 vh.
  const [angle] = React.useState(
    (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1)
  );

  return (
    <Flex
      id={id}
      flexDirection="column"
      justifyContent="center"
      pt={4}
      css={{
        minHeight: '100vh',
        position: 'relative',
        scrollSnapAlign: 'start',
        '@supports(clip-path: polygon(0 0,100vw 100vh))': {
          clipPath: `polygon(0 ${Math.max(
            angle,
            0
          )}vh,0 100%, 100% 100%,100% ${Math.max(-angle, 0)}vh)`,
          marginTop: `-${Math.abs(angle)}vh`,
          paddingTop:
            rest.pt === undefined && rest.py === undefined
              ? `calc(${Math.abs(angle)}vh + 32px)`
              : undefined,
          paddingBottom:
            rest.pb === undefined && rest.py === undefined ? 128 : undefined,
        },
      }}
      pb={nextId ? 6 : 4}
      color={color}
      style={{ backgroundColor: bg }}
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
