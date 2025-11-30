import Image from 'next/image';
import Link from 'next/link';

interface NewsArticle {
  image: string;
  tags: string[];
  title: string;
  date: string;
  readTime: string;
  slug: string;
}

const News = () => {
  const articles: NewsArticle[] = [
    {
      image: '/images/news1.png',
      tags: ['Lombard'],
      title: 'Lombard: Full-stack Infrastructure Bringing Bitcoin to Life Onchain',
      date: 'Jul 17, 2025',
      readTime: '9 min read',
      slug: '/blog/full-stack-infrastructure'
    },
    {
      image: '/images/news2.png',
      tags: ['Lombard'],
      title: 'A New Era of Bitcoin Security and Liquidity: The Lombard Security Consortium',
      date: 'Feb 17, 2025',
      readTime: '7 min read',
      slug: '/blog/security-consortium'
    },
    {
      image: '/images/news3.png',
      tags: ['Lombard', 'Ecosystem', 'Product'],
      title: 'Lombard and Chainlink Partner to Set the Industry Standard for Bitcoin in DeFi',
      date: 'Oct 28, 2024',
      readTime: '3 min read',
      slug: '/blog/chainlink-partner'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Recent updates
          </h2>
          <Link 
            href="/blog" 
            className="text-black font-semibold underline hover:text-gray-700 transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={article.slug}
              className="group block"
            >
              {/* Image */}
              <div className="relative w-full aspect-16/10 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-black border border-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                {article.title}
              </h3>

              {/* Meta Info */}
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm">{article.date}</p>
                <p className="text-black text-sm font-medium">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;