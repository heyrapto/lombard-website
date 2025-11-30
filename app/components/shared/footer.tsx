import Link from 'next/link';
import { FaXTwitter, FaDiscord, FaTelegram } from 'react-icons/fa6';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Lombard',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Ecosystem', href: '/ecosystem' },
        { label: 'Products', href: '/products' },
        { label: 'Blog', href: '/blog' },
        { label: 'Documentation', href: '/documentation' },
        { label: 'Brand Kit', href: '/brand-kit' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'App', href: '/app' },
        { label: 'Lombard SDK', href: '/sdk' },
        { label: 'DeFi Marketplace', href: '/defi-marketplace' },
        { label: 'Bridge', href: '/bridge' },
        { label: 'Security', href: '/security' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Audits', href: '/audits' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'UK FCA disclaimer', href: '/fca-disclaimer' },
        { label: 'MiCA Whitepaper', href: '/mica-whitepaper' }
      ]
    }
  ];

  return (
    <footer className="bg-[#0A0F0D] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-gray-700">
          {/* Left - Description */}
          <div className="lg:max-w-md space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Lombard is building onchain Bitcoin Capital Markets, to unlock the full potential of the most important asset of our generation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2024, Lombard pioneered Bitcoin&#39;s integration into DeFi with LBTC, the leading liquid staked token, secured by a consortium of top institutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, Lombard is building full-stack infrastructure to accelerate onchain BTC adoption by holders, protocols, and platforms. Lombard is built and backed by digital asset leaders, including top DeFi protocols, institutions, and exchanges.
            </p>
          </div>

          {/* Right - Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-white font-bold text-lg mb-6">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            2025 lombard.finance All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://twitter.com/lombard_finance" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link 
              href="https://discord.gg/lombard" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <FaDiscord size={24} />
            </Link>
            <Link 
              href="https://t.me/lombard_finance" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;