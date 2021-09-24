import React, { useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About-Us';
import Events from './components/Events';
import AddJobs from './components/Jobs/add-jobs';
import ViewJobs from './components/Jobs/view-jobs';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Logout from './components/Logout/logout';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  const isAdmin=useSelector(state=>state.isAdmin);
  const username=useSelector(state=>state.username);
  //const [isAdmin, setIsAdmin]=useState(false);
  console.log("isAdmin App.js : "+isAdmin);
  console.log("username App.js : "+username);
  const history=useHistory();
  

  return (
    <BrowserRouter>
    {isAdmin?null:<Header/>}
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about-us" component={About}/>
    <Route exact path="/events" component={Events}/>
    {username?<Route exact path="/add-jobs" component={AddJobs}/>:<Route exact path="/add-jobs" component={Home}/>}
    {username?<Route exact path="/view-jobs" component={ViewJobs}/>:<Route exact path="/view-jobs" component={Home}/>}
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    {isAdmin?<Route exact path="/admin" component={Admin}/>:<Route exact path="/admin" component={Login}/>}
    <Route exact path="/logout" component={Logout}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/*" component={PageNotFound}/>
    </Switch>    
    {isAdmin?null:<Footer/>}
    </BrowserRouter>
  );
}

export default App;
