import React, { useState } from 'react'
import { useRef } from 'react'

function Header({cityValue , searcherclick , setLocation , setError}) {


  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      const {longitude , latitude} = position.coords
      console.log(longitude , latitude)
      setLocation({
        lon:longitude,
        lat:latitude
      })
    },
(err)=>{
  setError("couldnt get Location")
}
  ) 
  }

  return (
    <div className='Header-full'>
        <h3 className='weatherh3'>weather</h3>
        <div className='tools'>
        <input ref={cityValue} type="text"  className='searcher-inp' placeholder='Search' />
        <button onClick={searcherclick} className='searcher-btn'>Search🔎</button>
        <button className='curentloc' onClick={getCurrentLocation}>current location🗺️</button>
        </div>
    </div>
  )
}

export default Header