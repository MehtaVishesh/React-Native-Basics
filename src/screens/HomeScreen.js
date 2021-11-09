import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

                    //destructuring props
const HomeScreen = ({navigation}) => {
  return (
    <View>
          <Text style={styles.text}>Hello There, this is the home screen!</Text>
          <Button 
            onPress = {() => navigation.navigate('Components')}
            title = "Go to Screen Component"/>
            
          <Button
            onPress = {() => navigation.navigate('List')}
            title = "Go to List Screen"/>

          <Button
            onPress = {() => navigation.navigate('Image')}
            title = "Go to Images"
            />

          <Button
            onPress = {() => navigation.navigate('Counter')}
            title = "Go to Counter Screen"
            />

          <Button
            onPress = {() => navigation.navigate('Color')}
            title = "Go to Color Screen"
          />

          <Button
            onPress = {() => navigation.navigate('Square')}
            title = "Go to Square Demo"
          />

          <Button
            onPress = {() => navigation.navigate("Text")}
            title = 'Go to Text Screen'
          />

          <Button
            onPress = {() => navigation.navigate("Box")}
            title = "Go to Box Screen"
          />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
