import { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterModal from './FooterModal';

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: 'mailto:portfoliopublisher@gmail.com' },
  ],
  Legal: [
    { label: 'Terms', href: '/terms', router: true },
    { label: 'Privacy', href: '/privacy', router: true },
    { label: 'Security', href: '#' },
  ],
};

const SOCIALS = [
  {
    label: 'Email portfoliopublisher@gmail.com',
    href: 'mailto:portfoliopublisher@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const FooterSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleLinkClick = (e, label, href, router) => {
    if (router) return;
    if (href === '#') {
      e.preventDefault();
      setActiveModal(label);
    }
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-xs">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Portfolio<span className="text-slate-500 font-medium">Publisher</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Build your professional portfolio, get a personal URL and QR code. Stand out to recruiters.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title="portfoliopublisher@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href, router }) => (
                  <li key={label}>
                    {router ? (
                      <Link
                        to={href}
                        className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => handleLinkClick(e, label, href, router)}
                        className="text-left text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 w-full cursor-pointer block"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Portfolio Publisher. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
            <span>Built for professionals worldwide</span>
          </div>
        </div>
      </div>

      <FooterModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        label={activeModal}
      />
    </footer>
  );
};

export default FooterSection;
