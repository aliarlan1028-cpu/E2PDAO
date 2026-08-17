import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Handshake,
  Megaphone,
  Network,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "KOL Intelligence, Campaign Operations & Marketplace | E2PDAO",
  description:
    "E2P turns private KOL resources into evidence-backed matches, client-ready packages, live campaign operations and repeat creator partnerships.",
  alternates: { canonical: "/influence/" },
  openGraph: {
    title: "E2PDAO KOL Marketplace & Growth Operations",
    description: "Creator intelligence, package building, campaign execution and partnership growth in one operating system.",
    url: "/influence/",
  },
};

const CREATOR_BENEFITS = [
  { icon: Network, title: "Qualified project access", text: "See relevant opportunities matched by audience, market, language and content format." },
  { icon: Handshake, title: "Brand partnerships", text: "Receive clearer briefs, commercial terms, assets and accountable campaign coordination." },
  { icon: CalendarDays, title: "Event invitations", text: "Access AMAs, spaces, community events and selected ecosystem activations." },
  { icon: BadgeCheck, title: "Long-term positioning", text: "Turn verified delivery into repeat work, ambassador roles and stronger creator reputation." },
];

function KolWorkspace() {
  return (
    <div className="e2p-kol-cockpit" aria-label="KOL intelligence and matching workspace">
      <header><span>KOL GROWTH OS / PRIVATE RESOURCE LIBRARY</span><b>BRIEF ACTIVE</b></header>
      <div className="e2p-kol-briefline">
        <span><small>MARKET</small><b>APAC</b></span><span><small>VERTICAL</small><b>DEFI</b></span><span><small>FORMAT</small><b>X · TG · VIDEO</b></span><span><small>STAGE</small><b>PRE-TGE</b></span>
      </div>
      <div className="e2p-kol-screen">
        <aside className="e2p-kol-filters">
          <span>01 / BRIEF</span><span className="active">02 / MATCH</span><span>03 / PACKAGE</span><span>04 / DELIVER</span><span>05 / REVIEW</span>
        </aside>
        <div className="e2p-kol-results">
          <header><span>VERIFIED MATCHES</span><b>FIT / EVIDENCE</b></header>
          {[
            ["AC", "APAC DeFi Creator", "X · Telegram · EN/ZH", "91", "VERIFIED"],
            ["GT", "Global Trading Channel", "YouTube · English", "87", "STRONG"],
            ["LE", "Web3 Market Educator", "Video · Spanish", "84", "REVIEWED"],
          ].map(([avatar, name, detail, score, state], itemIndex) => (
            <article key={name} className={itemIndex === 0 ? "active" : ""}>
              <i>{avatar}</i><span><b>{name}</b><small>{detail}</small><em>{state}</em></span><strong>{score}<small>/100</small></strong>
            </article>
          ))}
        </div>
        <aside className="e2p-kol-proof">
          <header><span>MATCH EVIDENCE</span><b>91</b></header>
          <div className="e2p-kol-proof-ring"><strong>82%</strong><small>AUDIENCE<br />OVERLAP</small></div>
          <span><b>Channel & followers</b><em>VERIFIED</em></span><span><b>Content / audience fit</b><em>STRONG</em></span><span><b>Interaction risk</b><em>LOW</em></span><span><b>30D momentum</b><em>RISING</em></span>
        </aside>
      </div>
      <footer><span>3 MATCHES SHORTLISTED</span><b>BUILD CLIENT PACKAGE →</b></footer>
    </div>
  );
}

export default function InfluencePage() {
  return (
    <>
      <section className="e2p-kol-hero-shell e2p-grid-wash">
        <div className="e2p-container e2p-kol-hero">
          <div className="e2p-kol-hero-copy">
            <span className="e2p-eyebrow">E2P KOL Marketplace / Growth OS</span>
            <h1>Not a creator list.<br /><span className="e2p-highlight">A growth system.</span></h1>
            <p>
              Turn a project brief into evidence-backed KOL matches, a
              client-ready campaign package, coordinated delivery and a
              relationship that compounds after the first post.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.project("marketplace_hero")} className="e2p-btn e2p-btn-dark">Build a campaign <ArrowUpRight size={15} /></a>
              <a href={E2P_LINKS.kol("marketplace_hero")} className="e2p-btn">Join as a creator</a>
            </div>
          </div>
          <KolWorkspace />
        </div>
      </section>

      <section className="e2p-section-compact e2p-market-entry">
        <div className="e2p-container e2p-market-split">
          <article className="e2p-market-door">
            <span>01 / PROJECT SIDE</span><h2>I need<br />the right KOLs.</h2>
            <p>Give us market, stage, audience, deliverables and budget. We turn the request into verified matches, a commercial package and an execution track.</p>
            <a href={E2P_LINKS.project("marketplace_project_door")} className="e2p-btn e2p-btn-dark">Open a project brief <ArrowUpRight size={15} /></a>
          </article>
          <article className="e2p-market-door">
            <span>02 / CREATOR SIDE</span><h2>I need<br />better opportunities.</h2>
            <p>Build a verified profile and receive relevant projects, paid brand work, campaign resources, events and repeat partnership routes.</p>
            <a href={E2P_LINKS.kol("marketplace_kol_door")} className="e2p-btn e2p-btn-acid">Join the resource library <ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>

      <section id="creator-intelligence" className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head e2p-kol-section-head">
            <span className="e2p-section-index">01 / Creator intelligence</span>
            <h2>Evidence before<br /><em>outreach.</em></h2>
            <p>Public signals and private relationship knowledge sit together, so a match can be explained—not guessed from follower count.</p>
          </header>
          <div className="e2p-kol-intelligence">
            <div className="e2p-kol-profile">
              <header><span>CREATOR PROFILE / VERIFIED</span><b>FIT SCORE 91</b></header>
              <div className="e2p-kol-identity"><i>AC</i><span><small>APAC / DEFI / EDUCATION</small><h3>Audience fit,<br />not vanity reach.</h3><p>Channel verification, content momentum, audience overlap, interaction quality and commercial context create the matching evidence.</p></span></div>
              <div className="e2p-kol-signal-grid">
                <span><small>CHANNEL</small><b>VERIFIED</b><em>source linked</em></span><span><small>AUDIENCE FIT</small><b>82%</b><em>target overlap</em></span><span><small>RISK SIGNAL</small><b>LOW</b><em>interaction quality</em></span><span><small>MOMENTUM</small><b>+18%</b><em>30-day content</em></span>
              </div>
            </div>
            <aside className="e2p-kol-contentmap">
              <header><span>CONTENT MOMENTUM / 30D</span><b>RISING</b></header>
              <div className="e2p-kol-contentbars">{[42,55,48,68,61,74,66,82,76,91,84,96].map((height,index)=><i key={index} style={{height:`${height}%`}} />)}</div>
              <div className="e2p-kol-topics"><span><b>DeFi education</b><em>34%</em></span><span><b>Trading framework</b><em>28%</em></span><span><b>Project research</b><em>23%</em></span><span><b>Community / AMA</b><em>15%</em></span></div>
              <footer>PRICING & OUTREACH SUGGESTION <b>READY</b></footer>
            </aside>
          </div>
        </div>
      </section>

      <section id="package-builder" className="e2p-section e2p-kol-package-section">
        <div className="e2p-container">
          <header className="e2p-kol-package-head"><div><span className="e2p-section-index">02 / AI package builder</span><h2>From brief to<br />client-ready package.</h2></div><p>Build the commercial plan from the private KOL library—while keeping cost, contact data, margins and internal notes out of the client view.</p></header>
          <div className="e2p-kol-package-builder">
            <aside className="e2p-kol-package-brief">
              <header><span>CAMPAIGN BRIEF</span><b>STEP 01</b></header>
              {[["TARGET MARKET","APAC"],["VERTICAL","DEFI"],["BUDGET","USDT / SET"],["DELIVERABLES","X · TG · VIDEO"],["CREATOR COUNT","05"]].map(([label,value])=><span key={label}><small>{label}</small><b>{value}</b></span>)}
              <div><small>CAMPAIGN OBJECTIVE</small><p>Pre-TGE education, launch recognition and qualified community conversion.</p></div>
              <a href={E2P_LINKS.project("marketplace_ai_package")}>AI BUILD MATCHED PACKAGE <ArrowUpRight size={13} /></a>
            </aside>
            <div className="e2p-kol-package-output">
              <header><span>PACKAGE / APAC DEFI LAUNCH</span><div><b>INTERNAL</b><b>CLIENT PREVIEW</b></div></header>
              <div className="e2p-kol-package-list">
                {[
                  ["AC","APAC DeFi Creator","X thread · TG post","91","SELECTED"],
                  ["GT","Global Trading Channel","YouTube integration","87","SELECTED"],
                  ["LE","Market Educator","Short video · AMA","84","OPTION"],
                ].map(([avatar,name,deliverable,score,state],itemIndex)=><article key={name} className={itemIndex<2?"active":""}><i>{avatar}</i><span><b>{name}</b><small>{deliverable}</small></span><strong>{score}</strong><em>{state}</em></article>)}
              </div>
              <div className="e2p-kol-package-totals"><span><small>CREATORS</small><b>05</b></span><span><small>DELIVERABLES</small><b>12</b></span><span className="private"><small>INTERNAL COST</small><b>PRIVATE</b></span><span><small>CLIENT PACKAGE</small><b>READY</b></span></div>
              <footer><span>CLIENT VIEW REMOVES CONTACTS · COST · MARGIN · INTERNAL NOTES</span><b>SHARE SAFE</b></footer>
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink">
        <div className="e2p-container">
          <header className="e2p-section-head e2p-kol-section-head">
            <span className="e2p-section-index">03 / Partnership operations</span><h2>Every campaign lives<br />on one shared track.</h2><p>Briefs, pages, assets, publishing status, traffic and review stay connected to the creator relationship.</p>
          </header>
          <div className="e2p-kol-kanban">
            {[
              ["01 / TO LINK","Pending match",[["APAC Launch","3 candidates","EVIDENCE"],["Gaming Growth","5 candidates","REVIEW"]]],
              ["02 / TO PUBLISH","Campaign ready",[["DeFi Education","Brief approved","PAGE READY"],["Founder AMA","Assets synced","SCHEDULED"]]],
              ["03 / LIVE","In market",[["Regional Sprint","8 creators","TRACKING"],["Product Week","12 deliverables","LIVE"]]],
              ["04 / REVIEWED","Relationship memory",[["Mainnet Campaign","6.8% conversion","REPEAT"],["Creator Roundtable","24 leads","REVIEWED"]]],
            ].map(([label,title,cards],columnIndex)=><section key={String(label)} className={columnIndex===2?"active":""}><header><span>{String(label)}</span><b>{String(title)}</b></header><div>{(cards as string[][]).map(([name,detail,state])=><article key={name}><b>{name}</b><small>{detail}</small><em>{state}</em></article>)}</div><footer>{columnIndex===0?"MATCH":columnIndex===1?"PACKAGE":columnIndex===2?"DELIVER":"COMPOUND"}</footer></section>)}
          </div>
          <div className="e2p-kol-resultsbar"><span><small>VISITORS</small><b>TRACKED</b></span><span><small>CLICKS</small><b>ATTRIBUTED</b></span><span><small>SUBMISSIONS</small><b>CONNECTED</b></span><span><small>CONVERSION</small><b>REVIEWED</b></span></div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head"><span className="e2p-section-index">04 / Creator opportunity layer</span><h2>More than<br />one-off posts.</h2><p>Creators get relevant opportunities, clearer execution and a record that can compound into repeat partnerships.</p></header>
          <div className="e2p-benefit-grid e2p-kol-benefits">
            {CREATOR_BENEFITS.map((item)=><article key={item.title}><item.icon size={23}/><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Evidence-backed matching · Client-safe packages · Shared campaign track</span>
        <h2>Turn a match into<br />a lasting partnership.</h2>
        <div className="e2p-actions"><a href={E2P_LINKS.project("marketplace_final")} className="e2p-btn e2p-btn-dark">Build a KOL package <Megaphone size={14}/></a><a href={E2P_LINKS.kol("marketplace_final")} className="e2p-btn">Join as a creator <ArrowUpRight size={15}/></a></div>
      </section>
    </>
  );
}
