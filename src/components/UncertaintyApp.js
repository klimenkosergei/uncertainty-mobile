import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

const UncertaintyApp = () => {
  const [options, setOptions] = useState([]);

  const handlePick = () => {
    if (options.length === 0) {
      alert('Please add an option first');
    } else {
      const randomNum = Math.floor(Math.random() * options.length);
      alert(options[randomNum].text);
    }
  };

  const handleAddOption = option => {
    setOptions([...options, option]);
  };

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handleDeleteOption = id => {
    setOptions(options.filter(option => option.id !== id));
  };

  return (
    <View>
      <Header
        title='Uncertainty'
        description='Put your life in hands of your device'
      />
      <View style={styles.container}>
        <Action handlePick={handlePick} />
        <View style={styles.widget}>
          <Options
            options={options}
            deleteOptions={handleDeleteOptions}
            deleteOption={handleDeleteOption}
          />
          <AddOption addOption={handleAddOption} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  widget: {
    backgroundColor: '#464B5E',
    borderRadius: 5,
    overflow: 'hidden'
  }
});

export default UncertaintyApp;
