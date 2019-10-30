import React, { Suspense } from 'react';
import './App.css';
import { createResource } from './PersonApi';
import { Person } from './Person'; 

const resource = createResource(); 

function App() {

console.log('resource', resource); 

  return (
      <div className="App">
        <Suspense fallback={<h1>loading...</h1>} revealOrder="together">
          <Suspense fallback={<h1>loading person 1</h1>}>
            <Person resource={resource} num="person1" />
          </Suspense>
          <Suspense fallback={<h1>loading person 2</h1>}>
            <Person resource={resource} num="person2" />
          </Suspense>
          <Suspense fallback={<h1>loading person 3</h1>}>
            <Person resource={resource} num="person3"/>
          </Suspense>
          <Suspense fallback={<h1>loading person 4</h1>}>
            <Person resource={resource} num="person4"/>
          </Suspense>
          <Suspense fallback={<h1>loading person 5</h1>}>
            <Person resource={resource} num="person5"/>
          </Suspense>
          <Suspense fallback={<h1>loading person 6</h1>}>
            <Person resource={resource} num="person6"/>
          </Suspense>
        </Suspense>
      </div>
  );
}

export default App;
