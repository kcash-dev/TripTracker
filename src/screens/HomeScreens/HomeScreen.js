import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { colors } from '../../assets/Color';
import { ExpenseInput } from '../../components/Inputs';
import tw from 'tailwind-react-native-classnames';

// Components
import { DayBudget } from '../../components/DayBudget';
import { TripContext } from '../../context/TripContext';
import { CheckList } from '../../components/Checklist';

const data = [
  
]

const HomeScreen = ({ navigation }) => {

  const [ trip, setTrip ] = useContext(TripContext);

  const isTrip = trip.isTrip;

  const addExpense = (expense) => {
    data.push(expense)
  }

  console.log(data);

  return (
    <View 
      style={[ { backgroundColor: colors.primaryColor }, tw.style('flex-1', 'items-center', 'top-36') ]}
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
      { isTrip ?
        <View style={ tw.style( 'w-full', 'h-full', 'self-center') }>
          <ExpenseInput 
            addExp={ addExpense }
          />
          <CheckList 
            data={ data }
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