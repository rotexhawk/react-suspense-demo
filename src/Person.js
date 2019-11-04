import React from 'react';
import useSWR from 'swr'

const FetchSuspense = endpoint => {
    console.log('calling me with', endpoint)
    return fetch(endpoint).then(data => data.json()).then(res => res.results[0], 1000)
}

export const Person = ({ resource, num  }) => {
     const { data } = useSWR('https://randomuser.me/api', FetchSuspense, { suspense: true, revalidateOnFocus: false })
     console.log("calling comp", data)
     return (<div>Loaded {num}: - {data.name.first}</div>)
};