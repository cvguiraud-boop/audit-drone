import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#context', label: 'Contexte' },
  { href: '#diagnostic', label: 'Diagnostic' },
  { href: '#audit', label: 'Audit' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#amendes', label: 'Amendes' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1a2a4a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Glocal Defense" className="h-10" />
          <div>
            <div className="font-bold text-sm tracking-widest uppercase">Glocal Defense</div>
            <div className="text-xs text-white/70">Audit drones de loisirs</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#e63030] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            Prendre RDV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a2a4a] border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-white/80 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
