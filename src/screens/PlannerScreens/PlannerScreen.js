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
import { CheckList } from '../../components/Checklist';
import moment from 'moment';

internationalThingsToDo = [
  {
      toDo: "Get passport"
  },
  {
      toDo: "Apply for visa from destination country"
  },
  {
      toDo: "Find and book a flight"
  },
  {
      toDo: "Get any required vaccinations"
  },
  {
      toDo: "Find and book accommodation"
  },
  {
      toDo: "Pack"
  },
  {
      toDo: "Look up things to do in your destination country"
  },
  {
      toDo: "Learn some basic phrases in the local language"
  },
  {
      toDo: "Enjoy your trip!"
  }
];

domesticThingsToDo = [
  {
      toDo: "Find and book a flight"
  },
  {
      toDo: "Find and book accommodation"
  },
  {
      toDo: "Look up things to do in your destination"
  },
  {
      toDo: "Pack"
  },
  {
      toDo: "Enjoy your trip!"
  }
]

const PlannerScreen = ({ navigation }) => {
    const [ trip, setTrip ] = useContext(TripContext);
    const formattedStartDate = moment(trip.startDate).format("MMMM Do YYYY");
    const formattedEndDate = moment(trip.startDate).add(trip.numberOfDays, 'days').format("MMMM Do YYYY");

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
                <Text style={[ { fontSize: 48, color: colors.fourthColor }, tw.style('text-center', 'my-10') ]}>{ trip.name }</Text>
              </View>
              <Text style={[ { fontSize: 30 }, tw.style('text-center', 'font-bold') ]}>Dates</Text>
              <View style={ tw.style('flex-row', 'justify-center', 'my-3') }>
                <Text style={[ { fontSize: 18, color: colors.fourthColor },  tw.style('text-center') ]}>{ formattedStartDate } - </Text>
                <Text style={[ { fontSize: 18, color: colors.fourthColor },  tw.style('text-center') ]}>{ formattedEndDate }</Text>
              </View>
              <Text style={[ { fontSize: 30, color: colors.fourthColor }, tw.style('text-center', 'font-bold', 'mt-5') ]}>Trip Cost</Text>
              <View>
                <Text style={[ { fontSize: 44, color: colors.fourthColor }, tw.style('text-center') ]}>{ trip.currency }{ trip.cost }</Text>
              </View>
              <Text style={[ { fontSize: 30, color: colors.fourthColor }, tw.style('text-center', 'font-bold', 'mt-5') ]}>Trip Notes</Text>
              <View style={ tw.style('bg-white', 'w-3/4', 'self-center', 'rounded-md', 'mt-3', 'shadow-lg') }>
                <Text style={[ { fontSize: 24, color: colors.fourthColor }, tw.style('text-center', 'p-5') ]}>{ trip.details }</Text>
              </View>
              { trip.inOrOut === 'International' ?
                <CheckList 
                  data={ internationalThingsToDo }
                />
              :
                <CheckList 
                  data={ domesticThingsToDo }
                />
              }
            </View>
        }
      </View>
    );
}

export default PlannerScreen;