import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired
};

const AppLayout = ({ children, ...rest }) => {
  return (
    <div>
        {children}
    </div>
  );
};

AppLayout.propTypes = propTypes;

export default AppLayout;
