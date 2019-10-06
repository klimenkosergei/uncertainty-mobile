import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

const Action = ({ handlePick }) => (
  <View>
    <TouchableHighlight
      style={styles.button}
      onPress={handlePick}
      underlayColor='#693CAD'
    >
      <Text style={styles.buttonText}>What Should I Do?</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8357C5',
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: '#693CAD',
    borderBottomWidth: 6
  },
  buttonText: {
    color: '#FFF',
    fontSize: 32,
    textAlign: 'center'
  }
});

Action.propTypes = {
  handlePick: PropTypes.func.isRequired
};

export default Action;
