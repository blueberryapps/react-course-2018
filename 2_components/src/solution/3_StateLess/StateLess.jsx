import React from 'react';
import PropTypes from 'prop-types';

const StateLess = (props) => {
  const { name, password } =props;

  return (
    <div>
      <div>Name = {name}</div>
      <div>Password = {password}</div>
    </div>
  )
};

StateLess.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string
};

export default StateLess;