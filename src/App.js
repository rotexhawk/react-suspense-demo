import React, { Suspense, SuspenseList } from 'react';
import './App.css';
import { Person } from './Person';
import { Person2 } from './Person2';

function App() {

    return (
        <div className="App">
            <SuspenseList revealOrder="forwards">
                <Suspense fallback={<h1>loading person 1</h1>}>
                    <Person num="person1" />
                </Suspense>
                <Suspense fallback={<h1>loading person 2</h1>}>
                    <Person2  num="person2" />
                </Suspense>
                {/* <Suspense fallback={<h1>loading person 3</h1>}>
                    <Person resource={resource} num="person3" />
                </Suspense>
                <Suspense fallback={<h1>loading person 4</h1>}>
                    <Person resource={resource} num="person4" />
                </Suspense>
                <Suspense fallback={<h1>loading person 5</h1>}>
                    <Person resource={resource} num="person5" />
                </Suspense>
                <Suspense fallback={<h1>loading person 6</h1>}>
                    <Person resource={resource} num="person6" />
                </Suspense> */}
            </SuspenseList>
        </div>
    );
}

export default App;
