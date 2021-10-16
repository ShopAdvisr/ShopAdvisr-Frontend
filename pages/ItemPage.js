import React from 'react';
import {
  NativeBaseProvider,
  Box,
  View,
  Heading,
  Image,
  VStack,
  HStack,
  Center,
  Text,
} from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { StyleSheet } from 'react-native';

const ItemPage = ({ id }) => {
  return (
    <>
      <View>
        <VStack space={4}>
          <Center bg="muted.100" rounded="md" shadow={3}>
            <HStack alignItems="center" space={10}>
              <Center w={'1/3'}>
                <Image
                  source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  style={styles.image}
                  alt="Item"
                  size="xl"
                />
              </Center>
              <Center>
                <Text>peepee</Text>
              </Center>
            </HStack>
          </Center>
        </VStack>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    minWidth: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: 50,
  },
});

export default ItemPage;
