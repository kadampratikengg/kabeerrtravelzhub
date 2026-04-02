import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Pages', to: '/pages' },
  { label: 'Faq', to: '/pages#faq' },
  { label: 'Pricing', to: '/pages#pricing' },
  { label: 'Error-404', to: '/pages#error' },
  { label: 'Compare', to: '/pages#compare' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours', to: '/tours' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-[100000] transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg backdrop-blur-md scale-[0.99]' : 'bg-black/80'
      }`}
    >
      <div className="max-w-6xl mx-auto h-20 flex items-center px-4 sm:px-6 gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Kabeerr Travelz Hub">
          <img
            src="/assets/logo.png"
            alt="Kabeerr Travelz Hub"
            className="h-24 w-auto object-contain" /* 6rem */
            loading="lazy"
          />
        </Link>
        <nav className="ml-auto overflow-x-auto">
          <ul className="flex items-center gap-3 sm:gap-4 text-sm font-semibold uppercase tracking-wide text-white whitespace-nowrap">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded ${isActive ? 'text-secondary' : 'text-white hover:text-citrusyellow'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
