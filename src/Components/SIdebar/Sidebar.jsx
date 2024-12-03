import React from 'react'
import { RiFoggyLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { CiCloud } from "react-icons/ci";

function Sidebar({data , forecast}) {

  const daysOfWeek = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const timzone = {
  day: daysOfWeek[(new Date(data?.dt*1000)).getDay()-1],
  month:  (new Date(data?.dt*1000)).getMonth(),
  year: (new Date(data?.dt*1000)).getFullYear(),
  }


  return (

    

    <div className='sidebar'>
      <div className='uppercard'>
        <h3 className='colordiv'>
          now
        </h3>
        <div className='celcium_cloud'><div className='gradus'>{data?.main.temp}&deg;C , <img src={`https://openweathermap.org/img/wn/${forecast?.list[0].weather[0].icon}@2x.png`} alt=""  style={  {widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/></div></div>
        <hr />
        <div className='upper-dower'>
          <div className='colordivD'><CiCalendar /> {timzone.day} , {months[timzone.month]}  {timzone.year}</div>
          <div className='colordivD'><IoLocationSharp />{data?.name}</div>
        </div>
      </div>

      <ul className='forecasts'>
        <li className='forecastitem'> <img src={`https://openweathermap.org/img/wn/${forecast?.list[7].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/><div style={{fontSize:"20px"}}>  {forecast?.list[7].main.temp}&deg;C </div>, <div style={{minWidth:"87px"}} className='colordiv'>{(new Date(forecast?.list[7].dt*1000)).getDate()} {months[(new Date(forecast?.list[7].dt*1000)).getMonth()]} {daysOfWeek[(new Date(forecast?.list[7].dt*1000)).getDay()]}</div> </li>

        <li className='forecastitem'><img src={`https://openweathermap.org/img/wn/${forecast?.list[15].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/><div style={{fontSize:"20px"}}> {forecast?.list[15].main.temp}&deg;C </div>, <div className='colordiv'>{(new Date(forecast?.list[15].dt*1000)).getDate()} {months[(new Date(forecast?.list[15].dt*1000)).getMonth()]} {daysOfWeek[(new Date(forecast?.list[15].dt*1000)).getDay()]}</div> </li>

        <li className='forecastitem'><img src={`https://openweathermap.org/img/wn/${forecast?.list[23].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/><div style={{fontSize:"20px"}}> {forecast?.list[23].main.temp}&deg;C </div>, <div className='colordiv'>{(new Date(forecast?.list[23].dt*1000)).getDate()} {months[(new Date(forecast?.list[23].dt*1000)).getMonth()]} {daysOfWeek[(new Date(forecast?.list[23].dt*1000)).getDay()]}</div> </li>

        <li className='forecastitem'><img src={`https://openweathermap.org/img/wn/${forecast?.list[31].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/><div style={{fontSize:"20px"}}> {forecast?.list[31].main.temp}&deg;C </div>, <div className='colordiv'>{(new Date(forecast?.list[31].dt*1000)).getDate()} {months[(new Date(forecast?.list[31].dt*1000)).getMonth()]} {daysOfWeek[(new Date(forecast?.list[31].dt*1000)).getDay()]}</div> </li>

        <li className='forecastitem'><img src={`https://openweathermap.org/img/wn/${forecast?.list[39].weather[0].icon}@2x.png`} alt=""  style={{widht:"50px" , height: "50px" , backgroundColor:"#282C2D"}}/><div style={{fontSize:"20px"}}> {forecast?.list[39].main.temp}&deg;C </div>, <div className='colordiv'>{(new Date(forecast?.list[39].dt*1000)).getDate()} {months[(new Date(forecast?.list[39].dt*1000)).getMonth()]} {daysOfWeek[(new Date(forecast?.list[39].dt*1000)).getDay()]}</div> </li>
      </ul>
    </div>
  )
}

export default Sidebar