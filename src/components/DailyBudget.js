import React, { useEffect } from 'react';
import { 
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { colors } from '../assets/Color';


export const DailyBudget = ({ budget }) => {
    return (
        <View>
            <Text style={[ { fontSize: 48 }, tw.style('text-white', 'self-center', 'text-center') ]}>Remaining Daily Budget</Text>
            <Text style={[ { fontSize: 72 }, tw.style('text-white', 'm-10', 'font-bold', 'self-center') ]}>${ budget }</Text>
        </View>
    )

}