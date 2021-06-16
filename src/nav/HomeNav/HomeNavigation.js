import * as React from 'react';
import { 
    View, 
    Text 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../../screens/HomeScreens/HomeScreen';
import EnterExpensesScreen from '../../screens/HomeScreens/EnterExpensesScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Enter Expense" component={ EnterExpensesScreen } />
    </Stack.Navigator>
  );
}

export default HomeNavigation;