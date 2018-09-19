import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box, Image, Heading, Text } from 'rebass';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Box
      as="header"
      css={`
        background: #c90057 linear-gradient(to bottom left, #c90057, #ea5971)
          fixed;
      `}
    >
      <Flex
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
              <Image
                as={Img}
                fluid={data.image.childImageSharp.fluid}
                critical
              />
            )}
          />
        </Box>
      </Flex>
    </Box>
  </Layout>
);

export default IndexPage;
