import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Container from '../components/Container';
import { H2, P } from '../components/Text';
import PageSection from './PageSection';

export default function Intro(props) {
  return (
    <PageSection {...props}>
      <Container id="about" py={4}>
        <H2>I love creating things.</H2>
        <Flex>
          <Box width={[1, 1 / 2]}>
            <P>
              I enjoy changing the status quo. I create web apps, mostly with
              React, CouchDB and NodeJS.
            </P>
            <P>
              In 2011 I co-founded Unser Wein, a product data exchange platform
              for the wine industry.
            </P>
          </Box>

          <Box width={[1, 1 / 2]}>(Donut charts here)</Box>
        </Flex>
        <H2>I help you innovate.</H2>
        <Text>
          If you are looking for a small personal website, you need a custom web
          or mobile app or have other technical needs, let's talk!
        </Text>
      </Container>
    </PageSection>
  );
}
