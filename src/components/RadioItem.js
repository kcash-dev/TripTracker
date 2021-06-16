import  React, { useState, useContext } from 'react';
import { RadioButton } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { TripContext } from '../context/TripContext';

export const RadioItem = ({ firstItem, secondItem, tripDets, setDets }) => {
  const [ value, setValue ] = useState();
  const tripDetails = tripDets;
  const setDetails = (value) => {
    setDets(value)
  }

  return (
    <RadioButton.Group onValueChange={value => setDetails({...tripDetails, inOrOut: value})} value={value}>
      <RadioButton.Item style={ tw.style('border-2', 'border-black', 'rounded-full', 'bg-white', 'mb-3', 'shadow-lg') } label={ firstItem } value={ firstItem } />
      <RadioButton.Item style={ tw.style('border-2', 'border-black', 'rounded-full', 'bg-white', 'shadow-lg' )} label={ secondItem } value={ secondItem } />
    </RadioButton.Group>
  );
};