import styled from 'styled-components';

const StyledTenantPage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 2rem 5rem 0;
        min-height: 100vh;
        ${'' /* gap: 10rem; */}
        background-color: rgb(200, 20, 80);

        & > button {
            align-self: flex-end;
            margin-bottom: 2rem;
            font-size: 1.25rem;
            border-radius: 10px;
            color: rgba(255, 255, 255, .6);
            padding: .7rem 2rem;
            background-color: rgba(0, 0, 0, .2);
        }

        & > h1 {
            text-transform: uppercase;
            letter-spacing: 10px;
            margin-bottom: 3rem;
        }

        & > div {
            & > h2 {
                text-transform: capitalize;
                margin-bottom: 1rem;
                text-align: center;
                font-size: 2rem;
            } 
            & > div {
                
                & > form {
                        display: flex;
                            gap: 1rem;

                        & > .form-group {
                            display: flex;
                            gap: 1rem;

                            & > label {
                                text-transform: capitalize;
                            }
                        }
                    }
                }
            }

            & > .display {
                display: flex;
                align-self: stretch;
                margin-top: 5rem;

                & > div {
                    display: flex;
                    flex-direction: column;
                    ${'' /* align-items: center; */}
                    flex: 1;

                }
            }
        }
`;

export default StyledTenantPage;