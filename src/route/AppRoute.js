import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactPage from '../pages/ContactPage';
import HomePage from './../pages/HomePage';
import UserLoginPage from './../pages/UserLoginPage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<UserLoginPage />} />
            <Route exact path="/contact" element={<ContactPage/>} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute