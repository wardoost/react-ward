// @flow
import React from 'react'
import Navigation from 'components/Navigation'

const Layout = (props: Object) => (
  <div>
    <Navigation />
    <main>
      {props.children}
    </main>
  </div>
)

export default Layout
