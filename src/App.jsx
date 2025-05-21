import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Environment, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import { Square, TestModel } from "./Interactions_temp";
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [squares, setSquares] = useState([]);
  const [iframeSrc, setIframeSrc] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const newSquares = [];
    const minDistance = 2;
    const modelHeight = -1;

    for (let i = 0; i < 10; i++) {
      let position;
      let isValidPosition = false;

      while (!isValidPosition) {
        const x = Math.random() * 20 - 10;
        const y = modelHeight;
        const z = Math.random() * 20 - 10;
        position = [x, y, z];

        isValidPosition = newSquares.every((square) => {
          const distance = new THREE.Vector3(...square.position).distanceTo(new THREE.Vector3(...position));
          return distance >= minDistance;
        });
      }

      newSquares.push({ position });
    }

    setSquares(newSquares);
  }, []);

  const handleSquareClick = (position) => {
    const distance = new THREE.Vector3(0, -1, 0).distanceTo(new THREE.Vector3(...position));
    if (distance < 100) {
      setIframeSrc("https://example.com");
    } else {
      alert("You need to be closer to interact with this square.");
    }
  };

  const handleOverlayClick = () => {
    setIframeSrc("");
  };

  const handleBackTo2DClick = () => {
    navigate('/');
  };

  return (
    <>
      {location.pathname !== '/3d-world' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/3d-world" element={
          <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            {/* Zurück-Button oben rechts */}
            <button
              onClick={handleBackTo2DClick}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "10px 15px",
                fontSize: "14px",
                background: "rgba(0, 0, 0, 0.7)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                zIndex: 1000,
              }}
            >
              Zurück zur 2D-Website
            </button>

            <Canvas style={{ width: "100%", height: "100%" }} shadows camera={{ position: [0, 10, 20], fov: 50 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
              <SpotLight position={[5, 10, 5]} angle={0.3} intensity={2} castShadow />

              <Suspense fallback={<Html center>Loading Model...</Html>}>
                <TestModel />
              </Suspense>

              {squares.map((square, index) => (
                <Square key={index} position={square.position} onClick={() => handleSquareClick(square.position)} />
              ))}

              <OrbitControls enablePan={false} enableZoom={false} enableRotate maxPolarAngle={Math.PI / 2} />
              <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade />
              <Environment preset="night" background />
            </Canvas>

            {iframeSrc && (
              <div
                onClick={handleOverlayClick}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  src={iframeSrc}
                  style={{
                    width: "80%",
                    height: "80%",
                    border: "none",
                    backgroundColor: "white",
                  }}
                />
              </div>
            )}
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;