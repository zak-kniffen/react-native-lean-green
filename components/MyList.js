import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button,StyleSheet, TouchableOpacity } from 'react-native';

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
            
                <Text style={{backgroundColor: item.color}}> {item.name}<Button style={styles.buttonStyle} value={item} title="X" onPress={() => handlePress(item)}/></Text>
            
        )}
        
        
        />
    );
};

const styles = StyleSheet.create({
    buttonStyle:{
        color: "black",
        fontSize: 75,
        alignSelf: 'flex-end'
    },
    myList:{
        fontSize: 50,
        flexShrink: 0,
        height: 20,
        backgroundColor:'gray',
        width: 200,
        maxHeight: "55%"
        
    }
    });