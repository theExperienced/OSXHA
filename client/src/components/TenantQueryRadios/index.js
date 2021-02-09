
import React, { useState } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';


const TenantsQueryRadios = ({ handleRadioChange, state }) => {
    return (
        <RadioGroup name="fruit" selectedValue={state} onChange={handleRadioChange}>
            <Radio value="all" />all
            <Radio value="debtful" />debtful
            <Radio value="debtless" />debtless
        </RadioGroup>
    );
}

export default TenantsQueryRadios;