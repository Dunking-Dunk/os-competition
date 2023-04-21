import './Gallery.css'
import React, { useContext } from "react";
import {DarkModeContext} from '../../context/darkModeContext'


const Gallery = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={darkMode ? "gallery__container dark" : "gallery__container"}>
            <h1 className='gallery__title'>Gallery</h1>
            <div className='gallery__container__images'>

        <img src="https://images.unsplash.com/photo-1641421977398-5a5a4596833a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="gallery__container__grid-img img-2"/>
        <img src="https://images.unsplash.com/photo-1641427155443-5b4df47ccf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  className="gallery__container__grid-img img-3"/>
        <img src="https://images.unsplash.com/photo-1641390920661-09a6e6c76669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="gallery__container__grid-img img-4"/>
        <img src="https://images.unsplash.com/photo-1641411921979-d1b3cf83b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"  className="gallery__container__grid-img img-5"/>
                <img src="https://images.unsplash.com/photo-1641410203194-7deb8c0b6f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" className="gallery__container__grid-img img-6" />
                <img src="https://images.unsplash.com/photo-1641390920661-09a6e6c76669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="gallery__container__grid-img img-4"/>
        <img src="https://images.unsplash.com/photo-1641411921979-d1b3cf83b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"  className="gallery__container__grid-img img-5"/>
        <img src="https://images.unsplash.com/photo-1641421977398-5a5a4596833a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="gallery__container__grid-img img-2"/>
        <img src="https://images.unsplash.com/photo-1641427155443-5b4df47ccf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  className="gallery__container__grid-img img-3"/>
            </div>
</div>
    )
    
}

export default Gallery