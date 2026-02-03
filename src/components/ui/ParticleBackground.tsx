"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles Geometry
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 12;
            velocities[i] = (Math.random() - 0.5) * 0.01;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // High-end Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            sizeAttenuation: true,
            color: '#06b6d4', // Theme Cyan
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 5;

        // Interaction state
        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', onMouseMove);

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Smooth mouse following
            target.x += (mouse.x - target.x) * 0.05;
            target.y += (mouse.y - target.y) * 0.05;

            // Subtle rotation and tilt
            particles.rotation.y += 0.0008;
            particles.rotation.x = -target.y * 0.2;
            particles.rotation.y = target.x * 0.2;

            // Move particles slightly based on their velocities for an "alive" feel
            const posArray = particlesGeometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count * 3; i += 3) {
                posArray[i] += velocities[i] * 0.2;
                posArray[i + 1] += velocities[i + 1] * 0.2;

                // Boundary check to loop particles
                if (Math.abs(posArray[i]) > 6) posArray[i] = -posArray[i];
                if (Math.abs(posArray[i + 1]) > 6) posArray[i + 1] = -posArray[i + 1];
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            scene.clear();
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none opacity-60" />;
};

export default ParticleBackground;
