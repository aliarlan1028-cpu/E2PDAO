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
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">02 / Operating principles</span>
            <h2>Move with evidence.<br />Stay honest about risk.</h2>
            <p>External partners make their own decisions, market outcomes remain uncertain and trading can result in total loss.</p>
          </header>
          <div className="e2p-path e2p-path-four">
            {[
              ["01", "Start from the real project", "Use the actual product, token, proof, market and constraints—not generic Web3 language."],
              ["02", "Turn research into action", "Every finding should become a priority, material, owner, introduction or next step."],
              ["03", "Build repeat relationships", "Creator and partner value comes from qualified repeat work, not one-off blasts."],
              ["04", "Keep risk explicit", "No listing, campaign, token or trading result is guaranteed by the network."],
            ].map(([index, title, text]) => (
              <article key={title}><span>{index}</span><h3 style={{ marginTop: "auto" }}>{title}</h3><p>{text}</p></article>
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
