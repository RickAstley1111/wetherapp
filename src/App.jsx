import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/SIdebar/Sidebar'
import Mid from './Components/MId/Mid'
import axios from 'axios'
import { useRef } from 'react'


function App() {
  const [cityname, setCityName] = useState('tashkent')
  const [data, setData] = useState(null)
  const [forecast, Setforecast] = useState(null)
  const [polution, setPolution] = useState(null)
  const [location , setLocation] = useState({lat: null , lon: null})
  const [error, setError] = useState(null)
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
    <>


      <div><Header setLocation={setLocation} setError={setError} cityValue={cityValue} searcherclick={searcherclick} /></div>
      <div className='notheader'>
        <Sidebar forecast={forecast} data={data} />
        <Mid data={data} polution={polution} forecast={forecast} />
      </div>

    </>

  )
}

export default App
