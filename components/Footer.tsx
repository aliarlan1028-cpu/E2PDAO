import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center px-4 sm:px-8 text-[10px] font-mono font-medium text-gray-500 uppercase tracking-widest shrink-0 justify-between relative z-10">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <img src="/e2p-icon-transparent.svg" alt="E2P DAO" className="w-6 h-6" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-web3-accent animate-pulse shadow-[0_0_5px_#00FF66]"></div>
          <span className="hidden sm:inline">System Synchronized</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/20"></div>
        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 font-heading">
          <span className="hover:text-white transition-colors cursor-default">OKX</span>
          <span className="hover:text-white transition-colors cursor-default">GATE.IO</span>
        </div>
      </div>

      <div className="hidden lg:flex gap-8 border-l border-r border-white/10 px-8 mx-8">
        <span>Nodes: <span className="text-white">Active</span></span>
        <span>Network: <span className="text-web3-accent">Optimal</span></span>
        <span>Engine: <span className="text-web3-purple">E2P-V2</span></span>
      </div>

      <div className="flex items-center gap-6">
        <a href="https://t.me/BitEsq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          Telegram
        </a>
        <a href="https://x.com/SinperX_250728" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          Twitter
        </a>
        <a href="mailto:aliarlan1028@gmail.com" className="text-gray-400 hover:text-white transition-colors">
          Email
        </a>
        <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
        <Link href="/risk-disclosure" className="text-gray-400 hover:text-white transition-colors">Risk</Link>
        <span className="hidden sm:inline opacity-50">© {new Date().getFullYear()} E2P DAO</span>
      </div>
      <p className="mt-5 w-full border-t border-white/5 pt-5 text-center normal-case tracking-normal text-gray-600 sm:mt-0 sm:hidden">Applications are privately processed through the E2PDAO Owner workspace in W3Claw. Never submit private keys, seed phrases or exchange passwords.</p>
    </footer>
  )
}
