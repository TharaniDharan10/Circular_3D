import React, { useRef } from "react";
import { texture } from "three/webgpu";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const Cyl = () => {
  let texture = useTexture("./figma.png"); //to add texts on the cylinder
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
        />
        //this basically needs light to work with,so we use ambientLight
      </mesh>
    </group>
  );
};

export default Cyl;
