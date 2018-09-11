import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Pages from './pages';

import theme from 'theme';

import store from './store';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Pages />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
