import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { langContext } from '../../Context/LangContext'
import { language } from '../../Lang/Lang'
import weatherappImage from '../../assets/watherapp.png'

function Header({ cityValue, searcherclick, setLocation, setError }) {

  const { lang, setLang } = useContext(langContext)
  const { isDark, setIsDark } = useContext(ThemeContext)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords
      console.log(longitude, latitude)
      setLocation({
        lon: longitude,
        lat: latitude
      })
    },
      (err) => {
        setError(`couldn't get Location , err:${err}`)
      }
    )
  }

  const HandleClick = () => {
    localStorage.setItem("isDarkTheme", isDark)
    setIsDark((prev) => !prev)
  }

  return (
    <div className='Header-full'>
      <div className='container'>
        <div className='headerFox'>
          <h3 className='weatherh3'><img src={weatherappImage} style={{ width: "60px", height: "60px" }} alt="" /></h3>

          <div className='tools'>

            <select name="" id="" className="opitionLang" onChange={(evt) => setLang(evt.target.value)}>
              <option selected={lang == "uz"} value="en">en</option>
              <option selected={lang == "uz"} value="uz">uz</option>
              <option selected={lang == "ru"} value="ru">ru</option>
            </select>

            <button className='themebtn' onClick={HandleClick}>{language[lang].theme}</button>
            <input ref={cityValue} type="text" className='searcher-inp' placeholder={`${language[lang].header.inputPlacegolder}`} />
            <button onClick={searcherclick} className='searcher-btn'>{`${language[lang].header.SearchBtn}`}🔎</button>
            <button className='curentloc' onClick={getCurrentLocation}>{`${language[lang].header.location}`}🗺️</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Header