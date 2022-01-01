import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function Home() {
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  );

}

function Events() {
  return(
    <View>
      <Text>Events Screen</Text>
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
            <MaterialCommunityIcons name = "home" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen
        name = "Services"
        component = {Services}
        options = {{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "account" color={color} size={size} />
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
