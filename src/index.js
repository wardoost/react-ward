import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from 'components/App'
import 'normalize.css/normalize.css'

if (process.env.NODE_ENV === 'production') {
  // Disable React devtools
  if (
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {}
  }
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => { render(App) })
}
