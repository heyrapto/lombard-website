import Image from 'next/image';

interface Partner {
    name: string;
    logo: string;
}

interface Stat {
    value: string;
    description: string;
}

const Partners = () => {
    const partners: Partner[] = [
        { name: 'Aave', logo: '/images/aave.svg' },
        { name: 'Binance', logo: '/images/binance.svg' },
        { name: 'Bybit', logo: '/images/bybit.svg' },
        { name: 'Chainlink', logo: '/images/chainlink.svg' },
        { name: 'DCG', logo: '/images/dcg.png' },
        { name: 'Ethereum', logo: '/images/ether.svg' },
        { name: 'Franklin', logo: '/images/franklin.svg' },
        { name: 'Galaxy', logo: '/images/galaxy.png' },
        { name: 'OKX', logo: '/images/okx.svg' },
        { name: 'Winter', logo: '/images/winter.svg' }
    ];

    const stats: Stat[] = [
        {
            value: '$1B',
            description: 'Fastest yield-bearing token to reach $1B in TVL (92 days)'
        },
        {
            value: '$3B',
            description: 'Net-new liquidity onboarded to 12 blockchains'
        },
        {
            value: '$750M',
            description: "TVL across Lombard's vault products"
        },
        {
            value: '270K',
            description: 'LBTC users across the globe'
        },
        {
            value: '82%',
            description: 'LBTC is active in DeFi protocols'
        },
        {
            value: '$6T',
            description: 'value unlocked when developers innovate with BTC'
        }
    ];

    const duplicatedPartners: Partner[] = [...partners, ...partners];

    return (
        <section className="bg-[#0A0F0D]">
            <div className='max-w-[1440px] mx-auto flex flex-col gap-20 py-20 px-6'>
                {/* Infinite Slide */}
                <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
                <h1 className='text-center text-white'>Trusted by our partners</h1>
                    <div className="flex animate-scroll">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="shrink-0 w-64 h-32 mx-8 flex items-center justify-center"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={200}
                                    height={80}
                                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side - Title */}
                    <div className="lg:w-2/5">
                        <p className="text-gray-400 text-sm mb-4 tracking-wide">By the numbers</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Powering the Onchain Bitcoin Economy
                        </h2>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-5xl lg:text-6xl font-bold text-[#00E676] mb-3">
                                    {stat.value}
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;