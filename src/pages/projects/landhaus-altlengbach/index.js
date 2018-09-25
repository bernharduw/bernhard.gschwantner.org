import React from 'react';
import { Box } from 'rebass';
import { Link, graphql } from 'gatsby';
import { css } from 'styled-components';

import Layout from '../../../components/layout';
import { Title, H2, P, Container } from './_components';
import { IllustrationColumn, TextColumn } from './_Column';
import TextSection from './_TextSection';
import Screenshot from './_Screenshot';
import LayoutIllustration from './_LayoutIllustration';

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
              />
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
