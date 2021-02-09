import styled from 'styled-components';

const StyledSignupLogin = styled.div`
        display: flex;
        padding: 10rem 0rem 0 0;
        height: 100vh;
        gap: 10rem;
        justify-content: center;
        background-color: rgb(200, 20, 80);

        & > div > form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0,0,0,.1);
            padding: 2rem;
            background-color: rgba(0,0,0,.2);


            & > .form-group {
                display: flex;
                align-items: center;
                gap: 2rem;

                & > label {
                    ${'' /* line-height: 2; */}
                    ${'' /* flex:  */}
                    font-size: 2rem;
                    text-transform: capitalize;
                }
                
                & > input {
                    border-radius: 6px;
                    line-height: 2;
                    font-size: 2rem;
                }
            }

            & > button {
                line-height: 2;
                margin-top: 2rem;
                font-size: 2rem;
                text-transform: uppercase;
                border-radius: 100px;
                padding: 0 5rem;
                background-color: rgba(0, 0, 0, .2);
            }
        }
`;

export default StyledSignupLogin;