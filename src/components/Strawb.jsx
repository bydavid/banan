import React, {useRef, useState} from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three'

export default function Strawb({index, z, speed}) {
    const ref = useRef()
    const { nodes, materials } = useGLTF("/banan/strawberry-v1.glb");

    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [ 0, 0, -z])

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
        <group dispose={null} ref={ref}>
            <mesh // stem
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={materials["1001"]}
            />
            <mesh // seeds
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial001.geometry}
                material={materials["1001"]}
            />
            <mesh // pulp
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial002.geometry}
                material={materials["1001"]}
            />
        </group>
    );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx

Thanks pmndrs!
*/

