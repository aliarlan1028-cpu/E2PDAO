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
          <header className="e2p-principles-head">
            <div>
              <span className="e2p-section-index">02 / Operating principles</span>
              <h2>Evidence in.<br /><em>Action out.</em></h2>
            </div>
            <p>
              E2P is designed to move work forward without hiding uncertainty.
              Every system starts from verifiable inputs, produces an owned next
              action and leaves the final decision with people.
            </p>
          </header>

          <div className="e2p-principles-system">
            <aside className="e2p-principles-console">
              <header><span>OPERATING LOGIC / 01</span><b>HUMAN IN CONTROL</b></header>
              <div className="e2p-principles-prompt">
                <small>SYSTEM QUESTION</small>
                <strong>Can this input<br />change the next move?</strong>
              </div>
              <div className="e2p-principles-run">
                <span><i>01</i><b>Source attached</b><em>CHECKED</em></span>
                <span><i>02</i><b>Constraint surfaced</b><em>VISIBLE</em></span>
                <span><i>03</i><b>Owner assigned</b><em>READY</em></span>
                <span className="active"><i>04</i><b>Human confirms</b><em>REQUIRED</em></span>
              </div>
              <footer><span>NO GUARANTEED OUTCOMES</span><span>01:1 DECISION LOG</span></footer>
            </aside>

            <div className="e2p-principles-ledger">
              {[
                ["01", "Evidence before opinion", "Use the real product, token, audience, market proof and source trail. Assumptions stay labelled until verified.", "INPUT", "SOURCE ATTACHED"],
                ["02", "Output before activity", "Research becomes a priority, asset, owner, introduction or next action. Motion without an operating output does not count.", "OUTPUT", "ACTIONABLE"],
                ["03", "Relationships that compound", "Project, creator and partner value is built through qualified repeat work—not a disposable campaign blast.", "NETWORK", "CONTINUITY"],
                ["04", "Boundaries stay explicit", "E2P supports decisions; it does not replace them. Listings, campaigns, tokens and trading outcomes remain uncertain.", "CONTROL", "HUMAN OWNED"],
              ].map(([index, title, text, label, state], itemIndex) => (
                <article key={title} className={itemIndex === 1 ? "active" : ""}>
                  <span>{index}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <footer><small>{label}</small><b>{state}</b></footer>
                </article>
              ))}
            </div>
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
