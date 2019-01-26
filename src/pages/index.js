import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/layout';
import Header from '../components/MainHeader';
import SemiContainer from '../components/SemiContainer';
import { H2, P, Title } from '../components/Text';
import TimeColor from '../components/TimeColor';
import EventDirectoryTeaser from '../components/projects/EventDirectory';
import UnserWein2018Teaser from '../components/projects/UnserWein2018';
import GschwantnerOrgTeaser from '../components/projects/GschwantnerOrg';
import TastingManagerTeaser from '../components/projects/TastingManager';
import LandhausAltlengbachTeaser from '../components/projects/LandhausAltlengbach';
import BrindlmayerTeaser from '../components/projects/Brindlmayer';
import SumeraTeaser from '../components/projects/Sumera';
import AlexandraKleinheinzTeaser from '../components/projects/AlexandraKleinheinz';
import Unserwein2014Teaser from '../components/projects/UnserWein2014';
import BGKSTeaser from '../components/projects/BGKS';
import BrigitteKattTeaser from '../components/projects/BrigitteKatt';
import FancyButton from '../components/projects/FancyButton';

function Post(props) {
  return <Box pb={4} as="section" {...props} />;
}

function Page(props) {
  return (
    <Flex
      css={{ minHeight: '100vh' }}
      flexDirection="column"
      justifyContent="center"
      {...props}
    />
  );
}

function IndexPage({ data }) {
  return (
    <Layout>
      <TimeColor>
        {color => (
          <Header
            // animate
            color={color}
            css={`
              @media screen and (min-width: 64em) and (max-height: 50em) {
                min-height: 100vh;
              }
            `}
          >
            <SemiContainer width={[1, 2 / 3, 1 / 2]} fontSize={[3, 4]} py={5}>
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

              <Text mb={4} css="max-width: 16em;">
                I'm a long-time software developer, founder and tech enthusiast.
              </Text>
              <FancyButton
                href="#about"
                bg="white"
                color={color || '#555'}
                borderColor="white"
                hoverBg="transparent"
              >
                More about me
              </FancyButton>
            </SemiContainer>

            <Box width={[1, 1 / 3, 1 / 2]} alignSelf="flex-end">
              <Image fluid={data.headerImage.childImageSharp.fluid} critical />
            </Box>
          </Header>
        )}
      </TimeColor>

      <Page>
        <Container id="about" py={4}>
          <H2>What I do</H2>
          <Flex>
            <Box width={[1, 1 / 2]}>
              <P>
                I create web apps with React, CouchDB and NodeJS. I'm fascinated
                by the powers of Static Site Rendering and serverless
                technologies.
              </P>
              <P>
                In 2011 I co-founded Unser Wein, a product data exchange
                platform for the wine industry.
              </P>
            </Box>

            <Box width={[1, 1 / 2]}>(Donut charts here)</Box>
          </Flex>
          <H2>What I can do for you</H2>
          <Text>
            If you are looking for a small personal website, you need a custom
            web or mobile app or have other technical needs, let's talk!
          </Text>

          <FancyButton mt={5} href="#projects">
            Continue
          </FancyButton>
        </Container>
      </Page>

      <div id="projects" />
      <EventDirectoryTeaser id="bottlebooks" nextId="unserwein-2018" reverse />
      <UnserWein2018Teaser
        id="unserwein-2018"
        nextId="gschwantner-org"
        previousId="bottlebooks"
      />
      <GschwantnerOrgTeaser
        id="gschwantner-org"
        reverse
        nextId="tasting-manager"
        previousId="unserwein-2018"
      />
      <TastingManagerTeaser
        id="tasting-manager"
        previousId="gschwantner-org"
        nextId="landhaus-altlengbach"
      />
      <LandhausAltlengbachTeaser
        id="landhaus-altlengbach"
        reverse
        previousId="tasting-manager"
        nextId="brindlmayer"
      />
      <BrindlmayerTeaser
        id="brindlmayer"
        previousId="landhaus-altlengbach"
        nextId="sumera"
      />
      <SumeraTeaser
        id="sumera"
        reverse
        previousId="brindlmayer"
        nextId="alexandra-kleinheinz"
      />
      <AlexandraKleinheinzTeaser
        id="alexandra-kleinheinz"
        previousId="sumera"
        nextId="unserwein-2014"
      />
      <Unserwein2014Teaser
        id="unserwein-2014"
        reverse
        previousId="alexandra-kleinheinz"
        nextId="bgks"
      />
      <BGKSTeaser
        id="bgks"
        previousId="unserwein-2014"
        nextId="brigitte-katt"
      />
      <BrigitteKattTeaser id="brigitte-katt" reverse previousId="bgks" />

      <Container as="section" py={4}>
        <H2>Recent Posts</H2>
        <Post>First Post</Post>
        <Post>Second Post</Post>
        <Post>Third Post</Post>
      </Container>

      <Box bg="#555" color="#fff" as="footer">
        <Container py={4}>
          <H2>Footer</H2>
          <Text>First nav item</Text>
          <Text>Second nav item</Text>
          <Text>Third nav item</Text>
        </Container>
      </Box>
    </Layout>
  );
}
export default IndexPage;

export const query = graphql`
  query {
    headerImage: file(name: { eq: "bernhard" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
