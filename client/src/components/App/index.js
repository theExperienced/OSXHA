import React, { useState, useEffect } from 'react';
import Cookies from 'cookies-js';

import Context from '../../Context';
import { QueryClient, QueryClientProvider } from "react-query";

import SignupLogin from '../SignupLogin';
import TenantPage from '../TenantPage';

import StyledApp, { NormalizedStyle } from './StyledApp';


const queryClient = new QueryClient();

const App = () => {
    const [ isLoggedIn, setLoggedIn ] = useState(false);
    const jwtToken = Cookies.get('jwt');

    useEffect(() => {
        setLoggedIn(jwtToken? true: false);
    }, jwtToken);

    return (
        <>
            <NormalizedStyle />   
            <StyledApp>
                <Context.Provider value={{isLoggedIn, setLoggedIn}}>
                    {
                        isLoggedIn?
                        <QueryClientProvider client={queryClient}>
                            <TenantPage />
                        </QueryClientProvider>:
                        <SignupLogin />
                    }
                </Context.Provider>
            </StyledApp>
        </>
    );
}

export default App;