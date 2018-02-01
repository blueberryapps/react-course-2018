import React from 'react';
import PropTypes  from 'prop-types';

const ActiveTab = (props) => {
  const { content, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {content}
      </div>
    </div>
  )
};

ActiveTab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ActiveTab;
