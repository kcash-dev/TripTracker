import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native';
import { colors } from '../../assets/Color';
import { ExpenseInput } from '../../components/Inputs';
import tw from 'tailwind-react-native-classnames';

// Components
import { DayBudget } from '../../components/DayBudget';
import { TripContext } from '../../context/TripContext';
import { CheckList } from '../../components/Checklist';
import { useEffect } from 'react/cjs/react.development';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const image = { uri: 'https://i.imgur.com/Xgyoy53.jpg' };

const addedExpenses = [];

const HomeScreen = ({ navigation }) => {
  const [ trip, setTrip ] = useContext(TripContext);

  const [ refresh, setRefresh ] = useState(false);

  const isTrip = trip.isTrip;

  console.log(trip);

  const addExpense = (expense) => {
    addedExpenses.push(expense)
    setTrip({...trip, cost: trip.cost += expense.extraInfo })
    setRefresh(!refresh)
  }

  useEffect(() => {
    setTrip({...trip, expenses: addedExpenses})
  }, [addedExpenses])

  const expenses = addedExpenses;


  return (
    <View 
      style={[ { backgroundColor: colors.primaryColor, height: screenHeight, width: screenWidth }, tw.style( 'items-center') ]}
    >
      { !isTrip ?
        <ImageBackground source={ image } style ={{ resizeMode: 'cover' }, tw.style('flex-1', 'opacity-80') }>
          <View style={ tw.style( 'items-center', 'justify-center')}>
            <Text style={ tw.style('text-center', 'mt-40', 'mx-10', 'text-xl') }>Welcome! You don't have a trip planned yet, but we have a feeling that's about to change.</Text>
          </View>
        </ImageBackground>
        :
        <View style={ tw.style('w-3/4') }>
          <DayBudget />
        </View>
      }
      { isTrip ?
        <View style={ tw.style( 'w-full', 'self-center') }>
          <ExpenseInput 
            addExp={ addExpense }
            refreshState={ refresh }
          />
          <CheckList 
            data={ expenses }
            refresh={ refresh }
          />
        </View>
        :
        null
      }
    </View>
  );
}

const styles = StyleSheet.create({

})

export default HomeScreen;