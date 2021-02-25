import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    //FONTES
    @font-face {
        font-family: 'Radjdhani';
        src: url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter Regular';
        src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter Medium';
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter Semibold';
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #5965E0;
    }

    #__next {
    width: 100%;
    min-height: 100vh;
  }

    h1{
        font-family: 'Inter Semibold', sans-serif;
        color: #FFF;
        font-size: 2rem;

        position: absolute;
        top: 50%;
        left: 46%;
    }

`;
