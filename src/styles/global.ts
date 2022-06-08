import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #1F2029;

        --pink-500: #D53F8C;

        --red-500: #E53E3E;

        --red-500-08filter: rgba(229, 62, 62, 0.8);

        --white: #fff;
        --black: #000;
    }
    
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // Font-size: 16px (Desktop)
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2 ,h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
