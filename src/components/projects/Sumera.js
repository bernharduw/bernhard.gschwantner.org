import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { PureScreenshot } from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function SumeraTeaser(props) {
  return (
    <ProjectTeaser
      title="Sumera Quiz app"
      subtitle="unpublished"
      year="2016"
      bg="#91168C"
      color="#fff"
      boxed
      picture={
        <StaticQuery query={query}>
          {data => (
            <PureScreenshot
              css="max-height: 60vh;"
              fluid={data.mobile.childImageSharp.fluid}
            />
          )}
        </StaticQuery>
      }
      pictureWidth={[1, 1 / 3]}
      textWidth={[1, 2 / 3]}
      features={
        <>
          <Features title="Roles">
            <Feature>Concept</Feature>
            <Feature>UX</Feature>
            <Feature>Programming</Feature>
          </Features>
          <Features title="Features">
            <Feature>React Native</Feature>
            <Feature>React</Feature>
            <Feature>API</Feature>
          </Features>
          <Features title="Design">
            <Feature>Feinblick</Feature>
          </Features>
        </>
      }
      {...props}
    >
      <P>
        I created the quiz game mobile app, server and backend interfaces for
        the startup Sumera.
      </P>
    </ProjectTeaser>
  );
}

const query = graphql`
  query {
    mobile: file(name: { eq: "sumera-dashboard-iphone" }) {
      childImageSharp {
        fluid(maxWidth: 640, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
