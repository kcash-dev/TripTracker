import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import PlannerScreen from '../../screens/PlannerScreens/PlannerScreen';
import TripPlanScreen from '../../screens/PlannerScreens/TripPlanScreen';

const Stack = createStackNavigator();

const PlannerNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Planner" component={ PlannerScreen } />
        <Stack.Screen name="Trip Planner" component={ TripPlanScreen } />
    </Stack.Navigator>
  );
}

export default PlannerNavigation;