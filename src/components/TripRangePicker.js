import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  Text
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import moment from "moment";
import { ButtonComp } from './Button';
import Slider from '@react-native-community/slider';
import { colors } from '../assets/Color';
import { DateSelector } from '../components/DateSelector';

export const TripDateRangePicker = ({ tripDets, setDets, setLeng }) => {
  const [ startDate, setStartDate ] = useState();
  const [ numberOfDays, setNumberOfDays ] = useState(1);
  const [ show, setShow ] = useState(false);

  const tripDetails = tripDets;

  const setDetails = () => {
    setDets(startDate)
  }

  const onSlide = (value => {
    setNumberOfDays(value)
  });

  const setLength = (value) => {
    setLeng(value);
  }

  const showOrNot = () => {
    setShow(!show)
  }

  useEffect(() => {
      const fixedDetail = moment(startDate).format()
      setDetails({ ...tripDetails, startDate: fixedDetail })
  }, [ startDate ]);

  useEffect(() => {
    setLength({ ...tripDetails, numberOfDays: numberOfDays })
  }, [ numberOfDays ]);

  const getStartDate = (value) => {
    setStartDate(value)
  }

  let titleText = '';

  if (!show && !startDate) {
    titleText = "Pick Start Date"
  } else if (!show && startDate) {
    titleText = "Edit Start Date"
  }

  let callbackFunction;

  if (!show && !startDate) {
    callbackFunction = () => {
      setShow(!show)
    }
  } else if (show && !startDate) {
      callbackFunction = () => {

      }
  } else if (!show && startDate) {

  }

  return (
    <View style={ tw.style('w-full')}>
      <View style={ tw.style('items-center', 'mb-5') }>
        { !show ? 
          <ButtonComp 
            callback={ callbackFunction }
            title={ titleText }
          />
          :
          null
        }
      </View>
      { show && (
        <View style={ tw.style('flex', 'mb-2', 'w-full') }>
          <DateSelector 
            getDate={ getStartDate }
            show={ showOrNot }
          />
          <Text style={ tw.style('text-center') }>Length of Trip</Text>
          <Text style={ tw.style('text-center', 'font-bold') }>{ numberOfDays } days</Text>
          <Slider
            style={ tw.style('w-5/6', 'self-center') }
            step={ 1 }
            minimumValue={ 1 }
            maximumValue={ 30 }
            minimumTrackTintColor={ colors.secondaryColor }
            maximumTrackTintColor={ colors.popoutColor }
            onValueChange={ value => onSlide(value) }
          />
        </View>
      )}
    </View>
  );
};