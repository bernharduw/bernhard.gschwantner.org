import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from '../Features';
import ProjectTeaser from './ProjectTeaser';

export default function BrindlmayerTeaser(props) {
  return (
    <PageSection as="article" bg="#D7E7F1" color="#000" {...props}>
      <ProjectTeaser
        bg="#D7E7F1"
        reverse={props.reverse}
        title="Weingut Brindlmayer"
        subtitle="www.brindlmayer.at"
        href="https://www.brindlmayer.at"
        year="2017/2018"
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
              <Feature>Implementation</Feature>
            </Features>
            <Features title="Features">
              <Feature>CMS</Feature>
              <Feature>Wordpress</Feature>
              <Feature>unserwein integration</Feature>
            </Features>
          </>
        }
        {...props}
      >
        <P>I relaunched the winery's site with Wordpress.</P>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "brindlmayer-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
