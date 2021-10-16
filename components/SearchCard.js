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
import { useHistory } from 'react-router-native';
import { PlusIcon } from 'root/components/Icon';

const SearchCard = props => {
  const { productInfo } = props;

  const history = useHistory();

  return (
    <>
      <Pressable
        onPress={() => {
          history.push(`/product/${productInfo.id}`);
        }}>
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
              <IconButton
                icon={<Icon as={PlusIcon} />}
                borderRadius="full"
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
