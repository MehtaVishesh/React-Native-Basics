import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AdjustColor from '../components/AdjustColor';


const SquareScreen = () => {
    return(
        <View>
            <AdjustColor 
                color = 'RED'/>
            <AdjustColor 
                color = "BLUE"/>
            <AdjustColor 
                color = "GREEN"/>
        </View>
    )
}

const styling = StyleSheet.create({

})

export default SquareScreen;