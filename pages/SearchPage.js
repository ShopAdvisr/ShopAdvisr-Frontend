import React, { useState } from 'react';
import { View, ScrollView } from 'native-base';
import SearchCard from 'root/components/SearchCard';
import SearchBar from 'root/components/SearchBar';
import ProductInfo from 'root/components/ProductInfo';

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
  ];

  const [showProduct, setShowProduct] = useState(false);

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
              setShowProduct={setShowProduct}
            />
          ))}
        </ScrollView>
        <ProductInfo
          showProduct={showProduct}
          setShowProduct={setShowProduct}
        />
      </View>
    </>
  );
};

const styles = {
  container: {},
};

export default SearchPage;
