import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { POSTER_URL } from '../assets/Info';
import IconStar from 'react-native-vector-icons/AntDesign';

const HomeMovieItem = ({item,navigation}) => {

  return <TouchableOpacity key={item?.id} style={styles.movieItemWrapper} 
  onPress={()=>navigation.navigate('MovieDetails',item)}
  >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: POSTER_URL+item?.poster_path,
          }}
        />
      </View>
      <View style={styles.tabItemTextArea}>
      <Text style={styles.tabItemTextTitle}>{item?.title}</Text>
      <Text style={styles.tabItemText} numberOfLines={4}>{item?.overview}</Text>
      <View style={styles.starWrapper}>
      <Text style={styles.tabItemTextRate}>{item?.vote_average}</Text>
      <IconStar name="star" size={13} color="orange" style={styles.homeStar} />
      </View>
     
      </View>
      
    </TouchableOpacity>
  
};

export default HomeMovieItem;

const styles = StyleSheet.create({
  movieItemWrapper: {
    width: '100%',
    marginBottom: 8,
    flexDirection:"row",
    paddingTop:16,
    paddingBottom:16,
    borderBottomWidth:1,
    borderBottomColor:"black"

  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: '#bcc9cf',
    borderWidth: 1,
    width:150,
    height:150,
    marginLeft:16,
  },
  image: {
    width: '100%',
    height: '100%',
  },tabItemTextArea:{
    width:200,
    marginLeft:8,
    justifyContent:"space-between"
  },tabItemTextTitle:{
    fontSize:16,
    fontWeight:"800",
    paddingTop:8
  },
  tabItemTextRate:{
    
    fontWeight:"800",
    paddingBottom:4,
    color:"orange"
  },starWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },homeStar:{
    paddingBottom:2.2
  }
});
