import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, View, Text } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';

const Layout = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Layout Page</Text>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

export default Layout;
