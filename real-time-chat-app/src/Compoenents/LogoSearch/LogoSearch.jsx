import React from 'react'
import logo from "../../img/smilelogo.png"
import "./LogoSearch.css"
import { Search2Icon } from '@chakra-ui/icons'

const LogoSearch = () => {
  return (
    <div className="logosearch">
        <img className='logo' src={logo} alt="logo" />
        <div className='search'>
            <input type="text" placeholder='#Explore' />
            <div className="search-icon">
                <Search2Icon/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch