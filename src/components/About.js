import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Container from '../components/Container';
import { H2, P } from '../components/Text';
import PageSection from './PageSection';

export default function Intro(props) {
  return (
    <PageSection bg="#fff" color="#333" pt={0} pb={5} {...props}>
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={[4, 5]}>
            <H2>I love creating things.</H2>
            <P>
              The web has changed our lives. I enjoy improving the status quo
              and making our lives better through web technologies. I create web
              apps, currently mostly with React, CouchDB and Node.js,
              progressively enhancing a semantic, usable and accessible
              foundation.
            </P>
            <P>
              In 2011 I co-founded Unser Wein, a product data exchange platform
              for the wine industry. Before that, I developed software for more
              than 20 years.
            </P>
            <P>
              Outside of work, you can find me windsurfing or enjoying a good
              glass of wine.
            </P>
          </Box>

          <Text textAlign={['left', 'right']} width={[1, 1 / 2]} p={[4, 5]}>
            <H2>I help you innovate.</H2>
            <P>
              Whether you need a custom web app, you are looking for a small
              personal website or have other technical needs, let's talk! I'm
              always interested in helping you go the extra mile, especially on
              creative and innovative projects.
            </P>
          </Text>
        </Flex>
      </Container>
    </PageSection>
  );
}
