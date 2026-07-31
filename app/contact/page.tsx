import type { Metadata } from "next";
import { MessageCircle, Mail, Send, Twitter } from "lucide-react";
import PartnershipCards from "@/components/PartnershipCards";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "Contact E2PDAO | Talk to the team",
  description:
    "Reach E2PDAO — apply for cooperation, join the community, or contact the team directly on Telegram and email.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact E2PDAO",
    description: "Apply for cooperation or reach the team directly.",
    url: "/contact/",
  },
};

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "Community Telegram",
    value: "Join the E2P Club chat",
    href: E2P_LINKS.telegram,
    accent: "text-web3-accent",
  },
  {
    icon: Send,
    label: "Business Telegram",
    value: "@BitEsq",
    href: E2P_LINKS.businessTelegram,
    accent: "text-web3-purple",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aliarlan1028@gmail.com",
    href: "mailto:aliarlan1028@gmail.com",
    accent: "text-web3-accent",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "Follow updates",
    href: "https://x.com/SinperX_250728",
    accent: "text-web3-purple",
  },
];

const FAQ = [
  {
    q: "What happens after I apply?",
    a: "Your application is reviewed privately for readiness and fit. If there's a match, the team follows up to discuss next steps. Nothing is published as a public profile.",
  },
  {
    q: "Do you guarantee a listing or campaign results?",
    a: "No. Exchanges, launchpads, creators and market makers make their own decisions. We coordinate and prepare — we can't guarantee acceptance, terms or performance.",
  },
  {
    q: "What should I prepare?",
    a: "Your project stage, goals, target exchanges, timeline and any existing materials. Never share private keys, seed phrases or exchange passwords — we never need them.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Contact
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              Talk to <span className="text-web3-accent glow-text">E2PDAO</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
              Applying for cooperation is the fastest way in — pick your path
              below and we&apos;ll route you to the right process. Prefer to
              reach out directly? Use one of the channels on the right.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          {/* Apply */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Apply for cooperation
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
              Choose the option that matches you. Applications are handled
              privately for evaluation and follow-up.
            </p>
            <div className="mt-8">
              <PartnershipCards source="contact_page" />
            </div>
          </div>

          {/* Direct channels */}
          <div>
            <h2 className="text-2xl font-bold text-white">Direct channels</h2>
            <div className="mt-8 space-y-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-web3-card p-5 transition-colors hover:border-web3-accent/40"
                >
                  <c.icon className={`h-6 w-6 shrink-0 ${c.accent}`} />
                  <div>
                    <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-500">
                      {c.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-white">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
            Before you reach out
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Common questions
          </h2>
          <div className="mt-9 space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-white/10 bg-web3-card p-6"
              >
                <h3 className="text-lg font-bold text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
