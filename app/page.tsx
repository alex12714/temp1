import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Flame,
  MessageSquare,
  BookOpen,
  Target,
  DollarSign,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Percent,
  ShieldCheck,
  Clock,
  Database,
  Headphones,
  Sparkles,
  Settings,
  CreditCard,
  Wallet,
  Zap,
} from "lucide-react"
import { PricingSection } from "@/components/pricing-section"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050A1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#050A1A]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">OnFire Messenger</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm text-slate-300 hover:text-white">
              Features
            </Link>
            <Link href="#communities" className="text-sm text-slate-300 hover:text-white">
              Communities
            </Link>
            <Link href="#marketplace" className="text-sm text-slate-300 hover:text-white">
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
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050A1A] via-[#071230] to-[#050A1A]"></div>

          {/* Moving glowing orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/5 rounded-full blur-2xl animate-bounce delay-500"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500/30 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-red-500/40 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-orange-400/35 rounded-full animate-ping delay-1200"></div>
            <div className="absolute bottom-20 right-32 w-1 h-1 bg-orange-500/25 rounded-full animate-ping delay-900"></div>
            <div className="absolute top-60 left-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-ping delay-1500"></div>
            <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-orange-300/20 rounded-full animate-ping delay-600"></div>
          </div>

          {/* Moving gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-y-12 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Messaging. Education. Marketplace. All In One.
                </h1>
                <p className="text-xl md:text-2xl font-medium text-slate-200">Complete AI Messenger to run your day</p>
                <p className="text-slate-400 max-w-md">
                  OnFire Messenger connects you with everyone while handling your daily tasks through a single,
                  streamlined experience that fuses messaging, education, business and commerce.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="https://refer.onfire.so/">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    >
                      Get Started Free
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="text-white border-slate-700 bg-transparent">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[200px] md:max-w-[250px]">
                    <Image
                      src="/images/design-mode/main-image2.png"
                      alt="OnFire Messenger App Interface"
                      width={300}
                      height={520}
                      className="object-contain drop-shadow-2xl w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              One Platform, <span className="text-orange-500">Endless Possibilities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-10 w-10 text-orange-500" />,
                  title: "For Users",
                  description: "One daily driver for all messaging, learning, and organization—no distractions",
                },
                {
                  icon: <Users className="h-10 w-10 text-orange-500" />,
                  title: "For Community Leaders",
                  description:
                    "Built-in tools for engagement, content delivery, and monetization with higher revenue shares",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
                  title: "For Business & Education",
                  description:
                    "A revenue, advertising and content-driven ecosystem designed to connect people, grow, and profit",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-blue-900/50 rounded-xl p-8 border border-blue-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FireProof Card Section */}
        <section className="py-20 bg-[#050A1A] relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Spend Your <span className="text-orange-500">FireProof</span> Anywhere
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Get paid, earn rewards, and spend your FireProof tokens in the real world with the integrated OnFire
                Card
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-900">
                  <Image
                    src="/images/fireproof-card.png"
                    alt="FireProof Payment Cards"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <CreditCard className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Physical & Virtual Cards</h3>
                    <p className="text-slate-300">
                      Get both physical and virtual Mastercard-powered cards linked directly to your FireProof wallet.
                      Spend anywhere cards are accepted worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <Wallet className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Instant Crypto-to-Fiat Conversion</h3>
                    <p className="text-slate-300">
                      Your FireProof tokens are automatically converted to local currency at the point of sale. No
                      delays, no hassle - just seamless spending.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Earn Cashback in PROOF</h3>
                    <p className="text-slate-300">
                      Get 1-3% cashback on every purchase, paid directly in FireProof tokens. The more you hold, the
                      higher your cashback tier.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Get Paid Directly to Your Card</h3>
                    <p className="text-slate-300">
                      Receive payments from the marketplace, community earnings, and staking rewards directly to your
                      OnFire Card. Your crypto earnings become immediately spendable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-world usage image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Use It <span className="text-orange-500">Everywhere</span>
                </h3>
                <p className="text-slate-300 text-lg">
                  From your morning coffee to monthly subscriptions, use your OnFire Card anywhere Mastercard is
                  accepted. 40+ million merchants worldwide, online and offline.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Restaurants, cafes, and retail stores
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Online shopping and subscriptions
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    ATM withdrawals globally
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Travel and accommodation
                  </li>
                </ul>
                <Link href="/fireproof">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                    Learn About FireProof Token
                  </Button>
                </Link>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-900">
                  <Image
                    src="/images/cafe-payment.jpg"
                    alt="Using OnFire Card at cafe"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All-in-One Platform */}
        <section className="py-20 bg-[#071230] relative overflow-hidden">
          {/* Subtle background animation */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  One App to <span className="text-orange-500">Run It All</span>
                </h2>
                <p className="text-slate-300 mb-8">
                  OnFire is more than just a messenger - it's a complete ecosystem that brings together all your digital
                  needs with a single button AI interface that simplifies everything.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg mt-1">
                      <MessageSquare className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Full-Featured Messenger</h3>
                      <p className="text-slate-400">
                        Connect with everyone in your life through text, voice, and video - all in one place.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg mt-1">
                      <BookOpen className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Education Hub</h3>
                      <p className="text-slate-400">
                        Access courses, communities, and learning resources without switching apps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg mt-1">
                      <DollarSign className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business & Marketplace</h3>
                      <p className="text-slate-400">
                        Buy, sell, and manage your business all through the same interface you use daily.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg mt-1">
                      <Sparkles className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI-Powered Assistance</h3>
                      <p className="text-slate-400">
                        A single button AI interface that helps you manage tasks, find information, and automate your
                        workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-[#0A1535] border border-blue-800 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                        <Flame className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-white">OnFire Assistant</h3>
                    </div>
                    <div className="bg-blue-900/50 px-3 py-1 rounded-full text-xs text-white">AI Powered</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-slate-300 text-sm">How can I help you today?</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <p className="text-slate-300 text-sm">
                        Schedule a meeting with the marketing team for tomorrow at 2pm
                      </p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-slate-300 text-sm">
                        I've scheduled your meeting with the marketing team for tomorrow at 2:00 PM. I've also sent
                        calendar invites to all team members. Would you like me to prepare an agenda?
                      </p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <p className="text-slate-300 text-sm">
                        Yes, include the Q3 campaign review and new product launch
                      </p>
                    </div>
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-slate-300 text-sm">
                        Done! I've created an agenda with those topics and attached the latest campaign metrics to the
                        invite. Anything else you need?
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      placeholder="Ask OnFire anything..."
                      className="w-full bg-blue-900/20 border border-blue-800 rounded-full px-4 py-2 pr-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <Button size="sm" className="absolute right-1 top-1 h-7 w-7 rounded-full p-0 bg-orange-500">
                      <Sparkles className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Leaders Benefits */}
        <section id="communities" className="py-20 bg-[#050A1A]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              For Community Leaders & Creators
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
              Build, grow, and monetize your community with powerful tools designed for creators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="h-8 w-8 text-orange-500" />,
                  title: "Boost Your Earnings",
                  description:
                    "Diversify revenue streams through courses, memberships, and digital products all in one platform.",
                },
                {
                  icon: <Percent className="h-8 w-8 text-orange-500" />,
                  title: "Keep More of What You Earn",
                  description:
                    "Enjoy higher revenue share percentages as a founding creator with our permanently locked-in lower rates.",
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
                  title: "Zero Risk Transition",
                  description: "Receive a minimum earnings guarantee during your switch to our platform.",
                },
                {
                  icon: <Users className="h-8 w-8 text-orange-500" />,
                  title: "Grow Your Audience Faster",
                  description: "Tap into our cross-promotion network to discover new followers and community members.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-orange-500" />,
                  title: "No Upfront Costs",
                  description: "Pay zero platform fees for your first 3-6 months as an early adopter.",
                },
                {
                  icon: <Database className="h-8 w-8 text-orange-500" />,
                  title: "Own Your Success",
                  description:
                    "Maintain complete ownership of your content and audience data with our data portability guarantee.",
                },
                {
                  icon: <Headphones className="h-8 w-8 text-orange-500" />,
                  title: "Dedicated Support",
                  description:
                    "Work with a personal onboarding specialist to optimize your community setup and growth strategy.",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-orange-500" />,
                  title: "Featured Promotion",
                  description:
                    "Showcase your brand in our launch marketing campaigns to accelerate visibility and growth.",
                },
                {
                  icon: <Settings className="h-8 w-8 text-orange-500" />,
                  title: "Shape the Platform",
                  description: "Gain early access to new features and direct input into development priorities.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-blue-900/50 rounded-xl p-6 border border-blue-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section id="features" className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Powerful Features</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
              Discover how OnFire Messenger transforms the way you connect, learn, and grow with these innovative
              features.
            </p>

            <div className="space-y-24">
              {/* Messaging Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <MessageSquare className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Seamless Communication</h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Connect with friends, family, and colleagues through secure, encrypted messaging. Share moments,
                    coordinate plans, and stay in touch with everyone that matters - all in one place.
                  </p>
                  <Link
                    href="#"
                    className="text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-blue-900 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl"></div>
                  <Image
                    src="/images/onfire-chat.png"
                    alt="OnFire Messenger Chat Interface"
                    width={600}
                    height={800}
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>

              {/* Learning Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <BookOpen className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Learning & Development</h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Join interactive communities designed for education and self-improvement. Access structured courses,
                    connect with mentors, and have all your learning resources at your fingertips without switching
                    apps.
                  </p>
                  <Link
                    href="#"
                    className="text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-blue-900 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl"></div>
                  <Image
                    src="/images/onfire-studying.png"
                    alt="Student using OnFire Messenger for learning"
                    width={600}
                    height={800}
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>

              {/* Goal Management Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Target className="h-8 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Goal Management</h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Set and achieve your goals with guided coaching and progress tracking. Build healthy habits, track
                    your daily routines, and get support from communities that understand your journey.
                  </p>
                  <Link
                    href="#"
                    className="text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-blue-900 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl"></div>
                  <Image
                    src="/images/user-habits.png"
                    alt="OnFire Messenger Habits Tracking Screen"
                    width={600}
                    height={800}
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>

              {/* Monetization Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <DollarSign className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Monetization Tools</h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Create paid communities and sell physical products directly through the platform. Turn your
                    expertise into income with built-in payment processing, subscription management, and marketplace
                    integration.
                  </p>
                  <Link
                    href="#"
                    className="text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-blue-900 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl"></div>
                  <Image
                    src="/monetization-dashboard-with-revenue-charts.jpg"
                    alt="Monetization Tools Dashboard"
                    width={600}
                    height={400}
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#050A1A]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">How It Works</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
              Getting started with OnFire Messenger is simple. Follow these steps to transform how you connect and grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Your Account",
                  description: "Sign up and set up your profile in minutes to start your OnFire journey.",
                  icon: <Users className="h-10 w-10 text-orange-500" />,
                },
                {
                  step: "02",
                  title: "Join Communities",
                  description: "Discover and join communities that match your interests and goals.",
                  icon: <Users className="h-10 w-10 text-orange-500" />,
                },
                {
                  step: "03",
                  title: "Connect & Grow",
                  description: "Engage with content, connect with others, and track your progress.",
                  icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-blue-900 rounded-xl p-8 border border-blue-800 h-full">
                    <div className="text-4xl font-bold text-orange-500/20 mb-4">{step.step}</div>
                    <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-orange-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#071230]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">What Our Users Say</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
              Join thousands of satisfied users who have transformed how they connect and grow with OnFire Messenger.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  quote:
                    "OnFire has completely changed how I manage my daily communications and learning. Everything in one place is a game-changer.",
                  name: "Sarah Johnson",
                  role: "Marketing Professional",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "As a community leader, the built-in monetization tools have allowed me to turn my passion into a sustainable business.",
                  name: "Michael Chen",
                  role: "Fitness Community Leader",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The integrated learning platform has transformed how we deliver educational content to our students.",
                  name: "Dr. Emily Rodriguez",
                  role: "Education Director",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "OnFire's marketplace integration helped us reach new customers and grow our business by 200% in just six months.",
                  name: "David Williams",
                  role: "Small Business Owner",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-indigo-900 rounded-xl p-6 border border-blue-900 hover:border-orange-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* Final CTA Section */}
        <section id="marketplace" className="py-20 bg-gradient-to-br from-[#071230] to-[#050A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform How You Connect, Learn, and Grow?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Join thousands of users who have already discovered the power of an all-in-one platform for messaging,
                education, and commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://refer.onfire.so/">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-slate-700 bg-transparent">
                  Contact Sales for Enterprise
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#071230] border-t border-blue-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold text-white">OnFire Messenger</span>
              </div>
              <p className="text-slate-400 mb-4">The next generation of structured, high-impact digital interaction.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-slate-400 hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-slate-400 hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#communities" className="text-slate-400 hover:text-orange-500">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" className="text-slate-400 hover:text-orange-500">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-slate-400 hover:text-orange-500">
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
                  <Link href="#" className="text-slate-400 hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="text-slate-400 hover:text-orange-500">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-orange-500">
                    Press
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
              <h4 className="text-white font-bold mb-4">Subscribe</h4>
              <p className="text-slate-400 mb-4">Stay updated with the latest features and releases.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-blue-900 border border-blue-800 rounded-l-md px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} OnFire Messenger. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms-of-service" className="text-slate-400 hover:text-orange-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-orange-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-slate-400 hover:text-orange-500 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
