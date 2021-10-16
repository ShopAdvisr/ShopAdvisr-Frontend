import React, { useState } from 'react';
import { View, ScrollView } from 'native-base';
import SearchCard from 'root/components/SearchCard';
import SearchBar from 'root/components/SearchBar';
import ProductInfo from 'root/components/ProductInfo';
import Graph from 'root/components/Line-chart';

const SearchPage = () => {
  const dummySearchResults = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'bread' },
    { id: 3, name: 'milk' },
    { id: 4, name: 'pee' },
    { id: 5, name: 'poo' },
    { id: 6, name: 'lmao' },
    { id: 7, name: 'cum' },
    { id: 8, name: 'lol' },
    { id: 9, name: 'orz' },
    { id: 10, name: 'orz' },
    { id: 11, name: 'orz' },
    { id: 12, name: 'orz' },
    { id: 13, name: 'orz' },
  ];

  const [showProduct, _setShowProduct] = useState(false);
  const [clickedProductInfo, setClickedProductInfo] = useState({});
  const enableShowProduct = productInfo => {
    _setShowProduct(true);
    setClickedProductInfo(productInfo);
  }
  const disableShowProduct = () => _setShowProduct(false);

  return (
    <>
      <View {...styles.container}>
        <SearchBar />
        <ScrollView h="92%" p={2} _contentContainerStyle={{ padding: 4 }}>
          {dummySearchResults.map(result => (
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
    h: '92%',
    p: 2,
    bgColor: 'teal.100',
    m: 0,
    px: 4,
  },
};

export default SearchPage;
