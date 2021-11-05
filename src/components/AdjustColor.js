import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const AdjustColor = ({color}) => {
    console.log(color)
    return(
        <View>
            <Text>{color}</Text>
            <Button 
                title = {`Increase ${color}`}/>
            <Button 
                title = {`Decrease ${color}`}/>
        </View>
    )
}

const styling = StyleSheet.create({

})

export default AdjustColor;