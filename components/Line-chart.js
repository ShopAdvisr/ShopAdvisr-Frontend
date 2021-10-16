import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { LineChart, Grid } from 'react-native-svg-charts';

class GradientLineExample extends React.Component {
  render() {
    const data = this.props.data.slice(2).slice(-30);

    const Gradient = () => (
      <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
          <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
          <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
        </LinearGradient>
      </Defs>
    );

    return (
      <LineChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{
          strokeWidth: 2,
          stroke: 'url(#gradient)',
        }}>
        <Gradient />
      </LineChart>
    );
  }
}

export default GradientLineExample;
