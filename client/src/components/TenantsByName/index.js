import React, { useState } from 'react';

import useLookupTenants from '../../hooks/useLookupTenants';

import Tenant from '../Tenant';
import StyledTenantsByName from './StyledTenantsByName';


const TenantsByName = () => {
    const [ lookupValue, setLookupValue ] = useState('');
    const [ queryValue, setQueryValue ] = useState('');
    const data = useLookupTenants(queryValue);   

    const initialValues = {
        username: '',
        password: ''
    };

    const handleLookupSubmit = e => {
        e.preventDefault();
        setQueryValue(lookupValue);
    };

    const handleChange = e => {
        const value = e.target.value;
        setLookupValue(value);
    };

    return (
        <StyledTenantsByName>
            <form onSubmit={handleLookupSubmit}>
                <input onChange={handleChange} value={lookupValue} name='tenantName'/>
                <input type='submit' value='look up'/>
            </form>
            <div className='tenant-list'>
            {
                data.data && data.data.tenants && 
                data.data.tenants.map((tenant, key) => {
                    
                    return <Tenant tenantInfo={tenant} key={key} />;
                })
            }
            </div>
        </StyledTenantsByName>
    );
}

export default TenantsByName;