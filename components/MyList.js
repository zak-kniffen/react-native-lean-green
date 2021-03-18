import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button,StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import {FlatList } from 'react-native';
import {SelectedComponent} from './SelectedComponent';

export default function MyList ({selected}) {

    /*const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }*/

    return (
        <FlatList style={styles.myList}
        data={selected}
        renderItem={({ item }) => (
          <Text>{item}<Button
          
          title="Learn More"
          
          
        /></Text>
        )}
        
        
        />
    );
};

const styles = StyleSheet.create({
    myList:{
        fontSize: 50,
        alignSelf: "center",
        height: 20,
        backgroundColor:'green',
        width: "100%",
        maxHeight: "50%"
        
    }
    });