import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';

import Option from './Option';

const Options = ({ options, deleteOptions, deleteOption }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headerText}>Your Options</Text>
      <TouchableHighlight onPress={deleteOptions} underlayColor='transparent'>
        <Text style={styles.linkText}>Remove All</Text>
      </TouchableHighlight>
    </View>
    {options.length === 0 && (
      <View style={styles.info}>
        <Text style={styles.infoText}>No options yet.</Text>
      </View>
    )}
    <FlatList
      data={options}
      renderItem={({ item }) => (
        <Option
          optionId={item.id}
          optionText={item.text}
          deleteOption={deleteOption}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3C4251',
    padding: 14
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A5AFD7'
  },
  linkText: {
    fontSize: 16,
    color: '#A5AFD7'
  },
  info: {
    paddingVertical: 25,
    paddingHorizontal: 14,
    borderBottomColor: '#5B6178',
    borderBottomWidth: 1
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#A5AFD7'
  }
});

Options.propTypes = {
  options: PropTypes.array.isRequired,
  deleteOptions: PropTypes.func.isRequired,
  deleteOption: PropTypes.func.isRequired
};

export default Options;
