import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';

thingsToDo = [
    "Get visa",
    "Get any required vaccinations",
    "Book accommodation",
    ""
]

const CheckList = () => {
    return (
        <View>
            <FlatList 
                data={ thingsToDo }

            />
        </View>
    )
}