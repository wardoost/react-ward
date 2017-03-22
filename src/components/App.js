import React from 'react'
import logo from 'assets/logo.svg'
import styles from './App.css'

const App = () => (
  <div className={styles.app}>
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt={process.env.TITLE} />
      <h2>{process.env.TITLE}</h2>
    </div>
    <p>To get started, edit files in <code>src</code> and save to reload.</p>
  </div>
)

export default App
