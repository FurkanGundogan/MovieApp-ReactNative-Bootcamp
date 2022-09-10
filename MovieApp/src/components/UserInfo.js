import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import IconFeather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
//import useTheme from '../hooks/useTheme';
const UserInfo = () => {
  const {theme} =""
  const {user} = useSelector(state => state.user);
  console.log("user:",user)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: user?.image,
          }}
        />
      </View>
      <Text style={{...styles.infoText, ...styles.infoUsername}}>
        {'@' + user?.username}
      </Text>
      <Text style={{...styles.infoText,...theme?.userInfoText}}>
        {user?.firstName} {user?.lastName}
      </Text>
      <View style={styles.phoneWrapper}>
        <IconFeather
          name="mail"
          size={14}
          color={theme?.phoneIconColor}
          style={styles.phoneIcon}
        />
        <Text style={{...styles.infoText,...theme?.userInfoText}}>{user?.email}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
  },
  infoText: {
    color: 'gray',
    marginBottom: 4,
    fontWeight: '800',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  phoneWrapper: {
    flexDirection: 'row',
  },
  phoneIcon: {
    marginRight: 8,
    paddingTop: 2,
  },
  infoUsername: {
    color: '#54b7f0',
    letterSpacing: 0.4,
  },
});