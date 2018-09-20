import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box, Image, Heading, Text } from 'rebass';
import Layout from '../components/layout';
import { keyframes, css } from 'styled-components';

const moveBackground = keyframes`
  0% {
		background-position: 100% 50%;
	}

	50% {
		background-position: 0% 50%;
  }

  100% {
		background-position: 100% 50%;
	}
`;

const Container = props => (
  <Box
    px={[2, 3]}
    py={4}
    css={`
      max-width: 1000px;
      margin: 0 auto;
    `}
    {...props}
  />
);

const Project = props => (
  <Flex
    as="section"
    alignItems="center"
    bg="lightblue"
    p={4}
    mr={2}
    mb={2}
    width={[232, 312]}
    css={`
      flex-grow: 1;
    `}
    {...props}
  />
);

const gradient = ['#660022', '#c90057', '#ea5971', '#ff8c00'];

const Header = ({ css: additionalCss = '', ...props }) => (
  <Flex
    as="header"
    css={css`
      background-image: linear-gradient(to bottom left, ${gradient.join(',')});
      background-color: #c90057;
      background-attachment: fixed;
      background-size: 400% 100%;
      background-position: 50% 50%;
      animation: ${moveBackground} 15s ease-in-out infinite;
      ${additionalCss};
    `}
    {...props}
  />
);

const Post = props => <Box pb={4} as="section" {...props} />;

const IndexPage = () => (
  <Layout>
    <Header
      alignItems="center"
      justifyContent="flex-end"
      color="white"
      flexDirection={['column', 'row']}
      css={`
        @media screen and (min-width: 64em) and (max-height: 50em) {
          min-height: 100vh;
        }
      `}
    >
      <Box
        width={[1, 2 / 3, 1 / 2]}
        fontSize={[3, 4]}
        pl={[2, 3]}
        pr={[2, 0]}
        py={5}
        css={`
          max-width: 500px;
        `}
      >
        <Box mb={[3, 4]}>
          <Text mb={1}>Hi, my name is</Text>
          <Heading as="h1" fontSize={[6, 7, 8, 96]}>
            Bernhard{' '}
            <Text fontSize={[5, 6, 6, 8]} as="small" css="display:block;">
              Gschwantner.
            </Text>
          </Heading>
        </Box>

        <Text mb={3} css="max-width: 16em;">
          I'm a long-time software developer, founder and tech enthusiast.
        </Text>
        <Box as={Link} color="white" to="/about">
          More about me
        </Box>
      </Box>
      <Box width={[1, 1 / 3, 1 / 2]} css="align-self: flex-end;">
        <StaticQuery
          query={graphql`
            query BernhardImage {
              image: file(name: { eq: "bernhard" }) {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => (
            <Image as={Img} fluid={data.image.childImageSharp.fluid} critical />
          )}
        />
      </Box>
    </Header>

    <Container as="section">
      <Heading mb={4}>Case Studies</Heading>
      <Flex mr={-2} flexWrap="wrap">
        <Project bg="lightblue">First project</Project>
        <Project bg="lightgreen">Second project</Project>
        <Project bg="yellow">Third project</Project>
        <Project ProjectWrap="wrap" bg="orange">
          Fourth project
        </Project>
        <Project bg="pink">Fifth project</Project>
        <Project bg="lightcyan">Sixth project</Project>
      </Flex>
      <Link to="/projects">All Projects</Link>
    </Container>

    <Container as="section">
      <Heading mb={4}>Recent Posts</Heading>
      <Post>First Post</Post>
      <Post>Second Post</Post>
      <Post>Third Post</Post>
    </Container>
  </Layout>
);

export default IndexPage;
