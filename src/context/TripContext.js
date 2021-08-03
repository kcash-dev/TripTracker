import React, { useState } from 'react';

const TripContext = React.createContext([{}, () => {}]);

const TripProvider = (props) => {
    const [ trip, setTrip ] = useState({
        isTrip: false,
        name: '',
        details: '',
        date: '',
        cost: 0,
        startDate: '',
        endDate: '',
        numberOfDays: 0,
        currency: '$',
        expenses: []
    });
    
    return (
        <TripContext.Provider 
            value={
                [ trip, setTrip ]
            }
        >
            {props.children}
        </TripContext.Provider>
    );
}

export { TripContext, TripProvider };