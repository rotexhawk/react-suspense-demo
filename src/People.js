import React, { Suspense } from 'react'; 
import { Person } from './Person'; 

export const People = ({ resource }) => {
    const people = resource.person.read(); 
    console.log('people', people); 
    return people.map((person, i) => 
            <Suspense key={i} fallback={<h1>loading...</h1>}>
              <Person person={person} />
            </Suspense>
    );
}