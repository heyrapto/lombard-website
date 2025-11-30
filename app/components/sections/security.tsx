import Image from 'next/image';
import Link from 'next/link';

interface SecurityPartner {
  name: string;
  logo: string;
}

const Security = () => {
  const securityPartners: SecurityPartner[] = [
    { name: 'Amber', logo: '/images/security/amber.svg' },
    { name: 'Ant Pool', logo: '/images/security/ant.svg' },
    { name: 'Chorus One', logo: '/images/security/one.svg' },
    { name: 'DCG', logo: '/images/dcg.png' },
    { name: 'Cubist', logo: '/images/security/cubist.svg' },
    { name: 'F2Pool', logo: '/images/security/f2pool.svg' },
    { name: 'Figment', logo: '/images/security/figment.svg' },
    { name: 'Galaxy', logo: '/images/galaxy.png' },
    { name: 'Informal Systems', logo: '/images/security/informal.svg' },
    { name: 'Kiln', logo: '/images/security/kiln.svg' },
    { name: 'Nansen', logo: '/images/security/nansen.svg' },
    { name: 'OKX', logo: '/images/okx.svg' },
    { name: 'P2P', logo: '/images/security/p2p.svg' },
    { name: 'Wintermute', logo: '/images/winter.svg' }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Side - Content */}
          <div className="lg:w-2/5">
            <p className="text-gray-500 text-sm font-medium mb-4 tracking-wide uppercase">
              Secured by the best
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Security Consortium
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Lombard is collectively secured by leading digital asset institutions, working together to drive adoption of Lombard&#39;s suite of onchain products.
            </p>
            <Link
              href="/security"
              className="inline-block px-8 py-3 bg-[#00E676] text-black font-semibold rounded-full hover:bg-[#00d166] transition-colors"
            >
              Read more
            </Link>
          </div>

          {/* Right Side - Partner Logos Grid */}
          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
            {securityPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;