import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';

class Home extends Component {
 render() {
  return (
   <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React</h1>
      <br/>
      <div className="App-intro">
        Hola Mundo!
      </div>
    </header>
   </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
