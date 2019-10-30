import React from 'react'; 


export const Person = ({ resource, num  }) => {
    const person = resource[num].read(); 
    return (<div>Loaded {num}: - {person.name.first}</div>)
}; 