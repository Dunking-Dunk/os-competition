import './Explorer.css'
import React, {useContext} from "react";
import Taskbar from '../../components/Taskbar/Taskbar';
import { useNavigate } from 'react-router-dom';
import File from '../../components/File/File';
import { FcSearch } from 'react-icons/fc'
import { AiFillFolder } from 'react-icons/ai'
import { DarkModeContext } from '../../context/darkModeContext';
import ExplorerCanvas from '../../canvas/Explorer';

const Explorer = () => {
    const navigate = useNavigate()
    const { size, dispatch, darkMode } = useContext(DarkModeContext);

    return (
        <div className='explore'>
            <div className='explore__container'>
                <ExplorerCanvas />
                <div className='explore__container__sub'>
                <div className='explore__header'>
                    <div className={darkMode ? 'explore__header__container ': 'explore__header__container dark'}>
                        <h1 className='exlore__header__title'>File Explorer</h1>
                        <div className='explore__option__container'>
                            <div className='explore__option__yellow'>

                            </div>
                            <div className='explore__option__green'>

                            </div>
                            <div className='explore__option__red' onClick={() => {
                                navigate('/')
                            }}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='explore__main'>
                        <div className={darkMode ? 'explore__sidebar dark': 'explore__sidebar light'}>
                        <h1 className='explore__sidebar__title'>Quick Access</h1>
                        <div className='explore__file__container'>
                            <File url='./file_images/picture.png' />
                            <p className='explore__file__text'>Photos</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/recycle-bin.png' />
                            <p className='explore__file__text'>Recycle Bin</p>
                        </div>
                        <h1 className='explore__sidebar__title'>This PC</h1>
                        <div className='explore__file__container'>
                            <File url='./file_images/recent.png' />
                            <p className='explore__file__text'>Recent</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/document.png' />
                            <p className='explore__file__text'>Document</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/multimedia.png' />
                            <p className='explore__file__text'>Videos</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/itunes.png' />
                            <p className='explore__file__text'>Music</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/picture.png' />
                            <p className='explore__file__text'>Photos</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/recycle-bin.png' />
                            <p className='explore__file__text'>Recycle Bin</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/multimedia.png' />
                            <p className='explore__file__text'>Videos</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/itunes.png' />
                            <p className='explore__file__text'>Music</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/picture.png' />
                            <p className='explore__file__text'>Photos</p>
                        </div>
                        <div className='explore__file__container'>
                            <File url='./file_images/recycle-bin.png' />
                            <p className='explore__file__text'>Recycle Bin</p>
                        </div>
                    </div>
                    <div className='explore__main__container'>
                        <div className='explore__main__header'>
                              <div className='explore__search__container'>
                                 <div className='explore__search__search'>
                                     <FcSearch size={24}  />
                                 </div>
                                   <input type='text' className='taskbar__search__input' placeholder='Search'/>
                            </div>
                            <div className={darkMode ? 'explore__header__sizefile': 'explore__header__sizefile light'}>
                                <div className='explore__header__file' onClick={() => {
                                    dispatch({type: 'SMALL'})
                                }}>
                                    <AiFillFolder size={'3rem'} style={size=== 3 && {color: 'red'}}/>
                                </div>
                                <div  className='explore__header__file' onClick={() => {
                                    dispatch({type: 'MEDIUM'})
                                }}>
                                <AiFillFolder size={'4rem'} style={size=== 5 && {color: 'red'}}/>
                                </div>
                                <div className='explore__header__file' onClick={() => {
                                    dispatch({type: 'LARGE'})
                                }}>
                                <AiFillFolder size={'5rem'} style={size=== 7 && {color: 'red'}}/>
                                    </div>
                            </div>
                        </div>
                       
                        <div className='explore__folders__container'>
                        <div className='explore__main__folder'>
                            <File url='./file_images/storage.png' sizeFull={true} />
                            <div className='explore__folder__detail'>
                                <h1 className='explore__folder__detail__title'>C:</h1>
                                <div className='explore__folder__spacebar red'>

                                </div>
                                <h5 className='explore__folder__storageFree'>20 GB free space</h5>
                            </div>
                        </div>
                        <div className='explore__main__folder'>
                            <File url='./file_images/storage.png' sizeFull={true} />
                            <div className='explore__folder__detail'>
                                <h1 className='explore__folder__detail__title'>E:</h1>
                                <div className='explore__folder__spacebar green'>

                                </div>
                                <h5 className='explore__folder__storageFree'>250 GB free space</h5>
                            </div>
                        </div>
                        <div className='explore__main__folder'>
                            <File url='./file_images/storage.png' sizeFull={true} />
                            <div className='explore__folder__detail'>
                                <h1 className='explore__folder__detail__title'>F:</h1>
                                <div className='explore__folder__spacebar yellow'>

                                </div>
                                <h5 className='explore__folder__storageFree'>80 GB free space</h5>
                            </div>
                    </div>
                    </div>

                    </div>
                </div>
                
                </div>
            <Taskbar/>
            </div>
            
        </div>
    )
}

export default Explorer