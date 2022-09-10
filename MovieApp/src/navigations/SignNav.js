import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const SignNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Sign In" component={SignInScreen} />
          <Stack.Screen options={{headerShown:false}} name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
      )
}

export default SignNav

const styles = StyleSheet.create({})