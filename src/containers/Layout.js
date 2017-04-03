// @flow
import React from 'react'
import Navigation from 'components/Navigation'

const Layout = (props: Object) => (
  <div>
    <Navigation />
    {props.children}
  </div>
)

export default Layout
