import React, { useState } from 'react';
import { 
    TouchableOpacity,
    View 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'tailwind-react-native-classnames';
import moment from "moment";
import { ButtonComp } from './Button';

export const DateSelector = ({ getDate, show }) => {
    const [ day, setDay ] = useState(moment().date() + 1);
    const [ month, setMonth ] = useState(moment().month());
    const [ year, setYear ] = useState(moment().year());

    const date = new Date(year, month, day);

    const setShow = () => {
        show()
    }

    const getStartDate = () => {
        getDate(date);
        setShow();
    }

    return (
        <View>
            <View style={ tw.style('w-1/4', 'justify-center', 'self-center')}>
                <ButtonComp
                    title="Submit"
                    callback={ getStartDate }
                />
            </View>
            <View style={ tw.style('flex-row')}>
                <Picker
                    selectedValue={ month }
                    onValueChange={(itemValue, itemIndex) => {
                        setMonth(itemValue)
                    }}
                    style={ tw.style('w-2/5') }
                >
                    <Picker.Item label="January" value="0" />
                    <Picker.Item label="February" value="1" />
                    <Picker.Item label="March" value="2" />
                    <Picker.Item label="April" value="3" />
                    <Picker.Item label="May" value="4" />
                    <Picker.Item label="June" value="5" />
                    <Picker.Item label="July" value="6" />
                    <Picker.Item label="August" value="7" />
                    <Picker.Item label="September" value="8" />
                    <Picker.Item label="October" value="9" />
                    <Picker.Item label="November" value="10" />
                    <Picker.Item label="December" value="11" />
                </Picker>
                <Picker
                    selectedValue={ day }
                    onValueChange={(itemValue, itemIndex) => {
                        setDay(itemValue);
                    }}
                    style={ tw.style('w-1/5') }
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="13" value="13" />
                    <Picker.Item label="14" value="14" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="16" value="16" />
                    <Picker.Item label="17" value="17" />
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="19" value="19" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="21" value="21" />
                    <Picker.Item label="22" value="22" />
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="26" value="26" />
                    <Picker.Item label="27" value="27" />
                    <Picker.Item label="28" value="28" />
                    <Picker.Item label="29" value="29" />
                    <Picker.Item label="30" value="30" />
                    { month === 'January' || month === 'March' || 
                    month === 'May' || month === 'July' || month === 'August' ||
                    month === 'October' || month === 'December' ?
                        <Picker.Item label="31" value="31" />
                        :
                        null
                    }
                </Picker>
                <Picker
                    selectedValue={ year }
                    onValueChange={(itemValue, itemIndex) => {
                        setYear(itemValue)
                    }}
                    style={ tw.style('w-2/5') }
                >
                    <Picker.Item label="2021" value="2021" />
                    <Picker.Item label="2022" value="2022" />
                    <Picker.Item label="2023" value="2023" />
                    <Picker.Item label="2024" value="2024" />
                    <Picker.Item label="2025" value="2025" />
                    <Picker.Item label="2026" value="2026" />
                    <Picker.Item label="2027" value="2027" />
                    <Picker.Item label="2028" value="2028" />
                </Picker>
            </View>
        </View>
    )
}