import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function SelectedComponent ({select}) {

    /*const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }*/

    return (
        <Text style={styles.selectedComponent} >
            {select}
        </Text>
    );
};

const styles = StyleSheet.create({
    selectedComponent:{
        fontSize: 10,
        alignSelf: "center",
        color: "yellow"
    }
    });