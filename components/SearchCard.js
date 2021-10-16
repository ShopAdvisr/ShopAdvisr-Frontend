import React from 'react';
import { View, Pressable, Box, Text } from 'native-base';

const SearchCard = props => {
  const { itemName } = props;

  return (
    <>
      <Pressable>
        {pressableEvents => (
          <Box {...styles.card(pressableEvents)}>
            <Text>{itemName}</Text>
          </Box>
        )}
      </Pressable>
    </>
  );
};

const styles = {
  card: ({ isPressed }) => {
    return {
      borderRadius: 1000,
      bg: isPressed ? 'primary.500' : 'muted.100',
      shadow: 3,
      p: 5,
      my: 5
    }
  }
};

export default SearchCard;
