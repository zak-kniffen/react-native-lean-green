import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { useState } from 'react';

export function MeasureButton () {

    const [ measurement, setMeasurement ] = useState("CUPS");
    /*const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }*/
    function measurePress(measure) {
        if (measure == "CUPS"){
            setMeasurement("OZ");
        }
        if (measure == "OZ"){
            setMeasurement("GRAMS");
        }
        if (measure == "GRAMS"){
            setMeasurement("CUPS");
        }
        
    }

    return (
        <Text style={styles.selectedComponent} onPress={() => measurePress(measurement)}>
            {measurement}
        </Text>
    );
};

const styles = StyleSheet.create({
    selectedComponent:{
        fontSize: 20,
        right: 0,
        color: "black"
    }
    });