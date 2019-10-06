import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TextInput
} from 'react-native';
import uuidv4 from 'uuidv4';
import PropTypes from 'prop-types';

const AddOption = ({ addOption }) => {
  const [option, setOption] = useState('');

  const handleAddOption = e => {
    if (option.length > 0) {
      addOption({ id: uuidv4(), text: option });
      setOption('');
    } else {
      alert('Please enter the option');
    }
  };

  const onChangeText = text => setOption(text);

  return (
    <View style={styles.form}>
      <View style={styles.wrapper}>
        <TextInput
          value={option}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <TouchableHighlight
          onPress={handleAddOption}
          underlayColor='#693CAD'
          style={styles.cta}
        >
          <Text style={styles.ctaText}>Add Option</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 14
  },
  wrapper: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#A5AFD7',
    marginRight: 10,
    backgroundColor: '#333745',
    borderBottomWidth: 3,
    borderBottomColor: '#282B36'
  },
  cta: {
    padding: 10,
    backgroundColor: '#8357C5',
    borderBottomWidth: 3,
    borderBottomColor: '#693CAD'
  },
  ctaText: {
    color: '#FFF',
    fontSize: 16
  }
});

AddOption.propTypes = {
  addOption: PropTypes.func.isRequired
};

export default AddOption;
