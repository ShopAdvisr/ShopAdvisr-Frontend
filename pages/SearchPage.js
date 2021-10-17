import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Heading,
  Text,
  Icon,
  IconButton,
  Box,
  Pressable,
} from 'native-base';
import SearchCard from 'root/components/SearchCard';
import SearchBar from 'root/components/SearchBar';
import ProductInfo from 'root/components/ProductInfo';
import Graph from 'root/components/Line-chart';
import { PlusIcon, CheckmarkIcon } from 'root/components/Icon';
import { useCtx } from 'root/utils/context';

const SearchPage = () => {
  const { shoppingCart, searchResults, addToShoppingCart } = useCtx();
  const dummySearchResults = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'bread' },
    { id: 3, name: 'milk' },
    { id: 4, name: 'celery' },
    { id: 5, name: 'tomatoes' },
    { id: 6, name: 'cucumbers' },
    { id: 7, name: 'beef' },
    { id: 8, name: 'yoghurt' },
    { id: 9, name: 'chips' },
    { id: 10, name: 'ramen' },
    { id: 11, name: 'cereal' },
    { id: 12, name: 'bread' },
    { id: 13, name: 'orz' },
  ];

  const [showProduct, _setShowProduct] = useState(false);
  const [clickedProductInfo, setClickedProductInfo] = useState({});
  const enableShowProduct = productInfo => {
    _setShowProduct(true);
    setClickedProductInfo(productInfo);
  };
  const disableShowProduct = () => _setShowProduct(false);

  const productAdded = id => {
    const result = shoppingCart.find(item => {
      return item['Product ID'] === id;
    });
    if (result) {
      return true;
    }
    return false;
  };

  return (
    <>
      <View {...styles.container}>
        <Heading size="xl">Search</Heading>
        <SearchBar />
        <ScrollView {...styles.scrollContainer}>
          {searchResults.map(productInfo => (
            <SearchCard
              m={4}
              productInfo={productInfo}
              key={productInfo['Product ID']}
              pressAction={() => enableShowProduct(productInfo)}>
              {productAdded(productInfo['Product ID']) ? (
                <IconButton
                  icon={
                    <Icon as={CheckmarkIcon} style={{ textAlign: 'center' }} />
                  }
                  borderRadius="full"
                />
              ) : (
                <IconButton
                  icon={<Icon as={PlusIcon} style={{ textAlign: 'center' }} />}
                  borderRadius="full"
                  onPress={() => addToShoppingCart(productInfo)}
                />
              )}
            </SearchCard>
          ))}
        </ScrollView>
        <ProductInfo
          showProduct={showProduct}
          disableShowProduct={disableShowProduct}
          productInfo={clickedProductInfo}>
          <Pressable
            onPress={() => {
              addToShoppingCart(clickedProductInfo);
              disableShowProduct();
            }}>
            {pressableEvents => (
              <Box {...styles.addToCartButton}>Add to Cart</Box>
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
  addToCartButton: {
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

export default SearchPage;
