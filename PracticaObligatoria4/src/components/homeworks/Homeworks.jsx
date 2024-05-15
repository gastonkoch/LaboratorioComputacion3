import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import NewHomework from '../newHomework/NewHomework';
import HomeworksList from '../homeworksList/HomeworksList';



const Homeworks = () => {
    // let homeworksList = [
    //     {
    //         id: 1,
    //         name: "Programacion",
    //         homeworkFinish: false
    //     },
    //     {
    //         id: 2,
    //         name: "Laboratorio",
    //         homeworkFinish: false
    //     },
    //     {
    //         id: 3,
    //         name: "Estadisticas",
    //         homeworkFinish: false
    //     }
    // ];

    // const [homeworks, setHomeworks] = useState(homeworksList)

    // const onHandleHomeworks = (newHomework) => {
    //     let homeworkAdd = {
    //         id: Math.random(),
    //         name: newHomework,
    //         homeworkFinish: false
    //     }

    //     setHomeworks((tarea) => [...tarea, homeworkAdd])
    // }

    // const finishHomework = (id) => {
    //     const updatedHomeworks = homeworks.map((homework) => {
    //         if (homework.id === id) {
    //             return { ...homework, homeworkFinish: true };
    //         } else {
    //             return homework;
    //         }
    //     });
    

    //     setHomeworks(updatedHomeworks);
    // };
    

    return (
        <>
            <HomeworksList></HomeworksList>

            {/* <NewHomework onHandleHomeworks={onHandleHomeworks}></NewHomework> */}
        </>

    )
}

export default Homeworks


