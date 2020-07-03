import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

const gridTheme = {
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
  },
};
const styledTheme = {
  mainColor: 'purple',
}

ReactDOM.render(
  <ThemeProvider
    theme={styledTheme}
  >
    <GridThemeProvider
      gridTheme={gridTheme}
    >
      <App />
    </GridThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);