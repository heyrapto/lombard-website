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
      icon: '/images/features/marketplace.svg',
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
      icon: '/images/features/staking.svg',
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
      icon: '/images/features/cross-chain.svg',
      title: 'Cross-Chain Bitcoin',
      desc: 'The new BTC primitive will enable developers to onboard BTC in both wrapped and staked forms',
      type: 'coming-soon'
    },
    {
      icon: '/images/features/tokenized.svg',
      title: 'Tokenized & Institutional Products',
      desc: "We're building a basis trade vault & tokenized options vault with leading institutions",
      type: 'coming-soon'
    }
  ];