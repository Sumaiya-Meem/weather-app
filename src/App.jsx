
import './App.css'
import axios from 'axios'
function App() {

  const url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={097c9a5daccb743c11eafa92e4b6d383}`

  return (
    <>
      
      <h1 className='text-center'>Vite + React</h1>
     
    </>
  )
}

export default App
