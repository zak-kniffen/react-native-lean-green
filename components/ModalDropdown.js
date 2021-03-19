import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ModalDropdownFunction({options, handleOnChange, selected}) {
  
const handleChange = (e) => {
 /*console.log(options[e].name);*/
  handleOnChange(options[e].name);
  
}

  return (
    <View>
<ModalDropdown  onSelect={handleChange} options={options.map(options => options.name)}  style={styles.selectBox} dropdownStyle={styles.dropdown} textStyle={styles.selectBoxText} dropdownTextStyle={styles.dropdownText} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  myText:{
    fontSize: 40
  },
  selectBox:{
    backgroundColor: "red",
    alignSelf: "center",

    
    
    alignItems: 'center',
    
  },
  selectBoxText:{
    fontSize: 30,

  },
  dropdown:{
    
    width: "50%",
    marginHorizontal: 0,
    paddingHorizontal: 0,
    alignItems: "stretch"
  },

  dropdownText:{
    fontSize: 20,
    alignItems: "stretch",
    minWidth: 100
  },
  container: {
    flex: 1,
    alignItems: 'center',
    /*justifyContent: 'center',*/
    backgroundColor: "blue",
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  });