const Mark = ({ className = "logo-mark" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><g transform="rotate(-30 12 12)"><circle cx="7.3" cy="3.2" r="1.45"/><rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8"/><rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8"/><circle cx="16.7" cy="20.8" r="1.45"/></g></svg>
);

const delay = (value: string) => ({ "--d": value } as React.CSSProperties);
const clientScript = `(()=>{const close=()=>{document.body.classList.remove('menu-open');const b=document.querySelector('.burger');if(b){b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu')}};const burger=document.querySelector('.burger');burger?.addEventListener('click',()=>{const open=!document.body.classList.contains('menu-open');document.body.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',String(open));burger.setAttribute('aria-label',open?'Close menu':'Open menu')});document.querySelectorAll('#site-nav a').forEach(a=>a.addEventListener('click',close));document.querySelector('.menu-backdrop')?.addEventListener('click',close);addEventListener('keydown',e=>{if(e.key==='Escape')close()});const mq=matchMedia('(min-width: 901px)');mq.addEventListener('change',e=>{if(e.matches)close()});const els=[...document.querySelectorAll('.appear,.hero-photo')];els.forEach(el=>el.addEventListener('animationend',()=>el.classList.add('is-in'),{once:true}));requestAnimationFrame(()=>requestAnimationFrame(()=>els.forEach(el=>{const a=el.getAnimations();if(!a.some(x=>x.playState==='running'||x.playState==='finished'))el.classList.add('is-in')})));})();`;

export default function Home() {
  return <>
    <div className="grain" aria-hidden="true"/>
    <div className="hero-photo" aria-hidden="true"><video autoPlay muted loop playsInline preload="auto"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4" type="video/mp4"/></video></div>
    <div className="page">
      <div className="menu-backdrop"/>
      <header className="header">
        <a className="logo appear appear--scale" style={delay("0.08s")} href="#top" aria-label="Vesper.ai"><Mark/><span>Vesper<span className="logo-suffix">.ai</span></span></a>
        <nav id="site-nav" aria-label="Primary">
          <a className="appear appear--scale" style={delay("0.16s")} href="#benefits">Benefits</a><a className="appear appear--soft" style={delay("0.28s")} href="#how-it-works">How It Works</a><a className="appear appear--scale" style={delay("0.40s")} href="#faqs">FAQs</a><a className="appear appear--soft" style={delay("0.52s")} href="#pricing">Pricing</a>
        </nav>
        <a className="btn btn-solid header-cta appear appear--scale" style={delay("0.34s")} href="#start">Start for Free</a>
        <button className="burger appear appear--scale" style={delay("0.34s")} aria-controls="site-nav" aria-expanded="false" aria-label="Open menu"><span/><span/><span/></button>
      </header>
      <main className="hero" id="top"><div className="hero-copy">
        <div className="badge appear appear--pop" style={delay("0.22s")}><svg className="badge-star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z"/></svg>Operational AI Infrastructure</div>
        <h1><span className="headline-line appear appear--mask" style={delay("0.42s")}>Train <em>AI agents</em> on your</span><span className="headline-line appear appear--mask" style={delay("0.62s")}>workflows in minutes.</span></h1>
        <p className="lede appear appear--soft" style={delay("0.82s")}>Deploy adaptive AI agents that learn, execute, and scale operational tasks across your business.</p>
        <div className="hero-actions"><a className="btn btn-solid appear appear--btn" style={delay("0.96s")} href="#start">Start for Free</a><a className="btn btn-ghost appear appear--side" style={delay("1.10s")} href="#demo">See it in action</a></div>
      </div></main>
      <footer className="stats">
        <div className="stat appear appear--stat" style={delay("1.12s")}><svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="pillL" x1="3" y1="2" x2="14" y2="22"><stop stopColor="#fff" stopOpacity=".38"/><stop offset=".62" stopColor="#3a3a3a"/></linearGradient><linearGradient id="pillR" x1="3" y1="2" x2="14" y2="22"><stop stopColor="#3a3a3a" stopOpacity=".38"/><stop offset=".62" stopColor="#fff"/></linearGradient></defs><rect x="3.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#pillL)"/><rect x="13.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#pillR)"/><rect x="9.2" y="10.9" width="5.6" height="2.2" rx="1.1" fill="#4a4a4a"/></svg><span>4.2M+ workflows automated</span></div>
        <div className="stat appear appear--stat" style={delay("1.28s")}><svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6.2" fill="#fff"/><path d="M12 7.1v7.4M8.15 12.35 12 16.2l3.85-3.85" fill="none" stroke="#111" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round"/></svg><span>92% reduction in manual operations</span></div>
        <div className="stat appear appear--stat" style={delay("1.44s")}><svg className="stat-icon-wide" viewBox="0 0 40 22" aria-hidden="true"><circle cx="10.2" cy="11" r="9.2" fill="#2b2b2b"/><path d="m6.8 9-1.6-3 3.2 1.5m5.2 1.5 1.6-3L12 7.5" fill="#f4f4f4"/><ellipse cx="10.2" cy="12.1" rx="4.15" ry="3.7" fill="#f4f4f4"/><circle cx="8.8" cy="11.5" r=".7"/><circle cx="11.6" cy="11.5" r=".7"/><circle cx="20.2" cy="11" r="9.2" fill="#fff"/><circle cx="17.4" cy="10" r="1.7"/><circle cx="23" cy="10" r="1.7"/><ellipse cx="20.2" cy="12.5" rx="1.1" ry=".8"/><path d="M17.8 14.2c1.5 1.3 3.3 1.3 4.8 0" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/><circle cx="30.2" cy="11" r="9.2" fill="#f26b1d"/><text x="30.2" y="15.1" fill="#fff" fontFamily="Inter" fontWeight="700" fontSize="12.5" textAnchor="middle">e</text></svg><span>180+ operational teams onboarded</span></div>
      </footer>
    </div>
    <script dangerouslySetInnerHTML={{__html:clientScript}}/>
  </>;
}
