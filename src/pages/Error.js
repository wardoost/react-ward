// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import s from './Error.css'

const Error = (props: Object) => (
  <div className={s.page}>
    <h1>404</h1>
    <p>Page not found. Try again from the <Link to='/'>homepage</Link>.</p>
  </div>
)

export default Error
