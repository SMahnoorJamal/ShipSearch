import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

function LoginScreen() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'orange' }}>

            <View style={{ height: '50%', alignItems: 'center', margin: 40, justifyContent: 'center', marginTop: '50%' }}>
                <Image source={require('../../Images/Logo.png')}
                    style={{ height: '80%', width: '40%', alignItems: 'center', justifyContent: 'center',  resizeMode: 'contain' }}>
                </Image>


                {/* <View style={{alignItems:'center', height: '100%',width:'80%', backgroundColor
    :'pink', marginTop: 29}}> */}

   <View style={{marginTop:-50,alignItems:'center'}}><Text style={{ color: 'green', fontSize: 30 }}>Login</Text>
    <View style={{marginTop: 20}}>
                <Text style={{ color: 'green', fontSize: 15 }}>Please Enter Your Credentials</Text>
                {/* </View> */}
    </View></View>
    
             



                {/* <View> */}

                <View style={{ width: '100%', height: '15%', borderRadius: 50, backgroundColor: 'white', marginTop: 30, }}>
                    <TextInput style={{ width: '100%', height: '15%', backgroundColor: 'white', marginTop: 19, }}></TextInput>
                </View>


                <View style={{ width: '100%', height: '15%', borderRadius: 50, backgroundColor: 'white', marginTop: 30, }}>

                    <TextInput placeholder="Login" style={{ width: '100%', height: '15%', marginTop: 20, backgroundColor: 'white' }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', height: '9%',  backgroundColor:'yellow',justifyContent: 'space-between', marginTop: 35,  width: '100%' }}>
                    <TouchableOpacity style={{ width: '45%',alignItems: 'center', justifyContent:'center', borderRadius: 20,height: 45, backgroundColor: 'green' }}>
                        <Text style={{color:'white',}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '45%', alignItems: 'center', justifyContent:'center', borderRadius: 20,height: 45, backgroundColor: 'green' }}>

                         <Text style={{color:'white'}}>Guest</Text>
                    </TouchableOpacity>



                </View>
                <View style={{ flexDirection: 'row', height: '0%', justifyContent: 'space-between', marginTop: 35,  width: '100%' }}>
                    

             

                    <View style={{marginTop: '10%', backgroundColor: 'purple'}}><Text>Don't have an account? SignUp</Text></View>
                </View>

               
            </View>


        </ScrollView>
    )

}
export default LoginScreen;