import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Model,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

import Playground from './Components/playground';

export default class FindWilson extends React.Component {
  render() {
    return <Playground />;
  }
}

AppRegistry.registerComponent('FindWilson', () => FindWilson);
