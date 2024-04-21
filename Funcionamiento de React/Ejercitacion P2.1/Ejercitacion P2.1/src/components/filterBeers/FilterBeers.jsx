import React, { useState } from 'react'
import { Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FilterBeers = ({beers}) => {
    const [beerName, setBeerName] = useState('')

    const handleNameEntered = (e) => {
        setBeerName(e.target.value)
        beers(beerName)
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='label'>Beer Serch</Form.Label>
                        <Form.Control type="text" placeholder="Name..." onChange={handleNameEntered} />
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default FilterBeers

FilterBeers.prototype = {
    beers: PropTypes.func
}