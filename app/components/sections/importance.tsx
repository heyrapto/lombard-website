import Image from 'next/image';

interface Feature {
  image: string;
  title: string;
  description: string;
}

const Importance = () => {
  const features: Feature[] = [
    {
      image: '/images/pioneering.svg',
      title: 'Bitcoin reimagined global finance built upon mathematical guarantees, not trust in people.',
      description: ''
    },
    {
      image: '/images/pioneering2.svg',
      title: 'It inspired a $trillion+ ecosystem of blockchains and applications, yet barely participates in the onchain revolution it sparked.',
      description: ''
    },
    {
      image: '/images/pioneering3.svg',
      title: '$2 trillion BTC sits in cold wallets; the ecosystem sees limited innovation. Lombard is here to change this.',
      description: ''
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto py-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-20 max-w-4xl mx-auto leading-tight">
        Bitcoin is the Most Important Asset of Our Generation
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-between">
            {/* Image */}
            <div className="mb-3">
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={300}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 leading-tight">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Importance;