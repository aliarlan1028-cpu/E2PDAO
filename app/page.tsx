import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  Megaphone,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { E2P_LINKS } from "@/lib/e2p-links";

const TICKER = [
  "Project Incubation",
  "Listing Advisory",
  "Listing BD",
  "KOL Marketplace",
  "Campaign Growth",
  "E2P Club",
  "AI Trading Agent",
  "$E2P Token",
];

const CHIPS = [
  "Project strategy",
  "Quality upgrade",
  "Listing BD",
  "KOL growth",
  "Token access",
  "AI trading",
];

const LOOP = [
  {
    index: "01",
    label: "INCUBATE",
    title: "Build a project the market can understand.",
    text: "Define the path, strengthen the product and market narrative, prepare listing materials and coordinate the right exchange conversations.",
    detail: "STRATEGY → QUALITY → LISTING",
  },
  {
    index: "02",
    label: "INFLUENCE",
    title: "Put the right story in front of the right audience.",
    text: "Translate project goals into creator briefs, market-specific KOL matches and campaign packages built for measurable distribution.",
    detail: "BRIEF → MATCH → AMPLIFY",
  },
  {
    index: "03",
    label: "TRADE",
    title: "Turn attention into a real user and feedback layer.",
    text: "Token-based access, community research and a hard-risk-gated AI Trading Agent create deeper participation beyond short-lived hype.",
    detail: "ACCESS → SIGNAL → EXECUTE",
  },
  {
    index: "04",
    label: "COMPOUND",
    title: "Feed market intelligence back into the next move.",
    text: "Community behavior and campaign feedback return to the project track, improving positioning, distribution and future decisions.",
    detail: "LEARN → REFINE → REPEAT",
  },
];

const CASES = [
  ["CHAX", "CEX listing coordination", "CoinGecko", "https://www.coingecko.com/en/coins/chax"],
  ["HIRO", "Listing preparation and coordination", "CoinMarketCap", "https://coinmarketcap.com/currencies/hiro/#Markets"],
  ["Virtuals", "Public supply verification support", "CoinMarketCap", "https://coinmarketcap.com/currencies/virtual-protocol/"],
  ["USBT", "Listing advisory and coordination", "Gate.io", "https://www.gate.io/zh/announcements/article/39267"],
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="e2p-ticker" aria-label="E2P ecosystem capabilities">
        <div>
          {[...TICKER, ...TICKER].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="e2p-home-systems">
        <div className="e2p-container">
          <Reveal className="e2p-home-intro">
            <div>
              <span className="e2p-section-index">01 / THE OPERATING SYSTEM</span>
              <h2>Three engines.<br /><em>Designed as one.</em></h2>
            </div>
            <div>
              <p>
                Not three disconnected services. E2P links project execution,
                creator distribution and intelligent trading into one operating
                loop—so every stage creates value for the next.
              </p>
              <div className="e2p-home-chips">
                {CHIPS.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            </div>
          </Reveal>

          <div className="e2p-engine-bento">
            <Reveal className="e2p-engine-slot e2p-engine-slot-main">
              <Link href="/services" className="e2p-engine-card e2p-engine-incubator">
                <header>
                  <span>01 / INCUBATOR</span>
                  <ArrowUpRight size={17} />
                </header>
                <div className="e2p-engine-copy">
                  <Rocket size={24} />
                  <h3>Build the path.<br />Raise the quality.</h3>
                  <p>
                    Project architecture, listing advisory, quality optimization
                    and exchange-facing BD—organized around a path your team can execute.
                  </p>
                </div>
                <div className="e2p-route-board" aria-label="Project listing route">
                  <header><span>PROJECT ROUTE / ACTIVE</span><b>04 STAGES</b></header>
                  <div className="e2p-route-line">
                    {["PATH", "QUALITY", "MATERIALS", "LISTING BD"].map((item, index) => (
                      <span key={item} className={index === 3 ? "active" : "done"}>
                        <i>{index === 3 ? "04" : "✓"}</i><b>{item}</b>
                      </span>
                    ))}
                  </div>
                  <footer><span>Target conversations</span><b>Exchange · launch · capital</b></footer>
                </div>
                <footer><span>Explore the incubator</span><ArrowUpRight size={15} /></footer>
              </Link>
            </Reveal>

            <Reveal className="e2p-engine-slot" delay={.08}>
              <Link href="/influence" className="e2p-engine-card e2p-engine-kol">
                <header>
                  <span>02 / KOL MARKETPLACE</span>
                  <ArrowUpRight size={17} />
                </header>
                <div className="e2p-kol-visual" aria-hidden="true">
                  <div className="e2p-kol-core"><Megaphone size={20} /><b>MATCH</b></div>
                  {["AK", "L2", "WW", "S9", "0X"].map((name, index) => (
                    <i key={name} className={`kol-${index + 1}`}>{name}</i>
                  ))}
                  <span>96%<small>FIT SCORE</small></span>
                </div>
                <div className="e2p-engine-copy">
                  <h3>Creators meet<br />qualified opportunity.</h3>
                  <p>Projects get distribution. KOLs get project resources, brand collaborations and event invitations.</p>
                </div>
                <footer><span>Enter the marketplace</span><ArrowUpRight size={15} /></footer>
              </Link>
            </Reveal>

            <Reveal className="e2p-engine-slot" delay={.14}>
              <Link href="/club" className="e2p-engine-card e2p-engine-trading">
                <header>
                  <span>03 / TRADING COMMUNITY</span>
                  <ArrowUpRight size={17} />
                </header>
                <div className="e2p-trading-visual" aria-hidden="true">
                  <header><span><i /> AGENT ONLINE</span><b>RISK / HARD</b></header>
                  <div className="e2p-signal-bars">
                    {[36, 54, 44, 68, 61, 78, 73, 91, 82, 96].map((height, index) => (
                      <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <footer><span>OBSERVE</span><span>VALIDATE</span><span>EXECUTE</span></footer>
                </div>
                <div className="e2p-engine-copy">
                  <Bot size={23} />
                  <h3>Token access.<br />AI discipline.</h3>
                  <p>A community layer built around $E2P access, market intelligence and a trading system with hard risk gates.</p>
                </div>
                <footer><span>Enter E2P Club</span><ArrowUpRight size={15} /></footer>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="e2p-home-loop">
        <div className="e2p-container e2p-home-loop-grid">
          <aside className="e2p-home-loop-sticky">
            <span className="e2p-section-index">02 / THE COMPOUNDING LOOP</span>
            <h2>Every move<br />feeds the next.</h2>
            <p>
              A project does not stop at strategy. Distribution does not stop
              at impressions. Community does not stop at chat. E2P turns each
              stage into operating input for the next one.
            </p>
            <Link href="/about" className="e2p-btn e2p-btn-light">See how E2P works</Link>
          </aside>

          <div className="e2p-loop-stack">
            {LOOP.map((step, index) => (
              <Reveal key={step.index} delay={index * .04}>
                <article className="e2p-loop-scene">
                  <header><span>{step.index}</span><b>{step.label}</b><em>{step.detail}</em></header>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="e2p-loop-progress"><i style={{ width: `${(index + 1) * 25}%` }} /></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-home-proof">
        <div className="e2p-container">
          <Reveal className="e2p-proof-heading">
            <span className="e2p-section-index">03 / PUBLIC PROOF</span>
            <h2>Work you can<br /><em>verify yourself.</em></h2>
            <p>
              Selected public references to support work. Evidence, not empty
              claims—and never a promise of guaranteed listing or future results.
            </p>
          </Reveal>

          <Reveal className="e2p-proof-metrics">
            <span><strong>04</strong>Public references</span>
            <span><strong>400+</strong>KOL resources</span>
            <span><strong>20+</strong>Operating nodes</span>
            <span><strong>03</strong>Connected engines</span>
          </Reveal>

          <div className="e2p-proof-list">
            {CASES.map(([project, work, source, href], index) => (
              <Reveal key={project} delay={index * .035}>
                <a href={href} target="_blank" rel="noreferrer" className="e2p-proof-row">
                  <span>0{index + 1}</span>
                  <h3>{project}</h3>
                  <p>{work}</p>
                  <b>{source}</b>
                  <ExternalLink size={15} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-final e2p-final-cinematic">
        <div className="e2p-final-orbit" aria-hidden="true"><i /><i /><b>E2P</b></div>
        <Reveal className="e2p-final-content">
          <span><ShieldCheck size={15} /> YOUR NEXT OPERATING TRACK STARTS HERE</span>
          <h2>Build the project.<br /><em>Move the market.</em></h2>
          <p>Choose your entry point. E2P connects the rest of the operating loop.</p>
          <div className="e2p-actions">
            <a href={E2P_LINKS.project("home_final")} className="e2p-btn e2p-btn-dark">
              Start with E2P <ArrowUpRight size={15} />
            </a>
            <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn">
              Join the community <Users size={14} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
