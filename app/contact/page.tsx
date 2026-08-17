import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Send, Twitter } from "lucide-react";
import PartnershipCards from "@/components/PartnershipCards";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "Contact E2PDAO | Start the Right Conversation",
  description: "Apply as a project or KOL, join E2P Club, or contact the E2PDAO team directly.",
  alternates: { canonical: "/contact/" },
};

const CHANNELS = [
  { icon: MessageCircle, label: "Community Telegram", value: "Join E2P Club", href: E2P_LINKS.telegram },
  { icon: Send, label: "Business Telegram", value: "@BitEsq", href: E2P_LINKS.businessTelegram },
  { icon: Mail, label: "Email", value: "aliarlan1028@gmail.com", href: "mailto:aliarlan1028@gmail.com" },
  { icon: Twitter, label: "Twitter / X", value: "Follow E2P updates", href: "https://x.com/SinperX_250728" },
];

const FAQ = [
  ["What happens after I apply?", "Your information is routed privately for evaluation and follow-up. Applying does not automatically create a public profile or guarantee cooperation."],
  ["Do you guarantee listing or campaign results?", "No. Exchanges, creators and other partners keep their own criteria and final decisions. E2P prepares and coordinates; it cannot promise acceptance or performance."],
  ["What should a project prepare?", "Share the project stage, product, token, growth priorities, target exchanges, timeline and existing materials. Never send private keys, seed phrases or withdrawal credentials."],
];

export default function ContactPage() {
  return (
    <>
      <section className="e2p-simple-hero e2p-grid-wash">
        <div className="e2p-container">
          <span className="e2p-eyebrow">Contact E2P DAO</span>
          <h1>Start the right<br /><span className="e2p-highlight">conversation.</span></h1>
          <p>Choose the path that matches you, or use a direct channel to reach the team.</p>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container e2p-contact-grid">
          <div>
            <header style={{ marginBottom: 28 }}>
              <span className="e2p-section-index">01 / Apply</span>
              <h2 style={{ fontSize: 38, letterSpacing: "-.05em", margin: "14px 0" }}>Enter the right workflow.</h2>
              <p className="e2p-note">Applications are handled privately for evaluation and follow-up.</p>
            </header>
            <PartnershipCards source="contact" />
          </div>
          <aside>
            <header style={{ marginBottom: 28 }}>
              <span className="e2p-section-index">02 / Direct</span>
              <h2 style={{ fontSize: 38, letterSpacing: "-.05em", margin: "14px 0" }}>Reach the team.</h2>
            </header>
            <div className="e2p-channel-list">
              {CHANNELS.map((channel) => (
                <a className="e2p-channel-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.label}>
                  <i><channel.icon size={18} /></i>
                  <span><small>{channel.label}</small><b>{channel.value}</b></span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Before you reach out</span>
            <h2>Common<br />questions.</h2>
            <p>Clear expectations make the first conversation more useful for everyone.</p>
          </header>
          <div className="e2p-faq">
            {FAQ.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
