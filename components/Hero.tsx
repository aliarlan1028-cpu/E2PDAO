"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bot, Megaphone, Rocket } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

const WORDS = [
  { text: "Incubate.", className: "" },
  { text: "Influence.", className: "accent" },
  { text: "Trade smarter.", className: "outline" },
];

const NODES = [
  { label: "INCUBATOR", detail: "LISTING BD", icon: Rocket, className: "incubator" },
  { label: "KOL MARKET", detail: "400+ NETWORK", icon: Megaphone, className: "kol" },
  { label: "AI TRADING", detail: "RISK GATED", icon: Bot, className: "trading" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="e2p-hero-cinematic">
      <div className="e2p-hero-ambient" aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="e2p-container e2p-hero-cinematic-inner">
        <div className="e2p-hero-cinematic-copy">
          <motion.div
            className="e2p-hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span><i /> E2P OPERATING NETWORK</span>
            <em>WEB3 / 2026</em>
          </motion.div>

          <h1 aria-label="Incubate. Influence. Trade smarter.">
            {WORDS.map((word, index) => (
              <motion.span
                key={word.text}
                className={word.className}
                initial={reduceMotion ? false : { opacity: 0, y: 90, rotate: 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: .82,
                  delay: .08 + index * .1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="e2p-hero-lower"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .42, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              One operating network connecting project incubation and listing
              execution, creator distribution, and a token-based trading
              community powered by disciplined AI systems.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.project("home_hero")} className="e2p-btn e2p-btn-dark">
                Start a project <ArrowUpRight size={15} />
              </a>
              <Link href="/club" className="e2p-btn">Explore the network</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="e2p-network-stage"
          initial={reduceMotion ? false : { opacity: 0, scale: .88, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .95, delay: .25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="E2P ecosystem network visual"
        >
          <div className="e2p-network-glow" aria-hidden="true" />
          <div className="e2p-network-panel">
            <header>
              <span><i /> NETWORK ACTIVE</span>
              <b>03 / 03 CONNECTED</b>
            </header>

            <div className="e2p-network-map">
              <div className="e2p-orbit-ring ring-one" aria-hidden="true" />
              <div className="e2p-orbit-ring ring-two" aria-hidden="true" />

              <div className="e2p-network-core">
                <small>ONE NETWORK</small>
                <strong>E2P</strong>
                <em>OPERATING CORE</em>
              </div>

              {NODES.map((node) => (
                <div className={`e2p-network-node ${node.className}`} key={node.label}>
                  <node.icon size={16} />
                  <span><b>{node.label}</b><small>{node.detail}</small></span>
                </div>
              ))}
            </div>

            <footer>
              <span><b>01</b> BUILD THE PATH</span>
              <i>→</i>
              <span><b>02</b> MOVE ATTENTION</span>
              <i>→</i>
              <span><b>03</b> ACTIVATE USERS</span>
            </footer>
          </div>

          <motion.div
            className="e2p-network-float e2p-network-float-kol"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-1, 0, -1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>KOL NETWORK</span>
            <strong>400+</strong>
            <small>Global creator reach</small>
          </motion.div>

          <motion.div
            className="e2p-network-float e2p-network-float-agent"
            animate={reduceMotion ? undefined : { y: [0, 9, 0], rotate: [1, 0, 1] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span><i /> AI TRADING AGENT</span>
            <strong>Risk gates armed</strong>
            <div><b /><b /><b /><b /><b /><b /></div>
          </motion.div>
        </motion.div>

        <div className="e2p-hero-factbar">
          <span><strong>20+</strong>Exchange, launch & capital nodes</span>
          <span><strong>400+</strong>KOL resource network</span>
          <span><strong>3</strong>Connected operating engines</span>
          <span><strong>1</strong>Compounding ecosystem</span>
        </div>
      </div>
    </section>
  );
}
