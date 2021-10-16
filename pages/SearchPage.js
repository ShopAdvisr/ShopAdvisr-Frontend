import React from 'react';
import { View, ScrollView } from 'native-base';
import SearchCard from 'root/components/SearchCard';
import SearchBar from 'root/components/SearchBar';

const SearchPage = () => {
  const dummySearchResults = [
    'apple',
    'bread',
    'milk',
    'pee',
    'poo',
    'lmao',
    'cum',
    'lol',
    'orz',
  ];

  return (
    <>
      <View {...styles.container}>
        <SearchBar />
        <ScrollView h="4/5">
          {dummySearchResults.map(result => (
            <SearchCard itemName={result} key={result} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = {
  container: {}
};

export default SearchPage;
