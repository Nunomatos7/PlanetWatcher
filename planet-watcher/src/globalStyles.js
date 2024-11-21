import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    box-sizing: border-box;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
  }

  button {
    background-color: #2d89ef;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #1e64b4;
  }

  /* Responsive layout */
  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }

    h1, h2 {
      font-size: 1.8rem;
    }
  }
`;

export default GlobalStyle;
