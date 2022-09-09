import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const Tabs = ({selected,setSelected}) => {

  
  const tabList = [
    {
      id: 0,
      key:'top_rated',
      name: 'Top Rated',
    },
    {
      id: 1,
      key:'now_playing',
      name: 'Now Playing',
    },
    {
      id: 2,
      key:'popular',
      name: 'Popular',
    },
    {
      id: 3,
      key:'upcoming',
      name: 'Upcoming',
    },
  ];

  const TabItem = ({item}) => (
    <TouchableOpacity style={
      selected===item.key?{...styles.tabItemWrapper,...styles.selected} : styles.tabItemWrapper
      } onPress={()=>setSelected(item?.key)}>
      <Text style={selected===item.key?{...styles.tabItemText,...styles.selectedText} : styles.tabItemText}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return <FlatList style={styles.tabsContainer} horizontal showsHorizontalScrollIndicator={false} data={tabList} renderItem={TabItem} />;
};

export default Tabs;

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop:8,
    padding:8,
    maxHeight:60
  },
  tabItemWrapper: {
    padding: 8,
    backgroundColor: 'black',
    margin: 4,
    width: 100,
    borderRadius: 4,
  },
  selected:{
    backgroundColor:"white",
    borderWidth:0.5,
    borderColor:"black",
    
  },
  tabItemText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
  },
  selectedText:{
    color:"#ff6a00"
  }
});
