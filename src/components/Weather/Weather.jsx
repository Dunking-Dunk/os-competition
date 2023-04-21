import './Weather.css'
import React from "react";
import { AiFillCloud } from 'react-icons/ai'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'


const Weather = () => {
    return (
        
        <div className='weather__container'>
            <div className='weather__temperature'>
                <p className='weather__temperature__temp'>30</p>
                <div className='weather__temperature__deg__circle'></div>
                <p className='weather__temperature__deg'>degree</p>
            </div>
            <AiFillCloud size={80} color='white'className='weather__cloud'/>
            <RiCheckboxBlankCircleFill size={100} className='weather__sun' />
            <div className='weather__detail'>
                <p className='weather__detail__city'>Chennai</p>
                <p className='weather__detail__info'>sunny today</p>
            </div>
        </div>
    )
}

export default Weather