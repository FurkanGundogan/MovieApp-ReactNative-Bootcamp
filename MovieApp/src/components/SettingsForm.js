import { Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
//import { UserContext } from '../contexts/userContext';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store';
import axios from 'axios';
//import useTheme from '../hooks/useTheme';

const SettingsForm = () => {
  const {theme} =""
    const navigation=useNavigation()
   const dispatch=useDispatch()
    const {user} = useSelector(state => state.user);
  const [userInfo, setuserInfo] = useState({...user});
  console.log("user settingss:",user)
  const handleChange = (e, name) => {
    setuserInfo(prevState => ({
      ...prevState,
      [name]: e,
    }));
  };
  const submitUser = async() => {
   
    
    const backupinfo={...userInfo}
    const jsonValue = JSON.stringify(backupinfo)
    await AsyncStorage.setItem("@user",jsonValue);
    dispatch(setUser(userInfo))
    updateUser(userInfo)
    navigation.navigate('Settings')
    
  };

  const updateUser = userInfo => {
    
    axios.put('http://192.168.1.20:3000/users/'+userInfo?.id, userInfo).then(response => {
        alert('Your Profile Updated !', response.statusCode);

    });
  };

  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      <Text style={styles.title}>ACCOUNT</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Firstname"
        value={userInfo?.firstname}
        onChangeText={e => handleChange(e, 'firstname')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Lastname"
        value={userInfo?.lastname}
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
      <TouchableOpacity style={styles.submitbutton} onPress={submitUser}>
      <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsForm

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,paddingTop:128
      },
      title:{
        fontWeight:"800",
        fontSize:24,
        color:"#00adf7",
        textAlign:"center",
        fontFamily:"Calibri",
        textShadowRadius:4,
        textShadowColor: "white",
        marginBottom:32
      },
      textInput: {
        backgroundColor:"white",
        color:"gray",
        fontSize: 12,
        borderRadius: 8,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 16,
        height: 40,
        padding: 8,
        borderColor:"#00adf7",
        borderWidth:1,
        
        fontWeight:"400"
      },
      submitbutton:{
        marginTop:8,
        marginLeft:32,
        marginRight:32,
        backgroundColor:"#00adf7",
        padding:8,
        borderRadius:8,
      },
      buttonText:{
        color:"white",
        fontWeight:"800",
        fontSize: 12,
        textAlign:"center",
      }
})