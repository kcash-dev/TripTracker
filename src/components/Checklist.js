import React, { useContext } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
    Image 
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

const Item = ({ itemName, extraInfo, currency }) => (
    <View style={ tw.style('flex-1', 'flex-row', 'items-center', 'my-5', 'mx-3') }>
        <TouchableOpacity

        >
            <Image 
                source={{ uri: 'https://i.imgur.com/bLlL6Df.png' }}
                style={[ { width: 25, height: 25 }, tw.style() ]}
            />
        </TouchableOpacity>
        <Text style={[ { fontSize: 20 }, tw.style('mx-5') ]}>{ itemName }</Text>
        <Text style={[ { fontSize: 20 }, tw.style('ml-5') ]}>{ currency }</Text>
        <Text style={[ { fontSize: 20 }, tw.style('ml-2') ]}>{ extraInfo }</Text>
    </View>
)

export const CheckList = ({ data, refreshState }) => {
    const renderItem = ({ item }) => (
        <Item 
            itemName={ item.name }
            extraInfo={ item.extraInfo }
            currency={ item.currency }
        />
    )

    
    const refresh = refreshState;
    const dataToUse = data;

    console.log(dataToUse);


    return (
        <View style={ tw.style( 'w-3/4', 'h-1/3', 'mt-10', 'bg-white', 'rounded-lg', 'shadow-lg', 'self-center') }>
            <FlatList 
                data={ dataToUse }
                renderItem={ renderItem }
                keyExtractor={ item => item.name }
                extraData={ refresh }
            />
        </View>
    )
}