import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'


function App() {
  const [contador, setContador] = useState(0)

  const IncrementarContador = () => setContador(contador + 1)
  const DecrementarContador = () => setContador(contador - 1)

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
      {/* <h1 style={{color: "blue"}}>Hola mundo </h1> */}
      {/* <h1 className='text-7xl bg-amber-400 rounded-2xl m-16 p-4'>Hola mundo </h1> */}
      {/* <h1>{2+2}</h1> */}

      <h1 className='text-6xl'>Contador: {contador}</h1>
      {/* <button onClick={() => setContador(contador + 1)} 
        className='bg-blue-950 text-3xl text-white p-6 m-4 rounded-lg'>Incrementar</button> */}
      <Button texto={'Incrementar'} funcionalidad={IncrementarContador}/>
      <Button texto={'Decrementar'} funcionalidad={DecrementarContador}/>
      <Button texto={'JsonPlaceholder'} funcionalidad={JsonPlaceholder}/>
    </>
  )
}

export default App
