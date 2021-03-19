import * as React from 'react';
import { StyleSheet } from 'react-native';
import leanData from "../green.json";
import greenData from "../lean.json";
import { FlatList, RefreshControl } from "react-native";




import EditScreenInfo from '../components/EditScreenInfo';
import ModalDropdown from '../components/ModalDropdown';
import MyList from '../components/MyList';
import SelectedComponent from '../components/SelectedComponent';
import { Text, View } from '../components/Themed';

import { useState } from 'react';
import { loadOptions } from '@babel/core';

const flatList = FlatList;
export default function TabOneScreen() {

const [ leanList, setLeanList ] = useState(leanData);
const [ greenList, setGreenList ] = useState(greenData);
const [ selected, setSelected ] = useState([] as any);


let result:String ="";
const handleOnChange = (name: React.SetStateAction<string>) =>{
  if (selected.indexOf(name) == -1){
  let copy = [...selected];
  copy = [...copy, name];
  setSelected(copy);
  }
}  
const handleFilter = (e: string) => {
  let filtered = selected.filter((item: string) => {
    return (item != e);
  });
  setSelected(filtered);
}

/*const addTask = (userInput ) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  setToDoList(copy);
}*/

  return (
    
    <View style={styles.container}>
      <Text style={styles.myHeading}>Select A Lean</Text>
      <ModalDropdown defaultValue={"Add a Lean"} selected={selected} handleOnChange={handleOnChange} style={styles.topDrop} options={leanList[0].lean}/>
      <Text style={styles.myHeading}>Select A Green</Text>
      <ModalDropdown defaultValue={"Add a Green"} selected={selected} handleOnChange={handleOnChange} style={styles.topDrop} options={leanList[1].green}/>
      <View style={styles.divStyle}>
        <Text style={styles.myHeading}>Meal Choices </Text>
        <MyList selected={selected} handleFilter={handleFilter}></MyList>
      </View>
      
      {/*<Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      <Text>{result}</Text>
  </View>
  );
}

const styles = StyleSheet.create({

  myText:{
    fontSize: 20,
    
    backgroundColor: "blue",
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  myHeading:{
    fontSize: 40,
    textDecorationLine: "underline",
    backgroundColor: "blue"
  },
divStyle:{
  backgroundColor:"red"
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
  myList:{
    display:"flex",
    flexDirection: "column",
    height: "20%"
  }
});
