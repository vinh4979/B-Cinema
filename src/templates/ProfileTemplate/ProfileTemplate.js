import { Fragment } from 'react'
import { Route } from 'react-router'
import Footer from 'src/main/components/Footer.component/Footer'
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
            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
