import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import taskModule from 'modules/taskModule'

const rootReducer = combineReducers({
  todos: taskModule.reducer,
})

export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()]

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger)
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  })

  return store
}
