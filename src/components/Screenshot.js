import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from './Image';

const Screenshot = styled(Image).attrs({
  style: { display: 'block' },
  imgStyle: { objectFit: 'contain' },
})`
  max-width: 100%;
`;

const Laptop = styled(Image).attrs({
  style: { position: 'absolute' },
  imgStyle: { objectFit: 'contain' },
})`
  max-width: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Frame = styled.div`
  position: relative;
  padding: 4% 10% 8.5%;
`;

export function PureScreenshot(props) {
  if (!props.showFrame) return <Screenshot blur {...props} />;
  return (
    <Frame>
      <Laptop fluid={props.frame} />
      <Screenshot blur {...props} />
    </Frame>
  );
}

export default function FrameScreenshot(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          frame: file(name: { eq: "frame-macbook-pro" }) {
            childImageSharp {
              fluid(
                maxWidth: 853
                quality: 100
                traceSVG: { color: "#555", threshold: 220 }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
    >
      {data => (
        <PureScreenshot
          showFrame
          {...props}
          frame={data.frame.childImageSharp.fluid}
        />
      )}
    </StaticQuery>
  );
}
