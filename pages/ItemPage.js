import React from 'react';
import { NativeBaseProvider, Box, View, Heading, Image } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { StyleSheet } from 'react-native';

const ItemPage = ({ id }) => {
  return (
    <>
      <View>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          style={styles.image}
          alt="Item"
          size="xl"
        />
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
