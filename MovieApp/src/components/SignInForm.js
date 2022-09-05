import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const SignInForm = () => {
  const initialState = {
    id: '0',
    email: '',
    password: '',
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
  const submitUser = () => {
    setUser(userInfo);
    console.log('user set completed:', userInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.APPtitle}>MOVIE APP</Text>
      <Text style={styles.title}>SIGN IN</Text>
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
      <TouchableOpacity style={styles.submitbutton} onPress={submitUser}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.askText}>Dont't have an account?</Text>
      <TouchableOpacity style={styles.submitbutton}>
        <Text style={styles.buttonText}>SIGN UP NOW !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 128,
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
