import React from 'react'
import { Provider } from 'react-redux'
import TodoApp from '@/components/TodoApp'
import { setupStore } from '@/stores'
import CssBaseline from '@material-ui/core/CssBaseline'

const store = setupStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <TodoApp />
    </Provider>
  )
}

export default App
