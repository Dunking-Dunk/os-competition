import './Home.css'
import React, {useContext} from "react";
import HomeCanvas from '../../canvas/Home'
import Taskbar from '../../components/Taskbar/Taskbar';
import Calender from '../../components/Calender/Calender';
import Weather from '../../components/Weather/Weather';
import BackgroundGradient from '../../components/backGroundGradient/BackgroundGradient';
import Spotify from '../../components/Spotify/Spotify';
import Gallery from '../../components/Gallery/Gallery';
import HomeHeader from '../../components/HomeHeader/Home__header';
import { DarkModeContext } from '../../context/darkModeContext';

const Home = () => {
    const { darkMode } = useContext(DarkModeContext)
    
    return (
        <div className='home'>
            <div className='home___container'>
                <HomeHeader/>
                <div className='home__content'>
                    <Calender />
                    <Weather/>
                    <Spotify />
                    <Gallery/>
                </div>
                <HomeCanvas />
                {darkMode &&   <BackgroundGradient/> }
             
                <Taskbar />
        </div>
        </div>
    )
}

export default Home