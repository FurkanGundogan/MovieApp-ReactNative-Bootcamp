import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
const SignUpForm = () => {
 
  const initialState = {
    id: '0',
    email: 'furkangundogan14@outlook.com',
    password: '123123',
    confirmPassword: '123123',
    firstName: 'Furkan',
    lastName: 'Gundogan',
    username: 'furu14',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jason_Statham_at_Marvel-Rolle.jpg/640px-Jason_Statham_at_Marvel-Rolle.jpg',
  };
  const [userInfo, setuserInfo] = useState(initialState);
  const handleChange = (e, name) => {
    setuserInfo(prevState => ({
      ...prevState,
      [name]: e,
    }));
    console.log(userInfo);
  };
  const submitUser = async () => {
    postUser(userInfo);
    const jsonValue = JSON.stringify(userInfo)
    await AsyncStorage.setItem("@user",jsonValue);
    getUser()
    
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if(value !== null) {
        console.log("store:",value)
       
      }
    } catch(e) {
      // error reading value
    }
  }

 
  const postUser = userInfo => {
    axios.post('http://192.168.1.20:3000/users', userInfo).then(response => {
      if (response.status === 201) {
        alert('Success 201', response.statusCode);

      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.APPtitle}>MOVIE APP</Text>
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Firstname"
        value={userInfo?.firstName}
        onChangeText={e => handleChange(e, 'firstname')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Lastname"
        value={userInfo?.lastName}
        onChangeText={e => handleChange(e, 'lastname')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={userInfo?.username}
        onChangeText={e => handleChange(e, 'username')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={userInfo?.email}
        onChangeText={e => handleChange(e, 'email')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        value={userInfo?.password}
        onChangeText={e => handleChange(e, 'password')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry
        value={userInfo?.confirmPassword}
        onChangeText={e => handleChange(e, 'confirmPassword')}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={submitUser}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.askText}>Already have an account?</Text>
      <TouchableOpacity style={styles.submitbutton}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 64,
  },
  APPtitle: {
    fontWeight: '800',
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    fontFamily: 'Calibri',
    textShadowRadius: 4,
    textShadowColor: '#33382c',
    marginBottom: 32,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Calibri',
    textShadowRadius: 4,
    textShadowColor: '#33382c',
    marginBottom: 32,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'gray',
    fontSize: 12,
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
    height: 40,
    padding: 8,
    borderColor: 'orange',
    borderWidth: 1,

    fontWeight: '400',
  },
  submitbutton: {
    marginTop: 8,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
    textAlign: 'center',
  },
  askText: {
    marginTop: 64,
    textAlign: 'center',
    color: 'blue',
  },
});
