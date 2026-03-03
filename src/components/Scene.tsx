import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GradientBlobs() {
  const meshRef1 = useRef<THREE.Mesh>(null!);
  const meshRef2 = useRef<THREE.Mesh>(null!);
  const meshRef3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow, organic movement
    meshRef1.current.position.x = Math.sin(time * 0.1) * 5;
    meshRef1.current.position.y = Math.cos(time * 0.15) * 3;
    
    meshRef2.current.position.x = Math.cos(time * 0.12) * 6;
    meshRef2.current.position.y = Math.sin(time * 0.08) * 4;
    
    meshRef3.current.position.x = Math.sin(time * 0.07) * 4;
    meshRef3.current.position.z = Math.cos(time * 0.1) * 2;
  });

  return (
    <group>
      <mesh ref={meshRef1} position={[-5, 2, -10]}>
        <sphereGeometry args={[8, 64, 64]} />
        <meshBasicMaterial color="#1a1a2e" transparent opacity={0.1} />
      </mesh>
      <mesh ref={meshRef2} position={[5, -3, -12]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.08} />
      </mesh>
      <mesh ref={meshRef3} position={[0, 5, -15]}>
        <sphereGeometry args={[12, 64, 64]} />
        <meshBasicMaterial color="#1e293b" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#080809]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.1} />
        <GradientBlobs />
        <fog attach="fog" args={["#080809", 5, 25]} />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,8,9,0)_0%,rgba(8,8,9,1)_100%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
