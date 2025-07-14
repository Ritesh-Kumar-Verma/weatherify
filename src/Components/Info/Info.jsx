import React from 'react'
import './Info.css'


const Info = ({report}) => {
  
  if(!report || !report.main){
    return null
  }
  const overallInfo = Object.entries(report.main)
  const overallInfoLabel = ["Temperature(°C)", "Feels Like", "Min Temp(°C)" , "Max Temp(°C)", "Pressure(hPa)", "Humidity%", "Sea Level(hPa)", "Ground Level(hPa)"]

  const moreInfo = []
  const moreInfoLabel = ["Sunrise", "Sunset", "Report_calculation_Time"]
  moreInfo.push((new Date(report.sys.sunrise * 1000).toLocaleString()).split(",")[1].toString().trim())
  moreInfo.push((new Date(report.sys.sunset * 1000).toLocaleString()).split(',')[1].toString().trim())
  moreInfo.push((new Date(report.dt *1000).toLocaleString()).split(',')[1].toString().trim())

  
  // console.log(moreInfo)



  return (
    <div className='info-window'>

      <div className="overall-info">
        {overallInfo.map(([label,value],index)=>{
          return <React.Fragment key={index}>
            <div className="label grid-item">{overallInfoLabel[index]}</div>
            <div className="value grid-item">{value}</div>
          </React.Fragment>
        })}
      </div>

      <div className="more-info">
        {
          moreInfo.map((data,index)=>{
            return <React.Fragment key={index}>
              <div className="label grid-item">{moreInfoLabel[index]}</div>
              <div className="value grid-item" >{data}</div>
            </React.Fragment>
          })
        }
        
        
      </div>
      
      
    </div>
  )
}

export default Info