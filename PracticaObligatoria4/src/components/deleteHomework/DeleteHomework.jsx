import { Button } from 'react-bootstrap';

const DeleteHomework = ({ homeworks, homeworkid, onHandleDeleteHomework }) => {

    const handleDeleteHomework = () => {       
        let newListHomework = []
        homeworks.map((i)=> {
            if(i.id !== homeworkid){
                newListHomework.push(i)
            }
        })
        onHandleDeleteHomework(newListHomework)
    };


    return (
        <>
            <Button variant="danger" type="button" onClick={handleDeleteHomework}>Borrar Tarea</Button>
        </>
    )
}

export default DeleteHomework