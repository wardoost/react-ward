import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
