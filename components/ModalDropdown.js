import React from 'react';
import { StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Text, View } from './Themed';



export default function ModalDropdownFunction({options, handleOnChange, selected}) {
  
const handleChange = (e) => {
 /*console.log(options[e].leanGreen + "bob");*/
  handleOnChange(options[e]);
}

  return (
    <View>


      <ModalDropdown   
        onSelect={handleChange}
        options={options.map(options => (options.name + " " + options.cupUnit + " cup"))}
        style={styles.selectBox}
        dropdownStyle={styles.dropdown}
        textStyle={styles.selectBoxText}
        dropdownTextStyle={styles.dropdownText}
        
         />
    
    </View>
  );
}

const styles = StyleSheet.create({
  newFlatList:{
    height: 50,
    backgroundColor: 'red',
    flexGrow: 0,
    fontSize: 250
  },
  myText:{
    fontSize: 40
  },
  selectBox:{
    backgroundColor: "#00935f",
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