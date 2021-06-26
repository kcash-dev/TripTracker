import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { colors } from '../../assets/Color';
import { ExpenseInput, DailyBudgetInput } from '../../components/Inputs';
import tw from 'tailwind-react-native-classnames';

// Components
import { ExpensesBox } from '../../components/ExpensesBox';
import { DayBudget } from '../../components/DayBudget';
import { TripContext } from '../../context/TripContext';

const HomeScreen = ({ navigation }) => {
  const [ state, setState ] = useState({
    expenses: []
  });

  const [ trip, setTrip ] = useContext(TripContext);

  const isTrip = trip.isTrip;
  console.log(isTrip)

  return (
    <View 
      style={[ { backgroundColor: colors.primaryColor }, tw.style('flex-1', 'justify-center', 'items-center') ]}
    >
      { !isTrip ?
        <View style={ tw.style('w-3/4', 'items-center', 'justify-center')}>
          <Text>Welcome! You don't have a trip planned yet, but we have a feeling that's about to change.</Text>
        </View>
        :
        <View style={ tw.style('w-3/4') }>
          <DayBudget />
        </View>
      }
      <ExpensesBox 
        expenses = { state.expenses }
      />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default HomeScreen;