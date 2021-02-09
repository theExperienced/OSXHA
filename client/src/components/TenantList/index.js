import React, { useState } from 'react';

import useFetchTenants from '../../hooks/useFetchTenants';

import Tenant from '../Tenant';
import TenantQueryRadios from '../TenantQueryRadios';

import StyledTenantList from './StyledTenantList';


const TenantList = ({ handleRadioSubmit }) => {
    const [ query, setQuery ] = useState('all');   
    const data = useFetchTenants(query);   

    const initialValues = {
        username: '',
        password: ''
    };


    const handleRadioChange = value => {
        setQuery(value);
    }


    return (
        <StyledTenantList>
            <TenantQueryRadios handleRadioChange={handleRadioChange} state={query} />
            <div className='tenant-list'>
                {
                    data.data && 
                    data.data.tenants.map((tenant, key) => {
                        return <Tenant tenantInfo={tenant} key={key} />
                    })
                }
            </div>
        </StyledTenantList>
    );
}

export default TenantList;



