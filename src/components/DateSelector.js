import React, { useState } from 'react';
import { 
    TouchableOpacity,
    View 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ButtonComp } from '../components/Button';
import tw from 'tailwind-react-native-classnames';

export const DateSelector = () => {
    const [ day, setDay ] = useState('');
    const [ month, setMonth ] = useState('');
    const [ year, setYear ] = useState('');

    const [ showMonth, setShowMonth ] = useState(false);
    const [ showDay, setShowDay ] = useState(false);
    const [ showYear, setShowYear ] = useState(false);

    return (
        <View style={[ { marginTop: -20 }, tw.style('flex-row') ]}>
            <Picker
                selectedValue={ month }
                onValueChange={(itemValue, itemIndex) =>
                    setMonth(itemValue)
                }
                style={ tw.style('w-2/5') }
            >
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
                <Picker.Item label="March" value="March" />
                <Picker.Item label="April" value="April" />
                <Picker.Item label="May" value="May" />
                <Picker.Item label="June" value="June" />
                <Picker.Item label="July" value="July" />
                <Picker.Item label="August" value="August" />
                <Picker.Item label="September" value="September" />
                <Picker.Item label="October" value="October" />
                <Picker.Item label="November" value="November" />
                <Picker.Item label="December" value="December" />
            </Picker>
            <Picker
                selectedValue={ day }
                onValueChange={(itemValue, itemIndex) =>
                    setDay(itemValue)
                }
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
                onValueChange={(itemValue, itemIndex) =>
                    setYear(itemValue)
                }
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
    )
}