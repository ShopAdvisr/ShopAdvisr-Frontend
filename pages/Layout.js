import React from 'react';
import { StyleSheet } from 'react-native';
import {
  NativeBaseProvider,
  View,
  Text,
  Heading,
  Button,
  Spacer,
  Pressable,
} from 'native-base';
import {
  NativeRouter,
  Route,
  Link,
  BackButton,
  useHistory,
} from 'react-router-native';
import { BackIcon } from 'root/components/Icon';

const Layout = ({ children }) => {
  const history = useHistory();
  return (
    <>
      <View style={styles.container} w="100%" h="100%">
        <BackButton />
        <Pressable onPress={() => history.goBack()}>
          <BackIcon m={1} />
        </Pressable>

        <View m={4} p={4}>
          <Heading size="2xl">ShopAdvisr</Heading>
          <Spacer />
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
