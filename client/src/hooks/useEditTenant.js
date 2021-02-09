import { useMutation, useQueryClient } from 'react-query';
import _ from 'lodash';

import { editTenant } from '../api/tenant';



const useEditTenant = () => {
    const queryCLient = useQueryClient();

    const { mutateAsync, status } = useMutation(editTenant, {
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

export default useEditTenant;