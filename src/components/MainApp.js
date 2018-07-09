import React from 'react'

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
                        Home
                    </Col>
                    <Col xs={{span:2,offset:1}} lg={{span:2,offset:0}} className="center-align hand-cursor">
                        Projects
                    </Col>

                    <Col xs={{span:6,offset:10}} lg={{span:2,offset:9}} className="center-align hand-cursor">

                        <Icon type="facebook" className="social-icon-size" />
                            
                            &nbsp;&nbsp;&nbsp;
                        <Icon type="github" className="social-icon-size" />
                    
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
    }
}