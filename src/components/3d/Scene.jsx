import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleNetwork from './ParticleNetwork';

const Scene = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 2]} // Handle high-DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    {/* Ambient light for general visibility */}
                    <ambientLight intensity={0.5} />

                    {/* The main particle effect */}
                    <ParticleNetwork count={250} />

                    {/* Optional: Allow slight mouse interaction but disable zoom/pan for a background */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />
                </Suspense>
            </Canvas>

        </div>
    );
};

export default Scene;
