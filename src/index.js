import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import "./assets/css/owl.carousel.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const gridTheme = {
  container: {
    padding: 10,
    maxWidth: {
      xxl: 1200,
      xl: 1200,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
  row:{
    padding: 5,
  },
  col: {
    padding: 5,
  },
};
const styledTheme = {
  mainColor: 'purple',
}

ReactDOM.render(

  <ThemeProvider theme={styledTheme}>
    <GridThemeProvider gridTheme={gridTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </GridThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);