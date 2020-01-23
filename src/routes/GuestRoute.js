import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  component: PropTypes.object.isRequired,
  rest: PropTypes.object
};

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      <Component {...props} />
    )}
  />
);

GuestRoute.propTypes = propTypes;
GuestRoute.displayName = 'Guest Route';

export default GuestRoute;
