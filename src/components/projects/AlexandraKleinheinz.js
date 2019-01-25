import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function AlexandraKleinheinzTeaser(props) {
  return (
    <ProjectTeaser
      title="Alexandra Kleinheinz"
      subtitle="www.alexandrakleinheinz.at"
      href="https://www.alexandrakleinheinz.at"
      year="2017"
      bg="#FB7888"
      color="#000"
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
            <Feature>CMS</Feature>
          </Features>
          <Features title="Features">
            <Feature>GraphCMS</Feature>
          </Features>
        </>
      }
      {...props}
    >
      <P>
        Psychotherapist Alexandra Kleinheinz needed a website to present herself
        and her voluntary project Death Café. I tried to emphasize her positive
        energy with the concept and design of this website.
      </P>
    </ProjectTeaser>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "alexandra-kleinheinz-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
