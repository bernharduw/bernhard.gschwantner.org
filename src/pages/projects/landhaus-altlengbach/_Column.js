import React from 'react';
import { Box } from 'rebass';

const Col = props => <Box width={[1, 1 / 2]} px={[2, 3]} {...props} />;

export const IllustrationColumn = ({ children, ...props }) => (
  <Col bg="#555" color="#fff" py={4} {...props}>
    <Box css="height: 100%;">{children}</Box>
  </Col>
);

export const TextColumn = props => <Col bg="#fff" {...props} />;
