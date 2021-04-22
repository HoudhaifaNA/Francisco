import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *, *::before, *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html{
        font-size: 62.25%;
        scroll-behavior: smooth;
    }

    body{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        letter-spacing: .1rem;
        overflow-y: hidden;
    }

    input, button{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    }

    .suplumentActive{
        background-color: ${(props) => props.theme.colors.purple};
        color: #fff;
    }
`;

export default GlobalStyle;
