import React from 'react';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import { colors } from '../assets/Color';
import tw from 'tailwind-react-native-classnames';

export const ButtonComp = ({ callback, title }) => {

    const useCallback = () => {
        callback();
    }

    return (
        <Button
            onPress={ useCallback }
            style={[ 
                { backgroundColor: colors.popoutColor },
                tw.style('rounded-lg', 'h-12', 'justify-center', 'items-center', 'shadow-lg') 
            ]}
        >
            <Text style={ tw.style('text-white') }>{ title }</Text>
        </Button>
    )
}