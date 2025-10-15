import type { NextPage } from "next";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  CubeTransparentIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h1 className="text-5xl font-bold tracking-tight pb-4">
                Ethereum Application <br /> Developer Certification
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/85" style={{ maxWidth: "500px" }}>
                Equip your team with advanced training in onchain application development, mastering smart contracts,
                decentralized exchanges, real-world assets, stablecoins, and security. Structured for institutional
                requirements — compliant, resilient, and deployment-ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#curriculum" className="btn btn-primary gap-2 shadow-lg text-black">
                  View curriculum
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-[#0b1f44]"
                >
                  Talk to our team
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Up-to-date</span>
                </div>
                <div className="flex items-center gap-2">
                  <BeakerIcon className="h-4 w-4" />
                  <span>Lab‑driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="h-4 w-4" />
                  <span>Certification included</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl p-6 shadow-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-3">
                  <BuildingOffice2Icon className="h-6 w-6" />
                  <p className="m-0 font-medium">Built for enterprises</p>
                </div>
                <ul className="mt-4 space-y-3 text-white/85">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Private, tailored cohorts (onsite or virtual) </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Team dashboards and progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Auto-graded challenges and portfolio builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 mt-0.5" />
                    <span>Security reviews and best practices built in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section id="why-adc" className="bg-base-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-[#F6F1FF] hover:shadow-base-200 hover:scale-105 hover:border-accent">
              <BeakerIcon className="h-6 w-6 text-blue-800" />
              <p className="mt-3 font-semibold text-neutral">Hands‑on by design</p>
              <p className="m-0 text-base-content/80">
                Short theory, long labs. Ship smart contracts, scripts, and dashboards from day one.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-[#F6F1FF] hover:shadow-base-200 hover:scale-105 hover:border-accent">
              <AcademicCapIcon className="h-6 w-6 text-blue-800" />
              <p className="mt-3 font-semibold text-neutral">Taught by practitioners</p>
              <p className="m-0 text-base-content/80">
                Mainnet experts from the Ethereum Foundation, BuidlGuidl, and the Ethereum ecosystem.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-[#F6F1FF] hover:shadow-base-200 hover:scale-105 hover:border-accent">
              <ShieldCheckIcon className="h-6 w-6 text-blue-800" />
              <p className="mt-3 font-semibold text-neutral">Security‑first approach</p>
              <p className="m-0 text-base-content/80">
                Threat modeling, testing, and incident playbooks are embedded into every module.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-[#F6F1FF] hover:shadow-base-200 hover:scale-105 hover:border-accent">
              <RocketLaunchIcon className="h-6 w-6 text-blue-800" />
              <p className="mt-3 font-semibold text-neutral">From labs to launch</p>
              <p className="m-0 text-base-content/80">
                Capstone builds integrate with L2s and real data providers to prove application readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program format */}
      <section id="program" className="bg-base-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-neutral">Program format</h2>
          <p className="mt-2 text-base-content/80">
            Each cohort’s program is tailored to meet your business needs, providing hands-on learning for targeted use
            cases
          </p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300">
              <p className="m-0 font-semibold">1 · Discovery</p>
              <p className="m-0 text-base-content/80">
                Comprehensive skill assessments inform a tailored learning path for your teams roles and backgrounds
              </p>
            </div>
            <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300">
              <p className="m-0 font-semibold">2 · Labs</p>
              <p className="m-0 text-base-content/80">
                Experts from the Ethereum Foundation and beyond lead guided, graded challenges to cement fundamentals
              </p>
            </div>
            <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300">
              <p className="m-0 font-semibold">3 · Builds</p>
              <p className="m-0 text-base-content/80">
                Team projects integrate onchain components with real services, informing actionable deployment skills
              </p>
            </div>
            <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300">
              <p className="m-0 font-semibold">4 · Certification</p>
              <p className="m-0 text-base-content/80">
                Participants develop onchain portfolios, and can qualify for verified credentials to demonstrate success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum preview */}
      <section id="curriculum" className="bg-base-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-neutral">Curriculum overview</h2>
          <p className="mt-2 text-base-content/80">
            A modular path from fundamentals to production. Customize curriculum per role, including engineering,
            product, security, and DevOps
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Foundations</p>
              <p className="m-0 text-base-content/80">EVM, accounts, transactions, gas, ERC standards, wallets, RPCs</p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Smart contract development</p>
              <p className="m-0 text-base-content/80">Solidity, testing, upgrades, access control, events, indexing</p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Decentralized exchange (DEX)</p>
              <p className="m-0 text-base-content/80">AMMs, liquidity, fees, slippage, price oracles, sandwich risk</p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Stablecoins</p>
              <p className="m-0 text-base-content/80">
                Over‑collateralization, peg mechanisms, liquidations, risk controls
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Real‑world assets (RWA)</p>
              <p className="m-0 text-base-content/80">
                Tokenization flows, custodians, attestations, compliance patterns
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Deploy to L2</p>
              <p className="m-0 text-base-content/80">
                Optimism/Base/Arbitrum, bridges, sequencing, costs, reliability
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Security</p>
              <p className="m-0 text-base-content/80">
                Threat modeling, common vulnerabilities, audits, monitoring, incident response
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">DevEx & Ops</p>
              <p className="m-0 text-base-content/80">Tooling, CI, key management, change control, observability</p>
            </div>
            <div className="p-6 rounded-2xl bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:bg-base-200">
              <p className="m-0 font-semibold">Capstone build</p>
              <p className="m-0 text-base-content/80">Ship a production‑grade prototype integrating multiple modules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-base-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-bold text-neutral">Talk to our team</h2>
              <p className="mt-2 text-base-content/80">
                Tell us about your goals and constraints. We’ll tailor a program for your engineers, product managers,
                and security leads. Cohorts start every month.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary text-black"
                  href="https://calendly.com/austintgriffith/eadc-ethereum-application-developer-certification"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a discovery call
                </a>
                <a
                  className="btn btn-outline border-black"
                  href="mailto:austin.griffith@ethereum.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email us
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300">
                <p className="m-0 font-medium">Ethereum ADC enterprise offering</p>
                <ul className="mt-4 space-y-3 text-base-content/80">
                  <li className="flex items-start gap-2">
                    <CubeTransparentIcon className="h-5 w-5 mt-0.5 text-blue-800" />
                    <span>Customized syllabus and schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BanknotesIcon className="h-5 w-5 mt-0.5 text-blue-800" />
                    <span>Clear pricing and ROI model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheckIcon className="h-5 w-5 mt-0.5 text-blue-800" />
                    <span>Security and compliance alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BuildingOffice2Icon className="h-5 w-5 mt-0.5 text-blue-800" />
                    <span>Team dashboards and tooling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <UsersIcon className="h-5 w-5 mt-0.5 text-blue-800" />
                    <span>Onsite or virtual cohort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-base-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-base-content/70">Built By</span>
              <a href="https://buidlguidl.com/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_bg.svg" alt="BuidlGuidl" className="h-8" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-base-content/70">Operated By</span>
              {}
              <a href="https://ethereum.foundation/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_ef.svg" alt="Ethereum Foundation" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
