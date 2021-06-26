import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Dropdown
} from 'sharingan-rn-modal-dropdown';
import tw from 'tailwind-react-native-classnames';

export const currencies = [
    {
      value: 'USD',
      label: 'United States Dollar',
      icon: '$',
    },
    {
      value: 'GBP',
      label: 'Pounds Sterling',
      icon: '£'
    },
    {
      value: 'EUR',
      label: 'Euro',
      icon: '€',
    },
    {
      value: 'JPY',
      label: 'Japanese Yen',
      icon: '¥'
    },
    {
        value: 'CNY',
        label: 'Chinese Yuan',
        icon: '¥'
    },
    {
        value: 'AUD',
        label: 'Australian Dollars',
        icon: '$'
    },
    {
        value: 'CAD',
        label: 'Canadian Dollars',
        icon: '$'
    },
    {
        value: 'INR',
        label: 'Indian Rupee',
        icon: '₹'
    },
    {
        value: 'MXN',
        label: 'Mexican Peso',
        icon: '$'
    },
    {
        value: 'THB',
        label: 'Thai Baht',
        icon: '฿'
    }
  ];

export const DropDownPicker = () => {
    const [valueSS, setValueSS] = useState('');
    const onChangeSS = (value) => setValueSS(value.icon)
  
    return (
      <View
        style={{
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <ScrollView>
          <View style={ tw.style('w-40', 'flex-1') }>
            <Dropdown
              label="$"
              data={ currencies }
              enableSearch
              value={valueSS}
              onChange={onChangeSS}
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