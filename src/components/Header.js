import React from 'react'
import './Header.css'
import logo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import theme from '../assets/header/theme-switch.png'
const Header=()=>{
  return (
    <div className='header'>

        <div className='logoContainer'>
            <img src={logo} className='headerlogo' alt=''/>
        </div> 

        <div className='searchBar'>
            <div className='searchlogo'>
                <img src={searchIcon} />            
            </div>
            <input 
            className='searchInput' 
            placeholder='Collection,items or ...'
            />
        </div>
        
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitcher'>
               <img src={theme}/>
            </div> 
            <div className='loginBtn'>  
                    GET IN                
            </div>
        </div>
    </div>
  );
}

export default Header