import React from 'react'
import PropTypes from 'prop-types';

export const BeerAvailable = ({ name, available }) => {
    if (available) {
        return (<h1>{name}</h1>)
    } else {
        return null;
    }
}

BeerAvailable.propTypes = {
    name: PropTypes.string ,
    available: PropTypes.bool,
  };
  

