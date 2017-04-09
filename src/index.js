import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import Root from './containers/Root'

const store = configureStore()

const rootElt = document.getElementById('root')

ReactDOM.render(
  <Root store={store} />,
  rootElt
);
