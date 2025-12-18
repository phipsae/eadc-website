"use client";

import { useEffect, useLayoutEffect } from "react";
import { AnimatedStatValue } from "./_components/AnimatedStatValue";
import type { NextPage } from "next";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  useLayoutEffect(() => {
    // Prevent automatic scroll on page load - run before paint
    if (typeof window !== "undefined") {
      // Remove hash from URL if present (but save it for later)
      const hash = window.location.hash;
      if (hash && !hash.match(/^#(contact|curriculum|program|why-adc)$/)) {
        // Only allow specific hashes, clear others
        window.history.replaceState(null, "", window.location.pathname);
      }

      // Force scroll to top immediately
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Prevent scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }
  }, []);

  useEffect(() => {
    // Handle hash navigation only after page is fully loaded
    if (typeof window !== "undefined" && window.location.hash) {
      const handleHashScroll = () => {
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        if (element) {
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 100);
          });
        }
      };

      // Wait for page to be fully loaded
      if (document.readyState === "complete") {
        handleHashScroll();
      } else {
        window.addEventListener("load", handleHashScroll);
        return () => window.removeEventListener("load", handleHashScroll);
      }
    }
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Dark */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Enterprise badge */}
            <div className="enterprise-badge mb-10">
              <BuildingOffice2Icon className="h-4 w-4" />
              Enterprise Training Program
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-semibold mb-8 leading-[1.1]">
              <span className="text-white">Ethereum Application</span>
              <br />
              <span className="text-white/60">Developer Certification</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed">
              Upskill your technology teams with institutional-grade training in Ethereum application development.
              Designed for banks, asset managers, and Fortune 500 companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0e1a] px-8 py-4 font-medium hover:bg-white/90 transition-colors"
              >
                Request Program Details
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/5 transition-colors"
              >
                View Curriculum
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 text-sm text-white/40">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="h-5 w-5 text-white/60" />
                <span>Compliance-Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <LockClosedIcon className="h-5 w-5 text-white/60" />
                <span>Security-First</span>
              </div>
              <div className="flex items-center gap-3">
                <DocumentCheckIcon className="h-5 w-5 text-white/60" />
                <span>Verifiable Credentials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Dark */}
      <section className="py-6 bg-[#0a0e1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/40 uppercase tracking-[0.2em]">Developed in Partnership With</p>
            <div className="flex items-center gap-8">
              <a
                href="https://ethereum.foundation/"
                target="_blank"
                rel="noreferrer"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-ef-white.png" alt="Ethereum Foundation" className="h-14" />
              </a>
              <a
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-bg-white.png" alt="BuidlGuidl" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-semibold text-[#0a0e1a] leading-tight mb-6">
                Ethereum is the Backbone of the Onchain Economy
              </h2>
              <a
                href="https://institutions.ethereum.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#0a0e1a] font-medium hover:gap-3 transition-all"
              >
                Live Data <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {[
                { value: "10.3 Yrs", label: "Uninterrupted uptime", sublabel: "and liveness" },
                { value: "$105B", label: "Total value securing", sublabel: "the network" },
                { value: "$172B", label: "Stablecoin TVL", sublabel: "57%+ of global supply" },
                { value: "$68.7B", label: "DeFi TVL", sublabel: "66%+ of all blockchains" },
              ].map((stat, index) => (
                <div key={index}>
                  <AnimatedStatValue
                    value={stat.value}
                    className="text-3xl lg:text-4xl font-semibold text-[#0a0e1a] mb-2"
                  />
                  <p className="text-[#0a0e1a]/60 text-sm m-0 leading-snug">
                    {stat.label}
                    <br />
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ADC - Dark */}
      <section id="why-adc" className="py-24 lg:py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-16">
            ADC Leads Where It Matters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {[
              {
                title: "Compliance-Aligned",
                description:
                  "Training modules designed with regulatory requirements in mind. Covers KYC/AML considerations, audit trails, and institutional best practices.",
              },
              {
                title: "Private Cohorts",
                description:
                  "Dedicated programs for your organization. Onsite or virtual delivery with customized content aligned to your technology stack.",
              },
              {
                title: "Practitioner-Led",
                description:
                  "Learn from engineers who have deployed production systems. Instructors from the Ethereum Foundation and leading protocol teams.",
              },
              {
                title: "Security-First",
                description:
                  "Threat modeling, vulnerability assessment, and incident response integrated throughout. Build secure, auditable systems.",
              },
              {
                title: "Verifiable Credentials",
                description:
                  "On-chain certifications that verify competency. Transparent skill validation for internal mobility and hiring decisions.",
              },
              {
                title: "Production-Ready",
                description:
                  "Move beyond theory. Capstone projects deploy to testnets and integrate with real infrastructure providers and L2 networks.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 m-0 leading-relaxed text-[15px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Light */}
      <section id="program" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[2.75rem] font-semibold text-[#0a0e1a] leading-tight mb-16">
            Structured Learning Path
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive evaluation of current capabilities. Custom learning paths based on roles.",
              },
              {
                step: "02",
                title: "Foundations",
                description: "Core blockchain concepts, Ethereum architecture, and smart contract fundamentals.",
              },
              {
                step: "03",
                title: "Specialization",
                description: "Deep dives into DeFi, tokenization, L2 scaling, and security.",
              },
              {
                step: "04",
                title: "Certification",
                description: "Capstone project deployment. Verified on-chain credentials.",
              },
            ].map((item, index) => (
              <div key={index} className="border-t-2 border-[#0a0e1a] pt-6">
                <span className="text-xs font-medium text-[#0a0e1a]/30 uppercase tracking-wider">{item.step}</span>
                <h3 className="text-lg font-semibold text-[#0a0e1a] mt-3 mb-3">{item.title}</h3>
                <p className="text-[#0a0e1a]/50 m-0 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum - Dark */}
      <section id="curriculum" className="py-24 lg:py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-16">
            Curriculum Modules
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Blockchain Fundamentals", topics: "Consensus, cryptography, distributed systems, EVM" },
              { title: "Smart Contract Development", topics: "Solidity, testing, upgradability, gas optimization" },
              { title: "DeFi Protocols", topics: "AMMs, lending, derivatives, oracles" },
              { title: "Asset Tokenization", topics: "RWA frameworks, custody, compliance, settlement" },
              { title: "Stablecoin Architecture", topics: "Collateralization, peg mechanisms, risk controls" },
              { title: "Layer 2 Scaling", topics: "Rollups, bridges, sequencing, cross-chain" },
              { title: "Security & Auditing", topics: "Threat modeling, vulnerabilities, audit processes" },
              { title: "Infrastructure", topics: "Node operations, RPC, indexing, reliability" },
              { title: "Capstone Project", topics: "End-to-end institutional application deployment" },
            ].map((item, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-white/20 transition-colors">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm m-0">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Light */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl lg:text-3xl text-[#0a0e1a] font-medium leading-relaxed mb-10">
            &ldquo;All of this growth will happen on Ethereum because TradFi trusts Ethereum. For TradFi,
            trustworthiness trumps marginal speed and cost savings every day of the week.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0a0e1a] flex items-center justify-center text-white text-sm font-semibold">
              GK
            </div>
            <div>
              <p className="text-[#0a0e1a] font-semibold m-0">Geoffrey Kendrick</p>
              <p className="text-[#0a0e1a]/50 text-sm m-0">
                Global Head of Digital Assets Research @ Standard Chartered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Dark */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                Discuss your organization&apos;s blockchain education requirements with our enterprise team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0e1a] px-8 py-4 font-medium hover:bg-white/90 transition-colors"
                  href="https://calendly.com/austintgriffith/eadc-ethereum-application-developer-certification"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ClockIcon className="h-5 w-5" />
                  Book a Call
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/5 transition-colors"
                  href="mailto:austin.griffith@ethereum.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact via Email
                </a>
              </div>
            </div>

            <div className="border border-white/10 p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-white mb-8">Enterprise Program Includes</h3>
              <ul className="space-y-4">
                {[
                  "Customized curriculum aligned to your use cases",
                  "Private cohorts with dedicated instruction",
                  "Executive briefings on blockchain strategy",
                  "Security and compliance customization",
                  "Team progress dashboards and reporting",
                  "Ongoing technical support post-certification",
                  "Verifiable on-chain credentials",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-white/60 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-[15px]">{item}</span>
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
