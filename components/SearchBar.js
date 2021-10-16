import React from 'react';
import { View, Box, Text, Center, Input } from 'native-base';

const SearchBar = props => {
  const { itemName } = props;

  return (
    <>
      <Center>
        <Input
          {...styles.searchBar}
          variant="filled"
          placeholder="Ask me anything"
        />
      </Center>
    </>
  );
};

const styles = {
  searchBar: {
    w: '100%',
    borderRadius: '1000',
  },
};

export default SearchBar;
