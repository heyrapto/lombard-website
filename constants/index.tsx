export const navItems = [
    {
        title: "About us",
        hasDropdown: true,
    },
    {
        title: "Ecosystem",
        hasDropdown: false,
    },
    {
        title: "Products",
        hasDropdown: false,
    }
]

export interface FeatureCard {
    icon: string;
    title: string;
    desc: string;
    type: "normal" | "has-link" | "coming-soon";
    link?: string;
}

export const featuresData: FeatureCard[] = [
    {
      icon: '/images/features/lbtc.svg',
      title: 'LBTC',
      desc: 'Stake BTC for LBTC to earn a native yield while staying liquid for use in DeFi',
      type: 'has-link',
      link: '/lbtc'
    },
    {
      icon: '/images/features/vaults.svg',
      title: 'Lombard Vaults',
      desc: 'Access curated, actively-managed vaults, operated by leading risk managers',
      type: 'has-link',
      link: '/vaults'
    },
    {
      icon: '/images/features/defi.svg',
      title: 'Lombard DeFi Marketplace',
      desc: 'Explore opportunities to lend, borrow, and trade Bitcoin in DeFi, across 12 leading blockchains',
      type: 'has-link',
      link: '/marketplace'
    },
    {
      icon: '/images/features/sdk.svg',
      title: 'Lombard SDK',
      desc: 'Embed native BTC deposits and yield directly into any chain, protocol, or wallet.',
      type: 'has-link',
      link: '/sdk'
    },
    {
      icon: '/images/features/stake.svg',
      title: 'Bitcoin Staking',
      desc: "Stake directly to Lombard's 4 Finality Providers on Babylon, operated with Galaxy, Kiln, P2P and Figment",
      type: 'has-link',
      link: '/staking'
    },
    {
      icon: '/images/features/ledger.svg',
      title: 'Lombard Ledger',
      desc: 'The leading Bitcoin bridge, secured by 14 trusted digital asset institutions.',
      type: 'normal'
    },
    {
      icon: '/images/features/chain.svg',
      title: 'Cross-Chain Bitcoin',
      desc: 'The new BTC primitive will enable developers to onboard BTC in both wrapped and staked forms',
      type: 'coming-soon'
    },
    {
      icon: '/images/features/products.svg',
      title: 'Tokenized & Institutional Products',
      desc: "We're building a basis trade vault & tokenized options vault with leading institutions",
      type: 'coming-soon'
    }
  ];

  export interface EcosystemCard {
    icon: string;
    title: string;
    desc: string;
    brandImages: string[];
  }

 export const ecosystemData: EcosystemCard[] = [
    {
      icon: '/images/ecosystem/institutions.svg',
      title: 'Institutions',
      desc: 'Onchain funds and asset managers allocate to LBTC strategies to return value to their customers.',
      brandImages: ['/images/galaxy.png', '/images/dcg.png']
    },
    {
      icon: '/images/ecosystem/protocols.svg',
      title: 'Leading Protocols',
      desc: 'Onboard LBTC as a premier collateral type, driving new users and activity to the protocols.',
      brandImages: ['/images/aave.svg']
    },
    {
      icon: '/images/ecosystem/exchanges.svg',
      title: 'Exchanges',
      desc: 'Exchanges integrate the Lombard SDK into their platforms, giving users access to Bitcoin staking.',
      brandImages: ['/images/binance.svg', '/images/bybit.svg']
    },
    {
      icon: '/images/ecosystem/custodians.svg',
      title: 'Custodians',
      desc: 'Protect user assets, while providing access to liquid Bitcoin and DeFi opportunities.',
      brandImages: ['/images/security/cubist.svg', '/images/security/cetfu.svg']
    },
    {
      icon: '/images/ecosystem/holders.svg',
      title: 'Bitcoin Holders',
      desc: 'Unlock the earning potential of Bitcoin onchain with Lombard. Starting with staking and moving into onchain markets, seamlessly and securely.',
      brandImages: []
    },
    {
      icon: '/images/ecosystem/providers.svg',
      title: 'Staking providers',
      desc: 'Work with Lombard to enhance the supply-side of their two-sided marketplaces.',
      brandImages: ['/images/security/figment.svg', '/images/security/kiln.svg']
    },
    {
      icon: '/images/ecosystem/wallets.svg',
      title: 'Wallets',
      desc: 'Integrate the Lombard SDK to offer liquid Bitcoin staking without leaving the platform they trust.',
      brandImages: []
    },
    {
      icon: '/images/ecosystem/platforms.svg',
      title: 'Restaking platforms',
      desc: 'Partner with Lombard to offer dual-yielding assets to users, and provide enhanced security to their developer networks.',
      brandImages: ['/images/ecosystem/symbiotic.svg', '/images/ecosystem/karak.svg']
    }
  ];