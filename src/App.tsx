import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Index from './route';
import theme from './style/theme';
import { Provider, reducer, initialState } from './state';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', 'Akzidenz-Grotesk BQ',  sans-serif;
  padding: 0;
  margin: 0;
}

body, html, #root {
  height: 100%;
  background: #fff;
}
`;

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider reducer={reducer} initialState={initialState}>
                    <GlobalStyles />
                    <Index />
                </Provider>
            </ThemeProvider>
        </>
    );
};

export default App;
