import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconSearch from 'react-native-vector-icons/EvilIcons';
import IconClear from 'react-native-vector-icons/MaterialIcons';

const SearchInput = ({input, setInput}) => {
  return (
    <View style={styles.textInputWrapper}>
      <IconSearch name="search" size={24} color="orange" style={styles.searchicon} />
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={value => setInput(value)}
        placeholder="Search movie..."
      />
      <TouchableOpacity style={styles.clearicon} onPress={()=>setInput("")}>
      <IconClear name="clear" size={24} color="gray"  />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInputWrapper: {
    backgroundColor: 'white',
    color: 'gray',
    alignItems:"center",
    borderRadius: 4,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
    marginTop: 16,
    height: 40,
    
    borderColor: '#00adf7',
    borderWidth: 1,
    flexDirection: 'row',
    
  },
  textInput: {
    width:"80%",
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    marginLeft:-8
  },
  searchicon:{
    width:"10%",
    marginLeft:4
  },clearicon:{
    width:"10%",
  }
});
