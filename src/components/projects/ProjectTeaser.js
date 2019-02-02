import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Container from '../Container';
import Link from '../Link';
import SemiContainer from '../SemiContainer';
import { H2 } from '../Text';
import { flexDirection, justifyContent, alignItems } from 'styled-system';
import styled from 'styled-components';

const ProjectHeader = styled(H2)`
  display: flex;
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
`;
ProjectHeader.defaultProps = {
  justifyContent: 'space-between',
  alignItems: 'baseline',
  mb: 1,
};

function ProjectTitle(props) {
  return <Text as="span" display="block" flex="1" {...props} />;
}
function Year(props) {
  return <Text as="span" fontWeight="200" fontSize={3} {...props} />;
}

function Subtitle(props) {
  return (
    <Link
      variant="link"
      css={{ opacity: 0.75, display: 'block' }}
      pb={2}
      {...props}
    />
  );
}

export default function ProjectTeaser({
  title,
  year,
  bg,
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
  const contentDirection = reverse ? 'row-reverse' : 'row';
  return (
    <div>
      <Container
        css={
          bg &&
          `
          position: sticky;
          top: 0;
          z-index: 1;
        `
        }
        style={{ backgroundColor: bg }}
      >
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <Year>{year}</Year>
        </ProjectHeader>
      </Container>
      <Container>
        <Subtitle href={href}>{subtitle}</Subtitle>
      </Container>
      <Flex
        as={boxed ? Container : undefined}
        flexWrap="wrap"
        flexDirection={contentDirection}
        css="overflow: hidden;"
      >
        <Box px={2} pt={[4, 5]} mb={4} width={pictureWidth}>
          {picture}
        </Box>
        <SemiContainer
          as={boxed ? Box : undefined}
          width={textWidth}
          pt={[4, 5]}
          px={2}
          mb={4}
          reverse={reverse}
        >
          <Box as="section" mb={4}>
            {children}
          </Box>
          <Box as="section">{features}</Box>
        </SemiContainer>
      </Flex>
    </div>
  );
}
