import styled, { createGlobalStyle } from 'styled-components';

const StyledApp = styled.div`
    position: realtive;
    max-height: 100vh; 
    ${'' /* overflow: hidden; */}
    
    & > div {
        ${'' /* display: flex;
        padding: 10rem 10rem 0;
        justify-content: center; */}
        ${'' /* grid-template-columns: 1fr;
        grid-template-rows: 100vh 100vh; */}
    }
`;

export const NormalizedStyle = createGlobalStyle`
    :root {
        font-size: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ${'' /* scroll-behavior: smooth; */}
        font-family: 'Montserrat', sans-serif;
        color: rgba(0,0,0,.68);
    }

    a:link,
    a:active,
    a:visited,
    a:focus {
        text-decoration: none;
        color: none;
    }

    ul {
        list-style-type: none;
    }

    input {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    select, 
    input, 
    button,
    textarea {
        outline: none;
        border: none;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    button {
        cursor: pointer;
        background-color: transparent;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default StyledApp;