import React from 'react';
import { View, Pressable, Box, Image, Center, Text } from 'native-base';
import { PlusIcon } from 'root/components/Icon';

const SearchCard = props => {
  const { itemName } = props;

  return (
    <>
      <Pressable
        onPress={() => {
          console.log('button pressed');
        }}>
        {pressableEvents => (
          <Box {...styles.card(pressableEvents)}>
            <Image
              source={{ uri: 'https://wallpaperaccess.com/full/317501.jpg' }}
              {...styles.cardProfile}
            />
            <Center>
              <Text {...styles.cardText}>{itemName}</Text>
            </Center>
            <Center ml="auto">
              <PlusIcon />
            </Center>
          </Box>
        )}
      </Pressable>
    </>
  );
};

const styles = {
  card: ({ isPressed }) => {
    return {
      borderRadius: 100,
      bg: isPressed ? 'primary.500' : 'muted.100',
      shadow: 3,
      p: 2,
      my: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
  },
  cardText: {
    fontWeight: 'bold',
    pl: 3,
  },
  cardProfile: {
    borderRadius: 1000,
    alt: 'profile',
    size: 'sm',
  },
};

export default SearchCard;
