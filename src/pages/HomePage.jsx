import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/NewArrival';
import { FeaturedProducts } from './../components/home/FeaturedProducts';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <HomeTop/>
          <NewArrival/>
          <FeaturedProducts/>
          <Categories/>
      </Fragment>
    )
  }
}

export default HomePage