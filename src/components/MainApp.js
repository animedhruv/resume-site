import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row,Col,Icon} from 'antd'

export default class MainApp extends React.Component{
    render(){
        return(
            <div>
                <div>
                <Row>
                    <Col xs={{span:24,offset:0}} className="header-bar">
                        <Row>
                            <Col xs={{span:24,offset:0}} className="moderate-top-padding heading-bar-text">
                                Pravandan Chand
                                <br/>
                                <span className="taglines">
                                    Pre-Final Year at IIT Guwahati
                                </span>
                                <p className="no-extra-space"></p>
                                <span className="overview-habits">
                                    &#123; &#125;
                                    Developer, Coffee Lover
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="medium-top-padding navbar-slide">
                    <Col xs={{span:2,offset:2}} lg={{span:2,offset:4}} className="center-align hand-cursor">
                        <NavLink activeClassName="is-active" to="/" exact={true}>    
                            Home
                        </NavLink>
                    </Col>
                    <Col xs={{span:2,offset:1}} lg={{span:2,offset:0}} className="center-align hand-cursor">
                        <NavLink activeClassName="is-active" to="/projects">
                            Projects
                        </NavLink>
                    </Col>

                    <Col xs={{span:6,offset:10}} lg={{span:2,offset:9}} className="center-align hand-cursor">

                        <a href="https://facebook.com/pravandan" target="_blank" > <Icon type="facebook" className="social-icon-size" /> </a>
                            
                            &nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Pravandan" target="_blank"> <Icon type="github" className="social-icon-size" /> </a>
                    
                    </Col>            
                </Row>
                </div>

                {/* quote block starts */}

                <div>
                    <Row>
                        <Col xs={{span:20,offset:2}} className="large-top-padding quote-block center-align">
                            <i>
                                A good programmer looks both way before crossing a one way street
                                <p className="no-extra-space"></p>
                            </i>
                            <span className="author-text">
                                - Unknown
                            </span>        
                        </Col>
                    </Row>
                </div>

                {/* quote block ends */}

                <div className="footer-section">
                    <Row >
                        <Col xs={{span:24,offset:0}} className="center-align robot-font medium-top-padding">
                            Pravandan Chand  <Icon type="copyright" /> 2018 
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}