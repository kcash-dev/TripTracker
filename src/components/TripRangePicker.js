import React, { useState, useEffect } from 'react';
import {
  View, 
  Button, 
  Platform,
  TouchableOpacity,
  Text
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'tailwind-react-native-classnames';
import moment from "moment";

export const TripDateRangePicker = ({ tripDets, setDets }) => {
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const tripDetails = tripDets;

  const setDetails = (value) => {
    setDets(value)
  }

  console.log(moment(startDate).format('MMMM Do YYYY'));
  console.log(moment(endDate).format('MMMM Do YYYY'));

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  useEffect(() => {
      const fixedDetail = moment(startDate).format()
      setDetails({ ...tripDetails, startDate: fixedDetail })
  }, [ startDate ]);

  useEffect(() => {
    const fixedDetail = moment(endDate).format()
    setDetails({ ...tripDetails, endDate: fixedDetail })
  }, [ endDate ]);

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (
    <View>
      <View style={ tw.style('items-center') }>
        <TouchableOpacity 
          onPress={ () => setShow(!show) } 
          style={ tw.style('bg-white', 'mb-5', 'border-2', 'border-black', 'rounded-full', 'shadow-lg' ) }
        >
          <Text style={ tw.style('p-3', 'text-center') }>Select date</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <View style={ tw.style('flex-row', 'w-2/3', 'mb-5') }>
          <DateTimePicker
            testID="StartDatePicker"
            value={ startDate }
            is24Hour={ true }
            display="default"
            onChange={ onChangeStart }
            style={ tw.style('w-1/2') }
          />
          <DateTimePicker
            testID="EndDatePicker"
            value={ endDate }
            is24Hour={ true }
            display="default"
            onChange={ onChangeEnd }
            style={ tw.style('w-1/2') }
          />
        </View>
      )}
    </View>
  );
};