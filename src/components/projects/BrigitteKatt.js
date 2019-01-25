import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function BrigitteKattTeaser(props) {
  return (
    <ProjectTeaser
      title="Brigitte Katt"
      subtitle="www.brigitte-katt.at"
      href="https://www.brigitte-katt.at"
      year="2016"
      bg="#699C1B"
      color="#fff"
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
            <Feature>GraphCMS</Feature>
          </Features>
        </>
      }
      {...props}
    >
      <P>
        Brigitte approached me because she wanted a contact page for her
        psychotherapy business. I convinced her to use full-screen photography
        for building trust, relationship and emphathy, the cornerstones of her
        business.
      </P>
      <P>
        I also researched on light-weight CMS solutions for this small
        single-page site. I ultimately decided on GraphCMS, which turned out to
        be a great solution for that project.
      </P>
    </ProjectTeaser>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "brigitte-katt-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
