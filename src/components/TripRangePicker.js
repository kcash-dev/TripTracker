import React, {useState} from 'react';
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

export const TripRangePicker = ({ tripDets, setDets }) => {
  const [ date, setDate]  = useState(new Date(1598051730000));
  const [ startDate, setStartDate] = useState(new Date(1598051730000));
  const [ endDate, setEndDate] = useState(new Date(1598051730000));
  const [ show, setShow ] = useState(false);

  const tripDetails = tripDets;

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setStartDate(selectedDate);
    const fixedStartDate = moment(startDate).format('MMMM Do YYYY');
    setDetails({ ...tripDetails, startDate: fixedStartDate })
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setEndDate(selectedDate);
    const fixedEndDate = moment(endDate).format('MMMM Do YYYY');
    setDetails({ ...tripDetails, endDate: fixedEndDate })
  };

  const setDetails = (value) => {
    setDets(value)
  }

  const showMode = () => {
    setShow(!show);
  };

  return (
    <View style={ tw.style('mb-10') }>
      <View style={ tw.style('items-center') }>
        <TouchableOpacity 
          onPress={showMode}
          style={ tw.style('border-2', 'rounded-full', 'shadow-lg', 'border-black', 'bg-white' ) }
        >
          <Text style={[ { fontSize: 20 }, tw.style('p-3') ]}>Select trip dates</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <View style={ tw.style('flex-row', 'justify-center', 'mt-5')}>
          <DateTimePicker
            testID="startDateTimePicker"
            value={ startDate }
            mode={ 'date' }
            is24Hour={ true }
            display="default"
            onChange={ setStartDate }
            style={{ width: 100 }}
          />
          <DateTimePicker
            testID="endDateTimePicker"
            value={ endDate }
            mode={ 'date' }
            is24Hour={ true }
            display="default"
            onChange={ setEndDate }
            style={{ width: 100 }}
          />
        </View>
      )}
    </View>
  );
};