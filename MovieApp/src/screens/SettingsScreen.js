import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import UserInfo from '../components/UserInfo';
//import {UserContext} from '../contexts/userContext';

//import useTheme from '../hooks/useTheme';

const SettingsScreen = ({navigation}) => {
  const {theme} = ""
  //const {setUser} = useContext(UserContext);
  const logout = () => {
    //setUser(null);
  };
  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      {
      <UserInfo />
    }
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Theme Settings')}>
        <Text style={styles.buttonText}>THEME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Profile Settings')}>
        <Text style={styles.buttonText}>
          EDIT PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.btn,...styles.btnLogout}} onPress={logout}>
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  btn: {
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
  btnLogout:{
    position:"absolute",
    bottom:24,
    width:100,
    backgroundColor:"red",
    alignSelf:"center"
  }
});