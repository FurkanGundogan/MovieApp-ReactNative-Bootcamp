import { StyleSheet} from 'react-native'
import React from 'react'


import BottomNav from './BottomNav';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown:false
          }} name="BottomNav" component={BottomNav} />
          <Stack.Screen name="MovieDetails" component={MovieDetailScreen} 
          options={{title:"Movie Details"}}
          />
        </Stack.Navigator>
      )
}

export default HomeStackNav

const styles = StyleSheet.create({})