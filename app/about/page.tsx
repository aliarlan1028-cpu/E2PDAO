import type { Metadata } from "next";
import { ArrowUpRight, Bot, Megaphone, Route } from "lucide-react";
import PartnershipCards from "@/components/PartnershipCards";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "About E2PDAO | One Web3 Operating Network",
  description:
    "E2PDAO connects project incubation and listing support, a two-sided KOL marketplace, and a token-based trading community.",
  alternates: { canonical: "/about/" },
};

const MODEL = [
  { icon: Route, title: "Build the path", text: "Turn the project, token, narrative and market into a prioritized operating route." },
  { icon: Megaphone, title: "Build distribution", text: "Match projects with creators, campaign packages and regional growth opportunities." },
  { icon: Bot, title: "Build the user layer", text: "Connect projects to a token-based trading community and a disciplined AI Agent product." },
];

const PRINCIPLES = [
  ["01", "Evidence before opinion", "Real product, token, audience and market proof come first. Assumptions stay visible until verified.", "VERIFY"],
  ["02", "Output before activity", "Every piece of work becomes a decision, asset, introduction, owner or next move.", "MOVE"],
  ["03", "Relationships that compound", "Qualified repeat work creates more value than a disposable campaign or a one-off introduction.", "COMPOUND"],
  ["04", "Boundaries stay explicit", "E2P supports decisions without pretending outcomes are guaranteed. People keep final control.", "CONTROL"],
];

export default function AboutPage() {
  return (
    <>
      <section className="e2p-simple-hero e2p-grid-wash">
        <div className="e2p-container">
          <span className="e2p-eyebrow">About E2P DAO</span>
          <h1>One network.<br /><span className="e2p-highlight">Three constraints solved.</span></h1>
          <p>
            Projects need a stronger path to market. Creators need better
            opportunities. Trading communities need real products and explicit
            risk boundaries. E2P DAO connects all three.
          </p>
          <div className="e2p-actions">
            <a href={E2P_LINKS.project("about_hero")} className="e2p-btn e2p-btn-dark">Start a project <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / The model</span>
            <h2>Strategy, distribution<br />and community.</h2>
            <p>E2P is designed as an operating system around the full route from project quality to market feedback.</p>
          </header>
          <div className="e2p-about-grid">
            {MODEL.map((item) => (
              <article key={item.title}>
                <item.icon size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink">
        <div className="e2p-container e2p-signal-principles">
          <header className="e2p-signal-principles-head">
            <span className="e2p-section-index">02 / Operating principles</span>
            <h2>Clear input.<br /><em>Real movement.</em></h2>
            <p>
              E2P does not hide uncertainty behind activity. We verify what is
              real, make the next move visible and keep people in control.
            </p>
          </header>

          <div className="e2p-principles-signal" aria-label="E2P operating logic">
            <div className="e2p-principles-signal-copy">
              <small>THE OPERATING QUESTION</small>
              <strong>Does this change<br />the next move?</strong>
              <span><i /> Evidence enters</span>
              <span><i /> Action leaves</span>
              <span><i /> Humans decide</span>
            </div>
            <div className="e2p-principles-pulse" aria-hidden="true">
              <i /><i /><i /><b>E2P</b>
            </div>
          </div>

          <div className="e2p-principle-lines">
            {PRINCIPLES.map(([index, title, text, state]) => (
              <article key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>{state} →</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Join the network</span>
            <h2>Choose your<br />entry point.</h2>
            <p>Applications are routed privately into the appropriate E2PDAO review and follow-up process.</p>
          </header>
          <PartnershipCards source="about" />
        </div>
      </section>
    </>
  );
}
