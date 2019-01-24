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

function Project(props) {
  return (
    <Flex
      as="section"
      alignItems="center"
      flex={['1 232px', '1 0 312px']}
      bg="lightblue"
      p={4}
      mr={2}
      mb={2}
      {...props}
    />
  );
}

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
        lineHeight="inherit"
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
  return <BaseHeading fontSize={[5]} lineHeight={1.5} mb={2} {...props} />;
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

      <Page bg="#4D94AA" color="#fff" id="projects" py={5}>
        <Container>
          <Heading>Event directory for wine tastings (2019)</Heading>
          <Subline>Work in progress – unpublished yet</Subline>
        </Container>
        <Flex flexDirection="row-reverse" flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenBottlebooks.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            reverse
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  Following our strategic partnership with Bottlebooks, we
                  needed an updated directory for the upcoming wine events. This
                  design is based on the future style guide of Bottlebooks and
                  will also be the basis for individual client solutions.
                </P>
                <P>
                  I also created a serverless GraphQL API, so the site
                  performance will adapt dynamically to the large peak demands
                  of an event microsite.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Design">
                  <Feature>Bottlebooks</Feature>
                </Features>
                <Features title="Features">
                  <Feature>React</Feature>
                  <Feature>GraphQL</Feature>
                  <Feature>Serverless Lamdba functions</Feature>
                  <Feature>Single Page App</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#362D32" color="#fff" py={5} css={{ textAlign: 'right' }}>
        <Container>
          <Heading>unserwein.at website relaunch (2018)</Heading>
          <Subline href="https://www.unserwein.at">www.unserwein.at</Subline>
        </Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenUnserwein.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  For the recent relaunch of our website, we laser-focused on
                  our audience. I used Gatsby as a static site builder and
                  optimized the site for speed, so the days of our old, slow
                  Wordpress site are over now.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Features">
                  <Feature>React</Feature>
                  <Feature>Static Site Rendering (Gatsby)</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#CA336C" color="#fff" py={5}>
        <Container>
          <Heading>Personal site (2018)</Heading>
          <Subline href="https://bernhard.gschwantner.org">
            bernhard.gschwantner.org
          </Subline>
        </Container>
        <Flex flexDirection="row-reverse" flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenBernhardGschwantner.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            reverse
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  For my personal website, I strived for a playful, bold and
                  bright style. I want this site to be a place where I can
                  equally experiment, showcase what I do and publish thoughts
                  and articles I care about.
                </P>
                <P>
                  I hope this site will continuously grow and become a central
                  hub to my professional work.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Features">
                  <Feature>React</Feature>
                  <Feature>Static Site Rendering (Gatsby)</Feature>
                  <Feature>Animations (unpublished)</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#654C3A" color="#fff" py={5} css={{ textAlign: 'right' }}>
        <Container>
          <Heading>unserwein Tasting Manager (2015-2018)</Heading>
          <Subline href="https://events.unserwein.at/de/events/vievinum-2018">
            events.unserwein.at/de/events/vievinum-2018
          </Subline>
        </Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenTastingManager.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  I built and maintained a React-based Single Page App for our
                  flagship product, the Tasting Manager.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Features">
                  <Feature>Single Page App</Feature>
                  <Feature>React</Feature>
                  <Feature>Redux</Feature>
                  <Feature>CouchDB</Feature>
                </Features>
                <Features title="Art direction">
                  <Feature>Alexander Ullrich</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#49592A" color="#fff" py={5}>
        <Container>
          <Heading>Landhaus Altlengbach website (2018)</Heading>
          <Subline href="https://altlengbach.netlify.com">
            altlengbach.netlify.com
          </Subline>
        </Container>
        <Flex flexDirection="row-reverse" flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenLandhausAltlengbach.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            reverse
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  A small website advertising a house on sale. On this site I
                  experimented with custom page transitions and animations in
                  conjunction with Gatsby, a static site renderer.
                </P>
                <FancyButton
                  color="rgba(255, 255, 255, 0.65)"
                  hoverBg="transparent"
                  hoverColor="rgba(255, 255, 255, 0.65)"
                  // hoverColor="#49592A"
                  mt={2}
                  mb={4}
                  disabled
                >
                  Read more (soon)
                </FancyButton>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Features">
                  <Feature>React</Feature>
                  <Feature>Static Site Rendering (Gatsby)</Feature>
                  <Feature>Page Transitions</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#D7E7F1" color="#000" py={5} css={{ textAlign: 'right' }}>
        <Container>
          <Heading>Weingut Brindlmayer website (2017/2018)</Heading>
          <Subline href="https://www.brindlmayer.at">
            www.brindlmayer.at
          </Subline>
        </Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenBrindlmayer.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>I relaunched the winery's site with Wordpress.</P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Implementation</Feature>
                </Features>
                <Features title="Features">
                  <Feature>CMS</Feature>
                  <Feature>Wordpress</Feature>
                  <Feature>unserwein integration</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#91168C" color="#fff" py={5}>
        <Container>
          <Heading>Sumera Quiz app (2016)</Heading>
          <Subline>unpublished</Subline>

          <Flex flexDirection="row-reverse" flexWrap="wrap">
            <Box width={[1, 1 / 3]}>
              <PureScreenshot fluid={data.iPhoneSumera.childImageSharp.fluid} />
            </Box>
            <Box
              width={[1, 2 / 3]}
              mt={[4, 5]}
              mb={4}
              reverse
              css={{ display: 'flex' }}
            >
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                flex="1"
              >
                <section>
                  <P>
                    I created the quiz game mobile app, server and backend
                    interfaces for the startup Sumera.
                  </P>
                </section>
                <section>
                  <Features title="Roles">
                    <Feature>Concept</Feature>
                    <Feature>UX</Feature>
                    <Feature>Programming</Feature>
                  </Features>
                  <Features title="Features">
                    <Feature>React Native</Feature>
                    <Feature>React</Feature>
                    <Feature>API</Feature>
                  </Features>
                  <Features title="Design">
                    <Feature>Feinblick</Feature>
                  </Features>
                </section>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Page>

      <Page bg="#FB7888" color="#000" py={5} css={{ textAlign: 'right' }}>
        <Container>
          <Heading>Alexandra Kleinheinz (2017)</Heading>
          <Subline href="https://www.alexandrakleinheinz.at">
            www.alexandrakleinheinz.at
          </Subline>
        </Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenAlexandraKleinheinz.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  Psychotherapist Alexandra Kleinheinz needed a website to
                  present herself and her voluntary project Death Café. I tried
                  to emphasize her positive energy with the concept and design
                  of this website.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>CMS</Feature>
                </Features>
                <Features title="Features">
                  <Feature>GraphCMS</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#7a0033" color="#fff" py={5}>
        <Container>
          <Heading>unserwein.at (2014)</Heading>
          <Subline>Superseded by the relaunched site</Subline>
        </Container>
        <Flex flexDirection="row-reverse" flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenUnserwein2014.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            reverse
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  The second iteration of the unserwein website focused on the
                  mobile experience of the product and was designed to provide
                  regularly updated content in our blog. We featured some of our
                  customers and blogged about news in the Austrian wine
                  industry.
                </P>
                <P>
                  In 2018, it was replaced by our new site that focused on the
                  B2B side of our business.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                  <Feature>Content</Feature>
                </Features>
                <Features title="Features">
                  <Feature>CMS</Feature>
                  <Feature>Wordpress</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#4D454A" color="#fff" py={5} css={{ textAlign: 'right' }}>
        <Container>
          <Heading>bgks architects (2016)</Heading>
          <Subline href="https://www.bgks.at">www.bgks.at</Subline>
        </Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot fluid={data.screenBgks.childImageSharp.fluid} />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  The architects collective BGKS wanted to relaunch their site
                  focusing on showcasing their products. Together with them I
                  selected a matching Wordpress template and adapted it to their
                  needs.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Implementation</Feature>
                  <Feature>CMS</Feature>
                  <Feature>Tech support</Feature>
                </Features>
                <Features title="Features">
                  <Feature>Wordpress</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

      <Page bg="#699C1B" color="#fff" py={5}>
        <Container>
          <Heading>Brigitte Katt (2016)</Heading>
          <Subline href="https://www.brigitte-katt.at">
            www.brigitte-katt.at
          </Subline>
        </Container>
        <Flex flexDirection="row-reverse" flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <FrameScreenshot
              fluid={data.screenBrigitteKatt.childImageSharp.fluid}
            />
          </Box>
          <SemiContainer
            width={[1, 1 / 2]}
            mt={[4, 5]}
            mb={4}
            reverse
            css={{ display: 'flex' }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flex="1"
            >
              <section>
                <P>
                  Brigitte approached me because she wanted a contact page for
                  her psychotherapy business. I convinced her to use full-screen
                  photography for building trust, relationship and emphathy, the
                  cornerstones of her business.
                </P>
                <P>
                  I also researched on light-weight CMS solutions for this small
                  single-page site. I ultimately decided on GraphCMS, which
                  turned out to be a great solution for that project.
                </P>
              </section>
              <section>
                <Features title="Roles">
                  <Feature>Concept</Feature>
                  <Feature>Design</Feature>
                  <Feature>Programming</Feature>
                </Features>
                <Features title="Features">
                  <Feature>GraphCMS</Feature>
                </Features>
              </section>
            </Flex>
          </SemiContainer>
        </Flex>
      </Page>

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
    screenBottlebooks: file(name: { eq: "bottlebooks-jurtschitsch" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenUnserwein: file(name: { eq: "2018-unserwein-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenBernhardGschwantner: file(name: { eq: "bernhard-gschwantner-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenUnserwein2014: file(name: { eq: "2014-unserwein-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenLandhausAltlengbach: file(
      name: { eq: "landhaus-altlengbach-home2" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenBrindlmayer: file(name: { eq: "brindlmayer-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    iPhoneSumera: file(name: { eq: "sumera-dashboard-iphone" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenAlexandraKleinheinz: file(name: { eq: "alexandra-kleinheinz-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenTastingManager: file(name: { eq: "tasting-manager-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenBgks: file(name: { eq: "bgks-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    screenBrigitteKatt: file(name: { eq: "brigitte-katt-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
