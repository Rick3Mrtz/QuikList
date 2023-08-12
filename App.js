import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/components/Nav';
import TitleInput from './src/components/TitleInput';
import InputForm from './src/components/InputForm';

export default function App() {
  return (
    <>
    
    <View style={styles.container}>
      <View style={styles.appContainer}>
      <Nav />
      <TitleInput />
      <InputForm />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132a18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    maxWidth: 400,
    width: '100%',
    paddingHorizontal: 10,
    boxSizing: 'border-box',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});