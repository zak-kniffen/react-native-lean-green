import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { useState } from 'react';

export function MeasureButton () {

    const [ measurement, setMeasurement ] = useState(" cups ");
    const [ myNumber, setMyNumber ] = useState(0);

    /*const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }*/
    function measurePress(measure) {
        if (measure == " cups "){
            setMeasurement("ounces");
        }
        if (measure == "ounces"){
            setMeasurement("grams ");
        }
        if (measure == "grams "){
            setMeasurement(" cups ");
        }
        
    }
    function increment(){
        let tempNumber = myNumber;
        tempNumber ++;
        setMyNumber(tempNumber)
    }
    function decrement(){
        let tempNumber = myNumber;
        tempNumber --;
        setMyNumber(tempNumber)
    }

    return (
        <View style={styles.measureContainer}>
        <Text style={styles.numberStyle}>{myNumber}</Text>
        <Text style={styles.selectedComponent} onPress={() => measurePress(measurement)}>
            {measurement}
        </Text>
        <View style={styles.incrementContainer}>
            <Text onPress={increment} style={styles.incrementPart}>+</Text>
            <Text style={styles.incrementPart}>|</Text>
            <Text onPress={decrement} style={styles.incrementPart}>-</Text>
        </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    incrementPart:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5,

    },
    incrementContainer:{
        flexDirection: 'row',
        backgroundColor: "gray",
        borderColor: "black",
        borderWidth: 2,
        right: 0        
    },
    numberStyle:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5,
        borderColor: "black",
        borderWidth: 2
    },
    measureContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "gray"
    },
    selectedComponent:{
        fontSize: 20,
        right: 0,
        color: "black",
        marginHorizontal: 5,
        width: 65
    },
    incrementStyle:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5
    }
    });