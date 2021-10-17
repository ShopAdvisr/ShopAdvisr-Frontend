/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useCallback } from 'react';

const Ctx = React.createContext();

export const useCtx = () => useContext(Ctx);

const CtxProvider = ({ children }) => {
  const [shoppingCart, _setShoppingCart] = useState([
    {
      'Aisle': 3,
      'Category': 'cat',
      'Description': 'desc',
      'Image URL': 'http',
      'Old Price': '',
      'Price': '$69',
      'Product': 'ur mom',
      'Product ID': '6969',
      'Product URL': 'http'
    }
  ]);
  const addToShoppingCart = useCallback(
    newItem => {
      _setShoppingCart(prevShoppingCart => [...prevShoppingCart, newItem]);
    },
    [shoppingCart, _setShoppingCart],
  );
  const removeFromShoppingCart = useCallback(
    itemId => {
      _setShoppingCart(prevShoppingCart => {
        return prevShoppingCart.filter(item => item.id != itemId);
      });
    },
    [shoppingCart, _setShoppingCart],
  );
  const [searchResults, setSearchResults] = useState([
    {
      'Aisle': 3,
      'Category': 'cat',
      'Description': 'desc',
      'Image URL': 'https://wallpaperaccess.com/full/317501.jpg',
      'Old Price': '',
      'Price': '$69',
      'Product': 'ur mom gay lmaooasodasdaslkdjasldjadlkasjdlksajalkdsjdklsjlkasjd',
      'Product ID': '6969',
      'Product URL': 'http'
    }
  ]);

  const defaultContext = {
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    searchResults,
    setSearchResults,
  };

  return <Ctx.Provider value={defaultContext}>{children}</Ctx.Provider>;
};

export default CtxProvider;
