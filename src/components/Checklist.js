import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
    Image 
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

internationalThingsToDo = [
    {
        toDo: "Get passport"
    },
    {
        toDo: "Apply for visa from destination country"
    },
    {
        toDo: "Find and book a flight"
    },
    {
        toDo: "Get any required vaccinations"
    },
    {
        toDo: "Find and book accommodation"
    },
    {
        toDo: "Pack"
    },
    {
        toDo: "Look up things to do in your destination country"
    },
    {
        toDo: "Learn some basic phrases in the local language"
    },
    {
        toDo: "Enjoy your trip!"
    }
];

domesticThingsToDo = [
    {
        toDo: "Find and book a flight"
    },
    {
        toDo: "Find and book accommodation"
    },
    {
        toDo: "Look up things to do in your destination"
    },
    {
        toDo: "Pack"
    },
    {
        toDo: "Enjoy your trip!"
    }
]

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

export const CheckList = () => {
    const renderItem = ({ item }) => (
        <Item toDo={ item.toDo }/>
    )

    return (
        <View style={ tw.style( 'w-3/4', 'h-1/3', 'mt-10', 'bg-white', 'rounded-lg', 'shadow-lg') }>
            <FlatList 
                data={ internationalThingsToDo }
                renderItem={ renderItem }
                keyExtractor={ item => item.toDo }
            />
        </View>
    )
}