import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import Maskgroup from '../assets/MastGroup.png'

const Page6 = () => {
    const [name, setName] = useState("")
    return (
        <div class='flex flex-row' style={{width:'100%', height:'70vh'}}>
            <div style={{backgroundColor: '#FFE6A5', width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} class='polygon1' className="polygon1">
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'#FF6D6C'}}>Kickstart your personal brand today!</h2>
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
            <div style={{backgroundColor: '#FFE6A5', width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}} class='polygon2' className="polygon2">
                <img class='h-56' src={Maskgroup} alt='rectangle'/>
            </div>
        </div>
    )

}

export default Page6