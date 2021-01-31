import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  font-size: 60%;

  --color-background:  #85c3ff;
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

body,
#root {
  height: 100vh;
}

  body {
    background: var(--color-background);
    color: var(--color-black);
    -webkit-font-smoothing: antialiased;
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

