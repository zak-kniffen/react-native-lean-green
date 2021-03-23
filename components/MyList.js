import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button,StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import {FlatList } from 'react-native';
import {SelectedComponent} from './SelectedComponent';


export default function MyList ({selected, handleFilter}) {

    const handlePress = (e) => {
        console.log(e);
        handleFilter(e);
    }
    
    return (
        <FlatList style={styles.myList}
        data={selected}
        renderItem={({ item }) => (
            
                <Pressable onLongPress={() => handlePress(item)}><Text style={{backgroundColor: item.color, color:"black", fontSize: "25", fontWeight: "bold"}}> {item.name}<Button style={styles.buttonStyle} value={item} title="Cups" /></Text></Pressable>
            
        )}
        
        
        />
    );
};

const styles = StyleSheet.create({
    buttonStyle:{
        textDecorationColor: "black",
        fontSize: 75,
        right: 0,
        color: "black"
    },
    myList:{
        fontSize: 75,
        flexShrink: 0,
        height: 90,
        backgroundColor:'gray',
        width: "100%",
        maxHeight: "100%"
        
    }
    });