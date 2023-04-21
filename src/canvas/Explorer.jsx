import '../pages/file-Explorer/Explorer.css'
import { Suspense, useRef, useContext } from "react";
import * as THREE from 'three'
import glsl from 'babel-plugin-glsl/macro'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload,shaderMaterial,  PerspectiveCamera } from "@react-three/drei";
import { DarkModeContext } from '../context/darkModeContext';


const Plane = () => {
    const { darkMode } = useContext(DarkModeContext);
    const ref = useRef()
    const ColorShiftMaterial = shaderMaterial(
        { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
        // vertex shader
        /*glsl*/`
          varying vec2 vUv;
          void main() {
           
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vUv = uv;
          }
        `,
        // fragment shader
        /*glsl*/`
          uniform float time;
          uniform vec3 color;
          varying vec2 vUv;
          void main() {
            vec2 uv=vUv;
        
            for(float i=1.;i<10.;i++){
                uv.x+=.2/i*cos(i*1.0*uv.y+time);
                uv.y+=.2/i*cos(i*10.0*uv.x+time);
            }
            ${darkMode ? 'vec3 color=mix(vec3(0.),vec3(.3,0.,0.),uv.y*uv.x);' :
            'vec3 color=mix(vec3(0.3),vec3(1.,1.,1.),uv.y*uv.x);' 
            }
            gl_FragColor=vec4(color/abs(sin(time-uv.y-uv.x)),1.);
          }
        `
      )
      
      // declaratively
      extend({ ColorShiftMaterial })

  useFrame((state, delta) => (ref.current.time += delta))
    return (
        <mesh>
      <planeGeometry args={[70, 70, 1]} />
      <colorShiftMaterial ref={ref}  />
    </mesh>
    )
}


const ExplorerCanvas = () => {
    
  return (
      
      <Canvas
          className='explorer__canvas'
        frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true}}
        
      >
         
        <pointLight intensity={10}/>
            <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
            <Plane/>
        

        <Preload all />
      </Canvas>
    );
  };


export default ExplorerCanvas