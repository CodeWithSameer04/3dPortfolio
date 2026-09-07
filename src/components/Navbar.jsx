import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { personalInfo } from '../data/personalInfo';

import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollProgress();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <BrandLogo linkTo="/" size="md" withText={true} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-mint rounded-full shadow-sm shadow-accent-mint" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA - Primary CTA: Refined, less bright deep slate-indigo */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full bg-gradient-to-r from-[#1E2640] via-[#242C48] to-[#28274A] hover:from-[#253050] hover:via-[#2C3658] hover:to-[#32315C] text-slate-100 border border-indigo-400/25 hover:border-indigo-300/40 shadow-sm shadow-black/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#121212]/98 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col justify-between transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 text-lg font-medium tracking-wide rounded-xl transition-colors ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <Link
            to="/contact"
            className="w-full py-3.5 text-center text-sm font-medium tracking-wider uppercase rounded-xl bg-gradient-to-r from-[#1E2640] via-[#242C48] to-[#28274A] hover:from-[#253050] hover:via-[#2C3658] hover:to-[#32315C] text-slate-100 border border-indigo-400/25 shadow-sm shadow-black/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="text-center text-xs text-muted font-mono">
            {personalInfo.name} • {personalInfo.role}
          </div>
        </div>
      </div>
    </header>
  );
}
