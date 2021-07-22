import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import { 
    View,
    Text
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { colors } from '../assets/Color';
import { TripContext } from '../context/TripContext';


export const DayBudget = ({ budget }) => {
    const [ trip, setTrip] = useContext(TripContext);

    const startDate = moment(trip.startDate)
    const now = moment();
    const diffInDays = startDate.diff(now, 'days');
    let finalBudget;
    const cost = trip.cost;

    const slicedCost = parseInt(cost)
    const tripCost = parseInt(slicedCost)

    const dailyBudget = tripCost / diffInDays;
    finalBudget = dailyBudget.toFixed(2);
    console.log(startDate)


    return (
        <View>
            <Text style={[ { fontSize: 48, color: colors.fourthColor }, tw.style( 'self-center', 'text-center') ]}>Savings Needed Today</Text>
            <Text style={[ { fontSize: 50, color: colors.secondaryColor }, tw.style( 'm-10', 'font-bold', 'self-center') ]}>{ trip.currency }{ finalBudget }</Text>
        </View>
    )
}