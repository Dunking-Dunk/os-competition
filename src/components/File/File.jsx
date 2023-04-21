import './File.css'
import React, {useContext} from 'react'
import { DarkModeContext } from '../../context/darkModeContext';

const File = ({ url, sizeFull }) => {
    const { size } = useContext(DarkModeContext);
    
    return (
        <div className='file__container' style={{ padding: sizeFull ? 0 : '0.7rem', width: `${size}rem`, height: `${size}rem`, background:sizeFull && 'transparent' }}>
        <img className='file__image' src={url}/>
        </div>
    )
}

export default File