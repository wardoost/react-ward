// @flow
import React from 'react'
import classNames from 'classnames'
import logo from 'assets/logo.svg'
import s from './Header.css'

type Props = {
  className?: string
}

const Header = (props: Props) => {
  const {className, ...rest} = props

  return (
    <div className={classNames(s.header, className)} {...rest}>
      <img className={s.logo} src={logo} alt={process.env.TITLE} />
      <h2>{process.env.TITLE}</h2>
    </div>
  )
}

export default Header
