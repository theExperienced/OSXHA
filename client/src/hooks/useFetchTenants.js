import { useState, useEffect } from 'react';
import { useMutation, queryCache, useQuery } from 'react-query';
import _ from 'lodash';

import { fetchTenants } from '../api/tenant';


const useFetchTenants = currQuery => {
    const [ errorCount, setErrorCount ] = useState(0);
    const [ newError, setNewError ] = useState(null);

    useEffect(() => {
        if(errorCount > 3) {
            setNewError('error fetching todos');
            setErrorCount(0);
        }
    }, [errorCount]);

    const query = useQuery(['tenants', currQuery], fetchTenants, {
        refetchAllOnWindowFocus: false, 
        refetchInterval: 1000 * 60 * 5,
        retry: false,
        onError: err => {
            setErrorCount(prev => prev++);
        }
    });

    return { ...query, newError };
};

export default useFetchTenants;