import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import TodoApp from '@/components/TodoApp'
import { setupStore } from '@/stores'
import * as serviceWorker from '@/serviceWorker'

const store = setupStore()

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
