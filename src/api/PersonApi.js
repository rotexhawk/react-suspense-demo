const fetchPerson = () => {
    return fetch('https://randomuser.me/api').then(x => x.json()).then(x => x.results[0]);
};

export const wrapPromise = (promise) => {
    let status = 'pending';
    let result = '';
    let suspender = promise.then(r => {
        status = 'success';
        result = r;
    }, e => {
        status = 'error';
        result = e;
    })

    return {
        read(){
            if (status === 'pending'){
                throw suspender;
            } else if (status === 'error'){
                throw result;
            }
            return result;
        }
    }
}

export const createResource = () => {
    return {
        person1: wrapPromise(fetchPerson()),
        person2: wrapPromise(fetchPerson()),
        person3: wrapPromise(fetchPerson()),
        person4: wrapPromise(fetchPerson()),
        person5: wrapPromise(fetchPerson()),
        person6: wrapPromise(fetchPerson())
    }
}