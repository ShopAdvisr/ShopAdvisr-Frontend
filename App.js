import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg="primary.500">Hello world</Box>
    </NativeBaseProvider>
  );
}
