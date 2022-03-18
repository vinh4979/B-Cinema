import { Fragment } from 'react'
import { Route } from 'react-router'
import NavBar from 'src/main/components/Navbar.component/NavBar'

export const SignInTemplate = props => {
  const { Component, ...restProps } = props

  return (
    <Route
      {...restProps}
      render={propsRoute => {
        return (
          <Fragment>
            <NavBar {...propsRoute} />
            <Component {...propsRoute} />
          </Fragment>
        )
      }}
    />
  )
}
