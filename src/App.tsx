import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import resetStyle from 'styled-reset';
import TodoApp from './components/Pages/TodoApp';
import { setupStore } from './store';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TodoApp />
    </Provider>
  );
};

export default App;
