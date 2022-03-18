import { Fragment } from 'react'
import { Route } from 'react-router'
import NavBar from 'src/main/components/Navbar.component/NavBar'

export const ProfileTemplate = props => {
  const { Component, ...restProps } = props

  return (
    <Route
      {...restProps}
      render={propsRoute => {
        return (
          <Fragment>
            <NavBar {...propsRoute} />
            <Component {...propsRoute} />
            <h1>Footer</h1>
          </Fragment>
        )
      }}
    />
  )
}
