import { mix } from 'polished';

const timeColors = [
  { time: 6, color: '#e250db' },
  { time: 12, color: '#2196f3' },
  { time: 21, color: '#ea5971' },
  { time: 24, color: '#6046bd' },
];

export default function getTimeColor(date) {
  const currentTime = date.getHours() + date.getMinutes() / 60;
  const nextIndex = timeColors.findIndex(({ time }) => time > currentTime);
  const previousIndex = nextIndex === 0 ? timeColors.length - 1 : nextIndex - 1;
  const next = timeColors[nextIndex];
  const previous = timeColors[previousIndex];
  const mixFactor = (currentTime - previous.time) / (next.time - previous.time);
  return mix(mixFactor, next.color, previous.color);
}
