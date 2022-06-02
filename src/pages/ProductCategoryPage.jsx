import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDestop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/productdetail/Category'
import axios from 'axios'
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
 class ProductCategoryPage extends Component {
     constructor(){
          super();
          this.state={            
            Category:"",
            ProductData:[] 
          }
     }
     componentDidMount(){
          window.scroll(0,0)          
          this.state.Category = this.props.params.category;
          axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response =>{

               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });

     } 

     render() {
          return (
              <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <Category Category={this.state.Category} ProductData={this.state.ProductData} /> 

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

// export default ProductCategoryPage
export default withParams(ProductCategoryPage);