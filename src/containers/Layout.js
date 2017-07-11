// @flow
import React from 'react'
import Navigation from 'components/Navigation'
import s from './Layout.css'

const Layout = (props: Object) => (
  <div>
    <Navigation />
    <main className={s.main}>
      {props.children}
    </main>
  </div>
)

export default Layout
