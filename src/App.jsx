import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'


const App = () => {
  const addCityRef = useRef(null)
  const [cityList , setCityList] = useState([])


  const addCity = (cityName)=>{
    if(!cityList.includes(cityName)){
      setCityList(prev =>[...prev, cityName])
      console.log(cityList)
    }
  }


  // useEffect(()=>{
  //   console.log(cityList)
  // },[cityList])

  
  return (
    <div className='window'>
      <Header addCityRef={addCityRef} cityList={cityList} addCity={addCity}/>
      <Home addCityRef={addCityRef} cityList={cityList} addCity={addCity}/>
    </div>
  )
}

export default App