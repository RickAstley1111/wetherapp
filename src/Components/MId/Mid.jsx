import React from 'react'
import { WiStrongWind } from "react-icons/wi";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { FaCompass } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { BsCursor } from "react-icons/bs";
import { FaTemperatureHalf } from "react-icons/fa6";
import { CiCloudSun } from "react-icons/ci";
import { GiApc } from 'react-icons/gi';

function Mid({polution , data , forecast}) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weatherrating = ["" , "good" , "fair" , "Moderate" , "Poor" , "VeryPoor"]
    return (
        <div className='mid-full'>
            <h2>
                Today Highlights 
            </h2>

            <div className='cards-today'>

            

                <div className='airqualitycard'>
                
                <span className={`${weatherrating[polution?.list[0].main.aqi]}`}><div className={`${weatherrating[polution?.list[0].main.aqi]}a`}>{weatherrating[polution?.list[0].main.aqi]}</div></span>

                    <div style={{ backgroundColor: "#282C2D", marginLeft: "10px" }}>
                        <WiStrongWind style={{ width: "111px", height: "129px", backgroundColor: " #282C2D" }} />
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>PM2.5</h1>
                        <div className='range'>{polution?.list[0].components.pm2_5}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>PM10</h1>
                        <div className='range'>{polution?.list[0].components.pm10}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>SO2</h1>
                        <div className='range'>{polution?.list[0].components.so2}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>CO</h1>
                        <div className='range'>{polution?.list[0].components.co}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>No</h1>
                        <div className='range'>{polution?.list[0].components.no}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>No2</h1>
                        <div className='range'>{polution?.list[0].components.no2}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>NH3</h1>
                        <div className='range'>{polution?.list[0].components.nh3}</div>
                    </div>

                    <div className='singletpye'>
                        <h1 className='typerange'>O3</h1>
                        <div className='range'>{polution?.list[0].components.o3}</div>
                    </div>

                </div>

                <div className='setsun'>
                    <div className='sunrised'>
                        <FiSunrise className='sunrise' />
                    <h2>sunset: {new Date(data?.sys.sunset*1000).getHours()-12} : {new Date(data?.sys.sunset*1000).getMinutes()} PM</h2>
                    </div>

                    <div className='sunrised'>
                        <FiSunset className='sunrise' />
                        <h2>sunrise: {new Date(data?.sys.sunrise*1000).getHours()} : {new Date(data?.sys.sunrise*1000).getMinutes()} AM</h2>
                    </div>

                </div>
            </div>
            <div className='mided'>
            <div className='singleinfo'>
            <div className='typicard'>humidity</div>
            <div className='typicardrange'><IoWaterOutline/>{data?.main.humidity}%</div>
            </div>

            <div className='singleinfo'>
            <div className='typicard'>pressure</div>
            <div className='typicardrange'><FaCompass />{data?.main.pressure}hPa</div>
            </div>

            <div className='singleinfo'>
            <div className='typicard'>visibility </div>
            <div className='typicardrange'><IoIosEye />{data?.visibility/1000}km</div>
            </div>

            <div className='singleinfo'>
            <div className='typicard'>wind speed</div>
            <div className='typicardrange'><BsCursor />{data?.wind.speed}m/s</div>
            </div>

            <div className='singleinfo'>
            <div className='typicard'>feels like</div>
            <div className='typicardrange'><FaTemperatureHalf /> {data?.main.feels_like}&deg; C</div>
            </div>

        </div>

            <h2>Today at </h2>
            <div className='downlist' style={{display:"flex" , gap:"80px" , justifyContent:"center" , textAlign:"center"} }>

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[1].dt*1000).getMonth()]} {new Date(forecast?.list[1].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[1].dt*1000).getHours()}:00</h4>
            <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[1].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[1].main.temp}&deg;C</h4>
            </div >

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[2].dt*1000).getMonth()]} {new Date(forecast?.list[2].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[2].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[2].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[2].main.temp}&deg;C</h4>
            </div >

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[3].dt*1000).getMonth()]} {new Date(forecast?.list[3].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[3].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[3].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[3].main.temp}&deg;C</h4>
            </div>

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[4].dt*1000).getMonth()]} {new Date(forecast?.list[4].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[4].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[4].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[4].main.temp}&deg;C</h4>
            </div>

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[5].dt*1000).getMonth()]} {new Date(forecast?.list[5].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[5].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[5].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[5].main.temp}&deg;C</h4>
            </div>

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[6].dt*1000).getMonth()]} {new Date(forecast?.list[6].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[6].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[6].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[6].main.temp}&deg;C</h4>
            </div>

            <div style={{justifyContent:"center"}} className='downlistcard'>
            <h6> { months[new Date(forecast?.list[7].dt*1000).getMonth()]} {new Date(forecast?.list[7].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[7].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[7].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[7].main.temp}&deg;C</h4>
            </div>

            <div style={{justifyContent:"center"}} className='downlistcard'>
                <h6> { months[new Date(forecast?.list[8].dt*1000).getMonth()]} {new Date(forecast?.list[8].dt*1000).getDay()}</h6>
                <h4>at {new Date(forecast?.list[8].dt*1000).getHours()}:00</h4>
                <img className='imaag' src={`https://openweathermap.org/img/wn/${forecast?.list[8].weather[0].icon}@2x.png`} alt="" />
                <h4>{forecast?.list[8].main.temp}&deg;C</h4>
            </div>

        </div>
        </div>
    )
}

export default Mid