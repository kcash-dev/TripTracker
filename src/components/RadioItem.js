import  React, { useState, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useEffect } from 'react/cjs/react.development';
import tw from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../assets/Color';

export const RadioItem = ({ tripDets, setDets }) => {
  const [ value, setValue ] = useState("");
  const tripDetails = tripDets;
  const setDetails = (value) => {
    setDets(value)
  }
  const [ selected, setSelected ] = useState(false);

  console.log(tripDets)

  const setDestination = (val) => {
    setSelected(!selected);
    setValue(val);
  }

  useEffect(() => {
    setDetails({ ...tripDetails, inOrOut: value })
  }, [ value ]);

  return (
    <View style={ tw.style('flex-1', 'w-full', 'flex-row', 'mb-10', 'justify-evenly') }>
      { !selected ? 
        <TouchableOpacity 
          style={ tw.style('justify-center', 'items-center', 'w-1/3', 'h-36', 'shadow-lg', 'rounded-lg', 'bg-white') }
          onPress={ () => setDestination("Domestic") }
        >
          <Text style={{ fontSize: 24 }}>Domestic</Text>
          <MaterialCommunityIcons name="car-convertible" size={60} color="black" />
        </TouchableOpacity>
        :
        <TouchableOpacity 
          style={[ { backgroundColor: colors.popoutColor }, tw.style('justify-center', 'items-center', 'w-1/3', 'h-36', 'shadow-lg', 'rounded-lg') ]}
          onPress={ () => setDestination("Domestic") }
        >
          <Text style={[ { fontSize: 22 }, tw.style('text-white', 'font-bold') ]}>Domestic</Text>
          <MaterialCommunityIcons name="car-convertible" size={60} color="white" />
        </TouchableOpacity>
      }
      { selected ? 
        <TouchableOpacity 
          style={ tw.style('justify-center', 'items-center', 'w-1/3', 'h-36', 'shadow-lg', 'rounded-lg', 'bg-white') }
          onPress={ () => setDestination("International") }
        >
          <Text style={{ fontSize: 24 }}>International</Text>
          <MaterialCommunityIcons name="airplane-takeoff" size={60} color="black" />
        </TouchableOpacity>
      :
        <TouchableOpacity 
          style={[ { backgroundColor: colors.popoutColor }, tw.style('justify-center', 'items-center', 'w-1/3', 'h-36', 'shadow-lg', 'rounded-lg') ]}
          onPress={ () => setDestination("International") }
        >
          <Text style={[ { fontSize: 22 }, tw.style('text-white', 'font-bold') ]}>International</Text>
          <MaterialCommunityIcons name="airplane-takeoff" size={60} color="white" />
        </TouchableOpacity>
    }
    </View>
  );
};