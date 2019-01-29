import React from 'react';
import Container from '../components/Container';
import { H2, P } from '../components/Text';
import { Box } from 'rebass';
import Link from './Link';

export default function Footer() {
  return (
    <Box bg="#555" color="#fff" as="footer" pb={7}>
      <Container py={4}>
        <H2>Contact</H2>
        <P>
          Bernhard Gschwantner
          <br />
          Neustiftgasse 17/24
          <br />
          1070 Wien
        </P>
        <P>
          Email:{' '}
          <Link href="mailto:bernhard@gschwantner.org">
            bernhard@gschwantner.org
          </Link>
          <br />
          Mobile: <Link href="tel:+4369919713296">+43 699 19713296</Link>
        </P>
      </Container>
    </Box>
  );
}
