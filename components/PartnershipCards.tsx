import { ArrowUpRight, Building2, Megaphone, Rocket, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

const CARDS = [
  { title: "Join as a KOL", text: "Share your channels, audience, markets, formats and partnership preferences.", icon: Megaphone, href: E2P_LINKS.kol },
  { title: "Become an Ambassador", text: "Bring local market knowledge, language, community and activation capabilities.", icon: Users, href: E2P_LINKS.ambassador },
  { title: "Start a Project Track", text: "Share your stage, product, target markets, listing goals and operating timeline.", icon: Rocket, href: E2P_LINKS.project },
  { title: "Become a Partner", text: "For exchanges, market makers, media, VCs, launchpads and service providers.", icon: Building2, href: E2P_LINKS.partner },
];

export default function PartnershipCards({ source = "partnership_cards" }: { source?: string }) {
  return (
    <div className="e2p-partnership-grid">
      {CARDS.map((card, index) => (
        <a key={card.title} href={card.href(source)} className="e2p-partnership-card">
          <span>0{index + 1}</span>
          <card.icon size={23} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <footer><span>Start here</span><ArrowUpRight size={13} /></footer>
        </a>
      ))}
    </div>
  );
}
