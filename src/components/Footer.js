import React from 'react';
import { Box, Text } from 'rebass';
import Container from '../components/Container';
import { H2 } from '../components/Text';

export default function Footer() {
  return (
    <Box bg="#555" color="#fff" as="footer">
      <Container py={4}>
        <H2>Footer</H2>
        <Text>First nav item</Text>
        <Text>Second nav item</Text>
        <Text>Third nav item</Text>
      </Container>
    </Box>
  );
}
