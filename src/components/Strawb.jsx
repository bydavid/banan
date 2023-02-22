import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Strawb(props) {
    const { nodes, materials } = useGLTF("/strawberry-v1.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 1]} scale={1}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials["1001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial001.geometry}
                        material={materials["1001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial002.geometry}
                        material={materials["1001"]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/strawberry-v1.glb");
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx

Thanks pmndrs!
*/


