import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Container from '../components/Container';
import { H2, P } from '../components/Text';
import PageSection from './PageSection';

export default function Intro(props) {
  return (
    <PageSection bg="#fff" color="#333" {...props}>
      <Container py={4}>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={5}>
            <H2>I love creating things.</H2>
            <P>
              The web has changed our lives. I enjoy improving the status quo
              and making our lives better with web technologies. I create web
              apps, currently mostly with React, CouchDB and Node.js.
            </P>
            <P>
              In 2011 I co-founded Unser Wein, a product data exchange platform
              for the wine industry. Before that, I developed software for more
              than 20 years.
            </P>
          </Box>

          <Text textAlign="right" width={[1, 1 / 2]} p={5}>
            <H2>I help you innovate.</H2>
            <P>
              Whether you need a custom web app, you are looking for a small
              personal website or have other technical needs, let's talk!
            </P>
          </Text>
        </Flex>
      </Container>
    </PageSection>
  );
}
