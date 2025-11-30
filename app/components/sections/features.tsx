const Features = () => {
    interface FeatureCard {
        title: string
        desc: string
        type: "normal" | "has-link" | "coming-soon"
    }
    const featuresData: FeatureCard[] = [
        {
            title: "LBTC",
            desc: "Stake BTC for LBTC to earn a native yield while staying liquid for use in DeFi",
            type: "has-link"
        },
        {
            title: "Lombard Vaults",
            desc: "Access curated, actively-managed vaults, operated by leading risk managers",
            type: "has-link"
        },
        {
            title: "Lombard DeFi Marketplace",
            desc: "Explore opportunities to lend, borrow, and trade Bitcoin in DeFi, across 12 leading blockchains",
            type: "has-link"
        },
        {
            title: "Lombard SDK",
            desc: "Embed native BTC deposits and yield directly into any chain, protocol, or wallet.",
            type: "has-link"
        },
        {
            title: "Bitcoin Staking",
            desc: "Stake directly to Lombard's 4 Finality Providers on Babylon, operated with Galaxy, Kiln, P2P and Figment",
            type: "has-link"
        },
        {
            title: "Lombard Ledger",
            desc: "The leading Bitcoin bridge, secured by 14 trusted digital asset institutions.",
            type: "normal"
        },
        {
            title: "Cross-Chain Bitcoin",
            desc: "The new BTC primitive will enable developers to onboard BTC in both wrapped and staked forms",
            type: "coming-soon"
        },
        {
            title: "Tokenized & Institutional Products",
            desc: "We're building a basis trade vault & tokenized options vault with leading institutions",
            type: "coming-soon"
        },
    ]
  return (
    <div>features</div>
  )
}

export default Features