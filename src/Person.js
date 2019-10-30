import React from 'react';


export const Person = ({ resource, num  }) => {
    const person = resource[num].read();
    console.log("calling person", num)
    return (<div>Loaded {num}: - {person.name.first}</div>)
};