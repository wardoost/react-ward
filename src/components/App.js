import React from 'react'
import logo from 'assets/logo.svg'
import styles from './App.css'

const App = () => (
  <div>
    <img className={styles.logo} src={logo} />
    <h1 className={styles.title}>Hello Ward!</h1>
  </div>
)

export default App
