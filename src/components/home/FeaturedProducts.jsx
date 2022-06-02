import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import axios from 'axios'

class FeaturedProducts extends Component {

  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none"

    }
  }


  componentDidMount() {
    axios.get(AppURL.ProductListByRemark("featured")).then(response => {

      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: " "
      });

    }).catch(error => {

    });
  }


  render() {

    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((FeaturedList, i) => {

      if (FeaturedList.special_price == "") {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/products/detail/" + FeaturedList.id} >
            <Card className="image-box card">
              <img className="center" src={FeaturedList.image} />
              <Card.Body>
                <p className="product-name-on-card">{FeaturedList.title}</p>
                <p className="product-price-on-card">Price : ${FeaturedList.price}</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      }
      else {

        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/products/detail/" + FeaturedList.id} >
            <Card className="image-box card">
              <img className="center" src={FeaturedList.image} />
              <Card.Body>
                <p className="product-name-on-card">{FeaturedList.title}</p>
                <p className="product-price-on-card">Price : <strike className="text-secondary">${FeaturedList.price}</strike> ${FeaturedList.special_price}</p>

              </Card.Body>
            </Card>
          </Link>
        </Col>
      }


    });


    return (
      <Fragment>
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
              {MyView}
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FeaturedProducts