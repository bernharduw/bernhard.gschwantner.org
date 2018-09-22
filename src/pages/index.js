import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box, Image, Heading, Text, Button } from 'rebass';
import Layout from '../components/layout';
import Header from '../components/MainHeader';
import getTimeColor from '../helpers/getTimeColor';

const color = getTimeColor(new Date());
console.log(color);

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

const SemiContainer = ({ side = 'start', ...props }) => (
  <Box
    width={[1, 1 / 2]}
    pl={[2, side === 'start' ? 3 : 0]}
    pr={[2, side === 'end' ? 3 : 0]}
    css={`
      max-width: 500px;
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

const Post = props => <Box pb={4} as="section" {...props} />;

const IndexPage = () => (
  <Layout>
    <Header
      // animate
      color={color}
      justifyContent="flex-end"
      css={`
        @media screen and (min-width: 64em) and (max-height: 50em) {
          min-height: 100vh;
        }
      `}
    >
      <SemiContainer width={[1, 2 / 3, 1 / 2]} fontSize={[3, 4]} py={5}>
        <Text mb={1}>Hi, my name is</Text>
        <Heading as="h1" fontSize={[6, 7, 8, 96]} mb={[3, 4]}>
          Bernhard{' '}
          <Text fontSize={[5, 6, 6, 8]} as="small" css="display:block;">
            Gschwantner.
          </Text>
        </Heading>

        <Text mb={4} css="max-width: 16em;">
          I'm a long-time software developer, founder and tech enthusiast.
        </Text>
        <a href="#about">
          <Button
            bg="white"
            color={color}
            fontWeight="normal"
            border="2px solid #fff"
            css={`
              transition: color 0.3s ease-out, background 0.3s ease-out;
              &:hover {
                background-color: transparent;
                color: #fff;
              }
            `}
          >
            More about me
          </Button>
        </a>
      </SemiContainer>

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

    <Container as="section" id="about">
      <Heading mb={4}>About me</Heading>
      <Flex>
        <Box width={[1, 1 / 2]}>
          <Text mb={4}>I create web apps with React, CouchDB and NodeJS.</Text>
        </Box>

        <Box width={[1, 1 / 2]}>(Donut charts here)</Box>
      </Flex>
    </Container>

    <Box bg="#f4f4f4" as="section">
      <Container>
        <Heading mb={4}>Recent work</Heading>
        <Flex mr={-2} flexWrap="wrap">
          <Project bg="lightblue">First project</Project>
          <Project bg="lightgreen">Second project</Project>
          <Project bg="yellow">Third project</Project>
          <Project bg="orange">Fourth project</Project>
          <Project bg="pink">Fifth project</Project>
          <Project bg="lightcyan">Sixth project</Project>
        </Flex>
        <Link to="/projects">All Projects</Link>
      </Container>
    </Box>

    <Container as="section">
      <Heading mb={4}>Recent Posts</Heading>
      <Post>First Post</Post>
      <Post>Second Post</Post>
      <Post>Third Post</Post>
    </Container>

    <Box bg="#555" color="#fff" as="footer">
      <Container>
        <Heading mb={4}>Footer</Heading>
        <Text>First nav item</Text>
        <Text>Second nav item</Text>
        <Text>Third nav item</Text>
      </Container>
    </Box>
  </Layout>
);

export default IndexPage;
