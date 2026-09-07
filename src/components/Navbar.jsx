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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212] border-b border-white/10 py-3 shadow-lg shadow-black/60'
            : 'bg-transparent py-5 sm:py-6'
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
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA - Primary CTA: Refined deep slate-indigo */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full bg-gradient-to-r from-[#1E2640] via-[#242C48] to-[#28274A] hover:from-[#253050] hover:via-[#2C3658] hover:to-[#32315C] text-slate-100 border border-indigo-400/25 hover:border-indigo-300/40 shadow-sm shadow-black/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle (Three Lines) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Menu - Completely Solid (No Glassmorphism, No Overlap) */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#0B0C10] flex flex-col justify-between px-6 py-5 sm:px-8 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Top Header Bar inside Mobile Menu */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <BrandLogo linkTo="/" size="md" withText={true} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links List */}
        <nav className="flex flex-col gap-2 py-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3.5 text-lg font-semibold tracking-wide rounded-2xl transition-all ${
                  isActive
                    ? 'text-white bg-[#1A1C26] border border-white/15 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom CTA & Footer Info */}
        <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 text-center text-sm font-semibold tracking-wider uppercase rounded-2xl bg-gradient-to-r from-[#1E2640] via-[#242C48] to-[#28274A] hover:from-[#253050] text-white border border-indigo-400/30 shadow-lg shadow-black/40 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="text-center text-xs text-slate-500 font-mono pt-1">
            {personalInfo.name} • {personalInfo.role}
          </div>
        </div>
      </div>
    </>
  );
}
