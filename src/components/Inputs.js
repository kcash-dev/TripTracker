import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native-paper';
import { 
    View,
    Text,
    ScrollView,
    TouchableOpacity 
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { DropDownPicker } from './DropdownPicker';

// Own Components
import { ButtonComp } from '../components/Button';
import { RadioItem } from '../components/RadioItem';
import { TripContext } from '../context/TripContext';
import { TripDateRangePicker } from './TripRangePicker';

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
        details: '',
        cost: '',
        isTrip: false,
        inOrOut: 'International',
        startDate: '',
        currency: '',
        numberOfDays: 1
    })

    const navigation = useNavigation();

    const sendTrip = () => {
        setTripDetails(tripDetails.isTrip = true)
        setTrip(tripDetails);
        navigation.pop();
    }

    const getDates = (value) => {
        setTripDetails({ ...tripDetails, startDate: value });
    }

    const getLength = (value) => {
        setTripDetails(value)
    }

    const getCurrency = (value) => {
        setTripDetails({ ...tripDetails, currency: value });
    }

    return (
        <ScrollView 
            style={ tw.style('flex-1') }
            contentContainerStyle={ tw.style('items-center')}
        >
            <TextInput 
                style={ tw.style('w-5/6', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg') }
                label="Where are you headed?"
                value={ tripDetails.name }
                clearButtonMode="always"
                onChangeText={ text => setTripDetails({ ...tripDetails, name: text }) }
            />
            <RadioItem 
                tripDets={ tripDetails }
                setDets={ setTripDetails }
            />
            <TripDateRangePicker
                tripDets={ tripDetails } 
                setDets={ getDates }
                setLeng={ getLength }
            />
            <View style={ tw.style('flex-row', 'w-full', 'justify-center') }>
                { tripDetails.currency ?
                    <TouchableOpacity 
                        onPress={ () => setTripDetails(tripDetails.currency = '') }
                        style={ tw.style('justify-center', 'w-1/6', 'h-16', 'items-center', 'rounded-lg', 'border-2', 'bg-white', 'mr-3') }
                    >
                        <Text style={ tw.style('font-bold', 'self-center', 'rounded-lg', 'text-2xl')}>{ tripDetails.currency }</Text>
                    </TouchableOpacity>
                :
                    <DropDownPicker 
                        tripDets={ tripDetails }
                        setDets={ getCurrency }
                    />
                }
                <TextInput 
                    style={ tw.style('w-1/2', 'bg-white', 'rounded-md', 'mb-4', 'shadow-lg') }
                    label="Enter Trip Cost"
                    value={ tripDetails.cost }
                    clearButtonMode="always"
                    onChangeText={ text => setTripDetails({ ...tripDetails, cost: text }) }
                />
            </View>
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