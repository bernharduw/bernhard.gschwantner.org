import React from 'react';
import { Box, Flex } from 'rebass';
import Container from '../Container';
import SemiContainer from '../SemiContainer';

import { Heading as BaseHeading, Text } from 'rebass';
import Link from '../Link';

function ProjectTitle(props) {
  return (
    <BaseHeading
      fontSize={[5]}
      lineHeight={1.5}
      mb={1}
      css="border-bottom:3px solid;"
      {...props}
    />
  );
}

function ProjectNav({ top, bottom, ...rest }) {
  return (
    <Link
      display="block"
      p={4}
      textAlign="center"
      css={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom,
        top,
        opacity: 0.8,
        ':hover': { opacity: 1 },
      }}
      {...rest}
    />
  );
}

function Subtitle({ href, children, ...props }) {
  return (
    <Text css={{ opacity: 0.8 }} {...props}>
      {href ? (
        <a
          href={href}
          css={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </Text>
  );
}

export default function ProjectTeaser({
  id,
  title,
  year,
  href,
  subtitle,
  picture,
  features,
  previousId,
  nextId,
  reverse,
  children,
  pictureWidth = [1, 1 / 2],
  textWidth = [1, 1 / 2],
  boxed,
  ...rest
}) {
  const alignHeading = reverse ? 'inherit' : 'right';
  const contentDirection = reverse ? 'row-reverse' : 'row';
  return (
    <Flex
      as="article"
      flexDirection="column"
      justifyContent="center"
      css={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      id={id}
      {...rest}
    >
      <ProjectNav
        top={0}
        href={previousId && `#${previousId}`}
        title="Previous project"
      >
        {previousId && 'Previous'}
      </ProjectNav>

      <Container>
        <ProjectTitle textAlign={alignHeading}>
          {title} ({year})
        </ProjectTitle>
        <Subtitle href={href} textAlign={alignHeading}>
          {subtitle}
        </Subtitle>
      </Container>
      <Flex
        as={boxed ? Container : undefined}
        flexWrap="wrap"
        flexDirection={contentDirection}
      >
        <Box width={pictureWidth}>{picture}</Box>
        <SemiContainer
          as={boxed ? Box : undefined}
          width={textWidth}
          pt={[4, 5]}
          mb={4}
          reverse={reverse}
          css={{ display: 'flex' }}
        >
          <Flex flexDirection="column" justifyContent="space-between" flex="1">
            <section>{children}</section>
            <section>{features}</section>
          </Flex>
        </SemiContainer>
      </Flex>

      <ProjectNav href={nextId && `#${nextId}`} title="Next project" bottom={0}>
        {nextId && 'Next'}
      </ProjectNav>
    </Flex>
  );
}
