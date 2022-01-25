import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Contact from "../screens/Contact";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};


const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, LoginStackNavigator, RegisterStackNavigator };