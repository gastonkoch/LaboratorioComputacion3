import React from 'react'

let beersStyleNotDuplicate = [];
let beersStyleHTML = '';

export const BeerStyle = ({ beers }) => {

  beers.map((beer) => {
    if (!beersStyleNotDuplicate.includes(beer.beerStyle)) {
      beersStyleNotDuplicate.push(beer.beerStyle);
      beersStyleHTML += beer.beerStyle + "/";
    }
  });
  let ultimaBarraIndex = beersStyleHTML.lastIndexOf("/");

  if (ultimaBarraIndex !== -1) {
    beersStyleHTML = beersStyleHTML.substring(0, ultimaBarraIndex);
  }
  
  return (
    <>
      {/* <h1>{JSON.stringify(beersStyleNotDuplicate)}</h1> */}
      <h1>{beersStyleHTML}</h1>
    </>
  )
}
