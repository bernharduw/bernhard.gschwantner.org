import React from 'react';
import { Box } from 'rebass';
import Waypoint from 'react-waypoint';

const WaypointAdapter = ({ children, innerRef }) => children(innerRef);

const TextSection = ({ onSection, id, children, ...props }) => (
  <Waypoint
    bottomOffset="30%"
    topOffset="30%"
    onEnter={
      onSection &&
      (waypointProps =>
        onSection(id, { type: 'enter', ...waypointProps, illustration: props }))
    }
    onLeave={
      onSection &&
      (waypointProps =>
        onSection(id, { type: 'leave', ...waypointProps, illustration: props }))
    }
  >
    <WaypointAdapter>
      {ref => (
        <Box
          ref={ref}
          py={4}
          css={`
            min-height: 100vh;
          `}
          id={id}
          {...props}
        >
          {children}
        </Box>
      )}
    </WaypointAdapter>
  </Waypoint>
);

export default TextSection;
