import React from 'react';
import { NativeBaseProvider, Box, Text, View } from 'native-base';
import { NativeRouter, Route } from 'react-router-native';
import Layout from 'root/pages/Layout';
import HomePage from 'root/pages/HomePage';
import SearchPage from 'root/pages/SearchPage';
import CartPage from 'root/pages/CartPage';
import SettingsPage from 'root/pages/SettingsPage';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default
  }
};

export default function App() {
  return (
    <NativeBaseProvider config={nativeBaseConfig}>
      <View>
        <NativeRouter>
          <Layout>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/settings" component={SettingsPage} />
          </Layout>
        </NativeRouter>
      </View>
    </NativeBaseProvider>
  );
}
