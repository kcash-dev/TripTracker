import React from 'react';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import { colors } from '../assets/Color';
import tw from 'tailwind-react-native-classnames';

export const ButtonComp = ({ callback, title, }) => {

    const useCallback = () => {
        callback();
    }

    return (
        <Button
            onPress={ useCallback }
            style={[ 
                { backgroundColor: colors.popoutColor },
                // tw.style('rounded-md', 'h-12', 'w-1/2', 'justify-center', 'items-center', 'shadow-lg') 
            ]}
        >
            <Text>{ title }</Text>
        </Button>
    )
}