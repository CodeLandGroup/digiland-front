import React from 'react'
import '../../assets/css/Header/Header.css'
import NavbarComponent from './NavbarComponent'

export default function HeaderComponent() {
    return (
        <div className='header'>
            <div className='Header-top'>
                <img src={require('../../assets/images/header-image.jpeg')} alt="" />
            </div>
      
            <NavbarComponent />

        </div>


    )
}
