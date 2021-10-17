/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useCallback } from 'react';

const Ctx = React.createContext();

export const useCtx = () => useContext(Ctx);

const CtxProvider = ({ children }) => {
  const [shoppingCart, _setShoppingCart] = useState([]);
  const addToShoppingCart = useCallback(
    newItem => {
      _setShoppingCart(prevShoppingCart => [...prevShoppingCart, newItem]);
    },
    [shoppingCart, _setShoppingCart],
  );
  const removeFromShoppingCart = useCallback(
    itemId => {
      _setShoppingCart(prevShoppingCart => {
        return prevShoppingCart.filter(item => item['Product ID'] !== itemId);
      });
    },
    [shoppingCart, _setShoppingCart],
  );
  const [searchResults, setSearchResults] = useState([
    // {
    //   Aisle: 3,
    //   Category: 'Food & Drink',
    //   Description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`',
    //   'Image URL': 'https://wallpaperaccess.com/full/317501.jpg',
    //   'Old Price': '',
    //   Price: '$69',
    //   Product: 'Lil soups with socket in a velety chicken food complement',
    //   'Product ID': '6969',
    //   'Product URL': 'http',
    // },
  ]);

  const [searchText, setSearchText] = useState('');

  const defaultContext = {
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    searchResults,
    setSearchResults,
    searchText,
    setSearchText,
  };

  return <Ctx.Provider value={defaultContext}>{children}</Ctx.Provider>;
};

export default CtxProvider;
