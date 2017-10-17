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

export default class Playground extends React.Component {
  state = { score: [] };

  oneUp = id => () => {
    const asBeenFind = this.state.score.find(wId => wId === id);

    if (!asBeenFind) {
      this.setState({ score: [...this.state.score, id] });
    }
  };
  render() {
    return (
      <View>
        <Pano source={asset('eleven-office.jpg')} />
        <View style={styles.tv.container}>
          <Text style={styles.tv.text}>
            Tu as trouvé {this.state.score.length} Wilson
          </Text>
          <View style={styles.tv.list}>
            {this.state.score.map((s, index) =>
              <Image
                key={index}
                source={asset('wilson.svg')}
                style={styles.tv.wilson}
              />
            )}
          </View>
        </View>
        <View style={styles.infos.container}>
          <View style={styles.infos.outer}>
            <Text style={styles.infos.inner}>?</Text>
          </View>
        </View>
        <VrButton
          onLongClick={this.oneUp(0)}
          style={{ ...styles.wilson.base, ...styles.wilson.position[0] }}
        />
        <VrButton
          onLongClick={this.oneUp(1)}
          style={{ ...styles.wilson.base, ...styles.wilson.position[1] }}
        />
        <VrButton
          onLongClick={this.oneUp(2)}
          style={{ ...styles.wilson.base, ...styles.wilson.position[2] }}
        />
      </View>
    );
  }
}

const styles = {
  tv: {
    container: {
      position: 'absolute',
      backgroundColor: '#000D',
      width: 0.86,
      height: 0.69,
      layoutOrigin: [0.5, 0.5],
      transform: [
        { translate: [-0.035, -0.25, 2] },
        { rotateX: 4 },
        { rotateY: -183 },
        { rotateZ: 1 }
      ]
    },
    text: {
      textAlign: 'center',
      color: '#ffec00'
    },
    list: { flexDirection: 'row' },
    wilson: { width: 0.15, height: 0.2 }
  },
  infos: {
    container: {
      position: 'absolute',
      width: 0.25,
      height: 0.25,
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [-1.53, 0.37, 2] }, { rotateY: -180 }],
      justifyContent: 'center',
      alignItems: 'center'
    },
    outer: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 0.09,
      width: 0.18,
      height: 0.18,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inner: {
      backgroundColor: '#ffec00',
      borderRadius: 0.06,
      color: '#000',
      width: 0.12,
      height: 0.12,
      fontSize: 0.1,
      fontWeight: '100',
      textAlign: 'center',
      textAlignVertical: 'center'
    }
  },
  wilson: {
    base: {
      position: 'absolute',
      borderRadius: 0.06,
      layoutOrigin: [0.5, 0.5]
    },
    position: [
      {
        width: 0.05,
        height: 0.17,
        transform: [{ translate: [1, -0.71, -0.09] }, { rotateY: 90 }]
      },
      {
        position: 'absolute',
        width: 0.15,
        height: 0.12,
        transform: [{ translate: [-0.73, -2.45, 1.23] }, { rotateX: 90 }]
      },
      {
        width: 0.35,
        height: 0.35,
        transform: [{ translate: [-3.8, -6, 0.64] }, { rotateX: 130 }]
      }
    ]
  }
};
