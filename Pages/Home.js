import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, Text, View, Picker, StyleSheet, ScrollView,Image, Alert, ActivityIndicator, Share, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import Carousel from 'react-native-snap-carousel';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {

    return(
      <View style = {styles.container}>
         
         <View style = {styles.headBanner}>
            <View style = {styles.companyNamePlacement}>
            <Text style = {styles.companyName}>Texas Stock Rally</Text>
            </View>
           </View>
       
  
        <View style = {styles.picContentView}>
        <Image style = {styles.carPics} source = {require('./assets/Cars/FordMustang.jpg')}/>
        </View>
  
        <View style = {styles.signUpLogin}>
          <Text>Email</Text>
          <TextInput style = {styles.loginInput}
          placeholder='name@example.com'>
            Email</TextInput>
  
          <Text>Password</Text>
          <TextInput style = {styles.loginInput}
          placeholder='Min. 8 characters'>
            Password</TextInput>
  
        </View>
  
        <View style = {styles.loginButton}>
  
          <View style = {styles.signUpButtonView}>
          <Button
            title="Sign Up!"
            color='#D8232F'
            onPress={() => Alert.alert('Signed Up!')}
          />
          </View>
          
          <View style = {styles.signUpButtonView}>
          <Button
            title="Login"
            color='#D8232F'
            onPress={() => Alert.alert('Logged In!')}
          />
          </View>
        
        </View>
  
        <View style = {styles.footerContent}>
         
        </View>
  
      </View>
    );
  }

  export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headBanner: {
      flex: 1,
      width: 400,
      backgroundColor: '#222222',
    },
    headBannerEvents: {
      flex: .3,
      width: 400,
      backgroundColor: '#222222',
    },
    eventBanner: {
      flex: .2,
      width: 400,
      backgroundColor: '#C4C4C4',
      flexDirection: 'row'
    },
    companyName: {
      color: 'white',
      fontFamily: 'serif',
      fontSize: 35
    },
    companyNamePlacement: {
      paddingLeft: 60,
      paddingTop: 15
    },
    localEvents: {
      color: 'white',
      fontFamily: 'serif',
      fontSize: 20
    },
    eventName: {
      color: '#000000',
      fontFamily: 'serif',
      fontSize: 20,
    },
    cityView: {
      flexDirection: 'row'
    },
    eventText: {
      fontWeight: "bold",
      fontSize: 18,
      fontFamily: 'sans-serif'
    },
    eventsProfilePost: {
      flexDirection: 'row'
    },
    picContentView: {
      flex: 2
    },
    carPics: {
      width: 400
    },
    profileCarView: {
      flex: 1
  
    },
    profileCar: {
      height: 200,
      width: 400
    },
    profilePictureView: {
      flex: .8,
      width: 400,
      backgroundColor: '#C4C4C4'
  
    },
    profilePicture: {
      height: 100,
      width: 100,
      borderRadius: 100/2
    },
    profileNamePictureView:{
        marginLeft: 150
    },
    profileOptionsView : {
      flexDirection: 'row',
      justifyContent: 'space-between',
     
    },
    profileSelection: {
      
    },
    eventsProfilePicture: {
      height: 50,
      width: 50,
      borderRadius: 50/2
    },
    eventsUserName: {
      fontSize: 25
    },
    eventFeed: {  
      flex: 1.4
    },
    eventDetails: {
  
    },
    carLoad: {
      backgroundColor: '#C4C4C4'
    },
    eventInfo: {
      backgroundColor: '#C4C4C4'
    },
    eventButton: {
      flex: .5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    choicesButton : {
      
    },
  
    signUpLogin: {
     flex: 1,
     marginTop: 100
    },
    loginInput: {
      backgroundColor: '#C9C9C9',
      color: '#000000',
      height: 40,
      width: 200,
    },
    loginButton: {
     flex: .5,
     flexDirection: 'row',
     marginTop: 100,
     justifyContent: 'space-between',
    },
    signUpButtonView: {
    paddingRight: 20,
    paddingBottom: 20,
    height: 100
    },
    localEventsInput: {
      backgroundColor: '#EFEEEE',
      color: '#000000',
      height: 51,
      width: 150,
      padding: 10
    },
    stateView: {
      marginTop: 30
      
    },
    footerContent: {
      flex: 2,
      height: 50,
      width: 400,
    },
    footerName: {
      color: 'white',
      fontSize: 25,
      paddingLeft: 120
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
    }
  });