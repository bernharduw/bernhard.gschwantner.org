import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { adjustHue, darken, lighten } from 'polished';
import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import { Box, Text } from 'rebass';
import { css, keyframes } from 'styled-components';
import Button from '../components/Button';
import SemiContainer from '../components/SemiContainer';
import { P, Title } from '../components/Text';
import useDaytimeColor from '../components/useDaytimeColor';
import PageSection from './PageSection';

function getGradient(color) {
  const gradient = [
    darken(0.4, adjustHue(-15, color)),
    darken(0.2, adjustHue(-10, color)),
    color,
    lighten(0.05, adjustHue(30, color)),
  ].join(', ');
  // console.log(gradient);
  return gradient;
}

const panBackgroundHorizontally = keyframes`
  0% { background-position: 100% 50%; }
  50% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

function Header({
  css: additionalCss = '',
  bg = '#ea5971',
  color,
  animate = false,
  ...props
}) {
  return (
    <PageSection
      bg={bg}
      color={color}
      pt={4}
      pb={0}
      alignItems="center"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      style={{
        backgroundImage: `linear-gradient(to bottom left, ${getGradient(bg)})`,
      }}
      css={`
        background-attachment: fixed;
        background-size: 400% 100%;
        background-position: 100% 50%;
        transition: background 4s ease-out;
        &:hover {
          background-position: 25% 50%;
        }
        ${animate
          ? css`
              animation: ${panBackgroundHorizontally} 20s ease-in-out infinite;
            `
          : ''}
      `}
      {...props}
    />
  );
}

function MainHeader({ id, nextId }) {
  const bg = useDaytimeColor();
  // console.log(bg, `${new Date().getHours()}:${new Date().getMinutes()}`);

  return (
    <Header /* animate */ bg={bg} color="#fff" id={id}>
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
          I'm a long-time full stack engineer, founder and tech enthusiast.
        </Text>
        <Button href={`#${nextId}`} color="#fff" hoverColor={bg} fontSize={2}>
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
