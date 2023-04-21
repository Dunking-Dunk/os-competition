import './Spotify.css'
import React, { useEffect, useRef, useState, useContext } from "react";
import { AiFillPlayCircle, AiFillCaretLeft, AiFillCaretRight, AiFillPauseCircle } from 'react-icons/ai'
import {DarkModeContext} from '../../context/darkModeContext'
import starboyAudio from '../../assets/Starboy.mp3'

const Spotify = () => {
    const {darkMode} = useContext(DarkModeContext)
    const progressOuterRef = useRef()
    const progressInnerRef = useRef()

    const [playing, setPlaying] = useState(false)
    const [audio, setAudio] = useState(null)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const audio = new Audio(starboyAudio)
            setAudio(audio)
    }, [])

    const playAudio = () => {
        
        if (audio?.paused) {
            setPlaying(true)
            audio.addEventListener('timeupdate', updateProgress)
            audio.play();
        } else {
            setPlaying(false)
            audio.removeEventListener('timeupdate', updateProgress)
            audio.pause();
        }
    }

    const updateProgress = () => { 
        const width = progressOuterRef.current.clientWidth
        var duration = audio.duration;
        var current_time = audio.currentTime;
        const progressPercent = width * (current_time / duration) + "px";
      
        progressInnerRef.current.style.width = progressPercent
    }

    // const setProgress = () => {
    //     const width = progressOuterRef.current.clientWidth
    //     const duration = audio?.duration
    //     setPercent(duration * width)
    // }



    return (
        <div className={darkMode ? "spotify__container dark": "spotify__container"}>
            <h1 className='spotify__title'>Spotify</h1>
            <img src='./starboy.webp' className='spotify__image' />
            <div className='spotify__info__container'>
                <h3 className='spotify__info__title'>Starboy</h3>
                <h5 className='spotify__info__artist'>THE Weekend</h5>
            </div>
            <div className='spotify__progress__bar' ref={progressOuterRef}>
                <div className='spotify__progress__sub-bar' ref={progressInnerRef}>
                    </div>
            </div>  
            <div className="spotify__container__sub">
                <AiFillCaretLeft size={36} className="spotify__container__sub__btn" />
                {playing ?  <AiFillPauseCircle  size={36} className="spotify__container__sub__btn" onClick={playAudio}/>:<AiFillPlayCircle size={36} className="spotify__container__sub__btn" onClick={playAudio}/> }
               
                <AiFillCaretRight  size={36} className="spotify__container__sub__btn"/>
</div>
            </div>
           
 

    )
    
}

export default Spotify