import React from 'react';
import { View, Pressable, Box, Image, Center, Text } from 'native-base';

const SearchCard = props => {
  const { productInfo, children, pressAction } = props;

  return (
    <>
      <Pressable onPress={pressAction}>
        {pressableEvents => (
          <Box {...styles.card(pressableEvents)}>
            <Image
              source={{ uri: productInfo['Image URL'] }}
              {...styles.cardProfile}
              key={productInfo['Image URL']}
            />

            <Center maxWidth="70%">
              <Text {...styles.cardText}>{productInfo.Product}</Text>
            </Center>
            <Center ml="auto">{children}</Center>
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
      bg: isPressed
        ? {
            linearGradient: {
              colors: ['shopadvisr.lightblue', 'shopadvisr.darkblue'],
              start: [0, 0],
              end: [1, 1],
            },
          }
        : 'muted.100',
      shadow: 5,
      p: 2,
      my: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
  },
  cardText: {
    pl: 3,
    noOfLines: 1,
    textAlign: 'center',
  },
  cardProfile: {
    borderRadius: 1000,
    alt: 'profile',
    size: 'sm',
  },
};

export default SearchCard;
