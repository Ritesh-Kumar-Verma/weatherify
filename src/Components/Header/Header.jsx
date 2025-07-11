import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

const Header = ({addCityRef , cityList, addCity}) => {

  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){
      const cityName = addCityRef.current.value.trim().toLowerCase();
      if(cityName !== ''){
        addCity(cityName)
        addCityRef.current.value = ''
      }
    }
  }



  return (
    <div className='header'>
        <div className="logo">Weatherify</div>
        <div className='search'> 
            <input ref={addCityRef} type="text" onKeyDown={handleKeyDown}/>
            <img src={assets.search} alt=""/>
        </div>
    </div>
  )
}

export default Header