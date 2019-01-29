import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from '../Features';
import ProjectTeaser from './ProjectTeaser';

export default function EventDirectoryTeaser(props) {
  return (
    <PageSection as="article" bg="#4D94AA" color="#fff" {...props}>
      <ProjectTeaser
        bg="#4D94AA"
        reverse={props.reverse}
        title="Event directory for wine tastings"
        subtitle="Work in progress – unpublished yet"
        year="2019"
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
          </>
        }
      >
        <P>
          Following our strategic partnership with Bottlebooks, we needed an
          updated directory for the upcoming wine events. This design is based
          on the future style guide of Bottlebooks and will also be the basis
          for individual client solutions.
        </P>
        <P>
          I also created a serverless GraphQL API, so the site performance will
          adapt dynamically to the large peak demands of an event microsite.
        </P>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "bottlebooks-jurtschitsch" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
