import React from 'react';
import { NativeBaseProvider, View, Box, Pressable } from 'native-base';
import { NativeRouter, Route, Link, useHistory } from 'react-router-native';

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <View {...styles.container}>
        <Box>Home Page</Box>
        <Pressable onPress={() => history.push('/search')}>
          <Box {...styles.startButton}>Start</Box>
        </Pressable>
      </View>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: "primary.500",
    h: "100%"
  },
  startButton: {
    borderRadius: 1000,
    p: 2,
    px: 10,
    _text: {
      textAlign: 'center',
      color: 'muted.50'
    },
    bg: {
      linearGradient: {
        colors: ['primary.300', 'violet.800'],
        start: [0, 0],
        end: [1, 1]
      }
    },
  },
};

export default HomePage;
