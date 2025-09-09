import {useState} from 'react'
import Button from './Button'

async function obtenerUsuarios() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()

        console.log("--------------------------")
        users.forEach(user => console.log(user.name))
        console.log("--------------------------")
      } catch (error) {
        console.log("Error: ",error)
      }
}

function JsonDB() {

  const JsonPlaceholder = () => fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        console.log("--------------------------")
        users.forEach(user => console.log(user.name))
        console.log("--------------------------")

        let users_string = ""
        users.forEach(user => users_string += user.name + "\n")
        alert(users_string)

      })
      .catch(error => console.log(error))    

  return (
    <>
      <div className='flex justify-center items-center gap-1 bg-white m-10 p-4 rounded-2xl'>
        <h1 className='text-3xl p-3'>Datos:</h1>
        <Button texto={'Obtener Datos'} funcionalidad={JsonPlaceholder}/>
      </div>
    </>
  )
}

obtenerUsuarios()

export default JsonDB
