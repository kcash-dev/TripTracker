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

export const ExpenseInput = ({ addExp }) => {
    const [ trip, setTrip ] = useContext(TripContext);
    const currency = trip.currency;

    const [ expense, setExpense ] = useState({
        name: '',
        extraInfo: 0,
        currency: ''
    });

    const sendExpenses = () => {
        addExp(expense)
        setExpense({
            name: '',
            extraInfo: '',
            currency: ''
        })
    }

    return (
        <View>
            <View style={ tw.style('items-center', 'justify-center', 'flex-row')}>
                <TextInput 
                    style={ tw.style('w-2/5', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg', 'mx-4') }
                    label="Expense"
                    value={ expense.name }
                    clearButtonMode="always"
                    onChangeText={ text => setExpense({ ...expense, name: text }) }
                />
                <Text style={{ fontSize: 22, marginTop: -16 }}>{ trip.currency }</Text>
                <TextInput 
                    style={ tw.style('w-2/6', 'bg-white', 'rounded-md', 'mb-4', 'h-12', 'shadow-lg', 'mx-4') }
                    label="Amount"
                    keyboardType='numeric'
                    value={ expense.extraInfo }
                    clearButtonMode="always"
                    onChangeText={ text => {
                        let numberCost = parseInt(text)
                        setExpense({ ...expense, extraInfo: numberCost, currency: currency }) 
                    }}
                />
            </View>
            <View style={ tw.style('w-1/3', 'p-2', 'self-center') }>
                <ButtonComp
                    callback={ sendExpenses }
                    title="Enter"
                />
            </View>
        </View>
    )
}

export const TripInputs = () => {
    const [ trip, setTrip ] = useContext(TripContext);
    const [ tripDetails, setTripDetails ] = useState({
        name: '',
        details: '',
        cost: 0,
        isTrip: false,
        inOrOut: 'International',
        startDate: '',
        currency: '$',
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
                    keyboardType='numeric'
                    value={ tripDetails.cost }
                    clearButtonMode="always"
                    onChangeText={ text => {
                        let numberCost = parseInt(text) 
                        setTripDetails({ ...tripDetails, cost: numberCost }) }
                    }
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