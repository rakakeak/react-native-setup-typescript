import {navigationRef} from '@navigations/functions';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/routes';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle="dark-content" backgroundColor={'red'} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
