import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native-paper';
import { 
    View,
    Text,
    ScrollView 
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { ButtonComp } from '../components/Button';
import { RadioItem } from '../components/RadioItem';
import { TripContext } from '../context/TripContext';

export const ExpenseInput = ({ callback }) => {
    const [ state, setState ] = useState({
            expenseName: '',
            expenseAmount: ''
        });

    const sendExpense = () => {
        callback(state);
    }
    
    return (
        <View style={ tw.style('items-center', 'justify-center')}>
            <TextInput 
                style={ tw.style('w-full', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Expense Name"
                value={ state.expenseName }
                clearButtonMode="always"
                onChangeText={ text => setState({ ...state, expenseName: text }) }
            />
            <TextInput 
                style={ tw.style('w-full', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Expense Amount"
                value={ state.expenseAmount }
                clearButtonMode="always"
                onChangeText={ text => setState({ ...state, expenseAmount: text }) }
            />
            <ButtonComp 
                callback={ sendExpense }
                title="Enter Expense"
            />
        </View>
    )
}

export const DailyBudgetInput = ({ callback, hiddenBudget, navigation }) => {
    const [ dailyBudget, setDailyBudget ] = useState(0);

    const sendBudget = () => {
        callback(dailyBudget);
    }
    
    return (
        <View style={ tw.style('items-center')}>
            <TextInput 
                style={ tw.style('w-full', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Daily Budget"
                value={ dailyBudget }
                clearButtonMode="always"
                onChangeText={ text => setDailyBudget(text) }
            />
            {/* <Button
                onPress={ sendBudget }
                style={ 
                { backgroundColor: colors.popoutColor } }
                // tw.style('rounded-md', 'h-12', 'w-1/2', 'justify-center', 'items-center', 'shadow-lg') ]}
            >
                <Text>Enter</Text>
            </Button> */}
            <ButtonComp 
                callback={ sendBudget }
                title="Enter Budget"
            />
        </View>
    )
}

export const TripInputs = ({ callback }) => {
    const [ trip, setTrip ] = useContext(TripContext);
    const [ tripDetails, setTripDetails ] = useState({
        name: '',
        destination: '',
        details: '',
        cost: '',
        isTrip: false,
        inOrOut: ''
    })

    const navigation = useNavigation();

    const sendTrip = () => {
        setTripDetails(tripDetails.isTrip = true)
        setTrip(tripDetails);
        navigation.pop();
    }

    const setIntOrDomestic = (value) => {
        setTripDetails(tripDetails.inOrOut = value)
    }

    return (
        <ScrollView 
            style={ tw.style('flex-1') }
            contentContainerStyle={ tw.style('items-center')}
        >
            <TextInput 
                style={ tw.style('w-5/6', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Trip Name"
                value={ tripDetails.name }
                clearButtonMode="always"
                onChangeText={ text => setTripDetails({ ...tripDetails, name: text }) }
            />
            <RadioItem 
                firstItem="Domestic"
                secondItem="International"
                callback={ setIntOrDomestic }
            />
            <Text style={[ { fontSize: 24 }, tw.style('text-left', 'text-white', 'font-bold', 'my-5') ]}>Trip </Text>
            <TextInput 
                style={ tw.style('w-5/6', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Destination"
                value={ tripDetails.destination }
                clearButtonMode="always"
                onChangeText={ text => setTripDetails({ ...tripDetails, destination: text }) }
            />
            <TextInput 
                style={ tw.style('w-5/6', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Enter Trip Cost"
                value={ tripDetails.cost }
                clearButtonMode="always"
                onChangeText={ text => setTripDetails({ ...tripDetails, cost: text }) }
            />
            <TextInput 
                style={ tw.style('w-5/6', 'bg-white', 'rounded-md', 'mb-4', 'h-52', 'shadow-lg') }
                label="Enter Trip Details"
                value={ tripDetails.details }
                clearButtonMode="always"
                onChangeText={ text => setTripDetails({ ...tripDetails, details: text }) }
                multiline={ true }
                numberOfLines={ 4 }
            />
            <ButtonComp
                title="Plan Trip"
                callback={ sendTrip }
            />
        </ScrollView>
    )
}