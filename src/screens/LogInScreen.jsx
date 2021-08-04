import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="email" style={styles.input} />
        <TextInput value="password" style={styles.input} />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sing Up Here!</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FE3',
  },
});
export default LogInScreen;
