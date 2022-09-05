import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Auth = () => {
  const [user, setuser] = useState();
  const getUser = () => {
    axios.get('http://192.168.1.20:3000/user')
            .then(response => {
                setuser(response.data)
                console.log("user",response.data);
            })
            .catch(error => {
                console.log(error);
                alert(error)
            });

  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <Text>Auth</Text>
      {user ? <Text>Var</Text> : <Text>Yok</Text>}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
