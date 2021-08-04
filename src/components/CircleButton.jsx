import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import { Feather } from '@expo/vector-icons';

const CircleButton = (props) => {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleBtton, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  circleBtton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBttonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};
CircleButton.defaultProps = {
  style: null,
  onPress: null,
};
export default CircleButton;
