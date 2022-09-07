/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import Auth from './src/screens/Auth';
import {store} from './src/store';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => (
  <Provider store={store}>
    <Auth/>
  </Provider>
);

const styles = StyleSheet.create({});

export default App;
