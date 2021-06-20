import React, { useState } from 'react';
import {
  View,
  Image, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { colors } from '../../assets/Color';
import { ExpenseInput, DailyBudgetInput } from '../../components/Inputs';
import tw from 'tailwind-react-native-classnames';

// Components
import { ExpensesBox } from '../../components/ExpensesBox';
import { DayBudget } from '../../components/DayBudget'
import { icons } from '../../assets/Icons';

const HomeScreen = ({ navigation }) => {
  const [ state, setState ] = useState({
    expenses: []
  });

  const [ budget, setBudget ] = useState(0);
  const [ hideBudget, setHideBudget ] = useState(false);


  const getExpense = (object) => {
    setState(prevState => ({ expenses: [...prevState.expenses, object ] }))
  }

  const getBudget = (val) => {
    setBudget(val);
    hideTheBudget();
  }

  const hideTheBudget = () => {
    setHideBudget(!hideBudget)
  }

  return (
    <View 
      style={[ { backgroundColor: colors.primaryColor }, tw.style('flex-1', 'justify-center', 'items-center') ]}
    >
      {/* <DayBudget budget={ budget }/> */}
      <View style={ tw.style('w-3/4') }>
        {/* <ExpenseInput 
          callback={ getExpense }
        /> */}
        { !hideBudget ? 
           <DayBudget />
        :
        <TouchableOpacity
          onPress={ hideTheBudget }
        >
          <Image 
              source={{ uri: icons.edit }}
              style={ tw.style('w-10', 'h-10', 'absolute', 'right-4', 'bottom-14', 'opacity-80') }
          />
        </TouchableOpacity>
        }
      </View>
      <ExpensesBox 
        expenses = { state.expenses }
      />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default HomeScreen;