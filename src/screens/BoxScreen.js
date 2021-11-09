import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const BoxScreen = () => {
    return (
        <View style = { styling.mainView }>
            <View style = { styling. boxOneStyle } />

            <View style = {styling.boxTwoStyle }/>

            <View style = { styling.boxThreeStyle }/>
        </View>
    )
}

const styling = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },

    boxTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },

    boxThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
    },
})

export default BoxScreen;