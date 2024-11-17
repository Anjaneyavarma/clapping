import React from 'react'
import pagelogo from '../assets/Rectangle 10.png'

function Pagetwo({leftColor, rightColor, image, rightHeading, rightPara}) {
  return (
    <div class='flex flex-row' style={{width:'100%', height:'70vh'}}>
        <div style={{backgroundColor: leftColor, width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}} class='polygon1' className="polygon1">
            <img class='h-40' src={image} alt='rectangle'/>
        </div>
        <div style={{backgroundColor:rightColor, width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} class='polygon2' className="polygon2">
            <h2 class='text-white font-extrabold' style={{fontSize:'18px'}}>{rightHeading}</h2>
            <p class='flex-wrap font-normal text-white' style={{fontSize:'10px', width:'262px'}}>{rightPara}</p>
        </div>  
    </div>
  )
}

export default Pagetwo