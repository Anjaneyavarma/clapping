import React from "react";
import logo from '../assets/headerlogo.png'

const Page7 = () => {

    return(
        <div class='flex flex-col justify-center items-center'>
            <div>
                <img className='header-logo' src={logo} alt='logo'/>   
            </div>
            <div class='flex flex-row justify-around mt-7'>
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'black', marginRight:'20px'}}>About</h2>
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'black', marginRight:'20px'}}>Privacy</h2>
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'black', marginRight:'20px'}}>Terms and Conditions</h2>
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'black', marginRight:'20px'}}>FAQ</h2>
                <h2 class='font-extrabold' style={{fontSize:'18px', color:'black'}}>Contact Us</h2>
            </div>
        </div>
    )

}

export default Page7;