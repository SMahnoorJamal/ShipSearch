import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Slider from '../../component/Slider'
import Input from '../../component/Input';

function LoginScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center' }}
      style={{
        flex: 1
      }}>
      <View
        style={{
          flexDirection: 'row', 
          marginBottom: '0%', width: '75%',

        }}>



        <View
          style={{
            width: '100%', height: '100%'
          }}>

          <View
            style={{
              height: 100,
              width: '100%',
              alignItems: 'center',
              // margin: 40,
              justifyContent: 'center',
              marginTop: 250,
              marginBottom: 90,
            }}>
            <Image
              source={require('../../Images/Logo.png')}
              style={{
                height: 100,
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                resizeMode: 'contain',
              }}></Image>

            {/* <View style={{alignItems:'center', height: '100%',width:'80%', backgroundColor
    :'pink', marginTop: 29}}> */}

            <View style={{ marginTop: 39, alignItems: 'center' }}>
              <Text style={{ color: '#3D7A72', fontSize: 30 }}>Login</Text>
              <View style={{ marginTop: 5 }}>
                <Text style={{ color: '#3D7A72', fontSize: 12 }}>
                  Please Enter Your Credentials To login
                </Text>
                {/* </View> */}
              </View>
            </View>



            <View style={{ marginTop: 23 }}>
              <Input ></Input>
              <Input placeholder="Password"></Input>

            </View>


            {/* <Slider></Slider> */}

            <View>
              <ImageBackground source={require('../../Images/Rectangle1.png')}></ImageBackground>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '9%',
                justifyContent: 'space-between',
                marginTop: 35,
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  height: 45,
                  backgroundColor: '#3D7A72',
                }}>
                <Text style={{ color: 'white' }}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity omPress={{}}
                style={{
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  height: 45,
                  backgroundColor: '#3D7A72',
                }}>
                <Text style={{ color: 'white' }}>Guest</Text>
              </TouchableOpacity>
            </View>

            {/* <View
          style={{
            height: 30,
            backhroundColor: 'orange',

            justifyContent: 'space-between',
            marginTop: 35,
            width: '100%',
          }}> */}



          </View>

          <View style={{alignItems:'center'}}>
          <View 
          style={{
              marginTop: 200,
              flexDirection: 'row', 
            }}>
              <Text 
              style={{ textAlign: 'center' }}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text 
                style={{ color: '#4CCDBC' }}> Sign Up</Text>
              </TouchableOpacity>

              {/* </View>  */}
            </View>
            </View>
<View style={{alignItems:'center', marginTop: 9}}>
<Image style={{}}
            source={require('../../Images/Vector.png')}></Image>
</View>

        </View>


        <View style={{ width: '22.3%', alignItems: 'flex-end' }}>
          <Image style={{ height: 815, resizeMode: 'contain', width: '75%' }}
            source={require('../../Images/Rectangle1.png')}></Image>


        </View>

      </View>

    </ScrollView >
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   margin
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: 'white',
    //   width: '100%',
    //   height: '15%',
    // Add any other styling you need
  },
});
