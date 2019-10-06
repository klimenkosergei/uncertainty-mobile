import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import UncertaintyApp from './src/components/UncertaintyApp';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.statusBar} />
      <UncertaintyApp />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#333745',
    flex: 1
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  test: {
    paddingTop: StatusBar.currentHeight
  }
});

export default App;
