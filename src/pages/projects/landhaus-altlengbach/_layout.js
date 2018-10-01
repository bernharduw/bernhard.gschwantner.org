import React from 'react';
import { Box, Flex } from 'rebass';

export const Container = props => (
  <Flex
    css={`
      flex-direction: column;
      @media screen and (orientation: landscape) {
        flex-direction: row;
      }
    `}
    {...props}
  />
);

const Col = props => (
  <Box
    px={[2, 3]}
    {...props}
    css={`
      width: 100%;

      @media screen and (orientation: landscape) {
        width: 50%;
      }
      ${props.css || ''};
    `}
  />
);
export const AsideColumn = props => (
  <Col
    py={4}
    css={`
      @media screen and (orientation: landscape) {
        background-color: #5a5d56;
        color: #fff;
      }
    `}
    {...props}
  />
);

export const IllustrationColumn = ({ children, ...props }) => (
  <Col
    pb={4}
    css={`
      background-color: #5a5d56;
      color: #fff;

      @media screen and (orientation: portrait) {
        position: fixed;
        bottom: 0;
        z-index: 2;
        padding-bottom: 0;
        padding-top: 0;
      }
    `}
    {...props}
  >
    <Box css="height: 100%;">{children}</Box>
  </Col>
);

export const TextColumn = props => <Col bg="#fff" {...props} />;
