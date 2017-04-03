// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import NavItem from './NavItem'
import logo from 'assets/logo.svg'
import s from './Navigation.css'

const Navigation = (props: Object) => (
  <nav className={s.nav}>
    <Link className={s.brand} to='/' title={process.env.TITLE}>
      <img className={s.logo} src={logo} alt={process.env.TITLE} />
    </Link>
    <ul className={s.menu}>
      <NavItem to='/'>Start</NavItem>
      <NavItem to={Math.random().toString(36).slice(2)}>Random</NavItem>
    </ul>
  </nav>
)

export default Navigation
