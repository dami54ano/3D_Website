import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState, forwardRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three";
import * as THREE from "three";

export const TestModel = forwardRef((props, ref) => {
  const modelRef = useRef();
  const fbx = useLoader(FBXLoader, "/COSMO4.fbx");
  const { camera } = useThree();
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
    const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;

    let direction = new THREE.Vector3();
    if (keys.w) direction.z -= 0.1;
    if (keys.s) direction.z += 0.1;
    if (keys.a) direction.x -= 0.1;
    if (keys.d) direction.x += 0.1;

    if (direction.length() > 0) {
      direction.normalize();
      modelRef.current.position.add(direction);

      // Update the rotation logic to correctly align the model's orientation
      const angle = Math.atan2(direction.x, direction.z);
      modelRef.current.rotation.y = angle;
    }

    const camTarget = new THREE.Vector3(
      modelRef.current.position.x,
      modelRef.current.position.y + 2,
      modelRef.current.position.z + 5
    );
    camera.position.lerp(camTarget, 0.05);
    camera.lookAt(modelRef.current.position);
  });

  return <primitive ref={ref || modelRef} object={fbx} scale={0.01} position={[0, -1, 0]} />;
});

export function Square({ position, onClick }) {
  const texture = useLoader(TextureLoader, "/marble/Marble019_2K-JPG_Roughness.jpg");
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position} onClick={onClick} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}