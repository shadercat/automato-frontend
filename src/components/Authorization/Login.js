import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Nav} from "react-bootstrap";
import {withRouter} from "react-router";
import {Route, Switch, Redirect, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import PropTypes from "prop-types";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
class LegacyLogin extends Component {

    static propTypes = {
        t: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    render() {
        const {t, match, location} = this.props;
        return (
            <div style={{alignItems: "center", minHeight: "90vh"}}>
                <div style={{margin: "auto", width: "100%", maxWidth: 300, paddingTop: "15vh"}}>
                    {/*<NavDropdown.Divider/>*/}
                    <Nav justify variant="tabs" activeKey={`${location.pathname}`}>
                        <Nav.Item>
                            <Nav.Link eventKey={`${match.path}/signin`} as={Link}
                                      to={`${match.path}/signin`}>{t('signIn')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`${match.path}/signup`} as={Link}
                                      to={`${match.path}/signup`}>{t('signUp')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/*<NavDropdown.Divider/>*/}
                    <Switch>
                        <Route path={`${match.path}/signin`}>
                            <SignIn/>
                        </Route>
                        <Route path={`${match.path}/signup`}>
                            <SignUp/>
                        </Route>
                        <Route>
                            <Redirect to={`${match.path}/signin`}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

const Login = withTranslation()(LegacyLogin);
export default withRouter(Login);
