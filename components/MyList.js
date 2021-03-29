import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList } from 'react-native';
import {MeasureButton} from './MeasureButton';



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