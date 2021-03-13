import * as React from 'react';
import { StyleSheet } from 'react-native';
import data from "../lean.json";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ModalDropdown from 'react-native-modal-dropdown';
import { useState } from 'react';


export default function TabOneScreen() {
let myList:string[] = [];
for (let item of data){
  myList.push(item.name);
}
  return (
    <View style={styles.container}>
<ModalDropdown style={styles.dropdown} textStyle={styles.dropdownText} options={myList}/>
      <Text style={styles.title}>Tab One</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
  </View>
  );
}

const styles = StyleSheet.create({
  dropdown:{
    backgroundColor: "red",
    width: "75%",
    height: "6%",
    borderRadius: 20,
    
  },
  dropdownText:{
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue"
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
