import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

const RUNS = [
  ["✓", "Project path & listing plan", "Materials, targets and next actions", "READY", "done"],
  ["✓", "KOL campaign package", "Audience fit, formats and campaign brief", "MATCHED", "done"],
  ["03", "Trading community activation", "Token access, Agent and feedback loop", "RUNNING", "active"],
];

export default function Hero() {
  return (
    <section className="e2p-container e2p-hero e2p-grid-wash">
      <div className="e2p-hero-copy">
        <span className="e2p-eyebrow">The operating network for Web3</span>
        <h1>
          Incubate.<br />
          <span className="e2p-highlight">Influence.</span><br />
          Trade.
        </h1>
        <p>
          E2P DAO connects project incubation and listing execution, a
          two-sided KOL marketplace, and a token-based trading community powered
          by a disciplined AI Trading Agent.
        </p>
        <div className="e2p-actions">
          <a href={E2P_LINKS.project("home_hero")} className="e2p-btn e2p-btn-dark">
            Start a project <ArrowUpRight size={15} />
          </a>
          <Link href="/club" className="e2p-btn">
            Enter the ecosystem
          </Link>
        </div>
        <div className="e2p-hero-facts">
          <span><strong>400+</strong>KOL network</span>
          <span><strong>20+</strong>Resource nodes</span>
          <span><strong>3</strong>Connected engines</span>
          <span><strong>1</strong>E2P ecosystem</span>
        </div>
      </div>

      <div className="e2p-stage" aria-label="E2P ecosystem operating console">
        <div className="e2p-stage-orbit" />
        <div className="e2p-stage-window">
          <header className="e2p-window-bar">
            <span className="e2p-window-dots"><i /><i /><i /></span>
            <b>E2P DAO · ECOSYSTEM CONTROL</b>
            <em>NETWORK / 03</em>
          </header>
          <div className="e2p-mission">
            <aside className="e2p-mission-rail" aria-hidden="true">
              <b>E2P</b><i /><i /><i /><span>⌁</span>
            </aside>
            <section className="e2p-mission-main">
              <header className="e2p-mission-status">
                <span><i /> Ecosystem active</span>
                <em>ONE CONNECTED LOOP</em>
              </header>
              <div className="e2p-mission-objective">
                <small>NETWORK OBJECTIVE / 01</small>
                <strong>Move projects from strategy to market.</strong>
                <p>Incubation, creator distribution and a token-based user community work in one operating track.</p>
              </div>
              <ol className="e2p-mission-list">
                {RUNS.map(([index, title, text, state, className]) => (
                  <li key={title} className={className}>
                    <i>{index}</i>
                    <span><b>{title}</b><small>{text}</small></span>
                    <em>{state}</em>
                  </li>
                ))}
              </ol>
            </section>
            <aside className="e2p-mission-insight">
              <header><span>NETWORK CORE</span><b>03</b></header>
              <div className="e2p-core-orbit"><strong>E2P</strong></div>
              <div className="e2p-insight-stats">
                <span><b>BD</b>LIST</span>
                <span><b>KOL</b>MATCH</span>
                <span><b>AI</b>TRADE</span>
              </div>
            </aside>
          </div>
        </div>
        <div className="e2p-stage-card one">
          <span>RESOURCE NETWORK</span><strong>20+</strong><i>Exchange · launch · capital</i>
        </div>
        <div className="e2p-stage-card two">
          <span>CONNECTED ENGINES</span><strong>03 / 03</strong><i>Project → market → community</i>
        </div>
      </div>
    </section>
  );
}
