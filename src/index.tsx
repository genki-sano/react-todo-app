import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import TodoApp from 'components/TodoApp'
import { THEME } from 'constants/theme'
import { setupStore } from 'stores'
import * as serviceWorker from 'utils/serviceWorker'

const store = setupStore()

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={THEME}>
        <StyledThemeProvider theme={THEME}>
          <CssBaseline />
          <TodoApp />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
