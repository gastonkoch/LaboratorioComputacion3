import './App.css'
import { BeerAvailable } from './components/beerAvailable/BeerAvailable';
import { BeerCountRedIpa } from './components/beerCountRedIpa/BeerCountRedIpa';
import { BeerStyle } from './components/beerStyle/BeerStyle';
import { BeersList } from './components/beersList/BeersList';
import { Products } from './components/products/Products';


function App() {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  const products = ["table","couch","chair1","chair2"];
  return (
      <div>
        {/* {beers.map((beer, i) => (
          <BeersList
            key={i}
            name={beer.beerName}
            style={beer.beerStyle}
            price={beer.price}
            available={beer.available}
          />
        ))} */}
        {/* {beers.map((beer, i) => (
          <BeerAvailable
            key={i}
            name={beer.beerName}
            available={beer.available}
          />
        ))} */}
        {/* {beers.map((beer, i) => (
          <BeerCountRedIpa
            key={i}
            id={beer.id}
            style={beer.beerStyle}
          />
        ))} */}
        {/* <BeerCountRedIpa beers={beers}/> */}
        {/* <BeerStyle beers={beers}/> */}
        <Products products={products}></Products>
      </div>
  )
}

export default App
