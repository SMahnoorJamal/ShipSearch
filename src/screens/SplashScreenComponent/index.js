import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = () => {
  useEffect(() => {
    // Hide splash screen after component mounts
    SplashScreen.hide();
  }, []);
  return (
    // <View style={{backgroundColor:'green'}}></View>
    <View style={styles.container}>
      {/* <View style={{backgroundColor: 'red', height: '50%', width: '100%'}}>
        <Image
          source={require('../../Images/Splash1.png')} // Replace with your background image
          style={styles.backgroundImage}
        />
      </View> */}

      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../Images/LoginScreen.png')}>
        <View style={{marginTop: 90}}>
          <View
            style={{
              width: '70%',
              alignItem: 'center',
              marginLeft: 10,
              color: 'white',
              marginTop:'106%',
            }}>
            <Image source={require('../../Images/ShipScreenLogo.png')}></Image>

            <View style={{marginTop: 20, marginLeft:15}}>
              <Text style={{color: '#D5F9F4', width:'122%'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Text>

              <View
                style={{
                  margin: 30,
                  flexDirection: 'row',
                  width: 90,
                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <Text style={{color: 'white'}}>Get Started</Text>

                <Image
                  style={{marginTop: 7}}
                  source={require('../../Images/Line3.png')}></Image>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db', // Change the background color as needed
    borderRadius: 50, // Half of the button height to make it a half-round button
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff', // Change the text color as needed
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgrooudColor: 'black',
  },
  backgroundImage: {
    height: '120%',
    // wid
  },
  logoImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    // You can add additional styling for the logo image as needed
  },
});

export default SplashScreenComponent;
