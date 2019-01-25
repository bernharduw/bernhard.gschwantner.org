import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function GschwantnerOrgTeaser(props) {
  return (
    <ProjectTeaser
      title="Personal site"
      subtitle="bernhard.gschwantner.org"
      href="https://bernhard.gschwantner.org"
      year="2018"
      bg="#CA336C"
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
            <Feature>React</Feature>
            <Feature>Static Site Rendering (Gatsby)</Feature>
            <Feature>Animations (unpublished)</Feature>
          </Features>
        </>
      }
      {...props}
    >
      <P>
        For my personal website, I strived for a playful, bold and bright style.
        I want this site to be a place where I can equally experiment, showcase
        what I do and publish thoughts and articles I care about.
      </P>
      <P>
        I hope this site will continuously grow and become a central hub to my
        professional work.
      </P>
    </ProjectTeaser>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "bernhard-gschwantner-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
