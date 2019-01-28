import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PageSection from '../PageSection';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import Button from '../Button';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function LandhausAltlengbachTeaser(props) {
  return (
    <PageSection as="article" bg="#49592A" color="#fff" {...props}>
      <ProjectTeaser
        reverse={props.reverse}
        title="Landhaus Altlengbach website"
        subtitle="altlengbach.netlify.com"
        href="https://altlengbach.netlify.com"
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
              <Feature>Page Transitions</Feature>
            </Features>
          </>
        }
        {...props}
      >
        <P>
          A small website advertising a house on sale. On this site I
          experimented with custom page transitions and animations in
          conjunction with Gatsby, a static site renderer.
        </P>
        <Button color="#fff" hoverColor="#49592A" mt={2} mb={4} disabled>
          Read more (soon)
        </Button>
      </ProjectTeaser>
    </PageSection>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "landhaus-altlengbach-home2" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
