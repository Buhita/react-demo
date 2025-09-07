import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'


function App() {
  const [contador, setContador] = useState(0)

  const IncrementarContador = () => setContador(contador + 1)
  const DecrementarContador = () => setContador(contador - 1)

  return (
    <>
      {/* <h1 style={{color: "blue"}}>Hola mundo </h1> */}
      {/* <h1 className='text-7xl bg-amber-400 rounded-2xl m-16 p-4'>Hola mundo </h1> */}
      {/* <h1>{2+2}</h1> */}

      <div className='flex justify-center items-center gap-1 bg-white m-10 p-4 rounded-2xl'>
        <Button texto={'-'} funcionalidad={DecrementarContador}/>
        <h1 className='text-3xl p-3'>Contador: {contador}</h1>
        {/* <button onClick={() => setContador(contador + 1)} 
        className='bg-blue-950 text-3xl text-white p-6 m-4 rounded-lg'>Incrementar</button> */}
        <Button texto={'+'} funcionalidad={IncrementarContador}/>
      </div>

    </>
  )
}

export default App
