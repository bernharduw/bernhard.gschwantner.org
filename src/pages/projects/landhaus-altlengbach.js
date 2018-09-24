import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled, { css } from 'styled-components';

import Layout from '../../components/layout';
import Browser from '../../components/Browser';
import Waypoint from 'react-waypoint';

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

const IllustrationColumn = ({ children, ...props }) => (
  <Col bg="#555" color="#fff" py={4} {...props}>
    <Box
      css={`
        max-width: 468px;
        margin-left: auto;
        height: 100%;
      `}
    >
      {children}
    </Box>
  </Col>
);
const TextColumn = props => <Col bg="#fff" py={4} {...props} />;

const Container = props => (
  <Flex flexDirection={['column', 'row']} {...props} />
);

const WaypointAdapter = ({ children, innerRef }) => children(innerRef);

const TextSection = ({ onSection, id, children, ...props }) => (
  <Waypoint
    bottomOffset="30%"
    topOffset="30%"
    onEnter={onSection && (props => onSection(id, { type: 'enter', ...props }))}
    onLeave={onSection && (props => onSection(id, { type: 'leave', ...props }))}
  >
    <WaypointAdapter>
      {ref => (
        <Box
          ref={ref}
          py={4}
          css={`
            min-height: 100vh;
          `}
          id={id}
          {...props}
        >
          {children}
        </Box>
      )}
    </WaypointAdapter>
  </Waypoint>
);

export default class AltlengbachPage extends React.Component {
  state = { currentSection: 'start', visibleSections: ['start'] };

  handleSection = (currentSection, { type }) => {
    if (type === 'enter') {
      this.setState(({ visibleSections }) => ({
        currentSection,
        visibleSections: visibleSections.includes(currentSection)
          ? visibleSections
          : [...visibleSections, currentSection],
      }));
    } else {
      this.setState(({ visibleSections }) => {
        const newVisibleSections = visibleSections.filter(
          section => section !== currentSection
        );
        return {
          currentSection: newVisibleSections[newVisibleSections.length - 1],
          visibleSections: newVisibleSections,
        };
      });
    }
  };

  render() {
    const { currentSection } = this.state;
    const states = {
      start: { zoom: true, showBrowser: true, showChildren: true },
      layout: { showSections: true, showBrowser: true },
      division: { showSections: true, showLines: true },
      animation: { showSections: true, showLines: true, showBrowser: true },
      developing: { zoom: true, showBrowser: true, showChildren: true },
    };
    const illustrationState = states[currentSection];

    return (
      <Layout>
        <Container>
          <IllustrationColumn>
            <Title>Website for a house sale</Title>
          </IllustrationColumn>
          <TextColumn>
            <P>
              <a href="https://altlengbach.netlify.com">
                www.landhaus-altlengbach.at
              </a>{' '}
              (2018)
            </P>
          </TextColumn>
        </Container>
        <Container>
          <IllustrationColumn>
            <Box
              css={css`
                position: sticky;
                top: 16px;
              `}
            >
              <LayoutIllustration {...illustrationState}>
                <StaticQuery
                  query={graphql`
                    query {
                      image: file(name: { eq: "landhaus-altlengbach-home" }) {
                        childImageSharp {
                          fluid(maxWidth: 1280) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  `}
                  render={({ image }) => (
                    <Image fluid={image.childImageSharp.fluid} critical />
                  )}
                />
              </LayoutIllustration>
            </Box>
          </IllustrationColumn>
          <TextColumn>
            <TextSection id="start" onSection={this.handleSection}>
              <P>
                I created a small presentational website to accompany the sale
                of our parents' house. Because this was a private side project,
                I decided to experiment with some technologies I hadn't used
                before:
              </P>
              <ul>
                <li>Gatsby, a static website renderer;</li>
                <li>Various techniques for creating page transitions;</li>
                <li>Netlify for continuous deployment and static hosting.</li>
              </ul>
              <P>
                <a href="#layout">Continue: The layout</a>
              </P>
            </TextSection>

            <TextSection id="layout" onSection={this.handleSection}>
              <H2>The Layout: Canvas and Lens</H2>
              <P>
                The layout is based on the idea of a virtual canvas with three
                individual site sections. The web browser acts as a lens
                displaying only a part of that canvas. It expands on the concept
                I developed for the <Link to="sumera">Sumera mobile app</Link>.
              </P>
              <P>
                <a href="#division">Continue</a>
              </P>
            </TextSection>

            <TextSection id="division" onSection={this.handleSection}>
              <P>
                Each page is divided into four parts by a vertical and a
                horizontal line: A vertical ribbon with text, a large image
                area, and a horizontal menu bar with two parts, one for global
                navigation, one for the local navigation within the current
                section.
              </P>
              <P>
                <a href="#animation">Continue</a>
              </P>
            </TextSection>

            <TextSection id="animation" onSection={this.handleSection}>
              <P>
                To convey this concept to the site visitors, I used animated
                transitions between the individual pages: when navigating
                between sections, the full page slides to the next section's
                page, whereas navigating within a section animates only parts of
                the page.
              </P>
              <P>
                <a href="#developing">Continue</a>
              </P>
            </TextSection>
          </TextColumn>
        </Container>

        <Container>
          <TextColumn
            ml="auto"
            css={css`
              max-width: 500px;
            `}
          >
            <TextSection id="developing" onSection={this.handleSection}>
              <H2>Developing The Site</H2>
              <P>
                When I started developing the website, Gatsby V2 was just in
                beta. I had briefly tried Gatsby V1 before, and generally I felt
                like the changes in the new version simplified things a lot.
              </P>
              <P>
                However, creating transitions between the different pages wasn't
                as straightforward as I expected, largely due to some changes in
                the way Gatsby renders the individual page layouts. After some
                experiments with different methods, I settled on{' '}
                <code>react-pose</code> because of its simple state model.
                There's a lot to say about page transitions, so I will write a
                separate blog post about that.
              </P>
              <P>
                The main section of the website shows large pictures to give a
                great impression of the house's individual areas. I decided to
                place only a single image per page, with some accompanying text
                and plenty of white-space to match the generous dimensions of
                the house. During the design process, the pages started to
                resemble a slide show more and more, so I tried to match the
                page transitions by making them look like a slide show.
              </P>
              <P>
                I also added a subtle scale animation to the images to give the
                impression that they are breathing. I also animated the local
                navigation to make the site architecture even clearer.
              </P>

              <H2>Planned Improvements</H2>
              <P>
                Unfortunately the transitions' performance degraded after adding
                the subtle animations. Using the new React DevTools profiler, I
                found out that the navigation transition takes much more time to
                render than all the other animations together. Although I
                decided to publish the site in the non-optimized state, I hope
                to fix those and other open issues soon-ish:
              </P>
              <ul>
                <li>Replace react-pose with pure CSS transitions,</li>
                <li>
                  optimize the performance, especially of the more complex
                  transitions,
                </li>
                <li>
                  and refine the other sections' animations, especially the
                  floor plans.
                </li>
              </ul>
              <H2>My Impressions</H2>
              <P>
                Working on the website was a very nice experience, with a lot of
                learnings. Gatsby turned out to be extremely powerful and simple
                to work with, and configuring and using Netlify for deployment
                and hosting was super easy. I like the fact that every deploy
                and branch has its own URL, so regressions can also be detected
                by browsing the individual versions that stay online. I'll
                definitely be using this combination of tools for other
                projects!
              </P>
              <P>
                Animations and transitions are topics I want to play more with.
                I think there is much room for improvements there, from the
                developer experience to performance issues and ease of use.
              </P>
            </TextSection>
          </TextColumn>
          <IllustrationColumn />
        </Container>
      </Layout>
    );
  }
}

const LayoutSvg = styled.svg`
  transition: transform 0.3s;
  transform: ${({ zoom }) => (zoom ? 'translate(-50%,50%) scale(2)' : '')};
`;

const Group = styled.g`
  transition: opacity 0.3s;
  opacity: ${({ show, opacity = 1 }) => (show ? opacity : 0)};
`;

const LayoutIllustration = ({
  zoom,
  width = 640,
  height = 360,
  showLines,
  showSections,
  showBrowser,
  showChildren,
  children,
  ...rest
}) => (
  <Box>
    <LayoutSvg
      zoom={zoom}
      viewBox={`-2 -16 ${2 * width + 4} ${2 * height + 18}`}
    >
      <Group show={showSections}>
        <rect
          x="0"
          y="0"
          width={2 * width}
          height={2 * height}
          fill="rgba(0,0,0,0.1)"
        />
        <g className="contactSection">
          <rect x="0" y="0" width={width} height={height} fill="orange" />
          <foreignObject
            x="0"
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Contact</p>
          </foreignObject>
        </g>
        <g className="mainSection">
          <rect x={width} y="0" width={width} height={height} fill="green" />
          <foreignObject
            x={width}
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Main</p>
          </foreignObject>
        </g>
        <g className="plansSection">
          <rect
            x={width}
            y={height}
            width={width}
            height={height}
            fill="blue"
            opacity="0.5"
          />
          <foreignObject
            x={width}
            y={height + height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Plans</p>
          </foreignObject>
        </g>
      </Group>
      <Group show={showLines} opacity={showBrowser ? 0.2 : 1}>
        <path
          stroke="#fff"
          strokeWidth="4"
          d={`M${width * 0.9},0 L${width * 0.9},${height * 2}`}
        />
        <path
          stroke="#fff"
          strokeWidth="4"
          d={`M${(width * 18) / 13},0 L${(width * 18) / 13},${height * 2}`}
        />
        <path
          stroke="#fff"
          strokeWidth="4"
          d={`M0,${height * 0.8} L${2 * width},${height * 0.8}`}
        />
        <path
          stroke="#fff"
          strokeWidth="4"
          d={`M0,${height * 1.2} L${2 * width},${height * 1.2}`}
        />
      </Group>
      <Group show={showBrowser}>
        <foreignObject x={width} y="0" width={width} height={height}>
          <Browser
            {...rest}
            css={css`
              height: calc(100% + 18px);
              margin: -16px -2px -2px;
            `}
          >
            <div style={{ opacity: showChildren ? 1 : 0 }}>{children}</div>
          </Browser>
        </foreignObject>
      </Group>
    </LayoutSvg>
  </Box>
);
