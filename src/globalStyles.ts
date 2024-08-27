// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  p {
    margin: 0;
  }
  
  h1, h2, h3 {
    margin: 0;
    color: #222;
  }
`;

export default GlobalStyle;
