import Link from "next/link";

const LINKS = [
  { name: "Contact", href: "/contact", external: false },
  { name: "About", href: "/about", external: false },
  { name: "Privacy", href: "/privacy", external: false },
  { name: "Risk", href: "/risk-disclosure", external: false },
  {
    name: "Telegram",
    href: "https://t.me/BitEsq",
    external: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/SinperX_250728",
    external: true,
  },
  { name: "Email", href: "mailto:aliarlan1028@gmail.com", external: true },
];

export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-white/10 bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/e2p-icon-transparent.svg"
              alt="E2P DAO"
              className="h-8 w-8"
            />
            <div>
              <div className="text-sm font-bold text-white">E2P DAO</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                Web3 Growth &amp; Listing Network
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-medium uppercase tracking-widest">
            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-web3-accent"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-web3-accent"
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 text-[11px] leading-5 text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            Applications are processed privately for evaluation and follow-up.
            Never submit private keys, seed phrases or exchange passwords —
            E2PDAO never needs them.
          </p>
          <span className="whitespace-nowrap">
            © {new Date().getFullYear()} E2P DAO
          </span>
        </div>
      </div>
    </footer>
  );
}
