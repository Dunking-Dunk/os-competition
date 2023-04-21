import '../pages/home/Home.css'
import { Suspense, useRef, useContext } from "react";
import * as THREE from 'three'
import glsl from 'babel-plugin-glsl/macro'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload, shaderMaterial, OrbitControls, SpotLight, Loader, useSelect, Select  } from "@react-three/drei";
import { DarkModeContext } from '../context/darkModeContext';
import CanvasLoader from "../components/Loader/Loader";




const Sphere = ({darkMode}) => {
  const ref = useRef()

  useFrame((state, delta) => (ref.current.time += delta))

  const WaveMaterial = shaderMaterial(
  {
    time: 0,
    colorStart: new THREE.Color('#505050'),
      colorEnd: new THREE.Color('black'),
      displace: 3.0,
      strength: 10.0,
    outer: 2.0
  },
  glsl`
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
  glsl`
      #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
      uniform float time;
      uniform vec3 colorStart;
      uniform vec3 colorEnd;
      uniform float displace;
      uniform float strength;
      uniform float outer;
      varying vec2 vUv;
      void main() {
        vec2 displacedUv = vUv + cnoise3(vec3(vUv * displace, time * 0.05));
        float strength = cnoise3(vec3(displacedUv * strength, time * 0.2));
        float outerGlow = distance(vUv, vec2(0.5)) * outer - 0.9;
        strength += outerGlow;
        strength += step(-0.2, strength) * 1.;
        strength = clamp(strength, 0.0, 1.0);
        vec3 color = mix(colorStart, colorEnd, strength);
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <encodings_fragment>
      }`
)
extend({ WaveMaterial })

    return (
        <mesh>
      <sphereGeometry args={[2, 32, 64]}/>
        <waveMaterial ref={ref} key={WaveMaterial.key} toneMapped={true} colorStart={darkMode ? '#00fff2' : 'white'} colorEnd={darkMode ? '#ff07c9' : 'black'} displace={darkMode ? 3.0 : 5.0} strength={darkMode ? 10.0 : 15.0} outer={darkMode ? 2.0 : 3.5 } />
    </mesh>
    )
}

const Moon = ({darkMode}) => {
  return (
    <mesh position={[3,2,1]}>
  
  <sphereGeometry args={[0.2, 10, 8]} />
      <meshBasicMaterial color={darkMode ? 'white': 'black'} />
</mesh>
)
}


const HomeCanvas = () => {

  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
      <Canvas
          className='home__canvas'
        frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true}}
        
      >
      {
        darkMode && (
          <>
             <SpotLight
          position={[-15,3,0]}
    distance={100}
          angle={10}
          color='#ff07c9'
              intensity={1}
              penumbra={0.5}
              attenuation={15}
    anglePower={1} 
    />
             
            <SpotLight
              position={[15,3,0]}
      distance={100}
              angle={10}
              penumbra={0.5}
              color='#00fff2'
              intensity={1}
              attenuation={15}
              
      anglePower={1} 
    />
          </> )
      }
       
     
       
      <OrbitControls autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Select onClick={() => {
        dispatch({type: 'TOGGLE'})
      }}>
      <Moon darkMode={darkMode}/>
     </Select>

        <Sphere darkMode={darkMode} />
   
      <Preload all />
      </Canvas>
      
      
    );
  };


export default HomeCanvas