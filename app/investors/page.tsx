import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Check, X, MessageSquare, ShoppingBag, GraduationCap, Bot, Flame } from "lucide-react"
import { InvestorContactForm } from "@/components/investor-contact-form"
import { InvestorFullForm } from "@/components/investor-full-form"
import { TeamMember } from "@/components/team-member"
import { MetricCard } from "@/components/metric-card"
import { FeatureCard } from "@/components/feature-card"
import { TimelineItem } from "@/components/timeline-item"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050A1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#050A1A]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">OnFire Messenger</span>
            </Link>
          </div>
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
            <Link href="/#pricing" className="text-sm text-slate-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/investors" className="text-sm text-orange-500 hover:text-orange-400">
              Investors
            </Link>
          </nav>
          <MobileNav />
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050A1A] via-[#071230] to-[#050A1A]"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                OnFire Messenger Investor Portal
              </h1>
              <p className="text-xl text-slate-300">
                Join us in revolutionizing how people connect, learn, and grow in the digital age
              </p>
            </div>

            <div className="max-w-md mx-auto bg-[#0A1535] rounded-xl border border-blue-800 p-6 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <InvestorContactForm />
            </div>
          </div>
        </section>

        {/* Investment Opportunity Overview */}
        <section className="py-16 bg-[#071230]">
          <div className="container">
            <Card className="bg-[#0A1535] border-blue-800 shadow-xl">
              <CardHeader className="border-b border-blue-800 pb-6">
                <CardTitle className="text-3xl font-bold text-white">$500K Pre-Seed Round</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Delaware C-Corp | AI-Powered Messenger Marketplace | Global Initiative
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MetricCard value="$86B" label="Messaging Market by 2027" />
                  <MetricCard value="95%" label="Creator Revenue Share" />
                  <MetricCard value="85%" label="DAU Retention Rate" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="py-16 bg-[#050A1A]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Highlights</h2>

            <Tabs defaultValue="traction" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#0A1535] mb-8">
                <TabsTrigger value="traction">Traction</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="market">Market</TabsTrigger>
              </TabsList>

              <TabsContent value="traction" className="bg-[#0A1535] p-6 rounded-xl border border-blue-800">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <span>85% daily active user retention in beta program</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <span>4 creators with 6-figure audiences onboarding</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <span>2 educational institutions in partnership discussions</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <span>AI assistant fully integrated and operational</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="product" className="bg-[#0A1535] p-6 rounded-xl border border-blue-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureCard
                    icon={<MessageSquare className="h-8 w-8 text-orange-500" />}
                    title="Unified Messaging"
                    description="Text, voice, and video communication in one platform"
                  />
                  <FeatureCard
                    icon={<ShoppingBag className="h-8 w-8 text-orange-500" />}
                    title="Integrated Marketplace"
                    description="Buy, sell, and manage business through one interface"
                  />
                  <FeatureCard
                    icon={<GraduationCap className="h-8 w-8 text-orange-500" />}
                    title="Education Hub"
                    description="Access courses and learning resources seamlessly"
                  />
                  <FeatureCard
                    icon={<Bot className="h-8 w-8 text-orange-500" />}
                    title="AI Assistance"
                    description="Single-button AI interface for task management"
                  />
                </div>
              </TabsContent>

              <TabsContent value="market" className="bg-[#0A1535] p-6 rounded-xl border border-blue-800">
                <div className="h-96 w-full relative">
                  <div className="absolute inset-0 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">Target Market Opportunity</h3>
                    <p className="text-slate-300 mb-6">Projected market size growth (in billions USD)</p>

                    <div className="flex-1 flex items-end">
                      <div className="w-full flex flex-col">
                        {/* Chart */}
                        <div className="flex-1 flex items-end justify-around">
                          <div className="flex flex-col items-center gap-2">
                            <p className="text-slate-300 text-sm">Messaging</p>
                            <div className="flex items-end gap-1">
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/70 w-12 rounded-t-md" style={{ height: "100px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2025</p>
                                <p className="text-white text-xs font-bold">$86B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/80 w-12 rounded-t-md" style={{ height: "120px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2026</p>
                                <p className="text-white text-xs font-bold">$103B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500 w-12 rounded-t-md" style={{ height: "140px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2027</p>
                                <p className="text-white text-xs font-bold">$124B</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <p className="text-slate-300 text-sm">EdTech</p>
                            <div className="flex items-end gap-1">
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/70 w-12 rounded-t-md" style={{ height: "180px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2025</p>
                                <p className="text-white text-xs font-bold">$404B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/80 w-12 rounded-t-md" style={{ height: "210px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2026</p>
                                <p className="text-white text-xs font-bold">$472B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500 w-12 rounded-t-md" style={{ height: "240px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2027</p>
                                <p className="text-white text-xs font-bold">$550B</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <p className="text-slate-300 text-sm">Social Commerce</p>
                            <div className="flex items-end gap-1">
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/70 w-12 rounded-t-md" style={{ height: "220px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2025</p>
                                <p className="text-white text-xs font-bold">$604B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500/80 w-12 rounded-t-md" style={{ height: "260px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2026</p>
                                <p className="text-white text-xs font-bold">$735B</p>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-orange-500 w-12 rounded-t-md" style={{ height: "300px" }}></div>
                                <p className="text-slate-400 text-xs mt-1">2027</p>
                                <p className="text-white text-xs font-bold">$892B</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-8 flex justify-center gap-6">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500/70 rounded-sm"></div>
                            <span className="text-slate-300 text-sm">2025</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500/80 rounded-sm"></div>
                            <span className="text-slate-300 text-sm">2026</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                            <span className="text-slate-300 text-sm">2027</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* The OnFire Advantage */}
        <section className="py-16 bg-[#071230]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The OnFire Advantage</h2>

            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-[#0A1535]">
                  <TableRow>
                    <TableHead className="text-white">Feature</TableHead>
                    <TableHead className="text-white">OnFire</TableHead>
                    <TableHead className="text-white">Discord</TableHead>
                    <TableHead className="text-white">Patreon</TableHead>
                    <TableHead className="text-white">WhatsApp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-slate-300">Full Messaging</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-slate-300">Creator Monetization</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                    </TableCell>
                    <TableCell className="text-slate-300">Limited</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500" />
                    </TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-slate-300">Creator Revenue Share</TableCell>
                    <TableCell className="text-green-500 font-bold animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                      95%+
                    </TableCell>
                    <TableCell className="text-slate-300">70%</TableCell>
                    <TableCell className="text-slate-300">88%</TableCell>
                    <TableCell className="text-slate-300">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-slate-300">Marketplace</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                    </TableCell>
                    <TableCell className="text-slate-300">Limited</TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-slate-300">AI Assistant</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                    </TableCell>
                    <TableCell className="text-slate-300">Limited</TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                    <TableCell>
                      <X className="h-5 w-5 text-red-500" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Investment Details */}
        <section className="py-16 bg-[#050A1A]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Investment Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-[#0A1535] border-blue-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Pre-Seed Opportunity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-400">Total Round</p>
                    <p className="text-4xl font-bold text-orange-500">$500K</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">17% Committed</span>
                      <span className="text-slate-300">$85K / $500K</span>
                    </div>
                    <Progress value={17} className="h-2 bg-blue-900" indicatorClassName="bg-orange-500" />
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                      <span>Early equity at favorable valuation</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                      <span>Board observer rights through Series A</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                      <span>Clean Delaware C-Corp structure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#0A1535] border-blue-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Use of Funds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 relative">
                    <div className="absolute inset-0">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          {/* Circular border */}
                          <div className="absolute inset-0 rounded-full border-8 border-blue-900"></div>

                          {/* Product Development - 40% */}
                          <div className="absolute inset-0">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                              <path d="M50,50 L50,0 A50,50 0 0,1 100,50 Z" fill="#f97316" />
                            </svg>
                          </div>

                          {/* Creator Acquisition - 30% */}
                          <div className="absolute inset-0">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                              <path d="M50,50 L100,50 A50,50 0 0,1 50,100 Z" fill="#fb923c" />
                            </svg>
                          </div>

                          {/* Marketing - 20% */}
                          <div className="absolute inset-0">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                              <path d="M50,50 L50,100 A50,50 0 0,1 10,75 Z" fill="#fdba74" />
                            </svg>
                          </div>

                          {/* Operations - 10% */}
                          <div className="absolute inset-0">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                              <path d="M50,50 L10,75 A50,50 0 0,1 50,0 Z" fill="#fed7aa" />
                            </svg>
                          </div>

                          {/* Center logo */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-[#0A1535] flex items-center justify-center shadow-lg border-2 border-blue-800">
                              <Flame className="h-8 w-8 text-orange-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">Product Development (40%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Creator Acquisition (30%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                      <span className="text-sm text-slate-300">Marketing (20%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                      <span className="text-sm text-slate-300">Operations (10%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="py-16 bg-[#050A1A]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Investment ROI Calculator</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Comprehensive Financial Modeling</h3>
                <p className="text-slate-300 text-lg">
                  Our investor package includes an interactive ROI calculator that allows you to model various
                  investment scenarios and project potential returns based on different growth trajectories.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Dynamic Investment Modeling</h4>
                      <p className="text-slate-400 text-sm">Adjust investment amounts and see real-time projections</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Multiple Growth Scenarios</h4>
                      <p className="text-slate-400 text-sm">
                        Conservative, moderate, and aggressive growth projections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Exit Strategy Analysis</h4>
                      <p className="text-slate-400 text-sm">Model different exit scenarios and timing options</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Risk Assessment Tools</h4>
                      <p className="text-slate-400 text-sm">Comprehensive risk analysis and sensitivity testing</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800">
                  <p className="text-orange-500 font-medium mb-2">Exclusive Access</p>
                  <p className="text-slate-300 text-sm">
                    This advanced calculator is available exclusively to qualified investors as part of our
                    comprehensive investor package under NDA.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl blur-2xl"></div>
                <div className="relative">
                  <Image
                    src="/images/design-mode/onfire-investor-calculator.png"
                    alt="OnFire Messenger Investor ROI Calculator Dashboard"
                    width={640}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 bg-[#071230]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Roadmap</h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-800"></div>

              <div className="space-y-12">
                <TimelineItem
                  date="Q2 2025"
                  title="Pre-Seed Closing"
                  description="Complete AI integration and creator onboarding tools"
                  position="left"
                />

                <TimelineItem
                  date="Q3 2025"
                  title="Full Launch"
                  description="Public release and accelerated creator acquisition"
                  position="right"
                />

                <TimelineItem
                  date="Q4 2025"
                  title="Marketplace Expansion"
                  description="Enhanced commerce functionality and integration"
                  position="left"
                />

                <TimelineItem
                  date="Q1 2026"
                  title="Series A"
                  description="Scale operations and international expansion"
                  position="right"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-[#050A1A]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember
                name="Alex Podbrezsky"
                role="Founder & CEO"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alex%20portrait%202024-BgrSbmJShazWaGpZpakqK1IJ38vGEC.jpeg"
                bio="Serial entrepreneur with 15+ years in messaging and platform development. Visionary leader focused on transforming digital communication."
              />

              <TeamMember
                name="Stanyslav Rybonka"
                role="Chief Technology Officer"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stanyslav.jpg-3z4YAoZ8Gt2Q7xGFcKLwptSlcJfFNo.jpeg"
                bio="AI and blockchain specialist with extensive experience building scalable systems. Technical architect behind OnFire's innovative platform."
              />

              <TeamMember
                name="Casey McEnry"
                role="Startup Advisor"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casey-mcenry-ggG3AU8reWckerC2IS2sdbvuIU2qEI.png"
                bio="Strategic advisor with deep expertise in community building and creator economies. Former executive at leading social platforms."
              />
              <TeamMember
                name="Max Bilida"
                role="Chief Financial Officer"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/max_bilida-w4o1Mg0ruRWgCeHReEgwxvbUO5atBL.jpeg"
                bio="Financial strategy expert with 12+ years in startup finance and fundraising. Specializes in investor relations, financial modeling, and scaling operations for high-growth technology companies."
              />

              <TeamMember
                name="Joshua Smith"
                role="Chief Marketing Officer"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joshua_smith1.jpg-0HVjvagqSMubIAZewEp5hr6FL8tVqQ.jpeg"
                bio="Growth marketing expert with proven track record in scaling digital platforms. Specializes in creator acquisition and community engagement."
              />
            </div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="py-16 bg-[#050A1A]">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Us</h2>

            <div className="max-w-2xl mx-auto bg-[#0A1535] rounded-xl border border-blue-800 p-8 shadow-xl">
              <InvestorFullForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#071230] border-t border-blue-900/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} OnFire Messenger. All information provided is confidential.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-slate-400 hover:text-orange-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-orange-500 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
