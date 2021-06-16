import React, { useState, useContext } from 'react';
import { 
    View, 
    Button, 
    StyleSheet,
    Text 
} from 'react-native';
import { colors } from '../../assets/Color';
import tw from 'tailwind-react-native-classnames';
import { ButtonComp } from '../../components/Button';
import { TripContext } from '../../context/TripContext';

const PlannerScreen = ({ navigation }) => {
    const [ trip, setTrip ] = useContext(TripContext);

    
    console.log(trip);

    return (
      <View 
        style={[ { backgroundColor: colors.primaryColor }, tw.style('flex-1', 'items-center') ]}
      >
        { !trip.isTrip ?
            <View style={ tw.style('w-1/2', 'justify-center', 'flex-1')}>
                <Text style={ tw.style('m-10', 'text-center')}>You don't have a trip planned yet! Let's get to planning one.</Text>
                <ButtonComp 
                    title="Start Trip"
                    callback={ () => navigation.navigate('Trip Planner') }
                />
            </View>
            :
            <View>
              <View>
                <Text style={[ { fontSize: 60 }, tw.style('text-center', 'text-white', 'my-10') ]}>{ trip.name }</Text>
              </View>
              <View>
                <Text style={[ { fontSize: 52 }, tw.style('text-center', 'text-white', 'font-bold') ]}>Destination</Text>
                <Text style={[ { fontSize: 48 },  tw.style('text-center', 'text-white') ]}>{ trip.destination }</Text>
              </View>
              <View>
                <Text style={[ { fontSize: 44 }, tw.style('text-center', 'text-white') ]}>{ trip.cost }</Text>
              </View>
              <View style={ tw.style('bg-white', 'w-3/4', 'self-center', 'rounded-md', 'mt-10', 'shadow-lg')}>
                <Text style={[ { fontSize: 24 }, tw.style('text-center', 'p-5') ]}>{ trip.details }</Text>
              </View>
            </View>
        }
      </View>
    );
}

export default PlannerScreen;