import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, View, Text, Heading, Button } from 'native-base';
import {
  NativeRouter,
  Route,
  Link,
  BackButton,
  useHistory,
} from 'react-router-native';

const Layout = ({ children }) => {
  const history = useHistory();
  return (
    <>
      <View style={styles.container} w="100%" h="100%">
        <BackButton />
        <Button onPress={() => history.goBack()} />
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/search">
          <Text>Search</Text>
        </Link>
        <Link to="/cart">
          <Text>Cart List</Text>
        </Link>
        <Link to="/settings">
          <Text>Settings</Text>
        </Link>
        <Link to="/id/123">
          <Text>Id 123</Text>
        </Link>

        <View bgColor="primary.100" m={4} p={4}>
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
