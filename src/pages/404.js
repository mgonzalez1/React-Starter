import React from 'react';
import { connect } from 'react-redux';

const NotFound = (props) => {
  return (
    <div className="container-fluid content-page">
      <div className="row">
        <span className="error-font">404</span>
      </div>
      <div className="row">
        <span>Lo sentimos, la página que estás buscando no existe.</span>
      </div>
    </div> 
  );
};

export default connect()(NotFound);
