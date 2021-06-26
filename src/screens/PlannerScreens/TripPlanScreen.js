import React from 'react';
import { 
    View,
    Text
} from 'react-native';
import { colors } from '../../assets/Color';
import tw from 'tailwind-react-native-classnames';
import { TripInputs } from '../../components/Inputs';

const TripPlanScreen = ({ navigation }) => {
    return (
      <View 
        style={[ { backgroundColor: colors.primaryColor }, tw.style('flex-1', 'w-full') ]}
      >
        <Text style={[ { fontSize: 48, color: colors.thirdColor }, tw.style('text-center', 'my-10') ]}>Let's plan a trip</Text>
        <TripInputs />
      </View>
    );
}

export default TripPlanScreen;