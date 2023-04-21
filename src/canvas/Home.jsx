import '../pages/home/Home.css'
import { Suspense, useRef, useContext } from "react";
import * as THREE from 'three'
import glsl from 'babel-plugin-glsl/macro'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload, shaderMaterial, OrbitControls, SpotLight, Loader, useSelect, Select, Instances, Instance  } from "@react-three/drei";
import { DarkModeContext } from '../context/darkModeContext';
import CanvasLoader from "../components/Loader/Loader";
import { MathUtils } from 'three'



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

const particles = Array.from({ length: 10 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 1),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(20),
  zFactor: MathUtils.randFloatSpread(20)
}))

const Moon = ({ darkMode }) => {
  const ref = useRef()
  useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))

  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 0, 0]}>
       <sphereGeometry args={[0.1, 10, 8]} />
        <meshBasicMaterial color={darkMode ? 'white' : 'black'} />
      {particles.map((data, i) => <MoonObj {...data} key={i} />
    )}
  </Instances>

    )
}

const MoonObj = ({ factor, speed, xFactor, yFactor, zFactor }) => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      (Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10) / 5,
      (Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10) / 5,
      (Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10) / 5
    )
  })
  return <Instance ref={ref} onClick={() => {
    dispatch({type: 'TOGGLE'})
  }}/>
  
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

          <Moon darkMode={darkMode}/>
        <Sphere darkMode={darkMode} />
   
      <Preload all />
      </Canvas>
      
      
    );
  };


export default HomeCanvas