import { createGlobalStyle } from 'styled-components'

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

    //GLOBAL STYLES
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #fff;
        --background: #F2F2F2;
        --grayLine: #DCDDEO;
        --Text: #666;
        --textHighlight: #B3B9FF;
        --title: #2E38D4;
        --red: #E83F5B;
        --green: #4CD62B;
        --blue: #5965e0;
        --blueDark: #4953B8;
        --blueTwitter: #2AA9A0
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: var(--blue);
        color: var(----white);
    }

    #__next {
        width: 100%;
        min-height: 100vh;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75% //15px
        }
    }
    
    @media(max-width: 720px){
        html{
            font-size: 87.75% //14px
        }
    }

    body {
  background: var(--background);
  color: var(--text);
}

body, input, textarea, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

    h1{
        font-family: 'Inter Semibold', sans-serif;
        color: #FFF;
        font-size: 2rem;

        position: absolute;
        top: 50%;
        left: 46%;
    }

`
