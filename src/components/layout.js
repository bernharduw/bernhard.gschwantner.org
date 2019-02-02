import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import './layout.css';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Bernhard Gschwantner, full stack engineer',
            },
            {
              name: 'keywords',
              content: 'React, React Native, JavaScript, Portfolio, Blog',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
