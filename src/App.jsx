// noinspection JSValidateTypes

import * as THREE from 'three'
import React, { Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Detailed, Environment, useGLTF} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";
import Banan from "./components/Banan.jsx";
import Strawb from "./components/Strawb.jsx";
import Overlay from "./Overlay.jsx";



export default function App( { speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
    return (<>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={['#ffbf40']} />
          <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
          {Array.from({ length: count }, (_, i) => <Strawb key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
          <Environment preset="sunset" />
          <EffectComposer multisampling={0}>
              <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={11} height={700} />
          </EffectComposer>
      </Canvas>
        <Overlay/>
    </>)
}
