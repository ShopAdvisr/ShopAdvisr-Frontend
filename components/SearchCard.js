import React from 'react';
import { View, Box, Text } from 'native-base';

const SearchCard = props => {
  const { itemName } = props;

  return (
    <>
      <Box {...styles.card}>
        <Text>{itemName}</Text>
      </Box>
    </>
  );
};

const styles = {
  card: {
    borderRadius: 1000,
    bg: 'muted.100',
    shadow: 3,
    p: 5,
    my: 1,
  },
};

export default SearchCard;
