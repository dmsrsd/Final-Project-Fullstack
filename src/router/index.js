import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Akun,
  PulsaPage,
  PaketDataPage,
  Login,
  Register,
  ProfilePage,
  EditProfile,
  TestPage,
} from '../pages';
import {BottomNavigator, MyTopNavigator} from '../components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const TopUpScreen = () => {
  return (
    <TopTab.Navigator tabBar={props => <MyTopNavigator {...props} />}>
      <TopTab.Screen name="Pulsa" component={PulsaPage} />
      <TopTab.Screen name="Paket Data" component={PaketDataPage} />
    </TopTab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpScreen"
        component={TopUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TestPage"
        component={TestPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
