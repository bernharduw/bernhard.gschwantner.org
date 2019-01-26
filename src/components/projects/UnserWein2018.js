import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function UnserWein2018Teaser(props) {
  return (
    <PageSection as="article" bg="#41363b" color="#fff" {...props}>
      <ProjectTeaser
        reverse={props.reverse}
        title="unserwein.at website relaunch"
        subtitle="www.unserwein.at"
        href="https://www.unserwein.at"
        year="2018"
        picture={
          <StaticQuery query={query}>
            {data => (
              <FrameScreenshot fluid={data.screenshot.childImageSharp.fluid} />
            )}
          </StaticQuery>
        }
        features={
          <>
            <Features title="Roles">
              <Feature>Concept</Feature>
              <Feature>Design</Feature>
              <Feature>Programming</Feature>
            </Features>
            <Features title="Features">
              <Feature>React</Feature>
              <Feature>Static Site Rendering (Gatsby)</Feature>
            </Features>
          </>
        }
        {...props}
      >
        <P>
          For the recent relaunch of our website, we laser-focused on our
          audience. I used Gatsby as a static site builder and optimized the
          site for speed, so the days of our old, slow Wordpress site are over
          now.
        </P>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "2018-unserwein-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
