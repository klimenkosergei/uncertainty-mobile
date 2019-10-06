import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title, description }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#20222B'
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF'
  },
  description: {
    fontSize: 16,
    color: '#A5AFD7'
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Header;
