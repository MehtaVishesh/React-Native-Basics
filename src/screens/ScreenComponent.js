import React from 'react';    
import {Text, StyleSheet, View} from 'react-native';

 const ScreenComponent = () => {
    const greeting = "Hello, I am a JSX variable";
    return ( 
    < View>
        <Text style = {styles.textStyle}>This is the components screen</Text>
        <Text>Hello There!</Text>
        <Text>{greeting}</Text> 
    </View>
    );
 };

 const styles = StyleSheet.create({
     textStyle: {
         fontSize: 30
     }
 })

 export default ScreenComponent;