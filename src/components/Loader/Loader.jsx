import { useEffect, useRef } from 'react'
import './Loader.css'



const LoaderScreen = () => {
    const containerRef = useRef()

    useEffect(() => { 
        setTimeout(() => {
            containerRef.current.style.zIndex = -1
        }, 2000)

        setTimeout(() => {
             containerRef.current.classList.add('loaded')
    }, 3000)
    }, [])
  
    return (

            <div className="loader__container" ref={containerRef}>
             <span className='canvas-loader'></span>
        <div className="loader__container__sub">
            <h1 className="loader__title">Hello</h1>
                <svg width="1077" className="linear-gradient-1" height="832" viewBox="0 0 1077 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4_5406)">
                    <path d="M1334.01 328.681C1334.01 282.953 955.5 407.395 919.211 367.681C882.922 327.967 1190.11 125.47 1127.08 102.218C885.513 204.681 992.403 66.383 919.211 65.7097C846.018 65.0365 820.112 -213.837 756.013 -191.755C691.913 -169.672 359.157 59.35 321.013 98.3792C282.868 137.408 252.168 384.472 250.013 430.181C247.858 475.89 519.289 724.317 553.691 764.681C588.092 805.045 694.105 598.28 756.013 622.681L1102.51 609.681L1334.01 328.681Z" fill="#600F4E"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_4_5406" x="0" y="-443" width="1584.01" height="1462.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_4_5406"/>
                    </filter>
                    </defs>
                    </svg>
                    
          
            <svg width="1125" height="832" className="linear-gradient-2" viewBox="0 0 1125 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_4_5403)">
                <path d="M586.133 555.85C266.56 422.095 694.094 259.332 753.601 2C701.956 -130.355 511.268 128.399 451.297 125.509L358.601 47.5L-107.703 -117C-141.497 -80.169 -44.6504 169.997 -85.2031 196.748C-125.756 223.499 -97.418 495.515 -107.703 527.5C-73.9092 572.085 102.113 755.319 126.797 785.559C157.652 823.359 595.139 996.061 683.297 1029.5C771.455 1062.94 643.436 813.182 702.942 785.559C762.449 757.936 753.633 804.459 788.896 785.559C824.159 766.659 905.706 689.605 586.133 555.85Z" fill="#005B70"/>
                </g>
                <defs>
                <filter id="filter0_f_4_5403" x="-415" y="-417" width="1539.8" height="1749.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4_5403"/>
                </filter>
                </defs>
                </svg>
            
                <div className="spinner">
                    <div className="spinner1 ">
                
    </div>
                </div>
            
            </div>
            </div >
       
        
    
    )
}

export default LoaderScreen