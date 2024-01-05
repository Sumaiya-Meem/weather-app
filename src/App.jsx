
import './App.css'
import axios from 'axios'
import WeatherApp from './Page/WeatherApp'
function App() {

  const url=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=097c9a5daccb743c11eafa92e4b6d383`

  return (
    <>
      
     <WeatherApp/>
     
    </>
  )
}

export default App
