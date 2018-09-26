import React from 'react';
import { Box } from 'rebass';
import Waypoint from 'react-waypoint';

const WaypointAdapter = ({ children, innerRef }) => children(innerRef);

const TextSection = ({ onSection, section, children, ...props }) => (
  <Waypoint
    topOffset="30%"
    bottomOffset="50%"
    onEnter={
      onSection &&
      (waypointProps =>
        onSection(section, {
          type: 'enter',
          ...waypointProps,
          illustration: props,
        }))
    }
    onLeave={
      onSection &&
      (waypointProps =>
        onSection(section, {
          type: 'leave',
          ...waypointProps,
          illustration: props,
        }))
    }
  >
    <WaypointAdapter>
      {ref => (
        <Box
          ref={ref}
          py={4}
          css={`
            min-height: 50vh;
            @media screen and (orientation: landscape) {
              min-height: 100vh;
            }
          `}
          {...props}
        >
          {children}
        </Box>
      )}
    </WaypointAdapter>
  </Waypoint>
);

export default TextSection;
