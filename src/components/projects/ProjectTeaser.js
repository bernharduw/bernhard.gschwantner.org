import React from 'react';
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi';
import { Box, Flex, Heading as BaseHeading, Text } from 'rebass';
import Container from '../Container';
import Link from '../Link';
import SemiContainer from '../SemiContainer';

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

function Subtitle({ href, children, ...props }) {
  return (
    <Text css={{ opacity: 0.75 }} pb={4} {...props}>
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
        opacity: 0.75,
        ':hover': { opacity: 1 },
      }}
      {...rest}
    />
  );
}

function RoundButton(props) {
  return (
    <Box
      as="span"
      p={3}
      css="
        border: 1px solid;
        border-radius: 50em;
        line-height: 1;
        "
      {...props}
    />
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
  const alignHeading = reverse ? 'inherit' : ['inherit', 'right'];
  const contentDirection = reverse ? 'row-reverse' : 'row';
  return (
    <Flex
      as="article"
      flexDirection="column"
      justifyContent="center"
      css={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      id={id}
      py={6}
      {...rest}
    >
      <ProjectNav
        top={0}
        href={previousId && `#${previousId}`}
        title="Previous project"
      >
        {previousId && (
          <RoundButton>
            <FiChevronsUp />
          </RoundButton>
        )}
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
        {nextId && (
          <RoundButton>
            <FiChevronsDown />
          </RoundButton>
        )}
      </ProjectNav>
    </Flex>
  );
}
