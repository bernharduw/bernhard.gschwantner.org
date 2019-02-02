import React from 'react';
import { mix } from 'polished';

const timeColors = [
  { time: 8, color: '#6046bd' },
  { time: 16, color: '#74acdc' },
  { time: 19, color: '#d45e72' },
  { time: 24, color: '#4D94AA' },
];

function getTimeColor(date) {
  const currentTime = date.getHours() + date.getMinutes() / 60;
  const nextIndex = timeColors.findIndex(({ time }) => time > currentTime);
  const previousIndex = nextIndex === 0 ? timeColors.length - 1 : nextIndex - 1;
  const next = timeColors[nextIndex];
  const previous = timeColors[previousIndex];
  const mixFactor = Math.max(
    0,
    Math.min(1, (currentTime - previous.time) / (next.time - previous.time))
  );
  return mix(mixFactor, next.color, previous.color);
}

export default function TimeColor({ children, initialTime = new Date() }) {
  const [color, setColor] = React.useState(getTimeColor(initialTime));
  React.useEffect(() => {
    const interval = setInterval(
      () => setColor(getTimeColor(new Date())),
      600000 // Adjust the color every 10 minutes.
    );
    return () => clearInterval(interval);
  }, []);
  console.log(color, `${new Date().getHours()}:${new Date().getMinutes()}`);
  return children(color);
}
