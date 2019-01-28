import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const StyledLink = styled(Link)`
  transition: color 0.3s ease-out, background 0.3s ease-out;
  border: 2px solid ${props => props.color};
  border-radius: 50em;
  font-weight: normal;
  :hover {
    background-color: ${props => props.color};
    color: ${props => props.hoverColor};
    text-decoration: none;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px;
  }
  :disabled {
    opacity: 0.65;
    :hover {
      background-color: transparent;
      color: currentColor;
    }
  }
  > svg {
    vertical-align: middle;
  }
`;

export default function Button(props) {
  return <StyledLink p={3} {...props} />;
}
