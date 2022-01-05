import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, Text, View, Picker, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { StackRouter, withOrientation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { TextInput } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const carouselItems = require('./carousel.json')


const Home = () => {

  return(
    <View style = {styles.container}>
       
       <View style = {styles.headBanner}>
          <View style = {styles.companyNamePlacement}>
          <Text style = {styles.companyName}>Texas Stock Ralley</Text>
          </View>
         </View>
     

      <View style = {styles.picContent}>
        <Text>Side scrolling feature to show pictures</Text>
        <Text>Featured Events</Text>

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

      <Button  style = {styles.loginButtonSpace}
        title="Sign Up!"
        color='#D8232F'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button  style = {styles.loginButtonSpace}
        title="Login"
        color='#D8232F'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>

      <View style = {styles.footerContent}>
       
      </View>

    </View>
  );
}


const Events = () => {

  const [state, setState] = useState([

  ])

  const [city, setCity] = useState([
    
  ])
  return(
    <View  style = {styles.container}  >
     <View style = {styles.headBanner}>
          <View style = {styles.companyNamePlacement}>
          <Text style = {styles.companyName}>Texas Stock Ralley</Text>
          </View>
    </View>

    <View style = {styles.eventBanner}>
      <Text style = {styles.eventName}>Local Events</Text>
         
         <View style = {styles.localEventsViewLeft}> 
         <TextInput style = {styles.localEventsInput}
        placeholder='name@example.com'>
          City</TextInput>
         </View>

        <View style = {styles.localEventsViewRight}>
        <TextInput style = {styles.localEventsInput}
        placeholder='name@example.com'>
          State</TextInput>
        </View>
          
    </View>



    <View style = {styles.picContent}>
        <Text>Side scrolling feature to show pictures</Text>
        <Text>Featured Events</Text>

      </View>
      
    </View>
  );
  
}

const Services = () => {
  return(
    <View  style = {styles.container}  >
      <Text>Services Screen</Text>
    </View>
  );
  
}

const Profile = () => {
  return(
    <View  style = {styles.container}  >
      <Text>Profile Screen</Text>
    </View>
  );
  
}

function MyTabs() {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          tabBarActiveTintColor: '#e91e63'
        }
      }
    >
      <Tab.Screen
        name = "Home"
        component = {Home}
        options = {{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "home" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen
        name = "Events"
        component = {Events}
        options = {{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "car" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen
        name = "Services"
        component = {Services}
        options = {{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "hammer-wrench" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen
        name = "Profile"
        component = {Profile}
        options = {{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "account" color={color} size={size} />
          ),
        }}
        />
    </Tab.Navigator>
  );
}


export default function App() {
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

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
  eventBanner: {
    flex: .5,
    width: 400,
    backgroundColor: '#C4C4C4',
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
    fontSize: 25,
  },
  picContent: {
    flex: 2
  },
  signUpLogin: {
   flex: 2
  },
  loginInput: {
    backgroundColor: '#C9C9C9',
    color: '#000000',
    height: 40,
    width: 200,
  },
  loginButton: {
   flexDirection: 'row',
   paddingTop: 10,
  },
  loginButtonSpace: {
    
  },
  localEventsViewLeft: {

  },
  localEventsViewLeft: {

  },
  localEventsInput: {
    backgroundColor: '#EFEEEE',
    color: '#000000',
    height: 40,
    width: 100,
    marginLeft: 200,
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
  }
});
