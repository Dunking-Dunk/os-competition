import './Taskbar.css'
import React, {useContext, useEffect, useState} from "react";
import File from '../File/File';
import {FcSearch} from 'react-icons/fc'
import { AiOutlineWifi } from 'react-icons/ai'
import { CiVolumeHigh, CiBatteryFull } from 'react-icons/ci'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import { DarkModeContext } from '../../context/darkModeContext';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Taskbar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);
    const colorTheme = darkMode ? 'white' : 'black';
    const [time, setTime] = useState(null)
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format('h:mm:ss a'))
        }, 1000)
        document.querySelector('canvas').addEventListener('click', () => {
            setOpen(false)
        })
    }, [])


    return (
        <>
                <div className='taskbar'>
            <div className='taskbar__container'>
                <div className='taskbar__files'>
                    <Link to={'/'}>
                    <File url='./file_images/house.png' />
                </Link>
                        <Link to={'https://www.google.com/'}>
                        <File url='./file_images/chrome.png' />
                </Link>
                
                    <Link to={'/explorer'}>
                    <File url='./file_images/folder.png' />
                    </Link>
                        <Link to='https://open.spotify.com/'>
                        <File url='./file_images/spotify.png' />
                        </Link>
                        <Link to='https://mail.google.com/mail/u/0/#inbox'>
                        <File url='./file_images/gmail.png'/>
                        </Link>
                        <Link to='https://www.figma.com/files/recent?fuid=992656811711032103'>
                        <File url='./file_images/figma.png' />
                        </Link>
           
                <File url='./file_images/itunes.png' />
                <File url='./file_images/picture.png' />
                <File url='./file_images/settings.png' sizeFull={true}/>
                <File url='./file_images/recycle-bin.png'/>
                </div>
                <div style={{display: 'flex', gap: '3rem'}}>
                <div className='taskbar__search__container'>
                        <div className='taskbar__search__search' >
                        <FcSearch size={24}/>
                    </div>
                    <input type='text' className='taskbar__search__input' placeholder='Search'/>
                </div>
                    <div className='taskbar__quickAccess__container'>
                        <MdOutlineKeyboardArrowUp  size={24} color={colorTheme}/>
                    <AiOutlineWifi size={24} color={colorTheme} />
                <CiVolumeHigh size={24} color={colorTheme} />
                    <CiBatteryFull size={24} color={colorTheme} />
                    <p>ENG</p>
                            <div className='taskbar__time__container' onClick={() => {
                                setOpen((state) => !state)
                        }}>
                        <h5 className='taskbar__time__title'>{time}</h5>
                            <h5 className='taskbar__time__title'>{moment().format('L')}
                       </h5>
                      
                    </div>
            </div>
                </div>
          
            </div>
            </div>
            <div className={open ? 'taskbar__calender': 'taskbar__calender hidden'}>
            <div className='taskbar__time__container'>
                    <h5 className='taskbar__time__title'>{moment().format('LL')}
                         </h5>
                        </div>
             <Calendar onChange={onChange} value={value} tileClassName='taskbar__calender__tile' className='taskbar__calender__calender'/>
            </div>
            <div className={open ? 'taskbar__notification': 'taskbar__notification hidden'}>
            <h1>Notification</h1>
            <p>No notification</p>
            </div>
        </>

    )
}

export default Taskbar