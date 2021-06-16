import React, { useEffect } from 'react';
import { 
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { colors } from '../assets/Color';

const Item = ({ expenseName, expenseAmount }) => (
    <TouchableOpacity style={[ { backgroundColor: colors.fourthColor }, tw.style('w-11/12', 'flex-row', 'justify-between','border', 'rounded-md', 'shadow-lg', 'self-center', 'my-2')]}>
        <Text style={ tw.style('m-5')}>{ expenseName }</Text>
        <Text style={ tw.style('m-5')}>{ expenseAmount }</Text>
    </TouchableOpacity>
)

export const ExpensesBox = ({ expenses }) => {

    const renderItem = ({ item }) => (
        <Item 
            expenseName={ item.expenseName }
            expenseAmount={ item.expenseAmount }
        />
    )

    let expenseList;

    console.log(expenses.expenses)
    

    return (
        <View style={ tw.style('bg-white', 'w-5/6', 'h-2/6', 'rounded-md', 'm-10', 'shadow-lg') }>
            <FlatList
                data={ expenses.expenses }
                renderItem={ renderItem }
                keyExtractor={ item => item.expenseName }
            />
        </View>
    );
}