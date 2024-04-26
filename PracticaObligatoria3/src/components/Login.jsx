import React, { useState } from 'react'

const Login = () => {
    const [newName, setNewName] = useState("")

    const handleNewName = (e) => {
        console.log(e.target.value.toLowerCase())
        if(e.target.value.toLowerCase().includes("o")){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        } else {
            setNewName(e.target.value)
        }
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(newName == ""){
            alert("Usuario inválido para registrarse")
        } else {
            alert("¡Usuario registrado correctamente!")
            setNewName("")
        }
    }
    
  return (
    <form  onSubmit={onSubmit}>
    <label htmlFor="name">Nombre </label>
    <input id="GET-name" type="text" name="name" value={newName} onChange={handleNewName}/>
    <button type='submit'>Registrarse</button>
    <p>{newName}</p>
    </form>
  )
}

export default Login