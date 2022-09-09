import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const Tabs = ({setSelected}) => {

  
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

  const TabItem = ({item}) => (
    <TouchableOpacity style={styles.tabItemWrapper} onPress={()=>setSelected(item?.name)}>
      <Text style={styles.tabItemText}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return <FlatList style={styles.tabsContainer} horizontal showsHorizontalScrollIndicator={false} data={tabList} renderItem={TabItem} />;
};

export default Tabs;

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop:8,
    padding:8
  },
  tabItemWrapper: {
    padding: 8,
    backgroundColor: 'black',
    margin: 4,
    width: 100,
    borderRadius: 4,
  },
  tabItemText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
  },
});
