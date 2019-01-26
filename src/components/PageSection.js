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
  return (
    <Flex
      id={id}
      flexDirection="column"
      justifyContent="center"
      css={{ minHeight: '100vh', position: 'relative' }}
      pt={6}
      pb={6}
      color={color}
      bg={bg}
      {...rest}
    >
      <PageSectionNav
        top={0}
        href={previousId && `#${previousId}`}
        title="Previous project"
        color={color}
        hoverColor={bg}
      >
        {previousId && <FiChevronsUp />}
      </PageSectionNav>

      {children}

      <PageSectionNav
        href={nextId && `#${nextId}`}
        title="Next project"
        bottom={0}
        color={color}
        hoverColor={bg}
      >
        {nextId && <FiChevronsDown />}
      </PageSectionNav>
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
