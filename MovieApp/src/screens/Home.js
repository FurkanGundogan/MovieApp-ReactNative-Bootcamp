import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../store';
import {AsyncStorage} from 'react-native';
// eslint-disable-next-line no-console

const Home = () => {
  const dispatch=useDispatch()
  const user = useSelector(state => state?.user);
  console.log('user:', user);
  const logout = async () => {
    
    dispatch(setUser(null))
    await AsyncStorage.removeItem('@user');
  };
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
