import React from 'react';
import { NativeBaseProvider, View, Box, Pressable, Heading, Center, Text } from 'native-base';
import { NativeRouter, Route, Link, useHistory } from 'react-router-native';
import Wave from 'react-native-waveview';

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <View {...styles.container}>
        <View {...styles.waveContainer}>
          <Wave {...styles.wave}/>
        </View>
        <Center mt="60%">
          <Heading {...styles.title}>ShopAdvisr.</Heading>
        </Center>
        <Center mt="auto" mb="10%">
          <Pressable onPress={() => history.push('/search')} {...styles.startButtonContainer}>
            <Box {...styles.startButton}>Register</Box>
          </Pressable>
          <Pressable onPress={() => history.push('/search')} {...styles.startButtonContainer}>
            <Box {...styles.startButton}>Log In</Box>
          </Pressable>
          <Text {...styles.forgotText}>forgot your password?</Text>
        </Center>
      </View>
    </>
  );
};

const styles = {
  container: {
    h: "100%"
  },
  startButtonContainer: {
    width: "75%",
    m: 1,
  },
  startButton: {
    borderRadius: 1000,
    shadow: 3,
    py: 4,
    _text: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'muted.50'
    },
    bg: {
      linearGradient: {
        colors: ['#62c2ff', '#0087dc'],
        start: [0, 0],
        end: [1, 1]
      }
    },
  },
  forgotText: {
    color: '#1aa7ff',
    fontSize: 12,
  },
  waveContainer: {
    style: {
      transform: [{scaleY: -1}]
    }
  },
  wave: {
    style: {
      width: 200,
    },
    H: 500,
    waveParams: [
      {A: 80, T: 699, fill: '#62c2ff'},
      {A: 50, T: 1000, fill: '#0087dc'},
      {A: 20, T: 500, fill: '#1aa7ff'},
    ],
    animated: true
  },
  title: {
    size: 'xl',
    color: 'lightText',
  }
};


export default HomePage;
