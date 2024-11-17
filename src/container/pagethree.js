import React from 'react'
import '../App.css'
import humanpng from '../assets/human.png'

function Pagethree() {
  return (
    <div class='flex flex-col justify-around items-center h-full'>
        <div class='text-center' >
            <h1 class='text-[#FF6D6C] font-extrabold text-2xl'>The Linkedin For Soft Skills</h1>
            <p style={{maxWidth:'650px'}}>You can showcase technical skills, but soft skills are harder to project. Our platform assists you in showcasing your soft skills to your colleagues and management, facilitating career transitions.</p>
        </div>
        <div style={{maxWidth:'1080px', height:'50%'}} class='flex flex-row justify-around'>
            <div class='flex flex-col justify-around items-start'>
                <div className='border-box-3'>
                    <p>Communication</p>
                </div>
                <div className='border-box-3'>
                    <p>Team work</p>
                </div>
                <div className='border-box-3'>
                    <p>Leadership</p>
                </div>
            </div>
            <div>
                <img className='page3-img' src={humanpng} alt='image'/>
            </div>
            <div class='flex flex-col justify-around items-end'>
                <div className='border-box-3'>
                    <p>Emotional Intelligence</p>
                </div>
                <div className='border-box-3'>
                    <p>Adaptability</p>
                </div>
                <div className='border-box-3'>
                    <p>Problem Solving</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagethree