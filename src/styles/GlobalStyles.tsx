import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
    input{
        font-family: "Montserrat", sans-serif;
    }
`;
