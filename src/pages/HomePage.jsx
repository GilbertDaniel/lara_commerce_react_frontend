import React, { Component, Fragment } from 'react'
import FooterDestop from '../components/common/FooterDestop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Categories from '../components/home/Categories';
import HomeTop from '../components/home/HomeTop';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NewArrival from '../components/home/NewArrival';
import FeaturedProducts from './../components/home/FeaturedProducts';
import FooterMobile from './../components/common/FooterMobile';
import Collection from './../components/home/Collection';
import axios from 'axios';
import AppURL from './../api/AppURL';
export class HomePage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }


  GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch()
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <NewArrival />
        <FeaturedProducts />
        <Categories />
        <Collection />
        <div className="Desktop">
          <FooterDestop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage