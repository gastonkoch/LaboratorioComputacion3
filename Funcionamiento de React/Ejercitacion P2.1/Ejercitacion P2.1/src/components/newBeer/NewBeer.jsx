import React, { useState } from 'react'
import { Form, Button,Container } from 'react-bootstrap';
import './NewBeer.css'

const NewBeer = ({onHandleAddNewBeer}) => {
    // Recibimos la funcion handleNewBeer del componente Beers
    // la cual internamente agregara la nueva cerveza que el usuario colocara por pantalla
    const [nameEntered, setNameEntered] = useState("");
    const [styleEntered, setStyleEntered] = useState("");
    const [priceEntered, setPriceEntered] = useState("");

    const handleNameEntered = (event) => {
        setNameEntered(event.target.value)
    };

    const handleStyleEntered = (event) => {
        setStyleEntered(event.target.value)
    };

    const handlepriceEntered = (event) => {
        setPriceEntered(event.target.value)
    };

    // Lo que hacemos es, freezear los valores que coloco el usuario
    // Crear un objeto solo con los valores que ingreso el usario por pantalla
    // el id y available lo colocamos en el objeto padre
    const onSubmit = (event) => {
        event.preventDefault()

        const beer = {
            beerName: nameEntered,
            beerStyle: styleEntered,
            price: priceEntered
        }
        
        onHandleAddNewBeer(beer);

        setNameEntered('');
        setStyleEntered('');
        setPriceEntered(0);
    }      
    return (
        <>
            <Container className='border rounded bg-dark' onSubmit={onSubmit}>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='label'>Beer Name</Form.Label>
                        <Form.Control type="text" placeholder="Name..." value={nameEntered} onChange={handleNameEntered} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Style">
                        <Form.Label className='label'>Beer Style</Form.Label>
                        <Form.Control type="text" placeholder="Style..." value={styleEntered} onChange={handleStyleEntered} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Price" >
                        <Form.Label className='label'>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price..." value={priceEntered} onChange={handlepriceEntered} />
                    </Form.Group>
                    <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5">Create</Button>
                </Form>
            </Container>
        </>
    )
}

export default NewBeer