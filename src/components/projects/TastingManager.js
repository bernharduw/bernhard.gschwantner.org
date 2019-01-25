import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import FrameScreenshot from '../Screenshot';
import { P } from '../Text';
import { Feature, Features } from './Features';
import ProjectTeaser from './ProjectTeaser';

export default function GschwantnerOrgTeaser(props) {
  return (
    <ProjectTeaser
      title="unserwein Tasting Manager"
      subtitle="events.unserwein.at/de/events/vievinum-2018"
      href="https://events.unserwein.at/de/events/vievinum-2018"
      year="2015-2018"
      bg="#654C3A"
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
            <Feature>Single Page App</Feature>
            <Feature>React</Feature>
            <Feature>Redux</Feature>
            <Feature>CouchDB</Feature>
          </Features>
          <Features title="Art direction">
            <Feature>Alexander Ullrich</Feature>
          </Features>
        </>
      }
      {...props}
    >
      <P>
        I built and maintained a React-based Single Page App for our flagship
        product, the Tasting Manager.
      </P>
    </ProjectTeaser>
  );
}

const query = graphql`
  query {
    screenshot: file(name: { eq: "tasting-manager-home" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
