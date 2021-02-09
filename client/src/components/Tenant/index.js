import React, { useState } from 'react';

import CustomForm from '../CustomForm';

import useEditTenant from '../../hooks/useEditTenant';
import useRemoveTenant from '../../hooks/useRemoveTenant';

import StyledTenant from './StyledTenant';

const Tenant = ({ tenantInfo }) => {
    const [ isBeingEdited, setBeingEdited ] = useState(false);
    const { name, phone, address, debt, _id } = tenantInfo;
    const editData = useEditTenant();
    const removeData = useRemoveTenant();

    const initialValues ={
        name, 
        phone, 
        address, 
        debt
    };

    const handleEditSubmit = values => {
        editData.mutateAsync({...values, _id})
            .then(response => {
                setBeingEdited(false);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    const handleSwitchEdit = e => {
        e.preventDefault();
        setBeingEdited(!isBeingEdited);
    }
    
    const handleRemove = e => {
        e.preventDefault();

        removeData.mutateAsync({
            _id
        })
            .then(response => {
                setBeingEdited(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <StyledTenant>
            {
                <button onClick={handleSwitchEdit}>{isBeingEdited?'Cancel': 'Edit'}</button>
            }
            
                <button onClick={handleRemove}>remove tenant</button>
            {
                isBeingEdited?
                <CustomForm purpose='edit' initialValues={initialValues} handleSubmit={handleEditSubmit} />:
                <div className='tenant-details'>
                    <p className='name'>name: {name}</p>
                    <p className='phone'>phone: {phone}</p>
                    <p className='address'>address: {address}</p>
                    <p className='debt'>debt: {debt}</p>
                </div>
            }
        </StyledTenant>
    );
}

export default Tenant;