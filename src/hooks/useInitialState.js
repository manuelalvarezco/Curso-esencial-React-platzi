import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ profiles, setProfile ] = useState([]);

    useEffect( () => {
        fetch(API)
                .then( resp => resp.json())
                .then( data => setProfile(data))
            
    }, []);

    return profiles;
}

export default useInitialState;