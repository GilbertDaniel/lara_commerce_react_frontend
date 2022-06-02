import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDestop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import SubCategory from '../components/productdetail/SubCategory'

import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ProductSubCategoryPage extends Component {
    constructor({ match }) {
        super();
        this.state = {
            Category: "",
            SubCategory: "",
            ProductData: []
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        // alert(this.state.Category);
        this.state.Category = this.props.params.category;
        this.state.SubCategory = this.props.params.subcategory;
        
        axios.get(AppURL.ProductListBySubCategory(this.state.Category, this.state.SubCategory)).then(response => {

            this.setState({ ProductData: response.data });

        }).catch(error => {

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

                <SubCategory Category={this.state.Category} SubCategory={this.state.SubCategory} ProductData={this.state.ProductData} />


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

export default withParams(ProductSubCategoryPage);