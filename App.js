import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TripProvider } from './src/context/TripContext';

// Navs
import HomeNavigation from './src/nav/HomeNav/HomeNavigation';
import MonthlyExpensesScreen from './src/screens/MonthlyExpensesScreens/MonthlyExpensesScreen';
import PlannerNav from './src/nav/PlannerNav/PlannerNav';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TripProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"
          headerMode="none"
        >
          <Drawer.Screen name="Home" component={ HomeNavigation } />
          <Drawer.Screen name="Monthly Expenses" component={ MonthlyExpensesScreen } />
          <Drawer.Screen name="Planner" component={ PlannerNav } />
        </Drawer.Navigator>
      </NavigationContainer>
    </TripProvider>
  );
}
