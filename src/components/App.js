// @flow
import React from 'react'
import Header from './Header'
import s from './App.css'

const App = () => (
  <div className={s.app}>
    <Header className={s.header} />
    <p>To get started, edit files in <code>src</code> and save to reload.</p>
  </div>
)

export default App
