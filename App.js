/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignUpScreen from './Screens/SignUpScreen';
import SectionsListScreen from './Screens/SectionsList';

const App = () => {


  return (
    <View style={{ flex: 1 }}>
      <SectionsListScreen />
    </View>

  );
};

export default App;
