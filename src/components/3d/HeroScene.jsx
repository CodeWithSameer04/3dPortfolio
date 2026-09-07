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

  // Device-tuned camera field of view and closer distance for grander presence
  const cameraFov = isMobile ? 48 : isTablet ? 44 : 41;
  const cameraZ = isMobile ? 4.1 : isTablet ? 4.3 : 4.4;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Calm, soft ambient background aura */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none translate-x-8 translate-y-8" />

      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, cameraZ], fov: cameraFov }}
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
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={1.3} color="#FFFFFF" />
            <directionalLight position={[-5, -3, -2]} intensity={0.9} color="#00E5FF" />
            <pointLight position={[0, 2, 3]} intensity={1.3} color="#38BDF8" distance={12} />

            {/* Living Java Code centerpiece with responsive sizing and formatting */}
            <LivingJavaCode
              reducedMotion={reducedMotion}
              isMobile={isMobile}
              isTablet={isTablet}
              isTouch={isTouch}
            />
            <CameraRig
              reducedMotion={reducedMotion}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
