import React, { useState } from 'react';
import { View, ScrollView, Heading, Text } from 'native-base';
import SearchCard from 'root/components/SearchCard';
import SearchBar from 'root/components/SearchBar';
import ProductInfo from 'root/components/ProductInfo';
import Graph from 'root/components/Line-chart';
import { useCtx } from 'root/utils/context';

const SearchPage = () => {
  const { shoppingCart, searchResults } = useCtx();
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

  return (
    <>
      <View {...styles.container}>
        <Heading size="xl">Search</Heading>
        <SearchBar />
        <ScrollView {...styles.scrollContainer}>
          {searchResults.map(result => (
            <SearchCard
              m={4}
              productInfo={result}
              key={result.id}
              enableShowProduct={enableShowProduct}
            />
          ))}
        </ScrollView>
        <ProductInfo
          showProduct={showProduct}
          disableShowProduct={disableShowProduct}
          productInfo={clickedProductInfo}
        />
      </View>
    </>
  );
};

const styles = {
  container: {},
  scrollContainer: {
    h: '85%',
    m: 0,
    _contentContainerStyle: {
      padding: 2,
    },
  },
};

export default SearchPage;
