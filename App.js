import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
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
      <NativeRouter>
        <Layout>
          <Box bg="primary.500">
            Hello world
            <Link to="/">
              <Text>Home</Text>
            </Link>
            <Link to="/search">
              <Text>Search</Text>
            </Link>
            <Link to="/cart">
              <Text>Cart List</Text>
            </Link>
            <Link to="/settings">
              <Text>Settings</Text>
            </Link>
            <Link to="/id/123">
              <Text>Id 123</Text>
            </Link>
          </Box>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/id/:id" component={ItemPage} />
        </Layout>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
