import * as React from 'react';
import { StyleSheet } from 'react-native';
import leanData from "../lean.json";
import greenData from "../lean.json";


import EditScreenInfo from '../components/EditScreenInfo';
import ModalDropdown from '../components/ModalDropdown';
import { Text, View } from '../components/Themed';

import { useState } from 'react';
import { loadOptions } from '@babel/core';


export default function TabOneScreen() {

const [ leanList, setLeanList ] = useState(leanData);
const [ greenList, setGreenList ] = useState(greenData);
const [ selected, setSelected ] = useState();
const [ greens, setGreens ] = useState("");


const handleOnChange = (name: React.SetStateAction<any>) =>{
  setSelected(name);
}  
const handleOnGreens = (name: React.SetStateAction<any>) =>{
  setGreens(name);
}  

  return (
    
    <View style={styles.container}>
      <ModalDropdown selected={selected} handleOnChange={handleOnChange} style={styles.topDrop} options={leanList}/>
      <ModalDropdown greens={greens} handleOnGreens={handleOnGreens} style={styles.bottomDrop} options={greenList}/>
      <Text style={styles.title}>Tab One</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      
  </View>
  );
}

const styles = StyleSheet.create({
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
