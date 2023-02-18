import {useFrame, useThree} from "@react-three/fiber";
import {Detailed, useGLTF} from "@react-three/drei";
import * as THREE from "three";
import {useRef, useState} from "react";

export default function Banan({ index, z, speed }) {
    const ref = useRef()
    const { viewport, camera } = useThree() // allows use of viewport rather than absolute values
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])  // camera allows objects further in negative z to be considered
    const { nodes, materials } = useGLTF('/banana-v1-transformed.glb') // a glftx transformed glb file

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2), // starting x
        x: THREE.MathUtils.randFloatSpread(2), // starting y
        spin: THREE.MathUtils.randFloat(8, 12), // rotation scalar
        rX: Math.random() * Math.PI,  // starting rotation in x
        rZ: Math.random() * Math.PI // starting rotation in z
    })

    useFrame((state, dt) => {
        // changes per delta
        if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
        ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
        if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
    })

    return (
        <Detailed ref={ref} distances={[0, 65, 80]}>
            <mesh geometry={nodes.banana_high.geometry} material={materials.skin} material-emissive="#ff9f00" />
            <mesh geometry={nodes.banana_mid.geometry} material={materials.skin} material-emissive="#ff9f00" />
            <mesh geometry={nodes.banana_low.geometry} material={materials.skin} material-emissive="#ff9f00" />
        </Detailed>
    )
}
