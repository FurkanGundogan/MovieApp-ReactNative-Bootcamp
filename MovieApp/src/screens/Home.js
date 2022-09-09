import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMovieList, setUser} from '../store';
import {AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Tabs from '../components/Tabs';
import axios from 'axios';
import { API_KEY } from '../assets/Info';
import HomeMovieItem from '../components/HomeMovieItem';
// eslint-disable-next-line no-console

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.user);
  const movieList = useSelector(state => state?.movie);
 

  const navigation = useNavigation();
  const logout = async () => {
    dispatch(setUser(null));
    await AsyncStorage.removeItem('@user');
  };
  /*<TouchableOpacity onPress={()=>navigation.navigate("MovieDetails")}><Text>Go details</Text></TouchableOpacity>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>*/
  const [selected, setSelected] = useState('top_rated');
  console.log('tab:', selected);



  useEffect(() => {
    getMoviesByTab()
  }, [selected]);


  const getMoviesByTab = () => {
    console.log("url:",`https://api.themoviedb.org/3/movie/${selected}?api_key=${API_KEY}&language=en-US&page=1`)
    axios.get(`https://api.themoviedb.org/3/movie/${selected}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {

          dispatch(setMovieList(response?.data?.results));
        
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (
    <>
      <Tabs selected={selected} setSelected={setSelected} style={styles.tab}/>
      <FlatList
        style={styles.tabsContainer}
        data={movieList}
        renderItem={({item}) => <HomeMovieItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  tab:{
    maxHeight:100
  },tabsContainer:{
    flex:1
  }
});
