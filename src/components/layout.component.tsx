// src\components\layout.component.tsx

import { createGlobalStyle } from "styled-components";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`

/* variables  */

:root {
    --black: #25313C;
    --purple: #5A4FF3;
}

/* reset */

* {
    box-sizing: border-box;
}

html,
body,
#root {
    height: 100%;
}

body {
    overflow-x: hidden;
    background-color: white;
}

body, h1, h2, button, input, p {
    margin: 0;
    padding: 0;
    border: none;
}

input:focus,
button:focus {
  outline: none;
}

// fonts

html {
    font-family: 'Segoe UI', Verdana, sans-serif;
    font-size: 100%;
    color: black;
}

`;
