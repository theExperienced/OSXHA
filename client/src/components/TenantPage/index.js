import React, { useContext } from 'react';

import { logOut } from "../../api/user";
import Context from '../../Context';
import useCreateTenant from "../../hooks/useCreateTenant";


import TenantList from '../TenantList';
import TenantsByName from '../TenantsByName';
import CustomForm from '../CustomForm';

import StyledTenantPage from './StyledTenantPage';


const TenantPage = () => {
    // const { data, status, newError } = useLookupSingleTenant(); 
    const { isLoggedIn, setLoggedIn } = useContext(Context);
    const { mutateCreateTenant, mutationState } = useCreateTenant();  
    
    const handleLogout = () => {
        logOut()
            .then(result => {
                if(result && result.status === 200)
                    setLoggedIn(false);
            })
            .catch(err => {
                console.log('ERROR IN LOGGING OUT', err);
            });
    };
    

    const initialValues = {
        name: '',
        address: '',
        phone: '',
        debt: ''
    };

    const handleCreateTenant = values => {
        mutateCreateTenant({...values})
            .then(result => {
                console.log('CREATED TENANT', result)
            })
            .catch(err => {
                console.log('FAILED TO CREATE TENANT', err)
            })
    };


    return (
        <StyledTenantPage>
                <button onClick={handleLogout} >log out</button>
                <h1 className='heading'>manage that building</h1>
                <div className='form-container'>
                    <h2>add tenant</h2>
                    <CustomForm initialValues={initialValues} handleSubmit={handleCreateTenant} purpose='create tenant' />
                </div>
                <div className='display'>
                    <TenantList />
                    <TenantsByName />
                </div>
        </StyledTenantPage>
    );
}

export default TenantPage;