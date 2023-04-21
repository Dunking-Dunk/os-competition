import './Home__header.css'
import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const HomeHeader = () => {
    return (
        <div className='home__header__container'>
            <div className='marker__container'>
                <FaMapMarkerAlt size={22} className='marker__container__marker'/>
            </div>
            <h3 className='home__header__location'>Chennai, TamilNadu</h3>
         
                <img src='./temple.png' className='home__header__img'/>
        
        </div>
    )
}

export default HomeHeader