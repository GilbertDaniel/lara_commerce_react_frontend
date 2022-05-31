import React, { Component, Fragment } from 'react'
import FooterDestop from '../components/common/FooterDestop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'


class UserLoginPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <UserLogin />

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

export default UserLoginPage