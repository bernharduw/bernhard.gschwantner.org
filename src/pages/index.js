import { graphql, Link as BaseLink } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { Box, Button, Flex, Heading as BaseHeading, Text } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/layout';
import Header from '../components/MainHeader';
import FrameScreenshot, { PureScreenshot } from '../components/Screenshot';
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

function Page(props) {
  return (
    <Flex
      as="article"
      flexDirection="column"
      justifyContent="center"
      css={{ minHeight: '100vh', overflowX: 'hidden' }}
      {...props}
    />
  );
}

function Features({ title, ...props }) {
  return (
    <Flex pt={1} css={{ textAlign: 'left' }}>
      <Text
        as="h3"
        fontSize={0}
        lineHeight={2}
        my={0}
        pr={3}
        width={1 / 4}
        fontWeight="200"
        css={{ textTransform: 'uppercase', opacity: 0.8 }}
      >
        {title}
      </Text>
      <Text as="ul" m={0} width={3 / 4} {...props} />
    </Flex>
  );
}

function Feature(props) {
  return (
    <Text
      as="li"
      mb={0}
      fontSize={1}
      lineHeight={1}
      css={{
        listStyle: 'none',
        display: 'inline',
        ':nth-last-child(n+2)::after': {
          content: '", "',
        },
      }}
      {...props}
    />
  );
}

function Heading(props) {
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

function Link(props) {
  if (props.href) {
    return <a css={{ textDecoration: 'none', color: 'inherit' }} {...props} />;
  }
  if (props.to) {
    return (
      <BaseLink css={{ textDecoration: 'none', color: 'inherit' }} {...props} />
    );
  }
  return <div {...props} />;
}

function Subline({ href, children, ...props }) {
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

function Post(props) {
  return <Box pb={4} as="section" {...props} />;
}

function FancyButton({
  to,
  href,
  color = '#333',
  bg = 'transparent',
  borderColor = color,
  hoverBg = color,
  hoverColor = '#fff',

  ...props
}) {
  return (
    <Link href={href} to={to}>
      <Button
        bg={bg}
        color={color}
        fontWeight="normal"
        border="2px solid"
        borderColor={borderColor}
        css={`
          transition: color 0.3s ease-out, background 0.3s ease-out;
          &:hover {
            background-color: ${hoverBg};
            color: ${hoverColor};
          }
        `}
        {...props}
      />
    </Link>
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
