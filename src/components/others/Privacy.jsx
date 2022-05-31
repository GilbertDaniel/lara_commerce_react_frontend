import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios';

class Privacy extends Component {
    constructor() {
        super();
        this.state = {
            privacy: ""
        }
    }

    componentDidMount() {
        axios.get(AppURL.AllSiteInfo).then(response => {
            let StatusCode = response.status;
            if (StatusCode == 200) {
                let JsonData = (response.data)[0]['privacy'];
                this.setState({ privacy: JsonData });
            }

        }).catch(error => {

        });
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <h4 className="section-title-login">Privacy Page </h4>
                            <p className="section-title-contact">
                            {this.state.privacy}
                            </p>


                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Privacy