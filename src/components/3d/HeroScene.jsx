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
  const { hasWebGL, isMobile, isTablet, isTouch } = useDeviceCapability();
  const reducedMotion = useReducedMotion();

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  // Device-tuned camera field of view and distance
  const cameraFov = isMobile ? 50 : isTablet ? 46 : 42;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Calm, soft ambient background aura */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none translate-x-6 translate-y-6" />

      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: cameraFov }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full touch-pan-y select-none"
        >
          <Suspense fallback={null}>
            {/* Ambient and directional lights */}
            <ambientLight intensity={0.85} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />
            <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#00E5FF" />
            <pointLight position={[0, 2, 3]} intensity={1.2} color="#38BDF8" distance={10} />

            {/* Living Java Code centerpiece with responsive sizing and formatting */}
            <LivingJavaCode
              reducedMotion={reducedMotion}
              isMobile={isMobile}
              isTablet={isTablet}
              isTouch={isTouch}
            />
            <CameraRig reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
