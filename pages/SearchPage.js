import React from 'react';
import { View, ScrollView } from 'native-base';
import { SearchCard } from 'root/components/SearchCard';

const SearchPage = () => {
  const dummySearchResults = ['apple', 'bread', 'milk'];

  return (
    <>
      <View>
        <ScrollView>
          {dummySearchResults.map(result => (
            <SearchCard />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SearchPage;