import React, { Suspense, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import LivingJavaCode from './LivingJavaCode';
import WebGLFallback from '../WebGLFallback';
import { useDeviceCapability } from '../../hooks/useDeviceCapability';
import { useReducedMotion } from '../../hooks/useReducedMotion';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Scene render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function HeroScene() {
  const { hasWebGL, isMobile } = useDeviceCapability();
  const reducedMotion = useReducedMotion();

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[440px] md:min-h-[580px] flex items-center justify-center">
      {/* Calm, soft ambient background aura */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none translate-x-8 translate-y-8" />

      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: isMobile ? 52 : 44 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full touch-none"
        >
          <Suspense fallback={null}>
            {/* Ambient and directional lights */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />
            <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#00E5FF" />
            <pointLight position={[0, 2, 3]} intensity={1.2} color="#38BDF8" distance={10} />

            {/* Living Java Code centerpiece only */}
            <LivingJavaCode reducedMotion={reducedMotion} isMobile={isMobile} />
            <CameraRig reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
