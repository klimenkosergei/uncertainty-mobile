import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const Option = ({ optionId, optionText, deleteOption }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{optionText}</Text>
    <TouchableHighlight
      onPress={() => deleteOption(optionId)}
      underlayColor='transparent'
    >
      <Text style={styles.linkText}>Remove</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 14,
    borderBottomColor: '#5B6178',
    borderBottomWidth: 1
  },
  itemText: {
    flex: 1,
    fontSize: 20,
    color: '#FFF'
  },
  linkText: {
    fontSize: 16,
    color: '#A5AFD7'
  }
});

Option.propTypes = {
  optionId: PropTypes.string.isRequired,
  optionText: PropTypes.string.isRequired,
  deleteOption: PropTypes.func.isRequired
};

export default Option;
