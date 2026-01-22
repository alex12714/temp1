import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flame, ArrowRight, Shield, Zap, Users, TrendingUp, Lock, Coins, Award, Globe } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function FireProofPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050A1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-orange-900/30 bg-[#050A1A]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">OnFire Messenger</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-sm text-slate-300 hover:text-white">
              Features
            </Link>
            <Link href="/#communities" className="text-sm text-slate-300 hover:text-white">
              Communities
            </Link>
            <Link href="/#marketplace" className="text-sm text-slate-300 hover:text-white">
              Marketplace
            </Link>
            <Link href="/fireproof" className="text-sm text-orange-500 hover:text-orange-400 font-semibold">
              🔥 FireProof
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
            <Link href="https://refer.onfire.so/">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                Sign Up
              </Button>
            </Link>
          </div>
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="relative overflow-hidden">
          {/* Banner Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/images/fireproof-banner.png"
              alt="FireProof Token Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A1A]/50 to-[#050A1A]"></div>
          </div>

          {/* Hero Content */}
          <div className="relative -mt-32 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <span className="text-orange-400 font-semibold">FireProof Token (PROOF)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full mb-4 animate-pulse">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-bold text-lg">PRESALE LIVE NOW</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  The Future of Private Communication & Decentralized Finance
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                  Built on Solana. Powering OnFire Messenger. Enabling secure communication and seamless global
                  transactions with integrated payment cards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://www.pinksale.finance/solana/launchpad/AqkaR6QhXLRV2nhN2DpyCyJi1RMQo9QH8Na4cvPmMTKs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    >
                      Join Presale on PinkSale <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/FireProof-Whitepaper.pdf" download>
                    <Button size="lg" variant="outline" className="text-white border-orange-500/50 bg-transparent">
                      Download Whitepaper
                    </Button>
                  </a>
                </div>

                {/* Token Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-12">
                  {[
                    { label: "Token Symbol", value: "PROOF" },
                    { label: "Blockchain", value: "Solana" },
                    { label: "Presale Date", value: "Oct 13-20, 2025" },
                    { label: "Hard Cap", value: "200 SOL" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all"
                    >
                      <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                      <p className="text-white text-xl font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                The Problem We're <span className="text-orange-500">Solving</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">
                Modern communication and financial platforms face critical challenges
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="h-10 w-10 text-orange-500" />,
                    title: "Privacy Crisis",
                    description:
                      "User conversations are monitored, stored, and monetized. Data breaches have become normalized, eroding fundamental privacy rights.",
                  },
                  {
                    icon: <Zap className="h-10 w-10 text-orange-500" />,
                    title: "Crypto Usability Gap",
                    description:
                      "Despite widespread adoption, spending crypto remains difficult. Complex exchanges and limited acceptance create barriers.",
                  },
                  {
                    icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
                    title: "Value Extraction",
                    description:
                      "Traditional platforms extract value through data mining while users receive no benefit from network growth.",
                  },
                ].map((problem, index) => (
                  <div key={index} className="bg-blue-900/50 rounded-xl p-8 border border-blue-800">
                    <div className="mb-4 p-3 bg-orange-500/10 rounded-lg inline-block">{problem.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-slate-300">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-[#050A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Our <span className="text-orange-500">Solution</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">
                FireProof combines four core components into a unified ecosystem
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  {[
                    {
                      icon: <Lock className="h-6 w-6 text-orange-500" />,
                      title: "Secure Messaging",
                      description:
                        "End-to-end encrypted communications with no data storage or surveillance on a decentralized architecture.",
                    },
                    {
                      icon: <Coins className="h-6 w-6 text-orange-500" />,
                      title: "Payment Integration",
                      description:
                        "Visa and Mastercard compatible cards with instant crypto-to-fiat conversion for 40M+ merchants globally.",
                    },
                    {
                      icon: <Globe className="h-6 w-6 text-orange-500" />,
                      title: "Marketplace",
                      description:
                        "P2P transactions within messenger for digital goods and services with built-in escrow protection.",
                    },
                    {
                      icon: <Award className="h-6 w-6 text-orange-500" />,
                      title: "Value Sharing",
                      description:
                        "Token holders benefit from network growth through staking rewards, burns, and community governance.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-lg h-fit">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
                  <Image
                    src="/images/onfire-wallet-cards.png"
                    alt="OnFire Messenger Payment Cards"
                    width={600}
                    height={400}
                    className="relative rounded-xl border border-orange-500/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Economics */}
        <section className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Token <span className="text-orange-500">Economics</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">Deflationary design with locked liquidity</p>

              {/* Token Details */}
              <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Token Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Name", value: "FireProof" },
                    { label: "Ticker", value: "PROOF" },
                    { label: "Blockchain", value: "Solana (SPL Token)" },
                    { label: "Decimals", value: "6" },
                    { label: "Contract", value: "Dc48bjHeycsJ1a3VnxDY1g3XiciLiHzHrjAeN112yiKc", span: true },
                  ].map((item, index) => (
                    <div key={index} className={item.span ? "md:col-span-2" : ""}>
                      <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                      <p className="text-white font-mono text-lg break-all">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supply Allocation */}
              <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Supply Allocation</h3>
                <div className="space-y-4">
                  {[
                    { label: "CEX", value: "10%", amount: "2,100,000", desc: "Centralized exchange listings" },
                    { label: "Team", value: "13%", amount: "2,730,000", desc: "12-month lock, 24-month vesting" },
                    {
                      label: "DApp Development",
                      value: "14%",
                      amount: "2,940,000",
                      desc: "Platform development and features",
                    },
                    { label: "NFT", value: "7%", amount: "1,470,000", desc: "NFT marketplace and rewards" },
                    {
                      label: "Community Reward",
                      value: "4%",
                      amount: "840,000",
                      desc: "Community incentives and airdrops",
                    },
                    { label: "Buyback", value: "4%", amount: "840,000", desc: "Token buyback program" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-blue-800 last:border-0"
                    >
                      <div>
                        <p className="text-white font-semibold">{item.label}</p>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-orange-500 text-xl font-bold">{item.value}</p>
                        <p className="text-slate-400 text-sm">{item.amount} tokens</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deflationary Mechanisms */}
              <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Deflationary Mechanisms</h3>
                <ul className="space-y-3">
                  {[
                    "Unsold presale tokens automatically burned",
                    "0.5% transaction fee with partial burns",
                    "Marketplace fees used for buyback and burn",
                    "Quarterly burns from revenue generation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Flame className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Utility & Use Cases */}
        <section className="py-20 bg-[#050A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Utility & <span className="text-orange-500">Use Cases</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">Real-world applications powering the ecosystem</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Coins className="h-8 w-8 text-orange-500" />,
                    title: "Payment Cards",
                    features: [
                      "Virtual and physical card issuance",
                      "1-3% cashback in PROOF",
                      "No monthly fees for holders",
                      "Global ATM withdrawals",
                    ],
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-orange-500" />,
                    title: "Premium Features",
                    features: [
                      "Unlimited encrypted calls",
                      "Large file transfers (10GB)",
                      "Custom themes and bots",
                      "Priority support",
                    ],
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-orange-500" />,
                    title: "Marketplace",
                    features: [
                      "All purchases in PROOF",
                      "Lower transaction fees",
                      "Seller rewards in PROOF",
                      "Automated escrow",
                    ],
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
                    title: "Staking Rewards",
                    features: [
                      "Earn passive yield",
                      "Support network infrastructure",
                      "Increased cashback tiers",
                      "Enhanced governance weight",
                    ],
                  },
                  {
                    icon: <Users className="h-8 w-8 text-orange-500" />,
                    title: "Governance",
                    features: [
                      "Vote on new features",
                      "Propose partnerships",
                      "Treasury allocation",
                      "Shape platform future",
                    ],
                  },
                  {
                    icon: <Award className="h-8 w-8 text-orange-500" />,
                    title: "Rewards Program",
                    features: ["Transaction cashback", "Referral bonuses", "Loyalty incentives", "Community rewards"],
                  },
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-blue-900/50 rounded-xl p-6 border border-blue-800 hover:border-orange-500/50 transition-all"
                  >
                    <div className="mb-4 p-3 bg-orange-500/10 rounded-lg inline-block">{useCase.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Presale Details */}
        <section className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Presale <span className="text-orange-500">Details</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">Fair launch with anti-whale protection</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Presale Information</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Platform", value: "PinkSale (Solana)" },
                      { label: "Duration", value: "October 13-20, 2025 (7 days)" },
                      { label: "Hard Cap", value: "200 SOL" },
                      { label: "Soft Cap", value: "140 SOL" },
                    ].map((item, index) => (
                      <div key={index}>
                        <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                        <p className="text-white font-semibold text-lg">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Rates & Pricing</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Presale Rate", value: "1 SOL = 1000 PROOF" },
                      { label: "Listing Rate", value: "1 SOL = 875 PROOF" },
                      { label: "Presale Advantage", value: "~14% bonus vs listing" },
                    ].map((item, index) => (
                      <div key={index}>
                        <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                        <p className="text-white font-semibold text-lg">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Contribution Limits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Minimum</p>
                    <p className="text-white font-semibold text-2xl">0.5 SOL per wallet</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Maximum</p>
                    <p className="text-white font-semibold text-2xl">5 SOL per wallet</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Security Features</h3>
                <ul className="space-y-3">
                  {[
                    "51% of raised SOL locked as liquidity for 1096 days",
                    "Unsold tokens automatically burned",
                    "Auto-listing on Raydium AMM V5",
                    "Fair launch with strict whale protection",
                    "Transparent smart contract operations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://www.pinksale.finance/solana/launchpad/AqkaR6QhXLRV2nhN2DpyCyJi1RMQo9QH8Na4cvPmMTKs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                  >
                    Join Presale Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 bg-[#050A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Development <span className="text-orange-500">Roadmap</span>
              </h2>
              <p className="text-slate-400 text-center mb-16 text-lg">Our path to mainstream adoption</p>

              <div className="space-y-8">
                {[
                  {
                    quarter: "Q4 2025",
                    title: "Foundation",
                    items: [
                      "Token deployment on Solana",
                      "Presale launch on PinkSale (Oct 13-20)",
                      "Raydium DEX listing (Oct 20)",
                      "Virtual card beta program (1,000 users)",
                      "OnFire Messenger beta launch",
                      "Initial marketing campaign rollout",
                    ],
                  },
                  {
                    quarter: "Q1 2026",
                    title: "Expansion",
                    items: [
                      "Physical card rollout (global availability)",
                      "Marketplace platform launch",
                      "Staking platform goes live",
                      "Target: 10,000+ active users",
                      "First centralized exchange listings",
                    ],
                  },
                  {
                    quarter: "Q2 2026",
                    title: "Acceleration",
                    items: [
                      "Apple Pay / Google Pay integration",
                      "Corporate card solutions launch",
                      "Mobile applications (iOS/Android release)",
                      "Target: 50,000+ active users",
                      "Major marketing expansion",
                    ],
                  },
                  {
                    quarter: "Q3 2026",
                    title: "Scaling",
                    items: [
                      "Multi-chain bridge (Ethereum, BSC)",
                      "DeFi integrations (lending/borrowing)",
                      "NFT marketplace integration",
                      "Target: 100,000+ active users",
                      "Goal: $100M+ market capitalization",
                    ],
                  },
                  {
                    quarter: "Q4 2026",
                    title: "Maturity",
                    items: [
                      "Global expansion (Asia, Europe focus)",
                      "Enterprise partnership programs",
                      "Advanced governance features",
                      "Target: 250,000+ active users",
                      "Top-tier exchange listings (Binance, Coinbase)",
                    ],
                  },
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="bg-blue-900/30 border border-orange-500/20 rounded-xl p-8 hover:border-orange-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-orange-500/10 px-4 py-2 rounded-full">
                        <span className="text-orange-500 font-bold">{phase.quarter}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#071230] to-[#050A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Flame className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the FireProof Revolution</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Secure your position in the presale before the messenger launches. Be part of the future of private
                communication and decentralized finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.pinksale.finance/solana/launchpad/AqkaR6QhXLRV2nhN2DpyCyJi1RMQo9QH8Na4cvPmMTKs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                  >
                    Participate in Presale
                  </Button>
                </a>
                <a href="/FireProof-Whitepaper.pdf" download>
                  <Button size="lg" variant="outline" className="text-white border-orange-500/50 bg-transparent">
                    Download Whitepaper
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-blue-800">
                <p className="text-slate-400 mb-4">Join our community</p>
                <div className="flex gap-6 justify-center flex-wrap">
                  <a
                    href="https://t.me/onfiremessenger1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Telegram Channel
                  </a>
                  <a
                    href="https://t.me/fireprooftoken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Telegram Group
                  </a>
                  <a
                    href="https://discord.gg/38n28brw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Discord
                  </a>
                  <a
                    href="https://twitter.com/OnFireMessenger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Twitter/X
                  </a>
                  <a
                    href="https://instagram.com/onfire.messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/onfire.messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#071230] border-t border-orange-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold text-white">OnFire Messenger</span>
              </div>
              <p className="text-slate-400 mb-4">Powering the future of private communication and finance.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#features" className="text-slate-400 hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#communities" className="text-slate-400 hover:text-orange-500">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="/#marketplace" className="text-slate-400 hover:text-orange-500">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-slate-400 hover:text-orange-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="https://developers.onfire.so" className="text-slate-400 hover:text-orange-500">
                    Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-orange-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="text-slate-400 hover:text-orange-500">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-orange-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms-of-service" className="text-slate-400 hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-slate-400 hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-slate-400 hover:text-orange-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-900/30 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} OnFire Messenger Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
