import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #212529;

        --pink-500: #D53F8C;

        --blue-500: #31bcbe;
        --blue-700: #359293;
        
        --red-450:#f9004d;
        --red-500: #E53E3E;

        --red-500-filter: rgba(229, 62, 62, 0.8);

        --white: #fff;

        --white-text: #c4cfde;

        --yellow-500: #dbb42c;

        --black: #000;

        --gray-500: #828282;
        --gray-800: #27272A;
    }
    
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    // Font-size: 16px (Desktop)
    html{
        scroll-behavior: smooth;

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    body, input, textarea, button {
        font-family: 'DM Sans' ,sans-serif;
        font-weight: 400;
        outline: none;
    }
    h1, h2 ,h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    body { 
        background: linear-gradient(0deg, rgba(61,90,128,1) 14%, rgba(33,37,41,1) 100%);
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }

    input, textarea {
        :-webkit-autofill {
        -webkit-text-fill-color: white; /* Cor do texto */
        -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.2) inset !important;
        background-color: rgba(255, 255, 255, 0.2) !important;
    }

    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`