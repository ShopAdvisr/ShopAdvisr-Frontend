import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import { useCtx } from 'root/utils/context';

const CartPage = () => {
  const {
    shoppingCart 
  } = useCtx();
  console.debug('shoppingCart', shoppingCart);

  return (
    <>
      <Box>Cart Page</Box>
    </>
  );
};

export default CartPage;
