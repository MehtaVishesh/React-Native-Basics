import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AdjustColor from '../components/AdjustColor';


const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const _CHANGE = 20;

    const setColor = (color, change) => {

        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

            default:
                return;
        }
    }

    return(
        <View>
            <AdjustColor 
                color = 'RED'
                onIncrease = {() => setColor('red', _CHANGE)}
                onDecrease = {() => setColor('red' , -1 *_CHANGE)}
            />
        
            <AdjustColor 
                color = "GREEN"
                onIncrease = {() => setColor('green', _CHANGE)}
                onDecrease = {() => setColor('green', -1 *_CHANGE)}
            />

            <AdjustColor 
                color = "BLUE"
                onIncrease = {() => setColor('blue', _CHANGE)}
                onDecrease = {() => setColor('blue', -1 * _CHANGE)}
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