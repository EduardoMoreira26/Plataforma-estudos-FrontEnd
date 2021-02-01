import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';


export default createGlobalStyle`
  :root {
  font-size: 60%;

  --color-background:  #daedff;
  --color-primary: #223333;
  --color-secundary: #0085ff;
  --color-secundary-light: #85c3ff;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-title: #121214;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    color: var(--color-black);
    -webkit-font-smoothing: antialiased;
    background: url(${background}) no-repeat center ;
    background-size: cover;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

