import React from 'react';
import {
  View,
  Pressable,
  Box,
  Image,
  Center,
  Text,
} from 'native-base';

const SearchCard = props => {
  const {
    productInfo,
    children,
    pressAction,
  } = props;

  return (
    <>
      <Pressable onPress={pressAction}>
        {pressableEvents => (
          <Box {...styles.card(pressableEvents)}>
            <Image
              source={{ uri: 'https://wallpaperaccess.com/full/317501.jpg' }}
              {...styles.cardProfile}
            />

            <Center>
              <Text {...styles.cardText}>{productInfo.name}</Text>
            </Center>
            <Center ml="auto">
              {children}
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
      shadow: 5,
      p: 2,
      my: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
  },
  cardText: {
    pl: 3,
  },
  cardProfile: {
    borderRadius: 1000,
    alt: 'profile',
    size: 'sm',
  },
};

export default SearchCard;
