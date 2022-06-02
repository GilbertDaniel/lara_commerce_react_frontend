import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDestop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/productdetail/ProductDetails'
import SuggestedProduct from '../components/productdetail/SuggestedProduct'
import axios from 'axios'
import SliderLoading from '../components/placeholder/SliderLoading'
import { useParams } from "react-router-dom";

function withParams(Component) {
     return props => <Component {...props} params={useParams()} />;
 }

class ProductDetailsPage extends Component {

     constructor({ match }) {
          super();
          this.state = {
               code: "",
               ProductData: [],
               isLoading: "",
               mainDiv: "d-none"
          }
     }

     componentDidMount() {
          window.scroll(0, 0)
          this.state.code = this.props.params.code;
          axios.get(AppURL.ProductDetails(this.state.code)).then(response => {

               this.setState({
                    ProductData: response.data, isLoading: "d-none",
                    mainDiv: ""
               });

          }).catch(error => {

          });
     }

     render() {

          if (this.state.mainDiv === "d-none") {

               return (
                    <Fragment>
                         <div className="Desktop">
                              <NavMenuDesktop />
                         </div>

                         <div className="Mobile">
                              <NavMenuMobile />
                         </div>

                         <SliderLoading isLoading={this.state.isLoading} />


                         <div className="Desktop">
                              <FooterDesktop />
                         </div>

                         <div className="Mobile">
                              <FooterMobile />
                         </div>

                    </Fragment>
               )


          } else {


               return (
                    <Fragment>
                         <div className="Desktop">
                              <NavMenuDesktop />
                         </div>

                         <div className="Mobile">
                              <NavMenuMobile />
                         </div>

                         <ProductDetails data={this.state.ProductData}/>

                         <div className="Desktop">
                              <FooterDesktop />
                         </div>

                         <div className="Mobile">
                              <FooterMobile />
                         </div>

                    </Fragment>
               )


          }





     }
}

export default withParams(ProductDetailsPage)