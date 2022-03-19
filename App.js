/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './odoo-order-notify-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import SplashScreen from './src/Screens/SplashScreen.js'
import {GlobalStack} from './src/Navigation/globalNavigation'

import configureStore from './src/store/configureStore';

const {store, persistor} = configureStore()

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [gateLifted, setGateLifted] = useState(false)
  const evaTheme = isDarkMode ? eva.dark : eva.light
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };
  const onBeforeLift = () => {
    // Take an action before the gate lifts
    setTimeout(() => { 
      setGateLifted(true) 
    }, 7000);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{...evaTheme, ...theme}}>
            <PersistGate loading={<SplashScreen/>} persistor={persistor} onBeforeLift={onBeforeLift}>
                
                { gateLifted ? (
                  <NavigationContainer>
                    <GlobalStack/>
                  </NavigationContainer>
                ) : <SplashScreen/>}
                {/* <SplashScreen/> */}
            </PersistGate>
          </ApplicationProvider>
    </Provider>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
