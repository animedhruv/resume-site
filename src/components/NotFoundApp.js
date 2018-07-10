import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row,Col,Icon} from 'antd'

const NotFoundApp  = () => (
    <div>
                <div>
                    <Row>
                        <Col xs={{span:24,offset:0}} className="header-other-pages moderate-top-padding">
                            <Row>
                                <Col xs={{span:24,offset:0}} lg={{span:24,offset:0}} className="center-align hand-cursor">
                                    <span className="self-name-header">
                                        <NavLink activeClassName="is-active" to="/" exact={true}>
                                            Pravandan Chand
                                        </NavLink>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{span:20,offset:2}} className="center-align bar-404 large-top-padding">
                            <span className="text-404">404</span>
                            <br/>
                            <span className="take-to-home-text"> <Icon type="arrow-left" /> 
                                <NavLink activeClassName="is-active" to="/" exact={true}>
                                    Go Back to Home 
                                </NavLink>
                            </span>
                        </Col>
                    </Row>
                </div>

                <div className="footer-section">
                    <Row >
                        <Col xs={{span:24,offset:0}} className="center-align robot-font medium-top-padding">
                            Pravandan Chand  <Icon type="copyright" /> 2018 
                        </Col>
                    </Row>
                </div>
    </div>
)

export default NotFoundApp