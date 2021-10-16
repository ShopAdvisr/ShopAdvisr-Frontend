import React from 'react';
import { View, ScrollView } from 'native-base';
import SearchCard from 'root/components/SearchCard';

const SearchPage = () => {
  const dummySearchResults = ['apple', 'bread', 'milk', 'pee', 'poo', 'lmao', 'cum', 'lol', 'orz'];

  return (
    <>
      <View>
        <ScrollView>
          {dummySearchResults.map(result => (
            <SearchCard itemName={result} key={result}/>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SearchPage;
