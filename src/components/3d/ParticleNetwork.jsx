import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 100, color = '#22d3ee' }) => {
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
        // Rotate the whole group slowly
        if (points.current) {
            points.current.rotation.y += delta * 0.05;
            points.current.rotation.x += delta * 0.02;

            if (lines.current) {
                lines.current.rotation.y = points.current.rotation.y;
                lines.current.rotation.x = points.current.rotation.x;
            }

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
        <group>
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
                    opacity={0.8}
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
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
};

export default ParticleNetwork;
