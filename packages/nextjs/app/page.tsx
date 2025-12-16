import type { NextPage } from "next";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  CheckIcon,
  ClockIcon,
  CodeBracketIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  LightBulbIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.06)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(74,124,188,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Enterprise badge */}
            <div className="enterprise-badge mb-10">
              <BuildingOffice2Icon className="h-4 w-4" />
              Enterprise Training Program
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-8">
              Ethereum Application
              <br />
              <span className="gradient-text">Developer Certification</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed">
              Upskill your technology teams with institutional-grade training in Ethereum application development.
              Designed for banks, asset managers, and Fortune 500 companies entering the digital asset space.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact" className="btn btn-primary px-10 py-4 text-base">
                Request Program Details
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </a>
              <a href="#curriculum" className="btn btn-outline px-10 py-4 text-base">
                View Curriculum
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 text-sm text-white/40">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="h-5 w-5 text-[#c9a227]" />
                <span>Compliance-Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <LockClosedIcon className="h-5 w-5 text-[#c9a227]" />
                <span>Security-First</span>
              </div>
              <div className="flex items-center gap-3">
                <DocumentCheckIcon className="h-5 w-5 text-[#c9a227]" />
                <span>Verifiable Credentials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] shrink-0">Developed in Partnership With</p>
            <div className="flex items-center gap-6 lg:gap-8">
              <a
                href="https://ethereum.foundation/"
                target="_blank"
                rel="noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_ef.svg" alt="Ethereum Foundation" className="h-10 lg:h-12" />
              </a>
              <div className="h-8 w-px bg-white/20" />
              <a
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_bg.svg" alt="BuidlGuidl" className="h-8 lg:h-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                The Institutional Shift to Blockchain is Accelerating
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Global financial institutions are rapidly adopting Ethereum for tokenization, settlement, and digital
                asset infrastructure. Your teams need the expertise to build, evaluate, and manage blockchain-based
                systems.
              </p>
              <a href="https://institutions.ethereum.org" target="_blank" rel="noreferrer" className="arrow-link">
                Explore Institutional Ethereum <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "$172B", label: "Stablecoin TVL", sublabel: "57%+ on Ethereum" },
                { value: "$68B+", label: "DeFi TVL", sublabel: "Market leadership" },
                { value: "10+", label: "Years Uptime", sublabel: "Zero downtime" },
                { value: "$105B", label: "Network Security", sublabel: "Staked value" },
              ].map((stat, index) => (
                <div key={index} className="stat-block">
                  <p className="text-3xl lg:text-4xl font-semibold text-white mb-1">{stat.value}</p>
                  <p className="text-white/70 font-medium m-0">{stat.label}</p>
                  <p className="text-white/40 text-sm m-0">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line max-w-7xl mx-auto" />

      {/* Value Proposition */}
      <section id="why-adc" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Why Leading Institutions Choose Our Program
            </h2>
            <p className="text-lg text-white/50">
              Purpose-built training that meets the rigorous standards of regulated financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Compliance-Aligned Curriculum",
                description:
                  "Training modules designed with regulatory requirements in mind. Covers KYC/AML considerations, audit trails, and institutional best practices.",
              },
              {
                icon: UserGroupIcon,
                title: "Private Enterprise Cohorts",
                description:
                  "Dedicated programs for your organization. Onsite or virtual delivery with customized content aligned to your technology stack and use cases.",
              },
              {
                icon: AcademicCapIcon,
                title: "Practitioner-Led Instruction",
                description:
                  "Learn from engineers who have deployed production systems. Instructors from the Ethereum Foundation and leading protocol teams.",
              },
              {
                icon: LockClosedIcon,
                title: "Security-First Methodology",
                description:
                  "Threat modeling, vulnerability assessment, and incident response integrated throughout. Prepare teams to build secure, auditable systems.",
              },
              {
                icon: DocumentCheckIcon,
                title: "Verifiable Credentials",
                description:
                  "On-chain certifications that verify competency. Transparent skill validation for internal mobility and external hiring decisions.",
              },
              {
                icon: RocketLaunchIcon,
                title: "Production-Ready Skills",
                description:
                  "Move beyond theory. Capstone projects deploy to testnets and integrate with real infrastructure providers and L2 networks.",
              },
            ].map((item, index) => (
              <div key={index} className="feature-highlight">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 m-0 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line max-w-7xl mx-auto" />

      {/* Program Structure */}
      <section id="program" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">Structured Learning Path</h2>
            <p className="text-lg text-white/50">
              A proven methodology that transforms technical teams into blockchain-capable units.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Comprehensive evaluation of current capabilities. Custom learning paths based on roles: engineers, architects, security, product.",
                icon: LightBulbIcon,
              },
              {
                step: "02",
                title: "Foundations",
                description:
                  "Core blockchain concepts, Ethereum architecture, and smart contract fundamentals. Hands-on labs from day one.",
                icon: BeakerIcon,
              },
              {
                step: "03",
                title: "Specialization",
                description:
                  "Deep dives into DeFi, tokenization, L2 scaling, and security. Role-specific tracks with graded assessments.",
                icon: CodeBracketIcon,
              },
              {
                step: "04",
                title: "Certification",
                description:
                  "Capstone project deployment. Verified on-chain credentials demonstrating production-ready competency.",
                icon: AcademicCapIcon,
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#0a1628] p-8">
                <span className="step-indicator">{item.step}</span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-white/50 m-0 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line max-w-7xl mx-auto" />

      {/* Curriculum */}
      <section id="curriculum" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">Curriculum Modules</h2>
            <p className="text-lg text-white/50">
              Modular content that can be customized for your organization&apos;s specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              {
                title: "Blockchain Fundamentals",
                topics: "Consensus, cryptography, distributed systems, EVM architecture",
              },
              {
                title: "Smart Contract Development",
                topics: "Solidity, testing frameworks, upgradability patterns, gas optimization",
              },
              {
                title: "DeFi Protocols",
                topics: "AMMs, lending, derivatives, liquidity management, oracle integration",
              },
              {
                title: "Asset Tokenization",
                topics: "RWA frameworks, custody solutions, compliance patterns, settlement",
              },
              {
                title: "Stablecoin Architecture",
                topics: "Collateralization models, peg mechanisms, risk controls, regulatory alignment",
              },
              { title: "Layer 2 Scaling", topics: "Rollups, bridges, sequencing, cross-chain communication" },
              {
                title: "Security & Auditing",
                topics: "Threat modeling, common vulnerabilities, audit processes, monitoring",
              },
              {
                title: "Infrastructure & DevOps",
                topics: "Node operations, RPC providers, indexing, reliability engineering",
              },
              {
                title: "Capstone Project",
                topics: "End-to-end deployment of a production-grade institutional application",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#0a1628] p-6 hover:bg-white/[0.02] transition-colors">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm m-0">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <span className="quote-accent absolute -top-4 -left-2">&ldquo;</span>
            <blockquote className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-10 relative z-10">
              All of this growth will happen on Ethereum because TradFi trusts Ethereum. For TradFi, trustworthiness
              trumps marginal speed and cost savings every day of the week.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-white font-semibold">GK</div>
              <div>
                <p className="text-white font-semibold m-0">Geoffrey Kendrick</p>
                <p className="text-white/40 text-sm m-0">Global Head of Digital Assets Research</p>
                <p className="text-white/30 text-sm m-0">Standard Chartered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">Schedule a Consultation</h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                Discuss your organization&apos;s blockchain education requirements with our enterprise team. We&apos;ll
                design a program tailored to your technology stack, use cases, and compliance needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  className="btn btn-primary px-10 py-4 text-base"
                  href="https://calendly.com/austintgriffith/eadc-ethereum-application-developer-certification"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Book a Call
                </a>
                <a
                  className="btn btn-outline px-10 py-4 text-base"
                  href="mailto:austin.griffith@ethereum.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact via Email
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3 text-white/50">
                  <GlobeAltIcon className="h-5 w-5 text-[#c9a227]" />
                  <span>Global Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <ClockIcon className="h-5 w-5 text-[#c9a227]" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <BuildingOffice2Icon className="h-5 w-5 text-[#c9a227]" />
                  <span>Onsite Available</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <UserGroupIcon className="h-5 w-5 text-[#c9a227]" />
                  <span>Teams of 5-50+</span>
                </div>
              </div>
            </div>

            <div className="corp-card p-10 glow-subtle">
              <h3 className="text-xl font-semibold text-white mb-8">Enterprise Program Includes</h3>
              <ul className="space-y-5">
                {[
                  "Customized curriculum aligned to your use cases",
                  "Private cohorts with dedicated instruction",
                  "Executive briefings on blockchain strategy",
                  "Security and compliance module customization",
                  "Team progress dashboards and reporting",
                  "Ongoing technical support post-certification",
                  "Verifiable on-chain credentials",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckIcon className="h-5 w-5 text-[#c9a227] mt-0.5 shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
