import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

// 404
import NotFound from '../pages/404';

// Home
import Home from '../pages/Home';

// import GuestRoute from './GuestRoute';
import AppLayoutRoute from './AppLayoutRoute';

class App extends Component {
  componentDidMount () {
    
  }

  render () {
    if (this.props.loading) {
      return (
        <i className="fas fa-circle-notch fa-spin"></i>
      );
    }

    return (
      <Router>
          <Switch>
            <AppLayoutRoute exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

export default connect()(App);
