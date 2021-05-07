import Font from "../Montserrat/Montserrat-Regular.ttf";
import FontMedium from "../Montserrat/Montserrat-Medium.ttf";
import FontBold from "../Montserrat/Montserrat-Bold.ttf";
import FontExtraBold from "../Montserrat/Montserrat-ExtraBold.ttf";

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
    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        src: url(${Font})  format('truetype');
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 600;

        src: url(${FontMedium})  format('truetype');
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;

        src: url(${FontBold})  format('truetype');
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 800;
        src: url(${FontExtraBold})  format('truetype');
    }
    body{
        font-family: 'Montserrat';
        font-weight: 400;
        letter-spacing: .1rem;
        overflow-y: hidden;
    }

    input, button{
        font-family: 'Montserrat';

    }

`;

export default GlobalStyle;
