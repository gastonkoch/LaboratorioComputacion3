import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NewHomework = ({ onHandleHomeworks }) => {
    const [view, setView] = useState(false);
    const [newHomework, setNewHomework] = useState('');

    const onHandleNewHomework= (e) => {
        setNewHomework(e.target.value);
    };

    const onHandleView = () => {
        setView(!view);
    };

    const onSubmitNewHomework = (e) => {
        e.preventDefault();
        onHandleHomeworks(newHomework)
        setView(false)
    }

    return (
        <>
            {!view && <Button variant="primary" type="button" onClick={onHandleView}>Agregar nueva tarea</Button>}
            {view &&
                <Form onSubmit={onSubmitNewHomework}>
                    <Form.Group className="mb-3" controlId="fromName">
                        <Form.Label>Nombre de la tarea</Form.Label>
                        <Form.Control type="name" placeholder="Enter homework" value={newHomework} onChange={onHandleNewHomework}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>}

        </>
    );
};


NewHomework.propTypes = {
    onHandleHomeworks: PropTypes.func
};

export default NewHomework;
