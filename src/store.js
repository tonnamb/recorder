import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const composeArray = [applyMiddleware(createLogger()), applyMiddleware(thunk)]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArray.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose.apply(null, composeArray)
  )
  return store
}