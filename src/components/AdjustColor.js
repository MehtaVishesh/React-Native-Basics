import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const AdjustColor = ({color, onIncrease, onDecrease}) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button 
                title = {`Increase ${color}`}
                onPress = {() => onIncrease()}
            />

            <Button 
                title = {`Decrease ${color}`}
                onPress = {() => onDecrease()}
            />
        </View>
    )
}

const styling = StyleSheet.create({

})

export default AdjustColor;