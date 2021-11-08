import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';


const TextScreen = () => {

    const [password, setPassword] = useState("")

    return (
        <View>
            <Text>Enter New Password </Text>
            <TextInput 
            style = {styling.input}
            autoCapitalize = "none"
            autoCorrect = {false} 
            value = {password}
            onChangeText = {(newPassword) => setPassword(newPassword)}
            />
            {password.length <= 5 ? <Text>The password must be longer than 5 characters</Text> : null}
        </View>
    )
}


const styling = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;