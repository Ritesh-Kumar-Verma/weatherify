import React from 'react'
import './Home.css'
import Card from '../Card/Card'
const Home = ({addCityRef , cityList}) => {

  const city = "Varanasi"
  const wind_speed = 3.28
  const temp = 214

  const search = ()=>{
    addCityRef.current.focus();
  }

  return (
    <div className='home'>
      <div className='card'>
        
        <Card temp={temp} city={city} wind_speed={wind_speed}/>
        <div className='add-more-city' onClick={()=>search()}>+ Add City</div>
      
      </div>

      <div className='info'>
        dsa
        
        </div>
    </div>
  )
}

export default Home