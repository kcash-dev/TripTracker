import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Dropdown
} from 'sharingan-rn-modal-dropdown';
import tw from 'tailwind-react-native-classnames';

export const currencies = [
    {
      value: '$',
      label: 'USD',
      icon: '',
    },
    {
      value: '£',
      label: ' GBP',
      icon: ''
    },
    {
      value: '€',
      label: 'EUR',
      icon: '',
    },
    {
      value: '¥',
      label: 'JPY',
      icon: ''
    },
    {
        value: '¥',
        label: 'CNY',
        icon: ''
    },
    {
        value: '$',
        label: 'AUD',
        icon: ''
    },
    {
        value: '$',
        label: 'CAD',
        icon: ''
    },
    {
        value: '₹',
        label: 'INR',
        icon: ''
    },
    {
        value: '$',
        label: 'MXN',
        icon: ''
    },
    {
        value: '฿',
        label: ' THB',
        icon: ''
    }
  ];

export const DropDownPicker = ({ setDets, tripDets }) => {
    const [ valueSS, setValueSS ] = useState('');
    const onChangeSS = (value) => setValueSS(value);

    const sendCurrency = (value) => {
      setDets(value)
    };

    useEffect(() => {
      sendCurrency(valueSS);
    }, [valueSS]);
  
    return (
      <View
        style={[{
          flexDirection: 'column',
          height: '100%',
        }, tw.style('items-center')]}
      >
        <ScrollView>
          <View style={ tw.style('w-24', 'flex-1', 'mb-4', 'items-center') }>
            <Dropdown
              label="$"
              data={ currencies }
              enableSearch
              value={valueSS}
              onChange={ onChangeSS }
              style={ tw.style('bg-white')}
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonView: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
  });