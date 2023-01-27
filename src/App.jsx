// noinspection JSValidateTypes

import * as THREE from 'three'
import React, { Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Detailed, Environment, useGLTF} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";

function Banan({ index, z, speed }) {
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

export default function App( { speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
    return (
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={['#ffbf40']} />
          <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
          {Array.from({ length: count }, (_, i) => <Banan key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
          <Environment preset="sunset" />
          <EffectComposer multisampling={0}>
              <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={11} height={700} />
          </EffectComposer>
      </Canvas>)
}
