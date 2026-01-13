import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../ThemeContext';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 100, color: baseColor = '#22d3ee' }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Mouse position state (normalized -1 to 1)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });

    // Refs for the two distinct rotation groups
    const tiltGroup = useRef();      // Handles mouse/touch tilt interaction
    const autoRotateGroup = useRef(); // Handles continuous rotation

    // Track mouse and touch movement across the entire page
    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize mouse position to -1 to 1 range
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = (event.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const x = (touch.clientX / window.innerWidth) * 2 - 1;
                const y = (touch.clientY / window.innerHeight) * 2 - 1;
                setMousePos({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchMove); // Trigger on initial touch too

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
        };
    }, []);

    // Mute intensity in dark mode - but not too much (middle ground)
    const color = isDark ? '#1e40af' : baseColor;
    const opacityPoints = isDark ? 0.55 : 0.8;
    const opacityLines = isDark ? 0.1 : 0.15;
    const rotationMultiplier = isDark ? 0.7 : 1;

    // Check if we are in environment that supports Float32Array (browser always does)
    const points = useRef();
    const lines = useRef();

    // Generate random particle positions
    const particlePositions = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 20;     // x
            temp[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            temp[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return temp;
    }, [count]);

    const linePositions = useMemo(() => new Float32Array(count * count * 3), [count]);

    useFrame((state, delta) => {
        // 1. Handle Interactive Tilt (Outer Group)
        targetRotation.current.x = mousePos.y * 0.5; // Increased sensitivity
        targetRotation.current.y = mousePos.x * 0.5;

        if (tiltGroup.current) {
            // Smoothly interpolate tilt
            tiltGroup.current.rotation.x += (targetRotation.current.x - tiltGroup.current.rotation.x) * 0.05;
            tiltGroup.current.rotation.y += (targetRotation.current.y - tiltGroup.current.rotation.y) * 0.05;
        }

        // 2. Handle Continuous Auto-Rotation (Inner Group)
        if (autoRotateGroup.current) {
            autoRotateGroup.current.rotation.y += delta * 0.05 * rotationMultiplier;
        }

        // 3. Update Lines (Geometry logic)
        // Note: access points.current which is inside autoRotateGroup
        if (points.current && lines.current) {
            // Update lines
            let lineIdx = 0;
            const positions = points.current.geometry.attributes.position.array;

            for (let i = 0; i < count; i++) {
                const x1 = positions[i * 3];
                const y1 = positions[i * 3 + 1];
                const z1 = positions[i * 3 + 2];

                for (let j = i + 1; j < count; j++) {
                    const x2 = positions[j * 3];
                    const y2 = positions[j * 3 + 1];
                    const z2 = positions[j * 3 + 2];

                    const dist = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2);

                    if (dist < 9) { // Distance squared < 3*3
                        // eslint-disable-next-line react-hooks/immutability
                        linePositions[lineIdx++] = x1;
                        linePositions[lineIdx++] = y1;
                        linePositions[lineIdx++] = z1;
                        linePositions[lineIdx++] = x2;
                        linePositions[lineIdx++] = y2;
                        linePositions[lineIdx++] = z2;
                    }
                }
            }

            lines.current.geometry.setDrawRange(0, lineIdx / 3);
            lines.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={tiltGroup}> {/* Outer group: Interactive Tilt */}
            <group ref={autoRotateGroup}> {/* Inner group: Continuous Spin */}
                <points ref={points}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={count}
                            array={particlePositions}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        size={0.15}
                        color={color}
                        sizeAttenuation={true}
                        transparent={true}
                        opacity={opacityPoints}
                        blending={THREE.AdditiveBlending}
                    />
                </points>
                <lineSegments ref={lines}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={linePositions.length / 3}
                            array={linePositions}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        color={color}
                        transparent={true}
                        opacity={opacityLines}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </lineSegments>
            </group>
        </group>
    );
};

export default ParticleNetwork;
