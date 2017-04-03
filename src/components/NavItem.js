// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import s from './NavItem.css'

type Props = {
  to: string,
  className?: string,
  children?: any
}

const NavItem = (props: Props) => (
  <li className={classNames(s.item, props.className)}>
    <Link className={s.link} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default NavItem
