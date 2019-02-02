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

export default class TimeColor extends React.PureComponent {
  state = { color: undefined };
  interval = undefined;

  componentDidMount() {
    this.setState({ color: getTimeColor(new Date('2017 18:00:00 GMT+01:00')) });
    // Update the color every 10 minutes.
    this.interval = setInterval(
      () => this.setState({ color: getTimeColor(new Date()) }),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(
      this.state.color,
      `${new Date().getHours()}:${new Date().getMinutes()}`
    );
    return this.props.children(this.state.color);
  }
}
