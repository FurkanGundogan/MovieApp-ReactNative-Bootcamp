import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../store';
import {AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tabs from '../components/Tabs';
// eslint-disable-next-line no-console

const Home = () => {
  const dispatch=useDispatch()
  const user = useSelector(state => state?.user);
  console.log('user:', user);
  const navigation=useNavigation()
  const logout = async () => {
    
    dispatch(setUser(null))
    await AsyncStorage.removeItem('@user');
  };
  /*<TouchableOpacity onPress={()=>navigation.navigate("MovieDetails")}><Text>Go details</Text></TouchableOpacity>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>*/
  const [selected,setSelected]=useState('Top Rated')
  console.log("tab:",selected)
  
  const tabList = [
    {
      id: 0,
      name: 'Top Rated',
    },
    {
      id: 1,
      name: 'Latest',
    },
    {
      id: 2,
      name: 'Popular',
    },
    {
      id: 3,
      name: 'Upcoming',
    },
  ];

  const MovieItem = ({item}) => (
    <TouchableOpacity style={styles.movieItemWrapper} onPress={()=>setSelected(item?.name)}>
      <Text style={styles.tabItemText}>{item?.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <Tabs setSelected={setSelected}/>
      <FlatList style={styles.tabsContainer} data={tabList} renderItem={MovieItem} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  movieItemWrapper:{
    height:300
  }
});
