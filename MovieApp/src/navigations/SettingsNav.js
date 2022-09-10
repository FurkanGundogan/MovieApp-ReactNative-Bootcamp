import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';

//import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
//import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
//<Stack.Screen name="Theme Settings" component={ThemeSettingsScreen} />
//<Stack.Screen name="Profile Settings" component={ProfileSettingsScreen} />

const Stack = createStackNavigator();

const SettingsNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile Settings" component={ProfileSettingsScreen} />
          <Stack.Screen name="Theme Settings" component={ThemeSettingsScreen} />
          
          
        </Stack.Navigator>
      )
}

export default SettingsNav

const styles = StyleSheet.create({})