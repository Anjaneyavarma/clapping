import React, {useState} from 'react'
import homepageimg from '../assets/homepafelogo.png'

function Home() {
    const [name, setName] = useState("")
  return (
    <div class='flex flex-col justify-between content-center items-center mt-7' style={{height:'100%'}}>
        <div class='flex flex-col justify-between content-center items-center mt-7'>
            <h2 class='max-w-7xl text-4xl text-center font-black text-[#0A2289] max-h-36'>Your Personal Website. <br></br>For Building Your Personal Brand.</h2>
            <p class='text-lg text-center font-light max-w-5xl mt-3'>
                Software professionals often struggle to prove their value beyond technical skills.
                Boost your career with instant peer recognition for your soft skills.
            </p>
            <div class="brand-link">
                <input style={{width:'50%', height:'100%',borderTopLeftRadius: '20px', borderBottomLeftRadius:'20px', paddingLeft:'10px', backgroundColor: 'white'}} 
                    type="text" placeholder="clapping.me/yourname" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <button style={{width:'50%', backgroundColor:'#FF6D6C', height:'100%', borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}}n>
                    Claim Your Brand Link
                </button>
            </div>
        </div>
        <div>
            <img className="homepageimg" src={homepageimg} alt='homepagelogo'/>
        </div>
    </div>
  )
}

export default Home