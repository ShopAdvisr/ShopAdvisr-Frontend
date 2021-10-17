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
  Box,
} from 'native-base';
import {
  NativeRouter,
  Route,
  Link,
  BackButton,
  useHistory,
  withRouter,
} from 'react-router-native';
import { BackIcon, ShoppingCartIcon, SettingsIcon } from 'root/components/Icon';
import CtxProvider from 'root/utils/context';

const Layout = ({ children, location }) => {
  const history = useHistory();

  return (
    <View {...styles.container}>
      {location?.pathname != '/' && (
        <View>
          <Box {...styles.vanityBar} />
          <View>
            <BackButton />
            <View {...styles.headerContainer}>
              <Center mr="auto">
                <IconButton
                  onPress={() => history.goBack()}
                  icon={<Icon as={BackIcon} />}
                  borderRadius="full"
                />
              </Center>
              {location?.pathname != '/cart' && (
                <Center>
                  <IconButton
                    onPress={() => history.push('/cart')}
                    icon={<Icon as={ShoppingCartIcon} />}
                    borderRadius="full"
                  />
                </Center>
              )}
              <Center>
                <IconButton
                  icon={<Icon as={SettingsIcon} />}
                  borderRadius="full"
                />
              </Center>
            </View>
          </View>
        </View>
      )}

      <CtxProvider>
        <View {...styles.viewContainer}>{children}</View>
      </CtxProvider>
    </View>
  );
};

const styles = {
  vanityBar: {
    bg: {
      linearGradient: {
        colors: ['shopadvisr.lightblue', 'shopadvisr.darkblue'],
        start: [0, 0],
        end: [1, 1],
      },
    },
    h: 5,
    shadow: 9,
  },
  container: {
    backgroundColor: 'white',
    m: 0,
    p: 0,
    w: '100%',
    h: '100%',
  },
  headerContainer: {
    mt: 2,
    mx: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewContainer: {
    p: 0,
  },
};

export default withRouter(Layout);
