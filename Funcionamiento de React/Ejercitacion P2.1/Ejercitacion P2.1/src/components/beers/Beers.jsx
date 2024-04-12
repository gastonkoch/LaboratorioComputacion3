import React, { useState } from 'react'
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import './Beer.css'
import ChangeDollar from '../changeDollar/ChangeDollar';
import NewBeer from '../newBeer/NewBeer';

const Beers = () => {
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

    const [initialBeers, setInitialBeers] = useState(beers);
    const [beerRefresh, setBeerRefresh] = useState(initialBeers);


    const handleChangeDollar = (newDollarValue) => {
        // Explicación:
        // Lo que pasa es lo siguiente initialBeers va a equivaler al arreglo beers, y vamos a manejarlo como si fuera beers original, no podemos utilizar beer directamente
        // ya que beers, no tiene un estado por ende no es dinamico y nunca vemos reflejado los add, remove , etc en pantalla. Entonces en resumen lo que hacemos en este codigo es
        // mostramos beerRefresh, va ser nuestra lista dinamica que mostramos en pantalla

        //PASO 1:
        // Esta funcion es la que vamos a pasarle como prop a ChangeDollar, y vamos a iterar (map) sobre nuestra lista initialBeers
        // La cual lo que va a hacer es multiplicar el valor que ingresa el usuario por pantalla por el que esta en la lista original
        // La razon por la cual no realizamos la iteracion sobre beerRefresh, es debido a que de esta manera si el usuario ingresa
        // 10 y la cerveza vale 1, dara 10 si escribimos un 0 más (osea 100) el resultado es 10000, ya que multiplica por el resultado obtenido
        // no por el precio original de lo que vale la cerveza que seria 1,2,3,4,etc. Entonces utilizamos initialBeers ya que posee el precio original
        // hace un return, lo que significa que updatedBeers se convirtio en un array de objetos (posar el mouse sobre la variable y te muestra la estructura).
        // Una vez tenemos el valor de esta nueva collecion de objetos (updatedBeers) con los precios nuevos, recien ahi se lo pasamos al setBeerRefresh, que va
        // a modificar la grilla en la pantalla. Entonces el usuario siempre que vaya ingresando el valor de dolar se va a multiplicar por el valor original
        
       const updatedBeers = initialBeers.map((beer) => {
            return {
                ...beer,
                price: beer.price * newDollarValue
            };
        });
        // setBeerRefresh(updatedBeers);
        setBeerRefresh(updatedBeers);
    };


    const handleNewBeer = (newBeer) => {
        // PASO 2:
        // Aca lo que hacemos es agregar el nuevo valor a la grilla que esta en pantalla (beerRefresh) y tambien a la original (iInitialBeers), ya que
        // si no lo agregamos a la original, vamos a agregar una nueva cerveza a la grilla pero cuando querramos modificar el valor del dolar, la cerveza que hemos agregado
        // sera eliminada, ya que recordemos que en el PASO 1 iteramos sobre la lista original no sobre la que se muestra en pantalla
        const newProduct = {
            id: Math.random().toString(),
            ...newBeer,
            available: true,

        }

        setInitialBeers((prevState) => [...prevState, newProduct]);
        setBeerRefresh(prevBeers => [...prevBeers, newProduct]);
    }



    return (
        <>
            <Container className='border rounded bg-dark'>
                <Row>
                    {beerRefresh.map((beer) => (
                        <Col key={beer.id} md={4} className='mb-2'>
                            <Card border='secondary' bg='primary' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{beer.beerName}</Card.Title>
                                    <Card.Text>{beer.beerStyle}</Card.Text>
                                    <Card.Text>{beer.price}</Card.Text>
                                    <Button variant="light">Pedir</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
            
            {/* Enviamos por parametro la funcion que cambia el dolar */}
            <ChangeDollar onHandleChangeDollar={handleChangeDollar} />
            {/* Enviamos por parametro la funcion que agrega una nueva cerveza */}
            <NewBeer onHandleAddNewBeer={handleNewBeer}></NewBeer>
        </>
    )
}

export default Beers