import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Landing from './src/screens/LandingPage/Landing';
import Form from './src/screens/FillOutForm/Form';
import Settings from './src/screens/Settings/Settings'

import { RhinoProvider } from 'react-rhino';

const store = {
    income: 0.00,
    wants: 0.00,
    needs: 0.00,
    savings: 0.00,
    dark_mode: "yo"
   }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RhinoProvider store={store}>
    <NavigationContainer screenOptions={styles.headers}>
      <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Tab.Screen name="Budget Breakdown" component={Landing} options={styles.homeIcon}/>
        <Tab.Screen name="Form" component={Form} options={styles.formIcon}/>
        <Tab.Screen name="Settings" component={Settings} options={styles.settingIcon}/>
      </Tab.Navigator>
    </NavigationContainer>
    </RhinoProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers: {
    headerStyle:{
      backgroundColor : 'WHITE',
    },
    headerTintColor: 'RED',
    headerTitleStyle:{
      fontWeight: 'bold',
    }
  },
  homeIcon: {
    tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
  },
  formIcon: {
    tabBarLabel: 'Form',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="form-select" color={color} size={size} />
          ),
  },
  settingIcon: {
    tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
  }
});
