import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { title } = props;

  return (
    <li style={{ listStyleType: 'none', fontSize: '2rem', lineHeight: '2.5rem' }}>{title}</li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
};

export default Item;
