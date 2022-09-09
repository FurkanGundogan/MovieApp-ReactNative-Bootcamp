import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSearch from 'react-native-vector-icons/FontAwesome';
//import useTheme from '../hooks/useTheme';
import Home from '../screens/Home';
import Account from '../screens/Account';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
 // const {theme} = useTheme();
 const theme= ""
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: theme?.tabBar,
        tabBarItemStyle: theme?.tabBarItem,
        tabBarInactiveTintColor: theme?.type === 'dark' ? 'white' : 'black',
        tabBarActiveTintColor: theme?.type === 'dark' ? 'orange' : '#003af7',
      }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-reply-text"
              size={28}
              style={theme?.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <IconSearch
              name="search"
              size={28}
              style={theme?.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              size={28}
              style={theme?.tabBarIcon}
            />
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});