import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#121212] text-muted overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <BrandLogo linkTo="/" size="md" withText={true} />

            <p className="text-sm text-muted max-w-sm leading-relaxed">
              {personalInfo.studentBio}
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-panel border border-white/10 w-fit text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
              <span>Available for collaborations & internships</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">
              Navigation
            </span>
            <Link to="/" className="text-sm text-muted hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted hover:text-white transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-sm text-muted hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/journey" className="text-sm text-muted hover:text-white transition-colors">
              Journey
            </Link>
            <Link to="/contact" className="text-sm text-muted hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-white/50 mb-1">
              Connect
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
            >
              <Github className="w-4 h-4 text-white/60 group-hover:text-accent-cyan transition-colors" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-white/60 group-hover:text-accent-cyan transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-white/60 group-hover:text-accent-cyan transition-colors" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            {personalInfo.whatsapp && (
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-accent-mint/80 group-hover:text-accent-mint transition-colors" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/60">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-muted hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
