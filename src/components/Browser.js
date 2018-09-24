import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Box } from 'rebass';

const BrowserFrame = styled(Box)`
  display: block;
  position: relative;
  border: 2px solid #f0f0f0;
  border-radius: 3px;
  border-top-width: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const WindowControls = styled(Box)`
  top: -12px;
  left: 4px;
  // background-color: #ff706f;
  &,
  &::before,
  &::after {
    position: absolute;
    border-radius: 4px;
    padding: 4px;
    height: 4px;
    background-color: #c2c2c2;
  }
  &::before,
  &::after {
    content: ' ';
    display: block;
    top: 0;
  }
  &::before {
    left: 12px;
    // background-color: #fadc31;
  }
  &::after {
    left: 24px;
    // background-color: #5ce87a;
  }
`;

const AddressBar = styled(Box)`
  position: absolute;
  top: -13px;
  left: 48px;
  right: 12px;
  height: 10px;
  background-color: #fff;
  color: #ccc;
  font-size: 8px;
  line-height: 10px;
  padding: 0 8px;
  border-radius: 2px;
  font-family: sans-serif;
`;

const Browser = props => (
  <BrowserFrame as={props.href ? 'a' : props.to ? Link : 'div'} {...props}>
    <WindowControls />
    <AddressBar fontSize={0}>
      {props.href ||
        props.to ||
        props.url ||
        'https://bernhard.gschwantner.org'}
    </AddressBar>
    {props.children}
  </BrowserFrame>
);

export default Browser;
