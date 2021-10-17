import React from 'react';
import { NativeBaseProvider, extendTheme, Box, Text, View } from 'native-base';
import { NativeRouter, Route } from 'react-router-native';
import Layout from 'root/pages/Layout';
import HomePage from 'root/pages/HomePage';
import SearchPage from 'root/pages/SearchPage';
import CartPage from 'root/pages/CartPage';
import SettingsPage from 'root/pages/SettingsPage';
import CameraPage from 'root/pages/CameraPage';
import { LogBox } from 'react-native';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const themeConfig = extendTheme({
  colors: {
    shopadvisr: {
      blue: '#1aa7ff',
      darkblue: '#0087dc',
      lightblue: '#62c2ff'
    }
  }
});

console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  return (
    <NativeRouter>
      <NativeBaseProvider config={nativeBaseConfig} theme={themeConfig}>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/camera" component={CameraPage} />
        </Layout>
      </NativeBaseProvider>
    </NativeRouter>
  );
}
