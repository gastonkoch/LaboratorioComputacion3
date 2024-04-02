import React from 'react'
import PropTypes from 'prop-types';

let countIpa = 0;
let countRed = 0;
export const BeerCountRedIpa = ({beers}) => {
    beers.forEach(beer => {
        console.log(beer.id)
        if(beer.beerStyle == "IPA"){
            countIpa++
        }
        if(beer.beerStyle == "Red"){
            countRed++
        }
    });
    return(
        <div>
            <h2>Cantidad de IPA: {countIpa / 2}</h2>
            <h2>Cantidad de RED: {countRed / 2}</h2>
        </div>
    );
}

BeerCountRedIpa.propTypes = {
    beers : PropTypes.array
  };
  
