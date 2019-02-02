import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from '../Features';
import ProjectTeaser from './ProjectTeaser';

export default function Unserwein2014Teaser(props) {
  return (
    <PageSection as="article" bg="#9d2054" color="#fff" {...props}>
      <ProjectTeaser
        bg="#9d2054"
        reverse={props.reverse}
        title="unserwein.at"
        subtitle="Superseded in 2018 by the relaunched site"
        year="2014"
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
              <Feature>Content</Feature>
            </Features>
            <Features title="Features">
              <Feature>CMS</Feature>
              <Feature>Wordpress</Feature>
            </Features>
          </>
        }
        {...props}
      >
        <P>
          The second iteration of the unserwein website focused on the mobile
          experience of the product and was designed to provide regularly
          updated content in our blog. We featured some of our customers and
          blogged about news in the Austrian wine industry.
        </P>
        <P>
          In 2018, it was replaced by our new site that focused on the B2B side
          of our business.
        </P>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "2014-unserwein-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
