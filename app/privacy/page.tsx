import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | E2PDAO",
  description: "How E2PDAO handles project, creator and partner application information.",
};

export default function PrivacyPage() {
  return (
    <main className="e2p-legal">
      <article>
        <span className="e2p-eyebrow">Privacy notice</span>
        <h1>How application information is handled.</h1>
        <section><h2>E2PDAO website</h2><p>This static website does not save KOL, Ambassador, project or business-partner application records. Formal applications are submitted through the E2PDAO-branded intake linked from this site.</p></section>
        <section><h2>Private application processing</h2><p>Submitted information is privately routed into the E2PDAO workspace for business evaluation, duplicate detection, review and follow-up. It is not automatically published as a public profile, project or case.</p></section>
        <section><h2>Sensitive information</h2><p>Never submit wallet private keys, seed phrases, exchange passwords, one-time authentication codes or withdrawal-enabled API credentials. E2PDAO does not require them for a cooperation application.</p></section>
        <section><h2>Applicant-provided claims</h2><p>Audience, pricing, performance, project and partnership information may be retained as applicant-provided data until independently reviewed. Contact details, private rates, budgets, internal notes and review outcomes are not intended for public display.</p></section>
        <section><h2>Contact</h2><p>For privacy questions, contact <a href="mailto:aliarlan1028@gmail.com">aliarlan1028@gmail.com</a>.</p></section>
      </article>
    </main>
  );
}
