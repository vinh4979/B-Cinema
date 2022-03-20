import { Fragment } from 'react'
import { Route } from 'react-router'
import NavBar from 'src/main/components/Navbar.component/NavBar'

export const BookingTickedTemplate = props => {
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
