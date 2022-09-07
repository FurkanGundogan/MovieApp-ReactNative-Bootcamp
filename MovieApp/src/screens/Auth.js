import {Alert, StyleSheet, Text, View} from 'react-native';

import {AsyncStorage} from 'react-native';
// eslint-disable-next-line no-console

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Home from './Home';
import SignInScreen from './SignInScreen';

import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../store';
import LoadingForLoginScreen from './LoadingForLoginScreen';
const Auth = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const user = useSelector(state => state.user);
  console.log('auth user:', user);

  const getUserFromLocal = async () => {
    try {
      const value = await AsyncStorage.getItem('@user');
      console.log('val:', value);
      if (value !== null) {
        let myval = JSON.parse(value);
        const {email, password} = myval;
        axios
          .get(
            `http://192.168.1.20:3000/users?email=${email}&password=${password}`,
          )
          .then(response => {
            console.log('auto login user', response.data?.[0]);
            dispatch(setUser(response.data?.[0]));
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => setloading(false));
      }else{
        setloading(false)
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    setloading(true);
    getUserFromLocal();
  }, []); // eslint-disable-next-line no-console

  return (
    <>
      {user ? <Home /> : loading ? <LoadingForLoginScreen /> : <SignInScreen />}
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({});
