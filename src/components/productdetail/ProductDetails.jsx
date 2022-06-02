import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
class ProductDetails extends Component {
    constructor() {
        super();
    }

    imgOnClick(event) {

        let imgSrc = event.target.getAttribute('src');
        let previewImg = document.getElementById('previewImg');
        ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc)
    }
    PriceOption(price, special_price){
        if (special_price === "") {
            return (
                <p className="product-price-on-card"> Price : {price}$ </p>
            )
        } else {

            return (
                <p className="product-price-on-card">
                    Price : <strike className="text-secondary">{price}$ </strike> {special_price}$
                </p>
            )

        }
    }
    render() {
        let ProductAllData = this.props.data;
        let color = ProductAllData[0]['color']
        let size = ProductAllData[0]['size']
        let price = ProductAllData[0]['price']
        let special_price = ProductAllData[0]['special_price']

        var ColorDiv = "d-none"
        if (color !== "") {
            let ColorArray = color.split(',');
            var ColorOption = ColorArray.map((ColorList, i) => {
                return <option value={ColorList}> {ColorList} </option>
            })
            ColorDiv = ""
        }
        else {
            ColorDiv = "d-none"
        }


        var SizeDiv = "d-none"
        if (size !== "") {
            let SizeArray = size.split(',');
            var SizeOption = SizeArray.map((SizeList, i) => {
                return <option value={SizeList}> {SizeList} </option>
            })
            SizeDiv = ""
        }
        else {
            SizeDiv = "d-none"
        }

       
        return (
            <Fragment>
                <Container fluid={true} className="BetweenTwoSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>

                                    <img id="previewImg" className="detailimage" src={ProductAllData[0]['image']} />
                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-50 smallimage product-sm-img" src={ProductAllData[0]['img_url_1']} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-50 smallimage product-sm-img" src={ProductAllData[0]['img_url_2']} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-50 smallimage product-sm-img" src={ProductAllData[0]['img_url_3']} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-50 smallimage product-sm-img" src={ProductAllData[0]['img_url_4']} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{ProductAllData[0]['name']}</h5>
                                    <h6 className="section-sub-title">{ProductAllData[0]['short_description']}</h6>
                                    {/* <div className="input-group">
                                        <div className="Product-price-card d-inline ">${ProductAllData[0]['price']}</div>
                                        <div className="Product-price-card d-inline ">50% Discount</div>
                                        <div className="Product-price-card d-inline ">New Price ${ProductAllData[0]['special_price']}</div>
                                    </div> */}
                                    {this.PriceOption(price,special_price)}
                                    <h6 className="mt-2">Category : <b>{ProductAllData[0]['category']}</b></h6>
                                    <h6 className="mt-2">Brand : <b>{ProductAllData[0]['brand']}</b></h6>
                                    <h6 className="mt-2">Product Code : <b>{ProductAllData[0]['product_code']}</b></h6>
                                    <div className={ColorDiv}>
                                        <h6 className="mt-2"> Choose Color  </h6>
                                        <select className="form-control form-select">
                                            <option>Choose Color</option>
                                            {ColorOption}
                                        </select>
                                    </div>


                                    <div className={SizeDiv}>
                                        <h6 className="mt-2"> Choose Size  </h6>
                                        <select className="form-control form-select">
                                            <option>Choose Size</option>
                                            {SizeOption}
                                        </select>
                                    </div>

                                    <div className="" >
                                        <h6 className="mt-2"> Choose Quantity  </h6>
                                        <select className="form-control form-select">
                                            <option>Choose Quantity</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>

                                        </select>
                                    </div>

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    <p>{ProductAllData[0]['full_description']}</p>
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default ProductDetails