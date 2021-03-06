import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from '../Features';
import ProjectTeaser from './ProjectTeaser';

export default function BGKSTeaser(props) {
  return (
    <PageSection as="article" bg="#4D454A" color="#fff" {...props}>
      <ProjectTeaser
        bg="#4D454A"
        reverse={props.reverse}
        title="bgks architects"
        subtitle="www.bgks.at"
        href="https://www.bgks.at"
        year="2016"
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
              <Feature>Implementation</Feature>
              <Feature>CMS</Feature>
              <Feature>Tech support</Feature>
            </Features>
            <Features title="Features">
              <Feature>Wordpress</Feature>
            </Features>
          </>
        }
        {...props}
      >
        <P>
          The architects collective BGKS wanted to relaunch their site focusing
          on showcasing their products. Together with them I selected a matching
          Wordpress template and adapted it to their needs.
        </P>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "bgks-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
