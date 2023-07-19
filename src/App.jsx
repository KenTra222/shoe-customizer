import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Shoes } from './Components/Shoes'

function App() {
  const [mesh,setMesh] = useState("#ffffff")
  const [laces,setLaces] = useState("#ffffff")
  const [sole,setSole] = useState("#ffffff")
  const [flap,setFlap] = useState("#ffffff")


  return (
    
      
     <div class="wrapper">
        <div class="card">
            <div class="product-canvas">
            <Canvas>
            <OrbitControls/>
            <pointLight intensity={0.9}/>
            <ambientLight intensity={0.7}/>
            <Shoes customColor={{mesh:mesh, laces:laces, sole:sole, flap: flap}}/>
          </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div class='colors'>
                 <div>
                    <input type="color" id="mesh" name="mesh"
                           value={mesh}
                           onChange={(e) => setMesh(e.target.value)}/>
                    <label for="mesh">Main</label>
                  </div>

                <div>
                    <input type="color" id="laces" name="laces"
                            value={laces}
                            onChange={(e) => setLaces(e.target.value)}/>
                    <label for="laces">Laces</label>
                </div>
                 <div>
                    <input type="color" id="sole" name="sole"
                            value={sole}
                            onChange={(e) => setSole(e.target.value)} />
                    <label for="sole">Sole</label>
                </div>
                <div>
                    <input type="color" id="flap" name="flap"
                            value={flap}
                            onChange={(e) => setFlap(e.target.value)}/>
                    <label for="flap">Soul</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
