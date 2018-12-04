import React from 'react';
import { Box } from 'rebass';
import Waypoint from 'react-waypoint';

/**
 * Waypoint still uses innerRef, while Box makes use of ref via React.forwardRef().
 * This makes both compatible.
 * */
const WaypointAdapter = ({ children, innerRef }) => children(innerRef);

const TextSection = ({ onSection, section, children, css = '', ...props }) => (
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
              min-height: 90vh;
            }
            ${css};
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
