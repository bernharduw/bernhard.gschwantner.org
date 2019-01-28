import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { adjustHue, darken, lighten } from 'polished';
import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import { Box, Text } from 'rebass';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';
import SemiContainer from '../components/SemiContainer';
import { P, Title } from '../components/Text';
import TimeColor from '../components/TimeColor';
import PageSection from './PageSection';

function getGradient(color) {
  const gradient = [
    darken(0.4, adjustHue(-15, color)),
    darken(0.2, adjustHue(-10, color)),
    color,
    lighten(0.05, adjustHue(30, color)),
  ].join(',');
  // console.log(gradient);
  return gradient;
}

const Background = styled(PageSection)`
  background-image: linear-gradient(
    to bottom left,
    ${props => getGradient(props.bg)}
  );
  background-attachment: fixed;
  background-size: 400% 100%;
  background-position: 100% 50%;
  transition: background 4s ease-out;
  &:hover {
    background-position: 25% 50%;
  }
`;

const panBackgroundHorizontally = keyframes`
  0% { background-position: 100% 50%; }
  50% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const AnimatedBackground = styled(Background)`
  animation: ${panBackgroundHorizontally} 20s ease-in-out infinite;
`;

function Header({
  css: additionalCss = '',
  bg = '#ea5971',
  color,
  animate = false,
  ...props
}) {
  if (animate) {
    return (
      <AnimatedBackground
        bg={bg}
        color={color}
        py={[0, 0]}
        alignItems="center"
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        {...props}
      />
    );
  }

  return (
    <Background
      bg={bg}
      color={color}
      py={[0, 0]}
      alignItems="center"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      {...props}
    />
  );
}

function MainHeader({ id, nextId }) {
  return (
    <TimeColor>
      {bg => (
        <Header
          // animate
          bg={bg}
          color="#fff"
          id={id}
        >
          <SemiContainer width={[1, 1 / 2]} fontSize={[3, 4]} py={5}>
            <P mb={1}>Hi, my name is</P>
            <Title
              fontSize={[6, 7, 8, 96]}
              mb={[3, 4]}
              css={{ whiteSpace: 'nowrap' }}
            >
              Bernhard{' '}
              <P fontSize={[5, 6, 6, 8]} as="small" css="display:block;">
                Gschwantner.
              </P>
            </Title>

            <Text mb={5} css="max-width: 16em;">
              I'm a long-time software developer, founder and tech enthusiast.
            </Text>
            <Button
              href={`#${nextId}`}
              color="#fff"
              hoverColor={bg}
              fontSize={2}
            >
              More about me <FiChevronsDown />
            </Button>
          </SemiContainer>

          <Box width={[1, 1 / 2]} alignSelf="flex-end">
            <StaticQuery query={query}>
              {({ headerImage: { childImageSharp } }) => (
                <Image fluid={childImageSharp.fluid} critical />
              )}
            </StaticQuery>
          </Box>
        </Header>
      )}
    </TimeColor>
  );
}

export default MainHeader;

const query = graphql`
  query {
    headerImage: file(name: { eq: "bernhard" }) {
      childImageSharp {
        fluid(
          maxWidth: 1280
          quality: 90
          traceSVG: { color: "#41363b", threshold: 145 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
