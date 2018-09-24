import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { css } from 'styled-components';

import Layout from '../../components/layout';
import Browser from '../../components/Browser';

const Title = props => <Heading as="h1" fontSize={6} mb={3} {...props} />;
const H2 = props => <Heading mb={3} {...props} />;
const P = props => (
  <Text
    as="p"
    mb={3}
    css={`
      max-width: 30em;
    `}
    {...props}
  />
);

const Col = props => <Box width={[1, 1 / 2]} px={[2, 3]} {...props} />;

const DarkCol = ({ sticky, children, ...props }) => (
  <Col bg="#555" color="#fff" py={4} {...props}>
    <Box
      ml="auto"
      css={css`
        max-width: 468px;
        ${sticky
          ? css`
              position: sticky;
              top: 16px;
            `
          : ''};
      `}
    >
      {children}
    </Box>
  </Col>
);
const LightCol = props => <Col bg="#fff" py={4} {...props} />;

const Section = props => <Flex flexDirection={['column', 'row']} {...props} />;

const ExplainerSection = props => (
  <Section
    flexWrap="wrap"
    justifyContent="flex-start"
    css={`
      min-height: 100vh;
    `}
    {...props}
  />
);

const LayoutIllustration = ({ lines, sections, browser }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 530 400">
    <rect x="0" y="0" width="520" height="390" fill="rgba(0,0,0,0.1)" />
    <g opacity={sections ? 1 : 0}>
      <g className="contactSection">
        <rect
          x="0"
          y="0"
          width="260"
          height="195"
          fill="orange"
          opacity="0.5"
        />
        <foreignObject
          x="0"
          y="80"
          width="260"
          height="20"
          style={{ textAlign: 'center' }}
        >
          <p>Contact</p>
        </foreignObject>
      </g>
      <g className="mainSection">
        <rect
          x="260"
          y="0"
          width="260"
          height="195"
          fill="green"
          opacity="0.5"
        />
        <foreignObject
          x="260"
          y="80"
          width="260"
          height="20"
          style={{ textAlign: 'center' }}
        >
          <p>Main</p>
        </foreignObject>
      </g>
      <g className="plansSection">
        <rect
          x="260"
          y="195"
          width="260"
          height="195"
          fill="blue"
          opacity="0.5"
        />
        <foreignObject
          x="260"
          y="275"
          width="260"
          height="20"
          style={{ textAlign: 'center' }}
        >
          <p>Plans</p>
        </foreignObject>
      </g>
    </g>
    <g className="lines" opacity={lines ? 1 : 0}>
      <path stroke="#fff" d="M240,0 L240,390" />
      <path stroke="#fff" d="M360,0 L360,390" />
      <path stroke="#fff" d="M0,175 L520,175" />
      <path stroke="#fff" d="M0,215 L520,215" />
    </g>
    <rect
      className="browser"
      x="260"
      y="0"
      width="260"
      height="195"
      stroke="currentColor"
      strokeWidth="3"
      opacity={browser ? 1 : 0}
      fill="transparent"
    />
  </svg>
);

const AltlengbachPage = () => (
  <Layout>
    <Section>
      <DarkCol>
        <Title>Website for a house sale</Title>
      </DarkCol>
      <LightCol>
        <P>
          <a href="https://altlengbach.netlify.com">
            www.landhaus-altlengbach.at
          </a>{' '}
          (2018)
        </P>
      </LightCol>
    </Section>

    <ExplainerSection>
      <DarkCol sticky>
        <Browser href="https://altlengbach.netlify.com">
          <StaticQuery
            query={graphql`
              query {
                image: file(name: { eq: "landhaus-altlengbach-1" }) {
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            `}
            render={data => (
              <Image fluid={data.image.childImageSharp.fluid} critical />
            )}
          />
        </Browser>
      </DarkCol>
      <LightCol>
        <P>
          I created a small presentational website to accompany the sale of our
          parents' house. Because this was a private side project, I decided to
          experiment with some technologies I hadn't used before:
        </P>
        <ul>
          <li>Gatsby, a static website renderer;</li>
          <li>Various techniques for creating page transitions;</li>
          <li>Netlify for continuous deployment and static hosting.</li>
        </ul>
        <P>
          <a href="#layout">Continue: The layout</a>
        </P>
      </LightCol>
    </ExplainerSection>

    <ExplainerSection id="layout">
      <DarkCol sticky>
        <LayoutIllustration sections browser transitions />
      </DarkCol>
      <LightCol>
        <H2>The Layout: Canvas and Lens</H2>
        <P>
          The layout is based on the idea of a virtual canvas with three
          individual site sections. The web browser acts as a lens displaying
          only a part of that canvas. It expands on the concept I developed for
          the <Link to="sumera">Sumera mobile app</Link>.
        </P>
        <P>
          <a href="#division">Continue</a>
        </P>
      </LightCol>
    </ExplainerSection>

    <ExplainerSection id="division">
      <DarkCol sticky>
        <LayoutIllustration lines sections ribbons />
      </DarkCol>
      <LightCol>
        <P>
          Each page is divided into four parts by a vertical and a horizontal
          line: A vertical ribbon with text, a large image area, and a
          horizontal menu bar with two parts, one for global navigation, one for
          the local navigation within the current section.
        </P>
        <P>
          <a href="#animation">Continue</a>
        </P>
      </LightCol>
    </ExplainerSection>

    <ExplainerSection id="animation">
      <DarkCol sticky>
        <LayoutIllustration lines sections browser transitions />
      </DarkCol>
      <LightCol>
        <P>
          To convey this concept to the site visitors, I used animated
          transitions between the individual pages: when navigating between
          sections, the full page slides to the next section's page, whereas
          navigating within a section animates only parts of the page.
        </P>
        <P>
          <a href="#developing">Continue</a>
        </P>
      </LightCol>
    </ExplainerSection>

    <ExplainerSection id="developing">
      <LightCol
        ml="auto"
        css={css`
          max-width: 500px;
        `}
      >
        <H2>Developing The Site</H2>
        <P>
          When I started developing the website, Gatsby V2 was just in beta. I
          had briefly tried Gatsby V1 before, and generally I felt like the
          changes in the new version simplified things a lot.
        </P>
        <P>
          However, creating transitions between the different pages wasn't as
          straightforward as I expected, largely due to some changes in the way
          Gatsby renders the individual page layouts. After some experiments
          with different methods, I settled on <code>react-pose</code> because
          of its simple state model. There's a lot to say about page
          transitions, so I will write a separate blog post about that.
        </P>
        <P>
          The main section of the website shows large pictures to give a great
          impression of the house's individual areas. I decided to place only a
          single image per page, with some accompanying text and plenty of
          white-space to match the generous dimensions of the house. During the
          design process, the pages started to resemble a slide show more and
          more, so I tried to match the page transitions by making them look
          like a slide show.
        </P>
        <P>
          I also added a subtle scale animation to the images to give the
          impression that they are breathing. I also animated the local
          navigation to make the site architecture even clearer.
        </P>

        <H2>Planned Improvements</H2>
        <P>
          Unfortunately the transitions' performance degraded after adding the
          subtle animations. Using the new React DevTools profiler, I found out
          that the navigation transition takes much more time to render than all
          the other animations together. Although I decided to publish the site
          in the non-optimized state, I hope to fix those and other open issues
          soon-ish:
        </P>
        <ul>
          <li>Replace react-pose with pure CSS transitions,</li>
          <li>
            optimize the performance, especially of the more complex
            transitions,
          </li>
          <li>
            and refine the other sections' animations, especially the floor
            plans.
          </li>
        </ul>
        <H2>My Impressions</H2>
        <P>
          Working on the website was a very nice experience, with a lot of
          learnings. Gatsby turned out to be extremely powerful and simple to
          work with, and configuring and using Netlify for deployment and
          hosting was super easy. I like the fact that every deploy and branch
          has its own URL, so regressions can also be detected by browsing the
          individual versions that stay online. I'll definitely be using this
          combination of tools for other projects!
        </P>
        <P>
          Animations and transitions are topics I want to play more with. I
          think there is much room for improvements there, from the developer
          experience to performance issues and ease of use.
        </P>
      </LightCol>
      <DarkCol sticky />
    </ExplainerSection>
  </Layout>
);

export default AltlengbachPage;
