import {useState} from 'react'
import Button from './Button'


function JsonDB() {

  const JsonPlaceholder = () => fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        users.forEach(user => console.log(user.name))
      })
      .catch(error => console.log(error))

    async function obtenerUsuarios() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        users.forEach(user => console.log(user.name))
      } catch (error) {
        console.log("Error: ",error)
      }
    }

    obtenerUsuarios()

  return (
    <>
      <div className='flex justify-center items-center gap-1 bg-white m-10 p-4 rounded-2xl'>
        <h1 className='text-3xl p-3'>Datos:</h1>
        <Button texto={'Obtener Datos'} funcionalidad={JsonPlaceholder}/>
      </div>
    </>
  )
}

export default JsonDB
