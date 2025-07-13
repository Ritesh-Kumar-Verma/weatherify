import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

const Header = ({addCityRef , cityList, addCity, searchURL,weatherDetail, setWeatherDetail}) => {

  const handleAddCity = async () => {
  const cityName = addCityRef.current.value.trim().toLowerCase()
  if (cityName !== '') {
    const data = await searchURL(cityName)
    if (data && data.cod === 200) {
      const newWeatherDetail = { ...weatherDetail, [cityName]: data };
      setWeatherDetail(newWeatherDetail)
      addCity(cityName)
      addCityRef.current.value = ''
    } else {
      alert(data?.message || "Invalid city name")
    }
  }
};


  const handleKeyDown = (e)=>{
    if(e.key == 'Enter'){
      handleAddCity()
    }
  } 


  return (
    <div className='header'>
        <div className="logo">Weatherify</div>
        <div className='search'> 
            <input ref={addCityRef} type="text" onKeyDown={handleKeyDown}/>
            <img src={assets.search} alt="" onClick={handleAddCity}/>
        </div>
    </div>
  )
}

export default Header