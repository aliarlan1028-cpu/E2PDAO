import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure | E2PDAO",
  description: "Important listing, campaign, token and automated-trading risk disclosures.",
};

export default function RiskDisclosurePage() {
  return (
    <main className="e2p-legal">
      <article>
        <span className="e2p-eyebrow">Risk disclosure</span>
        <h1>Cooperation, token and trading risks.</h1>
        <section><h2>No guaranteed outcome</h2><p>Submitting an application does not guarantee approval, contact, commercial cooperation, campaign performance, exchange listing, financing or any other result.</p></section>
        <section><h2>Third-party decisions</h2><p>Exchanges, launchpads, creators, market makers, media and other partners make their own decisions. E2PDAO cannot guarantee acceptance, timing or terms offered by a third party.</p></section>
        <section><h2>Token risk</h2><p>Token ownership, supply information, community access and governance utility do not guarantee liquidity, price appreciation or future value. Published utility and access rules may change.</p></section>
        <section><h2>Trading and automated-tool risk</h2><p>Cryptocurrency and automated trading involve substantial risk and may result in total loss. The AI Trading Agent, community discussion and website content are not financial, legal or investment advice. Hard risk controls reduce specific operational risks but cannot eliminate market loss.</p></section>
        <section><h2>Applicant responsibility</h2><p>Applicants remain responsible for the accuracy, legality and authorization of submitted materials. Historical cases and past performance do not predict future results.</p></section>
      </article>
    </main>
  );
}
