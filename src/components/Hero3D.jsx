import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Hero3D - Wisteria Bloom Edition
 * Powered by Three.js with deep royal violet, orchid pink, and soft lavender lighting.
 * Displays the core growth engine with code-font telemetry cards.
 */
export default function Hero3D() {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. WebGL Feature Check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        setIsLoading(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    // 2. Setup Three.js Scene, Camera, Renderer
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070312, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.8);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // 3. Lighting System (Wisteria Bloom)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Violet Point Light (#9400D3)
    const violetLight = new THREE.PointLight(0x9400d3, 4.5, 16);
    violetLight.position.set(3, 3, 4);
    scene.add(violetLight);

    // Orchid Blossom Point Light (#ED80E9)
    const orchidLight = new THREE.PointLight(0xed80e9, 4.0, 15);
    orchidLight.position.set(-3, -2, 3);
    scene.add(orchidLight);

    // Lavender Core Light (#D3D3FF)
    const coreLight = new THREE.PointLight(0xd3d3ff, 2.5, 9);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // 4. Central Growth Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // A. Inner glowing crystal (Icosahedron in deep royal violet / orchid)
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x9400d3,
      emissive: 0x5c0084,
      emissiveIntensity: 0.65,
      roughness: 0.12,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // B. Outer wireframe lattice (Orchid Pink #ED80E9)
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xed80e9,
      emissive: 0x9400d3,
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // C. Orbital Ring 1 (Orchid Blossom stream #ED80E9)
    const ring1Geo = new THREE.TorusGeometry(2.5, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xed80e9,
      emissive: 0xed80e9,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // D. Orbital Ring 2 (Soft Lavender #D3D3FF)
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd3d3ff,
      emissive: 0x9400d3,
      emissiveIntensity: 0.7,
      roughness: 0.3,
      metalness: 0.85,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    scene.add(ring2);

    // E. Orbital Satellite Nodes
    const nodeCount = 6;
    const satellites = [];
    for (let i = 0; i < nodeCount; i++) {
      const satGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xed80e9 : 0xd3d3ff,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      scene.add(satMesh);
      satellites.push({
        mesh: satMesh,
        radius: i % 2 === 0 ? 2.5 : 3.1,
        speed: (i % 2 === 0 ? 0.015 : -0.012) * (0.8 + (i * 0.1)),
        angle: (i * (Math.PI * 2)) / nodeCount,
        ring: i % 2 === 0 ? ring1 : ring2,
      });
    }

    // F. Ambient Floating Particles (Lavender & Orchid)
    const particleCount = 130;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 12;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xd3d3ff,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    setIsLoading(false);

    // 5. Mouse Parallax & Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseX = (clientX / rect.width) * 2 - 1;
      mouseY = -(clientY / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        coreGroup.rotation.y += deltaX * 0.008;
        coreGroup.rotation.x += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 6. Responsive Resize Observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 7. Animation Loop with Visibility Optimization
    let animationFrameId;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor lerp
      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;

      camera.position.x = targetX * 1.5;
      camera.position.y = targetY * 1.2;
      camera.lookAt(0, 0, 0);

      // Core rotation
      if (!isDragging) {
        coreGroup.rotation.y += 0.005;
        coreGroup.rotation.x += 0.002;
        wireMesh.rotation.y -= 0.003;
        wireMesh.rotation.z += 0.002;
      }

      // Breathing scale pulse
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.035;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Orbital rotations
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const x = Math.cos(sat.angle) * sat.radius;
        const y = Math.sin(sat.angle) * sat.radius;
        const vec = new THREE.Vector3(x, y, 0);
        vec.applyEuler(sat.ring.rotation);
        sat.mesh.position.copy(vec);
      });

      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();
      observer.disconnect();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '480px',
        maxHeight: '680px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isInteracting ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
      aria-label="Interactive 3D representation of Xntrova's digital marketing engine"
      role="img"
    >
      {/* Loading Skeleton */}
      {isLoading && hasWebGL && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid rgba(237, 128, 233, 0.2)',
              borderTopColor: '#ED80E9',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>
      )}

      {/* Graceful Fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div
          style={{
            position: 'relative',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(148, 0, 211, 0.3) 0%, rgba(237, 128, 233, 0.15) 60%, transparent 80%)',
            border: '1px solid rgba(237, 128, 233, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 50px rgba(148, 0, 211, 0.3)',
          }}
        >
          <div
            className="font-mono"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '2px dashed rgba(211, 211, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D3D3FF',
              fontWeight: 600,
              fontSize: '0.85rem',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            [Growth Engine Active]
          </div>
        </div>
      )}

      {/* Floating Holographic Telemetry Cards with Code Font */}
      <div
        className="telemetry-badge telemetry-badge-1"
        style={{
          position: 'absolute',
          top: '12%',
          left: '2%',
          background: 'rgba(22, 13, 56, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(237, 128, 233, 0.4)',
          borderRadius: '12px',
          padding: '0.75rem 1.15rem',
          boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.8), 0 0 25px rgba(148, 0, 211, 0.3)',
          zIndex: 10,
          pointerEvents: 'none',
          animation: 'subtleFloat 5s ease-in-out infinite',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px #10B981',
            }}
          />
          <div>
            <div
              className="font-mono"
              style={{ fontSize: '0.7rem', color: '#D8BFD8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}
            >
              $ organic_traffic
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FAF8FF', letterSpacing: '-0.02em' }}
            >
              +250% <span style={{ fontSize: '0.75rem', color: '#ED80E9', fontWeight: 600 }}>↑ YoY</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="telemetry-badge telemetry-badge-2"
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '4%',
          background: 'rgba(22, 13, 56, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(211, 211, 255, 0.35)',
          borderRadius: '12px',
          padding: '0.75rem 1.15rem',
          boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.8), 0 0 25px rgba(211, 211, 255, 0.2)',
          zIndex: 10,
          pointerEvents: 'none',
          animation: 'subtleFloat 6s ease-in-out infinite 1s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ED80E9',
              boxShadow: '0 0 10px #ED80E9',
            }}
          />
          <div>
            <div
              className="font-mono"
              style={{ fontSize: '0.7rem', color: '#D8BFD8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}
            >
              $ clutch_score
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FAF8FF', letterSpacing: '-0.02em' }}
            >
              4.9 / 5.0 <span style={{ fontSize: '0.75rem', color: '#ED80E9', fontWeight: 600 }}>★</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="telemetry-badge telemetry-badge-3"
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '8%',
          background: 'rgba(22, 13, 56, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(148, 0, 211, 0.45)',
          borderRadius: '12px',
          padding: '0.65rem 1rem',
          boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.8)',
          zIndex: 10,
          pointerEvents: 'none',
          animation: 'subtleFloat 7s ease-in-out infinite 0.5s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8' }}>roas_multiplier</div>
          <div className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ED80E9' }}>4.2x</div>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.6875rem',
          color: 'rgba(216, 191, 216, 0.7)',
          letterSpacing: '0.05em',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        ✦ [drag to rotate growth matrix]
      </div>
    </div>
  );
}
