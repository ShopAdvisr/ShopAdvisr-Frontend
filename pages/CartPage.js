import React, { useState } from 'react';
import { NativeBaseProvider, Box, Heading, ScrollView, Icon, IconButton } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { useCtx } from 'root/utils/context';
import SearchCard from 'root/components/SearchCard';
import ProductInfo from 'root/components/ProductInfo';
import { DeleteIcon } from 'root/components/Icon';

const CartPage = () => {
  const {
    shoppingCart,
    removeFromShoppingCart,
  } = useCtx();

  const [showProduct, _setShowProduct] = useState(false);
  const [clickedProductInfo, setClickedProductInfo] = useState({});
  const enableShowProduct = productInfo => {
    _setShowProduct(true);
    setClickedProductInfo(productInfo);
  };
  const disableShowProduct = () => _setShowProduct(false);

  return (
    <>
      <Heading size="xl">My Cart</Heading>
      <ScrollView {...styles.scrollContainer}>
        {shoppingCart.map(productInfo => (
          <SearchCard
            m={4}
            productInfo={productInfo}
            key={productInfo.id}
            pressAction={() => enableShowProduct(productInfo)}
          >
            <IconButton
              icon={<Icon as={DeleteIcon} style={{ textAlign: 'center' }} />}
              borderRadius="full"
              onPress={() => removeFromShoppingCart(productInfo.id)}
            />
          </SearchCard>
        ))}
      </ScrollView>
      <ProductInfo
        showProduct={showProduct}
        disableShowProduct={disableShowProduct}
        productInfo={clickedProductInfo}
      />
    </>
  );
};

const styles = {
  scrollContainer: {
    h: '85%',
    m: 0,
    _contentContainerStyle: {
      padding: 2,
    },
  },
};

export default CartPage;
