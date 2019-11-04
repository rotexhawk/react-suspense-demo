import React from 'react';
import useSWR from 'swr'

const FetchSuspense = endpoint => {
    console.log('calling me with', endpoint)
    return fetch(endpoint).then(data => data.json()).then(res => res.results[0])
}

export const Person2 = ({ resource, num  }) => {
     const { data } = useSWR('https://randomuser.me/api?results=10', FetchSuspense, { suspense: true })
     console.log("calling person2:", num)
     return (<div>Loaded {num}: - {data.name.first}</div>)
};