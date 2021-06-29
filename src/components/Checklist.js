import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
    Image 
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

const Item = ({ toDo }) => (
    <View style={ tw.style('flex-1', 'flex-row', 'items-center', 'my-5', 'mx-3') }>
        <TouchableOpacity>
            <Image 
                source={{ uri: 'https://i.imgur.com/bLlL6Df.png' }}
                style={[ { width: 25, height: 25 }, tw.style() ]}
            />
        </TouchableOpacity>
        <Text style={[ { fontSize: 20 }, tw.style('mx-5') ]}>{ toDo }</Text>
    </View>
)

export const CheckList = ({ data }) => {
    const renderItem = ({ item }) => (
        <Item toDo={ item.toDo }/>
    )

    const dataToUse = data;

    return (
        <View style={ tw.style( 'w-3/4', 'h-1/3', 'mt-10', 'bg-white', 'rounded-lg', 'shadow-lg', 'self-center') }>
            <FlatList 
                data={ dataToUse }
                renderItem={ renderItem }
                keyExtractor={ item => item.toDo }
            />
        </View>
    )
}