import React from 'react';
import { Box, Flex, Heading as BaseHeading } from 'rebass';
import Container from '../Container';
import Link from '../Link';
import SemiContainer from '../SemiContainer';

function ProjectTitle(props) {
  return (
    <BaseHeading
      fontSize={[4, 5]}
      lineHeight={1.5}
      mb={1}
      css="border-bottom:3px solid;"
      {...props}
    />
  );
}

function Subtitle(props) {
  return (
    <Link
      variant="hover"
      css={{ opacity: 0.75, display: 'block' }}
      pb={2}
      {...props}
    />
  );
}

export default function ProjectTeaser({
  title,
  year,
  href,
  subtitle,
  picture,
  features,
  reverse,
  pictureWidth = [1, 1 / 2, null, 2 / 3],
  textWidth = [1, 1 / 2, null, 1 / 3],
  boxed = true,
  children,
}) {
  const alignHeading = reverse ? 'inherit' : ['inherit', 'right'];
  const contentDirection = reverse ? 'row-reverse' : 'row';
  return (
    <div>
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
        css="overflow: hidden;"
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
    </div>
  );
}
