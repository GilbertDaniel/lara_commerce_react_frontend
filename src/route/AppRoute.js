import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactPage from '../pages/ContactPage';
import HomePage from './../pages/HomePage';
import UserLoginPage from './../pages/UserLoginPage';
import PurchasePage from './../pages/PurchasePage';
import PrivacyPage from './../pages/PrivacyPage';
import RefundPage from './../pages/RefundPage';
import ProductDetailsPage from './../pages/ProductDetailsPage';
import NotificationPage from './../pages/NotificationPage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<UserLoginPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/purchase" element={<PurchasePage/>} />
          <Route exact path="/privacy" element={<PrivacyPage/>} />
          <Route exact path="/refund" element={<RefundPage/>} />
          <Route exact path="/productdetails" element={<ProductDetailsPage/>} />
          <Route exact path="/notification" element={<NotificationPage/>} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute