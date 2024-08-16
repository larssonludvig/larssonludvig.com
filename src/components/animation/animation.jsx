import { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';

extend({ UnrealBloomPass, OutputPass });

function Orb({ color, ...props }) {
  const ref = useRef();

  const scale = Math.random() * 0.3 + 0.1;
  return (
    <mesh {...props} scale={scale} ref={ref}>
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
        toneMapped={false}
      />
    </mesh>
  );
}

function StopRenderLoop() {
  const { gl, scene, camera } = useThree();
  const firstRenderRef = useRef(false);

  useFrame(() => {
    if (!firstRenderRef.current) {
      gl.render(scene, camera); // Render the first frame manually
      firstRenderRef.current = true;
      gl.setAnimationLoop(null); // Stop further rendering
    }
  });

  return null;
}

export default function Animation({ numberOfOrbs = 40 }) {
  const colors = ['lime', 'hotpink'];
  const positions = [...new Array(numberOfOrbs)].map(() => [
    Math.random() * 30 - 15,
    Math.random() * 15 - 7.5,
    0,
  ]);

  return (
    <Canvas flat orthographic camera={{ zoom: 100 }} style={{ height: '95vh', width: '100%' }}>
      <color attach={'background'} args={['#0c0c0d']} />
      <ambientLight />
      <StopRenderLoop />
      <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={0.4} radius={0} />
        <outputPass args={[THREE.ACESFilmicToneMapping]} />
      </Effects>
      {positions.map((position, index) => (
        <Orb key={index} color={colors[Math.floor(Math.random() * colors.length)]} position={position} />
      ))}
    </Canvas>
  );
}
