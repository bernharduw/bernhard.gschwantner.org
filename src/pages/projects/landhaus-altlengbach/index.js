import React from 'react';
import { Box } from 'rebass';
import { Link, graphql } from 'gatsby';
import { css } from 'styled-components';

import Layout from '../../../components/layout';
import { Title, H2, P, Ul } from '../../../components/Text';
import {
  Background,
  Container,
  AsideColumn,
  IllustrationColumn,
  TextColumn,
} from './_layout';
import TextSection from './_TextSection';
import Screenshot from './_Screenshot';
import LayoutIllustration from './_LayoutIllustration';

const constrainWidthLeft = `
  & > * {
    @media screen and (orientation: landscape) {
      max-width: 468px;
      margin-left: auto;
    }
  }
`;
const constrainWidthRight = `
  & > * {
    @media screen and (orientation: landscape) {
      max-width: 468px;
      margin-right: auto;
    }
  }
`;

export default class AltlengbachPage extends React.Component {
  state = {
    currentSection: '',
    visibleSections: [{ id: '' }],
    illustration: undefined,
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
    const defaultIllustration = {
      contentKey: 'home',
      showBrowser: true,
      renderContent: () => <Screenshot image={data.home} />,
      href: 'https://altlengbach.netlify.com/',
    };
    const { illustration = defaultIllustration } = this.state;

    return (
      <Layout>
        <Background>
          <Container>
            <AsideColumn css={constrainWidthLeft}>
              <Box>
                <Title>Website for a house sale</Title>
              </Box>
            </AsideColumn>
            <TextColumn py={4} css={constrainWidthRight}>
              <P>
                <a href="https://altlengbach.netlify.com/">
                  www.landhaus-altlengbach.at
                </a>{' '}
                (2018)
              </P>
              <P>Concept, design, programming</P>
            </TextColumn>
          </Container>
          <Container>
            <IllustrationColumn>
              <Box
                mx={[-2, -3]}
                px={[2, 3]}
                pt={[2, 3]}
                css={css`
                  // Allow zooming of the canvas.
                  margin-bottom: -100%;
                  padding-bottom: 100%;
                  overflow: hidden;

                  @media screen and (orientation: landscape) {
                    position: sticky;
                    top: 0;
                    // Place the illustration on the same top position as the sticky heading to the right.
                    padding-top: 48px;
                  }
                  ${constrainWidthLeft};
                `}
              >
                <LayoutIllustration {...illustration} />
              </Box>
            </IllustrationColumn>

            <TextColumn css={constrainWidthRight}>
              <div id="start">
                <H2 sticky>The Baseline</H2>
                <TextSection
                  section="start"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="home"
                  renderContent={() => <Screenshot image={data.home} />}
                  href="https://altlengbach.netlify.com/"
                >
                  <P>
                    I created a small presentational website to accompany the
                    sale of our parents' house. Because this was a private side
                    project, I decided to experiment with some technologies I
                    hadn't used before:
                  </P>
                  <Ul>
                    <li>Gatsby, a static website renderer;</li>
                    <li>Various techniques for creating page transitions;</li>
                    <li>
                      Netlify for continuous deployment and static hosting.
                    </li>
                  </Ul>
                  <P>
                    <a href="#layout">Continue: The layout</a>
                  </P>
                </TextSection>
              </div>

              <div id="layout">
                <H2 sticky mt="20vh">
                  The Layout: Canvas and Lens
                </H2>

                <TextSection
                  section="layout"
                  onSection={this.handleSection}
                  showCanvas
                  showBrowser
                  href="https://altlengbach.netlify.com/"
                  animate="browser"
                  zoom="canvas"
                >
                  <P>
                    The layout is based on the idea of a virtual canvas with
                    three individual site sections. The web browser acts as a
                    lens displaying only a part of that canvas. It expands on
                    the concept I developed for the{' '}
                    <Link to="sumera">Sumera mobile app</Link>.
                  </P>
                  <P>
                    <a href="#division">Continue</a>
                  </P>
                </TextSection>

                <TextSection
                  section="division"
                  onSection={this.handleSection}
                  showCanvas
                  showLines
                  showBrowser
                  href="https://altlengbach.netlify.com/"
                  animate="lines"
                  zoom="browser"
                >
                  <P id="division">
                    Each page is divided into four parts by a vertical and a
                    horizontal line: A vertical ribbon with text, a large image
                    area, and a horizontal menu bar with two parts, one for
                    global navigation, one for the local navigation within the
                    current section.
                  </P>
                  <P>
                    <a href="#animation">Continue</a>
                  </P>
                </TextSection>

                <TextSection
                  section="animation"
                  onSection={this.handleSection}
                  showCanvas
                  showLines
                  showBrowser
                  href="https://altlengbach.netlify.com/"
                  center
                  zoom="browser"
                  animate="canvas"
                >
                  {/* TODO add an animation segment for in-section transitions */}
                  <P id="animation">
                    To convey this concept to the site visitors, I used animated
                    transitions between the individual pages: when navigating
                    between sections, the full page slides to the next section's
                    page, whereas navigating within a section animates only
                    parts of the page.
                  </P>
                  <P>
                    <a href="#developing">Continue</a>
                  </P>
                </TextSection>
              </div>

              <div id="developing">
                <H2 sticky mt="20vh">
                  Creating The Site
                </H2>
                <TextSection
                  section="developing"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="home"
                  renderContent={() => <Screenshot image={data.home} />}
                  href="https://altlengbach.netlify.com/"
                >
                  <P>
                    When I started developing the website, Gatsby V2 was just in
                    beta. Creating the layouts and filling the pages with
                    content was super easy and fast. I had briefly tried Gatsby
                    V1 before, and generally I felt like the changes in the new
                    version simplified things a lot.
                  </P>
                </TextSection>

                <TextSection
                  section="sectionTransitions"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="plans"
                  renderContent={() => <Screenshot image={data.plans} />}
                  href="https://altlengbach.netlify.com/floor-plans/"
                >
                  <P>
                    Largely due to some changes in the way Gatsby renders the
                    individual page layouts, creating transitions between the
                    different pages wasn't as straightforward as I expected.
                    After some experiments with different methods, I settled on{' '}
                    <code>react-pose</code> because of its simple state model.
                    There's a lot to say about page transitions, so I will write
                    a separate blog post about that.
                  </P>
                </TextSection>
                <TextSection
                  section="pageTransitions"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="kitchen"
                  renderContent={() => <Screenshot image={data.kitchen} />}
                  href="https://altlengbach.netlify.com/tour/01-kueche"
                >
                  {/* // TODO Show in-page transitions here. */}
                  <P>
                    The main section of the website shows large pictures to give
                    a great impression of the house's individual areas. I
                    decided to place only a single image per page, with some
                    accompanying text and plenty of white-space to match the
                    generous dimensions of the house. During the design process,
                    the pages started to resemble a slide show more and more, so
                    I tried to match the page transitions by making them look
                    like a slide show.
                  </P>
                </TextSection>
                <TextSection
                  section="breathing"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="home"
                  renderContent={() => <Screenshot image={data.home} />}
                  href="https://altlengbach.netlify.com/"
                >
                  {/* // TODO Show x-ray here. */}
                  <P>
                    I added a subtle scaling animation to the images to evoke
                    the impression that they were breathing. I also animated the
                    local navigation to make the site architecture even clearer.
                  </P>
                </TextSection>
              </div>
              <div id="improvements">
                <H2 sticky mt="20vh">
                  Planned Improvements
                </H2>
                <TextSection
                  section="improvements"
                  onSection={this.handleSection}
                  showBrowser
                  contentKey="contact"
                  renderContent={() => <Screenshot image={data.contact} />}
                  href="https://altlengbach.netlify.com/contact"
                >
                  <P>
                    Using the new React DevTools profiler, I found out that the
                    navigation transition takes much more time to render than
                    all the other animations together. Although I decided to
                    publish the site in the non-optimized state, I hope to fix
                    those and other open issues soon-ish:
                  </P>
                  <Ul>
                    <li>Replace react-pose with pure CSS transitions,</li>
                    <li>
                      optimize the performance, especially of the more complex
                      transitions,
                    </li>
                    <li>
                      and refine the other sections' animations, especially the
                      floor plans.
                    </li>
                  </Ul>
                </TextSection>
              </div>
            </TextColumn>
          </Container>

          <Container>
            <AsideColumn />
            <TextColumn pb="50vh" css={constrainWidthRight}>
              <TextSection
                section="conclusion"
                onSection={this.handleSection}
                showBrowser
                contentKey="contact"
                renderContent={() => <Screenshot image={data.contact} />}
                href="https://altlengbach.netlify.com/contact"
              >
                {/* // TODO Show contact data and call to action here. */}

                <H2 sticky mt="20vh">
                  Final Thoughts
                </H2>
                <P>
                  Working on the website was a very nice experience, with a lot
                  of learnings. Gatsby turned out to be extremely powerful and
                  simple to work with, and configuring and using Netlify for
                  deployment and hosting was super easy. I like the fact that
                  every deploy and branch has its own URL, so regressions can
                  also be detected by browsing the individual versions that stay
                  online. I'll definitely be using this combination of tools for
                  other projects!
                </P>
                <P>
                  Animations and transitions are topics I want to play more
                  with. I think there is much room for improvements there, from
                  the developer experience to performance issues and ease of
                  use.
                </P>
              </TextSection>
            </TextColumn>
          </Container>
        </Background>
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
