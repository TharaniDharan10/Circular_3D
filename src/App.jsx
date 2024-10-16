//first do npm i three gsap
//npm install three @types/three @react-three/fiber      .This i got from googling as react three fiber and going into 1st site
//delete assets,main.css
//go to tailwind css documentation->framework guides->vite->and copy paste required things
//imported style.css
//install drei from chrome(search as react three fiber drei) . This helps in making 3D . Only when we install this we can use OrbitControls
//open documentary of three js cylinder->under Constructor,copy all properties of CylinderGeometry till openEnded and paste in args here and write only values
//Three makes it possible tp see the cylinder in multiple sides
//Installed bloom from chrome (react three fiber bloom).Copied Bloom code from its document

import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 30 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={3.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="w-full bg-black py-32">
        <h1 className="text-white">Welcome to my Portfolio.</h1>
      </div>
    </>
  );
};

export default App;
