import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text, View, Picker, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Tab = createBottomTabNavigator();

function Home() {
  return(
    <View>
      <Text>Home Page</Text>
    </View>
  );

}

function Events() {
  return(
    <View>
     <Text>Local Events</Text>
      
    </View>
  );
  
}

function Services() {
  return(
    <View>
      <Text>Services Screen</Text>
    </View>
  );
  
}

function Profile() {
  return(
    <View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
