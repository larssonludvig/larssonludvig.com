import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Effects } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'

extend({ UnrealBloomPass, OutputPass })

function Orb({ color, ...props }) {
    let ref = useRef();
    let xVelocity = Math.random() * 0.002 + -0.001;
    let yvelocity = Math.random() * 0.002 + -0.001;

    useFrame(() => {
        if (ref.current.position.x > 15 || ref.current.position.x < -15) {
            xVelocity = -xVelocity;
        }
        ref.current.position.x += xVelocity
    });
    useFrame(() => {
        if (ref.current.position.y > 7.5 || ref.current.position.y < -7.5) {
            yvelocity = -yvelocity;
        }
        ref.current.position.y += yvelocity
    });

    const scale = Math.random() * 0.3 + 0.1
    return (
        <mesh {...props} scale={scale} ref={ref}>
            <sphereGeometry attach="geometry" />
            <meshLambertMaterial color={color} emissive={color} emissiveIntensity={4} toneMapped={false} />
        </mesh>
    )
}

export default function Animation({ numberOfOrbs = 40 }) {
    const colors = ["lime", "hotpink"];
    const positions = [...new Array(numberOfOrbs)].map(() => [Math.random() * 30 - 15, Math.random() * 15 - 7.5, 0]);

    return (
        <Canvas flat orthographic camera={{ zoom: 100 }}>
            <color attach={"background"} args={["#0c0c0d"]} />
            <ambientLight />
            <Effects disbleGamma>
                <unrealBloomPass threshold={1} strength={0.4} radius={0} />
                <outputPass args={[THREE.ACESFilmicToneMapping]} />
            </Effects>
            {positions.map((position, index) => (
                <Orb key={index} color={colors[Math.floor(Math.random() * colors.length)]} position={position} />
            ))}
        </Canvas>
    )
}