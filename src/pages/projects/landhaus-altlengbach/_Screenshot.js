import React from 'react';
import Image from 'gatsby-image';

const Screenshot = ({ image: { childImageSharp } = {}, ...rest }) => (
  <Image {...childImageSharp} {...rest} />
);

export default Screenshot;
