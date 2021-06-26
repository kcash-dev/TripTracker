import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  Text
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'tailwind-react-native-classnames';
import moment from "moment";
import { ButtonComp } from './Button';
import Slider from '@react-native-community/slider';
import { colors } from '../assets/Color';
import { DateSelector } from '../components/DateSelector';

export const TripDateRangePicker = ({ tripDets, setDets }) => {
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [ numberOfDays, setNumberOfDays ] = useState(1);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const tripDetails = tripDets;

  const setDetails = (value) => {
    setDets(value)
  }

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onSlide = (value => {
    setNumberOfDays(value)
  })

  console.log(numberOfDays);

  useEffect(() => {
      const fixedDetail = moment(startDate).format()
      setDetails({ ...tripDetails, startDate: fixedDetail, numberOfDays: numberOfDays })
  }, [ startDate ]);

  useEffect(() => {
    setDetails({ ...tripDetails, numberOfDays: numberOfDays })
}, [ numberOfDays ]);

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (
    <View style={ tw.style('w-full')}>
      <View style={ tw.style('items-center', 'mb-5') }>
        <ButtonComp 
          callback={ () => setShow(!show) }
          title="Pick Start Date"
        />
      </View>
      {show && (
        <View style={ tw.style('flex', 'mb-2', 'w-full') }>
          <DateSelector />
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