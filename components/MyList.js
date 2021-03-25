import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button,StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import {FlatList } from 'react-native';
import {SelectedComponent} from './SelectedComponent';
import {MeasureButton} from './MeasureButton';
import { useEffect} from 'react';


export default function MyList ({selected, handleFilter, handleTotalSum, totalSum}) {




    
    return (
        <FlatList style={styles.myList}
        data={selected}
        renderItem={({ item }) => (
            
<MeasureButton item={item} handleTotalSum={handleTotalSum} totalSum={totalSum}  handleFilter={handleFilter}/>
            
        )}
        
        
        />
    );
};

const styles = StyleSheet.create({
    
    pressableStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
        maxHeight: "100%",
        
    }
    });