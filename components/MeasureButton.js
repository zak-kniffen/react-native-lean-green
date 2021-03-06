import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { useState } from 'react';

export function MeasureButton ({item, handleTotalSum, totalSum, handleFilter}) {
    

    const [ measurement, setMeasurement ] = useState(item.defaultMeasurement);
    const [ myNumber, setMyNumber ] = useState(0);
    const [ myDisplayNumber, setMyDisplayNumber ] = useState(0);



      const handlePress = (e) => {
        console.log(e);
        handleTotalSum(-(myNumber));
        handleFilter(e);
    }
    /*const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }*/
    function measurePress(measure) {
        if (measure == "c"){
            setMeasurement("oz");
            setMyDisplayNumber(myNumber * item.ounceUnit);
        }
        if (measure == "oz"){
            setMeasurement("g");
            setMyDisplayNumber(myNumber * item.gramUnit);
        }
        if (measure == "g" && item.leanGreen == "green"){
            setMeasurement("c");
            setMyDisplayNumber(myNumber * item.cupUnit);
        }
        if (measure == "g" && item.leanGreen == "lean"){
            setMeasurement("oz");
            setMyDisplayNumber(myNumber * item.ounceUnit);
        }
        
    }
    function increment(){
        if(myNumber < 3){
            let tempNumber = myNumber;
            tempNumber ++;
            handleTotalSum(1);
            setMyNumber(tempNumber);
            if (measurement == "c"){
                setMyDisplayNumber(tempNumber * item.cupUnit)
            }
            if (measurement == "oz"){
                setMyDisplayNumber(tempNumber * item.ounceUnit)
            }
            if (measurement == "g"){
                setMyDisplayNumber(tempNumber * item.gramUnit)
            }
        }
    }
    function decrement(){
        if(myNumber > 0){
            let tempNumber = myNumber;
            tempNumber --;
            handleTotalSum(-1);
            setMyNumber(tempNumber);
            if (measurement == "c"){
                setMyDisplayNumber(tempNumber * item.cupUnit)
            }
            if (measurement == "oz"){
                setMyDisplayNumber(tempNumber * item.ounceUnit)
            }
            if (measurement == "g"){
                setMyDisplayNumber(tempNumber * item.gramUnit)
            }
        }
    }

    return (
                        <Pressable style={styles.pressableStyle} onLongPress={() => handlePress(item)}>
                    <Text style={{backgroundColor: item.color,
                                color:"black",
                                fontSize: "25",
                                fontWeight: "bold",
                                borderColor: "black",
                                borderWidth: 2,
                                width: 150}}>
                         {item.shortName}
                    </Text>
                    <View style={styles.measureContainer}>
            <Text style={styles.servingNumberStyle}>({myNumber})</Text>


            <View style={styles.incrementContainer}>
                <Text onPress={decrement} style={styles.incrementPart}>-</Text>
                <Text onPress={increment} style={styles.incrementPart}>+</Text>
                <Text style={styles.numberStyle}>{myDisplayNumber}</Text>
            </View>
            <Text style={styles.selectedComponent} onPress={() => measurePress(measurement)}>
                {measurement}
            </Text>
        
        </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressableStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    incrementPart:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5,
        borderColor: "black",
        borderRightWidth: 2
    },
    incrementContainer:{
        flexDirection: 'row',
        backgroundColor: "gray",
        borderColor: "black",
        borderLeftWidth: 2,
        right: 0        
    },
    servingNumberStyle:{
        fontSize: 20,
        color: "black",
        width: 30
    },
    numberStyle:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5,
        borderColor: "black",
        borderRightWidth: 2,
        width: 40
    },
    measureContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor: "black"
    },
    selectedComponent:{
        fontSize: 20,
        right: 0,
        color: "black",
        marginHorizontal: 5,
        width: 25
    },
    incrementStyle:{
        fontSize: 20,
        color: "black",
        marginHorizontal: 5
    }
    });