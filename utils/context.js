/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useCallback } from 'react';

const Ctx = React.createContext();

export const useCtx = () => useContext(Ctx);

const CtxProvider = ({ children }) => {
  const [shoppingCart, _setShoppingCart] = useState([]);
<<<<<<< HEAD
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
  const [searchResults, setSearchResults] = useState([]);
=======
  const addToShoppingCart = useCallback(newItem => {
    _setShoppingCart(prevShoppingCart => [
      newItem,
      ...prevShoppingCart,
    ]);
  }, [shoppingCart, _setShoppingCart]);
  const removeFromShoppingCart = useCallback(itemId => {
    _setShoppingCart(prevShoppingCart => {
      return prevShoppingCart.filter(item => item.id != itemId);
    });
  }, [shoppingCart, _setShoppingCart]);
>>>>>>> cdd7704385b6706d9386545876a56609c92b8e54

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
