import React from "react";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';  // Import ThemeProvider

import { darkTheme, lightTheme } from './utils/Theme.js'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <h1>Hello, Dark Theme!</h1>
      </Body>
    </ThemeProvider>
  );
}

export default App;
