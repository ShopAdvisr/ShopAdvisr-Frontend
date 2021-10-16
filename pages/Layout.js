import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';

const CartPage = ({ children }) => {
  return (
    <>
      <Box>
        Layout Page
        <main>{children}</main>
      </Box>
    </>
  );
};

export default CartPage;
