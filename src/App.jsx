import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/SIdebar/Sidebar'
import Mid from './Components/MId/Mid'
import axios from 'axios'
import { useRef } from 'react'
import { ThemeContext } from './Context/ThemeContext'


function App() {
  const [cityname, setCityName] = useState('tashkent')
  const [data, setData] = useState(null)
  const [forecast, Setforecast] = useState(null)
  const [polution, setPolution] = useState(null)
  const [location , setLocation] = useState({lat: null , lon: null})
  const [error, setError] = useState(null)
  const {isDark} = useContext(ThemeContext)
  console.log(isDark);
  
  const cityValue = useRef()

  const API_KEY = `b8a90c3dd0762dc0d30fe03b550af1de`
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`).then((res) => setData(res.data));
  }, []);


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}&units=metric`).then((res) => {
      Setforecast(res.data);
    })
  }, [])

  console.log(data);
  

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${data?.coord.lat}&lon=${data?.coord.lon}&appid=${API_KEY}`)
      .then((res) => setPolution(res.data));
  }, [data])

  const searcherclick = () =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue?.current.value}&appid=${API_KEY}&units=metric`).then((res) => setData(res.data));
    
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue?.current.value}&appid=${API_KEY}&units=metric`).then((res) => {
      Setforecast(res.data);

      axios
      .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${data?.coord.lat}&lon=${data?.coord.lon}&appid=${API_KEY}`)
      .then((res) => setPolution(res.data));
    })
  }

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`).then((res) => setData(res.data));
    
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`).then((res) => {
      Setforecast(res.data);

      axios
      .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
      .then((res) => setPolution(res.data));
    })
  },[location])



return (
  <div className={isDark ? "dark" : "light"}>
    <Header
      setLocation={setLocation}
      setError={setError}
      cityValue={cityValue}
      searcherclick={searcherclick}
    />

    <div className="container">
      <div className='notheader'>
        <Sidebar forecast={forecast} data={data} />
        <Mid data={data} polution={polution} forecast={forecast} />
      </div>
    </div>
  </div>
)
}

export default App
