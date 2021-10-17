import React from 'react';
import {
  View,
  Pressable,
  Box,
  Icon,
  IconButton,
  Image,
  Center,
  Text,
} from 'native-base';
import { PlusIcon } from 'root/components/Icon';
import { useCtx } from 'root/utils/context';

const SearchCard = ({ productInfo, enableShowProduct }) => {
  const { addToShoppingCart } = useCtx();

  return (
    <>
      <Pressable onPress={() => enableShowProduct(productInfo)}>
        {pressableEvents => (
          <Box {...styles.card(pressableEvents)}>
            <Image
              source={{ uri: productInfo['Image URL'] }}
              {...styles.cardProfile}
            />

            <Center>
              <Text {...styles.cardText}>{productInfo.Product}</Text>
            </Center>
            <Center ml="auto">
              <IconButton
                icon={<Icon as={PlusIcon} style={{ textAlign: 'center' }} />}
                borderRadius="full"
                onPress={() => addToShoppingCart(productInfo)}
              />
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
