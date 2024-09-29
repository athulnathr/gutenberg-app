// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --breakpoint-desktop: 1200px;
    --breakpoint-tablet: 900px;
    --breakpoint-mobile: 600px;

    --primary-color: #5E56E7;
    --seondary-color: #F8F7FF;
    --grey-100: #F0F0F6;
    --grey-500: #A0A0A0;
    --grey-900: #333333;
  }

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
`;
