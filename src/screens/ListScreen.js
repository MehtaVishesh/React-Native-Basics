import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {

    const friends = [
        {name: 'Friend1', age: 10},
        {name: 'Friend2', age: 15},
        {name: 'Friend3', age: 20},
        {name: 'Friend4', age: 30},
        {name: 'Friend5', age: 40},
    ];

    return(
        <FlatList 
            showsVerticalScrollIndicator = {false}
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({item}) => {
                return (
                    <Text style = {styles.textStyle}>
                        {item.name} - Age = {item.age}
                    </Text>
                )
            }}
        />
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;