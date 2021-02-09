import { useMutation, useQueryCache } from 'react-query';

import { removeTenant } from '../api/tenant';


const useRemoveTenant = () => {
    // const queryCache = useQueryCache();
    
    const { mutateAsync, status } = useMutation(removeTenant, {
        // onMutate: (tenantInfo) => {
        //     queryCache.cancelQueries('tenants');
        //     const currentTenants = queryCache.getQueryData('tenants');
        //     queryCache.setQueryData('tenants', currentData => {
        //         return currentData; 
        //     });
            
        //     return currentTenants;
        // },
        // onError: (err, newTenant, rollback) => {
        //     console.log('REACT QUERY ERROR', err, newTenant, rollback)
        // },
        // onSettled: () => {
        //     queryCache.refetchQueries('tenants');
        // },
    });

    return { mutateAsync, status };
};

export default useRemoveTenant;