import React from 'react';
import { NativeBaseProvider, Box, Text, View } from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native';
import Layout from 'root/pages/Layout';
import HomePage from 'root/pages/HomePage';
import SearchPage from 'root/pages/SearchPage';
import CartPage from 'root/pages/CartPage';
import SettingsPage from 'root/pages/SettingsPage';
import ItemPage from 'root/pages/ItemPage';

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <NativeRouter>
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={SearchPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/id/:id" component={ItemPage} />
          </Layout>
        </NativeRouter>
      </View>
    </NativeBaseProvider>
  );
}
