import React, { useState, useContext, useCallback } from 'react';

const Ctx = React.createContext();

export const useCtx = () => useContext(Ctx);

const CtxProvider = ({ children }) => {

  const [shoppingCart, _setShoppingCart] = useState([]);
  const addToShoppingCart = useCallback(newItem => {
    _setShoppingCart(prevShoppingCart => [
      ...prevShoppingCart,
      newItem
    ]);
  }, [shoppingCart, _setShoppingCart]);
  const removeFromShoppingCart = useCallback(itemId => {
    _setShoppingCart(prevShoppingCart => {
      return prevShoppingCart.filter(item => item.id != itemId);
    });
  }, [shoppingCart, _setShoppingCart]);

  const defaultContext = {
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart
  };

  return (
    <Ctx.Provider value={defaultContext}>
      {children}
    </Ctx.Provider>
  );
};

export default CtxProvider;
