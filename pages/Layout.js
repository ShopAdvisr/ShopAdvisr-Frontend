import React from 'react';
import {
  NativeBaseProvider,
  View,
  Text,
  Heading,
  Button,
  Spacer,
  Icon,
  IconButton,
  Center,
  Box
} from 'native-base';
import {
  NativeRouter,
  Route,
  Link,
  BackButton,
  useHistory,
} from 'react-router-native';
import { BackIcon, ShoppingCartIcon } from 'root/components/Icon';
import CtxProvider from 'root/utils/context';

const Layout = ({ children }) => {
  const history = useHistory();

  return (
    <>
      <Box {...styles.vanityBar}></Box>
      <View {...styles.container}>
        <BackButton />
        <View {...styles.headerContainer}>
          <Center>
            <IconButton
              onPress={() => history.goBack()}
              icon={<Icon as={BackIcon} />}
              borderRadius="full"
            />
          </Center>
          <Center>
            <IconButton
              onPress={() => history.push('/cart')}
              icon={<Icon as={ShoppingCartIcon} />}
              borderRadius="full"
            />
          </Center>
        </View>

        <CtxProvider>
          <View {...styles.viewContainer}>{children}</View>
        </CtxProvider>
      </View>
    </>
  );
};

const styles = {
  vanityBar: {
    backgroundColor: 'primary.500',
    h: 5,
    shadow: 9
  },
  container: {
    backgroundColor: 'white',
  },
  headerContainer: {
    mt: 2,
    mx: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewContainer: {
    p: 4,
  },
};

export default Layout;
