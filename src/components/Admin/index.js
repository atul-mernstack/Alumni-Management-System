import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {username, isAdmin} from '../../redux/action';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Alumni from './alumni';
import Events from './events';
import Jobs from './jobs';
import Gallery from './gallery';
import JobsSearch from './JobsSearch';
//import Logout from '../Logout/logout';
const Home=()=>{
    const [activeTab, setActiveTab] = useState('1');
    const dispatch=useDispatch();
    const history=useHistory();
    const logoutHandler=()=>{
        dispatch(isAdmin(false));
        dispatch(username(""));
        console.log("admin logout");
        history.push('/');
    }
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return(
        <div className="container">
          <Nav tabs className="">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Alumni
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
              >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => { toggle('5'); }}
              >
                JobsSearch
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '6' })}
                onClick={() => { toggle('6'); }}
              >
                <button type="button" className="btn btn-light" onClick={logoutHandler}>Logout</button>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {/* <h1>Tab 1 Contents</h1> */}
                  <Alumni/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Events/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <Jobs/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <Gallery/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col sm="12">
                  <JobsSearch/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="6">
              <Row>
                <Col sm="12">
                  {/* <Logout/> */}
                </Col>
              </Row>
            </TabPane>            
          </TabContent>
          </div>
    )
}

export default Home;