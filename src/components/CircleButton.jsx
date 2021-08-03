import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

const CircleButton = (props) => {
  const { children, style } = props;
  return (
    <View style={[styles.circleBtton, style]}>
      <Text style={styles.circleBttonLabel}>{children}</Text>
    </View>
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
  children: string.isRequired,
  style: shape(),
};
CircleButton.defaultProps = {
  style: null,
};
export default CircleButton;
