import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import './ChangeDollar.css'

const ChangeDollar = ({ onHandleChangeDollar }) => {
  // Recibimos del objeto padre Beers la funcion handleChangeDollar
  // se encargara de multiplicar por el valor de la cerveza

  const [newDollarValue, setNewDollarValue] = useState("")

  // Esto es para hacer el ejercicio numero dos y ocultar y mostrar el input que cambia el valor del dolar
  // Lo inicializamos en falso para que cuando cargue la pantalla este en invisible
  const [showComponent, setShowComponent] = useState(false);

  // Esta funcion se ejecutara cada vez que el usuario escriba
  const handleNewDollarValue = (event) => {
    const value = event.target.value
    setNewDollarValue(value)
    // Le estamos devolviendo a la funcion handleChangeDollar de Beers el numero que va escribiendo el usuario
    onHandleChangeDollar(value)
  };

  // Esto que esta comentado sive por si en vez de querer hacerlo a medida que el usuario escribe, lo queremos hacer con un boton que lo aprete y se calcule
  // const handleDollartSubmit = (event) => {
  //   event.preventDefault();
  //   onHandleChangeDollar(newDollarValue)
  //   setNewDollarValue('');
  // };

  // Aca nos encargamos de cambiar el estado del bool que muestra o no el componente
  // Si showComponent == true, y damos click cambia el valor a false
  // Si showComponent == false, y damos click cambia el valor a true
  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <Container className='border rounded bg-dark container'>
        {/* <Form onSubmit={handleDollartSubmit}> */}
        <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5" onClick={handleShowComponent}>
          {/* Aca para escribir el texto en el boton lo que hacemos es lo siguiente, */}
          {/* si showComponent y el usuario quiere ver el input para ingresar el valor del dolar, */}
          {/* el boton muestra "Change Dollar" y cuando este en true, el boton mostrara Hide */}
          {showComponent ? 'Hide' : 'Change Dollar'} 
        </Button>
        {/* Lo que hacemos aca es condicionar la renderizacion del componente react,*/}
        {/* solamente vamos a renderizar / mostrar en pantalla cuando showComponent sea true */}
        {/* cuando este en falso no va a renderizar nada. El && significa eso, si la variable es true renderizo sino no*/}
        {/* No es lo mismo hacer esto que hacer display none y eso, aca no hay que hacer eso */}
        {showComponent && (
          <Form>
            <Form.Group controlId="product-name">
              {/* <Form.Label className='text-light'>Ingresar valor del dolar</Form.Label> */}
              <Form.Control
                type="number"
                placeholder='Value...'
                onChange={handleNewDollarValue}
                value={newDollarValue}
              />
            </Form.Group>
            {/* Esto es por si queremos hacerlo con boton */}
            {/* <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5">Add</Button> */}
          </Form>
        )}
      </Container>
    </div>
  )
}

export default ChangeDollar