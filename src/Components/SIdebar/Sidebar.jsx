import React, { useContext } from 'react'
import { RiFoggyLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { CiCloud } from "react-icons/ci";
import { langContext } from '../../Context/LangContext'
import { language } from '../../Lang/Lang'


function Sidebar({data , forecast}) {

  const {lang , setLang} = useContext(langContext)
  const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'  ];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const timzone = {
  day: daysOfWeek[(new Date(data?.dt*1000)).getDay()],
  month:  (new Date(data?.dt*1000)).getMonth(),
  year: (new Date(data?.dt*1000)).getFullYear(),
  }


  return (

    

    <div className='sidebar'>
      <div className='uppercard'>
        <h3 className='colordiv'>
        {`${language[lang].sidebar.now}`}
        </h3>
        <div className='celcium_cloud'><div className='gradus'>{data?.main.temp}&deg;C , <img src={`https://openweathermap.org/img/wn/${forecast?.list[0].weather[0].icon}@2x.png`} alt=""  style={  {widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/></div></div>
        <hr />
        <div className='upper-dower'>
          <div className='colordivD'>
            <CiCalendar style={{backgroundColor:"var(--div-main)"}}/>
             {language[lang].sidebar.week[timzone.day]} , {language[lang].sidebar.monthsofyear[months[timzone.month]]}  {timzone.year}</div>
          <div className='colordivD'><IoLocationSharp style={{backgroundColor:"var(--div-main)"}}/>{data?.name}</div>
        </div>
      </div>

      <ul className='forecasts'>


        <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[7].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/>
        <div style={{fontSize:"20px" , backgroundColor:"var(--div-main)"}}>
            {forecast?.list[7].main.temp}&deg;C 
            </div>, 
            <div style={{minWidth:"87px"}} className='colordiv'>
              {(new Date(forecast?.list[7].dt*1000)).getDate()}{language[lang].sidebar.monthsofyear[months[(new Date(forecast?.list[7].dt*1000)).getMonth()]]} {language[lang].sidebar.week[daysOfWeek[(new Date(forecast?.list[7].dt*1000)).getDay()]]}
              </div> 
              </li>


              <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[15].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/>
        <div style={{fontSize:"20px" , backgroundColor:"var(--div-main)"}}>
            {forecast?.list[15].main.temp}&deg;C 
            </div>, 
            <div style={{minWidth:"87px"}} className='colordiv'>
              {(new Date(forecast?.list[15].dt*1000)).getDate()}{language[lang].sidebar.monthsofyear[months[(new Date(forecast?.list[15].dt*1000)).getMonth()]]} {language[lang].sidebar.week[daysOfWeek[(new Date(forecast?.list[15].dt*1000)).getDay()]]}
              </div> 
              </li>


              <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[23].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/>
        <div style={{fontSize:"20px" , backgroundColor:"var(--div-main)"}}>
            {forecast?.list[23].main.temp}&deg;C 
            </div>, 
            <div style={{minWidth:"87px"}} className='colordiv'>
              {(new Date(forecast?.list[23].dt*1000)).getDate()}{language[lang].sidebar.monthsofyear[months[(new Date(forecast?.list[23].dt*1000)).getMonth()]]} {language[lang].sidebar.week[daysOfWeek[(new Date(forecast?.list[23].dt*1000)).getDay()]]}
              </div> 
              </li>

              <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[31].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/>
        <div style={{fontSize:"20px" , backgroundColor:"var(--div-main)"}}>
            {forecast?.list[31].main.temp}&deg;C 
            </div>, 
            <div style={{minWidth:"87px"}} className='colordiv'>
              {(new Date(forecast?.list[31].dt*1000)).getDate()}{language[lang].sidebar.monthsofyear[months[(new Date(forecast?.list[15].dt*1000)).getMonth()]]} {language[lang].sidebar.week[daysOfWeek[(new Date(forecast?.list[31].dt*1000)).getDay()]]}
              </div> 
              </li>

              <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[39].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"var(--div-main)"}}/>
        <div style={{fontSize:"20px" , backgroundColor:"var(--div-main)"}}>
            {forecast?.list[39].main.temp}&deg;C 
            </div>, 
            <div style={{minWidth:"87px"}} className='colordiv'>
              {(new Date(forecast?.list[39].dt*1000)).getDate()}{language[lang].sidebar.monthsofyear[months[(new Date(forecast?.list[15].dt*1000)).getMonth()]]} {language[lang].sidebar.week[daysOfWeek[(new Date(forecast?.list[39].dt*1000)).getDay()]]}
              </div> 
              </li>

      </ul>
    </div>
  )
}

export default Sidebar