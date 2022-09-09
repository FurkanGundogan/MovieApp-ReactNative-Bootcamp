import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchInput from '../components/SearchInput';
import HomeMovieItem from '../components/HomeMovieItem';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {API_KEY} from '../assets/Info';
import {setSearchList} from '../store';
import axios from 'axios';

const SearchScreen = () => {
  const movieList = useSelector(state => state?.searchList);
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      getMoviesBySearch();
    }, 250);
  }, [input]);
  const getMoviesBySearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(response => {
        dispatch(setSearchList(response?.data?.results));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <SearchInput input={input} setInput={setInput} />
      <FlatList
        style={styles.tabsContainer}
        data={movieList}
        renderItem={({item}) => (
          <HomeMovieItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
