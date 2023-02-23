import {Canvas} from "@react-three/fiber";
import Strawb from "../components/Strawb.jsx";
import {Environment} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";


export default function StrawbPage({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
    return(
        <>
            <Canvas gl={{antialias: false}} dpr={[1, 1.5]}
                    camera={{position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15}}>
                <color attach="background" args={['#fa2a55']}/>
                <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="pink"/>
                {Array.from({ length: count }, (_, i) => <Strawb key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />)}

                <Environment preset="sunset"/>
                <EffectComposer multisampling={0}>
                    <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={10} height={700}/>
                </EffectComposer>
            </Canvas>
        </>
    )
}

