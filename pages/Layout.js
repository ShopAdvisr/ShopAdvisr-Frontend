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
} from 'native-base';
import {
  NativeRouter,
  Route,
  Link,
  BackButton,
  useHistory,
} from 'react-router-native';
import { BackIcon } from 'root/components/Icon';
import CtxProvider from 'root/utils/context';

const Layout = ({ children }) => {
  const history = useHistory();

  return (
    <>
      <View {...styles.container} w="100%" h="100%">
        <BackButton />
        <View {...styles.headerContainer}>
          <Center>
            <IconButton
              onPress={() => history.goBack()}
              icon={<Icon as={BackIcon} />}
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
  container: {
    backgroundColor: 'white',
  },
  headerContainer: {
    mt: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  viewContainer: {
    p: 4,
  },
};

export default Layout;
