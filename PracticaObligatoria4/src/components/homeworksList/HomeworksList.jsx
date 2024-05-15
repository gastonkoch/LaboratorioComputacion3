import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import NewHomework from '../newHomework/NewHomework';
import './HomeworksList.css'
import DeleteHomework from '../deleteHomework/DeleteHomework';



const HomeworksList = () => {
    let homeworksList = [
        {
            id: 1,
            name: "Programacion",
            homeworkFinish: false
        },
        {
            id: 2,
            name: "Laboratorio",
            homeworkFinish: false
        },
        {
            id: 3,
            name: "Estadisticas",
            homeworkFinish: false
        }
    ];

    const [homeworks, setHomeworks] = useState(homeworksList)

    const onHandleHomeworks = (newHomework) => {
        let homeworkAdd = {
            id: Math.random(),
            name: newHomework,
            homeworkFinish: false
        }

        setHomeworks((tarea) => [...tarea, homeworkAdd])
    }

    const finishHomework = (id) => {
        const updatedHomeworks = homeworks.map((homework) => {
            if (homework.id === id) {
                return { ...homework, homeworkFinish: true };
            } else {
                return homework;
            }
        });


        setHomeworks(updatedHomeworks);
    };

    const onHandleDeleteHomework = (newListHomework) => (
        // console.log(newListHomework)
        setHomeworks(newListHomework)
    );
    return (
        <>
            {homeworks.map((homework) => (

                <Card key={homework.id} style={{ width: '18rem' }} className='card'>
                    <Card.Body>
                        <Card.Title>{homework.name}</Card.Title>
                        {homework.homeworkFinish ?
                            <Card.Text className='finish'>
                                Tarea Finalizada
                            </Card.Text>
                            :
                            <Card.Text className='notFinish'>
                                Tarea Incompleta
                            </Card.Text>}

                        {homework.homeworkFinish ?
                            <Button variant="primary" type="button" className='marginButton' onClick={() => finishHomework(homework.id)}>Tarea entregada</Button>
                            :
                            <Button variant="warning" type="button" className='marginButton' onClick={() => finishHomework(homework.id)}>Finalizar tarea</Button>}
                        
                        {/* <Button variant="danger" type="button" homeworks={homeworks}>Borrar Tarea</Button> */}
                        <DeleteHomework homeworks={homeworks} homeworkid={homework.id} onHandleDeleteHomework={onHandleDeleteHomework}></DeleteHomework>

                    </Card.Body>
                </Card>
            ))}

            <NewHomework onHandleHomeworks={onHandleHomeworks}></NewHomework>
        </>
    )
}

export default HomeworksList