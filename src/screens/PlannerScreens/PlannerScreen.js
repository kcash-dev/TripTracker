import React, { useState, useContext } from 'react';
import { 
    View, 
    Button, 
    StyleSheet,
    Text,
    Dimensions,
    ScrollView, 
    ImageBackground
} from 'react-native';
import { colors } from '../../assets/Color';
import tw from 'tailwind-react-native-classnames';
import { ButtonComp } from '../../components/Button';
import { TripContext } from '../../context/TripContext';
import { CheckList } from '../../components/Checklist';
import moment from 'moment';

const { height: screenHeight } = Dimensions.get('window');

internationalThingsToDo = [
  {
      name: "Get passport",
      extraInfo: ''
  },
  {
      name: "Apply for visa from destination country",
      extraInfo: ''
  },
  {
      name: "Find and book a flight",
      extraInfo: ''
  },
  {
      name: "Get any required vaccinations",
      extraInfo: ''
  },
  {
      name: "Find and book accommodation",
      extraInfo: ''
  },
  {
      name: "Pack",
      extraInfo: ''
  },
  {
      name: "Look up things to do in your destination country",
      extraInfo: ''
  },
  {
      name: "Learn some basic phrases in the local language",
      extraInfo: ''
  },
  {
      name: "Enjoy your trip!",
      extraInfo: ''
  }
];

domesticThingsToDo = [
  {
      name: "Find and book a flight",
      extraInfo: ''
  },
  {
      name: "Find and book accommodation",
      extraInfo: ''
  },
  {
      name: "Look up things to do in your destination",
      extraInfo: ''
  },
  {
      name: "Pack",
      extraInfo: ''
  },
  {
      name: "Enjoy your trip!",
      extraInfo: ''
  }
]

const image = { uri: 'https://i.imgur.com/7ZrafF1.jpg' };

const PlannerScreen = ({ navigation }) => {
    const [ trip, setTrip ] = useContext(TripContext);
    const formattedStartDate = moment(trip.startDate).format("MMMM Do YYYY");
    const formattedEndDate = moment(trip.startDate).add(trip.numberOfDays, 'days').format("MMMM Do YYYY");

    return (
      <View 
        style={[ { backgroundColor: colors.primaryColor, height: screenHeight }, tw.style( 'items-center', 'mt-10', 'w-full') ]}
      >
        { !trip.isTrip ?
            <View style={ tw.style('w-1/2', 'justify-center', 'flex-1')}>
                <Text style={ tw.style('mb-10', 'text-center', 'text-lg')}>You don't have a trip planned yet! Let's get to planning one.</Text>
                <ButtonComp 
                    title="Start Trip"
                    callback={ () => navigation.navigate('Trip Planner') }
                />
            </View>
            :
            <ScrollView style={ tw.style('w-full')}>
              <ImageBackground source={ image } style ={{ resizeMode: 'cover' }, tw.style('opacity-80', 'h-36', 'my-2', 'w-full') }>
                <View>
                  <Text style={[ { fontSize: 48, color: colors.fourthColor }, tw.style('text-center', 'my-10', 'bg-white', 'bg-opacity-60', 'w-1/2', 'self-center') ]}>{ trip.name }</Text>
                </View>
              </ImageBackground>
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
            </ScrollView>
        }
      </View>
    );
}

export default PlannerScreen;