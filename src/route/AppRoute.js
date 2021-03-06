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
import FavouritePage from './../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import ProductCategoryPage from './../pages/ProductCategoryPage';
import SubCategoryPage from '../pages/SubCategoryPage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route exact path="/login" element={<UserLoginPage/>} />
          <Route exact path="/register" element={<RegisterPage/> } />
          <Route exact path="/forget" element={<ForgetPasswordPage/> } />
          <Route exact path="/reset/:id" element={<ResetPasswordPage/> } />
          <Route exact path="/profile" element={<ProfilePage/> } />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/purchase" element={<PurchasePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/privacy" element={<PrivacyPage/>} />
          <Route exact path="/refund" element={<RefundPage/>} />
          <Route exact path="/productdetails" element={<ProductDetailsPage/>} />
          <Route exact path="/notification" element={<NotificationPage/>} />
          <Route exact path="/favourite" element={<FavouritePage/>} />
          <Route exact path="/cart" element={<CartPage/>} />


          {/* Product Route */}
          <Route path="/products/category/:category" element={<ProductCategoryPage/>} />
          <Route exact path="/products/category/sub/:category/:subcategory" element={<SubCategoryPage/>} />
          <Route exact path="/products/detail/:code" element={<ProductDetailsPage/>} />

          
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute