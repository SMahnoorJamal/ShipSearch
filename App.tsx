/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import  LoginScreen from './src/screens/LoginScreen/index';
import { StyleSheet } from 'react-native';
import SplashScreenComponent from './src/screens/SplashScreenComponent';
import CargoScreen from './src/screens/CargoScreen';
//import TabBarScreen from './src/screens/TabBarScreen';
// import CargoScreen from './src/screens/CargoScreen';
// Assume LoginScreen is a functional component
interface LoginScreenProps {
  // Define any props needed by LoginScreen
}

const App= () => {
  const [isSplashVisible, setSplashVisible] = useState(true);
  useEffect(() => {
    // Hide splash screen after a delay (e.g., 2000 milliseconds)
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);
 
  return isSplashVisible ? <SplashScreenComponent /> :
 
//  <Provider store={store}>
  // <LoginScreen/>
  //  <TabBarScreen/>
  <CargoScreen/>
//  <SplashScreenComponent/>
// </Provider>
};

const styles = StyleSheet.create({
  // Your styles here
});

export default App;