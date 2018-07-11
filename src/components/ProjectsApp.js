import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row,Col,Icon} from 'antd'

export default class ProjectsApp extends React.Component{
    render(){
        return (
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
                    <Row>
                        <Col xs={{span:20,offset:2}} lg={{span:16,offset:4}} className="center-align moderate-top-padding section-intro-container">
                            <span className="section-intro"> Some of the things built by me </span>
                        </Col>
                    </Row>

                    {/* The List of Projects  */}
                    
                    <div className="content-breaker">&nbsp;</div>
                    <div>
                        <Row>
                            <Col xs={{span:20,offset:2}} lg={{span:8,offset:6}}>
                            <span className="project-heading">  StatusPage </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{span:20,offset:2}} lg={{span:12,offset:6}} className="project-description-brief">
                                A React JS based system to get the present status of the available systems, whether they are online or 
                                offline or whether there is an issue with them or not.
                                Clients have the option to subscribe so as to get alerts whenever an issue has occured and when it is resolved.
                            </Col>
                        </Row>
                        <Row className="black-color-font small-top-padding keywords-bar">
                            <Col xs={{span:12,offset:2}} lg={{span:6,offset:6}} >ReactJS, MongoDB </Col>
                            <Col xs={{span:4,offset:6}} lg={{span:4,offset:4}} >
                                <a href="https://github.com/Pravandan/statuspage" target="_blank">
                                    <Icon type="github" className="social-icon-size"/>
                                </a>
                            </Col>
                        </Row>
                    </div>

                    <br/><br/>

                    <div>
                        <Row>
                            <Col xs={{span:20,offset:2}} lg={{span:8,offset:6}}>
                            <span className="project-heading">  VTOL </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{span:20,offset:2}} lg={{span:12,offset:6}} className="project-description-brief">
                                VTOL is a Node.js middleware designed to handle and manage the generated logs.
                                It can also be used to register the special events such as placing of order and simultaneous
                                notification of that event on your preferred Slack Channel.
                                VTOL can be used to trigger alerts for SLA not being met on specific endpoints.
                            </Col>
                        </Row>
                        <Row className="black-color-font small-top-padding keywords-bar">
                            <Col xs={{span:12,offset:2}} lg={{span:6,offset:6}}>Node.JS </Col>
                            <Col xs={{span:4,offset:6}} lg={{span:4,offset:4}} >
                                <a href="https://www.npmjs.com/package/vtol" target="_blank">
                                    <Icon type="github" className="social-icon-size"/>
                                </a>
                            </Col>
                        </Row>
                        <br/>
                        <p></p>
                    </div>

                    <br/>

                    


                </div>
                <div className="footer-section">
                    <Row >
                        <Col xs={{span:24,offset:0}} className="center-align robot-font small-top-padding">
                            Pravandan Chand  <Icon type="copyright" /> 2018 
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}