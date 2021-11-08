import React, {useReducer} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AdjustColor from '../components/AdjustColor';

const INCREMENT = 15;

const reducer = (state, action) => {
// state === {red: number, green: number, blue: number}
// action === {type: 'red' || 'green' || 'blue, payload: 15 || -15}
    switch(action.type){
        case 'change_red':
           return state.red + action.payload > 255 || state.red + action.payload < 0 
           ? state : {...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
           ? state : {...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
           ? state : {...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    return(
        <View>
            <AdjustColor 
                color = 'RED'
                onIncrease = {() => dispatch({type: 'change_red', payload: INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_red', payload: -1*INCREMENT})}
            />
        
            <AdjustColor 
                color = "GREEN"
                onIncrease = {() => dispatch({type: 'change_green', payload: INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_green', payload: -1*INCREMENT})}
            />

            <AdjustColor 
                color = "BLUE"
                onIncrease = {() => dispatch({type: 'change_blue', payload: INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_blue', payload: -1*INCREMENT})}
            />
            <View style = {
                {    
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }
            }/>
        </View>
    )
}

const styling = StyleSheet.create({

})

export default SquareScreen;