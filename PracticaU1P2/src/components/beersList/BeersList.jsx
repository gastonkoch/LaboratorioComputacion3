import React from 'react'
import PropTypes from 'prop-types';

export const BeersList = ({name,style,price,available}) => {
  return (
    <div>
        <p>-------------------------------------------------------</p>
        <h1>{name}</h1>
        <h1>{style}</h1>
        <h1>{price}</h1>
        <h1>{available}</h1>
        <p>///////////////////////////////////////////////////////</p>
    </div>
  )
}

BeersList.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.bool,
};

