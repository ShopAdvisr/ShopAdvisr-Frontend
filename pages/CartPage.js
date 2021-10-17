import React, { useState } from 'react';
import {
  NativeBaseProvider,
  View,
  Box,
  Heading,
  ScrollView,
  Icon,
  IconButton,
  Pressable,
} from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { useCtx } from 'root/utils/context';
import SearchCard from 'root/components/SearchCard';
import ProductInfo from 'root/components/ProductInfo';
import { DeleteIcon } from 'root/components/Icon';

const CartPage = () => {
  const { shoppingCart, removeFromShoppingCart } = useCtx();

  const [showProduct, _setShowProduct] = useState(false);
  const [clickedProductInfo, setClickedProductInfo] = useState({});
  const enableShowProduct = productInfo => {
    _setShowProduct(true);
    setClickedProductInfo(productInfo);
  };
  const disableShowProduct = () => _setShowProduct(false);

  return (
    <>
      <View {...styles.container}>
        <Heading size="xl">My Cart</Heading>
        <ScrollView {...styles.scrollContainer}>
          {shoppingCart.map(productInfo => (
            <SearchCard
              m={4}
              productInfo={productInfo}
              key={productInfo.id}
              pressAction={() => enableShowProduct(productInfo)}>
              <IconButton
                icon={<Icon as={DeleteIcon} style={{ textAlign: 'center' }} />}
                borderRadius="full"
                onPress={() =>
                  removeFromShoppingCart(productInfo['Product ID'])
                }
              />
            </SearchCard>
          ))}
        </ScrollView>
        <ProductInfo
          showProduct={showProduct}
          disableShowProduct={disableShowProduct}
          productInfo={clickedProductInfo}>
          <Pressable
            onPress={() => {
              removeFromShoppingCart(clickedProductInfo['Product ID']);
              disableShowProduct();
            }}>
            {pressableEvents => (
              <Box {...styles.removeFromCartButton}>Remove</Box>
            )}
          </Pressable>
        </ProductInfo>
      </View>
    </>
  );
};

const styles = {
  container: {
    p: 4,
  },
  scrollContainer: {
    h: '85%',
    m: 0,
    _contentContainerStyle: {
      padding: 2,
    },
  },
  removeFromCartButton: {
    borderRadius: 1000,
    p: 2,
    px: 10,
    _text: {
      textAlign: 'center',
      color: 'muted.50',
    },
    bg: {
      linearGradient: {
        colors: ['shopadvisr.lightblue', 'shopadvisr.darkblue'],
        start: [0, 0],
        end: [1, 1],
      },
    },
  },
};

export default CartPage;
