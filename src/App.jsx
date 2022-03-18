import React from 'react'
import { Router, Switch } from 'react-router'
import HomePage from './main/pages/HomePage'
import { createBrowserHistory } from 'history'
import { HomeTemplate } from './templates/homeTemplate/homeTemplate'
import DetailPage from './main/pages/DetailPage'
import { SignInTemplate } from './templates/userTemplate/SignInTemplate'
import SignInPage from './main/pages/SignInPage'
import SignUppage from './main/pages/SignUppage'
import { BookingTickedTemplate } from './templates/BookingTickedTemplate/BookingTickedTemplate'
import BookingTickedPage from './main/pages/BookingTickedPage'
import { ProfileTemplate } from './templates/ProfileTemplate/ProfileTemplate'
import ProfilePage from './main/pages/ProfilePage'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={HomePage} />
        <HomeTemplate path="/home" exact Component={HomePage} />

        <HomeTemplate path="/detail/:id" exact Component={DetailPage} />
        <SignInTemplate path="/signin" exact Component={SignInPage} />
        <SignInTemplate path="/signup" exact Component={SignUppage} />
        <BookingTickedTemplate
          path="/booking/:id"
          exact
          Component={BookingTickedPage}
        />
        <ProfileTemplate path="/profile" exact Component={ProfilePage} />
      </Switch>
    </Router>
  )
}

export default App
