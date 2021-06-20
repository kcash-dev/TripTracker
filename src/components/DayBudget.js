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

    const slicedCost = parseInt(cost.slice(1, cost.length))
    const tripCost = parseInt(slicedCost)

    const dailyBudget = tripCost / diffInDays;
    finalBudget = dailyBudget.toFixed(2);


    return (
        <View>
            <Text style={[ { fontSize: 48 }, tw.style('text-white', 'self-center', 'text-center') ]}>Remaining Daily Budget</Text>
            <Text style={[ { fontSize: 72 }, tw.style('text-white', 'm-10', 'font-bold', 'self-center') ]}>${ finalBudget }</Text>
        </View>
    )
}