import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const INCREMENT = 10

const reducer = (state, action) => {
    //state === { counter : number }
    //action === { type: 'increase' || 'decrease', payload: 1}

    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter + action.payload };
        case 'decrease':
            return {...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    console.log(state);
    return (
        <View>
            <Button 
                title = "Increase"
                onPress = {() => dispatch({type: 'increase', payload: INCREMENT})}/>

            <Button 
                title = "Decrease"
                onPress = {() => dispatch({type: 'decrease', payload: -1 * INCREMENT})}/>

            <Text>Current Count = {state.counter} </Text>
        </View>
    )
}

const styling = StyleSheet.create({})

export default CounterScreen;