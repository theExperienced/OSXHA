import React, { useContext } from 'react';
import { signUp, logIn } from '../../api/user';
import Context from '../../Context';

import CustomForm from '../CustomForm';

import StyledSignupLogin from './StyledSignupLogin';

const SignUpLogIn = () => {
    const { isLoggedIn, setLoggedIn } = useContext(Context);

    const initialValues = {
        username: '',
        password: ''
    };

    const handleSignupSubmit = values => {
        const { username, password } = values;
        
        signUp(username, password)
            .then(result => {
                if(result.status === 200)
                    setLoggedIn(true);
            })
            .catch(err => {
                console.log(err)
            });
    };
    
    const handleLoginSubmit = values => {
        const { username, password } = values;
        
        logIn(username, password)
            .then(result => {
                if(result && result.status === 200)
                    setLoggedIn(true);
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <StyledSignupLogin>
            <CustomForm purpose='sign up' initialValues={initialValues} handleSubmit={handleSignupSubmit}/>
            <CustomForm purpose='log in' initialValues={initialValues} handleSubmit={handleLoginSubmit}/>
        </StyledSignupLogin>
    );
}

export default SignUpLogIn;