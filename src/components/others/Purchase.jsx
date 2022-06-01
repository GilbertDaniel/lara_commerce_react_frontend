import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser';

class Purchase extends Component {
    constructor() {
        super();
        this.state = {
            purchase_guide: ""
        }
    }

    componentDidMount() {
        axios.get(AppURL.AllSiteInfo).then(response => {
            let StatusCode = response.status;
            if (StatusCode === 200) {
                let JsonData = (response.data)[0]['purchase_guide'];
                this.setState({ purchase_guide: JsonData });
            }

        }).catch(error => {
            let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

            if (SiteInfoPurchase == null) {

                axios.get(AppURL.AllSiteInfo).then(response => {
                    let StatusCode = response.status;
                    if (StatusCode == 200) {
                        let JsonData = (response.data)[0]['parchase_guide'];
                        this.setState({ purchase: JsonData });

                        sessionStorage.setItem("SiteInfoPurchase", JsonData)
                    }
                    else {
                        toast.error("Somthing Went Wrong", {
                            position: "bottom-center"
                        });
                    }


                }).catch(error => {
                    toast.error("Somthing Went Wrong", {
                        position: "bottom-center"
                    });
                });

            }  // end If Conditon 
            else {
                this.setState({ purchase: SiteInfoPurchase });
            }
        });
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <h4 className="section-title-login">Purchase Page </h4>
                            <p className="section-title-contact">
                                {parse(this.state.purchase_guide)}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </Fragment>
        )
    }
}

export default Purchase