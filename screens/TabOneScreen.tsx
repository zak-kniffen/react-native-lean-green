import * as React from 'react';
import { StyleSheet } from 'react-native';
import leanData from "../green.json";
import greenData from "../lean.json";


import EditScreenInfo from '../components/EditScreenInfo';
import ModalDropdown from '../components/ModalDropdown';
import { Text, View } from '../components/Themed';

import { useState } from 'react';
import { loadOptions } from '@babel/core';


export default function TabOneScreen() {

const [ leanList, setLeanList ] = useState(leanData);
const [ greenList, setGreenList ] = useState(greenData);
const [ selected, setSelected ] = useState("hello");


let result:String ="";
const handleOnChange = (name: React.SetStateAction<string>) =>{
  setSelected(name);
}  


  return (
    
    <View style={styles.container}>
      <ModalDropdown selected={selected} handleOnChange={handleOnChange} style={styles.topDrop} options={leanList[0].lean}/>
      <ModalDropdown selected={selected} handleOnChange={handleOnChange} style={styles.topDrop} options={leanList[1].green}/>
      <Text style={styles.myText} >{selected}</Text>
      {/*<Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      <Text>{result}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  myText:{
    fontSize: 40
  },
divStyle:{
  backgroundColor:"blue"
},
 topDrop:{
  top: "20%",
  color:"blue"
 },
 bottomDrop:{
  bottom:"20%"
 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: "blue",
  
  },
  title: {
    display:"flex",
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
