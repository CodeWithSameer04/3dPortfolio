import React, { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { updatePageSEO } from '../utils/seo';

export default function NotFound() {
  useEffect(() => {
    updatePageSEO({
      title: "404 — Page Not Found",
      description: "The requested route does not exist."
    });
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      {/* 404 Glitch-like Badge */}
      <div className="relative mb-6">
        <span className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-white/10 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-5xl font-extrabold text-white">
            Lost in Space
          </span>
        </div>
      </div>

      <p className="text-base sm:text-lg text-muted max-w-md mb-10 leading-relaxed font-normal">
        The coordinates you entered do not correspond to any active route in this portfolio.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
          Return Home
        </Button>
        <Button to="/projects" variant="secondary" size="md" icon={ArrowLeft} iconPosition="left">
          Explore Projects
        </Button>
      </div>
    </div>
  );
}
