import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Box, Text } from 'native-base';
import theme from 'root/themes';

const SearchCard = props => {
  const { itemName } = props;

  return (
    <>
      <Box style={styles.boxContainer}>
        <Text>{itemName}</Text>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: theme.gray['500'],
    borderRadius: 25,
    padding: 10,
    paddingTop: 40,
    paddingBottom: 40,
    margin: 3,
  }
});

export default SearchCard;
