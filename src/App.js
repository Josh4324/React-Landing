import React from 'react';
import { Route, Switch, HashRouter, Router, Redirect } from 'react-router-dom';
import {LoginPage, Dashboard,Landing,SignUp, Onboard1, Onboard2, Onboard3,
   PrivateRoute, NotFound, OnboardComplete, FanDashboard, CreatorPage} from './pages/index';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import 'react-notifications/lib/notifications.css';
import "./custom.css";
import jwt_decode from "jwt-decode";


function App(props) {
  const user = JSON.parse(localStorage.getItem('trend-user'));
    
    if (user){
        const token = user.token
        const decoded = jwt_decode(token);
        const expirationTime = (decoded.exp * 1000) - 60000;
        if (Date.now() >= expirationTime) {
            console.log("expired")
            localStorage.removeItem('trend-user');
            return <Redirect to="/login" />
        }
    }
  return (
    <div className="App color-theme-blue">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
              { user ? <Dashboard/> : <Landing/>}
          </Route>
          <Route exact path="/login">
              { user ? <Dashboard/> : <LoginPage/>}
          </Route>
          <Route exact path="/signup">
              { user ? <Dashboard/> : <SignUp/>}
          </Route>
          <PrivateRoute path="/step1" component={Onboard1} />
          <PrivateRoute path="/step2" component={Onboard2} />
          <PrivateRoute path="/step3" component={Onboard3} />
          <PrivateRoute path="/step4" component={OnboardComplete} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/fan-dashboard" component={FanDashboard} />
          <Route  path="/:username" component={CreatorPage} />
          <Route  component={NotFound} />

        </Switch>
        <NotificationContainer/>
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.auth,
  }
}

export default connect(mapStateToProps)(App);

