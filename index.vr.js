import React from 'react';
import { AppRegistry } from 'react-vr';

import Playground from './Components/playground';

export default class FindWilson extends React.Component {
  render() {
    return <Playground />;
  }
}

AppRegistry.registerComponent('FindWilson', () => FindWilson);
