import {Canvas} from "@react-three/fiber";
import Goes from "../components/Goes.jsx";
import {Environment} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";

export default function GoesPage({ speed = 1, count = 100, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
    return(
        <>
            <Canvas gl={{antialias: false}} dpr={[1, 1.5]}
                    camera={{position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15}}>
                <color attach="background" args={['#2B7CEA']}/>
                <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="red"/>
                {Array.from({ length: count }, (_, i) => <Goes key={i} index={i} z={-i} speed={speed} />)}
                console.log(Math.round(easing(i / count) * depth))
                <Environment preset="sunset"/>
                <EffectComposer multisampling={0}>
                    <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={10} height={700}/>
                </EffectComposer>
            </Canvas>
        </>
    )
}

