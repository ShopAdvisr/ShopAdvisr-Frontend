import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, View, Text, Heading } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';

const Layout = ({ children }) => {
  return (
    <>
      <View style={styles.container} w="100%" h="100%">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/cart">
          <Text>Cart List</Text>
        </Link>
        <Link to="/cart">
          <Text>Settings</Text>
        </Link>
        <Link to="/id/123">
          <Text>Id 123</Text>
        </Link>

        <View bgColor="primary.100" m={4}>
          <Heading size="2xl">ShopAdvisr</Heading>
          {children}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Layout;
