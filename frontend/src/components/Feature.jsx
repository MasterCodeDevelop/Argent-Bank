import React from 'react';
import PropTypes from 'prop-types';

function Feature({ icon, name, title, description }) {
  return (
    <div className="feature">
      <img src={icon} alt={`${name} Icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;

Feature.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
