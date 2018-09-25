import React from 'react';
import { Heading, Text, Flex, Box } from 'rebass';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled, { css, keyframes } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    <Box css="height: 100%;">{children}</Box>
  </Col>
);
const TextColumn = props => <Col bg="#fff" {...props} />;

const Container = props => (
  <Flex flexDirection={['column', 'row']} {...props} />
);

const WaypointAdapter = ({ children, innerRef }) => children(innerRef);

const TextSection = ({ onSection, id, children, ...props }) => (
  <Waypoint
    bottomOffset="30%"
    topOffset="30%"
    onEnter={
      onSection &&
      (waypointProps =>
        onSection(id, { type: 'enter', ...waypointProps, illustration: props }))
    }
    onLeave={
      onSection &&
      (waypointProps =>
        onSection(id, { type: 'leave', ...waypointProps, illustration: props }))
    }
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

const Screenshot = ({ image: { childImageSharp } = {}, ...rest }) => (
  <Image {...childImageSharp} {...rest} />
);

export default class AltlengbachPage extends React.Component {
  state = {
    currentSection: '',
    visibleSections: [{ id: '', illustration: {} }],
    illustration: {},
  };

  handleSection = (currentSection, { type, illustration }) => {
    if (type === 'enter') {
      this.setState(({ visibleSections }) => ({
        currentSection,
        illustration,
        visibleSections: visibleSections.find(({ id }) => id === currentSection)
          ? visibleSections
          : [...visibleSections, { id: currentSection, illustration }],
      }));
    } else {
      this.setState(({ visibleSections }) => {
        const newVisibleSections = visibleSections.filter(
          ({ id }) => id !== currentSection
        );
        const { id, illustration } = newVisibleSections[
          newVisibleSections.length - 1
        ] || { id: '', illustration: {} };
        return {
          currentSection: id,
          illustration,
          visibleSections: newVisibleSections,
        };
      });
    }
  };

  render() {
    const { data } = this.props;
    const { currentSection, illustration } = this.state;

    return (
      <Layout>
        <Container>
          <IllustrationColumn>
            <Title>Website for a house sale</Title>
          </IllustrationColumn>
          <TextColumn py={4}>
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
              mx={[-2, -3]}
              px={[2, 3]}
              pt={[2, 3]}
              css={css`
                position: sticky;
                top: 0;
                margin-bottom: -100%;
                padding-bottom: 100%;
                overflow: hidden;
              `}
            >
              <LayoutIllustration
                currentSection={currentSection}
                {...illustration}
                href="https://altlengbach.netlify.com"
              >
                {illustration.renderContent && illustration.renderContent()}
              </LayoutIllustration>
            </Box>
          </IllustrationColumn>

          <TextColumn>
            <TextSection
              id="start"
              onSection={this.handleSection}
              showBrowser
              contentKey="kitchen"
              renderContent={() => <Screenshot image={data.kitchen} />}
            >
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

            <TextSection
              id="layout"
              onSection={this.handleSection}
              showCanvas
              showBrowser
              animate="browser"
              zoom="canvas"
            >
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

            <TextSection
              id="division"
              onSection={this.handleSection}
              showCanvas
              showLines
              animate="lines"
              zoom="canvas"
            >
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

            <TextSection
              id="animation"
              onSection={this.handleSection}
              showCanvas
              showLines
              showBrowser
              center
              zoom="browser"
              animate="canvas"
            >
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

            <TextSection
              id="developing"
              onSection={this.handleSection}
              showBrowser
              contentKey="home"
              renderContent={() => <Screenshot image={data.home} />}
            >
              <H2>Developing The Site</H2>
              <P>
                When I started developing the website, Gatsby V2 was just in
                beta. Creating the layouts and filling the pages with content
                was super easy and fast. I had briefly tried Gatsby V1 before,
                and generally I felt like the changes in the new version
                simplified things a lot.
              </P>
            </TextSection>

            <TextSection
              id="sectionTransitions"
              onSection={this.handleSection}
              showBrowser
              contentKey="kitchen"
              renderContent={() => <Screenshot image={data.kitchen} />}
            >
              <P>
                However, creating transitions between the different pages wasn't
                as straightforward as I expected, largely due to some changes in
                the way Gatsby renders the individual page layouts. After some
                experiments with different methods, I settled on{' '}
                <code>react-pose</code> because of its simple state model.
                There's a lot to say about page transitions, so I will write a
                separate blog post about that.
              </P>
            </TextSection>
            <TextSection
              id="pageTransitions"
              onSection={this.handleSection}
              showBrowser
              contentKey="plans"
              renderContent={() => <Screenshot image={data.plans} />}
            >
              <P>
                The main section of the website shows large pictures to give a
                great impression of the house's individual areas. I decided to
                place only a single image per page, with some accompanying text
                and plenty of white-space to match the generous dimensions of
                the house. During the design process, the pages started to
                resemble a slide show more and more, so I tried to match the
                page transitions by making them look like a slide show.
              </P>
            </TextSection>
            <TextSection
              id="breathing"
              onSection={this.handleSection}
              showBrowser
              contentKey="home"
              renderContent={() => <Screenshot image={data.home} />}
            >
              <P>
                I added a subtle scaling animation to the images to evoke the
                impression that they were breathing. I also animated the local
                navigation to make the site architecture even clearer.
              </P>
            </TextSection>
          </TextColumn>
        </Container>

        <Container>
          <IllustrationColumn />
          <TextColumn
            mr="auto"
            css={css`
              max-width: 500px;
            `}
          >
            <TextSection
              id="improvements"
              onSection={this.handleSection}
              showBrowser
              contentKey="home"
              renderContent={() => <Screenshot image={data.home} />}
            >
              <H2>Planned Improvements</H2>
              <P>
                Using the new React DevTools profiler, I found out that the
                navigation transition takes much more time to render than all
                the other animations together. Although I decided to publish the
                site in the non-optimized state, I hope to fix those and other
                open issues soon-ish:
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
            </TextSection>

            <TextSection id="conclusion" onSection={this.handleSection}>
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
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    home: file(name: { eq: "landhaus-altlengbach-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kitchen: file(name: { eq: "landhaus-altlengbach-kitchen" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contact: file(name: { eq: "landhaus-altlengbach-contact" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    plans: file(name: { eq: "landhaus-altlengbach-plans" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const LayoutSvg = styled.svg`
  margin-left: auto;
  max-width: 468px;
  display: block;

  && {
    overflow: visible;
  }
`;

const scaleX = keyframes`
0%   { transform: scaleX(0); }
5%   { transform: scaleX(0.5); }
20%  { transform: scaleX(0.5); }
25%  { transform: scaleX(1); }
100% { transform: scaleX(1); }
`;
const scaleY = keyframes`
0%   { transform: scaleY(0); }
5%   { transform: scaleY(0.5); }
15%  { transform: scaleY(0.5); }
20%  { transform: scaleY(1); }
100% { transform: scaleY(1); }
`;

const fadeIn = keyframes`
0%  { opacity: 0; }
20% { opacity: 1; }
80% { opacity: 1; }
85% { opacity: 0; }
`;

const Line = styled.path.attrs({ stroke: '#fff', strokeWidth: 2 })`
  animation: ${({ speed = '10s', delay = '0s', horizontal, play }) =>
    play
      ? css`${horizontal ? scaleX : scaleY} ${speed} ${delay} ease infinite`
      : 'none'};
  transform: ${props =>
    props.play ? (props.horizontal ? 'scaleX(0)' : 'scaleY(0)') : 'none'};
  transform-origin: ${props => (props.horizontal ? '100% 0%' : '0% 0%')};
`;

const Rect = styled.rect.attrs({ fill: 'rgba(255, 255, 255, 0.3)' })`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${fadeIn}  ${speed} ${delay} ease infinite` : 'none'};
  opacity: ${props => (props.play ? 0 : 1)};
  transition: ${props => (props.play ? 'none' : 'opacity 1s')};
`;

const moveBrowser = keyframes`
0%      { transform: translateY(0%); }
10%     { transform: translateY(100%); }
26.667% { transform: translateY(100%); }
36.667% { transform: translateY(0%); }
53.333% { transform: translateY(0%); }
63.333% { transform: translateX(-100%); }
80%     { transform: translateX(-100%); }
90%     { transform: translateX(0%); }
`;

const AnimatedGroup = styled.g`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveBrowser}  ${speed} ${delay} ease infinite` : 'none'};

  &.fade-enter,
  &.fade-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.5s;
  }
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`;

const Group = styled.g`
  transform-origin: 100% 0;
  transition: opacity 1s, transform 1s;
  transform: ${({ center, zoom }) =>
    `${center ? 'translate(-25%, 25%)' : ''} ${
      zoom === 'canvas' ? 'scale(0.5)' : 'none'
    }`};
  opacity: ${({ show = true, opacity = 1 }) => (show ? opacity : 0)};
`;

const moveCanvas = keyframes`
  0%      { transform: translateY(0%); }
  10%     { transform: translateY(-100%); }
  26.667% { transform: translateY(-100%); }
  36.667% { transform: translateY(0%); }
  53.333% { transform: translateY(0%); }
  63.333% { transform: translateX(100%); }
  80%     { transform: translateX(100%); }
  90%     { transform: translateX(0%); }
`;

const Canvas = styled(Group)`
  animation: ${({ play, speed = '10s', delay = '0s' }) =>
    play ? css`${moveCanvas}  ${speed} ${delay} ease infinite` : 'none'};
`;

const LayoutIllustration = ({
  zoom = '',
  center = false,
  width = 640,
  height = 360,
  showLines = false,
  showCanvas = false,
  showBrowser = false,
  animate = '',
  children,
  classNames = 'fade',
  contentKey,
  timeout = 1000,
  ...rest
}) => (
  <LayoutSvg viewBox={`0 0 ${width} ${height}`}>
    <Group center={center} zoom={zoom} show>
      <Canvas show={showCanvas} play={animate === 'canvas'} delay="2s">
        <rect
          x={-width}
          y={0}
          width={2 * width}
          height={2 * height}
          fill="rgba(0,0,0,0.1)"
        />
        <g className="contactSection">
          <rect x={-width} y="0" width={width} height={height} fill="#6e8b3d" />
          <foreignObject
            x={-width}
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Contact</p>
          </foreignObject>
        </g>
        <g className="mainSection">
          <rect x="0" y="0" width={width} height={height} fill="#52682d" />
          <foreignObject
            x={0}
            y={height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Main</p>
          </foreignObject>
        </g>
        <g className="plansSection">
          <rect x={0} y={height} width={width} height={height} fill="#435626" />
          <foreignObject
            x={0}
            y={height + height / 2 - height / 20}
            width={width}
            height={height / 10}
            style={{ textAlign: 'center', fontSize: height / 10 }}
          >
            <p>Plans</p>
          </foreignObject>
        </g>

        <Group show={showLines} opacity={showBrowser ? 0.2 : 1}>
          <Line
            play={animate === 'lines'}
            delay="1s"
            d={`M${(width / 13) * 5},0 L${(width / 13) * 5},${height * 2}`}
          />
          <Rect
            delay="1.25s"
            play={animate === 'lines'}
            x="0"
            y="0"
            width={(width / 13) * 5}
            height={height}
          />
          <Line
            horizontal
            delay="1.5s"
            play={animate === 'lines'}
            d={`M${width},${height * 0.85} L${-width},${height * 0.85}`}
          />
          <Rect
            delay="1.75s"
            play={animate === 'lines'}
            x={0}
            y={height * 0.85}
            width={width}
            height={height * 0.15}
          />
          <Line
            horizontal
            delay="2s"
            play={animate === 'lines'}
            d={`M${width},${height * 1.15} L${-width},${height * 1.15}`}
          />
          <Rect
            delay="2.25s"
            play={animate === 'lines'}
            x={0}
            y={height}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="2.75s"
            play={animate === 'lines'}
            x={0}
            y={height}
            width={(width / 13) * 5}
            height={height}
          />
          <Line
            delay="3s"
            play={animate === 'lines'}
            d={`M${width * -0.1},0 L${width * -0.1},${height * 2}`}
          />
          <Rect
            delay="3.25s"
            play={animate === 'lines'}
            x={width * -0.1}
            y="0"
            width={width * 0.1}
            height={height}
          />
          <Rect
            delay="3.75s"
            play={animate === 'lines'}
            x={-width}
            y={height * 0.85}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="4.25s"
            play={animate === 'lines'}
            x={-width}
            y={height}
            width={width}
            height={height * 0.15}
          />
          <Rect
            delay="4.75s"
            play={animate === 'lines'}
            x={width * -0.1}
            y={height}
            width={width * 0.1}
            height={height}
          />
        </Group>
      </Canvas>

      <TransitionGroup component={null}>
        {(children || showBrowser) && (
          <CSSTransition
            timeout={timeout}
            classNames={classNames}
            key={contentKey || 'default'}
          >
            <AnimatedGroup play={animate === 'browser'} delay="2s">
              <foreignObject x={0} y={0} width={width} height={height}>
                <Browser
                  {...rest}
                  css={css`
                    ${children
                      ? ''
                      : `
                        height: 100%;
                        height: calc(100% + 19px);
                      `};
                    margin: -16px -3px -3px;
                  `}
                >
                  {children}
                </Browser>
              </foreignObject>
            </AnimatedGroup>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Group>
  </LayoutSvg>
);
